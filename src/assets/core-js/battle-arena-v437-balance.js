/* ===================================================================
 * 《问道修仙学院》v4.3.7 · 斩妖场数值平衡补丁
 *
 * 修复 v4.3.5j 数值问题：
 *   ✓ 妖兽 HP/ATK 过强 → 重新平衡到合理区间
 *   ✓ 妖兽攻击命中率过高 → 下调
 *   ✓ 越阶妖兽属性差距过大 → 平滑
 *   ✓ 精英/妖王奖励对应上调
 *   ✓ 添加"预期回合数"标签，让玩家看到难度
 *
 * 平衡目标（同阶）：
 *   凡阶妖 easy：玩家 3 回合内可斩，回复奖励小
 *   同阶妖 normal：玩家 4-6 回合可斩，中等奖励
 *   精英妖 hard：玩家 7-10 回合可斩，需谨慎，中大奖励
 *   妖王 boss：玩家 10-15 回合可斩，硬骨头，大奖励
 *
 * 加载点：必须在 v435j-fix.js 之后
 * =================================================================== */
(function (global) {
  'use strict';
  if (!global.Game) { console.warn('[v437-balance] Game 未就绪'); return; }
  const Game = global.Game;
  const TAG = '[v437-balance]';

  // ============================================================
  // 【一】重新校准的难度系数（相对玩家目标属性）
  // ============================================================
  //   同阶 normal HP = 玩家 HP × 0.90（略弱以给玩家优势）
  //   同阶 easy  HP = 玩家 HP × 0.55
  //   同阶 hard  HP = 玩家 HP × 1.55
  //   同阶 boss  HP = 玩家 HP × 2.60
  //   ATK 全部下调，妖攻大约等于玩家 HP 的 4%~10%（每回合掉血合理）
  const DIFF_MULT = {
    easy:   { hp: 0.55, atk: 0.40, hit: 0.35, name: '凡阶妖',   expReward: 0.55, lingshiReward: 0.55, rounds: '3~5' },
    normal: { hp: 0.90, atk: 0.65, hit: 0.50, name: '同阶妖',   expReward: 1.00, lingshiReward: 1.00, rounds: '4~7' },
    hard:   { hp: 1.55, atk: 0.90, hit: 0.60, name: '精英妖',   expReward: 1.75, lingshiReward: 1.75, rounds: '7~10' },
    boss:   { hp: 2.60, atk: 1.20, hit: 0.72, name: '妖王',     expReward: 3.20, lingshiReward: 3.20, rounds: '10~15' },
    legend: { hp: 4.20, atk: 1.65, hit: 0.82, name: '真君',     expReward: 5.50, lingshiReward: 5.50, rounds: '15~20' }
  };

  // 越阶修正：更平滑，绝对差距不会失控
  //   gap>0 妖兽越阶更强，但 HP 增幅 <30%/阶，ATK <20%/阶，总封顶
  //   gap<0 低阶妖兽衰减
  function gapMultipliers(gap) {
    if (gap >= 0) {
      return {
        hp:  1 + Math.min(1.20, gap * 0.22),
        atk: 1 + Math.min(0.80, gap * 0.15),
        hit: Math.min(0.95, 1 + gap * 0.05)  // 越阶命中略提高
      };
    } else {
      return {
        hp:  Math.max(0.35, 1 + gap * 0.20),
        atk: Math.max(0.30, 1 + gap * 0.18),
        hit: Math.max(0.20, 1 + gap * 0.08)
      };
    }
  }

  // ============================================================
  // 【二】重写 scaleMonsterForRealm
  // ============================================================
  Game.scaleMonsterForRealm = function (base) {
    base = base || {};
    const playerRid = (this.state && this.state.char && this.state.char.realmId) || 0;
    const enemyRid  = Number.isFinite(base.enemyRid) ? base.enemyRid : playerRid;
    const gap = enemyRid - playerRid;

    const target = this.getTargetStatsForRealm(enemyRid);
    const diff = base.diff || 'normal';
    const m = DIFF_MULT[diff] || DIFF_MULT.normal;
    const g = gapMultipliers(gap);

    // HP：怪的目标 HP × 难度倍率 × 越阶倍率
    let hpVal  = Math.max(120, Math.round(target.maxHp * m.hp  * g.hp));
    // ATK：稍微弱一些，避免玩家一次挨打就残
    let atkVal = Math.max(12,  Math.round(target.atk   * m.atk * g.atk));
    let defVal = Math.max(2,   Math.round((target.def || 0)   * 0.55 * m.hp * 0.8));

    // 命中率
    let hitChance = Math.max(0.20, Math.min(0.90, m.hit * g.hit));

    return {
      name: base.name || '妖兽',
      hp: hpVal, maxHp: hpVal,
      atk: atkVal, def: defVal,
      diff: diff,
      enemyRid: enemyRid,
      attackChance: hitChance,
      title: base.title || '',
      // 附加元数据供 UI 显示
      _meta: {
        diffName: m.name,
        gap: gap,
        expectedRounds: m.rounds,
        expReward: m.expReward,
        lingshiReward: m.lingshiReward
      }
    };
  };
  console.info(TAG, '✓ scaleMonsterForRealm 已重新平衡');

  // ============================================================
  // 【三】重写 scaleMonster（兼容旧接口）
  // ============================================================
  Game.scaleMonster = function (baseDef) {
    baseDef = baseDef || {};
    if (!Number.isFinite(baseDef.enemyRid) && Number.isFinite(baseDef.realmId)) {
      baseDef.enemyRid = baseDef.realmId;
    }
    const scaled = Game.scaleMonsterForRealm(baseDef);
    const t = Game.getMonsterTitle
      ? Game.getMonsterTitle(scaled.diff, scaled.enemyRid)
      : { titles: [], tier: scaled.diff };
    return Object.assign({}, baseDef, scaled, {
      titles: t.titles || [],
      tier: t.tier || scaled.diff,
      realmName: (Game._playerTierName ? Game._playerTierName(scaled.enemyRid) : '')
    });
  };
  console.info(TAG, '✓ scaleMonster 已同步');

  // ============================================================
  // 【四】斩妖场卡片：加"预期回合数"、"奖励倍率"、玩家HP对比条
  // ============================================================
  function upgradeArenaCards() {
    if (!global.SubjectPage) return;
    const SP = global.SubjectPage;
    if (SP.__v437BalancePatched) return;

    // 包装 _renderArena，在卡片渲染完后补一个"数值分析"角标
    const origRender = SP._renderArena && SP._renderArena.bind(SP);
    if (typeof origRender !== 'function') return;

    SP._renderArena = function () {
      const html = origRender.call(this);
      // 后续 bind 时会加上标签
      setTimeout(() => {
        try { decorateCards.call(this); } catch (e) { console.warn(TAG, 'decorate failed', e); }
      }, 30);
      return html;
    };

    function decorateCards() {
      document.querySelectorAll('[data-v435d-arena]').forEach(card => {
        if (card.querySelector('.v437-round-badge')) return;
        const diffKey = (card.getAttribute('data-diff') || '').trim();
        // 从 card 内容推断难度
        const diff = card.className.match(/data-diff="(\w+)"/) ? card.className.match(/data-diff="(\w+)"/)[1]
                    : (card.textContent.match(/凡阶妖|同阶妖|精英妖|妖王|真君/) || [''])[0];
        let key = 'normal';
        if (/凡阶/.test(card.textContent) || diffKey === 'easy')   key = 'easy';
        else if (/精英/.test(card.textContent) || diffKey === 'hard') key = 'hard';
        else if (/妖王/.test(card.textContent) || diffKey === 'boss') key = 'boss';
        else if (/真君/.test(card.textContent) || diffKey === 'legend') key = 'legend';
        const m = DIFF_MULT[key] || DIFF_MULT.normal;
        const badge = document.createElement('div');
        badge.className = 'v437-round-badge';
        badge.innerHTML = `
          <span class="v437-rb-rounds" title="预计击杀回合数">⚔ ${m.rounds} 回合</span>
          <span class="v437-rb-reward" title="奖励倍率">💰 ${m.expReward.toFixed(1)}×</span>
        `;
        card.appendChild(badge);
      });
    }

    SP.__v437BalancePatched = true;
    console.info(TAG, '✓ 斩妖场卡片已加"回合/奖励"角标');
  }

  // ============================================================
  // 【五】奖励发放：根据 diff 应用 expReward/lingshiReward 倍率
  // ============================================================
  //   包装 Game.gainExp / Game.gainLingshi 的入口不方便，
  //   改为暴露一个 Game.calcArenaReward(baseExp, baseLingshi, diff) 让 arena 调用
  Game.calcArenaReward = function (baseExp, baseLingshi, diff) {
    const m = DIFF_MULT[diff || 'normal'] || DIFF_MULT.normal;
    return {
      exp:     Math.round(baseExp     * m.expReward),
      lingshi: Math.round(baseLingshi * m.lingshiReward)
    };
  };

  // ============================================================
  // 【六】样式（角标）
  // ============================================================
  function injectStyle() {
    if (document.getElementById('v437-balance-style')) return;
    const st = document.createElement('style');
    st.id = 'v437-balance-style';
    st.textContent = `
      .v437-round-badge {
        display: flex; justify-content: space-between; gap: 4px;
        margin-top: 6px; padding: 4px 6px;
        background: linear-gradient(90deg, rgba(245,201,122,.12), rgba(178,136,255,.12));
        border-radius: 8px; font-size: 10.5px; letter-spacing: 0.5px;
      }
      .v437-rb-rounds { color: #ff9b6b; }
      .v437-rb-reward { color: #f5c97a; }
      .v437-round-badge span { flex: 1; text-align: center; }
    `;
    document.head.appendChild(st);
  }

  // ============================================================
  // 【七】等待 SubjectPage 就绪
  // ============================================================
  function boot() {
    injectStyle();
    if (global.SubjectPage) {
      upgradeArenaCards();
    } else {
      setTimeout(boot, 200);
    }
  }
  boot();

  // ============================================================
  // 【八】诊断入口
  // ============================================================
  global.v437balance = {
    version: '4.3.7-balance',
    DIFF_MULT,
    testMonster(diff, rid) {
      return Game.scaleMonsterForRealm({
        name: '测试妖',
        diff: diff || 'normal',
        enemyRid: rid != null ? rid : (Game.state.char.realmId || 0)
      });
    },
    compareWithPlayer(diff) {
      const player = Game.state.char;
      const m = Game.scaleMonsterForRealm({ diff: diff || 'normal', enemyRid: player.realmId });
      return {
        玩家HP: player.maxHp, 玩家ATK: player.atk,
        妖兽HP: m.maxHp, 妖兽ATK: m.atk, 妖兽命中: (m.attackChance * 100).toFixed(0)+'%',
        HP比例: (m.maxHp / player.maxHp).toFixed(2) + '×',
        ATK比例: (m.atk / player.atk).toFixed(2) + '×',
        '每回合掉血%': ((m.atk * m.attackChance / player.maxHp) * 100).toFixed(1) + '%',
      };
    }
  };

  console.info(TAG, 'v4.3.7-balance 平衡补丁已装载 · window.v437balance 可用');
  console.info(TAG, '控制台可运行: v437balance.compareWithPlayer("normal") 查看数值对比');
})(window);
