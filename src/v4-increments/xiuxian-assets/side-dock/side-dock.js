/* ===================================================
 * 侧边悬浮工具栏（v4.2 修复版）
 * ---------------------------------------------------
 * v4.2 修复：
 *   1) z-index 提到 100000，弹窗/沉浸模式/突破遮罩都盖不住它
 *   2) 新增折叠/展开按钮，避免遮挡答题内容
 *   3) 新增 raiseZ() 方法（供 modal 打开时确保工具栏在最上层）
 *   4) 记忆折叠状态（localStorage）
 * 提供快捷操作：
 *   ⚡ 回到顶部
 *   🔍 放大字体（10 档）
 *   🔎 缩小字体
 *   🎯 重置缩放
 *   ⛶ 全屏
 *   🏛 回到山门
 *   ◀/▶ 折叠/展开
 * 同时提供可视化图放大查看：点击 .viz-panel 中的 SVG 全屏显示
 * =================================================== */

(function (global) {
  'use strict';

  const ZOOM_LEVELS = [80, 90, 100, 110, 120];

  const SideDock = {
    zoomIdx: 2, // 默认 100%
    collapsed: false,

    init() {
      // 从 localStorage 恢复
      try {
        const saved = localStorage.getItem('xxSideDockZoom');
        if (saved !== null) {
          const n = parseInt(saved, 10);
          const idx = ZOOM_LEVELS.indexOf(n);
          if (idx >= 0) this.zoomIdx = idx;
        }
        this.collapsed = localStorage.getItem('xxSideDockCollapsed') === '1';
      } catch (e) {}

      this._render();
      this._bindZoom();
      this._bindImgZoom();

      // v4.2: 监听 body 变化，如果有 modal/沉浸层出现，主动置顶
      this._observeOverlays();
    },

    _render() {
      // 避免重复
      if (document.querySelector('.side-dock')) return;

      const dock = document.createElement('div');
      dock.className = 'side-dock' + (this.collapsed ? ' collapsed' : '');
      dock.innerHTML = `
        <button class="side-dock-toggle" data-act="toggle" title="折叠/展开">${this.collapsed ? '◀' : '▶'}</button>
        <button class="side-dock-btn" data-tip="回到顶部" data-act="top">⬆</button>
        <button class="side-dock-btn dock-zoom-badge" data-tip="放大" data-act="zoom-in" data-zoom="${ZOOM_LEVELS[this.zoomIdx]}%">🔍</button>
        <button class="side-dock-btn" data-tip="缩小" data-act="zoom-out">🔎</button>
        <button class="side-dock-btn" data-tip="重置缩放" data-act="zoom-reset">🎯</button>
        <button class="side-dock-btn" data-tip="全屏切换" data-act="fs">⛶</button>
        <button class="side-dock-btn" data-tip="回到山门" data-act="home">🏛</button>
      `;
      document.body.appendChild(dock);

      // 应用当前缩放
      this._applyZoom();

      // 绑定点击
      dock.addEventListener('click', (e) => {
        // 折叠按钮
        const toggle = e.target.closest('.side-dock-toggle');
        if (toggle) {
          this.collapsed = !this.collapsed;
          dock.classList.toggle('collapsed', this.collapsed);
          toggle.textContent = this.collapsed ? '◀' : '▶';
          try { localStorage.setItem('xxSideDockCollapsed', this.collapsed ? '1' : '0'); } catch(e){}
          return;
        }
        const btn = e.target.closest('.side-dock-btn');
        if (!btn) return;
        const act = btn.dataset.act;
        if (act === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          // 弹窗内也回顶
          document.querySelectorAll('.xx-modal-body, .imm-panel, .im-verify-box, .im-chapter-body').forEach(el => {
            try { el.scrollTo({ top: 0, behavior: 'smooth' }); } catch(e){}
          });
        } else if (act === 'zoom-in') {
          if (this.zoomIdx < ZOOM_LEVELS.length - 1) { this.zoomIdx++; this._applyZoom(); }
        } else if (act === 'zoom-out') {
          if (this.zoomIdx > 0) { this.zoomIdx--; this._applyZoom(); }
        } else if (act === 'zoom-reset') {
          this.zoomIdx = 2; this._applyZoom();
        } else if (act === 'fs') {
          if (!document.fullscreenElement) {
            (document.documentElement.requestFullscreen || (()=>{})).call(document.documentElement);
          } else {
            (document.exitFullscreen || (()=>{})).call(document);
          }
        } else if (act === 'home') {
          const idx = window.location.pathname.includes('/subjects/') ? '../index.html' : 'index.html';
          window.location.href = idx;
        }
      });
    },

    /**
     * v4.2 新增：确保 side-dock 位于所有覆盖层之上
     * 供 modal / immersive 等打开时主动调用
     */
    raiseZ() {
      const dock = document.querySelector('.side-dock');
      if (dock) {
        // 移到 body 末尾，确保在最上层
        document.body.appendChild(dock);
        dock.style.zIndex = '100000';
      }
    },

    /**
     * v4.2 新增：观察 body 变化，只要出现新的高 z-index 层就自动置顶
     */
    _observeOverlays() {
      if (!window.MutationObserver) return;
      const mo = new MutationObserver((muts) => {
        for (const m of muts) {
          for (const n of m.addedNodes) {
            if (n.nodeType !== 1) continue;
            const cls = n.className || '';
            if (typeof cls !== 'string') continue;
            if (cls.includes('xx-modal-mask') ||
                cls.includes('immersive-') ||
                cls.includes('breakthrough-') ||
                cls.includes('viz-zoom-mask') ||
                cls.includes('im-')) {
              // 有新覆盖层出现 → 置顶 side-dock
              this.raiseZ();
              return;
            }
          }
        }
      });
      mo.observe(document.body, { childList: true });
    },

    _applyZoom() {
      const html = document.documentElement;
      ZOOM_LEVELS.forEach(z => html.classList.remove('zoom-' + z));
      html.classList.add('zoom-' + ZOOM_LEVELS[this.zoomIdx]);
      // 更新徽章
      const badge = document.querySelector('.side-dock-btn[data-act="zoom-in"]');
      if (badge) badge.dataset.zoom = ZOOM_LEVELS[this.zoomIdx] + '%';
      // 保存
      try { localStorage.setItem('xxSideDockZoom', ZOOM_LEVELS[this.zoomIdx]); } catch(e){}
    },

    _bindZoom() {
      // 键盘快捷键 Ctrl/Cmd + / -（可选，通常浏览器已支持）
    },

    _bindImgZoom() {
      // 委托事件：点击任意 .viz-panel 内的 svg 触发放大
      document.body.addEventListener('click', (e) => {
        const svg = e.target.closest('.viz-details-body .viz-panel svg, .viz-panel svg');
        if (!svg) return;
        // 忽略已在放大 mask 内
        if (svg.closest('.viz-zoom-mask')) return;
        e.preventDefault();
        e.stopPropagation();
        this._openImgZoom(svg);
      });
    },

    _openImgZoom(svgEl) {
      // 已有放大层就先关掉
      const existing = document.querySelector('.viz-zoom-mask');
      if (existing) existing.remove();

      const mask = document.createElement('div');
      mask.className = 'viz-zoom-mask';
      // 克隆 svg 到 mask
      const cloned = svgEl.cloneNode(true);
      // 移除高度限制
      cloned.removeAttribute('width');
      cloned.removeAttribute('height');
      cloned.style.width = 'auto';
      cloned.style.height = 'auto';
      cloned.style.maxWidth = '92vw';
      cloned.style.maxHeight = '88vh';
      mask.appendChild(cloned);

      const close = document.createElement('div');
      close.className = 'viz-zoom-close';
      close.textContent = '×';
      mask.appendChild(close);

      // 提示文字
      const tip = document.createElement('div');
      tip.style.cssText = 'position:absolute;bottom:16px;left:50%;transform:translateX(-50%);color:#f5c97a;font-size:13px;letter-spacing:3px;background:rgba(0,0,0,0.5);padding:6px 16px;border-radius:16px;border:1px solid rgba(245,201,122,0.3);';
      tip.textContent = '◆ 点击任意处关闭 ◆';
      mask.appendChild(tip);

      document.body.appendChild(mask);

      // 关闭后 raiseZ
      const doClose = () => { mask.remove(); this.raiseZ(); };
      mask.onclick = doClose;
      // ESC 关闭
      const escHandler = (ev) => {
        if (ev.key === 'Escape') { doClose(); document.removeEventListener('keydown', escHandler); }
      };
      document.addEventListener('keydown', escHandler);

      // 打开后立刻置顶 side-dock
      this.raiseZ();
    },
  };

  global.SideDock = SideDock;

  // 自动初始化
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => SideDock.init());
    } else {
      setTimeout(() => SideDock.init(), 50);
    }
  }
})(typeof window !== 'undefined' ? window : this);
