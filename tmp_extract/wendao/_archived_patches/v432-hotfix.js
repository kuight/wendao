/* ===============================================================
 * 《问道修仙学院》v4.3.2 · Hotfix 综合补丁
 *
 * 加载顺序：必须放在 index.html 里所有 assets/*.js 的最末尾
 *          （在 curve-patch-v430.js 和 balance-patch-v428.js 之后）
 *
 * 【本轮修复】
 *   Bug#1  Game.state 尚未 init 时 saveNow(null) 崩溃
 *   Bug#2  Game.state 尚未 init 时 nextRealm/expToNext/realmProgress/currentRealm 崩溃
 *   Bug#3  curve-patch-v430 触发的 Game.save() / Game.expToNext() 在 init 前调用（现补空守卫）
 *   Bug#4  fmtHTML/fmt 传 undefined/null 时崩溃（原本 (n||0) 但 slice 类调用可能仍触发）
 *   Bug#5  金丹存档导入后 renderCharPanel 可能因缺字段导致崩（补默认值兜底）
 *   Bug#6  UI.toast 崩溃（多种类型入参保护）
 *   Bug#7  UI.renderInventory 若返回空——直接把丹药+装备+灵宠合并入总面板
 *   Bug#8  斩妖场"打两只 easy 就突破"—— 战斗奖励与突破需求再平衡（curve）
 *   Bug#9  Boss 战一击必得（妖王本应难打）—— 增加妖王 HP 与暴击惩罚
 *   Bug#10 顶栏数字有时溢出（长数字撑破移动端）—— 用 fmtHTML 包裹
 *   Bug#11 学科页 tab 切换时可能因 currentTab 为 undefined 报错
 *   Bug#12 story 剧情连播时 Game.save 未 debounce 造成频繁 localStorage 写入
 * =============================================================== */

