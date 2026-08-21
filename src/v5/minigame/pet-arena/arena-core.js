const SAVE_ROOT = 'state';
const SAVE_PATH = ['v5', 'minigame', 'petArena'];
const MAX_ENERGY = 100;
const QUIZ_BANK = {
  physics: [
    { stem: '做匀加速直线运动的物体，速度增加主要由哪一物理量决定？', options: { A: '加速度', B: '位移', C: '重力势能', D: '密度' }, answer: 'A', explain: '速度变化率由加速度决定。' },
    { stem: '牛顿第二定律的表达式是？', options: { A: 'F=mv', B: 'F=ma', C: 'p=mv', D: 'W=Fs' }, answer: 'B', explain: '合力等于质量乘加速度。' }
  ],
  math: [
    { stem: '若函数 y=x²，则 x=2 时 y=?', options: { A: '2', B: '4', C: '6', D: '8' }, answer: 'B', explain: '2²=4。' },
    { stem: '概率的取值范围是？', options: { A: '(-∞,+∞)', B: '[0,1]', C: '(0,10)', D: '[-1,1]' }, answer: 'B', explain: '概率恒在0到1之间。' }
  ],
  geography: [
    { stem: '喀斯特地貌主要由什么作用形成？', options: { A: '风蚀', B: '流水溶蚀', C: '火山喷发', D: '冰川堆积' }, answer: 'B', explain: '石灰岩地区多见流水溶蚀。' },
    { stem: '生态系统中，生产者通常是？', options: { A: '绿色植物', B: '食肉动物', C: '分解者', D: '消费者' }, answer: 'A', explain: '绿色植物能进行光合作用。' }
  ],
  chem: [
    { stem: '金属钠与水反应会产生哪种气体？', options: { A: '氧气', B: '氢气', C: '氮气', D: '二氧化碳' }, answer: 'B', explain: '钠与水反应生成氢气和NaOH。' },
    { stem: '化学平衡的本质是？', options: { A: '反应停止', B: '正逆反应速率相等', C: '生成物最多', D: '温度不变' }, answer: 'B', explain: '平衡时正逆反应仍在进行。' }
  ],
  composite: [
    { stem: '综合解题首先最重要的动作是？', options: { A: '立即代数', B: '划掉题目', C: '提取条件', D: '盲猜' }, answer: 'C', explain: '综合题先提取条件与目标。' },
    { stem: '跨学科任务中最稳妥的策略是？', options: { A: '只凭直觉', B: '分层拆解', C: '忽略图表', D: '只看答案' }, answer: 'B', explain: '先拆层再整合更稳。' }
  ]
};

const SKILL_COST = { attack: 0, defend: 0, special: 25, ultimate: 60, capture: 30 };
const TYPE_COLOR = { fire: '#ff8e72', wind: '#87e7ff', earth: '#c8a26e', water: '#7aa7ff', wood: '#69db7c' };

const el = {};
let state = null;
let pets = [];
let currentQuiz = null;
let busy = false;

/**
 * Deterministic self-test.
 * @example
 * const a={name:'灵狐',hp:116,maxHp:116,energy:0,maxEnergy:100,speed:18,type:'fire',subject:'physics',knowledge:'力学',bonusSpeed:10,guard:false,skillBoost:0,burn:0,regen:0,damageReduce:0};
 * const b={name:'白泽',hp:70,maxHp:70,energy:0,maxEnergy:100,speed:12,type:'earth',subject:'geography',knowledge:'地貌',bonusSpeed:0,guard:false,skillBoost:0,burn:0,regen:0,damageReduce:0};
 * const s={wins:0,rank:'初阶灵使'};
 * const afterQuiz=applyQuizReward(a,true);
 * const turn=resolveTurn('special', afterQuiz, b, false, s);
 * console.assert(turn.actor===afterQuiz.name && turn.result.targetHp<=48, '正确答题后应先手并造成高伤');
 */

function defaultSave() {
  return {
    roster: [],
    currentArena: '青云试炼场',
    rank: '初阶灵使',
    wins: 0
  };
}

function readRoot() {
  try { return JSON.parse(localStorage.getItem(SAVE_ROOT) || '{}'); }
  catch { return {}; }
}

function writeArenaSave(patch) {
  const root = readRoot();
  let cursor = root;
  for (let i = 0; i < SAVE_PATH.length - 1; i++) cursor = cursor[SAVE_PATH[i]] = cursor[SAVE_PATH[i]] || {};
  cursor[SAVE_PATH.at(-1)] = { ...(cursor[SAVE_PATH.at(-1)] || defaultSave()), ...patch };
  localStorage.setItem(SAVE_ROOT, JSON.stringify(root));
}

