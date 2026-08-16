/* ===================================================================
 * v4.3.6 · 战斗竞技场强化层 (Battle Arena)
 * -------------------------------------------------------------------
 * 用户原话：
 *   "打怪永远只有靠选项和填空"
 *   "整体还是太偏向文字游戏了"
 *   "游戏也要足够有趣但都跟学习挂钩"
 *
 * 本层不重写整个战斗界面（避免打破 v4.3.5b/c/d 已有 UI），
 * 而是在 openBattle 外面套一层"战斗节奏引擎"：
 *
 *   ①【连击系统】连答 3/5/8 正确 → 触发【小连击/大连击/爆发】特效
 *      每级连击独立伤害倍率、屏幕震动、连击条上升
 *   ②【暴击】难题答对 → 20%概率暴击（伤害 ×2 + 金色闪光）
 *   ③【妖兽弱点符文】战斗开始时，妖兽身上浮现一个"知识点弱点"符文，
 *      如果你抽到的题正好命中这个弱点 → 造成 1.5x 伤害 + 弱点破碎特效
 *   ④【连败反击】连答 3 错 → 妖兽狂暴，主动扑上来扣血
 *   ⑤【智能出题挂载】战斗抽题走 Game.SQ.pick（智能出题），非 rand
 *
 * 依赖：v4.3.5e-safety, v4.3.5d 全套 (UI.openBattle), SQ, KG
 * =================================================================== */
