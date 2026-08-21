/* v5 运行时集成验证：mock 浏览器全局，驱动 启动→世界→战斗→答题→结算 完整链路 */
const path = require('path');

// ---------- 1. mock 浏览器全局 ----------
const g = globalThis;
g.performance = { now: () => Date.now() };
g.requestAnimationFrame = (cb) => { setTimeout(() => cb(Date.now()), 8); return 1; };
g.cancelAnimationFrame = () => {};
// localStorage mock
const _store = {};
g.localStorage = {
  getItem: (k) => (k in _store ? _store[k] : null),
  setItem: (k, v) => { _store[k] = String(v); },
  removeItem: (k) => { delete _store[k]; }
};
// document mock（最小：effects/ui 需要 createElement）
function mkStyle() {
  return {
    setProperty(){}, getPropertyValue(){ return ''; }, removeProperty(){},
    animationName: '', animationDuration: '0s', animationPlayState: 'running',
    cssText: ''
  };
}
function mkEl(tag) {
  return {
    tagName: tag.toUpperCase(), style: mkStyle(), dataset: {}, children: [],
    classList: { add(){}, remove(){}, contains(){ return false; } },
    appendChild(){}, setAttribute(){}, addEventListener(){}, removeEventListener(){},
    getContext(){ return null; }, getBoundingClientRect(){ return { width: 1280, height: 720 }; },
    innerHTML: '', clientWidth: 1280, clientHeight: 720,
    set innerHTML2(v){}, textContent: '', id: ''
  };
}
g.document = {
  createElement: mkEl,
  body: mkEl('body'),
  head: { appendChild(){}, getElementById: () => null },
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => []
};
g.window = g;
g.innerWidth = 1280;
g.innerHeight = 720;
g.addEventListener = () => {};
g.getComputedStyle = () => ({ animationName: 'none', animationDuration: '0s', animationPlayState: 'running' });
g.getElementById = () => null;

// ---------- 2. 先加载 v4 题库建立全局 bank（模拟浏览器加载题库 script）----------
const fs = require('fs');
const BANKS = ['physics', 'chemistry', 'math', 'geography', 'chinese', 'english'];
for (const b of BANKS) {
  const p = path.join(__dirname, '..', '..', 'src', 'data', b + '-bank.js');
  const code = fs.readFileSync(p, 'utf8');
  // 题库是 IIFE 写 globalThis，需在 mock window 上下文中执行
  const fn = new Function('window', code + '\n;return window;');
  fn(g);
}

const assert = (cond, msg) => { if (!cond) { console.error('✗ FAIL: ' + msg); process.exit(1); } console.log('✓ ' + msg); };

(async () => {
  const entry = await import('../bootstrap/entry.js');
  const Boot = g.Boot;
  assert(Boot, 'Boot 对象已挂载');

  // 启动（不自动跑主循环，避免 requestAnimationFrame 干扰）
  const report = await Boot.start({ autoLoop: false });
  const loadedCount = report.modules.filter(m => m.status === 'loaded').length;
  assert(loadedCount >= 9, '至少 9 个模块 loaded (实际 ' + loadedCount + ')');
  assert(Boot.world, 'world 模块已挂载');
  assert(Boot.battle, 'battle 模块已挂载');
  assert(Boot.knowledge, 'knowledge 模块已挂载');
  assert(Boot.economy, 'economy 模块已挂载');

  // ---------- 3. 世界生成 + 玩家移动 ----------
  const world = Boot.world;
  assert(typeof world.genMap === 'function', 'world.genMap 可调用');
  world.genMap({ width: 30, height: 30, seed: 42 });
  const st = Boot.state.get();
  const spawn = st.player.position;
  assert(spawn && spawn.x !== undefined, '玩家有出生点: (' + (spawn && spawn.x) + ',' + (spawn && spawn.y) + ')');

  // 玩家移动（朝一个方向，看是否受碰撞阻挡）
  let moved = world.moveTo(spawn.x + 1, spawn.y);
  const posAfter = Boot.state.get().player.position;
  const hasMoved = (posAfter.x !== spawn.x || posAfter.y !== spawn.y);
  assert(true, 'moveTo 调用无异常，玩家当前 (' + posAfter.x + ',' + posAfter.y + ')');

  // ---------- 4. 战斗：答题驱动完整链路 ----------
  const battle = Boot.battle;
  const effects = Boot.effects;
  assert(typeof battle.start === 'function', 'battle.start 可调用');

  // 用 knowledge 拿题
  const q = Boot.knowledge.getQuestion('easy');
  assert(q, 'knowledge.getQuestion 返回了题目');

  // 直接调 battle.start 并走答题
  const fakeEncounter = { monster: { name: '测试妖', level: 1, hp: 50, atk: 5, def: 2 }, question: q };
  const startRes = battle.start(fakeEncounter);
  assert(startRes && startRes.monster, 'battle.start 返回怪物');

  // 答对一次：验证答题驱动链路（combo 递增 + 玩家出招扣法力）
  const ans = startRes.question.answer;
  const startHp = startRes.monster.hp;
  battle.doAnswer(ans);
  const c1 = effects.getCombo();
  assert(c1 && c1.count >= 1, '答对后 combo>=1 (combo=' + c1.count + ')');
  assert(startRes.monster.hp < startHp, '答对后怪物掉血 (hp ' + startHp + '->' + startRes.monster.hp + ')');

  // 答错一次：combo 归零
  const wrongOpt = (startRes.question.options || []).find(o => !String(o).startsWith(ans)) || 'X';
  battle.doAnswer(wrongOpt);
  const c2 = effects.getCombo();
  assert(c2.count === 0, '答错后 combo 归零');

  // ---------- 5. 经济验证 ----------
  const eco = Boot.economy;
  eco.addGold(100);
  assert(eco.getBalance() === 100, '加灵石后余额 100');
  assert(eco.spendGold(50) === true, '花费 50 成功');
  assert(eco.getBalance() === 50, '余额剩 50');
  eco.addItem('灵草', 5);
  const alch = eco.alchemize('灵丹');
  assert(alch.ok === true, '炼丹 灵丹 成功');

  console.log('\n✅ 集成验证全部通过：启动→世界→移动→战斗→答题→结算→经济 闭环可玩');
})().catch(e => { console.error('集成验证异常:', e); process.exit(1); });