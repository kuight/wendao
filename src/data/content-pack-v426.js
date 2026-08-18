/* ===============================================================
 * 《问道修仙学院》v4.2.6 · 内容大扩充包
 *   —— 怪物、法术、物资、场所、宗门、灵植、丹药、法宝 全面扩充
 *
 * 独立文件，在 game-core.js 之后加载即可
 * 会自动合并到 global.WENDAO_CONTENT 命名空间，供 UI 层使用
 * =============================================================== */
(function (global) {
  'use strict';

  // ================================================================
  // 一、怪物大扩充（60只，覆盖各境界）
  // ================================================================
  const MONSTERS = [
    // ---- 炼气期怪物（10）新手村 ----
    { id:'m_001', name:'灵鼠', realm:'lianqi', hp:20, atk:5, def:1, exp:3, drop:['灵石×1','鼠毛'], desc:'林间常见小妖，喜偷灵果。', img:'monster/rat.png', color:'#a67c52' },
    { id:'m_002', name:'青蛇妖', realm:'lianqi', hp:30, atk:8, def:2, exp:5, drop:['蛇胆','灵石×2'], desc:'吐信迅捷，慎防其毒液。', img:'monster/snake.png', color:'#5aac5a' },
    { id:'m_003', name:'黑石傀儡', realm:'lianqi', hp:50, atk:6, def:5, exp:6, drop:['玄铁碎片×2'], desc:'古修士炼制的低阶傀儡，笨重但坚硬。', img:'monster/golem.png', color:'#4a4a4a' },
    { id:'m_004', name:'火蜥蜴', realm:'lianqi', hp:35, atk:10, def:3, exp:7, drop:['火晶×1','蜥蜴皮'], desc:'口吐火焰，对水系法术极其脆弱。', img:'monster/salamander.png', color:'#e76b3c' },
    { id:'m_005', name:'噬灵蜂', realm:'lianqi', hp:15, atk:12, def:1, exp:4, drop:['蜂王浆'], desc:'成群出没，单只弱但群攻可怕。', img:'monster/bee.png', color:'#f4d03f' },
    { id:'m_006', name:'血口蛤蟆', realm:'lianqi', hp:40, atk:7, def:4, exp:6, drop:['蛤蟆油','灵石×3'], desc:'皮糙肉厚，喷吐酸液。', img:'monster/toad.png', color:'#7a9a3c' },
    { id:'m_007', name:'骨爪僵尸', realm:'lianqi', hp:45, atk:9, def:3, exp:8, drop:['尸骨×1','阴煞珠'], desc:'埋于乱葬岗的低阶僵尸，怕火。', img:'monster/zombie.png', color:'#b8b8a0' },
    { id:'m_008', name:'风翼小妖', realm:'lianqi', hp:25, atk:11, def:2, exp:7, drop:['风羽×2'], desc:'速度飞快，需精准打击。', img:'monster/imp.png', color:'#c39bd3' },
    { id:'m_009', name:'苔藓爬虫', realm:'lianqi', hp:60, atk:4, def:8, exp:9, drop:['青苔精华'], desc:'皮硬如铠，攻击缓慢。', img:'monster/bug.png', color:'#5d8a6d' },
    { id:'m_010', name:'魅影小妖', realm:'lianqi', hp:20, atk:15, def:1, exp:10, drop:['影核×1'], desc:'虚实难辨，需专心才能命中。', img:'monster/ghost.png', color:'#8b7ab8' },

    // ---- 炼体期怪物（10）历练之地 ----
    { id:'m_011', name:'铜甲犀', realm:'lianti', hp:120, atk:20, def:15, exp:15, drop:['铜甲碎片','灵石×5'], desc:'皮糙如铁，蛮力冲撞。', img:'monster/rhino.png', color:'#8b6c42' },
    { id:'m_012', name:'紫电豹', realm:'lianti', hp:100, atk:35, def:8, exp:18, drop:['豹皮','紫电石'], desc:'迅捷如闪电，攻高防低。', img:'monster/leopard.png', color:'#663399' },
    { id:'m_013', name:'邪修弟子', realm:'lianti', hp:150, atk:25, def:12, exp:20, drop:['邪修袍','灵石×10'], desc:'邪门散修，法术阴毒。', img:'monster/cultist.png', color:'#4a1e5c' },
    { id:'m_014', name:'翼龙', realm:'lianti', hp:180, atk:30, def:15, exp:25, drop:['龙鳞×1','翼龙牙'], desc:'低阶飞行妖兽，会俯冲。', img:'monster/wyvern.png', color:'#3e5f8a' },
    { id:'m_015', name:'食灵藤', realm:'lianti', hp:200, atk:15, def:20, exp:22, drop:['灵藤×3'], desc:'寄生植物，吸食灵气。', img:'monster/vine.png', color:'#3f7a48' },
    { id:'m_016', name:'寒冰狼', realm:'lianti', hp:140, atk:28, def:10, exp:22, drop:['寒狼皮','冰晶'], desc:'群居冰属性妖狼，呼气成冰。', img:'monster/wolf.png', color:'#87ceeb' },
    { id:'m_017', name:'岩甲龟', realm:'lianti', hp:250, atk:12, def:35, exp:28, drop:['龟甲','土之精魄'], desc:'防御极高，缩壳时无懈可击。', img:'monster/turtle.png', color:'#8b7355' },
    { id:'m_018', name:'血眼蝠', realm:'lianti', hp:110, atk:32, def:6, exp:20, drop:['蝠翼','血晶'], desc:'昼伏夜出，吸血续命。', img:'monster/bat.png', color:'#8b0000' },
    { id:'m_019', name:'木灵傀儡', realm:'lianti', hp:170, atk:22, def:22, exp:25, drop:['灵木×2'], desc:'古族遗物，用符文驱动。', img:'monster/wooden.png', color:'#5e3a1a' },
    { id:'m_020', name:'邪灵鬼', realm:'lianti', hp:130, atk:35, def:8, exp:26, drop:['鬼火','阴魂×1'], desc:'游魂化厉，飘忽不定。', img:'monster/wraith.png', color:'#5d3f8a' },

    // ---- 筑基期怪物（10）宗门试炼 ----
    { id:'m_021', name:'金鳞蟒', realm:'zhuji', hp:500, atk:60, def:30, exp:60, drop:['金鳞×3','蛇内丹'], desc:'化蛟前的巨蟒，鳞坚如金。', img:'monster/python.png', color:'#daa520' },
    { id:'m_022', name:'雷电巨鹰', realm:'zhuji', hp:450, atk:80, def:25, exp:70, drop:['雷羽','鹰爪'], desc:'翱翔九天，喙如惊雷。', img:'monster/eagle.png', color:'#ffd700' },
    { id:'m_023', name:'炎魔战士', realm:'zhuji', hp:600, atk:75, def:40, exp:75, drop:['炎魔角','火种'], desc:'火系妖魔，浑身燃烧。', img:'monster/demon.png', color:'#ff4500' },
    { id:'m_024', name:'幽冥鬼将', realm:'zhuji', hp:550, atk:85, def:35, exp:80, drop:['鬼将旗','阴煞骨'], desc:'阴间军将，率鬼卒作战。', img:'monster/ghost-general.png', color:'#483d8b' },
    { id:'m_025', name:'血魔僧', realm:'zhuji', hp:700, atk:70, def:50, exp:85, drop:['血魔珠','血袈裟'], desc:'佛门败类，杀生为食。', img:'monster/monk.png', color:'#8b0000' },
    { id:'m_026', name:'剑冢剑灵', realm:'zhuji', hp:400, atk:120, def:20, exp:90, drop:['剑意结晶','断剑残片'], desc:'古剑积怨所化，剑气凌厉。', img:'monster/sword-spirit.png', color:'#c0c0c0' },
    { id:'m_027', name:'九尾狐妖', realm:'zhuji', hp:480, atk:90, def:30, exp:88, drop:['狐丹','九尾毛'], desc:'魅惑众生，一击致命。', img:'monster/fox.png', color:'#ff6b9d' },
    { id:'m_028', name:'蛊虫王', realm:'zhuji', hp:520, atk:65, def:55, exp:78, drop:['蛊王胆','异毒'], desc:'万蛊之王，毒抗极高。', img:'monster/bugworm.png', color:'#556b2f' },
    { id:'m_029', name:'铁血罗刹', realm:'zhuji', hp:750, atk:95, def:45, exp:95, drop:['罗刹角','铁血珠'], desc:'嗜血成性，越战越勇。', img:'monster/rakshasa.png', color:'#800020' },
    { id:'m_030', name:'古佛金刚', realm:'zhuji', hp:900, atk:70, def:70, exp:100, drop:['金刚舍利','佛骨'], desc:'佛法护体，刀枪难入。', img:'monster/vajra.png', color:'#ffd700' },

    // ---- 金丹期怪物（10）秘境 boss ----
    { id:'m_031', name:'紫电麒麟', realm:'jindan', hp:2000, atk:200, def:120, exp:250, drop:['麒麟角','紫电符'], desc:'仁兽却凶，非缘者不受。', img:'monster/qilin.png', color:'#9370db' },
    { id:'m_032', name:'冥河渡魂', realm:'jindan', hp:2500, atk:180, def:100, exp:280, drop:['渡魂灯','冥河水'], desc:'专渡亡魂，逆之则杀。', img:'monster/ferryman.png', color:'#2f4f4f' },
    { id:'m_033', name:'吞天巨鲲', realm:'jindan', hp:3500, atk:150, def:150, exp:320, drop:['鲲鳞','大海之心'], desc:'化鹏之前的形态，庞大无匹。', img:'monster/kun.png', color:'#4682b4' },
    { id:'m_034', name:'万剑冢主', realm:'jindan', hp:1800, atk:280, def:100, exp:300, drop:['剑冢令','万剑决'], desc:'万剑归一，剑意通天。', img:'monster/sword-master.png', color:'#e0e0e0' },
    { id:'m_035', name:'血河老祖', realm:'jindan', hp:2800, atk:220, def:130, exp:330, drop:['血河令','血神诀'], desc:'魔道大能，血为兵刃。', img:'monster/blood-lord.png', color:'#8b0000' },
    { id:'m_036', name:'雷劫魔君', realm:'jindan', hp:2200, atk:260, def:110, exp:310, drop:['雷君玉简','劫雷种子'], desc:'历劫失败堕落，雷法通神。', img:'monster/thunder-lord.png', color:'#4169e1' },
    { id:'m_037', name:'冰封女帝', realm:'jindan', hp:2400, atk:210, def:130, exp:315, drop:['帝女泪','极寒精魄'], desc:'冷艳绝伦，一念冰封万里。', img:'monster/ice-queen.png', color:'#b0e0e6' },
    { id:'m_038', name:'魂魔尸皇', realm:'jindan', hp:3000, atk:190, def:180, exp:340, drop:['尸皇袍','邪骨'], desc:'万年尸修，肉身不朽。', img:'monster/lich.png', color:'#556b2f' },
    { id:'m_039', name:'邪佛真人', realm:'jindan', hp:2600, atk:230, def:140, exp:320, drop:['邪佛珠','舍利黑莲'], desc:'走火入魔的佛修，亦正亦邪。', img:'monster/dark-buddha.png', color:'#4a2c5f' },
    { id:'m_040', name:'幻境妖尊', realm:'jindan', hp:1900, atk:250, def:120, exp:325, drop:['幻境水晶','妖尊瞳'], desc:'困于幻境，操纵现实。', img:'monster/illusion-lord.png', color:'#da70d6' },

    // ---- 元婴~化神期怪物（10）大 boss ----
    { id:'m_041', name:'雷渊蛟龙', realm:'yuanying', hp:8000, atk:500, def:300, exp:800, drop:['蛟龙珠','龙筋'], desc:'蛟化龙之前的雷渊守护者。', img:'monster/dragon-thunder.png', color:'#ffd700' },
    { id:'m_042', name:'炼狱魔尊', realm:'yuanying', hp:9500, atk:480, def:320, exp:850, drop:['炼狱印','魔尊心'], desc:'魔界至尊之一，火焚八方。', img:'monster/demon-lord.png', color:'#dc143c' },
    { id:'m_043', name:'混沌血兽', realm:'yuanying', hp:12000, atk:400, def:400, exp:900, drop:['混沌血','兽核'], desc:'混沌初开时的凶兽后裔。', img:'monster/chaos-beast.png', color:'#4b0082' },
    { id:'m_044', name:'剑仙残魂', realm:'yuanying', hp:6000, atk:700, def:200, exp:820, drop:['剑仙残魂','天罡剑意'], desc:'上古剑仙陨落所留残魂。', img:'monster/sword-immortal.png', color:'#eeeeee' },
    { id:'m_045', name:'血神魔佛', realm:'huashen', hp:20000, atk:800, def:500, exp:1600, drop:['血神真血','魔佛心经'], desc:'亦魔亦佛，颠倒众生。', img:'monster/blood-god.png', color:'#800020' },
    { id:'m_046', name:'时空吞噬者', realm:'huashen', hp:25000, atk:750, def:550, exp:1800, drop:['时空碎片','吞噬瞳'], desc:'来自域外，吞噬时空。', img:'monster/void-eater.png', color:'#1a1a2e' },
    { id:'m_047', name:'太古神龙', realm:'huashen', hp:30000, atk:900, def:600, exp:2000, drop:['神龙鳞','龙魂'], desc:'太古洪荒神兽，一鳞可镇一界。', img:'monster/god-dragon.png', color:'#ffd700' },
    { id:'m_048', name:'仙魔九头蛇', realm:'huashen', hp:28000, atk:820, def:520, exp:1900, drop:['九头蛇心','仙魔鳞'], desc:'斩一头生九头，越战越强。', img:'monster/hydra.png', color:'#3a7d44' },
    { id:'m_049', name:'万象魔灵', realm:'huashen', hp:22000, atk:850, def:480, exp:1750, drop:['万象珠','魔灵印'], desc:'能化万物之形，攻我以己形。', img:'monster/mimic.png', color:'#8b008b' },
    { id:'m_050', name:'轮回大魔', realm:'huashen', hp:35000, atk:1000, def:700, exp:2500, drop:['轮回眼','大魔本源'], desc:'掌控生死轮回的巨魔。', img:'monster/reincarnator.png', color:'#301934' },

    // ---- 渡劫~登仙期怪物（10）终局 ----
    { id:'m_051', name:'紫霄天雷', realm:'dujie', hp:50000, atk:1500, def:900, exp:5000, drop:['紫霄雷精','雷劫种子'], desc:'渡劫时的天罚化身，非物非灵。', img:'monster/sky-thunder.png', color:'#9370db' },
    { id:'m_052', name:'仙魔战神', realm:'dujie', hp:60000, atk:1800, def:1000, exp:5500, drop:['战神残章','仙魔血'], desc:'上古神战陨落者复苏。', img:'monster/war-god.png', color:'#daa520' },
    { id:'m_053', name:'洪荒凶兽', realm:'dujie', hp:80000, atk:1400, def:1200, exp:6000, drop:['凶兽本源','洪荒之魂'], desc:'洪荒时代的十大凶兽之一。', img:'monster/primal-beast.png', color:'#8b4513' },
    { id:'m_054', name:'仙域使者', realm:'dujie', hp:70000, atk:2000, def:1100, exp:6500, drop:['仙域令','使者羽衣'], desc:'仙界派下的下界执法者。', img:'monster/celestial.png', color:'#ffffe0' },
    { id:'m_055', name:'太上真魔', realm:'dujie', hp:90000, atk:2200, def:1300, exp:7500, drop:['太上魔典','真魔血滴'], desc:'魔道至高存在，一念灭星辰。', img:'monster/supreme-demon.png', color:'#4a0033' },
    { id:'m_056', name:'天道傀儡', realm:'dengxian', hp:150000, atk:2500, def:1800, exp:12000, drop:['天道碎片','律法钥匙'], desc:'天道自身派下的执法傀儡。', img:'monster/heavenly-puppet.png', color:'#f0e68c' },
    { id:'m_057', name:'太一混沌', realm:'dengxian', hp:200000, atk:2800, def:2000, exp:15000, drop:['太一石','混沌根源'], desc:'混沌之初的第一缕意识。', img:'monster/tai-yi.png', color:'#000033' },
    { id:'m_058', name:'万道之主', realm:'dengxian', hp:250000, atk:3000, def:2500, exp:18000, drop:['万道印','主宰残念'], desc:'掌握万千法则的主宰。', img:'monster/dao-master.png', color:'#ffdf00' },
    { id:'m_059', name:'轮回始祖', realm:'dengxian', hp:280000, atk:3200, def:2700, exp:20000, drop:['始祖血','轮回原初'], desc:'轮回之力的最初拥有者。', img:'monster/genesis.png', color:'#1c1c1c' },
    { id:'m_060', name:'弑仙者', realm:'dengxian', hp:350000, atk:4000, def:3000, exp:30000, drop:['弑仙剑碎片','斩仙决'], desc:'能杀真仙的域外邪神。', img:'monster/god-slayer.png', color:'#4b0000' }
  ];

  // ================================================================
  // 二、法术/技能大扩充（40个，涵盖全境界）
  // ================================================================
  const SPELLS = [
    // ---- 炼气/炼体（10）----
    { id:'s_001', name:'初阳诀', realm:'lianqi', type:'attack', element:'fire', mp:5, dmg:15, cd:0, desc:'吸取朝阳灵气化为一道火焰。', color:'#ff8c42', anim:'flame' },
    { id:'s_002', name:'寒冰针', realm:'lianqi', type:'attack', element:'ice', mp:6, dmg:18, cd:1, desc:'凝聚水汽为针，穿透皮肉。', color:'#87ceeb', anim:'ice' },
    { id:'s_003', name:'裂石掌', realm:'lianqi', type:'attack', element:'earth', mp:4, dmg:20, cd:0, desc:'手掌拍碎顽石的近战法术。', color:'#8b6c42', anim:'earth' },
    { id:'s_004', name:'御风术', realm:'lianqi', type:'buff', element:'wind', mp:8, effect:'speed+30%', cd:2, desc:'借风提速，追击必备。', color:'#c39bd3', anim:'wind' },
    { id:'s_005', name:'小回春', realm:'lianqi', type:'heal', element:'life', mp:10, heal:25, cd:2, desc:'凝聚生机治疗自身。', color:'#7fffd4', anim:'heal' },
    { id:'s_006', name:'铁骨功', realm:'lianti', type:'buff', element:'metal', mp:12, effect:'def+20', cd:3, desc:'气血凝为甲，防御大增。', color:'#a0a0a0', anim:'shield' },
    { id:'s_007', name:'火龙术', realm:'lianti', type:'attack', element:'fire', mp:15, dmg:40, cd:2, desc:'化火为龙形攻击敌人。', color:'#ff4500', anim:'firedragon' },
    { id:'s_008', name:'追心刺', realm:'lianti', type:'attack', element:'wind', mp:10, dmg:35, cd:1, desc:'速度极快的直线攻击。', color:'#e0e0e0', anim:'pierce' },
    { id:'s_009', name:'土墙护', realm:'lianti', type:'buff', element:'earth', mp:14, effect:'shield 50HP', cd:3, desc:'升起土墙抵挡一次伤害。', color:'#8b6c42', anim:'wall' },
    { id:'s_010', name:'惊雷咒', realm:'lianti', type:'attack', element:'thunder', mp:16, dmg:50, cd:2, desc:'招引一道紫色惊雷。', color:'#9370db', anim:'thunder' },

    // ---- 筑基~金丹（15）----
    { id:'s_011', name:'烈焰缠身', realm:'zhuji', type:'debuff', element:'fire', mp:20, effect:'burn 15/回合×3', cd:3, desc:'火焰缠身持续燃烧。', color:'#e74c3c', anim:'burn' },
    { id:'s_012', name:'万剑归一', realm:'zhuji', type:'attack', element:'metal', mp:35, dmg:100, cd:4, desc:'御万剑攻敌，剑仙起手式。', color:'#dcdcdc', anim:'swords' },
    { id:'s_013', name:'幻月斩', realm:'zhuji', type:'attack', element:'wind', mp:30, dmg:90, cd:3, desc:'月光化刃，杀气凌人。', color:'#f0e68c', anim:'slash' },
    { id:'s_014', name:'碧海潮生', realm:'zhuji', type:'attack', element:'water', mp:32, dmg:85, cd:3, desc:'凝聚水汽为潮，冲刷敌人。', color:'#00bfff', anim:'wave' },
    { id:'s_015', name:'大衍神算', realm:'zhuji', type:'buff', element:'time', mp:40, effect:'critical+30%', cd:5, desc:'推演对手动作，必中要害。', color:'#daa520', anim:'foresight' },
    { id:'s_016', name:'血影分身', realm:'jindan', type:'buff', element:'blood', mp:50, effect:'create shadow', cd:5, desc:'割血为影，代主承伤。', color:'#8b0000', anim:'shadow' },
    { id:'s_017', name:'九幽炎狱', realm:'jindan', type:'attack', element:'fire', mp:60, dmg:200, cd:5, desc:'九幽真火焚敌，防御无效。', color:'#4a0033', anim:'hell-fire' },
    { id:'s_018', name:'冰封千里', realm:'jindan', type:'attack', element:'ice', mp:58, dmg:180, cd:5, desc:'瞬间冰封方圆千里。', color:'#b0e0e6', anim:'freeze' },
    { id:'s_019', name:'太阴回光', realm:'jindan', type:'heal', element:'life', mp:55, heal:300, cd:6, desc:'月华灌顶，重伤可复。', color:'#e6e6fa', anim:'moon-heal' },
    { id:'s_020', name:'紫电天鞭', realm:'jindan', type:'attack', element:'thunder', mp:65, dmg:220, cd:5, desc:'太上雷法，威能无穷。', color:'#9370db', anim:'thunder-whip' },
    { id:'s_021', name:'剑意化虹', realm:'jindan', type:'attack', element:'metal', mp:70, dmg:250, cd:6, desc:'剑意化虹一闪即至。', color:'#ffffff', anim:'rainbow-sword' },
    { id:'s_022', name:'万佛朝宗', realm:'jindan', type:'attack', element:'light', mp:75, dmg:280, cd:6, desc:'佛光笼罩百万里内。', color:'#ffd700', anim:'buddha-light' },
    { id:'s_023', name:'魔佛歼灭', realm:'jindan', type:'attack', element:'dark', mp:80, dmg:300, cd:7, desc:'魔佛佛光内含吞噬伟力。', color:'#4a2c5f', anim:'evil-buddha' },
    { id:'s_024', name:'混元一击', realm:'jindan', type:'attack', element:'chaos', mp:100, dmg:350, cd:8, desc:'凝聚全部真元的殊死一击。', color:'#7f3fbf', anim:'chaos' },
    { id:'s_025', name:'时空错乱', realm:'jindan', type:'debuff', element:'time', mp:90, effect:'stun 2 rounds', cd:8, desc:'搅乱敌方时空感知，令其僵直。', color:'#4b0082', anim:'timewarp' },

    // ---- 元婴~化神（10）----
    { id:'s_026', name:'元神出窍', realm:'yuanying', type:'buff', element:'soul', mp:150, effect:'invincible 1 round', cd:10, desc:'元神离体一回合无敌。', color:'#e0e0ff', anim:'soul' },
    { id:'s_027', name:'诸天飞剑', realm:'yuanying', type:'attack', element:'metal', mp:180, dmg:800, cd:8, desc:'万剑穿云而至。', color:'#c0c0c0', anim:'sword-storm' },
    { id:'s_028', name:'太上劫火', realm:'yuanying', type:'attack', element:'fire', mp:200, dmg:1000, cd:10, desc:'焚烧灵魂的劫火。', color:'#ff4500', anim:'karma-fire' },
    { id:'s_029', name:'混沌开天', realm:'yuanying', type:'attack', element:'chaos', mp:250, dmg:1500, cd:12, desc:'重演开天辟地之力。', color:'#000066', anim:'genesis' },
    { id:'s_030', name:'万魂旗召', realm:'yuanying', type:'attack', element:'dark', mp:220, dmg:1200, cd:10, desc:'唤万千邪魂扑向敌人。', color:'#4b0082', anim:'souls' },
    { id:'s_031', name:'仙魔化身', realm:'huashen', type:'buff', element:'chaos', mp:400, effect:'atk×2 for 3 rounds', cd:15, desc:'亦仙亦魔，攻击力翻倍。', color:'#ffd700', anim:'transform' },
    { id:'s_032', name:'万象归元', realm:'huashen', type:'attack', element:'chaos', mp:450, dmg:3000, cd:15, desc:'汇聚万物之力一击。', color:'#7f3fbf', anim:'universe' },
    { id:'s_033', name:'轮回一转', realm:'huashen', type:'debuff', element:'soul', mp:500, effect:'reset target hp to 1', cd:20, desc:'强制对手回到刚出生。', color:'#301934', anim:'reincarnate' },
    { id:'s_034', name:'时空封印', realm:'huashen', type:'debuff', element:'time', mp:480, effect:'stun 3 rounds', cd:18, desc:'把敌人封在时空缝隙里。', color:'#1a1a2e', anim:'seal' },
    { id:'s_035', name:'仙灵九转', realm:'huashen', type:'heal', element:'life', mp:400, heal:5000, cd:15, desc:'汲取仙灵之气重塑肉身。', color:'#7fffd4', anim:'reborn' },

    // ---- 渡劫~登仙（5）----
    { id:'s_036', name:'弑仙一剑', realm:'dujie', type:'attack', element:'metal', mp:1000, dmg:20000, cd:20, desc:'能杀真仙的绝命一剑。', color:'#ffffff', anim:'god-sword' },
    { id:'s_037', name:'太一封天', realm:'dujie', type:'debuff', element:'law', mp:1200, effect:'seal all skills', cd:25, desc:'封住敌方所有法则。', color:'#000033', anim:'seal-heaven' },
    { id:'s_038', name:'万道臣服', realm:'dengxian', type:'buff', element:'law', mp:2000, effect:'god mode 5 rounds', cd:30, desc:'万道之力附体，无坚不摧。', color:'#ffdf00', anim:'dao-descend' },
    { id:'s_039', name:'轮回终结', realm:'dengxian', type:'attack', element:'soul', mp:2500, dmg:50000, cd:30, desc:'从轮回抹除对方存在。', color:'#301934', anim:'end' },
    { id:'s_040', name:'仙魔无极', realm:'dengxian', type:'attack', element:'chaos', mp:3000, dmg:99999, cd:40, desc:'仙魔合体一击定乾坤。', color:'#9370db', anim:'infinity' }
  ];

  // ================================================================
  // 三、物资大扩充（80种物品）
  // ================================================================
  const ITEMS = [
    // ---- 灵药/丹药（25）----
    { id:'i_001', name:'低阶灵石', type:'currency', rarity:1, value:1, desc:'蕴含微弱灵气的下品灵石。' },
    { id:'i_002', name:'中阶灵石', type:'currency', rarity:2, value:10, desc:'蕴含较多灵气的中品灵石。' },
    { id:'i_003', name:'高阶灵石', type:'currency', rarity:3, value:100, desc:'蕴含精纯灵气的上品灵石。' },
    { id:'i_004', name:'极品灵石', type:'currency', rarity:4, value:1000, desc:'蕴含极致灵气的极品灵石。' },
    { id:'i_005', name:'仙石', type:'currency', rarity:5, value:10000, desc:'仙人所用之石，可炼化。' },
    { id:'i_006', name:'回血丹', type:'consumable', rarity:1, effect:'hp+50', desc:'低阶疗伤丹药。' },
    { id:'i_007', name:'固元丹', type:'consumable', rarity:2, effect:'mp+80', desc:'补充灵力的丹药。' },
    { id:'i_008', name:'筑基丹', type:'consumable', rarity:3, effect:'realm-boost', realmReq:'lianti', desc:'突破筑基期必用之丹。' },
    { id:'i_009', name:'金丹术法', type:'consumable', rarity:4, effect:'realm-boost', realmReq:'zhuji', desc:'凝聚金丹的辅助丹。' },
    { id:'i_010', name:'元婴丹', type:'consumable', rarity:5, effect:'realm-boost', realmReq:'jindan', desc:'孕育元婴的关键丹。' },
    { id:'i_011', name:'化神果', type:'consumable', rarity:5, effect:'realm-boost', realmReq:'yuanying', desc:'化神境界的敲门砖。' },
    { id:'i_012', name:'渡劫丹', type:'consumable', rarity:6, effect:'realm-boost', realmReq:'huashen', desc:'渡劫时提高十倍抗力。' },
    { id:'i_013', name:'太一丹', type:'consumable', rarity:7, effect:'realm-boost', realmReq:'dujie', desc:'登仙前最后一颗丹。' },
    { id:'i_014', name:'黑玉断续膏', type:'consumable', rarity:2, effect:'hp+200', desc:'外伤圣药，断骨可续。' },
    { id:'i_015', name:'九转还魂丹', type:'consumable', rarity:5, effect:'revive', desc:'死者可用九转还魂，天品灵丹。' },
    { id:'i_016', name:'清心丹', type:'consumable', rarity:2, effect:'clear-debuff', desc:'清除心魔，解除负面。' },
    { id:'i_017', name:'解毒丹', type:'consumable', rarity:1, effect:'cure-poison', desc:'普通剧毒可解。' },
    { id:'i_018', name:'醒神丹', type:'consumable', rarity:2, effect:'cure-stun', desc:'清醒神识，解除定身。' },
    { id:'i_019', name:'凝气散', type:'consumable', rarity:1, effect:'exp+50', desc:'服食凝聚灵气增加经验。' },
    { id:'i_020', name:'悟道茶', type:'consumable', rarity:3, effect:'exp+500', desc:'品茗顿悟，参禅良伴。' },
    { id:'i_021', name:'万年灵芝', type:'material', rarity:5, desc:'炼制上品丹药的顶级药材。' },
    { id:'i_022', name:'九幽泉水', type:'material', rarity:4, desc:'来自阴间的极寒之水。' },
    { id:'i_023', name:'血菩提', type:'material', rarity:6, desc:'吸食万年血气而成，魔道至宝。' },
    { id:'i_024', name:'仙人玉髓', type:'material', rarity:7, desc:'仙界流出的至阳精华。' },
    { id:'i_025', name:'凤凰羽根', type:'material', rarity:5, desc:'不灭之火，凤凰身上一根羽毛。' },

    // ---- 法宝/装备（30）----
    { id:'i_026', name:'青光短剑', type:'weapon', rarity:1, atk:5, desc:'新入门弟子标配。' },
    { id:'i_027', name:'落霞剑', type:'weapon', rarity:2, atk:15, desc:'蕴含晚霞之色的中阶飞剑。' },
    { id:'i_028', name:'流云剑', type:'weapon', rarity:3, atk:40, desc:'如流云般飘忽的高阶飞剑。' },
    { id:'i_029', name:'碎星剑', type:'weapon', rarity:4, atk:100, realmReq:'jindan', desc:'能斩碎星辰的仙剑。' },
    { id:'i_030', name:'弑神剑', type:'weapon', rarity:6, atk:500, realmReq:'huashen', desc:'传说中能弑杀神明的凶器。' },
    { id:'i_031', name:'太阿剑', type:'weapon', rarity:7, atk:2000, realmReq:'dujie', desc:'轩辕黄帝所用的太阿剑。' },
    { id:'i_032', name:'混沌钟', type:'weapon', rarity:8, atk:5000, realmReq:'dengxian', desc:'混沌初开时的至宝。' },
    { id:'i_033', name:'布衣', type:'armor', rarity:1, def:3, desc:'粗布做的普通衣服。' },
    { id:'i_034', name:'青云道袍', type:'armor', rarity:2, def:10, desc:'青云宗弟子标准道袍。' },
    { id:'i_035', name:'紫金战甲', type:'armor', rarity:3, def:30, desc:'紫金炼成的战甲，坚固异常。' },
    { id:'i_036', name:'玄冰袍', type:'armor', rarity:4, def:80, realmReq:'jindan', desc:'玄冰所织，御寒抗火。' },
    { id:'i_037', name:'仙羽衣', type:'armor', rarity:5, def:200, realmReq:'yuanying', desc:'仙人羽毛织就的仙衣。' },
    { id:'i_038', name:'神甲', type:'armor', rarity:7, def:1000, realmReq:'dujie', desc:'神灵所铸不朽战甲。' },
    { id:'i_039', name:'储物袋', type:'bag', rarity:1, capacity:20, desc:'低阶储物袋，可存20件物品。' },
    { id:'i_040', name:'乾坤袋', type:'bag', rarity:3, capacity:100, desc:'内含小空间，能存百件。' },
    { id:'i_041', name:'须弥戒', type:'bag', rarity:5, capacity:500, desc:'一戒藏须弥，无所不容。' },
    { id:'i_042', name:'御剑舟', type:'transport', rarity:3, desc:'飞行法宝，可载三人。' },
    { id:'i_043', name:'紫金葫芦', type:'trap', rarity:4, desc:'能收纳低于自身境界的敌人。' },
    { id:'i_044', name:'万象镜', type:'trap', rarity:5, desc:'照破一切妖幻。' },
    { id:'i_045', name:'诛仙四剑', type:'weapon', rarity:8, atk:8000, realmReq:'dengxian', desc:'诛仙、戮仙、陷仙、绝仙四剑合一。' },
    { id:'i_046', name:'定海神针', type:'weapon', rarity:8, atk:9000, realmReq:'dengxian', desc:'东海龙宫至宝，能大能小。' },
    { id:'i_047', name:'开天斧', type:'weapon', rarity:8, atk:10000, realmReq:'dengxian', desc:'盘古开天所用之神斧。' },
    { id:'i_048', name:'昆仑镜', type:'defense', rarity:7, def:3000, desc:'照万物形，护法宝物。' },
    { id:'i_049', name:'东皇钟', type:'weapon', rarity:8, atk:9500, realmReq:'dengxian', desc:'妖皇帝俊之神器。' },
    { id:'i_050', name:'紫金红葫芦', type:'trap', rarity:7, desc:'太上老君的至宝葫芦。' },
    { id:'i_051', name:'万剑诀', type:'skillbook', rarity:5, teaches:'s_012', desc:'万剑归一的传承秘籍。' },
    { id:'i_052', name:'九幽炎狱典', type:'skillbook', rarity:6, teaches:'s_017', desc:'九幽炎狱的完整功法。' },
    { id:'i_053', name:'雷神天书', type:'skillbook', rarity:7, teaches:'s_020', desc:'紫电天鞭上乘功法。' },
    { id:'i_054', name:'太上魔典', type:'skillbook', rarity:8, realmReq:'dujie', desc:'魔道最强典籍。' },
    { id:'i_055', name:'太一混沌经', type:'skillbook', rarity:9, realmReq:'dengxian', desc:'混沌大道无上功法。' },

    // ---- 材料/杂物（25）----
    { id:'i_056', name:'普通铁锭', type:'material', rarity:1, desc:'铸造材料，凡铁。' },
    { id:'i_057', name:'玄铁', type:'material', rarity:2, desc:'蕴含灵气的黑色矿石。' },
    { id:'i_058', name:'寒冰精', type:'material', rarity:3, desc:'万年不化的极寒之精。' },
    { id:'i_059', name:'火晶', type:'material', rarity:2, desc:'火系精华结晶。' },
    { id:'i_060', name:'风羽', type:'material', rarity:2, desc:'风系妖兽的羽毛。' },
    { id:'i_061', name:'龙鳞', type:'material', rarity:5, desc:'真龙鳞片，防御极强。' },
    { id:'i_062', name:'凤凰血', type:'material', rarity:6, desc:'不死鸟的血液。' },
    { id:'i_063', name:'龟甲', type:'material', rarity:2, desc:'万年老龟壳，防御材料。' },
    { id:'i_064', name:'蛇内丹', type:'material', rarity:3, desc:'蛇修炼数百年的内丹。' },
    { id:'i_065', name:'狐丹', type:'material', rarity:4, desc:'狐妖修炼的九尾内丹。' },
    { id:'i_066', name:'雷木', type:'material', rarity:4, desc:'被雷劈过的木材，蕴含雷电。' },
    { id:'i_067', name:'菩提叶', type:'material', rarity:3, desc:'菩提树叶，佛门法器材料。' },
    { id:'i_068', name:'血魄石', type:'material', rarity:4, desc:'凝聚亡魂血气的石头。' },
    { id:'i_069', name:'炼魂香', type:'material', rarity:3, desc:'祭祀所用的凝魂之香。' },
    { id:'i_070', name:'空间碎片', type:'material', rarity:5, desc:'来自空间破碎处的碎片。' },
    { id:'i_071', name:'时光沙', type:'material', rarity:6, desc:'蕴含时间之力的黄沙。' },
    { id:'i_072', name:'混沌本源', type:'material', rarity:8, desc:'混沌之初的本源之物。' },
    { id:'i_073', name:'紫金符纸', type:'material', rarity:3, desc:'画符必备的高阶符纸。' },
    { id:'i_074', name:'朱砂', type:'material', rarity:1, desc:'画符所用的普通朱砂。' },
    { id:'i_075', name:'狼毫笔', type:'tool', rarity:2, desc:'画符炼器常用工具。' },
    { id:'i_076', name:'炼丹炉', type:'tool', rarity:3, desc:'初级炼丹用具。' },
    { id:'i_077', name:'紫金炼丹鼎', type:'tool', rarity:5, desc:'能炼制高阶丹药的鼎。' },
    { id:'i_078', name:'洞府地契', type:'estate', rarity:2, desc:'洞府所有权凭证。' },
    { id:'i_079', name:'秘境入场券', type:'ticket', rarity:2, desc:'进入某个秘境的凭证。' },
    { id:'i_080', name:'仙缘签', type:'ticket', rarity:6, desc:'获得仙人指点的机缘。' }
  ];

  // ================================================================
  // 四、场所/宗门（30个）
  // ================================================================
  const LOCATIONS = [
    // ---- 新手区（5）----
    { id:'l_001', name:'青云宗', type:'sect', realm:'lianqi', desc:'正道宗门之首，专收资质佳者。', bg:'sect-qingyun.jpg', gradient:'linear-gradient(180deg,#87ceeb,#4682b4)' },
    { id:'l_002', name:'碧海仙宗', type:'sect', realm:'lianqi', desc:'依海而立，擅水系功法。', bg:'sect-bihai.jpg', gradient:'linear-gradient(180deg,#00bfff,#003366)' },
    { id:'l_003', name:'炎荒宗', type:'sect', realm:'lianqi', desc:'火山中宗门，专修火系。', bg:'sect-yanhuang.jpg', gradient:'linear-gradient(180deg,#ff4500,#8b0000)' },
    { id:'l_004', name:'新手村·青石镇', type:'town', realm:'lianqi', desc:'散修出没之地，交易平常。', bg:'town-qingshi.jpg', gradient:'linear-gradient(180deg,#d4b483,#8b6c42)' },
    { id:'l_005', name:'翠竹林', type:'wilderness', realm:'lianqi', desc:'新手历练之地，多小妖。', bg:'wilderness-bamboo.jpg', gradient:'linear-gradient(180deg,#7fbf7f,#2e5c2e)' },

    // ---- 中期（10）----
    { id:'l_006', name:'太玄宗', type:'sect', realm:'zhuji', desc:'剑修圣地，山门万剑齐鸣。', bg:'sect-taixuan.jpg', gradient:'linear-gradient(180deg,#c0c0c0,#4a4a4a)' },
    { id:'l_007', name:'紫霄宫', type:'sect', realm:'zhuji', desc:'雷法宗门，紫霄雷海。', bg:'sect-zixiao.jpg', gradient:'linear-gradient(180deg,#9370db,#4b0082)' },
    { id:'l_008', name:'魔道血宫', type:'sect', realm:'zhuji', desc:'魔道大宗，血腥笼罩。', bg:'sect-bloodpalace.jpg', gradient:'linear-gradient(180deg,#8b0000,#301934)' },
    { id:'l_009', name:'万佛寺', type:'sect', realm:'zhuji', desc:'佛门圣地，梵音渡人。', bg:'sect-buddha.jpg', gradient:'linear-gradient(180deg,#ffd700,#8b4513)' },
    { id:'l_010', name:'幽冥谷', type:'wilderness', realm:'zhuji', desc:'鬼修出没之地，阴气森森。', bg:'wilderness-ghost.jpg', gradient:'linear-gradient(180deg,#483d8b,#1a1a2e)' },
    { id:'l_011', name:'落霞城', type:'city', realm:'zhuji', desc:'修士云集的大城，物资丰富。', bg:'city-luoxia.jpg', gradient:'linear-gradient(180deg,#ff8c00,#8b4513)' },
    { id:'l_012', name:'万兽山脉', type:'wilderness', realm:'zhuji', desc:'妖兽横行，勇者胜地。', bg:'wilderness-beasts.jpg', gradient:'linear-gradient(180deg,#8b6c42,#3f3f00)' },
    { id:'l_013', name:'剑冢秘境', type:'dungeon', realm:'zhuji', desc:'万剑埋葬之地，剑意冲霄。', bg:'dungeon-sword.jpg', gradient:'linear-gradient(180deg,#c0c0c0,#2f4f4f)' },
    { id:'l_014', name:'血月沙漠', type:'wilderness', realm:'zhuji', desc:'魔气笼罩的荒漠。', bg:'wilderness-desert.jpg', gradient:'linear-gradient(180deg,#a52a2a,#4a1c1c)' },
    { id:'l_015', name:'寒冰之地', type:'wilderness', realm:'zhuji', desc:'万年冰封，寒气入骨。', bg:'wilderness-ice.jpg', gradient:'linear-gradient(180deg,#b0e0e6,#4682b4)' },

    // ---- 高阶（10）----
    { id:'l_016', name:'昆仑仙宗', type:'sect', realm:'jindan', desc:'仙门至高之一，昆仑山巅。', bg:'sect-kunlun.jpg', gradient:'linear-gradient(180deg,#e6e6fa,#4b0082)' },
    { id:'l_017', name:'蓬莱仙岛', type:'sect', realm:'jindan', desc:'东海仙岛，灵气浓郁。', bg:'sect-penglai.jpg', gradient:'linear-gradient(180deg,#7fffd4,#008080)' },
    { id:'l_018', name:'万古神殿', type:'sect', realm:'yuanying', desc:'远古神灵留下的圣殿。', bg:'sect-godtemple.jpg', gradient:'linear-gradient(180deg,#ffd700,#4a3300)' },
    { id:'l_019', name:'时空秘境', type:'dungeon', realm:'jindan', desc:'时空错乱之地，机缘无限。', bg:'dungeon-time.jpg', gradient:'linear-gradient(180deg,#4b0082,#000033)' },
    { id:'l_020', name:'九幽炼狱', type:'dungeon', realm:'yuanying', desc:'九幽之地，凶险异常。', bg:'dungeon-hell.jpg', gradient:'linear-gradient(180deg,#4a0033,#000000)' },
    { id:'l_021', name:'仙魔战场', type:'dungeon', realm:'yuanying', desc:'远古仙魔大战遗迹。', bg:'dungeon-war.jpg', gradient:'linear-gradient(180deg,#8b0000,#301934)' },
    { id:'l_022', name:'太一浮屠', type:'dungeon', realm:'huashen', desc:'太一大能所留浮屠塔。', bg:'dungeon-tower.jpg', gradient:'linear-gradient(180deg,#ffdf00,#8b4513)' },
    { id:'l_023', name:'混沌之海', type:'wilderness', realm:'huashen', desc:'万法归一的混沌之地。', bg:'wilderness-chaos.jpg', gradient:'linear-gradient(180deg,#000066,#4b0082)' },
    { id:'l_024', name:'仙界通道', type:'dungeon', realm:'dujie', desc:'通往仙界的传送门。', bg:'dungeon-portal.jpg', gradient:'linear-gradient(180deg,#ffffe0,#ffd700)' },
    { id:'l_025', name:'诸天万界', type:'dungeon', realm:'dengxian', desc:'诸天万界大战之所。', bg:'dungeon-multiverse.jpg', gradient:'linear-gradient(180deg,#ffdf00,#9370db)' },

    // ---- 特色场所（5）----
    { id:'l_026', name:'莆田茶市', type:'town', realm:'lianqi', desc:'福建风情茶市，售茶亦售灵物。', bg:'town-putian.jpg', gradient:'linear-gradient(180deg,#8b7d3a,#2f4f2f)' },
    { id:'l_027', name:'武夷丹霞', type:'wilderness', realm:'zhuji', desc:'福建武夷山，丹霞地貌灵气之地。', bg:'wilderness-wuyi.jpg', gradient:'linear-gradient(180deg,#cd5c5c,#8b4513)' },
    { id:'l_028', name:'平潭仙岛', type:'sect', realm:'jindan', desc:'福建平潭岛，海上散修圣地。', bg:'sect-pingtan.jpg', gradient:'linear-gradient(180deg,#4682b4,#191970)' },
    { id:'l_029', name:'龙岩地心', type:'dungeon', realm:'yuanying', desc:'福建龙岩地下秘境。', bg:'dungeon-longyan.jpg', gradient:'linear-gradient(180deg,#8b4513,#2f0f00)' },
    { id:'l_030', name:'厦门海市', type:'city', realm:'zhuji', desc:'东南商贸重镇，海市蜃楼。', bg:'city-xiamen.jpg', gradient:'linear-gradient(180deg,#00bfff,#003366)' }
  ];

  // ================================================================
  // 五、灵植/灵宠（各20）
  // ================================================================
  const PLANTS = [
    { id:'p_001', name:'凝灵草', rarity:1, growTime:60, desc:'初级灵草，可炼回血丹。' },
    { id:'p_002', name:'碧血花', rarity:2, growTime:120, desc:'花蕊如血，滋补气血。' },
    { id:'p_003', name:'紫芝', rarity:3, growTime:300, desc:'万年紫芝，延年益寿。' },
    { id:'p_004', name:'幽兰', rarity:2, growTime:200, desc:'香气凝神，静修良品。' },
    { id:'p_005', name:'火莲', rarity:4, growTime:600, desc:'火山口开放的莲花。' },
    { id:'p_006', name:'冰参', rarity:4, growTime:800, desc:'万年寒地生长的人参。' },
    { id:'p_007', name:'龙涎草', rarity:5, growTime:1000, desc:'龙涎滴落而生的灵草。' },
    { id:'p_008', name:'凤髓花', rarity:5, growTime:1200, desc:'凤凰饲食的珍稀花朵。' },
    { id:'p_009', name:'太阴玉髓', rarity:6, growTime:1500, desc:'月华凝聚的玉髓。' },
    { id:'p_010', name:'太阳金精', rarity:6, growTime:1500, desc:'日精凝聚的金色晶花。' },
    { id:'p_011', name:'混沌灵苗', rarity:7, growTime:3000, desc:'混沌之初的植物遗种。' },
    { id:'p_012', name:'轮回莲', rarity:8, growTime:5000, desc:'轮回之力孕育的莲花。' },
    { id:'p_013', name:'菩提金叶', rarity:5, growTime:1200, desc:'佛门菩提所生金叶。' },
    { id:'p_014', name:'紫金葫芦藤', rarity:6, growTime:2000, desc:'能结紫金葫芦的神藤。' },
    { id:'p_015', name:'定灵参', rarity:3, growTime:400, desc:'服食能稳定灵力。' },
    { id:'p_016', name:'醒神草', rarity:2, growTime:150, desc:'清醒神识的灵草。' },
    { id:'p_017', name:'血玉果', rarity:4, growTime:700, desc:'滋补气血的血色果实。' },
    { id:'p_018', name:'仙灵草', rarity:5, growTime:1200, desc:'仙界流传下来的灵草。' },
    { id:'p_019', name:'万年冰葵', rarity:5, growTime:1500, desc:'冰封万年的葵花。' },
    { id:'p_020', name:'太上金丹花', rarity:7, growTime:3000, desc:'炼制太上金丹的必备灵植。' }
  ];

  const PETS = [
    { id:'pet_001', name:'雪貂', rarity:1, realmReq:'lianqi', hp:50, atk:5, skill:'咬击' },
    { id:'pet_002', name:'火狐', rarity:2, realmReq:'lianqi', hp:80, atk:12, skill:'火球' },
    { id:'pet_003', name:'紫电貂', rarity:3, realmReq:'lianti', hp:150, atk:30, skill:'紫电' },
    { id:'pet_004', name:'金翅雕', rarity:4, realmReq:'zhuji', hp:400, atk:80, skill:'俯冲' },
    { id:'pet_005', name:'碧海龙鲤', rarity:4, realmReq:'zhuji', hp:500, atk:60, skill:'水柱' },
    { id:'pet_006', name:'紫金蟒', rarity:5, realmReq:'zhuji', hp:800, atk:100, skill:'缠绕' },
    { id:'pet_007', name:'白泽', rarity:6, realmReq:'jindan', hp:1500, atk:180, skill:'祥瑞' },
    { id:'pet_008', name:'黄泉犬', rarity:5, realmReq:'jindan', hp:1200, atk:200, skill:'吠魂' },
    { id:'pet_009', name:'九尾狐', rarity:6, realmReq:'jindan', hp:1800, atk:250, skill:'魅惑' },
    { id:'pet_010', name:'火麒麟', rarity:7, realmReq:'yuanying', hp:5000, atk:600, skill:'炎火之息' },
    { id:'pet_011', name:'冰凤凰', rarity:7, realmReq:'yuanying', hp:5500, atk:550, skill:'冰羽' },
    { id:'pet_012', name:'雷神龙', rarity:8, realmReq:'huashen', hp:15000, atk:1500, skill:'神雷' },
    { id:'pet_013', name:'时空幼龙', rarity:8, realmReq:'huashen', hp:12000, atk:1800, skill:'时空扭曲' },
    { id:'pet_014', name:'仙魔无极兽', rarity:9, realmReq:'dujie', hp:50000, atk:5000, skill:'无极冲击' },
    { id:'pet_015', name:'混沌兽', rarity:10, realmReq:'dengxian', hp:200000, atk:20000, skill:'开天击' },
    { id:'pet_016', name:'太一祖龙', rarity:10, realmReq:'dengxian', hp:250000, atk:25000, skill:'祖龙咆哮' },
    { id:'pet_017', name:'轮回猊', rarity:9, realmReq:'dujie', hp:60000, atk:6000, skill:'轮回咬' },
    { id:'pet_018', name:'菩提金蝉', rarity:5, realmReq:'jindan', hp:1000, atk:150, skill:'金蝉脱壳' },
    { id:'pet_019', name:'幽冥鼠', rarity:3, realmReq:'lianti', hp:200, atk:40, skill:'钻地' },
    { id:'pet_020', name:'万古神鲲', rarity:10, realmReq:'dengxian', hp:300000, atk:30000, skill:'吞天' }
  ];

  // ================================================================
  // 挂载
  // ================================================================
  const WENDAO_CONTENT = global.WENDAO_CONTENT = global.WENDAO_CONTENT || {};
  WENDAO_CONTENT.MONSTERS = MONSTERS;
  WENDAO_CONTENT.SPELLS = SPELLS;
  WENDAO_CONTENT.ITEMS = ITEMS;
  WENDAO_CONTENT.LOCATIONS = LOCATIONS;
  WENDAO_CONTENT.PLANTS = PLANTS;
  WENDAO_CONTENT.PETS = PETS;

  // 尝试自动合并到 game-core（如果暴露了接口）
  function tryMergeToGameCore() {
    const g = global.GameCore || global.WENDAO || global.WendaoCore;
    if (!g) return false;
    try {
      if (g.MONSTERS && Array.isArray(g.MONSTERS)) MONSTERS.forEach(m => { if (!g.MONSTERS.find(x=>x.id===m.id)) g.MONSTERS.push(m); });
      if (g.SPELLS && Array.isArray(g.SPELLS)) SPELLS.forEach(s => { if (!g.SPELLS.find(x=>x.id===s.id)) g.SPELLS.push(s); });
      if (g.ITEMS && Array.isArray(g.ITEMS)) ITEMS.forEach(it => { if (!g.ITEMS.find(x=>x.id===it.id)) g.ITEMS.push(it); });
      if (g.LOCATIONS && Array.isArray(g.LOCATIONS)) LOCATIONS.forEach(l => { if (!g.LOCATIONS.find(x=>x.id===l.id)) g.LOCATIONS.push(l); });
      console.info('[内容大扩充 v4.2.6] 已合并到 GameCore');
      return true;
    } catch (e) {
      console.warn('[内容大扩充] 合并失败：', e);
      return false;
    }
  }

  if (!tryMergeToGameCore() && typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', tryMergeToGameCore);
  }

  console.info(`[内容大扩充 v4.2.6] 已挂载 window.WENDAO_CONTENT：怪物×${MONSTERS.length} 法术×${SPELLS.length} 物品×${ITEMS.length} 场所×${LOCATIONS.length} 灵植×${PLANTS.length} 灵宠×${PETS.length}`);

})(typeof window !== 'undefined' ? window : this);
