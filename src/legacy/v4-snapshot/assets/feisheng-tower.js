(function (global) {
  var Game = global.Game = global.Game || {};
  var floorKeys = ['liànqì','zhùjī','jīndān','yuányīng','huàshén','liànxū','héti','dàchéng','dùjié','tiānmìng','xuánmén','fēishēng'];
  var hints = ['起','试','破','悟','镇','映','劫','越','鸣','焚','裂','升'];
  var rewardBase = [
    [1, 'liànqì', 800, 120, '起'],
    [2, 'zhùjī', 1600, 220, '试'],
    [3, 'jīndān', 2800, 360, '破'],
    [4, 'yuányīng', 4200, 520, '悟'],
    [5, 'huàshén', 6000, 760, '镇'],
    [6, 'liànxū', 8600, 1020, '映'],
    [7, 'héti', 11800, 1380, '劫'],
    [8, 'dàchéng', 15600, 1820, '越'],
    [9, 'dùjié', 20600, 2360, '鸣'],
    [10, 'tiānmìng', 26800, 3020, '焚'],
    [11, 'xuánmén', 34200, 3800, '裂'],
    [12, 'fēishēng', 48000, 5200, '升']
  ];

  Game.FEISHENG_REWARD_TABLE = rewardBase.map(function (row) {
    return { floor: row[0], realm: row[1], exp: row[2], shi: row[3], hint: row[4] };
  });
  Game.FEISHENG_BOSS_TABLE = {
    floor: 12,
    name: '天劫·飞升',
    hp: 188000,
    atk: 7200,
    def: 2600,
    skills: ['九天神雷', '元神出窍']
  };

  function ensureState(state) {
    var s = state || Game.state || {};
    if (!s.char) s.char = {};
    if (!Number.isFinite(s.char.feishengBest)) s.char.feishengBest = 0;
    if (typeof s.char.feishengCompleted !== 'boolean') s.char.feishengCompleted = false;
    return s;
  }

  Game.feishengBestFloor = function (state) {
    return Math.max(0, (ensureState(state).char.feishengBest | 0));
  };

  Game.feishengCurrentFloor = function (state) {
    var s = ensureState(state);
    if (s.char.feishengCompleted) return 12;
    return Math.min(12, Math.max(1, (s.char.feishengBest | 0) + 1));
  };

  Game.openFeishengTower = async function (state) {
    var s = ensureState(state);
    if (!(Game.isCultivationReadyForFeisheng && Game.isCultivationReadyForFeisheng(s))) {
      return { ok:false, message:'需化神期开启飞升宝塔' };
    }
    if (typeof global.location !== 'undefined') {
      var href = /\/subjects\//.test(global.location.pathname || '') ? '飞升宝塔.html' : 'subjects/飞升宝塔.html';
      global.location.href = href;
    }
    return { ok:true, currentFloor: Game.feishengCurrentFloor(s) };
  };

  function getEnemyForFloor(floorNum) {
    var floor = Math.max(1, Math.min(12, floorNum | 0));
    if (floor === 12) return Object.assign({}, Game.FEISHENG_BOSS_TABLE);
    var reqId = Math.max(2, floor * 2);
    var stats = Game.getTargetStatsForRealm ? Game.getTargetStatsForRealm(reqId) : { maxHp: 5000, atk: 300, def: 120 };
    var mul = 1 + floor * 0.22;
    return {
      floor: floor,
      name: '飞升宝塔第' + floor + '层守关者',
      hp: Math.round((stats.maxHp || 5000) * mul),
      atk: Math.round((stats.atk || 300) * mul),
      def: Math.round((stats.def || 120) * mul),
      skills: ['灵压震荡', '护体罡风']
    };
  }

  Game.feishengAttempt = async function (floorNum, state) {
    var s = ensureState(state);
    var floor = Math.max(1, Math.min(12, floorNum | 0));
    var char = s.char || {};
    var reqId = Math.max(2, floor * 2);
    if (!(Game.isCultivationReadyForFeisheng && Game.isCultivationReadyForFeisheng(s))) {
      return { ok:false, result:'locked', message:'需化神期开启飞升宝塔' };
    }
    if ((char.realmId | 0) < reqId) {
      var reqRealm = Game.getRealm ? Game.getRealm(reqId) : null;
      return { ok:false, result:'realm-low', message:'境界不足，需达到 ' + ((reqRealm && reqRealm.name) || ('境界 ' + reqId)) + ' 方可挑战本层' };
    }
    if (floor > ((char.feishengBest | 0) + 1) && !char.feishengCompleted) {
      return { ok:false, result:'skip', message:'需先通关前一层试炼' };
    }

    var enemy = getEnemyForFloor(floor);
    var bonus = Game.getPetBonus ? Game.getPetBonus() : { atk:0, def:0, hp:0 };
    var playerHp = Math.max(100, (char.maxHp || char.hp || 100) + (bonus.hp || 0));
    var playerAtk = Math.max(10, (char.atk || 10) + (bonus.atk || 0));
    var playerDef = Math.max(1, (char.def || 1) + (bonus.def || 0));
    var playerScore = playerHp * 0.55 + playerAtk * 14 + playerDef * 10 + ((char.realmId | 0) * 280);
    var enemyScore = enemy.hp * 0.52 + enemy.atk * 15 + enemy.def * 11 + floor * 520;
    var fatigue = Math.max(0.9, 1 - floor * 0.015);
    var chance = Math.max(0.08, Math.min(0.96, (playerScore * fatigue) / Math.max(1, enemyScore)));
    var roll = Math.random();
    var reward = Game.FEISHENG_REWARD_TABLE[floor - 1] || { exp:0, shi:0, hint:'起' };

    if (roll <= chance) {
      char.feishengBest = Math.max(char.feishengBest | 0, floor);
      if (typeof Game.addExp === 'function') Game.addExp(reward.exp || 0);
      if (typeof Game.addLingshi === 'function') Game.addLingshi(reward.shi || 0);
      if (floor === 12) {
        char.feishengCompleted = true;
        if (typeof Game.emit === 'function') Game.emit('feisheng-success', { floor:12, boss: Game.FEISHENG_BOSS_TABLE.name });
        if (typeof document !== 'undefined' && document.dispatchEvent && typeof CustomEvent !== 'undefined') {
          document.dispatchEvent(new CustomEvent('feisheng-success', { detail:{ floor:12, boss: Game.FEISHENG_BOSS_TABLE.name } }));
        }
        if (typeof global.dispatchEvent === 'function' && typeof CustomEvent !== 'undefined') {
          global.dispatchEvent(new CustomEvent('feisheng-success', { detail:{ floor:12, boss: Game.FEISHENG_BOSS_TABLE.name } }));
        }
      }
      if (typeof Game.save === 'function') Game.save();
      return {
        ok:true,
        result:'win',
        floor:floor,
        enemy:enemy,
        reward:reward,
        bestFloor:char.feishengBest | 0,
        message: floor === 12 ? '渡尽天劫，你已完成飞升试炼！' : ('第 ' + floor + ' 层试炼通过，继续向上攀登。')
      };
    }

    if (typeof Game.save === 'function') Game.save();
    return {
      ok:false,
      result:'lose',
      floor:floor,
      enemy:enemy,
      reward:{ exp: Math.floor((reward.exp || 0) * 0.2), shi: Math.floor((reward.shi || 0) * 0.2), hint: reward.hint, realm: reward.realm },
      message:'本层威压过盛，本次试炼失败，请先精进修为与灵宠加成。'
    };
  };
})(typeof window !== 'undefined' ? window : this);
