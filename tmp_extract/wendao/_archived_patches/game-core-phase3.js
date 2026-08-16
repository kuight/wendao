/* ===============================================================
 * 《问道修仙学院》v4.0 · 融合版核心引擎（v4 境界 + v3 完整扩展）
 * v4.0 Bug 修复批次 (2026-07)：
 *   [FIX] 奖励曲线随境界指数增长（realmMultiplier）
 *   [FIX] 玩家属性随境界成长（每次突破自动升属性）
 *   [FIX] 道具/兽宠境界限制系统（realmReq）
 *   [FIX] 精进冷却随境界降低（高境界更快）
 *   [FIX] answerReport 补齐奖励（保证奖励入账）
 *   [FIX] openBattle 兼容旧接口 (question/onDone)
 *
 * 核心特性：
 *  ✔ v4 全新境界体系（10大境×3期×10层 + 登仙无上限，指数增长曲线）
 *  ✔ v4 功法4阶段参悟流程 + 半小时精进冷却
 *  ✔ v3 完整扩展：法宝 / 技能 / 洞府 / 每日任务 / 秘境 / 装备 / 丹药 / 灵宠 / 成就 / 大地图
 *  ✔ 向后兼容 v1-v3 存档，自动迁移
 * =============================================================== */

(function (global) {
  'use strict';

  // ================================================================
  // 一、境界系统（v4 新体系）
  // ================================================================
  const REALM_TIERS = [
    { key:'lianqi',  name:'炼气', color:'#6ed5e0', sub:'吸纳灵气入体，初窥修行门径' },
    { key:'lianti',  name:'炼体', color:'#7fffd4', sub:'淬体炼魄，肉身如玉' },
    { key:'zhuji',   name:'筑基', color:'#8ce28c', sub:'凝聚道基，稳如磐石' },
    { key:'jindan',  name:'金丹', color:'#f5c97a', sub:'金丹圆满，五行归一' },
    { key:'yuanying',name:'元婴', color:'#b288ff', sub:'元婴出窍，神游天地' },
    { key:'huashen', name:'化神', color:'#ff9ec6', sub:'化神归元，一念万千' },
    { key:'dujie',   name:'渡劫', color:'#e25b5b', sub:'九重雷劫，脱胎换骨' },
    { key:'lianxu',  name:'炼虚', color:'#d4a3ff', sub:'炼化虚空，与道同行' },
    { key:'dacheng', name:'大乘', color:'#ffd700', sub:'大乘之境，睥睨天下' },
    { key:'dengxian',name:'登仙', color:'#fff2cc', sub:'羽化登仙，无有极限' },
  ];
  const SUB_NAMES = ['初期','中期','后期'];
  const LAYERS_PER_SUB = 10;
  const SUBS_PER_TIER = 3;
  const LAYERS_PER_TIER = LAYERS_PER_SUB * SUBS_PER_TIER; // 30

  // ---------- 修为曲线（v4.2.6 大改：每小境界 ×100 且更陡指数）----------
  // 每一层"本层增量" = LAYER_BASE × GROWTH^(层数-1)
  //
  // v4.2.6 用户反馈：突破太快没有'爽过头就没意思'的沉淀感 → 全部 ×100 且指数更陡
  //   LAYER_BASE 30 → 3000（×100 起步）
  //   GROWTH 1.065 → 1.085（前中后期差距更悬殊，避免中期打飞）
  //
  // 新累计样本（GROWTH=1.085, BASE=3000）：
  //   炼气一层 L1   = 3,000       （启蒙掌握一功法）
  //   炼气十层 L10  = ~44,000     （原 404 × 100 ≈ 40k ✅）
  //   筑基一层 L21  = ~200,000    （原 1600 × 100 = 160k）
  //   筑基后期 L30  = ~440,000
  //   金丹一层 L31  = ~505,000    （原 2700 × 100 = 270k，稍陡）
  //   金丹后期 L60  = ~5,300,000
  //   元婴一层 L61  = ~6.0M       （原 21k × 100 = 2.1M，越到后期越陡）
  //   化神一层 L91  = ~62M        （原 142k × 100）
  //   渡劫一层 L121 = ~700M       （原 940k × 100 = 94M，陡曲线放大）
  //   炼虚一层 L151 = ~7B
  //   大乘一层 L181 = ~80B
  //   登仙一层 L211 = ~880B       （原 272M × 100 = 27B，登仙极致陡）
  //   L300（登仙后期） ≈ 数万 T   —— 高考后无尽刷题的"永动"阶段
  const LAYER_BASE = 3000;
  const GROWTH = 1.085;

  const REALMS = [];
  REALMS.push({ id:0, tierKey:'', name:'凡人', sub:'尚未入道', need:0, color:'#888' });
  let _cumulative = 0;
  for (let t = 0; t < REALM_TIERS.length; t++) {
    const tier = REALM_TIERS[t];
    const isDengxian = tier.key === 'dengxian';
    const totalLayers = isDengxian ? 100 : LAYERS_PER_TIER;
    for (let layerAll = 1; layerAll <= totalLayers; layerAll++) {
      const subIdx = isDengxian
        ? Math.min(2, Math.floor((layerAll - 1) / 33))
        : Math.floor((layerAll - 1) / LAYERS_PER_SUB);
      const subName = SUB_NAMES[subIdx] || '之后';
      const layerInSub = ((layerAll - 1) % LAYERS_PER_SUB) + 1;
      const globalLayer = REALMS.length; // 全局层号（凡人=0之后从1开始）
      const layerIncrement = Math.round(LAYER_BASE * Math.pow(GROWTH, globalLayer - 1));
      _cumulative += layerIncrement;
      REALMS.push({
        id: REALMS.length,
        tierKey: tier.key,
        tierName: tier.name,
        subName,
        layerInSub,
        layerInTier: layerAll,
        name: `${tier.name}${subName}${_layerZh(layerInSub)}层`,
        sub: tier.sub,
        need: _cumulative,
        increment: layerIncrement,
        color: tier.color,
      });
    }
  }
  function _layerZh(n) {
    const zh = ['一','二','三','四','五','六','七','八','九','十'];
    return zh[n - 1] || String(n);
  }

  // ================================================================
  // 二、灵根系统
  // ================================================================
  const SPIRIT_ROOTS = {
    fire:   { id:'fire',   name:'火灵根', icon:'🔥', desc:'火行属阳，性烈如焰。化学 +30%，物理 +10%。', boosts:{ chemistry:1.3, physics:1.1 } },
    water:  { id:'water',  name:'水灵根', icon:'💧', desc:'水行属阴，柔润万物。地理 +30%，语文 +10%。', boosts:{ geography:1.3, chinese:1.1 } },
    wood:   { id:'wood',   name:'木灵根', icon:'🌿', desc:'木行生发，慧根天生。语文 +30%，英语 +10%。', boosts:{ chinese:1.3, english:1.1 } },
    metal:  { id:'metal',  name:'金灵根', icon:'⚔',  desc:'金行锐利，明察秋毫。数学 +30%，物理 +10%。', boosts:{ math:1.3, physics:1.1 } },
    earth:  { id:'earth',  name:'土灵根', icon:'🪨', desc:'土行厚重，稳如山岳。地理 +20%，化学 +15%，物理 +10%。', boosts:{ geography:1.2, chemistry:1.15, physics:1.1 } },
    thunder:{ id:'thunder',name:'雷灵根', icon:'⚡', desc:'雷行罕见，悟性绝伦。物理 +40%，全科 +5%。', boosts:{ physics:1.4, _all:1.05 } },
  };

  // ================================================================
  // 三、法宝系统（v3 移植）
  // ================================================================
  const ARTIFACTS = {
    mingxin: { id:'mingxin', name:'明心镜', icon:'🪞', cost:200, desc:'答错时有 30% 概率不计入心魔录。', effect:'wrong_forgive', value:0.3 },
    juling:  { id:'juling',  name:'聚灵旗', icon:'🚩', cost:300, desc:'每次答对额外 +20% 修为。', effect:'exp_boost', value:1.2 },
    huxin:   { id:'huxin',   name:'护心符', icon:'🛡', cost:150, desc:'答错时道心损失减半。', effect:'daoxin_protect', value:0.5 },
    jingang: { id:'jingang', name:'金刚铃', icon:'🔔', cost:400, desc:'连击不会因为答错而归零（仅首次失误）。', effect:'streak_keep', value:1 },
    qiankun: { id:'qiankun', name:'乾坤袋', icon:'👝', cost:500, desc:'每日 1 次免费"洞察术"。', effect:'free_insight', value:1 },
    feijian: { id:'feijian', name:'御灵飞剑',icon:'🗡', cost:600, desc:'答对时有 15% 暴击，奖励翻倍。', effect:'crit', value:0.15 },
    tianyan: { id:'tianyan', name:'天眼通', icon:'👁', cost:800, desc:'查看题目时随机排除 1 个错误选项。', effect:'eliminate', value:1 },
    luntai:  { id:'luntai',  name:'轮回台', icon:'🌀', cost:1200,desc:'每日首次答错可"重来一次"。', effect:'rewind', value:1 },
  };

  // ================================================================
  // 四、技能系统（v3 移植）
  // ================================================================
  const SKILLS = {
    insight: { id:'insight', name:'洞察术', icon:'👁', cost:20, desc:'消耗 20 灵石，排除一个错误选项。' },
    huxin:   { id:'huxin',   name:'护心咒', icon:'🧘', cost:15, desc:'消耗 15 灵石，本题答错不扣道心、不计心魔。' },
    tianyin: { id:'tianyin', name:'天音咒', icon:'🔔', cost:30, desc:'消耗 30 灵石，显示一条解题提示。' },
    qiankun: { id:'qiankun', name:'乾坤一掷',icon:'🎲', cost:50, desc:'消耗 50 灵石，跳过本题（仅炼气期可用）。' },
  };

  // ================================================================
  // 五、默认存档
  // ================================================================
  const DEFAULT_SAVE = {
    version: 4,
    createdAt: 0,
    lastSavedAt: 0,
    char: {
      name: '无名',
      title: '问道弟子',
      avatar: '🧙',
      realmId: 0,
      exp: 0,
      lingshi: 0,
      daoxin: 100,
      streak: 0,
      bestStreak: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      spiritRoot: null,
      // v3 扩展：法宝 / 技能
      artifacts: [],
      equippedArtifacts: [],
      skillsUsedToday: {},
      lastDailyAt: 0,
      // v3 战斗属性
      hp: 100, maxHp: 100, mp: 50, maxMp: 50, atk: 20, def: 5, crit: 0.10,
      equippedGear: { weapon:null, robe:null, focus:null, crown:null },
      pet: null, pills: {}, gear: {},
      dailyStreak: 0, maxTowerFloor: 0, nightAnswered: 0, todayExpGain: 0,
    },
    flags: {},
    sects: {
      physics:   { masteredManuals: [], defeatedQuests: [], stars: {}, unlocked: true, proficiency:{}, refineTimes:{}, lastRefineAt:{}, learnStage:{} },
      chemistry: { masteredManuals: [], defeatedQuests: [], stars: {}, unlocked: true, proficiency:{}, refineTimes:{}, lastRefineAt:{}, learnStage:{} },
      geography: { masteredManuals: [], defeatedQuests: [], stars: {}, unlocked: true, proficiency:{}, refineTimes:{}, lastRefineAt:{}, learnStage:{} },
      chinese:   { masteredManuals: [], defeatedQuests: [], stars: {}, unlocked: true, proficiency:{}, refineTimes:{}, lastRefineAt:{}, learnStage:{} },
      math:      { masteredManuals: [], defeatedQuests: [], stars: {}, unlocked: true, proficiency:{}, refineTimes:{}, lastRefineAt:{}, learnStage:{} },
      english:   { masteredManuals: [], defeatedQuests: [], stars: {}, unlocked: true, proficiency:{}, refineTimes:{}, lastRefineAt:{}, learnStage:{} },
    },
    heartDemons: [],
    achievements: {},
    story: {
      currentChapter: 'prologue',
      seenScenes: [],
    },
    // v3 扩展模块
    cave: { level: 1, lastMeditateAt: 0 },
    daily: { date: '', tasks: [] },
    secretRealm: { lastEnterAt: 0, events: [], count: 0 },
    battle: { totalBattles: 0, victories: 0, defeats: 0, maxCombo: 0 },
    worldMap: {
      unlocked: { start:true, physics:true, chemistry:true, geography:true, chinese:true, math:true, english:true, tower:true },
      visitedNodes: [],
      currentNode: 'start'
    },
    pets: {},
    inventory: { pills: {}, equipments: [], pets: [] },
    equipped: { weapon: null, robe: null, artifact: null, crown: null },
    settings: {
      soundOn: false,
      autosave: true,
      compact: false,
      reducedMotion: false,
    },
  };

  const STORAGE_KEY = 'wendao_save_v1';

  // ================================================================
  // 六、存档工具
  // ================================================================
  function loadSave() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return migrate(deepMerge(deepClone(DEFAULT_SAVE), parsed));
    } catch (e) {
      console.warn('[Game] 读取存档失败', e);
      return null;
    }
  }
  function saveNow(data) {
    try {
      data.lastSavedAt = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn('[Game] 保存失败', e);
      return false;
    }
  }
  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }
  function deepMerge(target, src) {
    if (typeof src !== 'object' || src === null) return src;
    if (Array.isArray(src)) return src.slice();
    for (const k of Object.keys(src)) {
      if (typeof src[k] === 'object' && src[k] !== null && !Array.isArray(src[k])
          && typeof target[k] === 'object' && target[k] !== null) {
        target[k] = deepMerge(target[k], src[k]);
      } else {
        target[k] = src[k];
      }
    }
    return target;
  }
  function todayStr() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }

  // 迁移旧存档：v1-v3 → v4
  function migrate(data) {
    if (data.version === 4) return data;
    // v1-v3 存档：修为不动，realmId 按 exp 重新计算
    let newId = 0;
    for (let i = REALMS.length - 1; i >= 0; i--) {
      if (data.char.exp >= REALMS[i].need) { newId = i; break; }
    }
    data.char.realmId = newId;
    data.version = 4;
    // 确保新字段存在
    for (const sk of Object.keys(data.sects || {})) {
      data.sects[sk].refineTimes  = data.sects[sk].refineTimes  || {};
      data.sects[sk].lastRefineAt = data.sects[sk].lastRefineAt || {};
      data.sects[sk].learnStage   = data.sects[sk].learnStage   || {};
      data.sects[sk].proficiency  = data.sects[sk].proficiency  || {};
    }
    console.info('[Game] 存档已迁移至 v4 体系');
    return data;
  }

  // ================================================================
  // 七、Game 主对象
  // ================================================================
  const Game = {
    REALMS, REALM_TIERS, SUB_NAMES, LAYERS_PER_SUB,
    SPIRIT_ROOTS, ARTIFACTS, SKILLS,
    STORAGE_KEY,
    state: null,
    listeners: {},

    init() {
      const loaded = loadSave();
      if (loaded) {
        this.state = loaded;
      } else {
        this.state = deepClone(DEFAULT_SAVE);
        this.state.createdAt = Date.now();
      }
      this._ensureAllFields();
      // v4.0 FIX: 属性追赶——已达到较高境界但属性还是初始值的存档，重新计算属性
      this._catchUpStats();
      this._refreshDaily();
      // 记录深夜答题
      const h = new Date().getHours();
      if (h >= 1 && h <= 5) this.state.char.nightAnswered = 1;
      // 自动保存
      if (!this._autosaveTimer) {
        this._autosaveTimer = setInterval(() => {
          if (this.state.settings.autosave) this.save();
        }, 15000);
      }
      return this.state;
    },
    save() { return saveNow(this.state); },
    reset() {
      localStorage.removeItem(STORAGE_KEY);
      this.state = deepClone(DEFAULT_SAVE);
      this.state.createdAt = Date.now();
      this.save();
      this.emit('reset');
    },

    // v4.0 FIX: 为旧存档追赶属性——先重置到基础值，再按 realmId 重新叠加
    _catchUpStats() {
      const c = this.state.char;
      if (!c) return;
      // 已标记过则跳过，避免重复追赶
      if (c._v4StatsCatchup) return;
      const id = c.realmId || 0;
      if (id > 0) {
        // 基础值
        const baseHp = 100, baseMp = 50, baseAtk = 20, baseDef = 5, baseCrit = 0.10;
        // 计算装备加成
        let equipHp = 0, equipMp = 0, equipAtk = 0, equipDef = 0, equipCrit = 0;
        (Object.values(c.equippedGear || {})).forEach(gid => {
          if (!gid) return;
          const g = Game.GEAR_DATA && Game.GEAR_DATA[gid];
          if (g && g.buff) {
            equipHp   += g.buff.maxHp   || 0;
            equipMp   += g.buff.maxMp   || 0;
            equipAtk  += g.buff.atk     || 0;
            equipDef  += g.buff.def     || 0;
            equipCrit += g.buff.crit    || 0;
          }
        });
        // 境界累积成长（从 1 层到当前层）
        let addHp = 0, addMp = 0, addAtk = 0, addDef = 0, addCrit = 0;
        for (let l = 1; l <= id; l++) {
          const inc = 1 + l * 0.02;
          addHp += Math.round(15 * inc);
          addMp += Math.round(8 * inc);
          addAtk += Math.max(2, Math.round(3 * inc));
          addDef += Math.max(1, Math.round(1.5 * inc));
          if (l % 10 === 0) addCrit += 0.01;
        }
        const targetMaxHp = baseHp + addHp + equipHp;
        const targetMaxMp = baseMp + addMp + equipMp;
        const targetAtk   = baseAtk + addAtk + equipAtk;
        const targetDef   = baseDef + addDef + equipDef;
        const targetCrit  = Math.min(0.5, baseCrit + addCrit + equipCrit);
        // 只当当前属性 < 目标时才追赶（避免反者降低）
        if ((c.maxHp || 0) < targetMaxHp) c.maxHp = targetMaxHp;
        if ((c.maxMp || 0) < targetMaxMp) c.maxMp = targetMaxMp;
        if ((c.atk   || 0) < targetAtk)   c.atk   = targetAtk;
        if ((c.def   || 0) < targetDef)   c.def   = targetDef;
        if ((c.crit  || 0) < targetCrit)  c.crit  = targetCrit;
        c.hp = c.maxHp;
        c.mp = c.maxMp;
        console.info(`[Game v4.0] 属性追赶：境界层 ${id} → HP:${c.maxHp} MP:${c.maxMp} ATK:${c.atk} DEF:${c.def} CRIT:${(c.crit*100).toFixed(0)}%`);
      }
      c._v4StatsCatchup = true;
      this.save();
    },

    // 深度补齐（存档兼容双保险）
    _ensureAllFields() {
      const s = this.state;
      s.char = s.char || {};
      const defs = {
        artifacts: [], equippedArtifacts: [], skillsUsedToday: {}, spiritRoot: null,
        lastDailyAt: 0, hp: 100, maxHp: 100, mp: 50, maxMp: 50,
        atk: 20, def: 5, crit: 0.10, pet: null, pills: {}, gear: {},
        equippedGear: { weapon:null, robe:null, focus:null, crown:null },
        dailyStreak: 0, maxTowerFloor: 0, nightAnswered: 0, todayExpGain: 0
      };
      for (const k in defs) if (s.char[k] === undefined) s.char[k] = defs[k];
      s.flags = s.flags || {};
      s.cave = s.cave || { level:1, lastMeditateAt:0 };
      s.daily = s.daily || { date:'', tasks:[] };
      s.secretRealm = s.secretRealm || { lastEnterAt:0, events:[], count:0 };
      if (s.secretRealm.count === undefined) s.secretRealm.count = Array.isArray(s.secretRealm.events) ? s.secretRealm.events.length : 0;
      s.battle = s.battle || { totalBattles:0, victories:0, defeats:0, maxCombo:0 };
      s.worldMap = s.worldMap || {
        unlocked: { start:true, physics:true, chemistry:true, geography:true, chinese:true, math:true, english:true, tower:true },
        visitedNodes: [], currentNode: 'start'
      };
      s.pets = s.pets || {};
      s.achievements = s.achievements || {};
      s.inventory = s.inventory || { pills:{}, equipments:[], pets:[] };
      s.equipped = s.equipped || { weapon:null, robe:null, artifact:null, crown:null };
      s.settings = s.settings || { soundOn:false, autosave:true, compact:false, reducedMotion:false };
      s.story = s.story || { currentChapter:'prologue', seenScenes:[] };
      if (!Array.isArray(s.story.seenScenes)) s.story.seenScenes = [];
      s.sects = s.sects || {};
      ['physics','chemistry','geography','chinese','math','english'].forEach(k => {
        s.sects[k] = s.sects[k] || {};
        const secDef = { masteredManuals:[], defeatedQuests:[], stars:{}, unlocked:true, proficiency:{}, refineTimes:{}, lastRefineAt:{}, learnStage:{} };
        for (const dk in secDef) if (s.sects[k][dk] === undefined) s.sects[k][dk] = secDef[dk];
      });
      if (!Array.isArray(s.heartDemons)) s.heartDemons = [];
    },

    // ---------- 事件订阅 ----------
    on(evt, fn) { (this.listeners[evt] = this.listeners[evt] || []).push(fn); },
    emit(evt, payload) {
      (this.listeners[evt] || []).forEach(fn => {
        try { fn(payload); } catch (e) { console.error(e); }
      });
    },

    // ---------- 境界 ----------
    getRealm(id) { return REALMS[id] || REALMS[0]; },
    getRealmName() { const r = this.getRealm(this.state.char.realmId); return r ? r.name : ''; },
    // v4.0：统一的答题上报接口（UI 层直接呼叫）
    answerReport(q, correct) {
      if (!q) return { expGain:0, shiGain:0 };
      // v4.0 FIX: 补齐奖励入账（原本只做记录）
      const id = q.id || '';
      let sect = q.sect;
      if (!sect) {
        if (id.startsWith('phy')) sect='physics';
        else if (id.startsWith('chem')) sect='chemistry';
        else if (id.startsWith('geo')) sect='geography';
        else if (id.startsWith('chi')) sect='chinese';
        else if (id.startsWith('math')) sect='math';
        else if (id.startsWith('eng')) sect='english';
        else sect='';
      }
      // 通过 submitAnswer 统一走奖励通道
      if (sect && id) {
        const r = this.submitAnswer(sect, id, correct, q.difficulty || 'normal');
        return r || { expGain:0, shiGain:0 };
      }
      // fallback：无归属信息
      const c = this.state.char;
      if (correct) {
        c.streak = (c.streak || 0) + 1;
        c.hp = Math.min(c.maxHp, c.hp + 2);
        c.mp = Math.min(c.maxMp, c.mp + 3);
      } else {
        c.streak = 0;
        this.changeDaoxin && this.changeDaoxin(-1);
      }
      this.state.stats = this.state.stats || {};
      const key = correct ? 'totalCorrect' : 'totalWrong';
      this.state.stats[key] = (this.state.stats[key] || 0) + 1;
      this.save();
      this.emit('answer', { q, correct, streak: c.streak });
      return { expGain:0, shiGain:0 };
    },
    currentRealm() { return this.getRealm(this.state.char.realmId); },
    nextRealm() {
      const cur = this.state.char.realmId;
      if (cur >= REALMS.length - 1) {
        const idx = REALMS.length;
        const last = REALMS[REALMS.length - 1];
        const nextInc = Math.round((last.increment || 30) * GROWTH);
        const need = last.need + nextInc;
        const extraLayer = (cur - REALMS.length + 2);
        return { id: idx, tierKey:'dengxian', tierName:'登仙',
                 subName:'圆满', layerInSub: extraLayer,
                 name: `登仙圆满第${extraLayer}重`,
                 sub:'羽化登仙，无有极限', need,
                 increment: nextInc,
                 color:'#fff2cc',
                 _dynamic: true };
      }
      return REALMS[cur + 1] || null;
    },
    expToNext() {
      const next = this.nextRealm();
      if (!next) return 0;
      return Math.max(0, next.need - this.state.char.exp);
    },
    realmProgress() {
      const cur = this.currentRealm();
      const next = this.nextRealm();
      if (!next) return 1;
      const span = next.need - cur.need;
      if (span <= 0) return 1;
      return Math.min(1, Math.max(0, (this.state.char.exp - cur.need) / span));
    },
    currentRealmCultivation() {
      const cur = this.currentRealm();
      const next = this.nextRealm();
      const total = this.state.char.exp || 0;
      const current = Math.max(0, total - (cur ? cur.need : 0));
      const need = next ? Math.max(1, next.need - (cur ? cur.need : 0)) : Math.max(1, current);
      const remaining = next ? Math.max(0, need - current) : 0;
      return { total, current, need, remaining, base: cur ? cur.need : 0, nextNeed: next ? next.need : total };
    },
    // v4.2.6 EXPONENTIAL：闯关塔奖励（层数也改成指数！）
    //   旧因子：1 + layer×0.35 （线性）
    //   新因子：1.15^layer —— 镶塔越上面奖励指数翻倍
    //   基础 exp/shi 提升 3×，预防基础太少，并叠加 境界乘子
    getScaledTowerReward(layerDef) {
      const realmMul = this.getRealmMultiplier ? this.getRealmMultiplier() : 1;
      const layerN = (layerDef && layerDef.layer) || 1;
      const layerMul = Math.pow(1.15, layerN);   // 指数层数乘子，为旧 1.35 的指数化版
      const baseBoost = 3;                         // 基础 3×
      return {
        exp: Math.round((((layerDef?.reward?.exp)||10) * baseBoost) * realmMul * layerMul),
        shi: Math.round((((layerDef?.reward?.shi)||6)  * baseBoost) * realmMul * layerMul)
      };
    },
    // v4.2.6 EXPONENTIAL：斩妖场胜利奖励
    //   难度乘子支陡化——legend 从 6.0 → 12.0，boss 从 4.2 → 8.0
    //   基础 exp/shi 提升 2.5×，避免低境界时丹药/装备买不起
    getArenaVictoryReward(diff) {
      const diffBoost = { easy:1.4, normal:2.6, hard:4.8, boss:8.0, legend:12.0 }[diff] || 1;
      const realmMul = this.getRealmMultiplier ? this.getRealmMultiplier() : 1;
      return {
        exp: Math.round(250 * diffBoost * realmMul),
        shi: Math.round(140 * diffBoost * realmMul)
      };
    },
    addExp(amt) {
      if (!amt) return;
      this.state.char.exp += amt;
      this.state.char.todayExpGain = (this.state.char.todayExpGain || 0) + amt;
      while (true) {
        const next = this.nextRealm();
        if (!next) break;
        if (this.state.char.exp >= next.need) {
          if (next._dynamic) {
            REALMS.push({ ...next, _dynamic: false });
            this.state.char.realmId = REALMS.length - 1;
          } else {
            this.state.char.realmId++;
          }
          // v4.0 FIX: 突破时自动成长属性（每层递增，配合指数曲线）
          this._growStatsOnBreakthrough(this.state.char.realmId);
          this.emit('breakthrough', this.currentRealm());
        } else break;
      }
      this._checkAchievements();
      this.save();
      this.emit('expChange', this.state.char.exp);
    },

    // v4.0 新增：突破成长曲线（每次突破按境界层数指数式提升）
    _growStatsOnBreakthrough(realmId) {
      const c = this.state.char;
      // 层增长系数：前期温和、后期指数（1.03^layer 累积）
      const layer = realmId; // 每层
      const inc = 1 + layer * 0.02; // 递增倍率
      const hpGain = Math.round(15 * inc);
      const mpGain = Math.round(8 * inc);
      const atkGain = Math.max(2, Math.round(3 * inc));
      const defGain = Math.max(1, Math.round(1.5 * inc));
      c.maxHp += hpGain;
      c.maxMp += mpGain;
      c.atk   += atkGain;
      c.def   += defGain;
      // 每 10 层暴击 +1%
      if (layer % 10 === 0) c.crit = Math.min(0.5, (c.crit || 0.1) + 0.01);
      // 突破满血满蓝
      c.hp = c.maxHp;
      c.mp = c.maxMp;
      // 展示提示（供 UI 层可选订阅）
      this.emit('statsGrown', { layer, hpGain, mpGain, atkGain, defGain });
    },

    // v4.2.6 重写：境界奖励倍率（全面指数化）
    //   用户反馈：属性/洞府/秘境/法宝/丹药/镶塔/斩妖 奖励都需"指数增长"
    //   参考值（已重新校准）：
    //     凡人=1x，炼气一层=1.12x，炼气十层=2.9x，筑基一层≈4.8x，筑基后期=~18x
    //     金丹一层≈20x，金丹后期≈170x，元婴一层≈200x，元婴后期≈ 1200x
    //     化神≈ 2500x-1.6万，渡劫 ≈ 4万-40万，炼虚 ≈ 100万+，大乘 ≈ 3000万+
    //     登仙一层 ≈ 10亿+（“仙人一拳长扫"）
    //   使用分段指数：小层可感知，大境界层差极悬殊
    getRealmMultiplier() {
      const id = this.state.char.realmId || 0;
      if (id <= 0) return 1;
      // 分段曲线：前期缓上，中后期陡上
      if (id <= 10)  return Math.pow(1.115, id);           // 炼气： 1.115~2.96×
      if (id <= 30)  return 2.96 * Math.pow(1.09,  id-10); // 炼气后期 + 筑基：2.96~16.6×
      if (id <= 60)  return 16.6 * Math.pow(1.085, id-30); // 筑基后期 + 金丹：16.6~200×
      if (id <= 90)  return 200  * Math.pow(1.09,  id-60); // 金丹后期 + 元婴：200~2650×
      if (id <= 120) return 2650 * Math.pow(1.11,  id-90); // 元婴后期 + 化神：2650~62000×
      if (id <= 150) return 62000* Math.pow(1.13,  id-120);// 化神后期 + 渡劫：62k~2.5M×
      if (id <= 180) return 2.5e6* Math.pow(1.15,  id-150);// 渡劫后期 + 炼虚：2.5M~163M×
      if (id <= 210) return 1.63e8*Math.pow(1.17,  id-180);// 炼虚后期 + 大乘
      return           2.0e10 *Math.pow(1.19,  id-210);   // 登仙：天文数字级无尽增长
    },

    // ==========================================================
    // v4.1-fix：妖兽属性缩放（跟随玩家境界成长，让高境界仍有挑战）
    // ==========================================================
    /**
     * 妖兽属性倍率
     *   跟随玩家 realmId 指数增长，但略滞后于玩家 (~0.82x)，
     *   让新境界前期能明显打崩、中期需精进、后期需 boss 战。
     * 分难度还叠加系数：easy 0.7 / normal 1 / hard 1.4 / boss 2.2
     */
    getMonsterScale(diff) {
      const id = this.state.char.realmId || 0;
      let base;
      if (id <= 20)      base = 1 + id * 0.06;
      else if (id <= 50) base = 2.2 + (id - 20) * 0.09;
      else               base = 4.9 * Math.pow(1.055, id - 50);
      const diffMul = { easy: 0.72, normal: 1.0, hard: 1.58, boss: 2.35, legend: 3.25 }[diff] || 1;
      return { hpMul: base * diffMul, atkMul: base * diffMul * 0.92 };
    },

    /**
     * 妖兽头衔（跟随玩家境界演变，让"你打的妖兽"的名字随境界不同）
     * 返回 { realmName, tier, titles:[{cls,text}] }
     */
    getMonsterTitle(diff) {
      const id = this.state.char.realmId || 0;
      // 找出玩家所在大境界名（炼气/筑基/元婴...）
      const tierName = this._playerTierName ? this._playerTierName() : (this.currentRealm && this.currentRealm().tierName) || '凡';
      // tier 层级：easy=凡阶 / normal=中阶 / hard=精英 / boss=妖王 / legend=真君
      const tierMap = {
        easy:   { cls:'t-realm',  text: tierName + '期·凡阶' },
        normal: { cls:'t-tier',   text: tierName + '期·中阶' },
        hard:   { cls:'t-elite',  text: tierName + '期·精英' },
        boss:   { cls:'t-boss',   text: tierName + '期·妖王' },
        legend: { cls:'t-legend', text: '真君之姿' }
      };
      const t = tierMap[diff] || tierMap.normal;
      // 高境界玩家会遇到"变异"标签
      const titles = [t];
      if (id >= 30 && diff === 'boss')  titles.push({ cls:'t-legend', text:'血月加持' });
      if (id >= 60 && diff !== 'easy')  titles.push({ cls:'t-elite',  text:'噬灵变异' });
      if (id >= 100)                    titles.push({ cls:'t-legend', text:'渡劫之资' });
      return { tier: diff, titles };
    },

    /**
     * 便捷：返回一个"实际战斗用"的妖兽对象
     * baseDef = { name, diff, hp, atk, ... }  → scaled + titled 
     */
    scaleMonster(baseDef) {
      const s = this.getMonsterScale(baseDef.diff || 'normal');
      const t = this.getMonsterTitle(baseDef.diff || 'normal');
      const hp  = Math.max(30, Math.round((baseDef.hp || 100) * s.hpMul));
      const atk = Math.max(3,  Math.round((baseDef.atk || 10) * s.atkMul));
      return Object.assign({}, baseDef, {
        hp, maxHp: hp, atk,
        titles: t.titles,
        tier: t.tier,
        realmName: (this._playerTierName ? this._playerTierName() : ''),
      });
    },

    // 玩家当前所在大境界名 (炼气/筑基/…)
    _playerTierName() {
      const id = this.state.char.realmId || 0;
      const r = this.getRealm ? this.getRealm(id) : null;
      if (r && r.tierName) return r.tierName;
      // 兜底：按 30 层切分找 TIER
      if (typeof REALM_TIERS !== 'undefined' && typeof LAYERS_PER_TIER !== 'undefined') {
        const idx = Math.min(REALM_TIERS.length - 1, Math.floor((id - 1) / LAYERS_PER_TIER));
        return REALM_TIERS[Math.max(0, idx)] && REALM_TIERS[Math.max(0, idx)].name || '凡';
      }
      return '凡';
    },

    // ---------- 资源 ----------
    addLingshi(n) {
      this.state.char.lingshi = Math.max(0, this.state.char.lingshi + n);
      this.save();
      this.emit('lingshiChange', this.state.char.lingshi);
    },
    spendLingshi(n) {
      if (this.state.char.lingshi < n) return false;
      this.state.char.lingshi -= n;
      this.save();
      this.emit('lingshiChange', this.state.char.lingshi);
      return true;
    },
    changeDaoxin(d) {
      this.state.char.daoxin = Math.max(0, Math.min(300, this.state.char.daoxin + d));
      this.save();
      this.emit('daoxinChange', this.state.char.daoxin);
    },

    // ---------- 灵根 ----------
    getSubjectBoost(sect) {
      let mult = 1;
      const rk = this.state.char.spiritRoot;
      if (rk && SPIRIT_ROOTS[rk]) {
        const b = SPIRIT_ROOTS[rk].boosts;
        if (b._all) mult *= b._all;
        if (b[sect]) mult *= b[sect];
      }
      // 法宝加成
      const eqs = this.state.char.equippedArtifacts || [];
      eqs.forEach(aid => {
        const a = ARTIFACTS[aid];
        if (a && a.effect === 'exp_boost') mult *= a.value;
      });
      return mult;
    },
    getSectBoost(sect) { return this.getSubjectBoost(sect); }, // v3 兼容别名
    setSpiritRoot(rk) {
      if (!SPIRIT_ROOTS[rk]) return false;
      this.state.char.spiritRoot = rk;
      this.save();
      this.emit('spiritRootSet', rk);
      return true;
    },
    getSpiritRoot() {
      const id = this.state.char.spiritRoot;
      return id ? SPIRIT_ROOTS[id] : null;
    },

    // ---------- 法宝 ----------
    hasArtifact(aid) { return (this.state.char.artifacts || []).includes(aid); },
    buyArtifact(aid) {
      const a = ARTIFACTS[aid];
      if (!a) return { ok:false, msg:'无此法宝' };
      if (this.hasArtifact(aid)) return { ok:false, msg:'已拥有此法宝' };
      if (this.state.char.lingshi < a.cost) return { ok:false, msg:'灵石不足' };
      this.state.char.lingshi -= a.cost;
      this.state.char.artifacts.push(aid);
      this.save();
      this.emit('artifactBought', aid);
      return { ok:true, msg:`炼成「${a.name}」！` };
    },
    equipArtifact(aid) {
      if (!this.hasArtifact(aid)) return false;
      const eqs = this.state.char.equippedArtifacts;
      if (eqs.includes(aid)) return false;
      if (eqs.length >= 3) eqs.shift();
      eqs.push(aid);
      this.save();
      return true;
    },
    unequipArtifact(aid) {
      this.state.char.equippedArtifacts =
        this.state.char.equippedArtifacts.filter(x => x !== aid);
      this.save();
    },
    isEquipped(aid) { return (this.state.char.equippedArtifacts || []).includes(aid); },
    hasEffect(effect) {
      return (this.state.char.equippedArtifacts || []).some(aid => {
        const a = ARTIFACTS[aid]; return a && a.effect === effect;
      });
    },
    getEffect(effect) {
      const aid = (this.state.char.equippedArtifacts || []).find(aid => {
        const a = ARTIFACTS[aid]; return a && a.effect === effect;
      });
      return aid ? ARTIFACTS[aid] : null;
    },

    // ---------- 技能 ----------
    useSkill(skillId) {
      const s = SKILLS[skillId];
      if (!s) return { ok:false, msg:'无此技能' };
      if (skillId === 'qiankun' && this.state.char.realmId > 30) {
        return { ok:false, msg:'此技在炼气期之后已无法使用' };
      }
      if (skillId === 'insight' && this.hasEffect('free_insight')) {
        const today = todayStr();
        const used = this.state.char.skillsUsedToday[`insight_free_${today}`] || 0;
        if (used < 1) {
          this.state.char.skillsUsedToday[`insight_free_${today}`] = used + 1;
          this.save();
          return { ok:true, msg:`乾坤袋·免费洞察`, free:true };
        }
      }
      if (this.state.char.lingshi < s.cost) return { ok:false, msg:`需要 ${s.cost} 灵石` };
      this.state.char.lingshi -= s.cost;
      this.save();
      this.emit('lingshiChange', this.state.char.lingshi);
      return { ok:true, msg:`已施展 ${s.name}` };
    },

    // ================================================================
    // 八、功法系统（v4 四阶段 + v3 熟练度 + v4 精进冷却）
    // ================================================================
    isManualMastered(sect, mid) {
      return this.state.sects[sect].masteredManuals.includes(mid);
    },
    getLearnStage(sect, mid) {
      // 0=未开始，1=通览篇目，2=导引示例，3=首次试炼，4=已参悟
      return this.state.sects[sect].learnStage[mid] || 0;
    },
    setLearnStage(sect, mid, stage) {
      this.state.sects[sect].learnStage[mid] = stage;
      this.save();
    },
    masterManual(sect, mid, baseExp = 160, baseShi = 100) {
      const s = this.state.sects[sect];
      if (s.masteredManuals.includes(mid)) return false;
      s.masteredManuals.push(mid);
      s.learnStage[mid] = 4;
      const boost = this.getSubjectBoost(sect);
      // v4.0 FIX: 参悟奖励随境界指数增长
      const realmMul = this.getRealmMultiplier();
      const expGain = Math.round(baseExp * boost * realmMul);
      const shiGain = Math.round(baseShi * boost * realmMul);
      this.addExp(expGain);
      this.addLingshi(shiGain);
      this._dailyProgress('manual_master', 1);
      this._checkAchievements();
      this.emit('manualMastered', { sect, mid, expGain, shiGain });
      return { expGain, shiGain };
    },
    // 熟练度（v3 兼容）
    getProficiency(sect, mid) {
      return this.state.sects[sect].proficiency[mid] || 0;
    },
    addProficiency(sect, mid, n=1) {
      const s = this.state.sects[sect];
      s.proficiency[mid] = (s.proficiency[mid] || 0) + n;
      const lv = s.proficiency[mid];
      const milestones = { 3:'入门', 8:'精通', 20:'大成' };
      if (milestones[lv]) {
        const reward = { 3:{exp:30, shi:20}, 8:{exp:80, shi:60}, 20:{exp:200, shi:160} }[lv];
        this.addExp(reward.exp);
        this.addLingshi(reward.shi);
        this.emit('proficiencyMilestone', { sect, manualId:mid, level:lv, label:milestones[lv], reward });
      }
      this.save();
      return lv;
    },
    // 功法精进（半小时冷却，次数越多奖励越多）
    // v4.0 FIX: 冷却随境界降低（元婴期后 5 分钟，化神后 1 分钟）
    REFINE_COOLDOWN: 30 * 60 * 1000,
    // v4.0 新增：动态冷却时间
    getRefineCooldown() {
      const id = this.state.char.realmId || 0;
      // 凡人~筑基：30分钟；金丹：15分钟；元婴：5分钟；化神：2分钟；渡劫及以上：1分钟
      if (id >= 181) return 60 * 1000;         // 渡劫+
      if (id >= 151) return 2 * 60 * 1000;     // 化神+
      if (id >= 121) return 5 * 60 * 1000;     // 元婴+
      if (id >= 91)  return 15 * 60 * 1000;    // 金丹+
      return 30 * 60 * 1000;                    // 前中期
    },
    canRefine(sect, mid) {
      if (!this.isManualMastered(sect, mid)) return false;
      const last = this.state.sects[sect].lastRefineAt[mid] || 0;
      return Date.now() - last >= this.getRefineCooldown();
    },
    getRefineTimes(sect, mid) {
      return this.state.sects[sect].refineTimes[mid] || 0;
    },
    getRefineCooldownRemaining(sect, mid) {
      const last = this.state.sects[sect].lastRefineAt[mid] || 0;
      const rem = this.getRefineCooldown() - (Date.now() - last);
      return Math.max(0, rem);
    },
    doRefine(sect, mid) {
      if (!this.canRefine(sect, mid)) return null;
      const s = this.state.sects[sect];
      const times = (s.refineTimes[mid] || 0) + 1;
      s.refineTimes[mid] = times;
      s.lastRefineAt[mid] = Date.now();
      // v4.0 奖励公式：随次数明显上涨
      //   growthMul = 1 + times * 0.06 + 境界层×0.01（境界越高 单次精进奖励越高）
      //   baseExp   = (20 + times*6) × growthMul
      //   baseShi   = (12 + times*4) × growthMul
      // 示例：第 1 次 精进 ≈ 26 EXP
      //       第 10 次 精进 ≈ 128 EXP
      //       第 50 次 精进 ≈ 1600 EXP
      //       第 100 次 精进 ≈ 5600 EXP （匹配后期境界所需）
      // v4.0 FIX: 精进奖励使用境界指数乘子（与其他奖励一致）
      const realmBoost = this.getRealmMultiplier ? this.getRealmMultiplier() : (1 + (this.state.char.realmId||0)*0.01);
      const growthMul = (1 + times * 0.09) * realmBoost;
      const baseExp = (28 + times * 9) * growthMul;
      const baseShi = (18 + times * 6) * growthMul;
      const rand = () => (Math.random() * 0.4 + 0.8);
      const boost = this.getSubjectBoost(sect);
      const expGain = Math.round(baseExp * rand() * boost);
      const shiGain = Math.round(baseShi * rand() * boost);
      this.addExp(expGain);
      this.addLingshi(shiGain);
      this.changeDaoxin(2);
      // 顺便加熟练度
      this.addProficiency(sect, mid, 1);
      this.emit('refined', { sect, mid, times, expGain, shiGain });
      this.save();
      return { times, expGain, shiGain };
    },

    // ================================================================
    // 九、答题 / 战斗
    // ================================================================
    isQuestDefeated(sect, qid) {
      return this.state.sects[sect].defeatedQuests.includes(qid);
    },
    getQuestStars(sect, qid) {
      return this.state.sects[sect].stars[qid] || 0;
    },
    judgeAnswer(q, userAns) {
      if (!q) return false;
      switch (q.type) {
        case 'single':
        case 'judge':
          return String(userAns).trim().toUpperCase() === String(q.answer).trim().toUpperCase();
        case 'multi': {
          const u = (Array.isArray(userAns) ? userAns : [userAns])
            .map(x => String(x).trim().toUpperCase()).sort().join('');
          const a = (Array.isArray(q.answer) ? q.answer : [q.answer])
            .map(x => String(x).trim().toUpperCase()).sort().join('');
          return u === a && u.length > 0;
        }
        case 'fill': {
          const u = String(userAns || '').trim().toLowerCase().replace(/\s+/g, '');
          const acc = Array.isArray(q.answer) ? q.answer : [q.answer];
          return acc.some(a => String(a).trim().toLowerCase().replace(/\s+/g, '') === u);
        }
        default:
          return String(userAns) === String(q.answer);
      }
    },
    submitAnswer(sect, qid, isCorrect, difficulty = 'normal', opts = {}) {
      const s = this.state.sects[sect];
      const c = this.state.char;
      c.totalAnswered++;

      // v4 奖励表（提升配合指数曲线）
      const rewardMap = {
        easy:   { exp: 14, shi: 8,  pen: 4 },
        normal: { exp: 28, shi: 16, pen: 8 },
        hard:   { exp: 60, shi: 38, pen: 12 },
        boss:   { exp: 130, shi: 82, pen: 22 },
      };
      const cfg = rewardMap[difficulty] || rewardMap.normal;
      const boost = this.getSubjectBoost(sect);
      // v4.0 FIX: 境界乘子——奖励随境界指数增长
      const realmMul = this.getRealmMultiplier();
      let expGain = 0, shiGain = 0, daoxinGain = 0, isCrit = false;

      if (isCorrect) {
        c.totalCorrect++;
        c.streak++;
        if (c.streak > c.bestStreak) c.bestStreak = c.streak;

        const streakBonus = Math.min(1 + c.streak * 0.08, 2.5);
        expGain = Math.round(cfg.exp * streakBonus * boost * realmMul);
        shiGain = Math.round(cfg.shi * streakBonus * boost * realmMul);
        daoxinGain = (c.streak % 3 === 0) ? 3 : 1;

        // 法宝：飞剑暴击
        if (this.hasEffect('crit')) {
          const a = this.getEffect('crit');
          if (Math.random() < a.value) {
            expGain *= 2; shiGain *= 2; isCrit = true;
          }
        }

        // 首次击败额外
        if (!s.defeatedQuests.includes(qid)) {
          s.defeatedQuests.push(qid);
          expGain += Math.round(cfg.exp * 0.5 * boost * realmMul);
          shiGain += Math.round(cfg.shi * 0.5 * boost * realmMul);
          s.stars[qid] = 3;
        } else {
          s.stars[qid] = Math.max(s.stars[qid] || 0, 2);
        }

        // 移除心魔
        const idx = this.state.heartDemons.findIndex(x => x.sect === sect && x.qid === qid);
        if (idx >= 0) {
          this.state.heartDemons.splice(idx, 1);
          daoxinGain += 2;
        }

        // Boss 掉落
        if (difficulty === 'boss' && Math.random() < 0.5) {
          const drop = this._rollBossDrop();
          if (drop) this.emit('bossDrop', drop);
        }

        // 每日任务
        this._dailyProgress('correct', 1);
        if (difficulty === 'boss' || difficulty === 'hard') this._dailyProgress('hard_correct', 1);
        this._dailyProgress(`sect_${sect}`, 1);
        this._dailyProgress('best_streak', 0); // 触发更新

        this.addExp(expGain);
        this.addLingshi(shiGain);
        this.changeDaoxin(daoxinGain);
      } else {
        // 护心咒特殊处理
        if (opts.huxinSkill) {
          c.streak = 0;
          this.save();
          this.emit('answer', { sect, qid, isCorrect:false, expGain:0, shiGain:0, daoxinGain:0, protected:true });
          return { expGain:0, shiGain:0, daoxinGain:0, streak:0, protected:true };
        }
        const protect = this.hasEffect('daoxin_protect');
        const penalty = cfg.pen * (protect ? 0.5 : 1);
        // 金刚铃保持一次连击
        const keepStreak = this.hasEffect('streak_keep') && c.streak >= 3 && !c._jgUsed;
        if (keepStreak) {
          c._jgUsed = true; // 每次进入战斗前重置
        } else {
          c.streak = 0;
        }
        this.changeDaoxin(-penalty);
        // 明心镜：30% 不计入心魔
        const skipDemon = this.hasEffect('wrong_forgive') &&
                          Math.random() < ((this.getEffect('wrong_forgive') || {}).value || 0);
        if (!skipDemon) {
          let demon = this.state.heartDemons.find(x => x.sect === sect && x.qid === qid);
          if (!demon) {
            demon = { sect, qid, wrongCount: 0, lastWrongAt: 0 };
            this.state.heartDemons.push(demon);
          }
          demon.wrongCount++;
          demon.lastWrongAt = Date.now();
          s.stars[qid] = Math.max(s.stars[qid] || 0, 1);
        }
      }
      this._checkAchievements();
      this.save();
      this.emit('answer', { sect, qid, isCorrect, expGain, shiGain, daoxinGain, difficulty, isCrit });
      return { expGain, shiGain, daoxinGain, streak: c.streak, isCrit };
    },
    _rollBossDrop() {
      const dice = Math.random();
      const drops = [
        { type:'pill', id:'pill_qixue',   name:'气血丹', icon:'💊', desc:'恢复 HP 50', prob:0.30 },
        { type:'pill', id:'pill_lingqi',  name:'灵气丹', icon:'💊', desc:'恢复 MP 30', prob:0.20 },
        { type:'pill', id:'pill_daoxin',  name:'定心丹', icon:'🧪', desc:'道心 +30', prob:0.15 },
        { type:'pill', id:'pill_zhuji',   name:'筑基丹', icon:'🧪', desc:'修为 +80', prob:0.10 },
        { type:'pill', id:'pill_peiyuan', name:'培元丹', icon:'💊', desc:'HP+80 MP+40', prob:0.10 },
        { type:'lingshi', amount: 100, name:'灵石袋', icon:'💎', desc:'+100 灵石', prob:0.13 },
        { type:'pill', id:'pill_jiuzhuan', name:'九转还魂丹', icon:'✨', desc:'HP+300 MP+150 修为+200', prob:0.02 },
      ];
      let r = Math.random(), acc = 0;
      let pick = drops[0];
      for (const d of drops) { acc += d.prob; if (r <= acc) { pick = d; break; } }
      if (pick.type === 'pill') {
        this.state.char.pills[pick.id] = (this.state.char.pills[pick.id] || 0) + 1;
      } else if (pick.type === 'lingshi') {
        this.addLingshi(pick.amount);
      }
      this.save();
      return pick;
    },

    // ================================================================
    // 十、战斗系统（v3 移植）
    // ================================================================
    battleCast(opts) {
      opts = opts || {};
      const s = this.state;
      const c = s.char;
      const streakBonus = Math.min(0.5, c.streak * 0.05);
      const isCrit = Math.random() < (c.crit + (opts.critBoost || 0));
      const critMul = isCrit ? 2 : 1;
      const skillMul = opts.skillMul || 1;
      const dmg = Math.max(1, Math.floor(c.atk * (1 + streakBonus) * critMul * skillMul));
      c.mp = Math.max(0, c.mp - (opts.mpCost || 0));
      s.battle.totalBattles = (s.battle.totalBattles || 0) + 1;
      s.battle.maxCombo = Math.max(s.battle.maxCombo || 0, c.streak);
      this.save();
      return { dmg, crit: isCrit, mp: c.mp };
    },
    battleTakeHit(enemyAtk) {
      const c = this.state.char;
      const dmg = Math.max(1, Math.floor(enemyAtk * (1 - Math.min(0.6, c.def / 100))));
      c.hp = Math.max(0, c.hp - dmg);
      if (c.hp === 0) this.state.battle.defeats = (this.state.battle.defeats || 0) + 1;
      this.save();
      return { dmg, hp: c.hp, dead: c.hp === 0 };
    },
    battleWin(opts) {
      opts = opts || {};
      this.state.battle.victories = (this.state.battle.victories || 0) + 1;
      this._checkAchievements();
      this.save();
      return { exp: opts.exp || 0, shi: opts.shi || 0 };
    },
    battleRestore() {
      const c = this.state.char;
      c.hp = c.maxHp;
      c.mp = c.maxMp;
      this.save();
    },

    // ================================================================
    // 十一、装备 / 丹药 / 灵宠系统（v3 移植）
    // v4.0 新增：境界限制通用检查
    // ================================================================
    checkRealmReq(item) {
      if (!item || !item.realmReq) return { ok:true };
      const need = item.realmReq;
      const cur = this.state.char.realmId || 0;
      if (cur < need) {
        const r = REALMS[need];
        const rName = r ? r.name : `第${need}层`;
        return { ok:false, msg:`修为不足！需 ${rName} 方可解锁使用` };
      }
      return { ok:true };
    },
    equipGear(gearId) {
      const gear = Game.GEAR_DATA[gearId];
      if (!gear) return { ok:false, msg:'无此装备' };
      // v4.0 FIX: 检查境界限制
      const chk = this.checkRealmReq(gear);
      if (!chk.ok) return chk;
      const slot = gear.slot;
      const prev = this.state.char.equippedGear[slot];
      if (prev) this._applyGearStats(prev, -1);
      this.state.char.equippedGear[slot] = gearId;
      this._applyGearStats(gearId, +1);
      this.save();
      this.emit('gearChange');
      return { ok:true, msg:`已装备「${gear.name}」` };
    },
    unequipGear(slot) {
      const gid = this.state.char.equippedGear[slot];
      if (!gid) return;
      this._applyGearStats(gid, -1);
      this.state.char.equippedGear[slot] = null;
      this.save();
      this.emit('gearChange');
    },
    // v4.2.6 EXPONENTIAL：装备 buff 也需按境界指数缩放
    //   否则高境界玩家的寒铁剑+5 atk 完全不够看
    //   使用当前境界乘子（不存时后千万重新启用一次会自定）
    //   crit 不乘（保持百分比）
    _applyGearStats(gearId, sign) {
      const g = Game.GEAR_DATA[gearId];
      if (!g) return;
      const c = this.state.char;
      const b = g.buff || {};
      const rm = this.getRealmMultiplier ? this.getRealmMultiplier() : 1;
      const mult = Math.max(1, rm);   // 境界乘子
      c.atk    += Math.round((b.atk    || 0) * mult) * sign;
      c.def    += Math.round((b.def    || 0) * mult) * sign;
      c.maxHp  += Math.round((b.maxHp  || 0) * mult) * sign;
      c.maxMp  += Math.round((b.maxMp  || 0) * mult) * sign;
      c.crit   += (b.crit   || 0) * sign;
      c.hp = Math.min(c.hp, c.maxHp);
      c.mp = Math.min(c.mp, c.maxMp);
    },
    addGear(gearId) {
      this.state.char.gear[gearId] = this.state.char.gear[gearId] || { level:1 };
      this.save();
    },
    // v4.2.6 EXPONENTIAL：丹药效果也根据境界指数缩放
    //   你境界越高，丹药恢次量越大（因为 maxHp/maxMp 也指数了）
    //   修为类丹药（培基丹、九转丹）效果同步指数，否则到元婴就冗余
    //   道心不乘（本身不需要指数）
    usePill(pillId) {
      const p = Game.PILL_DATA[pillId];
      if (!p) return { ok:false, msg:'丹药不存在' };
      if (!this.state.char.pills[pillId] || this.state.char.pills[pillId] <= 0) {
        return { ok:false, msg:'没有该丹药' };
      }
      const chk = this.checkRealmReq(p);
      if (!chk.ok) return chk;
      const c = this.state.char;
      const rm = this.getRealmMultiplier ? this.getRealmMultiplier() : 1;
      const scale = Math.max(1, rm);
      let msg = '';
      if (p.hp)     { const g=Math.round(p.hp*scale);     c.hp = Math.min(c.maxHp, c.hp + g);           msg += ` HP+${g.toLocaleString()}`; }
      if (p.mp)     { const g=Math.round(p.mp*scale);     c.mp = Math.min(c.maxMp, c.mp + g);           msg += ` MP+${g.toLocaleString()}`; }
      if (p.daoxin) { this.changeDaoxin(p.daoxin);                                                     msg += ` 道心+${p.daoxin}`; }
      if (p.exp)    { const g=Math.round(p.exp*scale);    this.addExp(g);                              msg += ` 修为+${g.toLocaleString()}`; }
      this.state.char.pills[pillId]--;
      this.save();
      return { ok:true, msg:`服下「${p.name}」，${msg}` };
    },
    addPill(pillId, n) {
      n = n || 1;
      this.state.char.pills[pillId] = (this.state.char.pills[pillId] || 0) + n;
      this.save();
    },
    // 灵宠
    adoptPet(petId) {
      const p = Game.PET_DATA[petId];
      if (!p) return { ok:false, msg:'无此灵宠' };
      // v4.0 FIX: 检查境界限制
      const chk = this.checkRealmReq(p);
      if (!chk.ok) return chk;
      if (this.state.char.pet) return { ok:false, msg:'已有伴生灵宠。请先放归原宠。' };
      this.state.char.pet = {
        id: petId, name: p.name, emoji: p.emoji,
        level: 1, exp: 0,
        atk: p.atk || 5, hp: p.hp || 30
      };
      this.state.pets[petId] = this.state.pets[petId] || { level:1, exp:0 };
      this.save();
      this.emit('petChange');
      return { ok:true, msg:`「${p.name}」拜入你门下！` };
    },
    dismissPet() {
      this.state.char.pet = null;
      this.save();
      this.emit('petChange');
    },
    petGainExp(n) {
      const p = this.state.char.pet;
      if (!p) return;
      p.exp += n;
      while (p.exp >= p.level * 100) {
        p.exp -= p.level * 100;
        p.level++;
        p.atk += 3;
        p.hp  += 10;
      }
      this.save();
    },

    // ================================================================
    // 十二、洞府打坐（v3 移植）
    // ================================================================
    canMeditate() {
      const last = this.state.cave.lastMeditateAt || 0;
      return Date.now() - last > 30 * 60 * 1000;
    },
    // v4.2.6 EXPONENTIAL：洞府打坐奖励全面指数化
    //   旧：exp = 18 × 洞府等级 × 境界乘子 （洞府等级乘子为线性）
    //   新：exp = 60 × 1.35^(洞府等级) × 境界乘子 （洞府升一级 = +35% 权重，指数）
    //   HP/MP 恢复也同步，处方也升到 100、 60，道心基础 40
    meditate() {
      if (!this.canMeditate()) {
        const remain = 30*60*1000 - (Date.now() - this.state.cave.lastMeditateAt);
        return { ok:false, msg:`需静心 ${Math.ceil(remain/60000)} 分钟方可再次打坐` };
      }
      this.state.cave.lastMeditateAt = Date.now();
      const realmMul = this.getRealmMultiplier ? this.getRealmMultiplier() : 1;
      const caveLv = this.state.cave.level || 1;
      const caveExpMul = Math.pow(1.35, caveLv);  // 洞府升一级，奖励 × 1.35（指数）
      const expGain  = Math.round(60 * caveExpMul * realmMul);
      const daoGain  = Math.round(40 + realmMul * 5);
      const healHp   = Math.round(100 * realmMul);
      const healMp   = Math.round(60  * realmMul);
      this.changeDaoxin(daoGain);
      this.addExp(expGain);
      const c = this.state.char;
      c.hp = Math.min(c.maxHp, c.hp + healHp);
      c.mp = Math.min(c.maxMp, c.mp + healMp);
      this.save();
      return { ok:true, msg:`打坐冥想，道心 +${daoGain}，修为 +${expGain.toLocaleString()}，HP+${healHp} MP+${healMp}` };
    },
    // 洞府升级代价也指数，重要的就时中后期灵石也多了，代价不够重就没意义
    upgradeCave() {
      const lv = this.state.cave.level;
      const cost = Math.round(500 * Math.pow(2.2, lv - 1));    // v4.2.6: 500,1100,2420,5324,… 指数升价
      if (this.state.char.lingshi < cost) return { ok:false, msg:`需 ${cost.toLocaleString()} 灵石` };
      this.state.char.lingshi -= cost;
      this.state.cave.level++;
      this.save();
      return { ok:true, msg:`洞府升级至 ${this.state.cave.level} 级！打坐效果 ×1.35（指数）。` };
    },

    // ================================================================
    // 十三、每日任务
    // ================================================================
    _refreshDaily() {
      const today = todayStr();
      if (this.state.daily.date === today) return;
      const pool = [
        { id:'correct_10', desc:'答对 10 道题', target:10, type:'correct', reward:{exp:50,shi:30} },
        { id:'correct_25', desc:'答对 25 道题', target:25, type:'correct', reward:{exp:120,shi:80} },
        { id:'hard_5',     desc:'答对 5 道难题/妖王', target:5, type:'hard_correct', reward:{exp:100,shi:80} },
        { id:'phy_5',      desc:'雷霆殿答对 5 题', target:5, type:'sect_physics', reward:{exp:60,shi:40} },
        { id:'che_5',      desc:'丹鼎峰答对 5 题', target:5, type:'sect_chemistry', reward:{exp:60,shi:40} },
        { id:'geo_5',      desc:'山河阁答对 5 题', target:5, type:'sect_geography', reward:{exp:60,shi:40} },
        { id:'manual_2',   desc:'参悟 2 篇功法',   target:2, type:'manual_master', reward:{exp:80,shi:50} },
        { id:'streak_8',   desc:'达成 8 连击',     target:8, type:'best_streak', reward:{exp:80,shi:60} },
        { id:'refine_5',   desc:'精进功法 5 次',   target:5, type:'refine', reward:{exp:60,shi:50} },
      ];
      const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 3);
      this.state.daily = {
        date: today,
        tasks: shuffled.map(t => ({ ...t, progress:0, claimed:false }))
      };
      this.state.char.skillsUsedToday = {};
      this.state.char.todayExpGain = 0;
      this.save();
    },
    _dailyProgress(type, n) {
      const tasks = this.state.daily.tasks || [];
      tasks.forEach(t => {
        if (t.type === type && !t.claimed) {
          t.progress = Math.min(t.target, t.progress + n);
        }
        if (t.type === 'best_streak' && !t.claimed) {
          t.progress = Math.max(t.progress, this.state.char.streak);
        }
      });
    },
    claimDaily(taskId) {
      const t = (this.state.daily.tasks || []).find(x => x.id === taskId);
      if (!t) return { ok:false, msg:'无此任务' };
      if (t.claimed) return { ok:false, msg:'已领取' };
      if (t.progress < t.target) return { ok:false, msg:'未完成' };
      t.claimed = true;
      // v4.0 FIX: 每日任务奖励也乘境界指数
      const rm = this.getRealmMultiplier ? this.getRealmMultiplier() : 1;
      const idBonus = 1 + ((this.state.char.realmId || 0) * 0.02);
      const expGain = Math.round((t.reward.exp || 0) * rm * idBonus);
      const shiGain = Math.round((t.reward.shi || 0) * rm * idBonus);
      this.addExp(expGain);
      this.addLingshi(shiGain);
      const allDone = (this.state.daily.tasks || []).every(x => x.claimed);
      if (allDone) {
        this.state.char.dailyStreak = (this.state.char.dailyStreak || 0) + 1;
      }
      this.save();
      return { ok:true, msg:`领取奖励：+${expGain} 修为, +${shiGain} 灵石` };
    },

    // ================================================================
    // 十四、秘境探索
    // ================================================================
    canEnterSecret() {
      const last = this.state.secretRealm.lastEnterAt || 0;
      return Date.now() - last > 60 * 60 * 1000;
    },
    enterSecret() {
      if (!this.canEnterSecret()) {
        const remain = 60*60*1000 - (Date.now() - this.state.secretRealm.lastEnterAt);
        return { ok:false, msg:`秘境每小时只可入一次，还需 ${Math.ceil(remain/60000)} 分钟` };
      }
      const self = this;
      const events = [
        // v4.2.6 EXPONENTIAL：秘境奖励全面重制，每项基数 × 5-10，又乘境界乘子，指数变得能真正推动属性。
        //   且新增：高境界才会触发的“天宝道缘"/小潜机缘/神现天花……（捕获下面）
        { id:'pill',   weight:30, msg:'你在洞中拾得一枚培元丹！', effect:()=>{ const rm=self.getRealmMultiplier(); const g=Math.round(500*rm); self.changeDaoxin(50); self.addExp(g); self.addPill('pill_peiyuan', 1+Math.floor(rm/50)); return `道心+50, 修为+${g.toLocaleString()}, 培元丹×${1+Math.floor(rm/50)}`; } },
        { id:'gem',    weight:25, msg:'墙壁中嵌有一颗灵晶矿！',   effect:()=>{ const rm=self.getRealmMultiplier(); const n = Math.round((700+Math.floor(Math.random()*900))*rm); self.addLingshi(n); return `灵石+${n.toLocaleString()}`; } },
        { id:'gear',   weight:15, msg:'你发现一件古战场遗物！',   effect:()=>{ const pool = ['weapon_iron_sword','robe_qingpao','focus_yushu','crown_muguan']; const gid = pool[Math.floor(Math.random()*pool.length)]; self.addGear(gid); const rm=self.getRealmMultiplier(); const bonusShi=Math.round(300*rm); self.addLingshi(bonusShi); return `获得装备：${(Game.GEAR_DATA[gid]||{}).name || gid}，另得灵石+${bonusShi.toLocaleString()}`; } },
        { id:'senior', weight:15, msg:'你遇到一位前辈，他授你一诀……', effect:()=>{ const rm=self.getRealmMultiplier(); const g=Math.round(1200*rm); self.addExp(g); return `获前辈赞赏，修为+${g.toLocaleString()}`; } },
        { id:'demon',  weight:10, msg:'秘境深处遇到妖兽袭击！',   effect:()=>{ const rm=self.getRealmMultiplier(); self.changeDaoxin(-8); const shi=Math.round(120*rm); self.addLingshi(shi); return `惊险逃脱，道心-8，但拾得妖兽遗物 灵石+${shi.toLocaleString()}`; } },
        { id:'manual', weight:5,  msg:'你在残卷中悟得一缕大道！', effect:()=>{ const rm=self.getRealmMultiplier(); const g=Math.round(3500*rm); self.addExp(g); return `修为+${g.toLocaleString()}！`; } },
        { id:'lucky',  weight:3,  msg:'机缘巧合，元气暴涨！',     effect:()=>{ const rm=self.getRealmMultiplier(); const n = Math.round((2000+Math.floor(Math.random()*2000))*rm); const e = Math.round(1500*rm); self.addLingshi(n); self.addExp(e); return `灵石+${n.toLocaleString()}, 修为+${e.toLocaleString()}`; } },
        // v4.2.6 新增：高境界小概率奇遇
        { id:'heavenly', weight:2, msg:'天花乱坠！你感惟多年古道之響！', effect:()=>{ const rm=self.getRealmMultiplier(); const e=Math.round(15000*rm); self.addExp(e); self.changeDaoxin(60); return `天花坠兽，道心+60，修为+${e.toLocaleString()}`; } },
      ];
      const total = events.reduce((s,e)=>s+e.weight, 0);
      let r = Math.random() * total;
      let chosen = events[0];
      for (const e of events) { r -= e.weight; if (r <= 0) { chosen = e; break; } }
      const detail = chosen.effect();
      this.state.secretRealm.lastEnterAt = Date.now();
      this.state.secretRealm.count = (this.state.secretRealm.count || 0) + 1;
      this.state.secretRealm.events.unshift({ id:chosen.id, msg:chosen.msg, detail, at:Date.now() });
      if (this.state.secretRealm.events.length > 20) this.state.secretRealm.events.pop();
      this._checkAchievements();
      this.save();
      return { ok:true, event:chosen, detail };
    },

    // ================================================================
    // 十五、成就系统
    // ================================================================
    _checkAchievements() {
      if (!Game.ACHIEVEMENTS) return;
      const s = this.state;
      Object.keys(Game.ACHIEVEMENTS).forEach(aid => {
        const a = Game.ACHIEVEMENTS[aid];
        const rec = s.achievements[aid] = s.achievements[aid] || { progress: 0, done: false };
        if (rec.done) return;
        const cur = a.check(s);
        rec.progress = Math.min(a.target || 1, cur);
        if (cur >= (a.target || 1)) {
          rec.done = true;
          rec.doneAt = Date.now();
          if (a.reward) {
            if (a.reward.shi) this.addLingshi(a.reward.shi);
            if (a.reward.exp) this.addExp(a.reward.exp);
          }
          this.emit('achievementUnlock', { id: aid, achv: a });
        }
      });
    },

    // ================================================================
    // 十六、大地图 & 剧情标记 & 心魔
    // ================================================================
    visitNode(nodeId) {
      if (!this.state.worldMap.visitedNodes.includes(nodeId)) {
        this.state.worldMap.visitedNodes.push(nodeId);
      }
      this.state.worldMap.currentNode = nodeId;
      this.save();
      this.emit('worldMapMove', { node: nodeId });
    },
    setFlag(k, v = true) { this.state.flags[k] = v; this.save(); },
    hasFlag(k) { return !!this.state.flags[k]; },
    heartDemons() {
      return this.state.heartDemons.slice().sort((a, b) => b.wrongCount - a.wrongCount);
    },
    canChallengeHeartDemon(demon) {
      const last = demon && demon.lastWrongAt || 0;
      return Date.now() - last >= 24 * 60 * 60 * 1000;
    },
    getHeartDemonCooldownRemaining(demon) {
      const last = demon && demon.lastWrongAt || 0;
      return Math.max(0, 24 * 60 * 60 * 1000 - (Date.now() - last));
    },
    accuracy() {
      const c = this.state.char;
      if (!c.totalAnswered) return 0;
      return c.totalCorrect / c.totalAnswered;
    },

    // ================================================================
    // 十七、导入/导出存档
    // ================================================================
    exportSave() { return JSON.stringify(this.state, null, 2); },
    importSave(json) {
      try {
        const obj = JSON.parse(json);
        this.state = migrate(deepMerge(deepClone(DEFAULT_SAVE), obj));
        this._ensureAllFields();
        this.save();
        this.emit('imported');
        return true;
      } catch (e) {
        console.warn('[Game] 导入失败', e);
        return false;
      }
    },
  };

  // ================================================================
  // 十八、v3 数据表：装备 / 丹药 / 灵宠 / 成就
  // ================================================================
  // v4.0 FIX: 为装备、丹药、灵宠添加境界限制 realmReq
  //   参考境界：筑基一层=31, 金丹一层=61, 元婴一层=91, 化神一层=151, 渡劫一层=181, 大乘一层=241
  Game.GEAR_DATA = {
    // 武器
    'weapon_iron_sword':    { name:'寒铁剑',   emoji:'🗡', slot:'weapon', rarity:'common', realmReq:0,   desc:'常见铁剑，锋利耐用。', buff:{ atk:5 } },
    'weapon_qing_feng':     { name:'青风剑',   emoji:'🗡', slot:'weapon', rarity:'fine',   realmReq:11,  desc:'铸剑派入门佳品。需炼气中期。',    buff:{ atk:12, crit:0.05 } },
    'weapon_yueya':         { name:'月牙弯刀', emoji:'⚔',  slot:'weapon', rarity:'rare',   realmReq:31,  desc:'月华所铸，切金断玉。需筑基。', buff:{ atk:22, crit:0.08 } },
    'weapon_falling_star':  { name:'落星剑',   emoji:'🌠', slot:'weapon', rarity:'epic',   realmReq:91,  desc:'星辰陨铁淬炼，一剑破空。需元婴。', buff:{ atk:35, crit:0.12, maxMp:20 } },
    'weapon_dragon_slayer': { name:'屠龙鞭',   emoji:'🐲', slot:'weapon', rarity:'legend', realmReq:181, desc:'传说中斩杀过孽龙的神兵。需渡劫。',   buff:{ atk:55, crit:0.15, maxHp:30 } },
    // 衣袍
    'robe_qingpao':      { name:'青罗袍',   emoji:'👘', slot:'robe', rarity:'common', realmReq:0,   desc:'新入宗门弟子袍。', buff:{ def:3, maxHp:20 } },
    'robe_yunwen':       { name:'云纹道袍', emoji:'👘', slot:'robe', rarity:'fine',   realmReq:11,  desc:'云纹绣就，御风而行。需炼气中期。', buff:{ def:6, maxHp:40 } },
    'robe_baiyu':        { name:'白玉锦衣', emoji:'👘', slot:'robe', rarity:'rare',   realmReq:31,  desc:'白玉丝线织成，刀枪难入。需筑基。', buff:{ def:12, maxHp:80 } },
    'robe_xian':         { name:'霓裳羽衣', emoji:'🥋', slot:'robe', rarity:'epic',   realmReq:91,  desc:'仙女下凡遗落之物。需元婴。', buff:{ def:20, maxHp:120, maxMp:30 } },
    'robe_zhentian':     { name:'镇天神袍', emoji:'👘', slot:'robe', rarity:'legend', realmReq:181, desc:'鸿蒙之气所化，天地不侵。需渡劫。', buff:{ def:35, maxHp:200, maxMp:50 } },
    // 法器
    'focus_yushu':       { name:'玉书',     emoji:'📖', slot:'focus', rarity:'common', realmReq:0,   desc:'一卷入门法诀。', buff:{ maxMp:15 } },
    'focus_qixing':      { name:'七星幡',   emoji:'🎏', slot:'focus', rarity:'fine',   realmReq:11,  desc:'七颗星宝嵌于幡上。需炼气中期。', buff:{ maxMp:30, crit:0.03 } },
    'focus_zhuji':       { name:'筑基铃',   emoji:'🔔', slot:'focus', rarity:'rare',   realmReq:31,  desc:'筑基修士随身法器。需筑基。', buff:{ maxMp:50, crit:0.06 } },
    'focus_taiji':       { name:'太极图',   emoji:'☯',  slot:'focus', rarity:'epic',   realmReq:91,  desc:'阴阳流转，玄妙无穷。需元婴。', buff:{ maxMp:80, crit:0.10, def:5 } },
    'focus_hongmeng':    { name:'鸿蒙珠',   emoji:'🔮', slot:'focus', rarity:'legend', realmReq:181, desc:'开天辟地一枚珠。需渡劫。', buff:{ maxMp:150, crit:0.15, atk:10 } },
    // 头冠
    'crown_muguan':      { name:'木簪',     emoji:'💇', slot:'crown', rarity:'common', realmReq:0,   desc:'寻常木簪，束发之用。', buff:{ maxHp:10 } },
    'crown_yinguan':     { name:'银冠',     emoji:'👑', slot:'crown', rarity:'fine',   realmReq:11,  desc:'银丝所制。需炼气中期。', buff:{ maxHp:25, maxMp:10 } },
    'crown_jinguan':     { name:'金冠',     emoji:'👑', slot:'crown', rarity:'rare',   realmReq:31,  desc:'纯金打造。需筑基。', buff:{ maxHp:50, maxMp:20, def:3 } },
    'crown_wangzhe':     { name:'王者冠',   emoji:'👑', slot:'crown', rarity:'epic',   realmReq:91,  desc:'古国王者遗物。需元婴。', buff:{ maxHp:80, maxMp:40, def:6, crit:0.05 } },
    'crown_immortal':    { name:'仙帝冠',   emoji:'👑', slot:'crown', rarity:'legend', realmReq:181, desc:'昔年仙帝加冕之物。需渡劫。', buff:{ maxHp:150, maxMp:70, def:12, crit:0.10 } },
  };
  Game.PILL_DATA = {
    'pill_qixue':   { name:'气血丹',   emoji:'💊', rarity:'common', realmReq:0,   desc:'恢复气血 50 点。',           hp: 50,   cost: 60 },
    'pill_lingqi':  { name:'灵气丹',   emoji:'💊', rarity:'common', realmReq:0,   desc:'恢复灵力 30 点。',           mp: 30,   cost: 60 },
    'pill_zhuji':   { name:'筑基丹',   emoji:'🧪', rarity:'rare',   realmReq:11,  desc:'助你冲击境界，+80 修为。需炼气中期。',   exp: 80,  cost: 200 },
    'pill_daoxin':  { name:'定心丹',   emoji:'🧪', rarity:'fine',   realmReq:0,   desc:'安神定志，+30 道心。',       daoxin: 30, cost: 120 },
    'pill_peiyuan': { name:'培元丹',   emoji:'💊', rarity:'fine',   realmReq:0,   desc:'温补根基，HP+80, MP+40。',   hp:80, mp:40, cost: 150 },
    'pill_jiuzhuan':{ name:'九转还魂丹', emoji:'✨', rarity:'legend', realmReq:31,  desc:'传说仙家宝丹，HP+300, MP+150, 修为+200。需筑基。', hp:300, mp:150, exp:200, cost: 800 },
  };
  Game.PET_DATA = {
    'pet_huli':     { name:'狐狸小妖', emoji:'🦊', rarity:'fine',   realmReq:0,   atk:10, hp:40,  desc:'初阶灵宠，性格活泼。',     unlock:'免费领取' },
    'pet_baihu':    { name:'白虎幼崽', emoji:'🐯', rarity:'rare',   realmReq:11,  atk:12, hp:60,  desc:'凶兽血脉，天生攻击力高。需炼气中期。', unlock:'击败 20 只妖兽且炼气中期' },
    'pet_qinglong': { name:'青龙幼苗', emoji:'🐲', rarity:'epic',   realmReq:31,  atk:15, hp:80,  desc:'龙族血脉，成长潜力惊人。需筑基。', unlock:'物化各 5 功法且筑基' },
    'pet_zhuque':   { name:'朱雀雏鸟', emoji:'🐦', rarity:'epic',   realmReq:61,  atk:20, hp:50,  desc:'火系凶兽，爆发力极强。需金丹。',   unlock:'连击 30 且金丹' },
    'pet_xuanwu':   { name:'玄武幼龟', emoji:'🐢', rarity:'rare',   realmReq:11,  atk:8,  hp:120, desc:'防御系灵宠，血厚肉盾。需炼气中期。',   unlock:'5 次每日任务且炼气中期' },
    'pet_qilin':    { name:'麒麟灵嗣', emoji:'🦄', rarity:'legend', realmReq:91,  atk:25, hp:100, desc:'吉兽血脉，助主人渡劫。需元婴。',   unlock:'突破至元婴期' },
  };
  // 成就（阈值按 v4 境界体系微调）
  Game.ACHIEVEMENTS = {
    'achv_first_step':    { name:'初入道途', icon:'🚪', desc:'首次答题', target:1, reward:{shi:20}, check:(s)=>s.char.totalAnswered||0 },
    'achv_100_correct':   { name:'百战之心', icon:'⚔',  desc:'累计答对 100 题', target:100, reward:{shi:200,exp:100}, check:(s)=>s.char.totalCorrect||0 },
    'achv_500_correct':   { name:'千锤百炼', icon:'🔥', desc:'累计答对 500 题', target:500, reward:{shi:800,exp:500}, check:(s)=>s.char.totalCorrect||0 },
    'achv_1000_correct':  { name:'万法归宗', icon:'✨', desc:'累计答对 1000 题', target:1000,reward:{shi:2000,exp:1500}, check:(s)=>s.char.totalCorrect||0 },
    'achv_streak10':      { name:'连破十妖', icon:'💫', desc:'达成 10 连击', target:10, reward:{shi:100}, check:(s)=>s.char.bestStreak||0 },
    'achv_streak30':      { name:'一气呵成', icon:'🌟', desc:'达成 30 连击', target:30, reward:{shi:300, exp:100}, check:(s)=>s.char.bestStreak||0 },
    'achv_streak50':      { name:'心无旁骛', icon:'🌠', desc:'达成 50 连击', target:50, reward:{shi:800, exp:300}, check:(s)=>s.char.bestStreak||0 },
    // v4 境界成就（按 tierKey 判定，容忍多种境界体系）
    'achv_realm_lianqi_full': { name:'炼气圆满', icon:'🌱', desc:'突破至炼气后期十层', target:30, reward:{shi:200},
        check:(s)=>{ const r=REALMS[s.char.realmId]; return r?r.id:0; } },
    'achv_realm_zhuji':       { name:'筑基有成', icon:'🏔', desc:'踏入筑基境界', target:61, reward:{shi:400,exp:200},
        check:(s)=>{ const r=REALMS[s.char.realmId]; return r?r.id:0; } },
    'achv_realm_jindan':      { name:'金丹大成', icon:'☯',  desc:'踏入金丹境界', target:91, reward:{shi:1200},
        check:(s)=>{ const r=REALMS[s.char.realmId]; return r?r.id:0; } },
    'achv_realm_yuanying':    { name:'元婴出窍', icon:'👶', desc:'踏入元婴境界', target:121,reward:{shi:2000,exp:800},
        check:(s)=>{ const r=REALMS[s.char.realmId]; return r?r.id:0; } },
    'achv_realm_dujie':       { name:'渡劫飞升', icon:'⚡', desc:'踏入渡劫境界', target:181,reward:{shi:3000,exp:1500},
        check:(s)=>{ const r=REALMS[s.char.realmId]; return r?r.id:0; } },
    'achv_realm_xian':        { name:'羽化登仙', icon:'👼', desc:'踏入登仙境界', target:271,reward:{shi:10000,exp:5000},
        check:(s)=>{ const r=REALMS[s.char.realmId]; return r?r.id:0; } },
    'achv_manual_10':     { name:'博学多闻', icon:'📚', desc:'参悟 10 篇功法', target:10, reward:{shi:200}, check:(s)=>Object.values(s.sects||{}).reduce((a,b)=>a+(b.masteredManuals||[]).length,0) },
    'achv_manual_30':     { name:'博采众长', icon:'📖', desc:'参悟 30 篇功法', target:30, reward:{shi:600,exp:300}, check:(s)=>Object.values(s.sects||{}).reduce((a,b)=>a+(b.masteredManuals||[]).length,0) },
    'achv_manual_60':     { name:'学富五车', icon:'📖', desc:'参悟 60 篇功法', target:60, reward:{shi:1500,exp:800}, check:(s)=>Object.values(s.sects||{}).reduce((a,b)=>a+(b.masteredManuals||[]).length,0) },
    'achv_battle_100':    { name:'百战之王', icon:'⚔',  desc:'完成 100 场妖兽战', target:100, reward:{shi:300}, check:(s)=>(s.battle&&s.battle.totalBattles)||0 },
    'achv_daoxin_full':   { name:'道心圆满', icon:'🧘', desc:'道心值达到 300', target:300, reward:{shi:200}, check:(s)=>s.char.daoxin||0 },
    'achv_cave_max':      { name:'仙人洞府', icon:'🏯', desc:'洞府升到 5 级', target:5, reward:{shi:500}, check:(s)=>(s.cave&&s.cave.level)||0 },
    'achv_secret_20':     { name:'秘境常客', icon:'🗺', desc:'探索秘境 20 次', target:20, reward:{shi:400}, check:(s)=>(s.secretRealm && (s.secretRealm.count || (s.secretRealm.events||[]).length) || 0) },
    'achv_artifact_5':    { name:'法宝五藏', icon:'🎒', desc:'拥有 5 件法宝', target:5, reward:{shi:300}, check:(s)=>s.char.artifacts?s.char.artifacts.length:0 },
    'achv_gear_full':     { name:'披坚执锐', icon:'⚔',  desc:'装备全部 4 部位', target:4, reward:{shi:500}, check:(s)=>Object.values(s.char.equippedGear||{}).filter(Boolean).length },
    'achv_pet_owner':     { name:'与灵宠为伴', icon:'🐉', desc:'获得第一只灵宠', target:1, reward:{shi:200}, check:(s)=>s.char.pet?1:0 },
    'achv_all_six':       { name:'六艺齐修', icon:'🏆', desc:'6 科各参悟 3 篇功法', target:6, reward:{shi:1500,exp:600}, check:(s)=>['physics','chemistry','geography','chinese','math','english'].filter(k=>(s.sects[k]&&s.sects[k].masteredManuals||[]).length>=3).length },
    'achv_no_mistake':    { name:'心如止水', icon:'💧', desc:'正确率 ≥ 90%（题数 ≥ 100）', target:1, reward:{shi:800,exp:300}, check:(s)=>((s.char.totalAnswered||0)>=100 && ((s.char.totalCorrect||0)/(s.char.totalAnswered||1))>=0.9 ? 1 : 0) },
    'achv_daily_7':       { name:'七日之约', icon:'📅', desc:'连续 7 日完成每日任务', target:7, reward:{shi:400}, check:(s)=>s.char.dailyStreak||0 },
    'achv_demon_slain':   { name:'心魔尽渡', icon:'😇', desc:'清空所有心魔（题数≥50）', target:1, reward:{shi:600,exp:200}, check:(s)=>((s.char.totalAnswered||0)>=50 && (s.heartDemons||[]).length===0 ? 1 : 0) },
    'achv_spiritroot':    { name:'灵根天定', icon:'🎴', desc:'觉醒灵根', target:1, reward:{shi:100}, check:(s)=>s.char.spiritRoot?1:0 },
    'achv_night_owl':     { name:'凌晨修士', icon:'🌙', desc:'凌晨 1-5 点答题', target:1, reward:{shi:66}, check:(s)=>s.char.nightAnswered?1:0 },
    'achv_speed_learner': { name:'一日千里', icon:'🚀', desc:'单日修为 +500', target:500, reward:{shi:200}, check:(s)=>s.char.todayExpGain||0 },
    'achv_refine_100':    { name:'温故知新', icon:'🔁', desc:'累计精进功法 100 次', target:100, reward:{shi:500,exp:200}, check:(s)=>{ let n=0; for(const k in s.sects){ const rt=s.sects[k].refineTimes||{}; for(const q in rt) n+=rt[q]; } return n; } },
  };

  // 全局暴露
  global.Game = Game;
  global.REALMS = REALMS;
  global.REALM_TIERS = REALM_TIERS;
  global.SPIRIT_ROOTS = SPIRIT_ROOTS;
  global.ARTIFACTS = ARTIFACTS;
  global.SKILLS = SKILLS;

})(typeof window !== 'undefined' ? window : this);