function readArenaSave() {
  const root = readRoot();
  let cursor = root;
  for (const key of SAVE_PATH) cursor = cursor?.[key];
  return { ...defaultSave(), ...(cursor || {}) };
}

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
function randFrom(list) { return list[Math.floor(Math.random() * list.length)]; }
function log(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  el.battleLog.prepend(p);
}

function petSprite(pet) {
  const color = TYPE_COLOR[pet.type] || '#fff';
  return `<svg class="pet-svg" viewBox="0 0 220 220" aria-label="${pet.name}">
    <defs><radialGradient id="g"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="${color}" stop-opacity=".2"/></radialGradient></defs>
    <circle cx="110" cy="108" r="82" fill="url(#g)" class="pulse"></circle>
    <g class="floaty">
      <ellipse cx="110" cy="176" rx="44" ry="12" fill="rgba(0,0,0,.22)"></ellipse>
      <path d="M62 122c0-31 22-59 48-59s48 28 48 59c0 30-21 49-48 49s-48-19-48-49Z" fill="${color}"></path>
      <circle cx="92" cy="108" r="7" fill="#08111f"></circle>
      <circle cx="128" cy="108" r="7" fill="#08111f"></circle>
      <path d="M94 132c8 7 24 7 32 0" stroke="#08111f" stroke-width="5" fill="none" stroke-linecap="round"></path>
      <path d="M75 79l-19-20 14-8 23 20" fill="${color}"></path>
      <path d="M145 79l19-20-14-8-23 20" fill="${color}"></path>
      <path d="M78 146c-8 17-21 28-36 32" stroke="${color}" stroke-width="10" stroke-linecap="round"></path>
      <path d="M142 146c8 17 21 28 36 32" stroke="${color}" stroke-width="10" stroke-linecap="round"></path>
    </g></svg>`;
}

function battlePet(pet) {
  return {
    ...pet,
    maxHp: pet.hp,
    maxEnergy: pet.energy,
    energy: 35,
    hp: pet.hp,
    bonusSpeed: 0,
    guard: false,
    skillBoost: 0,
    burn: 0,
    regen: pet.name === '九尾' ? 4 : 0,
    damageReduce: pet.name === '玄武' ? 3 : 0
  };
}

function rewardText(reward) { return `修为+${reward.exp}，灵玉+${reward.gems}`; }

function applyQuizReward(actor, correct) {
  const copy = { ...actor };
  if (correct) {
    copy.energy = clamp(copy.energy + 25, 0, MAX_ENERGY);
    copy.bonusSpeed = 10;
  }
  return copy;
}

function computeDamage(action, actor, target) {
  const base = {
    attack: 12,
    defend: 0,
    special: 26,
    ultimate: 42,
    capture: 6
  }[action] ?? 12;
  const extra = actor.skillBoost || 0;
  let dmg = base + extra;
  if (actor.name === '灵狐') dmg += 2;
  if (actor.name === '青鸾' && actor.bonusSpeed > 0) dmg += 3;
  if (actor.name === '黄龙' && actor.guard) dmg += 2;
  if (action === 'ultimate' && actor.name === '鲲鹏') dmg += 6;
  dmg -= target.damageReduce || 0;
  if (target.guard) dmg = Math.ceil(dmg * 0.55);
  return Math.max(0, dmg);
}

