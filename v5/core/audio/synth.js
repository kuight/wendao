/* ==================================================================
 * 《问道修仙学院》v5 · core/audio/synth.js
 * Web Audio 合成器 —— 无任何音频文件也能发声（蓝图 §3.5 M4）
 *
 * 设计：
 *  - 纯 Vanilla JS / Web Audio API，零外部依赖。
 *  - 由 createSynth() 返回一个独立音效管理器实例。
 *  - 音效词汇沿用 v4 sound-effects-v437.js（click/correct/wrong/…），
 *    方便现有场景无缝复用，也提供 BGM 氛围循环。
 *  - AudioContext 懒创建 + 首次手势唤醒（浏览器自动播放策略）。
 *
 * 导出：
 *   createSynth()   -> { play, stop, setVolume, setOn, preload, getContext,
 *                        startMusic, stopMusic, setMusicVolume, settings }
 *   SOUND_NAMES     -> 内置音效名列表（供 preload / 校验）
 * ================================================================== */

'use strict';

/* ---------------- 常量：内置音效名清单 ---------------- */
export const SOUND_NAMES = [
  // 通用 UI
  'click', 'hover', 'pageflip', 'modalOpen', 'modalClose',
  // 答题
  'correct', 'wrong', 'combo', 'enlighten',
  // 战斗
  'swordHit', 'critical', 'monsterHit', 'monsterDie', 'fireball', 'heal',
  // 破境 / 成就
  'breakthrough', 'achievement', 'levelUp',
  // 收集 / 物品
  'coin', 'gem', 'potion',
  // 场景
  'doorOpen', 'thunder', 'wind', 'scrollOpen', 'inkbrush'
];