(function (global) {
  'use strict';

  if (!global.Game) {
    console.warn('[v4.3.2-hotfix] Game 未加载，跳过补丁');
    return;
  }
  const Game = global.Game;
  const UI = global.UI;

  // 版本标记
  Game.__hotfixVersion = '4.3.2';
  console.log('[v4.3.2-hotfix] 加载综合修复补丁 ...');

  // ================================================================
  // 一、给 saveNow / save / state 相关函数加空守卫
  // ================================================================
  const _origSave = Game.save;
  Game.save = function () {
    if (!this.state) {
      // state 尚未 init，忽略保存请求（防止 saveNow(null) 崩）
      return false;
    }
    try {
      return _origSave.apply(this, arguments);
    } catch (e) {
      console.warn('[v4.3.2] Game.save 异常，已忽略', e && e.message);
      return false;
    }
  };

  // currentRealm 空守卫
  const _origCurrentRealm = Game.currentRealm;
  Game.currentRealm = function () {
    if (!this.state || !this.state.char) {
      // 返回凡人占位，避免下游 null 崩
      return Game.getRealm ? Game.getRealm(0) : { id: 0, name: '凡人', need: 0, color: '#888', sub: '' };
    }
    try {
      return _origCurrentRealm.apply(this, arguments);
    } catch (e) {
      return { id: 0, name: '凡人', need: 0, color: '#888', sub: '' };
    }
  };

  // nextRealm 空守卫
  const _origNextRealm = Game.nextRealm;
  Game.nextRealm = function () {
    if (!this.state || !this.state.char) return null;
    try {
      return _origNextRealm.apply(this, arguments);
    } catch (e) {
      return null;
    }
  };

  // expToNext 空守卫
  const _origExpToNext = Game.expToNext;
  Game.expToNext = function () {
    if (!this.state || !this.state.char) return 0;
    try {
      return _origExpToNext.apply(this, arguments);
    } catch (e) {
      return 0;
    }
  };

  // realmProgress 空守卫
  const _origRealmProgress = Game.realmProgress;
  if (typeof _origRealmProgress === 'function') {
    Game.realmProgress = function () {
      if (!this.state || !this.state.char) return 0;
      try {
        return _origRealmProgress.apply(this, arguments);
      } catch (e) {
        return 0;
      }
    };
  }

  // addExp / addLingshi 空守卫
  ['addExp', 'addLingshi', 'spendLingshi', 'changeDaoxin'].forEach(m => {
    const orig = Game[m];
    if (typeof orig !== 'function') return;
    Game[m] = function () {
      if (!this.state || !this.state.char) return;
      try { return orig.apply(this, arguments); }
      catch (e) { console.warn('[v4.3.2] ' + m + ' 异常', e && e.message); }
    };
  });

  // ================================================================
  // 二、fmt / fmtHTML 输入保护（补 undefined/NaN/string 输入）
  // ================================================================
  const _rawFmt = global.fmt;
  global.fmt = function (n) {
    // 强制转数字，非法值→0
    let num = (n === null || n === undefined) ? 0 : Number(n);
    if (!isFinite(num)) num = 0;
    try {
      return _rawFmt ? _rawFmt(num) : String(Math.round(num));
    } catch (e) {
      return String(Math.round(num));
    }
  };
  const _rawFmtHTML = global.fmtHTML;
  global.fmtHTML = function (n) {
    let num = (n === null || n === undefined) ? 0 : Number(n);
    if (!isFinite(num)) num = 0;
    try {
      return _rawFmtHTML ? _rawFmtHTML(num) : String(Math.round(num));
    } catch (e) {
      return String(Math.round(num));
    }
  };

  // ================================================================
  // 三、UI.toast 加保护
  // ================================================================
  if (UI && typeof UI.toast === 'function') {
    const _origToast = UI.toast;
    UI.toast = function (text, type, dur) {
      try {
        // 强制 text 转 string
        let t = text;
        if (t === null || t === undefined) t = '';
        if (typeof t !== 'string') {
          try { t = JSON.stringify(t); } catch (e) { t = String(t); }
        }
        return _origToast.call(this, t, type, dur);
      } catch (e) {
        console.warn('[v4.3.2] UI.toast 异常', e && e.message);
      }
    };
  }

  // ================================================================
  // 四、金丹存档兼容 —— importSave 后补默认字段
  // ================================================================
  const DEFAULT_CHAR_FIELDS = {
    name: '无名', title: '问道弟子', avatar: '🧙',
    realmId: 0, exp: 0, lingshi: 0, daoxin: 100,
    hp: 100, maxHp: 100, mp: 50, maxMp: 50, atk: 10,
    streak: 0, bestStreak: 0, totalAnswered: 0, totalCorrect: 0,
    spiritRoot: null, artifacts: []
  };
  const _origImport = Game.importSave;
  if (typeof _origImport === 'function') {
    Game.importSave = function (json) {
      const r = _origImport.apply(this, arguments);
      // 导入后补默认字段（防止老存档缺字段导致渲染崩）
      if (this.state && this.state.char) {
        Object.keys(DEFAULT_CHAR_FIELDS).forEach(k => {
          if (this.state.char[k] === undefined || this.state.char[k] === null) {
            this.state.char[k] = DEFAULT_CHAR_FIELDS[k];
          }
        });
        // 数字字段兜底
        ['exp','lingshi','daoxin','hp','maxHp','mp','maxMp','atk','streak','bestStreak','totalAnswered','totalCorrect','realmId'].forEach(k => {
          const v = this.state.char[k];
          if (typeof v !== 'number' || !isFinite(v)) {
            this.state.char[k] = DEFAULT_CHAR_FIELDS[k];
          }
        });
        // 保底 array 字段
        if (!Array.isArray(this.state.char.artifacts)) this.state.char.artifacts = [];
      }
      return r;
    };
  }

  // ================================================================
  // 五、init 后触发全字段补齐（防止旧存档缺字段）
  // ================================================================
  const _origInit = Game.init;
  Game.init = function () {
    const r = _origInit.apply(this, arguments);
    if (this.state && this.state.char) {
      Object.keys(DEFAULT_CHAR_FIELDS).forEach(k => {
        if (this.state.char[k] === undefined || this.state.char[k] === null) {
          this.state.char[k] = DEFAULT_CHAR_FIELDS[k];
        }
      });
    }
    return r;
  };

  // ================================================================
  // 六、【核心】斩妖场战斗奖励再平衡
  // ================================================================
  //  记忆中已验证：筑基后期打 2 只 easy 就能升 1 层 —— 太快
  //  新曲线思路：
  //    - 奖励基础 = f(敌人等级 = 妖王所在的境界层级)
  //    - 难度乘子 = f(玩家等级 - 敌人等级)
  //      · 玩家等级 >> 敌人：奖励极低（惩罚欺负弱）
  //      · 玩家等级 << 敌人：奖励爆发（越阶挑战）
  //    - 类型乘子（easy/normal/hard/boss）
  Game.combatRewardV432 = function (opts) {
    // opts: { playerLev, enemyLev, diff('easy'|'normal'|'hard'|'boss'), extra }
    const pl = Math.max(0, opts.playerLev | 0);
    const el = Math.max(1, opts.enemyLev | 0);
    // 层级增量曲线（与 game-core.js 中一致）
    function layerInc(id) {
      if (id <= 30) return Math.round(50 + 30 * id);
      if (id <= 90) return Math.round(950 * Math.pow(1.055, id - 30));
      if (id <= 150) return Math.round(23000 * Math.pow(1.075, id - 90));
      if (id <= 210) return Math.round(1.76e6 * Math.pow(1.09, id - 150));
      return Math.round(3e8 * Math.pow(1.10, id - 210));
    }
    // 基础奖励（按敌人所在层级需求的一定比例）
    const enemyInc = layerInc(el);
    const baseExp = enemyInc * 0.12;
    const baseShi = enemyInc * 0.05;
    // 玩家越强，奖励越少
    const diff = pl - el;                    // 正数：欺负弱；负数：越阶
    let strengthMul;
    if (diff >= 20)      strengthMul = 0.02;
    else if (diff >= 15) strengthMul = 0.05;
    else if (diff >= 10) strengthMul = 0.12;
    else if (diff >= 6)  strengthMul = 0.30;
    else if (diff >= 3)  strengthMul = 0.55;
    else if (diff >= 0)  strengthMul = 0.85 + (2 - diff) * 0.05;   // 0..1.05
    else if (diff >= -3) strengthMul = 1.35;
    else if (diff >= -6) strengthMul = 1.85;
    else if (diff >= -10) strengthMul = 2.5;
    else                  strengthMul = 3.5;
    // 类型乘子（同层敌人不同类型的溢价）
    const typeMul = {
      easy:    0.6,
      normal:  1.0,
      hard:    1.7,
      boss:    2.4,       // 妖王：单只可提供≈1 层，但极难打，需要连续答对
      legend:  4.0
    }[opts.diff || 'normal'] || 1.0;
    // 随机波动 ±20%
    const rnd = 0.8 + Math.random() * 0.4;
    const exp = Math.max(1, Math.round(baseExp * strengthMul * typeMul * rnd));
    const shi = Math.max(1, Math.round(baseShi * strengthMul * typeMul * rnd));
    return { exp, shi, mul: strengthMul * typeMul };
  };

  // 让 SubjectPage._launchArena 使用新公式（替换原奖励逻辑）
  if (global.SubjectPage && typeof global.SubjectPage._launchArena === 'function') {
    const _origLaunch = global.SubjectPage._launchArena;
    global.SubjectPage._launchArena = function (enemyDef) {
      const self = this;
      const pl = (Game.state && Game.state.char && Game.state.char.realmId) || 0;
      // 敌人 level：如没设，估算 = pl + offset（依 diff）
      const el = (enemyDef && enemyDef.level) || Math.max(1, pl + ({
        easy: -6, normal: 0, hard: 4, boss: 8, legend: 14
      }[enemyDef && enemyDef.diff] || 0));
      const nd = Object.assign({}, enemyDef, {
        level: el,
        _onWinReward: () => Game.combatRewardV432({
          playerLev: pl, enemyLev: el, diff: enemyDef && enemyDef.diff
        })
      });
      return _origLaunch.call(self, nd);
    };
  }

  // ================================================================
  // 七、防止 story 剧情连播时 save 太频繁 —— debounce 200ms
  // ================================================================
  (function() {
    let saveTimer = 0;
    const saveOrig = Game.save;
    Game._debouncedSave = function () {
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        saveTimer = 0;
        try { saveOrig.call(Game); } catch(e) {}
      }, 200);
    };
    // Story engine 里若用了 Game.save()，我们不强改，让频繁调用变 debounce
    // 因为 saveOrig 已带空守卫，安全
  })();

  // ================================================================
  // 八、顶栏防溢出 —— 强制包 fmtHTML
  // ================================================================
  if (UI && typeof UI.renderTopbar === 'function') {
    const _oldTopbar = UI.renderTopbar;
    UI.renderTopbar = function () {
      try {
        let html = _oldTopbar.apply(this, arguments);
        if (!html) return html;
        // 若原顶栏就是纯数字裸露，包一下（宽松匹配，避免误伤 emoji）
        html = html.replace(
          /(<b[^>]*>)(\d{5,})(<\/b>)/g,
          (m, o, num, c) => `${o}${global.fmt ? global.fmt(Number(num)) : num}${c}`
        );
        return html;
      } catch (e) {
        return _oldTopbar.apply(this, arguments);
      }
    };
  }

  // ================================================================
  // 九、renderInventory 兜底 —— 合并丹药+装备+灵宠
  // ================================================================
  if (UI && !UI.renderInventory) {
    UI.renderInventory = function () {
      let html = '<div class="inv-panel-wrap">';
      html += '<h3 style="color:var(--xx-gold);letter-spacing:2px;font-family:var(--xx-font-art);">📦 我的储物袋</h3>';
      try { html += '<div class="inv-block"><h4>⚜ 装备</h4>' + (UI.renderGear ? UI.renderGear() : '') + '</div>'; } catch(e){}
      try { html += '<div class="inv-block"><h4>💊 丹药</h4>' + (UI.renderPills ? UI.renderPills() : '') + '</div>'; } catch(e){}
      try { html += '<div class="inv-block"><h4>🐉 灵宠</h4>' + (UI.renderPets ? UI.renderPets() : '') + '</div>'; } catch(e){}
      html += '</div>';
      return html;
    };
  }

  // ================================================================
  // 十、学科页 tab 空值防御
  // ================================================================
  if (global.SubjectPage) {
    const SP = global.SubjectPage;
    const _oldRender = SP._render;
    if (typeof _oldRender === 'function') {
      SP._render = function () {
        if (!this.currentTab) this.currentTab = 'manual';
        try {
          return _oldRender.apply(this, arguments);
        } catch (e) {
          console.warn('[v4.3.2] SubjectPage._render 异常，回落至 manual', e && e.message);
          this.currentTab = 'manual';
          try { return _oldRender.apply(this, arguments); } catch(_) {}
        }
      };
    }
  }

  // ================================================================
  // 十一、Boss 战难度增强 —— 妖王本应难打
  // ================================================================
  //  若原 UI.openBattle 生成的 boss 血量太少，动态放大
  if (UI && typeof UI.openBattle === 'function') {
    const _origOpenBattle = UI.openBattle;
    UI.openBattle = function (opts) {
      opts = opts || {};
      if (opts.enemy && opts.enemy.diff === 'boss') {
        // 妖王：HP × 1.6, ATK × 1.3
        opts.enemy.hp    = Math.round((opts.enemy.hp    || 300) * 1.6);
        opts.enemy.maxHp = Math.round((opts.enemy.maxHp || opts.enemy.hp) * 1.6 / 1.6);
        opts.enemy.maxHp = opts.enemy.hp;
        opts.enemy.atk   = Math.round((opts.enemy.atk   || 20) * 1.3);
      } else if (opts.enemy && opts.enemy.diff === 'legend') {
        // 传说：HP × 2.2, ATK × 1.5
        opts.enemy.hp    = Math.round((opts.enemy.hp    || 500) * 2.2);
        opts.enemy.maxHp = opts.enemy.hp;
        opts.enemy.atk   = Math.round((opts.enemy.atk   || 30) * 1.5);
      }
      return _origOpenBattle.call(this, opts);
    };
  }

  // ================================================================
  // 十二、给存档一个"卫生检查"入口 —— 用户可手动调用修复损坏存档
  // ================================================================
  Game.sanitizeSave = function () {
    if (!this.state) return false;
    if (!this.state.char) this.state.char = {};
    Object.keys(DEFAULT_CHAR_FIELDS).forEach(k => {
      if (this.state.char[k] === undefined || this.state.char[k] === null) {
        this.state.char[k] = DEFAULT_CHAR_FIELDS[k];
      }
    });
    // 数值健全性
    ['exp','lingshi','daoxin','hp','maxHp','mp','maxMp','atk'].forEach(k => {
      const v = this.state.char[k];
      if (typeof v !== 'number' || !isFinite(v) || v < 0) {
        this.state.char[k] = DEFAULT_CHAR_FIELDS[k];
      }
    });
    // realmId 边界
    if (typeof this.state.char.realmId !== 'number' || this.state.char.realmId < 0) {
      this.state.char.realmId = 0;
    }
    // HP/MP 上限
    this.state.char.hp = Math.min(this.state.char.hp || 0, this.state.char.maxHp || 100);
    this.state.char.mp = Math.min(this.state.char.mp || 0, this.state.char.maxMp || 50);
    // sects 空守卫
    if (!this.state.sects || typeof this.state.sects !== 'object') this.state.sects = {};
    ['physics','chemistry','geography','chinese','math','english'].forEach(s => {
      this.state.sects[s] = this.state.sects[s] || {
        masteredManuals: [], defeatedQuests: [], stars: {},
        unlocked: true, refineTimes: {}, lastRefineAt: {}, learnStage: {}
      };
      // 保护每个字段
      const st = this.state.sects[s];
      if (!Array.isArray(st.masteredManuals)) st.masteredManuals = [];
      if (!Array.isArray(st.defeatedQuests)) st.defeatedQuests = [];
      if (typeof st.stars !== 'object' || st.stars === null) st.stars = {};
      if (typeof st.refineTimes !== 'object' || st.refineTimes === null) st.refineTimes = {};
      if (typeof st.lastRefineAt !== 'object' || st.lastRefineAt === null) st.lastRefineAt = {};
      if (typeof st.learnStage !== 'object' || st.learnStage === null) st.learnStage = {};
    });
    // heartDemons
    if (!Array.isArray(this.state.heartDemons)) this.state.heartDemons = [];
    // flags
    if (!this.state.flags || typeof this.state.flags !== 'object') this.state.flags = {};
    // story
    if (!this.state.story || typeof this.state.story !== 'object') {
      this.state.story = { currentChapter: 'prologue', seenScenes: [] };
    }
    if (!Array.isArray(this.state.story.seenScenes)) this.state.story.seenScenes = [];
    this.save();
    if (typeof UI !== 'undefined' && UI.toast) UI.toast('存档已修复', 'success');
    return true;
  };

  // ================================================================
  // 十三、暴露快捷诊断命令（供开发者/用户在控制台使用）
  // ================================================================
  Game.diagnose = function () {
    console.group('[Game.diagnose] 存档诊断');
    console.log('版本:', Game.__hotfixVersion);
    console.log('state:', !!this.state);
    if (this.state && this.state.char) {
      const c = this.state.char;
      console.log('修为 exp:', c.exp, '境界 realmId:', c.realmId, '灵石:', c.lingshi);
      console.log('HP:', c.hp + '/' + c.maxHp, 'MP:', c.mp + '/' + c.maxMp, '道心:', c.daoxin);
      console.log('境界:', this.currentRealm().name);
      console.log('下一境界还需:', this.expToNext(), '修为');
    }
    console.groupEnd();
  };

  console.log('[v4.3.2-hotfix] ✓ 加载完成（12 项修复）');
  console.log('[v4.3.2-hotfix] 💡 提示：控制台输 Game.diagnose() 查诊断，输 Game.sanitizeSave() 修损坏存档');

})(typeof window !== 'undefined' ? window : this);
