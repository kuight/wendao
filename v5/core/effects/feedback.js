/* ============================================================
 * 《问道修仙学院》v5 · core/effects/feedback.js
 * 音游式反馈：hit stop 打击停顿、判定环、粒子爆发、闪白、屏幕震动
 *
 * 设计对齐 V5_BLUEPRINT §3.5 的 P1（音游式答对/答错反馈）。
 * 本模块提供底层图元（纯 DOM/CSS，零依赖），供 effects/index.js 调用。
 * 所有绘制节点挂到宿主容器（默认 body），由全局特效层管理生命周期。
 * ============================================================ */
(function (global) {
  'use strict';

  const NS = 'v5-fx';

  /* ---------- 工具：建 DOM 节点 ---------- */
  function el(tag, cls, styles, parent) {
    const n = document.createElement(tag);
    if (cls) n.className = NS + '-' + cls;
    if (styles) Object.assign(n.style, styles);
    if (parent) parent.appendChild(n);
    return n;
  }

  function px(v) { return (typeof v === 'number' ? v.toFixed(1) : v) + 'px'; }

  /* ---------- 播放 hit stop（打击停顿）：冻结全局动画极短时间 ---------- */
  function hitStop({ ms = 70, pauseFx = true } = {}) {
    // 通过给 body 加 class 触发 CSS 的动画暂停/时间凝固
    const b = document.body;
    if (!b) return;
    const prev = getComputedStyle(b).animationPlayState;
    b.classList.add(NS + '-hitstop');
    if (pauseFx) b.style.setProperty('--v5-hitstop-ms', ms + 'ms');
    setTimeout(() => {
      b.classList.remove(NS + '-hitstop');
    }, ms);
    return ms; // 返回停顿时长供调用方链式延迟
  }

  /* ---------- 判定环：扩散圆环 ---------- */
  function judgeRing({ x, y, color = '#7CFC00', r0 = 18, r1 = 70, dur = 260 } = {}) {
    const layer = fxLayer();
    const ring = el('div', 'ring', {
      left: px(x - r0), top: px(y - r0),
      width: px(r0 * 2), height: px(r0 * 2),
      border: '2px solid ' + color,
      borderRadius: '50%',
      pointerEvents: 'none'
    }, layer);
    ring.animate([
      { transform: 'scale(1)', opacity: 0.9 },
      { transform: `scale(${(r1 / r0).toFixed(2)})`, opacity: 0 }
    ], { duration: dur, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' });
    setTimeout(() => ring.remove(), dur + 30);
    return ring;
  }

  /* ---------- 粒子爆发：向四周散射小光点 ---------- */
  function particles({ x, y, count = 16, colors = ['#FFD700', '#7CFC00', '#FF6B6B', '#4FC3F7'], speed = 2, size = 6, dur = 520 } = {}) {
    const layer = fxLayer();
    const out = [];
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const dist = (20 + Math.random() * 60) * speed;
      const p = el('div', 'p', {
        left: px(x), top: px(y),
        width: px(size), height: px(size),
        background: colors[(Math.random() * colors.length) | 0],
        borderRadius: '50%',
        position: 'absolute',
        pointerEvents: 'none',
        willChange: 'transform,opacity'
      }, layer);
      p.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${px(Math.cos(ang) * dist)},${px(Math.sin(ang) * dist)}) scale(0.2)`, opacity: 0 }
      ], { duration: dur + Math.random() * 120, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' });
      out.push(p);
      setTimeout(() => p.remove(), dur + 200);
    }
    return out;
  }

  /* ---------- 闪白：全屏白闪 ---------- */
  function flash({ color = 'rgba(255,255,255,0.6)', dur = 140 } = {}) {
    const layer = fxLayer();
    const f = el('div', 'flash', {
      position: 'fixed', left: 0, top: 0,
      width: '100vw', height: '100vh',
      background: color,
      pointerEvents: 'none', zIndex: 99990
    }, layer);
    f.animate([{ opacity: 1 }, { opacity: 0 }], { duration: dur, easing: 'ease-out', fill: 'forwards' });
    setTimeout(() => f.remove(), dur + 20);
    return f;
  }

  /* ---------- 屏幕震动 ---------- */
  function shake({ intensity = 10, dur = 200 } = {}) {
    const layer = fxLayer();
    const s = el('div', 'shake', {
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 99980
    }, layer);
    const key = [];
    const steps = 6;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const amp = intensity * (1 - t);
      key.push({
        transform: `translate(${(Math.random() * 2 - 1) * amp}px, ${(Math.random() * 2 - 1) * amp}px)`,
        offset: t
      });
    }
    key[steps].transform = 'translate(0,0)';
    s.animate(key, { duration: dur, easing: 'ease-out' });
    setTimeout(() => s.remove(), dur + 30);
    return s;
  }

  /* ---------- 飘字 ---------- */
  function floatText({ str, x, y, color = '#FFF', size = 18, up = 46, dur = 700 } = {}) {
    const layer = fxLayer();
    const t = el('div', 'float', {
      left: px(x), top: px(y),
      color, fontSize: px(size),
      fontWeight: 800,
      textShadow: '0 2px 6px rgba(0,0,0,0.6)',
      transform: 'translate(-50%,-50%)',
      pointerEvents: 'none', whiteSpace: 'nowrap'
    }, layer);
    t.textContent = str;
    t.animate([
      { transform: 'translate(-50%,-50%) scale(0.6)', opacity: 0 },
      { transform: 'translate(-50%,-50%) scale(1.15)', opacity: 1, offset: 0.25 },
      { transform: `translate(-50%,calc(-50% - ${px(up)})) scale(1)`, opacity: 0 }
    ], { duration: dur, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' });
    setTimeout(() => t.remove(), dur + 30);
    return t;
  }

  /* ---------- 特效层（懒创建，挂 document.body） ---------- */
  let _layer = null;
  function fxLayer() {
    if (_layer && _layer.isConnected) return _layer;
    _layer = el('div', 'layer', {
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 99995,
      overflow: 'hidden'
    });
    document.body && document.body.appendChild(_layer);
    return _layer;
  }

  // 导出命名空间（挂到 global，供 effects/index.js 复用）
  global.BattleFeedback = {
    NS,
    hitStop,
    judgeRing,
    particles,
    flash,
    shake,
    floatText,
    fxLayer
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);