/* ============================================================
 * 《问道修仙学院》v5 · core/battle/index.js
 * 战斗状态机：回合制、怪物 AI、玩家技能、答题驱动
 *
 * 挂载接口（契约 INTERFACES.md）：
 *   boot.battle.start(encounter)  开始战斗（设定敌我、抽题）
 *   boot.battle.doAnswer(opt)     答题结算（答对=出招，答错=受击）
 *   boot.battle.attack()          基础攻击（答对默认招式的公开入口）
 *   boot.battle.cast(skillId)     施展技能（答对默认招式的公开入口）
 *   boot.battle.update(ctx)       主循环每帧调用（回合推进、动画延时）
 *
 * 设计核心：战斗 = 答题。答对触发技能/攻击，答错受击。
 * 融合 V5_BLUEPRINT §3.5 P1/P6/P8 音游反馈与 combo 连击。
 * 数值引擎复用 core/battle/engine.js。
 * ============================================================ */
// 先执行 engine.js 的 IIFE，确保 globalThis.BattleEngine 已挂载
import './engine.js';
import { M1_MONSTERS } from './monsters.js';

export function installBattle(boot) {
  'use strict';
  const Eng = (typeof globalThis !== 'undefined' ? globalThis : this).BattleEngine;

  // ---- 玩家技能定义（伤害倍率 / 特效） ----
  const SKILLS = {
    basic: { id: 'basic', name: '剑指', icon: '⚔️', mul: 1.0, mp: 0, desc: '基础攻击' },
    lingjian: { id: 'lingjian', name: '灵剑斩', icon: '🗡️', mul: 1.6, mp: 6, desc: '一道剑光，威力提升' },
    huoyan: { id: 'huoyan', name: '三昧真火', icon: '🔥', mul: 2.2, mp: 10, desc: '烈焰灼烧，高倍率伤害' },
    hanbing: { id: 'hanbing', name: '玄冰刺', icon: '❄️', mul: 1.9, mp: 8, desc: '寒冰刺骨，命中暴击↑', critBoost: 0.2 },
    leiYin: { id: 'leiYin', name: '雷音掌', icon: '⚡', mul: 1.4, mp: 4, desc: '雷音轰鸣，迅疾先手', spdBonus: 3 },
    tixue: { id: 'tixue', name: '噬血咒', icon: '🩸', mul: 0.6, mp: 12, healPct: 0.15, desc: '汲取气血，回复自身' }
  };

  // ---- 战斗状态 ----
  const battle = {
    active: false,      // 是否处于战斗中
    phase: 'idle',      // idle | fight | stance | question | resolve | victory | defeat
    player: null,       // 玩家单位 {name,atk,def,maxHp,hp,maxMp,mp,speed,crit,critMul,buffs,level}
    monster: null,      // 怪物单位
    current: null,      // 当前题目
    actionQueue: [],    // 待演出动作队列
    combo: 0,           // 连击（答题连胜）
    round: 0,
    onEnd: null,        // 结束回调
    _resolveTimer: 0,   // 动画延时计数（update 驱动）
    _pendingSkill: null,// 待触发技能
    // ---- M1 演知识战斗（实时走位+破绽） ----
    fight: {            // 实时战斗子状态机（闭包，战斗结束丢弃，不入存档）
      active: false,    // 是否处于实时演武
      room: null,       // 战斗房间 {width,height,tiles,TILE,TILE_META}
      monster: null,    // 怪战斗状态（pos/stance/move/guardHits）
      player: null,     // 玩家战斗状态（pos/guarding/strikeAt）
      camLock: null,    // 相机锁定 {x,y}
    }
  };

  /* 归一化玩家单位：从全局 state 读属性 */
  function buildPlayer() {
    const p = (boot.state.get().player) || {};
    const stats = p.stats || {};
    return Eng.unit({
      name: '道友',
      atk: stats.atk || p.level * 8 + 6 || 14,
      def: stats.def || 8,
      maxHp: stats.maxHp || 100,
      maxMp: stats.maxMp || 30,
      speed: stats.speed || 10,
      crit: stats.crit || 0.08,
      critMul: stats.critMul || 2,
      level: p.level || 1
    });
  }

  /* 从 encounter 构建怪物单位（M1 支持"演知识"怪：从 M1_MONSTERS 查招式与属性） */
  function buildMonster(encounter) {
    const m = encounter || {};
    const diffMul = m.difficulty === 'boss' ? 1.6 : m.difficulty === 'hard' ? 1.3 : 1;
    // 优先取 M1_MONSTERS 里该 kind 的静态定义（名/形象/属性），encounter 可覆盖
    const def = M1_MONSTERS[m.kind] || null;
    const unit = Eng.unit({
      name: (def && def.name) || m.name || '妖兽',
      icon: (def && def.icon) || m.icon || '👹',
      atk: (def && def.atk) || m.atk || 12,
      def: (def && def.def) || m.def || 6,
      maxHp: Math.round(((def && def.hp) || m.hp || 120) * diffMul),
      speed: (def && def.speed) || m.speed || 8,
      crit: 0.05,
      critMul: 2,
      level: m.level || 1,
      skillMul: m.skillMul || 1.5
    });
    // 演知识战斗字段：名/形象/招式序列 / 知识点 / 破绽 / 场地位置
    unit.name = (def && def.name) || m.name || '妖兽';   // unit() 过滤了 name，需补回
    unit.icon = (def && def.icon) || m.icon || '👹';
    unit.kind = m.kind || 'basic';
    unit.knowledgeId = (def && def.knowledgeId) || m.knowledgeId || null;
    unit.moves = (def && def.moves) || [];
    unit.stanceReq = (def && def.stanceReq) || { type: 'none', n: 1 };
    unit.stance = 0;             // 0=未破绽; >0=破绽窗口剩余
    unit.guardHits = 0;          // 已累计的破绽触发次数
    unit.move = null;            // 当前招式实例
    unit.pos = { x: m.posX || 8, y: m.posY || 4 };  // 场地网格坐标
    unit.dir = 1;
    return unit;
  }

  /* 抽题：优先用 encounter 自带题，否则走 knowledge 模块 */
  function pickQuestion(encounter) {
    if (encounter && encounter.question) return encounter.question;
    if (boot.knowledge && boot.knowledge.getQuestion) {
      const q = boot.knowledge.getQuestion(encounter && encounter.difficulty);
      if (q) return q;
    }
    // 兜底：题库风格题目
    return {
      id: 'gen_' + Math.random().toString(36).slice(2, 7),
      type: 'single',
      difficulty: 'easy',
      q: '一剑镇山河，此题何解？',
      answer: 'A',
      explain: '（未接题库，占位题）',
      options: ['A. 选我', 'B. 弃之', 'C. 默然', 'D. 悟道']
    };
  }

  /* ================================================================
   * M1 演知识战斗：实时状态机（怪跑招式，玩家实时应对）
   * 三层分离：战斗=体验知识点 / 结算=破绽后答题检验 / 成长=recordAnswer
   * ================================================================ */

  // 进入实时战斗。room 为独立战斗房间（16×10 纯 grass 矩形）
  function startEncounter(encounter, room) {
    if (battle.active) return { ok: false, msg: '已在战斗中' };
    battle.active = true;
    battle.phase = 'fight';
    battle.round = 0;
    battle.combo = 0;
    battle.actionQueue = [];
    battle.player = buildPlayer();
    battle.monster = buildMonster(encounter);
    battle.onEnd = encounter && encounter.onEnd;
    battle.fight.active = true;
    battle.fight.room = room || { width: 16, height: 10, tiles: [], playerSpawn: { x: 8, y: 6 }, monsterSpawn: { x: 8, y: 3 } };
    battle.fight.player = { pos: { ...(room && room.playerSpawn) || { x: 8, y: 6 } }, guarding: false, strikeAt: false };
    battle.fight.monster = { pos: { ...battle.monster.pos }, move: null, stance: 0, guardHits: 0 };
    // 相机锁定房间中心
    if (boot.render && boot.render.camera) boot.render.camera.set(8, 5, { snap: true });
    boot.bus.emit('battle:start', { monster: battle.monster.name, player: battle.player });
    boot.log && boot.log('[v5/battle] 实时战斗开始：' + battle.monster.name);
    return { ok: true, player: battle.player, monster: battle.monster, fight: battle.fight, phase: battle.phase };
  }

  // 是否在实时战斗中
  function inFight() { return battle.active && battle.fight.active; }

  // 玩家在战斗房间内移动（四向 + 待八向）。返回新位置或失败
  function movePlayer(dx, dy) {
    if (!inFight()) return { ok: false, msg: '未在实时战斗' };
    const fp = battle.fight.player;
    const room = battle.fight.room;
    const nx = fp.pos.x + dx, ny = fp.pos.y + dy;
    // 边界/墙判定（房间四周一圈是 mountain 墙，这里简化为边界限制）
    if (nx < 1 || ny < 1 || nx > room.width - 2 || ny > room.height - 2) return { ok: false };
    fp.pos.x = nx; fp.pos.y = ny;
    return { ok: true, pos: fp.pos };
  }

  // 玩家实时操作：move / guard(格挡) / strike(出手) / brace(硬抗·借力顶住)
  function playerAct(action) {
    if (!inFight()) return { ok: false, msg: '未在实时战斗' };
    const fp = battle.fight.player;
    if (action === 'guard') { fp.guarding = true; return { ok: true }; }
    if (action === 'strike') { fp.strikeAt = true; return { ok: true }; }
    if (action === 'brace') { fp.bracing = true; return { ok: true }; }
    return { ok: false, msg: '未知操作' };
  }

  // 怪物演武 AI：推进当前招式，把物理参数翻译成场地移动，触发碰撞/时机判定
  function monsterUpdate(dt) {
    if (!inFight()) return { tick: false, acted: false };
    const m = battle.monster;
    const fm = battle.fight.monster;
    const fp = battle.fight.player;
    // 若无当前招式，取怪的第一个招式开始
    if (!m.move) { m.move = { def: m.moves[0], t: 0 }; }
    const def = m.move.def;
    m.move.t += dt;
    const t = m.move.t;

    // 找当前阶段
    let stage = def.phases.find(p => t >= p.t && t < p.to);
    if (!stage) {
      // 招式结束 -> 结算破绽触发情况，换下一招/重置
      checkStanceTrigger();
      if (t >= def.dur) { m.move = { def: m.moves[0], t: 0 }; }
      return { tick: true, acted: false };
    }

    // 主阶段推进：按怪类型演物理
    if (def.kind === 'accel' && stage.label === '冲刺' && def.onProgress) {
      const localT = t - stage.t;
      const r = def.onProgress(dt, localT);
      fm.pos.x += (r && r.dx) || 0;
      // 冲过头边界则判闪避
      if (fm.pos.x > battle.fight.room.width - 1) { checkDodge(); }
    }
    if (def.kind === 'oscillate' && def.onProgress) {
      const r = def.onProgress(t);
      if (r && r.x !== undefined) fm.pos.x = r.x;
      // 平衡点时机判定
      const z = def.onZone && def.onZone(fp, fm.pos);
      if (z && z.struck) { fm.stance = 1; battle.phase = 'stance'; return { tick: true, acted: 'struck' }; }
    }
    // 冲撞型：撞击窗口内任意时刻按过 X 即算破解，结算移到窗口结束时一次。
    // 窗口全程（t in [0.8,1.3)）给玩家从容反应，避免瞬杀；窗口结束才判定结果。
    if (def.kind === 'collide' && def.onImpact) {
      const room = battle.fight.room;
      const mx = room.width - 2, my = room.height - 2;   // 可走范围上界
      const clamp = v => Math.max(1, Math.min(mx, Math.max(1, v)));   // 夹紧到房间内(墙内)
      if (stage.label === '撞击') {
        // 进入窗口首帧：开窗并重置"是否按过硬抗"标记
        if (!m.move.inWindow) { m.move.inWindow = true; m.move.bracedWindow = false; }
        // 窗口期间：按过 X 就记下（不在窗口内即时结算）
        if (fp.bracing) m.move.bracedWindow = true;
        // 视觉冲撞：犀牛在上方(y 小)，朝玩家下方(+y)逼近，演"撞下来"
        const spd = def.params && def.params.dashSpeed || 6;
        const step = Math.sign(fp.pos.y - fm.pos.y) * spd * dt;   // 沿 y 冲
        const newY = fm.pos.y + step;
        fm.pos.y = (newY > 1 && newY < my) ? newY : fm.pos.y;
      } else if (m.move.inWindow && stage.label !== '撞击') {
        // 窗口结束（进入后续阶段）：结算一次。按过 X = 硬抗破解 → 露破绽
        m.move.inWindow = false;
        const r = m.move.bracedWindow ? { braced: true } : def.onImpact(fp);
        // 应用冲撞反推力（向量）并夹紧到房间边界，避免被撞出房间
        if (r && r.recoilVec) {
          fp.pos.x = clamp(fp.pos.x + r.recoilVec.dx);
          fp.pos.y = clamp(fp.pos.y + r.recoilVec.dy);
        }
        if (r && r.braced) {
          // 硬抗破解：玩家借力顶住，卸掉反作用力 → 直接露破绽（看懂"力相互"的标志）
          fm.stance = 1; battle.phase = 'stance';
          boot.effects && boot.effects.floatText('破解！借力破反作用力', '#7CFC00', { x: 200, y: 200 });
          return { tick: true, acted: 'braced' };
        } else if (r && r.blocked) {
          // 格挡：理解了一半，仍被小幅反震弹回 + 怪反伤（演"力相互"，但未破解）
          fm.guardHits++;
          battle.monster.hp = Math.max(0, battle.monster.hp - (r.selfDmg || 0));
          boot.effects && boot.effects.floatText('-力相互反震', '#FFD700', { x: 200, y: 200 });
        } else if (r && r.dmg) {
          // 对撞/未防守：被完全弹回 + 硬吃伤害（窗口内没按X/没格挡）
          fp.hp = Math.max(0, (fp.hp === undefined ? 100 : fp.hp) - r.dmg);
          boot.effects && boot.effects.floatText('-' + r.dmg, '#FF6B6B', { x: 200, y: 200 });
        }
      }
    }
    // 帧末重置瞬态操作标记
    fp.guarding = false; fp.strikeAt = false; fp.bracing = false;
    return { tick: true, acted: true };
  }

  // 破绽触发判定：达标 -> 露破绽，进入结算态
  function checkStanceTrigger() {
    const m = battle.monster;
    const fm = battle.fight.monster;
    const req = m.stanceReq;
    if (req.type === 'guard' && fm.guardHits >= req.n) { fm.stance = 1; battle.phase = 'stance'; return; }
    if (req.type === 'dodge' && fm.guardHits >= req.n) { fm.stance = 1; battle.phase = 'stance'; return; }
    if (req.type === 'brace' && fm.guardHits >= req.n) { fm.stance = 1; battle.phase = 'stance'; return; }
    if (req.type === 'timing' && fm.stance >= 1) { battle.phase = 'stance'; return; }
  }
  function checkDodge() {
    const fm = battle.fight.monster;
    fm.guardHits++;
    if (fm.guardHits >= battle.monster.stanceReq.n) { fm.stance = 1; battle.phase = 'stance'; }
  }

  // 破绽结算：玩家出手 -> 造成大额伤害 + 进入答题检验（复用 doAnswer）
  function resolveAttack(kind) {
    if (!inFight() || battle.phase !== 'stance') return { ok: false, msg: '当前不可出手' };
    const eff = boot.effects;
    const atk = battle.player, tgt = battle.monster;
    const bonus = kind === 'strike' ? 2.5 : 1;
    const dmg = Math.max(1, Math.round(atk.atk * bonus - tgt.def * 0.5));
    tgt.hp = Math.max(0, tgt.hp - dmg);
    eff && eff.burst(300, 200, 'crit'); eff && eff.shake(10);
    eff && eff.floatText('-' + dmg + ' 破绽', '#FFD700', { x: 300, y: 200 });
    boot.log && boot.log('[v5/battle] 玩家破绽出手 → ' + tgt.name + ' -' + dmg);
    // 击杀判定
    if (tgt.hp <= 0) { queueVictory(); return { ok: true, dmg, defeated: true }; }
    // 进入结算检验：出该知识点的一题
    battle.phase = 'question';
    battle.current = pickQuestion({ difficulty: 'easy', subject: tgt.subject || tgt.kind, knowledgeId: tgt.knowledgeId });
    return { ok: true, dmg, phase: 'question' };
  }

  /* ================================================================
   * 公开接口
   * ================================================================ */

  // 开始战斗
  function start(encounter) {
    if (battle.active) return { ok: false, msg: '已在战斗中' };
    battle.active = true;
    battle.round = 0;
    battle.combo = 0;
    battle.phase = 'question';
    battle.actionQueue = [];
    battle.player = buildPlayer();
    battle.monster = buildMonster(encounter);
    battle.current = pickQuestion(encounter);
    battle.onEnd = encounter && encounter.onEnd;
    boot.bus.emit('battle:start', { monster: battle.monster.name, player: battle.player });
    boot.log && boot.log('[v5/battle] 战斗开始：' + battle.monster.name);
    return {
      ok: true,
      player: battle.player,
      monster: battle.monster,
      question: battle.current,
      phase: battle.phase
    };
  }

  // 答题结算（战斗核心：答对出招，答错受击）
  function doAnswer(opt) {
    if (!battle.active) return { ok: false, msg: '未在战斗中' };
    if (battle.phase !== 'question') return { ok: false, msg: '当前不可作答' };

    const q = battle.current;
    const isCorrect = String(opt).toUpperCase() === String(q.answer).toUpperCase();
    const eff = boot.effects;

    // 触发 knowledge 记录（存在时）
    if (boot.knowledge && boot.knowledge.recordAnswer) {
      boot.knowledge.recordAnswer(isCorrect);
    }

    if (isCorrect) {
      battle.combo++;
      boot.bus.emit('battle:answer', { correct: true, combo: battle.combo });
      // 音游反馈：答对
      eff && eff.answerFeedback(true, { comboCount: battle.combo });
      eff && eff.combo(battle.combo);
      // 答对 → 玩家出招（默认用当前技能或基础攻击）
      const skill = SKILLS[battle._pendingSkill] || SKILLS.basic;
      battle._pendingSkill = null;
      castSkillOnMonster(skill);
    } else {
      battle.combo = 0;
      boot.bus.emit('battle:answer', { correct: false });
      // 音游反馈：答错（combo 归零同步到特效层）
      eff && eff.combo(0);
      eff && eff.answerFeedback(false, {});
      // 答错 → 玩家受击
      monsterAttacks();
    }

    return {
      ok: true,
      correct: isCorrect,
      combo: battle.combo,
      answer: q.answer,
      explain: q.explain
    };
  }

  // 公开入口：基础攻击（答对默认招式）
  function attack() {
    if (!battle.active || battle.phase !== 'question') return { ok: false, msg: '当前不可攻击' };
    battle._pendingSkill = 'basic';
    return { ok: true, skill: SKILLS.basic.name };
  }

  // 公开入口：施展技能（答对时触发）
  function cast(skillId) {
    if (!battle.active || battle.phase !== 'question') return { ok: false, msg: '当前不可施法' };
    const s = SKILLS[skillId];
    if (!s) return { ok: false, msg: '无此技能' };
    // 法力校验
    if (battle.player.mp < (s.mp || 0)) return { ok: false, msg: '法力不足' };
    battle._pendingSkill = skillId;
    return { ok: true, skill: s.name, mpCost: s.mp };
  }

  // 每帧更新：实时战斗推进怪招式+读玩家操作；否则走旧回合延时
  function update(ctx) {
    if (!battle.active) return;
    const dt = (ctx && ctx.dt) || 0.016;
    // 实时战斗模式：驱动怪的招式 + 读玩家输入
    if (battle.phase === 'fight' || battle.phase === 'stance') {
      monsterUpdate(dt);
      // 从 input 读玩家实时操作（走位/格挡/出手）
      if (boot.input) {
        const dir = {
          'up': [0, -1], 'down': [0, 1], 'left': [-1, 0], 'right': [1, 0]
        };
        for (const d in dir) {
          if (boot.input.isJustPressed(d)) { movePlayer(dir[d][0], dir[d][1]); break; }
        }
        if (boot.input.isDown('guard')) playerAct('guard');
        if (boot.input.isDown('brace')) playerAct('brace');
        if (boot.input.isJustPressed('strike')) playerAct('strike');
      }
      // 破绽态：玩家按出手则结算（复用答题检验）
      if (battle.phase === 'stance' && boot.input && boot.input.isJustPressed('strike')) {
        resolveAttack('strike');
      }
      return;
    }
    // 旧回合延时（结算检验/演出用）
    if (battle._resolveTimer > 0) {
      battle._resolveTimer -= dt;
      if (battle._resolveTimer <= 0) {
        battle._resolveTimer = 0;
        afterResolve();
      }
    }
  }

  /* ================================================================
   * 内部逻辑：玩家出招 / 怪物受击 / 怪物出招 / 胜负判定
   * ================================================================ */

  // 玩家对怪物施展技能/攻击
  function castSkillOnMonster(skill) {
    const eff = boot.effects;
    const atk = battle.player;
    const tgt = battle.monster;

    // 花费法力
    atk.mp = Math.max(0, atk.mp - (skill.mp || 0));

    // 速度加成（雷音掌先手）
    const spdBonus = skill.spdBonus || 0;
    if (spdBonus) atk.status.spdBonus = spdBonus;

    // 伤害计算（连击加成为额外倍率）
    const streakBonus = Math.min(0.5, battle.combo * 0.05);
    const res = Eng.calcDamage({
      atker: Object.assign({}, atk, { atk: atk.atk * (1 + streakBonus) }),
      target: tgt,
      skillMul: skill.mul || 1,
      critBoost: skill.critBoost || 0
    });
    tgt.hp = Math.max(0, tgt.hp - res.dmg);

    // 特效
    const tPos = monsterPos();
    eff && eff.burst(tPos.x, tPos.y, res.crit ? 'crit' : 'hit');
    if (res.crit) eff && eff.shake(10);

    // 吸血
    if (skill.healPct) {
      const heal = Math.max(1, Math.floor(atk.maxHp * skill.healPct));
      atk.hp = Math.min(atk.maxHp, atk.hp + heal);
      eff && eff.burst(playerPos().x, playerPos().y, 'heal');
      eff && eff.floatText('+' + heal, '#7CFC00', playerPos());
    }

    eff && eff.floatText('-' + res.dmg, res.crit ? '#FFD700' : '#FFF', tPos);

    boot.log && boot.log('[v5/battle] 玩家 ' + skill.name + ' → ' + tgt.name + ' -' + res.dmg + (res.crit ? ' 暴击!' : ''));

    // 判定胜利
    if (tgt.hp <= 0) { queueVictory(); return; }

    // 怪物反击（延时演出）
    battle._resolveTimer = 0.6;
  }

  // 怪物攻击玩家
  function monsterAttacks() {
    const eff = boot.effects;
    const tgt = battle.player;
    const atk = battle.monster;

    // 怪物 AI：随机暴击倍率/技能
    const isSkill = Math.random() < 0.3;
    const mul = isSkill ? (atk.skillMul || 1.5) : 1;
    const res = Eng.calcDamage({ atker: atk, target: tgt, skillMul: mul });
    tgt.hp = Math.max(0, tgt.hp - res.dmg);

    const pPos = playerPos();
    eff && eff.burst(pPos.x, pPos.y, 'hit');
    eff && eff.shake(12);
    eff && eff.floatText('-' + res.dmg, '#FF6B6B', pPos);
    if (isSkill) eff && eff.floatText(atk.name + ' 出招', '#FF9F43', { x: innerWidth / 2, y: innerHeight * 0.15 });

    boot.log && boot.log('[v5/battle] ' + atk.name + ' → 玩家 -' + res.dmg);

    // 判定失败
    if (tgt.hp <= 0) { queueDefeat(); return; }

    // 进入下一题（玩家回合）
    nextQuestion();
  }

  // 切换到下一题
  function nextQuestion() {
    battle.phase = 'question';
    battle.current = pickQuestion({});
    battle.round++;
  }

  /* ================================================================
   * 动画延时后的后续处理
   * ================================================================ */

  function afterResolve() {
    if (!battle.active) return;
    // 怪物受击后若没死，进入下一题（玩家回合）
    if (battle.monster && battle.monster.hp > 0) {
      nextQuestion();
    }
  }

  function queueVictory() {
    battle.phase = 'victory';
    const eff = boot.effects;
    const pPos = playerPos(), mPos = monsterPos();
    eff && eff.burst(mPos.x, mPos.y, 'break');
    eff && eff.flash();
    eff && eff.shake(14);
    eff && eff.floatText('击杀！', '#FFD700', mPos);
    finish(true);
  }

  function queueDefeat() {
    battle.phase = 'defeat';
    const eff = boot.effects;
    eff && eff.shake(16);
    eff && eff.flash();
    eff && eff.floatText('战败 · 顿悟', '#FF4D6D', playerPos());
    finish(false);
  }

  function finish(win) {
    battle.active = false;
    battle.phase = win ? 'victory' : 'defeat';
    battle.fight.active = false;  // 结束实时战斗，丢弃临时状态
    // 结算：写回玩家 hp/mp
    const p = boot.state.get().player || {};
    if (p.stats) {
      p.stats.hp = battle.player.hp;
      p.stats.mp = battle.player.mp;
    }
    // 奖励（win）
    if (win && battle.monster) {
      const reward = {
        exp: Math.round((battle.monster.level || 1) * 10 * (1 + battle.combo * 0.1)),
        gold: Math.round((battle.monster.level || 1) * 5)
      };
      if (boot.economy && boot.economy.addGold) boot.economy.addGold(reward.gold);
      boot.bus.emit('battle:end', { win: true, combo: battle.combo, reward });
    } else {
      boot.bus.emit('battle:end', { win: false, combo: battle.combo });
    }
    if (battle.onEnd) battle.onEnd({ win, combo: battle.combo, player: battle.player });
    battle.onEnd = null;
    boot.log && boot.log('[v5/battle] 战斗结束：' + (win ? '胜利' : '失败'));
  }

  /* 坐标助手（DOM 近似定位，供特效定位） */
  function monsterPos() {
    return { x: innerWidth * 0.72, y: innerHeight * 0.4 };
  }
  function playerPos() {
    return { x: innerWidth * 0.28, y: innerHeight * 0.62 };
  }

  /* ================================================================
   * 挂载到 boot
   * ================================================================ */
  const api = {
    start, doAnswer, attack, cast, update,
    startEncounter, inFight, movePlayer, playerAct, monsterUpdate, resolveAttack,
    getState: () => ({
      active: battle.active, phase: battle.phase,
      player: battle.player, monster: battle.monster,
      question: battle.current, combo: battle.combo, round: battle.round,
      fight: battle.fight.active ? {
        player: battle.fight.player, monster: battle.fight.monster,
        room: battle.fight.room
      } : null
    }),
    skills: SKILLS
  };
  boot.battle = api;
  boot.register('battle', api);
  boot.log && boot.log('[v5/battle] 战斗系统已挂载');
  return api;
}