function resolveTurn(action, actor, target, enemyCorrect = false, saveRef = state) {
  const a = { ...actor, bonusSpeed: enemyCorrect ? 0 : actor.bonusSpeed };
  const t = { ...target };
  let text = '';
  if (action === 'defend') {
    a.guard = true;
    a.energy = clamp(a.energy + 10 + (a.name === '白泽' ? 6 : 0), 0, MAX_ENERGY);
    text = `${a.name}凝神防御，准备承伤。`;
  } else {
    const realAction = action === 'special' && a.energy >= SKILL_COST.special ? 'special' : action;
    const useUlt = action === 'ultimate' && a.energy >= SKILL_COST.ultimate;
    const skill = useUlt ? 'ultimate' : realAction;
    const cost = SKILL_COST[skill] || 0;
    if (a.energy < cost) {
      text = `${a.name}灵力不足，改为普通攻击。`;
      action = 'attack';
    }
    const finalAction = a.energy >= cost ? skill : 'attack';
    a.energy = clamp(a.energy - (SKILL_COST[finalAction] || 0), 0, MAX_ENERGY);
    const dmg = computeDamage(finalAction, a, t);
    t.hp = clamp(t.hp - dmg, 0, t.maxHp);
    if (a.name === '灵狐') t.burn = 2;
    if (a.name === '朱雀') a.skillBoost = 4;
    if (a.name === '九尾' && finalAction === 'special') a.hp = clamp(a.hp + 10, 0, a.maxHp);
    text = `${a.name}发动${labelAction(finalAction)}，造成${dmg}点伤害。`;
    a.guard = false;
  }
  if (t.burn) {
    t.hp = clamp(t.hp - t.burn, 0, t.maxHp);
    text += ` ${t.name}受到${t.burn}点灼伤。`;
  }
  if (a.regen) a.hp = clamp(a.hp + a.regen, 0, a.maxHp);
  if (saveRef && t.hp <= 0 && actor === saveRef.player) {
    const reward = { exp: 18 + saveRef.turn, gems: 6 + saveRef.turn };
    saveRef.result = reward;
  }
  return { actor: a.name, action, nextActor: a, nextTarget: t, result: { text, targetHp: t.hp } };
}

function labelAction(action) {
  return ({ attack: '普攻', defend: '护体', special: '专属技能', ultimate: '终结技', capture: '收服术' })[action] || '行动';
}

function pickEnemy() {
  const pool = pets.filter(x => x.id !== state.player.id);
  return battlePet(randFrom(pool));
}

function rankFromWins(w) {
  if (w >= 9) return '天阶御灵师';
  if (w >= 5) return '地阶灵使';
  if (w >= 2) return '玄阶灵徒';
  return '初阶灵使';
}

function syncSave() {
  writeArenaSave({
    roster: Array.from(new Set([...(state.save.roster || []), state.player.id])),
    currentArena: state.save.currentArena,
    rank: state.save.rank,
    wins: state.save.wins
  });
}

function renderRoster() {
  el.rosterGrid.innerHTML = pets.map(p => `<article class="roster-card">
    <strong class="type-${p.type}">${p.name}</strong>
    <small>${p.subject} · ${p.knowledge}</small>
    <small>技能：${p.skills.slice(0,3).join(' / ')}</small>
  </article>`).join('');
}

function renderBattle() {
  for (const side of ['player', 'enemy']) {
    const p = state[side];
    el[`${side}Name`].textContent = p.name;
    el[`${side}Subject`].textContent = `${p.subject} · ${p.knowledge}`;
    el[`${side}HpText`].textContent = `${p.hp} / ${p.maxHp}`;
    el[`${side}EnergyText`].textContent = `${p.energy} / ${p.maxEnergy}`;
    el[`${side}HpBar`].style.width = `${(p.hp / p.maxHp) * 100}%`;
    el[`${side}EnergyBar`].style.width = `${(p.energy / p.maxEnergy) * 100}%`;
    el[`${side}Sprite`].innerHTML = petSprite(p);
    el[`${side}Status`].textContent = [p.guard ? '护体中' : '', p.bonusSpeed > 0 ? '悟性加速' : '', p.regen ? '灵木再生' : ''].filter(Boolean).join(' · ');
  }
  el.rankBadge.textContent = `段位：${state.save.rank}`;
  el.winsBadge.textContent = `连胜：${state.save.wins}`;
  el.arenaName.textContent = state.save.currentArena;
  el.turnText.textContent = `第 ${state.turn} 回合`;
}

function nextQuiz() {
  const bank = QUIZ_BANK[state.player.subject] || QUIZ_BANK.composite;
  currentQuiz = randFrom(bank);
  el.quizStem.textContent = currentQuiz.stem;
  el.quizOptions.innerHTML = Object.entries(currentQuiz.options).map(([k, v]) => `<button data-answer="${k}">${k}. ${v}</button>`).join('');
  el.quizBox.classList.remove('hidden');
}

function closeQuiz() { currentQuiz = null; el.quizBox.classList.add('hidden'); }

function answerQuiz(answer) {
  if (!currentQuiz) return;
  const ok = answer === currentQuiz.answer;
  log(ok ? `答题正确：${currentQuiz.explain} 灵力+25，先手+10。` : `答题错误：${currentQuiz.explain}`);
  state.player = applyQuizReward(state.player, ok);
  closeQuiz();
  renderBattle();
}

function enemyAction() {
  if (state.enemy.energy >= 60 && state.enemy.hp < 58) return 'ultimate';
  if (state.enemy.energy >= 25) return 'special';
  return state.enemy.hp < 40 ? 'defend' : 'attack';
}

