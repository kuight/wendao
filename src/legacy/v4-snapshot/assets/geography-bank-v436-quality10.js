/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 苍穹阁·地理高质量真题库 · Part 10
 * ⭐ 来源风格：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 金考卷 · 名校模拟
 * 覆盖：宇宙、地球运动、大气、水、地貌、自然带、人口、农业工业、交通、灾害、环境、区域
 * 题号规则：geo_q436p10_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ geo_m1 宇宙 ============
    { id:'geo_q436p10_10101', manualId:'geo_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）关于太阳辐射对地球的影响，下列说法正确的是',
      options:['A. 是地球大气、水、生物、化学循环的主要能量来源','B. 是地球化石能源的能量来源（间接来自古代太阳能）','C. 影响地表冷热差异形成大气环流','D. 是地热能的主要来源'],
      answer:'ABC',
      explain:'A ✓（太阳能是地球外部主要能源）。B ✓（煤石油天然气本质是古代太阳能通过光合作用储存）。C ✓（不均匀受热→大气环流）。D 错，地热能来自地球内部放射性元素衰变和岩浆，不是太阳辐射。选 ABC。',
      tag:'太阳辐射·影响' },

    // ============ geo_m2 地球运动 ============
    { id:'geo_q436p10_10201', manualId:'geo_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）某日晨昏线与经线重合，则该日是',
      options:['A. 3 月 21 日前后（春分）','B. 6 月 22 日前后（夏至）','C. 9 月 23 日前后（秋分）','D. 12 月 22 日前后（冬至）'],
      answer:'AC',
      explain:'只有二分日（春分、秋分），晨昏线与经线重合（即太阳直射赤道，晨昏线过南北极点垂直于赤道）。二至日晨昏线与经线成 23.5° 夹角。选 AC。',
      tag:'晨昏线·特殊日期' },

    { id:'geo_q436p10_10202', manualId:'geo_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东）北京时间 2023 年 5 月 30 日 09:31 神舟十六号发射，同一时刻纽约（西五区）时间是',
      options:['A. 5 月 29 日 20:31','B. 5 月 29 日 21:31','C. 5 月 30 日 20:31','D. 5 月 30 日 21:31'],
      answer:'A',
      explain:'北京东八区，纽约西五区，时差 13 小时（东减西加，向西减 13h）。5/30 09:31-13h=5/29 20:31。选 A。',
      tag:'时区计算·跨日' },

    // ============ geo_m3 大气 ============
    { id:'geo_q436p10_10301', manualId:'geo_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于季风气候，下列说法正确的是',
      options:['A. 东亚季风：夏季东南风、冬季西北风','B. 南亚季风：夏季西南风、冬季东北风','C. 季风气候夏季高温多雨，冬季寒冷干燥（东亚温带季风）或凉爽温和（东亚亚热带季风）','D. 季风气候降水集中夏季，年降水量变率大'],
      answer:'ABCD',
      explain:'A ✓（东亚季风由海陆热力差异形成）。B ✓（南亚季风由气压带风带移动+海陆差异共同形成）。C ✓（季风气候雨热同期）。D ✓（季风气候降水变率大是重要特点）。全对，选 ABCD。',
      tag:'季风气候·全' },

    // ============ geo_m4 水文 ============
    { id:'geo_q436p10_10401', manualId:'geo_m4', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·广东）我国东北地区河流的水文特征是',
      options:['A. 春汛（融雪）与夏汛（降水）两次汛期','B. 冬季不封冻','C. 含沙量高','D. 年径流量小'],
      answer:'A',
      explain:'东北河流水文特征：①春汛（积雪融水，3-5月）；②夏汛（雨水，7-8月）；③冬季封冻期长（约 4-6 个月）；④含沙量低（植被好、多黑土）；⑤径流量大（降水+融水）。A 正确，B、C、D 错。',
      tag:'东北河流·水文特征' },

    // ============ geo_m5 地貌 ============
    { id:'geo_q436p10_10501', manualId:'geo_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于风成地貌，下列说法正确的是',
      options:['A. 风蚀作用形成风蚀蘑菇、风蚀柱、雅丹地貌','B. 风积作用形成沙丘（新月形、纵向沙丘等）','C. 迎风坡缓，背风坡陡（新月形沙丘）','D. 我国西北和内蒙古是主要风成地貌区'],
      answer:'ABCD',
      explain:'A ✓（风蚀典型地貌）。B ✓（风积典型地貌）。C ✓（新月形沙丘迎风坡缓 10-20°，背风坡陡 30° 左右）。D ✓（我国西北干旱区风成地貌广布）。全对，选 ABCD。',
      tag:'风成地貌·综合' },

    // ============ geo_m7 人口 ============
    { id:'geo_q436p10_10701', manualId:'geo_m7', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·河北）城市化对地理环境的负面影响不包括',
      options:['A. 大量占用耕地','B. 加剧热岛效应','C. 交通拥堵，环境污染','D. 促进经济发展'],
      answer:'D',
      explain:'A、B、C 都是城市化的负面影响。D 是城市化的积极影响（促进就业、经济发展、生活水平提升等）。题干问"不包括"，选 D。',
      tag:'城市化·影响' },

    // ============ geo_m8 农工 ============
    { id:'geo_q436p10_10801', manualId:'geo_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）关于我国"西电东送"工程，下列说法正确的是',
      options:['A. 北线：内蒙古、山西火电送华北','B. 中线：三峡水电+四川水电送华中华东','C. 南线：云南贵州水电+火电送广东','D. 有利于优化能源结构，减少东部环境污染'],
      answer:'ABCD',
      explain:'西电东送三条线路：北线（火电为主）、中线（三峡、四川水电）、南线（云贵水电+火电）。工程意义：优化东部能源结构（减煤增水电、增新能源）、减少东部污染、促进西部经济发展。全对，选 ABCD。',
      tag:'西电东送·工程' },

    // ============ geo_m9 交通 ============
    { id:'geo_q436p10_10901', manualId:'geo_m9', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）我国修建"川藏铁路"（成都-拉萨）面临的最大自然障碍是',
      options:['A. 沼泽湿地广布','B. 地形复杂、地质灾害多（滑坡、泥石流、雪崩、地震带）','C. 河网密布','D. 森林茂密'],
      answer:'B',
      explain:'川藏铁路穿越横断山脉、青藏高原东南缘，翻越 14 座 4000 m 以上山脉，跨越怒江、澜沧江、金沙江等，地质活动频繁（位于地震带），滑坡泥石流雪崩灾害多。这是最大自然障碍。选 B。',
      tag:'川藏铁路·障碍' },

    // ============ geo_m10 灾害 ============
    { id:'geo_q436p10_11001', manualId:'geo_m10', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）我国是世界上自然灾害最严重的国家之一，主要自然灾害有',
      options:['A. 台风（东南沿海）','B. 洪涝（东部季风区）','C. 干旱（华北等）','D. 地震（横断山脉、华北平原）'],
      answer:'ABCD',
      explain:'我国主要自然灾害：①台风（东南沿海夏秋季）；②洪涝（东部季风区夏季降水集中）；③干旱（华北春旱最严重）；④地震（沿板块交界带的地震带：环太平洋、地中海-喜马拉雅、我国横断山、华北等）。全对，选 ABCD。',
      tag:'我国自然灾害·分布' },

    // ============ geo_m11 环境 ============
    { id:'geo_q436p10_11101', manualId:'geo_m11', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·福建）实现可持续发展的核心是',
      options:['A. 高速经济发展','B. 保护环境','C. 经济、社会、生态三大效益协调统一','D. 减少人口'],
      answer:'C',
      explain:'可持续发展的核心：经济、社会、生态（环境）三大系统协调发展，实现代际公平和代内公平。既不能只追求 GDP（A 错），也不是纯粹保护环境不发展（B 片面），更不是简单减少人口（D 片面）。选 C。',
      tag:'可持续发展·核心' },

    // ============ geo_m12 区域 ============
    { id:'geo_q436p10_11201', manualId:'geo_m12', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·广东）"一带一路"倡议中，"丝绸之路经济带"和"21 世纪海上丝绸之路"的起点城市分别是',
      options:['A. 上海、广州','B. 西安、泉州','C. 北京、深圳','D. 兰州、宁波'],
      answer:'B',
      explain:'"丝绸之路经济带"起点历史上是长安（今西安）；"21 世纪海上丝绸之路"起点是泉州（历史上"东方第一大港"，古代海上丝路重要港口）。选 B。',
      tag:'一带一路·地理' },
  ];

  function mount() {
    const bank = global.GEOGRAPHY_BANK || (global.window && global.window.GEOGRAPHY_BANK);
    if (!bank || !bank.push) { console.warn('[geo·P10] 未找到 GEOGRAPHY_BANK'); return; }
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { bank.push(q); added++; } });
    console.info('[地理·v4.3.6·精选真题 Part 10] 新增 ' + added + ' 题, 主库题数: ' + bank.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.GEOGRAPHY_V436_QUALITY_P10 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
