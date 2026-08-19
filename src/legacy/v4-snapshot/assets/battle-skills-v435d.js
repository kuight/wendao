/* ===================================================================
 * v4.3.5d · 战斗中法术施展 UI (battle-skills)
 * -------------------------------------------------------------------
 * 用户抱怨"答题动作太单调"。本模块给战斗界面挂一个法术条：
 *   - 玩家学过的功法 = 已解锁的法术（每篇 mastered manual 挂一个技能）
 *   - 每个法术消耗 MP，冷却回合数（1-3 回合）
 *   - 效果：伤害倍增、破防、回血、稳心（连击不易断）
 *
 * 加载顺序：在 v435d-hotfix.js 之后（依赖 UI.openBattle）。
 * =================================================================== */
(function (global) {
  'use strict';
  const Game = global.Game;
  const UI = global.UI;
  if (!Game || !UI) return;
  if (global.__BATTLE_SKILLS_V435D__) return;
  global.__BATTLE_SKILLS_V435D__ = true;

  // ---- 技能定义（对应六科的通用技能池）----
  const SKILL_POOL = {
    physics: [
      { id:'thunder',    name:'雷霆一击', icon:'⚡', mp:20, cd:2, kind:'dmg', mult:2.2, desc:'次次答对伤害×2.2' },
      { id:'magfield',   name:'磁场护罩', icon:'🛡', mp:25, cd:3, kind:'shield', value:0.5, desc:'下回合受伤 -50%' },
      { id:'gravity',    name:'万有牵引', icon:'🌀', mp:30, cd:3, kind:'stun', desc:'妖兽本回合无法反击' }
    ],
    chemistry: [
      { id:'flame',      name:'焱焰喷发', icon:'🔥', mp:22, cd:2, kind:'dmg', mult:2.0, desc:'答对时爆发火伤' },
      { id:'acid',       name:'强酸腐蚀', icon:'⚗', mp:20, cd:2, kind:'defbreak', desc:'妖兽 DEF -40%（2 回合）' },
      { id:'antidote',   name:'解毒回复', icon:'💧', mp:28, cd:3, kind:'heal', value:0.3, desc:'恢复 30% HP' }
    ],
    geography: [
      { id:'mountain',   name:'山川压顶', icon:'⛰', mp:24, cd:3, kind:'dmg', mult:2.3, desc:'重击妖兽（爆发伤害）' },
      { id:'monsoon',    name:'季风回旋', icon:'🌪', mp:20, cd:2, kind:'dodge', desc:'下回合闪避' },
      { id:'oasis',      name:'绿洲之泉', icon:'🌿', mp:25, cd:3, kind:'heal', value:0.25, desc:'恢复 25% HP + 10 MP' }
    ],
    chinese: [
      { id:'poem',       name:'诗心感悟', icon:'📜', mp:18, cd:2, kind:'combo', desc:'本回合连击不会断' },
      { id:'sword',      name:'笔剑挥毫', icon:'🖋', mp:22, cd:2, kind:'dmg', mult:2.0, desc:'笔为剑，答对时暴击' },
      { id:'calm',       name:'静心归元', icon:'🧘', mp:25, cd:3, kind:'daoxin', desc:'道心 +30' }
    ],
    math: [
      { id:'axis',       name:'坐标锁定', icon:'📐', mp:20, cd:2, kind:'dmg', mult:2.1, desc:'精准打击' },
      { id:'limit',      name:'极限拆解', icon:'∞', mp:26, cd:3, kind:'defbreak', desc:'妖兽 DEF -50%（2 回合）' },
      { id:'integral',   name:'积分蓄势', icon:'∫', mp:24, cd:3, kind:'charge', desc:'下次答对伤害 ×3' }
    ],
    english: [
      { id:'grammar',    name:'语法解构', icon:'🌐', mp:20, cd:2, kind:'defbreak', desc:'妖兽 DEF -35%' },
      { id:'vocab',      name:'词灵召唤', icon:'📖', mp:22, cd:2, kind:'dmg', mult:2.0, desc:'答对时符文附体伤害' },
      { id:'listen',     name:'倾听之心', icon:'🎧', mp:24, cd:3, kind:'combo', desc:'本回合连击不断' }
    ]
  };

  function getPlayerSkills(){
    // 依据每宗门参悟的功法数量决定解锁哪些技能
    const skills = [];
    Object.keys(SKILL_POOL).forEach(sect => {
      const mastered = ((Game.state.sects[sect] && Game.state.sects[sect].masteredManuals) || []).length;
      const pool = SKILL_POOL[sect];
      // 每 2 篇解锁 1 个技能
      for (let i = 0; i < Math.min(pool.length, Math.floor(mastered / 2)); i++) {
        skills.push({ ...pool[i], sect });
      }
    });
    return skills;
  }

  // -------- 关键：Hook UI.openBattle，追加技能栏 --------
  const originalOpenBattle = UI.openBattle ? UI.openBattle.bind(UI) : null;
  if (!originalOpenBattle) return;

  UI.openBattle = function(opts){
    opts = opts || {};
    // 记录战斗上下文
    const skills = getPlayerSkills();
    if (!skills.length) {
      // 没有技能，直接透传
      return originalOpenBattle(opts);
    }

    // 战斗状态（技能相关）
    const ctx = {
      cds: {},  // 技能冷却
      buffs: { dmgMul:1, chargeMul:1, defBreak:0, defBreakTurns:0, dodgeNext:false, comboLock:false, stunNext:false, shieldNext:0 },
      turn: 0
    };

    // 包装 opts.onWin / onLose 以便清理
    const origWin  = opts.onWin;
    const origLose = opts.onLose;
    const origClose= opts.onClose;
    opts.onWin  = (...a) => { cleanup(); if (origWin)  origWin(...a); };
    opts.onLose = (...a) => { cleanup(); if (origLose) origLose(...a); };
    opts.onClose= (...a) => { cleanup(); if (origClose)origClose(...a); };

    // 调用原战斗
    originalOpenBattle(opts);

    // 注入技能栏到战斗弹窗
    let panel = null, cleanupTimer = null;
    setTimeout(injectPanel, 60);
    // 二次注入（防止战斗弹窗内部重渲染）
    setTimeout(injectPanel, 500);

    function injectPanel(){
      const battle = document.querySelector('.xx-battle, .xx-modal .battle-arena, .xx-modal .xx-modal-body');
      if (!battle) return;
      if (battle.querySelector('.bskill-panel')) return;
      panel = document.createElement('div');
      panel.className = 'bskill-panel';
      panel.innerHTML = renderPanel();
      // 加到战斗界面尾部
      const target = battle.querySelector('.battle-arena') || battle;
      target.appendChild(panel);
      bindPanel();
    }
    function renderPanel(){
      const mp = Game.state.char.mp || 0;
      const maxMp = Game.state.char.maxMp || 0;
      return `<div class="bskill-hdr">
        <span>🔮 法术施展</span>
        <span style="margin-left:auto;font-size:12px;color:#6ed5e0">MP ${mp} / ${maxMp}</span>
      </div>
      <div class="bskill-list">${skills.map(s => {
        const cd = ctx.cds[s.id] || 0;
        const canAfford = (Game.state.char.mp||0) >= s.mp;
        const usable = cd <= 0 && canAfford;
        return `<button class="bskill ${usable?'':'disabled'}" data-skill="${s.id}" ${usable?'':'disabled'} title="${s.desc}">
          <span class="bs-icon">${s.icon}</span>
          <span class="bs-name">${s.name}</span>
          <span class="bs-cost">MP ${s.mp}${cd>0?` · CD${cd}`:''}</span>
        </button>`;
      }).join('')}</div>`;
    }
    function bindPanel(){
      if (!panel) return;
      panel.querySelectorAll('[data-skill]').forEach(btn => {
        btn.onclick = () => castSkill(btn.dataset.skill);
      });
    }
    function refreshPanel(){
      if (!panel) return;
      panel.innerHTML = renderPanel();
      bindPanel();
    }

    function castSkill(sid){
      const s = skills.find(x => x.id === sid);
      if (!s) return;
      if ((ctx.cds[sid]||0) > 0) return;
      if ((Game.state.char.mp||0) < s.mp) { UI.toast('MP 不足', 'warn'); return; }
      Game.state.char.mp -= s.mp;
      ctx.cds[sid] = s.cd;
      // 触发效果（下一次答对时读取）
      applyEffect(s);
      Game.save();
      refreshPanel();
    }

    function applyEffect(s){
      switch (s.kind) {
        case 'dmg':      ctx.buffs.dmgMul = Math.max(ctx.buffs.dmgMul, s.mult||1.8); UI.toast(`⚡ ${s.name}：下次答对伤害 ×${s.mult}`, 'success'); break;
        case 'charge':   ctx.buffs.chargeMul = Math.max(ctx.buffs.chargeMul, 3); UI.toast(`∫ ${s.name}：下次答对伤害 ×3`, 'success'); break;
        case 'defbreak': ctx.buffs.defBreak = Math.max(ctx.buffs.defBreak, s.value||0.4); ctx.buffs.defBreakTurns = 2;
                         UI.toast(`⚗ ${s.name}：妖兽 DEF 大幅下降`, 'success'); tryReduceEnemyDef(s.value||0.4); break;
        case 'heal':     const heal = Math.round((Game.state.char.maxHp||0) * (s.value||0.25));
                         Game.state.char.hp = Math.min(Game.state.char.maxHp, (Game.state.char.hp||0) + heal);
                         UI.toast(`💧 ${s.name}：HP +${heal}`, 'success'); tryUpdateHpBar(); break;
        case 'shield':   ctx.buffs.shieldNext = s.value||0.5; UI.toast(`🛡 ${s.name}：下回合受伤 -50%`, 'success'); break;
        case 'stun':     ctx.buffs.stunNext = true; UI.toast(`🌀 ${s.name}：妖兽本回合无法反击`, 'success'); break;
        case 'dodge':    ctx.buffs.dodgeNext = true; UI.toast(`🌪 ${s.name}：下回合闪避`, 'success'); break;
        case 'combo':    ctx.buffs.comboLock = true; UI.toast(`📜 ${s.name}：本回合连击不会断`, 'success'); break;
        case 'daoxin':   Game.changeDaoxin(30); UI.toast(`🧘 ${s.name}：道心 +30`, 'success'); break;
      }
      // 每个 buff 挂一个 flag 到全局供战斗核心可选读取
      Game.__battleBuffs = ctx.buffs;
    }

    function tryReduceEnemyDef(val){
      // 战斗弹窗里如果有 enemy 面板显示 DEF，尝试标记减防
      const badge = document.querySelector('.battle-enemy-info, .xx-battle .enemy');
      if (badge && !badge.querySelector('.bskill-defbreak')) {
        const tag = document.createElement('span');
        tag.className = 'bskill-defbreak';
        tag.textContent = `破防 -${Math.round(val*100)}%`;
        badge.appendChild(tag);
        setTimeout(() => tag.remove(), 6000);
      }
    }
    function tryUpdateHpBar(){
      // 触发一次全局事件让 UI 重刷
      try { Game.emit('daoxinChange', Game.state.char.daoxin); Game.emit('expChange', Game.state.char.exp); } catch(e){}
    }

    // 每次战斗行动降 CD（我们不直接侵入战斗核心，只在按下技能时降）
    // 附加：监听答题事件（若 Game.emit('answer', ...) 存在）
    const answerHandler = (evt) => {
      ctx.turn++;
      // 冷却递减
      Object.keys(ctx.cds).forEach(k => { if (ctx.cds[k] > 0) ctx.cds[k]--; });
      // buff turnly
      if (ctx.buffs.defBreakTurns > 0) ctx.buffs.defBreakTurns--;
      // 一次性 buff 用完立即清
      if (ctx.buffs.dmgMul !== 1)   setTimeout(() => ctx.buffs.dmgMul = 1, 0);
      if (ctx.buffs.chargeMul !== 1)setTimeout(() => ctx.buffs.chargeMul = 1, 0);
      if (ctx.buffs.stunNext)       setTimeout(() => ctx.buffs.stunNext = false, 0);
      if (ctx.buffs.dodgeNext)      setTimeout(() => ctx.buffs.dodgeNext = false, 0);
      if (ctx.buffs.shieldNext)     setTimeout(() => ctx.buffs.shieldNext = 0, 0);
      if (ctx.buffs.comboLock)      setTimeout(() => ctx.buffs.comboLock = false, 0);
      refreshPanel();
    };
    if (typeof Game.on === 'function') Game.on('answer', answerHandler);

    function cleanup(){
      if (typeof Game.off === 'function' && answerHandler) { try { Game.off('answer', answerHandler); } catch(e){} }
      if (cleanupTimer) clearInterval(cleanupTimer);
      Game.__battleBuffs = null;
      if (panel && panel.parentNode) panel.parentNode.removeChild(panel);
    }
  };

  // -------- 样式 --------
  const style = document.createElement('style');
  style.id = 'bskill-style-v435d';
  style.textContent = `
    .bskill-panel{margin-top:12px;padding:10px;background:linear-gradient(135deg,rgba(178,136,255,.08),rgba(110,213,224,.06));border:1px solid rgba(178,136,255,.24);border-radius:12px}
    .bskill-hdr{display:flex;align-items:center;gap:8px;font-size:13px;color:#b288ff;letter-spacing:2px;margin-bottom:8px}
    .bskill-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:6px}
    .bskill{padding:6px 8px;background:rgba(14,12,26,.72);border:1px solid rgba(178,136,255,.32);border-radius:10px;cursor:pointer;transition:transform .12s ease,box-shadow .12s ease;color:#f8ead5;font-size:12px;display:flex;flex-direction:column;align-items:center;gap:2px}
    .bskill:hover:not(.disabled){transform:translateY(-2px);box-shadow:0 6px 12px rgba(178,136,255,.24)}
    .bskill.disabled{opacity:.42;cursor:not-allowed}
    .bs-icon{font-size:18px}
    .bs-name{font-size:11px;font-weight:700}
    .bs-cost{font-size:10px;color:#6ed5e0}
    .bskill-defbreak{margin-left:6px;padding:2px 8px;border-radius:999px;background:rgba(226,91,91,.3);color:#ff9b9b;font-size:11px}
  `;
  document.head.appendChild(style);

  console.log('[v4.3.5d] battle-skills loaded — 战斗中可施展法术');
})(typeof window !== 'undefined' ? window : this);
