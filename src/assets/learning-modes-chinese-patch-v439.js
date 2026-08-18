/* ================================================================
 * 《问道修仙学院》v4.3.9 · 语文·LM 引擎补丁 + Loader 扩展
 *
 * 做两件事：
 *   1) 补丁 LM.startDeepDive —— 识别语文 deepDive 的 keyWords/imagery/dictation
 *      三段式，用语文特化布局展示（不影响数理化的四段式）
 *   2) 扩展 LMLoader.attachDeepDive —— 让 chn_xbx_* 的秘籍能挂上 CHINESE_DEEP_DIVE
 *
 * 加载顺序要求（在 subject html 尾部）：
 *   learning-modes-v438.js
 *   deep-dive-chinese-v439.js      # 数据
 *   chinese-xbx-manual-v439.js     # 追加 7 篇秘籍
 *   learning-modes-loader-v438.js
 *   learning-modes-chinese-patch-v439.js  ← 本文件（最后加载）
 * ================================================================ */
(function (global) {
  'use strict';

  /* ---------- 语文·深参渲染器 ---------- */
  function renderChineseDeepDive({ manual, sect }) {
    const dd = manual.deepDive;
    if (!dd || !dd.points || !dd.points.length) {
      alert('这篇秘籍尚无深度讲义');
      return;
    }

    // 注入基础样式（复用 v438 主 CSS，追加语文特有）
    if (global.LM && global.LM._injectCss) global.LM._injectCss();
    if (!document.getElementById('lm-cn-css')) {
      const s = document.createElement('style');
      s.id = 'lm-cn-css';
      s.textContent = `
        .lm-cn-kw{background:rgba(255,215,94,.08);border-left:3px solid #ffd75e;padding:14px 18px;border-radius:8px;margin-bottom:14px}
        .lm-cn-kw h4{color:#ffd75e;margin:0 0 10px}
        .lm-cn-kw-item{padding:8px 0;border-bottom:1px dashed rgba(180,140,255,.15);line-height:1.9}
        .lm-cn-kw-item:last-child{border:none}
        .lm-cn-kw-word{color:#fff3c4;font-weight:700;margin-right:8px}
        .lm-cn-kw-mean{color:#dccff4;font-size:14px}
        .lm-cn-img{background:rgba(140,100,220,.1);border-left:3px solid #a279d9;padding:14px 18px;border-radius:8px;margin-bottom:14px;line-height:1.95;color:#e8e0ff;font-size:14.5px}
        .lm-cn-img h4{color:#c8b3f2;margin:0 0 10px}
        .lm-cn-img b{color:#ffd75e}
        .lm-cn-dic{background:rgba(90,196,136,.08);border-left:3px solid #5ac488;padding:14px 18px;border-radius:8px;margin-bottom:14px}
        .lm-cn-dic h4{color:#a4f0c4;margin:0 0 10px}
        .lm-cn-dic-item{padding:8px 0;border-bottom:1px dashed rgba(180,140,255,.15);line-height:1.85}
        .lm-cn-dic-item:last-child{border:none}
        .lm-cn-dic-hint{color:#a99cd0;font-size:13px}
        .lm-cn-dic-text{color:#fff;font-weight:600;font-size:15px;display:block;margin-top:4px}
      `;
      document.head.appendChild(s);
    }

    // 打开 overlay
    const ov = document.createElement('div');
    ov.className = 'lm-overlay';
    ov.innerHTML = `<div class="lm-panel-wrap">
      <button class="lm-close" title="关闭">✕</button>
      <div class="lm-panel"></div>
    </div>`;
    document.body.appendChild(ov);
    const panel = ov.querySelector('.lm-panel');
    const close = () => { ov.style.animation='lmFade .2s reverse'; setTimeout(()=>ov.remove(), 180); };
    ov.querySelector('.lm-close').onclick = close;
    ov.addEventListener('click', e => { if (e.target === ov) close(); });

    let idx = 0;
    render();

    function render() {
      const p = dd.points[idx];
      const tabs = dd.points.map((x, i) =>
        `<button class="lm-dd-tab${i===idx?' active':''}" data-i="${i}">${i+1}. ${x.title || '要点'}</button>`
      ).join('');

      // 兼容：既支持语文三段式，也支持理科四段式回退
      let bodyHtml = '';
      if (p.keyWords || p.imagery || p.dictation) {
        // 语文三段式
        if (p.keyWords && p.keyWords.length) {
          bodyHtml += `<div class="lm-cn-kw">
            <h4>📖 字词考点（${p.keyWords.length} 个加点词）</h4>
            ${p.keyWords.map(w => `
              <div class="lm-cn-kw-item">
                <span class="lm-cn-kw-word">${w.word}</span>
                <span class="lm-cn-kw-mean">${w.meaning}</span>
              </div>`).join('')}
          </div>`;
        }
        if (p.imagery) {
          bodyHtml += `<div class="lm-cn-img">
            <h4>🎨 意象与手法</h4>
            <div>${p.imagery.replace(/\n/g,'<br>')}</div>
          </div>`;
        }
        if (p.dictation && p.dictation.length) {
          bodyHtml += `<div class="lm-cn-dic">
            <h4>🎯 情境默写（${p.dictation.length} 句）</h4>
            ${p.dictation.map(d => `
              <div class="lm-cn-dic-item">
                <span class="lm-cn-dic-hint">💡 ${d.hint}</span>
                <span class="lm-cn-dic-text">→ ${d.text}</span>
              </div>`).join('')}
          </div>`;
        }
      } else {
        // 理科四段式回退（原 v438 逻辑）
        bodyHtml = `
          <div class="lm-dd-block lm-dd-why"><h4>💡 为什么 · 直觉与推导</h4><p>${p.why || '（暂缺）'}</p></div>
          <div class="lm-dd-block lm-dd-pitfall"><h4>⚠️ 常错点</h4>
            <ul class="lm-dd-list">${(p.pitfalls||[]).map(x=>`<li>${x}</li>`).join('')||'<li>（暂缺）</li>'}</ul></div>
          <div class="lm-dd-block lm-dd-mnemonic"><h4>🧠 一句话记忆</h4><p>${p.mnemonic||'（暂缺）'}</p></div>
          <div class="lm-dd-block lm-dd-reflex"><h4>⚡ 典型模型 → 反射动作</h4><p>${p.reflex||'（暂缺）'}</p></div>`;
      }

      panel.innerHTML = `
        <div class="lm-title">🎯 ${manual.title} · 深度参悟</div>
        <div class="lm-sub">${dd.subtitle || ''}</div>
        <div class="lm-dd-nav">${tabs}</div>
        ${bodyHtml}
        <div style="margin-top:16px;display:flex;justify-content:space-between;gap:10px">
          <button class="lm-btn ghost" id="dd-prev" ${idx===0?'disabled':''}>← 上一段</button>
          <div style="color:#a99cd0;font-size:13px;align-self:center">${idx+1} / ${dd.points.length}</div>
          <button class="lm-btn" id="dd-next" ${idx===dd.points.length-1?'disabled':''}>下一段 →</button>
        </div>
      `;
      panel.querySelectorAll('.lm-dd-tab').forEach(t => {
        t.onclick = () => { idx = parseInt(t.dataset.i,10); render(); };
      });
      panel.querySelector('#dd-prev').onclick = () => { if (idx>0){ idx--; render(); } };
      panel.querySelector('#dd-next').onclick = () => { if (idx<dd.points.length-1){ idx++; render(); } };
    }
  }

  /* ---------- 补丁 LM.startDeepDive：语文走新渲染器，其他走原逻辑 ---------- */
  function patchLM() {
    if (!global.LM || global.LM._cnPatched) return;
    const orig = global.LM.startDeepDive;
    global.LM.startDeepDive = function(ctx) {
      const m = ctx && ctx.manual;
      if (m && m.id && m.id.startsWith('chn_xbx_')) {
        return renderChineseDeepDive(ctx);
      }
      // 也兼容：deepDive.points[0] 里有 keyWords/imagery/dictation 也走语文渲染
      if (m && m.deepDive && m.deepDive.points && m.deepDive.points[0] &&
          (m.deepDive.points[0].keyWords || m.deepDive.points[0].dictation)) {
        return renderChineseDeepDive(ctx);
      }
      return orig.call(this, ctx);
    };
    global.LM._cnPatched = true;
  }

  /* ---------- 扩展 LMLoader：让 chn_xbx_* 能挂到 CHINESE_DEEP_DIVE ---------- */
  function patchLoader() {
    if (!global.LMLoader || global.LMLoader._cnPatched) return;
    const CN = global.CHINESE_DEEP_DIVE || {};

    // 挂载映射：id → 讲义 key
    const MAP = {
      'chn_xbx_mang':         'chinese_mang',
      'chn_xbx_lisao':        'chinese_lisao',
      'chn_xbx_kongque':      'chinese_kongque',
      'chn_xbx_shudao':       'chinese_shudao',
      'chn_xbx_shuxiang':     'chinese_shuxiang',
      'chn_xbx_wanghaichao':  'chinese_wanghaichao',
      'chn_xbx_yangzhouman':  'chinese_yangzhouman'
    };

    const origAttach = global.LMLoader.attachDeepDive;
    global.LMLoader.attachDeepDive = function(m) {
      if (!m) return;
      // 语文选必下手写讲义：强制覆盖（哪怕已经挂了 fallback）
      const key = MAP[m.id];
      if (key && CN[key]) {
        m.deepDive = CN[key];
        m.deepDive._handwritten = true;
        return;
      }
      if (m.deepDive) return;
      // 否则走原逻辑
      return origAttach.call(this, m);
    };

    // 立即扫一遍已有 CHINESE_MANUALS 强制刷手写
    if (Array.isArray(global.CHINESE_MANUALS)) {
      global.CHINESE_MANUALS.forEach(m => {
        if (MAP[m.id]) { m.deepDive = null; }  // 清掉 fallback 让手写覆盖
        global.LMLoader.attachDeepDive(m);
      });
    }
    // 触发一次按钮重刷
    if (typeof global.LMLoader.reinject === 'function') {
      setTimeout(() => global.LMLoader.reinject(), 100);
    }

    global.LMLoader._cnPatched = true;
  }

  /* ---------- 入口 ---------- */
  function ready() {
    patchLM();
    patchLoader();
    const cnCount = global.CHINESE_MANUALS
      ? global.CHINESE_MANUALS.filter(m => m.deepDive && m.deepDive._handwritten).length
      : 0;
    console.log(`[LM-CN v4.3.9] 语文补丁已装载，手写讲义挂 ${cnCount} 篇`);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    setTimeout(ready, 80);
  }

  global.LMChinesePatch = { version: 'v4.3.9', renderChineseDeepDive };

})(typeof window !== 'undefined' ? window : this);
