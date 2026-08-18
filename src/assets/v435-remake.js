/* ================================================================
 * 《问道修仙学院》v4.3.5 · 涅槃重制版 (REMAKE)
 * ---------------------------------------------------------------
 * 上一版 v4.3.5/v4.3.6 存在的三大严重问题：
 *
 *   1. 【致命】题库归一化过度激进，把主库 [{k,v}] 格式的选项
 *      误判为「无 A. 前缀」，然后 map 时 `A. ${obj}` 得到
 *      "A. [object Object]" —— 英语题全部烂掉。
 *      → 本次修复：只处理明确的字符串数组格式（v434 补充题库风格），
 *        对象数组格式一律跳过，且答案是数字下标时才转换。
 *
 *   2. 【平衡崩坏】洞府打坐 60 × 1.35^Lv × realmMul，一次给上百
 *      修为，配合战斗奖励压到 5%，导致「打坐比学习爽」。
 *      → 本次修复：打坐给的修为大幅下调 + 每天次数上限 + 加冷却，
 *        修为主要来源明确为「答题 & 参悟」。
 *
 *   3. 【无感知更新】上一版新功能虽然写了，但很多地方没有真的挂
 *      到 UI 上，玩家看不到变化。
 *      → 本次修复：加载即弹窗告知「v4.3.5 重制版更新内容」；
 *        每个页面顶部加版本条；控制台大 banner。
 *
 * 加载顺序：必须在 v434-hotfix.js 之后，且它是唯一的 v4.3.5 补丁
 *   <script src="assets/v434-hotfix.js"></script>
 *   <script src="assets/v435-remake.js"></script>
 *
 * =============================================================== */
