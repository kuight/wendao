/* =====================================================================
 * v4.3.5j · 修复补丁 JS
 *   ④ 静默追认成就（防"回山门弹一堆已完成的成就"）
 *   ⑤ 妖兽属性加强：以怪物境界（enemyRid）为准 + 上调 HP/ATK 系数
 *   ⑥ 音效系统：接入网络免费音效 CDN，答对/答错/胜利/失败/突破/点击
 *
 *   加载点：<script src="assets/v435j-fix.js"></script>
 *     必须放在 game-core.js / v435d-arena-fat.js / ui-components.js
 *     "之后"，确保能覆盖它们的实现。
 * =====================================================================*/
(function (global) {
  'use strict';
  if (!global.Game) { console.warn('[v435j] Game 未就绪，跳过'); return; }

  var TAG = '[v435j]';

  /* ========================================================
   * ④  成就静默追认（增强版）
   * --------------------------------------------------------
   * 原始 _silentAuditAchievements 只跑一次（有 _v435gSilentAudited
   * 锁）。后续新增的成就 rec 不存在时，第一次答题/回山门就会被
   * _checkAchievements 判定为"刚达标"→ 发奖 + 弹 toast，用户看到
   * "一堆完成过的成就"。
   *
   * 修法：
   *   A. 每次 init/load 都跑一次"补丁式追认"——只处理 rec 不存在或
   *      rec.done=false 的项，无锁，不弹 toast，不发奖励。
   *   B. 保留原字段名 rec.silentAudit=true 让下游知道这条是补录的。
   * ======================================================== */
  function silentAuditAllPending() {
    if (!Game.ACHIEVEMENTS) return 0;
    var s = Game.state; if (!s || !s.char) return 0;
    s.achievements = s.achievements || {};
    var audited = 0;
    Object.keys(Game.ACHIEVEMENTS).forEach(function (aid) {
      var a = Game.ACHIEVEMENTS[aid];
      var rec = s.achievements[aid] = s.achievements[aid] || { progress: 0, done: false };
      if (rec.done) return;
      try {
        var cur = (typeof a.check === 'function') ? (a.check(s) || 0) : 0;
        var target = a.target || 1;
        rec.progress = Math.min(target, cur);
        if (cur >= target) {
          rec.done = true;
          rec.doneAt = Date.now();
          rec.silentAudit = true;   // 补录标记：不奖不弹
          rec.rewardGiven = true;   // 视为奖励已发过，防止后续 _checkAchievements 再发
          audited++;
        }
      } catch (e) {}
    });
    if (audited > 0) {
      Game.save && Game.save();
      console.info(TAG, '补丁式静默追认', audited, '项成就');
    }
    return audited;
  }

  // 立即跑一次（等 Game.state 就绪）
  function runInitialAudit() {
    if (Game.state && Game.state.char) {
      silentAuditAllPending();
    } else {
      setTimeout(runInitialAudit, 100);
    }
  }
  runInitialAudit();

  // 包装 _checkAchievements：在真正 check 之前先跑一次静默追认，
  // 把新引入的成就项一次性标 done，避免它们进入弹窗队列
  if (typeof Game._checkAchievements === 'function') {
    var _origCheck = Game._checkAchievements.bind(Game);
    Game._checkAchievements = function () {
      // 只跑"处理未 done 的补录"——不会重复给奖
      try { silentAuditAllPending(); } catch (e) {}
      return _origCheck.apply(this, arguments);
    };
    console.info(TAG, '已包装 _checkAchievements（前置静默追认）');
  }

  /* ========================================================
   * ⑤  妖兽属性加强
   * --------------------------------------------------------
   * 用户反馈：斩妖场妖兽 HP/攻击远低于同阶玩家（视觉上"一拳一个"）。
   * 分析：
   *   - v435d-arena-fat 已传 enemyRid:c.realmId ✓
   *   - scaleMonsterForRealm 的原公式：
   *       hpVal = target.maxHp * 0.88 * diffMul * gapHp
   *       atkVal = target.atk   * 0.62 * diffMul * gapAtk
   *   - 玩家在同阶时 target.maxHp ≈ 玩家 maxHp，×0.88 后妖兽偏弱
   *
   * 修法：
   *   重写 scaleMonsterForRealm，同阶 normal 妖 HP >= 玩家 HP；
   *   精英 hard = 1.6× 玩家；妖王 boss = 2.8× 玩家；越阶再额外惩罚。
   *   ATK 也提到能对玩家造成 3-8% HP 每回合的伤害区间。
   * ======================================================== */
  var DIFF_MULT = {
    easy:   { hp: 0.75, atk: 0.60 },
    normal: { hp: 1.15, atk: 0.95 },   // 同阶 normal 已经比玩家硬一档
    hard:   { hp: 1.85, atk: 1.30 },   // 精英
    boss:   { hp: 3.20, atk: 1.85 },   // 妖王
    legend: { hp: 5.00, atk: 2.40 }    // 真君
  };

  Game.scaleMonsterForRealm = function (base) {
    base = base || {};
    var playerRid = (this.state && this.state.char && this.state.char.realmId) || 0;
    var enemyRid  = Number.isFinite(base.enemyRid) ? base.enemyRid : playerRid;
    var gap = enemyRid - playerRid;

    var target = this.getTargetStatsForRealm(enemyRid);
    var diff = base.diff || 'normal';
    var m = DIFF_MULT[diff] || DIFF_MULT.normal;

    // 越阶修正：高阶怪额外加成，低阶怪衰减，但都封顶
    // gap > 0：怪比玩家高，HP/ATK 再放大；gap < 0：低阶怪弱一点
    var gapHp  = 1 + Math.max(-0.35, Math.min(1.5, gap * 0.18));
    var gapAtk = 1 + Math.max(-0.30, Math.min(1.2, gap * 0.14));

    var hpVal  = Math.max(120, Math.round(target.maxHp * m.hp  * gapHp));
    var atkVal = Math.max(15,  Math.round(target.atk   * m.atk * gapAtk));
    var defVal = Math.max(2,   Math.round((target.def || 0)   * 0.55));

    return {
      name: base.name || '妖兽',
      hp: hpVal, maxHp: hpVal,
      atk: atkVal, def: defVal,
      diff: diff,
      enemyRid: enemyRid,
      attackChance: diff === 'legend' ? 0.92
                  : diff === 'boss'  ? 0.85
                  : diff === 'hard'  ? 0.72
                  : diff === 'normal'? 0.58 : 0.45,
      title: base.title || ''
    };
  };
  console.info(TAG, '已重写 Game.scaleMonsterForRealm（HP/ATK 加强，按 enemyRid）');

  // 同步给旧接口 scaleMonster：让用它的旧代码（subject-page._renderArena）
  // 也走"按怪物境界"路线；如果调用方没传 enemyRid，则用一个基于卡片索引
  // 的 rid（arena 每卡有 realmId 字段，会被上层填入 baseDef.enemyRid）
  var _origScaleMonster = Game.scaleMonster ? Game.scaleMonster.bind(Game) : null;
  Game.scaleMonster = function (baseDef) {
    baseDef = baseDef || {};
    // 若没传 enemyRid，尝试从卡片元数据推断
    if (!Number.isFinite(baseDef.enemyRid) && Number.isFinite(baseDef.realmId)) {
      baseDef.enemyRid = baseDef.realmId;
    }
    // 优先走加强后的 scaleMonsterForRealm
    var scaled = Game.scaleMonsterForRealm(baseDef);
    var t = Game.getMonsterTitle ? Game.getMonsterTitle(scaled.diff, scaled.enemyRid)
                                 : { titles: [], tier: scaled.diff };
    return Object.assign({}, baseDef, scaled, {
      titles: t.titles,
      tier: t.tier,
      realmName: (Game._playerTierName ? Game._playerTierName(scaled.enemyRid) : '')
    });
  };
  console.info(TAG, '已重写 Game.scaleMonster（转发到 scaleMonsterForRealm）');

  /* ========================================================
   * ⑥  音效系统（Sfx）
   * --------------------------------------------------------
   * 使用免费网络音效（CDN），失败自动降级为 WebAudio 合成音。
   * 事件订阅：
   *   answer(correct)   → sfx_correct / sfx_wrong
   *   battleWin         → sfx_victory
   *   battleLose        → sfx_defeat
   *   breakthrough      → sfx_breakthrough
   *   manualMastered    → sfx_success
   *   achievementUnlock → sfx_achievement
   *   点击 .xx-btn      → sfx_click
   * ======================================================== */
  var SFX_URLS = {
    correct:     'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@v2.1.4/example/pratt/happy-notification.mp3',
    // 备用：多个 CDN 源，任一可用即可
    click:       'https://cdn.pixabay.com/download/audio/2022/03/15/audio_a5e2c99d81.mp3',
    wrong:       'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3',
    victory:     'https://cdn.pixabay.com/download/audio/2022/03/15/audio_88447e769f.mp3',
    defeat:      'https://cdn.pixabay.com/download/audio/2021/08/09/audio_c8c8a73467.mp3',
    breakthrough:'https://cdn.pixabay.com/download/audio/2022/10/16/audio_dc39bde1ff.mp3',
    achievement: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_88447e769f.mp3',
    success:     'https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3'
  };

  var Sfx = {
    enabled: true,
    volume: 0.5,
    _cache: {},
    _actx: null,

    setEnabled: function (b) {
      this.enabled = !!b;
      try {
        var s = Game.state && Game.state.settings;
        if (s) { s.soundOn = this.enabled; Game.save && Game.save(); }
      } catch(e){}
    },
    setVolume: function (v) { this.volume = Math.max(0, Math.min(1, +v || 0)); },

    play: function (key) {
      if (!this.enabled) return;
      var url = SFX_URLS[key];
      if (!url) return this._beep(key);   // 未配置的 key → 合成音
      try {
        var a = this._cache[key];
        if (!a) {
          a = new Audio(url);
          a.preload = 'auto';
          a.crossOrigin = 'anonymous';
          this._cache[key] = a;
        }
        a.currentTime = 0;
        a.volume = this.volume;
        var p = a.play();
        if (p && p.catch) p.catch(function () { Sfx._beep(key); });
      } catch (e) {
        this._beep(key);
      }
    },

    // WebAudio 合成音兜底：当网络 SFX 加载失败或被浏览器禁用时使用
    _beep: function (key) {
      try {
        if (!this._actx) {
          var AC = global.AudioContext || global.webkitAudioContext;
          if (!AC) return;
          this._actx = new AC();
        }
        var ctx = this._actx;
        var now = ctx.currentTime;
        var freqs = {
          click:        [800],
          correct:      [523, 659, 784],   // C E G 上行
          wrong:        [220, 180],        // 下降
          victory:      [523, 659, 784, 1046], // C E G C 明亮
          defeat:       [330, 262, 196],       // 下沉
          breakthrough: [392, 494, 587, 784, 987], // 上升华丽
          achievement:  [659, 784, 988],
          success:      [523, 784]
        };
        var seq = freqs[key] || [440];
        seq.forEach(function (f, i) {
          var o = ctx.createOscillator();
          var g = ctx.createGain();
          o.type = 'sine';
          o.frequency.value = f;
          g.gain.setValueAtTime(0, now + i*0.09);
          g.gain.linearRampToValueAtTime(Sfx.volume * 0.25, now + i*0.09 + 0.02);
          g.gain.exponentialRampToValueAtTime(0.001, now + i*0.09 + 0.18);
          o.connect(g); g.connect(ctx.destination);
          o.start(now + i*0.09);
          o.stop(now + i*0.09 + 0.2);
        });
      } catch (e) {}
    }
  };

  // 从存档读取音效开关
  try {
    var soundOn = Game.state && Game.state.settings && Game.state.settings.soundOn;
    Sfx.enabled = soundOn !== false; // 默认开
  } catch(e){}

  global.Sfx = Sfx;

  // ---- 事件挂载 ----
  if (Game.on) {
    Game.on('answer', function (d) {
      Sfx.play(d && d.correct ? 'correct' : 'wrong');
    });
    Game.on('battleWin',  function () { Sfx.play('victory'); });
    Game.on('battleLose', function () { Sfx.play('defeat'); });
    Game.on('breakthrough', function () { Sfx.play('breakthrough'); });
    Game.on('manualMastered', function () { Sfx.play('success'); });
    Game.on('achievementUnlock', function () { Sfx.play('achievement'); });
  }

  // 全局按钮点击音（用事件委托）
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t) return;
    // 匹配任意 .xx-btn 或 button
    if (t.closest && (t.closest('.xx-btn') || t.closest('button.xx-btn-primary') || t.closest('.sect-card'))) {
      Sfx.play('click');
    }
  }, true);

  console.info(TAG, '音效系统已装载（Sfx.play(key), Sfx.setEnabled(bool)）');

  /* ========================================================
   * 附：暴露诊断入口，方便你控制台调试
   * ======================================================== */
  global.v435j = {
    version: '4.3.5j',
    silentAuditAllPending: silentAuditAllPending,
    Sfx: Sfx,
    testMonster: function (diff, rid) {
      return Game.scaleMonsterForRealm({
        name: '测试妖',
        diff: diff || 'normal',
        enemyRid: rid != null ? rid : (Game.state.char.realmId || 0)
      });
    }
  };

  console.info(TAG, 'v4.3.5j 补丁装载完成 · window.v435j 可用');
})(window);
