/* ==================================================================
 * 《问道修仙学院》v5 · ui/index.js
 * UI 系统入口（契约 INTERFACES.md）：
 *   boot.ui.show(screen)          打开一个屏幕（全屏浮层）
 *   boot.ui.hide()                关闭当前屏幕
 *   boot.ui.toast(msg, type)      顶部飘入提示
 *   boot.ui.hud.update(stat, val) 更新 HUD 单项
 *
 * 组装：注入 theme.css（设计令牌）+ 挂载 HUD / Toast / Screen。
 * ================================================================== */
import { createGlassPanel, glassPanelCSS } from './components/glass-panel.js';
import { createCard, cardCSS } from './components/card.js';
import { createHud, hudCSS } from './components/hud.js';

export function installUI(boot) {
  'use strict';

  injectThemeLink();
  injectComponentCSS();

  // ---- 唯一挂载容器 ----
  let mount = document.getElementById('v5-ui-mount');
  if (!mount) {
    mount = document.createElement('div');
    mount.id = 'v5-ui-mount';
    document.body.appendChild(mount);
  }

  // ---- HUD ----
  const hud = createHud();
  mount.appendChild(hud.el);

  // ---- Toast 容器 ----
  let toastWrap = null;
  function ensureToastWrap() {
    if (toastWrap) return toastWrap;
    toastWrap = document.createElement('div');
    toastWrap.className = 'v5-toast-wrap';
    document.body.appendChild(toastWrap);
    return toastWrap;
  }

  // ---- 屏幕容器 ----
  let screenEl = null;
  function ensureScreen() {
    if (screenEl) return screenEl;
    screenEl = document.createElement('div');
    screenEl.className = 'v5-screen';
    document.body.appendChild(screenEl);
    return screenEl;
  }

  /**
   * 打开一个屏幕（全屏玻璃遮罩 + 居中面板）。
   * @param {string|Node|Object} content
   *   string/Node: 直接作为面板内容；Object: { title, body, actions:[{label,onClick}] }
   */
  function show(content) {
    const sc = ensureScreen();
    sc.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'v5-screen__box';

    const contentIsNode = typeof Node !== 'undefined' && content instanceof Node;
    if (content && typeof content === 'object' && !contentIsNode) {
      const title = content.title;
      if (title) {
        const t = document.createElement('div');
        t.style.cssText = 'font-family:var(--v5-font-art);font-size:20px;letter-spacing:3px;color:var(--v5-gold);margin:0 0 14px;text-shadow:var(--v5-shadow-text);';
        t.textContent = title;
        box.appendChild(t);
      }
      if (content.body !== undefined) {
        const b = document.createElement('div');
        b.style.cssText = 'color:var(--v5-text);line-height:1.8;font-size:14px;';
        if (typeof content.body === 'string') b.innerHTML = content.body;
        else b.appendChild(content.body);
        box.appendChild(b);
      }
      if (Array.isArray(content.actions)) {
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;gap:10px;justify-content:flex-end;margin-top:18px;flex-wrap:wrap;';
        content.actions.forEach((a) => {
          const btn = document.createElement('button');
          btn.className = 'v5-ui-btn' + (a.primary ? ' v5-ui-btn--primary' : '');
          btn.textContent = a.label || '';
          btn.addEventListener('click', (e) => {
            if (a.onClick) { const r = a.onClick(e); if (r === false) return; }
            hide();
          });
          row.appendChild(btn);
        });
        box.appendChild(row);
      }
    } else {
      // string 或 Node
      if (typeof content === 'string') box.innerHTML = content;
      else if (typeof Node !== 'undefined' && content instanceof Node) box.appendChild(content);
      else if (content && content.nodeType === 1) box.appendChild(content);
    }

    sc.appendChild(box);
    sc.classList.add('v5-screen--show');
    return box;
  }

  function hide() {
    const sc = screenEl;
    if (!sc) return;
    sc.classList.remove('v5-screen--show');
  }

  // ---- Toast ----
  function toast(msg, type, dur) {
    if (!msg) return null;
    const wrap = ensureToastWrap();
    const t = document.createElement('div');
    t.className = 'v5-toast' + (type ? ' v5-toast--' + type : '');
    t.textContent = msg;
    wrap.appendChild(t);
    const life = typeof dur === 'number' ? dur : 2600;
    setTimeout(() => {
      t.classList.add('v5-toast--leaving');
      setTimeout(() => t.remove(), 300);
    }, life);
    return t;
  }

  // ---- 挂载到 boot ----
  const ui = {
    show,
    hide,
    toast,
    hud: { update: (stat, val) => hud.update(stat, val) },
    components: { glassPanel: createGlassPanel, card: createCard, hud },
    css: { glassPanelCSS, cardCSS, hudCSS },
    get root() { return mount; }
  };
  boot.ui = ui;
  boot.register('ui', ui);
  boot.log && boot.log('[v5/ui] UI 系统已挂载（玻璃拟态 / 卡片 / HUD）');
  return ui;
}

/* 注入 theme.css 设计令牌（基于本模块 URL 计算相对路径） */
function injectThemeLink() {
  try {
    if (typeof document === 'undefined' || !document.head) return;
    if (document.getElementById('v5-theme-css')) return;
    const baseUrl = new URL('./theme.css', import.meta.url).href;
    const link = document.createElement('link');
    link.id = 'v5-theme-css';
    link.rel = 'stylesheet';
    link.href = baseUrl;
    document.head.appendChild(link);
  } catch (e) {
    // 若 import.meta 不可用则静默（样式将退化为组件内联）
  }
}

/* 注入组件级补充样式（按钮 / 卡片角标 / HUD 跳动） */
function injectComponentCSS() {
  if (typeof document === 'undefined' || !document.head) return;
  if (document.getElementById('v5-ui-component-css')) return;
  const st = document.createElement('style');
  st.id = 'v5-ui-component-css';
  st.textContent = [
    '.v5-ui-btn{display:inline-block;padding:8px 18px;border-radius:var(--v5-radius-md);border:1px solid var(--v5-border);background:rgba(255,255,255,0.04);color:var(--v5-text);cursor:pointer;font-family:var(--v5-font-art);letter-spacing:2px;font-size:13px;transition:transform 0.25s var(--v5-ease-out),background .2s,border-color .2s,box-shadow .2s;}',
    '.v5-ui-btn:hover{background:rgba(245,201,122,0.12);border-color:var(--v5-gold);box-shadow:0 0 14px rgba(245,201,122,0.35);transform:translateY(-1px);}',
    '.v5-ui-btn--primary{background:linear-gradient(135deg,rgba(245,201,122,0.35),rgba(255,158,198,0.30));border-color:var(--v5-gold);color:#1a1330;font-weight:700;}',
    '.v5-ui-btn--primary:hover{background:linear-gradient(135deg,rgba(245,201,122,0.55),rgba(255,158,198,0.45));box-shadow:0 0 22px rgba(245,201,122,0.65);}',
    glassPanelCSS(), cardCSS(), hudCSS()
  ].join('\n');
  document.head.appendChild(st);
}