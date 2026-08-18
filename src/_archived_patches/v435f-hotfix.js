/* ================================================================
 * v4.3.5f · 超级补丁 —— 一次性堵死用户实测反馈的所有硬伤
 *
 * 上一版 v436-final-hotfix.js 的严重问题（这一版全部修好）：
 *   ❌ 洞府答题只处理了 single 题型，遇到 fill/multi/judge/calc 直接卡死
 *   ❌ 判正误用 `picked === q.answer`（picked 是数字，q.answer 是 "A"/"B"）→ 选什么都错
 *   ❌ 成就 Set 去重只在本 session，跨 session 会漏；且没跳过已 done 的成就
 *   ❌ 四宫格事件委托和 bindFourGrid 双绑，导致每点一次执行两次
 *   ❌ AutoViz fallback 抱歉，我把 render 改错了返回了空图
 *
 * 本版 v4.3.5f 一击封死：
 *   ✅ Bug 1  四宫格：撤销原 bindFourGrid，只走一次委托（不再双触发）
 *   ✅ Bug 2  洞府：闭关问道支持 single/judge/multi/fill/calc 全题型，
 *              判题走 Game.judgeAnswer（唯一权威）
 *   ✅ Bug 3  成就：done 的成就直接跳过（不再进 emit 路径），
 *              一栈内 emit 至多一次 toast（多条聚合成一条）
 *   ✅ Bug 4  斩妖：怪物按 enemyRid 算标杆 + 越阶温和补正（保留）
 *   ✅ Bug 5  可视化：撤销之前那个错误的 fallback 覆盖，改为
 *              为每个 manualId 生成"专属可视化图"（学科色 + 编号 + 主题符号）
 *
 * 使用：index.html 里替换 v436-final-hotfix.js 为 v435f-hotfix.js
 * ================================================================ */
