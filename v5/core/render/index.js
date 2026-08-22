/* ============================================================
 * 《问道修仙学院》v5 · core/render/index.js
 * 渲染管线（Render Pipeline）
 *
 * 职责：
 *  - 初始化 Canvas 画布（挂载到 container）
 *  - 相机（camera.set(x,y) 平滑跟随）
 *  - 多层视差背景层（远山 / 云 / 近景，不同速率营造纵深）
 *  - 场景切换转场（clip-path 扇形 / 推拉 / 淡入，玻璃拟态氛围）
 *  - 每帧 drawScene() 编排：背景 → 瓦片 → NPC/事件 → 玩家 → 粒子 → 飘字
 *
 * 挂载：installRender(boot) -> boot.render
 * 读取：boot.world（地图网格 / 瓦片元数据）、boot.state（玩家位置）
 * ============================================================ */
import { createCanvasEngine } from './canvas-engine.js';

export function installRender(boot) {
  'use strict';
  const log = (...a) => (boot.log ? boot.log('[v5/render]', ...a) : console.log('[v5/render]', ...a));

  let canvas = null;
  let engine = null;
  let container = null;
  let mounted = false;
  let raf = 0;
  let lastTime = 0;
  let width = 0;
  let height = 0;

  // 相机：tx/ty 为目标（网格像素坐标），x/y 为当前平滑位置
  const camera = { x: 0, y: 0, tx: 0, ty: 0, zoom: 1 };

  // 视差背景层：rate 越小越远（移动越慢）
  const layers = [
    { rate: 0.12, type: 'sky',    color: ['#141c30', '#24314f', '#3b5a8c'] },
    { rate: 0.25, type: 'fars',   color: ['#3a4a6e', '#55618c'] },
    { rate: 0.45, type: 'near',   color: ['#33442e', '#4a6242'] },
    { rate: 0.7,  type: 'ground', color: ['#2c3a28', '#3c5036'] },
  ];

  // 转场状态
  const transitionState = { active: false, type: 'none', t: 0, dir: 1 };

  // ---------- 初始化 ----------
  function init(c) {
    if (mounted) return api;
    container = c || document.body;
    // 复用容器内已有的 canvas（避免与 demo 的 #cv 双 canvas 冲突），否则新建
    canvas = null;
    if (typeof c === 'string' && document.querySelector) canvas = document.querySelector(c);
    else if (c && c.querySelector) canvas = c.querySelector('canvas');
    else if (c && c.tagName && c.tagName.toLowerCase() === 'canvas') canvas = c;
    if (!canvas) {
      canvas = document.createElement('canvas');
      container.appendChild(canvas);
    }
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.background = 'radial-gradient(circle at 50% 30%, #2a3b5c, #10131f)';
    engine = createCanvasEngine(canvas);
    mounted = true;
    _resize();
    window.addEventListener('resize', _resize);
    const tick = (t) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (t - lastTime) / 1000 || 0);
      lastTime = t;
      drawScene(dt);
    };
    raf = requestAnimationFrame(tick);
    log('渲染管线已初始化');
    boot.bus && boot.bus.emit('render:ready', {});
    return api;
  }

  function _resize() {
    if (!canvas || !engine) return;
    const dpr = window.devicePixelRatio || 1;
    width = container.clientWidth || window.innerWidth;
    height = container.clientHeight || window.innerHeight;
    engine.resize(width, height, dpr);
    // 相机初始居中玩家（等距坐标系：用 gridToScreen 换算，而非 gx*tileW）
    const st = boot.state.get();
    const p = st.player && st.player.position;
    if (p) {
      const pp = engine.gridToScreen(p.x, p.y);
      camera.tx = pp.x; camera.ty = pp.y;
    }
    camera.x = camera.tx; camera.y = camera.ty;
  }

  // ---------- 相机 ----------
  function setCamera(x, y, opts) {
    opts = opts || {};
    if (opts.absolute === true) {
      // 传入的已是等距像素坐标，直接采用
      camera.tx = x; camera.ty = y;
    } else if (engine) {
      // 传入的是网格坐标 → 用等距 gridToScreen 换算（与 _drawTiles/_drawEntities 同一坐标系）
      const pp = engine.gridToScreen(x, y);
      camera.tx = pp.x; camera.ty = pp.y;
    } else {
      // 引擎未就绪时回退为矩形像素近似
      camera.tx = x * 48; camera.ty = y * 24;
    }
    if (opts.snap) { camera.x = camera.tx; camera.y = camera.ty; }
    return api;
  }

  // ---------- 转场 ----------
  function transition(type) {
    type = type || 'fade';
    transitionState.active = true;
    transitionState.type = type;
    transitionState.t = 0;
    transitionState.dir = 1;
    return api;
  }

  // ---------- 主绘制 ----------
  // dt 兼容两种调用方：内部 RAF tick 传数字；main-loop 调 boot.render.draw(ctx) 传对象（取 ctx.dt）。
  function drawScene(dt) {
    if (!mounted || !engine) return;
    const st = boot.state.get();
    const world = boot.world || {};
    if (dt && typeof dt === 'object' && typeof dt.dt === 'number') dt = dt.dt;
    if (typeof dt !== 'number' || !isFinite(dt) || dt <= 0) dt = 0.016;

    // 相机平滑跟随（帧率无关缓动）；camera 因历史坏帧变成 NaN 时自愈
    const k = 1 - Math.pow(0.001, dt);
    if (!isFinite(camera.tx)) camera.tx = 0;
    if (!isFinite(camera.ty)) camera.ty = 0;
    if (!isFinite(camera.x)) camera.x = camera.tx;
    if (!isFinite(camera.y)) camera.y = camera.ty;
    camera.x += (camera.tx - camera.x) * k;
    camera.y += (camera.ty - camera.y) * k;

    engine.clear();
    _drawBackground();
    _drawTiles(st, world);
    _drawEntities(st, world);
    engine.updateAndDrawParticles();
    engine.updateAndDrawFloats();
    _drawTransition();
    return api;
  }

  // ---------- 视差背景 ----------
  function _drawBackground() {
    const now = perfNow();
    layers.forEach((L, i) => {
      const off = (camera.x * L.rate) % width;
      const grad = engine.ctx.createLinearGradient(0, 0, 0, height);
      L.color.forEach((c, j) => grad.addColorStop(j / (L.color.length - 1), c));
      engine.ctx.fillStyle = grad;
      engine.ctx.fillRect(0, 0, width, height);

      // 远端剪影（山脊/云朵）——用同心弧随机叠加
      if (L.type === 'fars' || L.type === 'near') {
        engine.ctx.save();
        engine.ctx.globalAlpha = 0.25 + i * 0.08;
        engine.ctx.fillStyle = L.color[0];
        const baseY = height * (L.type === 'fars' ? 0.65 : 0.85);
        for (let m = 0; m < 4; m++) {
          const ax = ((m * 137 + off) % (width + 200)) - 100 + Math.sin(now / 2000 + m) * 30;
          const ay = baseY + Math.sin(m * 1.3) * height * 0.05;
          const r = 60 + m * 26;
          engine.ctx.beginPath();
          engine.ctx.arc(ax, ay, r, Math.PI, Math.PI * 2);
          engine.ctx.fill();
        }
        engine.ctx.restore();
      }

      // 前景光点（灵气）
      if (L.type === 'ground') {
        engine.ctx.save();
        engine.ctx.globalAlpha = 0.5;
        for (let m = 0; m < 12; m++) {
          const ax = ((m * 173 + off * 0.7) % width + width) % width;
          const ay = (m * 89 + now * 0.01) % height;
          engine.ctx.fillStyle = '#eaffd0';
          engine.ctx.beginPath();
          engine.ctx.arc(ax, ay, 1.2, 0, Math.PI * 2);
          engine.ctx.fill();
        }
        engine.ctx.restore();
      }
    });
  }

  // ---------- 瓦片层 ----------
  function _drawTiles(st, world) {
    if (!world.map) return;
    const m = world.map;
    const w = engine.tileW;
    const h = engine.tileH;
    const halfW = (width / 2) / (w / 2);
    const halfH = (height / 2) / (h / 2);
    const x0 = Math.max(0, Math.floor(camera.x / w - halfW - 1));
    const x1 = Math.min(m.width - 1, Math.ceil(camera.x / w + halfW + 1));
    const y0 = Math.max(0, Math.floor(camera.y / h - halfH - 1));
    const y1 = Math.min(m.height - 1, Math.ceil(camera.y / h + halfH + 1));

    const ox = width / 2 - camera.x;
    const oy = height / 2 - camera.y + h;

    for (let gy = y0; gy <= y1; gy++) {
      for (let gx = x0; gx <= x1; gx++) {
        const t = m.tiles[gy][gx];
        const meta = (m.TILE_META || {})[t];
        if (!meta) continue;
        engine.drawTile(gx, gy, ox, oy, meta, t === 'portal' ? '#c9a9ff' : null);
      }
    }
  }

  // ---------- 实体层（NPC / 事件 / 玩家） ----------
  function _drawEntities(st, world) {
    const w = engine.tileW;
    const h = engine.tileH;
    const ox = width / 2 - camera.x;
    const oy = height / 2 - camera.y + h;
    const now = perfNow();

    (world.npcs || []).forEach((n, i) => {
      const p = engine.gridToScreen(n.x, n.y);
      engine.drawSprite(p.x + ox, p.y + oy, { color: '#3d8b8b', icon: n.icon, bob: Math.sin(now / 320 + i) * 2 });
    });
    (world.events || []).forEach((e, i) => {
      const p = engine.gridToScreen(e.x, e.y);
      engine.drawSprite(p.x + ox, p.y + oy, { color: '#c9a94a', icon: e.icon, bob: Math.sin(now / 260 + i * 2) * 2 });
    });
    const pos = st.player && st.player.position;
    if (pos) {
      const p = engine.gridToScreen(pos.x, pos.y);
      engine.drawSprite(p.x + ox, p.y + oy, { color: '#e05a5a', icon: '🧑', bob: Math.sin(now / 320) * 2 });
    }
  }

  // ---------- 转场绘制 ----------
  function _drawTransition() {
    const ts = transitionState;
    if (!ts.active) return;
    const progress = ts.dir === 1 ? ts.t : 1 - ts.t;
    const g = engine.ctx;
    g.save();
    g.globalAlpha = 1;
    if (ts.type === 'fade' || ts.type === 'none') {
      g.globalAlpha = progress * 0.6;
      g.fillStyle = '#0b0e18';
      g.fillRect(0, 0, width, height);
    } else if (ts.type === 'fan') {
      const a = (1 - progress) * Math.PI * 2;
      g.beginPath();
      g.moveTo(width / 2, height / 2);
      g.arc(width / 2, height / 2, Math.max(width, height), -Math.PI / 2, -Math.PI / 2 + a);
      g.closePath();
      g.clip();
      g.fillStyle = '#0b0e18';
      g.fillRect(0, 0, width, height);
    } else if (ts.type === 'push') {
      const ph = height * progress;
      g.fillStyle = '#0b0e18';
      g.fillRect(0, 0, width, ph);
      g.fillRect(0, height - ph, width, ph);
    }
    g.restore();

    ts.t += 0.02;
    if (ts.t >= 1) {
      if (ts.dir === 1) { ts.dir = -1; ts.t = 0; }
      else ts.active = false;
    }
  }

  function perfNow() { return typeof performance !== 'undefined' ? performance.now() : Date.now(); }

  const api = {
    init,
    drawScene,
    // 主循环 main-loop.js 每帧调用 boot.render.draw；demo 装配也以 draw 判断是否 stub。
    // 此前只暴露 drawScene 导致 boot.render.draw 为 undefined，demo 误判 stub 而接管画布覆盖世界地图。
    draw: drawScene,
    camera: {
      set: setCamera,
      get: () => ({ x: camera.x, y: camera.y, tx: camera.tx, ty: camera.ty }),
    },
    transition,
    get engine() { return engine; },
  };

  boot.render = api;
  boot.register('render', api);
  return api;
}