function settleVictory() {
  if (state.enemy.hp <= 0) {
    const reward = state.result || { exp: 20 + state.turn, gems: 8 + state.turn };
    state.save.wins += 1;
    state.save.rank = rankFromWins(state.save.wins);
    syncSave();
    log(`胜利！获得${rewardText(reward)}。`);
    return true;
  }
  if (state.player.hp <= 0) {
    state.save.wins = 0;
    state.save.rank = rankFromWins(0);
    syncSave();
    log('惜败，连胜已重置。');
    return true;
  }
  return false;
}

async function takeTurn(action) {
  if (busy) return;
  busy = true;
  if (action === 'learn') {
    nextQuiz();
    busy = false;
    return;
  }
  if (action === 'capture') {
    if (state.enemy.hp > 24 || state.player.energy < 30) {
      log('收服条件不足：对手残血且己方灵力需≥30。');
      busy = false;
      return;
    }
    state.player.energy -= 30;
    state.save.roster = Array.from(new Set([...(state.save.roster || []), state.enemy.id]));
    syncSave();
    log(`成功收服${state.enemy.name}，已录入图鉴。`);
    state.enemy.hp = 0;
    renderBattle();
    settleVictory();
    busy = false;
    return;
  }

  const playerFirst = state.player.speed + state.player.bonusSpeed >= state.enemy.speed + state.enemy.bonusSpeed;
  const first = playerFirst ? 'player' : 'enemy';
  const second = playerFirst ? 'enemy' : 'player';

  for (const side of [first, second]) {
    const actor = state[side];
    const target = state[side === 'player' ? 'enemy' : 'player'];
    const chosen = side === 'player' ? action : enemyAction();
    const out = resolveTurn(chosen, actor, target, false, state);
    state[side] = out.nextActor;
    state[side === 'player' ? 'enemy' : 'player'] = out.nextTarget;
    log(out.result.text);
    if (settleVictory()) break;
  }
  state.turn += 1;
  state.player.bonusSpeed = 0;
  state.enemy.bonusSpeed = 0;
  renderBattle();
  busy = false;
}

async function init() {
  pets = await fetch('./pets.json').then(r => r.json());
  state = {
    save: readArenaSave(),
    player: battlePet(pets[0]),
    enemy: null,
    turn: 1,
    result: null
  };
  state.enemy = pickEnemy();
  state.save.roster = Array.from(new Set([...(state.save.roster || []), state.player.id]));
  syncSave();

  Object.assign(el, {
    battleLog: document.getElementById('battleLog'), rosterGrid: document.getElementById('rosterGrid'),
    rankBadge: document.getElementById('rankBadge'), winsBadge: document.getElementById('winsBadge'), arenaName: document.getElementById('arenaName'), turnText: document.getElementById('turnText'),
    quizBox: document.getElementById('quizBox'), quizStem: document.getElementById('quizStem'), quizOptions: document.getElementById('quizOptions'),
    playerName: document.getElementById('playerName'), playerSubject: document.getElementById('playerSubject'), playerSprite: document.getElementById('playerSprite'), playerHpText: document.getElementById('playerHpText'), playerEnergyText: document.getElementById('playerEnergyText'), playerHpBar: document.getElementById('playerHpBar'), playerEnergyBar: document.getElementById('playerEnergyBar'), playerStatus: document.getElementById('playerStatus'),
    enemyName: document.getElementById('enemyName'), enemySubject: document.getElementById('enemySubject'), enemySprite: document.getElementById('enemySprite'), enemyHpText: document.getElementById('enemyHpText'), enemyEnergyText: document.getElementById('enemyEnergyText'), enemyHpBar: document.getElementById('enemyHpBar'), enemyEnergyBar: document.getElementById('enemyEnergyBar'), enemyStatus: document.getElementById('enemyStatus'),
    closeQuizBtn: document.getElementById('closeQuizBtn')
  });
  renderRoster();
  renderBattle();
  log(`试炼开始：${state.player.name} 对阵 ${state.enemy.name}。`);

  document.querySelector('.action-grid').addEventListener('click', e => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    takeTurn(btn.dataset.action);
  });
  el.quizOptions.addEventListener('click', e => {
    const btn = e.target.closest('button[data-answer]');
    if (btn) answerQuiz(btn.dataset.answer);
  });
  el.closeQuizBtn.addEventListener('click', closeQuiz);
}

window.PetArenaV5 = { init, readArenaSave, writeArenaSave, applyQuizReward, resolveTurn };
init();
