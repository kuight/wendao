/* ============================================================
 * 《问道修仙学院》v5 · M1「演知识战斗」无头测试
 * 反震犀牛（牛顿第三定律 · 硬抗破绽）
 *
 * 验证三层分离闭环（贴合蓝图 v0.5 §8「看懂→换策略→破绽」）：
 *   战斗=体验知识点：首次对撞被反震弹回（演"力相互"）→ 看懂后
 *                   在撞击瞬间用 硬抗(借力顶住) → 破解反作用力 → 露破绽
 *   结算=破绽后出手（resolveAttack 造成伤害）
 *   成长=recordAnswer（熟练度落库，M1 不阻塞）
 *
 * 旧版是 guard(格挡) 门槛；v5 M1 反震犀牛已改为 brace(硬抗) 门槛。
 * ============================================================ */

// ---- 浏览器 API 桩（无头运行）----
globalThis.window = { addEventListener(){}, devicePixelRatio: 1 };
globalThis.document = { addEventListener(){}, createElement: () => ({ getContext: () => ({}), style:{}, addEventListener(){} }) };
globalThis.performance = { now: () => 0 };
globalThis.requestAnimationFrame = () => 1;
globalThis.localStorage = { getItem: () => null, setItem(){} };

const pressed = {};
const boot = {
  log: () => {}, bus: { on(){}, emit(){} },
  state: {
    _st: { version:'v5', player:{ level:1, stats:{ atk:20, def:8, maxHp:100, maxMp:30, speed:10 }, position:{x:0,y:0} }, knowledge:{}, world:{} },
    get() { return this._st; }, set(p) { Object.assign(this._st, p); }
  },
  effects: { burst(){}, shake(){}, flash(){}, combo(){}, floatText(){}, answerFeedback(){} },
  render: { camera: { set(){} } },
  register(){},
  input: { isDown: (a) => !!pressed[a], isJustPressed: (a) => { const v = !!pressed[a]; pressed[a] = false; return v; } }
};

const battleMod = await import('file:///E:/work/wendao/wendao-main/v5/core/battle/index.js');
const worldMod = await import('file:///E:/work/wendao/wendao-main/v5/core/world/index.js');
battleMod.installBattle(boot);
worldMod.installWorld(boot);

const room = boot.world.spawnBattleRoom({});
let pass = 0, fail = 0;
const ok = (c, msg) => { c ? (pass++, console.log('  ✅ ' + msg)) : (fail++, console.log('  ❌ ' + msg)); };

// ---- 进入实时战斗（用返回引用 r 持有 monster/phase/fight）----
const r = boot.battle.startEncounter({ kind: 'ram', difficulty: 'easy' }, room);
ok(r.ok && boot.battle.inFight(), '进入实时战斗');
ok(r.monster.name === '反震犀牛', '怪物=反震犀牛');
ok(r.monster.stanceReq.type === 'brace', '破绽条件=硬抗(brace)');
ok(!!r.fight.room, '战斗房间已创建');

const m = r.monster;          // 完整怪单位（name/hp/stanceReq/moves）
const fm = r.fight.monster;   // 怪战斗状态（pos/guardHits/stance）
const fp = r.fight.player;    // 玩家战斗状态（pos/guarding/bracing/strikeAt）

// ---- 跑完整一个撞击周期（进入撞击窗口 -> 走到窗口结束结算），可带一个"窗口内按X"标志 ----
// 新判定模型：撞击结算在窗口结束（t 越过 1.3 进入眩晕）时一次性触发；
// 窗口内任意帧按过 X 即算硬抗破解，否则按格挡/对撞结算。
function runCollideCycle(doBraceInWindow) {
  // 从撞击阶段起点 t=0.8 起，小步推进走完整窗口到 1.3+（每步 0.1，跨过 1.3 触结算）
  m.move = { def: m.moves[0], t: 0.8 };
  for (let s = 0; s < 8; s++) {
    const t = m.move.t;
    // 窗口内（0.8~1.3）任一步按过 X → 置位硬抗
    if (doBraceInWindow && t >= 0.8 && t < 1.3) boot.battle.playerAct('brace');
    const stBefore = boot.battle.getState().phase;
    boot.battle.monsterUpdate(0.1);   // 走 0.1s，8 步跨过窗口到 1.3+ 触发结算
    if (boot.battle.getState().phase === 'stance') break;   // 已露破绽（结算触发），停止
  }
}

// ---- 第 1 次撞击：不硬抗（纯对撞）→ 演"力相互"被弹回（窗口结束结算一次） ----
const startY = fp.pos.y;          // 玩家初始 y（房间中线）
const pHpBefore = fp.hp;          // 未设过则 undefined→100
runCollideCycle(false);
ok(fp.pos.y > startY, '纯对撞被反震弹回向下 (y ' + startY + '->' + fp.pos.y + ')');
ok(fp.hp < (pHpBefore || 100), '对撞硬吃反伤掉血 (hp ' + (pHpBefore || 100) + '->' + fp.hp + ')');
ok(fm.guardHits === 0, '纯对撞 guardHits 不累计 (=0)');
ok(boot.battle.getState().phase === 'fight', '第1次对撞后仍在 fight（未露破绽）');

// ---- 第 2 次撞击：窗口内按 brace 硬抗 → 破解反作用力 → 露破绽 ----
const pHp2 = fp.hp;
runCollideCycle(true);
ok(boot.battle.getState().phase === 'stance', '硬抗破解 → 露破绽 phase=stance');
ok(fm.stance === 1, '怪物破绽窗口已开启 (fm.stance=1)');
ok(fp.hp === pHp2, '硬抗破解不掉血（借力顶住）');

// ---- 破绽结算：出手造成伤害（phase 在破绽出手后进入结算/提问，非 stance）----
const tgtHpBefore = m.hp;
boot.battle.resolveAttack('strike');
ok(m.hp < tgtHpBefore, '破绽出手造成伤害 (hp ' + tgtHpBefore + '->' + m.hp + ')');

console.log('\n==========');
console.log(pass + ' 通过, ' + fail + ' 失败');
process.exit(pass && !fail ? 0 : 1);