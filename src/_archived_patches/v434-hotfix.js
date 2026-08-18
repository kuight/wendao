/* ===============================================================
 * 《问道修仙学院》v4.3.4 · 战斗深化 + 奖励落地 + 语英题库热补
 *
 * 加载顺序：必须在 v433-hotfix.js 之后
 *   <script src="assets/v433-hotfix.js"></script>
 *   <script src="assets/v434-hotfix.js"></script>
 *
 * 【本轮修复/新增】
 *   Bug#20  v4.3.2 combatRewardV432 公式没落到玩家 exp/shi ——
 *           真正接管 SubjectPage._launchArena.onWin，走新曲线发放
 *   Bug#23  战斗前没有难度选择器 —— 本轮加"难度菜单"弹窗（挑战前预览）
 *   Bug#24  连击加成没有让玩家有"越阶"的爽感 —— 引入 combo × 越阶爆发倍率
 *   Bug#25  Boss 战没有"限时挑战"张力 —— 加"限时爆发"模式（60秒内答完 = 双倍）
 *   ★ 新增   语文 + 英语题库补充包 v1（各 25 题解燃眉之急）
 *   ★ 新增   Game.getBattleReward(opts) —— 统一奖励入口
 *   ★ 新增   Game.__combatDebug —— 在控制台把每次战斗奖励详细打印
 * =============================================================== */
