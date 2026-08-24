/* ============================================================
 * 《问道修仙学院》v5 · bootstrap/entry.js
 * 入口引导：boot 对象、模块注册表、事件总线、启动序列。
 * 职责：经 loader 动态加载各 core/ui 模块 → 装配渲染容器 →
 *       启动主循环 → 广播 'ready'。缺失模块自动降级为 stub。
 * ============================================================ */
(function (global) {
  'use strict';

  // ---------- 模块注册表 ----------
  const MODULES = new Map();
  const boot = { started: false, modules: MODULES, listeners: {} };

  boot.register = function (name, def) {
    if (MODULES.has(name)) throw new Error('v5 boot: 模块重复注册 ' + name);
    MODULES.set(name, def);
    return boot;
  };

  // ---------- 事件总线（同时兼容顶层 boot.emit/on 与 boot.bus.*） ----------
  function on(evt, fn) {
    if (!boot.listeners[evt]) boot.listeners[evt] = [];
    boot.listeners[evt].push(fn);
    return boot;
  }
  function emit(evt, data) {
    const list = boot.listeners[evt];
    if (list) list.slice().forEach(function (fn) { try { fn(data); } catch (e) { /* 事件监听器异常不影响总线 */ } });
    return boot;
  }
  boot.on = on;
  boot.emit = emit;
  boot.bus = { on: on, emit: emit };

  // ---------- 统一日志 ----------
  boot.log = function () {
    if (global.console && global.console.log) {
      const args = Array.prototype.slice.call(arguments);
      args.unshift('[v5]');
      global.console.log.apply(global.console, args);
    }
  };

  // ---------- 启动序列 ----------
  // options: { container: HTMLElement | selector, autoLoop: boolean }
  boot.start = async function (options) {
    if (boot.started) return boot;
    boot.started = true;
    options = options || {};
    const report = { modules: [], errors: [] };

    try {
      // 1. 安装加载器（动态 import，内部按依赖顺序解析各模块）
      const loaderMod = await import('./loader.js');
      loaderMod.installLoader(boot);

      // 2. 加载全部模块（缺失的自动 stub，不中断启动）
      const result = await boot.loader.loadAll(function (name, r) {
        report.modules.push({ name: name, status: r.status, error: r.error || null });
        if (r.status === 'stubbed') report.errors.push(name + ': ' + r.error);
      });

      // 3. 挂载输入监听（浏览器环境挂 keydown/keyup；Node 测试环境无 window 自动跳过）
      if (boot.input && typeof boot.input.attach === 'function') {
        try { boot.input.attach(); }
        catch (e) { boot.log('input.attach 失败', e); }
      }

      // 4. 装配渲染容器（若提供）
      if (boot.render && typeof boot.render.init === 'function') {
        const container = resolveContainer(options.container);
        if (container) {
          try { boot.render.init(container); }
          catch (e) { boot.log('render.init 失败', e); report.errors.push('render.init: ' + (e && e.message)); }
        }
      }

      // 5. 装配主循环（始终注册，是否自动启动由 autoLoop 决定）
      const loopMod = await import('./main-loop.js');
      loopMod.startMainLoop(boot);
      if (options.autoLoop !== false && boot.loop) boot.loop.start();

      report.ok = report.errors.length === 0 ? true : report.errors;
      boot.emit('ready', report);
    } catch (err) {
      report.errors.push((err && err.message) || String(err));
      boot.log('启动失败', err);
      boot.emit('error', err);
    }
    boot.report = report;
    return report;
  };

  function resolveContainer(container) {
    if (!container) return null;
    if (typeof container === 'string') {
      return (typeof document !== 'undefined' && document.querySelector) ? document.querySelector(container) : null;
    }
    return container;
  }

  global.Boot = boot;
})(typeof globalThis !== 'undefined' ? globalThis : this);