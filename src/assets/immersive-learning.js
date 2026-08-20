/* ===============================================================
 * 《问道修仙学院》v4.2.1-BUGFIX · 沉浸式参悟引擎（Immersive Learning Engine）
 *
 * 🔧 v4.2.1 修复（回应用户反馈：功法学习流程与记忆描述不符）：
 *   ✗ 原 splitToChapters 对紧凑 HTML 只能拆成一大坨 → 7 步式沉浸参悟形同虚设
 *   ✓ 新版：优先按 v4.2-DEEP manual 里的 <h3> 标题拆卷
 *     → 引道 / 拆经 / 图解 / 演道 / 对话 / 印证 / 参悟 自然 7 卷
 *   ✓ 保留原 dlg-shifu / dlg-shijie / dlg-shimei / dlg-shixiong 对话卡样式
 *   ✓ 深色主题下不再显示浅色 inline style（改用 CSS 类接管）
 *
 * 底层：v4.0 沉浸式参悟引擎（Immersive Learning Engine）
 *
 * 【设计目标】—— 直接回应用户 4 大痛点：
 *   ① 功法学习"一堆公式甩脸"太不友好 → 【分卷分节·剧情式渐进】
 *   ② 可视化少 / 与题目关联低 → 【每小节自带可交互演示 & 每题一图】
 *   ③ 像文字游戏 → 【剧情 CG + 妖兽小怪穿插 + 特效反馈】
 *   ④ 修仙感沉浸不足 → 【二次元弟子/师尊立绘 + 心声独白 + 印证仪式】
 *
 * 【新学习流程】—— 「入道六重」·关卡制修炼
 *   Chapter 1  · 引道（师尊召见 CG，功法背景故事）
 *   Chapter 2  · 拆经（把原本一整块公式拆成 2~5 小卷「心法要诀」，逐卷点亮）
 *   Chapter 3  · 演道（每一卷附带 mini demo / AutoViz / IE 交互）
 *   Chapter 4  · 印证（每卷学完做 1 道对应小题，立即反馈，答对点亮该卷）
 *   Chapter 5  · 试炼（3 道综合小怪战，边打边加深理解）
 *   Chapter 6  · 参悟（大特效 CG + 首次奖励）
 *
 * 【与旧版对接】—— 不改 game-core / data 结构，只重写 subject-page 的 openManual 分支
 * =============================================================== */

