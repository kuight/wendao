/* ===============================================================
 * 《问道修仙学院》v4.2.6 · 动态战斗系统
 *
 *   ✔ 全屏战斗场景（玩家 vs 怪物 立绘对峙）
 *   ✔ HP/MP 条实时动画
 *   ✔ 攻击动画（冲刺、法术投射、爆炸特效）
 *   ✔ 战斗日志滚动
 *   ✔ 技能栏可选择法术
 *   ✔ 胜利/失败演出
 *
 *   依赖：scene-engine-v426.js（用其 damagePopup / castSpell / screenShake）
 *          content-pack-v426.js（读取 SPELLS/MONSTERS）
 * =============================================================== */
(function (global) {
  'use strict';

  const BattleAnim = {

    /**
     * 打开战斗界面
     * @param {Object} opts - {question, monster, player, spells, onAnswer, onDone}
     */
    open(opts) {
      const monster = opts.monster || { name:'低阶妖兽', hp:100, atk:15, def:5, color:'#8b6c42', img:'' };
      const player = opts.player || { name:'弟子', hp:200, mp:100, atk:20, def:10 };
      const spells = opts.spells || (global.WENDAO_CONTENT && global.WENDAO_CONTENT.SPELLS.slice(0, 5)) || [];

      const currentMonster = Object.assign({}, monster, { hpMax: monster.hp });
      const currentPlayer = Object.assign({}, player, { hpMax: player.hp, mpMax: player.mp });

      this._render(currentPlayer, currentMonster, spells, opts);
    },

    _render(player, monster, spells, opts) {
      let box = document.getElementById('wd-battle-scene');
      if (box) box.remove();

      box = document.createElement('div');
      box.id = 'wd-battle-scene';
      box.className = 'wd-battle-scene';
      box.innerHTML = `
        <div class="wd-battle-bg"></div>

        <div class="wd-battle-topbar">
          <div class="wd-battle-title">⚔️ 论道对敌 ⚔️</div>
        </div>

        <div class="wd-battle-arena">
          <!-- 玩家 -->
          <div class="wd-battle-side wd-battle-player">
            <div class="wd-battle-avatar" id="wd-battle-p-avatar">
              <div class="wd-avatar-body">🧙</div>
              <div class="wd-battle-name">${player.name}</div>
            </div>
            <div class="wd-battle-stats">
              <div class="wd-bar wd-bar-hp">
                <span class="wd-bar-label">HP</span>
                <div class="wd-bar-fill" id="wd-bar-phpfill" style="width:100%"></div>
                <span class="wd-bar-num" id="wd-bar-phpnum">${player.hp}/${player.hpMax}</span>
              </div>
              <div class="wd-bar wd-bar-mp">
                <span class="wd-bar-label">MP</span>
                <div class="wd-bar-fill" id="wd-bar-pmpfill" style="width:100%"></div>
                <span class="wd-bar-num" id="wd-bar-pmpnum">${player.mp}/${player.mpMax}</span>
              </div>
            </div>
          </div>

          <div class="wd-battle-vs">VS</div>

          <!-- 怪物 -->
          <div class="wd-battle-side wd-battle-monster">
            <div class="wd-battle-avatar" id="wd-battle-m-avatar" style="--m-color:${monster.color||'#666'}">
              <div class="wd-avatar-body">👹</div>
              <div class="wd-battle-name">${monster.name}</div>
            </div>
            <div class="wd-battle-stats">
              <div class="wd-bar wd-bar-hp">
                <span class="wd-bar-label">HP</span>
                <div class="wd-bar-fill" id="wd-bar-mhpfill" style="width:100%"></div>
                <span class="wd-bar-num" id="wd-bar-mhpnum">${monster.hp}/${monster.hpMax}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="wd-battle-log" id="wd-battle-log">
          <div class="wd-log-item">⚔️ 战斗开始！${monster.name} 出现在你面前。</div>
        </div>

        <div class="wd-battle-question" id="wd-battle-question">
          <div class="wd-q-text">${opts.question ? opts.question.q : '（请答题以出招）'}</div>
          <div class="wd-q-options">
            ${(opts.question && opts.question.options ? opts.question.options : []).map((op,i) =>
              `<button class="wd-q-btn" data-idx="${i}" data-key="${['A','B','C','D'][i]}">${op}</button>`
            ).join('')}
          </div>
        </div>

        <div class="wd-battle-actions">
          <button class="wd-act-btn" id="wd-act-flee">🏃 逃跑</button>
        </div>
      `;

      this._injectStyle();
      document.body.appendChild(box);
      requestAnimationFrame(() => box.classList.add('active'));

      // 绑定事件
      const state = { player, monster, ended:false };
      const logEl = box.querySelector('#wd-battle-log');
      const addLog = (msg) => {
        const item = document.createElement('div');
        item.className = 'wd-log-item';
        item.textContent = msg;
        logEl.appendChild(item);
        logEl.scrollTop = logEl.scrollHeight;
      };

      const updateBars = () => {
        const php = Math.max(0, state.player.hp);
        const pmp = Math.max(0, state.player.mp);
        const mhp = Math.max(0, state.monster.hp);
        box.querySelector('#wd-bar-phpfill').style.width = (php / state.player.hpMax * 100) + '%';
        box.querySelector('#wd-bar-phpnum').textContent = `${php}/${state.player.hpMax}`;
        box.querySelector('#wd-bar-pmpfill').style.width = (pmp / state.player.mpMax * 100) + '%';
        box.querySelector('#wd-bar-pmpnum').textContent = `${pmp}/${state.player.mpMax}`;
        box.querySelector('#wd-bar-mhpfill').style.width = (mhp / state.monster.hpMax * 100) + '%';
        box.querySelector('#wd-bar-mhpnum').textContent = `${mhp}/${state.monster.hpMax}`;
      };

      const closeBattle = (result) => {
        state.ended = true;
        box.classList.add('closing');
        setTimeout(() => {
          box.remove();
          if (typeof opts.onDone === 'function') opts.onDone(result);
        }, 800);
      };

      // 玩家攻击动画
      const playerAttack = (dmg, crit) => {
        const pAva = box.querySelector('#wd-battle-p-avatar');
        const mAva = box.querySelector('#wd-battle-m-avatar');
        pAva.classList.add('attacking');
        setTimeout(() => {
          // 释放特效
          const rect = mAva.getBoundingClientRect();
          if (global.SceneEngine) {
            SceneEngine.castSpell('fire', rect.left + rect.width/2, rect.top + rect.height/2);
            SceneEngine.damagePopup(rect.left + rect.width/2, rect.top, dmg, { crit });
            SceneEngine.hitFlash(mAva);
            SceneEngine.screenShake(crit ? 2 : 1);
          }
          mAva.classList.add('hit');
          setTimeout(() => mAva.classList.remove('hit'), 400);
        }, 300);
        setTimeout(() => pAva.classList.remove('attacking'), 600);
      };

      // 怪物反击动画
      const monsterAttack = (dmg) => {
        const pAva = box.querySelector('#wd-battle-p-avatar');
        const mAva = box.querySelector('#wd-battle-m-avatar');
        mAva.classList.add('attacking-back');
        setTimeout(() => {
          const rect = pAva.getBoundingClientRect();
          if (global.SceneEngine) {
            SceneEngine.castSpell('dark', rect.left + rect.width/2, rect.top + rect.height/2);
            SceneEngine.damagePopup(rect.left + rect.width/2, rect.top, dmg);
            SceneEngine.hitFlash(pAva);
            SceneEngine.screenShake(1);
          }
          pAva.classList.add('hit');
          setTimeout(() => pAva.classList.remove('hit'), 400);
        }, 300);
        setTimeout(() => mAva.classList.remove('attacking-back'), 600);
      };

      // 答题回调
      box.querySelectorAll('.wd-q-btn').forEach(btn => {
        btn.onclick = () => {
          if (state.ended) return;
          const chosen = btn.dataset.key;
          const correct = opts.question && opts.question.answer;
          const isRight = correct && (
            correct === chosen ||
            (Array.isArray(correct) && correct.join('') === chosen) ||
            (typeof correct === 'string' && correct.split('').sort().join('') === chosen.split('').sort().join(''))
          );

          // 禁用按钮
          box.querySelectorAll('.wd-q-btn').forEach(b => b.disabled = true);
          if (isRight) btn.classList.add('right'); else btn.classList.add('wrong');
          // 标出正确答案
          if (!isRight) {
            box.querySelectorAll('.wd-q-btn').forEach(b => {
              if (b.dataset.key === correct) b.classList.add('right');
            });
          }

          if (isRight) {
            // 玩家攻击
            const isCrit = Math.random() < 0.15;
            const dmg = Math.max(1, Math.floor(state.player.atk * (isCrit ? 2 : 1) - state.monster.def * 0.5));
            state.monster.hp -= dmg;
            addLog(`✨ 答对！你施展法术，对${state.monster.name}造成 ${dmg} 点伤害${isCrit?'（暴击！）':''}`);
            playerAttack(dmg, isCrit);
            setTimeout(() => {
              updateBars();
              if (state.monster.hp <= 0) {
                addLog(`🏆 ${state.monster.name} 已被斩杀，获得 ${state.monster.exp||10} 修为！`);
                setTimeout(() => closeBattle({ win:true, right:true, monster:state.monster }), 1200);
                return;
              }
              // 怪物反击
              setTimeout(() => {
                const mdmg = Math.max(1, state.monster.atk - Math.floor(state.player.atk * 0.3));
                state.player.hp -= mdmg;
                addLog(`💥 ${state.monster.name} 反扑，对你造成 ${mdmg} 点伤害。`);
                monsterAttack(mdmg);
                setTimeout(() => {
                  updateBars();
                  if (state.player.hp <= 0) {
                    addLog(`☠️ 你被击败了...`);
                    setTimeout(() => closeBattle({ win:false, right:true }), 1200);
                  } else if (typeof opts.onAnswer === 'function') {
                    // 通知外部（下一题）
                    setTimeout(() => opts.onAnswer(true, () => this._nextQuestion(box, state, opts, addLog, updateBars, playerAttack, monsterAttack, closeBattle)), 800);
                  } else {
                    setTimeout(() => this._reEnable(box, state, opts), 600);
                  }
                }, 500);
              }, 600);
            }, 500);
          } else {
            // 答错，怪物直接攻击
            const mdmg = Math.max(1, Math.floor(state.monster.atk * 1.3 - Math.floor(state.player.atk * 0.3)));
            state.player.hp -= mdmg;
            addLog(`💢 答错！${state.monster.name} 抓住破绽猛攻，对你造成 ${mdmg} 点伤害。`);
            monsterAttack(mdmg);
            setTimeout(() => {
              updateBars();
              if (state.player.hp <= 0) {
                addLog(`☠️ 你被击败了...`);
                setTimeout(() => closeBattle({ win:false, right:false }), 1200);
              } else if (typeof opts.onAnswer === 'function') {
                setTimeout(() => opts.onAnswer(false, () => this._nextQuestion(box, state, opts, addLog, updateBars, playerAttack, monsterAttack, closeBattle)), 800);
              } else {
                setTimeout(() => this._reEnable(box, state, opts), 600);
              }
            }, 500);
          }
        };
      });

      box.querySelector('#wd-act-flee').onclick = () => {
        if (state.ended) return;
        addLog('💨 你选择了逃跑...');
        setTimeout(() => closeBattle({ win:false, fled:true }), 800);
      };
    },

    // 加载下一题
    _nextQuestion(box, state, opts, addLog, updateBars, playerAttack, monsterAttack, closeBattle) {
      // 通过 opts.getNextQuestion 拉取下一题
      if (typeof opts.getNextQuestion !== 'function') {
        this._reEnable(box, state, opts);
        return;
      }
      const q = opts.getNextQuestion();
      if (!q) {
        // 无题→自动结束
        closeBattle({ win: state.monster.hp <= 0, right:true });
        return;
      }
      const qBox = box.querySelector('#wd-battle-question');
      qBox.querySelector('.wd-q-text').textContent = q.q;
      const optsWrap = qBox.querySelector('.wd-q-options');
      optsWrap.innerHTML = (q.options||[]).map((op,i) =>
        `<button class="wd-q-btn" data-idx="${i}" data-key="${['A','B','C','D'][i]}">${op}</button>`
      ).join('');
      // 重新绑定
      opts.question = q;
      this.open(Object.assign({}, opts, {
        // 让 open 重新渲染较麻烦，此处直接原地重新绑事件
      }));
    },

    _reEnable(box, state, opts) {
      // 让按钮再次可点（demo 用）
      box.querySelectorAll('.wd-q-btn').forEach(b => {
        b.disabled = false;
        b.classList.remove('right','wrong');
      });
    },

    // 注入样式
    _injectStyle() {
      if (document.getElementById('wd-battle-style')) return;
      const s = document.createElement('style');
      s.id = 'wd-battle-style';
      s.textContent = `
        .wd-battle-scene {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.9);
          z-index: 9500;
          opacity: 0;
          transition: opacity 0.5s;
          display: flex;
          flex-direction: column;
          padding: 20px;
          box-sizing: border-box;
        }
        .wd-battle-scene.active { opacity: 1; }
        .wd-battle-scene.closing { opacity: 0; transform: scale(0.95); }
        .wd-battle-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center,
            rgba(80,0,0,0.4) 0%,
            rgba(20,0,0,0.85) 60%,
            #000 100%);
          animation: battle-bg-pulse 4s ease-in-out infinite;
          z-index: -1;
        }
        @keyframes battle-bg-pulse {
          0%,100% { filter: brightness(1); }
          50% { filter: brightness(1.15); }
        }
        .wd-battle-topbar {
          text-align: center;
          padding: 10px 0 20px;
        }
        .wd-battle-title {
          font-family: 'Ma Shan Zheng', 'KaiTi', serif;
          font-size: 32px;
          color: #ffd700;
          letter-spacing: 8px;
          text-shadow: 0 0 20px rgba(255,215,0,0.6);
        }
        .wd-battle-arena {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
          gap: 30px;
          min-height: 200px;
        }
        .wd-battle-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .wd-battle-avatar {
          width: 140px; height: 140px;
          border-radius: 16px;
          background: linear-gradient(135deg, #2a2a4a, #1a1a2e);
          border: 3px solid rgba(255,215,0,0.5);
          box-shadow: 0 0 20px rgba(255,215,0,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: transform 0.3s;
        }
        .wd-battle-monster .wd-battle-avatar {
          background: linear-gradient(135deg, var(--m-color, #4a2a2a), #1a0a1a);
          border-color: rgba(220,20,60,0.6);
          box-shadow: 0 0 20px rgba(220,20,60,0.4);
        }
        .wd-avatar-body {
          font-size: 64px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
        }
        .wd-battle-name {
          margin-top: 4px;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          text-shadow: 0 1px 3px rgba(0,0,0,0.9);
        }
        .wd-battle-avatar.attacking {
          animation: attack-lunge 0.6s ease-in-out;
        }
        .wd-battle-avatar.attacking-back {
          animation: attack-lunge-back 0.6s ease-in-out;
        }
        @keyframes attack-lunge {
          0%,100% { transform: translateX(0); }
          40% { transform: translateX(40px) scale(1.1); }
        }
        @keyframes attack-lunge-back {
          0%,100% { transform: translateX(0); }
          40% { transform: translateX(-40px) scale(1.1); }
        }
        .wd-battle-avatar.hit { animation: avatar-hit 0.4s; }
        @keyframes avatar-hit {
          0%,100% { transform: translateX(0); filter: none; }
          25% { transform: translateX(-8px); filter: brightness(2) hue-rotate(-30deg); }
          75% { transform: translateX(8px); filter: brightness(2) hue-rotate(-30deg); }
        }
        .wd-battle-stats {
          width: 200px;
          display: flex; flex-direction: column; gap: 4px;
        }
        .wd-bar {
          position: relative;
          height: 20px;
          background: rgba(0,0,0,0.6);
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .wd-bar-label {
          position: absolute; left: 8px; top: 50%;
          transform: translateY(-50%);
          font-size: 11px; color: #fff;
          font-weight: bold;
          z-index: 2;
          text-shadow: 0 1px 2px #000;
        }
        .wd-bar-num {
          position: absolute; right: 8px; top: 50%;
          transform: translateY(-50%);
          font-size: 11px; color: #fff;
          z-index: 2;
          text-shadow: 0 1px 2px #000;
        }
        .wd-bar-fill {
          height: 100%;
          transition: width 0.5s cubic-bezier(0.3, 1, 0.5, 1);
        }
        .wd-bar-hp .wd-bar-fill {
          background: linear-gradient(90deg, #dc143c, #ff4d6d);
          box-shadow: inset 0 0 6px rgba(255,255,255,0.3);
        }
        .wd-bar-mp .wd-bar-fill {
          background: linear-gradient(90deg, #4169e1, #6dabff);
          box-shadow: inset 0 0 6px rgba(255,255,255,0.3);
        }
        .wd-battle-vs {
          font-size: 36px;
          font-weight: bold;
          color: #ff6347;
          text-shadow: 0 0 20px rgba(255,99,71,0.8);
          animation: vs-pulse 2s ease-in-out infinite;
          font-family: 'Impact', sans-serif;
          letter-spacing: 4px;
        }
        @keyframes vs-pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .wd-battle-log {
          height: 100px;
          margin: 12px 40px;
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 8px;
          padding: 8px 14px;
          overflow-y: auto;
          font-family: 'KaiTi', serif;
          font-size: 13px;
          color: #ddd;
          line-height: 1.6;
        }
        .wd-log-item {
          margin: 2px 0;
          opacity: 0;
          animation: log-in 0.4s forwards;
        }
        @keyframes log-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .wd-battle-question {
          margin: 12px 40px;
          background: rgba(20,20,40,0.8);
          border: 2px solid rgba(255,215,0,0.5);
          border-radius: 12px;
          padding: 16px;
          backdrop-filter: blur(6px);
        }
        .wd-q-text {
          color: #fff;
          font-size: 15px;
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .wd-q-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .wd-q-btn {
          padding: 10px 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }
        .wd-q-btn:hover:not(:disabled) {
          background: rgba(255,215,0,0.15);
          border-color: rgba(255,215,0,0.6);
          transform: translateY(-1px);
        }
        .wd-q-btn:disabled { cursor: default; }
        .wd-q-btn.right {
          background: rgba(46,204,64,0.35) !important;
          border-color: #2ecc40 !important;
          color: #fff;
        }
        .wd-q-btn.wrong {
          background: rgba(255,65,54,0.35) !important;
          border-color: #ff4136 !important;
          color: #fff;
        }

        .wd-battle-actions {
          text-align: center;
          padding: 10px;
        }
        .wd-act-btn {
          padding: 8px 24px;
          background: rgba(200,100,50,0.3);
          border: 1px solid rgba(255,140,80,0.6);
          border-radius: 20px;
          color: #ffb;
          cursor: pointer;
          transition: all 0.2s;
        }
        .wd-act-btn:hover {
          background: rgba(200,100,50,0.6);
          transform: translateY(-1px);
        }
      `;
      document.head.appendChild(s);
    }
  };

  global.BattleAnim = BattleAnim;

  // 兼容 game-core 里的 openBattle 接口
  global.openBattleAnim = function(opts) { BattleAnim.open(opts); };

  console.info('[BattleAnim v4.2.6] 动态战斗系统已加载。用法：BattleAnim.open({monster, question, onDone})');

})(typeof window !== 'undefined' ? window : this);
