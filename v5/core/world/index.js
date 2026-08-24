/* ============================================================
 * 《问道修仙学院》v5 · core/world/index.js
 * 世界生成与漫游核心模块
 *
 * 职责：
 *  - 程序化生成区块网格（基于 iso-map 算法）
 *  - 管理区域（zone）、玩家位置、NPC、事件、解锁进度
 *  - 提供接口：genMap / moveTo / getTile / enterScene / unlockZone
 *
 * 挂载：installWorld(boot) -> boot.world
 * 与状态：读 state.get() 的 world / player / scene，写 state.set()
 * 与总线：发出 'player:move' / 'scene:enter' 事件
 * ============================================================ */
import { genMap as genIsoMap, TILE, TILE_META, mulberry32 } from './iso-map.js';

export function installWorld(boot) {
  'use strict';
  const log = (...a) => (boot.log ? boot.log('[v5/world]', ...a) : console.log('[v5/world]', ...a));

  let map = null;          // 当前地图网格（iso-map 输出）
  let npcs = [];           // 当前地图 NPC 列表
  let events = [];         // 当前地图事件列表

  // 连续移动节流计时器（秒）：在文件底部 update 旁声明，避免与下方重复 let 声明
  let moveTimer = 0;

  // ---------- 初始化世界（首次进入时由 genMap 触发） ----------
  function _ensureWorldState() {
    const st = boot.state.get();
    if (!st.world) st.world = { zones: {}, unlocked: [], time: 'day', weather: '' };
    if (!st.player) st.player = { position: { x: 0, y: 0, zone: null } };
    return st;
  }

  /**
   * 生成（或重新生成）世界地图。
   * @param {object} [opts] { width, height, seed, regenerate }
   * @returns {object} 地图描述 { width, height, zones, portals, spawn, tiles }
   */
  function genMap(opts) {
    opts = opts || {};
    const st = _ensureWorldState();
    const meta = genIsoMap(opts);
    map = meta;
    npcs = _genNpcs(meta);
    events = _genEvents(meta);

    // 出生点：默认取地图 spawn，或保留已有位置（除非显式 regenerate）
    const alreadyPlaced = st.player && st.player._placed === true;
    const keepPos = !opts.regenerate && alreadyPlaced;
    if (!keepPos) {
      const sp = meta.spawn;
      const zone = _zoneAt(meta, sp.x, sp.y);
      st.player.position = { x: sp.x, y: sp.y, zone: zone ? zone.id : null };
      st.player._placed = true;
    }

    // 同步已解锁区域（把出生区/outskirt 记为已解锁）
    const unlockedSet = new Set(st.world.unlocked || []);
    meta.zones.forEach(z => { if (z.unlocked) unlockedSet.add(z.id); });
    st.world.unlocked = Array.from(unlockedSet);
    st.world.zones = {};
    meta.zones.forEach(z => { st.world.zones[z.id] = { ...z, visited: !!keepPos && st.player.position.zone === z.id }; });

    boot.state.set({ world: st.world, player: st.player });
    log('世界已生成', `${meta.width}x${meta.height}`, '区域', meta.zones.length, 'seed', meta.seed);
    boot.bus && boot.bus.emit('scene:enter', { id: st.player.position.zone });
    return meta;
  }

  /**
   * 玩家移动到 (x,y)。
   * @param {number} x 目标瓦片列
   * @param {number} y 目标瓦片行
   * @returns {{ok:boolean, tile?:object, msg?:string}}
   */
  function moveTo(x, y) {
    const st = _ensureWorldState();
    const pos = st.player.position;
    const tx = Math.round(x), ty = Math.round(y);
    if (!map || tx < 0 || ty < 0 || tx >= map.width || ty >= map.height) {
      return { ok: false, msg: '越界，无法前进' };
    }
    const t = map.tiles[ty][tx];
    const meta = TILE_META[t];
    if (!meta || !meta.walkable) {
      return { ok: false, tile: { type: t, name: meta ? meta.name : t }, msg: meta ? `被「${meta.name}」挡住` : '无法通行' };
    }
    pos.x = tx; pos.y = ty;
    const zone = _zoneAt(map, tx, ty);
    pos.zone = zone ? zone.id : null;
    // 标记该区域已访问并解锁
    if (zone) {
      if (!st.world.unlocked.includes(zone.id)) st.world.unlocked.push(zone.id);
      if (st.world.zones[zone.id]) st.world.zones[zone.id].visited = true;
    }
    boot.state.set({ world: st.world, player: st.player });
    boot.bus && boot.bus.emit('player:move', { x: tx, y: ty });
    return { ok: true, tile: { type: t, name: meta.name, x: tx, y: ty, zone: pos.zone } };
  }

  /**
   * 查询某瓦片信息。
   * @param {number} [x] 缺省时返回玩家当前位置瓦片
   * @param {number} [y]
   * @returns {object|null} { type, name, walkable, x, y, zone, npc?, event? }
   */
  function getTile(x, y) {
    if (!map) return null;
    const st = boot.state.get();
    let tx = x, ty = y;
    if (tx === undefined || ty === undefined) {
      const p = st.player && st.player.position;
      if (!p) return null;
      tx = p.x; ty = p.y;
    }
    tx = Math.round(tx); ty = Math.round(ty);
    if (tx < 0 || ty < 0 || tx >= map.width || ty >= map.height) return null;
    const t = map.tiles[ty][tx];
    const meta = TILE_META[t];
    const zone = _zoneAt(map, tx, ty);
    const npc = npcs.find(n => n.x === tx && n.y === ty) || null;
    const event = events.find(e => e.x === tx && e.y === ty) || null;
    return {
      type: t,
      name: meta ? meta.name : t,
      walkable: meta ? meta.walkable : false,
      x: tx, y: ty,
      zone: zone ? zone.id : null,
      npc, event,
    };
  }

  /**
   * 进入场景（切换区域）。
   * @param {string} id 区域 id 或场景 id
   * @returns {object} { ok, scene }
   */
  function enterScene(id) {
    const st = _ensureWorldState();
    if (id === null || id === undefined) {
      const cur = st.player && st.player.position && st.player.position.zone;
      boot.state.set({ scene: cur });
      boot.bus && boot.bus.emit('scene:enter', { id: cur });
      return { ok: true, scene: cur };
    }
    // 区域存在才允许进入
    const zone = st.world.zones[id];
    if (!zone) {
      boot.state.set({ scene: id });
      boot.bus && boot.bus.emit('scene:enter', { id });
      return { ok: true, scene: id };
    }
    if (!st.world.unlocked.includes(id)) {
      return { ok: false, scene: id, msg: `区域「${zone.name}」尚未解锁` };
    }
    st.player.position.zone = id;
    st.world.zones[id].visited = true;
    if (zone.cx !== undefined) {
      st.player.position.x = zone.cx;
      st.player.position.y = zone.cy;
    }
    boot.state.set({ scene: id, world: st.world, player: st.player });
    boot.bus && boot.bus.emit('scene:enter', { id });
    return { ok: true, scene: id };
  }

  /**
   * 解锁一个区域。
   * @param {string} id 区域 id
   * @returns {{ok:boolean, zone?:object, msg?:string}}
   */
  function unlockZone(id) {
    const st = _ensureWorldState();
    const zone = st.world.zones[id];
    if (!zone) return { ok: false, msg: '无此区域' };
    if (st.world.unlocked.includes(id)) return { ok: false, msg: '已解锁' };
    st.world.unlocked.push(id);
    st.world.zones[id].unlocked = true;
    boot.state.set({ world: st.world });
    log('区域已解锁', zone.name);
    return { ok: true, zone };
  }

  // ---------- 内部：确定某瓦片所属区域 ----------
  function _zoneAt(map, x, y) {
    if (!map) return null;
    for (let i = 0; i < map.zones.length; i++) {
      const z = map.zones[i];
      if (x >= z.grid.gx * 8 && x < (z.grid.gx + 1) * 8 &&
          y >= z.grid.gy * 8 && y < (z.grid.gy + 1) * 8) {
        return z;
      }
    }
    return null;
  }

  // ---------- 内部：在可走瓦片上撒 NPC ----------
  function _genNpcs(map) {
    const pool = [
      { name: '张道人', role: '引路人', icon: '🧙' },
      { name: '林师妹', role: '同门', icon: '👧' },
      { name: '老药农', role: '药师', icon: '👴' },
      { name: '钱掌柜', role: '坊市', icon: '🧔' },
      { name: '守山童', role: '哨卫', icon: '👦' },
    ];
    const list = [];
    const placed = new Set();
    const rnd = mulberry32(map.seed ^ 0xABCDEF);
    const count = Math.min(5, Math.floor(map.zones.length * 0.4) + 1);
    let i = 0;
    while (i < count) {
      const x = Math.floor(rnd() * map.width);
      const y = Math.floor(rnd() * map.height);
      if (placed.has(x + ',' + y)) continue;
      const t = map.tiles[y][x];
      if (!TILE_META[t] || !TILE_META[t].walkable || t === TILE.PORTAL) continue;
      if (x === map.spawn.x && y === map.spawn.y) continue;
      const npc = pool[i % pool.length];
      list.push({ x, y, name: npc.name, role: npc.role, icon: npc.icon, id: 'npc' + i });
      placed.add(x + ',' + y);
      i++;
    }
    return list;
  }

  // ---------- 内部：生成随机事件点 ----------
  function _genEvents(map) {
    const list = [];
    const rnd = mulberry32(map.seed ^ 0x13579BDF);
    const pool = [
      { type: 'treasure', name: '灵石宝箱', icon: '💎' },
      { type: 'monster', name: '游荡妖兽', icon: '🐉' },
      { type: 'insight', name: '顿悟石碑', icon: '🧠' },
      { type: 'herb', name: '灵药丛', icon: '🌿' },
    ];
    const count = Math.min(6, Math.floor(map.zones.length * 0.5) + 1);
    let i = 0;
    while (i < count) {
      const x = Math.floor(rnd() * map.width);
      const y = Math.floor(rnd() * map.height);
      const t = map.tiles[y][x];
      if (!TILE_META[t] || !TILE_META[t].walkable) continue;
      if (t === TILE.PORTAL) continue;
      list.push({ x, y, ...pool[i % pool.length], id: 'evt' + i });
      i++;
    }
    return list;
  }

  // ---------- 战斗房间（M1 实时演武用）：纯 grass 矩形 + 四周 mountain 墙 ----------
  // 不复用分形 genMap（避免水/山等不可走瓦片干扰战斗判定），独立小房间。
  function spawnBattleRoom(encounter) {
    const w = 16, h = 10;
    const tiles = [];
    for (let y = 0; y < h; y++) {
      const row = [];
      for (let x = 0; x < w; x++) {
        // 四周一圈墙，内部全草
        const isWall = x === 0 || y === 0 || x === w - 1 || y === h - 1;
        row.push(isWall ? TILE.MOUNTAIN : TILE.GRASS);
      }
      tiles.push(row);
    }
    return {
      room: true,
      width: w, height: h,
      tiles,
      playerSpawn: { x: Math.floor(w / 2), y: Math.floor(h / 2) },  // 玩家居中，给"被撞下弹"留出下方空间
      monsterSpawn: { x: Math.floor(w / 2), y: 2 },     // 怪靠上
      TILE_META
    };
  }

  // ---------- 主循环每帧：消费 input 方向，驱动玩家移动 ----------
  function update(ctx) {
    // 战斗激活时世界不驱动漫游移动（移动权交给 battle.update）
    if (boot.battle && boot.battle.inFight && boot.battle.inFight()) return;
    const inp = boot.input;
    if (!inp) return;
    const dt = (ctx && typeof ctx.dt === 'number') ? ctx.dt : 0.016;
    moveTimer -= dt;
    if (moveTimer > 0) return;   // 节流：按住持续移动
    let dx = 0, dy = 0;
    if (inp.isDown('up')) dy = -1;
    else if (inp.isDown('down')) dy = 1;
    else if (inp.isDown('left')) dx = -1;
    else if (inp.isDown('right')) dx = 1;
    if (dx === 0 && dy === 0) return;
    const st = boot.state.get();
    const p = st.player && st.player.position;
    if (!p) return;
    const r = moveTo(p.x + dx, p.y + dy);
    // 移动成功后平滑跟随相机（camera.set 接受网格坐标，内部 gridToScreen）
    if (r && r.ok && boot.render && boot.render.camera) {
      boot.render.camera.set(p.x, p.y);
    }
    moveTimer = 0.13;
  }

  // 暴露地图/NPC/事件（render 通过 boot.world.map 等读取；map 是模块闭包私有，故用 getter 暴露）
  boot.world = {
    genMap, moveTo, getTile, enterScene, unlockZone, update, spawnBattleRoom,
    get map() { return map; },
    get npcs() { return npcs; },
    get events() { return events; },
  };
  boot.register('world', boot.world);
  return boot.world;
}
