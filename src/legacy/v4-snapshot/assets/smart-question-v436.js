/* ===================================================================
 * v4.3.6 · 智能出题系统 (Smart Question Engine)
 * -------------------------------------------------------------------
 * 用户原话："要有足够多题目练习 / 零基础到冲刺高考"
 *
 * 传统做法：battle 里 rand 一道 bank 里的题 → 毫无节奏
 * 本模块提供：
 *   Game.SQ.pick({sect, manualId, playerRealm, learned})  智能挑题
 *     - 60% 命中当前 manualId（复习）
 *     - 25% 命中相关知识点（融汇贯通，来自 KG）
 *     - 15% 命中已学过的其他 manual（回顾，防止遗忘）
 *   Game.SQ.pickByRealm(sect, realmId)                 按境界配题（初学 → 冲刺）
 *   Game.SQ.stats(sect)                                 题库统计
 *
 * 依赖：KG (knowledge-graph-v436.js) + 六大题库
 * =================================================================== */
(function (global) {
  'use strict';
  if (global.__WENDAO_SQ_V436__) return;
  global.__WENDAO_SQ_V436__ = true;

  const Game = global.Game;
  if (!Game) { console.warn('[v4.3.6-sq] Game 未加载'); return; }

  // ---------------------------------------------------------------
  // 题库映射
  // ---------------------------------------------------------------
  function getBank(sect) {
    const map = {
      physics: global.PHYSICS_BANK,
      chemistry: global.CHEMISTRY_BANK,
      geography: global.GEOGRAPHY_BANK,
      math: global.MATH_BANK,
      chinese: global.CHINESE_BANK,
      english: global.ENGLISH_BANK,
    };
    return (map[sect] || []).filter(q => q && q.q && q.answer !== undefined && q.answer !== null && q.answer !== '');
  }

  // 按 manualId 建索引（只算一次，缓存）
  const _idxCache = {};
  function getIdx(sect) {
    if (_idxCache[sect]) return _idxCache[sect];
    const bank = getBank(sect);
    const byManual = {};
    const byDifficulty = { easy: [], normal: [], hard: [], boss: [], legend: [] };
    bank.forEach(q => {
      const m = q.manualId || 'unknown';
      (byManual[m] = byManual[m] || []).push(q);
      const d = q.difficulty || 'normal';
      if (byDifficulty[d]) byDifficulty[d].push(q);
      else byDifficulty.normal.push(q);
    });
    return _idxCache[sect] = { bank, byManual, byDifficulty };
  }

  // ---------------------------------------------------------------
  // 难度→境界映射（14 大境界，每个境界 3-5 层）
  //   凡人/炼气 (0-30)     : easy 主 + normal 少量
  //   炼体/筑基 (31-90)    : easy + normal 平衡
  //   金丹/元婴 (91-150)   : normal 主 + hard 少量
  //   化神/渡劫 (151-210)  : hard 主 + normal 少
  //   炼虚/大乘 (211-270)  : hard + boss
  //   登仙 (270+)          : boss + legend
  // ---------------------------------------------------------------
  function realmDifficultyMix(realmId) {
    const r = realmId || 0;
    if (r <= 30)  return { easy: 0.70, normal: 0.28, hard: 0.02, boss: 0, legend: 0 };
    if (r <= 90)  return { easy: 0.40, normal: 0.50, hard: 0.10, boss: 0, legend: 0 };
    if (r <= 150) return { easy: 0.15, normal: 0.55, hard: 0.28, boss: 0.02, legend: 0 };
    if (r <= 210) return { easy: 0.05, normal: 0.35, hard: 0.50, boss: 0.10, legend: 0 };
    if (r <= 270) return { easy: 0.02, normal: 0.15, hard: 0.55, boss: 0.25, legend: 0.03 };
    return         { easy: 0,    normal: 0.05, hard: 0.35, boss: 0.45, legend: 0.15 };
  }

  function pickByMix(byDifficulty, mix) {
    const total = Object.values(mix).reduce((a, b) => a + b, 0) || 1;
    let x = Math.random() * total;
    const keys = Object.keys(mix);
    for (const k of keys) {
      x -= mix[k];
      if (x <= 0) {
        const pool = byDifficulty[k];
        if (pool && pool.length) return pool[Math.floor(Math.random() * pool.length)];
      }
    }
    // 兜底
    for (const k of keys) {
      const p = byDifficulty[k];
      if (p && p.length) return p[Math.floor(Math.random() * p.length)];
    }
    return null;
  }

  // ---------------------------------------------------------------
  // 主入口：智能挑题
  // ---------------------------------------------------------------
  const SQ = {
    /**
     * @param {object} opts
     *   sect          学科 key
     *   manualId      当前学的 manualId（可选）
     *   playerRealm   玩家境界 id（决定难度）
     *   learned       已学过的 manualId 数组（可选，用于回顾抽题）
     *   mode          'battle' | 'practice' | 'exam'  影响权重
     * @returns 一道题 { q, options, answer, ... } 或 null
     */
    pick(opts) {
      opts = opts || {};
      const sect = opts.sect;
      if (!sect) return null;
      const idx = getIdx(sect);
      if (!idx.bank.length) return null;

      const mid = opts.manualId;
      const playerRealm = opts.playerRealm || (Game.state && Game.state.char && Game.state.char.realmId) || 0;
      const learned = opts.learned || (Game.state && Game.state.char && Game.state.char.mastered) || [];
      const mode = opts.mode || 'battle';

      const diffMix = realmDifficultyMix(playerRealm);

      // 战斗模式：60% 当前 / 25% 关联 / 15% 回顾
      // 练习模式：85% 当前 / 15% 关联
      // 考试模式：40% 当前 / 45% 关联 / 15% 回顾
      const weights = mode === 'practice' ? { self: 0.85, related: 0.15, review: 0.00 }
                   : mode === 'exam'      ? { self: 0.40, related: 0.45, review: 0.15 }
                   :                        { self: 0.60, related: 0.25, review: 0.15 };

      const r = Math.random();
      let targetManual = mid;
      if (!mid) {
        // 没指定 manual：直接按难度抽
        return pickByMix(idx.byDifficulty, diffMix);
      }

      if (r < weights.self) {
        targetManual = mid;
      } else if (r < weights.self + weights.related) {
        // 从 KG 挑一个相关知识点
        const rel = Game.KG && Game.KG.weightedPick ? Game.KG.weightedPick(mid, 1) : null;
        targetManual = rel || mid;
      } else {
        // 从已学过的挑一个
        const learnedOther = learned.filter(m => m !== mid);
        if (learnedOther.length) {
          targetManual = learnedOther[Math.floor(Math.random() * learnedOther.length)];
        }
      }

      // 从 targetManual 挑一道，按难度分布过滤
      const pool = idx.byManual[targetManual] || [];
      if (!pool.length) {
        // 兜底：按境界从全库挑
        return pickByMix(idx.byDifficulty, diffMix);
      }

      // 在 pool 里按难度挑
      const poolByDiff = { easy:[], normal:[], hard:[], boss:[], legend:[] };
      pool.forEach(q => {
        const d = q.difficulty || 'normal';
        if (poolByDiff[d]) poolByDiff[d].push(q);
        else poolByDiff.normal.push(q);
      });
      const picked = pickByMix(poolByDiff, diffMix);
      if (picked) {
        // 打个标记，方便战斗界面显示来源
        picked._sq_from = targetManual;
        picked._sq_related = targetManual !== mid;
      }
      return picked;
    },

    /**
     * 按境界抽题（不指定 manual）
     */
    pickByRealm(sect, realmId) {
      const idx = getIdx(sect);
      const mix = realmDifficultyMix(realmId);
      return pickByMix(idx.byDifficulty, mix);
    },

    /**
     * 题库统计
     */
    stats(sect) {
      const idx = getIdx(sect);
      const diffCount = {};
      Object.keys(idx.byDifficulty).forEach(k => diffCount[k] = idx.byDifficulty[k].length);
      const manualCount = {};
      Object.keys(idx.byManual).forEach(k => manualCount[k] = idx.byManual[k].length);
      return {
        total: idx.bank.length,
        byDifficulty: diffCount,
        byManualCount: Object.keys(manualCount).length,
        byManual: manualCount,
      };
    },

    /**
     * 出一组题（练习用）
     */
    pickBatch(opts, n) {
      const arr = [];
      const seen = new Set();
      const tries = n * 3;
      for (let i = 0; i < tries && arr.length < n; i++) {
        const q = this.pick(opts);
        if (q && !seen.has(q.id)) { seen.add(q.id); arr.push(q); }
      }
      return arr;
    },

    _getIdx: getIdx, // 便于调试
  };

  Game.SQ = SQ;
  global.SQ = SQ;

  console.log('%c[v4.3.6-sq] ✔ 智能出题引擎已加载 (Game.SQ.pick/pickByRealm/stats)',
              'color:#8ce28c;font-weight:bold;');
})(typeof window !== 'undefined' ? window : this);
