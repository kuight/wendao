/* ================================================================
 * 《问道修仙学院》v4.3.8 · 深度讲义·兜底生成器（Fallback）
 *
 * 用途：当某篇 manual 没有手写 deepDive 时，基于 manual 自身的
 *   keyPoints / formulas / example 自动生成一个可用版本。
 *
 * 输出结构与手写讲义完全一致：
 *   { subtitle, points[], flashcards[], puzzles[], stepExamples[] }
 * 保证 UI 不会因为缺字段而报错。
 * ================================================================ */
(function (global) {
  'use strict';

  /* 把一个字符串切成"词组数组"，用于分句取要点 */
  function splitToBits(s){
    if (!s) return [];
    return String(s).split(/[；;。\n]+/).map(x => x.trim()).filter(Boolean);
  }

  /* 从 keyPoint 里抽一句作为"直觉/为什么"的候选 */
  function inferWhy(kp){
    const bits = splitToBits(kp);
    if (bits.length >= 2) return bits[0] + '。是这条要点的核心含义。';
    return `${kp}。理解这一条是掌握本章的基础。`;
  }

  function inferPitfalls(kp, i, all){
    // 抽三条易错点：借相邻要点做对比 + 常见通用陷阱
    const others = all.filter((_, j) => j !== i).slice(0, 2);
    const generic = [
      '❌ 定义混淆：把本要点与相邻概念记混（读题时先给自己念一遍完整表述）',
      '❌ 条件遗漏：使用前忘了核实前提是否满足（前提不满足则结论不成立）',
      '❌ 特殊情况：边界值/零值/负值/空集 等经常被忽略'
    ];
    const out = [];
    if (others[0]) out.push(`❌ 容易与"${others[0].slice(0,20)}..."混淆——用时先确认自己到底在用哪一条`);
    out.push(generic[0]);
    out.push(generic[2]);
    return out.slice(0, 3);
  }

  function inferMnemonic(kp){
    // 抽关键词做口诀
    const bits = splitToBits(kp);
    const short = bits[0] || kp;
    if (short.length <= 18) return `"${short}"——这是本要点的口诀，反复默念到反射`;
    return `记住"${short.slice(0, 18)}..."的核心关键词，见题即用`;
  }

  function inferReflex(kp){
    return `看到相关情境（关键词与本要点匹配）→ 立刻反射到"${splitToBits(kp)[0] || kp}"，代入分析`;
  }

  /* 生成闪卡 */
  function makeFlashcards(manual){
    const kps = manual.keyPoints || [];
    const fms = manual.formulas || [];
    const out = [];
    kps.slice(0, 4).forEach((k, i) => {
      const bits = splitToBits(k);
      const front = bits[0] ? (bits[0].length > 20 ? bits[0].slice(0,20)+'?' : bits[0]+'?') : `要点 ${i+1}`;
      out.push({ front, back: k });
    });
    if (fms[0]) out.push({ front: '本章核心公式?', back: fms[0] });
    // 不足 5 张兜底
    while (out.length < 5 && kps.length > 0){
      out.push({ front: `复习要点 ${out.length+1}`, back: kps[out.length % kps.length] });
    }
    return out.slice(0, 5);
  }

  /* 生成拼盘 */
  function makePuzzles(manual){
    const fms = manual.formulas || [];
    if (!fms.length) return [];
    return fms.slice(0, 3).map((f, i) => ({
      formula: f,
      tip: `本章公式 ${i+1}：按顺序拼回`
    }));
  }

  /* 生成分步例题 */
  function makeStepExamples(manual){
    const example = manual.example;
    const kps = manual.keyPoints || [];
    if (!example) return [];
    // 用 example + keyPoints 做一个 2~3 步的通用例题
    const steps = [];
    steps.push({
      ask: '第一步：读题后，本题主要考察哪个知识点？',
      type: 'choice',
      options: kps.slice(0, 4).length ? kps.slice(0, 4) : ['本章核心概念','基本公式应用','特殊情况讨论','综合运用'],
      answerIndex: 0,
      explain: `本题聚焦第一个要点：<b>${kps[0] || '本章核心概念'}</b>。读题时先识别考点，再决定用哪个工具。`
    });
    if (manual.formulas && manual.formulas[0]){
      steps.push({
        ask: '第二步：列出关键公式',
        type: 'choice',
        options: [manual.formulas[0]].concat((manual.formulas.slice(1,4)) || []).slice(0,4)
          .concat(['以上都不对']).slice(0,4),
        answerIndex: 0,
        explain: `本题的主公式是：<b>${manual.formulas[0]}</b>。养成"识别考点→立刻默出公式"的反射。`
      });
    }
    steps.push({
      ask: '第三步：把已知条件代入公式后结果如何？',
      type: 'choice',
      options: ['能直接解出','需要分类讨论','需换元/化简','综合上述'],
      answerIndex: 3,
      explain: '实际解题往往是<b>直接代入 + 分类讨论 + 化简</b>的综合。做题时如果卡住，通常是漏了某个前提条件或忘了特殊值。'
    });
    return [{ stem: example, steps }];
  }

  /* 生成 points（四段式） */
  function makePoints(manual){
    const kps = manual.keyPoints || [];
    if (!kps.length) return [];
    return kps.slice(0, 4).map((kp, i) => ({
      title: `要点 ${i+1}`,
      why: inferWhy(kp),
      pitfalls: inferPitfalls(kp, i, kps),
      mnemonic: inferMnemonic(kp),
      reflex: inferReflex(kp)
    }));
  }

  /* 主入口：给一个 manual 生成 deepDive */
  function DeepDiveFallback(manual){
    if (!manual) return null;
    return {
      subtitle: manual.summary
        ? `${manual.summary.slice(0, 50)}${manual.summary.length > 50 ? '...' : ''}`
        : '基于本章要点自动生成的深度讲义（未手写完整版）',
      points: makePoints(manual),
      flashcards: makeFlashcards(manual),
      puzzles: makePuzzles(manual),
      stepExamples: makeStepExamples(manual),
      _auto: true  // 标记：这是自动生成的，不是手写
    };
  }

  global.DeepDiveFallback = DeepDiveFallback;

})(typeof window !== 'undefined' ? window : this);
