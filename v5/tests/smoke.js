/* ============================================================
 * 《问道修仙学院》v5 · tests/smoke.js
 * 冒烟测试（node 可运行）：验证启动引导、loader 依赖解析、
 * 各模块接口存在且可调用（缺失模块以降级 stub 校验）。
 * 运行：node v5/tests/smoke.js
 * ============================================================ */
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 引入 bootstrap/entry.js（IIFE 把 Boot 挂到 globalThis）
const entryUrl = pathToFileURL(path.join(__dirname, '..', 'bootstrap', 'entry.js')).href;
await import(entryUrl);

const Boot = globalThis.Boot;
let pass = 0, fail = 0;

function ok(cond, msg) {
  if (cond) { pass++; console.log('  ✔ ' + msg); }
  else { fail++; console.error('  ✘ ' + msg); }
}

async function main() {
  console.log('【v5 冒烟测试】\n');

  // ---------- 1. Boot 基础契约 ----------
  console.log('1) Boot 基础对象');
  ok(Boot && typeof Boot === 'object', 'Boot 存在');
  ok(typeof Boot.register === 'function', 'Boot.register 存在');
  ok(Boot.bus && typeof Boot.bus.on === 'function' && typeof Boot.bus.emit === 'function', 'Boot.bus.on/emit 存在');
  ok(typeof Boot.log === 'function', 'Boot.log 存在');
  ok(Boot.listeners && typeof Boot.listeners === 'object', 'Boot.listeners 事件表存在');

  // ---------- 2. 启动序列（依赖解析 + 模块装配） ----------
  console.log('\n2) 启动序列 boot.start()');
  const report = await Boot.start({ autoLoop: false });
  ok(Boot.started === true, 'boot.started 为 true');
  ok(report && Array.isArray(report.modules), '返回模块加载报告');
  ok(Boot.loader && typeof Boot.loader.loadAll === 'function', 'boot.loader.loadAll 存在');

  // 打印各模块加载状态
  console.log('   —— 模块加载状态 ——');
  const statusCount = { loaded: 0, stubbed: 0 };
  for (const m of report.modules) {
    statusCount[m.status] = (statusCount[m.status] || 0) + 1;
    console.log('     · ' + m.name.padEnd(10) + ' -> ' + m.status + (m.error ? ' (' + m.error + ')' : ''));
  }

  // ---------- 3. 已实现模块的真实行为 ----------
  console.log('\n3) state 模块真实行为');
  ok(Boot.state && typeof Boot.state.get === 'function', 'boot.state.get 存在');
  ok(Boot.state && typeof Boot.state.set === 'function', 'boot.state.set 存在');
  const s0 = Boot.state.get();
  ok(s0 && typeof s0 === 'object', 'boot.state.get() 返回状态对象');
  const before = s0._dirty === true ? 'dirty' : 'clean';
  Boot.state.set({ flags: { smoke: true } });
  const s1 = Boot.state.get();
  ok(s1.flags && s1.flags.smoke === true, 'boot.state.set 生效（flags.smoke=true）');
  ok(s1._dirty === true, 'set 后 _dirty 标记为 true（触发存档）');

  console.log('\n4) save 模块真实行为');
  ok(Boot.save && typeof Boot.save.migrate === 'function', 'boot.save.migrate 存在');
  const migrated = Boot.save.migrate({ player: { realm: 'lianqi', level: 5 }, flags: { x: 1 } });
  ok(migrated && migrated.version === 'v5.0', 'migrate() 产出 v5.0 状态结构');
  ok(migrated && migrated.player && migrated.player.level === 5, 'migrate() 保留玩家 level');
  ok(Boot.save && typeof Boot.save.save === 'function', 'boot.save.save 存在');
  ok(Boot.save && typeof Boot.save.load === 'function', 'boot.save.load 存在');

  // ---------- 4. 各命名空间接口存在且可调用 ----------
  console.log('\n5) 各命名空间接口契约（INTERFACES.md）');
  const IFACES = Boot.loader.interfaces || {};
  const moduleNames = Object.keys(IFACES);
  for (const name of moduleNames) {
    const ns = Boot[name];
    ok(ns && typeof ns === 'object', name + ' 命名空间已挂载');
    if (!ns) continue;
    for (const key of IFACES[name]) {
      const isObjLike = (key === 'camera' || key === 'hud');
      if (isObjLike) {
        ok(ns[key] && typeof ns[key] === 'object', name + '.' + key + ' 为对象');
        const innerKey = key === 'camera' ? 'set' : 'update';
        if (ns[key]) ok(typeof ns[key][innerKey] === 'function', name + '.' + key + '.' + innerKey + ' 可调用');
      } else {
        ok(typeof ns[key] === 'function', name + '.' + key + ' 为函数');
      }
    }
  }

  // 全部模块接口（含 stub）都覆盖清单
  const MANIFEST = Boot.loader.manifest.map(m => m.name);
  const covered = MANIFEST.every(n => IFACES[n]);
  ok(covered, '所有清单模块均有接口契约');

  // ---------- 5. 事件总线 ----------
  console.log('\n6) 事件总线');
  let heard = null;
  Boot.bus.on('smoke:test', d => { heard = d; });
  Boot.bus.emit('smoke:test', { v: 42 });
  ok(heard && heard.v === 42, 'boot.bus.on/emit 收发正常');

  // ---------- 6. 主循环装配（不启动 RAF） ----------
  console.log('\n7) 主循环装配');
  ok(Boot.loop && typeof Boot.loop.start === 'function', 'boot.loop.start 存在');
  ok(Boot.loop && typeof Boot.loop.pause === 'function', 'boot.loop.pause 存在');
  ok(Boot.loop && typeof Boot.loop.resume === 'function', 'boot.loop.resume 存在');
  ok(Boot.loop && typeof Boot.loop.stop === 'function', 'boot.loop.stop 存在');
  ok(Boot.loop && typeof Boot.loop.getStats === 'function', 'boot.loop.getStats 存在');

  // ---------- 汇总 ----------
  console.log('\n========================================');
  console.log('结果：通过 ' + pass + ' 项，失败 ' + fail + ' 项');
  console.log('模块：loaded=' + statusCount.loaded + ' stubbed=' + statusCount.stubbed + ' unknown=' + (statusCount.unknown || 0));
  console.log('========================================');
  if (fail > 0) { console.error('存在失败的断言项'); process.exit(1); }
  console.log('✅ 冒烟测试全部通过');
}

main().catch(e => {
  console.error('冒烟测试异常终止:', e);
  process.exit(1);
});