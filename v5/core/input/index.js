/* ============================================================
 * 《问道修仙学院》v5 · core/input/index.js
 * 统一输入系统：键盘 / 触摸 / 鼠标 映射为语义动作。
 * 挂载到 boot.input：{ on, onTap, onKey, poll }
 * 方向映射：WASD + 方向键 = 移动，E/空格 = 交互，P = 暂停，Esc = 返回
 * ============================================================ */
export function installInput(boot) {
  'use strict';

  // 语义动作表：物理键 -> 语义动作
  const KEYMAP = {
    ArrowUp: 'up', 'w': 'up', 'W': 'up',
    ArrowDown: 'down', 's': 'down', 'S': 'down',
    ArrowLeft: 'left', 'a': 'left', 'A': 'left',
    ArrowRight: 'right', 'd': 'right', 'D': 'right',
    'e': 'interact', 'E': 'interact', ' ': 'interact',
    'p': 'pause', 'P': 'pause',
    'Escape': 'back', 'Esc': 'back'
  };

  // 按下/抬起状态
  const pressed = {};      // 当前按住的语义动作
  const justPressed = {};  // 本帧新按下的语义动作
  const taps = [];         // 触摸/点击队列（坐标）
  const keyHandlers = {};  // 语义动作监听器
  const tapHandlers = [];

  let attached = false;

  function toAction(key) { return KEYMAP[key] || null; }

  function keydown(e) {
    const act = toAction(e.key);
    if (!act) return;
    e.preventDefault();
    if (!pressed[act]) justPressed[act] = true;
    pressed[act] = true;
    emit(act);
  }
  function keyup(e) {
    const act = toAction(e.key);
    if (act) { pressed[act] = false; }
  }
  function pointerdown(e) {
    taps.push({ x: e.clientX, y: e.clientY, time: performance.now() });
    taps.forEach(cb => cb({ x: e.clientX, y: e.clientY }));
  }

  function emit(act) {
    const list = keyHandlers[act];
    if (list) list.slice().forEach(fn => { try { fn(); } catch (err) { if (boot.log) boot.log('[v5/input]', err); } });
  }

  // 挂载 DOM 监听（浏览器环境）
  function attach() {
    if (attached || typeof window === 'undefined') return;
    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', keyup);
    window.addEventListener('pointerdown', pointerdown);
    attached = true;
  }
  function detach() {
    if (!attached) return;
    window.removeEventListener('keydown', keydown);
    window.removeEventListener('keyup', keyup);
    window.removeEventListener('pointerdown', pointerdown);
    attached = false;
  }

  // 每帧调用：消费 justPressed，供主循环读动作
  function poll(ctx) {
    // justPressed 在 poll 末尾清空（一次性）
  }
  function isDown(act) { return !!pressed[act]; }
  function isJustPressed(act) { const v = !!justPressed[act]; justPressed[act] = false; return v; }
  function consumeTap() { return taps.length ? taps.shift() : null; }

  const input = {
    on(act, fn) { (keyHandlers[act] ||= []).push(fn); return input; },
    onTap(cb) { tapHandlers.push(cb); return input; },
    onKey(act, fn) { return input.on(act, fn); },
    poll,
    isDown,
    isJustPressed,
    consumeTap,
    attach,
    detach
  };

  boot.input = input;
  boot.register('input', input);
  return input;
}