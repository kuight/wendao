/* ===============================================================
 * 《问道修仙学院》v4.3.8 · 多玩法学习模式引擎（Learning Modes Engine）
 *
 * 提供 4 种玩法化学习模式（挂在 window.LM 下）：
 *   1) startFlashcard      🔮 仙缘闪卡（60秒5张速记）
 *   2) startFormulaPuzzle  🧩 炼器公式拼盘（拖拽拼公式）
 *   3) startStepAnalysis   🌌 推衍例题精析（分步演算）
 *   4) startDeepDive       🎯 深度参悟（完整讲义面板）
 *
 * 所有 UI 走同一个 lm-overlay 全屏遮罩，样式内联注入（首屏一次）。
 * 数据源：manual.deepDive（由 deep-dive-*.js 或 fallback 生成）
 * =============================================================== */
(function (global) {
  'use strict';

  /* ----------------------------------------------------------------
   * 样式：一次性注入（避免每次弹窗重复写 <style>）
   * ---------------------------------------------------------------- */
  const CSS = `
  .lm-overlay{position:fixed;inset:0;background:rgba(10,8,20,.86);backdrop-filter:blur(6px);
    z-index:99999;display:flex;align-items:center;justify-content:center;animation:lmFade .25s ease}
  @keyframes lmFade{from{opacity:0}to{opacity:1}}
  .lm-panel{width:min(760px,92vw);max-height:88vh;overflow:auto;background:linear-gradient(160deg,#1a1530,#241a3a);
    border:1px solid rgba(180,140,255,.35);border-radius:16px;padding:22px 26px;color:#e8e0ff;
    box-shadow:0 20px 60px rgba(0,0,0,.6),inset 0 0 30px rgba(140,100,220,.08)}
  .lm-title{font-size:22px;font-weight:700;margin:0 0 4px;color:#f5eaff;letter-spacing:1px}
  .lm-sub{font-size:13px;color:#a99cd0;margin-bottom:16px}
  .lm-close{position:absolute;top:18px;right:22px;background:rgba(255,255,255,.08);border:none;
    color:#fff;width:34px;height:34px;border-radius:50%;font-size:18px;cursor:pointer;transition:.2s}
  .lm-close:hover{background:rgba(255,120,120,.3);transform:rotate(90deg)}
  .lm-panel-wrap{position:relative}

  /* 闪卡 */
  .lm-fc-card{min-height:220px;background:linear-gradient(140deg,#2a1f4a,#3a2860);border-radius:14px;
    padding:28px;margin:14px 0;font-size:17px;line-height:1.7;box-shadow:0 8px 24px rgba(0,0,0,.4);
    cursor:pointer;transition:transform .3s;position:relative;overflow:hidden}
  .lm-fc-card:hover{transform:translateY(-2px)}
  .lm-fc-card .lm-fc-hint{position:absolute;bottom:10px;right:16px;font-size:12px;color:#a99cd0;opacity:.7}
  .lm-fc-front{color:#fff9c4;font-weight:600}
  .lm-fc-back{color:#c8ffdd;font-size:15px;line-height:1.8}
  .lm-fc-bar{display:flex;gap:10px;justify-content:center;margin-top:10px}
  .lm-fc-timer{text-align:center;font-size:24px;color:#ffd75e;font-weight:700;margin-bottom:8px;font-family:monospace}
  .lm-fc-progress{text-align:center;color:#a99cd0;font-size:13px;margin-bottom:10px}
  .lm-btn{background:linear-gradient(135deg,#7a5cc4,#a279d9);border:none;color:#fff;padding:10px 22px;
    border-radius:8px;font-size:15px;cursor:pointer;transition:.2s;font-weight:600}
  .lm-btn:hover{filter:brightness(1.15);transform:translateY(-1px)}
  .lm-btn.ghost{background:rgba(255,255,255,.08);border:1px solid rgba(180,140,255,.3)}
  .lm-btn.good{background:linear-gradient(135deg,#3ea86e,#5ac488)}
  .lm-btn.again{background:linear-gradient(135deg,#c26a4c,#e48a5f)}

  /* 拼盘 */
  .lm-fp-target{background:#0f0a20;border:2px dashed rgba(180,140,255,.4);border-radius:12px;
    padding:22px;min-height:88px;font-size:20px;text-align:center;line-height:1.8;color:#fff;
    letter-spacing:2px;display:flex;flex-wrap:wrap;gap:8px;justify-content:center;align-items:center}
  .lm-fp-slot{display:inline-block;min-width:44px;min-height:36px;padding:4px 10px;
    background:rgba(140,100,220,.15);border:1px dashed rgba(180,140,255,.5);border-radius:6px;color:#a99cd0}
  .lm-fp-slot.filled{background:rgba(90,196,136,.25);border:1px solid #5ac488;color:#fff;font-weight:700}
  .lm-fp-slot.wrong{animation:lmShake .4s;background:rgba(226,90,90,.3);border-color:#e25a5a}
  @keyframes lmShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
  .lm-fp-pool{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px;padding:16px;
    background:rgba(255,255,255,.04);border-radius:10px;min-height:60px}
  .lm-fp-piece{background:linear-gradient(135deg,#4a3778,#6a4fa0);color:#fff;padding:8px 14px;
    border-radius:6px;cursor:grab;font-size:18px;user-select:none;transition:.15s;font-weight:600}
  .lm-fp-piece:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(140,100,220,.4)}
  .lm-fp-piece.used{opacity:.3;pointer-events:none}
  .lm-fp-tip{font-size:13px;color:#a99cd0;margin:10px 0;font-style:italic}

  /* 例题精析 */
  .lm-sa-progress{display:flex;gap:6px;margin-bottom:14px}
  .lm-sa-progress .dot{flex:1;height:6px;border-radius:3px;background:rgba(180,140,255,.2)}
  .lm-sa-progress .dot.done{background:#5ac488}
  .lm-sa-progress .dot.active{background:#ffd75e}
  .lm-sa-stem{background:rgba(255,255,255,.05);border-left:3px solid #a279d9;padding:14px 18px;
    border-radius:8px;margin-bottom:14px;line-height:1.8;color:#f5eaff}
  .lm-sa-step-hint{color:#ffd75e;font-size:13px;margin:8px 0}
  .lm-sa-options{display:flex;flex-direction:column;gap:8px;margin:12px 0}
  .lm-sa-opt{background:rgba(255,255,255,.05);border:1px solid rgba(180,140,255,.3);color:#e8e0ff;
    padding:12px 16px;border-radius:8px;text-align:left;cursor:pointer;transition:.15s;font-size:15px}
  .lm-sa-opt:hover{background:rgba(180,140,255,.15);border-color:#a279d9}
  .lm-sa-opt.correct{background:rgba(90,196,136,.2);border-color:#5ac488;color:#c8ffdd}
  .lm-sa-opt.wrong{background:rgba(226,90,90,.15);border-color:#e25a5a;color:#ffb0b0}
  .lm-sa-explain{background:rgba(255,215,94,.08);border-left:3px solid #ffd75e;padding:12px 16px;
    border-radius:6px;margin-top:12px;font-size:14px;line-height:1.8;color:#fff3c4}
  .lm-sa-explain b{color:#ffd75e}
  .lm-sa-fill{background:rgba(255,255,255,.06);border:1px solid rgba(180,140,255,.4);color:#fff;
    padding:8px 12px;border-radius:6px;font-size:15px;width:auto;min-width:120px;font-family:inherit}
  .lm-sa-fill:focus{outline:none;border-color:#a279d9;background:rgba(140,100,220,.15)}

  /* 深度参悟 */
  .lm-dd-nav{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;padding-bottom:12px;
    border-bottom:1px solid rgba(180,140,255,.2)}
  .lm-dd-tab{background:rgba(255,255,255,.05);border:1px solid rgba(180,140,255,.2);color:#c8bce8;
    padding:6px 12px;border-radius:6px;cursor:pointer;font-size:13px;transition:.15s}
  .lm-dd-tab:hover{background:rgba(180,140,255,.15)}
  .lm-dd-tab.active{background:linear-gradient(135deg,#7a5cc4,#a279d9);color:#fff;border-color:transparent}
  .lm-dd-block{background:rgba(255,255,255,.04);border-radius:10px;padding:16px 20px;margin-bottom:12px}
  .lm-dd-block h4{margin:0 0 10px;color:#ffd75e;font-size:15px;display:flex;align-items:center;gap:6px}
  .lm-dd-block p{margin:6px 0;line-height:1.85;color:#e8e0ff;font-size:14.5px}
  .lm-dd-block .lm-dd-list{margin:4px 0 0;padding-left:20px}
  .lm-dd-block .lm-dd-list li{margin:4px 0;line-height:1.8;color:#dccff4}
  .lm-dd-pitfall{background:rgba(226,90,90,.08);border-left:3px solid #e25a5a}
  .lm-dd-pitfall h4{color:#ff9090}
  .lm-dd-mnemonic{background:rgba(90,196,136,.08);border-left:3px solid #5ac488}
  .lm-dd-mnemonic h4{color:#a4f0c4}
  .lm-dd-reflex{background:rgba(255,215,94,.08);border-left:3px solid #ffd75e}
  .lm-dd-reflex h4{color:#ffd75e}
  .lm-dd-why{background:rgba(140,100,220,.1);border-left:3px solid #a279d9}
  .lm-dd-why h4{color:#c8b3f2}

  /* 卡片按钮组 */
  .lm-mini-actions{display:flex;gap:6px;margin-top:10px;padding-top:10px;
    border-top:1px dashed rgba(180,140,255,.2);flex-wrap:wrap}
  .lm-mini-btn{flex:1;min-width:64px;background:rgba(140,100,220,.15);border:1px solid rgba(180,140,255,.3);
    color:#e8e0ff;padding:6px 8px;border-radius:6px;cursor:pointer;font-size:12.5px;transition:.15s;font-weight:600}
  .lm-mini-btn:hover{background:linear-gradient(135deg,#7a5cc4,#a279d9);color:#fff;transform:translateY(-1px)}
  .lm-mini-fc:hover{background:linear-gradient(135deg,#c48f3e,#e0b060)}
  .lm-mini-fp:hover{background:linear-gradient(135deg,#3ea86e,#5ac488)}
  .lm-mini-sa:hover{background:linear-gradient(135deg,#4a7cc4,#6fa0d8)}
  .lm-mini-dd:hover{background:linear-gradient(135deg,#a03d78,#c25a94)}

  /* 完成结算 */
  .lm-result{text-align:center;padding:24px 0}
  .lm-result .big{font-size:42px;color:#ffd75e;font-weight:800;margin:12px 0;text-shadow:0 0 20px rgba(255,215,94,.5)}
  .lm-result .sub{color:#a99cd0;margin-bottom:16px}
  `;

  function injectCss(){
    if (document.getElementById('lm-v438-css')) return;
    const s = document.createElement('style');
    s.id = 'lm-v438-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ----------------------------------------------------------------
   * 通用：全屏遮罩壳
   * ---------------------------------------------------------------- */
  function openOverlay(html, onClose){
    injectCss();
    const ov = document.createElement('div');
    ov.className = 'lm-overlay';
    ov.innerHTML = `<div class="lm-panel-wrap"><button class="lm-close" title="关闭">✕</button>
      <div class="lm-panel">${html}</div></div>`;
    document.body.appendChild(ov);
    const close = () => {
      ov.style.animation = 'lmFade .2s reverse';
      setTimeout(() => { ov.remove(); onClose && onClose(); }, 180);
    };
    ov.querySelector('.lm-close').onclick = close;
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
    return { overlay: ov, panel: ov.querySelector('.lm-panel'), close };
  }

  /* 提示音（可选，安静失败） */
  function beep(ok){
    try {
      if (global.SFX && typeof global.SFX.play === 'function'){
        global.SFX.play(ok ? 'correct' : 'wrong'); return;
      }
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = ok ? 880 : 220;
      g.gain.value = 0.08;
      o.start(); setTimeout(() => { o.stop(); ctx.close(); }, 120);
    } catch(e){}
  }

  /* ----------------------------------------------------------------
   * 1) 🔮 仙缘闪卡（60秒5张速记）
   * ---------------------------------------------------------------- */
  function startFlashcard({ manual, sect }){
    const dd = manual.deepDive || {};
    const cards = (dd.flashcards && dd.flashcards.length)
      ? dd.flashcards.slice(0, 5)
      : ((manual.keyPoints || []).slice(0, 5).map((k, i) => ({
          front: `要点 ${i+1}`, back: k
        })));

    if (!cards.length){
      alert('这篇秘籍暂无闪卡内容'); return;
    }

    let idx = 0, flipped = false, remembered = 0, need = 0;
    let timeLeft = 60, timer = null;

    const { panel, close } = openOverlay(`
      <div class="lm-title">🔮 ${manual.title} · 仙缘闪卡</div>
      <div class="lm-sub">60秒 · 5张 · 点卡片翻面 · 记住/再看看</div>
      <div class="lm-fc-timer" id="fc-timer">01:00</div>
      <div class="lm-fc-progress" id="fc-prog">第 1 / ${cards.length} 张</div>
      <div class="lm-fc-card" id="fc-card">
        <div class="lm-fc-front" id="fc-content">${cards[0].front}</div>
        <div class="lm-fc-hint">点击翻面 →</div>
      </div>
      <div class="lm-fc-bar" id="fc-bar" style="display:none">
        <button class="lm-btn again" id="fc-again">🌀 再看看</button>
        <button class="lm-btn good" id="fc-good">✅ 记住了</button>
      </div>
    `);

    function tick(){
      timeLeft--;
      const mm = String(Math.floor(timeLeft/60)).padStart(2,'0');
      const ss = String(timeLeft%60).padStart(2,'0');
      const el = panel.querySelector('#fc-timer');
      if (el) el.textContent = `${mm}:${ss}`;
      if (timeLeft <= 10 && el) el.style.color = '#ff6a6a';
      if (timeLeft <= 0){ clearInterval(timer); finish(); }
    }
    timer = setInterval(tick, 1000);

    function renderCard(){
      const card = panel.querySelector('#fc-card');
      const content = panel.querySelector('#fc-content');
      const bar = panel.querySelector('#fc-bar');
      const prog = panel.querySelector('#fc-prog');
      if (!card) return;
      flipped = false;
      content.className = 'lm-fc-front';
      content.innerHTML = cards[idx].front;
      card.querySelector('.lm-fc-hint').textContent = '点击翻面 →';
      bar.style.display = 'none';
      prog.textContent = `第 ${idx+1} / ${cards.length} 张`;
    }

    panel.querySelector('#fc-card').onclick = () => {
      if (flipped) return;
      flipped = true;
      const content = panel.querySelector('#fc-content');
      content.className = 'lm-fc-back';
      content.innerHTML = cards[idx].back;
      panel.querySelector('#fc-card .lm-fc-hint').textContent = '选择评分 ↓';
      panel.querySelector('#fc-bar').style.display = 'flex';
    };
    panel.querySelector('#fc-good').onclick = () => { remembered++; next(); };
    panel.querySelector('#fc-again').onclick = () => { need++; next(); };

    function next(){
      idx++;
      if (idx >= cards.length){ clearInterval(timer); finish(); return; }
      renderCard();
    }

    function finish(){
      const score = Math.round(remembered / cards.length * 100);
      panel.innerHTML = `
        <div class="lm-title">🎊 闪卡完成</div>
        <div class="lm-result">
          <div class="big">${score} 分</div>
          <div class="sub">记住 ${remembered} 张 · 需复习 ${need} 张 · 剩余时间 ${timeLeft}s</div>
          <div style="margin-top:20px;display:flex;gap:10px;justify-content:center">
            <button class="lm-btn ghost" id="fc-close">关闭</button>
            <button class="lm-btn" id="fc-again-all">🔁 再来一轮</button>
          </div>
        </div>`;
      panel.querySelector('#fc-close').onclick = close;
      panel.querySelector('#fc-again-all').onclick = () => { close(); setTimeout(() => startFlashcard({manual,sect}), 200); };
      // 奖励一点修为
      if (global.Game && typeof global.Game.grant === 'function'){
        try { global.Game.grant('xiuwei', 5 + remembered * 3); } catch(e){}
      }
    }
  }

  /* ----------------------------------------------------------------
   * 2) 🧩 炼器公式拼盘（点选拼公式）
   * ---------------------------------------------------------------- */
  function startFormulaPuzzle({ manual, sect }){
    const dd = manual.deepDive || {};
    const puzzles = (dd.puzzles && dd.puzzles.length)
      ? dd.puzzles
      : ((manual.formulas || []).slice(0, 3).map(f => ({
          formula: f, tip: '把符号按顺序拼回原公式'
        })));

    if (!puzzles.length){
      alert('这篇秘籍暂无拼盘公式'); return;
    }

    let idx = 0, correctCount = 0;
    const { panel, close } = openOverlay('');
    renderPuzzle();

    function tokenize(formula){
      // 简化：按空格 + 单字符运算符切分。允许输入者预先加空格。
      // 如果没有空格，把连续字母/数字块作为一个 token。
      if (formula.includes(' ')) return formula.split(/\s+/).filter(Boolean);
      const out = [];
      let buf = '';
      const ops = new Set(['+','-','×','÷','=','(',')','[',']','·','/','*','^','≥','≤','>','<','≠']);
      for (const ch of formula){
        if (ops.has(ch)){
          if (buf){ out.push(buf); buf=''; }
          out.push(ch);
        } else {
          buf += ch;
        }
      }
      if (buf) out.push(buf);
      return out;
    }

    function shuffle(arr){
      const a = arr.slice();
      for (let i=a.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [a[i],a[j]]=[a[j],a[i]];
      }
      return a;
    }

    function renderPuzzle(){
      const p = puzzles[idx];
      const tokens = tokenize(p.formula);
      const pool = shuffle(tokens.map((t,i)=>({t, id:i})));
      const filled = new Array(tokens.length).fill(null);

      panel.innerHTML = `
        <div class="lm-title">🧩 ${manual.title} · 炼器拼盘</div>
        <div class="lm-sub">第 ${idx+1} / ${puzzles.length} 题 · 按顺序点选符号，拼回完整公式</div>
        <div class="lm-fp-tip">💡 ${p.tip || '按顺序拼回原公式'}</div>
        <div class="lm-fp-target" id="fp-target"></div>
        <div class="lm-fp-pool" id="fp-pool"></div>
        <div style="margin-top:14px;display:flex;gap:10px;justify-content:center">
          <button class="lm-btn ghost" id="fp-reset">↺ 重置本题</button>
          <button class="lm-btn" id="fp-check">✔ 验证</button>
        </div>
      `;

      const target = panel.querySelector('#fp-target');
      const poolEl = panel.querySelector('#fp-pool');

      function paint(){
        target.innerHTML = '';
        filled.forEach((val, i) => {
          const slot = document.createElement('span');
          slot.className = 'lm-fp-slot' + (val ? ' filled' : '');
          slot.textContent = val ? val.t : (i+1);
          slot.onclick = () => {
            if (!val) return;
            // 取回到池子
            const pi = pool.findIndex(x => x.id === val.id);
            if (pi >= 0) pool[pi].used = false;
            filled[i] = null;
            paint();
            paintPool();
          };
          target.appendChild(slot);
        });
      }
      function paintPool(){
        poolEl.innerHTML = '';
        pool.forEach(x => {
          const b = document.createElement('span');
          b.className = 'lm-fp-piece' + (x.used ? ' used' : '');
          b.textContent = x.t;
          b.onclick = () => {
            if (x.used) return;
            const empty = filled.findIndex(v => v === null);
            if (empty < 0) return;
            filled[empty] = { id:x.id, t:x.t };
            x.used = true;
            paint();
            paintPool();
          };
          poolEl.appendChild(b);
        });
      }
      paint();
      paintPool();

      panel.querySelector('#fp-reset').onclick = () => {
        filled.fill(null);
        pool.forEach(x => x.used = false);
        paint(); paintPool();
      };
      panel.querySelector('#fp-check').onclick = () => {
        const got = filled.map(x => x ? x.t : '').join(' ');
        const want = tokens.join(' ');
        if (got === want){
          correctCount++;
          beep(true);
          [...target.querySelectorAll('.lm-fp-slot')].forEach(s => {
            s.style.background = 'rgba(90,196,136,.35)';
            s.style.borderColor = '#5ac488';
          });
          setTimeout(() => {
            idx++;
            if (idx >= puzzles.length) return finish();
            renderPuzzle();
          }, 900);
        } else {
          beep(false);
          [...target.querySelectorAll('.lm-fp-slot')].forEach(s => s.classList.add('wrong'));
          setTimeout(() => {
            [...target.querySelectorAll('.lm-fp-slot')].forEach(s => s.classList.remove('wrong'));
          }, 500);
        }
      };
    }

    function finish(){
      panel.innerHTML = `
        <div class="lm-title">🎊 拼盘完成</div>
        <div class="lm-result">
          <div class="big">${correctCount} / ${puzzles.length}</div>
          <div class="sub">公式一步步拼对，比死记效果好 10 倍</div>
          <div style="margin-top:20px;display:flex;gap:10px;justify-content:center">
            <button class="lm-btn ghost" id="fp-close">关闭</button>
            <button class="lm-btn" id="fp-again">🔁 再来一轮</button>
          </div>
        </div>`;
      panel.querySelector('#fp-close').onclick = close;
      panel.querySelector('#fp-again').onclick = () => { close(); setTimeout(() => startFormulaPuzzle({manual,sect}), 200); };
      if (global.Game && typeof global.Game.grant === 'function'){
        try { global.Game.grant('xiuwei', 8 + correctCount * 5); } catch(e){}
      }
    }
  }

  /* ----------------------------------------------------------------
   * 3) 🌌 推衍例题精析（一题分步 3~5 步）
   * ---------------------------------------------------------------- */
  function startStepAnalysis({ manual, sect }){
    const dd = manual.deepDive || {};
    const examples = (dd.stepExamples && dd.stepExamples.length)
      ? dd.stepExamples
      : (manual.example ? [{
          stem: manual.example,
          steps: [{
            ask: '本题该用哪个知识点？',
            type: 'choice',
            options: (manual.keyPoints || []).slice(0,4),
            answerIndex: 0,
            explain: '结合秘籍要点分析题目情境。'
          }]
        }] : []);

    if (!examples.length){ alert('这篇秘籍暂无分步例题'); return; }

    let exIdx = 0;
    const { panel, close } = openOverlay('');
    renderExample();

    function renderExample(){
      const ex = examples[exIdx];
      let stepIdx = 0;
      let correctSteps = 0;

      function paint(){
        const step = ex.steps[stepIdx];
        const dots = ex.steps.map((_, i) => {
          if (i < stepIdx) return '<span class="dot done"></span>';
          if (i === stepIdx) return '<span class="dot active"></span>';
          return '<span class="dot"></span>';
        }).join('');

        let optsHtml = '';
        if (step.type === 'choice'){
          optsHtml = `<div class="lm-sa-options">${
            step.options.map((o, i) => `<button class="lm-sa-opt" data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join('')
          }</div>`;
        } else if (step.type === 'fill'){
          optsHtml = `<div style="margin:12px 0;display:flex;gap:10px;align-items:center">
            <input class="lm-sa-fill" id="sa-fill" placeholder="输入答案后回车提交" />
            <button class="lm-btn" id="sa-fill-btn">提交</button>
          </div>`;
        }

        panel.innerHTML = `
          <div class="lm-title">🌌 ${manual.title} · 推衍精析</div>
          <div class="lm-sub">例题 ${exIdx+1} / ${examples.length} · 第 ${stepIdx+1} 步 / 共 ${ex.steps.length} 步</div>
          <div class="lm-sa-progress">${dots}</div>
          <div class="lm-sa-stem"><b>📜 题目：</b>${ex.stem}</div>
          <div class="lm-sa-step-hint">🔹 第 ${stepIdx+1} 步：${step.ask}</div>
          ${step.hint ? `<div style="color:#c8bce8;font-size:13px;margin:6px 0">💡 提示：${step.hint}</div>` : ''}
          ${optsHtml}
          <div id="sa-explain-area"></div>
          <div style="margin-top:14px;display:flex;justify-content:flex-end">
            <button class="lm-btn ghost" id="sa-skip" style="display:none">跳过 →</button>
          </div>
        `;

        if (step.type === 'choice'){
          panel.querySelectorAll('.lm-sa-opt').forEach(btn => {
            btn.onclick = () => choose(parseInt(btn.dataset.i, 10), btn);
          });
        } else if (step.type === 'fill'){
          const input = panel.querySelector('#sa-fill');
          const submit = () => checkFill(input.value.trim());
          input.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
          panel.querySelector('#sa-fill-btn').onclick = submit;
          input.focus();
        }
      }

      function choose(i, btn){
        const step = ex.steps[stepIdx];
        const correct = (i === step.answerIndex);
        panel.querySelectorAll('.lm-sa-opt').forEach((b, bi) => {
          b.style.pointerEvents = 'none';
          if (bi === step.answerIndex) b.classList.add('correct');
          if (bi === i && !correct) b.classList.add('wrong');
        });
        if (correct) correctSteps++;
        beep(correct);
        showExplain(correct, step.explain);
      }

      function checkFill(val){
        const step = ex.steps[stepIdx];
        const ans = Array.isArray(step.answer) ? step.answer : [step.answer];
        const ok = ans.some(a => (val + '').replace(/\s/g,'') === (a + '').replace(/\s/g,''));
        if (ok) correctSteps++;
        beep(ok);
        const input = panel.querySelector('#sa-fill');
        if (input){
          input.disabled = true;
          input.style.borderColor = ok ? '#5ac488' : '#e25a5a';
          input.style.background = ok ? 'rgba(90,196,136,.15)' : 'rgba(226,90,90,.12)';
        }
        showExplain(ok, step.explain + (ok ? '' : `<br><b>参考答案：</b>${ans[0]}`));
      }

      function showExplain(ok, explain){
        const area = panel.querySelector('#sa-explain-area');
        area.innerHTML = `<div class="lm-sa-explain"><b>${ok ? '✅ 正确！' : '💡 解析：'}</b><br>${explain || '（此步暂无解析）'}
          <div style="margin-top:12px;text-align:right">
            <button class="lm-btn" id="sa-next">${stepIdx + 1 >= ex.steps.length ? '完成本题 →' : '下一步 →'}</button>
          </div></div>`;
        panel.querySelector('#sa-next').onclick = () => {
          stepIdx++;
          if (stepIdx >= ex.steps.length){
            finishExample(correctSteps, ex.steps.length);
          } else {
            paint();
          }
        };
      }

      paint();
    }

    function finishExample(correct, total){
      panel.innerHTML = `
        <div class="lm-title">🌌 例题完成</div>
        <div class="lm-result">
          <div class="big">${correct} / ${total}</div>
          <div class="sub">分步走完，比一次性猜答案清晰多了</div>
          <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <button class="lm-btn ghost" id="sa-close">关闭</button>
            ${exIdx + 1 < examples.length ? '<button class="lm-btn" id="sa-nextex">下一道例题 →</button>' : ''}
            <button class="lm-btn" id="sa-again">🔁 重做本题</button>
          </div>
        </div>`;
      panel.querySelector('#sa-close').onclick = close;
      panel.querySelector('#sa-again').onclick = () => renderExample();
      const nextBtn = panel.querySelector('#sa-nextex');
      if (nextBtn) nextBtn.onclick = () => { exIdx++; renderExample(); };
      if (global.Game && typeof global.Game.grant === 'function'){
        try { global.Game.grant('xiuwei', 15 + correct * 8); } catch(e){}
      }
    }
  }

  /* ----------------------------------------------------------------
   * 4) 🎯 深度参悟（完整讲义面板）
   * ---------------------------------------------------------------- */
  function startDeepDive({ manual, sect }){
    const dd = manual.deepDive;
    if (!dd || !dd.points || !dd.points.length){
      alert('这篇秘籍尚无深度讲义');
      return;
    }
    let idx = 0;
    const { panel, close } = openOverlay('');
    render();

    function render(){
      const p = dd.points[idx];
      const tabs = dd.points.map((x, i) =>
        `<button class="lm-dd-tab${i===idx?' active':''}" data-i="${i}">${i+1}. ${x.title || '要点'}</button>`
      ).join('');

      panel.innerHTML = `
        <div class="lm-title">🎯 ${manual.title} · 深度参悟</div>
        <div class="lm-sub">${dd.subtitle || '知识点四段式：为什么 · 常错 · 记忆 · 反射'}</div>
        <div class="lm-dd-nav">${tabs}</div>

        <div class="lm-dd-block lm-dd-why">
          <h4>💡 为什么 · 直觉与推导</h4>
          <p>${p.why || '（暂缺）'}</p>
        </div>

        <div class="lm-dd-block lm-dd-pitfall">
          <h4>⚠️ 常错点（3 条最要命的）</h4>
          <ul class="lm-dd-list">
            ${(p.pitfalls || []).map(x => `<li>${x}</li>`).join('') || '<li>（暂缺）</li>'}
          </ul>
        </div>

        <div class="lm-dd-block lm-dd-mnemonic">
          <h4>🧠 一句话记忆</h4>
          <p>${p.mnemonic || '（暂缺）'}</p>
        </div>

        <div class="lm-dd-block lm-dd-reflex">
          <h4>⚡ 典型模型 → 反射动作</h4>
          <p>${p.reflex || '（暂缺）'}</p>
        </div>

        <div style="margin-top:16px;display:flex;justify-content:space-between;gap:10px">
          <button class="lm-btn ghost" id="dd-prev" ${idx===0?'disabled':''}>← 上一点</button>
          <div style="color:#a99cd0;font-size:13px;align-self:center">${idx+1} / ${dd.points.length}</div>
          <button class="lm-btn" id="dd-next" ${idx===dd.points.length-1?'disabled':''}>下一点 →</button>
        </div>
      `;

      panel.querySelectorAll('.lm-dd-tab').forEach(t => {
        t.onclick = () => { idx = parseInt(t.dataset.i,10); render(); };
      });
      panel.querySelector('#dd-prev').onclick = () => { if (idx>0){ idx--; render(); } };
      panel.querySelector('#dd-next').onclick = () => { if (idx<dd.points.length-1){ idx++; render(); } };

      if (idx === dd.points.length - 1 && global.Game && typeof global.Game.grant === 'function'){
        try { global.Game.grant('xiuwei', 3); } catch(e){}
      }
    }
  }

  /* ----------------------------------------------------------------
   * 全局注册
   * ---------------------------------------------------------------- */
  const LM = {
    version: 'v4.3.8',
    startFlashcard,
    startFormulaPuzzle,
    startStepAnalysis,
    startDeepDive,
    _injectCss: injectCss
  };
  global.LM = LM;

})(typeof window !== 'undefined' ? window : this);