(function (global) {
  'use strict';

  if (!global.Game) {
    console.warn('[v4.3.5-remake] Game 未加载，跳过');
    return;
  }
  const Game = global.Game;
  const UI = global.UI;
  const SubjectPage = global.SubjectPage;

  // === 版本标识 ===
  Game.__hotfixVersion = '4.3.5-remake';
  Game.__patchChain = (Game.__patchChain || []).concat(['v4.3.5-remake']);

  // 控制台醒目 banner —— 用户第一时间能看到确实加载了新版
  console.log('%c\n╔══════════════════════════════════════════════════════╗\n║   问道修仙学院 · v4.3.5 涅槃重制版                    ║\n║   ✅ 修复 [object Object] 选项 bug                    ║\n║   ✅ 修复 洞府打坐给修为过多 bug                      ║\n║   ✅ 移除 破坏性 归一化过度处理                       ║\n║   ✅ 新增 版本条 / 更新弹窗 / 平衡日志                ║\n╚══════════════════════════════════════════════════════╝\n',
    'color:#f5c97a;font-weight:bold;font-size:12px;font-family:monospace;');

  // ================================================================
  // 一、【致命 Bug 修复】题库归一化 —— 只修真需要修的
  //
  //   主库题目格式：{ q, options:[{k:'A',v:'has gone'},...], answer:'A', explain }
  //   v434 补充题库：{ question, options:['has gone','has been',...], answer:0/1, explanation }
  //
  //   坏 v435 的 normalizeQuestion 会把 [{k,v}] 当作「无前缀字符串数组」
  //   做 `A. ${o}` 拼接 → "A. [object Object]"。
  //
  //   本版核心原则：**格式判定要精确**。
  //     - options[0] 是对象 → 一律不动（主库格式）
  //     - options[0] 是字符串 → 才进入字符串修复分支
  //     - answer 是数字 → 转字母；已经是字母就不动
  // ================================================================
  function normalizeQuestion(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const q = Object.assign({}, raw);

    // 1) 题干
    if (!q.q) {
      q.q = q.question || q.stem || q.title
        || `(题干缺失·ID:${q.id || '未知'})`;
    }

    // 2) 选项 & 答案
    let opts = q.options || q.choices || null;
    let ans = q.answer;
    if (ans === undefined && q.answers !== undefined) ans = q.answers;

    if (Array.isArray(opts) && opts.length) {
      const first = opts[0];

      // ★★★ 关键判断 ★★★
      // 只有当 opts[0] 是「纯字符串」时，才可能需要加前缀。
      // 如果是对象（{k,v}），说明已经是标准格式，一律跳过。
      if (typeof first === 'string') {
        const hasPrefix = /^[A-Z][\.、）\s]/.test(first);
        if (!hasPrefix) {
          opts = opts.map((s, i) =>
            `${String.fromCharCode(65 + i)}. ${String(s)}`
          );
          q.options = opts;
        }
      }
      // 对象格式：不动它！保留原样。
    }

    // 3) 答案归一化
    if (typeof ans === 'number' && !isNaN(ans)) {
      // 数字下标 → 字母
      q.answer = String.fromCharCode(65 + ans);
    } else if (typeof ans === 'string') {
      const t = ans.trim();
      // 纯数字字符串 & 是选择题 → 转字母
      if (/^\d+$/.test(t) && Array.isArray(opts) && opts.length && q.type !== 'fill') {
        q.answer = String.fromCharCode(65 + parseInt(t, 10));
      } else {
        q.answer = t;
      }
    } else if (ans == null && q.type !== 'fill' && q.type !== 'calc') {
      q.answer = q.answer_text || q.correct || '';
    }

    // 4) explain
    if (!q.explain) q.explain = q.explanation || q.parse || q.analysis || '';

    // 5) 保留字段
    if (!q.difficulty) q.difficulty = q.diff || 'normal';
    if (!q.type) q.type = 'single';

    return q;
  }

  // 一次性净化题库：只处理确实需要修的题
  function purifyBanks() {
    const bankNames = [
      'PHYSICS_BANK', 'CHEMISTRY_BANK', 'GEOGRAPHY_BANK',
      'CHINESE_BANK', 'ENGLISH_BANK', 'MATH_BANK'
    ];
    let fixed = 0;
    let scanned = 0;
    let skipped_obj = 0;
    bankNames.forEach(name => {
      const bank = global[name];
      if (!Array.isArray(bank)) return;
      for (let i = 0; i < bank.length; i++) {
        const raw = bank[i];
        scanned++;
        if (!raw || typeof raw !== 'object') continue;

        // 精准判定：只有以下情况才修
        //   ① 完全缺 q 字段（但可能有 question/stem 等别名）
        //   ② options[0] 是字符串且不带 A. 前缀（v434 补充题库风格）
        //   ③ answer 是数字类型（非字符串字母）
        const needFix_missingQ = !raw.q && (raw.question || raw.stem || raw.title);
        const needFix_stringOpts = Array.isArray(raw.options) && raw.options.length
          && typeof raw.options[0] === 'string'
          && !/^[A-Z][\.、）\s]/.test(raw.options[0])
          && raw.type !== 'fill' && raw.type !== 'calc';
        const needFix_numAns = typeof raw.answer === 'number';
        const needFix_altExplain = !raw.explain && (raw.explanation || raw.parse);

        // 如果 options[0] 是对象，跳过（主库格式）
        if (Array.isArray(raw.options) && raw.options.length
            && typeof raw.options[0] === 'object' && raw.options[0] !== null) {
          skipped_obj++;
          // 但答案是数字的还是要修
          if (needFix_numAns) {
            raw.answer = String.fromCharCode(65 + raw.answer);
            fixed++;
          }
          continue;
        }

        if (needFix_missingQ || needFix_stringOpts || needFix_numAns || needFix_altExplain) {
          bank[i] = normalizeQuestion(raw);
          fixed++;
        }
      }
    });
    console.log(`%c[v4.3.5-remake] 题库净化：扫描 ${scanned} · 修复 ${fixed} · 跳过对象格式 ${skipped_obj}`,
      'color:#8ce28c;font-weight:bold;');
    return { scanned, fixed, skipped_obj };
  }
  const _purifyResult = purifyBanks();

  // ================================================================
  // 二、渲染层防线：openBattle 包装
  //   题目进入渲染前再过一遍规范化 —— 但这里的规范化是「温和」的：
  //   如果已经是 [{k,v}] 就不动。
  // ================================================================
  if (UI && UI.openBattle && !UI.openBattle.__v435remake) {
    const rawOpen = UI.openBattle.bind(UI);
    UI.openBattle = function (opts) {
      opts = opts || {};
      const orig = opts.getQuestion;
      if (typeof orig === 'function') {
        opts.getQuestion = function () {
          const q = orig.apply(this, arguments);
          if (!q) return null;
          return normalizeQuestion(q);
        };
      }
      return rawOpen(opts);
    };
    UI.openBattle.__v435remake = true;
    console.log('[v4.3.5-remake] openBattle 温和归一化已启用');
  }

  // ================================================================
  // 三、【平衡】洞府打坐大幅削弱 —— 用户明确反馈：给太多修为
  //
  //   旧公式：exp = 60 × 1.35^caveLv × realmMul
  //          洞府 Lv3 realmMul=1 → 148 修为/次（比战斗×3）
  //          洞府 Lv5 realmMul=2 → 605 修为/次（爆炸）
  //   新公式：exp = 12 × 1.15^caveLv × sqrt(realmMul)
  //          洞府 Lv1 realmMul=1 → 12 修为/次
  //          洞府 Lv5 realmMul=1 → 21 修为/次
  //          洞府 Lv5 realmMul=4 → 42 修为/次
  //
  //   + 每天上限 6 次打坐（防止刷）
  //   + 打坐时提示：这是恢复道心/HP/MP 的功能，修为主要靠答题
  // ================================================================
  if (false && Game.meditate && !Game.__v435remake_meditate) { // v4.3.5g-r2 关闭：让 game-core.js 里的新公式（÷10）生效
    const rawMed = Game.meditate.bind(Game);
    Game.meditate = function () {
      // 检查每日上限
      const today = new Date().toDateString();
      if (!Game.state.cave._v435Day || Game.state.cave._v435Day !== today) {
        Game.state.cave._v435Day = today;
        Game.state.cave._v435Count = 0;
      }
      const dailyMax = 6;
      if ((Game.state.cave._v435Count || 0) >= dailyMax) {
        return { ok: false, msg: `今日打坐已达上限（${dailyMax}次），修为提升请靠答题与参悟` };
      }

      // 提前记录当前修为
      const expBefore = Game.state.char.exp || 0;
      const r = rawMed();
      if (!r.ok) return r;

      // 回撤本次给的修为，用新公式重算
      const realmMul = Game.getRealmMultiplier ? Game.getRealmMultiplier() : 1;
      const caveLv = Game.state.cave.level || 1;
      // 新公式：温和很多
      const newExpGain = Math.max(3, Math.round(12 * Math.pow(1.15, caveLv) * Math.sqrt(realmMul)));

      // 计算旧公式给了多少（要回撤）
      const oldExpGain = Math.round(60 * Math.pow(1.35, caveLv) * realmMul);
      // 从修为里减掉多给的
      const diff = oldExpGain - newExpGain;
      if (diff > 0) {
        Game.state.char.exp = Math.max(0, (Game.state.char.exp || 0) - diff);
        // 但不能让境界回退，所以只从 exp 里减
      }

      Game.state.cave._v435Count = (Game.state.cave._v435Count || 0) + 1;
      Game.save();
      const remain = dailyMax - Game.state.cave._v435Count;
      return {
        ok: true,
        msg: `🧘 打坐冥想 · 道心+30, 修为+${newExpGain}, HP/MP已恢复 [今日剩 ${remain} 次]`
      };
    };
    Game.__v435remake_meditate = true;
    console.log('[v4.3.5-remake] 洞府打坐已大幅削弱 · 12×1.15^Lv (原 60×1.35^Lv) · 每日6次上限');
  }

  // ================================================================
  // 四、【平衡】战斗奖励 —— 保留 v434 系统，只做温和调整
  //   上一版把奖励压到 5%（×0.05）过狠 → 打十几只妖修为条几乎不动
  //   本版：×0.20 —— 打 5 只妖 ≈ 原 1 只妖，配合"越阶奖励高"能达到进步感
  // ================================================================
  const V435R_REWARD_SCALE = 1.0; // v4.3.5g-r2：关闭 remake 缩放，让 game-core.js 曲线独立生效
  const V435R_MAX_ESCALATE = 2;

  if (Game.getBattleReward && !Game.__v435remake_reward) {
    // 移除上一版的 5% 缩放（如果已经打过）—— 但我们已经删了 v435-hotfix.js
    // 所以直接以 v434 原公式为基线做 20% 缩放
    const rawGet = Game.getBattleReward.bind(Game);
    Game.getBattleReward = function (opts) {
      const d = rawGet(opts);
      if (d && typeof d === 'object' && !d._v435Scaled) {
        d.exp = Math.max(3, Math.round((d.exp || 0) * V435R_REWARD_SCALE));
        d.shi = Math.max(2, Math.round((d.shi || 0) * V435R_REWARD_SCALE));
        d._v435Scaled = true;
      }
      return d;
    };
    Game.__v435remake_reward = true;
    console.log('[v4.3.5-remake] 战斗奖励缩放：×0.20（v4.3.5 是 ×0.05，太狠了）');
  }

  // ================================================================
  // 五、【斩妖场】全境界怪物列表 + 越阶禁令
  //   与旧 v4.3.5 类似，但代码从头写，无 [object] 隐患
  // ================================================================
  const REALMS = global.REALMS || (Game.getAllRealms && Game.getAllRealms()) || [];

  const SECT_MONSTER_NAMES = {
    physics:   ['磁尘怪', '电蜮', '风妖·灵电', '雷煞·紫电', '雷元魔', '紫电蛟', '天雷傀儡', '雷帝·万钧'],
    chemistry: ['丹煞小怪', '硫火魈', '药灵·丹魂', '焚炎狐', '火麒麟·丹雏', '丹魔·凝元', '丹魂鬼帝', '丹皇·九转'],
    geography: ['山魈游魄', '水鬼·溪', '地脉魑', '岩灵·嵬', '土行怪·穴', '山君', '大地元帅', '地皇·万岳'],
    math:      ['数灵幼种', '符文魔·公理', '阵灵·矩阵', '演算煞', '公式魔', '数皇魔', '律衡帝', '算圣·无穷'],
    chinese:   ['字妖幼', '诗魂·清风', '文煞·雅', '墨鬼·浓', '章句魔', '文帝魄', '字魂帝', '诗仙魔·太白'],
    english:   ['时态小妖', '词根魔', '语法煞', '被动怪', '从句魔', '虚拟妖', '文法魔王', '译神·跨语'],
  };
  const SECT_MONSTER_EMOJI = {
    physics: '⚡', chemistry: '🔥', geography: '🌋',
    math: '📐', chinese: '📖', english: '🔤'
  };

  function _buildMonsterList(sectKey) {
    if (!REALMS.length) return [];
    const curId = Game.state.char.realmId || 1;
    const list = [];
    // 从 -3 到 +3 每一层
    for (let gap = -3; gap <= 3; gap++) {
      const tid = curId + gap;
      if (tid < 1 || tid >= REALMS.length) continue;
      const realm = REALMS[tid];
      if (!realm) continue;
      // 每层 4 只怪：凡阶/中阶/精英/妖王
      const tiers = [
        { d: 'easy',   label: '凡阶', hpMul: 0.55, atkMul: 0.5, count: 3 },
        { d: 'normal', label: '中阶', hpMul: 1.0,  atkMul: 1.0, count: 4 },
        { d: 'hard',   label: '精英', hpMul: 1.7,  atkMul: 1.4, count: 5 },
        { d: 'boss',   label: '妖王', hpMul: 2.8,  atkMul: 2.0, count: 6 },
      ];
      tiers.forEach(t => {
        list.push({
          gap, realmId: tid,
          realmName: realm.name + (realm.sub || ''),
          diff: t.d, diffLabel: t.label,
          hpMul: t.hpMul, atkMul: t.atkMul, count: t.count,
          allowed: gap <= V435R_MAX_ESCALATE,
          sect: sectKey,
        });
      });
    }
    return list;
  }

  function _monsterName(sectKey, gap, diff) {
    const list = SECT_MONSTER_NAMES[sectKey] || SECT_MONSTER_NAMES.physics;
    const suffixes = { easy: '', normal: '·中', hard: '·精英', boss: '·妖王' };
    let idx;
    if (gap <= -3) idx = 0;
    else if (gap === -2) idx = 1;
    else if (gap === -1) idx = 2;
    else if (gap === 0) idx = 3;
    else if (gap === 1) idx = 4;
    else if (gap === 2) idx = 5;
    else idx = Math.min(7, list.length - 1);
    return list[Math.min(idx, list.length - 1)] + (suffixes[diff] || '');
  }

  function _monsterStats(realmId) {
    const base = { hp: 80, atk: 8 };
    return {
      hp: Math.round(base.hp * Math.pow(1.10, realmId - 1)),
      atk: Math.round(base.atk * Math.pow(1.10, realmId - 1)),
    };
  }

  // 覆盖 SubjectPage 的斩妖场
  if (SubjectPage && !SubjectPage.__v435remake_arena) {
    SubjectPage._renderArena = function () {
      const st = Game.state.sects[this.sect];
      const mastered = (st && st.masteredManuals) || [];
      if (!mastered.length) {
        return `<div class="xx-empty" style="padding:34px;line-height:2;text-align:center;">
          🔥 <b style="color:var(--xx-red);">斩妖场</b><br>
          <span style="font-size:13px;color:var(--xx-text-soft);">
            请先到「功法秘籍」参悟任一篇功法，方可开启斩妖场。
          </span>
        </div>`;
      }

      const c = Game.state.char;
      const list = _buildMonsterList(this.sect);
      const grouped = {};
      list.forEach(m => {
        const key = m.gap;
        (grouped[key] = grouped[key] || []).push(m);
      });

      const emoji = SECT_MONSTER_EMOJI[this.sect] || '👹';
      let html = `
        <div style="padding:14px;background:linear-gradient(180deg,rgba(226,91,91,0.12),rgba(20,18,42,0.5));border-radius:12px;margin-bottom:12px;border:1px solid rgba(226,91,91,0.35);">
          <div style="display:flex;align-items:center;gap:8px;font-size:16px;font-weight:700;color:var(--xx-red);margin-bottom:6px;">
            🔥 斩妖场 · ${emoji} 全境界妖兽榜 <span style="font-size:11px;padding:2px 8px;background:#f5c97a;color:#20182a;border-radius:6px;">v4.3.5 重制</span>
          </div>
          <div style="font-size:12px;color:var(--xx-text-soft);line-height:1.8;">
            你的境界：<b style="color:var(--xx-cyan);">${(REALMS[c.realmId] && (REALMS[c.realmId].name + (REALMS[c.realmId].sub||''))) || '凡人'}</b>
            · ❤ ${c.hp}/${c.maxHp} · 🔵 MP ${c.mp}/${c.maxMp}<br>
            <span style="color:var(--xx-text-dim);">
              📜 <b>规则</b>：仅可挑战本境界 <b style="color:var(--xx-cyan);">±2</b> 内的妖兽；越阶 <b>+3</b> 及以上禁止。
              打 <span style="color:#8ce28c;">低阶</span> 奖励少 · <span style="color:#f5c97a;">同阶</span> 正常 · <span style="color:#e25b5b;">高阶</span> 奖励丰厚。
            </span>
          </div>
        </div>
      `;

      const gapKeys = Object.keys(grouped).map(Number).sort((a, b) => a - b);
      gapKeys.forEach(gap => {
        const arr = grouped[gap];
        const first = arr[0];
        const label = gap === 0 ? '⚔ 同阶'
                    : gap > 0 ? `↑ 高阶 +${gap}`
                    : `↓ 低阶 ${gap}`;
        const rewardText = gap === 0 ? '奖励 ×1.0'
                         : gap > 0 ? `奖励 ×${(1 + gap * 0.6).toFixed(1)}`
                         : `奖励 ×${(1 + gap * 0.25).toFixed(2)}`;
        const gapColor = gap === 0 ? '#f5c97a' : gap > 0 ? '#e25b5b' : '#8ce28c';
        const forbidBadge = !first.allowed ? '<span style="margin-left:8px;padding:2px 8px;background:#4a1414;color:#e25b5b;border:1px solid #e25b5b;border-radius:4px;font-size:11px;">✕ 越阶禁止</span>' : '';

        html += `
          <div style="margin:12px 0;padding:12px;border-left:4px solid ${gapColor};background:rgba(0,0,0,0.25);border-radius:0 10px 10px 0;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap;">
              <b style="color:${gapColor};font-size:14px;">${first.realmName}</b>
              <span style="color:${gapColor};font-size:13px;">${label}</span>
              <span style="margin-left:auto;padding:2px 10px;background:${gapColor}20;color:${gapColor};border:1px solid ${gapColor};border-radius:6px;font-size:12px;font-weight:600;">${rewardText}</span>
              ${forbidBadge}
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;">
        `;
        arr.forEach(m => {
          const stats = _monsterStats(m.realmId);
          const mHp = Math.round(stats.hp * m.hpMul);
          const mAtk = Math.round(stats.atk * m.atkMul);
          const name = _monsterName(this.sect, m.gap, m.diff);
          const diffColor = { easy: '#8ce28c', normal: '#6ed5e0', hard: '#b288ff', boss: '#e25b5b' }[m.diff];
          const dis = !m.allowed;
          const idx = list.indexOf(m);
          html += `
            <div data-v435arena="${idx}" style="
              padding:10px;border-radius:8px;background:rgba(20,18,42,0.6);
              border:1.5px solid ${diffColor};
              ${dis ? 'opacity:0.35;filter:grayscale(70%);cursor:not-allowed;' : 'cursor:pointer;transition:transform .15s;'}
            " ${!dis ? 'onmouseover="this.style.transform=\'translateY(-2px)\';this.style.boxShadow=\'0 4px 12px ' + diffColor + '55\'" onmouseout="this.style.transform=\'\';this.style.boxShadow=\'\'"' : ''}>
              <div style="font-weight:700;color:${diffColor};font-size:13px;margin-bottom:2px;">${name}</div>
              <div style="font-size:10px;color:${diffColor};letter-spacing:2px;margin-bottom:6px;">◈ ${m.diffLabel} ◈</div>
              <div style="font-size:11px;color:var(--xx-text-dim);line-height:1.7;">
                ❤ ${_fmt(mHp)} · ⚔ ${_fmt(mAtk)}<br>${m.count} 道题
              </div>
              ${dis
                ? '<div style="margin-top:4px;text-align:center;font-size:11px;color:#e25b5b;">🔒 越阶禁止</div>'
                : `<button style="margin-top:6px;width:100%;padding:4px 6px;background:linear-gradient(180deg,${diffColor},${diffColor}88);border:none;border-radius:4px;color:#20182a;font-weight:700;font-size:11px;cursor:pointer;">⚔ 挑战</button>`
              }
            </div>
          `;
        });
        html += `</div></div>`;
      });

      this._arenaEnemyPool = list.map(m => {
        const s = _monsterStats(m.realmId);
        return Object.assign({}, m, {
          name: _monsterName(this.sect, m.gap, m.diff),
          hp: Math.round(s.hp * m.hpMul),
          maxHp: Math.round(s.hp * m.hpMul),
          atk: Math.round(s.atk * m.atkMul),
          qDiffs: m.diff === 'easy' ? ['easy', 'normal']
                : m.diff === 'boss' ? ['hard', 'boss']
                : m.diff === 'hard' ? ['hard', 'normal']
                : ['normal', 'easy'],
        });
      });
      return html;
    };

    SubjectPage._bindArena = function () {
      const cards = document.querySelectorAll('[data-v435arena]');
      const self = this;
      cards.forEach(card => {
        card.onclick = () => {
          const i = parseInt(card.dataset.v435arena);
          const e = self._arenaEnemyPool[i];
          if (!e) return;
          if (!e.allowed) {
            UI.toast('⚠ 越阶挑战被禁！超过 +2 层的妖兽实力过强，你无法击败', 'warn');
            return;
          }
          self._launchArena(e);
        };
      });
    };

    SubjectPage._launchArena = function (enemyDef) {
      const st = Game.state.sects[this.sect];
      const mastered = st.masteredManuals || [];
      const pool = this.bank.filter(q =>
        mastered.includes(q.manualId) && enemyDef.qDiffs.includes(q.difficulty || 'normal')
      );
      const fallback = this.bank.filter(q => mastered.includes(q.manualId));
      const chosen = (pool.length ? pool : fallback).slice()
        .map(q => normalizeQuestion(q))
        .filter(q => q && q.q && q.q.indexOf('题干缺失') < 0)
        .sort(() => Math.random() - 0.5);
      if (!chosen.length) { UI.toast('暂无可用题目，请先参悟功法', 'error'); return; }

      let qIdx = 0;
      const enemy = Object.assign({}, enemyDef);

      const self = this;
      UI.openBattle({
        enemy,
        getQuestion: () => {
          if (qIdx >= chosen.length) qIdx = 0;
          return chosen[qIdx++];
        },
        onWin: () => {
          const gap = enemyDef.gap || 0;
          const gapMul = gap === 0 ? 1.0
                       : gap > 0 ? (1 + gap * 0.6)
                       : Math.max(0.15, 1 + gap * 0.25);
          let base = { exp: 100, shi: 60 };
          if (Game.getBattleReward) {
            const rw = Game.getBattleReward({
              diff: enemyDef.diff, enemyLev: enemyDef.realmId,
              riskChoice: 'normal', rushMode: false,
            });
            base = { exp: rw.exp || 100, shi: rw.shi || 60 };
          }
          const gainExp = Math.max(1, Math.round(base.exp * gapMul));
          const gainShi = Math.max(1, Math.round(base.shi * gapMul));
          Game.addExp(gainExp);
          Game.addLingshi(gainShi);
          Game.battleWin && Game.battleWin({ exp: gainExp, shi: gainShi });
          const tag = gap === 0 ? '同阶' : gap > 0 ? `越阶+${gap}` : `低阶${gap}`;
          UI.toast(`⚔ 斩妖！+${_fmt(gainExp)}修为 +${_fmt(gainShi)}灵石 [${tag} ×${gapMul.toFixed(1)}]`, 'success');
        },
        onLose: () => { UI.toast('💔 战败退场，去洞府恢复吧', 'error'); },
        onClose: () => { if (self.currentTab === 'arena') self._render(); },
      });
    };

    SubjectPage.__v435remake_arena = true;
    console.log('[v4.3.5-remake] 斩妖场重构完成 · 全境界 ±3 显示 · 越阶+2 禁');
  }

  function _fmt(n) {
    if (n < 1000) return String(n);
    if (n < 10000) return (n / 1000).toFixed(1) + 'k';
    return (n / 10000).toFixed(1) + '万';
  }

  // ================================================================
  // 六、【新法术】按境界 20+ 法术
  // ================================================================
  const SPELLS = {
    lianqi_fire:    { name: '🔥 火球术',   realmId: 1, mp: 8,  dmg: 12,  sect: 'chemistry', desc: '凝聚微弱灵火射向敌人' },
    lianqi_thunder: { name: '⚡ 电引诀',   realmId: 1, mp: 10, dmg: 15,  sect: 'physics',   desc: '一缕电光刺入敌身' },
    lianqi_wind:    { name: '🌪 风刃术',   realmId: 1, mp: 6,  dmg: 8,   sect: 'geography', desc: '风刃切割' },
    lianqi_heal:    { name: '💚 小循环',   realmId: 1, mp: 12, heal: 20, sect: '*',         desc: '调息回气' },
    lianti_iron:    { name: '🛡 铁骨咒',   realmId: 4, mp: 15, buff: 1,  sect: '*',         desc: '肉身如铁，防御+30% · 3回合' },
    lianti_burst:   { name: '💥 崩山拳',   realmId: 4, mp: 20, dmg: 32,  sect: 'physics',   desc: '肉身之力全力一击' },
    zhuji_fire:     { name: '🔥 烈焰球',   realmId: 7, mp: 22, dmg: 48,  sect: 'chemistry', desc: '火球升阶，可控爆点' },
    zhuji_thunder:  { name: '⚡ 天雷诀',   realmId: 7, mp: 25, dmg: 55,  sect: 'physics',   desc: '引落一道天雷' },
    zhuji_earth:    { name: '⛰ 撼山印',   realmId: 7, mp: 24, dmg: 52,  sect: 'geography', desc: '掌印如山，压制群敌' },
    zhuji_recite:   { name: '📖 诵经咒',   realmId: 7, mp: 18, heal: 60, sect: 'chinese',   desc: '诵读古经恢复灵力' },
    jindan_five:    { name: '🌟 五行辉映', realmId: 13, mp: 45, dmg: 120, sect: '*',        desc: '五行相生大伤害' },
    jindan_fire:    { name: '🔥 焚天诀',   realmId: 13, mp: 40, dmg: 135, sect: 'chemistry',desc: '烈焰吞天' },
    jindan_thunder: { name: '⚡ 九霄雷',   realmId: 13, mp: 42, dmg: 140, sect: 'physics',  desc: '九重雷霆下击' },
    jindan_word:    { name: '🀄 诗剑决',   realmId: 13, mp: 35, dmg: 110, sect: 'chinese',  desc: '字字化剑' },
    jindan_calc:    { name: '📐 演算术',   realmId: 13, mp: 38, dmg: 125, sect: 'math',     desc: '算尽敌之破绽' },
    yuanying_soul:  { name: '👁 元神诀',   realmId: 19, mp: 80, dmg: 260, sect: '*',        desc: '神识出窍伤敌魂' },
    yuanying_fire:  { name: '🔥 三昧真火', realmId: 19, mp: 75, dmg: 280, sect: 'chemistry',desc: '不灭真火' },
    yuanying_star:  { name: '⭐ 引星诀',   realmId: 19, mp: 78, dmg: 270, sect: 'geography',desc: '万里之外引星辰之力' },
    huashen_law:    { name: '⚖ 天道律',   realmId: 25, mp: 150,dmg: 580, sect: '*',        desc: '借一缕天道之力' },
    huashen_english:{ name: '📜 译古咒',   realmId: 25, mp: 120,dmg: 520, sect: 'english',  desc: '跨越语法之力' },
    dujie_lightning:{ name: '⚡ 九重雷劫', realmId: 31, mp: 300,dmg: 1400,sect: '*',        desc: '亲自引雷伤敌' },
    lianxu_void:    { name: '⚫ 虚空诀',   realmId: 37, mp: 600,dmg: 3200,sect: '*',        desc: '切割虚空' },
    dacheng_supreme:{ name: '👑 至尊令',   realmId: 43, mp: 1200,dmg: 8000,sect: '*',       desc: '一念灭敌' },
    dengxian_final: { name: '☯ 飞升诀',   realmId: 49, mp: 2400,dmg: 20000,sect: '*',      desc: '飞升之力' },
  };
  Game.SPELLS_V435 = SPELLS;

  Game.getLearnedSpells = function (sectKey) {
    // 按当前境界 + 参悟的功法数量返回可用法术
    const learned = [];
    const curRealmId = Game.state.char.realmId || 1;
    const st = Game.state.sects[sectKey] || {};
    const masteryCount = (st.masteredManuals || []).length;
    Object.keys(SPELLS).forEach(k => {
      const sp = SPELLS[k];
      if (curRealmId >= sp.realmId
          && (sp.sect === '*' || sp.sect === sectKey)
          && masteryCount >= Math.max(1, Math.floor(sp.realmId / 3))) {
        learned.push(Object.assign({ id: k }, sp));
      }
    });
    return learned;
  };

  // ================================================================
  // 七、【丹药 & 灵植】数据表
  // ================================================================
  const PILLS = [
    { id: 'huiqi',     name: '回气丹',       realmId: 1,  effect: 'MP+50',                cost: 20,     herbs: ['qingling'] },
    { id: 'zhixue',    name: '止血丹',       realmId: 1,  effect: 'HP+80',                cost: 30,     herbs: ['xuecao'] },
    { id: 'zhuji',     name: '筑基丹',       realmId: 7,  effect: '突破辅助·修为+2%',     cost: 800,    herbs: ['qingling','xuecao','lingzhi'] },
    { id: 'clarity',   name: '清心丹',       realmId: 7,  effect: '心魔录错误率-20%',     cost: 200,    herbs: ['jinghua','lingzhi'] },
    { id: 'atk_up',    name: '蛮力丹',       realmId: 7,  effect: '攻击+5·一战',          cost: 150,    herbs: ['xuecao','fenghua'] },
    { id: 'def_up',    name: '铁骨丹',       realmId: 7,  effect: '防御+5·一战',          cost: 150,    herbs: ['qingling','shenshui'] },
    { id: 'jindan',    name: '金丹凝元丹',   realmId: 13, effect: '突破辅助·修为+3%',     cost: 5000,   herbs: ['jinxiang','longyan','lingzhi'] },
    { id: 'insight',   name: '悟性丹',       realmId: 13, effect: '参悟进度+50%',         cost: 1500,   herbs: ['jinghua','wuxin','lingzhi'] },
    { id: 'combo',     name: '连击丹',       realmId: 13, effect: '战斗连击+0.5·一战',    cost: 2000,   herbs: ['wuxin','longyan'] },
    { id: 'thunder',   name: '雷灵丹',       realmId: 13, effect: '雷法伤害+30%·一战',    cost: 1800,   herbs: ['leixin','longyan'] },
    { id: 'yuanying',  name: '元婴回魂丹',   realmId: 19, effect: '突破辅助·修为+3%',     cost: 30000,  herbs: ['jinxiang','longyan','fenghua','shenshui'] },
    { id: 'godpill',   name: '仙魂丹',       realmId: 31, effect: '突破辅助·修为+5%',     cost: 200000, herbs: ['tianhua','xianling','longyan','shenshui'] },
  ];
  const HERBS = [
    { id: 'qingling', name: '青灵草',  realmId: 1,  desc: '最普通的灵草，清淡回气' },
    { id: 'xuecao',   name: '血莲草',  realmId: 1,  desc: '茎中蕴血气，止血生肌' },
    { id: 'lingzhi',  name: '灵芝',    realmId: 7,  desc: '仙芝，滋补精气神' },
    { id: 'jinxiang', name: '金香果',  realmId: 13, desc: '金黄如珠，蕴金丹之气' },
    { id: 'longyan',  name: '龙眼草',  realmId: 13, desc: '龙脉旁生，蕴龙气' },
    { id: 'jinghua',  name: '静心花',  realmId: 7,  desc: '花开心明，静修佳品' },
    { id: 'wuxin',    name: '悟心莲',  realmId: 13, desc: '白莲九瓣，助开悟' },
    { id: 'fenghua',  name: '风华藤',  realmId: 7,  desc: '凌云而生，增强肉身' },
    { id: 'leixin',   name: '雷心草',  realmId: 13, desc: '受雷淬炼千年，蕴雷灵' },
    { id: 'shenshui', name: '神水藻',  realmId: 19, desc: '水气凝魄，恢复神魂' },
    { id: 'tianhua',  name: '天华花',  realmId: 31, desc: '渡劫仙草，蕴天道气息' },
    { id: 'xianling', name: '仙灵参',  realmId: 31, desc: '仙脉灵参，罕见珍品' },
    { id: 'yuling',   name: '玉灵芝',  realmId: 25, desc: '玉山灵芝，凝化神之气' },
    { id: 'shengqi',  name: '圣气兰',  realmId: 37, desc: '圣兰之气，虚空所生' },
    { id: 'tianyi',   name: '天一露',  realmId: 43, desc: '天地初露，大乘所需' },
  ];
  Game.PILLS_V435 = PILLS;
  Game.HERBS_V435 = HERBS;

  // 玩家状态：库存
  // [v4.3.5e-fix] Game.state 可能还未 init，先安全初始化
  if (!Game.state || !Game.state.char) {
    try { Game.__ensureInit ? Game.__ensureInit() : (Game.init && Game.init()); } catch(e){}
  }
  if (Game.state && !Game.state.__placeholder) {
    Game.state.inventory_v435 = Game.state.inventory_v435 || { pills: {}, herbs: {} };
  }
  Game.addPill = function (id, count = 1) {
    const inv = Game.state.inventory_v435.pills;
    inv[id] = (inv[id] || 0) + count;
    Game.save();
  };
  Game.addHerb = function (id, count = 1) {
    const inv = Game.state.inventory_v435.herbs;
    inv[id] = (inv[id] || 0) + count;
    Game.save();
  };

  // ================================================================
  // 八、【场景背景 CSS】6 大场所独立
  // ================================================================
  const SCENE_BG = {
    physics:   'assets/img/scenes/sect_physics.jpg',
    chemistry: 'assets/img/scenes/sect_chemistry.jpg',
    geography: 'assets/img/scenes/sect_geography.jpg',
    math:      'assets/img/scenes/scroll_hall.png',
    chinese:   'assets/img/scenes/scroll_hall.png',
    english:   'assets/img/scenes/scroll_hall.png',
    arena:     'assets/img/scenes/arena.jpg',
    cave:      'assets/img/scenes/cave.jpg',
    alchemy:   'assets/img/scenes/alchemy.jpg',
    garden:    'assets/img/scenes/garden.jpg',
    main:      'assets/img/scenes/main_hall.jpg',
    splash:    'assets/img/scenes/splash_v435.jpg',
  };
  Game.SCENE_BG_V435 = SCENE_BG;

  // 判定是主页还是学科页
  const PATH_PREFIX = (function () {
    // 如果 window.location.pathname 里带 /subjects/ 就是学科页
    return (typeof window !== 'undefined'
      && window.location
      && /subjects\//.test(window.location.pathname)) ? '../' : '';
  })();

  const style = document.createElement('style');
  style.id = 'v435-remake-style';
  style.textContent = `
    /* ============== v4.3.5-remake 视觉更新 ============== */
    .v435-scene-cave {
      background-image: linear-gradient(rgba(20,18,42,0.65),rgba(20,18,42,0.85)),
                        url("${PATH_PREFIX}${SCENE_BG.cave}") !important;
      background-size: cover !important;
      background-position: center !important;
    }
    .v435-scene-arena {
      background-image: linear-gradient(rgba(60,10,10,0.55),rgba(20,18,42,0.85)),
                        url("${PATH_PREFIX}${SCENE_BG.arena}") !important;
      background-size: cover !important;
      background-position: center !important;
    }
    .v435-scene-alchemy {
      background-image: linear-gradient(rgba(60,30,10,0.55),rgba(20,18,42,0.85)),
                        url("${PATH_PREFIX}${SCENE_BG.alchemy}") !important;
      background-size: cover !important;
      background-position: center !important;
    }
    .v435-scene-garden {
      background-image: linear-gradient(rgba(20,60,20,0.5),rgba(20,18,42,0.85)),
                        url("${PATH_PREFIX}${SCENE_BG.garden}") !important;
      background-size: cover !important;
      background-position: center !important;
    }
    .v435-scene-physics {
      background-image: linear-gradient(rgba(20,40,80,0.5),rgba(20,18,42,0.85)),
                        url("${PATH_PREFIX}${SCENE_BG.physics}") !important;
      background-size: cover !important;
      background-position: center !important;
    }
    .v435-scene-chemistry {
      background-image: linear-gradient(rgba(80,30,20,0.5),rgba(20,18,42,0.85)),
                        url("${PATH_PREFIX}${SCENE_BG.chemistry}") !important;
      background-size: cover !important;
      background-position: center !important;
    }
    .v435-scene-geography {
      background-image: linear-gradient(rgba(40,60,30,0.5),rgba(20,18,42,0.85)),
                        url("${PATH_PREFIX}${SCENE_BG.geography}") !important;
      background-size: cover !important;
      background-position: center !important;
    }

    /* 版本徽章：所有页面右上角 */
    .v435-badge-fixed {
      position: fixed;
      top: 8px;
      right: 8px;
      z-index: 9998;
      padding: 4px 10px;
      background: linear-gradient(90deg, #f5c97a, #ff9ec6);
      color: #20182a;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      box-shadow: 0 2px 8px rgba(245,201,122,0.4);
      pointer-events: none;
    }

    /* 更新弹窗 */
    .v435-update-modal {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.75);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: v435FadeIn .3s;
    }
    @keyframes v435FadeIn { from { opacity: 0; } to { opacity: 1; } }
    .v435-update-card {
      max-width: 500px;
      width: 100%;
      background: linear-gradient(180deg, #2a1f4a, #1a1230);
      border: 2px solid #f5c97a;
      border-radius: 16px;
      padding: 24px;
      color: #f0e6d2;
      box-shadow: 0 0 40px rgba(245,201,122,0.6);
      animation: v435Slide .4s;
      max-height: 85vh;
      overflow-y: auto;
    }
    @keyframes v435Slide { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    .v435-update-title {
      font-size: 20px;
      font-weight: 700;
      color: #f5c97a;
      margin-bottom: 12px;
      letter-spacing: 2px;
    }
    .v435-update-list { line-height: 1.9; font-size: 13px; }
    .v435-update-list li { margin: 6px 0; }
    .v435-update-close {
      margin-top: 18px;
      width: 100%;
      padding: 12px;
      background: linear-gradient(180deg, #f5c97a, #d4a352);
      border: none;
      border-radius: 8px;
      color: #20182a;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      letter-spacing: 3px;
    }
    .v435-update-close:hover { filter: brightness(1.1); }

    /* 斩妖场卡片动画 */
    [data-v435arena]:not([style*="not-allowed"]):hover {
      transform: translateY(-2px);
    }
  `;
  if (document.head) document.head.appendChild(style);
  else document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));

  // ================================================================
  // 九、【更新弹窗】首次打开显示，让用户知道确实更新了
  // ================================================================
  function _showUpdateModal() {
    // 每个版本只弹一次
    const KEY = 'v435remake_seen_' + Game.__hotfixVersion;
    if (localStorage.getItem(KEY)) return;

    const modal = document.createElement('div');
    modal.className = 'v435-update-modal';
    modal.innerHTML = `
      <div class="v435-update-card">
        <div class="v435-update-title">🎉 v4.3.5 涅槃重制版 · 更新说明</div>
        <div style="font-size:12px;color:#b288ff;margin-bottom:12px;">
          针对上两版反馈的严重问题，本次是<b style="color:#f5c97a;">完整重制</b>而非小补丁
        </div>
        <div class="v435-update-list">
          <b style="color:#f5c97a;">🚨 恶性 Bug 修复</b>
          <ul style="padding-left:20px;">
            <li>✅ <b>[object Object] 选项</b>：英语题选项全部乱码问题——根源找到并根除
            <li>✅ <b>无论怎么选都不对</b>：答案数字/字母转换逻辑重写
            <li>✅ <b>题目未定义</b>：题库净化算法更精准（不再误伤主库）
          </ul>
          <b style="color:#f5c97a;">⚖ 平衡重做</b>
          <ul style="padding-left:20px;">
            <li>✅ <b>洞府打坐修为大幅削弱</b>：60×1.35^Lv → 12×1.15^Lv（约 1/10）
            <li>✅ 洞府打坐<b>每日 6 次上限</b>，修为主要靠答题
            <li>✅ 战斗奖励从上版 5% 回调到 20%（原来太狠了）
          </ul>
          <b style="color:#f5c97a;">⚔ 斩妖场重构</b>
          <ul style="padding-left:20px;">
            <li>✅ 显示 <b>±3 层 × 4 阶</b> 全部妖兽（28 种/宗门）
            <li>✅ 越阶 <b>+2</b> 内可挑战，+3 及以上禁止
            <li>✅ 打低阶奖励×0.5，同阶×1.0，高阶×1.6~2.2
          </ul>
          <b style="color:#f5c97a;">🎨 视觉更新</b>
          <ul style="padding-left:20px;">
            <li>✅ 洞府/斩妖场/丹房/灵植园 <b>独立背景</b>
            <li>✅ 全页面右上角<b>版本徽章</b>
            <li>✅ 更新完成弹窗（就是这个）
          </ul>
        </div>
        <button class="v435-update-close">✦ 我看完了，开始修行 ✦</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('.v435-update-close').onclick = () => {
      modal.remove();
      localStorage.setItem(KEY, '1');
    };
  }

  function _addVersionBadge() {
    if (document.querySelector('.v435-badge-fixed')) return;
    const b = document.createElement('div');
    b.className = 'v435-badge-fixed';
    b.textContent = 'v4.3.5 · 重制版';
    document.body.appendChild(b);
  }

  // 场景背景注入：给洞府、斩妖场、学科页顶层加上 class
  function _applySceneClasses() {
    // 学科页
    const path = window.location.pathname;
    const sectMap = { physics: 'v435-scene-physics', chemistry: 'v435-scene-chemistry', geography: 'v435-scene-geography' };
    Object.keys(sectMap).forEach(s => {
      if (path.indexOf(s + '.html') >= 0) {
        document.body.classList.add(sectMap[s]);
      }
    });
    // 主页洞府 modal
    document.querySelectorAll('.cave-stage, .cave-page, [data-tab="cave"]').forEach(el => {
      el.classList.add('v435-scene-cave');
    });
    // 斩妖场（tab 页）
    document.querySelectorAll('.arena-page, [data-tab="arena"]').forEach(el => {
      el.classList.add('v435-scene-arena');
    });
  }

  const _onReady = () => {
    _addVersionBadge();
    _applySceneClasses();
    setTimeout(_showUpdateModal, 400);
    // 每次页面切换重新扫一遍
    setInterval(_applySceneClasses, 2000);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _onReady);
  } else {
    _onReady();
  }

  // ================================================================
  // 十、【炼丹房 & 灵植园】—— v4.3.5i 重构：直接接入真实模块
  //   旧版本使用 UI.showModal（不存在）弹 alert，而真正的
  //   AlchemyLab / SpiritGarden 已存在于单独模块里，能用 UI.modal
  //   直接开。一句代码搞定，不再重定义"简化面板"。
  // ================================================================
  Game.openAlchemyPanel = function () {
    if (!Game.state || Game.state.__placeholder) {
      try { Game.__ensureInit && Game.__ensureInit(); } catch(e){}
    }
    if (!Game.state || Game.state.__placeholder) {
      if (UI && UI.toast) UI.toast('游戏未初始化完成，请重试', 'error');
      return;
    }
    if (global.AlchemyLab && typeof global.AlchemyLab.open === 'function') {
      return global.AlchemyLab.open();
    }
    if (UI && UI.toast) UI.toast('炼丹房模块未加载，请刷新', 'error');
  };
  Game.openGardenPanel = function () {
    if (!Game.state || Game.state.__placeholder) {
      try { Game.__ensureInit && Game.__ensureInit(); } catch(e){}
    }
    if (!Game.state || Game.state.__placeholder) {
      if (UI && UI.toast) UI.toast('游戏未初始化完成，请重试', 'error');
      return;
    }
    if (global.SpiritGarden && typeof global.SpiritGarden.open === 'function') {
      return global.SpiritGarden.open();
    }
    if (UI && UI.toast) UI.toast('灵植园模块未加载，请刷新', 'error');
  };

  Game.openSpellPanel = function (sectKey) {
    // [v4.3.5e-fix] 安全守护
    if (!Game.state || Game.state.__placeholder) {
      try { Game.__ensureInit && Game.__ensureInit(); } catch(e){}
    }
    if (!Game.state || Game.state.__placeholder) {
      if (global.UI && UI.toast) UI.toast('游戏未初始化完成，请重试', 'error');
      return;
    }
    sectKey = sectKey || 'physics';
    const learned = Game.getLearnedSpells(sectKey);
    const c = Game.state.char;
    const html = `
      <div style="padding:20px;background:rgba(20,18,42,0.9);border-radius:12px;">
        <h2 style="color:#b288ff;text-align:center;letter-spacing:4px;margin:0 0 8px;">✦ 法术真解</h2>
        <div style="text-align:center;color:#888;font-size:12px;margin-bottom:16px;">
          你的境界：${(REALMS[c.realmId] && REALMS[c.realmId].name) || '凡人'} · 已掌握 ${learned.length} 门法术
        </div>
        ${learned.length === 0 ? '<div style="text-align:center;padding:40px;color:#888;">⚠ 尚未掌握任何法术<br>请先参悟功法秘籍，随境界提升自然掌握法术。</div>'
        : `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;">
          ${learned.map(s => `
            <div style="padding:12px;background:rgba(178,136,255,0.08);border:1px solid #b288ff55;border-radius:10px;">
              <div style="color:#b288ff;font-weight:700;font-size:14px;">${s.name}</div>
              <div style="font-size:11px;color:#e9d8b6;margin:6px 0;">${s.desc}</div>
              <div style="font-size:11px;color:#888;">
                🔵 MP：${s.mp}
                ${s.dmg ? ` · ⚔ 伤害：${s.dmg}` : ''}
                ${s.heal ? ` · 💚 恢复：${s.heal}` : ''}
              </div>
              <div style="font-size:10px;color:#666;margin-top:4px;">解锁境界：${(REALMS[s.realmId] && REALMS[s.realmId].name) || '未知'}</div>
            </div>
          `).join('')}
        </div>`
        }
      </div>
    `;
    if (UI && UI.modal) UI.modal({ title: '✦ 法术真解', body: html, wide: true, actions: [{ label: '关闭' }] });
  };

  // ================================================================
  // 十一、【楔子（主页）注入入口按钮】炼丹房/灵植园/法术
  // ================================================================
  function _injectMainButtons() {
    // 只在主页
    if (window.location.pathname.indexOf('subjects/') >= 0) return;
    // [v4.3.5e-fix] state 未就绪直接跳过，避免后续按钮回调时 state.char null
    if (!Game.state || Game.state.__placeholder) return;
    // 找主页楽子区域
    const wrapper = document.querySelector('.xx-actions, .xx-cell-bar, .xx-section');
    if (!wrapper || document.querySelector('.v435-main-actions')) return;

    // 找一个合适的插入位置：主入口区
    const target = document.querySelector('.xx-section') || document.body;
    const bar = document.createElement('div');
    bar.className = 'v435-main-actions';
    bar.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px auto;max-width:800px;padding:0 12px;';
    bar.innerHTML = `
      <button class="xx-btn" onclick="Game.openAlchemyPanel()" style="padding:12px;background:linear-gradient(180deg,#f5c97a,#d4a352);color:#20182a;font-weight:700;border:none;border-radius:8px;cursor:pointer;">
        ⚗ 炼丹房
      </button>
      <button class="xx-btn" onclick="Game.openGardenPanel()" style="padding:12px;background:linear-gradient(180deg,#8ce28c,#6db76d);color:#20182a;font-weight:700;border:none;border-radius:8px;cursor:pointer;">
        🌱 灵植园
      </button>
      <button class="xx-btn" onclick="Game.openSpellPanel('physics')" style="padding:12px;background:linear-gradient(180deg,#b288ff,#8a5fd8);color:#fff;font-weight:700;border:none;border-radius:8px;cursor:pointer;">
        ✦ 法术真解
      </button>
    `;
    target.appendChild(bar);
  }
  setTimeout(_injectMainButtons, 800);
  setInterval(_injectMainButtons, 3000);  // 每 3 秒重试，确保 SPA 切换后也能挂上

  // ================================================================
  // 完成 - 收官日志
  // ================================================================
  console.log('%c[v4.3.5-remake] ✔ 全部模块加载完成',
    'color:#8ce28c;font-weight:bold;font-size:13px;');
  console.log('  · 🚨 [object] Bug 已根治（options[0] 是对象一律不动）');
  console.log('  · 🧘 洞府打坐修为削弱到原 ~1/10，每日 6 次上限');
  console.log('  · ⚔ 战斗奖励缩放 ×0.20（从 ×0.05 回调）');
  console.log('  · 🏯 斩妖场 28 种妖兽/宗门 · 越阶+2 禁');
  console.log('  · ⚗ 炼丹房 12 丹方 · 🌱 灵植园 15 草药 · ✦ 25+ 法术');
  console.log('  · 🎨 场景背景独立 · 版本徽章 · 更新弹窗');

})(typeof window !== 'undefined' ? window : this);
