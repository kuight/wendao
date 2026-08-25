/* ============================================================
 * 《问道修仙学院》v5 · core/battle/monsters.js
 * M1 三个"演知识"知识点怪的数据模型
 *
 * 设计范式（V5_BLUEPRINT v0.5）：战斗=体验知识点。
 * 每个怪物的"招式机制" = 某个知识点的物理/逻辑定律。
 * 玩家对抗怪 = 运用知识点应对（对抗即理解），
 * 破绽命中后用题结算检验，再用 recordAnswer 记录熟练度。
 *
 * 招式结构（通用时间状态机）：
 * {
 *   id, kind('collide'|'accel'|'oscillate'), anim,
 *   dur, phases:[{label, t, to}],        // 阶段时间
 *   params:{ 物理参数 },                   // 由 update 翻译成 pos 移动
 *   onImpact/onProgress/onZone 可选钩子
 * }
 * ============================================================ */

// 三个知识点怪的招式定义
// 物理章节：振动与波 -> 知识点 id 用占位（运行时经 knowledge 反查，这里先用 stable 别名）
export const M1_MONSTERS = {
  // 怪 A · 反震犀牛（牛顿第三定律：力是相互的）
  // 玩家对撞/格挡它的冲撞 → 被反震弹回（演"力相互"）+ 怪反伤；
  // 玩家"看懂"后在撞击瞬间用 硬抗(借力顶住) → 破解反作用力 → 露破绽。
  // 应对链路：先被弹回感受"力相互" → 学用 硬抗 → 破绽 → 施法击败。
  ram: {
    id: 'ram',
    name: '反震犀牛',
    icon: '🦏',
    subject: 'phy',
    knowledgeId: 'phy_k3',        // 牛顿第三定律（占位，运行时反查）
    hp: 120, atk: 16, def: 8, speed: 10,
    stanceReq: { type: 'brace', n: 1 },  // 硬抗破解 1 次露破绽（需先看懂"力相互"）
    firstHitTip: '力相互……对撞必被弹回，试试在撞击瞬间顶住（x 硬抗）',  // 首次被弹回提示
    moves: [{
      id: 'ram', kind: 'collide', anim: 'dash',
      dur: 1.9,
      params: { speed: 9, recoil: 3, dashSpeed: 6 },   // 撞速 / 反震弹回距离 / 撞击视觉冲刺速度(瓦片每秒)
      phases: [
        { label: '蓄力', t: 0,   to: 0.8 },
        { label: '撞击', t: 0.8, to: 1.3 },
        { label: '眩晕', t: 1.3, to: 1.9 },
      ],
      onImpact(player) {
        // 犀牛在上方朝下（+y）冲撞：被撞后沿冲撞方向反推（向下 +y）或后仰。
        // recoil 以向量返回，由 battle/index.js 应用位移并夹紧到房间边界。
        const R = this.params.recoil;   // 弹回距离
        if (player.bracing) {
          // 硬抗：玩家借力顶住，破解"力相互" → 反作用力被卸掉 → 露破绽，几乎不后退
          return { blocked: true, braced: true, selfDmg: 0, recoilVec: { dx: 0, dy: 0.5 } };
        }
        if (player.guarding) {
          // 格挡：理解了一半，仍被小幅反震弹回 + 怪反伤（演"力相互"）
          return { blocked: true, recoil: true, selfDmg: 8, recoilVec: { dx: 0, dy: R } };
        }
        // 对撞：未防守 → 被完全弹回（向下）+ 怪反伤
        return { blocked: false, dmg: 16, recoil: true, recoilVec: { dx: 0, dy: R } };
      }
    }],
  },

  // Boss · 反震犀牛·王（第一章首领，HP/ATK 增强版，冲撞窗口更宽）
  boss_ram: {
    id: 'boss_ram',
    name: '反震犀牛·王',
    icon: '🦏',
    subject: 'phy',
    knowledgeId: 'phy_k3',
    hp: 400, atk: 24, def: 12, speed: 8,
    stanceReq: { type: 'brace', n: 1 },
    firstHitTip: '力可破万物……在撞击中领悟反作用力的真谛',
    moves: [{
      id: 'ram', kind: 'collide', anim: 'dash',
      dur: 1.9,
      params: { speed: 9, recoil: 4, dashSpeed: 8 },
      phases: [
        { label: '蓄力', t: 0,   to: 0.6 },
        { label: '撞击', t: 0.6, to: 1.4 },
        { label: '眩晕', t: 1.4, to: 1.9 },
      ],
      onImpact(player) {
        const R = this.params.recoil;
        if (player.bracing) return { blocked: true, braced: true, selfDmg: 0, recoilVec: { dx: 0, dy: 0.5 } };
        if (player.guarding) return { blocked: true, recoil: true, selfDmg: 12, recoilVec: { dx: 0, dy: R } };
        return { blocked: false, dmg: 28, recoil: true, recoilVec: { dx: 0, dy: R } };
      }
    }],
  },

  // 怪 B · 幻影隼（匀变速直线运动：x = v0·t + ½a·t²）
  // 玩家算预判在冲刺落点之前躲开 -> 闪避露破绽
  falcon: {
    id: 'falcon',
    name: '幻影隼',
    icon: '🦅',
    subject: 'phy',
    knowledgeId: 'phy_k2',        // 匀变速直线运动（占位）
    hp: 100, atk: 14, def: 6, speed: 14,
    stanceReq: { type: 'dodge', n: 1 },  // 成功躲开1次露破绽
    moves: [{
      id: 'dash', kind: 'accel', anim: 'dash',
      dur: 2.4,
      params: { a: 6, v0: 1, len: 14 },   // 加速度 / 初速 / 冲刺全长(瓦片)
      phases: [
        { label: '瞄准', t: 0,   to: 0.7 },
        { label: '冲刺', t: 0.7, to: 1.7 },
        { label: '僵直', t: 1.7, to: 2.4 },
      ],
      onProgress(dt, localT) {
        // 主阶段按匀变速推进 pos：速度每帧变化 -> 演"匀加速"
        const v = this.params.v0 + this.params.a * localT;
        return { dx: v * dt };
      },
      onImpact(player, pos) {
        const hit = Math.abs(player.pos.x - pos.x) < 1.5 && Math.abs(player.pos.y - pos.y) < 1.5;
        return hit ? { blocked: false, dmg: 14 } : { blocked: true, dodge: true };
      }
    }],
  },

  // 怪 C · 玄龟·钟摆（简谐振动：x = A·sin(ωt)，回复力 F=-kx）
  // 玩家算准周期，在平衡位置（速度最大、最脆弱）出手 -> 命中露破绽
  pendulum: {
    id: 'pendulum',
    name: '玄龟·钟摆',
    icon: '🐢',
    subject: 'phy',
    knowledgeId: 'phy_k13',       // 简谐振动（占位）
    hp: 110, atk: 12, def: 7, speed: 8,
    stanceReq: { type: 'timing', n: 1 },  // 平衡点出手1次露破绽
    moves: [{
      id: 'swing', kind: 'oscillate', anim: 'sweep',
      dur: 6.0,
      params: { amp: 6, freq: 1.0, centerX: 7 },  // 振幅 / 频率(Hz) / 平衡位置x
      phases: [
        { label: '往复', t: 0, to: 6.0 },
      ],
      onProgress(t) {
        // 整场简谐往复：x = center + amp·sin(ωt)  -> 演"F=-kx"
        return { x: this.params.centerX + this.params.amp * Math.sin(2 * Math.PI * this.params.freq * t) };
      },
      onZone(player, pos) {
        // 平衡位置（x≈centerX）瞬间，玩家出手 -> 致命一击露破绽
        const atEquilibrium = Math.abs(pos.x - this.params.centerX) < 0.6;
        if (atEquilibrium && player.strikeAt) {
          return { struck: true, dmg: 24 };
        }
        return { struck: false };
      }
    }],
  },
};