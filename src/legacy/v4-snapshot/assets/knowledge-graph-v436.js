/* ===================================================================
 * v4.3.6 · 知识点关联图谱 (Knowledge Graph)
 * -------------------------------------------------------------------
 * 用户原话："要有高的、融汇贯通教学方式"。
 * 
 * 修仙学院的核心问题是：题目按 manualId 严格分组，你学完《简谐振动经》
 * 就只会考简谐振动 —— 这不是"融汇贯通"，是"应试隔离"。
 *
 * 高考真正考的是"你把学过的多个知识点组合起来解一道题"。
 * 
 * 本模块做三件事：
 *   ① 定义 58 个 manual 之间的关联图（前置 / 后继 / 平行）
 *   ② 提供 Game.KG.related(manualId, hops) 返回相关知识点
 *   ③ 提供 Game.KG.buildLearningPath(sect) 智能学习路径（新手 → 冲刺）
 *
 * 依赖：无（可独立加载）
 * =================================================================== */
(function (global) {
  'use strict';
  if (global.__WENDAO_KG_V436__) return;
  global.__WENDAO_KG_V436__ = true;

  // ---------------------------------------------------------------
  // 一、图定义（有向图）：edges[i] = [ from, to, kind, weight ]
  //   kind:  'prereq' 前置 (from 是 to 的前置知识)
  //          'apply'  应用 (to 是 from 的高阶应用)
  //          'parallel' 平行 (两个可同时学，常混合考察)
  //   weight: 0-1，混合出题时的选择概率
  // ---------------------------------------------------------------

  const EDGES = [
    // ============ 物理 ============
    // 力学基础链
    ['phy_m8',  'phy_m9',  'prereq', 0.9],   // 运动 → 牛顿定律
    ['phy_m9',  'phy_m11', 'apply',  0.85],  // 牛顿 → 机械能
    ['phy_m9',  'phy_m12', 'apply',  0.9],   // 牛顿 → 动量
    ['phy_m11', 'phy_m12', 'parallel', 0.85], // 机械能 & 动量：高考大题常联考
    ['phy_m11', 'phy_m10', 'apply',  0.6],   // 机械能 → 万有引力（能量守恒宇宙运动）
    ['phy_m9',  'phy_m10', 'apply',  0.7],   // 牛二 → 万有引力
    // 振动波动
    ['phy_m1',  'phy_m2',  'parallel', 0.9], // 简谐 & 单摆
    ['phy_m1',  'phy_m3',  'apply', 0.75],   // 简谐 → 共振
    ['phy_m1',  'phy_m4',  'prereq', 0.7],   // 简谐 → 机械波
    ['phy_m4',  'phy_m5',  'apply', 0.85],   // 波 → 叠加干涉
    ['phy_m4',  'phy_m6',  'parallel', 0.55],// 机械波 & 光波
    ['phy_m6',  'phy_m7',  'apply', 0.6],    // 折射 → 光影
    // 电磁大链
    ['phy_m26', 'phy_m13', 'prereq', 0.9],   // 静电 → 电场
    ['phy_m13', 'phy_m14', 'apply', 0.85],   // 电场 → 电容
    ['phy_m13', 'phy_m15', 'apply', 0.7],    // 电场 → 电流
    ['phy_m15', 'phy_m16', 'apply', 0.95],   // 电流 → 欧姆
    ['phy_m17', 'phy_m18', 'apply', 0.9],    // 磁场 → 电磁感应
    ['phy_m18', 'phy_m19', 'apply', 0.9],    // 电磁感应 → 交流电
    ['phy_m18', 'phy_m27', 'apply', 0.7],    // 电磁感应 → 电磁波
    ['phy_m13', 'phy_m17', 'parallel', 0.8], // 电场 & 磁场：高考常联考
    ['phy_m9',  'phy_m17', 'apply', 0.75],   // 牛顿 → 磁场中带电粒子运动
    // 近代物理链
    ['phy_m20', 'phy_m21', 'prereq', 0.9],   // 光电效应 → 原子结构
    ['phy_m21', 'phy_m22', 'apply', 0.9],    // 原子 → 原子核
    ['phy_m20', 'phy_m22', 'parallel', 0.6], // 光电 & 原子核：能量守恒相关
    // 热学链
    ['phy_m23', 'phy_m24', 'prereq', 0.85],  // 分子动理论 → 气体
    ['phy_m24', 'phy_m25', 'apply', 0.9],    // 气体 → 热力学
    ['phy_m11', 'phy_m25', 'parallel', 0.65],// 机械能守恒 & 热一律：能量守恒统一

    // ============ 化学 ============
    // 结构基础链
    ['chem_m6',  'chem_m7',  'apply', 0.9],  // 元素 → 化学键
    ['chem_m6',  'chem_m17', 'apply', 0.7],  // 元素 → 晶体
    ['chem_m7',  'chem_m17', 'apply', 0.85], // 化学键 → 晶体结构
    ['chem_m18', 'chem_m6',  'prereq', 0.6], // 阿伏伽德罗 → 元素周期表
    // 反应体系链
    ['chem_m1',  'chem_m2',  'parallel', 0.8], // 热效应 & 速率
    ['chem_m2',  'chem_m3',  'apply', 0.95],   // 速率 → 平衡
    ['chem_m3',  'chem_m4',  'apply', 0.85],   // 平衡 → 电离水解
    ['chem_m3',  'chem_m5',  'apply', 0.9],    // 平衡 → 电化学
    ['chem_m4',  'chem_m5',  'parallel', 0.7], // 电离 & 电化学
    // 物质分类链
    ['chem_m8',  'chem_m9',  'apply', 0.75],   // 反应 → 金属
    ['chem_m8',  'chem_m10', 'apply', 0.75],   // 反应 → 非金属
    ['chem_m9',  'chem_m10', 'parallel', 0.85],// 金属 & 非金属
    ['chem_m9',  'chem_m14', 'apply', 0.9],    // 金属 → 工业流程
    ['chem_m10', 'chem_m14', 'apply', 0.9],    // 非金属 → 工业流程
    // 有机链
    ['chem_m11', 'chem_m12', 'apply', 0.95],   // 有机基础 → 官能团
    ['chem_m12', 'chem_m13', 'apply', 0.9],    // 官能团 → 生物大分子
    ['chem_m6',  'chem_m11', 'prereq', 0.6],   // 元素 → 有机（碳）
    // 综合
    ['chem_m14', 'chem_m15', 'parallel', 0.85],// 工业 & 实验
    ['chem_m16', 'chem_m6',  'parallel', 0.8], // 元素综合 & 元素周期表

    // ============ 地理 ============
    ['geo_m1',  'geo_m2',  'apply', 0.9],   // 行星地球 → 地球运动
    ['geo_m2',  'geo_m3',  'apply', 0.75],  // 地球运动 → 大气
    ['geo_m3',  'geo_m4',  'parallel', 0.8],// 大气 & 水
    ['geo_m4',  'geo_m5',  'apply', 0.85],  // 水 → 地貌
    ['geo_m3',  'geo_m5',  'parallel', 0.7],// 大气 & 地貌
    ['geo_m5',  'geo_m6',  'apply', 0.7],   // 地貌 → 山河总纲
    ['geo_m6',  'geo_m7',  'prereq', 0.6],  // 自然地理 → 人口
    ['geo_m7',  'geo_m8',  'apply', 0.85],  // 人口 → 生产
    ['geo_m8',  'geo_m9',  'apply', 0.85],  // 生产 → 地域联系
    ['geo_m8',  'geo_m12', 'apply', 0.8],   // 生产 → 区域
    ['geo_m6',  'geo_m10', 'apply', 0.75],  // 自然地理 → 环境安全
    ['geo_m10', 'geo_m11', 'apply', 0.85],  // 环境 → 永续
    ['geo_m9',  'geo_m12', 'parallel', 0.8],// 地域联系 & 区域
  ];

  // ---------------------------------------------------------------
  // 二、图的邻接索引
  // ---------------------------------------------------------------
  const _fwd = {};   // from -> [{to, kind, weight}]
  const _bwd = {};   // to -> [{from, kind, weight}]
  EDGES.forEach(([f, t, k, w]) => {
    (_fwd[f] = _fwd[f] || []).push({ to: t, kind: k, weight: w });
    (_bwd[t] = _bwd[t] || []).push({ from: f, kind: k, weight: w });
    // parallel 是双向
    if (k === 'parallel') {
      (_fwd[t] = _fwd[t] || []).push({ to: f, kind: k, weight: w });
      (_bwd[f] = _bwd[f] || []).push({ from: t, kind: k, weight: w });
    }
  });

  const KG = {
    /**
     * 拿到某个知识点的相关知识点（一到多跳）
     * @param {string} manualId  当前 manual
     * @param {number} hops      最大跳数（默认 1）
     * @param {object} opts      { includePrereq, includeApply, includeParallel }
     * @returns {Array<{id, kind, weight, dist}>}
     */
    related(manualId, hops = 1, opts = {}) {
      const {
        includePrereq = true,
        includeApply = true,
        includeParallel = true
      } = opts;

      const visited = new Set([manualId]);
      const result = [];
      let frontier = [{ id: manualId, dist: 0, w: 1 }];

      while (frontier.length && frontier[0].dist < hops) {
        const next = [];
        frontier.forEach(cur => {
          // 后继（应用）
          if (includeApply) (_fwd[cur.id] || []).forEach(e => {
            if (e.kind !== 'apply' && e.kind !== 'parallel') return;
            if (visited.has(e.to)) return;
            visited.add(e.to);
            const item = { id: e.to, kind: e.kind, weight: cur.w * e.weight, dist: cur.dist + 1 };
            result.push(item);
            next.push({ id: e.to, dist: cur.dist + 1, w: item.weight });
          });
          // 前置
          if (includePrereq) (_bwd[cur.id] || []).forEach(e => {
            if (e.kind !== 'prereq' && e.kind !== 'parallel') return;
            if (visited.has(e.from)) return;
            visited.add(e.from);
            const item = { id: e.from, kind: e.kind, weight: cur.w * e.weight, dist: cur.dist + 1 };
            result.push(item);
            next.push({ id: e.from, dist: cur.dist + 1, w: item.weight });
          });
          // 平行
          if (includeParallel) {
            const parallels = [
              ...(_fwd[cur.id] || []).filter(e => e.kind === 'parallel').map(e => ({ id: e.to, w: e.weight })),
            ];
            parallels.forEach(({ id, w }) => {
              if (visited.has(id)) return;
              visited.add(id);
              const item = { id, kind: 'parallel', weight: cur.w * w, dist: cur.dist + 1 };
              result.push(item);
              next.push({ id, dist: cur.dist + 1, w: item.weight });
            });
          }
        });
        frontier = next;
      }
      return result.sort((a, b) => b.weight - a.weight);
    },

    /**
     * 从一个 manual 出发，按权重挑一个相关知识点
     * 用于战斗时"混合出题"—— 60% 概率考当前 manual，40% 混入相关
     */
    weightedPick(manualId, hops = 1) {
      const rel = this.related(manualId, hops);
      if (!rel.length) return null;
      const total = rel.reduce((s, r) => s + r.weight, 0);
      let x = Math.random() * total;
      for (const r of rel) {
        x -= r.weight;
        if (x <= 0) return r.id;
      }
      return rel[0].id;
    },

    /**
     * 学习路径：给定学科，返回按前置依赖排序的 manual 顺序
     * （拓扑排序，无环时精确，有环时降级为原顺序）
     */
    buildLearningPath(sectKey) {
      // 用现有 manual 列表拿全部 id
      const manualsMap = {
        physics: (global.PHYSICS_MANUALS || []),
        chemistry: (global.CHEMISTRY_MANUALS || []),
        geography: (global.GEOGRAPHY_MANUALS || []),
        math: (global.MATH_MANUALS || []),
        chinese: (global.CHINESE_MANUALS || []),
        english: (global.ENGLISH_MANUALS || []),
      };
      const list = manualsMap[sectKey] || [];
      const ids = list.map(m => m.id);
      if (!ids.length) return [];

      // 拓扑：入度只算 prereq 边
      const indeg = {};
      ids.forEach(id => indeg[id] = 0);
      ids.forEach(id => {
        (_fwd[id] || []).forEach(e => {
          if (e.kind === 'prereq' && indeg[e.to] !== undefined) indeg[e.to]++;
        });
      });
      const queue = ids.filter(id => indeg[id] === 0);
      const out = [];
      const seen = new Set();
      while (queue.length) {
        const id = queue.shift();
        if (seen.has(id)) continue;
        seen.add(id);
        out.push(id);
        (_fwd[id] || []).forEach(e => {
          if (e.kind !== 'prereq') return;
          if (indeg[e.to] !== undefined) {
            indeg[e.to]--;
            if (indeg[e.to] === 0) queue.push(e.to);
          }
        });
      }
      // 有环时兜底
      ids.forEach(id => { if (!seen.has(id)) out.push(id); });
      return out;
    },

    /**
     * 调试：把某个 manual 的邻居列出来
     */
    debug(manualId) {
      console.group(`[KG] ${manualId}`);
      const fwd = _fwd[manualId] || [];
      const bwd = _bwd[manualId] || [];
      console.log('后继 (可应用到):', fwd);
      console.log('前置 (依赖它):', bwd);
      console.groupEnd();
    },

    // 供外部拿到全图
    _edges: EDGES,
    _fwd, _bwd,
  };

  // 挂到 Game 上
  if (global.Game) global.Game.KG = KG;
  global.KG = KG;

  console.log(`%c[v4.3.6-kg] ✔ 知识点关联图谱已加载：${EDGES.length} 条关联边`,
              'color:#b288ff;font-weight:bold;');
})(typeof window !== 'undefined' ? window : this);
