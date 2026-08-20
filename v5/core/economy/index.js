/* ============================================================
 * 《问道修仙学院》v5 · core/economy/index.js
 * 经济系统：灵石货币、道具/装备、炼丹、灵植资源。
 * 挂载到 boot.economy：{ addGold, spendGold, addItem, useItem, getBalance, canAfford }
 * ============================================================ */
export function installEconomy(boot) {
  'use strict';

  const log = (...a) => (boot.log ? boot.log('[v5/economy]', ...a) : console.log('[v5/economy]', ...a));

  // 从全局 state 读取玩家资源
  function state() { return boot.state && boot.state.get ? boot.state.get() : { player: {} }; }
  function save() {
    if (boot.state && boot.state.set) { boot.state.set({ _dirty: true }); }
    if (boot.save && boot.save.save) { boot.save.save(state()); }
  }

  function ensureInv() {
    const st = state();
    if (!st.player.inventory) st.player.inventory = {};
    if (st.player.gold === undefined) st.player.gold = 0;
    return st.player;
  }

  function getBalance() { return ensureInv().gold || 0; }

  function addGold(amount) {
    const p = ensureInv();
    p.gold = (p.gold || 0) + amount;
    boot.bus && boot.bus.emit('economy:gold', { delta: amount, total: p.gold });
    save();
    return p.gold;
  }

  function spendGold(amount) {
    const p = ensureInv();
    if ((p.gold || 0) < amount) return false;
    p.gold -= amount;
    boot.bus && boot.bus.emit('economy:gold', { delta: -amount, total: p.gold });
    save();
    return true;
  }

  function canAfford(amount) { return (ensureInv().gold || 0) >= amount; }

  function addItem(id, count) {
    const p = ensureInv();
    count = count || 1;
    p.inventory[id] = (p.inventory[id] || 0) + count;
    boot.bus && boot.bus.emit('economy:item', { id, delta: count, total: p.inventory[id] });
    save();
    return p.inventory[id];
  }

  function useItem(id, count) {
    const p = ensureInv();
    count = count || 1;
    if ((p.inventory[id] || 0) < count) return false;
    p.inventory[id] -= count;
    if (p.inventory[id] <= 0) delete p.inventory[id];
    boot.bus && boot.bus.emit('economy:item', { id, delta: -count, total: p.inventory[id] || 0 });
    save();
    return true;
  }

  function getInventory() { return ensureInv().inventory; }

  // 炼丹：消耗材料产出丹药
  const PILL_RECIPES = {
    '灵丹':   { cost: { '灵草': 3 }, effect: { hp: 50 } },
    '聚气丹': { cost: { '灵草': 2, '灵果': 1 }, effect: { xp: 30 } },
    '回元丹': { cost: { '灵果': 2 }, effect: { mp: 30 } },
  };
  function alchemize(pillId) {
    const recipe = PILL_RECIPES[pillId];
    if (!recipe) return { ok: false, reason: '未知丹方' };
    const inv = ensureInv().inventory;
    for (const mat in recipe.cost) {
      if ((inv[mat] || 0) < recipe.cost[mat]) return { ok: false, reason: '材料不足: ' + mat };
    }
    for (const mat in recipe.cost) useItem(mat, recipe.cost[mat]);
    addItem(pillId, 1);
    boot.bus && boot.bus.emit('economy:alchemize', { pill: pillId });
    log('炼成', pillId);
    return { ok: true, pill: pillId, recipe };
  }

  const economy = {
    getBalance, addGold, spendGold, canAfford,
    addItem, useItem, getInventory,
    alchemize,
    recipes: () => PILL_RECIPES
  };

  boot.economy = economy;
  boot.register('economy', economy);
  return economy;
}