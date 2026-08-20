/* ==================================================================
 * 《问道修仙学院》v5 · ui/components/card.js
 * 桌游质感卡片组件（蓝图 §3.5 P4）
 *
 * 材质三要素（theme.css .v5-card）：
 *   - 大圆角  --v5-radius-xl
 *   - 双层阴影 --v5-card-shadow（受光高光边 + 近层 + 远层柔影）
 *   - 渐变受光 --v5-card-shine（顶部径向扫光）
 *
 * 导出：
 *   createCard(opts) -> { el, body, set, on }
 *   cardCSS()        -> 附加局部样式（角标、售价章等装饰）
 * ================================================================== */

'use strict';

/* 局部补充样式：卡面细节装饰 */
export function cardCSS() {
  return `
  .v5-card__badge {
    position: absolute; top: 10px; right: 12px; z-index: 2;
    font-family: var(--v5-font-art); font-size: 11px; letter-spacing: 1px;
    padding: 2px 10px; border-radius: 999px;
    background: rgba(0,0,0,0.35); border: 1px solid var(--v5-gold);
    color: var(--v5-gold);
  }
  .v5-card__title {
    font-family: var(--v5-font-art); font-size: 18px; letter-spacing: 3px;
    color: var(--v5-gold); text-shadow: var(--v5-shadow-text);
  }
  .v5-card__sub {
    font-size: 12px; letter-spacing: 2px; color: var(--v5-text-dim);
    margin-top: 4px;
  }
  `;
}

/**
 * 创建桌游质感卡片。
 * @param {Object} opts
 *   - title: string        标题（金色符文体）
 *   - sub: string          副标题（可选）
 *   - badge: string        右上角标（可选）
 *   - content: string|Node 主体内容（可选）
 *   - onClick: function    点击回调（可选）
 *   - pad: string          内边距覆盖
 *   - hover: boolean       是否启用悬浮抬起（默认 true）
 * @returns {Element}
 */
export function createCard(opts) {
  opts = opts || {};
  const el = document.createElement('div');
  el.className = 'v5-card';
  if (opts.hover === false) el.style.transition = 'none';

  if (opts.pad) el.style.padding = opts.pad;
  else el.style.padding = '20px 18px 16px';

  // 主体内容层（置于受光层之上）
  const body = document.createElement('div');
  body.className = 'v5-card__content';

  if (opts.badge) {
    const b = document.createElement('div');
    b.className = 'v5-card__badge';
    b.textContent = opts.badge;
    el.appendChild(b);
  }
  if (opts.title) {
    const t = document.createElement('div');
    t.className = 'v5-card__title';
    t.textContent = opts.title;
    body.appendChild(t);
  }
  if (opts.sub) {
    const s = document.createElement('div');
    s.className = 'v5-card__sub';
    s.textContent = opts.sub;
    body.appendChild(s);
  }
  if (opts.content !== undefined) {
    if (typeof opts.content === 'string') body.insertAdjacentHTML('beforeend', opts.content);
    else body.appendChild(opts.content);
  }
  el.appendChild(body);

  if (typeof opts.onClick === 'function') el.addEventListener('click', opts.onClick);
  return el;
}

export default createCard;