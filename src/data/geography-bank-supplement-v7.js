/* ===================================================
 * 磐山界·地理专项深化包 v4.2.6-v7 (Part 1: m1~m2)
 *
 * 目标：将地理题库扩展至 7000 题级
 * 本包 Part1: 覆盖 地球宇宙(m1) + 大气环境(m2)
 * 后续 Part2-4 会继续覆盖 m3~m12
 * 全部带 explain,标注 local_fj / gaokao
 * =================================================== */
(function (global) {
  'use strict';

  const GEOGRAPHY_FUJIAN_V7_P1 = [
  {
    "id": "geofj7_001",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "地球是太阳系八大行星中距离太阳第几近的行星？",
    "answer": "C",
    "explain": "太阳系顺序：水金地火木土天海。地球第3。",
    "options": [
      "A.水星",
      "B.金星",
      "C.地球（第三）",
      "D.火星"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_002",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "与地球运动特征最相近的是",
    "answer": "A",
    "explain": "火星自转周期(24.6h)、自转轴倾角(25°)、公转轨道均与地球最接近。",
    "options": [
      "A.火星",
      "B.金星",
      "C.水星",
      "D.木星"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_003",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列天体系统层级由大到小正确的是",
    "answer": "A",
    "explain": "由大到小：总星系→银河系(和河外星系并列于总星系)→太阳系→地月系。",
    "options": [
      "A.总星系→银河系→太阳系→地月系",
      "B.银河系→总星系→太阳系→地月系",
      "C.太阳系→银河系→地月系→总星系",
      "D.地月系→太阳系→银河系→总星系"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_004",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "地球存在生命的根本原因是",
    "answer": "D",
    "explain": "生命存在需综合条件：适宜温度(日地距离)、液态水、大气(体积质量)、稳定光照(太阳)、安全空间环境。",
    "options": [
      "A.体积质量适中",
      "B.日地距离适中",
      "C.有大气有水",
      "D.内部因素+外部因素综合"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_005",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "太阳辐射能量来源",
    "answer": "A",
    "explain": "太阳内部氢核聚变为氦核，释放巨大能量。",
    "options": [
      "A.核聚变（氢→氦）",
      "B.核裂变",
      "C.化学反应",
      "D.引力势能"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_006",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于太阳辐射对地球影响的是",
    "answer": "D",
    "explain": "地震火山源于地球内部能量(放射性衰变)，不是太阳辐射。",
    "options": [
      "A.促进大气水体运动",
      "B.维持地表温度",
      "C.为生物光合作用提供能量",
      "D.导致地震火山"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_007",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "太阳活动主要标志",
    "answer": "A",
    "explain": "黑子出现在光球层，耀斑出现在色球层，都是太阳活动主要标志。",
    "options": [
      "A.黑子和耀斑",
      "B.流星和陨石",
      "C.极光和彩虹",
      "D.晨昏线"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_008",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "太阳活动周期约为",
    "answer": "B",
    "explain": "太阳黑子数量变化平均周期约11年。",
    "options": [
      "A.1年",
      "B.11年",
      "C.100年",
      "D.1000年"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_009",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "太阳耀斑喷发的高能带电粒子到达地球主要引发",
    "answer": "A",
    "explain": "带电粒子扰动磁场造成磁暴，与高层大气分子碰撞发光形成极光，电离层扰动导致无线电中断。",
    "options": [
      "A.磁暴、极光、无线电短波通信中断",
      "B.地震",
      "C.海啸",
      "D.火山喷发"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_010",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳活动关系最密切的是",
    "answer": "C",
    "explain": "昼夜交替源于地球自转，季节和昼夜长短源于公转+黄赤交角，通信中断源于耀斑影响电离层。",
    "options": [
      "A.昼夜交替",
      "B.四季更替",
      "C.无线电短波通信中断",
      "D.昼夜长短变化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_011",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球圈层结构叙述正确的是",
    "answer": "C",
    "explain": "地壳厚度不均(大陆厚海洋薄)；地幔是固态；软流层位于上地幔上部；地核外核液态、内核固态。",
    "options": [
      "A.地壳厚度均匀",
      "B.地幔是液态",
      "C.软流层位于上地幔",
      "D.地核是气态"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_012",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "地震波中横波(S波)特点",
    "answer": "A",
    "explain": "横波(S波)只能在固体中传播；纵波(P波)可在固、液、气三态中传播，速度更快。",
    "options": [
      "A.只能通过固体",
      "B.能通过固液气三态",
      "C.速度比纵波快",
      "D.不能在地壳传播"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_013",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "莫霍界面是",
    "answer": "A",
    "explain": "莫霍面：地壳与地幔分界(约33km深，海洋约7km)；古登堡面：地幔与地核分界(2900km)。",
    "options": [
      "A.地壳与地幔分界",
      "B.地幔与地核分界",
      "C.上下地幔分界",
      "D.内外核分界"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_014",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "岩石圈的范围是",
    "answer": "B",
    "explain": "岩石圈=地壳+上地幔顶部(软流层以上)。软流层是岩浆发源地。",
    "options": [
      "A.地壳",
      "B.地壳+软流层以上部分地幔",
      "C.地壳+整个地幔",
      "D.整个地球"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_015",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "大气圈中氧气所占比例约为",
    "answer": "B",
    "explain": "干洁空气：N₂ 78%、O₂ 21%、其他(Ar、CO₂等)约1%。",
    "options": [
      "A.78%",
      "B.21%",
      "C.1%",
      "D.0.03%"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_016",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "对地面保温起最重要作用的大气成分是",
    "answer": "B",
    "explain": "水汽和CO₂强烈吸收地面长波辐射，向地面辐射热量，起保温作用。",
    "options": [
      "A.氧气",
      "B.水汽和二氧化碳",
      "C.氮气",
      "D.臭氧"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_017",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "臭氧层位于",
    "answer": "B",
    "explain": "臭氧层位于平流层(22~27km最集中)，吸收紫外线，保护地表生物。",
    "options": [
      "A.对流层",
      "B.平流层",
      "C.中间层",
      "D.热层"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_018",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于对流层叙述正确的是",
    "answer": "C",
    "explain": "对流层特点：气温随高度递减(每上升100m降0.6°C)、水汽杂质多、天气复杂、有强烈对流。",
    "options": [
      "A.温度随高度升高而升高",
      "B.水汽含量少",
      "C.天气现象复杂多变",
      "D.无对流运动"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_019",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "对流层高度纬度差异",
    "answer": "A",
    "explain": "对流层平均高度约12km，赤道17-18km，两极8km。近地面温度高对流旺，对流层厚。",
    "options": [
      "A.低纬高高纬低",
      "B.低纬低高纬高",
      "C.低纬与高纬相同",
      "D.无差异"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_020",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球自转叙述正确的是",
    "answer": "A",
    "explain": "地球自转方向自西向东。北极上空看逆时针，南极上空看顺时针。",
    "options": [
      "A.自西向东",
      "B.自东向西",
      "C.从北极上空看顺时针",
      "D.从南极上空看逆时针"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_021",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "地球自转真正周期是",
    "answer": "B",
    "explain": "恒星日23h56m4s：地球相对遥远恒星自转真正周期。太阳日24h：相对太阳。",
    "options": [
      "A.24小时(太阳日)",
      "B.23时56分4秒(恒星日)",
      "C.365日",
      "D.1个月"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_022",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列纬度地区中地球自转线速度最大的是",
    "answer": "A",
    "explain": "线速度=ω·r·cosφ，赤道cos0°=1最大(约1670km/h)，两极为零。",
    "options": [
      "A.赤道",
      "B.23°26'N",
      "C.30°N",
      "D.60°N"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_023",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球公转叙述错误的是",
    "answer": "D",
    "explain": "开普勒第二定律：近日点公转速度最快(1月初)；远日点最慢(7月初)。",
    "options": [
      "A.方向自西向东",
      "B.轨道近圆",
      "C.近日点1月初",
      "D.地球在近日点时公转速度最慢"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_024",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "黄赤交角当前约",
    "answer": "B",
    "explain": "当前黄赤交角23°26'(即回归线纬度)。若变大则回归线变高、极圈变低、温带缩小。",
    "options": [
      "A.21°44'",
      "B.23°26'",
      "C.24°30'",
      "D.0°"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_025",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "太阳直射点的移动范围",
    "answer": "B",
    "explain": "太阳直射点年内在南北回归线之间往返移动，这是季节形成的直接原因。",
    "options": [
      "A.赤道",
      "B.南北回归线之间",
      "C.南北极圈之间",
      "D.0°到90°"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_026",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北半球夏至日太阳直射",
    "answer": "B",
    "explain": "夏至日(6月22日前后)太阳直射北回归线23°26'N。",
    "options": [
      "A.赤道",
      "B.北回归线",
      "C.南回归线",
      "D.北极圈"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_027",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列日期中北京(40°N)白昼最长的是",
    "answer": "B",
    "explain": "北半球夏至日6月22日前后，北半球昼最长夜最短，纬度越高白昼越长。",
    "options": [
      "A.3月21日",
      "B.6月22日",
      "C.9月23日",
      "D.12月22日"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_028",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "同一地区一年中正午太阳高度最大的日期",
    "answer": "A",
    "explain": "北回归线以北地区，夏至日(6月22)太阳最靠近，正午太阳高度年内最大。",
    "options": [
      "A.夏至(北回归线以北)",
      "B.冬至(北回归线以北)",
      "C.春分",
      "D.秋分"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_029",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "H=90°-|φ-δ|中δ表示",
    "answer": "B",
    "explain": "正午太阳高度公式：H=90°-|观测点纬度φ-太阳直射点纬度δ|(同半球取差绝对值，异半球取和)。",
    "options": [
      "A.观测点纬度",
      "B.太阳直射点纬度",
      "C.经度",
      "D.时间"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_030",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北京(40°N)夏至日正午太阳高度",
    "answer": "B",
    "explain": "H=90°-|40°N-23°26'N|=90°-16°34'=73°26'。",
    "options": [
      "A.16°34'",
      "B.73°26'",
      "C.50°",
      "D.90°"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_031",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列时刻昼夜等长的是",
    "answer": "A",
    "explain": "春分(3.21)秋分(9.23)全球昼夜等长；夏至冬至只有赤道昼夜等长。",
    "options": [
      "A.春分和秋分",
      "B.夏至和冬至",
      "C.元旦",
      "D.国庆"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_032",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "地球上产生昼夜现象的原因是",
    "answer": "C",
    "explain": "昼夜现象源于地球不透明+被太阳照射；昼夜交替源于地球自转。",
    "options": [
      "A.地球自转",
      "B.地球公转",
      "C.地球是不透明球体",
      "D.太阳照射"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_033",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "晨昏线与经线",
    "answer": "C",
    "explain": "春秋分日太阳直射赤道，晨昏线过南北极且与经线重合。其他时候有夹角。",
    "options": [
      "A.永远重合",
      "B.永远垂直",
      "C.春秋分日重合",
      "D.夏至冬至日重合"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_034",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "时区划分中0°经线所在时区是",
    "answer": "C",
    "explain": "0°经线所在7.5°W~7.5°E为中时区(零时区)。每15°一时区。",
    "options": [
      "A.东1区",
      "B.西1区",
      "C.中时区(零时区)",
      "D.国际日期变更线"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_035",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北京时间指",
    "answer": "B",
    "explain": "北京时间=东八区区时=东经120°经线的地方时。北京在116°E地方时略晚。",
    "options": [
      "A.北京市地方时",
      "B.东8区区时(120°E地方时)",
      "C.北京地方时",
      "D.中国标准时"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_036",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地区一天中最先看到日出的是",
    "answer": "A",
    "explain": "越东越早日出。东京(139°E)>北京(116°E)>乌鲁木齐(87°E)>伦敦(0°)。",
    "options": [
      "A.东京",
      "B.北京",
      "C.乌鲁木齐",
      "D.伦敦"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_037",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "国际日期变更线沿",
    "answer": "B",
    "explain": "国际日期变更线大致沿180°经线,为避免同国家分两天有折线(如新西兰、库克群岛)。",
    "options": [
      "A.0°经线",
      "B.180°经线附近折线",
      "C.赤道",
      "D.南回归线"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_038",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "从东12区跨过日界线到西12区",
    "answer": "A",
    "explain": "自西向东过日界线：日期减一天(西12→东12反之)。自东向西过：日期加一天。",
    "options": [
      "A.日期减一天",
      "B.日期加一天",
      "C.时间不变",
      "D.小时变24"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_039",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不受地球自转偏向力(地转偏向力)影响的是",
    "answer": "C",
    "explain": "科里奥利力北半球右偏、南半球左偏、赤道为零。",
    "options": [
      "A.长江水南岸冲刷严重",
      "B.气旋反气旋方向",
      "C.赤道地区水平运动物体",
      "D.飞机航线"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_040",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "四季更替的根本原因",
    "answer": "D",
    "explain": "黄赤交角(23°26')导致太阳直射点南北移动，各地正午太阳高度和昼夜长短季节变化，进而形成四季。",
    "options": [
      "A.地球公转",
      "B.地球自转",
      "C.太阳辐射变化",
      "D.黄赤交角存在"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_041",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "五带划分依据是",
    "answer": "C",
    "explain": "五带按太阳辐射量分：热带(南北回归线间)、南北温带(回归线到极圈)、南北寒带(极圈内)。",
    "options": [
      "A.气候",
      "B.经度",
      "C.太阳辐射(纬度)",
      "D.昼夜长短"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_042",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地区可以出现极昼极夜现象的是",
    "answer": "D",
    "explain": "极圈(66°34')内地区一年至少一天极昼极夜；极点则半年极昼半年极夜。",
    "options": [
      "A.赤道地区",
      "B.30°N",
      "C.40°N",
      "D.北极圈内"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_043",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于日食叙述正确的是",
    "answer": "A",
    "explain": "日食：月球位于日地之间遮挡阳光，必在新月(朔)前后。月食必在满月(望)前后。",
    "options": [
      "A.日食发生在朔(初一)",
      "B.日食发生在望(十五)",
      "C.任何时候都可能",
      "D.与月相无关"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_044",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "月相变化的成因",
    "answer": "B",
    "explain": "月球本身不发光，反射太阳光。月相由日、地、月相对位置周期变化而成。",
    "options": [
      "A.月球自转",
      "B.月球公转+日地月位置变化",
      "C.月球自身发光",
      "D.月球被云遮挡"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_045",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "从新月到下一次新月的时间是",
    "answer": "B",
    "explain": "朔望月：月相变化周期约29.53日(农历一个月)。恒星月：月球公转恒星背景周期27.32日。",
    "options": [
      "A.一个恒星月27.32日",
      "B.一个朔望月29.53日",
      "C.30日",
      "D.28日"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_046",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于潮汐叙述正确的是",
    "answer": "A",
    "explain": "潮汐由月球和太阳引力+地球自转产生。月近地约地月引力大(≈2倍太阳)。大潮：日月地共线(朔望)；小潮：日月成直角(上下弦)。",
    "options": [
      "A.月球引力比太阳大约2倍",
      "B.太阳引力更大",
      "C.日月潮汐无关",
      "D.潮汐无规律"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_047",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "每天涨潮次数一般是",
    "answer": "B",
    "explain": "半日潮：一天2次涨潮2次落潮(约每12h25min一次)。全日潮：一天1涨1落(部分海域)。",
    "options": [
      "A.1次",
      "B.2次",
      "C.3次",
      "D.4次"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_048",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于地球特殊性的是",
    "answer": "C",
    "explain": "太阳系其他行星大多有卫星(木星79个、土星82个)，卫星不是地球特殊性。",
    "options": [
      "A.有生命存在",
      "B.有液态水",
      "C.有卫星",
      "D.距离太阳适中"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_049",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "最大的行星是",
    "answer": "C",
    "explain": "木星质量约地球318倍，直径11倍，八大行星中最大。",
    "options": [
      "A.水星",
      "B.地球",
      "C.木星",
      "D.土星"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_050",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于矮行星叙述正确的是",
    "answer": "C",
    "explain": "IAU 2006年划定矮行星标准：绕日转、球形、未清除轨道邻近天体。已知：冥王星、谷神星、阋神星、鸟神星、妊神星。",
    "options": [
      "A.有卫星",
      "B.质量比行星大",
      "C.已知有冥王星、谷神星等",
      "D.轨道靠近太阳"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_051",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "彗星尾巴指向",
    "answer": "B",
    "explain": "彗星尾巴由太阳风吹散彗核物质形成，永远背向太阳。近日时尾长，远日时短或无。",
    "options": [
      "A.太阳",
      "B.背向太阳",
      "C.地球",
      "D.不定"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_052",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于流星现象叙述正确的是",
    "answer": "B",
    "explain": "流星：太空小天体高速进入地球大气层，与大气摩擦生热发光。未烧完落到地面的部分叫陨石。",
    "options": [
      "A.流星就是恒星流动",
      "B.小天体高速进大气摩擦发光",
      "C.彗星运动",
      "D.陨石碰撞地面"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_053",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列位置北京看不到太阳过顶(直射)的原因是",
    "answer": "B",
    "explain": "太阳直射范围南北回归线间。北京40°N>23°26'N，故一年任何时刻都非直射。",
    "options": [
      "A.北京在北回归线以南",
      "B.北京在北回归线以北",
      "C.北京在赤道",
      "D.北京纬度过低"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_054",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列日期北京昼比夜长的是",
    "answer": "A",
    "explain": "北半球夏至(6.22)日昼最长夜最短。春分-秋分间北半球昼>夜。",
    "options": [
      "A.6月22日",
      "B.12月22日",
      "C.3月21日之前",
      "D.9月23日之后"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_055",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "影响太阳辐射的因素中，起主导作用的是",
    "answer": "A",
    "explain": "太阳高度角(取决于纬度)决定接收辐射多少：纬度低太阳高辐射强。",
    "options": [
      "A.纬度",
      "B.海拔",
      "C.天气",
      "D.洋流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_056",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地区太阳辐射最强的是",
    "answer": "A",
    "explain": "青藏高原：纬度较低+海拔高(空气稀薄透明大气吸收少)+晴天多，太阳辐射居全国最强。",
    "options": [
      "A.青藏高原",
      "B.四川盆地",
      "C.东北平原",
      "D.江南丘陵"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_057",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地区太阳辐射最弱的是",
    "answer": "C",
    "explain": "四川盆地：多阴雨云雾天气(俗称蜀犬吠日)，太阳辐射居全国最弱。",
    "options": [
      "A.青藏高原",
      "B.塔里木盆地",
      "C.四川盆地",
      "D.江南丘陵"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_059",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "hard",
    "q": "120°E地方时是14:00，则45°E地方时是",
    "answer": "B",
    "explain": "东西两地经度差=120-45=75°，时差=75/15=5小时。45°E在120°E以西时间早减5小时=09:00。",
    "options": [
      "A.19:00",
      "B.09:00",
      "C.10:30",
      "D.19:30"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_060",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "hard",
    "q": "已知某地经度75°W，北京时间(120°E)8月1日20:00，该地地方时是",
    "answer": "A",
    "explain": "两地经度差120+75=195°，时差=195/15=13h。西边地方时早晚：早13小时。20:00-13h=07:00(同日)。",
    "options": [
      "A.8月1日07:00",
      "B.8月1日13:00",
      "C.8月2日07:00",
      "D.7月31日07:00"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_061",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "hard",
    "q": "北京时间(东八区区时)2024年1月1日00:00时，纽约(西五区)时间是",
    "answer": "B",
    "explain": "时差=8+5=13h，纽约在东八区以西比北京晚13h。1月1日00:00-13h=2023年12月31日11:00。",
    "options": [
      "A.1月1日13:00",
      "B.2023年12月31日11:00",
      "C.2024年1月1日05:00",
      "D.2023年12月31日13:00"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_062",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "6月22日北半球某地正午太阳高度73°26'，该地纬度是",
    "answer": "A",
    "explain": "夏至日太阳直射23°26'N。H=90°-|φ-23°26'|=73°26'→ |φ-23°26'|=16°34'→ φ=40°N(北)或6°52'S(南)。北半球取40°N。",
    "options": [
      "A.40°N",
      "B.40°S",
      "C.0°",
      "D.23°26'N"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_063",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于外部宇宙环境对地球影响的是",
    "answer": "D",
    "explain": "地震源于地球内部构造活动，属于内部因素。",
    "options": [
      "A.太阳辐射",
      "B.太阳活动",
      "C.小行星撞击",
      "D.地震"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_064",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球公转轨道形状叙述正确的是",
    "answer": "B",
    "explain": "地球公转轨道为椭圆，太阳在椭圆一焦点上，偏心率约0.017很小接近圆。",
    "options": [
      "A.正圆",
      "B.椭圆(接近圆)",
      "C.抛物线",
      "D.不规则"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_065",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "春分日至夏至日太阳直射点",
    "answer": "A",
    "explain": "春分3.21→夏至6.22：太阳直射点从赤道向北移到23°26'N。",
    "options": [
      "A.向北移",
      "B.向南移",
      "C.不变",
      "D.往复移"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_066",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北极圈内出现极昼时",
    "answer": "A",
    "explain": "北极极昼时(夏至前后)，南极极夜。北极极夜(冬至前后)时，南极极昼。",
    "options": [
      "A.南极圈内极夜",
      "B.南极圈内极昼",
      "C.赤道昼夜等长",
      "D.这是冬至情况"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_067",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于地球自转产生的地理现象是",
    "answer": "D",
    "explain": "四季更替源于公转+黄赤交角。自转产生：昼夜交替、地方时(时区)、地转偏向。",
    "options": [
      "A.昼夜交替",
      "B.地方时",
      "C.地转偏向力",
      "D.四季更替"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_068",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北回归线穿过我国的省区有",
    "answer": "A",
    "explain": "北回归线23°26'N自东向西穿过我国台湾岛、广东、广西、云南四省区。",
    "options": [
      "A.台湾、广东、广西、云南",
      "B.广东、广西、云南、西藏",
      "C.西藏、青海、四川",
      "D.广东、福建"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_069",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于晨昏线特点叙述错误的是",
    "answer": "D",
    "explain": "晨昏线是大圆，垂直太阳光线，昼夜半球分界。晨昏线本身移动方向自东向西(与自转相反)。",
    "options": [
      "A.是过地心的大圆",
      "B.始终垂直太阳光线",
      "C.分割昼夜半球",
      "D.随经线不断变化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_070",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北京地方时正午12时，此时太阳直射的经度是",
    "answer": "A",
    "explain": "地方时正午即太阳直射该经线。北京在116°E,地方时12时说明太阳直射116°E。",
    "options": [
      "A.116°E",
      "B.120°E",
      "C.0°",
      "D.180°"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_071",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球在太阳系位置叙述正确的是",
    "answer": "A",
    "explain": "太阳系分类地行星(水金地火)、巨行星(木土天海)。地球属类地行星。",
    "options": [
      "A.位于类地行星",
      "B.位于巨行星",
      "C.位于矮行星带",
      "D.冥王星轨道内"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_072",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳辐射有关的是",
    "answer": "C",
    "explain": "太阳辐射驱动地球大气环流(风)、水循环(雨)、生命活动(光合)。板块运动由地球内力驱动。",
    "options": [
      "A.火山喷发",
      "B.地震",
      "C.风、雨、光合作用",
      "D.板块运动"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_073",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于太阳大气层的是",
    "answer": "D",
    "explain": "太阳大气由内向外：光球、色球、日冕。软流层属于地球上地幔。",
    "options": [
      "A.光球层",
      "B.色球层",
      "C.日冕层",
      "D.软流层"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_074",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大气圈叙述正确的是",
    "answer": "B",
    "explain": "干洁空气N₂约78%、O₂约21%、其他1%(Ar/CO₂/水汽)。",
    "options": [
      "A.纯氧组成",
      "B.主要由N₂和O₂组成",
      "C.主要由CO₂组成",
      "D.无变化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_075",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水圈叙述正确的是",
    "answer": "A",
    "explain": "水圈：地球表面水体总称，连续但不规则(包括海洋、河湖、地下水、大气水、生物水、冰川)。",
    "options": [
      "A.连续但不规则圈层",
      "B.不连续圈层",
      "C.仅指海洋",
      "D.仅指淡水"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_076",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于生物圈叙述正确的是",
    "answer": "B",
    "explain": "生物圈：地表所有生物及其生存环境的总称，是水圈全部、大气圈下部、岩石圈上部的交叉区域。",
    "options": [
      "A.独立圈层",
      "B.岩石圈+大气圈+水圈相互渗透部分",
      "C.仅指陆地生物",
      "D.仅在陆地"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_077",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "岩浆的主要发源地是",
    "answer": "C",
    "explain": "软流层(60-250km)是熔融态或半熔融态岩石，被认为是岩浆主要发源地。",
    "options": [
      "A.地核",
      "B.下地幔",
      "C.上地幔上部软流层",
      "D.地壳"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_078",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地震震级和烈度叙述正确的是",
    "answer": "C",
    "explain": "震级：地震释放能量大小，一次地震一个震级。烈度：地表破坏程度，同一次地震不同地区烈度不同(与震级、震源深度、震中距、地质条件有关)。",
    "options": [
      "A.震级同一次地震有多个",
      "B.烈度只与震级有关",
      "C.震级衡量能量、烈度衡量破坏",
      "D.二者相同"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_079",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地震波说法正确的是",
    "answer": "B",
    "explain": "S波(横波)只能通过固体；P波(纵波)可通过固液气，速度更快。都是机械波不是电磁波。",
    "options": [
      "A.纵波不能通过液体",
      "B.横波不能通过液体",
      "C.二者速度相同",
      "D.二者都是电磁波"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_080",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "莫霍面在大陆和海洋深度分别约",
    "answer": "A",
    "explain": "地壳大陆平均厚33km(青藏高原可达70km)，海洋7km左右。莫霍面即地壳与地幔分界。",
    "options": [
      "A.33km和7km",
      "B.10km和33km",
      "C.相同都7km",
      "D.相同都33km"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_081",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于极光叙述正确的是",
    "answer": "B",
    "explain": "极光：太阳风带电粒子被地磁场引向高纬度大气层，与大气分子碰撞发光。夜间高纬度极区最壮观。",
    "options": [
      "A.主要出现在赤道",
      "B.主要出现在两极高纬度",
      "C.主要出现在低纬度",
      "D.昼夜都能看到"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_082",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象反映地球公转的是",
    "answer": "B",
    "explain": "四季变化根本源于公转+黄赤交角。自转产生：昼夜交替、时差、地转偏向。",
    "options": [
      "A.昼夜交替",
      "B.四季变化",
      "C.时差",
      "D.地转偏向"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_083",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "同一经线上不同纬度地方时",
    "answer": "A",
    "explain": "同一经线各地地方时相同(经度决定时刻)。纬度只影响昼夜长短、正午太阳高度、气候等。",
    "options": [
      "A.相同",
      "B.不同",
      "C.相差1小时",
      "D.无规律"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_084",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球圈层间关系叙述正确的是",
    "answer": "B",
    "explain": "地球四大圈层(大气/水/岩石/生物)相互联系相互影响，构成完整地表环境系统。",
    "options": [
      "A.彼此独立",
      "B.相互联系相互作用",
      "C.仅大气圈和水圈相关",
      "D.仅岩石圈影响其他"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_085",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于日食类型的是",
    "answer": "D",
    "explain": "日食：日全食(月球完全遮日)、日偏食(部分遮)、日环食(月球偏远时中心可见太阳环)。月食是另一种。",
    "options": [
      "A.日全食",
      "B.日偏食",
      "C.日环食",
      "D.月环食"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_086",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列造成中国不同时区的行政统一采用北京时间的原因主要是",
    "answer": "A",
    "explain": "中国东西横跨5个时区,若各地用本时区区时太复杂,故行政上统一使用东八区(北京时间)。",
    "options": [
      "A.方便统一",
      "B.北京在中心",
      "C.南北跨度大",
      "D.东西跨度小"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_087",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "从赤道到北回归线之间地区，太阳直射发生",
    "answer": "B",
    "explain": "赤道:春分和秋分2次;北回归线:仅夏至1次;两者之间:2次/年。",
    "options": [
      "A.1次/年",
      "B.2次/年",
      "C.0次",
      "D.4次"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_088",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于宇宙叙述正确的是",
    "answer": "B",
    "explain": "宇宙有多层次天体系统,天体之间有相互引力和演化关系。当前主流认为宇宙起源于约138亿年前大爆炸。",
    "options": [
      "A.宇宙由固态天体组成",
      "B.天体系统层次多、有相互关系",
      "C.宇宙静止",
      "D.没有起源"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_001",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "大气受热过程正确顺序",
    "answer": "A",
    "explain": "太阳辐射(短波)→地面吸收→地面辐射(长波)→大气吸收升温→大气逆辐射还给地面(保温)。",
    "options": [
      "A.太阳暖大地→大地暖大气→大气还大地",
      "B.大地暖太阳→太阳暖大气",
      "C.大气吸收→太阳射→大地反射",
      "D.地球辐射→太阳"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_002",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "大气对地面的保温作用主要通过",
    "answer": "B",
    "explain": "大气(主要CO₂/H₂O)吸收地面长波辐射后向下辐射(逆辐射)返回地面,减少地面失热,起保温作用。",
    "options": [
      "A.大气吸收太阳辐射",
      "B.大气逆辐射",
      "C.大气反射太阳",
      "D.地面反射"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_003",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "玻璃温室原理与大气保温类似的是",
    "answer": "A",
    "explain": "玻璃/大气对短波辐射透明(阳光进入),对长波辐射不透明(拦住地面辐射),形成'温室效应'。",
    "options": [
      "A.透过短波辐射进入,长波辐射难以透出",
      "B.玻璃反射太阳",
      "C.玻璃发热",
      "D.玻璃辐射"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_004",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象说明大气保温作用的是",
    "answer": "C",
    "explain": "阴天云层多,逆辐射强,气温下降慢,夜晚不冷。晴朗夜晚逆辐射弱降温快,黎明最冷。",
    "options": [
      "A.白天多云不太热",
      "B.晴朗夜晚温度低",
      "C.阴天夜晚不太冷",
      "D.日出前最冷"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_005",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象说明云对太阳辐射削弱作用",
    "answer": "D",
    "explain": "云对太阳辐射削弱作用(反射为主)+ 云增加大气逆辐射,共同调节地表温度。",
    "options": [
      "A.白天多云不太热",
      "B.阴天夜晚不太冷",
      "C.晨雾遮挡阳光",
      "D.以上都是"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_006",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于大气对太阳辐射削弱作用的是",
    "answer": "D",
    "explain": "大气削弱包括吸收(臭氧/水汽/CO₂)、反射(云层)、散射(空气分子/尘埃)。地面反射不属于大气削弱。",
    "options": [
      "A.吸收",
      "B.反射",
      "C.散射",
      "D.地面反射"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_007",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "蓝天现象主要因为",
    "answer": "B",
    "explain": "散射:蓝紫光(短波)易被空气分子散射,故晴天天空呈蓝色(瑞利散射)。",
    "options": [
      "A.大气吸收蓝光",
      "B.蓝光波长短易被散射",
      "C.红光被吸收",
      "D.地面反射"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_008",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "朝霞夕阳呈红色因为",
    "answer": "A",
    "explain": "太阳低角度光线穿越大气层长,蓝紫光大部分被散射掉,红黄光穿透力强,故朝霞夕阳偏红。",
    "options": [
      "A.蓝紫光散射多剩红光",
      "B.红光被吸收",
      "C.地面反射",
      "D.水汽折射"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_009",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "热力环流形成的根本原因是",
    "answer": "A",
    "explain": "地面冷热不均→空气热胀冷缩→垂直运动(上升/下沉)→水平气压差→水平气流→形成环流。",
    "options": [
      "A.地面冷热不均",
      "B.地球自转",
      "C.地球公转",
      "D.地形起伏"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_010",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气压叙述正确的是",
    "answer": "B",
    "explain": "海拔越低气压越高。同高度对比:气温高空气密度小气压相对低(热低压);气温低气压相对高(冷高压)。",
    "options": [
      "A.高处气压高",
      "B.低处气压高",
      "C.气温高气压低",
      "D.气温高气压高"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_011",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列区域大气一般为下沉气流的是",
    "answer": "B",
    "explain": "全球气压带:赤道低压(上升)、副高压(下沉,30°)、副极地低压(上升,60°)、极地高压(下沉,90°)。",
    "options": [
      "A.赤道低气压带",
      "B.副热带高气压带",
      "C.副极地低气压带",
      "D.没有下沉"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_012",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "赤道低气压带形成原因是",
    "answer": "B",
    "explain": "赤道:热带气温最高,空气受热膨胀上升(热力原因)形成低压。副热带高压:动力下沉。",
    "options": [
      "A.动力上升",
      "B.热力上升",
      "C.热力下沉",
      "D.动力下沉"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_013",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "北半球中纬度盛行风向",
    "answer": "C",
    "explain": "全球风带:低纬东北信风、中纬盛行西风(西南或西北)、高纬极地东风。中纬西风带覆盖30-60°N。",
    "options": [
      "A.东北信风",
      "B.西北风",
      "C.盛行西风",
      "D.东南季风"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_014",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于全球性气压带风带的是",
    "answer": "C",
    "explain": "季风是海陆热力差异+气压带风带季节移动共同作用形成,属于季风区特殊环流,不是全球性带状。",
    "options": [
      "A.赤道低压",
      "B.副热带高压",
      "C.东亚季风",
      "D.西风带"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_015",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "东亚季风的成因",
    "answer": "A",
    "explain": "东亚季风主要成因是海陆热力性质差异:冬季大陆冷海洋热(风由陆向海),夏季相反。",
    "options": [
      "A.海陆热力差异",
      "B.气压带风带移动",
      "C.地形",
      "D.洋流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_016",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "南亚季风的成因",
    "answer": "C",
    "explain": "南亚季风:冬季东北季风(海陆差异);夏季西南季风(南半球东南信风北移+海陆差异,以气压带风带移动为主)。",
    "options": [
      "A.海陆热力差异",
      "B.气压带风带移动",
      "C.二者共同作用",
      "D.地形阻挡"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_017",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "我国夏季风盛行方向",
    "answer": "A",
    "explain": "夏季:东部东南季风(太平洋副高西侧);西南季风(印度洋)影响西南地区。冬季:偏北风。",
    "options": [
      "A.东南、西南",
      "B.东北、西北",
      "C.南、北",
      "D.东、西"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_018",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "华北平原夏季主要盛行风",
    "answer": "A",
    "explain": "东亚夏季风:大陆热低压+太平洋副高,气流从海洋吹向大陆,华北盛行东南风。",
    "options": [
      "A.东南风",
      "B.西南风",
      "C.西北风",
      "D.东北风"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_019",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "我国雨带正常年份推移规律",
    "answer": "A",
    "explain": "5月华南汛雨,6月长江中下游梅雨,7-8月华北东北雨季,9月南退。雨带位置由夏季风强度决定。",
    "options": [
      "A.南→北推移",
      "B.北→南推移",
      "C.从西向东",
      "D.无规律"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_020",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "梅雨季节(6月下-7月中)出现在",
    "answer": "B",
    "explain": "6月中下旬-7月中旬,长江中下游至日本九州出现连续阴雨(梅雨,黄梅时节),源于冷暖气流交汇。",
    "options": [
      "A.华南",
      "B.长江中下游",
      "C.华北",
      "D.东北"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_021",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列天气现象主要由冷锋造成的是",
    "answer": "A",
    "explain": "冷锋(冷气团主动)过境时:大风降温+短时强降水(常在锋后),典型如北方夏季强对流暴雨、寒潮、沙尘暴。",
    "options": [
      "A.夏季北方暴雨",
      "B.连绵阴雨",
      "C.江南春雨",
      "D.梅雨"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_022",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "暖锋过境时天气特点",
    "answer": "A",
    "explain": "暖锋(暖气团主动)缓慢爬升,冷凝范围广,常带来锋前连续性小到中雨、雾。",
    "options": [
      "A.降水在锋前,连续性弱降水",
      "B.降水在锋后",
      "C.无降水",
      "D.强对流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_023",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "准静止锋典型区域是",
    "answer": "D",
    "explain": "准静止锋:冷暖气团势均力敌,常见有江淮(梅雨)、云贵(冬季昆明准静止锋,贵州阴雨昆明晴朗)、天山、南岭等。",
    "options": [
      "A.江淮准静止锋(梅雨)",
      "B.云贵准静止锋(冬季)",
      "C.华南准静止锋",
      "D.以上都是"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_024",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于气旋(低压)天气特征的是",
    "answer": "D",
    "explain": "气旋(低压):中心气流上升→冷凝形云降水;北半球逆时针辐合、南半球顺时针辐合。反气旋(高压)才下沉。",
    "options": [
      "A.中心气流上升",
      "B.伴多云降水",
      "C.北半球逆时针辐合",
      "D.中心气流下沉"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_025",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "反气旋天气特征",
    "answer": "A",
    "explain": "反气旋(高压):中心下沉气流,天气晴朗少雨。夏季伏旱、冬季寒潮都由反气旋控制。",
    "options": [
      "A.晴朗干燥",
      "B.阴雨连绵",
      "C.强降水",
      "D.强对流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_026",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "台风属于",
    "answer": "A",
    "explain": "台风(西太平洋)/飓风(大西洋)/热带气旋:热带海洋上强烈发展的暖性低压,中心风力≥12级。",
    "options": [
      "A.强烈发展的热带气旋",
      "B.冷锋",
      "C.高压",
      "D.准静止锋"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_027",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "台风影响我国主要季节是",
    "answer": "A",
    "explain": "台风生成条件需要26.5°C以上暖海水,故夏秋季(6-11月)最活跃,7-9月为盛期。",
    "options": [
      "A.夏秋",
      "B.春冬",
      "C.冬季",
      "D.春季"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_028",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "寒潮天气主要影响季节",
    "answer": "A",
    "explain": "寒潮:强冷空气入侵造成24h内降温≥8℃并最低气温≤4℃,发生在冬半年(11月-次年4月)。",
    "options": [
      "A.冬半年",
      "B.夏季",
      "C.春夏",
      "D.秋冬夏"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_029",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候类型判读叙述正确的是",
    "answer": "A",
    "explain": "气候类型判读三步法:①看纬度定半球和温度带;②看气温年变化定季节;③看降水年内分配和总量。",
    "options": [
      "A.先看纬度定气温再看降水量",
      "B.先看降水定气候",
      "C.气温高就是热带",
      "D.无规律"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_030",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "典型热带雨林气候的特点",
    "answer": "A",
    "explain": "热带雨林(赤道附近):最冷月>18°C,年降水量>2000mm,月降均匀。",
    "options": [
      "A.全年高温多雨",
      "B.全年高温干燥",
      "C.高温季节多雨",
      "D.低温多雨"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_031",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "热带草原气候特点",
    "answer": "A",
    "explain": "热带草原(南北纬10°-回归线):最冷月>18°C,湿季受赤道低压高温多雨,干季受信风高温少雨。",
    "options": [
      "A.全年高温,有明显干湿季",
      "B.全年多雨",
      "C.全年干燥",
      "D.冬雨夏干"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_032",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "热带沙漠气候特点",
    "answer": "A",
    "explain": "热带沙漠(回归线附近大陆内部/西岸):副高/信风控制,常年高温干燥,年降水<200mm。撒哈拉、阿拉伯、澳大利亚中西部。",
    "options": [
      "A.高温干燥,常年少雨",
      "B.高温多雨",
      "C.低温干燥",
      "D.冬雨"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_033",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "热带季风气候降水集中在",
    "answer": "A",
    "explain": "热带季风(南亚东南亚):全年高温,降水集中在夏季(西南季风带来),旱雨季分明,年降水>1500mm。",
    "options": [
      "A.夏半年",
      "B.冬半年",
      "C.春季",
      "D.秋季"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_034",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "地中海气候特点",
    "answer": "A",
    "explain": "地中海气候(30-40°大陆西岸):夏季受副高控制炎热干燥,冬季受西风带控制温和多雨。",
    "options": [
      "A.夏干冬雨",
      "B.夏雨冬干",
      "C.全年多雨",
      "D.全年干燥"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_035",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "温带海洋性气候特点",
    "answer": "A",
    "explain": "温带海洋(40-60°大陆西岸):终年受西风带影响,冬温夏凉,年降水均匀较多(>1000mm)。",
    "options": [
      "A.全年温和湿润",
      "B.四季分明",
      "C.冬冷夏热",
      "D.干旱"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_036",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "温带季风气候特点",
    "answer": "A",
    "explain": "温带季风(35-55°大陆东岸,中国北方/日韩/俄远东):夏季高温多雨,冬季寒冷干燥。",
    "options": [
      "A.夏雨冬干,四季分明",
      "B.全年均匀",
      "C.冬雨夏干",
      "D.全年干燥"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_037",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "温带大陆性气候特点",
    "answer": "A",
    "explain": "温带大陆性(大陆内部):远海+高纬,冬寒夏热,气温年较差大,降水稀少集中夏季。",
    "options": [
      "A.冬冷夏热,气温年较差大,降水少",
      "B.冬暖夏凉",
      "C.全年多雨",
      "D.冬雨"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_038",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "亚寒带针叶林气候(亚寒带大陆性)特点",
    "answer": "A",
    "explain": "亚寒带(50-70°N大陆):冬季极寒(-30°C以下)且长,夏季短暂温和,年降水少集中夏。俄罗斯西伯利亚、加拿大等。",
    "options": [
      "A.冬季漫长严寒,夏季短暂温暖",
      "B.全年温和",
      "C.干燥",
      "D.湿润"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_039",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列气候中年温差最大的是",
    "answer": "C",
    "explain": "年较差=最热月-最冷月均温。温带大陆内部远离海洋调节,年较差可达40-60°C,居各气候之首。",
    "options": [
      "A.热带雨林",
      "B.温带海洋",
      "C.温带大陆",
      "D.地中海"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_040",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列气候中年降水量最少的是",
    "answer": "A",
    "explain": "热带沙漠年降水常<100mm,如撒哈拉腹地不足10mm/年。",
    "options": [
      "A.热带沙漠",
      "B.热带雨林",
      "C.温带海洋",
      "D.热带草原"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_041",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "影响气候形成的主要因素中,起决定作用的是",
    "answer": "A",
    "explain": "纬度决定太阳辐射→温度带的形成。其他因素在这基础上叠加改造。",
    "options": [
      "A.纬度(太阳辐射)",
      "B.海陆位置",
      "C.地形",
      "D.洋流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_042",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流对气候影响叙述错误的是",
    "answer": "C",
    "explain": "洋流是海气热量交换重要方式,极大影响沿岸气候。北大西洋暖流温暖了整个西欧;秘鲁寒流沿岸形成阿塔卡马沙漠。",
    "options": [
      "A.暖流增温增湿",
      "B.寒流降温减湿",
      "C.洋流对沿岸气候无影响",
      "D.北大西洋暖流使欧洲西部温暖湿润"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_043",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "秘鲁沿岸沙漠形成主要原因",
    "answer": "A",
    "explain": "南美西岸副高常年控制+秘鲁寒流降温减湿+安第斯山迎风背风效应,形成阿塔卡马沙漠(世界最干)。",
    "options": [
      "A.秘鲁寒流+副高+西岸",
      "B.仅副高",
      "C.仅寒流",
      "D.地形"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_044",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "欧洲西部形成温带海洋性气候原因",
    "answer": "A",
    "explain": "西风带常年吹送、北大西洋暖流增温增湿、平原有利水汽深入,共同造就温带海洋气候。",
    "options": [
      "A.西风带+北大西洋暖流+大陆西岸",
      "B.地形抬升",
      "C.低纬",
      "D.副高"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_045",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市热岛效应叙述错误的是",
    "answer": "D",
    "explain": "热岛:城市中心气温高于郊区(尤其夜间),形成从郊区向城市中心的辐合气流,加剧空气污染。",
    "options": [
      "A.城市中心比郊区气温高",
      "B.来源人为排热+下垫面",
      "C.改变局地环流",
      "D.城市温度总低于郊区"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_046",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大气污染物中主要人为源的是",
    "answer": "A",
    "explain": "SO₂主要来自燃煤;NOx来自机动车和工厂;PM2.5(细颗粒物)来自燃烧、工业、扬尘等。",
    "options": [
      "A.SO₂/NOx/PM2.5",
      "B.O₂",
      "C.N₂",
      "D.H₂O"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_047",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "酸雨主要成分",
    "answer": "A",
    "explain": "酸雨pH<5.6,主要成分H₂SO₄(SO₂氧化+水)和HNO₃(NOx+水)。我国酸雨主要为硫酸型。",
    "options": [
      "A.硝酸和硫酸",
      "B.盐酸",
      "C.碳酸",
      "D.磷酸"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_048",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "光化学烟雾主要成分",
    "answer": "A",
    "explain": "光化学烟雾:NOx和碳氢化合物在紫外线作用下反应生成O₃、PAN(过氧乙酰硝酸酯)、醛等,呈蓝褐色刺激性烟雾。洛杉矶型。",
    "options": [
      "A.臭氧+过氧乙酰硝酸酯",
      "B.硫酸雾",
      "C.CO",
      "D.CO₂"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_049",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "温室效应加剧主要因为",
    "answer": "A",
    "explain": "人类活动大量燃烧化石燃料+森林破坏→大气CO₂/CH₄/N₂O等温室气体浓度上升→温室效应增强→全球变暖。",
    "options": [
      "A.CO₂等温室气体排放增加",
      "B.破坏臭氧层",
      "C.水汽减少",
      "D.太阳辐射变强"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_050",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "全球气候变暖不会导致",
    "answer": "D",
    "explain": "全球变暖影响海平面、生态、极端气候、粮食安全等,但不改变地球公转周期。",
    "options": [
      "A.海平面上升",
      "B.极端天气频发",
      "C.冰川融化",
      "D.地球公转周期改变"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_051",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列减缓全球变暖措施中最根本的是",
    "answer": "B",
    "explain": "根本源头:减少化石燃料燃烧+发展清洁能源+提高能效。植树造林是重要辅助措施。",
    "options": [
      "A.植树造林",
      "B.减少化石燃料燃烧",
      "C.调控出生率",
      "D.不用空调"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_052",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "臭氧层空洞主要出现在",
    "answer": "A",
    "explain": "南极春季(9-11月)出现臭氧层空洞,与南极极涡(隔离)+极地平流层云+CFCs(氟利昂)光解释放氯自由基有关。",
    "options": [
      "A.南极上空",
      "B.北极上空",
      "C.赤道",
      "D.中纬"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_053",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "破坏臭氧层的主要物质",
    "answer": "A",
    "explain": "氟氯烃(空调制冷剂/发泡剂)在平流层被紫外线分解释放Cl自由基,催化破坏O₃分子。",
    "options": [
      "A.氟氯烃(CFCs)",
      "B.CO₂",
      "C.SO₂",
      "D.甲烷"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_054",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "蒙特利尔议定书规定",
    "answer": "A",
    "explain": "1987年蒙特利尔议定书:限制/淘汰CFCs等消耗臭氧物质,是最成功环保国际公约之一。",
    "options": [
      "A.限用CFCs",
      "B.禁二氧化碳",
      "C.禁核武器",
      "D.限石油"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_055",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "我国雾霾主要成分",
    "answer": "A",
    "explain": "雾霾:细颗粒物(PM2.5)、SO₂、NOx、O₃、CO等复合大气污染物,以PM2.5为核心指标。",
    "options": [
      "A.PM2.5等细颗粒物",
      "B.雾滴",
      "C.SO₂",
      "D.水汽"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_056",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于沙尘暴叙述正确的是",
    "answer": "A",
    "explain": "沙尘暴条件:强风(动力)+沙源(下垫面裸露)+不稳定大气(易起沙)。我国主要在春季北方。",
    "options": [
      "A.强风+沙尘+植被稀",
      "B.仅强风",
      "C.仅沙尘",
      "D.降水多引起"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_057",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "焚风效应(下沉气流增温)常出现在",
    "answer": "A",
    "explain": "气流翻越山脉在背风坡下沉,干绝热增温速率大于潮湿气流爬升冷却速率,故背风坡气温高、干燥,称焚风。",
    "options": [
      "A.山地背风坡",
      "B.山地迎风坡",
      "C.平原",
      "D.海面"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_058",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "我国天山北坡春季升温快原因",
    "answer": "A",
    "explain": "冬季末春初,西风翻越天山在北坡下沉形成焚风,增温快,早春积雪迅速融化。",
    "options": [
      "A.焚风效应",
      "B.洋流",
      "C.地形抬升",
      "D.副高"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_059",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "盛行西风带范围",
    "answer": "A",
    "explain": "全球西风带位于30°-60°之间,北半球西南风、南半球西北风。",
    "options": [
      "A.南北纬30-60°",
      "B.南北纬0-30°",
      "C.南北纬60-90°",
      "D.仅北半球"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_060",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "信风带风向",
    "answer": "A",
    "explain": "低纬信风带(0-30°):北半球东北信风、南半球东南信风。信风稳定为古代帆船贸易所用故名。",
    "options": [
      "A.北半球东北,南半球东南",
      "B.北半球西北,南半球西南",
      "C.相同",
      "D.无风"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_061",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西风带地转偏向叙述正确的是",
    "answer": "A",
    "explain": "北半球西风从副高吹向副极地低压,受科氏力右偏成西南风。南半球左偏成西北风。",
    "options": [
      "A.北半球右偏成西南风",
      "B.北半球左偏成东北风",
      "C.南半球右偏",
      "D.无偏"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_062",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气压带风带季节移动叙述正确的是",
    "answer": "A",
    "explain": "气压带风带随太阳直射点南北移动而季节性偏移:北半球夏季偏北,冬季偏南,幅度约5-10°。",
    "options": [
      "A.随太阳直射点移动",
      "B.不移动",
      "C.随海陆变化",
      "D.仅冬季移动"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_063",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "南亚西南季风的一个来源(除海陆热力差异外)",
    "answer": "A",
    "explain": "夏季南半球东南信风越赤道进入北半球,受北半球地转偏向力右偏形成西南季风,加强南亚夏季风。",
    "options": [
      "A.南半球东南信风北越赤道右偏",
      "B.北半球东北信风",
      "C.北半球西风",
      "D.北极风"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_064",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象说明气压带断裂为高低压中心的是",
    "answer": "A",
    "explain": "夏季:大陆增温快,亚欧大陆形成亚洲低压(印度低压)切断了北纬30°副高,使副高仅在海洋保存(北大西洋亚速尔高压、北太平洋副高)。冬季蒙古-西伯利亚高压切断副极地低压。",
    "options": [
      "A.7月大陆亚洲低压(印度低压)切断副高",
      "B.副高连续",
      "C.低压连续",
      "D.冬季高压连续"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_065",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于亚洲高压叙述正确的是",
    "answer": "A",
    "explain": "冬季亚欧大陆强烈冷却形成蒙古-西伯利亚高压(亚洲高压),中心气压>1040hPa,是冬季风源地。",
    "options": [
      "A.冬季形成",
      "B.夏季形成",
      "C.春季形成",
      "D.秋季形成"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_066",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "影响我国的冬季风源地",
    "answer": "A",
    "explain": "冬季蒙古-西伯利亚高压是我国冬季风(偏北风)源地,寒冷干燥。",
    "options": [
      "A.蒙古-西伯利亚",
      "B.太平洋",
      "C.印度洋",
      "D.北冰洋"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_067",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热岛环流相关的是",
    "answer": "D",
    "explain": "城市热岛:市区气温高气压低,郊区气温低气压高;近地面郊区→市区,高空市区→郊区,形成环流。污染物随环流回到市区,加剧污染。",
    "options": [
      "A.城市上空空气上升",
      "B.郊区风流向城市",
      "C.污染物在城市集聚",
      "D.以上都是"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_068",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "城市规划要充分考虑主导风向,原因是",
    "answer": "D",
    "explain": "污染物随风扩散,故重污染工厂应位于最小风频上风向或城市主导风向下风向,住宅位于上风向。",
    "options": [
      "A.污染工厂应在下风向",
      "B.主导风向决定污染物扩散",
      "C.布局与风向相关",
      "D.以上都对"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_069",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于逆温层叙述正确的是",
    "answer": "D",
    "explain": "逆温层:气温随高度上升(反常),使空气稳定不易对流,污染物无法扩散,加剧近地面污染。冬季晴朗夜间辐射逆温常见。",
    "options": [
      "A.高度增温反常",
      "B.抑制对流",
      "C.加剧污染",
      "D.以上都是"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_070",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于雾形成条件叙述错误的是",
    "answer": "D",
    "explain": "雾:近地面空气冷却达到露点凝结成小水滴。需低温、高湿、静风、有凝结核。强对流破坏雾。",
    "options": [
      "A.低温高湿",
      "B.静风",
      "C.天空晴朗",
      "D.强对流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_071",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "北京冬春雾霾频发的原因(自然)",
    "answer": "A",
    "explain": "北京地形:西、北、东北三面环山,南部平原,冬春季北风被山阻挡易形成静稳天气,污染物滞留形成雾霾。",
    "options": [
      "A.三面环山地形",
      "B.强风",
      "C.远离海洋",
      "D.南部平原"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_072",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于降水类型叙述正确的是",
    "answer": "A",
    "explain": "按成因分:①对流雨(热带雷阵雨);②地形雨(迎风坡);③锋面雨(冷暖气团交汇);④气旋雨(热带气旋)。",
    "options": [
      "A.对流雨、地形雨、锋面雨、气旋雨",
      "B.仅对流雨",
      "C.仅锋面雨",
      "D.无分类"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_073",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地区多对流雨的是",
    "answer": "A",
    "explain": "赤道:高温+近地面辐合上升+水汽充足,午后强对流雷阵雨常见。",
    "options": [
      "A.赤道地区",
      "B.副热带干旱区",
      "C.副极地",
      "D.极地"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_074",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地区多地形雨的是",
    "answer": "A",
    "explain": "地形雨:湿润气流强迫抬升形成,迎风坡多雨;背风坡少雨(焚风)。如喜马拉雅南坡、秘鲁安第斯东坡。",
    "options": [
      "A.山脉迎风坡",
      "B.山脉背风坡",
      "C.平原",
      "D.盆地中央"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_075",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水循环环节叙述正确的是",
    "answer": "A",
    "explain": "水循环三大环节:蒸发(海洋/陆地)→水汽输送(风)→凝结降水→地表下渗+径流→回归海洋。",
    "options": [
      "A.蒸发→水汽输送→凝结降水→径流",
      "B.降水→蒸发",
      "C.无环节",
      "D.单方向"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_076",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列水循环类型中最重要的是",
    "answer": "A",
    "explain": "海陆间大循环(又叫外循环)使陆地淡水资源不断更新,是水循环最重要环节。",
    "options": [
      "A.海陆间循环",
      "B.海上内循环",
      "C.陆上内循环",
      "D.无重要"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_077",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于陆地水资源特点叙述错误的是",
    "answer": "C",
    "explain": "陆地水资源总量约3500万km³,但地区、时间分布严重不均。中国南多北少,夏多冬少。",
    "options": [
      "A.总量丰富",
      "B.可再生",
      "C.分布均匀",
      "D.循环更新"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_078",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于人类不合理利用大气资源的是",
    "answer": "D",
    "explain": "风力发电利用大气动能,是清洁可再生能源。前三者是破坏行为。",
    "options": [
      "A.排放温室气体",
      "B.破坏臭氧",
      "C.雾霾",
      "D.风力发电"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_079",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "南方冬季阴雨绵绵的主要原因(江南春雨)",
    "answer": "A",
    "explain": "江南春雨(3-4月):冷暖气团在长江中下游南岭一带对峙形成江淮准静止锋,连续小雨。",
    "options": [
      "A.长江以南冬季受江淮准静止锋影响",
      "B.副高影响",
      "C.梅雨",
      "D.焚风"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_080",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "我国长江中下游伏旱天气原因",
    "answer": "A",
    "explain": "7-8月副高北移强盛西伸,长江中下游进入伏旱期,高温少雨(伏旱)。",
    "options": [
      "A.7-8月受副高控制",
      "B.冷锋",
      "C.梅雨",
      "D.台风"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_081",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气团叙述正确的是",
    "answer": "A",
    "explain": "气团:大范围(数百到数千km)水平方向温湿等性质近乎均匀的大气团块。按温度分冷/暖气团。",
    "options": [
      "A.范围广、性质均匀",
      "B.小尺度",
      "C.无固定性质",
      "D.不影响天气"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_082",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于锋叙述错误的是",
    "answer": "D",
    "explain": "锋面向冷气团一侧倾斜(冷重暖轻),坡度约1/100~1/150,不是垂直,不是无坡度。",
    "options": [
      "A.冷暖气团界面",
      "B.锋线",
      "C.锋面",
      "D.无坡度"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_083",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "准静止锋在我国典型代表",
    "answer": "A",
    "explain": "江淮准静止锋(夏初梅雨)、昆明准静止锋(冬春,东部贵州阴雨,西部昆明晴朗)是最典型的两个。",
    "options": [
      "A.江淮准静止锋和昆明准静止锋",
      "B.塔里木",
      "C.天山",
      "D.南岭"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_084",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气温垂直递减率(0.6°C/100m)叙述适用的是",
    "answer": "A",
    "explain": "对流层气温平均递减率0.6°C/100m(仅平均值,实际情况因湿度稳定度而异)。平流层温度随高度上升。",
    "options": [
      "A.对流层平均值",
      "B.平流层",
      "C.中间层",
      "D.热层"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_085",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于季风区和非季风区分界线叙述正确的是",
    "answer": "A",
    "explain": "季风区/非季风区分界:大兴安岭-阴山-贺兰山-巴颜喀拉山-冈底斯山。以东以南为季风区,以西以北为非季风区。",
    "options": [
      "A.大兴安岭-阴山-贺兰山-巴颜喀拉-冈底斯",
      "B.秦岭-淮河",
      "C.400mm等降水量线",
      "D.0°C等温线"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_086",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于400mm等降水量线叙述正确的是",
    "answer": "A",
    "explain": "400mm等降水量线是中国重要地理分界:半湿润/半干旱、农耕/游牧、森林/草原、季风区/非季风区。",
    "options": [
      "A.半湿润/半干旱分界+种植/畜牧分界+森林/草原分界",
      "B.仅气候分界",
      "C.仅农业分界",
      "D.无意义"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_087",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于秦岭淮河线叙述错误的是",
    "answer": "D",
    "explain": "秦淮线是我国南北方分界:①1月0°C等温线;②800mm等降水量线;③湿润/半湿润分界;④亚热带/暖温带分界;⑤水田/旱地分界。",
    "options": [
      "A.我国南北方分界",
      "B.0°C等温线",
      "C.800mm等降水量线",
      "D.400mm等降水量线"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_088",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气旋和反气旋垂直运动叙述正确的是",
    "answer": "A",
    "explain": "气旋(低压)中心上升气流,天气多云;反气旋(高压)中心下沉气流,天气晴朗。",
    "options": [
      "A.气旋上升,反气旋下沉",
      "B.气旋下沉",
      "C.反气旋上升",
      "D.二者相同"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_089",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象由城市热岛效应造成的是",
    "answer": "A",
    "explain": "热岛:市中心气温高气压低,近地面气流郊区→市区(热岛环流),污染物向市区集聚。",
    "options": [
      "A.城市周围向城中心辐合气流",
      "B.城市气压高",
      "C.市区风大",
      "D.无变化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g2_090",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于沙尘暴防治措施错误的是",
    "answer": "C",
    "explain": "防治沙尘暴:植树种草、退耕还林还草、合理放牧、禁止开垦土地。持续开垦会加剧沙化。",
    "options": [
      "A.加强植被恢复",
      "B.合理放牧",
      "C.持续开垦",
      "D.禁止破坏"
    ],
    "local_fj": true,
    "gaokao": true
  }
];

  function _mount(target, extras) {
    if (!Array.isArray(target)) return 0;
    let added = 0;
    const existing = new Set(target.map(q => q && q.id));
    extras.forEach(q => { if (!existing.has(q.id)) { target.push(q); added++; } });
    return added;
  }
  function tryMount() {
    let n=0;
    if (Array.isArray(global.GEOGRAPHY_BANK)) n = _mount(global.GEOGRAPHY_BANK, GEOGRAPHY_FUJIAN_V7_P1);
    if (n) console.info(`[磐山界·地理深化 v7-P1] 已注入 +${n} 题, 总计: ${global.GEOGRAPHY_BANK.length}`);
    return n;
  }
  const r = tryMount();
  if (!r) { if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', tryMount); }
  global.GEOGRAPHY_FUJIAN_V7_P1 = { GEOGRAPHY_FUJIAN_V7_P1, mount: tryMount };

})(typeof window !== 'undefined' ? window : this);
