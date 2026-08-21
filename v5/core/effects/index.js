/* ============================================================
 * 《问道修仙学院》v5 · core/effects/index.js
 * 视觉特效系统：粒子爆发、屏幕震动、闪白、combo 连击、飘字
 *
 * 挂载接口（契约 INTERFACES.md）：
 *   boot.effects.burst(x,y,type)  粒子爆发
 *   boot.effects.shake()          屏幕震动
 *   boot.effects.flash()          闪白
 *   boot.effects.combo(n)         连击显示（音游式）
 *   boot.effects.floatText(str,color) 飘字
 *   boot.effects.update(ctx)      主循环每帧调用（combo 衰减等）
 *
 * 底层图元复用 core/effects/feedback.js（纯 DOM/CSS）。
 * ============================================================ */
// 先执行 feedback.js 的 IIFE，确保 globalThis.BattleFeedback 已挂载
import './feedback.js';

export function installEffects(boot) {
  'use strict';
  // 引入音游式反馈图元
  const FB = (typeof globalThis !== 'undefined' ? globalThis : this).BattleFeedback;

  // ---- 注入 CSS（仅一次） ----
  injectCSS();

  // ---- combo 状态 ----
  const comboState = { count: 0, best: 0, last: 0 };   // last 为上一次连击时间戳(ms)

  // 常用粒子色板
  const HIT_COLORS   = ['#FF6B6B', '#FFD700', '#FF9F43', '#FFF'];   // 命中(红/金)
  const CRIT_COLORS  = ['#FFD700', '#FFF', '#FF6B6B', '#7CFC00'];   // 暴击(金/白)
  const CORRECT_COLORS = ['#7CFC00', '#4FC3F7', '#FFD700'];          // 答对(绿/青/金)
  const WRONG_COLORS   = ['#FF6B6B', '#FF9F43', '#FF4D6D'];          // 答错(红)

  /* ================================================================
   * 核心反馈接口
   * ================================================================ */

  // 粒子爆发（type: hit / crit / correct / wrong / heal / break）
  function burst(x, y, type) {
    type = type || 'hit';
    const opt = { x, y };
    switch (type) {
      case 'crit':
        Object.assign(opt, { count: 26, colors: CRIT_COLORS, size: 8, speed: 3, dur: 620 });
        FB.judgeRing({ x, y, color: '#FFD700', r1: 90, dur: 300 });
        break;
      case 'correct':
        Object.assign(opt, { count: 22, colors: CORRECT_COLORS, size: 7, speed: 2.6, dur: 560 });
        FB.judgeRing({ x, y, color: '#7CFC00', r1: 80, dur: 280 });
        break;
      case 'wrong':
        Object.assign(opt, { count: 18, colors: WRONG_COLORS, size: 6, speed: 2.2, dur: 500 });
        FB.judgeRing({ x, y, color: '#FF4D6D', r1: 70, dur: 240 });
        break;
      case 'heal':
        Object.assign(opt, { count: 14, colors: ['#7CFC00', '#4FC3F7', '#FFF'], size: 7, speed: 1.6, dur: 640 });
        break;
      case 'break':
        Object.assign(opt, { count: 30, colors: ['#FFF', '#FFD700', '#7CFC00'], size: 5, speed: 3.4, dur: 700 });
        FB.judgeRing({ x, y, color: '#FFD700', r1: 110, dur: 340 });
        break;
      default: // hit
        Object.assign(opt, { count: 16, colors: HIT_COLORS, size: 6, speed: 2, dur: 520 });
        FB.judgeRing({ x, y, color: '#FF6B6B', r1: 70, dur: 260 });
    }
    return FB.particles(opt);
  }

  // 屏幕震动（强度可选）
  function shake(intensity) {
    return FB.shake({ intensity: intensity || 10, dur: 200 });
  }

  // 闪白
  function flash() {
    return FB.flash({ color: 'rgba(255,255,255,0.6)', dur: 140 });
  }

  // combo 连击（音游式：计数 + 规模递增光效）
  function combo(n) {
    comboState.count = n;
    comboState.last = performance.now();
    if (n > comboState.best) comboState.best = n;
    const cx = innerWidth / 2, cy = innerHeight * 0.3;
    const c = (n >= 10 ? '#FFD700' : n >= 5 ? '#FF9F43' : '#7CFC00');
    // 飘字 combo
    FB.floatText({
      str: n + (n >= 10 ? ' COMBO!!' : n >= 5 ? ' COMBO!' : ' COMBO'), x: cx, y: cy,
      color: c, size: Math.min(18 + n * 1.5, 44), up: 60, dur: 600
    });
    // 连击越多粒子越华丽
    burst(cx, cy + 30, n >= 10 ? 'crit' : 'correct');
    return { count: n, best: comboState.best };
  }

  // 飘字飘分（判定等级彩色飘字）
  function floatText(str, color, opts) {
    opts = opts || {};
    return FB.floatText({
      str,
      color: color || '#FFF',
      x: opts.x === undefined ? innerWidth / 2 : opts.x,
      y: opts.y === undefined ? innerHeight / 2 : opts.y,
      size: opts.size, up: opts.up, dur: opts.dur
    });
  }

  // 音游式一体反馈：答对（hit stop + 判定环 + 粒子 + 闪白 + 震动）
  function answerFeedback(correct, { comboCount, onPos, onTarget } = {}) {
    onPos = onPos || { x: innerWidth / 2, y: innerHeight / 2 };
    const tgt = onTarget || onPos;
    if (correct) {
      FB.hitStop({ ms: 60 });
      burst(tgt.x, tgt.y, 'correct');
      if (comboCount >= 3) flash();
      if (comboCount >= 8) shake(8);
      floatText('大吉 · 圆融', '#7CFC00', { x: onPos.x, y: onPos.y, size: 26, up: 56 });
    } else {
      FB.hitStop({ ms: 110 });
      burst(tgt.x, tgt.y, 'wrong');
      shake(14);
      flash();
      floatText('凶 · 顿悟', '#FF4D6D', { x: onPos.x, y: onPos.y, size: 26, up: 56 });
    }
  }

  // ---- 每帧更新（combo 超时归零） ----
  function update(ctx) {
    const now = performance.now();
    // 超过 1.5s 未续连击 → 归零
    if (comboState.count > 0 && now - comboState.last > 1500) comboState.count = 0;
  }

  /* ================================================================
   * 挂载到 boot
   * ================================================================ */
  const effects = {
    burst, shake, flash, combo, floatText,
    answerFeedback,
    getCombo: () => ({ count: comboState.count, best: comboState.best }),
    update
  };
  boot.effects = effects;
  boot.register('effects', effects);
  boot.log && boot.log('[v5/effects] 视觉特效系统已挂载');
  return effects;
}

/* ================================================================
 * 注入全局 CSS（hitstop / 飘字 / 判定环 基础样式）
 * ================================================================ */
function injectCSS() {
  if (typeof document === 'undefined' || !document.head) return;
  if (document.getElementById('v5-fx-css')) return;
  const st = document.createElement('style');
  st.id = 'v5-fx-css';
  st.textContent = `
  /* v5 特效层基础样式 */
  .v5-fx-layer { position: fixed; inset: 0; pointer-events: none; z-index: 99995; overflow: hidden; }
  .v5-fx-ring { position: absolute; border-radius: 50%; box-shadow: 0 0 14px rgba(255,255,255,0.5); }
  .v5-fx-p { position: absolute; border-radius: 50%; box-shadow: 0 0 6px currentColor; }
  .v5-fx-float { position: absolute; font-family: 'Microsoft YaHei',sans-serif; letter-spacing: 1px; }
  .v5-fx-flash { position: fixed; }
  .v5-fx-shake { position: fixed; }

  /* hit stop：冻结打击瞬间的动画 */
  body.v5-fx-hitstop * {
    animation-play-state: paused !important;
    transition-duration: 0ms !important;
  }
  `;
  document.head.appendChild(st);
}