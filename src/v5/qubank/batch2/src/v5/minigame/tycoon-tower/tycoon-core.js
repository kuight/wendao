// 宗门堂 (tycoon-tower) core — idle tycoon of the sect tower, floors unlocked by realm progression.
// v5 minigame #07 (资源经营) variant. Self-contained, no network. Additive save under state.v5.minigame.tycoon.
// NOTE: authored from v5 blueprint; validated against main HEAD 4e86b2d5 (verified via API).
(function () {
  if (typeof window === 'undefined') return;
  window.V5Tycoon = window.V5Tycoon || {};

  var FLOOR_COUNT = 12;

  // ---- three upgrade categories ----
  // 弟子等级 -> +pet capture rate ; 灵脉纯度 -> +passive income ; 丹药品级 -> +rare drop probability
  var UPGRADES = [
    { id: 'disciple', name: '弟子等级', icon: '🧑‍🎓', baseCost: 20, costMul: 1.35, cap: 40,
      desc: '提升弟子修为，提高灵宠捕获率', effect: 'capture' },
    { id: 'vein', name: '灵脉纯度', icon: '⛏️', baseCost: 15, costMul: 1.28, cap: 50,
      desc: '提纯灵脉，增加每秒灵石产出', effect: 'income' },
    { id: 'pill', name: '丹药品级', icon: '💊', baseCost: 30, costMul: 1.42, cap: 30,
      desc: '炼制更高品级丹药，提高稀有掉落率', effect: 'rare' }
  ];

  var FLOOR_REALM = [0, 0, 0, 3, 3, 3, 6, 6, 6, 9, 9, 12];

  function getState() {
    var root = window.GameV5 && GameV5.state ? GameV5.state : {};
    if (!root.v5) root.v5 = {};
    if (!root.v5.minigame) root.v5.minigame = {};
    if (!root.v5.minigame.tycoon) {
      root.v5.minigame.tycoon = {
        floors: 1,           // highest unlocked floor (1-based)
        levels: { disciple: 0, vein: 0, pill: 0 },
        lingshi: 0,          // current hoard
        totalEarned: 0,
        prestige: 0,          // 斩断红尘 resets, permanent pet bonus
        lastTick: Date.now(),
        startedAt: Date.now()
      };
    }
    return root.v5.minigame.tycoon;
  }

  function getRealmId() {
    try {
      var c = (window.GameV5 && GameV5.state && GameV5.state.char) || {};
      return c.realmId || 0;
    } catch (e) { return 0; }
  }

  function unlockedFloors() {
    var rid = getRealmId();
    var n = 1;
    for (var i = 0; i < FLOOR_COUNT; i++) {
      if (FLOOR_REALM[i] <= rid) n = i + 1;
    }
    return Math.min(n, FLOOR_COUNT);
  }

  // ---- economy ----
  function incomePerSec(state) {
    var s = state || getState();
    var lv = s.levels.vein || 0;
    var base = 1.2;
    return base * Math.pow(1.12, lv) * s.floors;
  }

  function captureRate(state) {
    var s = state || getState();
    var lv = s.levels.disciple || 0;
    return Math.min(0.9, 0.05 + lv * 0.02);   // +2% per level
  }

  function rareDropRate(state) {
    var s = state || getState();
    var lv = s.levels.pill || 0;
    return Math.min(0.35, 0.02 + lv * 0.011); // ~+1.1% per level
  }

  function upgradeCost(id, level) {
    var u = UPGRADES.filter(function (x) { return x.id === id; })[0];
    return Math.round(u.baseCost * Math.pow(u.costMul, level));
  }

  function canUpgrade(id, state) {
    var s = state || getState();
    var u = UPGRADES.filter(function (x) { return x.id === id; })[0];
    var lv = s.levels[id] || 0;
    if (lv >= u.cap) return false;
    return s.lingshi >= upgradeCost(id, lv);
  }

  function doUpgrade(id, state) {
    var s = state || getState();
    if (!canUpgrade(id, s)) return { ok: false, reason: 'insufficient' };
    var lv = s.levels[id] || 0;
    s.lingshi -= upgradeCost(id, lv);
    s.levels[id] = lv + 1;
    persist(s);
    return { ok: true, level: s.levels[id] };
  }

  function tick(state) {
    var s = state || getState();
    var now = Date.now();
    var dt = Math.min((now - (s.lastTick || now)) / 1000, 3600); // cap offline at 1h
    var gain = incomePerSec(s) * dt;
    s.lingshi += gain;
    s.totalEarned += gain;
    s.lastTick = now;
    return gain;
  }

  // ---- prestige: 斩断红尘 ----
  // Reset hoard + upgrade levels, gain permanent pet bonus (capture + rare).
  function prestige(state) {
    var s = state || getState();
    var gained = Math.floor((s.totalEarned || 0) / 5000);
    if (gained < 1) return { ok: false, reason: 'need 5000 累计灵石' };
    s.prestige = (s.prestige || 0) + gained;
    s.lingshi = 0;
    s.totalEarned = 0;
    s.levels = { disciple: 0, vein: 0, pill: 0 };
    s.lastTick = Date.now();
    persist(s);
    return { ok: true, gained: gained, total: s.prestige };
  }

  function petBonus(state) {
    var s = state || getState();
    var p = s.prestige || 0;
    return {
      capture: Math.min(0.5, p * 0.01),   // +1% capture per prestige point
      rare: Math.min(0.2, p * 0.004)       // +0.4% rare per prestige point
    };
  }

  function persist(s) {
    if (window.GameV5 && GameV5.save && GameV5.save.writeV3) {
      GameV5.save.writeV3(GameV5.state);
    }
  }

  V5Tycoon.FLOOR_COUNT = FLOOR_COUNT;
  V5Tycoon.FLOOR_REALM = FLOOR_REALM;
  V5Tycoon.UPGRADES = UPGRADES;
  V5Tycoon.getState = getState;
  V5Tycoon.getRealmId = getRealmId;
  V5Tycoon.unlockedFloors = unlockedFloors;
  V5Tycoon.incomePerSec = incomePerSec;
  V5Tycoon.captureRate = captureRate;
  V5Tycoon.rareDropRate = rareDropRate;
  V5Tycoon.upgradeCost = upgradeCost;
  V5Tycoon.canUpgrade = canUpgrade;
  V5Tycoon.doUpgrade = doUpgrade;
  V5Tycoon.tick = tick;
  V5Tycoon.prestige = prestige;
  V5Tycoon.petBonus = petBonus;
})();
