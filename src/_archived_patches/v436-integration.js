/* ===================================================================
 * v4.3.6 · 融汇贯通练习模块 & 主页入口 (Integration)
 * -------------------------------------------------------------------
 * 把 KG + SQ + Arena 三个模块串起来，暴露给用户可用的功能：
 *
 *   ①【融汇贯通练习】主页新增按钮，弹窗做 10 题综合练习：
 *       - 从"已学过的 manual"里选一个种子
 *       - 通过 KG 找出关联知识点
 *       - SQ 智能出题 10 道（60% 相关 + 40% 深化）
 *       - 每答对一道给正常修为奖励，全部正确额外奖励
 *   ②【学习路径可视化】主页可以看到"当前学科的推荐学习顺序"
 *   ③【战斗自动智能出题】—— 已由 arena 模块接管，本模块只作为"总开关"确保加载
 *
 * 依赖：KG, SQ, Arena
 * =================================================================== */
(function (global) {
  'use strict';
  if (global.__WENDAO_INTEGRATION_V436__) return;
  global.__WENDAO_INTEGRATION_V436__ = true;
  const Game = global.Game;
  const UI = global.UI;
  if (!Game || !UI) { console.warn('[v4.3.6-int] Game/UI 未加载'); return; }
  if (!Game.KG || !Game.SQ) { console.warn('[v4.3.6-int] KG/SQ 未就绪'); return; }

  // ---------------------------------------------------------------
  // 融汇贯通练习：多知识点混合考察
  // ---------------------------------------------------------------
  const SECT_NAMES = {
    physics: '雷霆殿·物理',
    chemistry: '丹鼎峰·化学',
    geography: '磐山界·地理',
  };
  const SECT_COLORS = {
    physics: '#7fb3ff', chemistry: '#ff9a5e', geography: '#8ce28c',
  };
  const SUBJECT_KEYS_FOR_GAOKAO = ['physics', 'chemistry', 'geography']; // 用户是物化地选手

  Game.openBlendPractice = function () {
    if (!Game.state || !Game.state.char) {
      if (Game.__ensureInit) Game.__ensureInit();
    }
    if (!Game.state || !Game.state.char) {
      UI.toast('游戏未就绪，请刷新后重试', 'error');
      return;
    }
    const learned = (Game.state.char && Game.state.char.mastered) || [];
    // 用户已学的物化地 manual
    const availSects = SUBJECT_KEYS_FOR_GAOKAO.filter(s => {
      return learned.some(m => {
        if (s === 'physics') return m.startsWith('phy_m');
        if (s === 'chemistry') return m.startsWith('chem_m');
        if (s === 'geography') return m.startsWith('geo_m');
        return false;
      });
    });

    if (!availSects.length) {
      UI.modal({
        title: '📖 融汇贯通练习',
        body: `<div style="padding:12px;color:#d8bcff;line-height:1.8">
          <p><b>「融汇贯通」</b>是本版本核心新功能——从你已参悟的功法中，抽取知识点交叉出题，
          让你不只是背单个知识点，而是能把它们串起来解题。</p>
          <p style="color:#ffb266;">但你目前还没参悟过任何功法。</p>
          <p>请先到六大宗门（物理/化学/地理）参悟至少 1 篇《功法》，之后回来试试。</p>
        </div>`,
        actions: [{ label: '知道了' }]
      });
      return;
    }

    // 让用户选：科目 / 题数
    const html = `
      <div style="padding:10px;color:#e9d8b6;">
        <p style="font-size:13px;line-height:1.7;">
          <b style="color:#ffd53f;">「融汇贯通练习」</b>会从你已学过的功法出发，
          按<b style="color:#b288ff">知识点关联图谱</b>抽取 <b>10 道题</b>—— 60% 是当前主题，40% 是相关联的其他知识点，
          模拟高考"综合大题"的思路。
        </p>
        <div style="margin:12px 0;">
          <label style="color:#e9d8b6;font-size:13px;">选择学科：</label>
          <select id="blend-sect" style="margin-left:8px;padding:6px 10px;border-radius:6px;background:#20182a;color:#e9d8b6;border:1px solid #f5c97a55;">
            ${availSects.map(s => `<option value="${s}">${SECT_NAMES[s]}</option>`).join('')}
          </select>
          <label style="margin-left:16px;color:#e9d8b6;font-size:13px;">题数：</label>
          <select id="blend-n" style="margin-left:8px;padding:6px 10px;border-radius:6px;background:#20182a;color:#e9d8b6;border:1px solid #f5c97a55;">
            <option value="5">5 题（快练）</option>
            <option value="10" selected>10 题（推荐）</option>
            <option value="20">20 题（挑战）</option>
          </select>
        </div>
        <div style="padding:10px;background:#20182a55;border-left:3px solid #b288ff;border-radius:6px;font-size:12px;color:#c8b8e0;">
          💡 奖励：每答对一题得 <b>普通答题的 1.3 倍修为</b>，全对额外奖励 <b>1000 灵石</b>。
        </div>
      </div>
    `;
    UI.modal({
      title: '📚 融汇贯通练习',
      body: html,
      actions: [
        { label: '取消' },
        {
          label: '开始练习', primary: true, onClick: () => {
            const sect = document.getElementById('blend-sect').value;
            const n = parseInt(document.getElementById('blend-n').value, 10) || 10;
            setTimeout(() => runBlendPractice(sect, n), 100);
          }
        }
      ]
    });
  };

  function runBlendPractice(sect, totalN) {
    const learned = ((Game.state.char && Game.state.char.mastered) || []).filter(m => {
      if (sect === 'physics') return m.startsWith('phy_m');
      if (sect === 'chemistry') return m.startsWith('chem_m');
      if (sect === 'geography') return m.startsWith('geo_m');
      return false;
    });
    // 随机挑一个种子 manual
    const seed = learned[Math.floor(Math.random() * learned.length)];
    const playerRealm = Game.state.char.realmId || 0;

    // 抽 totalN 道
    const qs = [];
    const seen = new Set();
    for (let i = 0; i < totalN * 4 && qs.length < totalN; i++) {
      const q = Game.SQ.pick({
        sect, manualId: seed, playerRealm, learned,
        mode: 'exam',   // exam 模式：45% 关联
      });
      if (q && !seen.has(q.id)) { seen.add(q.id); qs.push(q); }
    }
    if (!qs.length) {
      UI.toast('题库暂无匹配题目', 'error');
      return;
    }

    // 展开做题界面
    let idx = 0, correct = 0;
    const results = [];
    function nextQuestion() {
      if (idx >= qs.length) {
        showResult();
        return;
      }
      const q = qs[idx];
      renderQuestion(q);
    }
    function renderQuestion(q) {
      const optHTML = (q.options || []).map((opt, i) => {
        const letter = String.fromCharCode(65 + i);
        const text = typeof opt === 'string' ? opt : (opt.v || opt.text || opt);
        // 去掉可能已有的 A./B. 前缀
        const clean = String(text).replace(/^[A-D][.、\s]+/, '');
        return `<button class="v436-blend-opt xx-btn" data-letter="${letter}"
          style="display:block;width:100%;text-align:left;margin:6px 0;padding:10px 14px;background:#2a1f36;color:#e9d8b6;border:1px solid #f5c97a33;border-radius:8px;cursor:pointer;">
          <b style="color:#f5c97a;">${letter}.</b> ${clean}
        </button>`;
      }).join('');

      const relatedTag = q._sq_related
        ? `<span style="display:inline-block;margin-left:8px;padding:2px 8px;border-radius:8px;font-size:10px;background:#ffb26033;color:#ffe0a8;border:1px solid #ffb26066;">融汇 · 相关知识点</span>`
        : '';

      UI.modal({
        title: `📖 融汇贯通 · ${idx + 1} / ${qs.length}${relatedTag}`,
        body: `
          <div style="padding:10px;color:#e9d8b6;">
            <div style="margin-bottom:12px;color:#c8b8e0;font-size:11px;">
              难度：${q.difficulty || 'normal'}
              ${q._sq_from ? `· 来自：${q._sq_from}` : ''}
              · 已答对 <b style="color:#8ce28c;">${correct}</b> / ${idx}
            </div>
            <div style="font-size:15px;line-height:1.7;padding:12px;background:#20182a55;border-left:3px solid #b288ff;border-radius:6px;">
              ${q.q}
            </div>
            <div id="blend-opts" style="margin-top:16px;">
              ${optHTML}
            </div>
          </div>
        `,
        actions: [
          { label: '放弃练习', onClick: () => { UI.toast('已中止', 'info'); } }
        ]
      });

      // 绑定选项点击
      setTimeout(() => {
        document.querySelectorAll('.v436-blend-opt').forEach(btn => {
          btn.onclick = () => {
            const chosen = btn.dataset.letter;
            const ok = String(q.answer).toUpperCase().includes(chosen);
            if (ok) {
              btn.style.background = '#2d6b2d';
              btn.style.borderColor = '#8ce28c';
              correct++;
            } else {
              btn.style.background = '#6b2d2d';
              btn.style.borderColor = '#ff6060';
              // 高亮正确答案
              const rightLetters = String(q.answer).toUpperCase().replace(/[^A-D]/g, '').split('');
              document.querySelectorAll('.v436-blend-opt').forEach(b2 => {
                if (rightLetters.includes(b2.dataset.letter)) {
                  b2.style.background = '#2d6b2d';
                  b2.style.borderColor = '#8ce28c';
                }
              });
            }
            document.querySelectorAll('.v436-blend-opt').forEach(b => b.disabled = true);
            results.push({ q, chosen, correct: ok });

            // 展示解析
            const optsWrap = document.getElementById('blend-opts');
            if (optsWrap && q.explain) {
              const ex = document.createElement('div');
              ex.style.cssText = 'margin-top:12px;padding:12px;background:#1a1424;border-left:3px solid ' + (ok ? '#8ce28c' : '#ff6060') + ';border-radius:6px;color:#e9d8b6;font-size:13px;line-height:1.7;';
              ex.innerHTML = `<b style="color:${ok ? '#8ce28c' : '#ff6060'};">${ok ? '✅ 正确' : '❌ 错误'}</b> · 答案：<b>${q.answer}</b><br><br>💡 ${q.explain}<br><br>
                <button class="xx-btn xx-btn-primary" id="blend-next" style="margin-top:8px;">${idx + 1 >= qs.length ? '查看总结' : '下一题 →'}</button>`;
              optsWrap.appendChild(ex);
              document.getElementById('blend-next').onclick = () => {
                idx++;
                nextQuestion();
              };
            } else {
              idx++;
              setTimeout(nextQuestion, 400);
            }
          };
        });
      }, 50);
    }

    function showResult() {
      const rate = Math.round((correct / qs.length) * 100);
      const level = rate >= 90 ? '🏆 融汇贯通' : rate >= 70 ? '⭐ 触类旁通' : rate >= 50 ? '📖 初窥门径' : '🌱 尚需勤修';
      // 奖励结算
      const perExp = Math.max(3, Math.round(30 * 1.3));   // 每题额外 30% 奖励
      const totalExp = perExp * correct;
      const bonusShi = correct === qs.length ? 1000 : 0;
      if (Game.state && Game.state.char) {
        Game.state.char.exp = (Game.state.char.exp || 0) + totalExp;
        Game.state.char.lingshi = (Game.state.char.lingshi || 0) + bonusShi;
        Game.save && Game.save();
        Game.emit && Game.emit('expChange');
        Game.emit && Game.emit('lingshiChange');
      }
      // 错题进心魔录（如果有）
      const wrongs = results.filter(r => !r.correct);
      if (wrongs.length && Game.addHeartDemon) {
        wrongs.forEach(r => {
          try { Game.addHeartDemon(r.q); } catch(e){}
        });
      }
      UI.modal({
        title: `${level} · 完成`,
        body: `
          <div style="padding:14px;color:#e9d8b6;">
            <div style="text-align:center;margin-bottom:16px;">
              <div style="font-size:38px;font-weight:900;color:${rate >= 70 ? '#8ce28c' : rate >= 50 ? '#f5c97a' : '#ff9ec6'};">${rate}%</div>
              <div style="font-size:13px;color:#c8b8e0;">${correct} / ${qs.length} 正确</div>
            </div>
            <div style="padding:10px;background:#20182a55;border-left:3px solid #8ce28c;border-radius:6px;">
              🎁 修为奖励：+${totalExp}<br>
              ${bonusShi ? `🎉 <b style="color:#ffd53f;">全对额外奖励：+${bonusShi} 灵石！</b>` : ''}
              ${wrongs.length ? `<br>💔 错题 ${wrongs.length} 道 → 已进入 <b>心魔录</b>，稍后可重战` : ''}
            </div>
          </div>
        `,
        actions: [
          { label: '再来一组', onClick: () => setTimeout(() => Game.openBlendPractice(), 200) },
          { label: '完成', primary: true }
        ]
      });
    }

    nextQuestion();
  }

  // ---------------------------------------------------------------
  // 主页注入按钮（等 SPA 主页渲染出来）
  // ---------------------------------------------------------------
  function injectHomeButton() {
    if (window.location.pathname.indexOf('subjects/') >= 0) return;
    if (!Game.state || !Game.state.char) return;
    if (document.querySelector('.v436-blend-btn')) return;

    // 优先挂到 v435 的 main-actions bar 里；找不到就自己造一栏
    const bar = document.querySelector('.v435-main-actions');
    if (bar) {
      const btn = document.createElement('button');
      btn.className = 'xx-btn v436-blend-btn';
      btn.onclick = () => Game.openBlendPractice();
      btn.style.cssText = 'padding:12px;background:linear-gradient(180deg,#b288ff,#8a5fd8);color:#fff;font-weight:700;border:none;border-radius:8px;cursor:pointer;';
      btn.innerHTML = '📚 融汇贯通练习';
      bar.appendChild(btn);
      return;
    }
    // 主页有 .xx-section 就找一个挂上
    const section = document.querySelector('.xx-section');
    if (!section) return;
    const wrap = document.createElement('div');
    wrap.className = 'v436-blend-wrap';
    wrap.style.cssText = 'margin:16px auto;max-width:800px;padding:0 12px;';
    wrap.innerHTML = `
      <button class="xx-btn v436-blend-btn" style="width:100%;padding:14px;background:linear-gradient(90deg,#b288ff,#f5c97a);color:#20182a;font-weight:800;border:none;border-radius:10px;cursor:pointer;font-size:15px;letter-spacing:2px;">
        📚 融汇贯通练习 · v4.3.6 新增
      </button>
    `;
    section.parentNode.insertBefore(wrap, section.nextSibling);
    wrap.querySelector('.v436-blend-btn').onclick = () => Game.openBlendPractice();
  }

  setTimeout(injectHomeButton, 1000);
  setInterval(injectHomeButton, 3500);

  console.log('%c[v4.3.6-int] ✔ 融汇贯通练习已就绪 (Game.openBlendPractice)',
              'color:#ffd53f;font-weight:bold;');
})(typeof window !== 'undefined' ? window : this);
