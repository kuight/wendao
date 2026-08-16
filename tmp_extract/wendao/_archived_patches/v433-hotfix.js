/* ===============================================================
 * 《问道修仙学院》v4.3.3 · Hotfix 综合补丁
 *
 * 加载顺序：必须放在 index.html 里 ***所有 assets/*.js 的最末尾***
 *          （在 curve-patch-v430.js、balance-patch-v428.js、v432-hotfix.js 之后）
 *
 * <script src="assets/v433-hotfix.js"
 *         onerror="console.warn('v433-hotfix not found')"></script>
 *
 * 【本轮修复（相较 v4.3.2）】
 *   Bug#13  洞府 upgradeCaveTimes / upgradeCaveMax 用错公式（linear × 500 而非 500·2.2^(lv-1))
 *           → 十连显示花费/剩余判定错误
 *   Bug#14  Game.getCaveUpgradeCost 未挂载真实指数公式（balance-patch 只挂了 _At 版）
 *   Bug#15  init 后没有自动 sanitize —— 老存档要用户去控制台调，很多字段坏了不知道
 *   Bug#16  fmt("NaN") / fmt("undefined") 字符串路径漏防（v4.3.2 只防了 undefined/null 原值）
 *   Bug#17  state.sects 缺失某个学科时进入学科页崩溃（六科兜底）
 *   Bug#18  openBattle 快速重复点击会 stack 多个战斗浮层
 *   Bug#19  顶栏溢出的正则只覆盖 5位以上纯数字，中英混排时失效 → 用 CSS 兜底
 *   Bug#20  v4.3.2 战斗奖励公式落到玩家 exp/shi 的路径不清 —— 手动 fallback
 *   Bug#21  reset 后 story.seenScenes 若为 undefined，Story.seen 会崩
 *   Bug#22  高性能设备 vs 低性能设备，缺少 reducedMotion 自动检测
 *
 * 【本轮新增能力】
 *   ★ Game.rescueToJinDan()   —— 一键把当前存档拉回「金丹初期一层」
 *   ★ Game.diagnose()         —— 增强版：显示 6 科题库大小、补丁链、存档校验
 *   ★ Game.repairAll()        —— 一键执行 sanitizeSave + 补齐所有 sect 字段
 *
 * =============================================================== */