/* ---------------- 合成器工厂 ---------------- */
export function createSynth(opts) {
  opts = opts || {};
  const settings = Object.assign({
    on: true,          // 音效总开关
    vol: 0.55,         // 音效音量 0..1
    musicOn: true,     // BGM 开关
    musicVol: 0.25     // BGM 音量 0..1
  }, opts.presets || {});

  let ac = null;                 // AudioContext
  let noiseCache = {};           // 预生成噪声 buffer 缓存（key: dur 取整）
  let bgmTimer = null;           // BGM 循环句柄
  let bgmPlaying = false;        // BGM 是否在播
  let activeGains = new Set();   // 正在发声的 gain 节点（stop 用）

  /* ---------------- 上下文获取 / 唤醒 ---------------- */
  function ctx() {
    const AC = (typeof window !== 'undefined') &&
      (window.AudioContext || window.webkitAudioContext);
    if (!AC) return null;
    if (!ac) {
      try { ac = new AC(); } catch (e) { ac = null; }
    }
    if (ac && ac.state === 'suspended') { try { ac.resume(); } catch (e) {} }
    return ac;
  }
  function unlock() {
    const c = ctx();
    if (c && c.state === 'suspended') { try { c.resume(); } catch (e) {} }
  }
  // 首次用户手势统一解锁（幂等）
  if (typeof document !== 'undefined' && document.addEventListener) {
    const kick = () => { unlock(); };
    document.addEventListener('pointerdown', kick, { once: true });
    document.addEventListener('touchstart', kick, { once: true });
  }

  /* ---------------- 噪声 buffer（可复用，预加载友好） ---------------- */
  function noiseBuffer(dur) {
    const c = ctx(); if (!c) return null;
    const key = Math.round(dur * 1000);
    if (noiseCache[key]) return noiseCache[key];
    const frames = Math.max(1, Math.floor(c.sampleRate * dur));
    const buf = c.createBuffer(1, frames, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
    noiseCache[key] = buf;
    return buf;
  }

  /* ---------------- 基础原语：单音 ---------------- */
  function tone(opt) {
    const c = ctx();
    if (!c || !settings.on) return;
    opt = opt || {};
    const t0 = c.currentTime + (opt.delay || 0);
    const dur = opt.dur || 0.15;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = opt.type || 'sine';
    osc.frequency.setValueAtTime(opt.freq || 440, t0);
    if (opt.sweep) osc.frequency.exponentialRampToValueAtTime(
      Math.max(20, (opt.freq || 440) + opt.sweep), t0 + dur);
    const peak = (opt.vol === undefined ? 1 : opt.vol) * settings.vol;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(peak, t0 + (opt.attack || 0.005));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(c.destination);
    activeGains.add(g);
    const end = () => { activeGains.delete(g); osc.disconnect(); g.disconnect(); };
    osc.onended = end;
    osc.start(t0); osc.stop(t0 + dur + 0.05);
    return g;
  }

  /* ---------------- 基础原语：噪声（带通滤波） ---------------- */
  function noise(opt) {
    const c = ctx();
    if (!c || !settings.on) return;
    opt = opt || {};
    const buf = noiseBuffer(opt.dur || 0.15);
    if (!buf) return;
    const t0 = c.currentTime + (opt.delay || 0);
    const src = c.createBufferSource(); src.buffer = buf; src.loop = true;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = opt.filterFreq || 800;
    bp.Q.value = opt.q || 1.5;
    const g = c.createGain();
    const peak = (opt.vol === undefined ? 0.5 : opt.vol) * settings.vol;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(peak, t0 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + (opt.dur || 0.15));
    src.connect(bp).connect(g).connect(c.destination);
    activeGains.add(g);
    const end = () => { activeGains.delete(g); src.disconnect(); bp.disconnect(); g.disconnect(); };
    src.onended = end;
    src.start(t0); src.stop(t0 + (opt.dur || 0.15) + 0.05);
    return g;
  }

  /* ---------------- 音效库（对齐 v4 词汇） ---------------- */
  const LIB = {
    click:      () => tone({ freq: 720, dur: 0.06, type: 'triangle', vol: 0.4, sweep: -80 }),
    hover:      () => tone({ freq: 900, dur: 0.03, type: 'sine',     vol: 0.15 }),
    pageflip:   () => { noise({ dur: 0.10, vol: 0.35, filterFreq: 3500 }); tone({ freq: 1400, dur: 0.05, type: 'triangle', vol: 0.20, delay: 0.02 }); },
    modalOpen:  () => { tone({ freq: 260, dur: 0.10, type: 'sine', vol: 0.35 }); tone({ freq: 520, dur: 0.10, type: 'sine', vol: 0.35, delay: 0.05 }); },
    modalClose: () => { tone({ freq: 520, dur: 0.08, type: 'sine', vol: 0.30 }); tone({ freq: 220, dur: 0.10, type: 'sine', vol: 0.30, delay: 0.04 }); },

    correct: () => { // 悦耳大三和弦 C-E-G
      tone({ freq: 523.25, dur: 0.18, type: 'triangle', vol: 0.55 });
      tone({ freq: 659.25, dur: 0.20, type: 'triangle', vol: 0.55, delay: 0.06 });
      tone({ freq: 783.99, dur: 0.28, type: 'triangle', vol: 0.55, delay: 0.12 });
    },
    wrong: () => { // 低沉不谐和二度
      tone({ freq: 220, dur: 0.20, type: 'sawtooth', vol: 0.45 });
      tone({ freq: 208, dur: 0.30, type: 'sawtooth', vol: 0.45, delay: 0.05 });
    },
    combo: () => { // 连击叮咚（音高递增）
      tone({ freq: 880, dur: 0.06, type: 'square', vol: 0.4 });
      tone({ freq: 1174, dur: 0.10, type: 'square', vol: 0.4, delay: 0.06 });
      tone({ freq: 1568, dur: 0.14, type: 'square', vol: 0.4, delay: 0.14 });
    },
    enlighten: () => { // 参悟成功
      [523, 659, 784, 1047].forEach((f, i) => tone({ freq: f, dur: 0.32, type: 'sine', vol: 0.5, delay: i * 0.10 }));
      tone({ freq: 1568, dur: 0.5, type: 'sine', vol: 0.4, delay: 0.5 });
    },

    swordHit:   () => { noise({ dur: 0.12, vol: 0.55, filterFreq: 2500 }); tone({ freq: 200, dur: 0.10, type: 'sawtooth', vol: 0.35, sweep: -150 }); },
    critical:   () => { noise({ dur: 0.20, vol: 0.7, filterFreq: 3500 }); tone({ freq: 300, dur: 0.28, type: 'sawtooth', vol: 0.5, sweep: -220 }); tone({ freq: 100, dur: 0.35, type: 'sine', vol: 0.45, delay: 0.08 }); },
    monsterHit: () => { tone({ freq: 180, dur: 0.15, type: 'square', vol: 0.5, sweep: -80 }); noise({ dur: 0.10, vol: 0.4, filterFreq: 600, delay: 0.02 }); },
    monsterDie: () => { tone({ freq: 400, dur: 0.30, type: 'sawtooth', vol: 0.5, sweep: -350 }); noise({ dur: 0.35, vol: 0.4, filterFreq: 400, delay: 0.05 }); },
    fireball:   () => { for (let i = 0; i < 4; i++) tone({ freq: 600 - i * 80, dur: 0.10, type: 'sawtooth', vol: 0.35, delay: i * 0.03 }); },
    heal:       () => { tone({ freq: 440, dur: 0.20, type: 'sine', vol: 0.4, sweep: 200 }); tone({ freq: 660, dur: 0.28, type: 'sine', vol: 0.4, delay: 0.10, sweep: 200 }); },

    breakthrough: () => { // 破境：五音上行 + 银铃
      const scale = [523, 659, 784, 988, 1319];
      scale.forEach((f, i) => tone({ freq: f, dur: 0.22, type: 'triangle', vol: 0.55, delay: i * 0.08 }));
      setTimeout(() => { tone({ freq: 1568, dur: 0.6, type: 'sine', vol: 0.6 }); noise({ dur: 0.5, vol: 0.3, filterFreq: 5000 }); }, 500);
    },
    achievement: () => { [1046, 1318, 1568].forEach((f, i) => tone({ freq: f, dur: 0.30, type: 'triangle', vol: 0.55, delay: i * 0.09 })); },
    levelUp:     () => { [392, 523, 659, 784].forEach((f, i) => tone({ freq: f, dur: 0.18, type: 'triangle', vol: 0.5, delay: i * 0.07 })); },

    coin:  () => { tone({ freq: 987.77, dur: 0.08, type: 'square', vol: 0.4 }); tone({ freq: 1318.51, dur: 0.14, type: 'square', vol: 0.4, delay: 0.05 }); },
    gem:   () => { tone({ freq: 1568, dur: 0.10, type: 'triangle', vol: 0.5 }); tone({ freq: 2093, dur: 0.14, type: 'triangle', vol: 0.5, delay: 0.05 }); },
    potion: () => { for (let i = 0; i < 3; i++) tone({ freq: 400 + i * 200, dur: 0.08, type: 'sine', vol: 0.35, delay: i * 0.05 }); },

    doorOpen:   () => { noise({ dur: 0.40, vol: 0.35, filterFreq: 600 }); tone({ freq: 120, dur: 0.35, type: 'sawtooth', vol: 0.3, sweep: 100 }); },
    thunder:    () => { noise({ dur: 0.60, vol: 0.7, filterFreq: 300 }); noise({ dur: 0.30, vol: 0.5, filterFreq: 150, delay: 0.20 }); },
    wind:       () => { noise({ dur: 1.2, vol: 0.25, filterFreq: 800 }); },
    scrollOpen: () => { noise({ dur: 0.25, vol: 0.3, filterFreq: 2000 }); tone({ freq: 660, dur: 0.12, type: 'triangle', vol: 0.3, delay: 0.1 }); },
    inkbrush:   () => { noise({ dur: 0.18, vol: 0.25, filterFreq: 1500 }); }
  };

  /* ---------------- 对外接口：SFX ---------------- */
  function play(name) {
    const fn = LIB[name];
    if (typeof fn !== 'function') return false;
    fn();
    return true;
  }

  function stop() {
    // 立即截断所有正在发声的 gain（淡出到 0）
    const c = ac;
    if (!c) return;
    activeGains.forEach((g) => {
      try { g.gain.cancelScheduledValues(c.currentTime); g.gain.setTargetAtTime(0, c.currentTime, 0.01); } catch (e) {}
    });
    // 清空振荡器：重建 AC 以强制静音（最稳）
    activeGains.clear();
    try { ac.close(); } catch (e) {}
    ac = null;
    return true;
  }

  /* ---------------- BGM（五声音阶氛围循环，轻量） ---------------- */
  function bgmLoop() {
    if (!bgmPlaying || !settings.musicOn) return;
    const c = ctx(); if (!c) return;
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    const notes = 8, noteDur = 1.2, t0 = c.currentTime;
    for (let i = 0; i < notes; i++) {
      const f = scale[Math.floor(Math.random() * scale.length)];
      const osc = c.createOscillator(); const g = c.createGain();
      osc.type = 'sine'; osc.frequency.value = f;
      const st = t0 + i * noteDur;
      g.gain.setValueAtTime(0, st);
      g.gain.linearRampToValueAtTime(settings.musicVol * 0.6, st + 0.3);
      g.gain.exponentialRampToValueAtTime(0.0001, st + noteDur * 0.9);
      osc.connect(g).connect(c.destination);
      osc.start(st); osc.stop(st + noteDur);
      if (i % 2 === 0) { // 低音伴奏
        const bass = c.createOscillator(); const bg = c.createGain();
        bass.type = 'triangle'; bass.frequency.value = f / 4;
        bg.gain.setValueAtTime(0, st);
        bg.gain.linearRampToValueAtTime(settings.musicVol * 0.3, st + 0.2);
        bg.gain.exponentialRampToValueAtTime(0.0001, st + noteDur * 2 * 0.9);
        bass.connect(bg).connect(c.destination);
        bass.start(st); bass.stop(st + noteDur * 2);
      }
    }
    bgmTimer = setTimeout(bgmLoop, notes * noteDur * 1000);
  }
  function startMusic() {
    if (!settings.musicOn) return false;
    if (bgmPlaying) return true;
    bgmPlaying = true;
    ctx(); // 唤醒
    bgmLoop();
    return true;
  }
  function stopMusic() {
    bgmPlaying = false;
    if (bgmTimer) { clearTimeout(bgmTimer); bgmTimer = null; }
  }

  /* ---------------- 音量 / 开关 ---------------- */
  function setVolume(v) { settings.vol = Math.max(0, Math.min(1, v)); return settings.vol; }
  function setOn(on) { settings.on = !!on; return settings.on; }
  function setMusicVolume(v) { settings.musicVol = Math.max(0, Math.min(1, v)); return settings.musicVol; }
  function setMusicOn(on) {
    settings.musicOn = !!on;
    if (on) startMusic(); else stopMusic();
    return settings.musicOn;
  }

  /* ---------------- 预加载 / 唤醒 ---------------- */
  function preload(list) {
    // 预热 AudioContext（触发浏览器首次手势策略准备）
    const c = ctx();
    if (!c) return 0;
    // 预热常用噪声 buffer
    const lens = Array.isArray(list) ? list : (list || []);
    let warmed = 0;
    if (lens.length) {
      lens.forEach((name) => {
        if (LIB[name] && typeof LIB[name] === 'function') {
          // 仅预热噪声类；tone 类无需预构建
          if (name === 'thunder' || name === 'wind' || name === 'pageflip' ||
              name === 'swordHit' || name === 'critical' || name === 'monsterHit' ||
              name === 'monsterDie' || name === 'doorOpen' || name === 'inkbrush' ||
              name === 'scrollOpen') {
            try { noiseBuffer(1.2); } catch (e) {}
            warmed++;
          }
        }
      });
    }
    return warmed;
  }

  return {
    play,
    stop,
    setVolume,
    setOn,
    setMusicVolume,
    setMusicOn,
    startMusic,
    stopMusic,
    preload,
    getContext: () => ac,
    settings,
    get lib() { return LIB; }
  };
}