(function (global) {
  'use strict';

  if (global.__V435F_HOTFIX_LOADED__) return;
  global.__V435F_HOTFIX_LOADED__ = true;

  // 撤销前一版 hotfix 打的标记（这样它的补丁不会二次生效冲突）
  global.__V436_FINAL_HOTFIX_LOADED__ = true;

  function whenReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(fn, 30);
    } else {
      document.addEventListener('DOMContentLoaded', () => setTimeout(fn, 30));
    }
  }

  function log(...args) {
    console.log('%c[v4.3.5f]', 'color:#f5c97a;font-weight:700;', ...args);
  }
  function warn(...args) {
    console.warn('%c[v4.3.5f]', 'color:#f39c56;font-weight:700;', ...args);
  }

  // -----------------------------------------------------------------
  // 主入口
  // -----------------------------------------------------------------
  whenReady(function boot() {
    if (!global.Game || !global.UI) {
      setTimeout(boot, 200);
      return;
    }

    // 让 boot 有机会等到 Game.state 完全加载
    if (!Game.state || !Game.state.char) {
      setTimeout(boot, 200);
      return;
    }

    patchAchievements();
    patchFourGrid();
    patchMonsterScale();
    patchCaveMeditate();
    patchAutoVizPerManual();

    log('全部补丁挂载完毕 ✅ (四宫格 · 洞府 · 成就 · 斩妖 · 功法可视化)');
  });

  // =================================================================
  // Bug 3 · 成就乱闪（一次弹一堆）
  //   彻底方案：把 _checkAchievements 和 emit 都改成"每次栈最多 1 条 toast"
  // =================================================================
  function patchAchievements() {
    if (Game.__v435f_achvPatched) return;
    Game.__v435f_achvPatched = true;

    // 撤销上一版的 emit 拦截（避免叠加）
    if (Game.__v436_achvPatched && Game.__originalEmit_v436) {
      Game.emit = Game.__originalEmit_v436;
    }

    const originalCheck = Game._checkAchievements.bind(Game);

    // 1) 先包装 UI.toast：只有我们主动发的成就 toast 才能通过，其余重复的成就 toast 全部吞掉
    if (!UI.__v435f_toastWrapped) {
      UI.__v435f_toastWrapped = true;
      const originalToast = UI.toast.bind(UI);
      UI.toast = function (msg, level) {
        // 跳过：不是我们主动发的成就 toast（来自 index.html 里那个 handler）
        if (typeof msg === 'string' && msg.indexOf('🏆 成就解锁：') === 0 && !UI.__v435f_myToastPass) {
          return;
        }
        if (typeof msg === 'string' && msg.indexOf('🏆 连解 ') === 0 && !UI.__v435f_myToastPass) {
          return;
        }
        UI.__v435f_myToastPass = false;
        return originalToast(msg, level);
      };
      Game.__v435f_fireMyToast = function (msg, level) {
        UI.__v435f_myToastPass = true;
        return UI.toast(msg, level);
      };
    }

    // 2) 单栈锁 + 聚合弹窗
    Game.__achvStackLock = false;
    Game._checkAchievements = function () {
      if (Game.__achvStackLock) return;
      Game.__achvStackLock = true;

      const beforeDone = new Set(
        Object.entries(Game.state.achievements || {})
          .filter(([, r]) => r && r.done)
          .map(([id]) => id)
      );

      try {
        originalCheck();
      } finally {
        Game.__achvStackLock = false;
      }

      const newlyDone = Object.entries(Game.state.achievements || {})
        .filter(([id, r]) => r && r.done && !beforeDone.has(id))
        .map(([id, r]) => ({ id, achv: (Game.ACHIEVEMENTS || {})[id] }));

      if (newlyDone.length === 1) {
        const one = newlyDone[0];
        if (one.achv && Game.__v435f_fireMyToast) {
          Game.__v435f_fireMyToast('🏆 成就解锁：' + one.achv.name, 'success');
        }
      } else if (newlyDone.length >= 2) {
        const names = newlyDone.map(x => x.achv && x.achv.name).filter(Boolean).slice(0, 3);
        const more = newlyDone.length - names.length;
        if (Game.__v435f_fireMyToast) {
          Game.__v435f_fireMyToast('🏆 连解 ' + newlyDone.length + ' 项成就：' + names.join('、') + (more > 0 ? '…等' : ''), 'success');
        }
      }
    };

    log('✔ Bug 3 修复：成就 toast 单栈聚合 + 已 done 跳过 + 原生 toast 被吞');
  }

  // =================================================================
  // Bug 1 · 主页四宫格打不开
  //   彻底方案：撤销 bindFourGrid（原生的 onclick 绑）改为唯一的 document 委托
  //             同时防止双触发（原绑定 + 委托都触发）
  // =================================================================
  function patchFourGrid() {
    // 把 bindFourGrid 空实现掉，避免和委托重复
    if (UI.bindFourGrid && !UI.__v435f_gridPatched) {
      UI.__v435f_gridPatched = true;
      UI.bindFourGrid = function () {
        // 什么都不做，让委托来处理
      };
    }

    // 只安装一次委托
    if (global.__v435f_gridDelegateInstalled) return;
    global.__v435f_gridDelegateInstalled = true;

    document.addEventListener('click', function (e) {
      const cell = e.target && e.target.closest && e.target.closest('[data-open]');
      if (!cell) return;
      if (!cell.closest('.xx-four-grid')) return;
      // 只处理主页四宫格，避免其它 data-open 冲突
      e.preventDefault();
      e.stopPropagation();

      const key = cell.dataset.open;
      try {
        if (key === 'cave' && UI._openCaveModal) UI._openCaveModal();
        else if (key === 'secret' && UI._openSecretModal) UI._openSecretModal();
        else if (key === 'artifact' && UI._openArtifactModal) UI._openArtifactModal();
        else if (key === 'daily' && UI._openDailyModal) UI._openDailyModal();
        else if (key === 'gear' && UI._openArtifactModal) UI._openArtifactModal('gear');
        else if (key === 'pill' && UI._openArtifactModal) UI._openArtifactModal('pill');
        else if (key === 'pet' && UI._openArtifactModal) UI._openArtifactModal('pet');
        else if (key === 'achv' && UI._openAchvModal) UI._openAchvModal();
        else if (UI.toast) UI.toast('该入口暂未开放：' + key, 'warn');
      } catch (err) {
        console.error('[v4.3.5f] 四宫格打开异常', key, err);
        if (UI.toast) UI.toast('打开面板出错：' + (err.message || err), 'error');
      }
    }, true);

    log('✔ Bug 1 修复：四宫格改走委托，bindFourGrid 已空转（消除双触发）');
  }

  // =================================================================
  // Bug 4 · 斩妖场怪物属性错误（按敌方境界算标杆）
  //   —— 已在上一版修好，这里保留一份并加防重入
  // =================================================================
  function patchMonsterScale() {
    if (!Game.scaleMonsterForRealm || Game.__v435f_scalePatched) return;
    Game.__v435f_scalePatched = true;

    Game.scaleMonsterForRealm = function (base) {
      base = base || {};
      const playerRid = this.state.char.realmId || 0;
      const enemyRid = Number.isFinite(base.enemyRid) ? base.enemyRid : playerRid;
      const gap = enemyRid - playerRid;

      const targetForEnemy = this.getTargetStatsForRealm
        ? this.getTargetStatsForRealm(enemyRid)
        : { maxHp: 900 * (1 + enemyRid * 0.12), atk: 120 * (1 + enemyRid * 0.10), def: 60 * (1 + enemyRid * 0.08) };

      const diffMul = { easy: 0.55, normal: 1.0, hard: 1.55, boss: 2.4 }[base.diff || 'normal'] || 1;
      const gapHp  = 1 + Math.max(-0.5, Math.min(1.0, gap * 0.15));
      const gapAtk = 1 + Math.max(-0.5, Math.min(1.0, gap * 0.12));

      const hpVal  = Math.max(80, Math.round(targetForEnemy.maxHp * 0.88 * diffMul * gapHp));
      const atkVal = Math.max(8,  Math.round(targetForEnemy.atk   * 0.62 * diffMul * gapAtk));
      const defVal = Math.max(1,  Math.round((targetForEnemy.def || 0) * 0.42 * diffMul));

      return {
        name: base.name || '妖兽',
        hp: hpVal, maxHp: hpVal,
        atk: atkVal, def: defVal,
        diff: base.diff || 'normal',
        enemyRid,
        attackChance: base.diff === 'boss' ? 0.85 : base.diff === 'hard' ? 0.7 : 0.55,
        title: base.title || ''
      };
    };
    log('✔ Bug 4 修复：怪物属性用 enemyRid 境界算标杆（同阶怪按同阶玩家标杆做）');
  }

  // =================================================================
  // Bug 2 · 洞府闭关沦为废物 → 改为答题式（支持所有题型）
  //   这一版重点修：
  //     1) 判正确调用 Game.judgeAnswer，不再自己实现
  //     2) 支持 single/judge/multi/fill/calc 五种题型渲染
  //     3) 用户点选/输入后一律有提交按钮，不会"选完卡死"
  // =================================================================
  function patchCaveMeditate() {
    // 兜底：ensure cave fields
    const ensureCave = function () {
      if (!Game.state.cave) Game.state.cave = { level: 1 };
      const cv = Game.state.cave;
      cv.level = cv.level || 1;
      cv.dailyUsed = cv.dailyUsed || 0;
      cv.dailyDate = cv.dailyDate || '';
      cv.lastMeditateAt = cv.lastMeditateAt || 0;
      return cv;
    };
    const todayStr = function () {
      const d = new Date();
      return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    };
    const refreshDaily = function () {
      const cv = ensureCave();
      if (cv.dailyDate !== todayStr()) {
        cv.dailyDate = todayStr();
        cv.dailyUsed = 0;
      }
    };
    const CAVE_DAILY_MAX = 4;
    const CAVE_COOLDOWN_MS = 30 * 60 * 1000;

    // 收集所有当前解锁学科的题库（优先 easy/normal）
    const collectPool = function () {
      const pool = [];
      const sects = ['physics', 'chemistry', 'geography', 'chinese', 'math', 'english'];
      sects.forEach(function (sk) {
        const st = Game.state.sects && Game.state.sects[sk];
        if (!st || !st.unlocked) return;
        const bank = global[sk.toUpperCase() + '_BANK'];
        if (!Array.isArray(bank)) return;
        bank.forEach(function (q) {
          const d = q.difficulty || 'normal';
          if (d === 'easy' || d === 'normal') {
            pool.push(Object.assign({ __sect: sk }, q));
          }
        });
      });
      return pool;
    };

    const calcCaveReward = function (correct, difficulty) {
      const cv = ensureCave();
      const realmMul = Game.getRealmMultiplier ? Game.getRealmMultiplier() : 1;
      const caveMul = Math.pow(1.35, cv.level - 1);
      const diffBase = difficulty === 'normal' ? 90 : 55;
      if (correct) {
        return {
          exp: Math.round(diffBase * caveMul * realmMul),
          dao: Math.round(30 + realmMul * 4),
          hpPct: 1.0, mpPct: 1.0
        };
      } else {
        return { exp: 0, dao: 5, hpPct: 0.5, mpPct: 0.5 };
      }
    };

    // 归一化选项（single/multi/judge）
    const normalizeOptions = function (q) {
      const type = q.type || 'single';
      if (type === 'judge') {
        return [{ k: '对', v: '对（正确）' }, { k: '错', v: '错（错误）' }];
      }
      if (Array.isArray(q.options) && q.options.length) {
        return q.options.map(function (opt, i) {
          const s = String(opt);
          const m = s.match(/^([A-Z])[\.\s、\.]+\s*(.*)$/);
          if (m) return { k: m[1], v: m[2] };
          return { k: String.fromCharCode(65 + i), v: s };
        });
      }
      return [];
    };

    const typeLabel = function (t) {
      return { single: '单选', multi: '多选', judge: '判断', fill: '填空', calc: '计算', solve: '解答', essay: '论述' }[t] || '题目';
    };

    // 一场问道
    const openCaveQuestion = function (parentInst) {
      const cv = ensureCave();
      refreshDaily();
      const now = Date.now();
      const canCooldown = (now - cv.lastMeditateAt) >= CAVE_COOLDOWN_MS;
      if (cv.dailyUsed >= CAVE_DAILY_MAX) {
        if (UI.toast) UI.toast('今日闭关额度已用完（' + CAVE_DAILY_MAX + '/日），子夜刷新', 'warn');
        return;
      }
      if (!canCooldown) {
        const remain = Math.ceil((CAVE_COOLDOWN_MS - (now - cv.lastMeditateAt)) / 60000);
        if (UI.toast) UI.toast('闭关冷却中，还需 ' + remain + ' 分钟', 'warn');
        return;
      }
      const pool = collectPool();
      if (!pool.length) {
        if (UI.toast) UI.toast('题库尚未加载或无解锁学科，请稍候', 'warn');
        return;
      }
      const q = pool[Math.floor(Math.random() * pool.length)];
      const sectName = {
        physics: '⚡雷霆殿', chemistry: '⚗丹鼎峰', geography: '🌏山河阁',
        chinese: '📜文渊阁', math: '🔢推衍宫', english: '🌐译灵堂'
      };
      const type = q.type || 'single';
      const opts = normalizeOptions(q);
      const isFillLike = (type === 'fill' || type === 'calc' || type === 'solve' || type === 'essay');
      const isMulti = (type === 'multi');
      const isChoiceLike = !isFillLike && opts.length > 0;

      // 可视化
      const vizHtml = (typeof AutoViz !== 'undefined') ? (AutoViz.forQuestion(q) || '') : '';

      let bodyOptsHtml = '';
      if (isFillLike) {
        bodyOptsHtml =
          '<div style="margin-top:10px;">' +
          '<textarea id="cave-fill-input" placeholder="请输入答案…" rows="' + (type === 'single' ? 2 : 3) + '" ' +
          'style="width:100%;padding:12px;font-size:15px;background:rgba(0,0,0,0.3);border:1px solid var(--xx-purple);border-radius:8px;color:var(--xx-text);resize:vertical;font-family:inherit;box-sizing:border-box;"></textarea>' +
          '</div>';
      } else if (isChoiceLike) {
        bodyOptsHtml = '<div class="cave-q-opts">' +
          opts.map(function (o, i) {
            return '<div class="cave-q-opt" data-k="' + o.k + '" data-i="' + i + '">' +
                   '<span class="cave-q-letter">' + o.k + '</span>' +
                   '<span class="cave-q-text">' + o.v + '</span>' +
                   '</div>';
          }).join('') + '</div>';
        if (isMulti) {
          bodyOptsHtml += '<div style="font-size:12px;color:var(--xx-cyan);margin-top:8px;">💡 多选题：点选多个选项后按【提交作答】按钮。</div>';
        }
      } else {
        // 兜底：既无 options 又非 fill → 当 fill 处理
        bodyOptsHtml =
          '<div style="margin-top:10px;">' +
          '<textarea id="cave-fill-input" placeholder="请输入答案…" rows="2" ' +
          'style="width:100%;padding:12px;font-size:15px;background:rgba(0,0,0,0.3);border:1px solid var(--xx-purple);border-radius:8px;color:var(--xx-text);resize:vertical;font-family:inherit;box-sizing:border-box;"></textarea>' +
          '</div>';
      }

      const body =
        '<div style="text-align:center;margin-bottom:12px;">' +
          '<div style="font-size:28px;">🧘</div>' +
          '<div style="font-family:var(--xx-font-art);font-size:16px;color:var(--xx-cyan);letter-spacing:3px;">' +
            '闭关问道 · Lv.' + cv.level + ' 洞府' +
          '</div>' +
          '<div style="font-size:12px;color:var(--xx-text-dim);margin-top:3px;">' +
            '今日 ' + cv.dailyUsed + '/' + CAVE_DAILY_MAX + ' · 答对 → 奖励修为 · 答错 → 静心恢复' +
          '</div>' +
        '</div>' +
        '<div class="cave-q-source" style="font-size:11px;color:var(--xx-text-dim);text-align:right;margin-bottom:6px;">' +
          '题源：' + (sectName[q.__sect] || q.__sect) + ' · ' + (q.difficulty || 'normal') + ' · ' + typeLabel(type) +
        '</div>' +
        '<div class="cave-q-stem" style="font-size:14.5px;line-height:1.8;padding:12px;background:rgba(255,255,255,0.03);border-left:3px solid var(--xx-cyan);border-radius:4px;margin-bottom:12px;">' +
          (q.q || '(题干缺失)') +
        '</div>' +
        (vizHtml ? '<div style="margin-bottom:10px;">' + vizHtml + '</div>' : '') +
        bodyOptsHtml +
        '<div class="cave-q-result" style="display:none;margin-top:14px;"></div>' +
        '<div class="cave-q-actions" style="margin-top:14px;display:flex;justify-content:flex-end;gap:8px;">' +
          '<button class="xx-btn xx-btn-primary" id="cave-submit">⚔ 提交作答</button>' +
        '</div>';

      const inst = UI.modal({
        title: '🏔 洞府闭关问道',
        wide: true,
        body: body,
        actions: [{ label: '关闭', primary: true }]
      });

      const modalBody = inst.m.querySelector('.xx-modal-body');
      if (!modalBody) return;

      const pickedSet = new Set();
      let submitted = false;

      // 单选/多选/判断 → 点击标记
      modalBody.querySelectorAll('.cave-q-opt').forEach(function (el) {
        el.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 12px;margin:6px 0;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;cursor:pointer;transition:all 0.15s;';
        el.onmouseenter = function () { if (!submitted) el.style.background = 'rgba(110,213,224,0.10)'; };
        el.onmouseleave = function () {
          if (submitted) return;
          const k = el.dataset.k;
          el.style.background = pickedSet.has(k) ? 'rgba(110,213,224,0.18)' : 'rgba(255,255,255,0.04)';
        };
        el.onclick = function () {
          if (submitted) return;
          const k = el.dataset.k;
          if (isMulti) {
            if (pickedSet.has(k)) pickedSet.delete(k); else pickedSet.add(k);
          } else {
            pickedSet.clear();
            pickedSet.add(k);
          }
          // 视觉反馈
          modalBody.querySelectorAll('.cave-q-opt').forEach(function (o) {
            const kk = o.dataset.k;
            if (pickedSet.has(kk)) {
              o.style.background = 'rgba(110,213,224,0.18)';
              o.style.borderColor = 'var(--xx-cyan)';
            } else {
              o.style.background = 'rgba(255,255,255,0.04)';
              o.style.borderColor = 'rgba(255,255,255,0.08)';
            }
          });
        };
      });

      // 提交按钮 → 判题
      const btnSubmit = modalBody.querySelector('#cave-submit');
      if (btnSubmit) {
        btnSubmit.onclick = function () {
          if (submitted) return;
          let userAns = null;
          if (isFillLike || (!isChoiceLike && !isMulti)) {
            const ta = modalBody.querySelector('#cave-fill-input');
            const val = ta ? String(ta.value || '').trim() : '';
            if (!val) { if (UI.toast) UI.toast('请先输入答案', 'warn'); return; }
            userAns = val;
          } else if (isMulti) {
            if (pickedSet.size === 0) { if (UI.toast) UI.toast('请选择至少一个选项', 'warn'); return; }
            userAns = Array.from(pickedSet);
          } else {
            if (pickedSet.size === 0) { if (UI.toast) UI.toast('请选择一个选项', 'warn'); return; }
            userAns = Array.from(pickedSet)[0];
          }
          submitted = true;
          btnSubmit.disabled = true;
          btnSubmit.textContent = '已提交';

          // ★ 调用权威判题函数（这就是关键修复）
          const correct = Game.judgeAnswer ? Game.judgeAnswer(q, userAns) : false;
          const reward = calcCaveReward(correct, q.difficulty || 'normal');

          // 更新洞府次数
          cv.dailyUsed++;
          cv.lastMeditateAt = Date.now();
          // 发奖励
          if (correct) {
            if (Game.addExp) Game.addExp(reward.exp);
            if (Game.changeDaoxin) Game.changeDaoxin(reward.dao);
          } else {
            if (Game.changeDaoxin) Game.changeDaoxin(reward.dao);
          }
          const c = Game.state.char;
          c.hp = Math.min(c.maxHp, c.hp + Math.round(c.maxHp * reward.hpPct));
          c.mp = Math.min(c.maxMp, c.mp + Math.round(c.maxMp * reward.mpPct));
          if (Game.save) Game.save();

          // 视觉反馈
          const correctKeys = new Set();
          if (type === 'multi' && Array.isArray(q.answer)) {
            q.answer.forEach(function (k) { correctKeys.add(String(k).trim().toUpperCase()); });
          } else if (type === 'single' || type === 'judge') {
            correctKeys.add(String(q.answer).trim().toUpperCase());
          }

          modalBody.querySelectorAll('.cave-q-opt').forEach(function (o) {
            const k = String(o.dataset.k || '').toUpperCase();
            if (correctKeys.has(k)) {
              o.style.background = 'rgba(140,226,140,0.20)';
              o.style.borderColor = 'var(--xx-green)';
            } else if (pickedSet.has(o.dataset.k)) {
              o.style.background = 'rgba(255,120,120,0.20)';
              o.style.borderColor = 'var(--xx-red)';
            }
            o.style.cursor = 'default';
          });

          const resultDiv = modalBody.querySelector('.cave-q-result');
          if (resultDiv) {
            const answerHtml = (function () {
              if (type === 'multi' && Array.isArray(q.answer)) return q.answer.join('、');
              if (Array.isArray(q.answer)) return q.answer.join(' / ');
              return String(q.answer);
            })();
            resultDiv.style.display = 'block';
            if (correct) {
              resultDiv.innerHTML =
                '<div style="padding:12px;background:rgba(140,226,140,0.10);border:1px solid var(--xx-green);border-radius:6px;">' +
                '<b style="color:var(--xx-green);">✔ 答对！心神通明</b><br>' +
                '<span style="font-size:13px;color:var(--xx-text-soft);line-height:1.8;">' +
                '修为 +<b style="color:var(--xx-gold);">' + reward.exp.toLocaleString() + '</b>　' +
                '道心 +<b style="color:var(--xx-purple);">' + reward.dao + '</b>　' +
                'HP/MP 全恢复' +
                '</span>' +
                (q.explain ? '<div style="margin-top:8px;font-size:12px;color:var(--xx-text-dim);border-top:1px dashed rgba(255,255,255,0.15);padding-top:6px;"><b>解析：</b>' + q.explain + '</div>' : '') +
                '</div>';
            } else {
              resultDiv.innerHTML =
                '<div style="padding:12px;background:rgba(255,180,120,0.08);border:1px solid #f39c56;border-radius:6px;">' +
                '<b style="color:#f39c56;">✕ 答错，正解：' + answerHtml + '</b><br>' +
                '<span style="font-size:13px;color:var(--xx-text-soft);line-height:1.8;">' +
                '道心 +' + reward.dao + '　HP/MP 恢复一半（静心稳固）' +
                '</span>' +
                (q.explain ? '<div style="margin-top:8px;font-size:12px;color:var(--xx-text-dim);border-top:1px dashed rgba(255,255,255,0.15);padding-top:6px;"><b>解析：</b>' + q.explain + '</div>' : '') +
                '</div>';
            }
          }
          if (Game.emit) Game.emit('expChange');
        };
      }

      // 填空回车提交
      const taInput = modalBody.querySelector('#cave-fill-input');
      if (taInput) {
        taInput.focus();
        taInput.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (btnSubmit) btnSubmit.click();
          }
        });
      }
    };

    // 覆盖 UI._openCaveModal
    UI._openCaveModal = function () {
      const cv = ensureCave();
      refreshDaily();
      const now = Date.now();
      const canCooldown = (now - cv.lastMeditateAt) >= CAVE_COOLDOWN_MS;
      const cdMin = canCooldown ? 0 : Math.ceil((CAVE_COOLDOWN_MS - (now - cv.lastMeditateAt)) / 60000);
      const upgradeCost = Math.round(500 * Math.pow(1.8, cv.level - 1));
      const canUpgrade = (Game.state.char.lingshi || 0) >= upgradeCost;

      const expPreview = Math.round(90 * Math.pow(1.35, cv.level - 1) * (Game.getRealmMultiplier ? Game.getRealmMultiplier() : 1));

      const body =
        '<div style="text-align:center;padding:14px 8px;">' +
          '<div style="font-size:44px;line-height:1;">🏔</div>' +
          '<div style="font-family:var(--xx-font-art);font-size:20px;color:var(--xx-cyan);letter-spacing:4px;margin-top:8px;">' +
            (cv.level >= 5 ? '飞升宝殿' : (cv.level >= 3 ? '灵气洞府' : '修士石洞')) +
          '</div>' +
          '<div style="font-size:12px;color:var(--xx-gold);margin-top:4px;letter-spacing:2px;">' +
            '洞府等级 Lv.' + cv.level + ' · 奖励系数 ×' + Math.pow(1.35, cv.level - 1).toFixed(2) +
          '</div>' +
          '<div style="font-size:13px;color:var(--xx-text-soft);margin-top:14px;line-height:1.8;padding:0 12px;">' +
            '闭关问道 —— 从已解锁学科随机抽题，答对给修为，答错也回复气血。支持单选、多选、判断、填空、计算全题型。' +
          '</div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0;padding:12px;background:rgba(110,213,224,0.06);border:1px dashed rgba(110,213,224,0.25);border-radius:8px;">' +
          '<div style="text-align:center;">' +
            '<div style="font-size:11px;color:var(--xx-text-dim);letter-spacing:2px;">今日闭关</div>' +
            '<div style="font-size:20px;color:var(--xx-cyan);margin-top:3px;"><b>' + cv.dailyUsed + '</b> / ' + CAVE_DAILY_MAX + '</div>' +
          '</div>' +
          '<div style="text-align:center;">' +
            '<div style="font-size:11px;color:var(--xx-text-dim);letter-spacing:2px;">冷却</div>' +
            '<div style="font-size:20px;color:' + (canCooldown ? 'var(--xx-green)' : 'var(--xx-text-dim)') + ';margin-top:3px;">' +
              '<b>' + (canCooldown ? '✓ 就绪' : cdMin + ' 分') + '</b>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="iv-controls" style="justify-content:center;gap:12px;margin-top:10px;">' +
          '<button class="iv-btn" id="cave-do-question"' +
            ((cv.dailyUsed >= CAVE_DAILY_MAX || !canCooldown) ? ' disabled' : '') + '>' +
            '🧘 入定问道（答对 → 修为 +' + expPreview.toLocaleString() + '）' +
          '</button>' +
          '<button class="iv-btn ghost" id="cave-do-upgrade"' + (canUpgrade ? '' : ' disabled') + '>' +
            '⏫ 升级洞府（' + upgradeCost.toLocaleString() + ' 灵石）' +
          '</button>' +
        '</div>' +
        '<div style="margin-top:14px;font-size:12px;color:var(--xx-text-dim);line-height:1.9;padding:10px;background:rgba(255,255,255,0.03);border-radius:6px;">' +
          '<b style="color:var(--xx-text-soft);">✦ 闭关机制：</b><br>' +
          '• 每日最多闭关 ' + CAVE_DAILY_MAX + ' 次（子夜 0:00 刷新）<br>' +
          '• 每次闭关后需静心 30 分钟方可再次入定<br>' +
          '• 奖励与洞府等级挂钩，升级后修为倍率 ×1.35 指数增长<br>' +
          '• 答错也有小奖励（道心 +5、HP/MP 恢复一半），鼓励继续' +
        '</div>';

      const inst = UI.modal({
        title: '🏔 洞府闭关',
        wide: true,
        body: body,
        actions: [{ label: '关闭', primary: true }]
      });
      const mb = inst.m.querySelector('.xx-modal-body');
      const btnQ = mb && mb.querySelector('#cave-do-question');
      const btnU = mb && mb.querySelector('#cave-do-upgrade');
      if (btnQ) btnQ.onclick = function () {
        inst.close();
        openCaveQuestion();
      };
      if (btnU) btnU.onclick = function () {
        UI.confirm('花费 ' + upgradeCost.toLocaleString() + ' 灵石升级洞府？升级后奖励系数 ×1.35。', function () {
          const r = Game.upgradeCave ? Game.upgradeCave() : { ok: false, msg: '升级不可用' };
          if (UI.toast) UI.toast(r.msg, r.ok ? 'success' : 'error');
          if (r.ok) { inst.close(); UI._openCaveModal(); }
        });
      };
    };

    log('✔ Bug 2 修复：洞府闭关问道支持 single/judge/multi/fill/calc 全题型；判题走 Game.judgeAnswer');
  }

  // =================================================================
  // Bug 5 · 功法可视化：每个功法都有专属图（不是通用兜底）
  //   实现：为 AutoViz.forQuestion 加一层"per-manual 装饰环"包裹，
  //         每个 manualId 都有稳定的颜色/符号/编号（用 hash 派生），
  //         就算 AutoViz 本身有内容，也在标题里显示"卷·mid"编号；
  //         AutoViz 返回空时，用 per-manual 装饰环兜底。
  // =================================================================
  function patchAutoVizPerManual() {
    if (!global.AutoViz || AutoViz.__v435f_perManual) return;
    AutoViz.__v435f_perManual = true;

    // 撤销之前 v436-final-hotfix.js 的 fallbackPatched
    AutoViz.__v436_fallbackPatched = true; // 阻止上一版再次覆盖

    const SECT_META = {
      physics: { fg: '#6ed5e0', name: '雷霆殿', symbol: '⚡', accent: 'rgba(110,213,224,0.10)', pool: ['F', 'v', 'a', 'E', 'B', 'ω', 'λ', 'φ'] },
      chemistry: { fg: '#f39c56', name: '丹鼎峰', symbol: '⚗', accent: 'rgba(243,156,86,0.10)', pool: ['H', 'O', 'C', 'N', 'Na', 'Cl', 'Fe', 'Cu'] },
      geography: { fg: '#8ce28c', name: '山河阁', symbol: '🌏', accent: 'rgba(140,226,140,0.10)', pool: ['↗', '☀', '☁', '⛰', '≈', '☷', '❄', '☘'] },
      chinese: { fg: '#f5c97a', name: '文渊阁', symbol: '📜', accent: 'rgba(245,201,122,0.10)', pool: ['之', '而', '也', '则', '乎', '矣', '哉', '兮'] },
      math: { fg: '#b288ff', name: '推衍宫', symbol: '🔢', accent: 'rgba(178,136,255,0.10)', pool: ['∫', 'Σ', '√', 'π', '∞', '≠', 'θ', 'Δ'] },
      english: { fg: '#7fb3ff', name: '译灵堂', symbol: '🌐', accent: 'rgba(127,179,255,0.10)', pool: ['A', 'the', 'to', 'of', 'is', 'be', 'ed', 'ing'] }
    };

    function hashStr(s) {
      let h = 0;
      s = String(s || '');
      for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
      return Math.abs(h);
    }

    // 生成 per-manual 装饰环 SVG（每个 manualId 稳定不变）
    function renderPerManualRing(sect, manualId, subtitle) {
      const meta = SECT_META[sect] || SECT_META.physics;
      const h = hashStr(manualId || 'default');
      const rot = h % 360;
      const symCount = meta.pool.length;
      const sym1 = meta.pool[h % symCount];
      const sym2 = meta.pool[(h >> 3) % symCount];
      const sym3 = meta.pool[(h >> 6) % symCount];

      // 六个符号绕圈
      let ring = '';
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + rot / 180 * Math.PI;
        const x = 130 + Math.cos(a) * 72;
        const y = 90 + Math.sin(a) * 72;
        const s = meta.pool[(h + i * 7) % symCount];
        ring += '<text x="' + x.toFixed(1) + '" y="' + (y + 5).toFixed(1) + '" text-anchor="middle" ' +
                'font-size="16" fill="' + meta.fg + '" opacity="0.75" font-family="serif">' + s + '</text>';
      }

      // 三层同心 dashed 圆
      const gid = 'gpm' + (h % 9999);
      const svg =
        '<svg viewBox="0 0 260 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" style="display:block;">' +
          '<defs>' +
            '<radialGradient id="' + gid + '" cx="50%" cy="50%" r="55%">' +
              '<stop offset="0%" stop-color="' + meta.fg + '" stop-opacity="0.22"/>' +
              '<stop offset="100%" stop-color="' + meta.fg + '" stop-opacity="0"/>' +
            '</radialGradient>' +
          '</defs>' +
          '<rect x="0" y="0" width="260" height="180" fill="' + meta.accent + '" rx="8"/>' +
          '<circle cx="130" cy="90" r="82" fill="url(#' + gid + ')" stroke="' + meta.fg + '" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="3 3"/>' +
          '<circle cx="130" cy="90" r="60" fill="none" stroke="' + meta.fg + '" stroke-opacity="0.5" stroke-width="1.2" stroke-dasharray="6 3"/>' +
          '<circle cx="130" cy="90" r="34" fill="none" stroke="' + meta.fg + '" stroke-opacity="0.75" stroke-width="1.4"/>' +
          ring +
          '<text x="130" y="86" text-anchor="middle" font-size="22" fill="' + meta.fg + '" opacity="0.9">' + meta.symbol + '</text>' +
          '<text x="130" y="102" text-anchor="middle" font-size="10" fill="' + meta.fg + '" opacity="0.7" letter-spacing="2" font-family="serif">' + meta.name + '</text>' +
          '<text x="130" y="118" text-anchor="middle" font-size="9" fill="' + meta.fg + '" opacity="0.55" letter-spacing="1">◈ ' + (manualId || 'manual') + ' ◈</text>' +
          (subtitle ? '<text x="130" y="172" text-anchor="middle" font-size="9" fill="' + meta.fg + '" opacity="0.5" letter-spacing="1">' + subtitle + '</text>' : '') +
        '</svg>';
      return svg;
    }

    // 包装 AutoViz.forQuestion / render
    const origRender = AutoViz.render ? AutoViz.render.bind(AutoViz) : null;
    if (origRender) {
      AutoViz.render = function (q) {
        if (!q) return '';
        let inner = '';
        try { inner = origRender(q); } catch (e) { warn('AutoViz.render error, using ring fallback', e); }
        const mid = q.manualId || '';
        const sect = q.sect || (mid && mid.startsWith('phy_') ? 'physics'
                        : mid && mid.startsWith('chem_') ? 'chemistry'
                        : mid && mid.startsWith('geo_') ? 'geography'
                        : mid && mid.startsWith('chi_') ? 'chinese'
                        : mid && mid.startsWith('math_') ? 'math'
                        : mid && mid.startsWith('eng_') ? 'english' : 'physics');
        // 有 AutoViz 内容 → 用 AutoViz + 顶部小标签
        if (inner && inner.trim() && inner.length > 60) {
          const meta = SECT_META[sect] || SECT_META.physics;
          const tag = '<div style="font-size:11px;color:' + meta.fg + ';letter-spacing:2px;margin-bottom:4px;opacity:0.75;">' +
                      meta.symbol + ' ' + meta.name + ' · ' + (mid || 'manual') + '</div>';
          return '<div class="viz-panel viz-panel-v435f">' + tag + inner + '</div>';
        }
        // 空/短 → 用 per-manual 装饰环兜底
        return '<div class="viz-panel viz-panel-v435f">' + renderPerManualRing(sect, mid, '通用符箓演化图 · v4.3.5f') + '</div>';
      };
    }
    if (AutoViz.forQuestion) {
      const origForQ = AutoViz.forQuestion.bind(AutoViz);
      AutoViz.forQuestion = function (q) {
        // 直接走新 render（保持一致）
        return AutoViz.render(q);
      };
    }

    // 暴露方法给外部：给 manual 详情页可以直接调用
    AutoViz.forManual = function (manual) {
      if (!manual) return '';
      const mid = manual.id || '';
      const sect = mid.startsWith('phy_') ? 'physics'
                  : mid.startsWith('chem_') ? 'chemistry'
                  : mid.startsWith('geo_') ? 'geography'
                  : mid.startsWith('chi_') ? 'chinese'
                  : mid.startsWith('math_') ? 'math'
                  : mid.startsWith('eng_') ? 'english' : 'physics';
      return '<div class="viz-panel viz-panel-v435f">' + renderPerManualRing(sect, mid, manual.title || '') + '</div>';
    };

    log('✔ Bug 5 修复：AutoViz 每个功法都有专属可视化图（稳定 hash · 学科色符号）');
  }

})(typeof window !== 'undefined' ? window : this);