(function (global) {
  'use strict';

  if (!global.Game) {
    console.warn('[v4.3.4] Game 未加载，跳过');
    return;
  }
  const Game = global.Game;
  const UI   = global.UI;

  Game.__hotfixVersion = '4.3.4';
  Game.__patchChain = (Game.__patchChain || []).concat(['v4.3.4-hotfix']);
  console.log('[v4.3.4] 加载战斗深化 + 奖励落地补丁 ...');

  // ================================================================
  // 一、Game.getBattleReward(opts) —— 统一奖励入口
  //     取代 v4.3.2 的 combatRewardV432（保留后者作为底层）
  // ================================================================
  Game.getBattleReward = function (opts) {
    opts = opts || {};
    const pl = Math.max(0, (Game.state && Game.state.char && Game.state.char.realmId) | 0);
    const el = Math.max(1, opts.enemyLev || opts.playerLev || pl);

    // 底层公式沿用 v4.3.2 combatRewardV432
    let base;
    if (typeof Game.combatRewardV432 === 'function') {
      base = Game.combatRewardV432({
        playerLev: pl, enemyLev: el, diff: opts.diff || 'normal'
      });
    } else {
      // fallback
      base = { exp: 10, shi: 5, mul: 1 };
    }

    // 连击倍率（v4.3.4 新增）
    const streak = (Game.state && Game.state.char && Game.state.char.streak) || 0;
    let comboMul = 1.0;
    if (streak >= 3)  comboMul = 1.15;
    if (streak >= 5)  comboMul = 1.35;
    if (streak >= 10) comboMul = 1.65;
    if (streak >= 20) comboMul = 2.10;
    if (streak >= 50) comboMul = 2.60;

    // 越阶爆发倍率（v4.3.4 新增）
    // enemyLev > playerLev 越多，额外奖励越夸张（鼓励挑战）
    const gap = el - pl;
    let escMul = 1.0;
    if (gap >= 3)  escMul = 1.30;
    if (gap >= 6)  escMul = 1.75;
    if (gap >= 10) escMul = 2.40;
    if (gap >= 15) escMul = 3.20;

    // 限时爆发（如果 opts.rushMode）
    const rushMul = opts.rushMode ? 2.0 : 1.0;

    // 难度选择器加成（如果 opts.riskChoice）
    // riskChoice: 'safe' | 'normal' | 'risk' | 'insane'
    const riskMul = {
      safe:   0.7,
      normal: 1.0,
      risk:   1.4,
      insane: 2.2
    }[opts.riskChoice || 'normal'] || 1.0;

    // 最终奖励
    const totalMul = comboMul * escMul * rushMul * riskMul;
    const exp = Math.max(1, Math.round(base.exp * totalMul));
    const shi = Math.max(1, Math.round(base.shi * totalMul));

    const detail = {
      exp, shi,
      base: { exp: base.exp, shi: base.shi },
      mul: { combo: comboMul, escalate: escMul, rush: rushMul, risk: riskMul, total: totalMul },
      streak, gap,
      diff: opts.diff, riskChoice: opts.riskChoice, rushMode: !!opts.rushMode,
      playerLev: pl, enemyLev: el
    };

    if (Game.__combatDebug) {
      console.group('%c[BattleReward]', 'color:#f5c97a;font-weight:bold;');
      console.log('入参:', opts);
      console.log('明细:', detail);
      console.groupEnd();
    }
    return detail;
  };

  // ================================================================
  // 二、真正接管 SubjectPage._launchArena.onWin
  //     Bug#20：v4.3.2 的公式没有真正走到 addExp/addLingshi
  // ================================================================
  function patchLaunchArena() {
    if (!global.SubjectPage) { setTimeout(patchLaunchArena, 400); return; }
    const SP = global.SubjectPage;
    if (SP.__v434_launchPatched) return;
    const _orig = SP._launchArena;
    SP._launchArena = function (enemyDef) {
      // v4.3.4：先弹"挑战风格选择器"，然后再真正启动战斗
      const self = this;
      showRiskPicker(enemyDef, (choice) => {
        // choice: { riskChoice, rushMode }
        // 把玩家的选择塞进 enemyDef，让下游能读取
        const nd = Object.assign({}, enemyDef, {
          _v434Choice: choice,
          _v434StartAt: Date.now(),
          // 越激进的选择，怪物属性微调
          hp: Math.round(enemyDef.hp * ({safe:0.85, normal:1, risk:1.15, insane:1.4}[choice.riskChoice] || 1)),
          atk: Math.round(enemyDef.atk * ({safe:0.85, normal:1, risk:1.15, insane:1.35}[choice.riskChoice] || 1)),
        });
        nd.maxHp = nd.hp;

        // 保留原逻辑：抽题池
        const st = Game.state.sects[self.sect];
        const mastered = (st && st.masteredManuals) || [];
        const pool = self.bank.filter(q =>
          mastered.includes(q.manualId) && enemyDef.qDiffs.includes(q.difficulty || 'normal')
        );
        const fallback = self.bank.filter(q => mastered.includes(q.manualId));
        const chosen = (pool.length ? pool : fallback).slice().sort(() => Math.random() - 0.5);
        if (!chosen.length) { UI.toast('暂无可用题目，请先参悟功法', 'error'); return; }

        let qIdx = 0;
        const enemy = Object.assign({}, nd, { maxHp: nd.hp });
        enemy.sect = nd.sect || self.sect;

        // 限时爆发倒计时（如果 rushMode）
        let rushTimer = null;
        let rushExpired = false;
        if (choice.rushMode) {
          rushTimer = setTimeout(() => {
            rushExpired = true;
            if (UI.toast) UI.toast('⏰ 限时结束！奖励回落到普通倍率', 'info', 3000);
          }, 60000);
        }

        UI.openBattle({
          enemy,
          getQuestion: () => {
            if (qIdx >= chosen.length) qIdx = 0;
            return chosen[qIdx++];
          },
          onWin: () => {
            if (rushTimer) clearTimeout(rushTimer);
            // ★★★ Bug#20 核心：走 v4.3.4 新奖励发放 ★★★
            const rw = Game.getBattleReward({
              diff: nd.diff,
              enemyLev: nd.level || (Game.state.char.realmId || 0),
              riskChoice: choice.riskChoice,
              rushMode: choice.rushMode && !rushExpired
            });
            Game.addExp(rw.exp);
            Game.addLingshi(rw.shi);
            Game.battleWin && Game.battleWin({ exp: rw.exp, shi: rw.shi });

            // Toast 显示明细
            const mulParts = [];
            if (rw.mul.combo   > 1.01) mulParts.push(`连击×${rw.mul.combo.toFixed(2)}`);
            if (rw.mul.escalate> 1.01) mulParts.push(`越阶×${rw.mul.escalate.toFixed(2)}`);
            if (rw.mul.rush    > 1.01) mulParts.push(`限时×${rw.mul.rush.toFixed(2)}`);
            if (rw.mul.risk    !== 1)  mulParts.push(`${choice.riskChoice}×${rw.mul.risk.toFixed(2)}`);
            const mulStr = mulParts.length ? ` [${mulParts.join(' ')}]` : '';
            const _sfmt = (Game.formatBigNum) ? Game.formatBigNum.bind(Game) : String;
            UI.toast(`⚔ 斩妖！+${_sfmt(rw.exp)} 修为 +${_sfmt(rw.shi)} 灵石${mulStr}`, 'success', 4200);
          },
          onLose: () => {
            if (rushTimer) clearTimeout(rushTimer);
            UI.toast('💔 战败退场，去洞府恢复吧', 'error');
          },
          onClose: () => {
            if (rushTimer) clearTimeout(rushTimer);
            if (self.currentTab === 'arena') self._render();
          }
        });
      });
    };
    SP.__v434_launchPatched = true;
  }
  patchLaunchArena();

  // ================================================================
  // 三、难度选择器弹窗（挑战前的"风格 + 限时"选择）
  // ================================================================
  function showRiskPicker(enemyDef, cb) {
    if (!UI || !UI.modal) { cb({ riskChoice: 'normal', rushMode: false }); return; }
    const diffLabel = {easy:'凡阶', normal:'中阶', hard:'精英', boss:'妖王'}[enemyDef.diff] || '妖';
    const _sfmt = (Game.formatBigNum) ? Game.formatBigNum.bind(Game) : String;

    // 预览奖励（普通选择下）
    const previewNormal = Game.getBattleReward({
      diff: enemyDef.diff, enemyLev: enemyDef.level || (Game.state.char.realmId || 0),
      riskChoice: 'normal', rushMode: false
    });
    const previewRush = Game.getBattleReward({
      diff: enemyDef.diff, enemyLev: enemyDef.level || (Game.state.char.realmId || 0),
      riskChoice: 'normal', rushMode: true
    });
    const previewInsane = Game.getBattleReward({
      diff: enemyDef.diff, enemyLev: enemyDef.level || (Game.state.char.realmId || 0),
      riskChoice: 'insane', rushMode: false
    });

    let _choice = { riskChoice: 'normal', rushMode: false };
    const modal = UI.modal({
      title: `⚔ 挑战风格 · ${enemyDef.name}（${diffLabel}）`,
      body: `
        <div style="line-height:1.9;font-size:13px;color:var(--xx-text-soft);">
          <p style="color:var(--xx-gold);margin-bottom:6px;"><b>选择你的战斗风格 · 更险 = 更多奖励</b></p>
          <div id="v434-risk-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:8px;">
            <button class="xx-btn ghost v434-risk" data-risk="safe" style="text-align:left;padding:10px;">
              🛡 <b style="color:#8ce28c;">稳健</b> ×0.7<br>
              <span style="font-size:11px;color:var(--xx-text-dim);">怪物 -15%，奖励 -30%</span>
            </button>
            <button class="xx-btn v434-risk is-selected" data-risk="normal" style="text-align:left;padding:10px;border-color:var(--xx-cyan);">
              ⚔ <b style="color:#6ed5e0;">正常</b> ×1.0<br>
              <span style="font-size:11px;color:var(--xx-text-dim);">默认；预期奖励 ~${_sfmt(previewNormal.exp)} 修为</span>
            </button>
            <button class="xx-btn ghost v434-risk" data-risk="risk" style="text-align:left;padding:10px;">
              🔥 <b style="color:#b288ff;">冒险</b> ×1.4<br>
              <span style="font-size:11px;color:var(--xx-text-dim);">怪物 +15%，奖励 +40%</span>
            </button>
            <button class="xx-btn ghost v434-risk" data-risk="insane" style="text-align:left;padding:10px;">
              💀 <b style="color:#e25b5b;">疯狂</b> ×2.2<br>
              <span style="font-size:11px;color:var(--xx-text-dim);">怪物 +40%，奖励 +120%<br>预期 ~${_sfmt(previewInsane.exp)} 修为</span>
            </button>
          </div>
          <hr style="border:none;border-top:1px solid var(--xx-border);margin:12px 0;">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:8px 10px;border:1px solid var(--xx-border);border-radius:8px;background:rgba(255,180,80,0.05);">
            <input type="checkbox" id="v434-rush" style="transform:scale(1.2);">
            <div style="line-height:1.5;">
              ⏰ <b style="color:#f5c97a;">限时爆发（60秒）</b> × 2.0<br>
              <span style="font-size:11px;color:var(--xx-text-dim);">60秒内打完 = 双倍奖励（预期 ~${_sfmt(previewRush.exp)} 修为）<br>超时则回落普通倍率</span>
            </div>
          </label>
          <p style="margin-top:10px;font-size:11px;color:var(--xx-text-dim);text-align:center;">
            💡 连击 ≥ 3/5/10/20/50 时，额外 ×1.15 / 1.35 / 1.65 / 2.10 / 2.60
          </p>
        </div>
      `,
      actions: [
        { label: '取消' },
        { label: '⚔ 出战！', primary: true, onClick: () => {
          const rush = document.getElementById('v434-rush');
          _choice.rushMode = !!(rush && rush.checked);
          cb(_choice);
        }}
      ]
    });
    // 绑定风格选择按钮
    setTimeout(() => {
      document.querySelectorAll('.v434-risk').forEach(btn => {
        btn.onclick = (e) => {
          e.preventDefault();
          document.querySelectorAll('.v434-risk').forEach(b => {
            b.classList.remove('is-selected');
            b.classList.add('ghost');
            b.style.borderColor = '';
          });
          btn.classList.add('is-selected');
          btn.classList.remove('ghost');
          const c = { safe:'#8ce28c', normal:'var(--xx-cyan)', risk:'#b288ff', insane:'#e25b5b' }[btn.dataset.risk];
          btn.style.borderColor = c;
          _choice.riskChoice = btn.dataset.risk;
        };
      });
    }, 50);
  }

  // ================================================================
  // 四、语文题库补充包 v1（25 题解燃眉之急）
  // ================================================================
  const CHINESE_SUPPLEMENT_V1 = [
    // 文言文
    { id:'cn_v1_01', manualId:'cn_m1', difficulty:'easy', type:'single',
      question:'"沛公军霸上"中"军"的意思是？',
      options:['军队','驻军','军官','军事'], answer:1,
      explanation:'"军"名词活用为动词，意为"驻军、驻扎"。出自《鸿门宴》。' },
    { id:'cn_v1_02', manualId:'cn_m1', difficulty:'easy', type:'single',
      question:'"樊哙侧其盾以撞"中"侧"的用法是？',
      options:['名词','形容词','使动用法','意动用法'], answer:2,
      explanation:'形容词的使动用法："使……侧过来"。' },
    { id:'cn_v1_03', manualId:'cn_m1', difficulty:'normal', type:'single',
      question:'"吾从而师之"中"师"的用法是？',
      options:['名词作动词，意为「以……为师」','形容词','状语','兼语'], answer:0,
      explanation:'名词的意动用法：以……为老师。出自《师说》。' },
    { id:'cn_v1_04', manualId:'cn_m1', difficulty:'normal', type:'single',
      question:'"之二虫又何知"中"之"的用法是？',
      options:['助词「的」','代词','动词「往」','指示代词「这」'], answer:3,
      explanation:'「之」作指示代词，义为「这、这个」。出自《逍遥游》。' },
    { id:'cn_v1_05', manualId:'cn_m1', difficulty:'hard', type:'single',
      question:'下列句子中，"而"表转折的是？',
      options:['蟹六跪而二螯','青出于蓝而胜于蓝','君子博学而日参省乎己','吾尝跂而望矣'],
      answer:1,
      explanation:'A并列 B转折 C递进 D修饰。B是"青出于蓝但胜于蓝"。' },
    // 古诗
    { id:'cn_v1_06', manualId:'cn_m2', difficulty:'easy', type:'single',
      question:'"落霞与孤鹜齐飞，秋水共长天一色"出自？',
      options:['《岳阳楼记》','《滕王阁序》','《陋室铭》','《赤壁赋》'], answer:1,
      explanation:'王勃《滕王阁序》名句。' },
    { id:'cn_v1_07', manualId:'cn_m2', difficulty:'normal', type:'single',
      question:'"大江东去，浪淘尽，千古风流人物"是苏轼的哪首词？',
      options:['《水调歌头》','《江城子》','《念奴娇·赤壁怀古》','《定风波》'], answer:2,
      explanation:'《念奴娇·赤壁怀古》。' },
    { id:'cn_v1_08', manualId:'cn_m2', difficulty:'normal', type:'fill',
      question:'补全李清照《声声慢》："寻寻觅觅，冷冷清清，__。"',
      answer:'凄凄惨惨戚戚',
      explanation:'"凄凄惨惨戚戚"，七组叠字层层递进，是宋词绝唱。' },
    { id:'cn_v1_09', manualId:'cn_m2', difficulty:'hard', type:'single',
      question:'"莫道桑榆晚，为霞尚满天"体现的思想感情是？',
      options:['消极避世','怀才不遇','老当益壮乐观','悲秋感慨'], answer:2,
      explanation:'刘禹锡《酬乐天咏老见示》，晚年积极乐观精神。' },
    { id:'cn_v1_10', manualId:'cn_m2', difficulty:'hard', type:'multi',
      question:'下列诗句中，运用"以乐景写哀情"手法的是？',
      options:['感时花溅泪，恨别鸟惊心','杨柳青青江水平，闻郎江上唱歌声','千里莺啼绿映红，水村山郭酒旗风','昔我往矣，杨柳依依'],
      answer:[0,3],
      explanation:'A杜甫见花落泪；D《诗经·采薇》"杨柳依依"的春景反衬离别之苦。' },
    // 现代文
    { id:'cn_v1_11', manualId:'cn_m3', difficulty:'easy', type:'single',
      question:'鲁迅小说《祝福》的主人公是？',
      options:['祥林嫂','孔乙己','阿Q','闰土'], answer:0,
      explanation:'祥林嫂是《祝福》主人公，被封建礼教吞噬的悲剧妇女。' },
    { id:'cn_v1_12', manualId:'cn_m3', difficulty:'normal', type:'single',
      question:'《红楼梦》中"寒塘渡鹤影，冷月葬花魂"这一联诗是谁与谁联的？',
      options:['林黛玉与史湘云','薛宝钗与林黛玉','贾宝玉与林黛玉','妙玉与惜春'], answer:0,
      explanation:'第76回中秋夜黛玉湘云联句，成为二人身世的谶语。' },
    { id:'cn_v1_13', manualId:'cn_m3', difficulty:'normal', type:'single',
      question:'《红楼梦》中"金陵十二钗正册"排在首位的是？',
      options:['林黛玉','薛宝钗','元春','林黛玉和薛宝钗并列'], answer:3,
      explanation:'黛玉和宝钗共占一首判词，并列首位。' },
    { id:'cn_v1_14', manualId:'cn_m3', difficulty:'hard', type:'single',
      question:'下列作品与作者对应错误的是？',
      options:['《装在套子里的人》—契诃夫','《变形记》—卡夫卡','《百年孤独》—马尔克斯','《老人与海》—福克纳'],
      answer:3,
      explanation:'《老人与海》作者是海明威，福克纳的代表作是《喧哗与骚动》。' },
    // 语言应用
    { id:'cn_v1_15', manualId:'cn_m4', difficulty:'easy', type:'single',
      question:'下列成语使用正确的是？',
      options:['文不加点地写了三千字','望其项背，无人能及','美轮美奂的手工艺品','明日黄花已无人问津'],
      answer:0,
      explanation:'A"文不加点"指文章一气呵成不加修改（易误用）；B"望其项背"应为可以赶上（否定式误用）；C"美轮美奂"仅形容房屋；D"明日黄花"是重阳后菊花的意思，一般说"过时"。' },
    { id:'cn_v1_16', manualId:'cn_m4', difficulty:'normal', type:'single',
      question:'下列没有语病的一句是？',
      options:['通过这次学习，使我明白了道理','能否落实"双减"，是提升学生幸福感的关键','学校将于近日举办演讲比赛，欢迎全体同学积极参加','这本书对我很有兴趣'],
      answer:2,
      explanation:'A缺主语；B两面对一面；D主客颠倒（应为"我对这本书很有兴趣"）。' },
    { id:'cn_v1_17', manualId:'cn_m4', difficulty:'normal', type:'single',
      question:'"莘莘学子"中"莘莘"读作？',
      options:['xīn xīn','shēn shēn','xìng xìng','shēng shēng'], answer:1,
      explanation:'"莘莘"读 shēn shēn，意为众多。' },
    { id:'cn_v1_18', manualId:'cn_m4', difficulty:'hard', type:'single',
      question:'"雨过天青云破处，者般颜色做将来"运用的修辞手法是？',
      options:['比喻','拟人','夸张','通感'], answer:0,
      explanation:'柴世宗形容瓷器色泽，以"雨过天青云破处"比喻理想釉色，是比喻。' },
    // 写作/文化常识
    { id:'cn_v1_19', manualId:'cn_m5', difficulty:'easy', type:'single',
      question:'"四书五经"中"四书"不包括？',
      options:['《大学》','《中庸》','《论语》','《春秋》'], answer:3,
      explanation:'四书：大学、中庸、论语、孟子；《春秋》属五经。' },
    { id:'cn_v1_20', manualId:'cn_m5', difficulty:'easy', type:'judge',
      question:'判断：《离骚》是我国最早的浪漫主义长诗，作者是屈原。',
      answer:true,
      explanation:'正确。《离骚》是屈原代表作，浪漫主义文学源头。' },
    { id:'cn_v1_21', manualId:'cn_m5', difficulty:'normal', type:'single',
      question:'古人称"及笄"指女子几岁？',
      options:['12岁','13岁','15岁','16岁'], answer:2,
      explanation:'及笄之年 = 女子15岁（束发用笄）。豆蔻=13岁，弱冠=男子20岁。' },
    { id:'cn_v1_22', manualId:'cn_m5', difficulty:'normal', type:'single',
      question:'下列人物按时代先后排序正确的是？',
      options:['屈原—李白—苏轼—曹雪芹','李白—屈原—苏轼—曹雪芹','屈原—苏轼—李白—曹雪芹','屈原—李白—曹雪芹—苏轼'],
      answer:0,
      explanation:'战国屈原 → 唐李白 → 宋苏轼 → 清曹雪芹。' },
    { id:'cn_v1_23', manualId:'cn_m5', difficulty:'hard', type:'single',
      question:'鲁迅《呐喊·自序》中"铁屋子"比喻的是？',
      options:['封建礼教','封闭愚昧的旧中国','日本殖民地','监狱制度'], answer:1,
      explanation:'"铁屋子"比喻当时封闭黑暗的中国社会。' },
    { id:'cn_v1_24', manualId:'cn_m5', difficulty:'hard', type:'multi',
      question:'下列属于"唐宋八大家"的是？',
      options:['韩愈','柳宗元','李白','欧阳修','杜甫'],
      answer:[0,1,3],
      explanation:'唐宋八大家：韩愈、柳宗元、欧阳修、苏洵、苏轼、苏辙、王安石、曾巩。李白杜甫不在。' },
    { id:'cn_v1_25', manualId:'cn_m5', difficulty:'boss', type:'calc',
      question:'议论文写作训练：以"在信息碎片化时代，如何保持深度思考"为题写一段 100 字左右的开头（提出中心论点）。写完点"查看参考"再自评。',
      answer:'（自评模式）参考：当短视频与热搜以秒级冲刷我们的注意力，深度思考正在成为一种稀缺能力。真正的思考不在信息接收的量，而在对信息的追问与联结——这正是我们抵御浅薄、通向智慧的唯一路径。',
      explanation:'开头三要素：现象观察 → 问题界定 → 中心论点。自评时看是否具备。' }
  ];

  const ENGLISH_SUPPLEMENT_V1 = [
    // 词汇
    { id:'en_v1_01', manualId:'en_m1', difficulty:'easy', type:'single',
      question:'The doctor _____ my father to give up smoking.',
      options:['suggested','advised','hoped','wished'], answer:1,
      explanation:'advise sb. to do sth. 建议某人做某事，是固定搭配。suggest 后不接 sb. to do。' },
    { id:'en_v1_02', manualId:'en_m1', difficulty:'easy', type:'single',
      question:'It\'s _____ that he will come tomorrow.',
      options:['possible','possibly','impossible','possibility'], answer:0,
      explanation:'It is possible that... 是固定句型。' },
    { id:'en_v1_03', manualId:'en_m1', difficulty:'normal', type:'single',
      question:'Which word means "to make something better"?',
      options:['destroy','improve','ignore','delay'], answer:1,
      explanation:'improve = make better，改善。' },
    { id:'en_v1_04', manualId:'en_m1', difficulty:'normal', type:'single',
      question:'The company has decided to _____ its production this year.',
      options:['increase','include','indicate','invite'], answer:0,
      explanation:'increase production 增加产量，是搭配词。' },
    { id:'en_v1_05', manualId:'en_m1', difficulty:'hard', type:'single',
      question:'His speech was _____ ; nobody could understand what he meant.',
      options:['obscure','obvious','ordinary','optimistic'], answer:0,
      explanation:'obscure = 晦涩、含混。B明显 C普通 D乐观。' },

    // 语法·时态
    { id:'en_v1_06', manualId:'en_m2', difficulty:'easy', type:'single',
      question:'By the time you arrive, I _____ my homework.',
      options:['will finish','will have finished','have finished','finish'], answer:1,
      explanation:'By the time + 一般现在时，主句用将来完成时。' },
    { id:'en_v1_07', manualId:'en_m2', difficulty:'normal', type:'single',
      question:'She _____ in Beijing for ten years before she moved to Shanghai.',
      options:['lived','has lived','had lived','was living'], answer:2,
      explanation:'before 引导过去时，主句表示更早的过去，用过去完成时。' },
    { id:'en_v1_08', manualId:'en_m2', difficulty:'normal', type:'single',
      question:'—How long _____ you _____ this bike? —For three years.',
      options:['have; bought','have; had','did; buy','do; have'], answer:1,
      explanation:'How long + 现在完成时 + 延续性动词。buy 是终止性，改为 have。' },

    // 语法·从句
    { id:'en_v1_09', manualId:'en_m3', difficulty:'normal', type:'single',
      question:'This is the house _____ we lived last year.',
      options:['which','that','where','when'], answer:2,
      explanation:'先行词是 house，从句缺地点状语，用 where（=in which）。' },
    { id:'en_v1_10', manualId:'en_m3', difficulty:'normal', type:'single',
      question:'The reason _____ he was late is that he missed the bus.',
      options:['which','why','that','because'], answer:1,
      explanation:'The reason why... 引导原因定语从句。' },
    { id:'en_v1_11', manualId:'en_m3', difficulty:'hard', type:'single',
      question:'It was in the park _____ I first met her.',
      options:['that','which','where','when'], answer:0,
      explanation:'强调句 It is/was ... that ... 无论强调什么都用 that。' },
    { id:'en_v1_12', manualId:'en_m3', difficulty:'hard', type:'single',
      question:'_____ hard he tries, he never seems to succeed.',
      options:['However','Whatever','No matter','Even though'], answer:0,
      explanation:'However + adj/adv + S + V，"无论多么…"。' },

    // 语法·非谓语
    { id:'en_v1_13', manualId:'en_m4', difficulty:'normal', type:'single',
      question:'He hurried home, _____ his neighbors on the way.',
      options:['greeting','greeted','to greet','greets'], answer:0,
      explanation:'现在分词表伴随动作。' },
    { id:'en_v1_14', manualId:'en_m4', difficulty:'normal', type:'single',
      question:'The letter _____ yesterday is on the desk.',
      options:['written','writing','to write','wrote'], answer:0,
      explanation:'过去分词做定语，表被动、完成。' },
    { id:'en_v1_15', manualId:'en_m4', difficulty:'hard', type:'single',
      question:'_____ from the top of the hill, the city looks beautiful.',
      options:['Seeing','Seen','To see','See'], answer:1,
      explanation:'the city 与 see 是被动关系，用过去分词做状语。' },

    // 阅读理解（微型）
    { id:'en_v1_16', manualId:'en_m5', difficulty:'normal', type:'single',
      question:'Passage: "Reading is to the mind what exercise is to the body." What does the sentence mean?',
      options:['Reading is a waste of time','Reading helps the mind as exercise helps the body','Body is more important than mind','Exercise damages the mind'],
      answer:1,
      explanation:'该句是类比，把阅读之于心智比作运动之于身体。' },
    { id:'en_v1_17', manualId:'en_m5', difficulty:'hard', type:'single',
      question:'Passage: "AI is a tool, not a replacement for human judgement." The author\'s attitude is:',
      options:['worried','critical','balanced','excited'], answer:2,
      explanation:'既承认 AI 的工具价值，又警示不可取代人的判断——态度平衡。' },

    // 写作
    { id:'en_v1_18', manualId:'en_m6', difficulty:'easy', type:'single',
      question:'For a formal letter, which greeting is most appropriate?',
      options:['Hi guys!','Dear Sir/Madam','Yo!','What\'s up'], answer:1,
      explanation:'正式信函开头用 Dear Sir/Madam。' },
    { id:'en_v1_19', manualId:'en_m6', difficulty:'normal', type:'single',
      question:'Choose the best transition word: "The plan sounds good. _____, we need more evidence."',
      options:['Therefore','However','Moreover','Because'], answer:1,
      explanation:'前后转折，用 However。' },
    { id:'en_v1_20', manualId:'en_m6', difficulty:'hard', type:'calc',
      question:'Write a 60-word opening for an essay titled: "Should high school students use AI to help with homework?"（写完点"查看参考"再自评）',
      answer:'(Self-eval mode) Reference: AI has become a powerful learning assistant, but its role in student homework is a heated debate. While it offers instant answers, over-reliance may erode our ability to think independently. This essay argues that AI should serve as a scaffold — never a substitute — for genuine learning.',
      explanation:'议论文开头三要素：现象 → 争议 → 立场。自评时对照参考看是否具备。' },

    // 综合
    { id:'en_v1_21', manualId:'en_m1', difficulty:'boss', type:'multi',
      question:'Which of the following are synonyms of "happy"?',
      options:['delighted','sorrowful','joyful','miserable','glad'],
      answer:[0,2,4],
      explanation:'delighted/joyful/glad 都表示 happy；sorrowful/miserable 反义。' },
    { id:'en_v1_22', manualId:'en_m2', difficulty:'hard', type:'single',
      question:'Not until yesterday _____ the truth.',
      options:['I knew','did I know','I did know','knew I'], answer:1,
      explanation:'Not until 位于句首，主句部分倒装 → did I know。' },
    { id:'en_v1_23', manualId:'en_m3', difficulty:'boss', type:'single',
      question:'_____ made her mother happy is that she finally passed the exam.',
      options:['What','That','Which','It'], answer:0,
      explanation:'主语从句缺主语，用 What。That 主语从句不缺成分。' },
    { id:'en_v1_24', manualId:'en_m4', difficulty:'boss', type:'single',
      question:'With everything _____, the manager went home to rest.',
      options:['settling','settled','being settled','to settle'], answer:1,
      explanation:'With 复合结构，everything 与 settle 是被动，用过去分词。' },
    { id:'en_v1_25', manualId:'en_m5', difficulty:'boss', type:'judge',
      question:'True or False: In academic English, using "I think" too often makes the writing weaker.',
      answer:true,
      explanation:'True. 学术英语中过度使用 I think 会显得主观，应改用 It is argued that... / Evidence suggests that...' }
  ];

  // 合并进全局题库
  if (!Array.isArray(global.CHINESE_BANK)) global.CHINESE_BANK = [];
  if (!Array.isArray(global.ENGLISH_BANK)) global.ENGLISH_BANK = [];
  // 用 id 去重
  const existingCnIds = new Set(global.CHINESE_BANK.map(q => q.id));
  const existingEnIds = new Set(global.ENGLISH_BANK.map(q => q.id));
  CHINESE_SUPPLEMENT_V1.forEach(q => { if (!existingCnIds.has(q.id)) global.CHINESE_BANK.push(q); });
  ENGLISH_SUPPLEMENT_V1.forEach(q => { if (!existingEnIds.has(q.id)) global.ENGLISH_BANK.push(q); });
  // 顺便注入 SubjectPage.bank —— 如果已经初始化
  if (global.SubjectPage && global.SubjectPage.bank && global.SubjectPage.sect === 'chinese') {
    CHINESE_SUPPLEMENT_V1.forEach(q => global.SubjectPage.bank.push(q));
  }
  if (global.SubjectPage && global.SubjectPage.bank && global.SubjectPage.sect === 'english') {
    ENGLISH_SUPPLEMENT_V1.forEach(q => global.SubjectPage.bank.push(q));
  }
  console.log(`[v4.3.4] 语文题库 +${CHINESE_SUPPLEMENT_V1.length} 题 (现 ${global.CHINESE_BANK.length}) · 英语题库 +${ENGLISH_SUPPLEMENT_V1.length} 题 (现 ${global.ENGLISH_BANK.length})`);

  // ================================================================
  // 五、调试开关
  // ================================================================
  Game.__combatDebug = false;
  console.log('[v4.3.4] ✅ 加载完成');
  console.log('[v4.3.4] 💡 开关：Game.__combatDebug = true 可看每次战斗奖励明细');

})(typeof window !== 'undefined' ? window : this);
