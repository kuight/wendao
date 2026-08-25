/* ============================================================
 * v5/core/world/dungeon.js
 * 地牢房间生成器 - S1b 核心
 * 生成分支路径的随机房间序列，类型: combat/treasure/boss/rest
 * ============================================================ */
'use strict';

const ROOM_TYPES = {
  COMBAT:   'combat',    // 战斗房（遇知识点怪）
  TREASURE: 'treasure',  // 宝箱房（掉装备/灵石）
  BOSS:     'boss',      // 首领房（章末Boss）
  REST:     'rest',      // 休息房（回血，无怪）
  START:    'start',     // 入口房（安全）
};

// 房间类型概率（按深度调整）
function typeWeights(depth) {
  // depth 0=入口, 1-3=层
  if (depth <= 1) return { combat: 0.55, treasure: 0.25, rest: 0.20, boss: 0 };
  if (depth === 2) return { combat: 0.45, treasure: 0.25, rest: 0.15, boss: 0.15 };
  return { combat: 0.35, treasure: 0.20, rest: 0.10, boss: 0.35 };
}

// 简易确定性伪随机
function rng(seed) {
  let s = seed | 0;
  return () => { s = (s * 1103515245 + 12345) | 0; return (s >>> 0) / 4294967296; };
}

function weightedPick(weights, rand) {
  let r = rand(), sum = 0;
  for (const k in weights) { sum += weights[k]; if (r < sum) return k; }
  return Object.keys(weights)[0];
}

/**
 * 生成一个地牢楼层。
 * @param {object} opts { seed, depth, roomCount }
 * @returns 楼层描述 { depth, rooms, startRoomId }
 */
export function generateFloor(opts = {}) {
  const depth = opts.depth || 1;
  const count = opts.roomCount || (5 + depth * 2);  // 5/7/9 rooms per floor
  const seed = opts.seed || (Date.now() >>> 0);
  const rand = rng(seed);
  const weights = typeWeights(depth);
  const rooms = [];

  // 1) 入口房
  rooms.push({
    id: 'room_0',
    type: ROOM_TYPES.START,
    x: 0, y: 0,
    cleared: true,
    connections: [],
  });

  // 2) 分支结构：主路径 + 可选支路
  const mainLen = Math.max(3, Math.floor(count * 0.65));   // 主路长度
  const branchLen = count - mainLen;                        // 支路长度
  let lastMainId = 'room_0';

  // 主路径
  for (let i = 0; i < mainLen; i++) {
    const id = 'room_' + (rooms.length);
    const isLast = (i === mainLen - 1);
    const type = isLast ? ROOM_TYPES.BOSS : weightedPick(weights, rand);
    const r = { id, type, x: i + 1, y: 0, cleared: false, connections: [lastMainId], enemy: null, loot: null };
    if (type === ROOM_TYPES.COMBAT || type === ROOM_TYPES.BOSS) {
      r.enemy = { kind: type === ROOM_TYPES.BOSS ? 'boss_ram_falcon_pendulum' : 'ram', difficulty: depth >= 2 ? 'hard' : 'easy' };
    }
    if (type === ROOM_TYPES.TREASURE) {
      r.loot = { gold: 20 + depth * 15, itemChance: 0.3 + depth * 0.1 };
    }
    rooms.push(r);
    // 双向连接
    const prev = rooms.find(rr => rr.id === lastMainId);
    if (prev) prev.connections.push(id);
    lastMainId = id;
  }

  // 支路（从主路径中随机一点分叉）
  if (branchLen > 0) {
    const forkIdx = 1 + Math.floor(rand() * (mainLen - 2));  // 在主路径中间分叉
    const forkRoom = rooms.find(r => r.x === forkIdx && r.y === 0);
    let lastBranchId = forkRoom ? forkRoom.id : lastMainId;
    for (let i = 0; i < branchLen; i++) {
      const id = 'room_' + (rooms.length);
      const type = weightedPick(weights, rand);
      const r = { id, type, x: forkIdx + i + 1, y: 1, cleared: false, connections: [lastBranchId], enemy: null, loot: null };
      if (type === ROOM_TYPES.COMBAT) {
        r.enemy = { kind: 'falcon', difficulty: depth >= 2 ? 'hard' : 'easy' };
      }
      if (type === ROOM_TYPES.TREASURE) {
        r.loot = { gold: 15 + depth * 10, itemChance: 0.2 };
      }
      rooms.push(r);
      const prevBr = rooms.find(rr => rr.id === lastBranchId);
      if (prevBr) prevBr.connections.push(id);
      lastBranchId = id;
    }
  }

  return {
    depth,
    seed,
    rooms,
    startRoomId: 'room_0',
    bossRoomId: lastMainId,
  };
}

/**
 * 获取当前房间的遭遇配置（供 battle.startEncounter 使用）。
 */
export function roomEncounter(room) {
  if (!room || !room.enemy) return null;
  // 映射 kind 到 M1 怪物定义
  const map = {
    ram: { kind: 'ram', difficulty: room.enemy.difficulty || 'easy' },
    falcon: { kind: 'falcon', difficulty: room.enemy.difficulty || 'easy' },
    pendulum: { kind: 'pendulum', difficulty: room.enemy.difficulty || 'easy' },
    boss_ram_falcon_pendulum: { kind: 'ram', difficulty: 'hard' },   // Boss 暂用 ram
  };
  return map[room.enemy.kind] || map.ram;
}

export { ROOM_TYPES, rng, weightedPick };
