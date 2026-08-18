(function (global) {
  'use strict';
  const Game = global.Game;
  const UI = global.UI;
  const SubjectPage = global.SubjectPage;
  if (!Game || !UI) return;
  if (global.__WENDAO_V435C__) return;
  global.__WENDAO_V435C__ = true;

  const IS_SUBJECT = typeof location !== 'undefined' && /\/subjects\//.test(location.pathname);
  const ASSET_PREFIX = IS_SUBJECT ? '../assets/img/scenes/' : 'assets/img/scenes/';
  const IMG = {
    main: ASSET_PREFIX + 'main_hall.jpg',
    cave: ASSET_PREFIX + 'cave_moonlit.png',
    arena: ASSET_PREFIX + 'arena.jpg',
    alchemy: ASSET_PREFIX + 'chem_furnace.png',
    garden: ASSET_PREFIX + 'geo_terrace.png',
    scroll: ASSET_PREFIX + 'scroll_hall.png',
    physics: ASSET_PREFIX + 'sect_physics.jpg',
    chemistry: ASSET_PREFIX + 'sect_chemistry.jpg',
    geography: ASSET_PREFIX + 'sect_geography.jpg'
  };

  Game.__hotfixVersion = '4.3.5c';

  const style = document.createElement('style');
  style.id = 'v435c-hotfix-style';
  style.textContent = `
    .v435c-scene-shell{position:relative;overflow:hidden;border-radius:16px;padding:16px;border:1px solid rgba(245,201,122,.22);box-shadow:0 10px 30px rgba(0,0,0,.24)}
    .v435c-scene-shell::before{content:'';position:absolute;inset:0;background:var(--v435c-bg) center/cover no-repeat;filter:saturate(1.05) brightness(.85)}
    .v435c-scene-shell::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(16,12,30,.32),rgba(16,12,30,.82))}
    .v435c-scene-shell>*{position:relative;z-index:1}
    .v435c-scene-main{--v435c-bg:url('${IMG.main}')}
    .v435c-scene-cave{--v435c-bg:url('${IMG.cave}')}
    .v435c-scene-arena{--v435c-bg:url('${IMG.arena}')}
    .v435c-scene-alchemy{--v435c-bg:url('${IMG.alchemy}')}
    .v435c-scene-garden{--v435c-bg:url('${IMG.garden}')}
    .v435c-scene-scroll{--v435c-bg:url('${IMG.scroll}')}
    .v435c-scene-physics{--v435c-bg:url('${IMG.physics}')}
    .v435c-scene-chemistry{--v435c-bg:url('${IMG.chemistry}')}
    .v435c-scene-geography{--v435c-bg:url('${IMG.geography}')}
    .v435c-scene-badge{display:inline-flex;gap:8px;align-items:center;padding:4px 10px;border-radius:999px;background:rgba(245,201,122,.16);border:1px solid rgba(245,201,122,.32);color:#f5c97a;font-size:12px;margin-bottom:8px}
    .v435c-scene-tip{margin-top:10px;font-size:12px;color:var(--xx-text-soft);line-height:1.8}
    .v435c-modal-pad .xx-modal-body{padding-top:8px}
    .v435c-world-wrap{position:relative;border-radius:18px;overflow:hidden;border:1px solid rgba(245,201,122,.22);box-shadow:0 14px 32px rgba(0,0,0,.22);background:#130f22}
    .v435c-world-wrap::before{content:'';position:absolute;inset:0;background:linear-gradient(rgba(20,18,42,.28),rgba(20,18,42,.72)),url('${IMG.main}') center/cover no-repeat;opacity:.92}
    .v435c-world-wrap>*{position:relative;z-index:1}
    .v435c-world-legend{display:flex;gap:10px;flex-wrap:wrap;align-items:center;padding:10px 14px;color:var(--xx-text-soft);font-size:12px;background:rgba(10,8,20,.4);backdrop-filter:blur(6px)}
    .v435c-pill{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;border:1px solid rgba(245,201,122,.28);background:rgba(255,255,255,.06)}
    .v435c-world-svg{display:block;width:100%;height:auto}
    .v435c-node text{pointer-events:none}
    .v435c-node .ring{fill:rgba(16,12,30,.78);stroke:rgba(245,201,122,.55);stroke-width:2}
    .v435c-node .ring.locked{stroke:rgba(164,164,180,.28);fill:rgba(18,18,28,.72)}
    .v435c-node .ring.utility{stroke:rgba(110,213,224,.55)}
    .v435c-node:hover .ring{filter:drop-shadow(0 0 10px rgba(245,201,122,.35));transform:translateY(-2px);transform-origin:center}
    .v435c-node .emoji{font-size:25px}
    .v435c-node .label{font-size:13px;fill:#f8ead5;font-weight:700;text-anchor:middle}
    .v435c-node .sub{font-size:10px;fill:#b9b0cf;text-anchor:middle}
    .v435c-link{fill:none;stroke:rgba(245,201,122,.23);stroke-width:2;stroke-dasharray:5 6}
    .v435c-aura{fill:rgba(110,213,224,.12)}
    .v435c-anchor-jump{animation:v435cPulse 1.8s infinite}
    @keyframes v435cPulse{50%{transform:translateY(-2px)}}
    .v435c-arena-wrap{display:grid;gap:14px}
    .v435c-arena-group{border-left:4px solid var(--v435c-gap,#6ed5e0);background:rgba(0,0,0,.24);border-radius:0 14px 14px 0;padding:12px}
    .v435c-arena-head{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:10px}
    .v435c-arena-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(165px,1fr));gap:10px}
    .v435c-arena-card{padding:10px;border-radius:12px;background:rgba(14,12,26,.68);border:1px solid rgba(255,255,255,.08);transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease;cursor:pointer}
    .v435c-arena-card:hover{transform:translateY(-2px);box-shadow:0 8px 18px rgba(0,0,0,.25)}
    .v435c-arena-card.locked{opacity:.45;cursor:not-allowed;filter:grayscale(.18)}
    .v435c-arena-card .nm{font-size:14px;font-weight:700;margin:6px 0}
    .v435c-arena-card .meta{font-size:11px;color:var(--xx-text-soft);line-height:1.6}
    .v435c-arena-card .tag{display:inline-flex;padding:2px 8px;border-radius:999px;font-size:11px;font-weight:700;margin-bottom:6px}
    .v435c-subject-skin{position:relative;border-radius:18px;padding:10px;background:rgba(8,8,18,.18);overflow:hidden}
    .v435c-subject-skin::before{content:'';position:absolute;inset:0;background:linear-gradient(rgba(16,12,30,.28),rgba(16,12,30,.74)),var(--v435c-tabbg) center/cover no-repeat;opacity:.98}
    .v435c-subject-skin>*{position:relative;z-index:1}
    .v435c-achv-summary{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:10px 0 14px}
    .v435c-achv-box{padding:10px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);text-align:center}
    .v435c-achv-box b{display:block;font-size:18px;color:#f5c97a;margin-top:4px}
    @media (max-width:720px){.v435c-achv-summary{grid-template-columns:1fr}.v435c-world-legend{font-size:11px}}
  `;
  document.head.appendChild(style);

  function fmt(n){
    try { return Game.formatBigNum ? Game.formatBigNum(n) : String(n); }
    catch(e){ return String(n); }
  }
  function realmNameById(id){
    const r = Game.getRealm ? Game.getRealm(id) : null;
    return r ? (r.name || ('第'+id+'境')) : ('第'+id+'境');
  }
  function getRealmStarts(){
    const arr = Game.getAllRealms ? Game.getAllRealms() : (global.REALMS || []);
    const out = [];
    const seen = new Set();
    for (let i = 1; i < arr.length; i++) {
      const r = arr[i];
      if (!r || !r.tierKey || seen.has(r.tierKey)) continue;
      seen.add(r.tierKey);
      out.push({
        id: r.id,
        tierKey: r.tierKey,
        tierName: r.tierName || r.name,
        title: r.tierName || r.name,
        color: r.color || '#6ed5e0'
      });
    }
    return out.length ? out : [{id:1,tierKey:'lianqi',tierName:'炼气',title:'炼气',color:'#6ed5e0'}];
  }

  // -------------------- 成就稳定化 --------------------
  const originalCheckAchievements = Game._checkAchievements && Game._checkAchievements.bind(Game);
  Game._checkAchievements = function () {
    if (!Game.ACHIEVEMENTS) return;
    if (this.__achvChecking) return;
    this.__achvChecking = true;
    const s = this.state;
    let pendingShi = 0, pendingExp = 0, unlocked = [];
    Object.keys(Game.ACHIEVEMENTS).forEach(aid => {
      const a = Game.ACHIEVEMENTS[aid];
      const rec = s.achievements[aid] = s.achievements[aid] || { progress: 0, done: false };
      const curRaw = typeof a.check === 'function' ? a.check(s) : 0;
      const cur = Number.isFinite(curRaw) ? curRaw : 0;
      rec.progress = Math.max(0, Math.min(a.target || 1, cur));
      if (!rec.done && cur >= (a.target || 1)) {
        rec.done = true;
        rec.doneAt = Date.now();
        unlocked.push({ id: aid, achv: a });
        if (a.reward) {
          pendingShi += a.reward.shi || 0;
          pendingExp += a.reward.exp || 0;
        }
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

  // -------------------- 属性指数化修正 --------------------
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
  Game.rebalanceStatsToRealm = function(fillHpMp){
    const c = this.state.char;
    const target = this.getTargetStatsForRealm(c.realmId || 0);
    c.maxHp = Math.max(c.maxHp || 0, target.maxHp);
    c.maxMp = Math.max(c.maxMp || 0, target.maxMp);
    c.atk   = Math.max(c.atk   || 0, target.atk);
    c.def   = Math.max(c.def   || 0, target.def);
    if (fillHpMp) {
      c.hp = c.maxHp;
      c.mp = c.maxMp;
    } else {
      c.hp = Math.min(c.maxHp, Math.max(1, c.hp || c.maxHp));
      c.mp = Math.min(c.maxMp, Math.max(0, c.mp || c.maxMp));
    }
    return target;
  };
  const originalAddExp = Game.addExp.bind(Game);
  Game.addExp = function(amt){
    const before = this.state.char.realmId || 0;
    originalAddExp(amt);
    const after = this.state.char.realmId || 0;
    this.rebalanceStatsToRealm(after > before);
    this.save();
  };
  const originalImportSave = Game.importSave ? Game.importSave.bind(Game) : null;
  if (originalImportSave) {
    Game.importSave = function(json){
      const ok = originalImportSave(json);
      if (ok) {
        this.rebalanceStatsToRealm(true);
        this._checkAchievements();
        this.save();
      }
      return ok;
    };
  }

  // -------------------- 洞府进一步削弱 --------------------
  Game.getMeditateDailyLimit = function(){ return 3; };
  Game.canMeditate = function(){
    const cave = this.state.cave || {};
    const today = new Date().toISOString().slice(0,10);
    if (cave._v435cDay !== today) return Date.now() - (cave.lastMeditateAt || 0) > 45 * 60 * 1000;
    return (Date.now() - (cave.lastMeditateAt || 0) > 45 * 60 * 1000) && ((cave._v435cCount || 0) < this.getMeditateDailyLimit());
  };
  Game.getMeditateExpGain = function(){
    const caveLv = Math.max(1, (this.state.cave && this.state.cave.level) || 1);
    const rm = Math.max(1, this.getRealmMultiplier ? this.getRealmMultiplier() : 1);
    return Math.max(1, Math.round(2 * Math.pow(1.08, caveLv - 1) * (1 + Math.log10(rm + 1))));
  };
  Game.getMeditateRemain = function(){
    const cave = this.state.cave || {};
    const today = new Date().toISOString().slice(0,10);
    if (cave._v435cDay !== today) return this.getMeditateDailyLimit();
    return Math.max(0, this.getMeditateDailyLimit() - (cave._v435cCount || 0));
  };
  Game.meditate = function(){
    const cave = this.state.cave = this.state.cave || { level:1, lastMeditateAt:0 };
    const now = Date.now();
    const today = new Date().toISOString().slice(0,10);
    if (cave._v435cDay !== today) { cave._v435cDay = today; cave._v435cCount = 0; }
    if (cave._v435cCount >= this.getMeditateDailyLimit()) {
      return { ok:false, msg:`今日打坐已满 ${this.getMeditateDailyLimit()} 次，洞府只能养神，不能速通突破` };
    }
    if (now - (cave.lastMeditateAt || 0) < 45 * 60 * 1000) {
      return { ok:false, msg:'打坐尚未平息，45 分钟后再来闭关' };
    }
    cave.lastMeditateAt = now;
    cave._v435cCount += 1;
    const exp = this.getMeditateExpGain();
    this.changeDaoxin(24 + Math.min(16, cave.level * 2));
    this.state.char.hp = this.state.char.maxHp;
    this.state.char.mp = this.state.char.maxMp;
    this.addExp(exp);
    this.save();
    return { ok:true, msg:`🧘 打坐完成：道心恢复、HP/MP回满、修为仅+${fmt(exp)}（今日剩 ${this.getMeditateRemain()} 次）` };
  };

  // -------------------- 战斗奖励按越阶/低阶重算 --------------------
  Game.getBattleReward = function(opts){
    const diff = opts && opts.diff || 'normal';
    const playerId = this.state.char.realmId || 0;
    const enemyLev = opts && Number.isFinite(opts.enemyLev) ? opts.enemyLev : playerId;
    const gap = enemyLev - playerId;
    const base = this.getArenaVictoryReward ? this.getArenaVictoryReward(diff) : { exp:120, shi:70 };
    const gapMul = gap === 0 ? 1
      : gap > 0 ? (1 + gap * 0.75)
      : Math.max(0.05, 1 + gap * 0.26);
    return {
      exp: Math.max(1, Math.round(base.exp * gapMul * 0.42)),
      shi: Math.max(1, Math.round(base.shi * gapMul * 0.42))
    };
  };

  function sceneShell(cls, badge, inner, tips){
    return `<div class="v435c-scene-shell ${cls}">
      <div class="v435c-scene-badge">${badge}</div>
      ${inner}
      ${tips ? `<div class="v435c-scene-tip">${tips}</div>` : ''}
    </div>`;
  }
  function applyModalScene(inst, cls){
    if (!inst || !inst.m) return;
    inst.m.classList.add('v435c-modal-pad');
    const body = inst.m.querySelector('.xx-modal-body');
    if (!body) return;
    body.classList.remove('v435c-scene-main','v435c-scene-cave','v435c-scene-arena','v435c-scene-alchemy','v435c-scene-garden','v435c-scene-scroll','v435c-scene-physics','v435c-scene-chemistry','v435c-scene-geography');
    body.classList.add('v435c-scene-shell', cls || 'v435c-scene-main');
  }

  // -------------------- 首页 UI 修正 --------------------
  const originalRenderCave = UI.renderCave && UI.renderCave.bind(UI);
  if (originalRenderCave) {
    UI.renderCave = function(){
      if (Game._ensureAllFields) Game._ensureAllFields();
      const cave = Game.state.cave || { level:1, lastMeditateAt:0 };
      const canM = Game.canMeditate ? Game.canMeditate() : true;
      const cdMin = canM ? 0 : Math.max(0, Math.ceil((45*60*1000 - (Date.now() - (cave.lastMeditateAt||0)))/60000));
      const inner = `
        <div class="cave-stage">
          <div class="cave-bg-stars"></div>
          <div class="cave-avatar">${Game.state.char.avatar||'🧘'}</div>
          <div class="cave-info">
            <div class="cave-title">${cave.level >= 5?'太虚洞天':(cave.level >= 3?'月华洞府':'修士石洞')}</div>
            <div class="cave-level-tag">洞府等级 Lv.${cave.level||1}</div>
            <div style="margin-top:14px;color:var(--xx-text-soft);font-size:13px;line-height:1.8;">
              这里现在主要负责<b style="color:var(--xx-gold)">恢复</b>，不是刷修为漏洞。<br>
              打坐收益固定压低，突破仍应主要靠学习与斩妖。
            </div>
          </div>
        </div>
        <div class="iv-controls" style="justify-content:center;margin-top:14px;flex-wrap:wrap;">
          <button class="iv-btn" id="cave-meditate" ${canM?'':'disabled'}>
            🧘 ${canM?`打坐冥想（回满HP/MP · 修为+${fmt(Game.getMeditateExpGain())}）`:`冷却中（${cdMin} 分钟）`}
          </button>
          <button class="iv-btn ghost" id="cave-upgrade">
            ⏫ 升级洞府（${fmt(Math.round(500*Math.pow(2.2,(cave.level||1)-1)))} 灵石）
          </button>
        </div>
      `;
      return sceneShell('v435c-scene-cave', '🏔 洞府闭关 · v4.3.5c 平衡重修', inner,
        `今日剩余打坐次数：<b style="color:var(--xx-gold)">${Game.getMeditateRemain()}</b> / ${Game.getMeditateDailyLimit()}；冷却改为 45 分钟；修为只保留“点滴增长”。`
      );
    };
  }
  function applyLastModal(cls){
    setTimeout(() => {
      const last = document.querySelector('.xx-modal-mask:last-of-type');
      if (!last) return;
      const m = last.querySelector('.xx-modal');
      applyModalScene({ m }, cls);
    }, 0);
  }
  const originalOpenCaveModal = UI._openCaveModal && UI._openCaveModal.bind(UI);
  if (originalOpenCaveModal) {
    UI._openCaveModal = function(){
      originalOpenCaveModal();
      applyLastModal('v435c-scene-cave');
    };
  }
  const originalOpenSecretModal = UI._openSecretModal && UI._openSecretModal.bind(UI);
  if (originalOpenSecretModal) {
    UI._openSecretModal = function(){
      originalOpenSecretModal();
      applyLastModal('v435c-scene-garden');
    };
  }
  const originalOpenAchvModal = UI._openAchvModal && UI._openAchvModal.bind(UI);
  if (originalOpenAchvModal) {
    UI._openAchvModal = function(){
      originalOpenAchvModal();
      applyLastModal('v435c-scene-main');
    };
  }
  const originalOpenArtifactModal = UI._openArtifactModal && UI._openArtifactModal.bind(UI);
  if (originalOpenArtifactModal) {
    UI._openArtifactModal = function(initialTab){
      originalOpenArtifactModal(initialTab);
      applyLastModal((initialTab === 'pill') ? 'v435c-scene-alchemy' : (initialTab === 'pet' ? 'v435c-scene-garden' : 'v435c-scene-main'));
    };
  }

  const originalRenderAchievements = UI.renderAchievements && UI.renderAchievements.bind(UI);
  if (originalRenderAchievements) {
    UI.renderAchievements = function(){
      const summary = Game.getAchievementSummary();
      const totalProgress = Object.values(summary.records).reduce((acc, rec) => acc + (rec.progress || 0), 0);
      const html = originalRenderAchievements();
      return sceneShell('v435c-scene-main', '🏆 成就殿堂 · 实时校验已修复', `
        <div class="v435c-achv-summary">
          <div class="v435c-achv-box">已解锁<b>${summary.done}</b></div>
          <div class="v435c-achv-box">总成就<b>${summary.total}</b></div>
          <div class="v435c-achv-box">累计进度<b>${fmt(totalProgress)}</b></div>
        </div>
        ${html}
      `, '成就现在会在渲染前强制核对，避免一直显示 0 或进度乱跳。');
    };
  }

  UI.renderWorldMap = function(){
    const nodes = [
      {id:'start', name:'问道山门', sub:'主界面', x:450, y:72, emoji:'⛩', type:'hub'},
      {id:'physics', name:'雷霆殿', sub:'物理', x:170, y:150, emoji:'⚡', href:'subjects/physics.html', type:'sect'},
      {id:'chemistry', name:'丹鼎峰', sub:'化学', x:730, y:150, emoji:'⚗', href:'subjects/chemistry.html', type:'sect'},
      {id:'geography', name:'山河阁', sub:'地理', x:110, y:340, emoji:'🌏', href:'subjects/geography.html', type:'sect'},
      {id:'chinese', name:'文渊阁', sub:'语文', x:320, y:320, emoji:'📜', href:'subjects/chinese.html', type:'sect'},
      {id:'math', name:'推衍宫', sub:'数学', x:580, y:320, emoji:'🔢', href:'subjects/math.html', type:'sect'},
      {id:'english', name:'译灵堂', sub:'英语', x:790, y:340, emoji:'🌐', href:'subjects/english.html', type:'sect'},
      {id:'cave', name:'洞府', sub:'闭关恢复', x:250, y:470, emoji:'🏔', type:'util'},
      {id:'alchemy', name:'丹药房', sub:'炼丹补给', x:450, y:470, emoji:'⚗️', type:'util'},
      {id:'pet', name:'灵宠殿', sub:'灵兽养成', x:650, y:470, emoji:'🐉', type:'util'},
      {id:'arena', name:'斩妖场', sub:'跨境挑战', x:450, y:210, emoji:'🔥', type:'util'},
      {id:'achv', name:'成就殿堂', sub:'修途留痕', x:450, y:600, emoji:'🏆', type:'util'},
      {id:'tower', name:'飞升宝塔', sub:'终极试炼', x:450, y:700, emoji:'🗼', type:'hub'}
    ];
    const linkPairs = [
      ['start','physics'],['start','chemistry'],['start','arena'],
      ['physics','geography'],['physics','chinese'],['chemistry','math'],['chemistry','english'],
      ['geography','cave'],['chinese','alchemy'],['math','pet'],['arena','achv'],['achv','tower']
    ];
    const map = Object.fromEntries(nodes.map(n=>[n.id,n]));
    let svg = `<svg class="v435c-world-svg" viewBox="0 0 900 760">`;
    svg += `<defs><radialGradient id="v435c-glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(245,201,122,.35)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>`;
    svg += `<ellipse cx="450" cy="740" rx="360" ry="48" fill="rgba(178,136,255,.18)" />`;
    linkPairs.forEach(([a,b])=>{
      const A = map[a], B = map[b];
      const mx = (A.x+B.x)/2, my = (A.y+B.y)/2 - 35;
      svg += `<path class="v435c-link" d="M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}"/>`;
    });
    nodes.forEach(n=>{
      const util = n.type === 'util';
      const cls = util ? 'utility' : '';
      svg += `<g class="v435c-node" data-node="${n.id}" data-href="${n.href||''}">`;
      svg += `<circle class="v435c-aura" cx="${n.x}" cy="${n.y}" r="42" fill="url(#v435c-glow)"/>`;
      svg += `<circle class="ring ${cls}" cx="${n.x}" cy="${n.y}" r="30"/>`;
      svg += `<text class="emoji" x="${n.x}" y="${n.y+10}" text-anchor="middle">${n.emoji}</text>`;
      svg += `<text class="label" x="${n.x}" y="${n.y+54}">${n.name}</text>`;
      svg += `<text class="sub" x="${n.x}" y="${n.y+70}">${n.sub}</text>`;
      svg += `</g>`;
    });
    svg += `</svg>`;
    return `<div class="v435c-world-wrap">${svg}
      <div class="v435c-world-legend">
        <span class="v435c-pill">🗺 六大宗门 + 修仙设施已经并入主地图</span>
        <span class="v435c-pill">⚔ 斩妖场与洞府可直接点开</span>
        <span class="v435c-pill">🏆 成就殿堂不再藏在角落</span>
      </div>
    </div>`;
  };
  UI.bindWorldMap = function(container){
    container.querySelectorAll('.v435c-node').forEach(g => {
      g.style.cursor = 'pointer';
      g.onclick = () => {
        const node = g.dataset.node;
        const href = g.dataset.href;
        if (href) { window.location.href = href; return; }
        if (node === 'cave') return UI._openCaveModal();
        if (node === 'alchemy') return UI._openArtifactModal('pill');
        if (node === 'pet') return UI._openArtifactModal('pet');
        if (node === 'achv') return UI._openAchvModal();
        if (node === 'arena') {
          const section = document.querySelector('.xx-section:nth-of-type(4)');
          if (section) section.scrollIntoView({ behavior:'smooth', block:'start' });
          UI.toast('🔥 斩妖场请进入任一宗门后挑战对应妖兽', 'info');
          return;
        }
        if (node === 'tower') { UI.toast('🗼 飞升宝塔仍是高阶终极试炼', 'info'); return; }
        if (node === 'start') UI.toast('你回到了问道山门', 'info');
      };
    });
  };

  const originalRenderFourGrid = UI.renderFourGrid && UI.renderFourGrid.bind(UI);
  if (originalRenderFourGrid) {
    UI.renderFourGrid = function(){
      Game.getAchievementSummary();
      return originalRenderFourGrid();
    };
  }

  // -------------------- 学科页补丁：这次必须在 SubjectPage 之后生效 --------------------
  if (SubjectPage && !SubjectPage.__v435cPatched) {
    const realmStarts = getRealmStarts();
    const subjectScene = {
      physics:'v435c-scene-physics', chemistry:'v435c-scene-chemistry', geography:'v435c-scene-geography',
      chinese:'v435c-scene-scroll', math:'v435c-scene-scroll', english:'v435c-scene-scroll'
    };
    function buildMonsterList(sectKey){
      const cur = Game.state.char.realmId || 1;
      const names = {
        physics:['雷角狼','磁鳞兽','电羽隼','裂空雷鳄'],
        chemistry:['赤焰蜥','毒雾蛛','熔晶兽','丹火魈'],
        geography:['流沙蝎','寒潮蛇','岩甲熊','天风鹫'],
        chinese:['墨影狐','残卷妖','诗魇','文心鬼'],
        math:['算纹傀','几何甲','数列魇','极限魔'],
        english:['语序魅','词灵鸦','时态鬼','译界狼']
      };
      const diffs = [
        { key:'easy', label:'凡阶', q:['easy'], hpMul:.72, atkMul:.72, count:3, color:'#8ce28c' },
        { key:'normal', label:'同阶', q:['easy','normal'], hpMul:1, atkMul:1, count:4, color:'#6ed5e0' },
        { key:'hard', label:'精英', q:['normal','hard'], hpMul:1.45, atkMul:1.28, count:5, color:'#f39c56' },
        { key:'boss', label:'妖王', q:['hard','boss'], hpMul:2.2, atkMul:1.62, count:6, color:'#ff7b7b' }
      ];
      return realmStarts.map((r, idx) => {
        const gap = r.id - cur;
        const risk = gap === 0 ? '同阶' : (gap > 0 ? `越阶 +${gap}` : `低阶 ${Math.abs(gap)}`);
        const rewardScale = gap === 0 ? '1.00×' : (gap > 0 ? (1 + gap * 0.75).toFixed(2)+'×' : Math.max(.05, 1-gap*0.26).toFixed(2)+'×');
        return {
          ...r,
          gap,
          risk,
          rewardScale,
          cards: diffs.map((d, i) => ({
            realmId:r.id,
            allowed: gap <= 2,
            diff:d.key,
            diffLabel:d.label,
            qDiffs:d.q,
            count:d.count,
            hpMul:d.hpMul,
            atkMul:d.atkMul,
            color:d.color,
            name:`${names[sectKey]?.[(idx+i)%4] || '妖兽'}·${r.tierName}`
          }))
        };
      });
    }

    SubjectPage._renderArena = function(){
      const st = Game.state.sects[this.sect] || {};
      const mastered = st.masteredManuals || [];
      if (!mastered.length) {
        return sceneShell('v435c-scene-arena', '🔥 斩妖场 · 全境界目录', `
          <div style="line-height:1.9;color:var(--xx-text-soft)">
            请先参悟任意功法，再来斩妖。<br>
            这次斩妖场将展示<b style="color:var(--xx-gold)">全部大境界妖兽</b>，低阶奖励极少、同阶正常、越阶更高，但越阶 +3 起彻底禁止。
          </div>
        `);
      }
      const groups = buildMonsterList(this.sect);
      let html = `<div class="v435c-arena-wrap">`;
      groups.forEach((g, gi) => {
        html += `<div class="v435c-arena-group" style="--v435c-gap:${g.color}">
          <div class="v435c-arena-head">
            <b style="color:${g.color};font-size:15px">${g.title}</b>
            <span class="v435c-pill">${g.risk}</span>
            <span class="v435c-pill">奖励系数 ${g.rewardScale}</span>
            ${g.gap > 2 ? '<span class="v435c-pill" style="border-color:rgba(255,123,123,.4);color:#ff7b7b">✕ 越阶禁止</span>' : ''}
          </div>
          <div class="v435c-arena-cards">`;
        g.cards.forEach((c, ci) => {
          const scaled = Game.scaleMonsterForRealm ? Game.scaleMonsterForRealm({ name:c.name, diff:c.diff, hp:90, atk:10 }) : { hp:120, atk:20, name:c.name };
          const hp = Math.round((scaled.hp || 100) * c.hpMul * Math.max(1, 1 + Math.max(0, g.gap) * .08));
          const atk = Math.round((scaled.atk || 10) * c.atkMul * Math.max(1, 1 + Math.max(0, g.gap) * .06));
          html += `<div class="v435c-arena-card ${c.allowed?'':'locked'}" data-v435c-arena="${gi}_${ci}" style="border-color:${c.color}">
            <div class="tag" style="background:${c.color}22;color:${c.color};border:1px solid ${c.color}">${c.diffLabel}</div>
            <div style="font-size:28px">${this.sect==='physics'?'⚡':this.sect==='chemistry'?'⚗️':this.sect==='geography'?'🌏':this.sect==='math'?'🔢':this.sect==='chinese'?'📜':'🌐'}</div>
            <div class="nm" style="color:${c.color}">${c.name}</div>
            <div class="meta">❤ ${fmt(hp)} · ⚔ ${fmt(atk)}<br>${c.count} 道题 · ${realmNameById(c.realmId)}</div>
          </div>`;
        });
        html += `</div></div>`;
      });
      html += `</div>`;
      return sceneShell('v435c-scene-arena', '🔥 斩妖场 · 全境界妖兽已上架', html,
        '规则：低阶奖励几乎没有；同阶是主刷区；越阶收益高但仅允许到 +2；你再拼也不能直接越三个大境界乱杀。');
    };
    SubjectPage._bindArena = function(){
      const list = buildMonsterList(this.sect);
      const flat = [];
      list.forEach(g => g.cards.forEach(c => flat.push({ ...c, gap:g.gap })));
      const cards = document.querySelectorAll('[data-v435c-arena]');
      cards.forEach(card => {
        const [gi,ci] = card.dataset.v435cArena.split('_').map(Number);
        const entry = list[gi] && list[gi].cards[ci];
        if (!entry) return;
        card.onclick = () => {
          if (!entry.allowed) { UI.toast('✕ 越阶 +3 以上已禁入：你现在最多挑战高你两阶的妖王', 'warn'); return; }
          this._launchArena(entry);
        };
      });
    };
    SubjectPage._launchArena = function(enemyDef){
      const st = Game.state.sects[this.sect];
      const mastered = st.masteredManuals || [];
      const pool = this.bank.filter(q => mastered.includes(q.manualId) && enemyDef.qDiffs.includes(q.difficulty || 'normal'));
      const fallback = this.bank.filter(q => mastered.includes(q.manualId));
      const chosen = (pool.length ? pool : fallback).slice().filter(q => q && q.q && q.answer !== undefined).sort(() => Math.random() - 0.5);
      if (!chosen.length) { UI.toast('当前已参悟功法下暂无可用题目，请先学功法', 'error'); return; }
      let qIdx = 0;
      const scaled = Game.scaleMonsterForRealm ? Game.scaleMonsterForRealm({ name:enemyDef.name, diff:enemyDef.diff, hp:100, atk:12 }) : { hp:120, atk:18, name:enemyDef.name };
      const enemy = Object.assign({}, enemyDef, {
        name: enemyDef.name,
        hp: Math.round((scaled.hp || 120) * enemyDef.hpMul),
        maxHp: Math.round((scaled.hp || 120) * enemyDef.hpMul),
        atk: Math.round((scaled.atk || 18) * enemyDef.atkMul)
      });
      UI.openBattle({
        enemy,
        getQuestion: () => chosen[(qIdx++) % chosen.length],
        onWin: () => {
          const rw = Game.getBattleReward({ diff: enemyDef.diff, enemyLev: enemyDef.realmId });
          Game.addExp(rw.exp);
          Game.addLingshi(rw.shi);
          if (Game.battleWin) Game.battleWin({ exp: rw.exp, shi: rw.shi });
          UI.toast(`⚔ 斩妖成功：修为+${fmt(rw.exp)} · 灵石+${fmt(rw.shi)}`, 'success');
        },
        onLose: () => UI.toast('💔 战败了，先回洞府调息再战', 'error'),
        onClose: () => { if (this.currentTab === 'arena') this._render(); }
      });
    };

    const originalSubjectRender = SubjectPage._render.bind(SubjectPage);
    SubjectPage._render = function(){
      originalSubjectRender();
      const root = document.getElementById('sub-root');
      const body = document.getElementById('tab-body');
      if (!root || !body) return;
      root.classList.add('v435c-subject-skin');
      const bgMap = {
        'v435c-scene-physics': `url('${IMG.physics}')`,
        'v435c-scene-chemistry': `url('${IMG.chemistry}')`,
        'v435c-scene-geography': `url('${IMG.geography}')`,
        'v435c-scene-scroll': `url('${IMG.scroll}')`,
        'v435c-scene-arena': `url('${IMG.arena}')`,
        'v435c-scene-cave': `url('${IMG.cave}')`,
        'v435c-scene-main': `url('${IMG.main}')`
      };
      let cls = subjectScene[this.sect] || 'v435c-scene-scroll';
      if (this.currentTab === 'arena') cls = 'v435c-scene-arena';
      if (this.currentTab === 'demon') cls = 'v435c-scene-cave';
      if (this.currentTab === 'tower') cls = 'v435c-scene-main';
      root.style.setProperty('--v435c-tabbg', bgMap[cls] || `url('${IMG.main}')`);
      body.classList.add('v435c-scene-shell');
      body.classList.remove('v435c-scene-main','v435c-scene-cave','v435c-scene-arena','v435c-scene-alchemy','v435c-scene-garden','v435c-scene-scroll','v435c-scene-physics','v435c-scene-chemistry','v435c-scene-geography');
      body.classList.add(cls);
    };
    SubjectPage.__v435cPatched = true;
  }

  // -------------------- 题库底线校验：缺题/缺答案直接剔除 --------------------
  ['PHYSICS_BANK','CHEMISTRY_BANK','GEOGRAPHY_BANK','CHINESE_BANK','MATH_BANK','ENGLISH_BANK'].forEach(key => {
    if (!Array.isArray(global[key])) return;
    global[key] = global[key].filter(q => q && typeof q.q === 'string' && q.q.trim() && q.answer !== undefined && q.answer !== null && q.answer !== '');
  });

  // 首页兜底渲染：若主页面底部脚本被旧补丁打断，至少确保内容能看到
  function repairHomeRender(){
    if (IS_SUBJECT) return;
    if (!document.getElementById('char-panel')) return;
    try {
      if (!Game.state && Game.init) Game.init();
      if (document.getElementById('topbar-mount') && !document.getElementById('topbar-mount').innerHTML.trim()) {
        document.getElementById('topbar-mount').innerHTML = UI.renderTopbar();
      }
      if (!document.getElementById('char-panel').innerHTML.trim()) {
        document.getElementById('char-panel').innerHTML = UI.renderCharPanel();
      }
      if (document.getElementById('four-grid-mount') && !document.getElementById('four-grid-mount').innerHTML.trim()) {
        document.getElementById('four-grid-mount').innerHTML = UI.renderFourGrid();
        UI.bindFourGrid && UI.bindFourGrid();
      }
      if (document.getElementById('world-map-mount') && !document.getElementById('world-map-mount').innerHTML.trim()) {
        document.getElementById('world-map-mount').innerHTML = UI.renderWorldMap();
        UI.bindWorldMap && UI.bindWorldMap(document.getElementById('world-map-mount'));
      }
      if (document.getElementById('sect-map-mount') && !document.getElementById('sect-map-mount').innerHTML.trim()) {
        document.getElementById('sect-map-mount').innerHTML = UI.renderSectMap();
      }
      if (document.getElementById('demon-mount') && !document.getElementById('demon-mount').innerHTML.trim()) {
        document.getElementById('demon-mount').innerHTML = UI.renderHeartDemons();
      }
    } catch (e) {
      console.warn('[v4.3.5c] home render fallback failed', e);
    }
  }

  // 初始化一次：老存档直接修正
  try {
    if (Game.state) {
      Game.rebalanceStatsToRealm(false);
      Game.getAchievementSummary();
      Game.save();
    }
  } catch (e) {
    console.warn('[v4.3.5c] init failed', e);
  }
  if (!IS_SUBJECT) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(repairHomeRender, 80));
    else setTimeout(repairHomeRender, 80);
    window.addEventListener('load', () => setTimeout(repairHomeRender, 120));
    setTimeout(repairHomeRender, 600);
    setTimeout(repairHomeRender, 1500);
  }

  console.log('[v4.3.5c] hotfix loaded: 地图/斩妖场/属性/成就/洞府 全面修复');
})(typeof window !== 'undefined' ? window : this);