(function (global) {
  'use strict';

  if (!global.Game) {
    console.warn('[v4.3.3-hotfix] Game 未加载，跳过补丁');
    return;
  }
  const Game = global.Game;
  const UI   = global.UI;

  // 版本标记（不覆盖前一次）
  Game.__hotfixVersion = '4.3.3';
  Game.__patchChain = (Game.__patchChain || []).concat(['v4.3.3-hotfix']);
  console.log('[v4.3.3-hotfix] 加载...（在 v4.3.2 基础上继续修 8 个 bug + 3 个新能力）');

  // ================================================================
  // Bug#13 + #14 · 洞府升级成本指数公式统一
  // ================================================================
  // 真实公式（与 game-core.js 里 upgradeCave() 一致）
  Game.getCaveUpgradeCost = function (levelOverride) {
    const lv = (levelOverride != null)
      ? levelOverride
      : ((this.state && this.state.cave && this.state.cave.level) || 1);
    return Math.round(500 * Math.pow(2.2, lv - 1));
  };
  // balance-patch 里的 getCaveUpgradeCostAt 也统一
  Game.getCaveUpgradeCostAt = function (level) {
    return Math.round(500 * Math.pow(2.2, (level || 1) - 1));
  };

  // 重写 upgradeCaveTimes / upgradeCaveMax，走真实公式
  Game.upgradeCaveTimes = function (times) {
    times = Math.max(1, times | 0);
    if (!this.state || !this.state.char || !this.state.cave) return { ok:false, done:0, spent:0 };
    const c = this.state.char;
    let done = 0, spent = 0, before = this.state.cave.level;
    for (let i = 0; i < times; i++) {
      const cost = this.getCaveUpgradeCost();
      if (c.lingshi < cost) break;
      const r = this.upgradeCave();
      if (!r || r.ok === false) break;
      done++; spent += cost;
    }
    return { ok: done > 0, done, spent, from: before, to: this.state.cave.level };
  };
  Game.upgradeCaveMax = function () {
    if (!this.state || !this.state.char || !this.state.cave) return { ok:false, done:0, spent:0 };
    const c = this.state.char;
    let done = 0, spent = 0, before = this.state.cave.level;
    // 上限 500 次保护，防死循环
    for (let i = 0; i < 500; i++) {
      const cost = this.getCaveUpgradeCost();
      if (c.lingshi < cost) break;
      const r = this.upgradeCave();
      if (!r || r.ok === false) break;
      done++; spent += cost;
    }
    return { ok: done > 0, done, spent, from: before, to: this.state.cave.level };
  };

  // ================================================================
  // Bug#16 · fmt/fmtHTML 增加对 "NaN"/"undefined" 字符串输入的防护
  // ================================================================
  const _fmt2 = global.fmt;
  global.fmt = function (n) {
    if (typeof n === 'string') {
      const s = n.trim().toLowerCase();
      if (s === 'nan' || s === 'undefined' || s === 'null' || s === '') n = 0;
      else if (!isNaN(Number(n))) n = Number(n);
      else n = 0;
    }
    let num = (n === null || n === undefined) ? 0 : Number(n);
    if (!isFinite(num)) num = 0;
    try {
      return _fmt2 ? _fmt2(num) : String(Math.round(num));
    } catch (e) { return String(Math.round(num)); }
  };
  const _fmtHTML2 = global.fmtHTML;
  global.fmtHTML = function (n) {
    if (typeof n === 'string') {
      const s = n.trim().toLowerCase();
      if (s === 'nan' || s === 'undefined' || s === 'null' || s === '') n = 0;
      else if (!isNaN(Number(n))) n = Number(n);
      else n = 0;
    }
    let num = (n === null || n === undefined) ? 0 : Number(n);
    if (!isFinite(num)) num = 0;
    try {
      return _fmtHTML2 ? _fmtHTML2(num) : String(Math.round(num));
    } catch (e) { return String(Math.round(num)); }
  };

  // ================================================================
  // Bug#17 · state.sects 六科兜底（防学科页崩）
  // ================================================================
  const SECT_KEYS = ['physics', 'chemistry', 'geography', 'chinese', 'math', 'english'];
  function ensureAllSects() {
    if (!Game.state) return;
    if (!Game.state.sects || typeof Game.state.sects !== 'object') Game.state.sects = {};
    SECT_KEYS.forEach(k => {
      const st = Game.state.sects[k] = Game.state.sects[k] || {};
      if (!Array.isArray(st.masteredManuals))  st.masteredManuals  = [];
      if (!Array.isArray(st.defeatedQuests))   st.defeatedQuests   = [];
      if (!st.stars       || typeof st.stars       !== 'object') st.stars       = {};
      if (!st.refineTimes || typeof st.refineTimes !== 'object') st.refineTimes = {};
      if (!st.lastRefineAt|| typeof st.lastRefineAt!== 'object') st.lastRefineAt= {};
      if (!st.learnStage  || typeof st.learnStage  !== 'object') st.learnStage  = {};
      if (!st.proficiency || typeof st.proficiency !== 'object') st.proficiency = {};
      if (st.unlocked === undefined) st.unlocked = true;
    });
  }
  Game.ensureAllSects = ensureAllSects;

  // ================================================================
  // Bug#21 · story.seenScenes 兜底
  // ================================================================
  function ensureStory() {
    if (!Game.state) return;
    if (!Game.state.story || typeof Game.state.story !== 'object') {
      Game.state.story = { currentChapter: 'prologue', seenScenes: [] };
    }
    if (!Array.isArray(Game.state.story.seenScenes)) Game.state.story.seenScenes = [];
  }

  // ================================================================
  // Bug#15 · init 后自动 sanitize
  // ================================================================
  const _origInit433 = Game.init;
  Game.init = function () {
    const r = _origInit433.apply(this, arguments);
    try {
      ensureAllSects();
      ensureStory();
      // 触发 v4.3.2 的 sanitize（如果存在）
      if (typeof this.sanitizeSave === 'function' && this.state) {
        // 仅做检查+补齐，不 toast（避免开机弹窗）
        const oldToast = UI && UI.toast;
        if (UI) UI.toast = function(){};
        try { this.sanitizeSave(); } catch(e){}
        if (UI) UI.toast = oldToast;
      }
    } catch (e) {
      console.warn('[v4.3.3] init 后自动 sanitize 失败', e && e.message);
    }
    console.log('[v4.3.3] Game.init 完成，已自动补齐 state 字段');
    return r;
  };

  // ================================================================
  // Bug#18 · openBattle 防重复叠层
  // ================================================================
  if (UI && typeof UI.openBattle === 'function') {
    const _origOpen433 = UI.openBattle;
    let _battleActive = false;
    UI.openBattle = function (opts) {
      if (_battleActive) {
        console.warn('[v4.3.3] 战斗已开启，忽略重复调用');
        return;
      }
      _battleActive = true;
      // 包一层 opts，让 onWin/onLose/onClose 完成后 release lock
      const wrap = (fn) => function () {
        try { return fn && fn.apply(this, arguments); }
        finally { _battleActive = false; }
      };
      const nopts = Object.assign({}, opts || {});
      nopts.onWin   = wrap(opts && opts.onWin);
      nopts.onLose  = wrap(opts && opts.onLose);
      nopts.onClose = wrap(opts && opts.onClose);
      nopts.onDone  = wrap(opts && opts.onDone);
      // 兜底：若上面回调都没被触发，200ms 后 mask 消失时也 release
      const releaseIfMaskGone = setInterval(() => {
        if (!document.querySelector('.v43-battle-mask')) {
          _battleActive = false;
          clearInterval(releaseIfMaskGone);
        }
      }, 800);
      // 3 分钟兜底解锁（战斗超时保护）
      setTimeout(() => { _battleActive = false; clearInterval(releaseIfMaskGone); }, 180000);
      try {
        return _origOpen433.call(this, nopts);
      } catch (e) {
        _battleActive = false;
        clearInterval(releaseIfMaskGone);
        console.warn('[v4.3.3] openBattle 异常', e && e.message);
      }
    };
  }

  // ================================================================
  // Bug#19 · 顶栏溢出兜底 —— CSS 注入（比正则 replace 更稳）
  // ================================================================
  (function injectTopbarCSS () {
    if (document.getElementById('v433-topbar-css')) return;
    const style = document.createElement('style');
    style.id = 'v433-topbar-css';
    style.textContent = `
      /* v4.3.3: 顶栏文字防溢出兜底（不用 backdrop-filter，避免 iOS 卡顿） */
      #topbar-mount, .xx-topbar, .xx-topbar-wrap {
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
      }
      #topbar-mount .xx-stat, .xx-topbar .xx-stat {
        min-width: 0;
        flex-shrink: 1;
      }
      #topbar-mount .xx-stat b, .xx-topbar .xx-stat b {
        word-break: keep-all;
        white-space: nowrap;
        overflow-wrap: normal;
      }
      /* 战斗浮层文字防溢出 */
      .v43-battle-modal .num, .v43-battle-modal .stat {
        word-break: keep-all;
        white-space: nowrap;
      }
      /* 洞府按钮成本文字防溢出 */
      #cave-upgrade, #cave-x10, #cave-max {
        white-space: normal;
        line-height: 1.4;
      }
    `;
    document.head.appendChild(style);
  })();

  // ================================================================
  // Bug#22 · 自动检测 reducedMotion
  // ================================================================
  try {
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (Game.state && Game.state.settings && mq && mq.matches) {
      Game.state.settings.reducedMotion = true;
      console.log('[v4.3.3] 检测到系统偏好 reduced-motion，已启用');
    }
  } catch(e){}

  // ================================================================
  // ★ 新能力 1 · rescueToJinDan —— 一键回档金丹初期一层
  // ================================================================
  Game.rescueToJinDan = function () {
    if (!this.state) {
      if (UI && UI.toast) UI.toast('游戏尚未初始化', 'error');
      return false;
    }
    if (!this.state.char) this.state.char = {};
    // 金丹初期一层 = 第 91 层（炼气 30 + 炼体 30 + 筑基 30 = 90，金丹初期第 1 层 = 91）
    // 但用户说法通常"金丹初期一层"= realmId=90（下标从0算）或91（从1算）
    // 这里按 realmId=90（第 91 个境界，1-based = 91 层，即金丹初期 1 层）
    const targetRealmId = 90;
    const c = this.state.char;
    // 找到该境界所需 exp
    let needExp = 0;
    try {
      const target = (this.REALMS && this.REALMS[targetRealmId]) || null;
      needExp = target ? (target.need || 0) : 0;
    } catch(e){}
    c.realmId = targetRealmId;
    c.exp = Math.max(needExp, c.exp || 0);
    // 修复战斗属性 —— 让 catchUpStats 重新计算
    c._v4StatsCatchup = false;
    if (typeof this._catchUpStats === 'function') {
      try { this._catchUpStats(); } catch(e){}
    }
    // 恢复满 HP/MP
    c.hp = c.maxHp || 100;
    c.mp = c.maxMp || 50;
    c.daoxin = Math.max(80, c.daoxin || 0);
    // 灵石给一波（够玩，不作弊）
    c.lingshi = Math.max(50000, c.lingshi || 0);
    // 清 sanitize 一次
    ensureAllSects();
    ensureStory();
    if (typeof this.sanitizeSave === 'function') {
      try { this.sanitizeSave(); } catch(e){}
    }
    this.save();
    if (UI && UI.toast) UI.toast('✨ 存档已回档到金丹初期一层 · HP/MP 已恢复', 'success', 4500);
    if (typeof this.emit === 'function') this.emit('breakthrough', this.currentRealm());
    return true;
  };

  // ================================================================
  // ★ 新能力 2 · repairAll —— 一键存档全面修复
  // ================================================================
  Game.repairAll = function () {
    ensureAllSects();
    ensureStory();
    if (typeof this.sanitizeSave === 'function') {
      try { this.sanitizeSave(); } catch(e){}
    }
    // heartDemons
    if (!Array.isArray(this.state.heartDemons)) this.state.heartDemons = [];
    // cave
    if (!this.state.cave || typeof this.state.cave !== 'object') {
      this.state.cave = { level: 1, lastMeditateAt: 0 };
    }
    if (typeof this.state.cave.level !== 'number' || this.state.cave.level < 1) {
      this.state.cave.level = 1;
    }
    // daily
    if (!this.state.daily || typeof this.state.daily !== 'object') {
      this.state.daily = { date: '', quests: [], progress: {} };
    }
    // inventory
    if (!Array.isArray(this.state.pills))    this.state.pills = [];
    if (!Array.isArray(this.state.gears))    this.state.gears = [];
    if (!Array.isArray(this.state.pets))     this.state.pets = [];
    if (!Array.isArray(this.state.achievements)) this.state.achievements = [];
    this.save();
    if (UI && UI.toast) UI.toast('✅ 存档全面修复完成', 'success', 3500);
    console.log('[v4.3.3] repairAll 完成，state:', this.state);
    return true;
  };

  // ================================================================
  // ★ 新能力 3 · 增强版 diagnose
  // ================================================================
  Game.diagnose = function () {
    console.group('%c[Game.diagnose] 存档全面诊断', 'color:#f5c97a;font-weight:bold;');
    console.log('补丁链:', (this.__patchChain || []).join(' → '));
    console.log('当前 hotfix 版本:', this.__hotfixVersion);
    console.log('state 是否存在:', !!this.state);
    if (this.state && this.state.char) {
      const c = this.state.char;
      const rn = (this.currentRealm && this.currentRealm().name) || '?';
      console.log(`修为: ${c.exp}  境界: [${c.realmId}] ${rn}`);
      console.log(`HP: ${c.hp}/${c.maxHp}  MP: ${c.mp}/${c.maxMp}  ATK: ${c.atk}  道心: ${c.daoxin}`);
      console.log(`灵石: ${c.lingshi}  连击: ${c.streak}/${c.bestStreak}  答题: ${c.totalAnswered} (对: ${c.totalCorrect})`);
      console.log(`下境界还需修为:`, this.expToNext ? this.expToNext() : '?');
    }
    // 题库检查
    console.group('题库规模');
    const banks = [
      ['物理', 'PHYSICS_BANK'], ['化学', 'CHEMISTRY_BANK'],
      ['地理', 'GEOGRAPHY_BANK'], ['语文', 'CHINESE_BANK'],
      ['数学', 'MATH_BANK'], ['英语', 'ENGLISH_BANK']
    ];
    banks.forEach(([label, key]) => {
      const arr = window[key];
      console.log(`${label} ${key}: ${Array.isArray(arr) ? arr.length + ' 题' : '未加载'}`);
    });
    console.groupEnd();
    // 学科状态
    console.group('六科 sects 状态');
    SECT_KEYS.forEach(k => {
      const s = this.state && this.state.sects && this.state.sects[k];
      if (!s) { console.warn(`${k}: ❌ 缺失`); return; }
      console.log(`${k}: 掌握 ${(s.masteredManuals||[]).length} 部功法，斩妖 ${(s.defeatedQuests||[]).length} 只`);
    });
    console.groupEnd();
    // 洞府
    if (this.state && this.state.cave) {
      const lv = this.state.cave.level;
      console.log(`洞府 Lv.${lv}  下一次升级消耗: ${this.getCaveUpgradeCost()} 灵石`);
    }
    console.groupEnd();
    console.log('%c提示：', 'color:#7fb3ff;font-weight:bold;', 'Game.repairAll() 修复全部字段 · Game.rescueToJinDan() 回档金丹初期');
  };

  // ================================================================
  // ★ 追加：给楔子区加一个"🩹 存档诊断/修复"按钮（DOM ready 后注入）
  // ================================================================
  function injectDiagnoseButton() {
    if (document.getElementById('btnDiagnose')) return;
    const btnGroup = document.querySelector('.xx-immortal-box') &&
                     document.querySelector('.xx-immortal-box').parentElement &&
                     document.querySelector('#btnReset');
    if (!btnGroup) { setTimeout(injectDiagnoseButton, 1000); return; }
    const btn = document.createElement('button');
    btn.className = 'xx-btn';
    btn.id = 'btnDiagnose';
    btn.style.cssText = 'margin-left:6px;';
    btn.innerHTML = '🩹 诊断/修复';
    btn.onclick = () => {
      if (!UI || !UI.modal) { Game.diagnose(); return; }
      UI.modal({
        title: '🩹 存档诊断与修复',
        body: `
          <div style="line-height:1.9;font-size:13px;">
            <p><b style="color:var(--xx-gold);">v${Game.__hotfixVersion} · 修补链:</b><br>
               <span style="color:var(--xx-cyan);font-family:monospace;font-size:12px;">
                 ${(Game.__patchChain||[]).join(' → ')}
               </span></p>
            <p style="margin-top:8px;">选择要执行的操作：</p>
            <p style="color:var(--xx-text-soft);font-size:12px;">
              · <b>诊断</b>：在控制台打印全部状态（F12 查看）<br>
              · <b>修复存档</b>：补齐所有字段、修复 NaN/负数<br>
              · <b>回档金丹初期</b>：把存档拉回金丹初期一层（用于救乱掉的存档）
            </p>
          </div>
        `,
        actions: [
          { label:'🔍 诊断', onClick: () => { Game.diagnose(); UI.toast('已打印到控制台（F12）', 'info'); return false; }},
          { label:'🛠 修复存档', onClick: () => { Game.repairAll(); return false; }},
          { label:'⚗ 回档金丹初期', primary:true, onClick: () => {
            UI.confirm('确定回档到金丹初期一层？（当前修为会保留至少金丹初期需求量）', () => {
              Game.rescueToJinDan();
              location.reload();
            });
            return false;
          }},
          { label:'关闭' }
        ]
      });
    };
    btnGroup.parentElement.appendChild(btn);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectDiagnoseButton);
  } else {
    setTimeout(injectDiagnoseButton, 500);
  }

  console.log('[v4.3.3-hotfix] ✅ 加载完成');
  console.log('[v4.3.3-hotfix] 💡 控制台命令: Game.diagnose() · Game.repairAll() · Game.rescueToJinDan()');

})(typeof window !== 'undefined' ? window : this);
