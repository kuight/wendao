/* 临时验证脚本：模拟 index.html 加载流程，验证 render 是否复用 #cv（不产生双 canvas）并成功绘制世界地图。
 * 运行：node v5/tests/render-canvas-check.mjs
 */
import { installState } from '../core/state/index.js';
import { installWorld } from '../core/world/index.js';
import { installRender } from '../core/render/index.js';

// ---------- 浏览器全局 mock ----------
const _rafQueue = [];
globalThis.requestAnimationFrame = (cb) => { _rafQueue.push(cb); return _rafQueue.length; };
globalThis.cancelAnimationFrame = () => {};
globalThis.performance = globalThis.performance || { now: () => Date.now() };
globalThis.window = {
  devicePixelRatio: 1,
  innerWidth: 800, innerHeight: 600,
  addEventListener: () => {},
  removeEventListener: () => {},
};
globalThis.document = {
  body: { appendChild() {} },
  querySelector: () => null,
};

// ---------- 浏览器 API mock ----------
function makeCtx() {
  const gradient = {
    addColorStop() {},
  };
  const ctx = {
    _fillCount: 0,
    fillStyle: '', strokeStyle: '', lineWidth: 1, font: '', textAlign: '', textBaseline: '',
    globalAlpha: 1,
    setTransform() {}, clearRect() {}, fillRect() {}, beginPath() {}, moveTo() {}, lineTo() {},
    closePath() {}, fill() { this._fillCount++; }, stroke() {}, arc() {}, ellipse() {}, rect() {}, roundRect() {},
    save() {}, restore() {}, clip() {},
    createLinearGradient() { return gradient; },
    createRadialGradient() { return gradient; },
    fillText() {}, strokeText() {},
  };
  return ctx;
}

function makeCanvas(id) {
  const el = {
    id,
    _children: [],
    style: {},
    width: 0, height: 0,
    clientWidth: 800, clientHeight: 480,
    tagName: 'CANVAS',
    getContext() { if (!this._ctx) this._ctx = makeCtx(); return this._ctx; },
    appendChild(c) { this._children.push(c); return c; },
    querySelector() { return null; },
  };
  return el;
}

function makeStage() {
  const cv = makeCanvas('cv');
  const stage = {
    tagName: 'DIV', id: 'stage',
    clientWidth: 780, clientHeight: 470,
    style: {},
    _children: [cv],
    querySelector(sel) {
      if (sel === 'canvas') return this._children.find(c => c.tagName === 'CANVAS') || null;
      return null;
    },
    appendChild(c) { this._children.push(c); return c; },
  };
  return { stage, cv };
}

// ---------- 装配 boot ----------
const stateData = { version: 'v5.0', player: null, world: null, scene: null, settings: {}, flags: {}, saveMeta: null, _dirty: false };
const boot = {
  started: false, modules: new Map(), listeners: {},
  log: (...a) => console.log('[mock]', ...a),
  on() { return boot; }, emit() { return boot; },
  bus: { on() { return boot; }, emit() { return boot; } },
  register() { return boot; },
  state: { get: () => stateData, set: (p) => Object.assign(stateData, p) },
};

installState(boot);
installWorld(boot);
installRender(boot);

// ---------- 模拟 index.html 的装配 ----------
const { stage, cv } = makeStage();

// 模拟 demo 脚本先 getContext('2d')
const demoCtx = cv.getContext('2d');
const demoFitCtxTransform = 'set by demo fitCanvas';
cv.width = 780; cv.height = 470;

// 调用 Boot.start 里的 render.init(stage)
const api = boot.render.init(stage);

console.log('=== 验证结果 ===');
console.log('render 初始化返回 API:', !!api);
console.log('stage 内 canvas 数量:', stage._children.filter(c => c.tagName === 'CANVAS').length, '(应为 1)');
const usedCanvas = stage._children.find(c => c.tagName === 'CANVAS');
console.log('render 使用的 canvas 是 #cv:', usedCanvas === cv, '(应 true)');
console.log('render 的 canvas 对象:', api.engine ? '有 engine' : '无 engine');
console.log('render engine 是否持有 cv:', api.engine && api.engine.ctx === demoCtx, '(应 true 同一 context)');

// ---------- 生成世界地图 + 相机定位（模拟 index.html 后半段） ----------
if (boot.world && boot.world.genMap) {
  boot.world.genMap({ width: 40, height: 40, seed: 2026 });
  console.log('世界地图已生成; map 尺寸:', boot.world.getTile ? 'getTile 存在' : '无');
}
const st = boot.state.get();
console.log('玩家初始位置:', st.player ? JSON.stringify(st.player.position) : '无');
if (boot.render && boot.render.camera && st.player && st.player.position) {
  boot.render.camera.set(st.player.position.x, st.player.position.y);
  console.log('相机已定位到:', JSON.stringify(boot.render.camera.get()));
}

// ---------- 模拟 demo 脚本的 isStubDraw 判断（真实浏览器 index.html 逻辑） ----------
const isStubDraw = !(boot.render && boot.render.draw && boot.render.draw.name);
console.log('isStubDraw (demo 判断):', isStubDraw, '(应为 false，否则 demoDraw 接管画布覆盖世界地图)');

// ---------- 仪器：统计瓦片/精灵绘制 ----------
let tileDrawCount = 0;
const origDrawTile = api.engine && api.engine.drawTile;
if (origDrawTile) api.engine.drawTile = function () { tileDrawCount++; return origDrawTile.apply(this, arguments); };
let spriteDrawCount = 0;
const origDrawSprite = api.engine && api.engine.drawSprite;
if (origDrawSprite) api.engine.drawSprite = function () { spriteDrawCount++; return origDrawSprite.apply(this, arguments); };

// ---------- 跑多帧 draw（模拟 main-loop 每帧调用 boot.render.draw，即真实世界地图渲染） ----------
try {
  for (let f = 0; f < 120; f++) {
    const ctx2 = { dt: 0.016, now: f * 16, paused: false, frame: f };
    if (typeof boot.render.draw === 'function') boot.render.draw(ctx2);
  }
  console.log('main-loop 调用 boot.render.draw 120 帧: 无异常');
} catch (e) {
  console.log('draw 异常:', e && e.stack || e);
}

// ---------- 验证视野内确有瓦片与玩家 ----------
const cam = api.camera.get();
const ox = 780 / 2 - cam.x;   // stage.clientWidth=780
const oy = 470 / 2 - cam.y + api.engine.tileH; // stage.clientHeight=470, tileH=24
const playerScreen = api.engine.gridToScreen(20, 20);
const psx = playerScreen.x + ox, psy = playerScreen.y + oy;
console.log('相机像素坐标 (x,y):', Math.round(cam.x), Math.round(cam.y));
console.log('玩家屏幕位置 (x,y):', Math.round(psx), Math.round(psy), '(应在 0~780 x 0~470 可视区)');
console.log('可见瓦片数量 drawTile 调用:', tileDrawCount, '(>0 说明地图真的画出来了)');
console.log('精灵绘制 drawSprite 调用:', spriteDrawCount, '(玩家/NPC 画了几次)');
console.log('=== 完成 ===');