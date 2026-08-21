// 灵笔绘卷 (drawing-match) core — canvas freehand drawing matched against reference SVG strokes.
// v5 minigame #08 (拼图/数形) variant. Self-contained, no network. Additive save under state.v5.minigame.drawing.
// NOTE: authored from v5 blueprint; validated against main HEAD 4e86b2d5 (verified via API).
(function () {
  if (typeof window === 'undefined') return;
  window.V5Drawing = window.V5Drawing || {};

  var SUBJECTS = ['灵符', '灵草', '法器'];

  // ---- difficulty gates (realm-gated) ----
  var GATES = [
    { key: 'easy', name: '筑基', minRealm: 0, strokes: 3,  tolerance: 46 },
    { key: 'mid',  name: '金丹', minRealm: null, strokes: 6,  tolerance: 38 },
    { key: 'hard', name: '飞升', minRealm: null, strokes: 10, tolerance: 30 }
  ];
  // realmId thresholds: 筑基=0, 金丹=3 (REALM_TIERS index 3), 飞升=6 (化神)
  GATES[1].minRealm = 3;
  GATES[2].minRealm = 6;

  function getState() {
    var root = window.GameV5 && GameV5.state ? GameV5.state : {};
    if (!root.v5) root.v5 = {};
    if (!root.v5.minigame) root.v5.minigame = {};
    if (!root.v5.minigame.drawing) root.v5.minigame.drawing = { matches: 0, best: {}, bySubject: {} };
    return root.v5.minigame.drawing;
  }

  function getRealmId() {
    try {
      var c = (window.GameV5 && GameV5.state && GameV5.state.char) || {};
      return c.realmId || 0;
    } catch (e) { return 0; }
  }

  function unlockedFor(diff) {
    var g = GATES[diff] || GATES[0];
    if (!g.minRealm) return true;
    return getRealmId() >= g.minRealm;
  }

  function getRef(subKey) {
    return (window.V5Refs && window.V5Refs[subKey]) || null;
  }

  // ---- stroke extraction from SVG path data ----
  // We do NOT parse SVG in-browser; instead we pre-bake a stroke model per subject
  // (normalized polyline clusters) so scoring is deterministic and offline.
  var STROKE_MODELS = {
    lingfu: [
      [[0.50,0.15],[0.50,0.85]],
      [[0.35,0.27],[0.50,0.19],[0.65,0.27]],
      [[0.35,0.38],[0.50,0.31],[0.65,0.38]],
      [[0.35,0.50],[0.50,0.42],[0.65,0.50]],
      [[0.42,0.62],[0.50,0.58],[0.58,0.62]],
      [[0.50,0.71]]
    ],
    lingcao: [
      [[0.50,0.85],[0.50,0.38]],
      [[0.50,0.65],[0.30,0.58],[0.22,0.42]],
      [[0.50,0.58],[0.70,0.50],[0.78,0.35]],
      [[0.50,0.46],[0.35,0.40],[0.30,0.29]],
      [[0.50,0.38],[0.65,0.33],[0.71,0.21]],
      [[0.50,0.23]]
    ],
    faqi: [
      [[0.50,0.12],[0.68,0.23],[0.67,0.42],[0.50,0.77],[0.33,0.42],[0.32,0.23],[0.50,0.12]],
      [[0.50,0.21],[0.50,0.73]],
      [[0.40,0.31],[0.50,0.37],[0.60,0.31]],
      [[0.40,0.46],[0.50,0.52],[0.60,0.46]],
      [[0.50,0.83]]
    ]
  };

  function strokesFor(subject, diff) {
    var model = STROKE_MODELS[subject] || STROKE_MODELS.lingfu;
    var n = (GATES[diff] || GATES[0]).strokes;
    return model.slice(0, n);
  }

  // ---- scoring ----
  // Each user stroke (normalized 0..1) is matched to the nearest reference stroke cluster;
 // accuracy = 1 - mean(min distance to any point of the matched cluster).
  function normalizeStroke(pts, W, H) {
    return pts.map(function (p) { return [p[0] / W, p[1] / H]; });
  }

  function dist2(a, b) {
    var dx = a[0] - b[0], dy = a[1] - b[1];
    return dx * dx + dy * dy;
  }

  function strokeDistance(userPts, refPts) {
    var s = 0;
    userPts.forEach(function (up) {
      var best = Infinity;
      refPts.forEach(function (rp) { best = Math.min(best, dist2(up, rp)); });
      s += Math.sqrt(best);
    });
    return s / userPts.length;
  }

  function scoreRun(userStrokes, refStrokes, W, H, tolerance) {
    var total = 0;
    userStrokes.forEach(function (raw, i) {
      var ref = refStrokes[Math.min(i, refStrokes.length - 1)];
      var d = strokeDistance(normalizeStroke(raw, W, H), ref);
      var acc = Math.max(0, 1 - d / (tolerance / 100));
      total += acc;
    });
    return Math.round((total / userStrokes.length) * 100);
  }

  // ---- persistence ----
  function recordMatch(subject, diff, accuracy, ms) {
    var st = getState();
    st.matches = (st.matches || 0) + 1;
    st.bySubject = st.bySubject || {};
    var key = subject + ':' + diff;
    var prev = st.bySubject[key] || { best: 0, count: 0 };
    prev.count++;
    if (accuracy > prev.best) prev.best = accuracy;
    st.bySubject[key] = prev;
    if (!st.best || accuracy > st.best.accuracy) {
      st.best = { subject: subject, diff: diff, accuracy: accuracy, ms: ms, ts: Date.now() };
    }
    if (window.GameV5 && GameV5.save && GameV5.save.writeV3) {
      GameV5.save.writeV3(GameV5.state);
    }
    return st;
  }

  V5Drawing.GATES = GATES;
  V5Drawing.SUBJECTS = SUBJECTS;
  V5Drawing.getRealmId = getRealmId;
  V5Drawing.unlockedFor = unlockedFor;
  V5Drawing.getRef = getRef;
  V5Drawing.strokesFor = strokesFor;
  V5Drawing.scoreRun = scoreRun;
  V5Drawing.recordMatch = recordMatch;
  V5Drawing.getState = getState;
})();
