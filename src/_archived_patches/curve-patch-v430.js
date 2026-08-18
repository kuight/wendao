/* ===============================================================
 * 《问道修仙学院》v4.3.0 · 升级曲线重设计补丁（Curve Redesign Patch）
 *
 * 【设计目标】
 *   ▸ 前期极易突破（第 1 层只需 80 修为，几分钟）
 *   ▸ 中期稳步爬升（30-90 层用 7~16 天）
 *   ▸ 后期越来越难（150 层以上需数月，300 层需一年+）
 *   ▸ 奖励系数同步指数增长，让"每次答题都感觉有效"
 *
 * 【与既有补丁的关系】
 *   ▸ 本补丁必须在 balance-patch-v428.js 之后加载
 *   ▸ 直接改写 Game.REALMS[i].need 和 Game.getRealmMultiplier()
 *   ▸ 移除 REWARD_SCALE=0.01（改为奖励/需求同步匹配的自然曲线）
 *   ▸ 保留 formatBigNum / fmt / fmtHTML 等 UI 便利工具
 *
 * 【曲线参数（同步生效，若微调仅需改这几个常量）】
 * =============================================================== */
(function (global) {
  'use strict';
  if (!global.Game) {
    console.warn('[v4.3.0-curve] Game 未加载，跳过');
    return;
  }
  const Game = global.Game;
  if (Game.__v430_curve) { console.warn('[v4.3.0-curve] 已应用过'); return; }
  Game.__v430_curve = true;

  // ==============================================================
  // 一、层增量公式（每一层"这一层需要的修为"）
  // ==============================================================
  //   id  1-30   →  50 + 30*id            炼气：50 → 950 线性
  //   id 31-90   →  950 * 1.055^(id-30)   炼体+筑基：950 → 23k 温和指数
  //   id 91-150  →  23000 * 1.075^(id-90) 金丹+元婴：23k → 1.76M
  //   id 151-210 →  1.76M * 1.09^(id-150) 化神+渡劫：1.76M → 300M
  //   id 211-270 →  300M * 1.10^(id-210)  炼虚+大乘
  //   id 271+    →  8.6e10 * 1.11^(id-270) 登仙无尽
  function layerIncrement(id) {
    if (id <= 0)   return 0;
    if (id <= 30)  return Math.round(50 + 30 * id);
    if (id <= 90)  return Math.round(950 * Math.pow(1.055, id - 30));
    if (id <= 150) return Math.round(23000 * Math.pow(1.075, id - 90));
    if (id <= 210) return Math.round(1.76e6 * Math.pow(1.09, id - 150));
    if (id <= 270) return Math.round(3.0e8 * Math.pow(1.10, id - 210));
    return             Math.round(8.6e10 * Math.pow(1.11, id - 270));
  }

  // ==============================================================
  // 二、覆写 REALMS[i].need（累计修为）
  //     保留每个境界节点的其他字段（name/sub/color 等）不变
  // ==============================================================
  if (Array.isArray(Game.REALMS)) {
    let cum = 0;
    for (let i = 1; i < Game.REALMS.length; i++) {
      cum += layerIncrement(i);
      Game.REALMS[i].need = cum;
      Game.REALMS[i].increment = layerIncrement(i);
    }
    console.log(`[v4.3.0-curve] 已重算 ${Game.REALMS.length} 层修为曲线。final need = ${cum}`);
  }

  // ==============================================================
  // 三、覆写 getRealmMultiplier（奖励系数与需求同步增长）
  //     公式设计：realmMul 随 id 呈"略滞后于层增量"的指数
  //     → 每层平均需要 ~30-100 题回报，符合"越难越费题"的感觉
  // ==============================================================
  Game.getRealmMultiplier = function () {
    const id = this.state.char.realmId || 0;
    if (id <= 0)   return 1;
    if (id <= 30)  return 1 + id * 0.04;                     // 1 → 2.2
    if (id <= 90)  return 2.2 * Math.pow(1.045, id - 30);    // 2.2 → 31
    if (id <= 150) return 31  * Math.pow(1.06,  id - 90);    // 31 → 970
    if (id <= 210) return 970 * Math.pow(1.075, id - 150);   // 970 → 74k
    if (id <= 270) return 7.4e4 * Math.pow(1.09, id - 210);  // 74k → 13M
    return           1.24e7 * Math.pow(1.10, id - 270);      // 13M → ∞
  };

  // ==============================================================
  // 四、【核心】移除 v4.2.8 的 REWARD_SCALE=0.01 全局缩水
  //     曲线已经匹配好，不再需要靠 0.01 压制
  // ==============================================================
  Game.REWARD_SCALE = 1;
  // 恢复 raw 版 addExp / addLingshi 为默认入口
  if (Game.addExpRaw)     Game.addExp     = Game.addExpRaw;
  if (Game.addLingshiRaw) Game.addLingshi = Game.addLingshiRaw;
  // 清除 wrap 标记，防止其它 patch 二次缩放
  Game.__v428_wrapped = false;
  Game._scaleReward = function (n) { return n; };  // no-op

  // ==============================================================
  // 五、修为"入账后自动突破"逻辑重排
  //     用户抱怨过：修为爆多但因为存档 bug 没自动跨境界
  //     强制在 addExp 后触发 realm 检测
  // ==============================================================
  const _origAddExp = Game.addExp.bind(Game);
  Game.addExp = function (amt) {
    const before = this.state.char.exp;
    _origAddExp(amt);
    // 突破检测
    this._checkBreakthrough && this._checkBreakthrough();
    // 兜底：realm 层号追赶
    if (this.REALMS) {
      let target = 0;
      for (let i = 0; i < this.REALMS.length; i++) {
        if (this.state.char.exp >= this.REALMS[i].need) target = i;
        else break;
      }
      if (target > (this.state.char.realmId || 0)) {
        this.state.char.realmId = target;
        this.emit && this.emit('breakthrough', { newId: target, realm: this.REALMS[target] });
      }
    }
  };

  // ==============================================================
  // 六、保留 v4.2.8 的 formatBigNum
  // ==============================================================
  // 强制覆盖 formatBigNum：兼容超大数值，去除科学计数法
  Game.formatBigNum = function (n) {
    if (!Number.isFinite(n)) return String(n);
    const abs = Math.abs(n);
    if (abs < 1000)   return String(Math.round(n));
    if (abs < 1e4)    return (n/1e3).toFixed(2) + 'k';
    if (abs < 1e8)    return (n/1e4).toFixed(2) + 'w';
    if (abs < 1e12)   return (n/1e8).toFixed(2) + '亿';
    if (abs < 1e16)   return (n/1e12).toFixed(2) + '兆';
    if (abs < 1e20)   return (n/1e16).toFixed(2) + '京';
    if (abs < 1e24)   return (n/1e20).toFixed(2) + '垓';
    if (abs < 1e28)   return (n/1e24).toFixed(2) + '秭';
    if (abs < 1e32)   return (n/1e28).toFixed(2) + '穰';
    // 极大值：直接用简化科学计数
    const e = Math.floor(Math.log10(abs));
    const mant = (n / Math.pow(10, e)).toFixed(2);
    return `${mant}×10^${e}`;
  };
  global.fmt = global.fmt || Game.formatBigNum;
  global.fmtHTML = global.fmtHTML || function (n) {
    const short = Game.formatBigNum(n);
    return `<span title="${n}" data-full="${n}">${short}</span>`;
  };

  // ==============================================================
  // 七、Save/refresh 一次
  // ==============================================================
  // [v4.3.5e-fix] 只有在 Game.state 已经 init 之后才存档，避免 saveNow(null) 崩溃
  try {
    if (Game.state && !Game.state.__placeholder) {
      Game.save && Game.save();
    }
  } catch(e){}
  try { Game.emit && Game.emit('curveUpdated', { time: Date.now() }); } catch(e){}

  console.log('[v4.3.0-curve] ✓ 升级曲线重设计已生效');
  // [v4.3.5e-fix] Game.state 可能还未 init，封住 expToNext 访问避免崩溃
  try {
    const rid = Game.state && Game.state.char && Game.state.char.realmId || 0;
    const need = (Game.state && Game.state.char && Game.expToNext) ? Game.expToNext() : '?';
    console.log(`[v4.3.0-curve] 当前 realmId=${rid}，需要修为=${need}`);
  } catch(e) {
    console.log(`[v4.3.0-curve] (保存档尚未初始化)`);
  }

})(typeof window !== 'undefined' ? window : this);
