/* ===================================================================
 * 《问道修仙学院》v4.3.7a · 补丁一键装载器
 * -------------------------------------------------------------------
 * 用途：
 *   在 subjects/*.html 里替代一大堆 <script> 引用，只加一行：
 *     <script src="../assets/v437a-loader.js"></script>
 *   会按正确顺序自动加载所有 quality 补丁 + reclassify + fix
 *
 * ⚠️ 加载位置：所有主题库（xxx-bank.js）之后，subject-page.js 之前
 *
 * 自动检测：
 *   - 当前学科（从 <body data-sect="xxx"> 读取）
 *   - 各 patch 文件是否存在（不存在则跳过，不报错）
 * =================================================================== */
(function () {
  'use strict';
  const TAG = '[v437a-loader]';

  // 检测当前学科
  const bodyEl = document.body;
  const sect = (bodyEl && bodyEl.getAttribute('data-sect')) || 'unknown';

  // 每个学科要加载的补丁清单（按顺序）
  const PATCHES = {
    physics: [
      'physics-bank-v437-quality3.js',
      'physics-bank-v436-quality3.js',
      'physics-bank-v436-quality4.js',
      'physics-bank-v436-quality5.js',
      'physics-bank-v436-quality6.js',
      'physics-bank-v436-quality7.js',
      'physics-bank-v436-quality8.js',
      'physics-bank-v436-quality9.js',
      'physics-bank-v436-quality10.js',
      'physics-bank-v436-quality11.js',
    ],
    chemistry: [
      'chemistry-bank-v437-quality3.js',
      'chemistry-bank-v436-quality3.js',
      'chemistry-bank-v436-quality4.js',
      'chemistry-bank-v436-quality5.js',
      'chemistry-bank-v436-quality6.js',
      'chemistry-bank-v436-quality7.js',
      'chemistry-bank-v436-quality8.js',
      'chemistry-bank-v436-quality9.js',
      'chemistry-bank-v436-quality10.js',
      'chemistry-bank-v436-quality11.js',
    ],
    geography: [
      'geography-bank-v437-quality3.js',
      'geography-bank-v436-quality3.js',
      'geography-bank-v436-quality4.js',
      'geography-bank-v436-quality5.js',
      'geography-bank-v436-quality6.js',
      'geography-bank-v436-quality7.js',
      'geography-bank-v436-quality8.js',
      'geography-bank-v436-quality9.js',
      'geography-bank-v436-quality10.js',
      'geography-bank-v436-quality11.js',
    ],
    math: [
      'math-bank-v437-quality3.js',
      'math-bank-v436-quality3.js',
      'math-bank-v436-quality4.js',
      'math-bank-v436-quality5.js',
      'math-bank-v436-quality6.js',
      'math-bank-v436-quality7.js',
      'math-bank-v436-quality9.js',
      'math-bank-v436-quality10.js',
      'math-bank-v436-quality11.js',
      'math-bank-v438-part1.js',
    ],
    chinese: [],
    english: [],
  };

  // 全学科都要加载的修复补丁（顺序敏感）
  const COMMON = [
    'reclassify-bank-v437a.js',   // 先重分类
    'v437a-quality-fix.js',       // 再修引擎
  ];

  // 学科专属背景、音效、战斗平衡（可选）
  const AUX = [
    'subject-bg-v437.css',
    'sound-effects-v437.js',
    'battle-arena-v437-balance.js',
  ];

  const list = (PATCHES[sect] || []).concat(COMMON);

  console.info(TAG, `学科=${sect}，待加载补丁 ${list.length} 个`);

  // 顺序加载
  function loadOne(file, onDone) {
    const s = document.createElement('script');
    s.src = '../assets/' + file;
    s.onload = () => { console.info(TAG, '✓ 已加载', file); onDone(); };
    s.onerror = () => { console.warn(TAG, '⚠ 加载失败（跳过）', file); onDone(); };
    document.head.appendChild(s);
  }

  function loadCSS(file) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = '../assets/' + file;
    document.head.appendChild(l);
  }

  // 先加辅助资源（CSS 立即加，异步 JS 不阻塞后续 script）
  AUX.forEach(f => {
    if (f.endsWith('.css')) loadCSS(f);
    else {
      const s = document.createElement('script');
      s.src = '../assets/' + f;
      s.onerror = () => console.warn(TAG, '⚠ aux 加载失败（跳过）', f);
      document.head.appendChild(s);
    }
  });

  // 顺序加载主补丁链
  let i = 0;
  function next() {
    if (i >= list.length) {
      console.info(TAG, '════════ 所有补丁装载完毕 ════════');
      // 触发一个全局事件，SubjectPage 或其他模块可以监听
      try {
        const ev = new CustomEvent('v437a:loaded', { detail: { sect, patches: list } });
        window.dispatchEvent(ev);
      } catch (e) {}
      return;
    }
    loadOne(list[i++], next);
  }
  next();
})();
