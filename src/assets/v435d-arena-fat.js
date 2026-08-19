/* ===================================================================
 * v4.3.5d · 斩妖场扩容 · 每大境界 12 只妖怪
 * -------------------------------------------------------------------
 * 目标：解决"每大境界只有 6 个妖怪"的实测抱怨。
 *   每大境界固定 12 张卡片：3 凡阶 + 4 同阶 + 3 精英 + 2 妖王
 *   怪物名称从各宗门 12 个专属池中循环出，加头衔前缀，绝不重复。
 *   属性通过 Game.scaleMonsterForRealm(v435d-hotfix.js 提供)与玩家指数化联动。
 *
 * 加载顺序：必须在 v435c-hotfix.js、v435d-hotfix.js 之后。
 * =================================================================== */

// Phase 17 b06 defensive wrapper — guarantees all 7 monster fields so UI never shows ?
function _fatScaleMonster(realmIdOrObj,layer){return _fatSanitize(_fatBuildMonster(realmIdOrObj,layer));}
function _fatBuildMonster(input,layer){
  layer=(typeof layer==='number' && layer>=1)?layer:1;
  let raw=null;
  try{if(typeof Game!=='undefined' && Game.scaleMonsterForRealm) raw=Game.scaleMonsterForRealm(input);}catch(_){}
  const base=(raw && typeof raw==='object')?raw:(input && typeof input==='object'?input:{});
  const mul=Math.pow(1.4,Math.max(0,layer-1));
  return{
    layer:layer,
    name:(typeof base.name==='string' && base.name)?base.name:'未知名妖',
    hp:Math.floor((Number(base.hp)||200)*mul),
    atk:Math.floor((Number(base.atk)||10)*mul),
    def:Math.floor((Number(base.def)||5)*mul),
    skill:typeof base.skill==='string'?base.skill:(typeof base.attackSkill==='string'?base.attackSkill:'撕咬'),
    crit:(typeof base.crit==='number')?base.crit:5,
    resist:(typeof base.resist==='number')?base.resist:0,
    cooldown:(typeof base.cooldown==='number')?base.cooldown:3
  };
}
function _fatSanitize(m){
  if(!m || typeof m!=='object') m={};
  m.name=(m.name && typeof m.name==='string')?m.name:'未知名妖';
  m.hp=Math.floor(Number(m.hp)||200);
  m.atk=Math.floor(Number(m.atk)||10);
  m.def=Math.floor(Number(m.def)||5);
  m.skill=(m.skill && typeof m.skill==='string')?m.skill:'撕咬';
  m.crit=(typeof m.crit==='number')?m.crit:5;
  m.resist=(typeof m.resist==='number')?m.resist:0;
  return m;
}

