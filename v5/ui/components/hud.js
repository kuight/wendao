/* ==================================================================
 * 《问道修仙学院》v5 · ui/components/hud.js
 * HUD 组件：血条 / 蓝条 / 金币 / 境界显示（蓝图 §3.5 P2 深色渐变 HUD）
 *
 * 结构类（theme.css）：.v5-hud / .v5-hud__cell / .v5-bar*。
 *
 * 导出：
 *   createHud() -> { el, update(stat,val), render(state), getValue(name) }
 *   hudCSS()    -> 附加局部样式（数字跳动等）
 * ================================================================== */

'use strict';

export function hudCSS() {
  return `
  .v5-hud__value .delta {
    font-size: 12px; margin-left: 2px; opacity: 0.9;
  }
  .v5-hud__value.bump {
    animation: v5-hud-bump 0.4s var(--v5-ease-snap);
  }
  @keyframes v5-hud-bump {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.28); }
    100% { transform: scale(1); }
  }
  `;
}

/* 境界名称（供 realm 显示） */
const REALM_NAMES = {
  lianqi: '炼气', lianti: '炼体', zhuji: '筑基', jindan: '金丹',
  yuanying: '元婴', huashen: '化神', dujie: '渡劫', lianxu: '炼虚',
  dacheng: '大乘', dengxian: '登仙'
};

/**
 * 创建 HUD 实例。
 * 内部维护每个统计项的显示元素，便于 update 只更新变化项。
 */
export function createHud() {
  const el = document.createElement('div');
  el.className = 'v5-hud';

  // 内部值缓存（供数值/百分比计算）
  const values = { hp: 0, maxHp: 1, mp: 0, maxMp: 1, xp: 0, maxXp: 1, gold: 0, realm: '炼气', level: 1 };

  // 构建一个带 label + value 的格子
  function makeCell(label, cls) {
    const cell = document.createElement('div');
    cell.className = 'v5-hud__cell';
    const lab = document.createElement('div');
    lab.className = 'v5-hud__label';
    lab.textContent = label;
    const val = document.createElement('div');
    val.className = 'v5-hud__value ' + (cls || '');
    cell.appendChild(lab); cell.appendChild(val);
    return { cell, val };
  }

  // 血 / 蓝 / 经验 条（长条 + 数值）
  function makeBar(cell, barCls) {
    const bar = document.createElement('div');
    bar.className = 'v5-bar ' + barCls;
    const fill = document.createElement('div');
    fill.className = 'v5-bar__fill';
    fill.style.width = '0%';
    bar.appendChild(fill);
    cell.appendChild(bar);
    return fill;
  }

  // ---- 生命 ----
  const hp = makeCell('生命', 'cyan');
  const hpFill = makeBar(hp.cell, 'v5-bar--hp');
  // ---- 法力 ----
  const mp = makeCell('法力', 'purple');
  const mpFill = makeBar(mp.cell, 'v5-bar--mp');
  // ---- 金币 ----
  const gold = makeCell('灵石', 'gold');
  // ---- 境界 ----
  const realm = makeCell('境界', 'gold');
  // ---- 修为进度 ----
  const xp = makeCell('修为', 'cyan');
  const xpFill = makeBar(xp.cell, 'v5-bar--xp');

  [hp.cell, mp.cell, gold.cell, realm.cell, xp.cell].forEach((c) => el.appendChild(c));

  /* 数值跳动提示 */
  function bump(valueEl) {
    valueEl.classList.remove('bump');
    void valueEl.offsetWidth; // 重排以重启动画
    valueEl.classList.add('bump');
  }

  /**
   * 更新某个统计项。
   * @param {string} stat  hp|mp|xp|gold|realm|level 或 maxHp|maxMp|maxXp
   * @param {*} val       数值 / 字符串
   */
  function update(stat, val) {
    stat = String(stat || '');
    const prev = values[stat];
    const changed = prev !== val;

    switch (stat) {
      case 'hp': case 'maxHp':
        values.hp = stat === 'hp' ? +val : values.hp;
        values.maxHp = stat === 'maxHp' ? +val : values.maxHp;
        hp.val.textContent = Math.round(values.hp) + ' / ' + Math.round(values.maxHp);
        hpFill.style.width = Math.max(0, Math.min(100, values.maxHp ? (values.hp / values.maxHp) * 100 : 0)) + '%';
        if (changed) bump(hp.val);
        break;
      case 'mp': case 'maxMp':
        values.mp = stat === 'mp' ? +val : values.mp;
        values.maxMp = stat === 'maxMp' ? +val : values.maxMp;
        mp.val.textContent = Math.round(values.mp) + ' / ' + Math.round(values.maxMp);
        mpFill.style.width = Math.max(0, Math.min(100, values.maxMp ? (values.mp / values.maxMp) * 100 : 0)) + '%';
        if (changed) bump(mp.val);
        break;
      case 'xp': case 'maxXp':
        values.xp = stat === 'xp' ? +val : values.xp;
        values.maxXp = stat === 'maxXp' ? +val : values.maxXp;
        xp.val.textContent = Math.round(values.xp) + ' / ' + Math.round(values.maxXp);
        xpFill.style.width = Math.max(0, Math.min(100, values.maxXp ? (values.xp / values.maxXp) * 100 : 0)) + '%';
        if (changed) bump(xp.val);
        break;
      case 'gold':
        values.gold = +val;
        gold.val.textContent = Math.round(values.gold);
        if (changed) bump(gold.val);
        break;
      case 'realm':
        values.realm = REALM_NAMES[val] || val;
        realm.val.textContent = values.realm + (values.level > 1 ? ' ' + values.level : '');
        if (changed) bump(realm.val);
        break;
      case 'level':
        values.level = +val;
        realm.val.textContent = values.realm + (values.level > 1 ? ' ' + values.level : '');
        if (changed) bump(realm.val);
        break;
      default:
        break;
    }
    return values[stat];
  }

  /**
   * 从 v5 state 快照整体渲染。
   * @param {Object} state  boot.state.get()
   */
  function render(state) {
    state = state || {};
    const p = state.player || {};
    update('maxHp', p.maxHp || 100);
    update('hp', p.hp || 100);
    update('maxMp', p.maxMp || 50);
    update('mp', p.mp || 50);
    update('maxXp', p.maxXp || 100);
    update('xp', p.xp || 0);
    update('gold', p.gold || 0);
    update('realm', p.realm || '炼气');
    update('level', p.level || 1);
  }

  function getValue(name) { return values[name]; }

  return { el, update, render, getValue };
}

export default createHud;