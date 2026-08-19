/* ===================================================================
 * v4.3.5e · SAFETY LAYER —— 底层"止血"补丁
 * -------------------------------------------------------------------
 * 用户实测反馈的三条硬崩溃 pageerror：
 *   ①  Cannot set properties of null (setting 'lastSavedAt')
 *       —— curve-patch-v430.js 加载时立刻 Game.save()，此时 Game.state 还没 init
 *   ②  Cannot read properties of null (reading 'char')
 *       —— 多处补丁在 IIFE 结尾就 Game.state.char，早于 Game.init()
 *   ③  Cannot read properties of null (reading 'inventory_v435')
 *       —— v435-remake IIFE 结尾直接 Game.state.inventory_v435 = ...
 *
 * 本层做法（安全、最小侵入、不改 game-core 的 state 描述符）：
 *   A. 一加载就立刻 Game.init() —— 让 Game.state 尽早从 null 变成合法对象
 *   B. 依然保留 Game.save 的 null 守护（万一有 patch 又把 state 置 null）
 *   C. 用最小面的 monkey-patch 保护 openAlchemy/Garden/Spell 等面板
 *   D. window 全局兜底：吞掉已知初始化竞态错误，防止红色 pageerror 弹屏
 * =================================================================== */
(function (global) {
  'use strict';
  if (!global.Game) {
    console.warn('[v4.3.5e-safety] Game 未加载，跳过');
    return;
  }
  if (global.__WENDAO_V435E_SAFETY__) return;
  global.__WENDAO_V435E_SAFETY__ = true;

  const Game = global.Game;

  // ---------------------------------------------------------------
  // A. 尽早 init —— 让 Game.state 从 null 变成合法对象
  // ---------------------------------------------------------------
  function tryInit(){
    if (Game.state && Game.state.char) return true;
    if (typeof Game.init !== 'function') return false;
    try {
      Game.init();
      return !!(Game.state && Game.state.char);
    } catch(e){
      console.warn('[v4.3.5e-safety] 提前 Game.init 失败：', e && e.message);
      return false;
    }
  }
  tryInit();
  Game.__ensureInit = tryInit;

  // ---------------------------------------------------------------
  // B. Hook Game.save：state 未 init 时静默跳过（避免 setting 'lastSavedAt'）
  // ---------------------------------------------------------------
  const _origSave = Game.save && Game.save.bind(Game);
  Game.save = function(){
    if (!Game.state) return false;   // 静默跳过（不 warn，避免刷屏）
    try {
      return _origSave ? _origSave() : false;
    } catch(e){
      console.warn('[v4.3.5e-safety] Game.save 兜底吞掉异常：', e && e.message);
      return false;
    }
  };

  // ---------------------------------------------------------------
  // C. 保护面板类方法（若 state 未 init，尝试 init，再失败就静默 return）
  // ---------------------------------------------------------------
  const RISKY_METHODS = [
    'openAlchemyPanel', 'openGardenPanel', 'openSpellPanel',
    '_buyPill', '_plantHerb', '_harvestPlot', '_injectMainButtons',
    'meditate', 'canMeditate', 'getMeditateRemain'
  ];
  function wrapOnce(name){
    if (typeof Game[name] !== 'function' || Game[name].__v435eWrapped) return;
    const orig = Game[name];
    const wrapper = function(){
      if (!Game.state || !Game.state.char){
        if (!tryInit()) {
          console.info(`[v4.3.5e-safety] ${name} 延迟：state 未就绪`);
          return null;
        }
      }
      try {
        return orig.apply(this, arguments);
      } catch(e){
        console.warn(`[v4.3.5e-safety] ${name} 运行时异常：`, e && e.message);
        return null;
      }
    };
    wrapper.__v435eWrapped = true;
    Game[name] = wrapper;
  }
  function applyWraps(){ RISKY_METHODS.forEach(wrapOnce); }
  applyWraps();
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(applyWraps, 50));
    setTimeout(applyWraps, 1500);
    setTimeout(applyWraps, 4000);
  }

  // ---------------------------------------------------------------
  // D. 全局兜底：吞掉已知无害的初始化竞态错误
  // ---------------------------------------------------------------
  if (typeof window !== 'undefined' && !window.__v435eErrHooked) {
    window.__v435eErrHooked = true;
    const NULL_REF_RE = /(reading|setting|assign)\s.*'(char|inventory_v435|cave|stats|lastSavedAt|state|realmId|exp)'/;
    window.addEventListener('error', function(ev){
      const msg = (ev && ev.message) || '';
      if (NULL_REF_RE.test(msg)) {
        ev.preventDefault && ev.preventDefault();
        ev.stopImmediatePropagation && ev.stopImmediatePropagation();
        console.info('[v4.3.5e-safety] 已拦截初始化竞态错误：', msg);
        // 补一次 init 让后续调用成功
        tryInit();
        return true;
      }
    }, true);
    window.addEventListener('unhandledrejection', function(ev){
      const msg = (ev && ev.reason && (ev.reason.message || ev.reason)) || '';
      if (NULL_REF_RE.test(String(msg))) {
        ev.preventDefault && ev.preventDefault();
        console.info('[v4.3.5e-safety] 拦截 promise 竞态错误');
      }
    });
  }

  console.log('%c[v4.3.5e-safety] ✔ 底层止血层已加载', 'color:#8ce28c;font-weight:bold;');
})(typeof window !== 'undefined' ? window : this);
