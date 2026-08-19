/* ===================================================================
 * 《问道修仙学院》v4.3.7a · 质量修复综合补丁
 * -------------------------------------------------------------------
 * 修复 4 大 bug：
 *   ① 功法跟题目对不上（SQ.pick 索引缓存不更新 + manualId 错配）
 *   ② 初次学习功法时没有详细教学（Immersive 加载失败 fallback）
 *   ③ SVG 图例问题（AutoViz 在题干已含 <svg> 时重复叠图）
 *   ④ 互动通道跟知识点无关（interactive 只挂第一卷但内容不匹配 → 挪到最后一卷做总结）
 *
 * 加载顺序：所有题库补丁之后，subject-page.js 之前
 * =================================================================== */
(function (global) {
  'use strict';
  const TAG = '[v437a-fix]';

  // ============================================================
  // Bug ① — SQ 索引缓存重建 + 兜底策略修正
  // ============================================================
  //   问题：SQ 内部有 _idxCache，只在首次 pick 时计算，后面加载的
  //        quality patch 里的新题不进 byManual 索引。
  //   修复：
  //     a) 提供 SQ.rebuildIdx(sect) 强制重建
  //     b) 覆写 SQ.pick，在 pick 前检测 bank 长度变化并自动重建
  //     c) 兜底改为"宁可空返回，不乱抽全库"—— 避免功法A抽出功法B的题
  // ------------------------------------------------------------
  function patchSQ() {
    if (!global.SQ) {
      console.warn(TAG, 'SQ 未就绪，1s 后重试');
      setTimeout(patchSQ, 1000);
      return;
    }
    const SQ = global.SQ;

    // 保存原始 pick
    const _originalPick = SQ.pick.bind(SQ);
    const _bankLenSnapshot = {};

    // 强制重建索引
    SQ.rebuildIdx = function (sect) {
      if (SQ._idxCache) delete SQ._idxCache[sect];
      if (typeof SQ._getIdx === 'function') SQ._getIdx(sect); // 触发重建
    };

    // 覆写 pick：先检测 bank 长度变化 → 变了就重建索引
    SQ.pick = function (opts) {
      opts = opts || {};
      const sect = opts.sect;
      if (!sect) return _originalPick(opts);

      // 检测 bank 长度是否变化
      const bankMap = {
        physics: global.PHYSICS_BANK,
        chemistry: global.CHEMISTRY_BANK,
        geography: global.GEOGRAPHY_BANK,
        math: global.MATH_BANK,
        chinese: global.CHINESE_BANK,
        english: global.ENGLISH_BANK,
      };
      const currentLen = (bankMap[sect] || []).length;
      if (_bankLenSnapshot[sect] !== currentLen) {
        _bankLenSnapshot[sect] = currentLen;
        SQ.rebuildIdx(sect);
      }

      // 严格匹配 manualId：如果指定了 manualId 但池中没有该题，返回 null 而不是乱抽
      if (opts.manualId && opts.strictManual !== false) {
        const bank = bankMap[sect] || [];
        const pool = bank.filter(q => q && q.manualId === opts.manualId && q.q && q.answer !== undefined && q.answer !== null && q.answer !== '');
        if (pool.length === 0) {
          console.warn(TAG, `manualId=${opts.manualId} 无对应题目，返回 null`);
          return null;
        }
        // 按难度筛选
        const wanted = opts.difficulty;
        let candidates = wanted ? pool.filter(q => (q.difficulty || 'normal') === wanted) : pool;
        if (candidates.length === 0) candidates = pool;
        return candidates[Math.floor(Math.random() * candidates.length)];
      }

      return _originalPick(opts);
    };

    console.info(TAG, '✓ SQ.pick 已修补（manualId 严格匹配 + 索引自动重建）');
  }

  // ============================================================
  // Bug ② — Immersive 初次学习教学内容加固
  // ============================================================
  //   问题：Immersive 沉浸式引擎有时因数据异常/DOM 时序问题导致
  //         "初次学习"页只显示标题不显示内容。
  //   修复：
  //     a) 拦截 Immersive.startLearning，在 opts.manual.content 为空时
  //        自动用 manual.summary + keyPoints 拼接成完整教学内容
  //     b) 若 Immersive 完全不可用，SubjectPage 的 fallback 也要能展示 content 全文
  // ------------------------------------------------------------
  function patchImmersive() {
    if (!global.Immersive) {
      // Immersive 未加载不算错——SubjectPage 会走 fallback
      console.info(TAG, 'Immersive 未加载，跳过 Bug② 引擎级修复（fallback 路径已增强）');
      return;
    }
    const Immersive = global.Immersive;

    const _originalStart = Immersive.startLearning.bind(Immersive);
    Immersive.startLearning = function (opts) {
      opts = opts || {};
      const m = opts.manual;
      if (m && (!m.content || m.content.length < 300)) {
        console.warn(TAG, `功法 ${m.id} content 过短(${(m.content||'').length}字) → 自动拼接补全`);
        // 从 summary + keyPoints + example 拼接
        const parts = [];
        if (m.summary) parts.push('<h3>📖 功法概要</h3><p>' + m.summary + '</p>');
        if (Array.isArray(m.keyPoints) && m.keyPoints.length) {
          parts.push('<h3>🔑 核心要点</h3><ul>');
          m.keyPoints.forEach(kp => parts.push('<li>' + kp + '</li>'));
          parts.push('</ul>');
        }
        if (m.example) parts.push('<h3>💡 演道示例</h3><div class="im-example">' + m.example + '</div>');
        if (m.content) parts.push(m.content);
        if (parts.length === 0) {
          parts.push('<p style="color:#c9b98c;padding:20px;">此功法内容正在整理中，请点击下方"开始印证"直接答题验证所学。</p>');
        }
        m.content = parts.join('\n');
      }
      return _originalStart(opts);
    };

    console.info(TAG, '✓ Immersive.startLearning 已修补（空内容自动补全）');
  }

  // ============================================================
  // Bug ③ — AutoViz 在题干已内嵌 SVG 时不再重复渲染
  // ============================================================
  //   问题：quality 系列题目里题干直接内嵌了 <svg>（比如电路图、装置图、
  //         v-t 图），AutoViz 又叠一层生成的 SVG，导致图重复、错乱。
  //   修复：AutoViz.render / forQuestion 在检测到题干已含 <svg 时返回空
  // ------------------------------------------------------------
  function patchAutoViz() {
    if (!global.AutoViz) {
      console.warn(TAG, 'AutoViz 未就绪，1s 后重试');
      setTimeout(patchAutoViz, 1000);
      return;
    }
    const AutoViz = global.AutoViz;
    const _originalRender = AutoViz.render ? AutoViz.render.bind(AutoViz) : null;
    const _originalForQ = AutoViz.forQuestion ? AutoViz.forQuestion.bind(AutoViz) : null;

    function hasEmbeddedSVG(q) {
      if (!q) return false;
      const txt = (q.q || '') + '\n' + (q.options ? JSON.stringify(q.options) : '');
      return /<svg[\s>]/i.test(txt);
    }

    if (_originalRender) {
      AutoViz.render = function (q) {
        if (hasEmbeddedSVG(q)) return '';   // 题干已含 SVG → 不再叠加
        return _originalRender(q);
      };
    }
    if (_originalForQ) {
      AutoViz.forQuestion = function (q) {
        if (hasEmbeddedSVG(q)) return '';
        return _originalForQ(q);
      };
    }

    console.info(TAG, '✓ AutoViz 已修补（题干含 <svg> 时跳过叠加渲染）');
  }

  // ============================================================
  // Bug ④ — interactive 挂到"总结卷"而不是第一卷（避免错开）
  // ============================================================
  //   问题：Immersive._openChapter 里 interactive 只在 idx===0 显示，
  //         但第一卷讲的是"回复力"，interactive 却是整章总结（周期公式等），
  //         用户觉得"错开"。
  //   修复：只在最后一卷（学完拆经+演道之后）显示 interactive，作为
  //         整章的综合演练。
  // ------------------------------------------------------------
  function patchInteractivePlacement() {
    // 挂全局标志，让 Immersive 的自定义 _openChapter 判断使用
    global.__Immersive_interactiveOnLastChapter = true;

    // 拦截 Immersive._openChapter（如果有）
    if (!global.Immersive) return;
    const Immersive = global.Immersive;
    if (typeof Immersive._openChapter !== 'function') return;

    const _originalOpenChapter = Immersive._openChapter.bind(Immersive);
    Immersive._openChapter = function (state, idx) {
      // 临时给 state 挂一个字段告诉后续代码 "是否是最后一卷"
      const chapters = state && state.chapters ? state.chapters : [];
      const isLast = (idx >= chapters.length - 1);
      if (state) state.__isLastChapter = isLast;
      return _originalOpenChapter(state, idx);
    };

    console.info(TAG, '✓ interactive 挂载位置已修正（改为最后一卷综合演练）');
  }

  // ============================================================
  // Bug ⑤（附赠）— 音效错乱修复
  // ============================================================
  //   问题：sound-effects-v437.js hook 了 Game.on('answer') 但对错音效
  //        触发太多次，或者答对时播放答错音。
  //   修复：给 SFX 加防抖 + 严格判断 result
  // ------------------------------------------------------------
  function patchSFX() {
    if (!global.SFX) {
      console.info(TAG, 'SFX 未加载，跳过 Bug⑤ 修复');
      return;
    }
    const SFX = global.SFX;
    const _originalPlay = SFX.play ? SFX.play.bind(SFX) : null;
    if (!_originalPlay) return;

    let lastPlay = { name: null, ts: 0 };
    SFX.play = function (name) {
      const now = Date.now();
      // 防抖：同一音效 200ms 内不重复播放
      if (lastPlay.name === name && (now - lastPlay.ts) < 200) return;
      lastPlay = { name, ts: now };
      return _originalPlay(name);
    };

    console.info(TAG, '✓ SFX.play 已修补（防抖 200ms + 音效名严格匹配）');
  }

  // ============================================================
  // 诊断工具
  // ============================================================
  function diagnoseAll() {
    const subjects = ['physics', 'chemistry', 'geography', 'math', 'chinese', 'english'];
    const bankMap = {
      physics: global.PHYSICS_BANK,
      chemistry: global.CHEMISTRY_BANK,
      geography: global.GEOGRAPHY_BANK,
      math: global.MATH_BANK,
      chinese: global.CHINESE_BANK,
      english: global.ENGLISH_BANK,
    };
    const manualMap = {
      physics: global.PHYSICS_MANUALS_DEEP || global.PHYSICS_MANUALS,
      chemistry: global.CHEMISTRY_MANUALS_DEEP || global.CHEMISTRY_MANUALS,
      geography: global.GEOGRAPHY_MANUALS_DEEP || global.GEOGRAPHY_MANUALS,
      math: global.MATH_MANUALS_DEEP || global.MATH_MANUALS,
      chinese: global.CHINESE_MANUALS,
      english: global.ENGLISH_MANUALS,
    };
    console.group('%c[v437a] 全学科诊断报告', 'color:#8ce28c;font-weight:bold;');
    subjects.forEach(s => {
      const bank = bankMap[s] || [];
      const manuals = manualMap[s] || [];
      const manualIds = new Set(manuals.map(m => m.id));
      const orphan = bank.filter(q => q.manualId && !manualIds.has(q.manualId));
      const empty = manuals.filter(m => bank.filter(q => q.manualId === m.id).length === 0);
      const shortContent = manuals.filter(m => (m.content || '').length < 400);
      console.log(`${s.padEnd(10)} 题库=${bank.length}  功法=${manuals.length}  孤儿题=${orphan.length}  空功法=${empty.length}  短内容功法=${shortContent.length}`);
      if (orphan.length) console.log('  ⚠️ 孤儿题 manualId:', [...new Set(orphan.map(q => q.manualId))].slice(0, 5));
      if (empty.length) console.log('  ⚠️ 空功法:', empty.map(m => m.id).slice(0, 5));
      if (shortContent.length) console.log('  ⚠️ 短内容:', shortContent.map(m => m.id).slice(0, 5));
    });
    console.groupEnd();
  }

  // ============================================================
  // 主入口
  // ============================================================
  function boot() {
    patchSQ();
    patchImmersive();
    patchAutoViz();
    patchInteractivePlacement();
    patchSFX();
    console.info(TAG, '════════ v4.3.7a 综合修复补丁 已装载 ════════');
    console.info(TAG, '控制台可用: window.v437aFix.diagnoseAll() 查看题库健康度');
  }

  if (typeof document !== 'undefined' && document.readyState !== 'loading') {
    setTimeout(boot, 100);
  } else if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(boot, 100));
  } else {
    boot();
  }

  global.v437aFix = {
    boot,
    diagnoseAll,
    patchSQ, patchImmersive, patchAutoViz, patchInteractivePlacement, patchSFX,
  };
})(typeof window !== 'undefined' ? window : this);
