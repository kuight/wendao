/* ============================================================
 * v5/core/world/loot.js
 * 掉宝与奖励系统 - S1b
 * 房间结算时根据类型/深度/连击计算掉落
 * 复用 boot.economy 挂载的物品/灵石体系
 * ============================================================ */
'use strict';

// 基础掉宝表：按房间类型和深度
const LOOT_TABLE = {
  combat: {
    base: { gold: [8, 20], xp: [1, 3] },    // [min, max]
    perDepth: { gold: 5, xp: 1 },
    pillChance: 0.15,                         // 概率掉丹药
  },
  treasure: {
    base: { gold: [20, 60], xp: [2, 5] },
    perDepth: { gold: 10, xp: 2 },
    pillChance: 0.45,
    artifactChance: 0.12,                     // 概率掉法器
  },
  boss: {
    base: { gold: [50, 120], xp: [5, 12] },
    perDepth: { gold: 20, xp: 3 },
    pillChance: 0.8,
    artifactChance: 0.5,                      // Boss 高概率掉法器
  },
  rest: {
    base: { gold: [0, 5], xp: [0, 1] },
    perDepth: { gold: 2, xp: 0 },
    healPct: 0.3,                             // 休息房回血
  },
};

// 灵丹药池（按稀有度）
const PILL_POOL = ['灵丹', '聚气丹', '回元丹'];

// 法器池（简化：属性加成）
const ARTIFACT_POOL = [
  { id: '铁剑', stat: 'atk', value: 3, name: '铁剑', desc: '攻击+3' },
  { id: '木盾', stat: 'def', value: 2, name: '木盾', desc: '防御+2' },
  { id: '疾风靴', stat: 'speed', value: 2, name: '疾风靴', desc: '速度+2' },
  { id: '灵玉', stat: 'maxHp', value: 15, name: '灵玉', desc: '生命上限+15' },
  { id: '寒铁剑', stat: 'atk', value: 6, name: '寒铁剑', desc: '攻击+6' },
  { id: '玄铁盾', stat: 'def', value: 4, name: '玄铁盾', desc: '防御+4' },
];

/**
 * 结算一个房间的掉落。
 * @param {string} roomType - combat|treasure|boss|rest
 * @param {number} depth - 楼层深度 (1..)
 * @param {number} combo - 连击数（影响品质）
 * @returns {object} { gold, xp, pills, artifacts, healPct }
 */
export function rollLoot(roomType, depth, combo = 0) {
  const t = LOOT_TABLE[roomType] || LOOT_TABLE.combat;
  const comboBonus = Math.min(1 + combo * 0.05, 1.5);  // 连击加成上限50%
  const roll = (min, max) => Math.floor((min + Math.random() * (max - min + 1)) * comboBonus);

  const result = {
    gold: roll(t.base.gold[0] + t.perDepth.gold * (depth - 1), t.base.gold[1] + t.perDepth.gold * (depth - 1)),
    xp: roll(t.base.xp[0] + t.perDepth.xp * (depth - 1), t.base.xp[1] + t.perDepth.xp * (depth - 1)),
    pills: [],
    artifacts: [],
    healPct: t.healPct || 0,
  };

  // 灵丹
  if (Math.random() < t.pillChance) {
    result.pills.push(PILL_POOL[Math.floor(Math.random() * PILL_POOL.length)]);
  }

  // 法器
  if (t.artifactChance && Math.random() < t.artifactChance) {
    const idx = Math.floor(Math.random() * ARTIFACT_POOL.length);
    result.artifacts.push(ARTIFACT_POOL[idx]);
  }

  return result;
}

/**
 * 应用掉落：写到 boot.economy + player stats。
 * @param {object} boot
 * @param {object} loot - rollLoot 的返回值
 */
export function applyLoot(boot, loot) {
  if (!boot || !boot.economy) return;
  if (loot.gold > 0) boot.economy.addGold(loot.gold);
  loot.pills.forEach(p => boot.economy.addItem(p, 1));
  loot.artifacts.forEach(a => {
    boot.economy.addItem(a.id, 1);
    // 装备法器：直接加属性（简化）
    const st = boot.state && boot.state.get();
    if (st && st.player && st.player.stats) {
      st.player.stats[a.stat] = (st.player.stats[a.stat] || 0) + a.value;
      boot.state.set(st);
    }
  });
  // 回血
  if (loot.healPct > 0) {
    const st = boot.state && boot.state.get();
    if (st && st.player && st.player.stats) {
      const p = st.player.stats;
      p.hp = Math.min(p.maxHp || 100, (p.hp || p.maxHp || 100) + (p.maxHp || 100) * loot.healPct);
      boot.state.set(st);
    }
  }
}

export { LOOT_TABLE, PILL_POOL, ARTIFACT_POOL };
