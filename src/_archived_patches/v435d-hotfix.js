/* ===================================================================
 * v4.3.5d · 核心硬修 (总入口)
 * -------------------------------------------------------------------
 * 本轮针对 v4.3.5c 实测后的 6 个真实问题：
 *   ①「炼丹/种药主页面没有」    → 主地图节点接入 AlchemyLab / SpiritGarden
 *   ②「洞府几次就突破」          → 打坐彻底不产出修为 (getMeditateExpGain 恒=0)
 *   ③「秘境奖励过高」            → 秘境修为奖励 ×0.05，灵石 ×0.6，主要给灵石/丹方
 *   ④「属性上去了怪物不变」      → 怪物 HP/ATK/DEF 与玩家 realmId 指数化联动
 *   ⑤「越阶不许打」              → OpenBattle 层再拦一次 gap>=3
 *   ⑥「成就一直显示 0」          → getAchievementSummary 每次先强制校验再读取
 *   ⑦「题目未定义/没答案」       → 六大题库启动时过滤 + 保留 answer:0 合法值
 *   ⑧ 补丁自身：兜底修主页渲染
 *
 * 加载顺序：必须放在 v435c-hotfix.js 之后、alchemy-lab & spirit-garden 之前。
 * =================================================================== */
(function (global) {
  'use strict';
  const Game = global.Game;
  const UI   = global.UI;
  const SubjectPage = global.SubjectPage;
  if (!Game || !UI) return;
  if (global.__WENDAO_V435D__) return;
  global.__WENDAO_V435D__ = true;
  Game.__hotfixVersion = '4.3.5d';

  const IS_SUBJECT = typeof location !== 'undefined' && /\/subjects\//.test(location.pathname);
  function fmt(n){ try { return Game.formatBigNum ? Game.formatBigNum(n) : String(n); } catch(e){ return String(n); } }
  function realmNameById(id){ const r = Game.getRealm ? Game.getRealm(id) : null; return r ? (r.name || ('第'+id+'境')) : ('第'+id+'境'); }

  // -------------------------------------------------------------
  // ① 洞府：明确改成"纯回血/道心站"，不再产出修为
  // -------------------------------------------------------------
  Game.getMeditateDailyLimit = function(){ return 2; };
  Game.getMeditateExpGain    = function(){ return 0; };
  Game.canMeditate = function(){
    const cave = this.state.cave || {};
    const today = new Date().toISOString().slice(0,10);
    const cd = 60 * 60 * 1000; // 1h
    if (cave._v435dDay !== today) return Date.now() - (cave.lastMeditateAt || 0) > cd;
    return (Date.now() - (cave.lastMeditateAt || 0) > cd) && ((cave._v435dCount || 0) < this.getMeditateDailyLimit());
  };
  Game.getMeditateRemain = function(){
    const cave = this.state.cave || {};
    const today = new Date().toISOString().slice(0,10);
    if (cave._v435dDay !== today) return this.getMeditateDailyLimit();
    return Math.max(0, this.getMeditateDailyLimit() - (cave._v435dCount || 0));
  };
  Game.meditate = function(){
    const cave = this.state.cave = this.state.cave || { level:1, lastMeditateAt:0 };
    const now = Date.now();
    const today = new Date().toISOString().slice(0,10);
    if (cave._v435dDay !== today) { cave._v435dDay = today; cave._v435dCount = 0; }
    if (cave._v435dCount >= this.getMeditateDailyLimit()) {
      return { ok:false, msg:`今日打坐已满 ${this.getMeditateDailyLimit()} 次；洞府只是养神之地，不是速通门。` };
    }
    if (now - (cave.lastMeditateAt || 0) < 60 * 60 * 1000) {
      const remain = Math.ceil((60*60*1000 - (now - (cave.lastMeditateAt||0)))/60000);
      return { ok:false, msg:`丹田未平息，${remain} 分钟后再来闭关` };
    }
    cave.lastMeditateAt = now;
    cave._v435dCount += 1;
    const daoxinGain = 30 + Math.min(20, (cave.level||1) * 3);
    this.changeDaoxin(daoxinGain);
    this.state.char.hp = this.state.char.maxHp;
    this.state.char.mp = this.state.char.maxMp;
    this.save();
    return { ok:true, msg:`🧘 打坐圆满：HP / MP 全满 · 道心 +${daoxinGain} （今日剩 ${this.getMeditateRemain()} 次，不再产出修为）` };
  };

  // -------------------------------------------------------------
  // ② 秘境：奖励砍到点缀级 (修为 ×0.05，灵石 ×0.6)
  // -------------------------------------------------------------
  const originalEnterSecret = Game.enterSecret ? Game.enterSecret.bind(Game) : null;
  if (originalEnterSecret) {
    Game.enterSecret = function(){
      // 先记录探险前的 exp/shi，再执行原本方法，再回退到 5%
      const before = { exp: this.state.char.exp || 0, shi: this.state.char.lingshi || 0 };
      const r = originalEnterSecret();
      const after  = { exp: this.state.char.exp || 0, shi: this.state.char.lingshi || 0 };
      const gainExp = after.exp - before.exp;
      const gainShi = after.shi - before.shi;
      if (gainExp > 0) {
        // 扣回 95% 修为
        const rollback = Math.round(gainExp * 0.95);
        this.state.char.exp = Math.max(0, this.state.char.exp - rollback);
      }
      if (gainShi > 0) {
        // 扣回 40% 灵石
        const rollback = Math.round(gainShi * 0.4);
        this.state.char.lingshi = Math.max(0, this.state.char.lingshi - rollback);
      }
      this.save();
      if (r && r.rewards) {
        if (typeof r.rewards.exp === 'number') r.rewards.exp = Math.max(0, Math.round(r.rewards.exp * 0.05));
        if (typeof r.rewards.shi === 'number') r.rewards.shi = Math.max(0, Math.round(r.rewards.shi * 0.6));
      }
      return r;
    };
  }

  // -------------------------------------------------------------
  // ③ 妖兽属性彻底跟随玩家指数化
  //   同阶：2-4 回合可解
  //   精英：5-8 回合
  //   妖王：10-15 回合（同阶最高）
  //   越阶 +1 稍难 / +2 极难 / +3 起禁入
  // -------------------------------------------------------------
  Game.scaleMonsterForRealm = function(base){
    base = base || {};
    const playerRid = this.state.char.realmId || 0;
    const enemyRid  = Number.isFinite(base.enemyRid) ? base.enemyRid : playerRid;
    const gap = enemyRid - playerRid;

    // 玩家目标属性（依赖 v435c 的 getTargetStatsForRealm 或本地兜底）
    const p = (this.getTargetStatsForRealm ? this.getTargetStatsForRealm(playerRid)
              : { maxHp: 900*(1+playerRid*0.12), atk: 120*(1+playerRid*0.10), def: 60*(1+playerRid*0.08) });

    const diffMul  = { easy:0.55, normal:1.0, hard:1.55, boss:2.4 }[base.diff||'normal'] || 1;
    // 越阶补正：+1 → 1.22 / +2 → 1.44 / +3 → 1.66 (但+3已禁)
    const gapHp    = 1 + Math.max(-0.6, Math.min(1.6, gap * 0.22));
    const gapAtk   = 1 + Math.max(-0.6, Math.min(1.6, gap * 0.18));
    const hpVal    = Math.max(80, Math.round(p.maxHp * 0.88 * diffMul * gapHp));
    const atkVal   = Math.max(8,  Math.round(p.atk   * 0.62 * diffMul * gapAtk));
    const defVal   = Math.max(1,  Math.round((p.def||0) * 0.42 * diffMul));
    return {
      name: base.name || '妖兽',
      hp: hpVal, maxHp: hpVal,
      atk: atkVal, def: defVal,
      diff: base.diff || 'normal',
      enemyRid,
      attackChance: base.diff === 'boss' ? 0.85 : base.diff === 'hard' ? 0.7 : 0.55,
      title: base.title || '',
    };
  };

  // getTargetStatsForRealm 兜底（防止 v435c 未加载）
  if (!Game.getTargetStatsForRealm) {
    Game.getTargetStatsForRealm = function(realmId){
      const id = Math.max(0, realmId || 0);
      if (id <= 0) return { maxHp:100, maxMp:50, atk:20, def:5 };
      const rm = Math.max(1, this.getRealmMultiplier ? this.getRealmMultiplier() : (1 + id * 0.12));
      return {
        maxHp: Math.round(900 * Math.pow(rm, 1.02) + id * 120),
        maxMp: Math.round(460 * Math.pow(rm, 1.01) + id * 70),
        atk:   Math.round(118 * Math.pow(rm, 0.98) + id * 10),
        def:   Math.round(72  * Math.pow(rm, 0.96) + id * 8)
      };
    };
  }
  if (!Game.rebalanceStatsToRealm) {
    Game.rebalanceStatsToRealm = function(fillHpMp){
      const c = this.state.char;
      const target = this.getTargetStatsForRealm(c.realmId || 0);
      c.maxHp = Math.max(c.maxHp || 0, target.maxHp);
      c.maxMp = Math.max(c.maxMp || 0, target.maxMp);
      c.atk   = Math.max(c.atk   || 0, target.atk);
      c.def   = Math.max(c.def   || 0, target.def);
      if (fillHpMp) { c.hp = c.maxHp; c.mp = c.maxMp; }
      else { c.hp = Math.min(c.maxHp, Math.max(1, c.hp || c.maxHp)); c.mp = Math.min(c.maxMp, Math.max(0, c.mp || c.maxMp)); }
      return target;
    };
  }

  // -------------------------------------------------------------
  // ④ 越阶 +3 战斗层拦截 (斩妖场卡片层已禁，这里做兜底)
  // -------------------------------------------------------------
  const originalOpenBattle = UI.openBattle ? UI.openBattle.bind(UI) : null;
  if (originalOpenBattle) {
    UI.openBattle = function(opts){
      opts = opts || {};
      const enemy = opts.enemy || {};
      const enemyRid = Number.isFinite(enemy.enemyRid) ? enemy.enemyRid
                     : Number.isFinite(enemy.realmId) ? enemy.realmId
                     : Number.isFinite(enemy.rid) ? enemy.rid
                     : (Game.state.char.realmId || 0);
      const gap = enemyRid - (Game.state.char.realmId || 0);
      if (gap >= 3) {
        UI.toast('✕ 越阶 +3 已禁入：现阶段最多能挑战高你两阶的妖王', 'warn');
        if (typeof opts.onClose === 'function') opts.onClose();
        return;
      }
      return originalOpenBattle(opts);
    };
  }

  // -------------------------------------------------------------
  // ⑤ 战斗奖励重算：低阶少奖 / 同阶正常 / 越阶多奖
  // -------------------------------------------------------------
  Game.getBattleReward = function(opts){
    const diff = opts && opts.diff || 'normal';
    const playerId = this.state.char.realmId || 0;
    const enemyLev = opts && Number.isFinite(opts.enemyLev) ? opts.enemyLev : playerId;
    const gap = enemyLev - playerId;
    const diffBase = { easy:{exp:35,shi:22}, normal:{exp:85,shi:52}, hard:{exp:180,shi:110}, boss:{exp:380,shi:230} }[diff]
                  || { exp:85, shi:52 };
    // 境界系数：玩家越高，同阶奖励也越高（防止后期奖励毫无价值）
    const rm = Math.max(1, this.getRealmMultiplier ? Math.pow(this.getRealmMultiplier(), 0.35) : 1);
    // gap 系数：低阶递减、越阶递增
    const gapMul = gap === 0 ? 1
      : gap > 0 ? (1 + gap * 0.85)
      : Math.max(0.03, 1 + gap * 0.32);
    return {
      exp: Math.max(1, Math.round(diffBase.exp * gapMul * rm)),
      shi: Math.max(1, Math.round(diffBase.shi * gapMul * rm))
    };
  };

  // -------------------------------------------------------------
  // ⑥ 成就实时校验 (v435c 已修，本轮加强：NaN 兜底 + 触发 UI 事件)
  // -------------------------------------------------------------
  Game._checkAchievements = function () {
    if (!Game.ACHIEVEMENTS) return;
    if (this.__achvChecking) return;
    this.__achvChecking = true;
    const s = this.state;
    s.achievements = s.achievements || {};
    let pendingShi = 0, pendingExp = 0;
    const unlocked = [];
    Object.keys(Game.ACHIEVEMENTS).forEach(aid => {
      const a = Game.ACHIEVEMENTS[aid];
      const rec = s.achievements[aid] = s.achievements[aid] || { progress: 0, done: false };
      let curRaw = 0;
      try { curRaw = typeof a.check === 'function' ? a.check(s) : 0; } catch(e){ curRaw = 0; }
      const cur = Number.isFinite(curRaw) ? curRaw : 0;
      rec.progress = Math.max(0, Math.min(a.target || 1, cur));
      if (!rec.done && cur >= (a.target || 1)) {
        rec.done = true;
        rec.doneAt = Date.now();
        unlocked.push({ id: aid, achv: a });
        if (a.reward) { pendingShi += a.reward.shi || 0; pendingExp += a.reward.exp || 0; }
      }
    });
    this.__achvChecking = false;
    unlocked.forEach(evt => this.emit('achievementUnlock', evt));
    if (pendingShi) this.addLingshi(pendingShi);
    if (pendingExp) this.addExp(pendingExp);
  };
  Game.getAchievementSummary = function(){
    this._checkAchievements();
    const records = this.state.achievements || {};
    const total = Object.keys(Game.ACHIEVEMENTS || {}).length;
    const done = Object.values(records).filter(x => x && x.done).length;
    return { total, done, records };
  };

  // -------------------------------------------------------------
  // ⑦ 题库底线过滤：保留 answer:0 / answer:false 合法值
  //    只过滤 q 为空、或 answer===undefined/null/''
  // -------------------------------------------------------------
  ['PHYSICS_BANK','CHEMISTRY_BANK','GEOGRAPHY_BANK','CHINESE_BANK','MATH_BANK','ENGLISH_BANK'].forEach(key => {
    if (!Array.isArray(global[key])) return;
    const before = global[key].length;
    global[key] = global[key].filter(q => {
      if (!q || typeof q.q !== 'string' || !q.q.trim()) return false;
      if (q.answer === undefined || q.answer === null || q.answer === '') return false;
      return true;
    });
    const after = global[key].length;
    if (before !== after) console.info(`[v4.3.5d] ${key}: 剔除 ${before-after} 道破损题`);
  });

  // -------------------------------------------------------------
  // ⑧ 主地图节点：把 alchemy / pet 接到真炼丹/灵植园
  // -------------------------------------------------------------
  const originalRenderWorldMap = UI.renderWorldMap && UI.renderWorldMap.bind(UI);
  if (originalRenderWorldMap) {
    UI.renderWorldMap = function(){
      const html = originalRenderWorldMap();
      return html.replace('修仙设施已经并入主地图', '修仙设施已完整 · 真·炼丹房 & 灵植园已接入')
                 .replace('斩妖场与洞府可直接点开', '斩妖场每大境界 12 只 · 属性同步玩家');
    };
  }
  const originalBindWorldMap = UI.bindWorldMap && UI.bindWorldMap.bind(UI);
  if (originalBindWorldMap) {
    UI.bindWorldMap = function(container){
      originalBindWorldMap(container);
      container.querySelectorAll('[data-node="alchemy"]').forEach(g => {
        g.onclick = () => {
          if (global.AlchemyLab && global.AlchemyLab.open) global.AlchemyLab.open();
          else UI.toast('🔧 炼丹房加载中，请稍候刷新', 'info');
        };
      });
      container.querySelectorAll('[data-node="pet"]').forEach(g => {
        g.onclick = () => {
          if (global.SpiritGarden && global.SpiritGarden.open) global.SpiritGarden.open();
          else if (UI._openArtifactModal) UI._openArtifactModal('pet');
          else UI.toast('🌱 灵植园加载中', 'info');
        };
      });
    };
  }
  const originalBindFourGrid = UI.bindFourGrid && UI.bindFourGrid.bind(UI);
  if (originalBindFourGrid) {
    UI.bindFourGrid = function(){
      originalBindFourGrid();
      const grid = document.querySelector('.xx-four-grid');
      if (!grid) return;
      grid.querySelectorAll('[data-open="pill"]').forEach(el => {
        el.onclick = () => {
          if (global.AlchemyLab && global.AlchemyLab.open) global.AlchemyLab.open();
          else if (UI._openArtifactModal) UI._openArtifactModal('pill');
        };
      });
      grid.querySelectorAll('[data-open="pet"]').forEach(el => {
        el.onclick = () => {
          if (global.SpiritGarden && global.SpiritGarden.open) global.SpiritGarden.open();
          else if (UI._openArtifactModal) UI._openArtifactModal('pet');
        };
      });
    };
  }

  // -------------------------------------------------------------
  // ⑨ 老存档一次性校准
  // -------------------------------------------------------------
  try {
    if (Game.state) {
      if (Game.rebalanceStatsToRealm) Game.rebalanceStatsToRealm(false);
      Game.getAchievementSummary();
      Game.save();
    }
  } catch (e) { console.warn('[v4.3.5d] init failed', e); }

  console.log('[v4.3.5d] core hotfix loaded — 洞府/秘境/怪物/越阶/成就/题库 全面重修');
})(typeof window !== 'undefined' ? window : this);
