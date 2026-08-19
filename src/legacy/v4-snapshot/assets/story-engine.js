/* ===================================================
 * 《问道修仙学院》v4.0 · 剧情 & 成就事件引擎
 *
 * 融合版：v3 完整功能 + v4 存档结构适配
 *  ✔ 场景/对话/分支/多段
 *  ✔ line 效果：flag/reward/hpDelta/mpDelta/daoxinDelta/pill/gear/pet/achievement
 *  ✔ 成就监听器：自动 hookup Game 事件流
 *  ✔ 突破境界剧情自动播放
 *  ✔ 地图节点剧情自动播放
 *  ✔ v4 存档结构（achievements = {}）
 * =================================================== */

(function (global) {
  'use strict';

  const Story = {

    play(sceneId, allScenes, onComplete) {
      const scenes = allScenes || global.STORY_DATA;
      const scene = scenes && scenes[sceneId];
      if (!scene) {
        console.warn('[Story] 找不到场景', sceneId);
        if (onComplete) onComplete();
        return;
      }
      this._renderScene(scene, scenes, onComplete);
      if (Game.state && !Game.state.story.seenScenes.includes(sceneId)) {
        Game.state.story.seenScenes.push(sceneId);
        Game.save();
      }
    },

    _applyLineEffects(line) {
      if (!line || !Game.state) return;
      const c = Game.state.char;
      if (line.flag) Game.setFlag(line.flag);
      if (line.reward) {
        if (line.reward.exp)     Game.addExp(line.reward.exp);
        if (line.reward.lingshi) Game.addLingshi(line.reward.lingshi);
        if (line.reward.daoxin)  Game.changeDaoxin(line.reward.daoxin);
      }
      if (typeof line.hpDelta === 'number' && c.hp !== undefined) {
        c.hp = Math.max(0, Math.min(c.maxHp || 100, c.hp + line.hpDelta));
      }
      if (typeof line.mpDelta === 'number' && c.mp !== undefined) {
        c.mp = Math.max(0, Math.min(c.maxMp || 50, c.mp + line.mpDelta));
      }
      if (typeof line.daoxinDelta === 'number') Game.changeDaoxin(line.daoxinDelta);
      if (line.pill && Game.addPill) Game.addPill(line.pill, line.pillNum || 1);
      if (line.gear && Game.addGear) Game.addGear(line.gear);
      if (line.pet && Game.adoptPet) Game.adoptPet(line.pet);
      // v4：成就是 object，非数组
      if (line.achievement) {
        Game.state.achievements = Game.state.achievements || {};
        const rec = Game.state.achievements[line.achievement];
        if (!rec || !rec.done) {
          Game.state.achievements[line.achievement] = { progress: 1, done: true, doneAt: Date.now() };
          if (Game.ACHIEVEMENTS && Game.ACHIEVEMENTS[line.achievement] && typeof UI !== 'undefined' && UI.toast) {
            const a = Game.ACHIEVEMENTS[line.achievement];
            UI.toast(`🏅 成就解锁：${a.name}`, 'success', 3500);
          }
        }
      }
      Game.save();
    },

    _renderScene(scene, allScenes, onComplete) {
      let mask = document.querySelector('.xx-modal-mask.story-mask');
      if (!mask) {
        mask = document.createElement('div');
        mask.className = 'xx-modal-mask story-mask';
        document.body.appendChild(mask);
      } else {
        mask.innerHTML = '';
      }
      const box = document.createElement('div');
      box.className = 'story-dialog';
      mask.appendChild(box);
      mask.dataset.storyReady = '0';
      mask.style.pointerEvents = 'none';
      mask.classList.add('show', 'is-open');
      setTimeout(() => {
        if (!mask || !mask.isConnected) return;
        mask.style.pointerEvents = '';
        mask.dataset.storyReady = '1';
      }, 1500);

      // 背景CG（若剧情指定 bg 且 PixelArt 存在，则渲染像素场景）
      if (scene.bg && typeof PixelArt !== 'undefined' && PixelArt.scene) {
        const bgWrap = document.createElement('div');
        bgWrap.className = 'story-bg';
        bgWrap.innerHTML = PixelArt.scene(scene.bg);
        box.appendChild(bgWrap);
      }

      let idx = 0;
      const lines = scene.lines || [];

      const finish = () => {
        mask.classList.remove('is-open', 'show');
        mask.remove();
        if (scene.reward) {
          if (scene.reward.exp)     Game.addExp(scene.reward.exp);
          if (scene.reward.lingshi) Game.addLingshi(scene.reward.lingshi);
        }
        if (scene.onEnd) scene.onEnd();
        if (onComplete) onComplete();
        if (typeof UI !== 'undefined' && UI.refreshTopbar) {
          UI.refreshTopbar({ backHref: (location.pathname.indexOf('/subjects/')>=0 ? '../index.html' : undefined) });
        }
      };

      const showLine = () => {
        if (idx >= lines.length) {
          if (scene.choices && scene.choices.length) {
            showChoices();
          } else {
            const contentEl = box.querySelector('.story-content') || box;
            contentEl.innerHTML += `<div style="text-align:right;margin-top:12px;">
              <button class="xx-btn xx-btn-primary" id="storyEnd">继续 →</button>
            </div>`;
            box.querySelector('#storyEnd').onclick = finish;
          }
          return;
        }
        const line = lines[idx];
        // 保留 bg，只更新 content
        let contentEl = box.querySelector('.story-content');
        if (!contentEl) {
          contentEl = document.createElement('div');
          contentEl.className = 'story-content';
          box.appendChild(contentEl);
        }
        // 角色 CG（若有）
        let charCg = '';
        if (line.charCg) {
          charCg = `<div class="story-char-cg">${line.charCg}</div>`;
        }
        contentEl.innerHTML = `
          ${charCg}
          <div class="story-speaker">
            <span class="story-speaker-avatar">${line.avatar || '👤'}</span>
            <span class="story-speaker-name">${line.speaker || ''}</span>
          </div>
          <div class="story-text">${line.text}</div>
          <div style="text-align:right;margin-top:14px;">
            <span style="font-size:12px;color:var(--xx-text-dim);">${idx + 1} / ${lines.length}</span>
            &nbsp;&nbsp;
            <button class="xx-btn xx-btn-sm" id="storyNext">${idx === lines.length - 1 && !(scene.choices && scene.choices.length) ? '收功 ✦' : '下一句 ▶'}</button>
          </div>
        `;
        this._applyLineEffects(line);
        contentEl.querySelector('#storyNext').onclick = () => { idx++; showLine(); };
      };

      const showChoices = () => {
        let contentEl = box.querySelector('.story-content');
        if (!contentEl) {
          contentEl = document.createElement('div');
          contentEl.className = 'story-content';
          box.appendChild(contentEl);
        }
        let html = `
          <div class="story-speaker">
            <span class="story-speaker-avatar">❓</span>
            <span class="story-speaker-name">道心抉择</span>
          </div>
          <div class="story-text">${scene.choicePrompt || '你将如何应对？'}</div>
          <div class="story-choices">
        `;
        scene.choices.forEach((c, i) => {
          html += `<div class="story-choice" data-i="${i}">${c.text}</div>`;
        });
        html += '</div>';
        contentEl.innerHTML = html;
        contentEl.querySelectorAll('.story-choice').forEach(el => {
          el.onclick = () => {
            const ch = scene.choices[parseInt(el.dataset.i)];
            this._applyLineEffects(ch);
            mask.remove();
            if (ch.next) {
              this.play(ch.next, allScenes, onComplete);
            } else {
              if (scene.onEnd) scene.onEnd();
              if (onComplete) onComplete();
              if (typeof UI !== 'undefined' && UI.refreshTopbar) {
                UI.refreshTopbar({ backHref: (location.pathname.indexOf('/subjects/')>=0 ? '../index.html' : undefined) });
              }
            }
          };
        });
      };

      showLine();
    },

    /**
     * 进入主页时自动尝试触发：开场剧情 / 灵根剧情
     */
    autoTriggerIfNeeded() {
      const data = global.STORY_DATA;
      if (!data || !Game.state) return;
      if (!Game.state.story.seenScenes.includes('prologue_01') && data['prologue_01']) {
        this.play('prologue_01', data, () => { if (UI && UI.refreshTopbar) UI.refreshTopbar(); });
        return;
      }
      if (!Game.state.char.spiritRoot && !Game.state.story.seenScenes.includes('spirit_root_intro') && data['spirit_root_intro']) {
        this.play('spirit_root_intro', data);
        return;
      }
    },

    tryPlayMapScene(nodeId) {
      const data = global.STORY_DATA;
      if (!data || !nodeId) return false;
      const sid = 'map_' + nodeId;
      if (data[sid] && !this.seen(sid)) {
        this.play(sid, data);
        return true;
      }
      return false;
    },

    seen(sceneId) {
      return Game.state && Game.state.story && Game.state.story.seenScenes.includes(sceneId);
    }
  };

  // ============================================================
  //  Achievement Listener
  // ============================================================
  const AchievementListener = {
    hooked: false,
    hookup() {
      if (this.hooked || !Game.on) return;
      this.hooked = true;
      Game.on('answer', (payload) => {
        payload = payload || {};
        if (Game._checkAchievements) Game._checkAchievements();
      });
      Game.on('battle_end', (payload) => {
        payload = payload || {};
        if (Game._dailyProgress) Game._dailyProgress('battle', 1);
        if (payload.win) {
          if (Game._dailyProgress) Game._dailyProgress('win', 1);
          if (payload.boss && Game._dailyProgress) Game._dailyProgress('boss', 1);
        }
        if (Game._checkAchievements) Game._checkAchievements();
      });
      Game.on('manualMastered', (payload) => {
        if (Game._checkAchievements) Game._checkAchievements();
      });
      Game.on('breakthrough', (payload) => {
        if (Game._checkAchievements) Game._checkAchievements();
        if (payload && payload.id && global.STORY_DATA) {
          // 用 tierKey 匹配剧情：breakthrough_<tierKey>_first （每大境界首次突破）
          const sid1 = 'breakthrough_' + payload.tierKey;
          const sid2 = 'breakthrough_' + payload.id;
          [sid1, sid2].forEach(sid => {
            if (global.STORY_DATA[sid] && !Story.seen(sid)) {
              setTimeout(() => Story.play(sid, global.STORY_DATA), 400);
            }
          });
        }
      });
      Game.on('achievementUnlock', (payload) => {
        if (payload && payload.achv && typeof UI !== 'undefined' && UI.toast) {
          UI.toast(`🏆 成就解锁：${payload.achv.name}`, 'success', 3500);
        }
      });
      console.log('[AchievementListener] v4 hooked ✓');
    }
  };

  global.Story = Story;
  global.AchievementListener = AchievementListener;

  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => AchievementListener.hookup(), 100);
      });
    } else {
      setTimeout(() => AchievementListener.hookup(), 100);
    }
  }

})(typeof window !== 'undefined' ? window : this);
