const fs = require('fs');
const vm = require('vm');
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ['physics', 'chemistry', 'math', 'english', 'geography', 'chinese']) {
  try { vm.runInContext(fs.readFileSync('src/data/' + f + '-bank.js', 'utf8'), ctx, { filename: f + '-bank.js' }); }
  catch (e) { console.log(f + ' bank FAIL', e.message); }
  try { vm.runInContext(fs.readFileSync('src/data/' + f + '-manual.js', 'utf8'), ctx, { filename: f + '-manual.js' }); }
  catch (e) { console.log(f + ' manual FAIL', e.message); }
}
const W = ctx.window;
globalThis.PHYSICS_BANK = W.PHYSICS_BANK;
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
console.log('loaded phy', W.PHYSICS_BANK.length, 'chem', W.CHEMISTRY_BANK.length, 'math', W.MATH_BANK.length, 'eng', W.ENGLISH_BANK.length, 'geo', W.GEOGRAPHY_BANK.length, 'chn', W.CHINESE_BANK.length);
console.log('manuals eng', (W.ENGLISH_MANUALS || []).length, 'chn', (W.CHINESE_MANUALS || []).length);