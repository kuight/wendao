/* ============================================================
 * 《问道修仙学院》v5 · core/battle/engine.js
 * 战斗核心逻辑：伤害计算、速度、暴击、buff（纯函数，无副作用）
 *
 * 说明：本模块为纯计算层，供 battle/index.js 状态机调用。
 * 规则沿用 v4 battleCast/battleTakeHit 的基调（atk/def/暴击/连击加成），
 * 并扩展 buff（增伤/减伤/中毒/护盾/虚弱）与速度先手判定。
 * ============================================================ */
(function (global) {
  'use strict';

  // ---- 基础参数默认值 ----
  const DEFAULTS = {
    atk: 10,      // 攻击
    def: 5,       // 防御
    maxHp: 100,   // 生命上限
    maxMp: 20,    // 法力上限
    speed: 10,    // 速度（先手判定）
    crit: 0.08,   // 暴击率
    critMul: 2,   // 暴击倍率
    level: 1
  };

  // 钳制工具
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  // 随机
  function roll(p) { return Math.random() < p; }

  /* 归一化单位属性：缺省字段补默认值 */
  function unit(u) {
    u = u || {};
    const out = {};
    Object.keys(DEFAULTS).forEach(k => { out[k] = (u[k] === undefined ? DEFAULTS[k] : u[k]); });
    out.hp = (u.hp === undefined ? out.maxHp : u.hp);
    out.mp = (u.mp === undefined ? out.maxMp : u.mp);
    out.buffs = u.buffs || {};        // 单位 buff 层表（持久，回合结算）
    out.status = u.status || {};      // 临时状态（本轮伤害加成等，每回合清）
    return out;
  }

  /* 攻击方 buff 增量总和（增伤%） */
  function atkBonus(buffs) {
    let b = 0;
    buffs = buffs || {};
    if (buffs.fury) b += buffs.fury * 0.08;      // 狂暴：每层 +8% 伤害
    if (buffs.empower) b += buffs.empower * 0.12; // 强化：每层 +12% 伤害
    if (buffs.poisoned) b += 0;                    // 中毒不减自身输出（见结算）
    return b;
  }

  /* 防御方减伤% */
  function defReduction(def) {
    // 与 v4 一致的衰减公式（防御越高减免越大但递减）
    return clamp(def / (def + 60), 0, 0.7);
  }

  /* 防御方 buff 减伤增量% */
  function defBonus(buffs) {
    let b = 0;
    buffs = buffs || {};
    if (buffs.ward) b += buffs.ward * 0.06;   // 护盾：每层 +6% 减伤
    if (buffs.weaken) b += buffs.weaken * 0.05; // 虚弱（对方）：每层 +5% 我方减伤
    return b;
  }

  /* 计算单次物理/法术伤害 */
  function calcDamage({ atker, target, skillMul, critBoost, flatBonus }) {
    atker = unit(atker);
    target = unit(target);
    const skillMulVal = skillMul || 1;
    const critBoostVal = critBoost || 0;
    const flatBonusVal = flatBonus || 0;

    // 连击加成（调用方传入，已并入 flatBonus 或在此用 skillMul 表达）
    const isCrit = roll((atker.crit || 0) + critBoostVal);
    const critMul = isCrit ? (atker.critMul || 2) : 1;

    // 增伤（攻方 buff）+ 减伤（防方）
    let dmg = (atker.atk || 0) * skillMulVal
      * (1 + atkBonus(atker.buffs))
      * (1 - defReduction(target.def || 0))
      * (1 - defBonus(target.buffs))
      + flatBonusVal | 0;

    dmg = Math.max(1, Math.floor(dmg * critMul));
    return { dmg, crit: isCrit, raw: dmg / (critMul || 1) };
  }

  /* 计算先手：返回 {attacker, defender}（更高速度先手；并列抛硬币） */
  function speedOrder(ua, ub) {
    ua = unit(ua); ub = unit(ub);
    const sa = (ua.speed || 0) + (ua.status.spdBonus || 0);
    const sb = (ub.speed || 0) + (ub.status.spdBonus || 0);
    if (sa === sb) return roll(0.5) ? [ua, ub] : [ub, ua];
    return sa > sb ? [ua, ub] : [ub, ua];
  }

  /* 回合末 buff/状态结算：返回单位变化对象 {hpDelta, buffs, status, msg[]} */
  function tickStatus(u) {
    u = unit(u);
    const hpDelta = 0;
    const msgs = [];
    const buffs = Object.assign({}, u.buffs);
    const status = Object.assign({}, u.status);

    // 中毒：每层每回合 -3% 最大生命
    if (buffs.poisoned) {
      const dot = Math.max(1, Math.floor(u.maxHp * 0.03 * buffs.poisoned));
      u.hp = Math.max(0, u.hp - dot);
      buffs.poisoned = Math.max(0, buffs.poisoned - 1); // 持续衰减
      msgs.push(`中毒 -${dot}`);
    }
    // 狂暴/强化/护盾：持续回合数-1
    ['fury', 'empower', 'ward'].forEach(k => {
      if (buffs[k]) { buffs[k]--; if (buffs[k] <= 0) delete buffs[k]; }
    });

    return { hpDelta, buffs, status, msgs };
  }

  /* 命中回避：默认必中，预留闪避字段 */
  function hitChance(atker, target, base) {
    const hit = (base === undefined ? 1 : base) - ((target.status.dodge) || 0);
    return clamp(hit, 0.05, 1);
  }

  global.BattleEngine = {
    DEFAULT: DEFAULTS,
    clamp, roll,
    unit,
    calcDamage,
    speedOrder,
    tickStatus,
    hitChance,
    atkBonus,
    defBonus,
    defReduction
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);