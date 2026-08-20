/* ============================================================
 * 《问道修仙学院》v5 · bootstrap/loader.js
 * 模块加载与依赖解析：按清单动态 import 各 core/ui 模块，
 * 缺失的模块以降级 stub 挂载，保证 bootstrap 主循环可跑。
 * 路径相对本文件位置（v5/bootstrap/）解析。
 * ============================================================ */
export function installLoader(boot) {
  'use strict';

  // 模块清单：name + 动态 import 路径 + 导出的 install 函数名
  // 顺序即依赖顺序（state/save/world/render/input 前置，其余并行亦可）
  const MANIFEST = [
    { name: 'state',     path: '../core/state/index.js',      install: 'installState' },
    { name: 'save',      path: '../core/save/index.js',       install: 'installSave' },
    { name: 'world',     path: '../core/world/index.js',      install: 'installWorld' },
    { name: 'render',    path: '../core/render/index.js',     install: 'installRender' },
    { name: 'input',     path: '../core/input/index.js',      install: 'installInput' },
    { name: 'battle',    path: '../core/battle/index.js',     install: 'installBattle' },
    { name: 'economy',   path: '../core/economy/index.js',    install: 'installEconomy' },
    { name: 'knowledge', path: '../core/knowledge/index.js',  install: 'installKnowledge' },
    { name: 'audio',     path: '../core/audio/index.js',      install: 'installAudio' },
    { name: 'effects',   path: '../core/effects/index.js',    install: 'installEffects' },
    { name: 'ui',        path: '../ui/index.js',              install: 'installUI' }
  ];

  // 每个模块在 boot 上的命名空间挂载键（即 boot[name]）
  const NAMESPACES = {
    state: 'state', save: 'save', world: 'world', render: 'render',
    input: 'input', battle: 'battle', economy: 'economy',
    knowledge: 'knowledge', audio: 'audio', effects: 'effects', ui: 'ui'
  };

  // 各模块预期接口键（用于降级 stub 与冒烟校验）
  const IFACES = {
    state:     ['get', 'set'],
    save:      ['load', 'save', 'migrate'],
    world:     ['genMap', 'moveTo', 'getTile', 'enterScene', 'unlockZone'],
    render:    ['init', 'drawScene', 'camera', 'transition'],
    input:     ['on', 'onTap', 'onKey'],
    battle:    ['start', 'doAnswer', 'attack', 'cast'],
    economy:   ['addGold', 'spendGold', 'addItem', 'useItem'],
    knowledge: ['getQuestion', 'recordAnswer', 'addChapterProgress'],
    audio:     ['play', 'stop', 'setVolume', 'preload'],
    effects:   ['burst', 'shake', 'flash', 'combo', 'floatText'],
    ui:        ['show', 'hide', 'toast', 'hud']
  };

  const loaded = new Map(); // name -> { status, ns, error? }
  const stubs = new Map();  // name -> stub def

  function noop() {}

  // 生成降级 stub：暴露预期接口键为无害空实现
  function makeStub(name) {
    const ns = {};
    (IFACES[name] || []).forEach(function (key) {
      if (key === 'camera')      ns.camera = { set: noop };
      else if (key === 'hud')    ns.hud = { update: noop };
      else ns[key] = noop;
    });
    return ns;
  }

  // 单模块加载：动态 import → install；失败则降级 stub
  async function loadOne(name) {
    if (loaded.has(name)) return loaded.get(name);
    const m = MANIFEST.find(function (x) { return x.name === name; });
    if (!m) {
      const r = { status: 'unknown', ns: null };
      loaded.set(name, r);
      return r;
    }
    const mountKey = NAMESPACES[name] || name;
    try {
      const mod = await import(m.path);
      const installer = mod[m.install];
      if (typeof installer !== 'function') throw new Error('缺少 install 函数 ' + m.install);
      installer(boot);
      const r = { status: 'loaded', ns: boot[mountKey] || makeStub(name) };
      loaded.set(name, r);
      return r;
    } catch (e) {
      const stubDef = makeStub(name);
      boot[mountKey] = stubDef;
      stubs.set(name, stubDef);
      const r = { status: 'stubbed', ns: stubDef, error: (e && e.message) || String(e) };
      loaded.set(name, r);
      return r;
    }
  }

  // 全量加载：按清单顺序（依赖顺序）依次加载
  async function loadAll(onProgress) {
    const report = [];
    for (let i = 0; i < MANIFEST.length; i++) {
      const m = MANIFEST[i];
      const r = await loadOne(m.name);
      report.push({ name: m.name, status: r.status, error: r.error || null });
      if (typeof onProgress === 'function') onProgress(m.name, r);
    }
    return { report: report, loaded: new Map(loaded), stubs: new Map(stubs) };
  }

  boot.loader = {
    loadOne: loadOne,
    loadAll: loadAll,
    get manifest() { return MANIFEST.slice(); },
    get loaded() { return new Map(loaded); },
    get stubs() { return new Map(stubs); },
    interfaces: IFACES
  };
  return boot.loader;
}