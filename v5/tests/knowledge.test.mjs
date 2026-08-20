import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { buildCurriculum } from '../core/knowledge/curriculum.js';
import { buildGraph, loadManualMaps, annotateQuestion, DIFF_WEIGHT } from '../core/knowledge/graph.js';
import { installKnowledge } from '../core/knowledge/index.js';

// Load all bank/manual globals into globalThis (simulating browser window)
(function loadBanks() {
  const ctx = { window: {} };
  createContext(ctx);
  for (const f of ['physics', 'chemistry', 'math', 'english', 'geography', 'chinese']) {
    runInContext(readFileSync('src/data/' + f + '-bank.js', 'utf8'), ctx);
    runInContext(readFileSync('src/data/' + f + '-manual.js', 'utf8'), ctx);
  }
  const W = ctx.window;
  globalThis.PHYSICS_BANK = W.PHYSICS_BANKsite;
  globalThis.CHEMISTRY_BANK = W.CHEMISTRY_BANK;
  globalThis.MATH_BANK = W.MATH_BANK;
  globalThis.ENGLISH_BANK = W.ENGLISH_BANK;
  globalThis.GEOGRAPHY_BANK = W.GEOGRAPHY_BANK;
  globalThis.CHINESE_BANK = W.CHINESE_BANK;
  globalThis.PHYSICS_MANUALS_DEEP = W.PHYSICS_MANUALS_DEEP;
  globalThis.CHEMISTRY_MANUALS_DEEP = W.CHEMISTRY_MANUALS_DEEP;
  globalThis.MATH_MANUALS_DEEP = W.MATH_MANUALS_DEEP;
  globalThis.GEOGRAPHY_MANUALS_DEEP = W.GEOGRAPHY_MANUALS_DEEP;
  globalThis.ENGLISH_MANUALS = W.ENGLISH_MANUALS;
  globalThis.CHINESE_MANUALS = W.CHINESE_MANUALS;
})();

let pass = 0, fail = 0;
function ok(name, cond) {
  if (cond) { pass++; console.log('  ok:', name); }
  else { fail++; console.log('  FAIL:', name); }
}

const boot = { state: { get: () => ({ knowledge: {} }), set: (p) => ({ knowledge: p.knowledge }) }, bus: { on() {}, emit() {} }, register() {}, log() {} };

// Install knowledge module (uses globalThis banks already loaded)
const kn = installKnowledge(boot);
const stats = kn.stats();
console.log('\n[stats]', stats.subjectCount, 'subjects', stats.chapterCount, 'chapters', stats.knowledgeCount, 'knowledge pts', stats.questionCount, 'questions');

ok('six subjects', stats.subjectCount === 6);
ok('chapters total 44', stats.chapterCount === 44);
ok('knowledge points >= 100', stats.knowledgeCount >= 100);
ok('question count > 1000', stats.questionCount > 1000);

// getQuestion with difficulty and tags
const q = kn.getQuestion('easy');
ok('getQuestion returns object', q && typeof q === 'object');
ok('question has id', q && !!q.id);
ok('question has difficulty', q && !!q.difficulty);

// grade/chapter tagging coverage
const tagged = { grade: 0, chapter: 0 };
const graphData = kn.graph;
for (const s of kn.curriculum.list) {
  const bankName = ({ phy: 'PHYSICS_BANK', chem: 'CHEMISTRY_BANK', math: 'MATH_BANK', geo: 'GEOGRAPHY_BANK', eng: 'ENGLISH_BANK', chn: 'CHINESE_BANK' })[s.code];
  const bank = globalThis[bankName] || [];
  for (const raw of bank) {
    const aq = annotateQuestion(raw, loadManualMaps());
    if (aq.grade) tagged.grade++;
    if (aq.chapter) tagged.chapter++;
  }
}
console.log('  tagged by grade:', tagged.grade, ' chapter:', tagged.chapter);
ok('most questions tagged by grade', tagged.grade > 0.9 * stats.questionCount);
ok('most questions tagged by chapter', tagged.chapter > 0.9 * stats.questionCount);

// recordAnswer: correct accumulates proficiency
const kpId = Object.keys(kn.graph.knowledge)[0];
let prog;
for (let i = 0; i < 15; i++) prog = kn.recordAnswer(true, kpId);
ok('streak increments', prog && prog.streak === 15);
ok('xp awarded', prog && prog.xp >= 1);

// wrong answer triggers insight (顿悟)
const wrong = kn.recordAnswer(false, Object.keys(kn.graph.knowledge)[0]);
ok('wrong answer sets insight', wrong && wrong.insight === true);
ok('streak resets on wrong', wrong && wrong.streak === 0);

// addChapterProgress: master all kps of first chapter to trigger clear
const firstSubject = kn.curriculum.list[0];
const firstChapter = firstSubject.chapters[0];
for (const kp of firstChapter.knowledge) {
  for (let i = 0; i < 10; i++) kn.recordAnswer(true, kp.id);
}
const cleared = kn.addChapterProgress(firstChapter.id);
console.log('  chapter cleared:', cleared);
ok('chapter clears after mastering kps', cleared === firstChapter.id);

// getQuestion filtered by grade/chapter
const q2 = kn.getQuestion('easy', { subject: firstSubject.code, chapter: firstChapter.name, grade: firstChapter.grade });
console.log('  filtered question:', q2 && q2.subjectCode, q2 && q2.chapter);
ok('getQuestion honors chapter filter', q2 && q2.chapter === firstChapter.name);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);