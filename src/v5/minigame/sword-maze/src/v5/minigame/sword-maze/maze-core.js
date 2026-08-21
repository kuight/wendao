/* 剑阵迷踪 Sword-Formation Maze — v5 minigame core
   Deterministic seeded maze; save only under state.v5.minigame.swordMaze.* */
const SwordMaze = (() => {
  const SAVE_KEY = 'state.v5.minigame.swordMaze';
  const LB_KEY = 'state.v5.minigame.swordMaze.leaderboard';
  const HP_MAX = 100, AP_MAX = 4, GATE_TIME = 30, DAMAGE = 10;
  const TIERS = {
    lianqi: { name: '练气', size: 8,  label: '练气期 · 入门剑阵', desc: '8×8 剑阵，8-10 道符文门，适合初入仙途者。', diff: [3,4] },
    zhuji:  { name: '筑基', size: 16, label: '筑基期 · 宗门剑阵', desc: '16×16 剑阵，12-16 道符文门，考验综合道行。', diff: [3,5] },
    jindan: { name: '金丹', size: 24, label: '金丹期 · 飞升试炼', desc: '24×24 飞升剑阵，16-20 道高阶符文门，问鼎飞升。', diff: [4,5] }
  };
  const SUBJECTS = ['physics','chemistry','math','chinese','english','geography'];
  const SUBJECT_LABEL = { physics:'物理', chemistry:'化学', math:'数学', chinese:'语文', english:'英语', geography:'地理' };
  const ITEM_LABEL = { blue:'蓝灵石', red:'红灵石', gold:'金灵石' };
  const SHARD_PATH = { 3:'./banks/swordmaze-gates-d3.json', 4:'./banks/swordmaze-gates-d4.json', 5:'./banks/swordmaze-gates-d5.json' };

  // ---- seeded PRNG (must match Python generator) ----
  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t = (t + Math.imul(t ^ (t >>> 7), t | 61)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  // ---- deterministic maze carve (mirror of gen_mazes.py) ----
  function carve(size, seed) {
    const rng = mulberry32(seed);
    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    const passages = new Set();
    const stack = [[0, 0]];
    visited[0][0] = true;
    while (stack.length) {
      const [r, c] = stack[stack.length - 1];
      const nbrs = [];
      const dirs = [[-1,0,'n'],[1,0,'s'],[0,-1,'w'],[0,1,'e']];
      for (const [dr, dc, d] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < size && nc >= 0 && nc < size && !visited[nr][nc]) nbrs.push([nr, nc, d]);
      }
      if (!nbrs.length) { stack.pop(); continue; }
      const [nr, nc, d] = nbrs[(rng() * nbrs.length) | 0];
      if (d === 'e') passages.add(r + ',' + c + ',e');
      else if (d === 'w') passages.add(r + ',' + nc + ',e');
      else if (d === 's') passages.add(r + ',' + c + ',s');
      else if (d === 'n') passages.add(nr + ',' + c + ',s');
      visited[nr][nc] = true;
      stack.push([nr, nc]);
    }
    return passages;
  }
  function hasWall(passages, r, c, d, size) {
    if (d === 'e') return !passages.has(r + ',' + c + ',e');
    if (d === 'w') return !passages.has(r + ',' + (c - 1) + ',e');
    if (d === 's') return !passages.has(r + ',' + c + ',s');
    if (d === 'n') return !passages.has((r - 1) + ',' + c + ',s');
  }

  // ---- state ----
  const state = {
    save: null, clans: [], mazes: [], gates: [], gateCache: {},
    clan: 'qingyun', tier: 'lianqi', maze: null, passages: null,
    pos: [0, 0], hp: HP_MAX, ap: AP_MAX, xp: 0, score: 0,
    skill: 0, shield: 0, opened: new Set(), taken: new Set(),
    correct: 0, gateCount: 0, startAt: 0, over: false,
    slashMode: false, gateTimer: null, gateQ: null
  };
  const el = {};

  function boot() {
    bindEls();
    loadSave();
    Promise.all([
      fetch('./clans.json').then(r => r.json()).catch(() => ({ clans: [] })),
      fetch('./mazes.json').then(r => r.json()).catch(() => ({ mazes: [] }))
    ]).then(([c, m]) => {
      state.clans = c.clans || [];
      state.mazes = m.mazes || [];
      buildClans();
      buildTiers();
      buildMazes();
      paintHome();
      bindGlobal();
    });
  }

  function bindEls() {
    ['screenHome','screenGame','clanList','tierList','mazeList','clanTag','tierTag','tierTitle','tierDesc',
     'homeBest','homeUnlock','homeDone','homeXp','homeHp','enterBtn','backBtn','maze','mazeWrap',
     'hpVal','apVal','scoreVal','timeVal','hpBar','apBar','xpVal','skillVal','shieldVal',
     'gateCount','correctCount','slashHint','slashBtn','slashCount','saveText',
     'gateDialog','gateSubject','gateDiff','gateTimer','gateQuestion','gateOptions','gateResult',
     'resultDialog','resultTitle','rHp','rCorrect','rTime','rScore','resultMsg','resultAgain','resultNext',
     'gameMazeId','gameTitle','toast']
      .forEach(id => el[id] = document.getElementById(id));
  }

  async function inflateGateShard(pkg) {
    if (Array.isArray(pkg)) return pkg;
    if (!pkg || pkg.codec !== 'gzip+base64' || !pkg.payload) return [];
    if (typeof DecompressionStream === 'undefined') throw new Error('DecompressionStream unavailable');
    const bin = atob(pkg.payload);
    const bytes = Uint8Array.from(bin, ch => ch.charCodeAt(0));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    const text = await new Response(stream).text();
    return JSON.parse(text);
  }
  async function loadShard(diff) {
    if (state.gateCache[diff]) return state.gateCache[diff];
    const data = await fetch(SHARD_PATH[diff]).then(r => r.json());
    const list = await inflateGateShard(data);
    state.gateCache[diff] = Array.isArray(list) ? list : [];
    return state.gateCache[diff];
  }
  async function ensureTierGates(tier) {
    const diffRange = TIERS[tier].diff;
    const needed = [];
    for (let d = diffRange[0]; d <= diffRange[1]; d++) needed.push(d);
    await Promise.all(needed.map(loadShard));
    state.gates = needed.flatMap(d => state.gateCache[d] || []);
    return state.gates;
  }

  // ---- save ----
  function defaultSave() {
    return { tier: 'lianqi', completedMazes: [], bestScore: 0, hpHistory: [], unlockedTiers: ['lianqi'], lastRunAt: null, xp: 0 };
  }
  function loadSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      state.save = raw ? Object.assign(defaultSave(), JSON.parse(raw)) : defaultSave();
    } catch (_) { state.save = defaultSave(); }
  }
  function persist() {
    state.save.lastRunAt = Date.now();
    localStorage.setItem(SAVE_KEY, JSON.stringify(state.save));
    el.saveText.textContent = '仅写入 state.v5.minigame.swordMaze.*';
  }
  function pushHp() {
    state.save.hpHistory = (state.save.hpHistory || []).concat(state.hp);
    if (state.save.hpHistory.length > 40) state.save.hpHistory = state.save.hpHistory.slice(-40);
  }

  // ---- selectors ----
  function buildClans() {
    el.clanList.innerHTML = '';
    state.clans.forEach(c => {
      const b = document.createElement('button');
      b.className = 'pick clan-pick';
      b.style.setProperty('--cc', c.color);
      b.textContent = c.name;
      b.onclick = () => { state.clan = c.id; paintClans(); };
      el.clanList.appendChild(b);
    });
  }
  function paintClans() {
    const c = state.clans.find(x => x.id === state.clan) || {};
    el.clanTag.textContent = c.name || '青云';
    [...el.clanList.children].forEach((b, i) => b.classList.toggle('active', state.clans[i] && state.clans[i].id === state.clan));
    document.body.style.setProperty('--clan', c.color || '#7dd9ff');
  }
  function buildTiers() {
    el.tierList.innerHTML = '';
    Object.keys(TIERS).forEach(key => {
      const b = document.createElement('button');
      b.className = 'pick tier-pick';
      b.textContent = TIERS[key].name;
      b.onclick = () => { state.tier = key; paintTiers(); buildMazes(); };
      el.tierList.appendChild(b);
    });
  }
  function paintTiers() {
    el.tierTag.textContent = TIERS[state.tier].name;
    [...el.tierList.children].forEach((b, i) => b.classList.toggle('active', Object.keys(TIERS)[i] === state.tier));
    const t = TIERS[state.tier];
    el.tierTitle.textContent = t.label;
    el.tierDesc.textContent = t.desc;
  }
  function buildMazes() {
    el.mazeList.innerHTML = '';
    state.mazes.filter(m => m.tier === state.tier).forEach(m => {
      const done = state.save.completedMazes.includes(m.id);
      const b = document.createElement('button');
      b.className = 'maze-card' + (done ? ' done' : '');
      b.innerHTML = `<span class="maze-name">${m.id.replace('sm-' + m.tier + '-', '剑阵 ')}</span>
        <span class="maze-meta">${m.size}×${m.size} · ${m.gates}门${done ? ' · 已破' : ''}</span>`;
      b.onclick = () => startMaze(m);
      el.mazeList.appendChild(b);
    });
  }
  function paintHome() {
    el.homeBest.textContent = state.save.bestScore;
    el.homeUnlock.textContent = state.save.unlockedTiers.map(t => TIERS[t].name).join('/');
    el.homeDone.textContent = state.save.completedMazes.length + ' / 15';
    el.homeXp.textContent = state.save.xp;
    el.homeHp.textContent = state.save.hpHistory.length ? state.save.hpHistory.slice(-3).join('→') : '—';
  }

  // ---- game ----
  async function startMaze(m) {
    try {
      await ensureTierGates(m.tier);
    } catch (err) {
      console.error(err);
      toast('符文卷轴加载失败');
      return;
    }
    state.maze = m;
    state.tier = m.tier;
    state.passages = carve(m.size, m.seed);
    state.pos = [m.start[0], m.start[1]];
    state.hp = HP_MAX; state.ap = AP_MAX; state.xp = 0; state.score = 0;
    state.skill = 0; state.shield = 0;
    state.opened = new Set(); state.taken = new Set();
    state.correct = 0; state.gateCount = m.gates; state.over = false;
    state.slashMode = false; state.startAt = Date.now();
    el.screenHome.classList.add('hidden');
    el.screenGame.classList.remove('hidden');
    el.gameMazeId.textContent = m.id;
    el.gameTitle.textContent = `${TIERS[m.tier].name} · ${m.id.replace('sm-' + m.tier + '-', '剑阵 ')}`;
    renderMaze();
    updateHud();
    tick();
    if (state.timer) clearInterval(state.timer);
    state.timer = setInterval(tick, 1000);
  }
  function tick() {
    if (state.over) return;
    const sec = Math.floor((Date.now() - state.startAt) / 1000);
    el.timeVal.textContent = sec + 's';
  }
  function renderMaze() {
    const m = state.maze, size = m.size;
    el.maze.innerHTML = '';
    el.maze.style.gridTemplateColumns = `repeat(${size}, var(--cell))`;
    el.maze.style.gridTemplateRows = `repeat(${size}, var(--cell))`;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.r = r; cell.dataset.c = c;
        if (hasWall(state.passages, r, c, 'n', size)) cell.classList.add('w-n');
        if (hasWall(state.passages, r, c, 's', size)) cell.classList.add('w-s');
        if (hasWall(state.passages, r, c, 'w', size)) cell.classList.add('w-w');
        if (hasWall(state.passages, r, c, 'e', size)) cell.classList.add('w-e');
        const key = r + ',' + c;
        if (r === m.start[0] && c === m.start[1]) cell.classList.add('start');
        if (r === m.exit[0] && c === m.exit[1]) cell.classList.add('exit');
        if (isGate(r, c) && !state.opened.has(key)) cell.classList.add('gate');
        if (isGate(r, c) && state.opened.has(key)) cell.classList.add('gate-open');
        if (m.itemCells.blue.some(p => p[0] === r && p[1] === c) && !state.taken.has('blue' + key)) cell.classList.add('item-blue');
        if (m.itemCells.red.some(p => p[0] === r && p[1] === c) && !state.taken.has('red' + key)) cell.classList.add('item-red');
        if (m.itemCells.gold.some(p => p[0] === r && p[1] === c) && !state.taken.has('gold' + key)) cell.classList.add('item-gold');
        if (r === state.pos[0] && c === state.pos[1]) cell.classList.add('player');
        cell.onclick = () => cellClick(r, c);
        el.maze.appendChild(cell);
      }
    }
    el.gateCount.textContent = '剩余符文门 ' + (state.gateCount - state.opened.size);
    el.correctCount.textContent = '答对 ' + state.correct;
  }
  function isGate(r, c) {
    return state.maze.gateCells.some(p => p[0] === r && p[1] === c);
  }
  function updateHud() {
    el.hpVal.textContent = state.hp;
    el.apVal.textContent = state.ap;
    el.scoreVal.textContent = state.score;
    el.hpBar.textContent = state.hp;
    el.apBar.textContent = state.ap;
    el.xpVal.textContent = state.xp;
    el.skillVal.textContent = state.skill;
    el.shieldVal.textContent = state.shield;
    el.slashCount.textContent = state.skill;
    el.hpBar.parentElement.style.setProperty('--w', (state.hp / HP_MAX * 100) + '%');
    el.apBar.parentElement.style.setProperty('--w', (state.ap / AP_MAX * 100) + '%');
  }
  function tryMove(dr, dc) {
    if (state.over) return;
    const [r, c] = state.pos;
    const nr = r + dr, nc = c + dc;
    const m = state.maze, size = m.size;
    if (nr < 0 || nr >= size || nc < 0 || nc >= size) return;
    const dir = dr === -1 ? 'n' : dr === 1 ? 's' : dc === -1 ? 'w' : 'e';
    if (hasWall(state.passages, r, c, dir, size)) { toast('此路有墙阻隔'); return; }
    if (state.ap <= 0) { toast('行动力耗尽，答对符文门可恢复'); return; }
    state.pos = [nr, nc];
    state.ap -= 1;
    state.slashMode = false;
    const key = nr + ',' + nc;
    if (isGate(nr, nc) && !state.opened.has(key)) { openGate(nr, nc); return; }
    if (nr === m.exit[0] && nc === m.exit[1]) { finish(true); return; }
    collectItem(nr, nc);
    renderMaze();
    updateHud();
  }
  function collectItem(r, c) {
    const m = state.maze;
    const key = r + ',' + c;
    if (m.itemCells.blue.some(p => p[0] === r && p[1] === c) && !state.taken.has('blue' + key)) {
      state.taken.add('blue' + key); state.shield += 1; toast('拾得蓝灵石：护盾+1'); state.score += 10;
    }
    if (m.itemCells.red.some(p => p[0] === r && p[1] === c) && !state.taken.has('red' + key)) {
      state.taken.add('red' + key); state.xp += 5; state.save.xp = (state.save.xp || 0) + 5; toast('拾得红灵石：经验+5'); state.score += 10;
    }
    if (m.itemCells.gold.some(p => p[0] === r && p[1] === c) && !state.taken.has('gold' + key)) {
      state.taken.add('gold' + key); state.skill += 1; toast('拾得金灵石：剑气斩+1'); state.score += 10;
    }
  }
  function cellClick(r, c) {
    const [pr, pc] = state.pos;
    if (state.slashMode && state.skill > 0) {
      const dir = r === pr ? (c === pc + 1 ? 'e' : c === pc - 1 ? 'w' : null) : c === pc ? (r === pr + 1 ? 's' : r === pr - 1 ? 'n' : null) : null;
      if (dir && hasWall(state.passages, pr, pc, dir, state.maze.size)) {
        state.skill -= 1;
        removeWall(pr, pc, dir);
        state.slashMode = false;
        toast('剑气斩：破开一道墙壁');
        renderMaze(); updateHud();
        return;
      }
      toast('剑气斩需作用于相邻墙壁');
      return;
    }
    if (r === pr + 1 && c === pc) tryMove(1, 0);
    else if (r === pr - 1 && c === pc) tryMove(-1, 0);
    else if (c === pc + 1 && r === pr) tryMove(0, 1);
    else if (c === pc - 1 && r === pr) tryMove(0, -1);
  }
  function removeWall(r, c, dir) {
    const key = r + ',' + c + ',' + dir;
    state.passages.delete(key);
    if (dir === 'w') state.passages.delete(r + ',' + (c - 1) + ',e');
    if (dir === 'n') state.passages.delete((r - 1) + ',' + c + ',s');
  }

  // ---- gate quiz ----
  function openGate(r, c) {
    const q = pickQuestion(r, c);
    state.gateQ = { r, c, q };
    el.gateSubject.textContent = SUBJECT_LABEL[q.subject];
    el.gateDiff.textContent = '难度 ' + q.difficulty;
    el.gateQuestion.textContent = q.stem;
    el.gateResult.textContent = '';
    el.gateOptions.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const b = document.createElement('button');
      b.className = 'quiz-option';
      b.textContent = String.fromCharCode(65 + idx) + '. ' + opt;
      b.onclick = () => answerGate(idx);
      el.gateOptions.appendChild(b);
    });
    let left = GATE_TIME;
    el.gateTimer.textContent = left + 's';
    if (state.gateTimer) clearInterval(state.gateTimer);
    state.gateTimer = setInterval(() => {
      left -= 1;
      el.gateTimer.textContent = Math.max(0, left) + 's';
      if (left <= 0) { clearInterval(state.gateTimer); answerGate(-1); }
    }, 1000);
    if (!el.gateDialog.open) el.gateDialog.showModal();
  }
  function pickQuestion(r, c) {
    const m = state.maze;
    const rng = mulberry32(hashStr(m.id + ':' + r + ',' + c));
    const pool = state.gates.filter(g => {
      const d = TIERS[m.tier].diff;
      return g.difficulty >= d[0] && g.difficulty <= d[1];
    });
    const list = pool.length ? pool : state.gates;
    const subj = SUBJECTS[(rng() * SUBJECTS.length) | 0];
    let cand = list.filter(g => g.subject === subj);
    if (!cand.length) cand = list;
    return cand[(rng() * cand.length) | 0];
  }
  function answerGate(idx) {
    if (state.gateTimer) clearInterval(state.gateTimer);
    const { r, c, q } = state.gateQ;
    const key = r + ',' + c;
    if (idx === q.answerIndex) {
      state.opened.add(key);
      state.correct += 1;
      state.ap = Math.min(AP_MAX, state.ap + 1);
      state.score += 50;
      pushHp();
      el.gateResult.textContent = '✓ 破门成功！行动力+1。' + q.explanation;
      el.gateResult.classList.add('good');
      setTimeout(() => {
        if (el.gateDialog.open) el.gateDialog.close();
        renderMaze(); updateHud();
      }, 900);
    } else {
      if (state.shield > 0) { state.shield -= 1; toast('护盾抵挡了伤害符文'); }
      else { state.hp -= DAMAGE; pushHp(); }
      el.gateResult.textContent = '✗ 触发伤害符文，HP-' + DAMAGE + '。' + q.explanation;
      el.gateResult.classList.remove('good');
      if (state.hp <= 0) {
        state.hp = 0;
        setTimeout(() => { if (el.gateDialog.open) el.gateDialog.close(); finish(false); }, 900);
        return;
      }
      setTimeout(() => { if (el.gateDialog.open) el.gateDialog.close(); renderMaze(); updateHud(); }, 900);
    }
  }

  // ---- finish ----
  function finish(win) {
    if (state.over) return;
    state.over = true;
    if (state.timer) clearInterval(state.timer);
    const m = state.maze;
    const sec = Math.floor((Date.now() - state.startAt) / 1000);
    const timeBonus = win && sec < 60 ? 200 : 0;
    const total = state.hp * 100 + state.correct * 50 + timeBonus;
    el.resultTitle.textContent = win ? '破阵成功' : '气血耗尽 · 试炼失败';
    el.rHp.textContent = state.hp;
    el.rCorrect.textContent = state.correct;
    el.rTime.textContent = timeBonus;
    el.rScore.textContent = total;
    if (win) {
      if (!state.save.completedMazes.includes(m.id)) state.save.completedMazes.push(m.id);
      if (total > state.save.bestScore) state.save.bestScore = total;
      const t = TIERS[m.tier];
      const done = state.save.completedMazes.filter(x => state.mazes.find(z => z.id === x && z.tier === m.tier)).length;
      if (done >= 5 && !state.save.unlockedTiers.includes(nextTier(m.tier))) {
        state.save.unlockedTiers.push(nextTier(m.tier));
        el.resultMsg.textContent = '🎉 已解锁下一境界：' + TIERS[nextTier(m.tier)].name + '！';
      } else {
        el.resultMsg.textContent = `用时 ${sec}s，破阵${done}/5。`;
      }
      addLeaderboard(m.id, total);
    } else {
      el.resultMsg.textContent = '剑阵未破，可再闯此阵。';
    }
    persist();
    el.resultAgain.onclick = () => { el.resultDialog.close(); startMaze(m); };
    el.resultNext.onclick = () => { el.resultDialog.close(); showHome(); };
    if (!el.resultDialog.open) el.resultDialog.showModal();
  }
  function nextTier(tier) {
    const order = ['lianqi', 'zhuji', 'jindan'];
    return order[Math.min(order.indexOf(tier) + 1, order.length - 1)];
  }
  function addLeaderboard(mazeId, score) {
    let lb = [];
    try { lb = JSON.parse(localStorage.getItem(LB_KEY) || '[]'); } catch (_) { lb = []; }
    lb.push({ maze: mazeId, score, ts: Date.now() });
    lb.sort((a, b) => b.score - a.score);
    lb = lb.slice(0, 10);
    localStorage.setItem(LB_KEY, JSON.stringify(lb));
  }

  // ---- navigation ----
  function showHome() {
    el.screenGame.classList.add('hidden');
    el.screenHome.classList.remove('hidden');
    paintHome();
    buildMazes();
  }
  function toast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.remove('hidden');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.toast.classList.add('hidden'), 1600);
  }

  function bindGlobal() {
    document.addEventListener('keydown', e => {
      if (el.gateDialog.open) { if (e.key === 'Escape') return; return; }
      if (el.resultDialog.open) return;
      if (!el.screenGame.classList.contains('hidden')) {
        const map = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1], w: [-1, 0], s: [1, 0], a: [0, -1], d: [0, 1], W: [-1, 0], S: [1, 0], A: [0, -1], D: [0, 1] };
        if (map[e.key]) { e.preventDefault(); tryMove(map[e.key][0], map[e.key][1]); }
      }
    });
    document.querySelectorAll('.dbtn').forEach(b => b.onclick = () => {
      const map = { n: [-1, 0], s: [1, 0], w: [0, -1], e: [0, 1] };
      const [dr, dc] = map[b.dataset.dir];
      tryMove(dr, dc);
    });
    el.slashBtn.onclick = () => {
      if (state.skill <= 0) { toast('暂无剑气斩充能'); return; }
      state.slashMode = !state.slashMode;
      toast(state.slashMode ? '剑气斩就绪：点击相邻墙壁' : '已取消剑气斩');
    };
    el.backBtn.onclick = showHome;
    el.enterBtn.onclick = () => {
      const m = state.mazes.find(x => x.tier === state.tier);
      if (m) startMaze(m);
    };
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && el.gateDialog.open) { clearInterval(state.gateTimer); answerGate(-1); } });
  }

  return { boot };
})();

document.addEventListener('DOMContentLoaded', SwordMaze.boot);
