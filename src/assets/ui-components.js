/* ===================================================
 * 《问道修仙学院》UI 通用组件 v2.0
 * v1.0：顶部状态栏 / 弹窗 / Toast / 角色面板 / 境界突破
 * v2.0 新增：灵根抽取 / 法宝阁 / 洞府 / 秘境 / 每日任务 /
 *            战斗技能栏 / 答题特效 / 灵气粒子背景
 * =================================================== */

(function (global) {
  'use strict';

  const __ASSET_PREFIX = (typeof location !== 'undefined' && /\/subjects\//.test(location.pathname)) ? '../assets/img/' : 'assets/img/';
  const __EMOTES = {
    idle: __ASSET_PREFIX + 'emotes/smug.jpg',
    think: __ASSET_PREFIX + 'emotes/work.jpg',
    correct: __ASSET_PREFIX + 'emotes/thumbsup.jpg',
    wrong: __ASSET_PREFIX + 'emotes/angry.jpg',
    heal: __ASSET_PREFIX + 'emotes/tea.jpg',
    love: __ASSET_PREFIX + 'emotes/love.jpg',
    plead: __ASSET_PREFIX + 'emotes/plead.jpg',
    deadpan: __ASSET_PREFIX + 'emotes/deadpan.jpg',
    peek: __ASSET_PREFIX + 'emotes/peek.jpg'
  };

  const UI = {

    // ====== Toast 飘字 ======
    toast(text, type = 'info', dur = 2800) {
      let wrap = document.querySelector('.xx-toast-wrap');
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'xx-toast-wrap';
        document.body.appendChild(wrap);
      }
      const t = document.createElement('div');
      t.className = 'xx-toast ' + type;
      t.textContent = text;
      wrap.appendChild(t);
      setTimeout(() => { t.remove(); }, dur + 200);
    },

    // ====== 顶部状态栏（v3.0：增加 HP/MP + 灵根徽章） ======
    renderTopbar(opts = {}) {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const _fmt = (Game.formatBigNum) ? Game.formatBigNum.bind(Game) : (x=>String(x));
      const c = Game.state.char;
      const realm = Game.currentRealm();
      const backHref = opts.backHref || 'index.html';
      const inSubPage = !!opts.backHref;
      const root = Game.getSpiritRoot && Game.getSpiritRoot();
      const rootBadge = root ? `<span class="xx-stat root-badge">${root.icon} ${root.name}</span>` : '';
      // 境界tag着色（v4 每大境界有色）
      const realmColor = realm.color || '#f5c97a';
      const html = `
        <div class="xx-topbar">
          <div class="brand">
            <a href="${backHref}" style="color:inherit;text-decoration:none;">⚔ 问道修仙学院</a>
            <span class="v-tag">v4.0</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;">
            <span class="xx-stat xx-realm-tag" style="border-color:${realmColor};color:${realmColor};">${realm.name}</span>
            ${rootBadge}
            <span class="xx-stat" title="气血 ${c.hp}/${c.maxHp}"><span>❤️</span> <b>${_fmt(c.hp)}/${_fmt(c.maxHp)}</b></span>
            <span class="xx-stat" title="灵力 ${c.mp}/${c.maxMp}"><span>💫</span> <b>${_fmt(c.mp)}/${_fmt(c.maxMp)}</b></span>
            <span class="xx-stat" title="道心 ${c.daoxin}"><span>🧘</span> <b>${_fmt(c.daoxin)}</b></span>
            <span class="xx-stat" title="灵石 ${c.lingshi}"><span>💎</span> <b>${_fmt(c.lingshi)}</b></span>
            <span class="xx-stat" title="连击 ${c.streak}"><span>🔥</span> <b>${c.streak}</b></span>
            ${ inSubPage ? `<a href="${backHref}" class="xx-btn">⬅ 山门</a>` : ''}
          </div>
        </div>
      `;
      return html;
    },

    refreshTopbar(opts = {}) {
      const old = document.querySelector('.xx-topbar');
      if (!old) return;
      const tmp = document.createElement('div');
      tmp.innerHTML = this.renderTopbar(opts);
      old.replaceWith(tmp.firstElementChild);
    },

    // ====== 弹窗 ======
    modal(opts = {}) {
      const { title = '', body = '', actions = [], onClose, wide = false } = opts;
      const mask = document.createElement('div');
      mask.className = 'xx-modal-mask';

      const m = document.createElement('div');
      m.className = 'xx-modal' + (wide ? ' xx-modal-wide' : '');
      m.innerHTML = `
        <button class="xx-modal-close" aria-label="关闭">×</button>
        ${title ? `<h3 class="xx-modal-title">${title}</h3>` : ''}
        <div class="xx-modal-body">${body}</div>
        ${actions.length ? `<div class="quest-actions" style="margin-top:16px;justify-content:flex-end;"></div>` : ''}
      `;

      const close = () => {
        mask.remove();
        if (onClose) onClose();
      };

      m.querySelector('.xx-modal-close').onclick = close;
      mask.onclick = (e) => { if (e.target === mask) close(); };

      if (actions.length) {
        const aw = m.querySelector('.quest-actions');
        actions.forEach(a => {
          const b = document.createElement('button');
          b.className = 'xx-btn ' + (a.primary ? 'xx-btn-primary' : '');
          b.textContent = a.label;
          b.onclick = () => {
            if (a.onClick && a.onClick() === false) return; // 返回 false 阻止关闭
            close();
          };
          aw.appendChild(b);
        });
      }

      mask.appendChild(m);
      document.body.appendChild(mask);
      return { close, mask, m };
    },

    confirm(text, onYes) {
      return this.modal({
        title: '⚠ 确认',
        body: `<p>${text}</p>`,
        actions: [
          { label: '取消' },
          { label: '确定', primary: true, onClick: onYes }
        ],
      });
    },

    // ====== 境界突破特效 ======
    breakthrough(realm) {
      const mask = document.createElement('div');
      mask.className = 'breakthrough-mask';
      mask.innerHTML = `
        <div class="breakthrough-text">突 破</div>
        <div class="breakthrough-realm">${realm.name}</div>
        <div style="color:#f5c97a;margin-top:14px;font-size:14px;letter-spacing:2px;">${realm.sub}</div>
      `;
      document.body.appendChild(mask);
      setTimeout(() => mask.remove(), 2200);
      this.toast(`恭喜突破至「${realm.name}」`, 'success', 3500);
    },

    // ====== 角色面板（v3.0：2D 立绘 + HP/MP + 装备预览） ======
    renderCharPanel() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const _fmt = (Game.formatBigNum) ? Game.formatBigNum.bind(Game) : (x=>String(x));
      const c = Game.state.char;
      const realm = Game.currentRealm();
      const next = Game.nextRealm();
      const progress = Math.round(Game.realmProgress() * 100);
      const acc = (Game.accuracy() * 100).toFixed(1);
      const cult = Game.currentRealmCultivation ? Game.currentRealmCultivation() : { total:c.exp, current:c.exp, need:(next?next.need:c.exp), remaining:(next?next.need-c.exp:0) };
      const hpPct = Math.round((c.hp||0) / (c.maxHp||1) * 100);
      const mpPct = Math.round((c.mp||0) / (c.maxMp||1) * 100);
      const pet = c.pet;
      const petBadge = pet ? `<div style="margin-top:8px;font-size:12px;color:var(--xx-purple);">🐉 ${pet.emoji} ${pet.name} · Lv.${pet.level}</div>` : '';
      return `
        <div class="char-panel">
          <div class="char-avatar-box">
            <div class="char-portrait">
              <div class="char-portrait-body">
                <img src="${__ASSET_PREFIX}hero.jpg" alt="主角立绘" style="width:88px;height:88px;object-fit:cover;border-radius:50%;border:2px solid rgba(245,201,122,.55);box-shadow:0 0 18px rgba(110,213,224,.28);">
              </div>
            </div>
            <div class="char-name">${c.name}</div>
            <div style="color:var(--xx-text-dim);font-size:12px;margin-top:4px;">${c.title}</div>
            <div style="margin-top:12px;">
              <span class="xx-stat xx-realm-tag">${realm.name}</span>
            </div>
            <div style="font-size:12px;color:var(--xx-text-soft);margin-top:6px;">${realm.sub}</div>
            ${petBadge}
          </div>
          <div class="char-info-box">
            <div style="font-family:var(--xx-font-art);font-size:16px;color:var(--xx-gold);letter-spacing:2px;">⚡ 修为进度</div>
            <div class="cult-bar-wrap">
              <div class="cult-bar"><div class="cult-bar-fill" style="width:${progress}%"></div></div>
              <div class="cult-bar-label">
                <span>当前境界修为 ${_fmt(cult.current)} / ${_fmt(cult.need)}</span>
                <span>${next ? `距「${next.name}」${_fmt(cult.remaining)} 修为` : '已至飞升真仙'}</span>
              </div>
              <div style="margin-top:6px;font-size:12px;color:var(--xx-cyan);">总修为：${_fmt(cult.total)}</div>
            </div>
            <!-- v3：HP / MP 双条状态 -->
            <div class="cult-bar-wrap" style="margin-top:10px;">
              <div style="font-size:11px;color:var(--xx-text-dim);">❤ 气血  ${_fmt(c.hp)} / ${_fmt(c.maxHp)}</div>
              <div class="cult-bar" style="height:8px;"><div class="cult-bar-fill" style="width:${hpPct}%;background:var(--v3-hp);"></div></div>
            </div>
            <div class="cult-bar-wrap" style="margin-top:6px;">
              <div style="font-size:11px;color:var(--xx-text-dim);">💫 灵力  ${_fmt(c.mp)} / ${_fmt(c.maxMp)}</div>
              <div class="cult-bar" style="height:8px;"><div class="cult-bar-fill" style="width:${mpPct}%;background:var(--v3-mp);"></div></div>
            </div>

            <div class="stat-grid">
              <div class="stat-item cyan"><div class="lab">💎 灵石</div><div class="val" title="${c.lingshi}">${_fmt(c.lingshi)}</div></div>
              <div class="stat-item green"><div class="lab">🧘 道心</div><div class="val">${_fmt(c.daoxin)}</div></div>
              <div class="stat-item gold"><div class="lab">⚔ 攻击</div><div class="val">${_fmt(c.atk)}</div></div>
              <div class="stat-item purple"><div class="lab">🛡 防御</div><div class="val">${_fmt(c.def)}</div></div>
              <div class="stat-item purple"><div class="lab">🔥 最高连击</div><div class="val">${c.bestStreak}</div></div>
              <div class="stat-item"><div class="lab">📊 正确率</div><div class="val">${acc}%</div></div>
              <div class="stat-item"><div class="lab">⚔ 共答题</div><div class="val">${_fmt(c.totalAnswered)}</div></div>
              <div class="stat-item red"><div class="lab">😈 心魔</div><div class="val">${Game.heartDemons().length}</div></div>
            </div>
          </div>
        </div>
      `;
    },

    // ============================================================
    //  v4.0 修复：主页四宫格（洞府/秘境/法宝阁/每日任务）
    //  v3 中此方法缺失，导致主页 four-grid-mount 一片空白
    // ============================================================
    renderFourGrid() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const cave = Game.state.cave || { level:1 };
      const secret = Game.state.secretRealm || { count:0, events:[] };
      const daily = Game.state.daily || { tasks:[] };
      const artifacts = (Game.state.char && Game.state.char.artifacts) || [];
      const pills = Object.keys((Game.state.char && Game.state.char.pills) || {}).reduce((s,k)=>s+(((Game.state.char && Game.state.char.pills)||{})[k]||0),0);
      const gears = Object.keys((Game.state.char && Game.state.char.gear) || {}).length;
      const secretCount = secret.count || ((secret.events && secret.events.length) || 0);
      const pet = Game.state.char && Game.state.char.pet;
      // 每日任务已领取/总数
      const totalDaily = (daily.tasks || []).length;
      const doneDaily  = (daily.tasks || []).filter(t => t.claimed).length;
      const canMed = Game.canMeditate && Game.canMeditate();
      const canSec = Game.canEnterSecret && Game.canEnterSecret();

      const cell = (o) => `
        <div class="xx-four-cell ${o.hot?'hot':''}" data-open="${o.id}">
          <div class="xx-four-icon" style="background:${o.bg};color:${o.fg};">${o.icon}</div>
          <div class="xx-four-body">
            <div class="xx-four-title">${o.title}</div>
            <div class="xx-four-desc">${o.desc}</div>
            <div class="xx-four-badge">${o.badge}</div>
          </div>
          <div class="xx-four-arrow">➤</div>
        </div>
      `;
      return `
        <div class="xx-four-grid">
          ${cell({ id:'cave',  icon:'🏔', bg:'rgba(110,213,224,0.15)', fg:'#6ed5e0',
                    title:'洞府闭关', desc:'打坐冥想恢复道心 + 修为', hot:canMed,
                    badge:`Lv.${cave.level||1} · ${canMed?'✅可打坐':'⏳冷却中'}` })}
          ${cell({ id:'secret',icon:'🌌', bg:'rgba(178,136,255,0.15)', fg:'#b288ff',
                    title:'秘境探索', desc:'随机奇遇 / 稀有掉落', hot:canSec,
                    badge:`已探 ${secretCount||0} 次 · ${canSec?'🚪可进入':'⏳未就绪'}` })}
          ${cell({ id:'artifact',icon:'🔮', bg:'rgba(245,201,122,0.15)', fg:'#f5c97a',
                    title:'法宝阁', desc:'法宝 · 装备 · 丹药 · 灵宠', hot:false,
                    badge:`法宝 ${artifacts.length} · 丹 ${pills} · 装 ${gears} ${pet?'· 宠🐉':''}` })}
          ${cell({ id:'daily', icon:'📋', bg:'rgba(140,226,140,0.15)', fg:'#8ce28c',
                    title:'每日任务', desc:'每日 4 项，坚持稳步精进', hot:doneDaily<totalDaily,
                    badge:`${doneDaily}/${totalDaily} 已领取` })}
          ${cell({ id:'gear', icon:'⚔', bg:'rgba(255,158,198,0.15)', fg:'#ff9ec6',
                    title:'装备阁', desc:'武器·衣袍·法器·头冠 四部位', hot:false,
                    badge:`已藏 ${gears} 件 · 已装 ${Object.values(((Game.state.char||{}).equippedGear)||{}).filter(Boolean).length||0}/4` })}
          ${cell({ id:'pill', icon:'💊', bg:'rgba(243,156,86,0.15)', fg:'#f39c56',
                    title:'丹药房', desc:'恢复气血 · 增益修为', hot:false,
                    badge:`存丹 ${pills} 粒` })}
          ${cell({ id:'pet', icon:'🐉', bg:'rgba(127,179,255,0.15)', fg:'#7fb3ff',
                    title:'灵宠殿', desc:'白虎/青龙/朱雀/玄武/麒麟', hot:!pet,
                    badge:`${pet?(pet.emoji+' '+pet.name+' Lv.'+pet.level):'尚未拜师'}` })}
          ${cell({ id:'achv', icon:'🏆', bg:'rgba(245,201,122,0.15)', fg:'#f5c97a',
                    title:'成就殿堂', desc:'30 项成就 · 记录辉煌', hot:false,
                    badge:`${Object.values(Game.state.achievements||{}).filter(x=>x.done).length} / ${Object.keys(Game.ACHIEVEMENTS||{}).length} 已达成` })}
        </div>
      `;
    },

    // v4.3.5g 重构：合并 v435f-hotfix Bug 1 修复
    //   bindFourGrid 空转（不再绑元素级 onclick），统一走 document 委托（幂等）
    //   避免 "元素级 onclick + 委托" 双触发
    //   委托的安装代码在本文件末尾 initGrid 部分（只装一次）
    bindFourGrid() {
      // 空实现 — 全局委托接手
    },

    // v4.3.5g 重构：合并 v435f-hotfix Bug 2 修复
    //   洞府模态直接展示「闭关问道」入口 UI（而不是旧 renderCave 的打坐调频）
    //   真正的闭关问道答题 UI 在 openCaveQuestion() 里（支持全题型）
    _openCaveModal() {
      if (!Game.state || !Game.state.char) { if (this.toast) this.toast('存档未就绪，稍候再试', 'warn'); return; }
      if (!Game.state.cave) Game.state.cave = { level: 1 };
      const cv = Game.state.cave;
      cv.level = cv.level || 1;
      cv.dailyUsed = cv.dailyUsed || 0;
      cv.dailyDate = cv.dailyDate || '';
      cv.lastMeditateAt = cv.lastMeditateAt || 0;
      const today = (function(){ const d=new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); })();
      if (cv.dailyDate !== today) { cv.dailyDate = today; cv.dailyUsed = 0; }

      const CAVE_DAILY_MAX = 4;
      const CAVE_COOLDOWN_MS = 30 * 60 * 1000;
      const now = Date.now();
      const canCooldown = (now - cv.lastMeditateAt) >= CAVE_COOLDOWN_MS;
      const cdMin = canCooldown ? 0 : Math.ceil((CAVE_COOLDOWN_MS - (now - cv.lastMeditateAt)) / 60000);
      const upgradeCost = Math.round(500 * Math.pow(1.8, cv.level - 1));
      const canUpgrade = (Game.state.char.lingshi || 0) >= upgradeCost;
      const expPreview = Math.round(90 * Math.pow(1.35, cv.level - 1) * (Game.getRealmMultiplier ? Game.getRealmMultiplier() : 1));

      const title = cv.level >= 5 ? '飞升宝殿' : (cv.level >= 3 ? '灵气洞府' : '修士石洞');
      const fmt = (Game.formatBigNum || String);
      const body =
        '<div style="text-align:center;padding:14px 8px;">' +
          '<div style="font-size:44px;line-height:1;">🏔</div>' +
          '<div style="font-family:var(--xx-font-art);font-size:20px;color:var(--xx-cyan);letter-spacing:4px;margin-top:8px;">' + title + '</div>' +
          '<div style="font-size:12px;color:var(--xx-gold);margin-top:4px;letter-spacing:2px;">洞府等级 Lv.' + cv.level + ' · 奖励系数 ×' + Math.pow(1.35, cv.level - 1).toFixed(2) + '</div>' +
          '<div style="font-size:13px;color:var(--xx-text-soft);margin-top:14px;line-height:1.8;padding:0 12px;">' +
            '闭关问道 —— 从已解锁学科随机抽题，答对给修为，答错也回复气血。支持单选、多选、判断、填空、计算全题型。' +
          '</div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0;padding:12px;background:rgba(110,213,224,0.06);border:1px dashed rgba(110,213,224,0.25);border-radius:8px;">' +
          '<div style="text-align:center;"><div style="font-size:11px;color:var(--xx-text-dim);letter-spacing:2px;">今日闭关</div>' +
            '<div style="font-size:20px;color:var(--xx-cyan);margin-top:3px;"><b>' + cv.dailyUsed + '</b> / ' + CAVE_DAILY_MAX + '</div></div>' +
          '<div style="text-align:center;"><div style="font-size:11px;color:var(--xx-text-dim);letter-spacing:2px;">冷却</div>' +
            '<div style="font-size:20px;color:' + (canCooldown ? 'var(--xx-green)' : 'var(--xx-text-dim)') + ';margin-top:3px;">' +
              '<b>' + (canCooldown ? '✓ 就绪' : cdMin + ' 分') + '</b></div></div>' +
        '</div>' +
        '<div class="iv-controls" style="justify-content:center;gap:12px;margin-top:10px;display:flex;flex-wrap:wrap;">' +
          '<button class="iv-btn" id="cave-do-question"' +
            ((cv.dailyUsed >= CAVE_DAILY_MAX || !canCooldown) ? ' disabled' : '') + '>' +
            '🧘 入定问道（答对 → 修为 +' + fmt(expPreview) + '）</button>' +
          '<button class="iv-btn ghost" id="cave-do-upgrade"' + (canUpgrade ? '' : ' disabled') + '>' +
            '⏫ 升级洞府（' + fmt(upgradeCost) + ' 灵石）</button>' +
        '</div>' +
        '<div style="margin-top:14px;font-size:12px;color:var(--xx-text-dim);line-height:1.9;padding:10px;background:rgba(255,255,255,0.03);border-radius:6px;">' +
          '<b style="color:var(--xx-text-soft);">✦ 闭关机制：</b><br>' +
          '• 每日最多闭关 ' + CAVE_DAILY_MAX + ' 次（子夜 0:00 刷新）<br>' +
          '• 每次闭关后需静心 30 分钟方可再次入定<br>' +
          '• 奖励与洞府等级挂钩，升级后修为倍率 ×1.35 指数增长<br>' +
          '• 答错也有小奖励（道心 +5、HP/MP 恢复一半），鼓励继续' +
        '</div>';

      const inst = this.modal({ title: '🏔 洞府闭关', wide: true, body: body, actions: [{ label: '关闭', primary: true }] });
      const mb = inst.m.querySelector('.xx-modal-body');
      const btnQ = mb && mb.querySelector('#cave-do-question');
      const btnU = mb && mb.querySelector('#cave-do-upgrade');
      const self = this;
      if (btnQ) btnQ.onclick = function () {
        inst.close();
        if (self.openCaveQuestion) self.openCaveQuestion();
      };
      if (btnU) btnU.onclick = function () {
        self.confirm('花费 ' + fmt(upgradeCost) + ' 灵石升级洞府？升级后奖励系数 ×1.35。', function () {
          const r = Game.upgradeCave ? Game.upgradeCave() : { ok: false, msg: '升级不可用' };
          if (self.toast) self.toast(r.msg, r.ok ? 'success' : 'error');
          if (r.ok) { inst.close(); self._openCaveModal(); }
        });
      };
    },

    // v4.3.5g 重构：闭关问道 UI —— 支持全题型（single/judge/multi/fill/calc/solve/essay）
    //   判题走权威 Game.judgeAnswer（避免各自一套判题造成结果不一致）
    openCaveQuestion() {
      if (!Game.state.cave) Game.state.cave = { level: 1 };
      const cv = Game.state.cave;
      const CAVE_DAILY_MAX = 4;
      const CAVE_COOLDOWN_MS = 30 * 60 * 1000;
      const now = Date.now();
      const canCooldown = (now - cv.lastMeditateAt) >= CAVE_COOLDOWN_MS;
      if (cv.dailyUsed >= CAVE_DAILY_MAX) { if (this.toast) this.toast('今日闭关额度已用完（' + CAVE_DAILY_MAX + '/日），子夜刷新', 'warn'); return; }
      if (!canCooldown) { const remain = Math.ceil((CAVE_COOLDOWN_MS - (now - cv.lastMeditateAt)) / 60000); if (this.toast) this.toast('闭关冷却中，还需 ' + remain + ' 分钟', 'warn'); return; }

      const pool = [];
      ['physics','chemistry','geography','chinese','math','english'].forEach(function (sk) {
        const st = Game.state.sects && Game.state.sects[sk];
        if (!st || !st.unlocked) return;
        const bank = window[sk.toUpperCase() + '_BANK'];
        if (!Array.isArray(bank)) return;
        bank.forEach(function (q) {
          const d = q.difficulty || 'normal';
          if (d === 'easy' || d === 'normal') pool.push(Object.assign({ __sect: sk }, q));
        });
      });
      if (!pool.length) { if (this.toast) this.toast('题库尚未加载或无解锁学科，请稍候', 'warn'); return; }
      const q = pool[Math.floor(Math.random() * pool.length)];
      const sectName = { physics:'⚡雷霆殿', chemistry:'⚗丹鼎峰', geography:'🌏山河阁', chinese:'📜文渊阁', math:'🔢推衍宫', english:'🌐译灵堂' };
      const type = q.type || 'single';

      const normalizeOptions = function (q) {
        if (q.type === 'judge') return [{ k: '对', v: '对（正确）' }, { k: '错', v: '错（错误）' }];
        if (Array.isArray(q.options) && q.options.length) {
          return q.options.map(function (opt, i) {
            const s = String(opt);
            const m = s.match(/^([A-Z])[\.\s、\.]+\s*(.*)$/);
            if (m) return { k: m[1], v: m[2] };
            if (typeof opt === 'object' && opt !== null && opt.k) return opt;
            return { k: String.fromCharCode(65 + i), v: s };
          });
        }
        return [];
      };
      const typeLabel = function (t) { return { single: '单选', multi: '多选', judge: '判断', fill: '填空', calc: '计算', solve: '解答', essay: '论述' }[t] || '题目'; };
      const opts = normalizeOptions(q);
      const isFillLike = (type === 'fill' || type === 'calc' || type === 'solve' || type === 'essay');
      const isMulti = (type === 'multi');
      const isChoiceLike = !isFillLike && opts.length > 0;
      const vizHtml = (typeof AutoViz !== 'undefined' && AutoViz.forQuestion) ? (AutoViz.forQuestion(q) || '') : '';

      let bodyOptsHtml = '';
      if (isFillLike || (!isChoiceLike && !isMulti)) {
        bodyOptsHtml = '<div style="margin-top:10px;"><textarea id="cave-fill-input" placeholder="请输入答案…" rows="2" style="width:100%;padding:12px;font-size:15px;background:rgba(0,0,0,0.3);border:1px solid var(--xx-purple);border-radius:8px;color:var(--xx-text);resize:vertical;font-family:inherit;box-sizing:border-box;"></textarea></div>';
      } else {
        bodyOptsHtml = '<div class="cave-q-opts">' + opts.map(function (o) {
          return '<div class="cave-q-opt" data-k="' + o.k + '"><span class="cave-q-letter">' + o.k + '</span><span class="cave-q-text">' + o.v + '</span></div>';
        }).join('') + '</div>';
        if (isMulti) bodyOptsHtml += '<div style="font-size:12px;color:var(--xx-cyan);margin-top:8px;">💡 多选题：点选多个选项后按【提交作答】按钮。</div>';
      }
      const body =
        '<div style="text-align:center;margin-bottom:12px;"><div style="font-size:28px;">🧘</div>' +
          '<div style="font-family:var(--xx-font-art);font-size:16px;color:var(--xx-cyan);letter-spacing:3px;">闭关问道 · Lv.' + cv.level + ' 洞府</div>' +
          '<div style="font-size:12px;color:var(--xx-text-dim);margin-top:3px;">今日 ' + cv.dailyUsed + '/' + CAVE_DAILY_MAX + ' · 答对 → 奖励修为 · 答错 → 静心恢复</div>' +
        '</div>' +
        '<div class="cave-q-source" style="font-size:11px;color:var(--xx-text-dim);text-align:right;margin-bottom:6px;">题源：' + (sectName[q.__sect] || q.__sect) + ' · ' + (q.difficulty || 'normal') + ' · ' + typeLabel(type) + '</div>' +
        '<div class="cave-q-stem" style="font-size:14.5px;line-height:1.8;padding:12px;background:rgba(255,255,255,0.03);border-left:3px solid var(--xx-cyan);border-radius:4px;margin-bottom:12px;">' + (q.q || '(题干缺失)') + '</div>' +
        (vizHtml ? '<div style="margin-bottom:10px;">' + vizHtml + '</div>' : '') + bodyOptsHtml +
        '<div class="cave-q-result" style="display:none;margin-top:14px;"></div>' +
        '<div class="cave-q-actions" style="margin-top:14px;display:flex;justify-content:flex-end;gap:8px;">' +
          '<button class="xx-btn xx-btn-primary" id="cave-submit">⚔ 提交作答</button></div>';

      const inst = this.modal({ title: '🏔 洞府闭关问道', wide: true, body: body, actions: [{ label: '关闭', primary: true }] });
      const modalBody = inst.m.querySelector('.xx-modal-body');
      if (!modalBody) return;
      const pickedSet = new Set();
      let submitted = false;

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
          if (isMulti) { if (pickedSet.has(k)) pickedSet.delete(k); else pickedSet.add(k); }
          else { pickedSet.clear(); pickedSet.add(k); }
          modalBody.querySelectorAll('.cave-q-opt').forEach(function (o) {
            const kk = o.dataset.k;
            if (pickedSet.has(kk)) { o.style.background = 'rgba(110,213,224,0.18)'; o.style.borderColor = 'var(--xx-cyan)'; }
            else { o.style.background = 'rgba(255,255,255,0.04)'; o.style.borderColor = 'rgba(255,255,255,0.08)'; }
          });
        };
      });

      const btnSubmit = modalBody.querySelector('#cave-submit');
      const self = this;
      const calcCaveReward = function (correct, difficulty) {
        const realmMul = Game.getRealmMultiplier ? Game.getRealmMultiplier() : 1;
        const caveMul = Math.pow(1.35, cv.level - 1);
        const diffBase = difficulty === 'normal' ? 90 : 55;
        if (correct) return { exp: Math.round(diffBase * caveMul * realmMul), dao: Math.round(30 + realmMul * 4), hpPct: 1.0, mpPct: 1.0 };
        return { exp: 0, dao: 5, hpPct: 0.5, mpPct: 0.5 };
      };

      if (btnSubmit) {
        btnSubmit.onclick = function () {
          if (submitted) return;
          let userAns = null;
          if (isFillLike || (!isChoiceLike && !isMulti)) {
            const ta = modalBody.querySelector('#cave-fill-input');
            const val = ta ? String(ta.value || '').trim() : '';
            if (!val) { if (self.toast) self.toast('请先输入答案', 'warn'); return; }
            userAns = val;
          } else if (isMulti) {
            if (pickedSet.size === 0) { if (self.toast) self.toast('请选择至少一个选项', 'warn'); return; }
            userAns = Array.from(pickedSet);
          } else {
            if (pickedSet.size === 0) { if (self.toast) self.toast('请选择一个选项', 'warn'); return; }
            userAns = Array.from(pickedSet)[0];
          }
          submitted = true;
          btnSubmit.disabled = true;
          btnSubmit.textContent = '已提交';

          const correct = Game.judgeAnswer ? Game.judgeAnswer(q, userAns) : false;
          const reward = calcCaveReward(correct, q.difficulty || 'normal');

          cv.dailyUsed++;
          cv.lastMeditateAt = Date.now();
          if (correct) { if (Game.addExp) Game.addExp(reward.exp); if (Game.changeDaoxin) Game.changeDaoxin(reward.dao); }
          else { if (Game.changeDaoxin) Game.changeDaoxin(reward.dao); }
          const c = Game.state.char;
          c.hp = Math.min(c.maxHp, c.hp + Math.round(c.maxHp * reward.hpPct));
          c.mp = Math.min(c.maxMp, c.mp + Math.round(c.maxMp * reward.mpPct));
          if (Game.save) Game.save();

          const correctKeys = new Set();
          if (type === 'multi' && Array.isArray(q.answer)) q.answer.forEach(function (k) { correctKeys.add(String(k).trim().toUpperCase()); });
          else if (type === 'single' || type === 'judge') correctKeys.add(String(q.answer).trim().toUpperCase());

          modalBody.querySelectorAll('.cave-q-opt').forEach(function (o) {
            const k = String(o.dataset.k || '').toUpperCase();
            if (correctKeys.has(k)) { o.style.background = 'rgba(140,226,140,0.20)'; o.style.borderColor = 'var(--xx-green)'; }
            else if (pickedSet.has(o.dataset.k)) { o.style.background = 'rgba(255,120,120,0.20)'; o.style.borderColor = 'var(--xx-red)'; }
            o.style.cursor = 'default';
          });

          const resultDiv = modalBody.querySelector('.cave-q-result');
          const fmt = (Game.formatBigNum || String);
          if (resultDiv) {
            const answerHtml = (function () {
              if (type === 'multi' && Array.isArray(q.answer)) return q.answer.join('、');
              if (Array.isArray(q.answer)) return q.answer.join(' / ');
              return String(q.answer);
            })();
            resultDiv.style.display = 'block';
            if (correct) {
              resultDiv.innerHTML = '<div style="padding:12px;background:rgba(140,226,140,0.10);border:1px solid var(--xx-green);border-radius:6px;">' +
                '<b style="color:var(--xx-green);">✔ 答对！心神通明</b><br>' +
                '<span style="font-size:13px;color:var(--xx-text-soft);line-height:1.8;">修为 +<b style="color:var(--xx-gold);">' + fmt(reward.exp) + '</b>　道心 +<b style="color:var(--xx-purple);">' + reward.dao + '</b>　HP/MP 全恢复</span>' +
                (q.explain ? '<div style="margin-top:8px;font-size:12px;color:var(--xx-text-dim);border-top:1px dashed rgba(255,255,255,0.15);padding-top:6px;"><b>解析：</b>' + q.explain + '</div>' : '') + '</div>';
            } else {
              resultDiv.innerHTML = '<div style="padding:12px;background:rgba(255,180,120,0.08);border:1px solid #f39c56;border-radius:6px;">' +
                '<b style="color:#f39c56;">✕ 答错，正解：' + answerHtml + '</b><br>' +
                '<span style="font-size:13px;color:var(--xx-text-soft);line-height:1.8;">道心 +' + reward.dao + '　HP/MP 恢复一半（静心稳固）</span>' +
                (q.explain ? '<div style="margin-top:8px;font-size:12px;color:var(--xx-text-dim);border-top:1px dashed rgba(255,255,255,0.15);padding-top:6px;"><b>解析：</b>' + q.explain + '</div>' : '') + '</div>';
            }
          }
          if (Game.emit) Game.emit('expChange');
        };
      }
      const taInput = modalBody.querySelector('#cave-fill-input');
      if (taInput) { taInput.focus(); taInput.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (btnSubmit) btnSubmit.click(); } }); }
    },

    _openSecretModal() {
      const inst = this.modal({
        title:'🌌 秘境探索',
        body: this.renderSecretRealm(),
        actions:[{ label:'关闭', primary:true }]
      });
      const body = inst.m.querySelector('.xx-modal-body');
      const rebind = () => {
        this.bindSecretRealm(body, () => {
          body.innerHTML = this.renderSecretRealm();
          rebind();
        });
      };
      if (body) rebind();
    },

    _openDailyModal() {
      const inst = this.modal({
        title:'📋 每日任务',
        body: this.renderDailyTasks(),
        actions:[{ label:'关闭', primary:true }]
      });
      const body = inst.m.querySelector('.xx-modal-body');
      const rebind = () => {
        this.bindDailyTasks(body, () => {
          body.innerHTML = this.renderDailyTasks();
          rebind();
        });
      };
      if (body) rebind();
    },

    _openArtifactModal(initialTab) {
      // 复合面板：切换 tab（法宝阁 / 装备 / 丹药 / 灵宠）
      let current = initialTab || 'artifact';
      let outer = null;
      const tabs = [
        { key:'artifact', name:'🔮 法宝阁' },
        { key:'gear',     name:'⚔ 装备'   },
        { key:'pill',     name:'💊 丹药'   },
        { key:'pet',      name:'🐉 灵宠'   },
      ];
      const renderCurrent = () => {
        if (current === 'artifact') return this.renderArtifactShop();
        if (current === 'gear')     return this.renderGear();
        if (current === 'pill')     return this.renderPills();
        if (current === 'pet')      return this.renderPets();
        return '';
      };
      const bindCurrent = (el) => {
        if (!el) return;
        if (current === 'artifact') this.bindArtifactShop(el, refreshTab);
        else if (current === 'gear') this.bindGear(el, refreshTab);
        else if (current === 'pill') this.bindPills(el, refreshTab);
        else if (current === 'pet')  this.bindPets(el, refreshTab);
      };
      const refreshTab = () => {
        const body = outer && outer.querySelector('#artifact-tab-body');
        if (!body) return;
        body.innerHTML = renderCurrent();
        bindCurrent(body);
      };
      const buildHtml = () => `
        <div class="xx-tabs" id="artifact-tabs" style="margin-bottom:12px;">
          ${tabs.map(t => `<button class="xx-tab ${t.key===current?'active':''}" data-tab="${t.key}">${t.name}</button>`).join('')}
        </div>
        <div id="artifact-tab-body"></div>
      `;
      const inst = this.modal({
        title:'🔮 法宝阁 · 综合仓储',
        body: buildHtml(),
        actions:[{ label:'关闭', primary:true }]
      });
      outer = inst.m.querySelector('.xx-modal-body');
      if (!outer) return;
      const bindTabs = () => {
        outer.querySelectorAll('#artifact-tabs .xx-tab').forEach(btn => {
          btn.onclick = () => {
            current = btn.dataset.tab;
            outer.innerHTML = buildHtml();
            bindTabs();
            refreshTab();
          };
        });
      };
      bindTabs();
      refreshTab();
    },

    // v4.0 新增：成就殿堂弹窗
    _openAchvModal() {
      const inst = this.modal({
        title:'🏆 成就殿堂',
        body: this.renderAchievements(),
        actions:[{ label:'关闭', primary:true }]
      });
    },

    // ====== 宗门地图 ======
    renderSectMap() {
      const sects = [
        { key:'physics',   icon:'⚡', name:'雷霆殿', subject:'物理', desc:'掌天地之力，操控雷霆万钧。运动、波动、电磁、热学，皆在掌中。', cls:'sect-physics'  },
        { key:'chemistry', icon:'⚗',  name:'丹鼎峰', subject:'化学', desc:'炼丹问道，元素为基。从化学反应到有机分子，洞察物质本源。',     cls:'sect-chemistry'},
        { key:'geography', icon:'🌏', name:'山河阁', subject:'地理', desc:'纵观天地，山川河流，气候洋流，区域兴衰皆入眼帘。',           cls:'sect-geography'},
        { key:'chinese',   icon:'📜', name:'文渊阁', subject:'语文', desc:'笔走龙蛇，文以载道。古诗文阅读、现代文鉴赏、议论文写作。',    cls:'sect-chinese'  },
        { key:'math',      icon:'🔢', name:'推衍宫', subject:'数学', desc:'演算天机，函数为剑，几何作盾。万物皆数，数即道也。',          cls:'sect-math'     },
        { key:'english',   icon:'🌐', name:'译灵堂', subject:'英语', desc:'通晓异界灵语，沟通天下。词汇、语法、阅读、写作。',           cls:'sect-english'  },
      ];
      let html = '<div class="sect-map">';
      sects.forEach(s => {
        const st = Game.state.sects[s.key] || { masteredManuals:[], defeatedQuests:[] };
        const mCnt = st.masteredManuals.length;
        const qCnt = st.defeatedQuests.length;
        const locked = !st.unlocked;
        const cls = `sect-card ${s.cls} ${locked ? 'locked' : ''}`;
        const href = locked ? 'javascript:void(0)' : `subjects/${s.key}.html`;
        // 用 manual 数估算总进度（如果数据已加载）
        const totalManuals = (global[`${s.key.toUpperCase()}_MANUALS`] || []).length || 0;
        const totalBank = (global[`${s.key.toUpperCase()}_BANK`] || []).length || 0;
        const totalAll = totalManuals + totalBank;
        const done = mCnt + qCnt;
        const pct = totalAll > 0 ? Math.min(100, Math.round(done / totalAll * 100)) : 0;
        html += `
          <a class="${cls}" href="${href}">
            <span class="sect-icon">${s.icon}</span>
            <div class="sect-subject">${s.subject}</div>
            <div class="sect-name">${s.name}</div>
            <div class="sect-desc">${s.desc}</div>
            <div class="sect-progress">
              功法 ${mCnt} / 妖兽 ${qCnt}
              <div class="sect-progress-bar"><div class="sect-progress-fill" style="width:${pct}%"></div></div>
            </div>
          </a>
        `;
      });
      html += '</div>';
      return html;
    },

    // ====== 心魔录视图 ======
    renderHeartDemons() {
      const list = Game.heartDemons();
      if (!list.length) {
        return `<div class="xx-empty">心境空明，无心魔缠身 🌿</div>`;
      }
      const sectName = { physics:'⚡雷霆殿', chemistry:'⚗丹鼎峰', geography:'🌏山河阁',
                         chinese:'📜文渊阁', math:'🔢推衍宫', english:'🌐译灵堂' };
      let html = '<div class="heart-demon-list">';
      list.forEach(d => {
        const bank = global[`${d.sect.toUpperCase()}_BANK`] || [];
        const q = bank.find(x => x.id === d.qid);
        const qDesc = q ? (q.q.length > 50 ? q.q.slice(0, 50) + '…' : q.q) : '(题目数据未加载)';
        html += `
          <div class="heart-demon-item" data-sect="${d.sect}" data-qid="${d.qid}">
            <span style="color:var(--xx-red);font-weight:700;">[${sectName[d.sect] || d.sect}]</span>
            ${qDesc}
            <div style="font-size:11px;color:var(--xx-text-dim);margin-top:4px;">
              失手 ${d.wrongCount} 次 · ${new Date(d.lastWrongAt).toLocaleString('zh-CN')}
              · <a href="subjects/${d.sect}.html#q=${d.qid}" style="color:var(--xx-cyan);">前往重练 →</a>
            </div>
          </div>
        `;
      });
      html += '</div>';
      return html;
    },

    // ============================================================
    //  v2.0 新增：灵根抽取
    // ============================================================
    showSpiritRootDraw(onPicked) {
      const roots = Object.values(Game.SPIRIT_ROOTS);
      let body = '<p style="color:var(--xx-text-soft);font-size:13.5px;line-height:1.7;margin-bottom:12px;">' +
        '入道之初，需测灵根。每个修士天赋不同，可影响日后修行速度。<br>' +
        '<b style="color:var(--xx-gold);">注意：灵根一经选定，不可更改！</b>请慎重抉择。</p>';
      body += '<div class="spirit-root-grid">';
      roots.forEach(r => {
        body += `
          <div class="spirit-root-card root-${r.id}" data-root="${r.id}">
            <span class="root-icon">${r.icon}</span>
            <div class="root-name">${r.name}</div>
            <div class="root-desc">${r.desc}</div>
          </div>
        `;
      });
      body += '</div>';
      body += '<div class="hint-bubble">提示：物化地选手建议优先考虑 <b>雷灵根</b>（物理大加成）、<b>火灵根</b>（化学大加成）或 <b>土灵根</b>（地理大加成）。</div>';
      const m = UI.modal({ title:'✦ 测灵根 · 入道之始', body, actions:[] });
      m.m.querySelectorAll('.spirit-root-card').forEach(card => {
        card.onclick = () => {
          const rid = card.dataset.root;
          UI.confirm(`确定选择「${Game.SPIRIT_ROOTS[rid].name}」吗？此选择不可更改。`, () => {
            Game.setSpiritRoot(rid);
            UI.toast(`你选择了「${Game.SPIRIT_ROOTS[rid].name}」，修行之路就此启程！`, 'success');
            m.close();
            if (onPicked) onPicked(rid);
          });
        };
      });
      return m;
    },

    // ============================================================
    //  v2.0 新增：法宝阁
    // ============================================================
    renderArtifactShop() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const arts = Game.ARTIFACTS || {};
      const owned = Game.state.char.artifacts || [];
      const equipped = Game.state.char.equippedArtifacts || [];
      let html = '<div class="xx-tip">🎒 法宝阁 · 每件法宝可永久增益。最多同时装备 3 件。</div>';
      html += '<div class="artifact-grid">';
      Object.keys(arts).forEach(aid => {
        const a = arts[aid];
        const has = owned.includes(aid);
        const eq  = equipped.includes(aid);
        const cls = `artifact-card ${has?'owned':''} ${eq?'equipped':''}`;
        let action = '';
        if (!has) {
          action = `<button class="iv-btn" data-buy="${aid}">💎 炼制 ${a.cost}</button>`;
        } else if (!eq) {
          action = `<button class="iv-btn ghost" data-equip="${aid}">⚔ 装备</button>`;
        } else {
          action = `<button class="iv-btn ghost" data-unequip="${aid}">⬇ 卸下</button>`;
        }
        html += `
          <div class="${cls}">
            <span class="artifact-icon">${a.icon}</span>
            <div class="artifact-name">${a.name}</div>
            <div class="artifact-desc">${a.desc}</div>
            <div class="artifact-cost">${has?'已拥有':`售价 ${a.cost} 灵石`}</div>
            <div class="artifact-actions">${action}</div>
          </div>
        `;
      });
      html += '</div>';
      return html;
    },
    bindArtifactShop(container, onChange) {
      container.querySelectorAll('[data-buy]').forEach(b => {
        b.onclick = () => {
          const r = Game.buyArtifact(b.dataset.buy);
          UI.toast(r.msg, r.ok?'success':'error');
          if (r.ok && onChange) onChange();
        };
      });
      container.querySelectorAll('[data-equip]').forEach(b => {
        b.onclick = () => {
          if (Game.equipArtifact(b.dataset.equip)) {
            UI.toast('已装备', 'success');
            if (onChange) onChange();
          }
        };
      });
      container.querySelectorAll('[data-unequip]').forEach(b => {
        b.onclick = () => {
          Game.unequipArtifact(b.dataset.unequip);
          UI.toast('已卸下', 'info');
          if (onChange) onChange();
        };
      });
    },

    // ============================================================
    //  v2.0 新增：洞府
    // ============================================================
    renderCave() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const cave = Game.state.cave;
      const canM = Game.canMeditate();
      const cdMin = canM ? 0 : Math.ceil((30*60*1000 - (Date.now() - cave.lastMeditateAt))/60000);
      let html = `
        <div class="cave-stage">
          <div class="cave-bg-stars"></div>
          <div class="cave-avatar">${Game.state.char.avatar||'🧘'}</div>
          <div class="cave-info">
            <div class="cave-title">${cave.level >= 5?'飞升宝殿':(cave.level >= 3?'灵气洞府':'修士石洞')}</div>
            <div class="cave-level-tag">洞府等级 Lv.${cave.level}</div>
            <div style="margin-top:14px;color:var(--xx-text-soft);font-size:13px;">
              此处灵气浓郁，可助你恢复道心、参悟天地。
            </div>
          </div>
        </div>
        <div class="iv-controls" style="justify-content:center;margin-top:14px;">
          <button class="iv-btn" id="cave-meditate" ${canM?'':'disabled'}>
            🧘 ${canM?`打坐冥想（道心+~40, 修为+${(Game.formatBigNum||String)(Math.round(60*Math.pow(1.35,cave.level||1)*(Game.getRealmMultiplier?Game.getRealmMultiplier():1)))}）`:`冷却中（${cdMin} 分钟）`}
          </button>
          <button class="iv-btn ghost" id="cave-upgrade">
            ⏫ 升级洞府（${(Game.formatBigNum||String)(Math.round(500*Math.pow(2.2,(cave.level||1)-1)))} 灵石）
          </button>
        </div>
      `;
      return html;
    },
    bindCave(container, onChange) {
      const btnM = container.querySelector('#cave-meditate');
      const btnU = container.querySelector('#cave-upgrade');
      if (btnM) btnM.onclick = () => {
        const r = Game.meditate();
        UI.toast(r.msg, r.ok?'success':'error');
        if (r.ok && onChange) onChange();
      };
      if (btnU) btnU.onclick = () => {
        UI.confirm(`花费 ${(Game.formatBigNum||String)(Math.round(500*Math.pow(2.2,(Game.state.cave.level||1)-1)))} 灵石升级洞府？升级后打坐效果增强。`, () => {
          const r = Game.upgradeCave();
          UI.toast(r.msg, r.ok?'success':'error');
          if (r.ok && onChange) onChange();
        });
      };
    },

    // ============================================================
    //  v2.0 新增：秘境
    // ============================================================
    renderSecretRealm() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const sr = Game.state.secretRealm;
      const canE = Game.canEnterSecret();
      const cdMin = canE ? 0 : Math.ceil((60*60*1000 - (Date.now() - sr.lastEnterAt))/60000);
      let html = `
        <div class="secret-realm-stage">
          <div style="text-align:center;padding:30px 10px;">
            <div style="font-size:48px;">🗺</div>
            <div style="font-family:var(--xx-font-art);font-size:20px;color:var(--xx-purple);letter-spacing:4px;margin-top:10px;">秘境探索</div>
            <div style="font-size:13px;color:var(--xx-text-soft);margin-top:6px;line-height:1.7;">
              传闻有上古遗迹蕴藏天材地宝、奇异机缘。<br>每一小时可探索一次。
            </div>
            <button class="iv-btn" id="sr-enter" ${canE?'':'disabled'} style="margin-top:16px;">
              ${canE?'🚪 进入秘境':`冷却中（${cdMin} 分钟）`}
            </button>
          </div>
        </div>
      `;
      if (sr.events && sr.events.length) {
        html += '<div class="xx-section-title" style="margin-top:18px;font-size:15px;">📜 历次奇遇</div>';
        sr.events.slice(0,8).forEach(e => {
          html += `<div class="secret-history-item"><b style="color:var(--xx-purple);">${e.msg}</b> <span style="color:var(--xx-green);">${e.detail||''}</span></div>`;
        });
      }
      return html;
    },
    bindSecretRealm(container, onChange) {
      const btn = container.querySelector('#sr-enter');
      if (btn) btn.onclick = () => {
        const r = Game.enterSecret();
        if (!r.ok) { UI.toast(r.msg, 'error'); return; }
        // 弹窗显示奇遇
        UI.modal({
          title: '✦ 秘境奇遇',
          body: `
            <div class="secret-event-card">
              <div class="secret-event-msg">${r.event.msg}</div>
              <div class="secret-event-detail">${r.detail}</div>
            </div>
          `,
          actions: [{ label:'继续修行', primary:true }]
        });
        if (onChange) onChange();
      };
    },

    // ============================================================
    //  v2.0 新增：每日任务
    // ============================================================
    renderDailyTasks() {
      // 若今日任务还未生成，主动调一次
      if (Game._ensureAllFields) Game._ensureAllFields();
      if (Game._refreshDaily) Game._refreshDaily();
      const tasks = (Game.state.daily && Game.state.daily.tasks) || [];
      if (!tasks.length) return '<div class="xx-empty">每日任务加载中…</div>';
      let html = '<div class="xx-tip">📅 每日任务 · 子夜 0:00 刷新。完成后可领取丰厚奖励。</div>';
      tasks.forEach(t => {
        const pct = Math.min(100, Math.round(t.progress/t.target*100));
        const done = t.progress >= t.target;
        html += `
          <div class="daily-task ${done?'done':''} ${t.claimed?'claimed':''}">
            <div class="task-info">
              <div class="task-desc">${t.desc}</div>
              <div class="task-progress-bar">
                <div class="task-progress-fill" style="width:${pct}%"></div>
              </div>
              <div class="task-reward">进度 ${t.progress}/${t.target} · 奖励：+${t.reward.exp}修为 +${t.reward.shi}灵石</div>
            </div>
            ${ t.claimed ? '<span style="color:var(--xx-text-dim);font-size:12px;">✓ 已领取</span>'
               : (done ? `<button class="iv-btn" data-claim="${t.id}">🎁 领取</button>`
                  : '<span style="color:var(--xx-text-dim);font-size:12px;">进行中</span>') }
          </div>
        `;
      });
      return html;
    },
    bindDailyTasks(container, onChange) {
      container.querySelectorAll('[data-claim]').forEach(b => {
        b.onclick = () => {
          const r = Game.claimDaily(b.dataset.claim);
          UI.toast(r.msg, r.ok?'success':'error');
          if (r.ok && onChange) onChange();
        };
      });
    },

    // ============================================================
    //  v2.0 新增：答题特效（暴击爆发/正误反馈）
    // ============================================================
    showCombo(text) {
      const el = document.createElement('div');
      el.className = 'combo-burst';
      el.textContent = text;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1200);
    },
    showAnswerFx(correct) {
      const el = document.createElement('div');
      el.className = 'answer-fx';
      el.textContent = correct ? '⚔' : '💔';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 900);
    },

    // ============================================================
    //  v2.0 新增：灵气粒子背景
    // ============================================================
    initQiParticles() {
      if (document.querySelector('.qi-particles')) return;
      const wrap = document.createElement('div');
      wrap.className = 'qi-particles';
      for (let i=0; i<10; i++) {
        const p = document.createElement('div');
        p.className = 'qi-particle';
        p.style.left = (Math.random()*100) + '%';
        p.style.animationDelay = (Math.random()*8) + 's';
        p.style.animationDuration = (6 + Math.random()*4) + 's';
        if (Math.random() > 0.6) p.style.background = 'var(--xx-purple)';
        wrap.appendChild(p);
      }
      document.body.appendChild(wrap);
    },

    // ================================================
    //  🗺 v3 新增：世界大地图
    // ================================================
    renderWorldMap() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const wm = Game.state.worldMap;
      // 8 个节点位置（800×480 SVG 坐标）
      const NODES = [
        { id:'start',     name:'问道山门', sub:'缘起之地',       x:400, y:70,  emoji:'⛩', href:null },
        { id:'physics',   name:'雷震殿',   sub:'物理 / 18 篇功法', x:150, y:170, emoji:'⚡', href:'subjects/physics.html' },
        { id:'chemistry', name:'丹鼎峰',   sub:'化学 / 11 篇功法', x:650, y:170, emoji:'⚗',  href:'subjects/chemistry.html' },
        { id:'geography', name:'山河阁',   sub:'地理 / 11 篇功法', x:70,  y:320, emoji:'🌏', href:'subjects/geography.html' },
        { id:'chinese',   name:'文渊阁',   sub:'语文 / 9 篇功法',  x:280, y:340, emoji:'📜', href:'subjects/chinese.html' },
        { id:'math',      name:'推衍宫',   sub:'数学 / 9 篇功法',  x:520, y:340, emoji:'🔢', href:'subjects/math.html' },
        { id:'english',   name:'译灵堂',   sub:'英语 / 7 篇功法',  x:730, y:320, emoji:'🌐', href:'subjects/english.html' },
        { id:'tower',     name:'飞升宝塔', sub:'高考 / 终极塔',      x:400, y:430, emoji:'🗼', href:'#tower' },
      ];
      const paths = [
        ['start','physics'], ['start','chemistry'],
        ['physics','geography'], ['physics','chinese'],
        ['chemistry','math'], ['chemistry','english'],
        ['geography','chinese'], ['chinese','math'], ['math','english'],
        ['geography','tower'], ['english','tower'], ['chinese','tower'], ['math','tower']
      ];
      const nMap = {};
      NODES.forEach(n => nMap[n.id] = n);
      const nodeById = id => nMap[id];

      let svg = `<svg class="world-map-svg" viewBox="0 0 800 480" preserveAspectRatio="xMidYMid meet">`;
      // 背景远山 (装饰)
      svg += `<defs>
        <radialGradient id="wm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(178,136,255,0.35)"/><stop offset="100%" stop-color="transparent"/>
        </radialGradient>
        <linearGradient id="wm-cloud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(178,136,255,0.20)"/><stop offset="100%" stop-color="transparent"/>
        </linearGradient>
      </defs>`;
      // 云雾 (多层)
      svg += `<ellipse cx="200" cy="460" rx="260" ry="40" fill="url(#wm-cloud)" class="cloud"/>`;
      svg += `<ellipse cx="600" cy="470" rx="260" ry="35" fill="url(#wm-cloud)" class="cloud"/>`;
      // 远山（三角）
      svg += `<polygon class="mountain" points="0,470 100,300 200,400 260,340 340,460" fill="rgba(30,25,60,0.6)"/>`;
      svg += `<polygon class="mountain" points="460,470 540,340 620,400 720,300 800,470" fill="rgba(30,25,60,0.6)"/>`;
      // 星星
      for (let i = 0; i < 20; i++) {
        const x = Math.random()*800; const y = Math.random()*280;
        svg += `<circle cx="${x}" cy="${y}" r="${Math.random()*1.5+0.5}" fill="#fff" opacity="${0.3+Math.random()*0.5}"/>`;
      }
      // 路径
      paths.forEach(([a,b]) => {
        const A = nodeById(a), B = nodeById(b);
        if (!A || !B) return;
        // 绘制一条弧线
        const mx = (A.x+B.x)/2, my = (A.y+B.y)/2 - 20;
        svg += `<path class="path-line" d="M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}"/>`;
      });
      // 节点
      NODES.forEach(n => {
        const unlocked = wm.unlocked[n.id] !== false;
        const cls = 'location' + (unlocked ? '' : ' locked');
        const href = unlocked ? (n.href||'') : '';
        svg += `<g class="${cls}" data-node="${n.id}" data-href="${href}">`;
        // 光晕
        if (unlocked) svg += `<circle cx="${n.x}" cy="${n.y}" r="38" fill="url(#wm-glow)"/>`;
        svg += `<circle class="loc-ring" cx="${n.x}" cy="${n.y}" r="28"/>`;
        // emoji
        svg += `<text class="loc-emoji" x="${n.x}" y="${n.y+11}" text-anchor="middle">${n.emoji}</text>`;
        // 标题
        svg += `<text class="loc-label" x="${n.x}" y="${n.y+50}">${n.name}</text>`;
        svg += `<text class="loc-sub" x="${n.x}" y="${n.y+66}">${n.sub}</text>`;
        svg += `</g>`;
      });
      svg += `</svg>`;
      return `<div class="world-map-wrap">${svg}
        <div class="world-map-legend">
          <span class="legend-item"><span class="lgd-dot"></span>已解锁</span>
          <span class="legend-item"><span class="lgd-dot locked"></span>未解锁</span>
          <span style="margin-left:auto;color:var(--xx-text-dim);">💡 点击任一宗门进入</span>
        </div>
      </div>`;
    },

    bindWorldMap(container) {
      container.querySelectorAll('.location').forEach(g => {
        if (g.classList.contains('locked')) {
          g.onclick = () => UI.toast('此地尚未解锁', 'error');
          return;
        }
        g.onclick = () => {
          const href = g.dataset.href;
          const node = g.dataset.node;
          Game.visitNode(node);
          if (href && href !== '#tower') { window.location.href = href; return; }
          if (href === '#tower') { UI.toast('飞升宝塔 — 请先突破金丹期后解锁', 'info'); return; }
          if (node === 'start') { UI.toast('你回到了问道山门', 'info'); }
        };
      });
    },

    // ================================================
    //  🏆 v3 成就殿堂
    // ================================================
    renderAchievements() {
      if (!Game.ACHIEVEMENTS) return '<div class="xx-empty">成就系统未启用</div>';
      Game._checkAchievements();
      const s = Game.state;
      const total = Object.keys(Game.ACHIEVEMENTS).length;
      const done = Object.values(s.achievements||{}).filter(x=>x.done).length;
      let html = `<div class="xx-tip">🏆 成就殿堂 · <b style="color:var(--xx-gold);">${done} / ${total}</b> 已解锁</div>`;
      html += '<div class="achv-grid">';
      Object.keys(Game.ACHIEVEMENTS).forEach(aid => {
        const a = Game.ACHIEVEMENTS[aid];
        const rec = (s.achievements||{})[aid] || { progress:0, done:false };
        const pct = Math.min(100, Math.round(rec.progress / (a.target||1) * 100));
        html += `
          <div class="achv-card ${rec.done?'done':'locked'}">
            <div class="achv-icon">${a.icon}</div>
            <div class="achv-name">${a.name}</div>
            <div class="achv-desc">${a.desc}</div>
            <div class="achv-progress"><div class="achv-progress-fill" style="width:${pct}%"></div></div>
            <div class="achv-progress-text">${rec.progress}/${a.target||1}${rec.done?' · ✅':''}</div>
          </div>
        `;
      });
      html += '</div>';
      return html;
    },

    // ================================================
    //  ⚔ v3 装备面板
    // ================================================
    renderGear() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const c = Game.state.char;
      const gears = Game.GEAR_DATA || {};
      const owned = c.gear || {};
      // 先列已装备四槽
      const slots = [
        { key:'weapon', name:'武器', icon:'🗡' },
        { key:'robe',   name:'衣袍', icon:'👘' },
        { key:'focus',  name:'法器', icon:'📖' },
        { key:'crown',  name:'头冠', icon:'👑' },
      ];
      let html = `<div class="xx-tip">⚔ 装备共 4 部位：武器 / 衣袍 / 法器 / 头冠。装备后得相应属性。</div>`;
      html += '<div class="equip-slots">';
      slots.forEach(sl => {
        const gid = c.equippedGear[sl.key];
        const g = gid && gears[gid];
        if (g) {
          html += `
            <div class="equip-slot equipped rarity-${g.rarity}" data-slot="${sl.key}" title="${g.desc}">
              <div class="slot-icon">${g.emoji}</div>
              <div class="slot-name" style="color:var(--xx-gold);">${g.name}</div>
            </div>`;
        } else {
          html += `
            <div class="equip-slot" data-slot="${sl.key}">
              <div class="slot-icon">${sl.icon}</div>
              <div class="slot-name">${sl.name}</div>
            </div>`;
        }
      });
      html += '</div>';
      // 背包（拥有的装备）
      html += '<div style="margin-top:14px;font-family:var(--xx-font-art);font-size:15px;color:var(--xx-gold);letter-spacing:3px;">🎒 背包·装备</div>';
      html += '<div class="inv-grid" style="margin-top:8px;">';
      let hasAny = false;
      Object.keys(gears).forEach(gid => {
        if (!owned[gid]) return;
        hasAny = true;
        const g = gears[gid];
        const equipped = Object.values(c.equippedGear).includes(gid);
        const buffText = Object.entries(g.buff || {}).map(([k,v])=>{
          const map = { atk:'攻击', def:'防御', maxHp:'气血', maxMp:'灵力', crit:'暴击' };
          const val = k==='crit' ? `${Math.round(v*100)}%` : `+${v}`;
          return `${map[k]||k}${val}`;
        }).join(' · ');
        html += `
          <div class="inv-item rarity-${g.rarity}" data-gear="${gid}" title="${g.desc}">
            <div class="inv-icon">${g.emoji}</div>
            <div class="inv-name">${g.name}</div>
            <div class="inv-tag">${buffText}</div>
            <button class="iv-btn" style="margin-top:6px;" data-eq-btn="${gid}">${equipped?'卸下':'装备'}</button>
          </div>`;
      });
      if (!hasAny) html += '<div class="xx-empty" style="grid-column:1/-1;">背包空空如也。<br>去秘境探索、或担当宗门讨伐得到装备。</div>';
      html += '</div>';
      return html;
    },

    bindGear(container, onChange) {
      const gears = Game.GEAR_DATA || {};
      container.querySelectorAll('[data-eq-btn]').forEach(b => {
        b.onclick = (e) => {
          e.stopPropagation();
          const gid = b.dataset.eqBtn;
          const g = gears[gid]; if (!g) return;
          const c = Game.state.char;
          const equipped = c.equippedGear[g.slot] === gid;
          if (equipped) {
            Game.unequipGear(g.slot);
            UI.toast('已卸下', 'info');
          } else {
            const r = Game.equipGear(gid);
            UI.toast(r.msg, r.ok?'success':'error');
          }
          if (onChange) onChange();
        };
      });
    },

    // ================================================
    //  🐉 v3 宠物面板
    // ================================================
    renderPets() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const c = Game.state.char;
      const pets = Game.PET_DATA || {};
      let html = '<div class="xx-tip">🐉 灵宠伴你修行，获取方式见各宠描述。同一时间只能携带一只。</div>';
      if (c.pet) {
        const p = c.pet;
        const nextExp = p.level * 100;
        const pct = Math.round(p.exp/nextExp * 100);
        html += `
          <div class="pet-card">
            <div class="pet-avatar">${p.emoji}</div>
            <div class="pet-info">
              <div class="pet-name">${p.name}</div>
              <div class="pet-lv">Lv.${p.level} · ${p.exp}/${nextExp} EXP</div>
              <div class="pet-stats">
                <span class="pet-stat">⚔ <b>${p.atk}</b></span>
                <span class="pet-stat">❤ <b>${p.hp}</b></span>
              </div>
              <div class="cult-bar" style="height:6px;margin-top:6px;"><div class="cult-bar-fill" style="width:${pct}%"></div></div>
              <button class="iv-btn ghost" style="margin-top:6px;" data-pet-dismiss="1">👋 送走</button>
            </div>
          </div>`;
      }
      html += '<div style="margin-top:14px;font-family:var(--xx-font-art);color:var(--xx-gold);letter-spacing:3px;">🌟 可拜入门下</div>';
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin-top:8px;">';
      Object.keys(pets).forEach(pid => {
        const p = pets[pid];
        const owned = c.pet && c.pet.id === pid;
        html += `
          <div class="pet-card" style="opacity:${owned?0.55:1};">
            <div class="pet-avatar">${p.emoji}</div>
            <div class="pet-info">
              <div class="pet-name">${p.name}</div>
              <div class="pet-lv">${p.rarity==='legend'?'✨传奇':(p.rarity==='epic'?'💎史诗':'频维稀有')}</div>
              <div style="font-size:11px;color:var(--xx-text-soft);line-height:1.6;margin-top:4px;">${p.desc}</div>
              <div style="font-size:10.5px;color:var(--xx-cyan);margin-top:4px;">解锁：${p.unlock}</div>
              <button class="iv-btn" style="margin-top:6px;" data-pet-adopt="${pid}" ${owned?'disabled':''}>${owned?'已拥有':'🤍 拜入门下'}</button>
            </div>
          </div>`;
      });
      html += '</div>';
      return html;
    },

    bindPets(container, onChange) {
      container.querySelectorAll('[data-pet-adopt]').forEach(b => {
        b.onclick = () => {
          const r = Game.adoptPet(b.dataset.petAdopt);
          UI.toast(r.msg, r.ok?'success':'error');
          if (r.ok && onChange) onChange();
        };
      });
      const dis = container.querySelector('[data-pet-dismiss]');
      if (dis) dis.onclick = () => {
        UI.confirm('确定送走当前灵宠？不可恢复。', () => {
          Game.dismissPet();
          UI.toast('宠物已送走', 'info');
          if (onChange) onChange();
        });
      };
    },

    // ================================================
    //  💊 v3 丹药房
    // ================================================
    renderPills() {
      if (Game._ensureAllFields) Game._ensureAllFields();
      const c = Game.state.char;
      const pills = Game.PILL_DATA || {};
      let html = '<div class="xx-tip">💊 丹药可恢复 HP / MP / 道心，或直接增长修为。可在秘境/每日任务/名山大川得到。</div>';
      html += '<div class="inv-grid">';
      let any = false;
      Object.keys(pills).forEach(pid => {
        const p = pills[pid];
        const n = c.pills[pid] || 0;
        if (n <= 0) return;
        any = true;
        const effect = [];
        if (p.hp) effect.push(`HP+${p.hp}`);
        if (p.mp) effect.push(`MP+${p.mp}`);
        if (p.daoxin) effect.push(`道心+${p.daoxin}`);
        if (p.exp) effect.push(`修为+${p.exp}`);
        html += `
          <div class="inv-item rarity-${p.rarity}">
            <div class="inv-count">×${n}</div>
            <div class="inv-icon">${p.emoji}</div>
            <div class="inv-name">${p.name}</div>
            <div class="inv-tag">${effect.join(' · ')}</div>
            <button class="iv-btn" style="margin-top:6px;" data-use-pill="${pid}">服用</button>
          </div>`;
      });
      if (!any) html += '<div class="xx-empty" style="grid-column:1/-1;">丹室空空。<br>去秘境探索、或完成每日任务获取丹药。</div>';
      html += '</div>';
      return html;
    },

    bindPills(container, onChange) {
      container.querySelectorAll('[data-use-pill]').forEach(b => {
        b.onclick = () => {
          const r = Game.usePill(b.dataset.usePill);
          UI.toast(r.msg, r.ok?'success':'error');
          if (r.ok && onChange) onChange();
        };
      });
    },

    // ================================================
    //  ⚔ v3 战斗场景
    // ================================================
    //  ⚔ v4.0 · 二次元修仙 · 沉浸式斩妖场
    //  用法：UI.openBattle({ enemy:{name,pixel,hp,atk,diff,sect}, getQuestion, onWin, onLose, onClose })
    //  改进点：
    //   1) 使用 PixelArt 像素妖兽替代 emoji（更沉浸）
    //   2) 每道题上方自动挂 AutoViz 可视化图（辅助理解）
    //   3) 战斗日志历史（最新5条），非单行覆盖
    //   4) Boss 战自动震屏 + 血红光晕 + 危险符文
    //   5) 修复：技能选择状态、连续答题时的题目切换、mask 泄露
    //   6) 答题正确触发学科专属特效粒子（雷/火/丹/风）
    // ================================================
    openBattle(opts) {
      const _fmt = (Game.formatBigNum) ? Game.formatBigNum.bind(Game) : (x=>String(x));
      opts = opts || {};
      if (opts.question && !opts.enemy) {
        const q = opts.question;
        const sect = opts.sect || 'physics';
        const diff = opts.difficulty || q.difficulty || 'normal';
        const singleHp = 5;
        opts.enemy = { name: opts.monsterName || '妖兽', hp: singleHp, maxHp: singleHp, atk: { easy:10, normal:16, hard:26, boss:36 }[diff] || 16, diff, sect };
        let served = false;
        opts.getQuestion = () => { if (served) return null; served = true; return q; };
        let answered = false;
        const done = opts.onDone;
        opts._trialSingle = true;
        opts.onWin  = () => { if (!answered && done) { answered = true; done(true);  } };
        opts.onLose = () => { if (!answered && done) { answered = true; done(false); } };
        opts.onClose = (ok) => { if (!answered && done) { answered = true; done(!!ok); } };
      }

      const enemy = Object.assign({ name:'妖兽', emoji:'👿', hp:100, maxHp:100, atk:12, diff:'normal', sect:'physics' }, opts.enemy || {});
      enemy.maxHp = enemy.maxHp || enemy.hp;
      const c = Game.state.char;
      const isBoss = enemy.diff === 'boss';
      const isHard = enemy.diff === 'hard';

      let enemyVisual = '';
      if (typeof PixelArt !== 'undefined' && PixelArt.monster) {
        try { enemyVisual = PixelArt.monster(enemy.diff, enemy.sect); } catch (e) {}
      }
      if (!enemyVisual) enemyVisual = `<div style="font-size:82px;filter:drop-shadow(0 0 20px ${isBoss?'#e25b5b':'#b288ff'});">${enemy.emoji}</div>`;

      const sectColor = { physics:'#7fb3ff', chemistry:'#ff9a5e', geography:'#8ce28c', chinese:'#f5c97a', math:'#b288ff', english:'#ff9ec6' };
      const clr = sectColor[enemy.sect] || '#f5c97a';
      const mask = document.createElement('div');
      mask.className = 'xx-modal-mask v43-battle-mask';
      const scene = document.createElement('div');
      scene.className = 'xx-modal v43-battle-modal ' + (isBoss?'is-boss':(isHard?'is-hard':'is-normal'));
      scene.style.maxWidth = '860px';
      scene.style.padding = '0';

      // v4.2.6：法术系统大扩充 —— 每一大境界开启新法术，消耗与伤害均指数提升
      //   消耗 mp 随境界乘子同步（你的 maxMp 也指数了）
      //   伤害倍率历史上升，高境界法术 15×、甚至 上限。
      const realmId = Game.state.char.realmId || 0;
      const rmForMp = (typeof Game !== 'undefined' && Game.getRealmMultiplier) ? Game.getRealmMultiplier() : 1;
      const _mpScale = Math.max(1, Math.sqrt(rmForMp));  // 用 sqrt 限制 mp 消耗不至于完全同境界乘子（否则满 mp 一手把就空了）
      const _scaleMp = (base) => Math.max(1, Math.round(base * _mpScale));
      const _scaleHeal = (base) => Math.max(1, Math.round(base * rmForMp));

      const skillPool = [
        { key:'basic',     label:'⚔ 平取',   cost: 0,               mul: 1.0, desc:'免费·1×' },
        { key:'lightning', label:'⚡ 天雷诀', cost: _scaleMp(20),    mul: 2.0, desc: `${_scaleMp(20)}MP·2×` },
        { key:'fireball',  label:'🔥 火球术', cost: _scaleMp(18),    mul: 1.7, desc: `${_scaleMp(18)}MP·1.7×` },
        { key:'heal',      label:'💚 小循环', cost: _scaleMp(16),    heal: _scaleHeal(60), desc: `${_scaleMp(16)}MP·+${_scaleHeal(60)}HP` },
      ];
      // 炼气后期 (id≥15)：毒雾丹 - 中毒伤害多回合
      if (realmId >= 15) skillPool.splice(3, 0, { key:'poison', label:'☠ 毒雾丹', cost: _scaleMp(24), mul: 1.4, dot: 3, desc: `${_scaleMp(24)}MP·1.4×·中毒3T` });
      // 筑基 (id≥31)：冰魄诀 - 高伤 + 冻伤（下回合妖兽不反击）
      if (realmId >= 31) skillPool.splice(4, 0, { key:'ice', label:'❄ 冰魄诀', cost: _scaleMp(32), mul: 2.9, freeze: true, desc: `${_scaleMp(32)}MP·2.9×·冻伤` });
      // 筑基后期 (id≥45)：金钟罩 - 本回合免伤
      if (realmId >= 45) skillPool.splice(5, 0, { key:'shield', label:'🛡 金钟罩', cost: _scaleMp(36), mul: 1.0, guard: true, desc: `${_scaleMp(36)}MP·免伤1回合` });
      // 金丹 (id≥61)：御风斩 - 高伤 + 不反击
      if (realmId >= 61) skillPool.splice(6, 0, { key:'wind', label:'🌪 御风斩', cost: _scaleMp(48), mul: 3.6, evade: true, desc: `${_scaleMp(48)}MP·3.6×·避反击` });
      // 金丹后期 (id≥75)：日焰斩 - 双击
      if (realmId >= 75) skillPool.splice(7, 0, { key:'sun', label:'☀ 日焰斩', cost: _scaleMp(56), mul: 4.5, multi: 2, desc: `${_scaleMp(56)}MP·4.5×·双击` });
      // 元婴 (id≥91)：星陨术 - 巨伤
      if (realmId >= 91) skillPool.push({ key:'star', label:'🌠 星陨术', cost: _scaleMp(72), mul: 5.5, desc: `${_scaleMp(72)}MP·5.5×` });
      // 元婴后期 (id≥105)：阴阳一剑 - 必暴击
      if (realmId >= 105) skillPool.push({ key:'yin_yang', label:'☯ 阴阳一剑', cost: _scaleMp(90), mul: 6.5, alwaysCrit: true, desc: `${_scaleMp(90)}MP·6.5×·必暴` });
      // 化神 (id≥121)：九天雷劈 - 真伤（无视防御）
      if (realmId >= 121) skillPool.push({ key:'skyfall', label:'🌩 九天雷劈', cost: _scaleMp(120), mul: 7.5, trueDmg: true, desc: `${_scaleMp(120)}MP·7.5×·真伤` });
      // 渡劫 (id≥151)：天道联管 - 巨伤但反噬
      if (realmId >= 151) skillPool.push({ key:'karma', label:'🌀 天道联管', cost: _scaleMp(180), mul: 10.0, selfHurt: 0.15, desc: `${_scaleMp(180)}MP·10×·反噬15%` });
      // 登仙 (id≥211)：创世初开 - 绝对巨伤
      if (realmId >= 211) skillPool.push({ key:'genesis', label:'🌟 创世初开', cost: _scaleMp(280), mul: 15.0, trueDmg: true, alwaysCrit: true, desc: `${_scaleMp(280)}MP·15×·真伤必暴` });

      const skillHtml = skillPool.map(s => `<span class="skill-btn v43-skill ${s.key==='basic'?'active':''}${s.key==='heal'?' heal-btn':''}" data-skill="${s.key}">${s.label}<br><span class="skill-cost">${s.desc}</span></span>`).join('');

      // v4.2.6：妖兽特殊技能库 —— 根据难度随机分配
      //   normal：30% 概率 1 个  hard：必带 1 个  boss：必带 2 个  legend：必带 3 个
      const MONSTER_SKILL_POOL = [
        { key:'rage',      name:'血脉狂暴', desc:'低血时攻击翻倍', triggerHp:0.4 },
        { key:'heal_self', name:'魂能回复', desc:'每 4 回合回复 25% 气血',  cd:4 },
        { key:'crit',      name:'一击必杀', desc:'20% 几率伤害×3' },
        { key:'enrage',    name:'无尽暴怒', desc:'每回合自身攻击+12%', stack:true },
        { key:'toxin',     name:'妖雾腐髃', desc:'命中时 40% 导致你中毒3T' },
        { key:'drain',     name:'吸血之刃', desc:'造成伤害时回复 50%自血' },
        { key:'weaken',    name:'术法封印', desc:'首回合降你攻击 25%' },
        { key:'dodge',     name:'鬼娅避影', desc:'22% 几率避开你一次攻击' },
      ];
      function _pickMonsterSkills() {
        if (enemy.diff === 'easy') return [];
        const pool = MONSTER_SKILL_POOL.slice();
        let n = 0;
        if (enemy.diff === 'normal') n = Math.random() < 0.3 ? 1 : 0;
        else if (enemy.diff === 'hard') n = 1;
        else if (enemy.diff === 'boss') n = 2;
        else if (enemy.diff === 'legend') n = 3;
        const picks = [];
        for (let i=0; i<n && pool.length; i++) {
          const idx = Math.floor(Math.random() * pool.length);
          picks.push(pool.splice(idx, 1)[0]);
        }
        return picks;
      }
      enemy.skills = enemy.skills || _pickMonsterSkills();
      // 妖兽状态机
      const _es = {
        turns: 0,
        atkBuff: 1.0,       // enrage 叠加（1.0，每回合 +0.12）
        heroPoison: 0,       // toxin 对你的中毒剩余回合
        heroAtkDebuff: 1.0,  // weaken 你的攻击降发
        frozen: false,       // ice 施加：本回合妖兽不反击
        playerGuard: false,  // shield：本回合免伤
      };
      // 首回合 weaken 触发
      if ((enemy.skills || []).some(sk => sk.key === 'weaken')) { _es.heroAtkDebuff = 0.75; }
      // 预告玩家：妖兽携带的技能（玩家真实能直接看到“什么妖兽带什么”）
      const enemySkillTipHtml = (enemy.skills && enemy.skills.length)
        ? `<div class="v43-enemy-skills" style="margin-top:6px;font-size:11px;line-height:1.5;color:#ffd88a;text-shadow:0 0 8px rgba(0,0,0,.55);">${enemy.skills.map(sk=>`◆ <b>${sk.name}</b>：<span style="color:#e0b0ff">${sk.desc}</span>`).join('<br>')}</div>`
        : '';

      scene.innerHTML = `
        <button class="xx-modal-close">×</button>
        <div class="battle-scene v43-scene ${isBoss?'boss-scene':''}">
          <div class="v43-battle-bg">
            <div class="v43-bg-clouds"></div>
            <div class="v43-bg-mountain" style="border-color:${clr};"></div>
          </div>
          <div class="v43-battle-header">
            <div class="v43-battle-title" style="color:${clr};">
              ${isBoss?'💀 ':(isHard?'⚡ ':'⚔ ')}${enemy.name}
              <span style="font-size:12px;color:var(--xx-text-dim);margin-left:8px;">${isBoss?'· 妖王':isHard?'· 精英':'· 妖兽'} · ${enemy.sect}宗</span>
            </div>
          </div>
          <div class="battle-stage v43-stage">
            <div class="battle-hero v43-hero">
              <div class="v43-hero-portrait hero-portrait" style="padding:0;overflow:hidden;">
                <img src="${__ASSET_PREFIX}hero.jpg" alt="主角立绘" style="width:100%;height:100%;object-fit:cover;display:block;">
              </div>
              <div class="battle-name">${c.name} <span style="color:var(--xx-cyan);font-size:11px;">${Game.getRealmName ? Game.getRealmName() : ''}</span></div>
              <div class="battle-hp-wrap">
                <div class="battle-hp"><div class="battle-hp-fill hero-hp" style="width:${c.hp/c.maxHp*100}%"></div></div>
                <div class="battle-mp"><div class="battle-mp-fill hero-mp" style="width:${c.mp/c.maxMp*100}%"></div></div>
                <div class="battle-hp-label"><span class="hero-hp-txt">❤ ${_fmt(c.hp)}/${_fmt(c.maxHp)}</span><span class="hero-mp-txt">💧 MP ${_fmt(c.mp)}/${_fmt(c.maxMp)}</span></div>
              </div>
            </div>
            <div class="v43-vs-mark">VS</div>
            <div class="battle-enemy v43-enemy tier-${enemy.tier || (isBoss?'boss':isHard?'elite':'normal')}">
              <div class="v43-enemy-portrait enemy-portrait">${enemyVisual}</div>
              <div class="battle-name" style="color:${isBoss?'#e25b5b':clr};">${enemy.name}</div>
              ${(enemy.titles && enemy.titles.length) ? `<div class="v43-enemy-titles">${enemy.titles.map(t => `<span class="v43-enemy-title ${t.cls}">${t.text}</span>`).join('')}</div>` : ''}
              ${enemySkillTipHtml}
              <div class="battle-hp-wrap">
                <div class="battle-hp"><div class="battle-hp-fill enemy-hp ${isBoss?'boss-hp':''}" style="width:100%"></div></div>
                <div class="battle-hp-label"><span class="enemy-hp-txt">❤ ${_fmt(enemy.hp)}/${_fmt(enemy.maxHp)}</span><span>⚔ ATK ${_fmt(enemy.atk)}</span></div>
              </div>
            </div>
          </div>
          <div class="battle-control v43-control">
            <div class="skill-bar v43-skill-bar">${skillHtml}</div>
            <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap;">
              <div class="v43-battle-log battle-log" style="flex:1 1 420px;"></div>
              <div class="v43-battle-emote" style="width:96px;min-height:96px;display:flex;align-items:center;justify-content:center;flex:0 0 96px;">
                <img id="battleEmoteImg" src="${__EMOTES.idle}" alt="战斗表情" style="width:88px;height:88px;object-fit:contain;border-radius:18px;filter:drop-shadow(0 0 10px rgba(255,255,255,.12));">
              </div>
            </div>
            <div class="v43-viz-wrap"></div>
            <div class="battle-question-wrap v43-question-wrap"></div>
          </div>
        </div>`;
      mask.appendChild(scene);
      document.body.appendChild(mask);

      let selectedSkill = 'basic';
      let currentQuestion = null;
      const logHistory = [];
      const heroEl = scene.querySelector('.hero-portrait');
      const enemyEl = scene.querySelector('.enemy-portrait');
      const heroHpFill = scene.querySelector('.hero-hp');
      const heroMpFill = scene.querySelector('.hero-mp');
      const heroHpTxt = scene.querySelector('.hero-hp-txt');
      const heroMpTxt = scene.querySelector('.hero-mp-txt');
      const enemyHpFill = scene.querySelector('.enemy-hp');
      const enemyHpTxt = scene.querySelector('.enemy-hp-txt');
      const logEl = scene.querySelector('.v43-battle-log');
      const vizWrap = scene.querySelector('.v43-viz-wrap');
      const qWrap = scene.querySelector('.battle-question-wrap');
      const closeBtn = scene.querySelector('.xx-modal-close');
      const emoteImg = scene.querySelector('#battleEmoteImg');
      let busy = false;
      let _multiPicked = new Set();

      function setEmote(kind) {
        if (!emoteImg) return;
        emoteImg.src = (__EMOTES[kind] || __EMOTES.idle);
      }
      function pushLog(msg, cls) {
        logHistory.unshift(`<div class="v43-log-line ${cls||''}">${msg}</div>`);
        if (logHistory.length > 5) logHistory.length = 5;
        logEl.innerHTML = logHistory.join('');
      }
      function updHero() {
        heroHpFill.style.width = (c.hp/c.maxHp*100)+'%';
        heroMpFill.style.width = (c.mp/c.maxMp*100)+'%';
        heroHpTxt.textContent = `❤ ${_fmt(c.hp)}/${_fmt(c.maxHp)}`;
        heroMpTxt.textContent = `💧 MP ${_fmt(c.mp)}/${_fmt(c.maxMp)}`;
      }
      function updEnemy() {
        enemyHpFill.style.width = (enemy.hp/enemy.maxHp*100)+'%';
        enemyHpTxt.textContent = `❤ ${_fmt(enemy.hp)}/${_fmt(enemy.maxHp)}`;
      }
      function floatText(target, text, cls) {
        const t = document.createElement('div');
        t.className = 'dmg-float v43-float ' + (cls||'dmg');
        t.textContent = text;
        const rect = target.getBoundingClientRect();
        const parent = scene.querySelector('.battle-scene');
        const parentRect = parent.getBoundingClientRect();
        t.style.left = (rect.left - parentRect.left + rect.width/2) + 'px';
        t.style.top = (rect.top - parentRect.top - 20) + 'px';
        parent.appendChild(t);
        setTimeout(()=>t.remove(), 1400);
      }
      const SPELL_ICON = { fireball:'🔥', lightning:'⚡', ice:'❄️', wind:'🌪', star:'🌠', physics:'⚡', chemistry:'⚗', geography:'🌏', chinese:'📜', math:'🔢', english:'🌐' };
      function spellFx(kind) {
        const wrap = scene.querySelector('.battle-scene');
        const el = document.createElement('div');
        el.className = 'spell-fx v43-spell-fx ' + kind;
        el.style.fontSize = '68px';
        el.style.color = ({fireball:'#f39c56', lightning:'#f5c97a', ice:'#6ed5e0', wind:'#8ce28c', star:'#ff9ec6'})[kind] || '#fff';
        el.style.textShadow = '0 0 20px currentColor';
        el.textContent = SPELL_ICON[kind] || '✨';
        wrap.appendChild(el);
        setTimeout(()=>el.remove(), 900);
      }

      scene.querySelectorAll('.v43-skill').forEach(b => {
        b.onclick = () => {
          if (busy) return;
          const skill = b.dataset.skill;
          const skillDef = skillPool.find(x => x.key === skill) || skillPool[0];
          if (skill === 'heal') {
            if (c.mp < skillDef.cost) { UI.toast('灵力不足', 'error'); setEmote('plead'); return; }
            c.mp -= skillDef.cost;
            c.hp = Math.min(c.maxHp, c.hp + (skillDef.heal || 40));
            Game.save();
            updHero();
            floatText(heroEl, `+${skillDef.heal||40} HP`, 'heal');
            pushLog(`💚 施展${skillDef.label.replace(/^.+? /,'')} · HP +${skillDef.heal||40}`, 'heal');
            setEmote('heal');
            return;
          }
          scene.querySelectorAll('.v43-skill').forEach(x=>x.classList.remove('active'));
          b.classList.add('active');
          selectedSkill = skill;
          pushLog(`🪄 已准备：${skillDef.label}（${skillDef.desc}）`, 'info');
          setEmote(skill === 'basic' ? 'idle' : 'think');
        };
      });

      function _normOpts(q) {
        const raw = q.options || [];
        if ((q.type === 'judge') && !raw.length) return [{k:'A', v:'○ 正确'}, {k:'B', v:'✕ 错误'}];
        return raw.map((o, i) => {
          if (typeof o === 'object' && o && 'k' in o) return { k:String(o.k), v:String(o.v) };
          const s = String(o).trim();
          const m = s.match(/^([A-Z对错])[\.、:：\s]+(.+)$/);
          if (m) return { k:m[1], v:m[2] };
          return { k:String.fromCharCode(65+i), v:s };
        });
      }
      function _normAns(q) {
        let a = q.answer;
        const type = q.type || 'single';
        if (type === 'judge') {
          if (a === true || a === '对' || a === '正确' || a === 'A' || a === '是') return new Set(['A']);
          return new Set(['B']);
        }
        if (Array.isArray(a)) return new Set(a.map(x => String(x).toUpperCase()));
        if (typeof a === 'string') return new Set((a.match(/[A-Z]/g) || []).map(x => String(x).toUpperCase()));
        return new Set();
      }
      function _esc(s) { return String(s).replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
      function _answerDisplay(q) {
        if (Array.isArray(q.answer)) return q.answer.join(' / ');
        return String(q.answer == null ? '' : q.answer);
      }
      function _genericExplain(q, correctAnsDisplay) {
        return q.explain ? q.explain : `此题正确答案为 <b style="color:#f5c97a;">${_esc(correctAnsDisplay)}</b>，请回看题干与图示，确认考点是否是「${_esc(q.tag || q.chapter || q.manualId || '本章核心知识')}」。`;
      }

      function loadQuestion() {
        busy = false;
        setEmote('idle');
        const q = opts.getQuestion ? opts.getQuestion() : opts.question;
        if (!q) {
          if (opts._trialSingle) return;
          finishBattle(true);
          return;
        }
        currentQuestion = q;
        if (typeof AutoViz !== 'undefined' && AutoViz.render) {
          try { vizWrap.innerHTML = AutoViz.render(q); } catch(e) { vizWrap.innerHTML = ''; }
        } else vizWrap.innerHTML = '';
        renderQuestion(q);
      }

      function renderQuestion(q) {
        busy = false;
        _multiPicked = new Set();
        const opts2 = _normOpts(q);
        const type = q.type || 'single';
        const badge = q.local_fj ? '<span class="v43-badge fj">🏯 福建/莆田本地题</span>' : (q.gaokao ? '<span class="v43-badge gk">🎯 高考真题</span>' : '');
        const typeBadge = { single:'单选', multi:'多选', judge:'判断', fill:'填空', calc:'计算', solve:'解答', essay:'论述' }[type] || '题目';
        const typeHtml = `<span class="v43-badge" style="background:rgba(178,136,255,0.15);border:1px solid #b288ff;color:#b288ff;">${typeBadge}</span>`;
        let body = `<div class="battle-question v43-question">${badge}${typeHtml}${q.q}</div>`;

        if (type === 'calc' || type === 'solve' || type === 'essay') {
          body += `
            <div class="xx-tip" style="margin:6px 12px 10px;background:rgba(245,201,122,.10);border-color:rgba(245,201,122,.35);">
              📐 这是自评题：先写思路，再看参考解，最后自行判定对错。
            </div>
            <div style="margin:0 12px;">
              <textarea id="__calcInput" placeholder="在此写出解题过程与最终答案……" style="width:100%;min-height:130px;padding:12px;border-radius:10px;background:rgba(0,0,0,.35);border:1px solid rgba(245,201,122,.28);color:var(--xx-text);line-height:1.8;"></textarea>
              <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">
                <button class="xx-btn" id="__showRef">📖 查看参考解</button>
              </div>
              <div id="__refArea" style="display:none;margin-top:10px;padding:12px;border-radius:10px;border:1px dashed rgba(245,201,122,.35);background:rgba(245,201,122,.06);">
                <div style="color:#f5c97a;font-weight:700;margin-bottom:8px;">📜 参考答案</div>
                <div style="white-space:pre-wrap;line-height:1.9;">${_esc(_answerDisplay(q) || '（暂无参考答案）')}</div>
                ${q.explain ? `<div style="margin-top:10px;padding-top:10px;border-top:1px dashed rgba(245,201,122,.2);line-height:1.85;"><b style="color:#f5c97a;">📖 解析：</b>${q.explain}</div>` : ''}
                <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;">
                  <button class="xx-btn xx-btn-primary" id="__selfRight">✅ 我答对了</button>
                  <button class="xx-btn xx-btn-danger" id="__selfWrong">❌ 我答错了</button>
                </div>
              </div>
            </div>`;
          qWrap.innerHTML = body;
          qWrap.querySelector('#__showRef').onclick = () => {
            qWrap.querySelector('#__refArea').style.display = 'block';
            qWrap.querySelector('#__showRef').disabled = true;
            setEmote('peek');
          };
          qWrap.querySelector('#__selfRight').onclick = () => {
            const ua = (qWrap.querySelector('#__calcInput').value || '(未填写)').trim();
            resolveQuestion(q, ua, true, null, true);
          };
          qWrap.querySelector('#__selfWrong').onclick = () => {
            const ua = (qWrap.querySelector('#__calcInput').value || '(未填写)').trim();
            resolveQuestion(q, ua, false, null, true);
          };
          return;
        }

        if (type === 'fill' || !opts2.length) {
          body += `
            <div style="margin:8px 12px 0;">
              <input type="text" class="v43-fill-input" id="__fillInput" placeholder="输入答案后点提交" autocomplete="off"
                style="width:100%;padding:10px;background:rgba(0,0,0,0.4);border:1px solid rgba(245,201,122,0.35);border-radius:6px;color:var(--xx-text);font-size:14px;">
              <button class="xx-btn xx-btn-primary" id="__fillSubmit" style="margin-top:6px;width:100%;">✓ 出招印证</button>
            </div>`;
          qWrap.innerHTML = body;
          const input = qWrap.querySelector('#__fillInput');
          const submit = qWrap.querySelector('#__fillSubmit');
          const doFill = () => {
            const val = (input.value || '').trim();
            if (!val) { UI.toast('请先填写答案', 'warn'); return; }
            const correct = Game.judgeAnswer ? Game.judgeAnswer(q, val) : (val === String(q.answer||'').trim());
            resolveQuestion(q, val, correct, submit, false);
          };
          input.addEventListener('keydown', e => { if (e.key === 'Enter') doFill(); });
          submit.onclick = doFill;
          setTimeout(()=>input.focus(), 80);
          return;
        }

        body += `<div class="battle-options v43-options">${opts2.map(o => `<div class="battle-option v43-option" data-opt="${o.k}">${o.k}. ${o.v}</div>`).join('')}</div>`;
        if (type === 'multi') body += `<button class="xx-btn xx-btn-primary" id="__multiSubmit" style="margin:8px 12px 0;width:calc(100% - 24px);">✓ 出招印证（多选）</button>`;
        qWrap.innerHTML = body;
        qWrap.querySelectorAll('.v43-option').forEach(op => {
          op.onclick = () => {
            if (busy) return;
            if (type === 'multi') {
              const k = op.dataset.opt;
              if (_multiPicked.has(k)) { _multiPicked.delete(k); op.classList.remove('picked'); }
              else { _multiPicked.add(k); op.classList.add('picked'); }
            } else {
              const pick = op.dataset.opt;
              const ansSet = _normAns(q);
              const correct = ansSet.has(String(pick).toUpperCase()) || ansSet.has(String(pick));
              resolveQuestion(q, pick, correct, op, false);
            }
          };
        });
        if (type === 'multi') {
          qWrap.querySelector('#__multiSubmit').onclick = () => {
            if (!_multiPicked.size) { UI.toast('请至少选一项', 'warn'); return; }
            const pick = Array.from(_multiPicked).sort().join('');
            const ansSet = _normAns(q);
            const pickSet = new Set(String(pick).match(/[A-Z]/g) || []);
            const correct = (pickSet.size === ansSet.size) && [...pickSet].every(k => ansSet.has(k));
            resolveQuestion(q, pick, correct, qWrap.querySelector('#__multiSubmit'), false);
          };
        }
      }

      function resolveQuestion(q, pick, correct, el, isSelfEval) {
        if (busy) return;
        busy = true;
        const ansSet = _normAns(q);
        const correctAnsDisplay = _answerDisplay(q);
        qWrap.querySelectorAll('.v43-option').forEach(op => {
          op.style.pointerEvents = 'none';
          if (ansSet.has(op.dataset.opt) || ansSet.has(String(op.dataset.opt).toUpperCase())) op.classList.add('correct');
          const pickedStr = Array.isArray(pick) ? pick.join('') : String(pick || '');
          if (pickedStr.includes(op.dataset.opt) && !(ansSet.has(op.dataset.opt) || ansSet.has(String(op.dataset.opt).toUpperCase()))) op.classList.add('wrong');
        });
        const rep = Game.answerReport ? Game.answerReport(q, correct) : { expGain:0, shiGain:0, daoxinGain:0, streak:0 };
        let playerDmg = 0, counterDmg = 0, spell = null, r = null, dead = false;
        const skillDef = skillPool.find(x => x.key === selectedSkill) || skillPool[0];
        _es.turns++;
        // v4.2.6：妖兽 enrage 每回合自身攻击+12%
        if ((enemy.skills||[]).some(sk=>sk.key==='enrage')) _es.atkBuff += 0.12;

        if (correct) {
          let skillMul = skillDef.mul || 1;
          let mpCost = skillDef.cost || 0;
          if (c.mp < mpCost || skillDef.heal) { skillMul = 1; mpCost = 0; }
          spell = skillDef.key !== 'basic' ? skillDef.key : null;
          // v4.2.6：妖兽 dodge（鬼魅避影）22% 概率避开你的攻击
          const dodged = (enemy.skills||[]).some(sk=>sk.key==='dodge') && Math.random() < 0.22;
          if (dodged) {
            playerDmg = 0;
            pushLog(`💫 ${enemy.name}施展鬼魅避影，你的攻击落空！`, 'bad');
            floatText(enemyEl, 'MISS', 'dmg');
            if (mpCost > 0) c.mp = Math.max(0, c.mp - mpCost);
            updEnemy(); updHero();
          } else {
            r = Game.battleCast({ skillMul, mpCost });
            playerDmg = r.dmg;
            // v4.2.6 新法术效果：
            //   trueDmg：真伤——忽略妖兽防御（直接用 atk × skillMul）
            //   alwaysCrit：必暴击——伤害 ×1.6（若本来不暴）
            //   multi：多击——额外再打 (multi-1) 回小伤害
            if (skillDef.trueDmg) {
              const base = c.atk * skillMul;
              playerDmg = Math.max(1, Math.round(base));
              if (r) r.crit = false;
            }
            if (skillDef.alwaysCrit && !(r && r.crit)) {
              playerDmg = Math.round(playerDmg * 1.6);
              if (r) r.crit = true;
            }
            if (skillDef.multi && skillDef.multi > 1) {
              let extraDmg = 0;
              for (let mi=1; mi<skillDef.multi; mi++) {
                extraDmg += Math.round(playerDmg * 0.55);
              }
              playerDmg += extraDmg;
            }
            if (spell) spellFx(spell);
            enemy.hp = Math.max(0, enemy.hp - playerDmg);
            updEnemy(); updHero();
            const critFlag = r && r.crit;
            const dmgLabel = (critFlag?'暴击! ':'') + (skillDef.trueDmg?'[真伤] ':'') + (skillDef.multi?'[多击] ':'') + '-' + playerDmg;
            floatText(enemyEl, dmgLabel, critFlag ? 'crit' : 'dmg');
            pushLog(`✅ 答对！对${enemy.name}造成 <b style="color:#f5c97a;">${playerDmg}</b> 伤害${skillDef.trueDmg?' <span style="color:#e0b0ff">【真伤】</span>':''}${skillDef.multi?' <span style="color:#f5c97a">【多击】</span>':''}`, 'good');
            setEmote('correct');
            // v4.2.6 自伤：天道剭削反噬
            if (skillDef.selfHurt && skillDef.selfHurt > 0) {
              const back = Math.round(c.maxHp * skillDef.selfHurt);
              c.hp = Math.max(1, c.hp - back);
              floatText(heroEl, '-'+back+' [反噬]', 'dmg');
              pushLog(`🌀 天道反噬，你损失 <b style="color:#ffb0b0;">${back}</b> HP`, 'bad');
              updHero();
            }
          }

          // 妖兽反击流程
          if (enemy.hp > 0) {
            // v4.2.6：妖兽 heal_self——每 4 回合自回 25% 血
            const healSkill = (enemy.skills||[]).find(sk=>sk.key==='heal_self');
            if (healSkill && _es.turns % 4 === 0) {
              const healAmt = Math.round(enemy.maxHp * 0.25);
              enemy.hp = Math.min(enemy.maxHp, enemy.hp + healAmt);
              updEnemy();
              floatText(enemyEl, '+'+healAmt+' [自治]', 'heal');
              pushLog(`🧬 ${enemy.name}施展魂能回复，恢复 <b style="color:#8ce28c;">${healAmt}</b> 气血`, 'bad');
            }
            // v4.2.6：妖兽 rage 低血狂暴
            const rageSkill = (enemy.skills||[]).find(sk=>sk.key==='rage');
            let rageMul = 1.0;
            if (rageSkill && enemy.hp / enemy.maxHp < rageSkill.triggerHp) {
              rageMul = 2.0;
              if (_es.turns % 2 === 1) pushLog(`🔥 ${enemy.name}陷入狂暴，攻击翻倍！`, 'bad');
            }
            // 妖兽 crit：20% 伤害 ×3
            const critSkill = (enemy.skills||[]).find(sk=>sk.key==='crit');
            let critHit = false;
            if (critSkill && Math.random() < 0.20) critHit = true;
            let retaliation = Math.max(1, Math.round(enemy.atk * (isBoss ? 1.08 : (isHard ? 0.82 : 0.68)) * _es.atkBuff * rageMul));
            if (critHit) retaliation = Math.round(retaliation * 3);
            // v4.2.6：玩家 evade（御风斩）/freeze（冰魄诀），妖兽不反击
            // v4.2.6：玩家 guard（金钟罩），本回合免伤
            if (skillDef.evade || skillDef.freeze) {
              counterDmg = 0;
              pushLog(`❄ ${skillDef.freeze?'冰魄诀':'御风斩'}神效！${enemy.name}本回合无法反击`, 'good');
            } else if (skillDef.guard) {
              counterDmg = 0;
              pushLog(`🛡 金钟罩守护！${enemy.name}攻击被完全化解`, 'good');
            } else {
              // v4.2.6：妖兽 toxin——命中时 40% 使你中毒
              const toxinSkill = (enemy.skills||[]).find(sk=>sk.key==='toxin');
              if (toxinSkill && Math.random() < 0.40 && _es.heroPoison <= 0) {
                _es.heroPoison = 3;
                pushLog(`☠ ${enemy.name}制造妖雾，你中毒！（3 回合持续接伤）`, 'bad');
              }
              const hit = Game.battleTakeHit(retaliation);
              counterDmg = hit.dmg;
              dead = hit.dead;
              // v4.2.6：妖兽 drain——造成伤害时回复自气血 50%
              const drainSkill = (enemy.skills||[]).find(sk=>sk.key==='drain');
              if (drainSkill && counterDmg > 0) {
                const drainAmt = Math.round(counterDmg * 0.5);
                enemy.hp = Math.min(enemy.maxHp, enemy.hp + drainAmt);
                updEnemy();
                floatText(enemyEl, '+'+drainAmt+' [吸血]', 'heal');
                pushLog(`🩸 ${enemy.name}吸血！回复 <b style="color:#e25b5b;">${drainAmt}</b> HP`, 'bad');
              }
              updHero();
              floatText(heroEl, (critHit?'【必杀】':'')+'-' + counterDmg, critHit ? 'crit' : 'dmg');
              pushLog(`👿 ${enemy.name}${critHit?' <b style="color:#f39c56">一击必杀</b>':''}反扑，造成 <b style="color:#e25b5b;">${counterDmg}</b> 伤害`, 'bad');
            }
            // v4.2.6：玩家中毒逐回合掉血
            if (_es.heroPoison > 0) {
              const poisonDmg = Math.max(1, Math.round(c.maxHp * 0.05));
              const ph = Game.battleTakeHit ? Game.battleTakeHit(poisonDmg) : { dmg:poisonDmg, dead:false };
              _es.heroPoison--;
              if (ph.dead) dead = true;
              floatText(heroEl, '-'+ph.dmg+' [毒]', 'dmg');
              pushLog(`☠ 中毒持续接伤 <b style="color:#b288ff;">${ph.dmg}</b> HP（剩 ${_es.heroPoison} 回合）`, 'bad');
              updHero();
            }
            // v4.2.6：玩家毒雾丹施予妖兽中毒 dot
            if (skillDef.dot && skillDef.dot > 0) {
              enemy._dot = skillDef.dot; enemy._dotSrc = playerDmg;
            }
            if (enemy._dot > 0) {
              const dotDmg = Math.max(1, Math.round((enemy._dotSrc||playerDmg) * 0.25));
              enemy.hp = Math.max(0, enemy.hp - dotDmg);
              enemy._dot--;
              floatText(enemyEl, '-'+dotDmg+' [毒]', 'crit');
              pushLog(`☠ ${enemy.name} 中毒接伤 <b style="color:#b288ff;">${dotDmg}</b> HP（剩 ${enemy._dot} 回合）`, 'good');
              updEnemy();
              if (enemy.hp <= 0) {
                enemyEl.classList.add('defeat');
                pushLog('⚔ <b style="color:#ff9ec6;">妖兽已被毒杀！</b>', 'win');
              }
            }
          } else {
            enemyEl.classList.add('defeat');
            if (isBoss) UI.explodeAt && UI.explodeAt(enemyEl);
            pushLog('⚔ <b style="color:#ff9ec6;">妖兽已斩！</b>', 'win');
          }
        } else {
          // 答错——妖兽全力一击（含 enrage/rage/crit 加成）
          let rageMul = 1.0;
          const rageSkill = (enemy.skills||[]).find(sk=>sk.key==='rage');
          if (rageSkill && enemy.hp / enemy.maxHp < rageSkill.triggerHp) rageMul = 2.0;
          const critSkill = (enemy.skills||[]).find(sk=>sk.key==='crit');
          const critHit = critSkill && Math.random() < 0.20;
          let dmgIn = Math.round(enemy.atk * _es.atkBuff * rageMul * _es.heroAtkDebuff);
          if (critHit) dmgIn = Math.round(dmgIn * 3);
          const hit = Game.battleTakeHit(dmgIn);
          counterDmg = hit.dmg;
          dead = hit.dead;
          updHero();
          floatText(heroEl, (critHit?'【必杀】':'')+'-' + counterDmg, critHit?'crit':'dmg');
          pushLog(`❌ 答错！${enemy.name}${critHit?' <b style="color:#f39c56">一击必杀</b>':''}反噬 <b style="color:#e25b5b;">${counterDmg}</b> 伤害`, 'bad');
          setEmote('wrong');
        }
        // 首回合 weaken 已发挥，后面恢复
        if (_es.turns >= 1) _es.heroAtkDebuff = 1.0;

        const rewardBox = correct ? `<div class="xx-tip" style="background:rgba(140,226,140,0.12);border-color:var(--xx-green);">+${rep.expGain||0} 修为 +${rep.shiGain||0} 灵石 +${rep.daoxinGain||0} 道心 · 连击 ${rep.streak||0} 🔥</div>` : `<div class="xx-tip" style="background:rgba(226,91,91,0.12);border-color:var(--xx-red);">此题已收入心魔录，24小时后方可重战。</div>`;
        const explain = _genericExplain(q, correctAnsDisplay);
        const userAnsDisplay = Array.isArray(pick) ? pick.join(' / ') : String(pick || '(未作答)');
        const summaryLine = correct
          ? (enemy.hp <= 0 ? `本次出手直接斩杀 ${enemy.name}` : `本次造成 ${playerDmg} 伤害，随后遭到 ${counterDmg} 点反击`)
          : `本次未命中，受到 ${counterDmg} 点伤害`;
        qWrap.innerHTML = `
          <div class="battle-question v43-question">${q.q}</div>
          <div class="quest-explain">
            <b>${correct ? '⚔ 本轮作答正确' : '💥 本轮作答错误'}</b><br>
            <div style="margin-top:8px;font-size:13px;color:rgba(240,230,210,.78);">你的答案：<span style="color:${correct?'#8ce28c':'#ff9797'};font-weight:700;">${_esc(userAnsDisplay)}</span> · <span class="ans">参考：${_esc(correctAnsDisplay)}</span></div>
            <div style="margin-top:8px;color:${correct?'#8ce28c':'#ff9797'};font-size:13px;">战况：${summaryLine}</div>
            <div style="margin-top:10px;padding-top:8px;border-top:1px dashed rgba(245,201,122,.25);color:#c9d9e8;line-height:1.85;"><b style="color:#f5c97a;">📖 解析：</b>${explain}</div>
          </div>
          ${rewardBox}
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:10px;flex-wrap:wrap;">
            <span style="color:var(--xx-text-dim);font-size:12px;">⏳ 阅读解析后点击继续，不再自动跳题</span>
            <button class="xx-btn xx-btn-primary" id="__battleNext">${enemy.hp <= 0 ? '收功结算' : (dead ? '战败结算' : '下一题 ▶')}</button>
          </div>`;
        qWrap.querySelector('#__battleNext').onclick = () => {
          if (dead) finishBattle(false);
          else if (enemy.hp <= 0) finishBattle(true);
          else loadQuestion();
        };
      }

      function finishBattle(win) {
        if (win && opts.onWin) opts.onWin();
        if (!win && opts.onLose) opts.onLose();
        setTimeout(()=>{
          const winMsg = win
            ? `<div class="v43-battle-end win"><div class="v43-end-title">⚔ 斩妖胜利</div><div class="v43-end-sub">修为、灵石与战斗记录均已结算</div></div>`
            : `<div class="v43-battle-end lose"><div class="v43-end-title">💀 道心受损</div><div class="v43-end-sub">请先整补状态，再来重战</div></div>`;
          vizWrap.innerHTML = '';
          qWrap.innerHTML = winMsg + `<div style="text-align:center;margin-top:12px;"><button class="xx-btn xx-btn-primary v43-end-btn" id="battleEnd">${win?'继续修炼':'重整旗鼓'}</button></div>`;
          setEmote(win ? 'love' : 'deadpan');
          if (win) UI.confetti && UI.confetti(40);
          scene.querySelector('#battleEnd').onclick = () => { mask.remove(); document.removeEventListener('keydown', escHandler); if (opts.onClose) opts.onClose(win); };
        }, 200);
      }

      closeBtn.onclick = () => { mask.remove(); document.removeEventListener('keydown', escHandler); if (opts.onClose) opts.onClose(false); };
      const escHandler = (e) => { if (e.key === 'Escape') { mask.remove(); document.removeEventListener('keydown', escHandler); if (opts.onClose) opts.onClose(false); } };
      document.addEventListener('keydown', escHandler);
      loadQuestion();
      return { close: () => { mask.remove(); document.removeEventListener('keydown', escHandler); } };
    },

    // ============================================================
    //  v4.0 新增：学科页外框 (修复 v3 丢失问题)
    // ============================================================
    renderSubjectShell(sectKey, contentHtml) {
      const sectName = { physics:'⚡ 雷霆殿 · 物理', chemistry:'⚗ 丹鼎峰 · 化学',
                         geography:'🌏 山河阁 · 地理', chinese:'📜 文渊阁 · 语文',
                         math:'🔢 推衍宫 · 数学',    english:'🌐 译灵堂 · 英语' };
      const sectColor = { physics:'#7fb3ff', chemistry:'#ff9a5e', geography:'#8ce28c',
                          chinese:'#f5c97a', math:'#b288ff', english:'#ff9ec6' };
      const st = Game.state.sects[sectKey] || {};
      const totalManuals = (window[`${sectKey.toUpperCase()}_MANUALS`] || []).length;
      const totalBank    = (window[`${sectKey.toUpperCase()}_BANK`]    || []).length;
      const clr = sectColor[sectKey] || '#f5c97a';
      return `
        <div class="xx-immortal-box subject-header" style="margin-bottom:24px;border-color:${clr};">
          <div class="corner-tr"></div><div class="corner-bl"></div>
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <div>
              <h2 style="margin:0;font-family:var(--xx-font-art);font-size:28px;color:${clr};letter-spacing:4px;text-shadow:0 0 12px ${clr}88;">${sectName[sectKey] || sectKey}</h2>
              <div style="color:var(--xx-text-soft);font-size:13px;margin-top:6px;">
                已参悟功法 <b style="color:var(--xx-gold);">${(st.masteredManuals||[]).length}</b>/${totalManuals} ·
                已斩妖兽 <b style="color:var(--xx-red);">${(st.defeatedQuests||[]).length}</b>/${totalBank}
              </div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <a href="../index.html" class="xx-btn">⬅ 回山门</a>
            </div>
          </div>
        </div>
        ${contentHtml}
      `;
    },

    // ============================================================
    //  v4.0 新增：Boss 战粒子爆炸特效
    // ============================================================
    explodeAt(el) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      for (let i = 0; i < 24; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;
          width:10px;height:10px;border-radius:50%;
          background:${['#f5c97a','#ff9ec6','#b288ff','#6ed5e0','#ffe6a3'][i%5]};
          pointer-events:none;z-index:9999;
          box-shadow:0 0 14px currentColor;
        `;
        document.body.appendChild(p);
        const angle = Math.random() * Math.PI * 2;
        const dist = 80 + Math.random() * 120;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        p.animate([
          { transform:'translate(0,0) scale(1)', opacity: 1 },
          { transform:`translate(${dx}px,${dy}px) scale(0)`, opacity: 0 }
        ], { duration: 900 + Math.random() * 400, easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)' });
        setTimeout(() => p.remove(), 1400);
      }
    },

    // ============================================================
    //  v4.0 新增：CG 占位框 (像素/emoji/场景背景)
    // ============================================================
    renderCG(opts) {
      const { emoji='✨', caption='', scene='', sub='', pixel='' } = opts || {};
      const bg = _cgSceneBg(scene);
      const emojis = String(emoji).split(/[\s,，]+/).filter(Boolean);
      let mainVisual;
      if (pixel && typeof PixelArt !== 'undefined' && PixelArt.scene) {
        const px = PixelArt.scene(pixel);
        if (px) mainVisual = `<div class="cg-pixel-wrap">${px}</div>`;
      }
      if (!mainVisual) {
        mainVisual = emojis.length > 1
          ? `<div class="cg-emoji-row" style="display:flex;gap:14px;justify-content:center;align-items:flex-end;">` +
            emojis.map((e,i) => `<div class="cg-emoji" style="font-size:${i===0?68:52}px;animation-delay:${i*0.3}s;">${e}</div>`).join('') +
            `</div>`
          : `<div class="cg-emoji">${emoji}</div>`;
      }
      return `
        <div class="cg-frame" ${bg?`style="${bg}"`:''}>
          <div class="cg-sweep"></div>
          <div class="cg-content">
            ${mainVisual}
            ${caption ? `<div style="font-size:14px;margin-top:6px;color:var(--xx-text);letter-spacing:1px;">${caption}</div>` : ''}
            ${sub ? `<div style="font-size:11px;margin-top:4px;color:var(--xx-text-dim);letter-spacing:2px;">${sub}</div>` : ''}
          </div>
        </div>
      `;
    },

    // 屏幕震动（Boss 战用）
    screenShake() {
      const b = document.body;
      b.classList.remove('screen-shake');
      void b.offsetWidth;
      b.classList.add('screen-shake');
      setTimeout(() => b.classList.remove('screen-shake'), 800);
    },

    // 胜利彩带
    confetti(count = 60) {
      let wrap = document.querySelector('.xx-confetti-wrap');
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'xx-confetti-wrap';
        document.body.appendChild(wrap);
      }
      const colors = ['#f5c97a','#ff9ec6','#b288ff','#6ed5e0','#8ce28c','#ffe6a3'];
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'xx-confetti-piece';
        p.style.left = (Math.random() * 100) + 'vw';
        p.style.background = colors[i % colors.length];
        p.style.animationDelay = (Math.random() * 0.6) + 's';
        p.style.animationDuration = (2.4 + Math.random() * 1.6) + 's';
        p.style.width = (5 + Math.random() * 6) + 'px';
        p.style.height = (10 + Math.random() * 10) + 'px';
        p.style.opacity = 0.7 + Math.random() * 0.3;
        wrap.appendChild(p);
      }
      setTimeout(() => wrap.remove(), 4500);
    },

    // 击中十字光
    hitCross(el) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cross = document.createElement('div');
      cross.className = 'hit-cross';
      cross.style.position = 'fixed';
      cross.style.left = (rect.left + rect.width / 2) + 'px';
      cross.style.top  = (rect.top + rect.height / 2) + 'px';
      document.body.appendChild(cross);
      setTimeout(() => cross.remove(), 600);
    },

  };

  // 场景渐变背景
  function _cgSceneBg(scene) {
    const map = {
      sect_gate:  'background: linear-gradient(180deg, rgba(178,136,255,0.18), rgba(20,18,42,0.6)), radial-gradient(circle at 50% 90%, rgba(245,201,122,0.24), transparent 60%);',
      boss_arena: 'background: linear-gradient(180deg, rgba(226,91,91,0.32), rgba(20,18,42,0.6)), radial-gradient(circle at 50% 70%, rgba(255,158,198,0.28), transparent 60%);',
      shrine:     'background: linear-gradient(180deg, rgba(245,201,122,0.22), rgba(20,18,42,0.6)), radial-gradient(circle at 50% 100%, rgba(255,230,163,0.35), transparent 55%);',
      library:    'background: linear-gradient(180deg, rgba(140,226,140,0.16), rgba(20,18,42,0.6)), radial-gradient(circle at 50% 80%, rgba(110,213,224,0.24), transparent 60%);',
      mountain:   'background: linear-gradient(180deg, rgba(110,213,224,0.18), rgba(20,18,42,0.7)), radial-gradient(circle at 50% 95%, rgba(178,136,255,0.22), transparent 60%);',
      cave:       'background: linear-gradient(180deg, rgba(20,10,30,0.5), rgba(178,136,255,0.24));',
      sky:        'background: linear-gradient(180deg, rgba(178,136,255,0.24), rgba(110,213,224,0.18)), radial-gradient(circle at 50% 20%, rgba(255,255,255,0.15), transparent 40%);',
      battle_win: 'background: linear-gradient(180deg, rgba(245,201,122,0.28), rgba(178,136,255,0.18)), radial-gradient(circle at 50% 50%, rgba(255,230,163,0.35), transparent 55%);',
    };
    return map[scene] || '';
  }

  // 全局：突破特效自动监听
  if (typeof window !== 'undefined' && global.Game) {
    global.Game.on('breakthrough', realm => UI.breakthrough(realm));
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (global.Game && !global.Game._uiBound) {
      global.Game.on('breakthrough', realm => UI.breakthrough(realm));
      global.Game.on('bossDrop', drop => {
        UI.toast(`✨ 掉落：${drop.icon} · ${drop.name}`, 'success', 3200);
      });
      // v4.0 FIX: 突破后属性成长提示
      global.Game.on('statsGrown', d => {
        UI.toast(`✨ 道基成长！HP+${d.hpGain} MP+${d.mpGain} ⚔+${d.atkGain} 🛡+${d.defGain}`, 'success', 3500);
      });
      // v4.0 FIX: 领悟功法提示（保证可见）
      global.Game.on('manualMastered', d => {
        UI.toast(`📖 参悟成功！+${(Game.formatBigNum||String)(d.expGain)} 修为 +${(Game.formatBigNum||String)(d.shiGain)} 灵石`, 'success', 3500);
      });
      global.Game.on('proficiencyMilestone', d => {
        UI.toast(`🌟 熟练度达“${d.label}”！+${(Game.formatBigNum||String)(d.reward.exp)} 修为 +${(Game.formatBigNum||String)(d.reward.shi)} 灵石`, 'success', 3200);
      });
      // v4.3.5g 重构：合并 v435f-hotfix Bug 3 —— 成就弹窗单栈聚合
      //   game-core 里 _checkAchievements 可能 emit 两种 payload：
      //     ① { id, achv }——单个成就
      //     ② { batch:true, list, summary }——多条聚合
      global.Game.on('achievementUnlock', function (payload) {
        if (!payload) return;
        if (payload.batch && payload.summary) {
          UI.toast(payload.summary, 'success', 3500);
        } else if (payload.achv) {
          UI.toast('🏆 成就解锁：' + payload.achv.name, 'success', 3200);
        }
      });
      global.Game._uiBound = true;
    }

    // v4.3.5g 重构：合并 v435f-hotfix Bug 1 —— 四宫格 document 委托（幂等，只装一次）
    //   与 UI.bindFourGrid 的空实现搭配，避免元素级 onclick + 委托双触发
    if (!global.__wendao_gridDelegateInstalled) {
      global.__wendao_gridDelegateInstalled = true;
      document.addEventListener('click', function (e) {
        const cell = e.target && e.target.closest && e.target.closest('[data-open]');
        if (!cell) return;
        if (!cell.closest('.xx-four-grid')) return;
        e.preventDefault();
        e.stopPropagation();
        const key = cell.dataset.open;
        try {
          // v4.3.5i 重构：丹药房直接进真·炼丹房（AlchemyLab），
          //         灵宠殿的灵植园入口亦由真模块接手
          if (key === 'cave' && UI._openCaveModal) UI._openCaveModal();
          else if (key === 'secret' && UI._openSecretModal) UI._openSecretModal();
          else if (key === 'artifact' && UI._openArtifactModal) UI._openArtifactModal();
          else if (key === 'daily' && UI._openDailyModal) UI._openDailyModal();
          else if (key === 'gear' && UI._openArtifactModal) UI._openArtifactModal('gear');
          else if (key === 'pill') {
            if (global.AlchemyLab && typeof global.AlchemyLab.open === 'function') global.AlchemyLab.open();
            else if (UI._openArtifactModal) UI._openArtifactModal('pill');
          }
          else if (key === 'pet') {
            // 灵宠殿打开后，内部有灵植园入口；默认先开灵宠 tab
            if (UI._openArtifactModal) UI._openArtifactModal('pet');
          }
          else if (key === 'achv' && UI._openAchvModal) UI._openAchvModal();
          else if (UI.toast) UI.toast('该入口暂未开放：' + key, 'warn');
        } catch (err) {
          console.error('[v4.3.5g] 四宫格打开异常', key, err);
          if (UI.toast) UI.toast('打开面板出错：' + (err.message || err), 'error');
        }
      }, true);
    }
  });

  global.UI = UI;

})(typeof window !== 'undefined' ? window : this);

// ===== Phase 18：灵宠系统 v2 面板（11 只 · 升星 · 出战 · 加成） =====
(function () {
  function p18G() {
    return (typeof window !== 'undefined' && window.Game) ? window.Game : null;
  }
  function p18State() {
    var G = p18G();
    if (!G) return null;
    var s = G.state || {};
    if (typeof G._ensurePets === 'function') G._ensurePets(s);
    return s.pet18 || null;
  }
  function p18Bonus() {
    var G = p18G();
    return (G && typeof G.getPetBonus === 'function') ? G.getPetBonus() : { atk:0, def:0, hp:0 };
  }
  function p18Card(p, o, equippedNow) {
    var canUp = o.exp >= (o.expToNext || 100);
    return ''
      + '<div class="pet-card" data-p18-id="' + p.id + '" style="border:1px solid #2a2a3e;border-radius:8px;padding:8px;margin:4px 0;background:#0e0e1a;">'
      + '  <div style="display:flex;justify-content:space-between;align-items:center;">'
      + '    <strong>' + p.name + '</strong>'
      + '    <span style="color:#ffd56b;">&#11088;' + (o.star || 1) + '</span>'
      + '  </div>'
      + '  <div style="font-size:12px;color:#aaa;margin:2px 0;">被动：' + p.passive + '  解锁境界：' + p.unlockRealm + '</div>'
      + '  <div style="font-size:12px;color:#bbb;">atk ' + p.atk + ' / def ' + p.def + ' / hp ' + p.hp + '</div>'
      + '  <div style="font-size:11px;color:#777;margin-top:4px;">exp: ' + o.exp + ' / ' + o.expToNext + '</div>'
      + '  <div style="margin-top:6px;">'
      + (equippedNow
          ? '<button data-p18-unequip="' + p.id + '" style="background:#a44;color:#fff;border:none;border-radius:4px;padding:3px 10px;margin-right:4px;cursor:pointer;">卸下</button>'
          : '<button data-p18-equip="' + p.id + '" style="background:#4a4;color:#fff;border:none;border-radius:4px;padding:3px 10px;margin-right:4px;cursor:pointer;">出战</button>')
      + '    <button data-p18-up="' + p.id + '"' + (canUp ? '' : ' disabled') + ' style="background:#444;color:#fff;border:none;border-radius:4px;padding:3px 10px;cursor:' + (canUp ? 'pointer' : 'not-allowed') + ';">升星</button>'
      + '  </div>'
      + '</div>';
  }
  function p18Section() {
    var G = p18G();
    if (!G || !G.PET_TABLE_PHASE18) return '<div style="color:#888;padding:8px;">灵宠系统加载中...</div>';
    var st = p18State();
    if (!st) return '<div style="color:#888;padding:8px;">灵宠系统加载中...</div>';
    var PT = G.PET_TABLE_PHASE18 || [];
    var equippedId = (st.equipped && st.equipped[0]) || null;
    var bonus = p18Bonus();
    var ownedCount = 0;
    for (var i = 0; i < PT.length; i++) if (st.owned[PT[i].id]) ownedCount++;
    var html = ''
      + '<div class="pet-card" style="margin-top:14px;border:1px solid #3a3a4e;border-radius:8px;padding:8px 10px;background:#101020;">'
      + '  <div style="color:#ffd56b;font-size:14px;">灵宠系统 v2 · Phase 18</div>'
      + '  <div style="font-size:12px;color:#aaa;margin:2px 0;">共 ' + PT.length + ' 只，已获得 ' + ownedCount + ' 只，最多 1 只同时出战。</div>'
      + '  <div style="font-size:12px;color:#7cf;margin:4px 0;">当前出战加成：atk +' + bonus.atk + ' / def +' + bonus.def + ' / hp +' + bonus.hp + '</div>'
      + '  <div style="max-height:420px;overflow-y:auto;">';
    for (var j = 0; j < PT.length; j++) {
      var p = PT[j];
      if (!p) continue;
      var o = st.owned[p.id] || { star:1, exp:0, expToNext:100 };
      html += p18Card(p, o, equippedId === p.id);
    }
    html += '  </div></div>';
    return html;
  }
  function p18Refresh(body) {
    if (!body) return;
    if (typeof UI !== 'undefined' && UI && typeof UI.renderPets === 'function') {
      body.innerHTML = UI.renderPets();
      if (typeof UI.bindPets === 'function') UI.bindPets(body);
    }
    if (!body.querySelector('[data-p18-id]')) {
      body.insertAdjacentHTML('beforeend', p18Section());
    }
  }
  function p18Bind(body) {
    if (!body || body.__p18Bound) return;
    body.__p18Bound = true;
    body.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!(t && t.tagName === 'BUTTON')) return;
      var G = p18G();
      if (!G) return;
      var eId = t.getAttribute('data-p18-equip');
      var uId = t.getAttribute('data-p18-unequip');
      var upId = t.getAttribute('data-p18-up');
      if (eId && G.equipPet) G.equipPet(eId);
      else if (uId && G.unequipPet) G.unequipPet();
      else if (upId && G.feedPet) G.feedPet(upId, 9999);
      p18Refresh(body);
    });
  }
  function p18TryInject() {
    var body = document.getElementById('artifact-tab-body');
    if (!body) return false;
    if (body.querySelector('.pet-card') && !body.querySelector('[data-p18-id]')) {
      body.insertAdjacentHTML('beforeend', p18Section());
      p18Bind(body);
      return true;
    }
    return false;
  }
  window.__p18Render = p18Section;
  window.__p18Bind = p18Bind;
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    p18TryInject();
    var mo = new MutationObserver(function () {
      p18TryInject();
    });
    mo.observe(document.body || document.documentElement, { childList:true, subtree:true });
    setTimeout(function () { mo.disconnect(); }, 60000);
  } else {
    document.addEventListener('DOMContentLoaded', p18TryInject);
  }
})();

