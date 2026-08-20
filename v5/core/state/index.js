/* ============================================================
 * 《问道修仙学院》v5 · core/state/index.js
 * 全局状态机：玩家、世界、场景、存档快照的单一数据源
 * ============================================================ */
export function installState(boot) {
  'use strict';
  // 初始状态：玩家属性、世界进度、当前场景
  const state = {
    version: 'v5.0',
    player: null,      // 玩家（境界/属性/资源/位置）
    world: null,       // 世界生成状态（地图/区块/已解锁区域）
    scene: null,       // 当前场景引用
    settings: {},      // 用户设置（主题/字体/音量）
    flags: {},         // 剧情/事件旗标
    saveMeta: null,    // 存档元信息
    _dirty: false      // 脏标记（触发存档）
  };

  // 获取/修改状态（统一入口，便于状态迁移）
  const getState = () => state;
  const setState = (patch) => { Object.assign(state, patch); state._dirty = true; return state; };

  boot.state = { get: getState, set: setState };
  boot.register('state', { get: getState, set: setState });
  return boot.state;
}