/* ================================================================
 * 《问道修仙学院》v4.3.8 · 多玩法学习模式·挂载器（Loader）
 *
 * 职责：
 *   1) 把手写 deepDive（MATH_DEEP_DIVE / PHYSICS_DEEP_DIVE）挂到对应 manual
 *   2) 其他学科用 DeepDiveFallback 自动生成兜底 deepDive
 *   3) 给秘籍卡追加 4 个 mini 玩法按钮（🔮 闪卡 / 🧩 拼盘 / 🌌 精析 / 🎯 深参）
 *   4) 监听 subject-page 的 tab 切换，秘籍列表重渲染时自动补按钮
 *
 * 触发时机：DOMContentLoaded 后（脚本挂在 subject.html 末尾）
 * ================================================================ */
(function (global) {
  'use strict';

  /* ---------------------------------------------------------------
   * 挂载 deepDive 到指定 manual
   * --------------------------------------------------------------- */
  function attachDeepDive(m){
    if (!m) return;
    if (m.deepDive) return; // 已挂过

    // 优先匹配手写讲义
    const dict = matchDict(m.id);
    if (dict && dict[m.id]){
      m.deepDive = dict[m.id];
      m.deepDive._handwritten = true;
      return;
    }
    // 兜底
    if (typeof global.DeepDiveFallback === 'function'){
      const dd = global.DeepDiveFallback(m);
      if (dd) m.deepDive = dd;
    }
  }

  function matchDict(id){
    if (!id) return null;
    if (id.startsWith('math_'))     return global.MATH_DEEP_DIVE || null;
    if (id.startsWith('physics_'))  return global.PHYSICS_DEEP_DIVE || null;
    if (id.startsWith('chem'))      return global.CHEMISTRY_DEEP_DIVE || null;
    if (id.startsWith('geo'))       return global.GEOGRAPHY_DEEP_DIVE || null;
    if (id.startsWith('chinese_'))  return global.CHINESE_DEEP_DIVE || null;
    if (id.startsWith('english_'))  return global.ENGLISH_DEEP_DIVE || null;
    return null;
  }

  /* ---------------------------------------------------------------
   * 批量挂载：扫全部学科的 window.*_MANUALS
   * --------------------------------------------------------------- */
  function attachAll(){
    const buckets = [
      global.MATH_MANUALS,
      global.PHYSICS_MANUALS,
      global.CHEMISTRY_MANUALS,
      global.GEOGRAPHY_MANUALS,
      global.CHINESE_MANUALS,
      global.ENGLISH_MANUALS
    ];
    let n = 0;
    buckets.forEach(arr => {
      if (!Array.isArray(arr)) return;
      arr.forEach(m => { attachDeepDive(m); if (m.deepDive) n++; });
    });
    return n;
  }

  /* ---------------------------------------------------------------
   * 补丁 SubjectPage._renderManuals（如果存在）
   * 让每张 manual-card 底部追加玩法按钮
   * --------------------------------------------------------------- */
  function enhanceSubjectPage(){
    const SP = global.SubjectPage;
    if (!SP || typeof SP._renderManuals !== 'function') return;
    if (SP._lm438Patched) return;
    SP._lm438Patched = true;

    const origRender = SP._renderManuals.bind(SP);
    SP._renderManuals = function(container){
      // 先给所有 manual 挂 deepDive（惰性挂载）
      (this.manuals || []).forEach(attachDeepDive);
      // 走原本渲染
      origRender(container);
      // 渲染完后追加按钮
      setTimeout(() => injectButtonsToExistingCards(), 20);
    };
  }

  /* ---------------------------------------------------------------
   * 扫描当前 DOM 里已渲染的 .manual-card，给它们加按钮
   * --------------------------------------------------------------- */
  function injectButtonsToExistingCards(){
    const SP = global.SubjectPage;
    if (!SP || !Array.isArray(SP.manuals)) return 0;
    const cards = document.querySelectorAll('.manual-card');
    let n = 0;
    cards.forEach(card => {
      if (card.querySelector('.lm-mini-actions')) return; // 已加过
      const mid = card.dataset.id;
      if (!mid) return;
      const m = SP.manuals.find(x => x.id === mid);
      if (!m) return;

      attachDeepDive(m);

      const bar = document.createElement('div');
      bar.className = 'lm-mini-actions';
      bar.innerHTML = `
        <button class="lm-mini-btn lm-mini-fc" data-mode="flashcard" title="🔮 仙缘闪卡·60秒记忆冲刺">🔮 闪卡</button>
        <button class="lm-mini-btn lm-mini-fp" data-mode="puzzle" title="🧩 公式拼盘·符号拖拽">🧩 拼盘</button>
        <button class="lm-mini-btn lm-mini-sa" data-mode="step" title="🌌 例题精析·分步推衍">🌌 精析</button>
        <button class="lm-mini-btn lm-mini-dd" data-mode="deep" title="🎯 深度参悟·完整讲义">🎯 深参</button>
      `;
      card.appendChild(bar);

      bar.querySelectorAll('.lm-mini-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          const mode = btn.dataset.mode;
          if (!global.LM){ alert('学习模式引擎未加载（LM undefined）'); return; }
          const ctx = { manual: m, sect: SP.sect };
          try {
            if (mode === 'flashcard') global.LM.startFlashcard(ctx);
            else if (mode === 'puzzle') global.LM.startFormulaPuzzle(ctx);
            else if (mode === 'step')  global.LM.startStepAnalysis(ctx);
            else if (mode === 'deep')  global.LM.startDeepDive(ctx);
          } catch(err){
            console.error('[LM v438] 玩法启动失败', err);
            alert('本模式启动出错：' + (err && err.message || err));
          }
        });
      });
      n++;
    });
    return n;
  }

  /* ---------------------------------------------------------------
   * 用 MutationObserver 监听秘籍列表容器变化（切 tab 会重渲染）
   * --------------------------------------------------------------- */
  function observeManualTab(){
    const target = document.getElementById('tab-body') || document.body;
    if (!target) return;
    const mo = new MutationObserver(() => {
      clearTimeout(observeManualTab._t);
      observeManualTab._t = setTimeout(() => {
        injectButtonsToExistingCards();
      }, 30);
    });
    mo.observe(target, { childList: true, subtree: true });
  }

  /* ---------------------------------------------------------------
   * DOM ready 入口
   * --------------------------------------------------------------- */
  function ready(){
    const attached = attachAll();
    enhanceSubjectPage();
    const injected = injectButtonsToExistingCards();
    observeManualTab();
    console.log(`[LM v4.3.8] Loader ready · deepDive 挂载 ${attached} 篇 · 首次注入 ${injected} 张卡按钮`);
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    // 稍等一下让 SubjectPage.init 先跑
    setTimeout(ready, 50);
  }

  /* 全局暴露一些实用工具（方便控制台手动补挂） */
  global.LMLoader = {
    version: 'v4.3.8',
    attachDeepDive,
    attachAll,
    enhance: enhanceSubjectPage,
    reinject: injectButtonsToExistingCards
  };

})(typeof window !== 'undefined' ? window : this);
