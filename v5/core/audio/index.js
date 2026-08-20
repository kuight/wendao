/* ==================================================================
 * 《问道修仙学院》v5 · core/audio/index.js
 * 音效管理器（契约 INTERFACES.md）：
 *   boot.audio.play(name)       播放音效（合成器，无需音频文件）
 *   boot.audio.stop(name)       停止/截断当前发声
 *   boot.audio.setVolume(v)     音量 0..1
 *   boot.audio.preload(list)    预热音效（唤醒 AudioContext）
 *
 * 额外（非契约，供游戏层使用）：
 *   boot.audio.music            { start, stop, setVolume, setOn }
 *   boot.audio.settings         当前设置快照
 *
 * 底层合成器：core/audio/synth.js（Web Audio，零文件）。
 * ================================================================== */
import { createSynth, SOUND_NAMES } from './synth.js';

export function installAudio(boot) {
  'use strict';

  // 从 v4/本地持久化音量设置（可选）
  let presets = {};
  try {
    const raw = localStorage.getItem('wendao_sfx_settings_v437');
    if (raw) {
      const s = JSON.parse(raw);
      presets = {
        on: s.sfxOn !== false,
        vol: (typeof s.sfxVol === 'number') ? s.sfxVol : 0.55,
        musicOn: s.bgmOn !== false,
        musicVol: (typeof s.bgmVol === 'number') ? s.bgmVol : 0.25
      };
    }
  } catch (e) { presets = {}; }

  // 合成器实例
  const synth = createSynth({ presets });

  // ---- 契约接口 ----
  function play(name) { return synth.play(name); }
  function stop(name) {
    if (name === 'music') { synth.stopMusic(); return true; }
    return synth.stop(); // 无 name 则截断所有 SFX
  }
  function setVolume(v) {
    const vol = synth.setVolume(v);
    // 持久化，便于下次启动沿用
    try {
      const raw = localStorage.getItem('wendao_sfx_settings_v437') || '{}';
      const s = JSON.parse(raw);
      s.sfxVol = vol;
      localStorage.setItem('wendao_sfx_settings_v437', JSON.stringify(s));
    } catch (e) {}
    return vol;
  }
  function preload(list) {
    // 未传名单则预热全部内置音效
    return synth.preload(list || SOUND_NAMES);
  }

  // ---- 便捷：音乐 ----
  const music = {
    start: () => synth.startMusic(),
    stop: () => synth.stopMusic(),
    setVolume: (v) => {
      const vol = synth.setMusicVolume(v);
      try {
        const raw = localStorage.getItem('wendao_sfx_settings_v437') || '{}';
        const s = JSON.parse(raw);
        s.bgmVol = vol;
        localStorage.setItem('wendao_sfx_settings_v437', JSON.stringify(s));
      } catch (e) {}
      return vol;
    },
    setOn: (on) => synth.setMusicOn(on)
  };

  // ---- 自动 hook 关键事件（可选，游戏层也会主动调用） ----
  if (boot.bus && typeof boot.bus.on === 'function') {
    boot.bus.on('battle:answer', (evt) => {
      play(evt && evt.correct ? 'correct' : 'wrong');
    });
    boot.bus.on('battle:start', () => play('doorOpen'));
    boot.bus.on('battle:end', (evt) => {
      if (evt && evt.win) play('levelUp'); else play('monsterDie');
    });
  }

  // ---- 挂载 ----
  const audio = {
    play, stop, setVolume, preload,
    music,
    settings: synth.settings,
    names: SOUND_NAMES
  };
  boot.audio = audio;
  boot.register('audio', audio);
  boot.log && boot.log('[v5/audio] 音效管理器已挂载（Web Audio 合成器）');
  return audio;
}