/* ===============================================================
 * 《问道修仙学院》v4.2.6 · 场景与动态交互引擎
 *
 *   ✔ 场景切换动画（打门/开幕/淡入淡出）
 *   ✔ 灵气粒子系统（自动生成飘落粒子）
 *   ✔ 对话打字机效果 + 角色立绘切换
 *   ✔ 战斗动画：受击、暴击、法术特效
 *   ✔ 领悟过程动态化：进度条、爆发闪光
 *   ✔ 页面互动组件：按钮涟漪、卡片悬浮
 * =============================================================== */
(function (global) {
  'use strict';

  const SceneEngine = {

    // ============================================================
    // 一、切换场景（带过渡动画）
    // ============================================================
    /**
     * @param {string} sceneKey 场景名（如 'qingyun'、'taixuan'）
     * @param {string} title 过渡文字，如"太玄宗"
     * @param {Function} onDone 切换完毕后回调（可以在这里换页面内容）
     */
    switchScene(sceneKey, title, onDone) {
      const container = document.body;

      // 1. 打门动画
      let mask = document.querySelector('.wd-scene-transition');
      if (!mask) {
        mask = document.createElement('div');
        mask.className = 'wd-scene-transition';
        mask.innerHTML = '<div class="wd-scene-transition-text"></div>';
        document.body.appendChild(mask);
      }
      const textEl = mask.querySelector('.wd-scene-transition-text');
      textEl.textContent = title || '';
      mask.classList.add('active');

      // 2. 800ms 后切换场景并回调
      setTimeout(() => {
        container.setAttribute('data-scene', sceneKey);
        this.spawnParticles(sceneKey);
        if (typeof onDone === 'function') onDone();
      }, 800);

      // 3. 1.6s 后关闭遮罩
      setTimeout(() => {
        mask.classList.remove('active');
      }, 1600);
    },

    // ============================================================
    // 二、粒子系统
    // ============================================================
    spawnParticles(sceneKey) {
      // 清理旧粒子
      let container = document.querySelector('.wd-particles');
      if (container) container.remove();

      container = document.createElement('div');
      container.className = 'wd-particles';
      document.body.appendChild(container);

      // 根据场景选粒子颜色
      const colorMap = {
        qingyun:'',           // 白色（灵气）
        taixuan:'',           // 白色（剑光）
        zixiao:'gold',
        bloodpalace:'pink',
        buddha:'gold',
        bamboo:'cyan',
        ghost:'pink',
        yanhuang:'gold',
        bihai:'cyan',
        ice:'cyan',
        kunlun:'pink',
        chaos:'gold',
        portal:'gold',
        multiverse:'gold',
        putian:'gold',
        wuyi:'gold',
        xiamen:'cyan'
      };
      const colorClass = colorMap[sceneKey] || '';
      const count = 25;

      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'wd-particle' + (colorClass ? ' ' + colorClass : '');
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = (Math.random() * 20) + 's';
        p.style.animationDuration = (15 + Math.random() * 15) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
      }
    },

    // ============================================================
    // 三、对话系统（打字机效果 + 立绘切换）
    // ============================================================
    /**
     * @param {Array} dialogues [{name, avatar, text, emote}, ...]
     * @param {Function} onEnd 全部对话完毕的回调
     */
    playDialog(dialogues, onEnd) {
      let box = document.querySelector('.wd-dialog-box');
      if (!box) {
        box = document.createElement('div');
        box.className = 'wd-dialog-box';
        box.innerHTML = `
          <div class="wd-dialog-avatar">
            <img class="wd-dialog-avatar-img" alt="">
          </div>
          <div class="wd-dialog-content">
            <div class="wd-dialog-name"></div>
            <div class="wd-dialog-text"></div>
            <div class="wd-dialog-hint">▼ 点击继续</div>
          </div>
        `;
        this._injectDialogStyle();
        document.body.appendChild(box);
      }

      let idx = 0;
      let typing = false;
      let typeTimer = null;

      const nameEl = box.querySelector('.wd-dialog-name');
      const textEl = box.querySelector('.wd-dialog-text');
      const avatarImg = box.querySelector('.wd-dialog-avatar-img');
      const hintEl = box.querySelector('.wd-dialog-hint');

      const showNext = () => {
        if (idx >= dialogues.length) {
          box.classList.remove('active');
          setTimeout(() => {
            if (typeof onEnd === 'function') onEnd();
          }, 400);
          return;
        }
        const d = dialogues[idx++];
        nameEl.textContent = d.name || '';
        avatarImg.src = d.avatar || '';
        avatarImg.style.display = d.avatar ? '' : 'none';
        hintEl.style.opacity = '0';

        // 打字机效果
        typing = true;
        let i = 0;
        textEl.textContent = '';
        const speed = 40;
        typeTimer = setInterval(() => {
          if (i >= d.text.length) {
            clearInterval(typeTimer);
            typing = false;
            hintEl.style.opacity = '0.8';
            return;
          }
          textEl.textContent += d.text[i++];
        }, speed);
      };

      box.onclick = (e) => {
        e.stopPropagation();
        if (typing) {
          // 立即完成
          clearInterval(typeTimer);
          textEl.textContent = dialogues[idx - 1].text;
          typing = false;
          hintEl.style.opacity = '0.8';
        } else {
          showNext();
        }
      };

      box.classList.add('active');
      setTimeout(showNext, 200);
    },

    _injectDialogStyle() {
      if (document.getElementById('wd-dialog-style')) return;
      const s = document.createElement('style');
      s.id = 'wd-dialog-style';
      s.textContent = `
        .wd-dialog-box {
          position: fixed;
          left: 5%; right: 5%; bottom: -300px;
          height: 200px;
          background: linear-gradient(180deg, rgba(20,20,40,0.92), rgba(10,10,25,0.95));
          border: 2px solid rgba(255,215,0,0.5);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          gap: 20px;
          z-index: 9000;
          box-shadow: 0 -10px 40px rgba(0,0,0,0.6), 0 0 40px rgba(255,215,0,0.15);
          backdrop-filter: blur(6px);
          transition: bottom 0.5s cubic-bezier(0.3, 1.2, 0.5, 1);
          cursor: pointer;
        }
        .wd-dialog-box.active { bottom: 20px; }
        .wd-dialog-avatar {
          width: 160px; height: 160px;
          border-radius: 12px;
          border: 2px solid rgba(255,215,0,0.4);
          overflow: hidden;
          flex-shrink: 0;
          background: rgba(0,0,0,0.4);
        }
        .wd-dialog-avatar-img {
          width: 100%; height: 100%;
          object-fit: cover;
          animation: dialog-breathe 3s ease-in-out infinite;
        }
        @keyframes dialog-breathe {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .wd-dialog-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          color: #fff;
          position: relative;
        }
        .wd-dialog-name {
          font-size: 22px;
          font-weight: bold;
          color: #ffd700;
          margin-bottom: 12px;
          letter-spacing: 3px;
          text-shadow: 0 0 8px rgba(255,215,0,0.5);
        }
        .wd-dialog-text {
          flex: 1;
          font-size: 17px;
          line-height: 1.7;
          letter-spacing: 1px;
          color: #f0f0f0;
          overflow-y: auto;
        }
        .wd-dialog-hint {
          position: absolute;
          right: 4px; bottom: 0px;
          color: #ffd700;
          font-size: 12px;
          opacity: 0;
          animation: dialog-hint-blink 1s ease-in-out infinite;
          transition: opacity 0.3s;
        }
        @keyframes dialog-hint-blink {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `;
      document.head.appendChild(s);
    },

    // ============================================================
    // 四、战斗特效
    // ============================================================
    /**
     * 屏幕震动
     * @param {number} intensity 1-3
     */
    screenShake(intensity = 1) {
      const el = document.querySelector('#app') || document.body;
      el.style.transition = 'transform 0.05s';
      let count = 0;
      const max = intensity * 8;
      const shake = () => {
        if (count >= max) {
          el.style.transform = '';
          return;
        }
        const x = (Math.random() - 0.5) * 10 * intensity;
        const y = (Math.random() - 0.5) * 10 * intensity;
        el.style.transform = `translate(${x}px, ${y}px)`;
        count++;
        requestAnimationFrame(shake);
      };
      shake();
    },

    /**
     * 伤害数字飞出
     */
    damagePopup(x, y, value, opts = {}) {
      const el = document.createElement('div');
      el.className = 'wd-dmg-popup';
      el.textContent = (opts.heal ? '+' : '-') + value;
      el.style.cssText = `
        position: fixed;
        left: ${x}px; top: ${y}px;
        color: ${opts.heal ? '#7fffd4' : (opts.crit ? '#ffd700' : '#ff6b6b')};
        font-size: ${opts.crit ? 42 : 32}px;
        font-weight: bold;
        text-shadow: 0 2px 8px rgba(0,0,0,0.8), 0 0 16px currentColor;
        pointer-events: none;
        z-index: 9500;
        animation: dmg-fly 1.2s ease-out forwards;
      `;
      document.body.appendChild(el);
      if (!document.getElementById('wd-dmg-style')) {
        const s = document.createElement('style');
        s.id = 'wd-dmg-style';
        s.textContent = `
          @keyframes dmg-fly {
            0% { transform: translateY(0) scale(0.5); opacity: 0; }
            15% { transform: translateY(-20px) scale(1.3); opacity: 1; }
            40% { transform: translateY(-40px) scale(1); }
            100% { transform: translateY(-100px) scale(0.9); opacity: 0; }
          }
        `;
        document.head.appendChild(s);
      }
      setTimeout(() => el.remove(), 1200);
    },

    /**
     * 法术释放视觉效果（在目标位置爆开）
     * @param {string} element - fire/ice/thunder/wind/earth/light/dark/chaos
     */
    castSpell(element, x, y) {
      const colors = {
        fire: '#ff4500', ice: '#87ceeb', thunder: '#9370db',
        wind: '#c39bd3', earth: '#8b6c42', metal: '#c0c0c0',
        light: '#ffd700', dark: '#4a0033', chaos: '#7f3fbf',
        water: '#00bfff', life: '#7fffd4', soul: '#e0e0ff',
        blood: '#8b0000', time: '#4b0082'
      };
      const color = colors[element] || '#fff';

      // 爆发圆
      const ring = document.createElement('div');
      ring.style.cssText = `
        position: fixed;
        left: ${x - 50}px; top: ${y - 50}px;
        width: 100px; height: 100px;
        border-radius: 50%;
        border: 4px solid ${color};
        box-shadow: 0 0 40px ${color}, inset 0 0 30px ${color};
        pointer-events: none;
        z-index: 9400;
        animation: spell-ring 0.8s ease-out forwards;
      `;
      document.body.appendChild(ring);

      // 中心闪光
      const flash = document.createElement('div');
      flash.style.cssText = `
        position: fixed;
        left: ${x - 30}px; top: ${y - 30}px;
        width: 60px; height: 60px;
        border-radius: 50%;
        background: radial-gradient(circle, ${color}, transparent);
        pointer-events: none;
        z-index: 9401;
        animation: spell-flash 0.5s ease-out forwards;
      `;
      document.body.appendChild(flash);

      if (!document.getElementById('wd-spell-style')) {
        const s = document.createElement('style');
        s.id = 'wd-spell-style';
        s.textContent = `
          @keyframes spell-ring {
            0% { transform: scale(0.3); opacity: 0; }
            30% { transform: scale(1); opacity: 1; }
            100% { transform: scale(2.5); opacity: 0; }
          }
          @keyframes spell-flash {
            0% { transform: scale(0.2); opacity: 0; }
            30% { transform: scale(1.5); opacity: 1; }
            100% { transform: scale(0.5); opacity: 0; }
          }
        `;
        document.head.appendChild(s);
      }
      setTimeout(() => { ring.remove(); flash.remove(); }, 800);
    },

    /**
     * 受击特效：目标元素闪红
     */
    hitFlash(target) {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (!el) return;
      el.style.animation = 'wd-hit-flash 0.3s';
      if (!document.getElementById('wd-hit-style')) {
        const s = document.createElement('style');
        s.id = 'wd-hit-style';
        s.textContent = `
          @keyframes wd-hit-flash {
            0%,100% { filter: none; transform: translateX(0); }
            25% { filter: brightness(2) hue-rotate(-30deg); transform: translateX(-6px); }
            75% { filter: brightness(2) hue-rotate(-30deg); transform: translateX(6px); }
          }
        `;
        document.head.appendChild(s);
      }
      setTimeout(() => { el.style.animation = ''; }, 300);
    },

    // ============================================================
    // 五、领悟过程动画（原本静态→现在动态）
    // ============================================================
    /**
     * 显示"参悟"过程动画
     * @param {string} title 功法名
     * @param {number} duration 总时长（毫秒）
     * @param {Function} onDone 完成回调
     */
    startEnlightenment(title, duration = 4000, onDone) {
      const box = document.createElement('div');
      box.className = 'wd-enlighten-box';
      box.innerHTML = `
        <div class="wd-enlighten-halo"></div>
        <div class="wd-enlighten-title">${title}</div>
        <div class="wd-enlighten-desc">凝神静气，参悟其中奥妙...</div>
        <div class="wd-enlighten-bar-wrap">
          <div class="wd-enlighten-bar"></div>
        </div>
        <div class="wd-enlighten-percent">0%</div>
      `;
      this._injectEnlightenStyle();
      document.body.appendChild(box);
      requestAnimationFrame(() => box.classList.add('active'));

      const barEl = box.querySelector('.wd-enlighten-bar');
      const percentEl = box.querySelector('.wd-enlighten-percent');
      const descEl = box.querySelector('.wd-enlighten-desc');

      const stages = [
        '凝神静气，参悟其中奥妙...',
        '气机流转，若有所思...',
        '灵机一现，豁然开朗！',
        '一念通达，功法入体！'
      ];

      let start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const p = Math.min(elapsed / duration, 1);
        barEl.style.width = (p * 100) + '%';
        percentEl.textContent = Math.floor(p * 100) + '%';
        descEl.textContent = stages[Math.min(Math.floor(p * stages.length), stages.length - 1)];
        if (p < 1) requestAnimationFrame(tick);
        else {
          // 突破闪光
          setTimeout(() => {
            box.classList.add('done');
            setTimeout(() => {
              box.classList.remove('active');
              setTimeout(() => { box.remove(); if (typeof onDone === 'function') onDone(); }, 500);
            }, 800);
          }, 200);
        }
      };
      tick();
    },

    _injectEnlightenStyle() {
      if (document.getElementById('wd-enlighten-style')) return;
      const s = document.createElement('style');
      s.id = 'wd-enlighten-style';
      s.textContent = `
        .wd-enlighten-box {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(6px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9800;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .wd-enlighten-box.active { opacity: 1; }
        .wd-enlighten-halo {
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(255,215,0,0.6) 0%,
            rgba(255,215,0,0.2) 40%,
            transparent 70%);
          animation: enlighten-halo 3s ease-in-out infinite;
          position: absolute;
        }
        @keyframes enlighten-halo {
          0%,100% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .wd-enlighten-title {
          position: relative;
          font-size: 42px;
          color: #ffd700;
          font-family: 'Ma Shan Zheng', 'KaiTi', serif;
          text-shadow: 0 0 20px rgba(255,215,0,0.8), 0 0 40px rgba(255,215,0,0.4);
          letter-spacing: 8px;
          margin-bottom: 20px;
          z-index: 1;
        }
        .wd-enlighten-desc {
          position: relative;
          font-size: 18px;
          color: #eee;
          margin-bottom: 30px;
          z-index: 1;
          text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }
        .wd-enlighten-bar-wrap {
          position: relative;
          width: 400px; height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid rgba(255,215,0,0.4);
          z-index: 1;
        }
        .wd-enlighten-bar {
          height: 100%;
          background: linear-gradient(90deg, #ffd700, #fffacd, #ffd700);
          background-size: 200% 100%;
          animation: bar-shimmer 1.5s linear infinite;
          box-shadow: 0 0 12px rgba(255,215,0,0.8);
          width: 0%;
        }
        @keyframes bar-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: 0 0; }
        }
        .wd-enlighten-percent {
          position: relative;
          color: #ffd700;
          font-size: 20px;
          margin-top: 12px;
          z-index: 1;
          text-shadow: 0 0 8px rgba(255,215,0,0.6);
        }
        .wd-enlighten-box.done .wd-enlighten-halo {
          animation: enlighten-burst 0.8s ease-out;
        }
        @keyframes enlighten-burst {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
      `;
      document.head.appendChild(s);
    },

    // ============================================================
    // 六、按钮涟漪 & 卡片增强（自动应用到全站按钮）
    // ============================================================
    initInteractiveEnhance() {
      // 按钮涟漪
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('button, .btn, .wd-btn, .wd-location-card');
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `
          position: absolute;
          left: ${e.clientX - rect.left - size/2}px;
          top: ${e.clientY - rect.top - size/2}px;
          width: ${size}px; height: ${size}px;
          background: rgba(255,215,0,0.35);
          border-radius: 50%;
          pointer-events: none;
          transform: scale(0);
          animation: wd-ripple 0.6s ease-out;
        `;
        // 确保按钮 position 为 relative
        const cs = getComputedStyle(btn);
        if (cs.position === 'static') btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }, true);

      if (!document.getElementById('wd-ripple-style')) {
        const s = document.createElement('style');
        s.id = 'wd-ripple-style';
        s.textContent = `
          @keyframes wd-ripple {
            to { transform: scale(2); opacity: 0; }
          }
        `;
        document.head.appendChild(s);
      }
    },

    // ============================================================
    // 七、渲染场所大地图
    // ============================================================
    renderLocationMap(containerId, locations, onSelect) {
      const cont = document.getElementById(containerId);
      if (!cont) return;
      cont.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;padding:16px';

      locations.forEach(loc => {
        const card = document.createElement('div');
        card.className = 'wd-location-card';
        card.style.setProperty('--card-gradient', loc.gradient || 'linear-gradient(180deg,#666,#333)');
        card.innerHTML = `
          <div class="badge">${loc.realm || loc.type || ''}</div>
          <div class="content">
            <div class="name">${loc.name}</div>
            <div class="desc">${loc.desc || ''}</div>
          </div>
        `;
        card.onclick = () => {
          // 从卡片映射到 scene key
          const sceneMap = {
            'l_001':'qingyun', 'l_002':'bihai', 'l_003':'yanhuang', 'l_004':'putian',
            'l_005':'bamboo','l_006':'taixuan','l_007':'zixiao','l_008':'bloodpalace',
            'l_009':'buddha','l_010':'ghost','l_011':'putian','l_012':'beasts',
            'l_013':'taixuan','l_014':'wuyi','l_015':'ice','l_016':'kunlun',
            'l_017':'bihai','l_018':'kunlun','l_019':'chaos','l_020':'ghost',
            'l_021':'bloodpalace','l_022':'buddha','l_023':'chaos','l_024':'portal',
            'l_025':'multiverse','l_026':'putian','l_027':'wuyi','l_028':'bihai',
            'l_029':'ghost','l_030':'xiamen'
          };
          const scene = sceneMap[loc.id] || 'qingyun';
          this.switchScene(scene, loc.name, () => {
            if (typeof onSelect === 'function') onSelect(loc);
          });
        };
        cont.appendChild(card);
      });
    }
  };

  // 全局挂载
  global.SceneEngine = SceneEngine;

  // 自动初始化
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      SceneEngine.initInteractiveEnhance();
      // 默认初始场景
      if (!document.body.getAttribute('data-scene')) {
        document.body.setAttribute('data-scene', 'qingyun');
        SceneEngine.spawnParticles('qingyun');
      }
    });
  }

  console.info('[SceneEngine v4.2.6] 场景引擎已加载，用法：SceneEngine.switchScene("taixuan","太玄宗")');

})(typeof window !== 'undefined' ? window : this);
