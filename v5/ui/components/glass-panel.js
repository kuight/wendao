/* ==================================================================
 * 《问道修仙学院》v5 · ui/components/glass-panel.js
 * 玻璃拟态面板组件（蓝图 §3.5 P2）
 *
 * 技术栈：backdrop-filter: blur() + 半透明浮层（theme.css 提供变量）。
 * 结构类：.v5-glass / .v5-glass--strong。
 *
 * 导出：
 *   createGlassPanel(opts) -> { el, set, on }
 *   glassPanelCSS()        -> 附加的局部样式字符串（若需微调）
 * ================================================================== */

'use strict';

/* 局部补充样式：玻璃拟态的装饰性高光与质感 */
export function glassPanelCSS() {
  return `
  .v5-glass::before {
    content: "";
    position: absolute; inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent 45%);
    pointer-events: none; opacity: 0.5;
  }
  .v5-glass--tilt { transform: rotateX(2deg) rotateY(-1deg); }
  `;
}

/**
 * 创建玻璃拟态面板。
 * @param {Object} opts
 *   - content: string|Node   面板内容（innerHTML 或子节点）
 *   - strong: boolean        是否用强玻璃（更实、金边）
 *   - tilt: boolean          轻微倾斜增加桌面拟物感
 *   - pad: string|null       内边距覆盖（如 '24px'）
 *   - onClick: function|null 点击回调
 * @returns {Element}
 */
export function createGlassPanel(opts) {
  opts = opts || {};
  const el = document.createElement('div');
  el.className = 'v5-glass' +
    (opts.strong ? ' v5-glass--strong' : '') +
    (opts.tilt ? ' v5-glass--tilt' : '');

  if (opts.pad) el.style.padding = opts.pad;
  if (opts.content !== undefined) {
    if (typeof opts.content === 'string') el.innerHTML = opts.content;
    else el.appendChild(opts.content);
  }
  if (typeof opts.onClick === 'function') el.addEventListener('click', opts.onClick);
  return el;
}

export default createGlassPanel;