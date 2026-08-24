/* ============================================================
 * 《问道修仙学院》v5 · bootstrap/main-loop.js
 * 游戏主循环：requestAnimationFrame 驱动 输入/战斗/特效/渲染。
 * 特性：目标帧率节流、暂停/恢复、错误隔离、运行统计。
 * 挂载到 boot.loop。
 * ============================================================ */
export function startMainLoop(boot) {
  'use strict';

  let rafId = null;
  let last = 0;                  // 上一帧时间戳
  let running = false;
  let paused = false;
  let frames = 0;                // 累计渲染帧数
  let errors = 0;                // 累计捕获的帧错误数
  const FIXED_DT = 1000 / 60;    // 目标帧间隔（约 60fps）

  // 每帧调用各子系统更新；单个子系统抛错不中断整个循环
  function step(ctx) {
    const systems = [
      ['input', 'poll'],
      ['world', 'update'],
      ['battle', 'update'],
      ['effects', 'update'],
      ['render', 'draw']
    ];
    for (let i = 0; i < systems.length; i++) {
      const name = systems[i][0];
      const method = systems[i][1];
      const sys = boot[name];
      if (sys && typeof sys[method] === 'function') {
        try {
          sys[method](ctx);
        } catch (e) {
          errors++;
          if (boot.log) boot.log('[v5/main-loop] ' + name + '.' + method + ' 帧内异常', e);
        }
      }
    }
  }

  function frame(now) {
    if (!running) return;
    // 帧率节流：不足一个固定间隔则跳过，避免高刷屏过耗
    const elapsed = now - last;
    if (elapsed < FIXED_DT) {
      rafId = requestAnimationFrame(frame);
      return;
    }
    // 记录帧首时间并对齐，避免累积漂移
    last = now - (elapsed % FIXED_DT);
    frames++;

    const ctx = { dt: elapsed / 1000, now: now, paused: paused, frame: frames };

    // 暂停时保留画面、不驱动更新，但保持 RAF 以响应恢复
    if (!paused) step(ctx);

    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    running = true;
    paused = false;
    last = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    paused = false;
    if (rafId != null) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function pause() { paused = true; }

  function resume() {
    if (!running) return;
    paused = false;
    // 重设 last，避免恢复瞬间产生巨大 dt 造成跳变
    last = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
  }

  function isRunning() { return running; }
  function isPaused() { return paused; }
  function getStats() { return { running: running, paused: paused, frames: frames, errors: errors }; }

  boot.loop = { start: start, stop: stop, pause: pause, resume: resume, isRunning: isRunning, isPaused: isPaused, getStats: getStats };
  return boot.loop;
}