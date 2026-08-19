/* ================================================================
 * 《问道修仙学院》v4.4.0 · 化学·LM 引擎补丁 + Loader 扩展
 *
 * 职责：
 *   1) 补丁 LM.startDeepDive —— 识别化学 deepDive 的
 *      concept/phenomena/equations/pitfalls 四段式，用化学特化布局展示
 *   2) 扩展 LMLoader.attachDeepDive —— 让 chem_xbx_* 的秘籍能挂上 CHEMISTRY_DEEP_DIVE
 *
 * 加载顺序：
 *   learning-modes-v438.js
 *   deep-dive-chemistry-v440.js       # 数据
 *   chemistry-xbx-manual-v440.js      # 追加 12 篇秘籍
 *   learning-modes-loader-v438.js
 *   learning-modes-chinese-patch-v439.js  （如果有）
 *   learning-modes-chemistry-patch-v440.js  ← 本文件
 * ================================================================ */
(function (global) {
  'use strict';

  /* ---------- 化学·深参渲染器 ---------- */
  function renderChemistryDeepDive({ manual, sect }) {
    const dd = manual.deepDive;
    if (!dd || !dd.points || !dd.points.length) {
      alert('这篇秘籍尚无深度讲义');
      return;
    }

    if (global.LM && global.LM._injectCss) global.LM._injectCss();
    if (!document.getElementById('lm-chem-css')) {
      const s = document.createElement('style');
      s.id = 'lm-chem-css';
      s.textContent = `
        .lm-chem-cc{background:rgba(140,100,220,.1);border-left:3px solid #a279d9;padding:14px 18px;border-radius:8px;margin-bottom:14px;line-height:1.95}
        .lm-chem-cc h4{color:#c8b3f2;margin:0 0 10px}
        .lm-chem-cc b{color:#ffd75e}
        .lm-chem-ph{background:rgba(90,196,136,.08);border-left:3px solid #5ac488;padding:14px 18px;border-radius:8px;margin-bottom:14px;line-height:1.95}
        .lm-chem-ph h4{color:#a4f0c4;margin:0 0 10px}
        .lm-chem-ph b{color:#ffd75e}
        .lm-chem-eq{background:rgba(74,124,196,.10);border-left:3px solid #6fa0d8;padding:14px 18px;border-radius:8px;margin-bottom:14px;line-height:2.0;font-size:14.5px}
        .lm-chem-eq h4{color:#9dc4f0;margin:0 0 10px}
        .lm-chem-eq b{color:#ffd75e}
        .lm-chem-eq code{background:rgba(255,255,255,.05);padding:1px 4px;border-radius:3px;color:#fff}
        .lm-chem-pf{background:rgba(226,90,90,.08);border-left:3px solid #e25a5a;padding:14px 18px;border-radius:8px;margin-bottom:14px}
        .lm-chem-pf h4{color:#ff9090;margin:0 0 10px}
        .lm-chem-pf ul{margin:4px 0 0;padding-left:20px}
        .lm-chem-pf li{margin:6px 0;line-height:1.85;color:#ffcccc}
        .lm-chem-pf li b{color:#ffd75e}
      `;
      document.head.appendChild(s);
    }

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

      let bodyHtml = '';
      if (p.concept || p.phenomena || p.equations || (p.pitfalls && !p.mnemonic)) {
        // 化学特化四段式
        if (p.concept) {
          bodyHtml += `<div class="lm-chem-cc">
            <h4>💡 核心概念 · 为什么</h4>
            <div>${p.concept.replace(/\n/g,'<br>')}</div>
          </div>`;
        }
        if (p.phenomena) {
          bodyHtml += `<div class="lm-chem-ph">
            <h4>🧪 实验现象与判据</h4>
            <div>${p.phenomena.replace(/\n/g,'<br>')}</div>
          </div>`;
        }
        if (p.equations) {
          bodyHtml += `<div class="lm-chem-eq">
            <h4>⚗️ 必背方程式</h4>
            <div>${p.equations}</div>
          </div>`;
        }
        if (p.pitfalls && p.pitfalls.length) {
          bodyHtml += `<div class="lm-chem-pf">
            <h4>⚠️ 高频陷阱（考前必看）</h4>
            <ul>${p.pitfalls.map(x=>`<li>${x}</li>`).join('')}</ul>
          </div>`;
        }
      } else {
        // 理科老四段式回退
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

  /* ---------- 补丁 LM.startDeepDive ---------- */
  function patchLM() {
    if (!global.LM || global.LM._chemPatched) return;
    const orig = global.LM.startDeepDive;
    global.LM.startDeepDive = function(ctx) {
      const m = ctx && ctx.manual;
      if (m && m.id && m.id.startsWith('chem_xbx_')) {
        return renderChemistryDeepDive(ctx);
      }
      if (m && m.deepDive && m.deepDive.points && m.deepDive.points[0] &&
          (m.deepDive.points[0].concept || m.deepDive.points[0].equations)) {
        return renderChemistryDeepDive(ctx);
      }
      return orig.call(this, ctx);
    };
    global.LM._chemPatched = true;
  }

  /* ---------- 扩展 LMLoader ---------- */
  function patchLoader() {
    if (!global.LMLoader || global.LMLoader._chemPatched) return;
    const CD = global.CHEMISTRY_DEEP_DIVE || {};

    const MAP = {
      'chem_xbx_lizi':               'chem_xbx_lizi',
      'chem_xbx_redox':              'chem_xbx_redox',
      'chem_xbx_stranger':           'chem_xbx_stranger',
      'chem_xbx_amount':             'chem_xbx_amount',
      'chem_xbx_thermogravimetric':  'chem_xbx_thermogravimetric',
      'chem_xbx_sodium':             'chem_xbx_sodium',
      'chem_xbx_iron':               'chem_xbx_iron',
      'chem_xbx_aluminum':           'chem_xbx_aluminum',
      'chem_xbx_chlorine':           'chem_xbx_chlorine',
      'chem_xbx_sulfur':             'chem_xbx_sulfur',
      'chem_xbx_nitrogen':           'chem_xbx_nitrogen',
      'chem_xbx_silicon':            'chem_xbx_silicon'
    };

    const origAttach = global.LMLoader.attachDeepDive;
    global.LMLoader.attachDeepDive = function(m) {
      if (!m) return;
      const key = MAP[m.id];
      if (key && CD[key]) {
        m.deepDive = CD[key];
        m.deepDive._handwritten = true;
        return;
      }
      if (m.deepDive) return;
      return origAttach.call(this, m);
    };

    if (Array.isArray(global.CHEMISTRY_MANUALS)) {
      global.CHEMISTRY_MANUALS.forEach(m => {
        if (MAP[m.id]) { m.deepDive = null; }
        global.LMLoader.attachDeepDive(m);
      });
    }
    if (typeof global.LMLoader.reinject === 'function') {
      setTimeout(() => global.LMLoader.reinject(), 100);
    }

    global.LMLoader._chemPatched = true;
  }

  function ready() {
    patchLM();
    patchLoader();
    const c = global.CHEMISTRY_MANUALS
      ? global.CHEMISTRY_MANUALS.filter(m => m.deepDive && m.deepDive._handwritten).length
      : 0;
    console.log(`[LM-CHEM v4.4.0] 化学补丁装载，手写讲义挂 ${c} 篇`);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    setTimeout(ready, 80);
  }

  global.LMChemistryPatch = { version: 'v4.4.0', renderChemistryDeepDive };

})(typeof window !== 'undefined' ? window : this);
