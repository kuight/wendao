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
    phase: 'idle',      // idle | question | resolve | victory | defeat
    player: null,       // 玩家单位 {name,atk,def,maxHp,hp,maxMp,mp,speed,crit,critMul,buffs,level}
    monster: null,      // 怪物单位
    current: null,      // 当前题目
    actionQueue: [],    // 待演出动作队列
    combo: 0,           // 连击（答题连胜）
    round: 0,
    onEnd: null,        // 结束回调
    _resolveTimer: 0    // 动画延时计数（update 驱动）
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

  /* 从 encounter 构建怪物单位 */
  function buildMonster(encounter) {
    const m = encounter || {};
    const diffMul = m.difficulty === 'boss' ? 1.6 : m.difficulty === 'hard' ? 1.3 : 1;
    return Eng.unit({
      name: m.name || '妖兽',
      icon: m.icon || '👹',
      atk: (m.atk || 12) * diffMul,
      def: (m.def || 6) * diffMul,
      maxHp: Math.round((m.hp || 120) * diffMul),
      speed: m.speed || 8,
      crit: 0.05,
      critMul: 2,
      level: m.level || 1,
      skillMul: m.skillMul || 1.5   // 怪物技能倍率
    });
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
      // 音游反馈：答错
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

  // 每帧更新：推进动画延时与回合状态
  function update(ctx) {
    if (!battle.active) return;
    if (battle._resolveTimer > 0) {
      battle._resolveTimer -= (ctx && ctx.dt) || 0.016;
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
    getState: () => ({
      active: battle.active, phase: battle.phase,
      player: battle.player, monster: battle.monster,
      question: battle.current, combo: battle.combo, round: battle.round
    }),
    skills: SKILLS
  };
  boot.battle = api;
  boot.register('battle', api);
  boot.log && boot.log('[v5/battle] 战斗系统已挂载');
  return api;
}