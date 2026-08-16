/* ================================================================
 * 《问道修仙学院》v4.4.0 · ⚡ 雷劫限时闯关（Thunder Tribulation）
 *
 * 玩法：从当前秘籍关联的题库里随机抽题，倒计时+连击+HP 系统。
 * 三档：一劫（5题/60秒/3血）二劫（8题/90秒/3血）三劫（12题/120秒/2血）
 *
 * 入口：LM.startThunder({ manual, sect })
 * 挂钩：给 loader 加第 5 个 mini 按钮（⚡ 雷劫）
 * ================================================================ */
(function (global) {
  'use strict';

  const TIERS = {
    1: { name: '一劫·凝雷', count: 5,  time: 60,  hp: 3, xiuwei: 30, comboBonus: 3 },
    2: { name: '二劫·紫雷', count: 8,  time: 90,  hp: 3, xiuwei: 60, comboBonus: 5 },
    3: { name: '三劫·天雷', count: 12, time: 120, hp: 2, xiuwei: 120, comboBonus: 8 }
  };

  /* 注入雷劫专用样式 */
  function injectCss(){
    if (document.getElementById('lm-thunder-css')) return;
    const s = document.createElement('style');
    s.id = 'lm-thunder-css';
    s.textContent = `
    @keyframes thBoom{0%{transform:scale(1);opacity:1}50%{transform:scale(1.2);opacity:.9}100%{transform:scale(0.9);opacity:0}}
    @keyframes thFlash{0%,100%{background:rgba(140,100,220,.1)}50%{background:rgba(255,215,94,.4)}}
    @keyframes thShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
    @keyframes thGolden{0%{filter:brightness(1) drop-shadow(0 0 0 gold)}50%{filter:brightness(1.5) drop-shadow(0 0 20px gold)}100%{filter:brightness(1) drop-shadow(0 0 0 gold)}}

    .th-hud{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 16px;background:linear-gradient(135deg,#2a1548,#3b1e5c);border-radius:10px;margin-bottom:14px}
    .th-timer{font-family:monospace;font-size:28px;font-weight:800;color:#ffd75e;letter-spacing:2px;text-shadow:0 0 12px rgba(255,215,94,.6)}
    .th-timer.warn{color:#ff6a6a;text-shadow:0 0 12px rgba(255,106,106,.7);animation:thShake .4s infinite}
    .th-hp{display:flex;gap:4px}
    .th-hp span{font-size:22px;transition:.3s}
    .th-hp .lost{filter:grayscale(1);opacity:.3;transform:scale(.8)}
    .th-progress{color:#c8bce8;font-size:14px}
    .th-combo{background:linear-gradient(135deg,#7a5cc4,#a279d9);color:#fff;padding:4px 12px;border-radius:16px;font-size:13px;font-weight:700}
    .th-combo.hot{background:linear-gradient(135deg,#e08535,#f5a94a);animation:thGolden 1s infinite}

    .th-stem{background:rgba(255,255,255,.05);border-left:3px solid #a279d9;padding:14px 18px;border-radius:8px;margin-bottom:14px;line-height:1.85;color:#f5eaff;font-size:16px}
    .th-opts{display:flex;flex-direction:column;gap:10px}
    .th-opt{background:rgba(255,255,255,.05);border:1px solid rgba(180,140,255,.3);color:#e8e0ff;padding:12px 16px;border-radius:8px;text-align:left;cursor:pointer;transition:.15s;font-size:15px}
    .th-opt:hover{background:rgba(180,140,255,.15);border-color:#a279d9;transform:translateX(4px)}
    .th-opt.right{background:rgba(90,196,136,.25);border-color:#5ac488;color:#c8ffdd;animation:thFlash .5s}
    .th-opt.wrong{background:rgba(226,90,90,.2);border-color:#e25a5a;color:#ffb0b0;animation:thShake .4s}

    .th-flash{position:fixed;inset:0;pointer-events:none;z-index:100000;opacity:0}
    .th-flash.on{background:radial-gradient(circle,rgba(255,215,94,.6),transparent 60%);animation:thBoom .6s}
    .th-flash.on.bad{background:radial-gradient(circle,rgba(226,90,90,.6),transparent 60%)}

    .th-result{text-align:center;padding:20px 0}
    .th-result .verdict{font-size:36px;font-weight:900;margin:12px 0;letter-spacing:3px}
    .th-result .win{color:#ffd75e;text-shadow:0 0 30px rgba(255,215,94,.8)}
    .th-result .lose{color:#ff6a6a;text-shadow:0 0 30px rgba(255,106,106,.6)}
    .th-result .stats{color:#c8bce8;margin:12px 0;line-height:2}
    `;
    document.head.appendChild(s);
  }

  /* 打开遮罩壳 */
  function openOverlay(html, onClose){
    injectCss();
    if (global.LM && global.LM._injectCss) global.LM._injectCss();
    const ov = document.createElement('div');
    ov.className = 'lm-overlay';
    ov.innerHTML = `<div class="lm-panel-wrap"><button class="lm-close" title="关闭">✕</button>
      <div class="lm-panel">${html}</div>
      <div class="th-flash" id="th-flash"></div></div>`;
    document.body.appendChild(ov);
    const close = () => {
      ov.style.animation = 'lmFade .2s reverse';
      setTimeout(() => { ov.remove(); onClose && onClose(); }, 180);
    };
    ov.querySelector('.lm-close').onclick = close;
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
    return { overlay: ov, panel: ov.querySelector('.lm-panel'), close };
  }

  /* 特效闪光 */
  function flash(overlay, bad){
    const f = overlay.querySelector('#th-flash');
    if (!f) return;
    f.className = 'th-flash on' + (bad ? ' bad' : '');
    setTimeout(() => { f.className = 'th-flash'; }, 600);
  }

  function beep(ok){
    try {
      if (global.SFX && typeof global.SFX.play === 'function'){
        global.SFX.play(ok ? 'correct' : 'wrong'); return;
      }
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = ok ? 880 : 180;
      g.gain.value = 0.1;
      o.start(); setTimeout(() => { o.stop(); ctx.close(); }, 130);
    } catch(e){}
  }

  function shuffle(arr){
    const a = arr.slice();
    for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  /* 从多个渠道拿题：manualId 匹配 → 学科题库 → deepDive.stepExamples 兜底 */
  function collectQuestions(manual, sect, need){
    const pool = [];
    // 渠道1：SubjectPage.bank + manualId 匹配（v438 已有的题库）
    if (global.SubjectPage && Array.isArray(global.SubjectPage.bank)){
      global.SubjectPage.bank.forEach(q => {
        if (q.manualId === manual.id && q.stem && q.options && typeof q.answer !== 'undefined'){
          pool.push(q);
        }
      });
    }
    // 渠道2：如果不够，从整个学科题库随机取（同学科更好）
    if (pool.length < need && global.SubjectPage && Array.isArray(global.SubjectPage.bank)){
      global.SubjectPage.bank.forEach(q => {
        if (!pool.includes(q) && q.stem && q.options && typeof q.answer !== 'undefined'){
          pool.push(q);
        }
      });
    }
    // 渠道3：deepDive.stepExamples 兜底
    if (pool.length < need && manual.deepDive && Array.isArray(manual.deepDive.stepExamples)){
      manual.deepDive.stepExamples.forEach(ex => {
        (ex.steps || []).forEach(s => {
          if (s.type === 'choice' && s.options){
            pool.push({
              stem: (ex.stem || '') + '\n' + s.ask,
              options: s.options,
              answer: s.answerIndex,
              explain: s.explain || ''
            });
          }
        });
      });
    }
    // 渠道4：闪卡兜底（把闪卡背面转成"从4个选项里选正确的"——为了雷劫玩法能启动）
    if (pool.length < need && manual.deepDive && Array.isArray(manual.deepDive.flashcards)){
      const cards = manual.deepDive.flashcards;
      cards.slice(0, need).forEach((c, i) => {
        const distractors = cards.filter((_, j) => j !== i).slice(0, 3).map(x => x.back);
        const opts = shuffle([c.back, ...distractors]);
        pool.push({
          stem: c.front,
          options: opts,
          answer: opts.indexOf(c.back),
          explain: `正确答案：${c.back}`
        });
      });
    }
    return shuffle(pool).slice(0, need);
  }

  /* 主入口：雷劫等级选择 */
  function startThunder({ manual, sect }){
    const { panel, overlay, close } = openOverlay(`
      <div class="lm-title">⚡ ${manual.title} · 雷劫渡劫</div>
      <div class="lm-sub">选择劫难等级——修为越高，天雷越猛，奖励越丰</div>
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px">
        <button class="lm-btn ghost" data-tier="1" style="text-align:left;padding:14px 20px">
          <div style="font-size:16px;font-weight:700;color:#c8bce8">⚡ 一劫·凝雷 · 5 题 / 60 秒 / 3 血 <span style="float:right;color:#ffd75e">奖励 +30 修为</span></div>
          <div style="font-size:12px;color:#a99cd0;margin-top:4px">适合初入门径，练手不慌</div>
        </button>
        <button class="lm-btn ghost" data-tier="2" style="text-align:left;padding:14px 20px">
          <div style="font-size:16px;font-weight:700;color:#c8bce8">⚡⚡ 二劫·紫雷 · 8 题 / 90 秒 / 3 血 <span style="float:right;color:#ffd75e">奖励 +60 修为</span></div>
          <div style="font-size:12px;color:#a99cd0;margin-top:4px">上强度，考验反应速度</div>
        </button>
        <button class="lm-btn ghost" data-tier="3" style="text-align:left;padding:14px 20px">
          <div style="font-size:16px;font-weight:700;color:#ffd75e">⚡⚡⚡ 三劫·天雷 · 12 题 / 120 秒 / 2 血 <span style="float:right;color:#ffd75e">奖励 +120 修为</span></div>
          <div style="font-size:12px;color:#a99cd0;margin-top:4px">生死一线，渡过者可称"劫仙"</div>
        </button>
      </div>
    `);

    panel.querySelectorAll('[data-tier]').forEach(btn => {
      btn.onclick = () => {
        const tier = parseInt(btn.dataset.tier, 10);
        close();
        setTimeout(() => launch({ manual, sect, tier }), 200);
      };
    });
  }

  /* 实际闯关流程 */
  function launch({ manual, sect, tier }){
    const cfg = TIERS[tier];
    const questions = collectQuestions(manual, sect, cfg.count);
    if (questions.length === 0){
      alert('本秘籍关联题库为空，请到"斩妖场"练完再来！');
      return;
    }
    const actualCount = questions.length; // 题库可能不够
    let idx = 0, correct = 0, combo = 0, maxCombo = 0, hp = cfg.hp;
    let timeLeft = cfg.time, timerId = null;

    const { panel, overlay, close } = openOverlay('', () => {
      if (timerId) clearInterval(timerId);
    });

    function render(){
      const q = questions[idx];
      const hpDots = Array.from({length: cfg.hp}, (_, i) =>
        `<span class="${i < hp ? '' : 'lost'}">${i < hp ? '❤️' : '💔'}</span>`).join('');
      const comboCls = combo >= 3 ? 'th-combo hot' : 'th-combo';
      const timerCls = timeLeft <= 10 ? 'th-timer warn' : 'th-timer';
      const mm = String(Math.floor(timeLeft/60)).padStart(2,'0');
      const ss = String(timeLeft%60).padStart(2,'0');

      panel.innerHTML = `
        <div class="lm-title">⚡ ${cfg.name} · ${manual.title}</div>
        <div class="th-hud">
          <div class="${timerCls}" id="th-timer">${mm}:${ss}</div>
          <div class="${comboCls}" id="th-combo">🔥 连击 ${combo}</div>
          <div class="th-hp" id="th-hp">${hpDots}</div>
          <div class="th-progress">第 ${idx+1} / ${actualCount} 题</div>
        </div>
        <div class="th-stem">${q.stem}</div>
        <div class="th-opts" id="th-opts">
          ${(q.options || []).map((o, i) => `<button class="th-opt" data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}
        </div>
      `;

      panel.querySelectorAll('.th-opt').forEach(btn => {
        btn.onclick = () => choose(parseInt(btn.dataset.i, 10), btn);
      });
    }

    function tick(){
      timeLeft--;
      const t = panel.querySelector('#th-timer');
      if (t){
        const mm = String(Math.floor(timeLeft/60)).padStart(2,'0');
        const ss = String(timeLeft%60).padStart(2,'0');
        t.textContent = `${mm}:${ss}`;
        if (timeLeft <= 10) t.className = 'th-timer warn';
      }
      if (timeLeft <= 0){ finish(false, '⏰ 时间耗尽，天雷噬体！'); }
    }

    function choose(i, btn){
      const q = questions[idx];
      const correctIdx = q.answer;
      // 锁定所有按钮
      panel.querySelectorAll('.th-opt').forEach(b => b.style.pointerEvents = 'none');

      if (i === correctIdx){
        btn.classList.add('right');
        beep(true);
        flash(overlay, false);
        correct++;
        combo++;
        maxCombo = Math.max(maxCombo, combo);
      } else {
        btn.classList.add('wrong');
        const rightBtn = panel.querySelector(`.th-opt[data-i="${correctIdx}"]`);
        if (rightBtn) rightBtn.classList.add('right');
        beep(false);
        flash(overlay, true);
        hp--;
        combo = 0;
      }

      setTimeout(() => {
        if (hp <= 0) return finish(false, '💀 天雷灼身，道基受损！');
        idx++;
        if (idx >= actualCount) return finish(true, '🌟 渡劫成功！雷劫加持，修为暴涨');
        render();
      }, 900);
    }

    function finish(win, reason){
      if (timerId){ clearInterval(timerId); timerId = null; }
      const scoreRate = Math.round(correct / actualCount * 100);
      // 修为奖励算法：基础奖励×通关系数 + 连击加成
      const base = win ? cfg.xiuwei : Math.round(cfg.xiuwei * correct / actualCount * 0.5);
      const comboReward = maxCombo >= 3 ? maxCombo * cfg.comboBonus : 0;
      const totalXW = base + comboReward;

      panel.innerHTML = `
        <div class="lm-title">${win ? '🎊 雷劫渡尽' : '⚡ 渡劫失败'}</div>
        <div class="th-result">
          <div class="verdict ${win?'win':'lose'}">${win ? '飞升' : '陨落'}</div>
          <div class="stats">
            ${reason}<br>
            答对 <b style="color:#ffd75e">${correct}</b> / ${actualCount} 题（正确率 ${scoreRate}%）<br>
            最高连击 <b style="color:#ff9635">${maxCombo}</b> 连<br>
            剩余血量 <b style="color:${hp>0?'#5ac488':'#ff6a6a'}">${hp}/${cfg.hp}</b><br>
            剩余时间 <b>${timeLeft}s</b><br>
            <div style="margin-top:12px;padding:10px;background:rgba(255,215,94,.1);border-radius:8px">
              获得修为 <b style="color:#ffd75e;font-size:20px">+${totalXW}</b>
              ${comboReward>0 ? `<br><span style="font-size:12px;color:#ffa">连击加成 +${comboReward}</span>` : ''}
            </div>
          </div>
          <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <button class="lm-btn ghost" id="th-close">关闭</button>
            <button class="lm-btn" id="th-again">🔁 再度渡劫</button>
          </div>
        </div>
      `;
      panel.querySelector('#th-close').onclick = close;
      panel.querySelector('#th-again').onclick = () => { close(); setTimeout(() => startThunder({manual, sect}), 200); };

      // 结算：修为发放
      if (global.Game && typeof global.Game.grant === 'function'){
        try { global.Game.grant('xiuwei', totalXW); } catch(e){}
      }
    }

    // 启动
    render();
    timerId = setInterval(tick, 1000);
  }

  /* 挂到 LM 全局 */
  if (global.LM){
    global.LM.startThunder = startThunder;
  } else {
    // 保底：延迟挂
    setTimeout(() => { if (global.LM) global.LM.startThunder = startThunder; }, 100);
  }

  /* 给 loader 加"⚡ 雷劫"mini 按钮（补丁 injectButtonsToExistingCards） */
  function patchLoaderButtons(){
    if (!global.LMLoader) return;
    if (global.LMLoader._thunderPatched) return;

    // 拦截 reinject——每次注入时给已渲染的卡额外加雷劫按钮
    const orig = global.LMLoader.reinject;
    global.LMLoader.reinject = function(){
      const n = orig ? orig.call(this) : 0;
      // 扫已挂了 mini-actions 的卡，追加雷劫按钮（如果还没有）
      const bars = document.querySelectorAll('.lm-mini-actions');
      bars.forEach(bar => {
        if (bar.querySelector('.lm-mini-th')) return;
        const card = bar.closest('.manual-card');
        if (!card) return;
        const mid = card.dataset.id;
        const SP = global.SubjectPage;
        const m = SP && SP.manuals ? SP.manuals.find(x => x.id === mid) : null;
        if (!m) return;
        const btn = document.createElement('button');
        btn.className = 'lm-mini-btn lm-mini-th';
        btn.dataset.mode = 'thunder';
        btn.title = '⚡ 雷劫限时闯关·爽感玩法';
        btn.textContent = '⚡ 雷劫';
        btn.style.background = 'linear-gradient(135deg,#7a3cc4,#c25a94)';
        btn.style.color = '#fff';
        btn.addEventListener('click', e => {
          e.stopPropagation();
          e.preventDefault();
          if (!global.LM || !global.LM.startThunder){
            alert('雷劫引擎未加载');
            return;
          }
          global.LM.startThunder({ manual: m, sect: SP.sect });
        });
        bar.appendChild(btn);
      });
      return n;
    };
    global.LMLoader._thunderPatched = true;

    // 立即扫一次
    setTimeout(() => global.LMLoader.reinject(), 200);
    // 监听 tab 切换后再补一次（v438 loader 已有 MutationObserver 触发 reinject）
  }

  function ready(){
    injectCss();
    patchLoaderButtons();
    console.log('[LM-Thunder v4.4.0] 雷劫玩法已装载，等级：一劫/二劫/三劫');
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    setTimeout(ready, 100);
  }

  global.LMThunder = { version: 'v4.4.0', startThunder, TIERS };

})(typeof window !== 'undefined' ? window : this);
