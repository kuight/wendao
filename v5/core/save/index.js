/* ============================================================
 * 《问道修仙学院》v5 · core/save/index.js
 * 存档系统：v2/v3 迁移、localStorage 持久化、导入导出
 * 兼容 v4 的 wendao_save_v2 单键，向 v5 状态机迁移
 * ============================================================ */
export function installSave(boot) {
  'use strict';
  const STORAGE_KEY = 'wendao_save_v2';   // 沿用 v4 单键，避免破坏老档
  const LEGACY_PREFIX = 'wendao_save_v1_legacy_';

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { console.error('[v5/save] 读取存档失败', e); return null; }
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      // 一次性备份旧键（仅在首次迁移时）
      const legacy = localStorage.getItem(LEGACY_PREFIX + '*');
      if (!legacy) {
        localStorage.setItem(LEGACY_PREFIX + Date.now(), raw || '{}');
      }
      return true;
    } catch (e) { console.error('[v5/save] 写档失败', e); return false; }
  }

  // v4 -> v5 状态迁移：把 v4 玩家属性平铺成 v5 state 结构
  function migrate(oldSave) {
    if (!oldSave) return null;
    return {
      version: 'v5.0',
      player: oldSave.player || { realm: 'lianqi', level: 1, hp: 100, mp: 50, xp: 0, inventory: {} },
      world: { unlocked: [], zones: {} },
      scene: null,
      settings: oldSave.settings || {},
      flags: oldSave.flags || {},
      saveMeta: { migratedFrom: 'v4.4.0', migratedAt: Date.now() }
    };
  }

  boot.save = { load, save, migrate };
  boot.register('save', { load, save, migrate });
  return boot.save;
}