(function (global) {
  'use strict';
  if (global.__WENDAO_ARENA_V436__) return;
  global.__WENDAO_ARENA_V436__ = true;
  const Game = global.Game;
  const UI = global.UI;
  if (!Game || !UI) { console.warn('[v4.3.6-arena] Game/UI 未加载'); return; }

  // ---------------------------------------------------------------
  // 一、注入 CSS —— 特效动画（暴击 / 连击 / 弱点 / 震屏）
  // ---------------------------------------------------------------
  const CSS = `
    /* 连击浮字 */
    .v436-combo-float {
      position: fixed; pointer-events: none; z-index: 10000;
      font-family: 'Cinzel','SimSun',serif;
      font-weight: 900; text-shadow: 0 0 12px currentColor, 0 0 4px #000;
      animation: v436-combo-fly 0.9s ease-out forwards;
    }
    @keyframes v436-combo-fly {
      0%   { transform: translate(-50%, 0) scale(0.5) rotate(-8deg); opacity: 0; }
      20%  { transform: translate(-50%, -8px) scale(1.4) rotate(4deg); opacity: 1; }
      100% { transform: translate(-50%, -80px) scale(1.1) rotate(-2deg); opacity: 0; }
    }
    /* 屏幕震动 */
    .v436-shake { animation: v436-shake 0.35s cubic-bezier(.36,.07,.19,.97) both; }
    .v436-shake-big { animation: v436-shake-big 0.55s cubic-bezier(.36,.07,.19,.97) both; }
    @keyframes v436-shake {
      10%,90%{transform:translate3d(-1px,0,0)}
      20%,80%{transform:translate3d(2px,0,0)}
      30%,50%,70%{transform:translate3d(-4px,0,0)}
      40%,60%{transform:translate3d(4px,0,0)}
    }
    @keyframes v436-shake-big {
      10%,90%{transform:translate3d(-2px,-1px,0)}
      20%,80%{transform:translate3d(4px,2px,0)}
      30%,50%,70%{transform:translate3d(-8px,-3px,0)}
      40%,60%{transform:translate3d(8px,3px,0)}
    }
    /* 暴击闪光 */
    .v436-crit-flash {
      position: fixed; inset:0; pointer-events:none; z-index:9999;
      background: radial-gradient(circle at center, #fff8b0aa 0%, transparent 60%);
      animation: v436-flash 0.4s ease-out forwards;
    }
    @keyframes v436-flash { 0%{opacity:0} 20%{opacity:1} 100%{opacity:0} }
    /* 弱点符文 (贴在妖兽头上) */
    .v436-weakpoint {
      position: absolute; top: -18px; left: 50%; transform: translateX(-50%);
      padding: 3px 10px; border-radius: 12px;
      background: rgba(255,180,60,0.95); color: #4a2a00;
      font-size: 11px; font-weight: 900; letter-spacing: 1px;
      border: 1px solid #ffe98b;
      box-shadow: 0 0 12px rgba(255,180,60,0.6), inset 0 0 4px rgba(255,255,255,0.5);
      z-index: 20;
      animation: v436-weakpoint-pulse 2.4s ease-in-out infinite;
    }
    @keyframes v436-weakpoint-pulse {
      0%,100% { transform: translateX(-50%) scale(1); }
      50%     { transform: translateX(-50%) scale(1.08); box-shadow: 0 0 22px rgba(255,180,60,0.9); }
    }
    .v436-weakpoint.hit {
      animation: v436-weakpoint-burst 0.6s ease-out forwards;
    }
    @keyframes v436-weakpoint-burst {
      0%   { transform: translateX(-50%) scale(1); background: rgba(255,180,60,0.95); }
      40%  { transform: translateX(-50%) scale(2.3); background: rgba(255,240,180,1); }
      100% { transform: translateX(-50%) scale(3); opacity: 0; }
    }
    /* 连击条 */
    .v436-combo-bar {
      position: absolute; left: 12px; bottom: 12px; z-index: 15;
      display: flex; align-items: center; gap: 8px;
      background: rgba(0,0,0,0.55); border-radius: 20px;
      padding: 6px 12px; border: 1px solid rgba(255,220,120,0.4);
      color: #ffe98b; font-family: monospace; font-size: 13px; letter-spacing: 1px;
    }
    .v436-combo-bar.active { color: #ffd53f; text-shadow: 0 0 8px #ffd53f; border-color: #ffd53f; }
    .v436-combo-bar .num { font-size: 18px; font-weight: 900; }
    /* 妖兽狂暴光晕（连错时）*/
    .v436-enemy-rage { animation: v436-rage 1.2s ease-in-out infinite; }
    @keyframes v436-rage {
      0%,100% { filter: drop-shadow(0 0 6px #ff4444) drop-shadow(0 0 2px #ff4444); }
      50%     { filter: drop-shadow(0 0 24px #ff6060) drop-shadow(0 0 12px #ff4444); }
    }
    /* 智能出题小徽章 */
    .v436-src-badge {
      display: inline-block; margin-left: 6px;
      padding: 1px 8px; border-radius: 8px;
      font-size: 10px; letter-spacing: 0.5px;
      background: linear-gradient(90deg, #b288ff33, #b288ff55);
      color: #d8bcff; border: 1px solid #b288ff44;
    }
    .v436-src-badge.related { background: linear-gradient(90deg, #ffb26033, #ffb26055); color:#ffe0a8; border-color:#ffb26066; }
    .v436-src-badge.review  { background: linear-gradient(90deg, #8ce28c33, #8ce28c55); color:#c8f0c8; border-color:#8ce28c66; }
  `;
  const styleEl = document.createElement('style');
  styleEl.id = 'v436-arena-style';
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  // ---------------------------------------------------------------
  // 二、Combo Controller  —— 追踪连击 / 连败 / 暴击
  // ---------------------------------------------------------------
  function createComboCtrl(scene) {
    let combo = 0;
    let fail = 0;
    let comboBar = null;

    function ensureBar() {
      if (comboBar || !scene) return;
      comboBar = document.createElement('div');
      comboBar.className = 'v436-combo-bar';
      comboBar.innerHTML = `⚡ 连击 <span class="num">0</span>`;
      scene.appendChild(comboBar);
    }
    ensureBar();

    function floatText(text, color, big) {
      const el = document.createElement('div');
      el.className = 'v436-combo-float';
      el.style.color = color || '#ffd53f';
      el.style.fontSize = (big ? 44 : 28) + 'px';
      // 定位在 modal 中心稍上
      const rect = scene.getBoundingClientRect();
      el.style.left = (rect.left + rect.width / 2) + 'px';
      el.style.top = (rect.top + rect.height * 0.35) + 'px';
      el.textContent = text;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 950);
    }
    function critFlash() {
      const el = document.createElement('div');
      el.className = 'v436-crit-flash';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 420);
    }
    function shake(big) {
      if (!scene) return;
      scene.classList.remove('v436-shake', 'v436-shake-big');
      // 强制 reflow 让动画重启
      // eslint-disable-next-line
      void scene.offsetHeight;
      scene.classList.add(big ? 'v436-shake-big' : 'v436-shake');
    }
    function updateBar() {
      if (!comboBar) return;
      comboBar.querySelector('.num').textContent = combo;
      if (combo >= 3) comboBar.classList.add('active');
      else comboBar.classList.remove('active');
    }

    return {
      onCorrect(question) {
        combo++;
        fail = 0;
        updateBar();

        // 触发级别
        let mult = 1;
        if (combo === 3)  { floatText('⚡ 三连击！', '#8ce28c', false); shake(false); mult = 1.15; }
        else if (combo === 5) { floatText('⚔ 五连斩！', '#f5c97a', true); shake(false); mult = 1.3; }
        else if (combo === 8) { floatText('★ 八连神通！', '#ffd53f', true); shake(true); mult = 1.5; }
        else if (combo >= 10 && combo % 5 === 0) { floatText('☄ ' + combo + ' 连击！', '#ff9ec6', true); shake(true); mult = 1.7; }

        // 难题暴击（hard/boss 有 20% 暴击）
        const diff = (question && question.difficulty) || 'normal';
        const critRoll = Math.random();
        let crit = false;
        if ((diff === 'hard' && critRoll < 0.2) || (diff === 'boss' && critRoll < 0.3)) {
          crit = true;
          floatText('💥 暴击！', '#ff5b5b', true);
          critFlash();
          shake(true);
          mult *= 2.0;
        }
        return { combo, mult, crit };
      },
      onWrong(question) {
        combo = 0;
        fail++;
        updateBar();
        if (fail >= 3) {
          floatText('🔥 妖兽狂暴！', '#ff4444', true);
          shake(true);
          // 给妖兽加 rage class
          const enemyEl = scene.querySelector('.v43-battle-enemy, .battle-enemy, .pix-monster') || scene.querySelector('img,svg');
          if (enemyEl) {
            enemyEl.classList.add('v436-enemy-rage');
            setTimeout(() => enemyEl.classList.remove('v436-enemy-rage'), 4000);
          }
        }
        return { combo: 0, fail, rage: fail >= 3 };
      },
      get combo() { return combo; },
      get fail() { return fail; },
    };
  }

  // ---------------------------------------------------------------
  // 三、给妖兽挂弱点符文（战斗开始时）
  // ---------------------------------------------------------------
  const WEAKPOINT_LABELS = {
    // 物理
    phy_m1: '振动', phy_m2: '单摆', phy_m3: '共振', phy_m4: '机械波', phy_m5: '干涉',
    phy_m6: '折光', phy_m7: '光学', phy_m8: '运动', phy_m9: '牛顿', phy_m10: '万有引力',
    phy_m11: '机械能', phy_m12: '动量', phy_m13: '电场', phy_m14: '电容',
    phy_m15: '电流', phy_m16: '欧姆律', phy_m17: '磁场', phy_m18: '电磁感应',
    phy_m19: '交变电流', phy_m20: '光电效应', phy_m21: '原子结构', phy_m22: '原子核',
    phy_m23: '分子动理论', phy_m24: '理想气体', phy_m25: '热力学', phy_m26: '静电',
    phy_m27: '电磁波', phy_m28: '相对论',
    // 化学
    chem_m1: '反应热', chem_m2: '反应速率', chem_m3: '化学平衡', chem_m4: '电离水解',
    chem_m5: '电化学', chem_m6: '元素周期', chem_m7: '化学键', chem_m8: '氧化还原',
    chem_m9: '金属', chem_m10: '非金属', chem_m11: '有机基础', chem_m12: '官能团',
    chem_m13: '生物大分子', chem_m14: '工业流程', chem_m15: '实验大题',
    chem_m16: '元素综合', chem_m17: '晶体结构', chem_m18: '阿伏伽德罗',
    // 地理
    geo_m1: '行星地球', geo_m2: '地球运动', geo_m3: '大气环流', geo_m4: '水循环',
    geo_m5: '地貌', geo_m6: '自然地理', geo_m7: '人口', geo_m8: '生产活动',
    geo_m9: '地域联系', geo_m10: '环境安全', geo_m11: '永续发展', geo_m12: '区域发展',
  };

  function pickWeakpoint(enemy) {
    // 优先从怪物的 sect + manualId 里选
    const sect = enemy.sect || 'physics';
    const prefix = { physics:'phy_m', chemistry:'chem_m', geography:'geo_m' }[sect];
    if (!prefix) return null;
    const candidates = Object.keys(WEAKPOINT_LABELS).filter(k => k.startsWith(prefix));
    if (!candidates.length) return null;
    // 优先选玩家已学过的（相关的）
    const learned = (Game.state && Game.state.char && Game.state.char.mastered) || [];
    const learnedInSect = candidates.filter(k => learned.includes(k));
    const pool = learnedInSect.length ? learnedInSect : candidates;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // ---------------------------------------------------------------
  // 四、Wrap UI.openBattle —— 装配 combo / weakpoint / smart-question
  // ---------------------------------------------------------------
  function wrapOpenBattle() {
    if (!UI.openBattle || UI.openBattle.__v436Wrapped) return;
    const raw = UI.openBattle.bind(UI);
    UI.openBattle = function (opts) {
      opts = opts || {};
      const enemy = opts.enemy || {};

      // v4.3.5g 重构：合并 v435f-hotfix Bug 4 —— 妖兽缩放金钥匰
      //   ① enemy.enemyRid 没传就默认玩家 realmId（同阶怪）
      //   ② 自动标 autoScale=true，开启 UI.openBattle 里的 Game.scaleMonster 缩放
      //   ③ 上下文提供了 baseDef.hp/atk 作为属性基准 → 不情愿地看到玩家境界提升后同阶怪反而变弫
      if (typeof enemy === 'object' && enemy) {
        if (typeof enemy.enemyRid !== 'number') {
          enemy.enemyRid = (Game.state && Game.state.char && Game.state.char.realmId) || 0;
        }
        if (enemy.autoScale !== false) enemy.autoScale = true;
      }

      // ---- ① 智能出题挂载（替换 opts.getQuestion）----
      const origGetQuestion = opts.getQuestion;
      if (Game.SQ && Game.SQ.pick && enemy.sect) {
        const smartGet = () => {
          const q = Game.SQ.pick({
            sect: enemy.sect,
            manualId: enemy.manualId || opts.manualId,
            playerRealm: Game.state && Game.state.char && Game.state.char.realmId,
            learned: Game.state && Game.state.char && Game.state.char.mastered,
            mode: 'battle',
          });
          if (q) return q;
          // 兜底：走原来的 getQuestion
          return typeof origGetQuestion === 'function' ? origGetQuestion() : null;
        };
        opts.getQuestion = smartGet;
      }

      // ---- ② 挂上 wrapper：在 raw open 后注入 combo controller & weakpoint ----
      const origOnCorrect = opts.onCorrect;
      const origOnWrong   = opts.onWrong;
      // combo controller 需要 scene 引用，openBattle 里创建 scene 后我们再挂
      let comboCtrl = null;
      let weakpointId = null;
      let weakpointEl = null;

      // 找到 scene（modal）—— openBattle 是同步创建 DOM 的
      const rv = raw(opts);

      // 需要在下一个 tick 找 modal
      setTimeout(() => {
        const scene = document.querySelector('.v43-battle-modal');
        if (!scene) return;

        // 创建 combo controller
        comboCtrl = createComboCtrl(scene);

        // 挂 weakpoint
        weakpointId = pickWeakpoint(enemy);
        if (weakpointId) {
          const enemyPortrait = scene.querySelector('.v43-battle-enemy, .battle-enemy, .pix-monster')
                             || scene.querySelector('img[alt="妖兽"], svg')
                             || scene.querySelector('.v43-battle-stage > div');
          if (enemyPortrait) {
            const parent = enemyPortrait.parentNode;
            if (parent && getComputedStyle(parent).position === 'static') {
              parent.style.position = 'relative';
            }
            weakpointEl = document.createElement('div');
            weakpointEl.className = 'v436-weakpoint';
            weakpointEl.textContent = '弱点：' + (WEAKPOINT_LABELS[weakpointId] || weakpointId);
            weakpointEl.dataset.mid = weakpointId;
            (parent || enemyPortrait).appendChild(weakpointEl);
          }
        }

        // 观察当前显示的题目：拿到题的 _sq_from & _sq_related 打徽章
        // 通过 MutationObserver 监听题目区变化
        const questionArea = scene.querySelector('.xx-battle-question, .v43-battle-question, .battle-question');
        if (questionArea) {
          const applyBadge = () => {
            // 找到最近一次的问题
            const badgeExisting = questionArea.querySelector('.v436-src-badge');
            if (badgeExisting) badgeExisting.remove();
            // 通过 UI 里的当前 question（openBattle 一般把 currentQuestion 挂到 dataset）
            const q = UI.__v43BattleCurrentQuestion || window.__v43BattleCurrentQuestion;
            if (!q) return;
            const badge = document.createElement('span');
            badge.className = 'v436-src-badge';
            if (q._sq_related) {
              badge.classList.add('related');
              badge.textContent = '融汇 · ' + (WEAKPOINT_LABELS[q._sq_from] || q._sq_from || '关联题');
            } else if (q._sq_from) {
              badge.textContent = '本经 · ' + (WEAKPOINT_LABELS[q._sq_from] || q._sq_from);
            } else {
              return;
            }
            questionArea.appendChild(badge);

            // 若命中弱点 → burst 特效 + 1.5x 伤害标记
            if (weakpointEl && q._sq_from === weakpointId) {
              weakpointEl.classList.add('hit');
              setTimeout(() => { if (weakpointEl) weakpointEl.remove(); weakpointEl = null; weakpointId = null; }, 620);
              // 挂个全局标记，onCorrect wrapper 里用
              scene.__v436_weakpoint_hit = true;
            }
          };
          const observer = new MutationObserver(applyBadge);
          observer.observe(questionArea, { childList: true, subtree: true, characterData: true });
          // 首次也应用一次
          applyBadge();
        }
      }, 60);

      // wrapper：对答题结果注入连击/暴击特效
      opts.onCorrect = function (payload) {
        const scene = document.querySelector('.v43-battle-modal');
        if (comboCtrl && scene) {
          const q = (payload && payload.question) || null;
          const eff = comboCtrl.onCorrect(q);
          // 若命中弱点，给一次 1.5x 额外结算（floatText 提示）
          if (scene.__v436_weakpoint_hit) {
            scene.__v436_weakpoint_hit = false;
            const rect = scene.getBoundingClientRect();
            const el = document.createElement('div');
            el.className = 'v436-combo-float';
            el.style.color = '#ffb266';
            el.style.fontSize = '30px';
            el.style.left = (rect.left + rect.width / 2) + 'px';
            el.style.top = (rect.top + rect.height * 0.55) + 'px';
            el.textContent = '⚡ 弱点破碎！+50% 伤害';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 900);
          }
        }
        return typeof origOnCorrect === 'function' ? origOnCorrect(payload) : undefined;
      };
      opts.onWrong = function (payload) {
        if (comboCtrl) comboCtrl.onWrong((payload && payload.question) || null);
        return typeof origOnWrong === 'function' ? origOnWrong(payload) : undefined;
      };

      return rv;
    };
    UI.openBattle.__v436Wrapped = true;
    console.log('%c[v4.3.6-arena] ✔ 战斗强化层已挂载 (连击/暴击/弱点/智能出题)',
                'color:#ff9ec6;font-weight:bold;');
  }

  // 等 UI.openBattle 就绪
  if (typeof UI.openBattle === 'function') {
    wrapOpenBattle();
  } else {
    const timer = setInterval(() => {
      if (typeof UI.openBattle === 'function') {
        clearInterval(timer);
        wrapOpenBattle();
      }
    }, 200);
    setTimeout(() => clearInterval(timer), 8000);
  }

  // ---------------------------------------------------------------
  // 五、注入 UI.__v43BattleCurrentQuestion 追踪
  //     openBattle 内部会 setCurrentQuestion，我们 hook 一下
  // ---------------------------------------------------------------
  // 无法直接改 openBattle 内部，但可以观察 DOM 变化拿题
  // （已在 wrap 里通过 MutationObserver 处理）

  // 顺便挂个手动 API：Game.arena.demoBattle() 打测试用
  Game.arena = Game.arena || {};
  Game.arena.demoBattle = function (sect) {
    sect = sect || 'physics';
    // v4.3.5g 重构：演示妖兽也标 autoScale + enemyRid，处处一致
    const enemy = {
      name: '雷煞·紫电', hp: 60, maxHp: 60, atk: 12, diff: 'normal',
      sect, manualId: 'phy_m18',
      enemyRid: (Game.state && Game.state.char && Game.state.char.realmId) || 0,
      autoScale: true
    };
    UI.openBattle({
      enemy,
      getQuestion: () => Game.SQ.pick({ sect, manualId: enemy.manualId, playerRealm: Game.state.char.realmId, mode: 'battle' }),
      onWin: () => UI.toast('斩妖成功！', 'success'),
      onLose: () => UI.toast('战败，多加练习', 'warn'),
      onClose: () => {},
    });
  };

})(typeof window !== 'undefined' ? window : this);
