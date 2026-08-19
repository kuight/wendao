/* ================================================================
 * 《问道修仙学院》v4.3.5b · 动态交互增强
 *
 * 基于 v4.3.5-remake 之上，把静态内容改为可交互动态：
 *   ✨ 境界突破仪式（光柱 + 场景切换 + 师尊对话）
 *   💬 参悟功法阶段对话（师尊/师姐讲解）
 *   ⚔ 战斗前场景切换动画（宗门 → 战场）
 *   💫 修为/灵石变动飞升数字动画
 *   🌫 场景之间切换过渡（黑幕淡入淡出）
 *
 * 加载顺序：v434 → v435-remake → v435b-interactive
 *
 * =============================================================== */
(function (global) {
  'use strict';

  if (!global.Game) {
    console.warn('[v4.3.5b] Game 未加载，跳过');
    return;
  }
  const Game = global.Game;
  const UI = global.UI;
  const SubjectPage = global.SubjectPage;

  Game.__patchChain = (Game.__patchChain || []).concat(['v4.3.5b-interactive']);
  console.log('%c[v4.3.5b] 动态交互增强加载中...',
    'color:#b288ff;font-weight:bold;');

  // ================================================================
  // 一、【CSS 注入】所有动画效果
  // ================================================================
  const style = document.createElement('style');
  style.id = 'v435b-interactive-style';
  style.textContent = `
    /* ============ 全屏黑幕过渡 ============ */
    .v435b-transition {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: #000;
      z-index: 100000;
      opacity: 0;
      pointer-events: none;
      transition: opacity .4s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f5c97a;
      font-family: var(--xx-font-art, serif);
      letter-spacing: 6px;
      font-size: 22px;
    }
    .v435b-transition.show {
      opacity: 1;
      pointer-events: auto;
    }
    .v435b-transition-text {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity .6s ease .1s, transform .6s ease .1s;
    }
    .v435b-transition.show .v435b-transition-text {
      opacity: 1;
      transform: translateY(0);
    }

    /* ============ 境界突破仪式 ============ */
    .v435b-breakthrough {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 99998;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at center, rgba(245,201,122,0.15), rgba(0,0,0,0.95));
      overflow: hidden;
    }
    .v435b-breakthrough-pillar {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 140px;
      height: 100vh;
      background: linear-gradient(180deg,
        rgba(245,201,122,0),
        rgba(245,201,122,0.9),
        rgba(255,158,198,0.9),
        rgba(178,136,255,0.9),
        rgba(245,201,122,0));
      filter: blur(3px);
      animation: v435bPillar 2.5s ease-out;
      box-shadow: 0 0 80px 20px rgba(245,201,122,0.7);
    }
    @keyframes v435bPillar {
      0%   { opacity: 0; width: 0; }
      20%  { opacity: 1; width: 140px; }
      70%  { opacity: 1; width: 140px; }
      100% { opacity: 0; width: 300px; filter: blur(20px); }
    }
    .v435b-breakthrough-ring {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100px;
      height: 100px;
      border: 3px solid #f5c97a;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: v435bRing 2.5s ease-out;
      pointer-events: none;
    }
    @keyframes v435bRing {
      0%   { opacity: 1; width: 100px; height: 100px; }
      100% { opacity: 0; width: 800px; height: 800px; border-width: 1px; }
    }
    .v435b-breakthrough-info {
      position: relative;
      text-align: center;
      color: #f5c97a;
      z-index: 10;
      animation: v435bZoomIn 1s ease-out 0.5s both;
    }
    @keyframes v435bZoomIn {
      from { opacity: 0; transform: scale(0.5); }
      to   { opacity: 1; transform: scale(1); }
    }
    .v435b-breakthrough-emoji { font-size: 80px; margin-bottom: 12px; }
    .v435b-breakthrough-title {
      font-size: 36px;
      font-weight: 900;
      letter-spacing: 10px;
      color: #f5c97a;
      text-shadow: 0 0 20px #f5c97a, 0 0 40px #f5c97a;
      margin: 12px 0;
    }
    .v435b-breakthrough-sub {
      font-size: 16px;
      color: #ff9ec6;
      letter-spacing: 5px;
      margin-top: 8px;
    }
    .v435b-breakthrough-shifu {
      margin-top: 30px;
      padding: 16px 24px;
      background: rgba(20,18,42,0.85);
      border: 2px solid #f5c97a;
      border-radius: 12px;
      max-width: 400px;
      animation: v435bZoomIn .8s ease-out 1.5s both;
    }
    .v435b-breakthrough-shifu-name { color: #6ed5e0; font-weight: 700; margin-bottom: 6px; }
    .v435b-breakthrough-shifu-text { color: #f0e6d2; line-height: 1.8; font-size: 14px; }
    .v435b-breakthrough-close {
      margin-top: 20px;
      padding: 10px 24px;
      background: linear-gradient(180deg, #f5c97a, #d4a352);
      border: none;
      border-radius: 8px;
      color: #20182a;
      font-weight: 700;
      letter-spacing: 4px;
      cursor: pointer;
      animation: v435bZoomIn .8s ease-out 2.5s both;
    }

    /* ============ 参悟功法对话 ============ */
    .v435b-mastery-dialogue {
      position: fixed;
      left: 50%;
      bottom: 60px;
      transform: translateX(-50%);
      max-width: 600px;
      width: 90%;
      background: linear-gradient(180deg, rgba(20,18,42,0.98), rgba(30,20,60,0.98));
      border: 2px solid #6ed5e0;
      border-radius: 14px;
      padding: 16px 20px;
      z-index: 99997;
      box-shadow: 0 8px 30px rgba(110,213,224,0.35);
      animation: v435bSlideUp .4s ease-out;
    }
    @keyframes v435bSlideUp {
      from { opacity: 0; transform: translate(-50%, 30px); }
      to   { opacity: 1; transform: translate(-50%, 0); }
    }
    .v435b-mastery-dialogue.exiting {
      animation: v435bSlideDown .3s ease-in forwards;
    }
    @keyframes v435bSlideDown {
      to { opacity: 0; transform: translate(-50%, 30px); }
    }
    .v435b-dialogue-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(110,213,224,0.3);
    }
    .v435b-dialogue-avatar {
      font-size: 32px;
      width: 48px;
      height: 48px;
      background: rgba(110,213,224,0.15);
      border: 1px solid #6ed5e0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .v435b-dialogue-name {
      color: #6ed5e0;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 2px;
    }
    .v435b-dialogue-role {
      color: #b288ff;
      font-size: 11px;
      margin-top: 2px;
    }
    .v435b-dialogue-text {
      color: #f0e6d2;
      line-height: 1.9;
      font-size: 14px;
      min-height: 40px;
    }
    .v435b-dialogue-next {
      margin-top: 10px;
      text-align: right;
      color: #f5c97a;
      font-size: 12px;
      cursor: pointer;
      animation: v435bBlink 1.2s ease-in-out infinite;
    }
    @keyframes v435bBlink { 50% { opacity: 0.4; } }

    /* ============ 飞升数字动画 ============ */
    .v435b-float-num {
      position: fixed;
      pointer-events: none;
      z-index: 99999;
      font-weight: 900;
      font-size: 20px;
      letter-spacing: 2px;
      animation: v435bFloat 1.6s ease-out forwards;
      text-shadow: 0 0 8px currentColor;
    }
    @keyframes v435bFloat {
      0%   { opacity: 0; transform: translateY(0) scale(0.5); }
      15%  { opacity: 1; transform: translateY(-10px) scale(1.3); }
      100% { opacity: 0; transform: translateY(-100px) scale(1); }
    }

    /* ============ 战斗入场动画 ============ */
    .v435b-battle-intro {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 99996;
      background: linear-gradient(180deg, rgba(60,10,10,0.85), rgba(10,5,5,0.98));
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .v435b-battle-vs {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 24px;
      align-items: center;
      max-width: 700px;
      padding: 20px;
    }
    .v435b-battle-side {
      text-align: center;
      animation: v435bBattleIn 0.6s ease-out;
    }
    .v435b-battle-side.right { animation-name: v435bBattleInRight; animation-delay: 0.15s; animation-fill-mode: both; }
    @keyframes v435bBattleIn { from { opacity: 0; transform: translateX(-80px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes v435bBattleInRight { from { opacity: 0; transform: translateX(80px); } to { opacity: 1; transform: translateX(0); } }
    .v435b-battle-emoji { font-size: 72px; margin-bottom: 6px; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); }
    .v435b-battle-name { color: #f5c97a; font-weight: 700; font-size: 15px; letter-spacing: 3px; }
    .v435b-battle-stat { color: #ff9ec6; font-size: 12px; margin-top: 4px; }
    .v435b-battle-vs-icon {
      font-size: 40px;
      color: #e25b5b;
      font-weight: 900;
      letter-spacing: 5px;
      text-shadow: 0 0 20px #e25b5b;
      animation: v435bVsPulse 0.8s ease-out infinite alternate;
    }
    @keyframes v435bVsPulse {
      from { transform: scale(1); text-shadow: 0 0 20px #e25b5b; }
      to   { transform: scale(1.15); text-shadow: 0 0 40px #ff9ec6; }
    }
  `;
  if (document.head) document.head.appendChild(style);
  else document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));

  // ================================================================
  // 二、【场景过渡】通用黑幕动画
  // ================================================================
  Game.sceneTransition = function (text, ms) {
    ms = ms || 900;
    return new Promise(resolve => {
      const el = document.createElement('div');
      el.className = 'v435b-transition';
      el.innerHTML = `<div class="v435b-transition-text">${text || ''}</div>`;
      document.body.appendChild(el);
      // 触发 reflow → 显示
      requestAnimationFrame(() => el.classList.add('show'));
      setTimeout(() => {
        el.classList.remove('show');
        setTimeout(() => { el.remove(); resolve(); }, 400);
      }, ms);
    });
  };

  // ================================================================
  // 三、【境界突破仪式】
  // ================================================================
  const REALMS = global.REALMS || (Game.getAllRealms && Game.getAllRealms()) || [];
  const SHIFU_QUOTES = [
    { name: '云澜真人', role: '雷霆殿主', quotes: [
      '徒儿，你的心念已定，天雷相引，突破在此一举！',
      '守心，任雷霆过身，不动如山。',
      '好！悟性极佳，此番突破必成大道！'
    ]},
    { name: '玄机上人', role: '丹鼎峰主', quotes: [
      '静心，火候正好——凝丹！',
      '万物皆有其序，突破亦如此，切勿急躁。',
      '善哉，一鼎新丹已成，境界自然而通。'
    ]},
    { name: '九州观星子', role: '九州观星台', quotes: [
      '天地之势已成，你的悟境合乎星轨。',
      '大地为师，山海为友——你已得其一。',
      '妙！大道无穷，此后需继续参悟。'
    ]},
    { name: '师姐 · 沐清', role: '大师姐', quotes: [
      '师弟／师妹加油，我在门外等你出关！',
      '别怕，我第一次突破时手也在抖呢。',
      '呀，你成功啦！以后可要罩着我哦～'
    ]},
  ];

  function _pickShifu(sect) {
    if (sect === 'physics')   return SHIFU_QUOTES[0];
    if (sect === 'chemistry') return SHIFU_QUOTES[1];
    if (sect === 'geography') return SHIFU_QUOTES[2];
    return SHIFU_QUOTES[3];
  }

  Game.playBreakthroughCeremony = function (newRealm, sect) {
    return new Promise(resolve => {
      const realm = newRealm || (Game.currentRealm && Game.currentRealm());
      if (!realm) { resolve(); return; }
      const shifu = _pickShifu(sect || 'physics');
      const quote = shifu.quotes[Math.floor(Math.random() * shifu.quotes.length)];

      const el = document.createElement('div');
      el.className = 'v435b-breakthrough';
      el.innerHTML = `
        <div class="v435b-breakthrough-pillar"></div>
        <div class="v435b-breakthrough-ring"></div>
        <div class="v435b-breakthrough-ring" style="animation-delay:0.3s"></div>
        <div class="v435b-breakthrough-ring" style="animation-delay:0.6s"></div>
        <div class="v435b-breakthrough-info">
          <div class="v435b-breakthrough-emoji">✨</div>
          <div style="color:#ff9ec6;font-size:14px;letter-spacing:5px;margin-bottom:8px;">恭喜突破至</div>
          <div class="v435b-breakthrough-title">${realm.name || '未知境'}</div>
          <div class="v435b-breakthrough-sub">${realm.sub || ''}</div>
          <div class="v435b-breakthrough-shifu">
            <div class="v435b-breakthrough-shifu-name">◈ ${shifu.name} · ${shifu.role}</div>
            <div class="v435b-breakthrough-shifu-text">「${quote}」</div>
          </div>
          <button class="v435b-breakthrough-close">✦ 谢师尊指点 ✦</button>
        </div>
      `;
      document.body.appendChild(el);
      const close = () => {
        el.style.transition = 'opacity 0.4s';
        el.style.opacity = '0';
        setTimeout(() => { el.remove(); resolve(); }, 400);
      };
      el.querySelector('.v435b-breakthrough-close').onclick = close;
      // 自动 8 秒关闭
      setTimeout(close, 8500);
    });
  };

  // 挂到 Game.emit 事件流：突破自动播仪式
  if (Game.on && !Game.__v435bBreakOn) {
    Game.on('breakthrough', function (payload) {
      const realm = payload || (Game.currentRealm && Game.currentRealm());
      // 找当前主题（如果在学科页）
      const path = window.location.pathname;
      let sect = 'physics';
      if (/chemistry/.test(path)) sect = 'chemistry';
      else if (/geography/.test(path)) sect = 'geography';
      else if (/math/.test(path)) sect = 'math';
      else if (/chinese/.test(path)) sect = 'chinese';
      else if (/english/.test(path)) sect = 'english';
      Game.playBreakthroughCeremony(realm, sect);
    });
    Game.__v435bBreakOn = true;
  }

  // ================================================================
  // 四、【参悟功法对话】
  //   把师尊/师姐对话插入到参悟的四个阶段
  // ================================================================
  const MASTERY_DIALOGUES = {
    physics: {
      stage1: [ // 通览篇目
        { who: '云澜真人', avatar: '👨‍🎓', role: '雷霆殿主',
          text: '徒儿，此篇乃我雷霆一脉根基。物之运动，皆有其律。你需细读，切莫囫囵。' },
        { who: '云澜真人', avatar: '👨‍🎓', role: '雷霆殿主',
          text: '记住三大定律——牛顿之言，非虚——一切力学之根源，皆出于此。' },
      ],
      stage2: [ // 导引示例
        { who: '沐清师姐', avatar: '👧', role: '大师姐',
          text: '来，师姐给你演示一遍：先分析物体受力，再画受力图，最后列方程——三步走。' },
        { who: '沐清师姐', avatar: '👧', role: '大师姐',
          text: '这题我第一次也做错了……不过错了才记得牢！加油师弟／师妹～' },
      ],
      stage3: [ // 首次试炼（题前提示）
        { who: '云澜真人', avatar: '👨‍🎓', role: '雷霆殿主',
          text: '试炼开始。看清题干，找到关键条件，再动笔。切记：物理不是猜的。' },
      ],
      stage4: [ // 参悟成功
        { who: '云澜真人', avatar: '👨‍🎓', role: '雷霆殿主',
          text: '妙！你已窥其一斑。今后每次「精进」，都是巩固——多做多练，方可炉火纯青。' },
      ],
    },
    chemistry: {
      stage1: [
        { who: '玄机上人', avatar: '👨‍🍳', role: '丹鼎峰主',
          text: '此丹方（章节）需细品。化学之道，在于「变」与「守」——元素守恒，能量守恒。' },
      ],
      stage2: [
        { who: '沐清师姐', avatar: '👧', role: '大师姐',
          text: '化学方程式记不住？教你一招：多写、多平衡，写十遍就顺了！' },
      ],
      stage3: [
        { who: '玄机上人', avatar: '👨‍🍳', role: '丹鼎峰主',
          text: '入题！注意反应条件、产物、状态，一个都不能漏。' },
      ],
      stage4: [
        { who: '玄机上人', avatar: '👨‍🍳', role: '丹鼎峰主',
          text: '一鼎新丹已成！此后需继续巩固，方能日拱一卒。' },
      ],
    },
    geography: {
      stage1: [
        { who: '九州观星子', avatar: '🧙', role: '观星台主',
          text: '地理之学，兼具「自然」与「人文」。此篇你需先看清空间格局。' },
      ],
      stage2: [
        { who: '沐清师姐', avatar: '👧', role: '大师姐',
          text: '看图！地理离不开图。空间感建立后，答题自然而来。' },
      ],
      stage3: [
        { who: '九州观星子', avatar: '🧙', role: '观星台主',
          text: '答题时切记：条件——原理——结论，三步一体。' },
      ],
      stage4: [
        { who: '九州观星子', avatar: '🧙', role: '观星台主',
          text: '你已初见天地格局，此后随境界提升，视野当愈发开阔。' },
      ],
    },
    _default: {
      stage1: [{ who: '沐清师姐', avatar: '👧', role: '大师姐', text: '先通览一遍全篇，重点画下来。' }],
      stage2: [{ who: '沐清师姐', avatar: '👧', role: '大师姐', text: '看看示例，理解思路。' }],
      stage3: [{ who: '沐清师姐', avatar: '👧', role: '大师姐', text: '试炼开始，加油！' }],
      stage4: [{ who: '沐清师姐', avatar: '👧', role: '大师姐', text: '你成功了！继续巩固。' }],
    },
  };

  Game.showMasteryDialogue = function (sect, stage) {
    const bySect = MASTERY_DIALOGUES[sect] || MASTERY_DIALOGUES._default;
    const list = bySect['stage' + stage] || [];
    if (!list.length) return Promise.resolve();
    let idx = 0;
    return new Promise(resolve => {
      const el = document.createElement('div');
      el.className = 'v435b-mastery-dialogue';
      const render = () => {
        const d = list[idx];
        el.innerHTML = `
          <div class="v435b-dialogue-header">
            <div class="v435b-dialogue-avatar">${d.avatar}</div>
            <div>
              <div class="v435b-dialogue-name">${d.who}</div>
              <div class="v435b-dialogue-role">${d.role}</div>
            </div>
          </div>
          <div class="v435b-dialogue-text">${d.text}</div>
          <div class="v435b-dialogue-next">${idx < list.length - 1 ? '▼ 点击继续' : '▼ 我明白了'}</div>
        `;
        el.onclick = () => {
          idx++;
          if (idx >= list.length) {
            el.classList.add('exiting');
            setTimeout(() => { el.remove(); resolve(); }, 300);
          } else {
            render();
          }
        };
      };
      document.body.appendChild(el);
      render();
    });
  };

  // ================================================================
  // 五、【飞升数字动画】addExp / addLingshi 包装
  // ================================================================
  function _floatNumber(text, x, y, color) {
    const el = document.createElement('div');
    el.className = 'v435b-float-num';
    el.style.left = (x || (window.innerWidth * 0.5)) + 'px';
    el.style.top = (y || 80) + 'px';
    el.style.color = color || '#f5c97a';
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1700);
  }

  if (Game.addExp && !Game.addExp.__v435bWrapped) {
    const raw = Game.addExp.bind(Game);
    Game.addExp = function (n) {
      const r = raw(n);
      if (n > 0) {
        _floatNumber(`+${n} 修为`, window.innerWidth * 0.5 - 40, 90, '#f5c97a');
      }
      return r;
    };
    Game.addExp.__v435bWrapped = true;
  }
  if (Game.addLingshi && !Game.addLingshi.__v435bWrapped) {
    const raw = Game.addLingshi.bind(Game);
    Game.addLingshi = function (n) {
      const r = raw(n);
      if (n > 0) {
        _floatNumber(`+${n} 灵石`, window.innerWidth * 0.5 + 60, 110, '#8ce28c');
      }
      return r;
    };
    Game.addLingshi.__v435bWrapped = true;
  }

  // ================================================================
  // 六、【战斗入场动画】UI.openBattle 包装
  // ================================================================
  if (UI && UI.openBattle && !UI.openBattle.__v435bIntroWrapped) {
    const raw = UI.openBattle.bind(UI);
    UI.openBattle = function (opts) {
      opts = opts || {};
      const enemy = opts.enemy || {};

      // 玩家侧信息
      const c = Game.state.char;
      const playerEmoji = c.avatar || '🧙';
      const playerName = c.name || '道友';
      const playerHp = c.hp || 100;
      const playerAtk = c.atk || 10;

      // 敌人侧
      const enemyEmoji = _enemyEmoji(enemy.diff);
      const enemyName = enemy.name || '未知妖兽';
      const enemyHp = enemy.hp || enemy.maxHp || 100;
      const enemyAtk = enemy.atk || 10;

      const el = document.createElement('div');
      el.className = 'v435b-battle-intro';
      el.innerHTML = `
        <div class="v435b-battle-vs">
          <div class="v435b-battle-side left">
            <div class="v435b-battle-emoji">${playerEmoji}</div>
            <div class="v435b-battle-name">${playerName}</div>
            <div class="v435b-battle-stat">❤ ${playerHp} · ⚔ ${playerAtk}</div>
          </div>
          <div class="v435b-battle-vs-icon">VS</div>
          <div class="v435b-battle-side right">
            <div class="v435b-battle-emoji">${enemyEmoji}</div>
            <div class="v435b-battle-name">${enemyName}</div>
            <div class="v435b-battle-stat">❤ ${enemyHp} · ⚔ ${enemyAtk}</div>
          </div>
        </div>
      `;
      document.body.appendChild(el);

      // 1.4 秒后淡出并调用原 openBattle
      setTimeout(() => {
        el.style.transition = 'opacity 0.4s';
        el.style.opacity = '0';
        setTimeout(() => {
          el.remove();
          raw(opts);
        }, 400);
      }, 1400);
    };
    UI.openBattle.__v435bIntroWrapped = true;
    console.log('[v4.3.5b] 战斗入场动画已挂载');
  }

  function _enemyEmoji(diff) {
    return { easy: '👻', normal: '👹', hard: '😈', boss: '🐲' }[diff || 'normal'] || '👹';
  }

  // ================================================================
  // 七、【参悟阶段对话挂载】把 dialogue 插入 SubjectPage 的参悟流程
  // ================================================================
  if (SubjectPage && !SubjectPage.__v435bDialogueWrapped) {
    // 找参悟入口方法
    const methods = ['_startMastery', '_masteryStage1', 'startMastery'];
    // 尝试包装 startMastery / _masteryFlow
    // 大多数版本用 _startMastery(m, stage)
    if (SubjectPage._startMastery) {
      const raw = SubjectPage._startMastery;
      SubjectPage._startMastery = function (m, stage) {
        // stage 1/2/3/4
        Game.showMasteryDialogue(this.sect, stage || 1).then(() => {
          raw.call(this, m, stage);
        });
      };
    }
    SubjectPage.__v435bDialogueWrapped = true;
  }

  // ================================================================
  // 八、【场景切换动画】页面级切换（大地图 -> 宗门）
  // ================================================================
  // 拦截主页跳转到 subject 页的链接，播放过渡动画
  function _hookSectLinks() {
    // 找所有 <a href="subjects/xxx.html"> 或 onclick 跳转
    document.querySelectorAll('a[href*="subjects/"]').forEach(a => {
      if (a.__v435bHooked) return;
      a.__v435bHooked = true;
      const originalHref = a.getAttribute('href');
      a.addEventListener('click', function (e) {
        e.preventDefault();
        const sectName = originalHref.match(/subjects\/(\w+)\.html/);
        const sectMap = {
          physics: '⚡ 前往雷霆殿',
          chemistry: '🔥 前往丹鼎峰',
          geography: '🌋 前往九州观星台',
          math: '📐 前往律衡阁',
          chinese: '📖 前往文华院',
          english: '🔤 前往译灵堂',
        };
        const text = sectName ? (sectMap[sectName[1]] || '前往宗门') : '前往宗门';
        Game.sceneTransition(text, 800).then(() => {
          window.location.href = originalHref;
        });
      });
    });
  }
  setTimeout(_hookSectLinks, 500);
  setInterval(_hookSectLinks, 3000);

  console.log('%c[v4.3.5b] ✔ 动态交互增强加载完成',
    'color:#8ce28c;font-weight:bold;font-size:13px;');
  console.log('  · 🌟 境界突破仪式（光柱 + 师尊对话）');
  console.log('  · 💬 参悟功法阶段对话');
  console.log('  · ⚔ 战斗入场 VS 动画');
  console.log('  · 💫 修为/灵石飞升数字');
  console.log('  · 🌫 场景过渡动画');

})(typeof window !== 'undefined' ? window : this);
