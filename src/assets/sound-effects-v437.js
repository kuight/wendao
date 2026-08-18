/* ===================================================================
 * 《问道修仙学院》v4.3.7 · 音效系统（Web Audio · 无外部依赖）
 *
 * 用法：
 *   <script src="assets/sound-effects-v437.js"></script>
 *   —— 加载后自动接管，答题正误/斩妖/破境/按钮点击/翻页 均有音效。
 *
 * 特点：
 *   ✓ 全部合成音效，不依赖网络与音频文件，零加载成本
 *   ✓ 自动 hook Game.on 事件（answer / breakthrough / gearChange 等）
 *   ✓ 提供全局 SFX.play(name) 接口 + BGM.play/stop
 *   ✓ 音量、静音、BGM 开关自动持久化到 localStorage
 *   ✓ 右下角浮动"音量控制条"（可折叠）
 * =================================================================== */

(function (global) {
  'use strict';

  // ---------------- 设置持久化 ----------------
  const LS_KEY = 'wendao_sfx_settings_v437';
  const settings = Object.assign({
    sfxOn: true,
    sfxVol: 0.55,
    bgmOn: true,
    bgmVol: 0.25
  }, (() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch (e) { return {}; }
  })());
  function saveSettings() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(settings)); } catch (e) {}
  }

  // ---------------- AudioContext ----------------
  let ac = null;
  function ctx() {
    if (!ac) {
      try {
        ac = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) { ac = null; }
    }
    if (ac && ac.state === 'suspended') { try { ac.resume(); } catch(e){} }
    return ac;
  }

  // ---------------- 基础合成器 ----------------
  function tone({ freq = 440, dur = 0.15, type = 'sine', vol = 1, attack = 0.005, decay = 0.05, sweep = 0, delay = 0 }) {
    const c = ctx(); if (!c || !settings.sfxOn) return;
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (sweep) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + sweep), t0 + dur);
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(vol * settings.sfxVol, t0 + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  function noise({ dur = 0.15, vol = 0.5, filterFreq = 800, delay = 0 }) {
    const c = ctx(); if (!c || !settings.sfxOn) return;
    const t0 = c.currentTime + delay;
    const bufSize = Math.floor(c.sampleRate * dur);
    const buf = c.createBuffer(1, bufSize, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource(); src.buffer = buf;
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = filterFreq; bp.Q.value = 1.5;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(vol * settings.sfxVol, t0 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bp).connect(g).connect(c.destination);
    src.start(t0); src.stop(t0 + dur + 0.05);
  }

  // ---------------- 预设音效库 ----------------
  const SFX_LIB = {
    // 通用 UI
    click:      () => tone({ freq: 720, dur: 0.06, type: 'triangle', vol: 0.4, sweep: -80 }),
    hover:      () => tone({ freq: 900, dur: 0.03, type: 'sine',     vol: 0.15 }),
    pageflip:   () => { noise({ dur: 0.10, vol: 0.35, filterFreq: 3500 }); tone({ freq: 1400, dur: 0.05, type:'triangle', vol:0.20, delay:0.02 }); },
    modalOpen:  () => { tone({ freq: 260, dur: 0.10, type:'sine', vol:0.35 }); tone({ freq: 520, dur: 0.10, type:'sine', vol:0.35, delay:0.05 }); },
    modalClose: () => { tone({ freq: 520, dur: 0.08, type:'sine', vol:0.30 }); tone({ freq: 220, dur: 0.10, type:'sine', vol:0.30, delay:0.04 }); },

    // 答题
    correct:    () => { // 悦耳大三和弦 C-E-G
      tone({ freq: 523.25, dur: 0.18, type: 'triangle', vol: 0.55 });
      tone({ freq: 659.25, dur: 0.20, type: 'triangle', vol: 0.55, delay: 0.06 });
      tone({ freq: 783.99, dur: 0.28, type: 'triangle', vol: 0.55, delay: 0.12 });
    },
    wrong:      () => { // 低沉不谐和二度
      tone({ freq: 220, dur: 0.20, type: 'sawtooth', vol: 0.45 });
      tone({ freq: 208, dur: 0.30, type: 'sawtooth', vol: 0.45, delay: 0.05 });
    },
    combo:      () => { // 连击加成叮咚
      tone({ freq: 880, dur: 0.06, type:'square', vol: 0.4 });
      tone({ freq: 1174, dur: 0.10, type:'square', vol: 0.4, delay: 0.06 });
      tone({ freq: 1568, dur: 0.14, type:'square', vol: 0.4, delay: 0.14 });
    },

    // 战斗
    swordHit:   () => { noise({ dur: 0.12, vol: 0.55, filterFreq: 2500 }); tone({ freq: 200, dur: 0.10, type:'sawtooth', vol: 0.35, sweep: -150 }); },
    critical:   () => { noise({ dur: 0.20, vol: 0.7, filterFreq: 3500 }); tone({ freq: 300, dur: 0.28, type:'sawtooth', vol: 0.5, sweep: -220 }); tone({ freq: 100, dur: 0.35, type:'sine', vol: 0.45, delay: 0.08 }); },
    monsterHit: () => { tone({ freq: 180, dur: 0.15, type:'square', vol: 0.5, sweep: -80 }); noise({ dur: 0.10, vol: 0.4, filterFreq: 600, delay: 0.02 }); },
    monsterDie: () => { tone({ freq: 400, dur: 0.30, type:'sawtooth', vol: 0.5, sweep: -350 }); noise({ dur: 0.35, vol: 0.4, filterFreq: 400, delay: 0.05 }); },
    fireball:   () => { for (let i=0;i<4;i++) tone({ freq: 600-i*80, dur: 0.10, type:'sawtooth', vol: 0.35, delay: i*0.03 }); },
    heal:       () => { // 治疗：向上滑
      tone({ freq: 440, dur: 0.20, type:'sine', vol:0.4, sweep: 200 });
      tone({ freq: 660, dur: 0.28, type:'sine', vol:0.4, delay:0.10, sweep: 200 });
    },

    // 破境/成就
    breakthrough: () => { // 破境：五音上行
      const scale = [523, 659, 784, 988, 1319];
      scale.forEach((f,i) => tone({ freq: f, dur: 0.22, type: 'triangle', vol: 0.55, delay: i*0.08 }));
      setTimeout(()=>{ tone({freq:1568, dur:0.6, type:'sine', vol:0.6}); noise({dur:0.5, vol:0.3, filterFreq:5000}); }, 500);
    },
    achievement: () => { // 成就：清脆铃声
      [1046, 1318, 1568].forEach((f,i)=> tone({ freq: f, dur: 0.30, type:'triangle', vol:0.55, delay: i*0.09 }));
    },
    levelUp:      () => { [392, 523, 659, 784].forEach((f,i)=>tone({freq:f,dur:0.18,type:'triangle',vol:0.5,delay:i*0.07})); },

    // 收集/物品
    coin:       () => { tone({ freq: 987.77, dur: 0.08, type:'square', vol:0.4 }); tone({ freq: 1318.51, dur: 0.14, type:'square', vol:0.4, delay:0.05 }); },
    gem:        () => { tone({ freq: 1568, dur: 0.10, type:'triangle', vol:0.5 }); tone({ freq: 2093, dur: 0.14, type:'triangle', vol:0.5, delay:0.05 }); },
    potion:     () => { for (let i=0;i<3;i++) tone({ freq: 400+i*200, dur:0.08, type:'sine', vol:0.35, delay:i*0.05 }); },

    // 场景
    doorOpen:   () => { noise({ dur: 0.40, vol: 0.35, filterFreq: 600 }); tone({ freq: 120, dur: 0.35, type:'sawtooth', vol: 0.3, sweep: 100 }); },
    thunder:    () => { noise({ dur: 0.60, vol: 0.7, filterFreq: 300 }); noise({ dur: 0.30, vol: 0.5, filterFreq: 150, delay: 0.20 }); },
    wind:       () => { noise({ dur: 1.2, vol: 0.25, filterFreq: 800 }); },

    // 学习相关
    scrollOpen: () => { noise({ dur: 0.25, vol: 0.3, filterFreq: 2000 }); tone({freq:660, dur:0.12, type:'triangle', vol:0.3, delay:0.1}); },
    inkbrush:   () => { noise({ dur: 0.18, vol: 0.25, filterFreq: 1500 }); },
    enlighten:  () => { // 参悟成功
      [523, 659, 784, 1047].forEach((f,i)=>tone({freq:f, dur:0.32, type:'sine', vol:0.5, delay:i*0.10}));
      tone({freq:1568, dur:0.5, type:'sine', vol:0.4, delay:0.5});
    }
  };

  // ---------------- BGM（简单和弦循环，非常轻） ----------------
  let bgmTimer = null;
  let bgmPlaying = false;
  function bgmLoop() {
    if (!bgmPlaying || !settings.bgmOn) return;
    const c = ctx(); if (!c) return;
    // 五声音阶主要用于修仙氛围：C-D-E-G-A
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    const notes = 8;
    const noteDur = 1.2;
    const t0 = c.currentTime;
    for (let i = 0; i < notes; i++) {
      const f = scale[Math.floor(Math.random() * scale.length)];
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      const startT = t0 + i * noteDur;
      g.gain.setValueAtTime(0, startT);
      g.gain.linearRampToValueAtTime(settings.bgmVol * 0.6, startT + 0.3);
      g.gain.exponentialRampToValueAtTime(0.0001, startT + noteDur * 0.9);
      osc.connect(g).connect(c.destination);
      osc.start(startT); osc.stop(startT + noteDur);
      // 低音伴奏（隔一拍）
      if (i % 2 === 0) {
        const bass = c.createOscillator();
        const bg = c.createGain();
        bass.type = 'triangle';
        bass.frequency.value = f / 4;
        bg.gain.setValueAtTime(0, startT);
        bg.gain.linearRampToValueAtTime(settings.bgmVol * 0.3, startT + 0.2);
        bg.gain.exponentialRampToValueAtTime(0.0001, startT + noteDur * 2 * 0.9);
        bass.connect(bg).connect(c.destination);
        bass.start(startT); bass.stop(startT + noteDur * 2);
      }
    }
    bgmTimer = setTimeout(bgmLoop, notes * noteDur * 1000);
  }

  // ---------------- 对外接口 ----------------
  const SFX = {
    play(name) {
      const fn = SFX_LIB[name];
      if (typeof fn === 'function') fn();
    },
    setVol(v) { settings.sfxVol = Math.max(0, Math.min(1, v)); saveSettings(); },
    setOn(on) { settings.sfxOn = !!on; saveSettings(); },
    settings
  };
  const BGM = {
    play() {
      if (!settings.bgmOn) return;
      if (bgmPlaying) return;
      bgmPlaying = true;
      ctx(); // 唤醒
      bgmLoop();
    },
    stop() {
      bgmPlaying = false;
      if (bgmTimer) { clearTimeout(bgmTimer); bgmTimer = null; }
    },
    setVol(v) { settings.bgmVol = Math.max(0, Math.min(1, v)); saveSettings(); },
    setOn(on) {
      settings.bgmOn = !!on; saveSettings();
      if (on) this.play(); else this.stop();
    }
  };
  global.SFX = SFX;
  global.BGM = BGM;

  // ---------------- 自动 hook ----------------
  function hookGameEvents() {
    if (typeof Game === 'undefined' || !Game.on) { setTimeout(hookGameEvents, 500); return; }
    Game.on('answer', (evt) => {
      if (evt && evt.correct) SFX.play('correct'); else SFX.play('wrong');
    });
    Game.on('breakthrough', () => SFX.play('breakthrough'));
    Game.on('achievementUnlock', () => SFX.play('achievement'));
    Game.on('manualMastered', () => SFX.play('enlighten'));
    Game.on('lingshiChange', (evt) => { if (evt && evt.delta > 0) SFX.play('coin'); });
    Game.on('gearChange', () => SFX.play('gem'));
    Game.on('petChange', () => SFX.play('potion'));
    Game.on('refined', () => SFX.play('scrollOpen'));
    // 用户首次点击后再启动 BGM（浏览器策略）
    if (settings.bgmOn) {
      const kick = () => { BGM.play(); document.removeEventListener('click', kick); document.removeEventListener('touchstart', kick); };
      document.addEventListener('click', kick);
      document.addEventListener('touchstart', kick);
    }
  }
  hookGameEvents();

  // 全局按钮点击音（委托）
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t) return;
    if (t.matches('button, .xx-btn, .iv-btn, .sect-card, .manual-card, .xx-tab, [data-play-sfx]')) {
      SFX.play(t.dataset.playSfx || 'click');
    }
  }, true);

  // ---------------- 右下浮动控制条 ----------------
  function mountPanel() {
    if (document.getElementById('sfx-panel-v437')) return;
    const panel = document.createElement('div');
    panel.id = 'sfx-panel-v437';
    panel.innerHTML = `
      <style>
        #sfx-panel-v437{position:fixed;right:12px;bottom:12px;z-index:99999;background:linear-gradient(135deg,#1e1a2e,#241a3a);border:1px solid #b288ff55;border-radius:14px;padding:8px 10px;box-shadow:0 6px 20px #0009;font-family:sans-serif;color:#e0d8ff;font-size:12px;user-select:none;transition:all .25s}
        #sfx-panel-v437.min{padding:6px 8px;opacity:.7}
        #sfx-panel-v437 .sfx-head{display:flex;align-items:center;gap:6px;cursor:pointer}
        #sfx-panel-v437 .sfx-title{font-weight:700;color:#f5c97a;letter-spacing:1px}
        #sfx-panel-v437 .sfx-body{margin-top:6px;display:flex;flex-direction:column;gap:6px}
        #sfx-panel-v437.min .sfx-body{display:none}
        #sfx-panel-v437 .row{display:flex;align-items:center;gap:6px;font-size:11px}
        #sfx-panel-v437 input[type=range]{width:88px}
        #sfx-panel-v437 label{cursor:pointer;display:flex;align-items:center;gap:4px}
        #sfx-panel-v437 button{background:#b288ff33;border:1px solid #b288ff55;color:#e0d8ff;border-radius:6px;padding:2px 6px;cursor:pointer;font-size:11px}
        #sfx-panel-v437 button:hover{background:#b288ff55}
      </style>
      <div class="sfx-head" id="sfx-head">
        <span class="sfx-title">🎵 音效</span>
        <span id="sfx-toggle-arrow">▼</span>
      </div>
      <div class="sfx-body">
        <div class="row"><label><input type="checkbox" id="sfx-on"> 音效</label>
          <input type="range" id="sfx-vol" min="0" max="100" step="1"></div>
        <div class="row"><label><input type="checkbox" id="bgm-on"> BGM</label>
          <input type="range" id="bgm-vol" min="0" max="100" step="1"></div>
        <div class="row" style="gap:4px;flex-wrap:wrap">
          <button data-t="click">👆</button>
          <button data-t="correct">✅</button>
          <button data-t="wrong">❌</button>
          <button data-t="swordHit">⚔</button>
          <button data-t="breakthrough">🌟</button>
        </div>
      </div>`;
    document.body.appendChild(panel);
    const $ = (id) => panel.querySelector('#'+id);
    $('sfx-on').checked = settings.sfxOn;
    $('bgm-on').checked = settings.bgmOn;
    $('sfx-vol').value = Math.round(settings.sfxVol * 100);
    $('bgm-vol').value = Math.round(settings.bgmVol * 100);
    $('sfx-on').onchange = e => { SFX.setOn(e.target.checked); if (e.target.checked) SFX.play('click'); };
    $('bgm-on').onchange = e => { BGM.setOn(e.target.checked); };
    $('sfx-vol').oninput = e => { SFX.setVol(e.target.value / 100); };
    $('bgm-vol').oninput = e => { BGM.setVol(e.target.value / 100); };
    panel.querySelectorAll('button[data-t]').forEach(b => b.onclick = (e) => { e.stopPropagation(); SFX.play(b.dataset.t); });
    let min = false;
    $('sfx-head').onclick = () => { min = !min; panel.classList.toggle('min', min); $('sfx-toggle-arrow').textContent = min ? '▲' : '▼'; };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountPanel);
  else mountPanel();

  console.log('[SFX v437] 音效系统已就绪');
})(typeof window !== 'undefined' ? window : this);
