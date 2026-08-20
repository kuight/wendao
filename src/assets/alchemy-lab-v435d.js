/* ===================================================================
 * v4.3.5d · 真·炼丹房 AlchemyLab (完整交互版)
 * -------------------------------------------------------------------
 * 完整补齐 v4.3.6c 设计里的三段小游戏：
 *   1) 选灵药  → 依次点材料，顺序 & 数量必须匹配丹方
 *   2) 控火    → 指针在轨道来回，玩家点"稳"按钮尽量落在绿区
 *   3) 出丹    → 旋转的红指针，尽量在绿区靶心时点"开炉"
 * 三段各占 100 分，合计 300 分：
 *   >= 260  极品（额外掉稀有药材 + 修为奖励）
 *   >= 200  上品
 *   >= 140  中品
 *   >= 80   下品
 *   <  80   失败（材料退回一半）
 *
 * 数据字段：Game.state.char.herbs / recipes / pills
 * =================================================================== */
(function (global) {
  'use strict';
  const Game = global.Game;
  const UI = global.UI;
  if (!Game || !UI) return;
  if (global.AlchemyLab && global.AlchemyLab.__v435d) return;

  // ---------- 灵药定义 ----------
  const HERBS = {
    lingzhi:    { id:'lingzhi',    name:'灵芝草',    icon:'🌿', tier:1, desc:'常见药草，气血之基' },
    hongguo:    { id:'hongguo',    name:'血珠红果',  icon:'🍒', tier:1, desc:'火系药引' },
    yueyanhua:  { id:'yueyanhua',  name:'月焰花',    icon:'🌸', tier:2, desc:'性温，助心神' },
    qingxinlu:  { id:'qingxinlu',  name:'清心露',    icon:'💧', tier:2, desc:'凝道心之精' },
    tianyanshi: { id:'tianyanshi', name:'天焰石',    icon:'🔥', tier:3, desc:'高热矿脉之核' },
    xuanbinghua:{ id:'xuanbinghua',name:'玄冰花',    icon:'❄',  tier:3, desc:'寒渊千年结晶' },
    qilinjiao:  { id:'qilinjiao',  name:'麒麟角屑',  icon:'🦄', tier:4, desc:'瑞兽遗蜕，稀有' },
    fenglinggen:{ id:'fenglinggen',name:'凤翎根',    icon:'🪶', tier:4, desc:'凤凰栖木之根' },
    hunyuandan: { id:'hunyuandan', name:'混元石',    icon:'⚪', tier:5, desc:'鸿蒙初开时的碎片' }
  };

  const RECIPES = {
    qixue:  { id:'qixue',   name:'气血小丹', tierNeed:1, icon:'❤',
              mats:['lingzhi','lingzhi','hongguo'],           effect:{ type:'hp',     value:200 },
              desc:'恢复 200 HP' },
    jixin:  { id:'jixin',   name:'寂心丹',   tierNeed:2, icon:'🧘',
              mats:['qingxinlu','lingzhi','yueyanhua'],       effect:{ type:'daoxin', value:60 },
              desc:'恢复 60 道心' },
    peiyuan:{ id:'peiyuan', name:'培元丹',   tierNeed:2, icon:'✨',
              mats:['yueyanhua','yueyanhua','hongguo'],       effect:{ type:'exp',    value:40 },
              desc:'+ 40 修为' },
    ningling:{id:'ningling',name:'凝灵丹',   tierNeed:3, icon:'💠',
              mats:['tianyanshi','yueyanhua','qingxinlu'],    effect:{ type:'exp',    value:200 },
              desc:'+ 200 修为' },
    zhuji:  { id:'zhuji',   name:'筑基灵丹', tierNeed:3, icon:'🏔',
              mats:['tianyanshi','xuanbinghua','qingxinlu'],  effect:{ type:'exp',    value:800 },
              desc:'+ 800 修为，突破助力' },
    jindan: { id:'jindan',  name:'金丹再造', tierNeed:4, icon:'☯',
              mats:['qilinjiao','tianyanshi','xuanbinghua'],  effect:{ type:'exp',    value:5000 },
              desc:'+ 5000 修为' },
    juezi:  { id:'juezi',   name:'九转还魂丹', tierNeed:5, icon:'👑',
              mats:['hunyuandan','qilinjiao','fenglinggen'],  effect:{ type:'full',   value:5000 },
              desc:'满血满蓝 + 5000 修为' }
  };

  function ensure(){
    const c = Game.state.char;
    if (!c.herbs)   c.herbs   = { lingzhi:6, hongguo:4, yueyanhua:2, qingxinlu:2 };
    if (!c.recipes) c.recipes = ['qixue','jixin','peiyuan'];
    if (!c.pills)   c.pills   = {};
  }

  // ---- 稀有药材掉落 & 丹方解锁 ----
  function dropRareHerb(){
    const rid = Game.state.char.realmId || 0;
    const tierMax = rid < 20 ? 2 : rid < 60 ? 3 : rid < 120 ? 4 : 5;
    const pool = Object.values(HERBS).filter(h => h.tier <= tierMax && h.tier >= Math.max(1, tierMax-1));
    if (!pool.length) return null;
    const pick = pool[Math.floor(Math.random()*pool.length)];
    ensure();
    Game.state.char.herbs[pick.id] = (Game.state.char.herbs[pick.id]||0) + 1;
    Game.save();
    return pick;
  }
  function unlockRandomRecipe(){
    ensure();
    const owned = new Set(Game.state.char.recipes);
    const rid = Game.state.char.realmId || 0;
    const tierMax = rid < 20 ? 2 : rid < 60 ? 3 : rid < 120 ? 4 : 5;
    const pool = Object.values(RECIPES).filter(r => !owned.has(r.id) && r.tierNeed <= tierMax);
    if (!pool.length) return null;
    const pick = pool[Math.floor(Math.random()*pool.length)];
    Game.state.char.recipes.push(pick.id);
    Game.save();
    return pick;
  }

  // -------- 主界面渲染 --------
  function render(){
    ensure();
    const c = Game.state.char;
    const recipeHtml = Object.keys(RECIPES).map(rid => {
      const r = RECIPES[rid];
      const owned = c.recipes.includes(rid);
      const canBrew = owned && r.mats.every(m => (c.herbs[m]||0) >= r.mats.filter(x=>x===m).length);
      if (!owned) {
        return `<div class="al-recipe lack" style="opacity:.42">
          <div class="al-r-h">${r.icon} <b>?????</b> <span style="color:var(--xx-text-dim);font-size:11px">未习得丹方</span></div>
          <div class="al-r-desc">击杀妖王 / 秘境奇遇有机会习得</div>
        </div>`;
      }
      return `<div class="al-recipe ${canBrew?'':'lack'}">
        <div class="al-r-h">${r.icon} <b style="color:#f5c97a">${r.name}</b>
          <span style="color:var(--xx-text-dim);font-size:11px;margin-left:6px">${r.desc}</span></div>
        <div class="al-r-mats">${r.mats.map(m => `<span class="al-m-chip">${HERBS[m].icon} ${HERBS[m].name}</span>`).join('')}</div>
        <button class="xx-btn ${canBrew?'xx-btn-primary':''}" data-brew="${rid}" ${canBrew?'':'disabled'}>
          ${canBrew ? '🔥 开炉炼制' : '⚠ 材料不足'}
        </button>
      </div>`;
    }).join('');

    const herbHtml = Object.values(HERBS).map(h => {
      const cnt = c.herbs[h.id] || 0;
      return `<div class="al-herb ${cnt?'':'zero'}"><span class="al-h-icon">${h.icon}</span>${h.name} <b>×${cnt}</b></div>`;
    }).join('');

    const pillHtml = Object.keys(c.pills||{}).length
      ? Object.keys(c.pills).map(pid => {
          const r = RECIPES[pid];
          const cnt = c.pills[pid]||0;
          if (!r || cnt <= 0) return '';
          return `<div class="al-pill">
            <span>${r.icon} <b>${r.name}</b> ×${cnt}</span>
            <button class="xx-btn xx-btn-primary" data-eat="${pid}">服食</button>
          </div>`;
        }).join('')
      : `<div class="al-empty">丹药库空空如也，点上方"开炉炼制"来炼出你的第一炉丹</div>`;

    return `<div class="al-wrap">
      <div class="al-hero">
        <div class="al-hero-title">⚗ 真·炼丹房</div>
        <div class="al-hero-sub">选定丹方 → 投料 → 控火 → 出丹（三段小游戏）</div>
        <div class="al-hero-stat">已解锁丹方：${c.recipes.length} · 药材种类：${Object.keys(c.herbs).length} · 炉中之丹：${Object.keys(c.pills||{}).length}</div>
      </div>
      <div class="al-columns">
        <div>
          <div class="al-col-title">📜 丹方</div>
          <div class="al-recipes">${recipeHtml}</div>
        </div>
        <div>
          <div class="al-col-title">🌿 药圃 · 材料</div>
          <div class="al-herbs">${herbHtml}</div>
          <div class="al-col-title" style="margin-top:14px">💊 已炼之丹</div>
          <div class="al-pills">${pillHtml}</div>
        </div>
      </div>
    </div>`;
  }

  function open(){
    ensure();
    const inst = UI.modal({
      title: '⚗ 真·炼丹房',
      body: render(),
      actions: [{ label:'关闭' }]
    });
    setTimeout(() => bind(inst), 0);
  }
  function refresh(inst){
    if (!inst || !inst.m) return;
    const body = inst.m.querySelector('.xx-modal-body');
    if (body) body.innerHTML = render();
    setTimeout(() => bind(inst), 0);
  }

  function bind(inst){
    if (!inst || !inst.m) return;
    inst.m.querySelectorAll('[data-brew]').forEach(btn => {
      btn.onclick = () => startBrew(btn.dataset.brew, inst);
    });
    inst.m.querySelectorAll('[data-eat]').forEach(btn => {
      btn.onclick = () => eatPill(btn.dataset.eat, inst);
    });
  }

  function eatPill(pid, inst){
    ensure();
    const c = Game.state.char;
    if (!c.pills[pid] || c.pills[pid] <= 0) return;
    const r = RECIPES[pid];
    if (!r) return;
    const eff = r.effect;
    let msg = '';
    if (eff.type === 'hp') { c.hp = Math.min(c.maxHp, (c.hp||0) + eff.value); msg = `HP +${eff.value}`; }
    else if (eff.type === 'daoxin') { Game.changeDaoxin(eff.value); msg = `道心 +${eff.value}`; }
    else if (eff.type === 'exp') { Game.addExp(eff.value); msg = `修为 +${eff.value}`; }
    else if (eff.type === 'full') { c.hp = c.maxHp; c.mp = c.maxMp; Game.addExp(eff.value); msg = `HP/MP 全满，修为 +${eff.value}`; }
    c.pills[pid] -= 1;
    if (c.pills[pid] <= 0) delete c.pills[pid];
    Game.save();
    UI.toast(`✨ 服下 ${r.name}：${msg}`, 'success');
    refresh(inst);
  }

  // -------- 三段小游戏 --------
  function startBrew(rid, homeInst){
    ensure();
    const c = Game.state.char;
    const r = RECIPES[rid];
    if (!r) return;
    // 扣除材料
    const need = {};
    r.mats.forEach(m => need[m] = (need[m]||0) + 1);
    for (const m in need) {
      if ((c.herbs[m]||0) < need[m]) { UI.toast('材料不足', 'error'); return; }
    }
    for (const m in need) c.herbs[m] -= need[m];
    Game.save();

    // 打开炼制小游戏窗口
    let score = { toss:0, fire:0, out:0 };
    const brewInst = UI.modal({
      title: `🔥 炼制 · ${r.name}`,
      body: `<div class="al-stage">
        <div class="al-title" id="al-phase-title">第一段：投料</div>
        <div class="al-cauldron"><div class="al-fire"></div><div class="al-liquid"></div></div>
        <div class="al-phase" id="al-phase-info">按顺序点击丹方要求的材料</div>
        <div id="al-phase-mount"></div>
        <div class="al-scoreline">投料 <b id="al-s1">0</b> / 100 · 控火 <b id="al-s2">0</b> / 100 · 出丹 <b id="al-s3">0</b> / 100</div>
      </div>`,
      actions: []
    });
    setTimeout(() => phase1_toss(brewInst, r, score, () => {
      phase2_fire(brewInst, r, score, () => {
        phase3_out(brewInst, r, score, () => {
          finalResult(brewInst, homeInst, r, score);
        });
      });
    }), 0);
  }

  function updateScore(inst, s){
    const s1 = inst.m.querySelector('#al-s1'); if (s1) s1.textContent = Math.round(s.toss);
    const s2 = inst.m.querySelector('#al-s2'); if (s2) s2.textContent = Math.round(s.fire);
    const s3 = inst.m.querySelector('#al-s3'); if (s3) s3.textContent = Math.round(s.out);
  }

  // === 第一段：投料（顺序点击）===
  function phase1_toss(inst, recipe, score, next){
    const mount = inst.m.querySelector('#al-phase-mount');
    const title = inst.m.querySelector('#al-phase-title');
    const info  = inst.m.querySelector('#al-phase-info');
    title.textContent = '第一段：投料';
    info.textContent = `请按 [${recipe.mats.map(m=>HERBS[m].name).join(' → ')}] 的顺序依次点击`;
    // 随机加干扰材料
    const decoys = Object.keys(HERBS).filter(id => !recipe.mats.includes(id)).sort(()=>Math.random()-0.5).slice(0,3);
    const bag = recipe.mats.concat(decoys).sort(()=>Math.random()-0.5);
    let idx = 0, correct = 0, wrong = 0;
    mount.innerHTML = `<div class="al-mats">${bag.map((m,i)=>`<button class="al-mat" data-mat="${m}" data-i="${i}">${HERBS[m].icon} ${HERBS[m].name}</button>`).join('')}</div>`;
    const btns = mount.querySelectorAll('.al-mat');
    btns.forEach(b => {
      b.onclick = () => {
        if (b.classList.contains('done') || b.classList.contains('err')) return;
        const m = b.dataset.mat;
        if (m === recipe.mats[idx]) {
          b.classList.add('done'); b.disabled = true;
          correct++; idx++;
          score.toss = Math.round((correct / recipe.mats.length) * 100 - wrong * 15);
          updateScore(inst, score);
          if (idx >= recipe.mats.length) {
            setTimeout(() => next(), 500);
          }
        } else {
          b.classList.add('err');
          setTimeout(() => b.classList.remove('err'), 300);
          wrong++;
          score.toss = Math.max(0, Math.round((correct / recipe.mats.length) * 100 - wrong * 15));
          updateScore(inst, score);
        }
      };
    });
  }

  // === 第二段：控火 ===
  function phase2_fire(inst, recipe, score, next){
    const mount = inst.m.querySelector('#al-phase-mount');
    const title = inst.m.querySelector('#al-phase-title');
    const info  = inst.m.querySelector('#al-phase-info');
    title.textContent = '第二段：控火';
    info.textContent = '指针左右晃动，点"稳火"让它尽量停在绿区，共 5 次';
    mount.innerHTML = `<div class="al-fire-game">
      <div class="al-fire-track">
        <div class="al-fire-safe"></div>
        <div class="al-fire-pointer" id="al-fp"></div>
      </div>
      <button class="xx-btn xx-btn-primary" id="al-stab">🔥 稳火 (剩 5)</button>
    </div>`;
    const pointer = mount.querySelector('#al-fp');
    const track = mount.querySelector('.al-fire-track');
    const stab = mount.querySelector('#al-stab');
    let pos = 0, dir = 1, running = true, remain = 5, hits = [];
    function tick(){
      if (!running) return;
      pos += dir * (2 + Math.random()*1.5);
      if (pos > 92) { pos = 92; dir = -1; }
      if (pos < 0)  { pos = 0;  dir = 1;  }
      pointer.style.left = pos + '%';
      requestAnimationFrame(tick);
    }
    tick();
    stab.onclick = () => {
      if (remain <= 0) return;
      remain--;
      // 稳火区间：40% ~ 70%
      const dist = pos >= 40 && pos <= 70 ? 0 : Math.min(Math.abs(pos-40), Math.abs(pos-70));
      const hitScore = Math.max(0, 20 - dist * 1.2);
      hits.push(hitScore);
      stab.textContent = `🔥 稳火 (剩 ${remain})`;
      score.fire = Math.round(hits.reduce((a,b)=>a+b,0));
      updateScore(inst, score);
      if (remain <= 0) {
        running = false;
        setTimeout(() => next(), 400);
      }
    };
  }

  // === 第三段：出丹（旋转靶）===
  function phase3_out(inst, recipe, score, next){
    const mount = inst.m.querySelector('#al-phase-mount');
    const title = inst.m.querySelector('#al-phase-title');
    const info  = inst.m.querySelector('#al-phase-info');
    title.textContent = '第三段：出丹';
    info.textContent = '红针飞速旋转，看准绿针方向点"开炉"，共 3 次';
    mount.innerHTML = `<div class="al-out-game">
      <div class="al-out-ring">
        <div class="al-out-target"></div>
        <div class="al-out-pointer" id="al-op"></div>
      </div>
      <button class="xx-btn xx-btn-primary" id="al-open">✨ 开炉 (剩 3)</button>
    </div>`;
    const pointer = mount.querySelector('#al-op');
    const btn = mount.querySelector('#al-open');
    let angle = 0, running = true, remain = 3, hits = [];
    const speed = 4 + Math.random() * 3;
    function tick(){
      if (!running) return;
      angle = (angle + speed) % 360;
      pointer.style.transform = `translate(-50%,-100%) rotate(${angle}deg)`;
      requestAnimationFrame(tick);
    }
    tick();
    btn.onclick = () => {
      if (remain <= 0) return;
      remain--;
      const dist = Math.min(Math.abs(angle), Math.abs(360-angle));
      const hitScore = Math.max(0, 34 - dist * 0.9);
      hits.push(hitScore);
      btn.textContent = `✨ 开炉 (剩 ${remain})`;
      score.out = Math.round(hits.reduce((a,b)=>a+b,0));
      updateScore(inst, score);
      if (remain <= 0) {
        running = false;
        setTimeout(() => next(), 400);
      }
    };
  }

  // === 结算 ===
  function finalResult(brewInst, homeInst, recipe, score){
    ensure();
    const total = Math.round(score.toss + score.fire + score.out);
    let grade, icon, cls, count, expBonus = 0;
    if (total >= 260) { grade = '极品'; icon = '👑'; cls = 'ji';    count = 2; expBonus = 200; }
    else if (total >= 200) { grade = '上品'; icon = '✨'; cls = 'shang'; count = 1; expBonus = 80; }
    else if (total >= 140) { grade = '中品'; icon = '💫'; cls = '';      count = 1; expBonus = 0; }
    else if (total >=  80) { grade = '下品'; icon = '💊'; cls = '';      count = 1; expBonus = 0; }
    else                   { grade = '失败'; icon = '💥'; cls = 'fail'; count = 0; expBonus = 0; }

    const c = Game.state.char;
    if (count > 0) {
      c.pills[recipe.id] = (c.pills[recipe.id]||0) + count;
    } else {
      // 失败退回一半材料（向上取整）
      const back = {};
      recipe.mats.forEach(m => back[m] = (back[m]||0)+1);
      for (const m in back) c.herbs[m] = (c.herbs[m]||0) + Math.ceil(back[m]/2);
    }
    if (expBonus) Game.addExp(expBonus);
    // 极品有小概率解锁新丹方
    let bonusRecipe = null;
    if (grade === '极品' && Math.random() < 0.3) bonusRecipe = unlockRandomRecipe();
    Game.save();

    const body = brewInst.m.querySelector('.xx-modal-body');
    if (body) {
      body.innerHTML = `<div class="al-result ${cls}">
        <div class="al-result-icon">${icon}</div>
        <div class="al-result-title">${grade}${count?' · '+recipe.name+' ×'+count:''}</div>
        <div class="al-result-score">总分 ${total} / 300 · 投料 ${Math.round(score.toss)} · 控火 ${Math.round(score.fire)} · 出丹 ${Math.round(score.out)}</div>
        ${expBonus ? `<div class="al-result-drop">额外修为 +${expBonus}</div>` : ''}
        ${bonusRecipe ? `<div class="al-result-drop">🎁 意外习得新丹方：${bonusRecipe.name}</div>` : ''}
        ${count===0 ? `<div class="al-result-drop" style="color:#e25b5b">材料退回一半</div>` : ''}
        <div class="al-actions">
          <button class="xx-btn xx-btn-primary" id="al-again">再炼一炉</button>
          <button class="xx-btn" id="al-close">关闭</button>
        </div>
      </div>`;
      body.querySelector('#al-close').onclick = () => {
        if (brewInst.close) brewInst.close();
        if (homeInst) { setTimeout(() => refresh(homeInst), 60); }
      };
      body.querySelector('#al-again').onclick = () => {
        if (brewInst.close) brewInst.close();
        setTimeout(() => refresh(homeInst || open()), 60);
      };
    }
    UI.toast(`⚗ 炼制${grade}：${recipe.name} ×${count} · 总分 ${total} / 300`, grade === '失败' ? 'error' : 'success');
  }

  // -------- 样式 --------
  if (!document.getElementById('alchemy-lab-style-v435d')) {
    const style = document.createElement('style');
    style.id = 'alchemy-lab-style-v435d';
    style.textContent = `
      .al-wrap{display:flex;flex-direction:column;gap:14px;padding:6px}
      .al-hero{padding:12px 14px;background:linear-gradient(135deg,rgba(243,156,86,.16),rgba(245,201,122,.08));border:1px solid rgba(245,201,122,.24);border-radius:14px}
      .al-hero-title{font-size:18px;color:#f5c97a;letter-spacing:3px;font-family:var(--xx-font-art,serif)}
      .al-hero-sub{margin-top:4px;font-size:12px;color:var(--xx-text-soft)}
      .al-hero-stat{margin-top:8px;font-size:12px;color:var(--xx-text-soft)}
      .al-columns{display:grid;grid-template-columns:1.15fr 1fr;gap:14px}
      @media (max-width:720px){.al-columns{grid-template-columns:1fr}}
      .al-col-title{font-size:14px;color:#f5c97a;margin-bottom:8px;letter-spacing:2px}
      .al-recipes{display:flex;flex-direction:column;gap:10px}
      .al-recipe{padding:10px 12px;background:rgba(14,12,26,.7);border:1px solid rgba(245,201,122,.18);border-radius:12px;transition:border-color .16s ease}
      .al-recipe.lack{opacity:.55}
      .al-recipe:hover{border-color:rgba(245,201,122,.5)}
      .al-r-h{font-size:15px;margin-bottom:4px}
      .al-r-desc{font-size:12px;color:var(--xx-text-soft);margin-bottom:8px}
      .al-r-mats{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
      .al-m-chip{padding:2px 8px;border-radius:999px;background:rgba(140,226,140,.14);border:1px solid rgba(140,226,140,.35);font-size:11px;color:#8ce28c}
      .al-herbs{display:grid;grid-template-columns:repeat(auto-fill,minmax(105px,1fr));gap:6px}
      .al-herb{padding:6px 8px;background:rgba(14,12,26,.55);border:1px solid rgba(255,255,255,.1);border-radius:10px;font-size:12px}
      .al-herb.zero{opacity:.35}
      .al-h-icon{margin-right:4px}
      .al-pills{display:flex;flex-direction:column;gap:6px}
      .al-pill{padding:6px 10px;background:rgba(245,201,122,.08);border:1px solid rgba(245,201,122,.2);border-radius:10px;font-size:13px;display:flex;justify-content:space-between;align-items:center;gap:8px}
      .al-empty{padding:10px;color:var(--xx-text-dim);font-size:12px;text-align:center;opacity:.7}
      .al-stage{padding:10px;display:flex;flex-direction:column;align-items:center;gap:12px}
      .al-title{font-size:15px;color:#f5c97a;letter-spacing:2px}
      .al-cauldron{width:200px;height:150px;background:radial-gradient(circle at 50% 30%,#3a1c1a,#180a08 70%);border-radius:50% 50% 20% 20%/60% 60% 40% 40%;border:3px solid #6d3a24;position:relative;overflow:hidden}
      .al-fire{position:absolute;left:20%;right:20%;bottom:5%;height:30%;background:linear-gradient(180deg,#ff9840,transparent);filter:blur(6px);animation:al-fire 1.4s infinite alternate}
      .al-liquid{position:absolute;left:15%;right:15%;top:60%;bottom:20%;background:radial-gradient(#f5c97a,#f39c56);border-radius:50%;filter:blur(3px);animation:al-bubble 2s infinite}
      @keyframes al-fire{from{transform:scaleY(0.9);opacity:.7}to{transform:scaleY(1.1);opacity:1}}
      @keyframes al-bubble{50%{transform:scale(1.05)}}
      .al-phase{font-size:13px;color:#6ed5e0;letter-spacing:2px;text-align:center}
      .al-mats{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;padding:0 10px}
      .al-mat{padding:8px 12px;background:rgba(140,226,140,.12);border:1px solid rgba(140,226,140,.4);border-radius:999px;color:#8ce28c;cursor:pointer;transition:transform .12s ease;font-size:13px}
      .al-mat:hover:not(:disabled){transform:translateY(-2px)}
      .al-mat.done{background:rgba(140,226,140,.28);opacity:.5}
      .al-mat.err{background:rgba(226,91,91,.35);border-color:#e25b5b;animation:al-shake .3s}
      @keyframes al-shake{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
      .al-scoreline{font-size:13px;color:var(--xx-text-soft)}
      .al-scoreline b{color:#f5c97a;font-size:16px}
      .al-fire-game{width:100%;max-width:360px;display:flex;flex-direction:column;align-items:center;gap:8px}
      .al-fire-track{position:relative;width:100%;height:22px;background:linear-gradient(90deg,#333,#666);border-radius:11px;overflow:hidden}
      .al-fire-safe{position:absolute;left:40%;width:30%;top:0;bottom:0;background:linear-gradient(90deg,rgba(140,226,140,.4),rgba(140,226,140,.6))}
      .al-fire-pointer{position:absolute;width:14px;height:26px;background:#f5c97a;top:-2px;left:0;border-radius:4px;box-shadow:0 0 8px #f5c97a}
      .al-out-game{width:100%;max-width:220px;display:flex;flex-direction:column;align-items:center;gap:10px}
      .al-out-ring{position:relative;width:140px;height:140px;border:3px solid rgba(245,201,122,.4);border-radius:50%}
      .al-out-target{position:absolute;top:50%;left:50%;width:8px;height:70px;background:#8ce28c;transform:translate(-50%,-100%);border-radius:4px}
      .al-out-pointer{position:absolute;top:50%;left:50%;width:6px;height:70px;background:#ff7b7b;transform-origin:50% 100%;transform:translate(-50%,-100%) rotate(0deg)}
      .al-result{padding:20px;text-align:center}
      .al-result-icon{font-size:56px;margin-bottom:8px}
      .al-result-title{font-size:20px;color:#f5c97a;letter-spacing:3px}
      .al-result.ji .al-result-title{color:#ff9ec6;text-shadow:0 0 12px #ff9ec6}
      .al-result.shang .al-result-title{color:#b288ff}
      .al-result.fail .al-result-title{color:#e25b5b}
      .al-result-score{margin-top:6px;font-size:13px;color:var(--xx-text-soft)}
      .al-result-drop{margin-top:10px;font-size:14px;color:#8ce28c}
      .al-actions{margin-top:16px;display:flex;justify-content:center;gap:10px}
    `;
    document.head.appendChild(style);
  }

  global.AlchemyLab = {
    __v435d: true,
    open, render,
    HERBS, RECIPES,
    dropRareHerb, unlockRandomRecipe,
    addHerb: (herbId, n=1) => { ensure(); Game.state.char.herbs[herbId] = (Game.state.char.herbs[herbId]||0) + n; Game.save(); }
  };
  console.log('[v4.3.5d] AlchemyLab loaded — 真·炼丹房已上线（三段小游戏）');
})(typeof window !== 'undefined' ? window : this);