(function (global) {
  'use strict';
  const Game = global.Game;
  const UI   = global.UI;
  const SubjectPage = global.SubjectPage;
  if (!Game || !UI || !SubjectPage) return;
  if (SubjectPage.__v435dArenaPatched) return;
  SubjectPage.__v435dArenaPatched = true;

  function fmt(n){ try { return Game.formatBigNum ? Game.formatBigNum(n) : String(n); } catch(e){ return String(n); } }
  function realmNameById(id){ const r = Game.getRealm ? Game.getRealm(id) : null; return r ? (r.name || ('第'+id+'境')) : ('第'+id+'境'); }

  // -------- 每宗门 12 只专属怪物 --------
  const monsterPools = {
    physics: ['雷角狼','磁鳞兽','电羽隼','裂空雷鳄','静电灵蟒','伏磁猿','雷云虎','磁场狐','极光狼','雷鸣鸮','霹雳蛟','引力蜥'],
    chemistry:['赤焰蜥','毒雾蛛','熔晶兽','丹火魈','酸雨鳖','银汞蛇','焱焰狐','氢炎鹰','碱雾狼','硫磺蛊','酶铠龟','分子妖'],
    geography:['流沙蝎','寒潮蛇','岩甲熊','天风鹫','季风兽','洋流鲸','高原鹰','沙漠狐','极夜狼','火山蜥','喀斯特熊','厄尔尼狼'],
    chinese:  ['墨影狐','残卷妖','诗魇','文心鬼','句读魑','古音妖','词骸','词灵','篆纹兽','骈骨蛊','古义狸','雅言妖'],
    math:     ['算纹傀','几何甲','数列魇','极限魔','向量猿','矩阵鬼','复数蛊','导数蛟','积分兽','概率蛇','三角魅','函数魈'],
    english:  ['语序魅','词灵鸦','时态鬼','译界狼','时序豹','虚拟鹰','从句蟒','俚语妖','拼音兽','短语狐','词根蛙','完成时妖']
  };

  const TITLES = {
    easy:   ['幼态·','孱弱·','半熟·'],
    normal: ['青焰·','玄铁·','血月·','暮云·'],
    hard:   ['噬灵·','雷劫余威·','古战场·','寒渊·'],
    boss:   ['天罡·','洪荒血脉·','域外遗魂·','万古不朽·']
  };
  function pickTitle(diff, gap, seed){
    const pool = TITLES[diff||'normal'] || TITLES.normal;
    if (gap >= 2) return pool[pool.length - 1];
    if (gap === 1) return pool[Math.min(pool.length-1, 2)];
    return pool[seed % pool.length];
  }

  // 每大境界的 12 张卡片配置
  const diffLayers = [
    { key:'easy',   label:'凡阶妖', qDiffs:['easy'],          color:'#8ce28c', count:3, hpMul:0.72, atkMul:0.72, qCount:3 },
    { key:'normal', label:'同阶妖', qDiffs:['easy','normal'], color:'#6ed5e0', count:4, hpMul:1.00, atkMul:1.00, qCount:4 },
    { key:'hard',   label:'精英妖', qDiffs:['normal','hard'], color:'#f39c56', count:3, hpMul:1.55, atkMul:1.30, qCount:5 },
    { key:'boss',   label:'妖王',   qDiffs:['hard','boss'],   color:'#ff7b7b', count:2, hpMul:2.40, atkMul:1.72, qCount:6 }
  ];

  function getRealmStarts(){
    const arr = Game.getAllRealms ? Game.getAllRealms() : (global.REALMS || []);
    const out = []; const seen = new Set();
    for (let i = 1; i < arr.length; i++) {
      const r = arr[i];
      if (!r || !r.tierKey || seen.has(r.tierKey)) continue;
      seen.add(r.tierKey);
      out.push({ id: r.id, tierKey: r.tierKey, tierName: r.tierName || r.name, title: r.tierName || r.name, color: r.color || '#6ed5e0' });
    }
    return out.length ? out : [{id:1,tierKey:'lianqi',tierName:'炼气',title:'炼气',color:'#6ed5e0'}];
  }

  function buildFatMonsterList(sect){
    const cur = Game.state.char.realmId || 1;
    const pool = monsterPools[sect] || monsterPools.physics;
    const realmStarts = getRealmStarts();
    return realmStarts.map((r, ri) => {
      const gap = r.id - cur;
      const risk = gap === 0 ? '同阶' : (gap > 0 ? `越阶 +${gap}` : `低阶 ${Math.abs(gap)}`);
      const rewardScale = gap === 0 ? '1.00×' : (gap > 0 ? (1 + gap * 0.85).toFixed(2)+'×' : Math.max(.03, 1 + gap * 0.32).toFixed(2)+'×');
      const cards = [];
      diffLayers.forEach((layer, li) => {
        for (let n = 0; n < layer.count; n++) {
          const nameIdx = (ri * 7 + li * 3 + n) % pool.length;
          const seed = ri + li * 4 + n * 3;
          const title = pickTitle(layer.key, gap, seed);
          cards.push({
            realmId: r.id,
            tierName: r.tierName,
            allowed: gap <= 2,
            diff: layer.key,
            diffLabel: layer.label,
            qDiffs: layer.qDiffs,
            count: layer.qCount,
            hpMul: layer.hpMul,
            atkMul: layer.atkMul,
            color: layer.color,
            name: title + pool[nameIdx] + '·' + r.tierName,
            subIdx: n
          });
        }
      });
      return { ...r, gap, risk, rewardScale, cards };
    });
  }

  // ------- 渲染 -------
  SubjectPage._renderArena = function(){
    const st = Game.state.sects[this.sect] || {};
    const mastered = st.masteredManuals || [];
    if (!mastered.length) {
      return `<div class="v435d-arena-empty">
        <div style="font-size:44px;text-align:center;margin-bottom:10px">📜</div>
        <div style="text-align:center;line-height:1.9;color:var(--xx-text-soft)">
          请先在【功法】页参悟任意功法，再来斩妖 ⚔<br>
          斩妖场将展示<b style="color:var(--xx-gold)">全部大境界的妖怪谱</b>（每大境界 12 只）。
        </div>
      </div>`;
    }
    const groups = buildFatMonsterList(this.sect);
    const sectIcon = { physics:'⚡', chemistry:'⚗️', geography:'🌏', chinese:'📜', math:'🔢', english:'🌐' };
    let html = `<div class="v435d-arena-wrap">
      <div class="v435d-arena-note">
        <b>斩妖谱规则</b>：一目十行俯瞰所有大境界的妖怪。<br>
        <span style="color:#8ce28c">同阶</span>是主刷区；越阶 +1 稍难；越阶 +2 极难；
        <b style="color:#ff7b7b">越阶 +3 起彻底禁入</b>。<br>
        奖励系数：低阶惨、同阶正常、越阶极高（但难度也炸）。每大境界固定 12 只怪：3 凡阶 + 4 同阶 + 3 精英 + 2 妖王。
      </div>`;
    groups.forEach((g, gi) => {
      const locked = g.gap > 2;
      html += `<div class="v435d-arena-group ${locked?'locked':''}" style="--v435d-gap:${g.color}">
        <div class="v435d-arena-head">
          <b style="color:${g.color};font-size:16px">${g.title}</b>
          <span class="v435d-pill">${g.risk}</span>
          <span class="v435d-pill">奖励 ${g.rewardScale}</span>
          <span class="v435d-pill" style="opacity:.7">共 ${g.cards.length} 只</span>
          ${locked ? '<span class="v435d-pill" style="border-color:rgba(255,123,123,.4);color:#ff7b7b">✕ 越阶禁止</span>' : ''}
        </div>
        <div class="v435d-arena-cards">`;
      g.cards.forEach((c, ci) => {
        let preview;
        try { preview = _fatScaleMonster({ name:c.name, diff:c.diff, enemyRid:c.realmId }, 1); } catch(_){ preview = _fatScaleMonster({},1); }
        html += `<div class="v435d-arena-card ${c.allowed?'':'locked'}" data-v435d-arena="${gi}_${ci}" style="border-color:${c.color}">
          <div class="tag" style="background:${c.color}22;color:${c.color};border:1px solid ${c.color}">${c.diffLabel}</div>
          <div style="font-size:26px;text-align:center;margin:2px 0">${sectIcon[this.sect]||'👹'}</div>
          <div class="nm" style="color:${c.color}">${c.name}</div>
          <div class="meta">❤ ${fmt(preview.hp)} · ⚔ ${fmt(preview.atk)} · 🛡 ${fmt(preview.def||0)}<br>${c.count} 题 · ${realmNameById(c.realmId)}</div>
        </div>`;
      });
      html += `</div></div>`;
    });
    html += `</div>`;
    return html;
  };

  // ------- 绑定 -------
  SubjectPage._bindArena = function(){
    const list = buildFatMonsterList(this.sect);
    document.querySelectorAll('[data-v435d-arena]').forEach(card => {
      const [gi,ci] = card.dataset.v435dArena.split('_').map(Number);
      const entry = list[gi] && list[gi].cards[ci];
      if (!entry) return;
      card.onclick = () => {
        if (!entry.allowed) { UI.toast('✕ 越阶 +3 已禁入：现在最多打高你两阶的妖王', 'warn'); return; }
        this._launchArena(entry);
      };
    });
  };

  // ------- 战斗启动 -------
  SubjectPage._launchArena = function(enemyDef){
    const st = Game.state.sects[this.sect];
    const mastered = st.masteredManuals || [];
    const validQ = (q) => q && typeof q.q === 'string' && q.q.trim() && q.answer !== undefined && q.answer !== null && q.answer !== '';
    const pool = this.bank.filter(q => validQ(q) && mastered.includes(q.manualId) && enemyDef.qDiffs.includes(q.difficulty || 'normal'));
    const fallback = this.bank.filter(q => validQ(q) && mastered.includes(q.manualId));
    const chosen = (pool.length ? pool : fallback).slice().sort(() => Math.random() - 0.5);
    if (!chosen.length) { UI.toast('当前已参悟功法下暂无可用题目，请先学功法', 'error'); return; }
    let qIdx = 0;
    const enemy = _fatScaleMonster({ name:enemyDef.name, diff:enemyDef.diff, enemyRid:enemyDef.realmId }, 1);
    UI.openBattle({
      enemy,
      getQuestion: () => chosen[(qIdx++) % chosen.length],
      onWin: () => {
        const rw = Game.getBattleReward({ diff: enemyDef.diff, enemyLev: enemyDef.realmId });
        Game.addExp(rw.exp); Game.addLingshi(rw.shi);
        if (Game.battleWin) Game.battleWin({ exp: rw.exp, shi: rw.shi });
        // 妖王掉稀有药材
        if (enemyDef.diff === 'boss' && global.AlchemyLab && Math.random() < 0.35) {
          const drop = global.AlchemyLab.dropRareHerb ? global.AlchemyLab.dropRareHerb() : null;
          if (drop) UI.toast('🌿 妖王倒下时掉出：'+drop.name, 'success');
        }
        UI.toast(`⚔ 斩妖成功：修为+${fmt(rw.exp)} · 灵石+${fmt(rw.shi)}`, 'success');
      },
      onLose: () => UI.toast('💔 战败，回洞府调息再战', 'error'),
      onClose: () => { if (this.currentTab === 'arena') this._render(); }
    });
  };

  // -------- 样式 --------
  const st = document.createElement('style');
  st.id = 'v435d-arena-style';
  st.textContent = `
    .v435d-arena-wrap{display:flex;flex-direction:column;gap:16px}
    .v435d-arena-note{padding:12px 14px;background:rgba(245,201,122,.08);border:1px solid rgba(245,201,122,.28);border-radius:12px;font-size:13px;line-height:1.9;color:var(--xx-text-soft)}
    .v435d-arena-group{border-left:4px solid var(--v435d-gap,#6ed5e0);background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.15));border-radius:0 14px 14px 0;padding:14px}
    .v435d-arena-group.locked{opacity:.5;filter:grayscale(.2)}
    .v435d-arena-head{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:12px}
    .v435d-arena-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:8px}
    .v435d-arena-card{padding:10px;border-radius:12px;background:rgba(14,12,26,.75);border:1px solid rgba(255,255,255,.08);transition:transform .15s ease,box-shadow .15s ease;cursor:pointer}
    .v435d-arena-card:hover{transform:translateY(-2px);box-shadow:0 8px 16px rgba(0,0,0,.35)}
    .v435d-arena-card.locked{opacity:.42;cursor:not-allowed}
    .v435d-arena-card .nm{font-size:13.5px;font-weight:700;margin:6px 0;text-align:center;line-height:1.35}
    .v435d-arena-card .meta{font-size:11px;color:var(--xx-text-soft);line-height:1.55;text-align:center}
    .v435d-arena-card .tag{display:inline-flex;padding:2px 8px;border-radius:999px;font-size:11px;font-weight:700}
    .v435d-pill{display:inline-flex;align-items:center;gap:6px;padding:3px 9px;border-radius:999px;border:1px solid rgba(245,201,122,.28);background:rgba(255,255,255,.04);font-size:11.5px;color:var(--xx-text-soft)}
    .v435d-arena-empty{padding:20px}
  `;
  document.head.appendChild(st);

  console.log('[v4.3.5d] arena-fat loaded — 每大境界 12 只妖怪');
})(typeof window !== 'undefined' ? window : this);
