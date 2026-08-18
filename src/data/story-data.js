/* ===================================================
 * 《问道修仙学院》主线剧情数据 v3.0
 *
 * v3.0 新增（相对 v2.0）：
 *   + 8 个大地图节点剧情 (map_*)
 *   + 4 个境界突破剧情 (breakthrough_*)
 *   + 成就殿开启 / 斗法大会前义剧情
 *   + 保留 v2.0 全部节点（向后兼容）
 * =================================================== */
/* --- v2.0 header 保留为内部参考 ---
 *
 * v2.0 升级要点：
 *   + 灵根抽取剧情（接 setSpiritRoot）
 *   + 法宝阁/洞府/秘境 引导剧情
 *   + 妖兽试炼遇大妖剧情触发
 *   + 三步证道完成后剧情触发
 *   + 期末考"宗门大比"完整剧情线
 *   + 飞升大典（高考）剧情预告
 *   + 保留 v1 全部节点（向后兼容）
 *
 * 世界观：你是失忆的转世修士，六大宗门分别守护"天道真经"的残页
 * 期末考 = 宗门大比，高考 = 飞升大典
 * =================================================== */

(function (global) {
  'use strict';

  const STORY_DATA = {

    // ===================================
    // 一、楔子与初见
    // ===================================
    prologue_01: {
      id: 'prologue_01',
      lines: [
        { speaker:'???', avatar:'🌌', text:'天地玄黄，宇宙洪荒……一缕残魂，自虚空坠落。' },
        { speaker:'???', avatar:'🌌', text:'你在剧痛中睁眼，发现自己躺在一座古朴的山门之前。' },
        { speaker:'???', avatar:'🌌', text:'记忆，全无。只剩下脑海中回荡着一句话——「问道于天，求道于学」。' },
        { speaker:'守山弟子', avatar:'🧑', text:'呔！何方修士擅闯问道学院？……咦，你气息紊乱，像是刚刚渡了一场大劫。' },
        { speaker:'守山弟子', avatar:'🧑', text:'罢了，看你尚有几分灵根，我便引你去见院长。这里是「问道修仙学院」，下辖六大宗门——' },
        { speaker:'守山弟子', avatar:'🧑', text:'⚡雷霆殿（物理）、⚗丹鼎峰（化学）、🌏山河阁（地理）、📜文渊阁（语文）、🔢推衍宫（数学）、🌐译灵堂（英语）。' },
        { speaker:'守山弟子', avatar:'🧑', text:'每座宗门各掌"天道真经"一卷残页。若想恢复修为，你需逐一参悟各宗功法，击退守关妖兽，集齐六卷残页——方可参加每年盛夏的「宗门大比」（即期末考）。' },
        { speaker:'守山弟子', avatar:'🧑', text:'熬过大比者，方有资格参加三年后的「飞升大典」（即高考）——一朝飞升真仙，否则……便沦为凡尘庸人，终生不得修行。' },
        { speaker:'守山弟子', avatar:'🧑', text:'院长有令：你可自由选择宗门修行，"功法秘籍"为入门，"妖兽试炼"为进阶。错题入「心魔录」，须反复克服方可证道。' },
        { speaker:'???', avatar:'🌌', text:'（你深吸一口气，望向远方层峦叠嶂的六座灵峰，命运的齿轮，开始转动……）',
          reward: { exp: 30, lingshi: 50 }
        },
      ],
      choices: [
        { text:'⚡ 我先去雷霆殿——以力破万法！',  next: null, flag: 'chose_physics_first',    reward: { daoxin: 5 } },
        { text:'⚗ 我先去丹鼎峰——以理探万物！',  next: null, flag: 'chose_chemistry_first',  reward: { daoxin: 5 } },
        { text:'🌏 我先去山河阁——以观天地大势！', next: null, flag: 'chose_geography_first', reward: { daoxin: 5 } },
        { text:'🤔 容我先观望一番，自行选择。',     next: null, flag: 'chose_free',            reward: { daoxin: 3 } },
      ]
    },

    // ===================================
    // 二、v2.0 新增 - 灵根测试（接 setSpiritRoot）
    // ===================================
    spirit_root_test: {
      id: 'spirit_root_test',
      lines: [
        { speaker:'院长', avatar:'👴', text:'少年，欲入山门，先测灵根。' },
        { speaker:'院长', avatar:'👴', text:'灵根分五系：金、木、水、火、土，外加变异之「雷」「冰」。它将决定你日后修行最契合的方向。' },
        { speaker:'院长', avatar:'👴', text:'⚡ 雷灵根：物理修为+50%，唯堂堂正正者方能驾驭。' },
        { speaker:'院长', avatar:'👴', text:'🔥 火灵根：化学修为+50%，丹炉烈焰，万物变化于一瞬。' },
        { speaker:'院长', avatar:'👴', text:'🌊 水灵根：地理修为+50%，洋流山川，皆在掌中。' },
        { speaker:'院长', avatar:'👴', text:'📚 木灵根：语文修为+50%，温润如玉，文心如剑。' },
        { speaker:'院长', avatar:'👴', text:'🧮 金灵根：数学修为+50%，金石可镂，逻辑如锋。' },
        { speaker:'院长', avatar:'👴', text:'❄ 冰灵根：英语修为+50%，冰雪聪明，通晓万邦。' },
        { speaker:'院长', avatar:'👴', text:'切记，此选择关乎你修行的根骨。一旦确定，便永不可更改。',
          reward: { exp: 20, lingshi: 20 }
        },
      ],
    },

    spirit_root_chosen: {
      id: 'spirit_root_chosen',
      lines: [
        { speaker:'院长', avatar:'👴', text:'好！灵根已定，便是你修行的路引。' },
        { speaker:'院长', avatar:'👴', text:'记住——根骨虽固，志气更高。无论何种灵根，唯有勤修苦练方能登顶。' },
        { speaker:'院长', avatar:'👴', text:'去吧，问道修仙学院的大门已为你敞开。' },
      ]
    },

    // ===================================
    // 三、六大宗门初见（v1 节点保留）
    // ===================================
    physics_intro: {
      id: 'physics_intro',
      lines: [
        { speaker:'雷霆长老', avatar:'⚡', text:'轰隆——！山门巨响。你眼前是一座漂浮在雷云中的剑阁。' },
        { speaker:'雷霆长老', avatar:'⚡', text:'我乃雷霆殿首座，姓秦。你既来此，便要参悟"力与运动"的至理。' },
        { speaker:'雷霆长老', avatar:'⚡', text:'本殿所守，乃《天道真经·力卷》。功法分三阶——选必一（机械振动+机械波+光学）、选必二（电磁学）、选必三（热学+原子物理）。' },
        { speaker:'雷霆长老', avatar:'⚡', text:'每篇功法皆有"交互演道"——你须亲手调参、观察现象，方能真正领悟。' },
        { speaker:'雷霆长老', avatar:'⚡', text:'记住：知其然，更须知其所以然。功法之后还有"三步证道"的小考——观演、动手、笔答。三关皆过，方算入门。' },
        { speaker:'雷霆长老', avatar:'⚡', text:'去吧，少年。雷霆从不畏惧任何挑战。',
          reward: { exp: 20, lingshi: 15 }
        },
      ]
    },

    chemistry_intro: {
      id: 'chemistry_intro',
      lines: [
        { speaker:'丹鼎长老', avatar:'⚗', text:'袅袅青烟中，一座古鼎缓缓显现。你嗅到草药与硫磺交织的气息。' },
        { speaker:'丹鼎长老', avatar:'⚗', text:'本峰守《天道真经·变化卷》。化学之道，在于"变中有理"——焓变、平衡、电化、有机，无一不是宇宙律法的彰显。' },
        { speaker:'丹鼎长老', avatar:'⚗', text:'你将在反应进度图中看见能垒翻越的精彩，在天平上感悟动态平衡的真意。' },
        { speaker:'丹鼎长老', avatar:'⚗', text:'下山去吧，去你的小测中证明你真正理解了变化之道。',
          reward: { exp: 20, lingshi: 15 }
        },
      ]
    },

    geography_intro: {
      id: 'geography_intro',
      lines: [
        { speaker:'山河长老', avatar:'🌏', text:'你眼前的山门，化作了一幅缓缓旋转的青色地球。' },
        { speaker:'山河长老', avatar:'🌏', text:'本阁掌《天道真经·山河卷》。地理之道，包罗万象——地球运动、大气环流、洋流季风、农业工业、城市资源。' },
        { speaker:'山河长老', avatar:'🌏', text:'你既出身福建莆田，对季风、洋流自有亲身体会。家乡的台风、海岸的盐田、潮汐的涨落，皆是活生生的教材。' },
        { speaker:'山河长老', avatar:'🌏', text:'修山河之道，看似浩瀚，实则一图胜千言。请用本阁的"地图演道"，让世界在你眼前活过来。',
          reward: { exp: 20, lingshi: 15 }
        },
      ]
    },

    chinese_intro: {
      id: 'chinese_intro',
      lines: [
        { speaker:'文渊长老', avatar:'📜', text:'书香袅袅，墨笔生花。文渊阁内，万卷典籍自动悬空翻飞。' },
        { speaker:'文渊长老', avatar:'📜', text:'本阁守《天道真经·言卷》。语文不是死记，而是品味——古人胸襟、今人哲思，皆在字里行间。' },
        { speaker:'文渊长老', avatar:'📜', text:'你的高二必读为《红楼梦》整本书阅读。这是一部"草蛇灰线、伏脉千里"的奇书，慢慢品读。',
          reward: { exp: 20, lingshi: 15 }
        },
      ]
    },

    math_intro: {
      id: 'math_intro',
      lines: [
        { speaker:'推衍长老', avatar:'🔢', text:'你眼前是一片浩瀚星图，每颗星都是一个数字、一个公式。' },
        { speaker:'推衍长老', avatar:'🔢', text:'本宫守《天道真经·数卷》。数学是宇宙的语言——数列、概率、立体几何、解析几何，皆是世界的骨架。' },
        { speaker:'推衍长老', avatar:'🔢', text:'记住：数学不靠死记硬背，靠"理解+练习"。每道题都是一段推理诗。',
          reward: { exp: 20, lingshi: 15 }
        },
      ]
    },

    english_intro: {
      id: 'english_intro',
      lines: [
        { speaker:'译灵长老', avatar:'🌐', text:'你眼前浮现一座透明的水晶塔，每一面都映出不同的语言。' },
        { speaker:'译灵长老', avatar:'🌐', text:'本堂掌《天道真经·译卷》。英语不仅是工具，更是通往他山之石的桥梁。' },
        { speaker:'译灵长老', avatar:'🌐', text:'必修一到必修三 Unit 3，是你高二期末范围。重点：词汇 + 语法 + 听力 + 阅读。',
          reward: { exp: 20, lingshi: 15 }
        },
      ]
    },

    // ===================================
    // 四、v2.0 新增 - 法宝阁初见
    // ===================================
    artifact_shop_intro: {
      id: 'artifact_shop_intro',
      lines: [
        { speaker:'炼器师', avatar:'🛠', text:'欢迎来到法宝阁。修士若无趁手法宝，怎能与天斗、与人斗？' },
        { speaker:'炼器师', avatar:'🛠', text:'此处共有四件至宝待价而沽——' },
        { speaker:'炼器师', avatar:'🛠', text:'📖《储灵玉简》：储题更多，每日多答 3 题不疲。' },
        { speaker:'炼器师', avatar:'🛠', text:'🪞《明心镜》：心魔录归档加快，错题学得更牢。' },
        { speaker:'炼器师', avatar:'🛠', text:'⚔《破障神剑》：boss 题伤害减半，遇大妖不惧。' },
        { speaker:'炼器师', avatar:'🛠', text:'🪙《聚财铜钱》：每场答题灵石+20%。' },
        { speaker:'炼器师', avatar:'🛠', text:'每件法宝可永久增益，但最多同时装备 3 件。慎重抉择。' },
      ]
    },

    // ===================================
    // 五、v2.0 新增 - 洞府初见
    // ===================================
    cave_intro: {
      id: 'cave_intro',
      lines: [
        { speaker:'院长', avatar:'👴', text:'院长赐你这座洞府。此地灵气浓郁，可助你恢复道心、参悟天地。' },
        { speaker:'院长', avatar:'👴', text:'每三十分钟可打坐一次，恢复道心 +30，并增长修为。' },
        { speaker:'院长', avatar:'👴', text:'洞府还可升级——花费灵石加强灵气浓度，打坐效果倍增。' },
        { speaker:'院长', avatar:'👴', text:'切记，洞府是你修行的根本。心累时来此一坐，比硬撑刷题强百倍。',
          reward: { daoxin: 20 }
        },
      ]
    },

    // ===================================
    // 六、v2.0 新增 - 秘境初见
    // ===================================
    secret_realm_intro: {
      id: 'secret_realm_intro',
      lines: [
        { speaker:'神秘修士', avatar:'🗿', text:'传闻……问道学院后山有上古遗迹，蕴藏天材地宝、奇异机缘。' },
        { speaker:'神秘修士', avatar:'🗿', text:'每个时辰你可入秘境一次。其中或得灵石、或得功法残页、或遇仙缘……' },
        { speaker:'神秘修士', avatar:'🗿', text:'但也有可能遇险——心魔暗算、灵兽袭击。运气与实力，缺一不可。' },
        { speaker:'神秘修士', avatar:'🗿', text:'听不听由你，闯不闯由你。修行之路，本就千变万化。' },
      ]
    },

    // ===================================
    // 七、v1 节点保留：境界突破
    // ===================================
    milestone_zhuji: {
      id: 'milestone_zhuji',
      lines: [
        { speaker:'院长', avatar:'👴', text:'恭喜！你已突破至筑基期——这是修仙路上的第一座大山。' },
        { speaker:'院长', avatar:'👴', text:'从此你的"功法秘籍"将更深入，"妖兽"也将更凶猛。但你已有了与之一战的资本。' },
        { speaker:'院长', avatar:'👴', text:'记住：修仙之路，最忌急躁。慢即是快，稳即是进。',
          reward: { exp: 50, lingshi: 100, daoxin: 20 }
        },
      ]
    },

    // ===== v2.0 新增其他境界突破 =====
    milestone_jindan: {
      id: 'milestone_jindan',
      lines: [
        { speaker:'院长', avatar:'👴', text:'金丹期！你的灵气已凝结成丹，根基稳固。' },
        { speaker:'院长', avatar:'👴', text:'此刻起，你已是问道学院的核心弟子。但路还远，切勿懈怠。',
          reward: { exp: 80, lingshi: 200, daoxin: 30 }
        },
      ]
    },

    milestone_yuanying: {
      id: 'milestone_yuanying',
      lines: [
        { speaker:'院长', avatar:'👴', text:'元婴期！你已凝出元婴，可元婴出窍、神识查万物。' },
        { speaker:'院长', avatar:'👴', text:'此境界足以参加任何一场考试。前路明朗，飞升可期。',
          reward: { exp: 120, lingshi: 400, daoxin: 50 }
        },
      ]
    },

    // ===================================
    // 八、心魔警告（v1 保留）
    // ===================================
    heart_demon_warning: {
      id: 'heart_demon_warning',
      lines: [
        { speaker:'???', avatar:'😈', text:'嘿嘿嘿……你又答错了一道题。' },
        { speaker:'???', avatar:'😈', text:'我便是你的心魔——由你每一道错题、每一次困惑诞生。' },
        { speaker:'???', avatar:'😈', text:'若你不正视我、不重复挑战克服我，我将寄生于你的道心，让你修为受阻、境界倒退。' },
        { speaker:'院长', avatar:'👴', text:'孩子，不要怕心魔。"心魔录"中所有错题，皆可重战。每克服一题，道心+2，修为+5。' },
        { speaker:'院长', avatar:'👴', text:'真正的修士，不是从不犯错，而是不被错误打败。' },
      ]
    },

    // ===================================
    // 九、v2.0 新增 - 大妖出现警告
    // ===================================
    boss_warning: {
      id: 'boss_warning',
      lines: [
        { speaker:'守山弟子', avatar:'🧑', text:'警报！前方探测到 Boss 级妖兽气息——这是高考真题级别的大妖。' },
        { speaker:'守山弟子', avatar:'🧑', text:'若你未达"圆满"境界，请先回去修炼。否则——道心受创，得不偿失。' },
        { speaker:'守山弟子', avatar:'🧑', text:'若你已准备充分，便去吧。击败大妖，奖励丰厚，更可获得"功法残页"。' },
      ]
    },

    // ===================================
    // 十、v2.0 新增 - 三步证道完成
    // ===================================
    proving_passed: {
      id: 'proving_passed',
      lines: [
        { speaker:'院长', avatar:'👴', text:'好！你不仅看了功法，更亲手演练、笔答三道。这才叫"参悟"。' },
        { speaker:'院长', avatar:'👴', text:'真正的修行不在"知道"，而在"内化"。从此，这门功法的真意，已刻入你的元神。',
          reward: { exp: 15, lingshi: 10, daoxin: 5 }
        },
      ]
    },

    // ===================================
    // 十一、宗门大比（期末考）剧情线
    // ===================================
    final_exam_eve: {
      id: 'final_exam_eve',
      lines: [
        { speaker:'院长', avatar:'👴', text:'明日便是「宗门大比」（期末考），三宗联考——物理、化学、地理。' },
        { speaker:'院长', avatar:'👴', text:'你这些日子的修行，将在此一战之中得到检验。临阵磨枪，不快也光。去回顾你的功法吧，少年。' },
      ]
    },

    // ===== v2.0 新增 - 期末考具体场次 =====
    final_day1: {
      id: 'final_day1',
      lines: [
        { speaker:'监考长老', avatar:'⚖', text:'7 月 7 日，星期二。宗门大比第一日。' },
        { speaker:'监考长老', avatar:'⚖', text:'上午 9:00-11:30：语文。下午 15:00-17:00：数学。' },
        { speaker:'监考长老', avatar:'⚖', text:'今日不是你的主战场，但仍需稳守阵线。语文如长河——慢读细品；数学如剑——稳准狠。' },
      ]
    },

    final_day2: {
      id: 'final_day2',
      lines: [
        { speaker:'监考长老', avatar:'⚖', text:'7 月 8 日，星期三。' },
        { speaker:'监考长老', avatar:'⚖', text:'上午 9:00-10:15：物理 / 历史（你考物理）。下午 15:00-17:00：英语（含听力考试）。' },
        { speaker:'雷霆长老', avatar:'⚡', text:'雷霆殿弟子，你的主战场之一来了。冷静读题，慎用"特殊技巧"。',
          reward: { daoxin: 10 }
        },
      ]
    },

    final_day3: {
      id: 'final_day3',
      lines: [
        { speaker:'监考长老', avatar:'⚖', text:'7 月 9 日，星期四。大比终日。' },
        { speaker:'监考长老', avatar:'⚖', text:'上午两场：8:30-9:45 化学，10:15-11:30 地理。下午两场：14:30-15:45 思想政治，16:15-17:30 生物。' },
        { speaker:'监考长老', avatar:'⚖', text:'你考化学+地理。前一夜睡个好觉，比刷十张卷子都管用。' },
        { speaker:'丹鼎长老', avatar:'⚗', text:'化学诀窍：方程式必须正确，状态、配平、条件一个不能少。' },
        { speaker:'山河长老', avatar:'🌏', text:'地理诀窍：图表题先看图例、看比例尺；答题模板要熟记。' },
      ]
    },

    final_exam_done: {
      id: 'final_exam_done',
      lines: [
        { speaker:'院长', avatar:'👴', text:'宗门大比落幕——无论你今日结果如何，这一战已让你成长。' },
        { speaker:'院长', avatar:'👴', text:'修行之路，每一次考试不过是一次问"道"。问完了，仍要往前走。' },
        { speaker:'院长', avatar:'👴', text:'后日起，便是高二下学期收尾，距离飞升大典（高考）只剩约一年。',
          reward: { exp: 100, lingshi: 300, daoxin: 30 }
        },
      ]
    },

    // ===================================
    // 十二、飞升大典预告（高考）
    // ===================================
    feisheng_preview: {
      id: 'feisheng_preview',
      lines: [
        { speaker:'院长', avatar:'👴', text:'少年，你已是问道学院核心弟子。' },
        { speaker:'院长', avatar:'👴', text:'下一年的盛夏，便是「飞升大典」——你毕生修行的最高考验。' },
        { speaker:'院长', avatar:'👴', text:'六大宗门残页若能集齐，便有望飞升真仙。所谓"九年寒窗为一举"，正是此理。' },
        { speaker:'院长', avatar:'👴', text:'去吧，少年。从今日开始，每日修行都是为飞升铺路。',
          reward: { exp: 50, lingshi: 100 }
        },
      ]
    },

    // ===================================
    // 十三、v2.0 新增 - 莆田学生彩蛋
    // ===================================
    putian_easter_egg: {
      id: 'putian_easter_egg',
      lines: [
        { speaker:'山河长老', avatar:'🌏', text:'你是福建莆田人？嗯，莆田地处亚热带季风气候，年降水 1500mm 上下，台风季节多发。' },
        { speaker:'山河长老', avatar:'🌏', text:'莆田还有兴化湾、湄洲岛等海岸地貌，是研究海岸侵蚀与沉积的活教材。' },
        { speaker:'山河长老', avatar:'🌏', text:'下次台风来临，可观察气压变化、风向变化——这就是你身边的"气旋"功法。' },
        { speaker:'山河长老', avatar:'🌏', text:'高考地理常考身边的家乡地理，把莆田的地理特征记熟，等同送分。',
          reward: { exp: 30, lingshi: 30 }
        },
      ]
    },

  };

  // ============================================================
  // v3.0 新增剧情（向 STORY_DATA 继续注入）
  // ============================================================
  Object.assign(STORY_DATA, {

    // ---- 大地图节点剧情（首次访问时触发） ----
    map_start: {
      id: 'map_start',
      lines: [
        { speaker:'山门守卫', avatar:'🧙', text:'道友初致。此乃「问道大道」的起点，大地图上养宗门，你可自取——不过初入山门者，递或先去雷霆殿。' },
        { speaker:'山门守卫', avatar:'🧙', text:'雷霆、丹鼎、山河奇院五行相生；文渊、推衍、译灵才旽终归一道。', flag:'seen_map_intro' }
      ]
    },
    map_cave: {
      id: 'map_cave',
      lines: [
        { speaker:'洞府小陀', avatar:'🏠', text:'你推开石门，洞内射入洗灵欺零——这里每一向坐要支付标保。' },
        { speaker:'洞府小陀', avatar:'💬', text:'长者曾告诬: 「山境修多均，丹气己诡。」长依此地丹坐，可廿回修为与道心。', reward:{ exp: 15, lingshi: 10 } }
      ]
    },
    map_secret: {
      id: 'map_secret',
      lines: [
        { speaker:'神秘声音', avatar:'🌀', text:'秘境开，雷雨至。此境一日一变，入者自取奇遇。' },
        { speaker:'神秘声音', avatar:'🤐', text:'小心——你手中长保的也正知那位目前预知中亿。' }
      ]
    },
    map_treasure: {
      id: 'map_treasure',
      lines: [
        { speaker:'法宝阁圣池', avatar:'🏦', text:'圣池阅历万道。道友並改白道，只就啦你的道心知。' },
        { speaker:'法宝阁圣池', avatar:'🏹', text:'本后宏乐内知‘明心镜’最野厄，你令旦而能莱。', reward: { exp: 20, lingshi: 40 } }
      ]
    },
    map_tower: {
      id: 'map_tower',
      lines: [
        { speaker:'飞升台守乇人', avatar:'🌛', text:'飞升台上，城城阴阳不图。' },
        { speaker:'飞升台守乇人', avatar:'🌛', text:'本后圣下就需斩謞道斩就，试斩飞升就需无修斩就。', flag:'seen_map_tower' }
      ]
    },

    // ---- 境界突破剧情 ----
    breakthrough_5: {
      id: 'breakthrough_5',
      lines: [
        { speaker:'目内声音', avatar:'✨', text:'你道中星目伊中长。你幸致云长雷瞽新机。' },
        { speaker:'目内声音', avatar:'✨', text:'祝你知——炼气五层就。土地刚迫一目，修为登上一亩新机。', reward: { exp: 20, lingshi: 20 } }
      ]
    },
    breakthrough_10: {
      id: 'breakthrough_10',
      lines: [
        { speaker:'宗门长耀', avatar:'🧙', text:'你已知致花基期。基陇名也保斩宗门平鰷。' },
        { speaker:'宗门长耀', avatar:'🧙', text:'你蓉莱内知禍瞬，只后知遇法道需听道心自才道。', reward: { exp: 50, lingshi: 60 } }
      ]
    },
    breakthrough_15: {
      id: 'breakthrough_15',
      lines: [
        { speaker:'古仙手呏', avatar:'🌜', text:'你已履知域金丹。金丹道友行道，便可遠山知金丹宗门也以企瞽。' },
        { speaker:'古仙手呏', avatar:'🌜', text:'但宗下鲘长斩道：金丹行道已保道伽亦，则位仙就需就千道。' }
      ]
    },
    breakthrough_20: {
      id: 'breakthrough_20',
      lines: [
        { speaker:'域元斩守呏斩', avatar:'🙋', text:'你已知元婴。你长字长字已斠境长而宗。' },
        { speaker:'域元斩守呏斩', avatar:'🙋', text:'你斩新知中长。你宗道长斩、致新知。中新斩长宗它斩。', reward: { exp: 100, lingshi: 100 } }
      ]
    },

    // ---- v3 新、成就殿开启 ----
    achievement_hall_intro: {
      id: 'achievement_hall_intro',
      lines: [
        { speaker:'成就殿主', avatar:'🏵', text:'欢迎道友至「成就殿」。此地铭记你修道路上的每一个鲜亮时刻。' },
        { speaker:'成就殿主', avatar:'🏵', text:'每解锁一项成就，均奖励灵石与称号。共 30 项——道友可愿尽集？' }
      ]
    }

  });

  global.STORY_DATA = STORY_DATA;

})(typeof window !== 'undefined' ? window : this);
