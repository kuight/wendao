/* ===============================================================
 * 《问道修仙学院》v4.0 · 学科页通用逻辑
 *
 * v4.0 关键变化：
 *  + 修复 v3 的外框丢失（renderSubjectShell）
 *  + 新增【4阶段功法参悟流程】：通览篇目 → 导引示例 → 首次试炼 → 参悟成功
 *  + 新增【功法精进】UI：每30分钟一次，次数越多奖励越丰厚，附精进次数徽章
 *  + 集成 AutoViz：每道题自动生成可视化（如题目未附 viz）
 *  + Boss 战场压迫感强化：boss-stage、粒子爆炸、震撼奖励框
 *
 * 用法：
 *   SubjectPage.init({
 *     sect:'physics',
 *     manuals: PHYSICS_MANUALS,
 *     bank:    PHYSICS_BANK,
 *     introScene:'physics_intro'
 *   })
 * =============================================================== */

(function (global) {
  'use strict';
  const _sfmt = (n) => (window.Game && Game.formatBigNum) ? Game.formatBigNum(n) : String(n);


  const SubjectPage = {
    sect: '',
    manuals: [],
    bank: [],
    currentTab: 'manual',
    introScene: '',

    init(opts) {
      this.sect       = opts.sect;
      this.manuals    = opts.manuals || [];
      this.bank       = opts.bank    || [];
      this.introScene = opts.introScene || '';

      Game.init();
      this._mount();
      this._maybePlayIntro();

      // 监听hash（心魔录跳转 #q=id）
      window.addEventListener('hashchange', () => this._handleHash());
      this._handleHash();

      // 每30秒刷新一次UI，让精进冷却倒计时更新
      setInterval(() => {
        if (this.currentTab === 'manual') this._render();
      }, 30000);
    },

    _maybePlayIntro() {
      let shouldAutoIntro = false;
      try { shouldAutoIntro = localStorage.getItem('v435remake_force') === '1'; } catch (_) { shouldAutoIntro = false; }
      if (shouldAutoIntro && this.introScene && global.STORY_DATA && !Story.seen(this.introScene)) {
        Story.play(this.introScene, STORY_DATA, () =>
          UI.refreshTopbar({ backHref: '../index.html' }));
      }
    },

    _mount() {
      document.body.innerHTML = '';
      // 顶栏
      const top = document.createElement('div');
      top.innerHTML = UI.renderTopbar({ backHref: '../index.html' });
      document.body.appendChild(top.firstElementChild);
      // 容器
      const c = document.createElement('div');
      c.className = 'xx-container';
      c.id = 'sub-root';
      document.body.appendChild(c);
      this._render();
    },

    // ==============================================================
    // 主渲染：外框 + 标签页
    // ==============================================================
    _render() {
      const root = document.getElementById('sub-root');
      const contentHtml = `
        <div class="xx-tabs">
          <button class="xx-tab ${this.currentTab==='manual'?'active':''}" data-tab="manual">📖 功法秘籍</button>
          <button class="xx-tab ${this.currentTab==='quest'?'active':''}"  data-tab="quest">⚔ 妖兽试炼</button>
          <button class="xx-tab ${this.currentTab==='demon'?'active':''}"  data-tab="demon">😈 心魔录</button>
          <button class="xx-tab ${this.currentTab==='tower'?'active':''}"  data-tab="tower">🏯 闯关塔</button>
          <button class="xx-tab ${this.currentTab==='arena'?'active':''}"  data-tab="arena">🔥 斩妖场</button>
        </div>
        <div id="tab-body"></div>
      `;
      root.innerHTML = UI.renderSubjectShell(this.sect, contentHtml);

      root.querySelectorAll('.xx-tab').forEach(btn => {
        btn.onclick = () => {
          this.currentTab = btn.dataset.tab;
          this._render();
        };
      });

      const body = document.getElementById('tab-body');
      if (this.currentTab === 'manual')      this._renderManuals(body);
      else if (this.currentTab === 'quest')  this._renderQuestList(body);
      else if (this.currentTab === 'demon')  body.innerHTML = this._renderDemons();
      else if (this.currentTab === 'tower')  body.innerHTML = this._renderTower();
      else if (this.currentTab === 'arena')  { body.innerHTML = this._renderArena(); this._bindArena(); }

      if (this.currentTab === 'demon') this._bindDemons();
      if (this.currentTab === 'tower') this._bindTower();
    },

    // ==============================================================
    // 一、功法秘籍列表
    // ==============================================================
    _renderManuals(container) {
      if (!this.manuals.length) {
        container.innerHTML = `<div class="xx-empty">此宗功法暂未录入，敬请期待</div>`;
        return;
      }
      let html = `
        <div class="xx-tip">💡 修行分为 4 步：<b>通览篇目 → 导引示例 → 首次试炼 → 参悟成功</b>。<br>
        参悟后每 30 分钟可"精进"一次功法（重温基础题），精进次数越多，奖励越丰厚。</div>
        <div class="manual-list">
      `;
      // 为本宗根据 sect 预取一个 easy 小妖作为功法卡图标
      const easyMon = (typeof PixelArt !== 'undefined') ? PixelArt.monster('easy', this.sect, 3) : '';
      this.manuals.forEach(m => {
        const mastered = Game.isManualMastered(this.sect, m.id);
        const cls = `manual-card ${mastered ? 'mastered' : ''}`;
        const refineTimes = Game.getRefineTimes(this.sect, m.id);
        const canRefine   = Game.canRefine(this.sect, m.id);
        const cooldownMs  = Game.getRefineCooldownRemaining(this.sect, m.id);
        const qCount = this.bank.filter(q => q.manualId === m.id).length;
        html += `
          <div class="${cls}" data-id="${m.id}">
            ${easyMon ? `<div class="manual-mon-thumb" title="本章妖兽：${qCount} 只">${easyMon}</div>` : ''}
            <div class="manual-title">
              ${m.title}
              ${refineTimes > 0 ? `<span class="refine-badge">精进 ×${refineTimes}</span>` : ''}
            </div>
            <div class="manual-tier">
              ${m.tier ? `<span class="badge">${m.tier}</span>`  : ''}
              ${m.tag  ? `<span class="tag2">${m.tag}</span>`     : ''}
              ${m.interactive ? '<span class="interactive-badge">🔬 交互演道</span>' : ''}
            </div>
            <div class="manual-summary">${m.summary || ''}</div>
            ${mastered ? `
              <div class="refine-cooldown ${canRefine?'ready':''}">
                ${canRefine
                  ? '✨ 可再次精进（+ 少量修为/灵石）'
                  : `⏳ 精进冷却：${_fmtDuration(cooldownMs)}`}
              </div>
            ` : ''}
          </div>
        `;
      });
      html += '</div>';
      container.innerHTML = html;

      container.querySelectorAll('.manual-card').forEach(card => {
        card.onclick = () => this._openManual(card.dataset.id);
      });
    },

    // ==============================================================
    // 二、打开功法详情（分4阶段）
    // ==============================================================
    _openManual(mid) {
      const m = this.manuals.find(x => x.id === mid);
      if (!m) return;
      const mastered = Game.isManualMastered(this.sect, mid);
      if (mastered) {
        return this._openMasteredManual(m);
      }
      // v4.0：优先启用沉浸式六重入道引擎（若可用）
      if (typeof Immersive !== 'undefined' && Immersive && Immersive.startLearning) {
        return Immersive.startLearning({
          sect: this.sect,
          manual: m,
          bank: this.bank || [],
          onDone: () => { this._finishManualMaster(m); },
          onExit: () => { /* 用户中途退出，保持当前状态 */ }
        });
      }
      // 兜底：v4.0 分阶段学习
      const stage = Game.getLearnStage(this.sect, mid);
      this._startLearnStage(m, stage || 1);
    },

    /**
     * 分阶段参悟流程
     * stage 1 = 通览篇目（阅读知识内容）
     * stage 2 = 导引示例（看示例 + 可视化）
     * stage 3 = 首次试炼（做3道基础/中等题）
     * stage 4 = 参悟成功 → mastered
     */
    _startLearnStage(m, stage) {
      Game.setLearnStage(this.sect, m.id, stage);
      const stepsHtml = `
        <div class="learn-progress">
          <span class="learn-step ${stage>1?'done':stage===1?'current':''}">① 通览篇目</span>
          <span class="learn-step-arrow">→</span>
          <span class="learn-step ${stage>2?'done':stage===2?'current':''}">② 导引示例</span>
          <span class="learn-step-arrow">→</span>
          <span class="learn-step ${stage>3?'done':stage===3?'current':''}">③ 首次试炼</span>
          <span class="learn-step-arrow">→</span>
          <span class="learn-step ${stage===4?'done':''}">④ 参悟成功</span>
        </div>
      `;

      const _tag = m.tag || m.chapter || '';
      const _formula = _joinFormula(m);
      const _tips    = _joinTips(m);
      if (stage === 1) {
        // 通览篇目
        const bldSvg = (typeof PixelArt !== 'undefined') ? PixelArt.building(this.sect) : '';
        UI.modal({
          title: `📖 ${m.title} · ①通览篇目`,
          wide: true,
          body: `
            ${stepsHtml}
            <div class="cg-frame cg-pixel-frame">
              <div class="cg-sweep"></div>
              <div class="cg-content" style="padding:10px;">
                ${bldSvg ? `<div class="cg-pixel-wrap">${bldSvg}</div>` : '<div class="cg-emoji">📜</div>'}
                <div style="font-size:13px;margin-top:8px;color:var(--xx-text-soft);letter-spacing:1px;">古朴的功法秘籍在你面前徐徐展开……</div>
              </div>
            </div>
            <div style="margin-top:16px;font-size:11px;color:var(--xx-text-dim);letter-spacing:2px;">${m.tier || ''} · ${_tag}</div>
            <div style="margin-top:8px;line-height:1.9;font-size:14.5px;">${m.content || m.summary || ''}</div>
            ${_formula ? `<div class="xx-tip" style="margin-top:14px;"><b>📐 关键公式：</b><br>${_formula}</div>` : ''}
          `,
          actions: [
            { label:'稍后再看' },
            { label:'▶ 我已明晓大意，进入下一阶段', primary:true, onClick: () => {
              setTimeout(() => this._startLearnStage(m, 2), 200);
            }}
          ]
        });
      } else if (stage === 2) {
        // 导引示例（v4.0 重新接入 v3 的交互演道）
        const hasInteractive = m.interactive && typeof IE !== 'undefined' && IE && typeof IE.render === 'function';
        UI.modal({
          title: `📖 ${m.title} · ②导引示例`,
          wide: true,
          body: `
            ${stepsHtml}
            ${_tips     ? `<div class="quest-explain"><b>💡 修行心得：</b>${_tips}</div>`   : ''}
            ${m.example  ? `<div class="quest-explain" style="border-color:var(--xx-cyan);background:rgba(110,213,224,0.08);"><b style="color:var(--xx-cyan);">🌰 经典示例：</b><br>${m.example}</div>` : ''}
            ${hasInteractive ? `
              <div class="xx-tip" style="margin-top:14px;background:rgba(178,136,255,0.10);border-color:var(--xx-purple);">
                <b style="color:var(--xx-purple);">🔬 交互演道：</b>${m.interactive.title || '亲手拖拽/调节参数，看下方动画变化 ↓'}
              </div>
              <div id="iv-stage-${m.id}" class="iv-stage"></div>
            ` : this._sampleViz(m)}
            <div class="xx-tip">研读示例后，你将进入 3 道 "首次试炼" 妖兽题。战胜即可完成参悟！</div>
          `,
          actions: [
            { label:'⬅ 回顾' , onClick: () => { setTimeout(() => this._startLearnStage(m, 1), 200); } },
            { label:'⚔ 进入首次试炼', primary:true, onClick: () => {
              setTimeout(() => this._startFirstTrial(m), 200);
            }}
          ]
        });
        // 弹窗开启后才能拿到容器 → 延时挂载 IE
        if (hasInteractive) {
          setTimeout(() => {
            const stage = document.getElementById(`iv-stage-${m.id}`);
            if (stage) {
              try { IE.render(stage, m.interactive); }
              catch (e) { stage.innerHTML = `<div class="xx-empty">交互动画加载失败：${e.message}</div>`; }
            }
          }, 80);
        }
      } else if (stage >= 4) {
        // 已经在其他路径完成
        this._openMasteredManual(m);
      }
    },

    // v4.3.5g 重构：合并 v435f-hotfix Bug 5 —— 无 interactive 时的三级兑底
    //   ① 试图给本功法的题目抽取具体可视化（AutoViz.forQuestion）
    //   ② 它返回空字串 → 退化为本功法专属装饰环（AutoViz.forManual）
    _sampleViz(m) {
      const qs = this.bank.filter(q => q.manualId === m.id);
      if (typeof AutoViz !== 'undefined') {
        if (qs.length) {
          const q = qs.find(x => (x.difficulty || 'normal') !== 'boss') || qs[0];
          const html = AutoViz.forQuestion(q);
          if (html) return html;
        }
        if (AutoViz.forManual) {
          const ring = AutoViz.forManual(m.id);
          if (ring) return '<div class="xx-tip" style="background:rgba(178,136,255,0.06);border-color:rgba(178,136,255,0.30);"><b style="color:var(--xx-purple);">🎀 道迹环：</b>本功法专属道纹守护</div>' + ring;
        }
      }
      return '';
    },

    // ==============================================================
    // 三、首次试炼（3题）
    // ==============================================================
    _startFirstTrial(m) {
      Game.setLearnStage(this.sect, m.id, 3);
      const qs = this.bank
        .filter(q => q.manualId === m.id && (q.difficulty === 'easy' || q.difficulty === 'normal'))
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      if (!qs.length) {
        // 无对应题，直接判为参悟
        this._finishManualMaster(m);
        return;
      }
      // 切到 quest tab 进行战斗（战斗流程可复用）
      this.currentTab = 'quest';
      this._render();
      const root = document.getElementById('tab-body');
      root.innerHTML = '';
      // v4.0 FIX: 宽容通过——至少答对 1 道即可参悟（学习不应卡在基础题上）
      this._battleStep(qs, 0, { right:0, wrong:0 }, {
        isTrial: true, m,
        onDone: (stat) => {
          if (stat.right >= 1) {   // 至少 1 道即可参悟
            // 参悟成功的彩带庆祝
            UI.confetti(100);
            this._finishManualMaster(m);
          } else {
            UI.modal({
              title:'😔 首次试炼未过',
              body: `
                <p style="line-height:1.9;">你在 3 道试炼题中只答对了 ${stat.right} 道。<br>
                建议回顾功法后再来挑战——记住，宁静致远，欲速则不达。</p>
              `,
              actions:[{ label:'返回导引', primary:true, onClick: () => this._startLearnStage(m, 2) }]
            });
          }
        }
      });
    },

    _finishManualMaster(m) {
      // 首次参悟大奖
      const r = Game.masterManual(this.sect, m.id, 100, 60);
      const root = document.getElementById('tab-body');
      root.innerHTML = `
        <div class="xx-immortal-box" style="text-align:center;padding:44px 20px;">
          <div class="corner-tr"></div><div class="corner-bl"></div>
          <div style="font-family:var(--xx-font-art);font-size:32px;color:var(--xx-gold);letter-spacing:8px;text-shadow:0 0 20px var(--xx-gold);">功 法 参 悟</div>
          <div style="margin-top:14px;font-size:20px;color:var(--xx-gold);font-family:var(--xx-font-art);letter-spacing:3px;">《${m.title}》</div>
          <div style="margin-top:20px;">
            ${_masteryCG(this.sect)}
          </div>
          <div class="boss-reward-box">
            <div class="rt">⚔ 首次参悟奖励</div>
            <div style="margin-top:14px;font-size:18px;">
              <span style="color:var(--xx-gold);">+${r ? r.expGain : 100} 修为</span> &nbsp;·&nbsp;
              <span style="color:var(--xx-cyan);">+${r ? r.shiGain : 60} 灵石</span>
            </div>
            <div style="margin-top:6px;font-size:12px;color:var(--xx-text-dim);">从此该功法可在"妖兽试炼"中挑战，并每 30 分钟可精进一次</div>
          </div>
          <div style="margin-top:24px;">
            <button class="xx-btn xx-btn-primary" id="doneBtn">继续修行 ▶</button>
          </div>
        </div>
      `;
      document.getElementById('doneBtn').onclick = () => {
        this.currentTab = 'manual';
        this._render();
      };
      UI.refreshTopbar({ backHref:'../index.html' });
    },

    // ==============================================================
    // 四、已参悟功法弹窗（含精进入口）
    // ==============================================================
    _openMasteredManual(m) {
      const times = Game.getRefineTimes(this.sect, m.id);
      const canRefine = Game.canRefine(this.sect, m.id);
      const cdMs = Game.getRefineCooldownRemaining(this.sect, m.id);
      const _tag = m.tag || m.chapter || '';
      const _formula = _joinFormula(m);
      const _tips    = _joinTips(m);

      const bldSvg = (typeof PixelArt !== 'undefined') ? PixelArt.building(this.sect) : '';
      const hasInteractive = m.interactive && typeof IE !== 'undefined' && IE && typeof IE.render === 'function';
      UI.modal({
        title: `📖 ${m.title} <span style="font-size:12px;color:var(--xx-text-dim);">（已参悟）</span>`,
        wide: true,
        body: `
          ${bldSvg ? `<div class="cg-frame cg-pixel-frame" style="height:120px;"><div class="cg-content"><div class="cg-pixel-wrap small">${bldSvg}</div></div></div>` : ''}
          <div style="font-size:12px;color:var(--xx-text-dim);letter-spacing:2px;margin-top:8px;">${m.tier || ''} · ${_tag}</div>
          <div style="margin-top:8px;line-height:1.85;font-size:14px;">${m.content || m.summary || ''}</div>
          ${_formula ? `<div class="xx-tip" style="margin-top:12px;"><b>📐 关键公式：</b><br>${_formula}</div>` : ''}
          ${_tips    ? `<div class="quest-explain" style="margin-top:12px;"><b>💡 心得：</b>${_tips}</div>` : ''}
          ${m.example ? `<div class="quest-explain" style="margin-top:8px;border-color:var(--xx-cyan);background:rgba(110,213,224,0.08);"><b style="color:var(--xx-cyan);">🌰 示例：</b><br>${m.example}</div>` : ''}
          ${hasInteractive ? `
            <div class="xx-tip" style="margin-top:12px;background:rgba(178,136,255,0.10);border-color:var(--xx-purple);">
              <b style="color:var(--xx-purple);">🔬 交互演道：</b>${m.interactive.title || '亲手拖拽下方动画参数、不断回味 ↓'}
            </div>
            <div id="iv-review-${m.id}" class="iv-stage"></div>
          ` : ''}
          <hr class="xx-divider"/>
          <div class="xx-immortal-box" style="padding:16px;">
            <div class="corner-tr"></div><div class="corner-bl"></div>
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
              <div>
                <div style="font-family:var(--xx-font-art);font-size:18px;color:var(--xx-purple);letter-spacing:2px;">
                  ✨ 精进此功法
                </div>
                <div style="font-size:12px;color:var(--xx-text-dim);margin-top:4px;">
                  已精进 ×${times} 次 · 下次奖励约 +${_sfmt(15 + (times+1)*3)} 修为 / +${_sfmt(10 + (times+1)*2)} 灵石
                </div>
              </div>
              <div>
                ${ canRefine
                  ? `<button class="refine-btn" id="doRefine">⚡ 精进一次</button>`
                  : `<button class="refine-btn" disabled>⏳ ${_fmtDuration(cdMs)}</button>`
                }
              </div>
            </div>
            <div class="xx-tip" style="margin-top:12px;">精进 = 从此功法题库中随机抽 <b>1 道基础题</b>练手，答对答错都算精进一次；每 30 分钟可精进 1 次。</div>
          </div>
        `,
        actions: [{ label:'关闭', primary:true }]
      });

      // 绑定精进按钮 + 可视化挂载
      setTimeout(() => {
        const btn = document.getElementById('doRefine');
        if (btn) {
          btn.onclick = () => this._doRefineFlow(m);
        }
        // 重新挂载交互演道
        if (hasInteractive) {
          const stage = document.getElementById(`iv-review-${m.id}`);
          if (stage) {
            try { IE.render(stage, m.interactive); }
            catch (e) { stage.innerHTML = `<div class="xx-empty">交互动画加载失败：${e.message}</div>`; }
          }
        }
      }, 60);
    },

    // ==============================================================
    // 五、精进流程：随机抽1题
    // ==============================================================
    _doRefineFlow(m) {
      const qs = this.bank
        .filter(q => q.manualId === m.id && (q.difficulty === 'easy' || q.difficulty === 'normal'))
        .slice()
        .sort(() => Math.random() - 0.5);
      if (!qs.length) {
        // 直接给奖励
        const r = Game.doRefine(this.sect, m.id);
        if (r) UI.toast(`精进 +${_sfmt(r.expGain)} 修为 +${_sfmt(r.shiGain)} 灵石`, 'success');
        return;
      }
      const q = qs[0];
      // 关闭原modal，进入精进战
      document.querySelectorAll('.xx-modal-mask').forEach(x => x.remove());
      // 切到 quest tab 里显示精进题
      this.currentTab = 'quest';
      this._render();
      const root = document.getElementById('tab-body');
      root.innerHTML = '';
      // 用专用流程：只1题，结束后触发精进奖励
      this._battleStep([q], 0, { right:0, wrong:0 }, {
        isRefine: true, m,
        onDone: () => {
          const r = Game.doRefine(this.sect, m.id);
          if (!r) return;
          UI.modal({
            title:'✨ 精进圆满',
            body:`
              <div style="text-align:center;">
                ${_refineCG(this.sect, r ? r.times : 1, m.title)}
                <div class="boss-reward-box" style="margin-top:14px;">
                  <div class="rt">精进 × ${r.times}</div>
                  <div style="margin-top:12px;font-size:16px;">
                    <span style="color:var(--xx-gold);">+${_sfmt(r.expGain)} 修为</span> ·
                    <span style="color:var(--xx-cyan);">+${_sfmt(r.shiGain)} 灵石</span>
                  </div>
                </div>
              </div>
            `,
            actions:[{ label:'继续', primary:true, onClick: () => {
              this.currentTab = 'manual';
              this._render();
            }}]
          });
        }
      });
    },

    // ==============================================================
    // 六、妖兽试炼列表（按功法分组）
    // ==============================================================
    _renderQuestList(container) {
      if (!this.bank.length) {
        container.innerHTML = `<div class="xx-empty">妖兽数据加载中，敬请期待 ⚔</div>`;
        return;
      }
      const st = Game.state.sects[this.sect];
      const groups = {};
      this.bank.forEach(q => {
        const k = q.manualId || '未分类';
        (groups[k] = groups[k] || []).push(q);
      });

      let html = `<div class="xx-tip">⚔ 需先参悟对应功法（4阶段流程），才能挑战该章妖兽。</div>`;
      for (const mid of Object.keys(groups)) {
        const m = this.manuals.find(x => x.id === mid);
        const locked = m && !Game.isManualMastered(this.sect, mid);
        const arr = groups[mid];
        const beaten = arr.filter(q => st.defeatedQuests.includes(q.id)).length;
        html += `
          <div class="xx-card" style="margin-bottom:14px;${locked ? 'opacity:0.5;' : ''}">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div style="font-family:var(--xx-font-art);font-size:17px;color:var(--xx-gold);letter-spacing:1px;">
                  ${locked ? '🔒 ' : '⚔ '}${m ? m.title : mid}
                </div>
                <div style="font-size:12px;color:var(--xx-text-dim);margin-top:4px;">
                  ${arr.length} 只妖兽 · 已斩 ${beaten}
                </div>
              </div>
              <div>
                ${ locked
                  ? '<span style="color:var(--xx-text-dim);font-size:12px;">需先参悟此功法</span>'
                  : `<button class="xx-btn xx-btn-primary xx-btn-sm" data-start="${mid}">开始挑战 ▶</button>`
                }
              </div>
            </div>
          </div>
        `;
      }
      container.innerHTML = html;
      container.querySelectorAll('[data-start]').forEach(btn => {
        btn.onclick = () => this._startBattle(btn.dataset.start);
      });
    },

    _startBattle(mid) {
      const qs = this.bank.filter(q => q.manualId === mid);
      if (!qs.length) { UI.toast('该章无可用题目', 'error'); return; }
      const queue = qs.slice().sort(() => Math.random() - 0.5);
      this._battleStep(queue, 0, { right: 0, wrong: 0 }, {});
    },

    // ==============================================================
    // 七、单题渲染 + 战斗结果
    // ==============================================================
    _battleStep(queue, idx, stat, mode = {}) {
      const root = document.getElementById('tab-body');
      if (idx >= queue.length) {
        // 结束
        if (mode.onDone) { mode.onDone(stat); return; }
        // 常规结束页
        root.innerHTML = `
          <div class="xx-immortal-box" style="text-align:center;padding:34px 20px;">
            <div class="corner-tr"></div><div class="corner-bl"></div>
            <div style="font-family:var(--xx-font-art);font-size:28px;color:var(--xx-gold);letter-spacing:6px;">⚔ 战斗结束</div>
            <div style="margin-top:14px;color:var(--xx-text-soft);">
              本轮共战 <b>${queue.length}</b> 妖 · 斩 <b style="color:var(--xx-green);">${stat.right}</b> · 失手 <b style="color:var(--xx-red);">${stat.wrong}</b>
            </div>
            <div style="margin-top:24px;">
              <button class="xx-btn xx-btn-primary" id="battleAgain">⚔ 再战一轮</button>
              <button class="xx-btn" id="battleBack">📜 返回</button>
            </div>
          </div>
        `;
        root.querySelector('#battleAgain').onclick = () => this._startBattle(queue[0].manualId);
        root.querySelector('#battleBack').onclick  = () => { this.currentTab = 'quest'; this._render(); };
        return;
      }
      const q = queue[idx];
      this._renderQuest(root, q, queue.length, idx, stat, queue, mode);
    },

    _renderQuest(root, q, total, idx, stat, queue, mode = {}) {
      const diffMap = { easy:'小妖', normal:'妖兽', hard:'大妖', boss:'妖王' };
      const diffIcon = { easy:'👻', normal:'👹', hard:'😈', boss:'🐲' };
      const typeMap = { single:'单选', multi:'多选', judge:'判断', fill:'填空' };
      // v4.0: 妖兽像素图使用**小尺寸**（挂件式），不再占据大量垂直空间
      // easy/normal:3px  hard:4px  boss:5px（原来是 5/6/7）
      const smallScale = q.difficulty === 'boss' ? 5 : q.difficulty === 'hard' ? 4 : 3;
      const monsterPixelSvg = (typeof PixelArt !== 'undefined')
        ? PixelArt.monster(q.difficulty || 'normal', this.sect, smallScale)
        : '';
      const monsterVisual = monsterPixelSvg
        ? `<div class="quest-monster-pixel qm-mini" data-diff="${q.difficulty||'normal'}">${monsterPixelSvg}</div>`
        : `<div class="quest-monster-icon qm-mini">${diffIcon[q.difficulty || 'normal']}</div>`;
      const beaten = Game.isQuestDefeated(this.sect, q.id);
      const isBoss = (q.difficulty || 'normal') === 'boss';
      const isHard = (q.difficulty || 'normal') === 'hard';

      // 选项 HTML（兼容 v3 字符串数组 & v4 对象数组）
      // v4.2.2 修复：
      //   ① 增加 calc（计算题/解答题）分支，避免219道计算题无答题区卡死
      //   ② single/judge 若 options 为空自动兜底为「对/错」或「查看答案」
      //   ③ 未知 type 兜底为 fill 输入框，绝不留空白
      const _opts = _normOpts(q.options, q.type);
      const qtype = q.type || 'single';
      let optHtml = '';
      let needManualSubmit = false;   // 是否需要显示【出招】按钮

      if (qtype === 'single' || qtype === 'judge') {
        if (_opts.length) {
          optHtml = `<div class="quest-options">` + _opts.map(o => `
            <div class="quest-opt" data-k="${o.k}">
              <span class="opt-label">${o.k}.</span>
              <span>${o.v}</span>
            </div>
          `).join('') + `</div>`;
        } else {
          // 兜底：single/judge 但没 options → 变成填空
          optHtml = `<input type="text" class="quest-fill-input" placeholder="请输入答案" id="fillInput" autocomplete="off"/>`;
          q._fallbackToFill = true;
          needManualSubmit = true;
        }
      } else if (qtype === 'multi') {
        if (_opts.length) {
          optHtml = `<div class="quest-options">` + _opts.map(o => `
            <div class="quest-opt multi" data-k="${o.k}">
              <span class="opt-label">${o.k}.</span>
              <span>${o.v}</span>
            </div>
          `).join('') + `</div><div class="xx-tip">📌 多选题：点选多个选项后按 <b style="color:#f5c97a;">「出招」</b> 提交。</div>`;
        } else {
          optHtml = `<input type="text" class="quest-fill-input" placeholder="请输入答案（多个用 / 分隔）" id="fillInput" autocomplete="off"/>`;
          q._fallbackToFill = true;
        }
        needManualSubmit = true;
      } else if (qtype === 'fill') {
        optHtml = `<input type="text" class="quest-fill-input" placeholder="请输入答案（多空用 / 分隔）" id="fillInput" autocomplete="off"/>`;
        needManualSubmit = true;
      } else if (qtype === 'calc' || qtype === 'solve' || qtype === 'essay') {
        // v4.2.2 新增：计算题/解答题
        optHtml = `
          <div class="xx-tip" style="margin-bottom:8px;background:linear-gradient(90deg,rgba(245,201,122,.15),transparent);border-left:3px solid #f5c97a;padding:8px 12px;border-radius:6px;color:#f5c97a;font-size:13px;">
            📐 <b>${qtype === 'essay' ? '论述题' : '计算题/解答题'}</b>：可在下方写出思路和答案（自评模式），完成后点击「查看参考解」比对，然后自选正确/错误入账。
          </div>
          <textarea class="quest-calc-input" id="calcInput" placeholder="在此写出解题过程和最终答案..." autocomplete="off"></textarea>
          <div class="quest-calc-actions">
            <button class="xx-btn" id="showRefBtn">📖 查看参考解</button>
            <span id="refHint" style="color:var(--xx-text-dim);font-size:12px;align-self:center;"></span>
          </div>
          <div id="refArea" style="display:none;margin-top:12px;padding:14px;border:1px dashed rgba(245,201,122,.55);border-radius:10px;background:rgba(245,201,122,.06);">
            <div style="color:#f5c97a;font-weight:700;margin-bottom:8px;letter-spacing:2px;">📜 参考答案</div>
            <div style="color:#f0e6d2;line-height:2;white-space:pre-wrap;">${_esc(String(q.answer || '（暂无标准答案）'))}</div>
            ${q.explain ? `<div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(245,201,122,.2);color:var(--xx-cyan);line-height:1.9;"><b>💡 解析：</b>${q.explain}</div>` : ''}
            <div style="margin-top:12px;display:flex;gap:8px;">
              <button class="xx-btn xx-btn-primary" id="selfRightBtn">✅ 我答对了</button>
              <button class="xx-btn xx-btn-danger" id="selfWrongBtn">❌ 我答错了</button>
            </div>
          </div>
        `;
        q._isCalcType = true;
      } else {
        // 未知类型兜底 → fill
        optHtml = `<input type="text" class="quest-fill-input" placeholder="请输入答案（此题类型未识别，已按填空处理）" id="fillInput" autocomplete="off"/>`;
        q._fallbackToFill = true;
        needManualSubmit = true;
      }

      // v4.0: 可视化图 - 默认折叠，避免挤走题目；用户点"查看参考图"才展开
      let vizHtml = '';
      let hasViz = false;
      if (typeof AutoViz !== 'undefined') {
        const rawViz = AutoViz.forQuestion(q);
        if (rawViz && rawViz.trim()) {
          hasViz = true;
          vizHtml = `
            <details class="viz-details" id="vizDetails">
              <summary class="viz-summary">🔍 参考图示 <span class="viz-hint">（点击展开/收起 · 不看也能答题）</span></summary>
              <div class="viz-details-body">${rawViz}</div>
            </details>`;
        }
      }

      const modeLabel = mode.isTrial ? ` · 首次试炼(${idx+1}/${total})`
                     : mode.isRefine ? ' · 精进重温'
                     : ` · 第 ${idx+1}/${total} 战`;

      // v4.0 新结构：
      //   ┌────────────────────────────────────┐
      //   │  🐲 小妖挂件 [名字·HP]      ← 顶部 mini 条  │
      //   │  ────────                        │
      //   │  📜 题目                     ← 立刻可见
      //   │  A/B/C/D 选项                    │
      //   │  ⚔ 出招按钮                     │
      //   │  🔍 参考图（折叠，可选展开）        │
      //   │  💡 解析                          │
      //   └────────────────────────────────────┘
      root.innerHTML = `
        <div class="quest-stage ${isBoss?'boss-stage':''} quest-stage-v6">
          <div class="quest-monster-mini">
            ${monsterVisual}
            <div class="qm-mini-info">
              <div class="qm-mini-name">${q.monster || diffMap[q.difficulty || 'normal']}</div>
              <div class="qm-mini-tier">
                ${isBoss?'⚠ BOSS · ':''}${isHard?'⚡ 大妖 · ':''}${typeMap[q.type] || q.type}${modeLabel} · ${beaten?'(曾击败)':'(新妖)'}
              </div>
              <div class="monster-hp-bar"><div class="monster-hp-fill" id="hpBar"></div></div>
            </div>
          </div>

          <div class="quest-q quest-q-v6">
            <span class="q-tag">${typeMap[q.type] || ''}</span>
            ${q.q}
          </div>
          ${optHtml}
          <div class="quest-actions">
            ${(needManualSubmit && !q._isCalcType)
              ? `<button class="xx-btn xx-btn-primary" id="submitBtn">⚔ 出招 (提交)</button>`
              : ''}
            ${ mode.isRefine || mode.isTrial ? '' : `<button class="xx-btn" id="skipBtn">⏭ 跳过</button>`}
          </div>
          ${vizHtml}
          <div id="explainArea"></div>
        </div>
      `;

      // 自动滚到题目顶部（若嵌入在modal或滚动容器里）
      setTimeout(() => {
        const qEl = root.querySelector('.quest-q-v6');
        if (qEl && qEl.scrollIntoView) {
          try { qEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch(e){}
        }
      }, 60);

      let selected = null;
      const multiPicks = new Set();
      const opts = root.querySelectorAll('.quest-opt');

      opts.forEach(el => {
        el.onclick = () => {
          if (el.classList.contains('disabled')) return;
          if (q.type === 'multi') {
            const k = el.dataset.k;
            if (multiPicks.has(k)) { multiPicks.delete(k); el.classList.remove('selected'); }
            else                   { multiPicks.add(k);    el.classList.add('selected');    }
          } else {
            selected = el.dataset.k;
            opts.forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');
            setTimeout(() => doSubmit(), 150);
          }
        };
      });

      const submitBtn = root.querySelector('#submitBtn');
      if (submitBtn) submitBtn.onclick = () => doSubmit();
      const skipBtn = root.querySelector('#skipBtn');
      if (skipBtn) skipBtn.onclick = () => this._battleStep(queue, idx + 1, stat, mode);

      // v4.2.2 新增：计算题自评流程
      if (q._isCalcType) {
        const showRefBtn = root.querySelector('#showRefBtn');
        const refArea    = root.querySelector('#refArea');
        const refHint    = root.querySelector('#refHint');
        const selfRight  = root.querySelector('#selfRightBtn');
        const selfWrong  = root.querySelector('#selfWrongBtn');
        if (showRefBtn) showRefBtn.onclick = () => {
          if (refArea) refArea.style.display = 'block';
          if (refHint) refHint.textContent = '↓ 已展开参考解';
          showRefBtn.disabled = true;
          showRefBtn.style.opacity = '0.5';
        };
        const finishCalc = (isCorrect) => {
          const r = (mode.isRefine)
            ? { expGain: 0, shiGain: 0, daoxinGain: 0, streak: Game.state.char.streak }
            : Game.submitAnswer(this.sect, q.id, isCorrect, q.difficulty || 'normal');
          if (isCorrect) UI.toast(`⚔ 自评正确！+${_sfmt(r.expGain||0)} 修为 +${_sfmt(r.shiGain||0)} 灵石`,'success');
          else UI.toast('💔 自评错误，此题记入心魔录','error');
          if (isCorrect) stat.right++; else stat.wrong++;
          // v4.2.3 修复：calc 自评后也展示自己答案 vs 参考对比 + 手动下一战
          const userTxt = (root.querySelector('#calcInput')?.value || '(未填写)').replace(/</g,'&lt;');
          const refTxt  = String(q.answer || '(无参考答案)').replace(/</g,'&lt;');
          root.querySelector('#explainArea').innerHTML = `
            <div class="quest-explain">
              <b>${isCorrect ? '⚔ 自评正确！' : '💔 自评错误，已入心魔录'}</b><br>
              <div style="margin-top:10px;">
                <div style="color:${isCorrect?'#8ce28c':'#ff9797'};font-size:13px;margin-bottom:6px;">📝 你的解答：</div>
                <div style="padding:8px 12px;background:rgba(20,24,40,.55);border-radius:6px;color:#f0e6d2;white-space:pre-wrap;line-height:1.85;font-size:14px;">${userTxt}</div>
              </div>
              <div style="margin-top:10px;">
                <div style="color:#f5c97a;font-size:13px;margin-bottom:6px;">📜 参考答案：</div>
                <div style="padding:8px 12px;background:rgba(245,201,122,.08);border-radius:6px;color:#f0e6d2;white-space:pre-wrap;line-height:1.85;font-size:14px;">${refTxt}</div>
              </div>
              ${q.explain ? `<div style="margin-top:10px;padding-top:8px;border-top:1px dashed rgba(245,201,122,.25);color:#c9d9e8;line-height:1.85;"><b style="color:#f5c97a;">📖 解析：</b>${q.explain}</div>` : ''}
            </div>
            ${(isCorrect && !mode.isRefine) ? `<div class="xx-tip" style="background:rgba(140,226,140,0.12);border-color:var(--xx-green);">+${_sfmt(r.expGain)} 修为 +${_sfmt(r.shiGain)} 灵石 +${_sfmt(r.daoxinGain)} 道心 · 连击 ${r.streak} 🔥</div>` : ''}
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:10px;flex-wrap:wrap;">
              <span style="color:var(--xx-text-dim);font-size:12px;">⏳ 对比解答后点击「下一战」</span>
              <button class="xx-btn xx-btn-primary" id="nextQ">${idx+1>=queue.length ? '✓ 完成本轮' : '下一战 ▶'}</button>
            </div>
          `;
          const nx = root.querySelector('#nextQ');
          if (nx) nx.onclick = () => this._battleStep(queue, idx + 1, stat, mode);
        };
        if (selfRight) selfRight.onclick = () => finishCalc(true);
        if (selfWrong) selfWrong.onclick = () => finishCalc(false);
        return; // calc 类型不走后续常规 doSubmit
      }

      const doSubmit = () => {
        // v4.2.2 修复：统一从 DOM 取值，避免 fallback 类型取不到值
        let userAns;
        const _qt = q.type || 'single';
        const _fillEl = root.querySelector('#fillInput');
        if (_qt === 'multi' && !q._fallbackToFill) {
          userAns = Array.from(multiPicks);
        } else if (_qt === 'fill' || q._fallbackToFill) {
          userAns = _fillEl ? _fillEl.value : '';
        } else if ((_qt === 'single' || _qt === 'judge')) {
          userAns = selected;
        } else {
          userAns = _fillEl ? _fillEl.value : selected;
        }

        // 空值检查
        const isEmpty =
          (Array.isArray(userAns) && userAns.length === 0) ||
          (typeof userAns === 'string' && !userAns.trim()) ||
          userAns === null || userAns === undefined;
        if (isEmpty) {
          UI.toast('请先作答', 'error', 1500);
          if (_fillEl) _fillEl.focus();
          return;
        }

        const isCorrect = Game.judgeAnswer(q, userAns);
        // 精进模式：不计入常规奖励，走 Game.doRefine
        // 试炼模式：正常记分，但走 mode.onDone 汇总
        const r = (mode.isRefine)
          ? { expGain: 0, shiGain: 0, daoxinGain: 0, streak: Game.state.char.streak }
          : Game.submitAnswer(this.sect, q.id, isCorrect, q.difficulty || 'normal');

        opts.forEach(el => {
          el.classList.add('disabled');
          const k = el.dataset.k;
          const ansArr = Array.isArray(q.answer) ? q.answer : [q.answer];
          if (ansArr.includes(k)) el.classList.add('correct');
          if (el.classList.contains('selected') && !ansArr.includes(k)) el.classList.add('wrong');
        });
        if (submitBtn) submitBtn.style.display = 'none';

        const hp = root.querySelector('#hpBar');
        if (hp) hp.style.width = isCorrect ? '0%' : '70%';

        if (isCorrect && isBoss) {
          // Boss 爆炸粒子 + 屏幕震动
          const monEl = root.querySelector('.quest-monster-pixel') || root.querySelector('.quest-monster-icon');
          UI.explodeAt(monEl);
          UI.screenShake();
          if (monEl) monEl.classList.add('monster-slain');
        } else if (isCorrect && isHard) {
          // 大妖：小型爆炸
          const monEl = root.querySelector('.quest-monster-pixel') || root.querySelector('.quest-monster-icon');
          UI.explodeAt(monEl);
          if (monEl) monEl.classList.add('monster-slain');
        } else if (isCorrect) {
          // 普通妖兽：击中十字光
          const monEl = root.querySelector('.quest-monster-pixel') || root.querySelector('.quest-monster-icon');
          UI.hitCross(monEl);
          if (monEl) monEl.classList.add('monster-slain');
        }

        // 解析区
        const rewardBox = mode.isRefine ? '' : (isCorrect
          ? `<div class="xx-tip" style="background:rgba(140,226,140,0.12);border-color:var(--xx-green);">
              +${_sfmt(r.expGain)} 修为 +${_sfmt(r.shiGain)} 灵石 +${_sfmt(r.daoxinGain)} 道心 · 连击 ${r.streak} 🔥
            </div>`
          : `<div class="xx-tip" style="background:rgba(226,91,91,0.12);border-color:var(--xx-red);">
              心魔生于一念之间——此题已加入「心魔录」，请来日重战。
            </div>`);

        const bossReward = (isCorrect && isBoss)
          ? `<div class="boss-reward-box">
              <div class="rt">⚔ 妖王已伏诛 ⚔</div>
              <div style="margin-top:12px;font-size:16px;">
                <b style="color:var(--xx-gold);">+${_sfmt(r.expGain)} 修为</b> ·
                <b style="color:var(--xx-cyan);">+${_sfmt(r.shiGain)} 灵石</b>
              </div>
            </div>` : '';

        // v4.2.3 修复：强制展示解析（用户反馈"打怪只给对错不给解析然后跳过"）
        // ① 如果题目没写 explain，用答案自动生成"参考解"
        // ② 解析区必须显示，包含：对错/参考答案/解析/用户答案对比
        const userAnsDisplay = Array.isArray(userAns) ? userAns.join('') : (userAns || '(未作答)');
        const correctAnsDisplay = Array.isArray(q.answer) ? q.answer.join('') : q.answer;
        const autoExplain = q.explain
          ? q.explain
          : `此题为「${typeMap[q.type] || q.type || '题'}」，正确答案是 <b style="color:#f5c97a;">${correctAnsDisplay}</b>。` +
            (isCorrect ? '' : '<br>请仔细比对你的答案与参考答案的差异，思考知识点：' +
              (q.tag || q.chapter || '本题所属功法核心考点') + '。');
        const explainClass = q.explain ? 'quest-explain' : 'quest-explain quest-explain-auto';
        root.querySelector('#explainArea').innerHTML = `
          <div class="${explainClass}">
            <b>${isCorrect ? '⚔ 妖兽已斩！' : '😱 你被妖兽反伤！'}</b><br>
            <div style="margin-top:8px;font-size:13px;color:rgba(240,230,210,.75);">
              你的答案：<span style="color:${isCorrect?'#8ce28c':'#ff9797'};font-weight:700;">${_esc(String(userAnsDisplay))}</span>
              &nbsp;·&nbsp;
              <span class="ans">参考：${_esc(String(correctAnsDisplay))}</span>
            </div>
            <div style="margin-top:10px;padding-top:8px;border-top:1px dashed rgba(245,201,122,.25);color:#c9d9e8;line-height:1.85;">
              <b style="color:#f5c97a;">📖 解析：</b>${autoExplain}
            </div>
          </div>
          ${bossReward}
          ${rewardBox}
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:10px;flex-wrap:wrap;">
            <span style="color:var(--xx-text-dim);font-size:12px;">⏳ 请仔细阅读解析后点击「下一战」</span>
            <button class="xx-btn xx-btn-primary" id="nextQ">${idx+1>=queue.length ? '✓ 完成本轮' : '下一战 ▶'}</button>
          </div>
        `;
        UI.refreshTopbar({ backHref: '../index.html' });
        if (isCorrect) stat.right++; else stat.wrong++;
        root.querySelector('#nextQ').onclick = () => {
          this._battleStep(queue, idx + 1, stat, mode);
        };
      };
    },

    // ==============================================================
    // 八、心魔录（本宗）
    // ==============================================================
    _renderDemons() {
      const all = Game.heartDemons().filter(d => d.sect === this.sect);
      if (!all.length) return `<div class="xx-empty">心境澄澈，此宗无心魔</div>`;
      let html = `<div class="xx-tip">😈 心魔不会立刻再战。每道错题需沉淀 <b style="color:#f5c97a;">24 小时</b> 后，方可再次挑战，避免死记答案。</div>`;
      html += '<div class="heart-demon-list">';
      all.forEach(d => {
        const q = this.bank.find(x => x.id === d.qid);
        const desc = q ? (q.q.length > 65 ? q.q.slice(0, 65) + '…' : q.q) : '(题目缺失)';
        const ready = Game.canChallengeHeartDemon ? Game.canChallengeHeartDemon(d) : true;
        const remain = Game.getHeartDemonCooldownRemaining ? Game.getHeartDemonCooldownRemaining(d) : 0;
        const hh = Math.floor(remain / 3600000), mm = Math.ceil((remain % 3600000) / 60000);
        const cdText = ready ? '✅ 可重战' : `⏳ 冷却中：${hh}时${mm}分`;
        html += `
          <div class="heart-demon-item ${ready?'ready':'locked'}" data-qid="${d.qid}" data-ready="${ready?1:0}" style="opacity:${ready?1:0.62};">
            ${desc}
            <div style="font-size:11px;color:var(--xx-text-dim);margin-top:4px;">
              失手 ${d.wrongCount} 次 · 最近 ${new Date(d.lastWrongAt).toLocaleString('zh-CN')} · ${cdText}
            </div>
          </div>`;
      });
      html += '</div>';
      return html;
    },
    _bindDemons() {
      document.querySelectorAll('.heart-demon-item[data-qid]').forEach(it => {
        it.onclick = () => {
          const qid = it.dataset.qid;
          const q = this.bank.find(x => x.id === qid);
          if (!q) return;
          const demon = Game.heartDemons().find(x => x.sect === this.sect && x.qid === qid);
          if (demon && Game.canChallengeHeartDemon && !Game.canChallengeHeartDemon(demon)) {
            UI.toast('此心魔仍在冷却，明日再战', 'warn');
            return;
          }
          this._battleStep([q], 0, { right:0, wrong:0 }, {});
        };
      });
    },

    // ==============================================================
    // 九、闯关塔
    // ==============================================================
    _renderTower() {
      const st = Game.state.sects[this.sect];
      const layers = [
        { layer:1, name:'一层·气感', need:3,  count:5,  reward:{exp:80,  shi:60},  diff:['easy','normal'] },
        { layer:2, name:'二层·灵脉', need:6,  count:5,  reward:{exp:150, shi:120}, diff:['easy','normal'] },
        { layer:3, name:'三层·筑基', need:10, count:8,  reward:{exp:280, shi:240}, diff:['normal','hard'] },
        { layer:4, name:'四层·金丹', need:16, count:10, reward:{exp:500, shi:440}, diff:['normal','hard'] },
        { layer:5, name:'五层·元婴', need:24, count:12, reward:{exp:800, shi:720}, diff:['hard','boss'] },
        { layer:6, name:'六层·化神', need:36, count:15, reward:{exp:1400,shi:1200},diff:['hard','boss'] },
        { layer:7, name:'七层·宗门大比(渡劫)', need:50, count:20, reward:{exp:2400,shi:2000}, diff:['hard','boss'] },
      ];
      const beaten = st.defeatedQuests.length;
      let html = `<div class="xx-tip">🏯 闯关塔奖励现在会随 <b style="color:#f5c97a;">境界 × 层数</b> 动态放大，越往后收益越高；通关线仍为 60%。</div>`;
      layers.forEach(L => {
        const unlocked = beaten >= L.need;
        const cleared = Game.hasFlag(`tower_${this.sect}_${L.layer}_cleared`);
        const rw = Game.getScaledTowerReward ? Game.getScaledTowerReward(L) : L.reward;
        html += `
          <div class="xx-card" style="margin-bottom:12px;${unlocked?'':'opacity:0.5;'}">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div style="font-family:var(--xx-font-art);font-size:17px;color:var(--xx-gold);letter-spacing:1px;">${unlocked?'':'🔒 '}🏯 ${L.name}</div>
                <div style="font-size:12px;color:var(--xx-text-dim);margin-top:4px;">解锁条件：斩妖 ${L.need}（当前 ${beaten}） · ${L.count} 战 · 通关 +${_sfmt(rw.exp)} 修为 +${_sfmt(rw.shi)} 灵石</div>
              </div>
              <div>
                ${ cleared ? '<span style="color:var(--xx-green);font-size:13px;">✓ 已通关</span>' : (unlocked ? `<button class="xx-btn xx-btn-primary xx-btn-sm" data-layer="${L.layer}">挑战 ▶</button>` : '<span style="color:var(--xx-text-dim);font-size:12px;">未解锁</span>')}
              </div>
            </div>
          </div>`;
      });
      this._towerLayers = layers;
      return html;
    },
    _bindTower() {
      document.querySelectorAll('[data-layer]').forEach(b => {
        b.onclick = () => {
          const L = this._towerLayers.find(x => x.layer === parseInt(b.dataset.layer));
          this._startTowerLayer(L);
        };
      });
    },
    _startTowerLayer(L) {
      const pool = this.bank.slice();
      const prefer = pool.filter(q => L.diff.includes(q.difficulty || 'normal'));
      const fallback = pool.filter(q => !L.diff.includes(q.difficulty || 'normal'));
      const queue = (prefer.length >= L.count ? prefer : prefer.concat(fallback))
                    .sort(() => Math.random() - 0.5).slice(0, L.count);
      if (!queue.length) { UI.toast('题库不足，无法挑战', 'error'); return; }
      this._battleStep(queue, 0, { right:0, wrong:0 }, {
        isTower: true, layer: L,
        onDone: (stat) => this._towerFinish(stat, queue.length, L),
      });
    },
    _towerFinish(stat, total, L) {
      const rate = stat.right / total;
      const pass = rate >= 0.6;
      const rw = Game.getScaledTowerReward ? Game.getScaledTowerReward(L) : L.reward;
      if (pass && !Game.hasFlag(`tower_${this.sect}_${L.layer}_cleared`)) {
        Game.setFlag(`tower_${this.sect}_${L.layer}_cleared`);
        Game.addExp(rw.exp);
        Game.addLingshi(rw.shi);
      }
      const root = document.getElementById('tab-body');
      root.innerHTML = `
        <div class="xx-immortal-box" style="text-align:center;padding:40px 20px;">
          <div class="corner-tr"></div><div class="corner-bl"></div>
          <div style="font-family:var(--xx-font-art);font-size:30px;color:${pass?'var(--xx-gold)':'var(--xx-red)'};letter-spacing:6px;">${pass ? `🏯 ${L.name} · 通关！` : `💔 ${L.name} · 闯关失败`}</div>
          <div style="margin-top:14px;color:var(--xx-text-soft);">${stat.right} / ${total} 战胜（正确率 ${(rate*100).toFixed(0)}%）${pass ? `<br>+${_sfmt(rw.exp)} 修为 +${_sfmt(rw.shi)} 灵石` : '<br>需达到 60% 正确率方可通关'}</div>
          <div style="margin-top:24px;"><button class="xx-btn" id="towerBack">返回闯关塔</button></div>
        </div>`;
      UI.refreshTopbar({ backHref: '../index.html' });
      document.querySelector('#towerBack').onclick = () => { this.currentTab = 'tower'; this._render(); };
    },

    // ==============================================================
    // 十、hash 跳转支持
    // ==============================================================
    _handleHash() {
      const h = location.hash;
      if (h.startsWith('#q=')) {
        const qid = decodeURIComponent(h.slice(3));
        const q = this.bank.find(x => x.id === qid);
        if (q) {
          this.currentTab = 'demon';
          this._render();
          setTimeout(() => {
            this._battleStep([q], 0, {right:0,wrong:0}, {});
          }, 200);
          history.replaceState(null, '', location.pathname);
        }
      }
    },
  };

  // 将 v3 的 ["A. xxx"] 或 v4 的 [{k,v}] 统一为 [{k,v}]
  function _normOpts(options, type) {
    // 判断题官方默认选项：k='对'/'错' —— 与 v3 answer:'对'/'错' 对齐
    if (type === 'judge') {
      // v3 无 options，无需解析；直接给两个固定选项
      if (!options || !options.length) return [{k:'对',v:'○ 正确'},{k:'错',v:'✕ 错误'}];
    }
    if (!options || !options.length) return [];
    return options.map((o, i) => {
      if (typeof o === 'string') {
        const m = o.match(/^\s*([A-Z对错])\s*[\.\uff0e:\uff1a\)\uff09]?\s*(.+)$/);
        if (m) return { k: m[1], v: m[2] };
        return { k: String.fromCharCode(65 + i), v: o };
      }
      return o;
    });
  }

  // 兼容多种公式/心得字段
  function _joinFormula(m) {
    if (m.formula) return m.formula;
    if (Array.isArray(m.formulas) && m.formulas.length) {
      return m.formulas.map(f => `<code>${_esc(f)}</code>`).join('<br>');
    }
    return '';
  }
  function _joinTips(m) {
    if (m.tips) return m.tips;
    if (Array.isArray(m.keyPoints) && m.keyPoints.length) {
      return '<ul style="margin:6px 0 0 0;padding-left:20px;line-height:1.9;">' +
             m.keyPoints.map(k => `<li>${k}</li>`).join('') + '</ul>';
    }
    return '';
  }
  function _esc(s) { return String(s).replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function _fmtDuration(ms) {
    if (ms <= 0) return '就绪';
    const s = Math.ceil(ms / 1000);
    const mm = Math.floor(s / 60);
    const ss = s % 60;
    if (mm > 0) return `${mm}分${ss}秒`;
    return `${ss}秒`;
  }

  // 首次参悟成功 CG（金光灵光云）
  function _masteryCG(sect) {
    const bldSvg = (typeof PixelArt !== 'undefined') ? PixelArt.building(sect) : '';
    return `
      <div class="cg-frame cg-mastery" style="background:radial-gradient(circle at 50% 50%, rgba(245,201,122,0.4), rgba(20,18,42,0.6));">
        <div class="cg-sweep"></div>
        <div class="cg-light-rays">
          ${[0,45,90,135].map(a=>`<div class="cg-ray" style="transform:rotate(${a}deg);"></div>`).join('')}
        </div>
        <div class="cg-content">
          ${bldSvg ? `<div class="cg-pixel-wrap glow">${bldSvg}</div>` : '<div class="cg-emoji">✨</div>'}
          <div style="font-size:14px;margin-top:8px;color:var(--xx-gold);font-family:var(--xx-font-art);letter-spacing:3px;">金光大放，天道之力灌入识海……</div>
        </div>
      </div>
    `;
  }

  // 精进圆满 CG（根据精进次数颜色渐变）
  function _refineCG(sect, times, title) {
    const bldSvg = (typeof PixelArt !== 'undefined') ? PixelArt.building(sect) : '';
    const glowLvl = Math.min(4, Math.floor(times / 5));  // 0..4
    const glowColors = ['#6ed5e0','#8ce28c','#f5c97a','#ff9ec6','#b288ff'];
    return `
      <div class="cg-frame" style="background:radial-gradient(circle at 50% 50%, ${glowColors[glowLvl]}33, rgba(20,18,42,0.5));">
        <div class="cg-sweep"></div>
        <div class="cg-content">
          ${bldSvg ? `<div class="cg-pixel-wrap glow" style="filter:drop-shadow(0 0 ${8+glowLvl*4}px ${glowColors[glowLvl]});">${bldSvg}</div>` : '<div class="cg-emoji">🌟</div>'}
          <div style="font-size:13px;margin-top:8px;color:${glowColors[glowLvl]};font-family:var(--xx-font-art);letter-spacing:2px;">
            温故而知新，你对《${title}》的理解又深了一层
          </div>
        </div>
      </div>
    `;
  }

  // ============================================================
  // 🔥 斩妖场（v4.0 补齐 v3 全屏战斗）
  // 从已参悟功法题库中抽题 → 调用 UI.openBattle 进入 HP/MP/技能战斗
  // ============================================================
  SubjectPage._renderArena = function() {
    const st = Game.state.sects[this.sect];
    const mastered = (st && st.masteredManuals) || [];
    if (!mastered.length) {
      return `<div class="xx-empty" style="padding:34px;line-height:2;">
        🔥 <b style="color:var(--xx-red);">斩妖场</b> —— 全屏战斗模式<br>
        <span style="font-size:12px;color:var(--xx-text-dim);">妖兽有 HP，你有 HP/MP，可施展 ⚡天雷诀 / 🔥火球术 / 💚小循环 / ⚔平取</span><br><br>
        <span style="font-size:13px;color:var(--xx-text-soft);">请先到「功法秘籍」参悟任一篇功法，方可开启斩妖场。</span>
      </div>`;
    }
    const c = Game.state.char;
    // 敌人类型（据难度选一）
    // v4.0: 妖兽池带 sect 与 diff（PixelArt 像素妖兽 + 宗门重着色）
    const pickName = (d) => {
      if (typeof PixelArt !== 'undefined' && PixelArt.monsterName) {
        try { return PixelArt.monsterName(d, this.sect); } catch(e){}
      }
      return {easy:'凡阶妖', normal:'妖修', hard:'妖将', boss:'妖王'}[d] || '妖';
    };
    // v4.1-fix: 敌人属性用 Game.scaleMonster 动态缩放到玩家境界
    const rawPool = [
      { name:pickName('easy'),   diff:'easy',   sect:this.sect, hp:80,  atk:8,  qDiffs:['easy','normal'], count:3 },
      { name:pickName('easy'),   diff:'easy',   sect:this.sect, hp:110, atk:10, qDiffs:['easy','normal'], count:4 },
      { name:pickName('normal'), diff:'normal', sect:this.sect, hp:150, atk:14, qDiffs:['normal','hard'], count:4 },
      { name:pickName('normal'), diff:'normal', sect:this.sect, hp:190, atk:18, qDiffs:['normal','hard'], count:5 },
      { name:pickName('hard'),   diff:'hard',   sect:this.sect, hp:240, atk:22, qDiffs:['hard','boss'],   count:5 },
      { name:pickName('boss'),   diff:'boss',   sect:this.sect, hp:360, atk:28, qDiffs:['hard','boss'],   count:6 },
    ];
    const enemyPool = rawPool.map(e => Game.scaleMonster ? Game.scaleMonster(e) : e);
    let html = `
      <div class="xx-tip">🔥 <b>斩妖场</b>：全屏战斗！答题打伤妖兽，答错妖兽反击。可施展技能，可用丹药，可召唤灵宠。<br>
        <span style="font-size:12px;">你的状态：❤ ${c.hp}/${c.maxHp} · 🔵 MP ${c.mp}/${c.maxMp} · 攻击 ${c.atk||10}</span>
      </div>
      <div class="arena-grid">
    `;
    enemyPool.forEach((e, i) => {
      const cls = e.diff === 'boss' ? 'arena-boss' : (e.diff === 'hard' ? 'arena-hard' : 'arena-normal');
      const diffLabel = {easy:'凡阶',normal:'中阶',hard:'精英',boss:'妖王'}[e.diff] || '妖';
      const diffColor = {easy:'#8ce28c', normal:'#6ed5e0', hard:'#b288ff', boss:'#e25b5b'}[e.diff];
      let monsterVisual = '';
      if (typeof PixelArt !== 'undefined' && PixelArt.monster) {
        try { monsterVisual = PixelArt.monster(e.diff, this.sect, 3); } catch(err){}
      }
      if (!monsterVisual) monsterVisual = `<div style="font-size:52px;">👿</div>`;
      const titleTags = (e.titles || []).map(t => `<span class="v43-enemy-title ${t.cls}">${t.text}</span>`).join('');
      html += `
        <div class="arena-card ${cls}" data-arena="${i}" style="border-color:${diffColor};">
          <div class="arena-emoji" style="height:80px;display:flex;align-items:center;justify-content:center;">${monsterVisual}</div>
          <div class="arena-name" style="color:${diffColor};font-family:var(--xx-font-art);">${e.name}</div>
          ${titleTags ? `<div class="v43-enemy-titles">${titleTags}</div>` : ''}
          <div class="arena-stat">❤ ${_sfmt(e.hp)} · ⚔ ${_sfmt(e.atk)} · <b style="color:${diffColor};">${e.count}道题</b></div>
          <div class="arena-diff" style="color:${diffColor};">◈ ${diffLabel} ◈</div>
          <button class="xx-btn xx-btn-sm xx-btn-primary" style="margin-top:8px;">⚔ 挑战</button>
        </div>
      `;
    });
    html += '</div>';
    this._arenaEnemyPool = enemyPool;
    return html;
  };
  SubjectPage._bindArena = function() {
    const cards = document.querySelectorAll('[data-arena]');
    cards.forEach(card => {
      card.onclick = () => {
        const i = parseInt(card.dataset.arena);
        const e = this._arenaEnemyPool[i];
        this._launchArena(e);
      };
    });
  };
  SubjectPage._launchArena = function(enemyDef) {
    // v4.0: 多题连斩，逐道抽取
    const st = Game.state.sects[this.sect];
    const mastered = st.masteredManuals || [];
    const pool = this.bank.filter(q =>
      mastered.includes(q.manualId) && enemyDef.qDiffs.includes(q.difficulty || 'normal')
    );
    const fallback = this.bank.filter(q => mastered.includes(q.manualId));
    const chosen = (pool.length ? pool : fallback).slice().sort(() => Math.random() - 0.5);
    if (!chosen.length) { UI.toast('暂无可用题目，请先参悟功法', 'error'); return; }

    let qIdx = 0;
    const enemy = Object.assign({}, enemyDef, { maxHp: enemyDef.hp });
    enemy.sect = enemyDef.sect || this.sect;

    UI.openBattle({
      enemy,
      getQuestion: () => {
        if (qIdx >= chosen.length) qIdx = 0;
        return chosen[qIdx++];
      },
      onWin: () => {
        // v4.0 FIX: 奖励公式：难度 × 境界指数乘子 × 随机
        const base = Game.getArenaVictoryReward ? Game.getArenaVictoryReward(enemyDef.diff) : { exp:120, shi:60 };
        const baseExp = base.exp;
        const baseShi = base.shi;
        const rand = () => (Math.random() * 0.4 + 0.8);
        const gainExp = Math.round(baseExp * rand());
        const gainShi = Math.round(baseShi * rand());
        Game.addExp(gainExp);
        Game.addLingshi(gainShi);
        Game.battleWin && Game.battleWin({ exp: gainExp, shi: gainShi });
        UI.toast(`⚔ 斩妖胜利！+${_sfmt(gainExp)} 修为 +${_sfmt(gainShi)} 灵石`, 'success');
      },
      onLose: () => { UI.toast('💔 战败退场，去洞府恢复吧', 'error'); },
      onClose: () => { if (this.currentTab === 'arena') this._render(); }
    });
  };

  global.SubjectPage = SubjectPage;

})(typeof window !== 'undefined' ? window : this);