(function (global) {
  'use strict';

  // ============================================================
  // 一、将 manual 内容自动拆分为多个「心法卷」
  //     · 若 manual.chapters 已提供 → 直接用
  //     · 否则从 formula / tips / content 按"结构信号"自动拆
  // ============================================================
  function splitToChapters(m) {
    if (Array.isArray(m.chapters) && m.chapters.length) {
      return m.chapters.map((c, i) => ({
        id: `c${i+1}`,
        title: c.title || `第${['一','二','三','四','五','六','七'][i]||i+1}卷`,
        text: c.text || c.content || '',
        formula: c.formula || '',
        tip: c.tip || '',
        demo: c.demo || null,
      }));
    }

    const chapters = [];
    const content = (m.content || m.summary || '').trim();

    // ============================================================
    // v4.2.1 修复：优先按 <h3> 标题拆卷（v4.2-DEEP manual 结构）
    // v4.2-DEEP 每篇秘籍已按 「一、引道 → 二、拆经 → 三、图解 → 四、演道 → 五、对话 → 六、印证 → 七、参悟」 用 <h3> 标注
    // 我们直接按 <h3> 拆，一个 <h3> 起就是一卷
    // ============================================================
    let h3Chapters = [];
    if (/<h3[^>]*>/i.test(content)) {
      // 用 <h3> 作为分割锚点
      const parts = content.split(/(?=<h3[^>]*>)/i).map(s => s.trim()).filter(Boolean);
      // 提取每个 part 的 <h3> 文本作为卷标题
      parts.forEach((part, i) => {
        const titleMatch = part.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
        let rawTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
        // 清理 emoji 前缀
        rawTitle = rawTitle.replace(/^[\uD83C-\uDBFF\uDC00-\uDFFF🌟📖🎨🔥💬🎯🧘✨🎊⚔📜🔬]+\s*/, '').trim();
        h3Chapters.push({
          title: rawTitle || `第${i+1}节`,
          body: part.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, '').trim(),
        });
      });
    }

    if (h3Chapters.length >= 2) {
      // 直接使用 <h3> 拆好的卷
      const roman0 = ['一','二','三','四','五','六','七','八','九','十'];
      h3Chapters.forEach((c, i) => {
        chapters.push({
          id: `c${i+1}`,
          title: `第${roman0[i] || (i+1)}卷·${c.title}`,
          text: c.body,
          formula: '',
          tip: '',
        });
      });
      // v4.2.1: 追加 formula/tip 至最后一卷，避免遗漏
      const formulaField0 = m.formulas || m.formula;
      const formulas0 = Array.isArray(formulaField0) ? formulaField0.slice() :
                       (formulaField0 ? String(formulaField0).split(/[\n;；]/).map(s=>s.trim()).filter(Boolean) : []);
      const tipsField0 = m.keyPoints || m.tips || m.key_points;
      const tips0 = Array.isArray(tipsField0) ? tipsField0.slice() :
                   (tipsField0 ? String(tipsField0).split(/[\n;；]/).map(s=>s.trim()).filter(Boolean) : []);
      if (chapters.length) {
        chapters[chapters.length-1].formula = formulas0.join('\n');
        // tip 挂在"拆经"（第 2 卷）或第 1 卷
        const tipTarget = chapters[1] || chapters[0];
        tipTarget.tip = tips0.map(t => '• ' + t).join('<br>');
      }
      return chapters;
    }

    // ============================================================
    // 兜底：无 <h3> 时按段落拆（保留 v4.0 逻辑）
    // ============================================================
    let paras = [];
    if (/<(p|ul|ol|h[1-6])[^>]*>/i.test(content)) {
      const blocks = content.match(/<(p|ul|ol|h[1-6])\b[\s\S]*?<\/\1>/gi) || [];
      paras = blocks.map(b => b.trim()).filter(Boolean);
    }
    if (!paras.length) {
      const plain = content.replace(/<[^>]+>/g,'').trim();
      paras = plain.split(/\n{2,}|\r{2,}|(?<=[。！？])\s*\n/).map(s=>s.trim()).filter(Boolean);
    }
    if (!paras.length && content) paras = [content];

    // 公式（兼容 formulas / formula）
    const formulaField = m.formulas || m.formula;
    const formulas = Array.isArray(formulaField) ? formulaField.slice() :
                     (formulaField ? String(formulaField).split(/[\n;；]/).map(s=>s.trim()).filter(Boolean) : []);

    // 要点（兼容 keyPoints / tips / key_points）
    const tipsField = m.keyPoints || m.tips || m.key_points;
    const tips = Array.isArray(tipsField) ? tipsField.slice() :
                 (tipsField ? String(tipsField).split(/[\n;；]/).map(s=>s.trim()).filter(Boolean) : []);

    // 目标卷数：根据段落多少自动为 2~4 卷（避免过度拆或转到回到同一卷）
    let total;
    if (paras.length <= 2) total = 2;
    else if (paras.length <= 4) total = 2;
    else if (paras.length <= 6) total = 3;
    else total = 4;

    const roman = ['一','二','三','四','五','六','七','八','九','十'];
    const titlePool = [
      '初窥门径','引气入体','纳灵归元','聚气成脉','凝真化虚',
      '拨云见月','观星辨向','点石成金','拈花微笑','斗转星移',
    ];

    function evenSlice(arr, n, i) {
      if (!arr.length) return [];
      const start = Math.floor(i * arr.length / n);
      const end   = Math.floor((i + 1) * arr.length / n);
      return arr.slice(start, end);
    }

    for (let i = 0; i < total; i++) {
      const pChunk = evenSlice(paras, total, i);
      const fChunk = evenSlice(formulas, total, i);
      const tChunk = evenSlice(tips, total, i);
      let textHtml = pChunk.join('\n');
      if (!textHtml && content && i === 0) textHtml = content; // 兜底
      chapters.push({
        id: `c${i+1}`,
        title: `第${roman[i] || (i+1)}卷·${titlePool[i % titlePool.length]}`,
        text: textHtml,
        formula: fChunk.join('\n'),
        tip: tChunk.map(t => '• ' + t).join('<br>'),
      });
    }

    // 充充：如果某卷真的一点 text 都没有，把上一卷结尾拼一小句过去
    for (let i = 1; i < chapters.length; i++) {
      if (!chapters[i].text && chapters[i-1].text) {
        const prev = chapters[i-1].text.replace(/<[^>]+>/g,'').trim();
        if (prev.length > 60) {
          const tail = prev.slice(-60);
          chapters[i].text = `<p>承上一卷：${tail}…</p><p>本卷待归纳…</p>`;
        }
      }
    }
    return chapters;
  }

  // ============================================================
  // 二、师尊 / 弟子 剧情台词生成
  // ============================================================
  const MASTER_LINES = {
    physics: [
      '师尊抚须而笑：「万物皆有力道，此乃格物之基。」',
      '「小徒切记——先看清方向，再论大小，最后察其变。」',
      '「知其然，更要知其所以然。」',
    ],
    chemistry: [
      '丹师斜倚丹炉：「阴阳互济，方成大道。」',
      '「电子往来之间，便是这天地至理。」',
      '「多参悟一分，丹成时便多几成把握。」',
    ],
    geography: [
      '师太望向云海：「山川湖海皆有其道。」',
      '「读懂了风，读懂了水，便读懂了这片大地。」',
      '「小心观察，天地间的每一寸都是一部经文。」',
    ],
    math: [
      '算学宗师微微一笑：「数即是道。」',
      '「一笔一画，皆蕴天地至理。」',
    ],
    chinese: [
      '文宗轻抚长卷：「言之凿凿，其义自现。」',
      '「善读者不仅识字，更要识心。」',
    ],
    english: [
      '异国真人念出咒文：「Words are the key to distant worlds.」',
      '「多听多念，方能通灵。」',
    ],
  };
  function pickMasterLine(sect, seed) {
    const arr = MASTER_LINES[sect] || MASTER_LINES.physics;
    return arr[seed % arr.length];
  }

  // ============================================================
  // 三、师尊/弟子头像立绘（v4.0 新增 · 简易 SVG 人物 CG）
  //     不需要真实图片资源，用 SVG 立绘生成
  // ============================================================
  function _characterAvatar(role, sect) {
    // role: 'master' | 'disciple' | 'senior_sister'
    const colorMap = {
      physics: { robe:'#6ed5e0', trim:'#3b8b95', hair:'#2b3050' },
      chemistry:{ robe:'#f5c97a', trim:'#a8823a', hair:'#3d2820' },
      geography:{ robe:'#8ce28c', trim:'#3a7a3a', hair:'#4a3010' },
      math:    { robe:'#b288ff', trim:'#553d80', hair:'#2b1f5a' },
      chinese: { robe:'#ff9ec6', trim:'#a04868', hair:'#1a1a1a' },
      english: { robe:'#7fe0d4', trim:'#3a8a80', hair:'#c88b3c' },
    };
    const c = colorMap[sect] || colorMap.physics;
    if (role === 'master') {
      // 长胡子师尊
      return `
      <svg viewBox="0 0 100 140" style="width:100%;height:100%;">
        <defs>
          <linearGradient id="rb_m" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${c.robe}"/>
            <stop offset="1" stop-color="${c.trim}"/>
          </linearGradient>
          <radialGradient id="face_m" cx=".5" cy=".4" r=".6">
            <stop offset="0" stop-color="#ffe8d0"/>
            <stop offset="1" stop-color="#d9b088"/>
          </radialGradient>
        </defs>
        <!-- 长袍 -->
        <path d="M20,138 L30,70 Q50,55 70,70 L80,138 Z" fill="url(#rb_m)" stroke="${c.trim}" stroke-width="1.5"/>
        <!-- 束腰 -->
        <rect x="30" y="92" width="40" height="6" fill="#f5c97a"/>
        <!-- 头 -->
        <ellipse cx="50" cy="45" rx="16" ry="18" fill="url(#face_m)" stroke="#8a6a4a"/>
        <!-- 头发/发冠 -->
        <path d="M34,42 Q35,25 50,22 Q65,25 66,42 L64,36 Q50,28 36,36 Z" fill="${c.hair}"/>
        <rect x="46" y="22" width="8" height="4" fill="#f5c97a" stroke="#a8823a"/>
        <!-- 眉眼 -->
        <path d="M40,45 L46,44" stroke="#2a1a10" stroke-width="1.4" fill="none"/>
        <path d="M54,44 L60,45" stroke="#2a1a10" stroke-width="1.4" fill="none"/>
        <circle cx="43" cy="49" r="1.5" fill="#2a1a10"/>
        <circle cx="57" cy="49" r="1.5" fill="#2a1a10"/>
        <!-- 长胡须 -->
        <path d="M46,58 Q50,68 44,80" stroke="#e0e0e0" stroke-width="2" fill="none" opacity=".9"/>
        <path d="M54,58 Q50,68 56,80" stroke="#e0e0e0" stroke-width="2" fill="none" opacity=".9"/>
        <path d="M50,60 Q50,72 50,84" stroke="#f0f0f0" stroke-width="2" fill="none" opacity=".9"/>
        <!-- 手抚须 -->
        <ellipse cx="42" cy="82" rx="4" ry="5" fill="url(#face_m)"/>
        <!-- 光环 -->
        <circle cx="50" cy="45" r="24" fill="none" stroke="${c.robe}" stroke-width="0.5" opacity=".5">
          <animate attributeName="r" values="24;28;24" dur="3s" repeatCount="indefinite"/>
        </circle>
      </svg>`;
    }
    if (role === 'senior_sister') {
      // 二次元师姐（美少女）
      return `
      <svg viewBox="0 0 100 140" style="width:100%;height:100%;">
        <defs>
          <linearGradient id="rb_s" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${c.robe}"/>
            <stop offset="1" stop-color="${c.trim}"/>
          </linearGradient>
          <radialGradient id="face_s" cx=".5" cy=".45" r=".6">
            <stop offset="0" stop-color="#ffeee0"/>
            <stop offset="1" stop-color="#ffcdb5"/>
          </radialGradient>
        </defs>
        <!-- 长裙 -->
        <path d="M22,138 L28,70 Q50,58 72,70 L78,138 Z" fill="url(#rb_s)" stroke="${c.trim}" stroke-width="1.2"/>
        <!-- 腰带 -->
        <rect x="30" y="88" width="40" height="4" fill="#ffe6c0"/>
        <rect x="46" y="88" width="8" height="20" fill="#ff9ec6"/>
        <!-- 脸 -->
        <ellipse cx="50" cy="46" rx="14" ry="16" fill="url(#face_s)"/>
        <!-- 头发（长发飘） -->
        <path d="M34,40 Q30,25 50,18 Q70,25 68,42 L72,70 L64,64 L62,44 Q50,32 38,44 L36,64 L28,70 Z" fill="${c.hair}"/>
        <!-- 齐刘海 -->
        <path d="M36,36 Q50,32 64,36 L64,42 Q50,40 36,42 Z" fill="${c.hair}"/>
        <!-- 侧发 -->
        <path d="M32,42 Q28,58 30,74" stroke="${c.hair}" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M68,42 Q72,58 70,74" stroke="${c.hair}" stroke-width="4" fill="none" stroke-linecap="round"/>
        <!-- 发饰 -->
        <circle cx="34" cy="34" r="2.5" fill="#f5c97a"/>
        <circle cx="66" cy="34" r="2.5" fill="#f5c97a"/>
        <!-- 眼（大） -->
        <ellipse cx="43" cy="49" rx="2.8" ry="3.5" fill="#fff"/>
        <ellipse cx="57" cy="49" rx="2.8" ry="3.5" fill="#fff"/>
        <ellipse cx="43" cy="50" rx="2" ry="2.6" fill="${c.trim}"/>
        <ellipse cx="57" cy="50" rx="2" ry="2.6" fill="${c.trim}"/>
        <circle cx="43.5" cy="49" r=".7" fill="#fff"/>
        <circle cx="57.5" cy="49" r=".7" fill="#fff"/>
        <!-- 眉 -->
        <path d="M39,43 Q43,42 47,43.5" stroke="#3a2818" stroke-width="1.1" fill="none"/>
        <path d="M53,43.5 Q57,42 61,43" stroke="#3a2818" stroke-width="1.1" fill="none"/>
        <!-- 嘴 -->
        <path d="M46,58 Q50,60 54,58" stroke="#d05070" stroke-width="1.4" fill="none"/>
        <!-- 腮红 -->
        <ellipse cx="40" cy="55" rx="3" ry="1.5" fill="#ffb0c0" opacity=".6"/>
        <ellipse cx="60" cy="55" rx="3" ry="1.5" fill="#ffb0c0" opacity=".6"/>
        <!-- 光晕 -->
        <circle cx="50" cy="46" r="26" fill="none" stroke="#ffd5f0" stroke-width="0.5" opacity=".6">
          <animate attributeName="r" values="26;30;26" dur="2.5s" repeatCount="indefinite"/>
        </circle>
      </svg>`;
    }
    // 主角/弟子（第一人称视角常隐藏，用背影）
    return `
      <svg viewBox="0 0 100 140" style="width:100%;height:100%;">
        <path d="M25,138 L32,72 Q50,60 68,72 L75,138 Z" fill="${c.robe}" stroke="${c.trim}" stroke-width="1.2"/>
        <ellipse cx="50" cy="50" rx="15" ry="17" fill="#ffddc0"/>
        <path d="M35,44 Q34,26 50,22 Q66,26 65,44 L64,40 Q50,32 36,40 Z" fill="${c.hair}"/>
        <ellipse cx="44" cy="52" rx="2" ry="2.6" fill="${c.trim}"/>
        <ellipse cx="56" cy="52" rx="2" ry="2.6" fill="${c.trim}"/>
        <path d="M46,62 Q50,64 54,62" stroke="#d05070" stroke-width="1.2" fill="none"/>
      </svg>`;
  }

  // ============================================================
  // 四、场景背景（云雾山门等）
  // ============================================================
  function _sceneBG(mood) {
    // mood: 'sunrise' | 'moonlit' | 'battle' | 'inspire'
    const bgs = {
      sunrise: `
        <div class="im-scene-bg im-sunrise">
          <div class="im-sun"></div>
          <div class="im-mountain im-m1"></div>
          <div class="im-mountain im-m2"></div>
          <div class="im-mountain im-m3"></div>
          <div class="im-cloud im-c1"></div>
          <div class="im-cloud im-c2"></div>
        </div>`,
      moonlit: `
        <div class="im-scene-bg im-moonlit">
          <div class="im-moon"></div>
          <div class="im-stars">${_starsHtml(30)}</div>
          <div class="im-mountain im-m1 im-dark"></div>
          <div class="im-mountain im-m3 im-dark"></div>
        </div>`,
      inspire: `
        <div class="im-scene-bg im-inspire">
          <div class="im-radiance"></div>
          <div class="im-cloud im-c1"></div>
          <div class="im-cloud im-c2"></div>
          <div class="im-petals">${_petalsHtml(16)}</div>
        </div>`,
      battle: `
        <div class="im-scene-bg im-battle">
          <div class="im-blood"></div>
          <div class="im-mountain im-m1 im-red"></div>
          <div class="im-mountain im-m3 im-red"></div>
          <div class="im-particles">${_starsHtml(20, true)}</div>
        </div>`,
    };
    return bgs[mood] || bgs.sunrise;
  }
  function _starsHtml(n, red) {
    let out = '';
    for (let i = 0; i < n; i++) {
      const x = Math.random()*100, y = Math.random()*100, d = 1 + Math.random()*3;
      const c = red ? '#ff6060' : '#fff8dc';
      out += `<div class="im-star" style="left:${x}%;top:${y}%;width:${d}px;height:${d}px;background:${c};animation-delay:${Math.random()*2}s"></div>`;
    }
    return out;
  }
  function _petalsHtml(n) {
    let out = '';
    for (let i = 0; i < n; i++) {
      const x = Math.random()*100;
      const dur = 6 + Math.random()*6;
      const del = -Math.random()*8;
      const rot = Math.random()*360;
      out += `<div class="im-petal" style="left:${x}%;animation-duration:${dur}s;animation-delay:${del}s;transform:rotate(${rot}deg)"></div>`;
    }
    return out;
  }

  // ============================================================
  // 五、公式美化（把纯文字公式变成"仙经风"卷轴呈现）
  // ============================================================
  function beautifyFormula(text) {
    if (!text) return '';
    // 简单加卷轴装饰
    return `<div class="im-scroll">
      <div class="im-scroll-top"></div>
      <div class="im-scroll-body">
        <div class="im-scroll-content">${text.replace(/\n/g,'<br>')}</div>
      </div>
      <div class="im-scroll-bot"></div>
    </div>`;
  }

  // ============================================================
  // 六、主流程 · 六重入道
  // ============================================================
  const Immersive = {
    // 拆分章节（暴露给外部）
    splitToChapters,
    beautifyFormula,
    pickMasterLine,

    /**
     * 开始沉浸式参悟
     * @param {object} opts
     *   sect      学科 key
     *   manual    功法对象
     *   bank      对应学科题库
     *   onDone    参悟完成回调
     *   onExit    中途退出回调
     */
    startLearning(opts) {
      const { sect, manual, bank, onDone, onExit } = opts;
      const chapters = splitToChapters(manual);
      const state = {
        sect, manual, bank, chapters,
        currentChapter: 0,
        chapterMastered: new Array(chapters.length).fill(false),
        step: 'intro',  // intro → chapter → trial → complete
        onDone, onExit,
      };
      this._openIntro(state);
    },

    // Chapter 1 · 引道（师尊召见）
    _openIntro(state) {
      const { manual, sect } = state;
      const seed = (manual.id || '').length + (manual.title || '').length;
      const line = pickMasterLine(sect, seed);
      const masterSvg = _characterAvatar('master', sect);
      const disciplineName = { physics:'格物峰', chemistry:'炼丹峰', geography:'观星峰', math:'算道峰', chinese:'文华殿', english:'译道院' }[sect] || '玉衡峰';

      UI.modal({
        title:`⚔ ${manual.title} · 卷首·引道`,
        wide:true,
        body: `
          <div class="im-intro-scene">
            ${_sceneBG('sunrise')}
            <div class="im-intro-fg">
              <div class="im-master-frame">${masterSvg}</div>
              <div class="im-dialog">
                <div class="im-dialog-name">${disciplineName} · 师尊</div>
                <div class="im-dialog-text">${line}</div>
                <div class="im-dialog-hint">今日传你 <b style="color:var(--xx-gold);">${manual.title}</b> —— ${manual.tag || manual.chapter || '门内基础功法'}</div>
              </div>
            </div>
            <div class="im-chapter-index">
              ${state.chapters.map((c,i)=>`<span class="im-cidx">卷${i+1}·${c.title.split('·')[1]||c.title}</span>`).join('<span class="im-arr">→</span>')}
              <span class="im-arr">→</span>
              <span class="im-cidx im-cidx-goal">🏆 试炼</span>
            </div>
          </div>
        `,
        actions:[
          { label:'📕 稍后再学', onClick: state.onExit || (()=>{}) },
          { label:'✨ 恭请师尊传授', primary:true, onClick: () => {
            setTimeout(() => this._openChapter(state, 0), 250);
          }},
        ]
      });
    },

    // Chapter 2/3/4 · 拆经·演道·印证（合并为一个"章节页"）
    _openChapter(state, idx) {
      const { manual, sect, chapters, bank } = state;
      const ch = chapters[idx];
      if (!ch) { return this._openTrial(state); }
      state.currentChapter = idx;

      const progress = chapters.map((c,i) => {
        const cls = state.chapterMastered[i] ? 'done' : (i===idx ? 'current' : '');
        return `<span class="im-pgs ${cls}">卷${i+1}</span>`;
      }).join('<span class="im-pgs-arr">→</span>');

      // 拆解知识小要点
      // v4.2.1 修复：ch.text 里已包含 dlg-shifu/shijie/shimei/shixiong 对话卡，直接原样输出，不再简单 replace
      const bodyText = ch.text ? `<div class="im-body-text im-body-rich">${ch.text}</div>` : '';
      const formulaHtml = ch.formula ? beautifyFormula(ch.formula) : '';
      const tipHtml = ch.tip ? `<div class="im-tip"><span class="im-tip-mark">💡</span>${ch.tip}</div>` : '';

      // 演道：从题库挑一个简单示例做 AutoViz
      const demoQ = bank.filter(q => q.manualId === manual.id && (q.difficulty === 'easy' || q.difficulty === 'normal'))
                        .sort((a,b)=> (a.id > b.id ? 1 : -1))[idx % 3];
      let demoViz = '';
      if (demoQ && typeof AutoViz !== 'undefined') {
        demoViz = `
          <div class="im-demo">
            <div class="im-demo-title">🌀 观道演示 · 【${demoQ.type || demoQ.difficulty || '示例'}】</div>
            ${AutoViz.forQuestion(demoQ)}
            <div class="im-demo-hint">☝ 记住这个图，接下来印证时会用上</div>
          </div>`;
      }

      // 交互演道（若功法配了 interactive）
      let interactive = '';
      const hasIE = manual.interactive && typeof IE !== 'undefined' && IE && typeof IE.render === 'function';
      if (hasIE && idx === 0) {
        interactive = `
          <div class="im-ie-wrap">
            <div class="im-demo-title" style="color:var(--xx-purple);">🔬 交互演道 · 你也来试试 ↓</div>
            <div id="im-ie-stage-${manual.id}"></div>
          </div>`;
      }

      // 心声独白
      const monologue = [
        '（原来如此，我似乎明白了几分……）',
        '（这一卷若能吃透，下一卷便水到渠成。）',
        '（须得反复揣摩，方可融会贯通。）',
        '（灵光乍现，妙哉妙哉。）'
      ][idx % 4];

      // v4.2.2 galgame 升级：卷首场景 CG + 主角台词横幅
      const _sceneHint = {
        physics:   { title:'雷罚峰 · 物理之道', quote:'“万物之理，尽在式中。”' },
        chemistry: { title:'丹霞谷 · 化学之道', quote:'“钢丹需水候，控变需心景。”' },
        geography: { title:'地脉殿 · 地理之道', quote:'“山川百態，均有因果。”' },
        math:      { title:'算道宗 · 数学之道', quote:'“数与形，道之两仪。”' },
        chinese:   { title:'文字院 · 语文之道', quote:'“自古文章，手之于心。”' },
        english:   { title:'字樽阶 · 英语之道', quote:'“Language is a bridge to another realm.”' }
      }[sect] || { title:'云端仙山', quote:'“道阔且长，行则将至。”' };
      const heroBanner = `
        <div class="im-scene-cg" data-sect="${sect}">
          <div class="im-scene-title">${_sceneHint.title}</div>
          <div class="im-scene-sub">卷${idx+1} · ${ch.title}</div>
        </div>
        <div class="im-hero-banner">
          <div class="hero-quote">
            <span class="hero-title">${manual.title}</span>
            ${_sceneHint.quote}<br>
            <span style="color:#b8d4f5;font-size:12px;">—— 开卷 第 ${idx+1} / ${chapters.length} 卷</span>
          </div>
        </div>
      `;

      UI.modal({
        title:`📖 ${manual.title} · ${ch.title}`,
        wide:true,
        body:`
          <div class="im-progress">${progress}<span class="im-pgs-arr">→</span><span class="im-pgs">试炼</span></div>
          ${heroBanner}
          <div class="im-chapter-body">
            <div class="im-chapter-left">
              ${bodyText}
              ${formulaHtml}
              ${tipHtml}
              <div class="im-monologue">${monologue}</div>
            </div>
            <div class="im-chapter-right">
              ${demoViz}
              ${interactive}
            </div>
          </div>
        `,
        actions:[
          idx > 0 ? { label:'⬅ 回顾上一卷', onClick: () => { setTimeout(() => this._openChapter(state, idx-1), 200); } } : null,
          { label:'📋 卷末印证 ▶', primary:true, onClick: () => {
            setTimeout(() => this._openVerify(state, idx), 200);
          }},
        ].filter(Boolean)
      });

      if (hasIE && idx === 0) {
        setTimeout(() => {
          const stage = document.getElementById(`im-ie-stage-${manual.id}`);
          if (stage) {
            try { IE.render(stage, manual.interactive); }
            catch (e) { stage.innerHTML = `<div class="xx-empty">交互动画加载失败</div>`; }
          }
        }, 120);
      }
    },

    // 卷末印证 · 出一小题即时反馈
    // v4.1 修复：
    //   1) correctIdx 从 q.answer 字符串正确转换为索引（原来永远=0，导致"答案都是A"）
    //   2) 判断题自动生成"对/错"选项（原来判断题 options 为空导致无选项可选）
    //   3) 多选题支持多选（原来只按单选处理）
    //   4) 填空题走输入框
    //   5) 反馈后不自动跳转 —— 由用户点"继续 ▶"进入下一卷/回顾（原来 1400ms 强制跳）
    //   6) 答错时保留可回顾（"再看一遍"），不强制打回上一章
    _openVerify(state, idx) {
      const { manual, sect, chapters, bank } = state;
      const ch = chapters[idx];
      // 选一道 easy 题（不重复），并稳定绑定到 chapter idx，避免不同调用错位
      const usedIds = state._verifyUsed = state._verifyUsed || new Set();
      const boundMap = state._verifyByCh = state._verifyByCh || {};
      let q = boundMap[idx];
      if (!q) {
        const pool = bank
          .filter(qq => qq.manualId === manual.id
            && (qq.difficulty === 'easy' || qq.difficulty === 'normal')
            && !usedIds.has(qq.id));
        q = pool[0] || bank.find(qq => qq.manualId === manual.id) || bank[0];
        if (q) { usedIds.add(q.id); boundMap[idx] = q; }
      }

      if (!q) {
        state.chapterMastered[idx] = true;
        return this._nextChapter(state, idx);
      }

      const qtype = q.type || 'single';
      // === 关键修复：把 options 统一为 [{k, v}] 结构（k=A/B/C/D 或 对/错） ===
      const opts = _normalizeOptions(q);
      // === 关键修复：把 answer 转成 keys 集合，便于比对 ===
      const answerKeys = _normalizeAnswerKeys(q, opts);

      const vizHtml = (typeof AutoViz !== 'undefined') ? AutoViz.forQuestion(q) : '';

      // 输入类（fill）单独处理
      // v4.2.2 修复：calc 类型当作 fill 处理（避免无答题区卡死）
      const isFill = (qtype === 'fill' || qtype === 'calc' || qtype === 'solve' || qtype === 'essay');
      const isMulti = (qtype === 'multi');
      // 开关：若 single/judge 但 opts 为空，也回退 fill
      const isFillFallback = (!isFill && !isMulti && (!opts || !opts.length));

      // v4.1: 侧边悬浮工具在弹窗打开时保持置顶（否则用户点不到）
      if (typeof SideDock !== 'undefined' && SideDock.raiseZ) SideDock.raiseZ();

      UI.modal({
        title:`🔔 印证·卷${idx+1}小考`,
        wide:true,
        body:`
          <div class="im-verify-box">
            <div class="im-verify-hint">刚才所学，若已入心，请答此题以印证：<span style="color:var(--xx-cyan);font-size:12px;">（${_ptypeLabel(qtype)}）</span></div>
            <div class="im-verify-q">${q.q || q.question}</div>
            ${vizHtml}
            ${(isFill || isFillFallback)
              ? `<div class="im-verify-fill">
                   ${qtype === 'calc' || qtype === 'solve' || qtype === 'essay'
                     ? `<div style="margin-bottom:8px;padding:8px 12px;background:linear-gradient(90deg,rgba(245,201,122,.15),transparent);border-left:3px solid #f5c97a;border-radius:6px;font-size:12.5px;color:#f5c97a;">📐 计算/论述题：写下思路及最终答案，提交后会展示参考解。</div>`
                     : ''}
                   <textarea id="im-verify-input" placeholder="请输入答案…" autocomplete="off" rows="${qtype==='calc'||qtype==='solve'||qtype==='essay'?4:2}" style="width:100%;padding:12px 14px;font-size:15px;background:rgba(0,0,0,0.3);border:1px solid var(--xx-purple);border-radius:8px;color:var(--xx-text);resize:vertical;font-family:inherit;"></textarea>
                 </div>`
              : `<div class="im-verify-opts">
                  ${opts.map((o,i)=>`
                    <button class="im-verify-opt" data-k="${o.k}" data-i="${i}">
                      <span class="im-verify-mark">${o.k}</span>
                      <span class="im-verify-txt">${o.v}</span>
                    </button>
                  `).join('')}
                </div>${isMulti ? '<div style="font-size:12px;color:var(--xx-cyan);margin-top:8px;">💡 多选题：点选多个后按下方【出招印证】按钮。</div>' : ''}`
            }
            <div id="im-verify-fb" class="im-verify-fb"></div>
            <div id="im-verify-actions" class="im-verify-actions" style="display:flex;gap:10px;justify-content:flex-end;margin-top:12px;">
              ${(isMulti || isFill || isFillFallback)
                ? `<button class="xx-btn xx-btn-primary" id="im-verify-submit">⚔ 出招印证</button>`
                : ``
              }
            </div>
          </div>
        `,
        actions:[{ label:'关闭', onClick: () => { /* 允许中途关 */ } }]
      });

      setTimeout(() => {
        const multiPicks = new Set();

        // ---- 判定 & 反馈的核心函数 ----
        const doJudge = (userKeys, userText) => {
          let ok = false;
          if (isFill || isFillFallback) {
            const u = String(userText || '').trim().toLowerCase().replace(/\s+/g,'');
            const acc = Array.isArray(q.answer) ? q.answer : [q.answer];
            // 计算题/论述题：包含关键字就算过（宽松判定）
            if (qtype === 'calc' || qtype === 'solve' || qtype === 'essay') {
              ok = acc.some(a => {
                const key = String(a).trim().toLowerCase().replace(/\s+/g,'');
                return key && u && (u.includes(key) || key.includes(u.slice(0,10)));
              });
              // 若完全不匹配，自评模式：只要写了4个字以上就算尝试成功
              if (!ok && u.length >= 4) ok = true;
            } else {
              ok = acc.some(a => String(a).trim().toLowerCase().replace(/\s+/g,'') === u);
            }
          } else if (isMulti) {
            const u = [...userKeys].sort().join('');
            const a = answerKeys.slice().sort().join('');
            ok = u === a && u.length > 0;
          } else {
            ok = userKeys.length === 1 && answerKeys.includes(userKeys[0]);
          }

          // 标记选项
          document.querySelectorAll('.im-verify-opt').forEach(btn => {
            btn.style.pointerEvents = 'none';
            const k = btn.dataset.k;
            if (answerKeys.includes(k)) btn.classList.add('correct');
            if (userKeys.includes(k) && !answerKeys.includes(k)) btn.classList.add('wrong');
          });

          const fb = document.getElementById('im-verify-fb');
          const ansTxt = answerKeys.map(k => {
            const o = opts.find(x => x.k === k);
            return o ? (o.k + '. ' + o.v) : k;
          }).join(isMulti ? ' 、 ' : '');

          if (ok) {
            fb.innerHTML = `<div class="im-fb-good"><b>✨ 印证成功！</b><br>${q.explain || '此卷之精髓，你已握于掌中。'}</div>`;
            if (typeof Game !== 'undefined') Game.addExp(15);
            state.chapterMastered[idx] = true;
            if (typeof UI !== 'undefined' && UI.confetti) UI.confetti(30);
          } else {
            fb.innerHTML = `<div class="im-fb-bad"><b>💧 未过 ——</b> 正解：<b style="color:var(--xx-gold);">${ansTxt || (Array.isArray(q.answer)?q.answer.join(''):q.answer)}</b><br><i style="color:var(--xx-cyan);">${q.explain || '不必气馁，正是这些疑难，才让功法圆满。'}</i></div>`;
          }

          // v4.1: 反馈后显示【下一步】按钮，让用户主动继续（原来强制自动跳，看不清解析）
          const actWrap = document.getElementById('im-verify-actions');
          if (actWrap) {
            actWrap.innerHTML = ok
              ? `<button class="xx-btn xx-btn-primary" id="im-verify-next">继续下一卷 ▶</button>`
              : `<button class="xx-btn" id="im-verify-review">📖 再看此卷</button>
                 <button class="xx-btn xx-btn-primary" id="im-verify-skip">跳过此题继续 ▶</button>`;
            const bNext = document.getElementById('im-verify-next');
            const bRev  = document.getElementById('im-verify-review');
            const bSkip = document.getElementById('im-verify-skip');
            if (bNext) bNext.onclick = () => this._nextChapter(state, idx);
            if (bRev)  bRev.onclick  = () => this._openChapter(state, idx);
            if (bSkip) bSkip.onclick = () => this._nextChapter(state, idx);
          }
        };

        // ---- 选项 / 输入的绑定 ----
        if (isFill || isFillFallback) {
          const inp = document.getElementById('im-verify-input');
          const btn = document.getElementById('im-verify-submit');
          if (inp) inp.focus();
          if (btn) btn.onclick = () => doJudge([], inp ? inp.value : '');
          if (inp) inp.addEventListener('keydown', e => {
            if (e.key === 'Enter') doJudge([], inp.value);
          });
        } else if (isMulti) {
          document.querySelectorAll('.im-verify-opt').forEach(btn => {
            btn.onclick = () => {
              const k = btn.dataset.k;
              if (multiPicks.has(k)) { multiPicks.delete(k); btn.classList.remove('selected'); }
              else                   { multiPicks.add(k);    btn.classList.add('selected');    }
            };
          });
          const sub = document.getElementById('im-verify-submit');
          if (sub) sub.onclick = () => {
            if (multiPicks.size === 0) {
              if (typeof UI !== 'undefined' && UI.toast) UI.toast('请至少选一项', 'error');
              return;
            }
            doJudge([...multiPicks], null);
          };
        } else {
          // single / judge —— 点即判
          document.querySelectorAll('.im-verify-opt').forEach(btn => {
            btn.onclick = () => {
              const k = btn.dataset.k;
              btn.classList.add('selected');
              doJudge([k], null);
            };
          });
        }
      }, 100);
    },

    _nextChapter(state, idx) {
      if (idx + 1 >= state.chapters.length) {
        return this._openTrial(state);
      }
      this._openChapter(state, idx + 1);
    },

    // Chapter 5 · 综合试炼（3 妖兽小怪战）
    _openTrial(state) {
      const { manual, sect, bank } = state;
      const qs = bank
        .filter(q => q.manualId === manual.id && (q.difficulty === 'easy' || q.difficulty === 'normal'))
        .slice().sort(() => Math.random() - 0.5).slice(0, 3);

      if (!qs.length) {
        return this._openComplete(state);
      }

      UI.modal({
        title:`⚔ 试炼·斩三妖`,
        wide:true,
        body:`
          <div class="im-trial-hero">
            ${_sceneBG('battle')}
            <div class="im-trial-fg">
              <div style="font-family:var(--xx-font-art);font-size:22px;color:#ffd05a;text-shadow:0 0 12px rgba(255,208,90,0.6);letter-spacing:6px;">试 · 炼</div>
              <div style="margin-top:12px;color:var(--xx-text-soft);font-size:14px;line-height:1.9;">
                功法初成，尚需实战印证。<br>前方 <b style="color:#ff8080;">三尾邪妖</b> 挡道，斩之，方为参悟成功！
              </div>
              <div class="im-trial-monsters">
                ${qs.map((q,i)=>`<div class="im-mon-slot">${typeof PixelArt!=='undefined' ? PixelArt.monster(q.difficulty||'easy', sect) : '👹'}<div class="im-mon-name">第${['一','二','三'][i]}妖</div></div>`).join('')}
              </div>
            </div>
          </div>
        `,
        actions:[
          { label:'❌ 稍后再战', onClick: state.onExit || (()=>{}) },
          { label:'⚔ 出剑！', primary:true, onClick: () => {
            setTimeout(() => this._runTrialBattle(state, qs), 250);
          }}
        ]
      });
    },

    _runTrialBattle(state, qs) {
      // v4.0 FIX: 宽容通过——至少答3正2码到试炼即可领悟（以前一直卸载…）
      const stat = { right: 0, wrong: 0 };
      const runOne = (i) => {
        if (i >= qs.length) {
          // 已参与完毕：只要至少答对 1 道即视为参悟（不再卡在主线）
          if (stat.right >= 1) {
            this._openComplete(state);
          } else {
            UI.modal({
              title:'😔 试炼未过',
              body:`<p style="line-height:1.9;">你在 3 妖中只斩杀了 <b style="color:var(--xx-gold);">${stat.right}</b> 只。<br>不必气馁，回头再温习一番，重来即可。</p>`,
              actions:[
                { label:'回顾第一卷', onClick: () => this._openChapter(state, 0) },
                { label:'再战一场', primary:true, onClick: () => this._runTrialBattle(state, qs) },
              ]
            });
          }
          return;
        }
        const q = qs[i];
        // 单题战斗弹窗（用 UI.openBattle 若可用；否则用简化版）
        if (typeof UI !== 'undefined' && UI.openBattle) {
          let handled = false;   // 防重入（境内 onWin/onLose/onClose 任一会触发 onDone）
          UI.openBattle({
            question: q,
            sect: state.sect,
            monsterName: `${['青','赤','幽'][i]}尾邪妖`,
            difficulty: q.difficulty || 'normal',
            onDone: (ok) => {
              if (handled) return;
              handled = true;
              if (ok) stat.right++; else stat.wrong++;
              setTimeout(() => runOne(i+1), 400);
            }
          });
        } else {
          // 极简 fallback（v4.1 修复：正确按 q.answer 字符串对比，判断题自动生成对/错）
          const opts = _normalizeOptions(q);
          const answerKeys = _normalizeAnswerKeys(q, opts);
          UI.modal({
            title: `⚔ 妖·第${i+1}`,
            body: `<div class="im-verify-q">${q.q}</div>` +
                  `<div class="im-verify-opts">${opts.map(o=>`<button class="im-verify-opt" data-k="${o.k}">${o.k}. ${o.v}</button>`).join('')}</div>`,
            actions:[]
          });
          setTimeout(() => {
            document.querySelectorAll('.im-verify-opt').forEach(btn => {
              btn.onclick = () => {
                const k = btn.dataset.k;
                if (answerKeys.includes(k)) { stat.right++; UI.confetti(20); }
                else stat.wrong++;
                UI.close();
                setTimeout(() => runOne(i+1), 600);
              };
            });
          }, 100);
        }
      };
      runOne(0);
    },

    // Chapter 6 · 参悟成功
    _openComplete(state) {
      const { manual, sect } = state;
      const svg = _characterAvatar('senior_sister', sect);
      UI.modal({
        title:`✨ 参悟成功`,
        wide:true,
        body:`
          <div class="im-complete-scene">
            ${_sceneBG('inspire')}
            <div class="im-complete-fg">
              <div class="im-master-frame">${svg}</div>
              <div class="im-dialog">
                <div class="im-dialog-name">同门师姐</div>
                <div class="im-dialog-text">「你已参悟 <b style="color:var(--xx-gold);">${manual.title}</b>，恭喜师弟/师妹！<br>此后每半时辰皆可精进温习一次，切莫懈怠。」</div>
              </div>
              <div class="im-complete-title">🎊 <b>${manual.title}</b> · 参悟圆满</div>
            </div>
          </div>
        `,
        actions:[
          { label:'✨ 领取首悟大礼', primary:true, onClick: () => {
            // v4.0 FIX: onClick 返回后 modal 自动关闭；先回调触发领悟
            if (state.onDone) state.onDone(true);
            UI.confetti(150);
          }}
        ]
      });
    },
  };

  // ============================================================
  // v4.1 新增辅助函数 —— 题目/选项/答案的正确归一化
  //   修复历史 bug：之前用 correctIdx = q.answer(number) ⽼造成"答案总是A"
  // ============================================================

  // 把 q.options 统一到 [{k, v}]。判断题自动生成 对/错。
  function _normalizeOptions(q) {
    const type = q.type || 'single';
    if (type === 'judge') {
      // 判断题：试图使用题库自带 options，否则默认对/错（与 game-core.judgeAnswer 对齐）
      if (Array.isArray(q.options) && q.options.length) {
        return _mapStringOpts(q.options);
      }
      return [
        { k:'对', v:'○ 正确' },
        { k:'错', v:'✕ 错误' }
      ];
    }
    if (type === 'fill') return [];
    if (!Array.isArray(q.options) || !q.options.length) return [];
    return _mapStringOpts(q.options);
  }

  function _mapStringOpts(arr) {
    return arr.map((o, i) => {
      if (typeof o === 'string') {
        // 匹配 "A. xxx" / "A．xxx" / "A: xxx" / "A) xxx"
        const m = o.match(/^\s*([A-Z对错])\s*[\.\uff0e:\uff1a\)\uff09]?\s*(.+)$/);
        if (m) return { k: m[1], v: m[2] };
        return { k: String.fromCharCode(65 + i), v: o };
      }
      if (o && typeof o === 'object' && o.k) return o;
      return { k: String.fromCharCode(65 + i), v: String(o) };
    });
  }

  // 把 q.answer 归一化为 keys 数组。管它是 'A' / ['A','B'] / '对' / 数字索引 / 任意
  function _normalizeAnswerKeys(q, opts) {
    const a = q.answer;
    if (a == null) return [];
    if (typeof a === 'number') {
      const o = opts[a];
      return o ? [o.k] : [];
    }
    if (Array.isArray(a)) {
      return a.map(x => String(x).trim().toUpperCase());
    }
    // 字符串：可能是 'A' / 'A,B' / 'AC' / '对' / '错'
    const s = String(a).trim();
    if (s === '对' || s === '错') return [s];
    // 多字符：先按逗号分，再拆单字符
    if (s.includes(',') || s.includes('，')) {
      return s.split(/[,，]/).map(x => x.trim().toUpperCase()).filter(Boolean);
    }
    if (s.length > 1 && /^[A-Za-z]+$/.test(s)) {
      return s.toUpperCase().split('');
    }
    return [s.toUpperCase()];
  }

  function _ptypeLabel(t) {
    return {
      single:'单选题', multi:'多选题', judge:'判断题', fill:'填空题',
      calc:'计算题', solve:'解答题', essay:'论述题'
    }[t] || '题';
  }

  // v4.2.3 galgame：全局监听 dlg-* 头像点击 → 弹出立绘特写
  // 修复：v4.2.2 用了 genspark 私有 URL（用户浏览器 403 无法访问）→ 现改为本地相对路径
  // 根据页面位置自动识别前缀（index.html 与 subjects/*.html 相对路径不同）
  var _imgPrefix = (function() {
    try {
      var p = window.location.pathname || '';
      return p.indexOf('/subjects/') >= 0 ? '../assets/img/' : 'assets/img/';
    } catch(e) { return 'assets/img/'; }
  })();
  const CG_MAP = {
    'dlg-shifu':    { name:'师傅',   url: _imgPrefix + 'shifu.jpg'  },
    'dlg-shijie':   { name:'师姐',   url: _imgPrefix + 'shijie.jpg' },
    'dlg-shimei':   { name:'师妹',      url: _imgPrefix + 'shimei.jpg' },
    'dlg-shixiong': { name:'大师兄',      url: _imgPrefix + 'hero.jpg'   }
  };
  if (typeof document !== 'undefined') {
    document.addEventListener('click', function(e) {
      // 只处理头像区域（::before 无法直接监听，用坐标判断）
      const cls = Object.keys(CG_MAP).find(c => e.target.classList && e.target.classList.contains(c));
      if (!cls) return;
      const rect = e.target.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      // 头像在左侧前 84px（立绘 padding），需在此区域内才触发
      if (clickX > 84) return;
      const cg = CG_MAP[cls];
      const overlay = document.createElement('div');
      overlay.className = 'im-cg-overlay';
      overlay.innerHTML = `
        <img class="im-cg-portrait" src="${cg.url}" alt="${cg.name}"/>
        <div class="im-cg-name">${cg.name}</div>
        <div class="im-cg-close-hint">🅿️ 点击任意处关闭 · ESC</div>
      `;
      overlay.onclick = () => overlay.remove();
      document.body.appendChild(overlay);
      const onEsc = (ev) => { if (ev.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onEsc); } };
      document.addEventListener('keydown', onEsc);
    }, true);
  }

  global.Immersive = Immersive;
})(typeof window !== 'undefined' ? window : this);
