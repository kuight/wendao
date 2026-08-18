/* ===================================================================
 * v4.3.5d · 灵植园 SpiritGarden
 * -------------------------------------------------------------------
 * 补齐"种药"玩法。玩法：
 *   1) 花 X 灵石 从"苗圃"选一株灵苗种下
 *   2) 每株药有成熟时间 (2 / 6 / 12 / 24 小时不等)
 *   3) 时间到后点"采收"，进 Game.state.char.herbs 供炼丹用
 *   4) 学过特定功法后解锁高阶苗（如学了 5 篇化学 → 解锁天焰石苗）
 *
 * 加载顺序：必须在 alchemy-lab-v435d.js 之后（共用 HERBS 定义）。
 * =================================================================== */
(function (global) {
  'use strict';
  const Game = global.Game;
  const UI = global.UI;
  if (!Game || !UI) return;
  if (global.SpiritGarden) return;

  const HERBS = (global.AlchemyLab && global.AlchemyLab.HERBS) || {
    lingzhi: {id:'lingzhi', name:'灵芝草', icon:'🌿', tier:1},
    hongguo: {id:'hongguo', name:'血珠红果', icon:'🍒', tier:1}
  };

  // 苗谱：种子ID → { herbId产出, cost灵石, timeMs, needCond解锁条件 }
  const SEEDS = {
    seed_lingzhi:    { herb:'lingzhi',    cost:60,     timeMs: 2*3600*1000, name:'灵芝苗',   icon:'🌱', desc:'2 小时成熟' },
    seed_hongguo:    { herb:'hongguo',    cost:80,     timeMs: 2*3600*1000, name:'红果苗',   icon:'🌱', desc:'2 小时成熟' },
    seed_yueyanhua:  { herb:'yueyanhua',  cost:220,    timeMs: 6*3600*1000, name:'月焰花苗', icon:'🌿', desc:'6 小时成熟',   need:{ totalMastered:3 } },
    seed_qingxinlu:  { herb:'qingxinlu',  cost:260,    timeMs: 6*3600*1000, name:'清心露苗', icon:'🌿', desc:'6 小时成熟',   need:{ totalMastered:3 } },
    seed_tianyanshi: { herb:'tianyanshi', cost:900,    timeMs:12*3600*1000, name:'天焰石胚', icon:'🔥', desc:'12 小时成熟',  need:{ subject:'chemistry', mastered:3 } },
    seed_xuanbinghua:{ herb:'xuanbinghua',cost:900,    timeMs:12*3600*1000, name:'玄冰花苗', icon:'❄',  desc:'12 小时成熟',  need:{ subject:'geography', mastered:3 } },
    seed_qilinjiao:  { herb:'qilinjiao',  cost:5000,   timeMs:24*3600*1000, name:'麒麟角胚', icon:'🦄', desc:'24 小时成熟',  need:{ realmId:60 } },
    seed_fenglinggen:{ herb:'fenglinggen',cost:5000,   timeMs:24*3600*1000, name:'凤翎根苗', icon:'🪶', desc:'24 小时成熟',  need:{ realmId:60 } },
    seed_hunyuandan: { herb:'hunyuandan', cost:30000,  timeMs:48*3600*1000, name:'混元石种', icon:'⚪', desc:'48 小时成熟',  need:{ realmId:120 } }
  };

  const PLOT_COUNT = 6;

  function ensure(){
    const c = Game.state.char;
    if (!c.herbs) c.herbs = {};
    if (!Game.state.garden) Game.state.garden = { plots: Array(PLOT_COUNT).fill(null).map(() => ({ seed:null, plantedAt:0 })) };
    // 兼容旧数据（数量增减）
    while (Game.state.garden.plots.length < PLOT_COUNT) Game.state.garden.plots.push({ seed:null, plantedAt:0 });
  }

  function totalMasteredCount(){
    return Object.values(Game.state.sects||{}).reduce((a,b) => a + ((b && b.masteredManuals) || []).length, 0);
  }
  function subjectMasteredCount(sub){
    const s = (Game.state.sects && Game.state.sects[sub]) || {};
    return (s.masteredManuals || []).length;
  }
  function seedUnlocked(seed){
    if (!seed.need) return true;
    if (seed.need.totalMastered && totalMasteredCount() < seed.need.totalMastered) return false;
    if (seed.need.subject && subjectMasteredCount(seed.need.subject) < (seed.need.mastered||0)) return false;
    if (seed.need.realmId && (Game.state.char.realmId||0) < seed.need.realmId) return false;
    return true;
  }
  function unlockReason(seed){
    if (!seed.need) return '';
    const p = [];
    if (seed.need.totalMastered) p.push(`已参悟 ≥ ${seed.need.totalMastered} 篇功法`);
    if (seed.need.subject) p.push(`${seed.need.subject} 参悟 ≥ ${seed.need.mastered} 篇`);
    if (seed.need.realmId) {
      const r = Game.getRealm && Game.getRealm(seed.need.realmId);
      p.push(`达到 ${r ? r.name : ('第'+seed.need.realmId+'境')}`);
    }
    return '要求：' + p.join(' · ');
  }

  function fmtRemain(ms){
    if (ms <= 0) return '已成熟';
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  }

  function render(){
    ensure();
    const now = Date.now();
    const c = Game.state.char;
    const g = Game.state.garden;

    const plotsHtml = g.plots.map((p, idx) => {
      if (!p || !p.seed) {
        return `<div class="sg-plot empty" data-plot="${idx}">
          <div class="sg-plot-icon">🕳</div>
          <div class="sg-plot-status">空地</div>
          <button class="xx-btn xx-btn-primary" data-plant="${idx}">种植</button>
        </div>`;
      }
      const seed = SEEDS[p.seed];
      if (!seed) return `<div class="sg-plot empty" data-plot="${idx}"><div class="sg-plot-status">异常</div></div>`;
      const elapsed = now - (p.plantedAt||0);
      const remain = seed.timeMs - elapsed;
      const ready = remain <= 0;
      const pct = Math.max(0, Math.min(100, Math.round(elapsed / seed.timeMs * 100)));
      return `<div class="sg-plot ${ready?'ready':''}" data-plot="${idx}">
        <div class="sg-plot-icon">${ready ? (HERBS[seed.herb]?.icon||'🌿') : seed.icon}</div>
        <div class="sg-plot-name">${HERBS[seed.herb]?.name || seed.name}</div>
        <div class="sg-plot-bar"><div class="sg-plot-bar-in" style="width:${pct}%"></div></div>
        <div class="sg-plot-status">${ready ? '🌾 已成熟' : `⏳ ${fmtRemain(remain)}`}</div>
        ${ready ? `<button class="xx-btn xx-btn-primary" data-harvest="${idx}">采收</button>`
                : `<button class="xx-btn" data-force="${idx}">🚀 加速 (${Math.max(100, Math.round(remain/60000))} 灵石)</button>`}
      </div>`;
    }).join('');

    const seedsHtml = Object.keys(SEEDS).map(sid => {
      const s = SEEDS[sid];
      const unlocked = seedUnlocked(s);
      const affordable = (c.lingshi||0) >= s.cost;
      return `<div class="sg-seed ${unlocked?'':'locked'}">
        <div class="sg-seed-h">${s.icon} <b>${s.name}</b> <span style="color:var(--xx-text-dim);font-size:11px;margin-left:6px">→ ${HERBS[s.herb]?.name||s.herb}</span></div>
        <div class="sg-seed-desc">${s.desc} · ${s.cost} 灵石${unlocked?'':' · '+unlockReason(s)}</div>
      </div>`;
    }).join('');

    return `<div class="sg-wrap">
      <div class="sg-hero">
        <div class="sg-hero-title">🌱 灵植园</div>
        <div class="sg-hero-sub">种下灵苗，等待成熟，收获后进药圃供炼丹使用</div>
        <div class="sg-hero-stat">灵石：${c.lingshi||0} · 田地：${g.plots.length} 块 · 高阶苗：随功法/境界解锁</div>
      </div>
      <div class="sg-plots">${plotsHtml}</div>
      <div class="sg-col-title" style="margin-top:16px">🌾 苗谱（点击田地"种植"选苗）</div>
      <div class="sg-seeds">${seedsHtml}</div>
    </div>`;
  }

  function open(){
    ensure();
    const inst = UI.modal({
      title: '🌱 灵植园',
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
    inst.m.querySelectorAll('[data-plant]').forEach(btn => {
      btn.onclick = () => choosePlant(parseInt(btn.dataset.plant,10), inst);
    });
    inst.m.querySelectorAll('[data-harvest]').forEach(btn => {
      btn.onclick = () => harvest(parseInt(btn.dataset.harvest,10), inst);
    });
    inst.m.querySelectorAll('[data-force]').forEach(btn => {
      btn.onclick = () => forceGrow(parseInt(btn.dataset.force,10), inst);
    });
  }

  function choosePlant(plotIdx, homeInst){
    ensure();
    const seedList = Object.keys(SEEDS).filter(sid => seedUnlocked(SEEDS[sid]));
    if (!seedList.length) { UI.toast('尚无可种苗', 'warn'); return; }
    const body = seedList.map(sid => {
      const s = SEEDS[sid];
      const afford = (Game.state.char.lingshi||0) >= s.cost;
      return `<div class="sg-seed-pick ${afford?'':'lack'}" data-pick="${sid}">
        <div><b>${s.icon} ${s.name}</b> → ${HERBS[s.herb]?.name}</div>
        <div style="font-size:12px;color:var(--xx-text-soft)">${s.desc} · 花费 ${s.cost} 灵石</div>
        <button class="xx-btn ${afford?'xx-btn-primary':''}" ${afford?'':'disabled'} data-pick-btn="${sid}">${afford?'✅ 种下':'⚠ 灵石不足'}</button>
      </div>`;
    }).join('');
    const pickInst = UI.modal({
      title: `选苗种入 · 田地 ${plotIdx+1}`,
      body: `<div class="sg-picks">${body}</div>`,
      actions: [{ label:'取消' }]
    });
    setTimeout(() => {
      pickInst.m.querySelectorAll('[data-pick-btn]').forEach(b => {
        b.onclick = () => {
          const sid = b.dataset.pickBtn;
          const s = SEEDS[sid];
          if (!s) return;
          if ((Game.state.char.lingshi||0) < s.cost) { UI.toast('灵石不足','error'); return; }
          Game.state.char.lingshi -= s.cost;
          Game.state.garden.plots[plotIdx] = { seed: sid, plantedAt: Date.now() };
          Game.save();
          UI.toast(`🌱 已种下 ${s.name}`, 'success');
          if (pickInst.close) pickInst.close();
          refresh(homeInst);
        };
      });
    }, 0);
  }

  function harvest(plotIdx, homeInst){
    ensure();
    const p = Game.state.garden.plots[plotIdx];
    if (!p || !p.seed) return;
    const seed = SEEDS[p.seed];
    if (!seed) return;
    const now = Date.now();
    if (now - p.plantedAt < seed.timeMs) { UI.toast('尚未成熟', 'warn'); return; }
    const c = Game.state.char;
    if (!c.herbs) c.herbs = {};
    const qty = 1 + (Math.random() < 0.35 ? 1 : 0); // 35% 概率双倍
    c.herbs[seed.herb] = (c.herbs[seed.herb]||0) + qty;
    Game.state.garden.plots[plotIdx] = { seed:null, plantedAt:0 };
    Game.save();
    UI.toast(`🌾 采收：${HERBS[seed.herb]?.name} ×${qty}`, 'success');
    refresh(homeInst);
  }

  function forceGrow(plotIdx, homeInst){
    ensure();
    const p = Game.state.garden.plots[plotIdx];
    if (!p || !p.seed) return;
    const seed = SEEDS[p.seed];
    if (!seed) return;
    const remain = seed.timeMs - (Date.now() - p.plantedAt);
    const cost = Math.max(100, Math.round(remain/60000));
    if ((Game.state.char.lingshi||0) < cost) { UI.toast('灵石不足','error'); return; }
    Game.state.char.lingshi -= cost;
    p.plantedAt -= remain;
    Game.save();
    UI.toast(`🚀 加速成熟（消耗 ${cost} 灵石）`, 'success');
    refresh(homeInst);
  }

  // -------- 样式 --------
  const style = document.createElement('style');
  style.id = 'sg-style-v435d';
  style.textContent = `
    .sg-wrap{display:flex;flex-direction:column;gap:12px;padding:4px}
    .sg-hero{padding:12px 14px;background:linear-gradient(135deg,rgba(140,226,140,.12),rgba(110,213,224,.08));border:1px solid rgba(140,226,140,.24);border-radius:14px}
    .sg-hero-title{font-size:18px;color:#8ce28c;letter-spacing:3px;font-family:var(--xx-font-art,serif)}
    .sg-hero-sub{margin-top:4px;font-size:12px;color:var(--xx-text-soft)}
    .sg-hero-stat{margin-top:8px;font-size:12px;color:var(--xx-text-soft)}
    .sg-col-title{font-size:14px;color:#8ce28c;letter-spacing:2px}
    .sg-plots{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px}
    .sg-plot{padding:12px;background:rgba(14,12,26,.68);border:1px dashed rgba(140,226,140,.35);border-radius:12px;text-align:center;transition:transform .15s ease,border-color .15s ease}
    .sg-plot.empty{border-style:dashed;opacity:.85}
    .sg-plot.ready{border-color:#f5c97a;box-shadow:0 0 12px rgba(245,201,122,.25)}
    .sg-plot-icon{font-size:32px}
    .sg-plot-name{font-size:13px;color:#f5c97a;margin:4px 0}
    .sg-plot-status{font-size:11px;color:var(--xx-text-soft);margin:6px 0 8px}
    .sg-plot-bar{width:100%;height:6px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden}
    .sg-plot-bar-in{height:100%;background:linear-gradient(90deg,#8ce28c,#f5c97a);transition:width .3s ease}
    .sg-seeds{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px}
    .sg-seed{padding:8px 10px;background:rgba(14,12,26,.55);border:1px solid rgba(255,255,255,.08);border-radius:10px}
    .sg-seed.locked{opacity:.42}
    .sg-seed-h{font-size:13px}
    .sg-seed-desc{font-size:11px;color:var(--xx-text-soft);margin-top:4px}
    .sg-picks{display:flex;flex-direction:column;gap:8px;max-height:420px;overflow:auto}
    .sg-seed-pick{padding:10px;background:rgba(14,12,26,.7);border:1px solid rgba(255,255,255,.1);border-radius:12px;display:flex;flex-direction:column;gap:6px}
    .sg-seed-pick.lack{opacity:.55}
  `;
  document.head.appendChild(style);

  global.SpiritGarden = {
    open, render, SEEDS,
    addSeedReward: () => { /* 预留：秘境掉种子等 */ }
  };
  console.log('[v4.3.5d] SpiritGarden loaded — 灵植园已上线');
})(typeof window !== 'undefined' ? window : this);
