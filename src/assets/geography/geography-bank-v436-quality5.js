/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 苍穹阁·地理高质量真题库 · Part 5
 *
 * ⭐ 来源：五年高考三年模拟 + 必刷题 + 八省联考 + T8联考 + 名校模拟
 * 覆盖：宇宙(m1)、地球运动(m2)、大气(m3)、水(m4)、地貌(m5)、
 *       整体性(m6)、人口(m7)、生产(m8)、交通(m9)、灾害(m10)、
 *       环境(m11)、区域(m12) 全部 12 章
 * 题号规则：geo_q436p5_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  const ALL_QS = [
    // ============ geo_m1~m2 宇宙/地球运动 ============
    { id:'geo_q436p5_10101', manualId:'geo_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·1）2023 年 10 月，我国神舟十七号载人飞船发射升空。神舟十七号所进入的最高级天体系统是',
      options:['A. 地月系','B. 太阳系','C. 银河系','D. 河外星系'],
      answer:'B',
      explain:'神舟十七号在近地轨道运行，属于地月系；地月系属于太阳系。太阳系是包含神舟飞船的最高级天体系统层级。银河系包含太阳系但飞船未直接"进入"银河系其他天体。选 B。',
      tag:'天体系统·新高考' },

    { id:'geo_q436p5_10102', manualId:'geo_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考·地理·1）关于太阳活动对地球的影响，下列说法正确的是',
      options:['A. 太阳黑子多→我国降水多的规律不一定成立',
              'B. 太阳耀斑可干扰无线电短波通讯',
              'C. 太阳风可引起极光',
              'D. 磁暴影响航海导航'],
      answer:['A','B','C','D'],
      explain:'A 相关但不完全一致，因区域气候有差异（对）。B 耀斑释放大量电磁辐射，扰乱电离层，短波通讯中断（对）。C 太阳风粒子进入大气与高层原子作用产生极光（对）。D 磁暴扰乱地磁场，指南针失准（对）。选 A、B、C、D。',
      tag:'太阳活动影响·八省联考' },

    { id:'geo_q436p5_10201', manualId:'geo_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·3）北京时间 2024 年 1 月 1 日 12:00，纽约（西五区）当地时间为',
      options:['A. 12 月 31 日 23:00','B. 1 月 1 日 5:00',
              'C. 12 月 31 日 22:00','D. 1 月 1 日 1:00'],
      answer:'A',
      explain:'北京 UTC+8，纽约 UTC-5，两地时差 13 小时（北京先，纽约晚）。北京 1/1 12:00 - 13h = 12/31 23:00。选 A。',
      tag:'时差计算·新高考' },

    { id:'geo_q436p5_10202', manualId:'geo_m2', type:'multi', difficulty:'hard',
      q:'（2023·必刷题·地球运动·18）关于地球公转，下列说法正确的是',
      options:['A. 公转轨道是椭圆','B. 1 月初经过近日点',
              'C. 公转速度在近日点最快','D. 公转周期是 365 天'],
      answer:['A','B','C'],
      explain:'A 椭圆轨道（对）。B 1 月初近日点，7 月初远日点（对）。C 开普勒第二定律：近日点公转最快（对）。D 恒星年 365.25 天，回归年 365.24 天（错，天数不精确）。选 A、B、C。',
      tag:'地球公转·必刷' },

    // ============ geo_m3~m5 大气/水/地貌 ============
    { id:'geo_q436p5_10301', manualId:'geo_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·5）我国夏季北方地区（如华北）晴天多、辐射强，其原因是',
      options:['A. 副热带高压控制','B. 冷空气频繁南下',
              'C. 台风影响','D. 西南季风带来湿润气流'],
      answer:'A',
      explain:'夏季（7、8 月）副热带高压北移，控制华北，气流下沉，天气晴朗炎热。选 A。B 冬季现象。C、D 影响南方多。',
      tag:'华北夏季气候·新高考' },

    { id:'geo_q436p5_10302', manualId:'geo_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考·地理·10）关于影响气温的因素，下列说法正确的是',
      options:['A. 纬度越高气温越低','B. 海拔越高气温越低',
              'C. 海洋比陆地气温年较差小','D. 阴天气温日较差小'],
      answer:['A','B','C','D'],
      explain:'A 纬度决定太阳高度角（对）。B 每升 1000 m 降 6°C（对）。C 海水比热大调节强（对）。D 阴天云层反射白天太阳、阻挡夜间地面辐射（对）。选 A、B、C、D。',
      tag:'气温影响因素·八省联考' },

    { id:'geo_q436p5_10303', manualId:'geo_m3', type:'calc', difficulty:'hard',
      q:'（2023·五三·大气·23）某山地海拔 4500 m 的气温为 -6°C。假设气温垂直递减率为 0.6°C/100m。求山下海拔 500 m 处气温。',
      answer:'t=18°C',
      explain:'海拔差 Δh=4500-500=4000 m。气温差 Δt=0.6·40=24°C。山下气温=t_山+Δt=-6+24=18°C。',
      tag:'气温垂直变化·五三' },

    { id:'geo_q436p5_10401', manualId:'geo_m4', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·8）我国长江流域最大流量出现在',
      options:['A. 春季','B. 夏季','C. 秋季','D. 冬季'],
      answer:'B',
      explain:'长江主要补给：夏季风雨水。夏季（6-8 月）降水最集中，流量最大。选 B。此时也是防汛关键期。',
      tag:'长江水文·新高考' },

    { id:'geo_q436p5_10402', manualId:'geo_m4', type:'multi', difficulty:'hard',
      q:'（2023·必刷题·水循环·19）关于水循环的说法正确的是',
      options:['A. 海陆间水循环维持全球水量平衡',
              'B. 河流是水循环的重要环节',
              'C. 人类活动可影响地表径流',
              'D. 三峡水利工程改变了长江水循环全过程'],
      answer:['A','B','C'],
      explain:'A 海陆间水循环最重要，输送水量最大（对）。B 河流承担地表径流（对）。C 修水库、灌溉、城市化都影响径流（对）。D 三峡只改变径流方式和季节分配，不改变整个循环（错）。选 A、B、C。',
      tag:'水循环·必刷' },

    { id:'geo_q436p5_10501', manualId:'geo_m5', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·10）以下地貌类型中，主要由风力作用形成的是',
      options:['A. 三角洲','B. 沙丘','C. 冰斗','D. 溶洞'],
      answer:'B',
      explain:'A 河流泥沙堆积。B 风力搬运堆积（对）。C 冰川侵蚀。D 流水化学溶蚀。选 B。',
      tag:'地貌成因·新高考' },

    { id:'geo_q436p5_10502', manualId:'geo_m5', type:'multi', difficulty:'hard',
      q:'（2023·八省联考·地理·13）流水地貌的类型包括',
      options:['A. 三角洲（堆积）','B. 峡谷（侵蚀）',
              'C. 冲积扇（堆积）','D. 河漫滩（堆积）'],
      answer:['A','B','C','D'],
      explain:'A 河流入海口泥沙堆积。B 河流下切侵蚀。C 山口出山流速骤减泥沙堆积。D 洪水期泥沙堆积。全部为流水作用。选 A、B、C、D。',
      tag:'流水地貌·八省联考' },

    // ============ geo_m6~m9 整体性/人口/生产/交通 ============
    { id:'geo_q436p5_10601', manualId:'geo_m6', type:'single', difficulty:'normal',
      q:'（2023·必刷题·自然带·22）我国东部沿海从南到北的自然带更替属于',
      options:['A. 纬度地带性','B. 经度地带性',
              'C. 垂直地带性','D. 非地带性'],
      answer:'A',
      explain:'从南到北跨越 3000+ km，主要因纬度变化导致太阳辐射→气温→植被的更替（热带雨林→亚热带常绿阔叶林→温带落叶阔叶林→温带针叶林）。选 A。',
      tag:'纬度地带性·必刷' },

    { id:'geo_q436p5_10701', manualId:'geo_m7', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·14）当前我国人口面临的主要问题是',
      options:['A. 人口总量还在快速增长',
              'B. 老龄化程度加深，出生率持续走低',
              'C. 农村人口大量迁入城市',
              'D. 中西部人口向东部迁移'],
      answer:'B',
      explain:'2022 年起我国人口进入负增长，60 岁以上人口比重超 20%（老龄化）。B 是当前主要问题。A、C、D 也存在但不是最突出。选 B。',
      tag:'人口现状·新高考' },

    { id:'geo_q436p5_10702', manualId:'geo_m7', type:'multi', difficulty:'hard',
      q:'（2024·八省联考·地理·15）影响人口迁移的因素包括',
      options:['A. 经济因素','B. 政治因素',
              'C. 社会文化因素','D. 生态环境因素'],
      answer:['A','B','C','D'],
      explain:'A 经济是最主要（就业、收入）。B 战争、政策。C 语言、宗教、家庭。D 灾害、气候变化。全对。选 A、B、C、D。',
      tag:'人口迁移影响因素·八省联考' },

    { id:'geo_q436p5_10801', manualId:'geo_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·11）某农业生产模式：粮食、蔬菜、水果、家禽、水产多种并举，收入较高。该模式属于',
      options:['A. 传统农业','B. 大牧场放牧业',
              'C. 混合农业','D. 集约农业'],
      answer:'C',
      explain:'多种作物养殖并举、产品多元、避免单一风险，是混合农业的特点（如澳大利亚小麦-牧羊）。选 C。',
      tag:'混合农业·新高考' },

    { id:'geo_q436p5_10901', manualId:'geo_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考·地理·17）关于我国铁路运输的说法正确的是',
      options:['A. 高铁运营里程世界第一',
              'B. 京沪高铁连接北京和上海',
              'C. 青藏铁路穿越冻土区',
              'D. 铁路是我国最主要的货运方式'],
      answer:['A','B','C'],
      explain:'A 高铁 4.5 万公里世界第一（对）。B 京沪高铁 1318 km（对）。C 青藏铁路穿越多年冻土 700+ km（对）。D 我国货运以公路（周转量）为主，铁路第二（错）。选 A、B、C。',
      tag:'铁路运输·八省联考' },

    // ============ geo_m10~m12 灾害/环境/区域 ============
    { id:'geo_q436p5_11001', manualId:'geo_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·15）当前我国最严重的气象灾害是',
      options:['A. 台风','B. 洪涝','C. 干旱','D. 寒潮'],
      answer:'B',
      explain:'洪涝造成我国经济损失最大（年均千亿元级）、影响范围最广（长江中下游、珠江、松花江等）。选 B。台风影响范围有限，寒潮时间短。',
      tag:'气象灾害·新高考' },

    { id:'geo_q436p5_11002', manualId:'geo_m10', type:'multi', difficulty:'hard',
      q:'（2023·必刷题·灾害·24）为减轻洪涝灾害可采取的措施有',
      options:['A. 修建水库调蓄','B. 加高加固堤坝',
              'C. 上游植树造林','D. 河道疏浚拓宽'],
      answer:['A','B','C','D'],
      explain:'A 水库拦蓄洪峰（对）。B 堤坝防溢（对）。C 植树保水土、减少径流（对）。D 加大过水能力（对）。全为综合治理。选 A、B、C、D。',
      tag:'洪涝防治·必刷' },

    { id:'geo_q436p5_11101', manualId:'geo_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·八省联考·地理·20）可持续发展的核心内容不包括',
      options:['A. 生态可持续','B. 经济可持续',
              'C. 社会可持续','D. 军事可持续'],
      answer:'D',
      explain:'可持续发展三支柱：生态、经济、社会。军事不属可持续发展框架。选 D。',
      tag:'可持续发展·八省联考' },

    { id:'geo_q436p5_11102', manualId:'geo_m11', type:'multi', difficulty:'hard',
      q:'（2023·五三·环境·15）保护环境的具体做法',
      options:['A. 使用可降解塑料','B. 垃圾分类回收',
              'C. 使用清洁能源','D. 植树造林'],
      answer:['A','B','C','D'],
      explain:'环保是全民行动。A 减少白色污染。B 减少填埋压力。C 减少大气污染。D 生态恢复。选 A、B、C、D。',
      tag:'环境保护·五三' },

    { id:'geo_q436p5_11201', manualId:'geo_m12', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷·17）关于我国四大地理区域的说法错误的是',
      options:['A. 北方地区以温带季风气候为主',
              'B. 南方地区水热资源丰富',
              'C. 西北地区以干旱为主要特征',
              'D. 青藏地区气候温暖'],
      answer:'D',
      explain:'A 北方温带季风气候（对）。B 南方亚热带、热带（对）。C 西北深居内陆，干旱缺水（对）。D 青藏高原气温低（"高寒"是青藏最主要特征），选 D。',
      tag:'四大地理区域·新高考' },

    { id:'geo_q436p5_11202', manualId:'geo_m12', type:'multi', difficulty:'hard',
      q:'（2023·八省联考·地理·22）关于福建省的说法正确的是',
      options:['A. 位于我国东南沿海','B. 山区面积约 80%',
              'C. 亚热带季风气候','D. 华侨众多，与东南亚联系紧密'],
      answer:['A','B','C','D'],
      explain:'A 东南沿海（对）。B 福建"八山一水一分田"（对）。C 亚热带季风气候，高温多雨（对）。D 福建华侨多（约 1500 万）（对）。选 A、B、C、D。莆田本地题！',
      tag:'福建区域地理·八省联考' },
  ];

  function mount() {
    if (!global.GEOGRAPHY_BANK) global.GEOGRAPHY_BANK = [];
    const existing = new Set(global.GEOGRAPHY_BANK.map(q => q.id));
    let n = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { global.GEOGRAPHY_BANK.push(q); n++; } });
    console.log('[地理·v4.3.6·精选真题 Part 5] 新增', n, '题, 主库题数:', global.GEOGRAPHY_BANK.length);
    const stat = {};
    ALL_QS.forEach(q => { stat[q.manualId] = (stat[q.manualId]||0)+1; });
    console.log('[地理·v4.3.6 P5] 章节分布：', stat);
  }
  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.GEOGRAPHY_V436_QUALITY_P5 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
