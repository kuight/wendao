/* ============================================================
 * 《问道修仙学院》v5 · core/render/canvas-engine.js
 * Canvas 2D 绘制助手（Canvas Engine）
 *
 * 职责：
 *  - 瓦片（iso 菱形）绘制
 *  - 角色绘制（精灵 + 阴影 + 简单待机浮动）
 *  - 粒子层绘制（灵气、闪光、飘字）
 *
 * 纯绘制，无状态逻辑：所有状态由 render 管线传入。
 * ============================================================ */

'use strict';

/**
 * 创建一个 Canvas 绘制引擎。
 * @param {HTMLCanvasElement} canvas
 * @param {object} [opts] { tileW, tileH }
 * @returns {object} 绘制助手 API
 */
export function createCanvasEngine(canvas, opts) {
  opts = opts || {};
  const TILE_W = opts.tileW || 48;      // 等距菱形宽
  const TILE_H = opts.tileH || 24;      // 等距菱形高
  const ctx = canvas.getContext('2d');
  let W = canvas.width;
  let H = canvas.height;
  let particles = [];   // 粒子数组
  let floats = [];      // 飘字数组

  const api = {};

  // 暴露底层 context（供 render 管线直接绘制背景/转场等）
  api.ctx = ctx;

  // ---------- 尺寸 ----------
  api.resize = function (w, h, dpr) {
    W = w; H = h;
    const r = dpr || 1;
    canvas.width = Math.floor(w * r);
    canvas.height = Math.floor(h * r);
    ctx.setTransform(r, 0, 0, r, 0, 0);
    return api;
  };

  // ---------- 清屏 ----------
  api.clear = function (color) {
    ctx.save();
    ctx.clearRect(0, 0, W, H);
    if (color) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, W, H);
    }
    ctx.restore();
    return api;
  };

  // ---------- 等距坐标换算 ----------
  api.tileW = TILE_W;
  api.tileH = TILE_H;

  // 网格 (gx,gy) -> 屏幕 (sx,sy)，等距菱形中心
  api.gridToScreen = function (gx, gy) {
    return {
      x: (gx - gy) * (TILE_W / 2),
      y: (gx + gy) * (TILE_H / 2),
    };
  };

  // ---------- 绘制单个等距菱形瓦片 ----------
  /**
   * @param {number} gx 网格列
   * @param {number} gy 网格行
   * @param {number} ox 相机偏移 x（屏幕）
   * @param {number} oy 相机偏移 y
   * @param {object} t 瓦片元数据 { color, height }
   * @param {string} [edge] 描边色（可选）
   */
  api.drawTile = function (gx, gy, ox, oy, t, edge) {
    t = t || {};
    const p = api.gridToScreen(gx, gy);
    const cx = p.x + ox;
    const cy = p.y + oy;
    const hw = TILE_W / 2;
    const hh = TILE_H / 2;

    // 菱形四顶点
    const path = () => {
      ctx.beginPath();
      ctx.moveTo(cx, cy - hh);
      ctx.lineTo(cx + hw, cy);
      ctx.lineTo(cx, cy + hh);
      ctx.lineTo(cx - hw, cy);
      ctx.closePath();
    };

    // 顶面（受高度影响上移）
    const lift = (t.height || 0) * hh;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy - hh - lift);
    ctx.lineTo(cx + hw, cy - lift);
    ctx.lineTo(cx, cy + hh - lift);
    ctx.lineTo(cx - hw, cy - lift);
    ctx.closePath();
    ctx.fillStyle = t.color || '#6fbf5e';
    ctx.fill();
    if (edge) {
      ctx.strokeStyle = edge;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
    return api;
  };

  // ---------- 绘制角色（精灵 + 阴影 + 待机浮动） ----------
  /**
   * @param {number} sx 屏幕 x（脚底中心）
   * @param {number} sy 屏幕 y（脚底地面）
   * @param {object} o { color, icon?, size?, bob }
   *   color 角色主色（圆点身体）
   *   icon  表情 emoji（可选，叠加在头顶）
   *   bob   浮动幅度（像素）
   */
  api.drawSprite = function (sx, sy, o) {
    o = o || {};
    const size = o.size || 12;
    const bob = o.bob || 0;
    const bodyTop = sy - size * 2 - bob;

    // 地面阴影
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(sx, sy, size * 0.9, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 身体（圆头）
    ctx.save();
    ctx.fillStyle = o.color || '#e05a5a';
    ctx.beginPath();
    ctx.arc(sx, bodyTop - size, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 身体（方袍）
    ctx.save();
    ctx.fillStyle = o.color || '#e05a5a';
    ctx.beginPath();
    ctx.roundRect
      ? ctx.roundRect(sx - size * 0.8, bodyTop - size * 0.6, size * 1.6, size * 1.8, size * 0.4)
      : ctx.rect(sx - size * 0.8, bodyTop - size * 0.6, size * 1.6, size * 1.8);
    ctx.fill();
    ctx.restore();

    // 头顶 emoji（若有）
    if (o.icon) {
      ctx.save();
      ctx.font = Math.floor(size * 1.2) + 'px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(o.icon, sx, bodyTop - size * 1.9);
      ctx.restore();
    }
    return api;
  };

  // ---------- 粒子 ----------
  /**
   * 生成一波粒子。
   * @param {number} sx 屏幕 x
   * @param {number} sy 屏幕 y
   * @param {object} o { count, color, speed, life, spread }
   */
  api.emitParticles = function (sx, sy, o) {
    o = o || {};
    const count = o.count || 12;
    const color = o.color || '#fff7c0';
    const speed = o.speed || 1.2;
    const life = o.life || 40;
    const spread = o.spread || Math.PI * 2;
    const base = o.angle || -Math.PI / 2;
    for (let i = 0; i < count; i++) {
      const a = base + (Math.random() - 0.5) * spread;
      const v = speed * (0.5 + Math.random());
      particles.push({
        x: sx, y: sy,
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v - 0.5,
        life, max: life,
        size: 1 + Math.random() * 2.5,
        color,
        alpha: 1,
      });
    }
    return api;
  };

  // 推进并绘制所有粒子
  api.updateAndDrawParticles = function () {
    ctx.save();
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;           // 重力/回落
      p.life--;
      p.alpha = Math.max(0, p.life / p.max);
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    return api;
  };

  // ---------- 飘字 ----------
  /**
   * 生成一条上飘文字（判定反馈）。
   * @param {number} sx 屏幕 x
   * @param {number} sy 屏幕 y
   * @param {string} str 文字
   * @param {string} color
   */
  api.floatText = function (sx, sy, str, color) {
    floats.push({ x: sx, y: sy, str, color: color || '#ffd54a', life: 60, max: 60 });
    return api;
  };

  api.updateAndDrawFloats = function () {
    ctx.save();
    ctx.textAlign = 'center';
    for (let i = floats.length - 1; i >= 0; i--) {
      const f = floats[i];
      f.y -= 0.8;
      f.life--;
      const a = Math.max(0, f.life / f.max);
      ctx.globalAlpha = a;
      ctx.font = 'bold 15px sans-serif';
      ctx.strokeStyle = 'rgba(0,0,0,0.5)';
      ctx.lineWidth = 3;
      ctx.strokeText(f.str, f.x, f.y);
      ctx.fillStyle = f.color;
      ctx.fillText(f.str, f.x, f.y);
      if (f.life <= 0) floats.splice(i, 1);
    }
    ctx.restore();
    return api;
  };

  api.getParticleCount = () => particles.length;
  api.getFloatCount = () => floats.length;

  return api;
}