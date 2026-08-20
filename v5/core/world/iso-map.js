/* ============================================================
 * 《问道修仙学院》v5 · core/world/iso-map.js
 * 等距地图生成算法（Isometric Map Generator）
 *
 * 用途：程序化生成 2D 等距地形网格（草地/山/水/城镇），
 *       叠加区域（zone）、NPC、事件、解锁门点等世界要素。
 *
 * 设计要点：
 *  - 纯函数式：给定 宽W×高H 和 随机种子，返回区块网格描述。
 *  - 分层噪声：用确定性 hash 伪随机（不依赖外部 CDN / 库），
 *    同一 seed 永远生成相同地形，保证可存档、可复现。
 *  - 瓦片类型：grass / water / mountain / sand / forest / town / portal
 *  - 输出结构纯数据，渲染交给 render 层，数据与视图解耦。
 * ============================================================ */

'use strict';

// ---------- 确定性伪随机数（mulberry32，可复现） ----------
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStr(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const TILE = {
  GRASS: 'grass',
  WATER: 'water',
  MOUNTAIN: 'mountain',
  SAND: 'sand',
  FOREST: 'forest',
  TOWN: 'town',
  PORTAL: 'portal',
};

// ---------- 瓦片视觉/通行性元数据 ----------
const TILE_META = {
  grass:    { walkable: true,  color: '#6fbf5e', height: 0.2, name: '草地' },
  water:    { walkable: false, color: '#3b8fd4', height: 0.0, name: '水' },
  mountain: { walkable: false, color: '#8b7f6b', height: 0.9, name: '山' },
  sand:     { walkable: true,  color: '#e3d193', height: 0.1, name: '沙地' },
  forest:   { walkable: true,  color: '#3f7d3a', height: 0.4, name: '林' },
  town:     { walkable: true,  color: '#c9904f', height: 0.3, name: '城镇' },
  portal:   { walkable: true,  color: '#a97bff', height: 0.5, name: '秘境' },
};

// ---------- 区域类型配置 ----------
const ZONE_TYPES = [
  { key: 'outskirt',  name: '山门郊野', min: 80, color: '#b9e0a5' },
  { key: 'forest',    name: '青木林',   min: 50, color: '#9fd08a' },
  { key: 'lake',      name: '镜心湖',   min: 50, color: '#9fd8f0' },
  { key: 'town',      name: '仙坊镇',   min: 90, color: '#e6d2a8' },
  { key: 'peak',      name: '凌云峰',   min: 85, color: '#d0c8b8' },
  { key: 'secret',    name: '秘境洞府', min: 95, color: '#c9a9ff' },
];

/**
 * 生成一张等距地形网格。
 * @param {object} opts
 * @param {number} opts.width  网格宽（列）
 * @param {number} opts.height 网格高（行）
 * @param {number} [opts.seed] 随机种子（默认由 Date.now 派生）
 * @returns {object} { width, height, seed, tiles: string[][], zones: object[],
 *                      portals: [{x,y,id}], spawn: {x,y} }
 */
function genMap(opts) {
  opts = opts || {};
  const width = Math.max(4, Math.floor(opts.width || 32));
  const height = Math.max(4, Math.floor(opts.height || 32));
  const seed = (typeof opts.seed === 'number') ? opts.seed : (Date.now() >>> 0);

  const rnd = mulberry32(seed);
  // 两张低频噪声：一张决定水/山（大陆形态），一张决定植被
  const n1 = (x, y) => Math.sin((x * 0.35) + seed % 97) * Math.cos((y * 0.35) + seed % 53) * 0.5 + 0.5;
  const n2 = (x, y) => Math.sin((x * 0.9) + seed % 31) * Math.sin((y * 0.9) + seed % 29) * 0.5 + 0.5;

  const tiles = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const land = n1(x, y);
      const veg = n2(x, y);
      let t = TILE.GRASS;
      if (land < 0.24) t = TILE.WATER;
      else if (land > 0.82) t = TILE.MOUNTAIN;
      else if (land > 0.68) t = TILE.SAND;
      else if (veg > 0.78) t = TILE.FOREST;
      else if (veg > 0.66 && land > 0.5) t = TILE.SAND;
      row.push(t);
    }
    tiles.push(row);
  }

  // 清理：中心附近强制草地（保证出生点可走）
  const cx = Math.floor(width / 2);
  const cy = Math.floor(height / 2);
  const ensure = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    if (tiles[y][x] === TILE.WATER || tiles[y][x] === TILE.MOUNTAIN) {
      tiles[y][x] = TILE.GRASS;
    }
  };
  for (let dx = -2; dx <= 2; dx++) for (let dy = -2; dy <= 2; dy++) ensure(cx + dx, cy + dy);

  // 生成区域（zone）：在网格上切分若干连通区域
  const zones = _genZones(width, height, seed);

  // 在区域中心放置传送点（秘境/城镇入口）
  const portals = [];
  zones.forEach(z => {
    if (z.type !== 'outskirt' && z.type !== 'secret') return;
    const px = z.cx, py = z.cy;
    if (tiles[py] && tiles[py][px] && TILE_META[tiles[py][px]].walkable) {
      tiles[py][px] = TILE.PORTAL;
      portals.push({ x: px, y: py, id: z.id, type: z.type });
    }
  });

  // 出生点：中心
  const spawn = { x: cx, y: cy };
  tiles[cy][cx] = TILE.GRASS;

  return {
    width,
    height,
    seed,
    tiles,
    zones,
    portals,
    spawn,
    TILE,
    TILE_META,
  };
}

/**
 * 在网格内划分若干区域（zone）。
 * 做法：按随机分块法把网格切成 zoneSize×zoneSize 的块，逐块打散并标类型，
 *       每个 zone 记录 id/type/name/cx/cy/color。
 */
function _genZones(width, height, seed) {
  const rnd = mulberry32(seed ^ 0x9E3779B9);
  const zoneSize = 8;
  const zones = [];
  const cols = Math.ceil(width / zoneSize);
  const rows = Math.ceil(height / zoneSize);

  let zid = 0;
  for (let gy = 0; gy < rows; gy++) {
    for (let gx = 0; gx < cols; gx++) {
      const roll = rnd();
      // 概率挑区域类型：中心块偏向山门郊野
      const isCenter = (gx === Math.floor(cols / 2) && gy === Math.floor(rows / 2));
      let type;
      if (isCenter) {
        type = 'outskirt';
      } else {
        const bucket = ZONE_TYPES.slice(1); // 去掉 outskirt 作为通用
        const pick = bucket[Math.floor(rnd() * bucket.length)];
        type = pick.key;
      }
      const meta = ZONE_TYPES.find(t => t.key === type) || ZONE_TYPES[0];
      // 区域几何中心（像素瓦片坐标）
      const cx = Math.floor((gx * zoneSize + zoneSize / 2));
      const cy = Math.floor((gy * zoneSize + zoneSize / 2));
      zones.push({
        id: `z${zid++}`,
        type,
        name: meta.name,
        color: meta.color,
        minLevel: meta.min,
        cx,
        cy,
        unlocked: isCenter, // 出生区默认解锁
        grid: { gx, gy },
      });
    }
  }
  return zones;
}

export { genMap, TILE, TILE_META, mulberry32, hashStr };