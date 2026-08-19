/* ===============================================================
 * 《问道修仙学院》v4.2.8 · 平衡与显示补丁（Balance & Display Patch）
 *
 * 加载顺序：必须在 game-core.js 之后，其他 UI 模块之后
 *
 * 【本轮更新（相较 v4.2.7）】
 *   1. ✔ 全局奖励 × 0.01（保留 v4.2.7）
 *   2. ✔ 洞府「十连升级」/「一键升到底」（保留并加强 UI 注入）
 *   3. ✔ 大数值紧凑格式：主字→缩写 (k/w/亿/兆)，小字→完整数值（悬浮 title 也有）
 *   4. ★ 全场景 Hook：顶栏 / 角色面板 / 装备 / 丹药 / 洞府 / 秘境 / 战斗 / Toast
 *        自动把 <b>灵石数字</b> / <b>修为数字</b> 之类的裸数字，改造成"缩写 + 完整"双行
 *   5. ★ 高价数值格式（>=1000）都自动转换；<1000 保留原样避免小数值也变缩写
 *   6. ★ UI.renderCave 动态注入"×10 / MAX"按钮
 *   7. ★ 提供 window.fmt / window.fmtHTML 全局工具函数（其他脚本随时可用）
 *
 * =============================================================== */
(function (global) {
  'use strict';
  if (!global.Game) {
    console.warn('[v4.2.8] Game 未加载，跳过');
    return;
  }
  const Game = global.Game;

  // ============================================================
  // 一、奖励缩放常量
  // ============================================================
  Game.REWARD_SCALE = 0.01;   // 奖励 × 0.01（用户要求降低 100 倍）

  function _scale(n) {
    if (n == null) return n;
    const v = Math.round((n || 0) * Game.REWARD_SCALE);
    if (n > 0 && v < 1) return 1;
    if (n < 0 && v > -1) return -1;
    return v;
  }
  Game._scaleReward = _scale;

  // ============================================================
  // 二、Wrap addExp / addLingshi
  // ============================================================
  if (!Game.__v428_wrapped) {
    const _origAddExp     = Game.addExp.bind(Game);
    const _origAddLingshi = Game.addLingshi.bind(Game);

    Game.addExp = function (amt) {
      if (Game._noScaleNext) { Game._noScaleNext = false; return _origAddExp(amt); }
      return _origAddExp(_scale(amt));
    };
    Game.addLingshi = function (n) {
      if (Game._noScaleNext) { Game._noScaleNext = false; return _origAddLingshi(n); }
      return _origAddLingshi(_scale(n));
    };
    Game.addExpRaw     = _origAddExp;
    Game.addLingshiRaw = _origAddLingshi;
    Game.__v428_wrapped = true;
  }

  // ============================================================
  // 三、Wrap 返回类接口 —— 确保 UI 看到的 expGain 是真实入账
  // ============================================================
  function _wrapRewardReturn(methodName) {
    const orig = Game[methodName];
    if (typeof orig !== 'function') return;
    if (orig.__v428_wrapped) return;
    const wrapped = function () {
      const r = orig.apply(Game, arguments);
      if (r && typeof r === 'object') {
        if ('expGain'    in r) r.expGain    = _scale(r.expGain);
        if ('shiGain'    in r) r.shiGain    = _scale(r.shiGain);
        if ('exp' in r && 'shi' in r && !('expGain' in r)) {
          r.exp = _scale(r.exp);
          r.shi = _scale(r.shi);
        }
      }
      return r;
    };
    wrapped.__v428_wrapped = true;
    Game[methodName] = wrapped;
  }
  ['masterManual','doRefine','submitAnswer','answerReport',
   'computeTowerReward','computeBattleReward','meditate','claimDaily'].forEach(_wrapRewardReturn);

  // ============================================================
  // 四、格式化工具（全局可用）
  // ============================================================
  function fmt(n) {
    n = Number(n) || 0;
    const neg = n < 0; const a = Math.abs(n);
    let out;
    if (a < 1000) out = String(Math.round(a));                        // <1k：原样
    else if (a < 10000) out = (a / 1000).toFixed(1) + 'k';            // 1k-9.9k
    else if (a < 1e8)   out = (a / 10000).toFixed(1) + 'w';           // 1w-9999w
    else if (a < 1e12)  out = (a / 1e8).toFixed(2) + '亿';            // 1亿-1万亿
    else if (a < 1e16)  out = (a / 1e12).toFixed(2) + '兆';
    else out = a.toExponential(2);
    out = out.replace(/\.0+([a-z亿兆]?)$/, '$1'); // 去掉尾部 .0
    out = out.replace(/(\.\d)0+([a-z亿兆]?)$/, '$1$2'); // 1.20w → 1.2w
    return (neg ? '-' : '') + out;
  }
  function fmtHTML(n, opts) {
    opts = opts || {};
    n = Number(n) || 0;
    const short = fmt(n);
    const full = n.toLocaleString('en-US');
    const cls = opts.cls || 'wd-bignum';
    // 数字太小就不双行了
    if (Math.abs(n) < 1000) return `<span class="${cls} wd-bignum-small">${short}</span>`;
    return `<span class="${cls}" title="${full}"><span class="wd-bignum-short">${short}</span><span class="wd-bignum-full">${full}</span></span>`;
  }
  // 暴露到 Game & 全局
  Game.fmt = Game.formatBigNum = fmt;
  Game.fmtHTML = Game.formatBigNumHTML = fmtHTML;
  global.fmt = fmt;
  global.fmtHTML = fmtHTML;

  // ============================================================
  // 五、洞府「十连升级」/「一键升级」
  // ============================================================
  Game.getCaveUpgradeCostAt = function (level) {
    // 沿用原逻辑：cost = level * 500 * scale（若已存在自定义算法，用原来的）
    if (typeof this._caveCostAt === 'function') return this._caveCostAt(level);
    return level * 500;
  };
  Game.upgradeCaveTimes = function (times) {
    times = Math.max(1, times | 0);
    const c = this.state.char;
    let done = 0, spent = 0, before = this.state.cave.level;
    for (let i = 0; i < times; i++) {
      const cost = this.getCaveUpgradeCost ? this.getCaveUpgradeCost() : (this.state.cave.level * 500);
      if (c.lingshi < cost) break;
      const r = this.upgradeCave ? this.upgradeCave() : null;
      if (!r || r.ok === false) break;
      done++; spent += cost;
    }
    return { ok: done > 0, done, spent, from: before, to: this.state.cave.level };
  };
  Game.upgradeCaveMax = function () {
    const c = this.state.char;
    let done = 0, spent = 0, before = this.state.cave.level;
    for (let i = 0; i < 500; i++) {
      const cost = this.getCaveUpgradeCost ? this.getCaveUpgradeCost() : (this.state.cave.level * 500);
      if (c.lingshi < cost) break;
      const r = this.upgradeCave ? this.upgradeCave() : null;
      if (!r || r.ok === false) break;
      done++; spent += cost;
    }
    return { ok: done > 0, done, spent, from: before, to: this.state.cave.level };
  };

  // ============================================================
  // 六、Hook UI.renderCave —— 注入 ×10 / MAX 按钮
  // ============================================================
  function patchCaveUI() {
    if (typeof global.UI === 'undefined') { setTimeout(patchCaveUI, 300); return; }
    const UI = global.UI;
    if (!UI.renderCave || UI.__v428_cave_patched) return;
    const orig = UI.renderCave.bind(UI);
    UI.renderCave = function () {
      let html = orig();
      // 追加 ×10 / MAX 按钮
      const inject = `
        <div class="cave-upgrade-batch" style="display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap;">
          <button class="xx-btn ghost cave-x10" id="cave-x10">⏫×10 十连升级</button>
          <button class="xx-btn ghost cave-max" id="cave-max">🚀 一键升到底</button>
        </div>
      `;
      // 把 inject 插到"升级洞府"按钮所在容器之后
      // 如果原样式的 .iv-controls 存在，则插入其中
      if (/id="cave-upgrade"/.test(html)) {
        html = html.replace(/(<\/div>\s*)$/m, inject + '$1');
      } else {
        html += inject;
      }
      return html;
    };
    // 增强 bindCave：加上新按钮的事件
    if (UI.bindCave && !UI.__v428_bindCave_patched) {
      const origBind = UI.bindCave.bind(UI);
      UI.bindCave = function (container, onChange) {
        origBind(container, onChange);
        const b10  = container.querySelector('#cave-x10');
        const bMax = container.querySelector('#cave-max');
        if (b10) b10.onclick = () => {
          UI.confirm && UI.confirm('确定尝试 10 次连续升级洞府？', () => {
            const r = Game.upgradeCaveTimes(10);
            UI.toast(r.ok ? `十连升级：${r.from} → ${r.to} 级（花费 ${fmt(r.spent)} 灵石）` : '灵石不足！', r.ok ? 'success' : 'error');
            if (r.ok && onChange) onChange();
          });
        };
        if (bMax) bMax.onclick = () => {
          UI.confirm && UI.confirm('一键升到底：将花费所有可用灵石。确定？', () => {
            const r = Game.upgradeCaveMax();
            UI.toast(r.ok ? `MAX 升级：${r.from} → ${r.to} 级（花费 ${fmt(r.spent)} 灵石）` : '灵石不足！', r.ok ? 'success' : 'error');
            if (r.ok && onChange) onChange();
          });
        };
      };
      UI.__v428_bindCave_patched = true;
    }
    UI.__v428_cave_patched = true;
  }
  patchCaveUI();

  // ============================================================
  // 七、DOM 观察器 —— 自动改造顶栏 / 面板 / 战斗中的裸数字
  //    策略：找特定标记（如 class 里带 xx-bignum-auto，或标签内容匹配"XX灵石/修为/HP/MP"）
  // ============================================================
  const NUMBER_KEYS = ['灵石','修为','道心','连击','答对','血量','法力'];

  // 遍历 .xx-stat 元素，转换其中 <b>数字</b>
  function transformStatRow() {
    document.querySelectorAll('.xx-stat').forEach(el => {
      // 只处理未标记过的
      if (el.dataset.v428Fmt === '1') return;
      const bTags = el.querySelectorAll('b');
      bTags.forEach(b => {
        const txt = (b.textContent || '').trim();
        // 尝试解析为数字
        const num = Number(txt.replace(/[,，]/g,''));
        if (!isNaN(num) && txt.length > 0 && Math.abs(num) >= 1000) {
          const short = fmt(num);
          const full = num.toLocaleString('en-US');
          b.innerHTML = `<span class="wd-bignum" title="${full}"><span class="wd-bignum-short">${short}</span><span class="wd-bignum-full">${full}</span></span>`;
        }
      });
      el.dataset.v428Fmt = '1';
    });
  }
  // 每次 DOM 变化后重跑（限流）
  let _tfmtScheduled = false;
  function scheduleTransform() {
    if (_tfmtScheduled) return;
    _tfmtScheduled = true;
    setTimeout(() => {
      _tfmtScheduled = false;
      try { transformStatRow(); } catch (e) {}
    }, 60);
  }
  // 首次 & 事件驱动
  if (typeof document !== 'undefined') {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(scheduleTransform, 200);
    } else {
      document.addEventListener('DOMContentLoaded', () => setTimeout(scheduleTransform, 200));
    }
    // 观察 body 变化
    if (typeof MutationObserver !== 'undefined') {
      const mo = new MutationObserver(() => scheduleTransform());
      const start = () => { if (document.body) mo.observe(document.body, { childList: true, subtree: true }); else setTimeout(start, 100); };
      start();
    }
    // 游戏事件后重跑
    ['expChange','lingshiChange','daoxinChange','breakthrough','answer','manualMastered','refined','achievementUnlock','gearChange','petChange']
      .forEach(ev => Game.on && Game.on(ev, () => scheduleTransform()));
  }

  // ============================================================
  // 八、CSS 注入
  // ============================================================
  (function injectCSS() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('v428-bignum-css')) return;
    const s = document.createElement('style');
    s.id = 'v428-bignum-css';
    s.textContent = `
      .wd-bignum {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.05;
        vertical-align: middle;
        margin: 0 2px;
      }
      .wd-bignum-short {
        font-weight: 700;
        color: inherit;
        letter-spacing: 0.3px;
        font-size: 1em;
      }
      .wd-bignum-full {
        font-size: 0.6em;
        color: rgba(255,255,255,0.5);
        font-weight: 400;
        letter-spacing: 0;
        margin-top: -1px;
        opacity: 0.85;
      }
      .wd-bignum-small { font-weight: 700; }
      /* 顶栏紧凑变体 */
      .xx-stat .wd-bignum-full { font-size: 9px; }
      .xx-stat .wd-bignum-short { font-size: 13px; }
      .xx-stat .wd-bignum { padding-top: 1px; }
      /* 洞府批量按钮 */
      .cave-upgrade-batch .xx-btn {
        background: linear-gradient(135deg, rgba(178,136,255,0.25), rgba(110,213,224,0.20));
        border-color: rgba(178,136,255,0.5);
        font-size: 13px;
      }
      .cave-upgrade-batch .xx-btn:hover {
        background: linear-gradient(135deg, rgba(178,136,255,0.4), rgba(110,213,224,0.35));
        box-shadow: 0 0 12px rgba(178,136,255,0.4);
      }
    `;
    document.head.appendChild(s);
  })();

  // ============================================================
  // 九、rescue 修复存档到金丹初期一层
  // ============================================================
  Game.rescueToJinDan = function () {
    const target = (global.REALMS || []).find(r => /金丹初期一层/.test(r.name));
    if (!target) { console.warn('未找到 金丹初期一层'); return false; }
    const c = this.state.char;
    c.exp = target.need;
    c.realmId = target.id;
    if (c.lingshi > 200000) c.lingshi = 100000;
    if (typeof this._recalcRealmStats === 'function') this._recalcRealmStats();
    else if (typeof this.recalcRealmStats === 'function') this.recalcRealmStats();
    c._v427Rescaled = true;
    this.save();
    if (this.emit) {
      this.emit('breakthrough', target);
      this.emit('expChange');
      this.emit('lingshiChange');
    }
    return { ok: true, realm: target };
  };

  console.log('[v4.2.8 balance] 奖励×0.01 · 大数值缩写 · 洞府×10/MAX · fmt()/fmtHTML() 已就绪');
  Game.__v428_balance_loaded = true;

})(typeof window !== 'undefined' ? window : this);
