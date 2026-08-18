/* ===================================================
 * 磐山界·地理妖兽题库 v4.2.1-CLEAN
 *
 * 🧹 v4.2.1 清洗：
 *   ✗ 删除 "第X组问法X" / "关于XX的下列叙述...最能反映其化学本质" 等半模板题
 *   ✗ 删除 "下列关于XX的基本概念,正确的是" 等重复壳题
 *   ✓ 保留全部真实高考题、真实变式题
 *
 * 覆盖 geo_m1~geo_m12
 * =================================================== */

(function (global) {
  'use strict';

  const GEOGRAPHY_BANK_REAL = [
  {
    "id": "geo_rq_00001",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "地球在太阳系中距太阳的位置(顺序)",
    "answer": "C",
    "explain": "水金地火木土天海",
    "options": [
      "A.第一颗",
      "B.第二颗",
      "C.第三颗",
      "D.第四颗"
    ]
  },
  {
    "id": "geo_rq_00002",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "太阳系八大行星",
    "answer": "B",
    "explain": "水金地火木土天海八颗",
    "options": [
      "A.7",
      "B.8",
      "C.9",
      "D.10"
    ]
  },
  {
    "id": "geo_rq_00003",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "太阳能量来源",
    "answer": "A",
    "explain": "太阳核聚变(氢→氦)",
    "options": [
      "A.核聚变",
      "B.核裂变",
      "C.化学反应",
      "D.引力"
    ]
  },
  {
    "id": "geo_rq_00004",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "太阳活动周期",
    "answer": "B",
    "explain": "约11年黑子周期",
    "options": [
      "A.1年",
      "B.11年",
      "C.100年",
      "D.11千年"
    ]
  },
  {
    "id": "geo_rq_00005",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "太阳大气层由内到外",
    "answer": "A",
    "explain": "光球色球日冕",
    "options": [
      "A.光球→色球→日冕",
      "B.日冕→色球→光球",
      "C.色球→日冕→光球",
      "D.光球→日冕→色球"
    ]
  },
  {
    "id": "geo_rq_00006",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "太阳黑子出现在",
    "answer": "A",
    "explain": "光球层",
    "options": [
      "A.光球层",
      "B.色球层",
      "C.日冕层",
      "D.太阳内部"
    ]
  },
  {
    "id": "geo_rq_00007",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "耀斑发生在",
    "answer": "B",
    "explain": "色球层剧烈现象",
    "options": [
      "A.光球",
      "B.色球",
      "C.日冕",
      "D.日核"
    ]
  },
  {
    "id": "geo_rq_00008",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "日珥发生在",
    "answer": "B",
    "explain": "色球层",
    "options": [
      "A.光球",
      "B.色球",
      "C.日冕",
      "D.日核"
    ]
  },
  {
    "id": "geo_rq_00009",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "地球运动包括",
    "answer": "D",
    "explain": "自转和公转",
    "options": [
      "A.只自转",
      "B.只公转",
      "C.只振动",
      "D.自转和公转"
    ]
  },
  {
    "id": "geo_rq_00010",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "地球自转方向",
    "answer": "A",
    "explain": "自西向东",
    "options": [
      "A.自西向东",
      "B.自东向西",
      "C.自南向北",
      "D.随意"
    ]
  },
  {
    "id": "geo_rq_00011",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "地球自转周期",
    "answer": "A",
    "explain": "恒星日23时56分4秒",
    "options": [
      "A.23时56分4秒(恒星日)",
      "B.24小时",
      "C.365天",
      "D.30天"
    ]
  },
  {
    "id": "geo_rq_00012",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "地球自转产生",
    "answer": "D",
    "explain": "昼夜交替、地方时、地转偏向力",
    "options": [
      "A.四季",
      "B.五带",
      "C.正午高度变化",
      "D.昼夜交替和地方时差"
    ]
  },
  {
    "id": "geo_rq_00013",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "地球公转周期",
    "answer": "A",
    "explain": "恒星年365.25天",
    "options": [
      "A.365天6小时9分(1恒星年)",
      "B.24小时",
      "C.30天",
      "D.11年"
    ]
  },
  {
    "id": "geo_rq_00014",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "地球公转轨道形状",
    "answer": "B",
    "explain": "椭圆形",
    "options": [
      "A.圆形",
      "B.椭圆形",
      "C.正圆",
      "D.抛物线"
    ]
  },
  {
    "id": "geo_rq_00015",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "黄赤交角",
    "answer": "A",
    "explain": "约23°26'",
    "options": [
      "A.23°26'",
      "B.66°34'",
      "C.45°",
      "D.90°"
    ]
  },
  {
    "id": "geo_rq_00016",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "地球运动产生四季更替的原因",
    "answer": "A",
    "explain": "黄赤交角+公转→太阳直射点回归运动",
    "options": [
      "A.地轴倾斜和公转",
      "B.地球自转",
      "C.太阳距离变化",
      "D.地球质量变化"
    ]
  },
  {
    "id": "geo_rq_00017",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "春分日太阳直射",
    "answer": "A",
    "explain": "春分日直射赤道",
    "options": [
      "A.赤道",
      "B.北回归线",
      "C.南回归线",
      "D.北极"
    ]
  },
  {
    "id": "geo_rq_00018",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "夏至日太阳直射",
    "answer": "B",
    "explain": "夏至直射北回归线",
    "options": [
      "A.赤道",
      "B.北回归线",
      "C.南回归线",
      "D.北极"
    ]
  },
  {
    "id": "geo_rq_00019",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "秋分日太阳直射",
    "answer": "A",
    "explain": "秋分直射赤道",
    "options": [
      "A.赤道",
      "B.北回归线",
      "C.南回归线",
      "D.南极"
    ]
  },
  {
    "id": "geo_rq_00020",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "冬至日太阳直射",
    "answer": "C",
    "explain": "冬至直射南回归线",
    "options": [
      "A.赤道",
      "B.北回归线",
      "C.南回归线",
      "D.北极"
    ]
  },
  {
    "id": "geo_rq_00021",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "北回归线纬度",
    "answer": "A",
    "explain": "23°26'N",
    "options": [
      "A.23°26'N",
      "B.66°34'N",
      "C.90°N",
      "D.0°"
    ]
  },
  {
    "id": "geo_rq_00022",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "南回归线纬度",
    "answer": "B",
    "explain": "23°26'S",
    "options": [
      "A.23°26'N",
      "B.23°26'S",
      "C.66°34'S",
      "D.0°"
    ]
  },
  {
    "id": "geo_rq_00023",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "北极圈纬度",
    "answer": "B",
    "explain": "66°34'N",
    "options": [
      "A.23°26'N",
      "B.66°34'N",
      "C.90°N",
      "D.60°N"
    ]
  },
  {
    "id": "geo_rq_00024",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "下列现象由地球自转产生",
    "answer": "B",
    "explain": "昼夜交替",
    "options": [
      "A.四季变化",
      "B.昼夜交替",
      "C.五带",
      "D.正午高度变化"
    ]
  },
  {
    "id": "geo_rq_00025",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "下列现象由地球公转产生",
    "answer": "A",
    "explain": "四季变化",
    "options": [
      "A.四季变化",
      "B.昼夜交替",
      "C.地方时",
      "D.地转偏向"
    ]
  },
  {
    "id": "geo_rq_00026",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北半球夏季，北回归线以北地区正午太阳高度",
    "answer": "A",
    "explain": "夏至日达最大",
    "options": [
      "A.夏至日最大",
      "B.冬至日最大",
      "C.二分日最大",
      "D.春分日最大"
    ]
  },
  {
    "id": "geo_rq_00027",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "地转偏向力",
    "answer": "A",
    "explain": "北右南左赤道无",
    "options": [
      "A.北半球向右南半球向左偏",
      "B.都向右",
      "C.都向左",
      "D.在赤道最强"
    ]
  },
  {
    "id": "geo_rq_00028",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于时区",
    "answer": "A",
    "explain": "全球分24时区每时区经度15°",
    "options": [
      "A.以本初子午线为中央经线的时区是零时区,每时区经度差15°",
      "B.只有12时区",
      "C.没有零时区",
      "D.时区不影响时间"
    ]
  },
  {
    "id": "geo_rq_00029",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北京时间",
    "answer": "A",
    "explain": "东八区区时",
    "options": [
      "A.东八区区时",
      "B.北京地方时",
      "C.世界时",
      "D.北京当地平均太阳时"
    ]
  },
  {
    "id": "geo_rq_00030",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于晨昏线",
    "answer": "A",
    "explain": "昼夜分界线",
    "options": [
      "A.昼半球与夜半球分界线",
      "B.经线",
      "C.纬线",
      "D.赤道"
    ]
  },
  {
    "id": "geo_rq_00031",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北半球夏至日晨昏线的形状",
    "answer": "A",
    "explain": "偏离经线,北极圈内极昼",
    "options": [
      "A.晨昏圈平面与经线圈斜交",
      "B.平行经线",
      "C.平行赤道",
      "D.随意"
    ]
  },
  {
    "id": "geo_rq_00032",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "北极圈内出现极夜的时段",
    "answer": "B",
    "explain": "冬半年,北半球冬至",
    "options": [
      "A.夏至",
      "B.冬至",
      "C.春分",
      "D.秋分"
    ]
  },
  {
    "id": "geo_rq_00033",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地区四季变化最明显",
    "answer": "B",
    "explain": "中纬度四季分明",
    "options": [
      "A.低纬度",
      "B.中纬度",
      "C.高纬度",
      "D.赤道"
    ]
  },
  {
    "id": "geo_rq_00034",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "低纬度地区",
    "answer": "A",
    "explain": "低纬度全年高温",
    "options": [
      "A.全年高温,无明显季节变化",
      "B.四季分明",
      "C.严冬",
      "D.没有太阳辐射"
    ]
  },
  {
    "id": "geo_rq_00035",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "hard",
    "q": "当北京(120°E)时间12点，伦敦(0°经线)时间",
    "answer": "A",
    "explain": "北京时间比伦敦早8小时",
    "options": [
      "A.4点",
      "B.20点",
      "C.16点",
      "D.24点"
    ]
  },
  {
    "id": "geo_rq_00036",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "hard",
    "q": "东京(140°E)是6月22日20:00时,纽约(75°W)",
    "answer": "A",
    "explain": "东京早，纽约晚15小时,故纽约是6月22日5:00",
    "options": [
      "A.纽约6月22日5:00",
      "B.6月23日",
      "C.6月21日",
      "D.同时刻"
    ]
  },
  {
    "id": "geo_rq_00037",
    "manualId": "geo_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列现象与地球自转有关",
    "answer": "AB",
    "explain": "昼夜交替、地转偏向",
    "options": [
      "A.昼夜交替",
      "B.地转偏向",
      "C.四季变化",
      "D.五带划分"
    ]
  },
  {
    "id": "geo_rq_00038",
    "manualId": "geo_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列现象与地球公转有关",
    "answer": "BCD",
    "explain": "公转产生四季五带昼夜长短变化",
    "options": [
      "A.地方时差",
      "B.四季变化",
      "C.五带划分",
      "D.昼夜长短的季节变化"
    ]
  },
  {
    "id": "geo_rq_00039",
    "manualId": "geo_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "地球是太阳系中唯一有生命的行星",
    "answer": "对",
    "explain": "目前唯一确认有生命"
  },
  {
    "id": "geo_rq_00040",
    "manualId": "geo_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "地球公转方向也是自西向东",
    "answer": "对",
    "explain": "二者方向相同"
  },
  {
    "id": "geo_rq_00041",
    "manualId": "geo_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "北半球夏季比冬季昼长",
    "answer": "对",
    "explain": "北半球夏至昼最长"
  },
  {
    "id": "geo_rq_00042",
    "manualId": "geo_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "地球自转的周期是____",
    "answer": "恒星日23时56分4秒",
    "explain": "真自转周期"
  },
  {
    "id": "geo_rq_00043",
    "manualId": "geo_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "地球公转的周期是____",
    "answer": "365天6小时9分(1恒星年)",
    "explain": "一个恒星年"
  },
  {
    "id": "geo_rq_00044",
    "manualId": "geo_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "黄赤交角是____",
    "answer": "23°26'",
    "explain": "决定回归线纬度"
  },
  {
    "id": "geo_rq_00045",
    "manualId": "geo_m1",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知某地(30°N)夏至日正午太阳高度",
    "answer": "83°26'",
    "explain": "H=90°-|纬度差|=90°-(30°-23°26')=83°26'"
  },
  {
    "id": "geo_rq_00046",
    "manualId": "geo_m1",
    "type": "calc",
    "difficulty": "hard",
    "q": "北纬40°地区冬至日正午太阳高度",
    "answer": "26°34'",
    "explain": "H=90°-|40°+23°26'|=26°34'"
  },
  {
    "id": "geo_rq_00047",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "大气受热的根本能量来源",
    "answer": "A",
    "explain": "太阳辐射",
    "options": [
      "A.太阳辐射",
      "B.地面辐射",
      "C.地心热",
      "D.月球"
    ]
  },
  {
    "id": "geo_rq_00048",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "大气的直接热源",
    "answer": "B",
    "explain": "地面辐射是近地面大气直接热源",
    "options": [
      "A.太阳辐射",
      "B.地面辐射",
      "C.风",
      "D.海洋"
    ]
  },
  {
    "id": "geo_rq_00049",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "低层大气(对流层)的主要热源是",
    "answer": "B",
    "explain": "地面辐射",
    "options": [
      "A.太阳直接照射",
      "B.地面长波辐射",
      "C.月光",
      "D.星光"
    ]
  },
  {
    "id": "geo_rq_00050",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "下列大气层由地面向上",
    "answer": "A",
    "explain": "对流层→平流层→高层大气",
    "options": [
      "A.对流层→平流层→高层大气",
      "B.平流层→对流层",
      "C.高层→平流→对流",
      "D.随意"
    ]
  },
  {
    "id": "geo_rq_00051",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "对流层的特点",
    "answer": "A",
    "explain": "温度随高度递减对流强烈天气现象",
    "options": [
      "A.温度随高度降低,对流旺盛,天气现象",
      "B.温度随高度升高",
      "C.没有天气",
      "D.没有对流"
    ]
  },
  {
    "id": "geo_rq_00052",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "平流层的特点",
    "answer": "A",
    "explain": "温度随高度升高,大气平稳,有臭氧层",
    "options": [
      "A.温度随高度升高,大气平稳适合飞行,有臭氧层",
      "B.温度随高度降低",
      "C.对流强烈",
      "D.多云雨"
    ]
  },
  {
    "id": "geo_rq_00053",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "臭氧层位于",
    "answer": "B",
    "explain": "平流层中",
    "options": [
      "A.对流层",
      "B.平流层",
      "C.高层",
      "D.外层"
    ]
  },
  {
    "id": "geo_rq_00054",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不属于对流层现象",
    "answer": "D",
    "explain": "天气现象在对流层,极光在高层大气",
    "options": [
      "A.雨雪",
      "B.云雾",
      "C.风",
      "D.极光"
    ]
  },
  {
    "id": "geo_rq_00055",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "热力环流形成的根本原因",
    "answer": "A",
    "explain": "地面受热不均",
    "options": [
      "A.地面冷热不均",
      "B.地球自转",
      "C.地球公转",
      "D.太阳变化"
    ]
  },
  {
    "id": "geo_rq_00056",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "热力环流中",
    "answer": "A",
    "explain": "热的地方气流上升,冷的下沉,近地面从冷向热流动",
    "options": [
      "A.热的上升冷的下沉",
      "B.都上升",
      "C.都下沉",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00057",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "风的水平方向由",
    "answer": "A",
    "explain": "高压指向低压",
    "options": [
      "A.高压指向低压",
      "B.低压指向高压",
      "C.随意",
      "D.由东向西"
    ]
  },
  {
    "id": "geo_rq_00058",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "地转偏向力对风的影响",
    "answer": "A",
    "explain": "北右南左",
    "options": [
      "A.北半球向右偏南半球向左偏",
      "B.都向右",
      "C.都向左",
      "D.不偏"
    ]
  },
  {
    "id": "geo_rq_00059",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "气旋(低压)中心气流",
    "answer": "A",
    "explain": "中心气流上升多云雨",
    "options": [
      "A.上升",
      "B.下沉",
      "C.水平",
      "D.静止"
    ]
  },
  {
    "id": "geo_rq_00060",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "反气旋(高压)中心",
    "answer": "B",
    "explain": "下沉气流,晴朗",
    "options": [
      "A.上升",
      "B.下沉",
      "C.水平",
      "D.复杂"
    ]
  },
  {
    "id": "geo_rq_00061",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "下列天气与气旋对应",
    "answer": "A",
    "explain": "气旋多雨,反气旋晴朗",
    "options": [
      "A.多云雨",
      "B.晴朗",
      "C.干燥",
      "D.高温"
    ]
  },
  {
    "id": "geo_rq_00062",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "下列天气与反气旋",
    "answer": "B",
    "explain": "反气旋(高压)晴朗",
    "options": [
      "A.多云雨",
      "B.晴朗",
      "C.暴风雨",
      "D.雷暴"
    ]
  },
  {
    "id": "geo_rq_00063",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不属于全球性大气环流",
    "answer": "D",
    "explain": "焚风是局地风",
    "options": [
      "A.三圈环流",
      "B.季风环流",
      "C.信风带西风带",
      "D.焚风"
    ]
  },
  {
    "id": "geo_rq_00064",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "副热带高压位于",
    "answer": "A",
    "explain": "南北纬30°附近",
    "options": [
      "A.南北纬30°附近",
      "B.赤道",
      "C.极地",
      "D.60°纬度"
    ]
  },
  {
    "id": "geo_rq_00065",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "赤道低压带位于",
    "answer": "A",
    "explain": "赤道附近",
    "options": [
      "A.赤道",
      "B.30°",
      "C.60°",
      "D.极地"
    ]
  },
  {
    "id": "geo_rq_00066",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "副极地低压位于",
    "answer": "C",
    "explain": "60°纬度附近",
    "options": [
      "A.赤道",
      "B.30°",
      "C.60°",
      "D.90°"
    ]
  },
  {
    "id": "geo_rq_00067",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "极地高压位于",
    "answer": "D",
    "explain": "南北极",
    "options": [
      "A.赤道",
      "B.30°",
      "C.60°",
      "D.90°(南北极)"
    ]
  },
  {
    "id": "geo_rq_00068",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "盛行西风带位于",
    "answer": "B",
    "explain": "30°~60°",
    "options": [
      "A.0°~30°",
      "B.30°~60°",
      "C.60°~90°",
      "D.赤道"
    ]
  },
  {
    "id": "geo_rq_00069",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "东北信风带位于",
    "answer": "A",
    "explain": "北半球0°~30°",
    "options": [
      "A.北半球0°~30°",
      "B.30°~60°",
      "C.60°~90°",
      "D.随意"
    ]
  },
  {
    "id": "geo_rq_00070",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列季风气候分布区",
    "answer": "A",
    "explain": "东亚南亚受季风影响",
    "options": [
      "A.东亚、南亚、东南亚",
      "B.欧洲西部",
      "C.撒哈拉",
      "D.南美西岸"
    ]
  },
  {
    "id": "geo_rq_00071",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "冬季亚欧大陆盛行",
    "answer": "A",
    "explain": "冬季陆冷海暖,亚洲高压使风由陆向海",
    "options": [
      "A.西北季风(蒙古西伯利亚高压)",
      "B.东南季风",
      "C.西南季风",
      "D.静风"
    ]
  },
  {
    "id": "geo_rq_00072",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "夏季东亚",
    "answer": "B",
    "explain": "夏季陆热海冷,风从海洋吹向大陆",
    "options": [
      "A.西北季风",
      "B.东南季风",
      "C.西风",
      "D.干旱风"
    ]
  },
  {
    "id": "geo_rq_00073",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "地中海气候特点",
    "answer": "A",
    "explain": "冬季温和多雨夏季炎热干燥",
    "options": [
      "A.冬雨夏干",
      "B.全年多雨",
      "C.全年干旱",
      "D.四季分明多雨"
    ]
  },
  {
    "id": "geo_rq_00074",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "热带雨林气候特点",
    "answer": "A",
    "explain": "全年高温多雨",
    "options": [
      "A.全年高温多雨",
      "B.全年低温",
      "C.冬雨",
      "D.干湿季分明"
    ]
  },
  {
    "id": "geo_rq_00075",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "温带海洋性气候",
    "answer": "A",
    "explain": "西欧,全年温和多雨",
    "options": [
      "A.全年温和降水均匀",
      "B.严冬酷暑",
      "C.干旱",
      "D.多雪"
    ]
  },
  {
    "id": "geo_rq_00076",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "热带草原气候",
    "answer": "A",
    "explain": "干湿季分明",
    "options": [
      "A.干季湿季分明",
      "B.全年多雨",
      "C.全年低温",
      "D.冬雨"
    ]
  },
  {
    "id": "geo_rq_00077",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "热带沙漠气候",
    "answer": "A",
    "explain": "全年高温少雨",
    "options": [
      "A.全年高温少雨",
      "B.多雨",
      "C.严寒",
      "D.四季分明"
    ]
  },
  {
    "id": "geo_rq_00078",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "hard",
    "q": "冷锋过境",
    "answer": "A",
    "explain": "冷锋过境时降水偏冷锋后,通常伴狂风大雨降温",
    "options": [
      "A.降温、大风、有降水,过境后天气转晴",
      "B.升温",
      "C.静风",
      "D.无降水"
    ]
  },
  {
    "id": "geo_rq_00079",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "hard",
    "q": "暖锋过境",
    "answer": "A",
    "explain": "连续性降水,雨在锋前,过境后升温",
    "options": [
      "A.连续性降水锋前雨,过境后升温",
      "B.降温大雨",
      "C.干燥",
      "D.无变化"
    ]
  },
  {
    "id": "geo_rq_00080",
    "manualId": "geo_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列会造成大气污染",
    "answer": "ABD",
    "explain": "燃烧汽车工业均污染",
    "options": [
      "A.燃烧煤炭",
      "B.汽车尾气",
      "C.植树造林",
      "D.工业废气"
    ]
  },
  {
    "id": "geo_rq_00081",
    "manualId": "geo_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列属于大气环流",
    "answer": "ABC",
    "explain": "三圈环流、季风环流、行星风系",
    "options": [
      "A.三圈环流",
      "B.季风环流",
      "C.西风带",
      "D.地转偏向"
    ]
  },
  {
    "id": "geo_rq_00082",
    "manualId": "geo_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "太阳直接加热大气很少",
    "answer": "对",
    "explain": "大气对太阳短波辐射透明,主要吸收地面长波辐射"
  },
  {
    "id": "geo_rq_00083",
    "manualId": "geo_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "对流层集中大部分水汽和天气现象",
    "answer": "对",
    "explain": "近地面天气现象最丰富"
  },
  {
    "id": "geo_rq_00084",
    "manualId": "geo_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "高山反气旋中心天气晴朗",
    "answer": "对",
    "explain": "下沉气流稳定"
  },
  {
    "id": "geo_rq_00085",
    "manualId": "geo_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "近地面大气的直接热源是____",
    "answer": "地面辐射(地面长波辐射)",
    "explain": "热源判断"
  },
  {
    "id": "geo_rq_00086",
    "manualId": "geo_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "北半球副热带高气压带位于____",
    "answer": "北纬30°附近",
    "explain": "气压带位置"
  },
  {
    "id": "geo_rq_00087",
    "manualId": "geo_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "形成风的直接原因是____",
    "answer": "水平气压梯度力",
    "explain": "气压差驱动"
  },
  {
    "id": "geo_rq_00088",
    "manualId": "geo_m2",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知海拔升高100米温度降低0.6°C,某山脚25°C,山顶3000米高,山顶温度",
    "answer": "7°C",
    "explain": "25-30×0.6=25-18=7°C"
  },
  {
    "id": "geo_rq_00089",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "地球上水的分布最多是",
    "answer": "A",
    "explain": "海洋水约97%",
    "options": [
      "A.海洋水",
      "B.陆地淡水",
      "C.大气水",
      "D.生物水"
    ]
  },
  {
    "id": "geo_rq_00090",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "陆地水资源中最主要是",
    "answer": "A",
    "explain": "冰川冻土占淡水最多但难利用,液态淡水中河湖",
    "options": [
      "A.冰川",
      "B.河流水",
      "C.湖泊水",
      "D.大气水"
    ]
  },
  {
    "id": "geo_rq_00091",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "人类可利用淡水资源主要是",
    "answer": "A",
    "explain": "河湖水和浅层地下水",
    "options": [
      "A.河湖水和浅层地下水",
      "B.深层地下水",
      "C.冰川",
      "D.海水"
    ]
  },
  {
    "id": "geo_rq_00092",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "水循环的能量来源",
    "answer": "A",
    "explain": "太阳辐射和重力",
    "options": [
      "A.太阳辐射和重力",
      "B.只有重力",
      "C.只有热",
      "D.风"
    ]
  },
  {
    "id": "geo_rq_00093",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "水循环的三种类型",
    "answer": "D",
    "explain": "海陆间、内陆、海上",
    "options": [
      "A.海陆间循环",
      "B.陆地内循环",
      "C.海上循环",
      "D.以上都有"
    ]
  },
  {
    "id": "geo_rq_00094",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "参与人类活动最密切的水循环是",
    "answer": "A",
    "explain": "海陆间循环",
    "options": [
      "A.海陆间循环",
      "B.海上内循环",
      "C.陆地内循环",
      "D.无关"
    ]
  },
  {
    "id": "geo_rq_00095",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "水循环意义",
    "answer": "D",
    "explain": "更新水体、维持水量平衡、塑造地貌、调节气候",
    "options": [
      "A.更新水资源",
      "B.维持水量平衡",
      "C.塑造地形",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00096",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "洋流按性质分",
    "answer": "A",
    "explain": "暖流和寒流",
    "options": [
      "A.暖流和寒流",
      "B.浅流深流",
      "C.暖冷",
      "D.表层深层"
    ]
  },
  {
    "id": "geo_rq_00097",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "暖流",
    "answer": "A",
    "explain": "由低纬流向高纬水温比周围高",
    "options": [
      "A.由低纬流向高纬",
      "B.由高纬流向低纬",
      "C.随意",
      "D.只在赤道"
    ]
  },
  {
    "id": "geo_rq_00098",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "寒流",
    "answer": "B",
    "explain": "由高纬流向低纬",
    "options": [
      "A.由低纬流向高纬",
      "B.由高纬流向低纬",
      "C.随意",
      "D.水温高"
    ]
  },
  {
    "id": "geo_rq_00099",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "洋流对沿岸气候的影响",
    "answer": "A",
    "explain": "暖流增温增湿寒流降温减湿",
    "options": [
      "A.暖流增温增湿,寒流降温减湿",
      "B.都升温",
      "C.都降温",
      "D.无影响"
    ]
  },
  {
    "id": "geo_rq_00100",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "河流的补给方式",
    "answer": "D",
    "explain": "雨水、冰雪融水、地下水、湖泊水",
    "options": [
      "A.雨水补给",
      "B.冰雪融水",
      "C.地下水",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00101",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "我国大部分河流主要靠",
    "answer": "A",
    "explain": "东部季风区河流靠雨水",
    "options": [
      "A.雨水补给",
      "B.地下水",
      "C.冰川",
      "D.湖泊"
    ]
  },
  {
    "id": "geo_rq_00102",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "地表形态的塑造",
    "answer": "A",
    "explain": "内力和外力共同作用",
    "options": [
      "A.内力(地壳运动地震火山)和外力(风水冰川)共同作用",
      "B.只内力",
      "C.只外力",
      "D.太阳作用"
    ]
  },
  {
    "id": "geo_rq_00103",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "下列属于内力作用",
    "answer": "D",
    "explain": "地壳运动、地震、火山、变质作用",
    "options": [
      "A.风化",
      "B.流水",
      "C.冰川",
      "D.地震和火山"
    ]
  },
  {
    "id": "geo_rq_00104",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "下列属于外力作用",
    "answer": "D",
    "explain": "风水冰川生物",
    "options": [
      "A.地震",
      "B.火山",
      "C.地壳运动",
      "D.风蚀水蚀"
    ]
  },
  {
    "id": "geo_rq_00105",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "流水侵蚀作用形成",
    "answer": "D",
    "explain": "V形谷、峡谷、瀑布、丹霞地貌",
    "options": [
      "A.冲积扇",
      "B.平原",
      "C.三角洲",
      "D.峡谷"
    ]
  },
  {
    "id": "geo_rq_00106",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "流水堆积作用形成",
    "answer": "D",
    "explain": "冲积扇、平原、三角洲",
    "options": [
      "A.冲积扇",
      "B.平原",
      "C.三角洲",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00107",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "风力侵蚀作用形成",
    "answer": "A",
    "explain": "风蚀蘑菇、风蚀城堡、雅丹",
    "options": [
      "A.风蚀蘑菇",
      "B.沙丘",
      "C.黄土",
      "D.冲积扇"
    ]
  },
  {
    "id": "geo_rq_00108",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "风力沉积作用形成",
    "answer": "D",
    "explain": "沙丘、黄土堆积等",
    "options": [
      "A.冲积扇",
      "B.海岸",
      "C.三角洲",
      "D.沙丘"
    ]
  },
  {
    "id": "geo_rq_00109",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "冰川侵蚀作用形成",
    "answer": "A",
    "explain": "U型谷、角峰、刃脊、冰斗",
    "options": [
      "A.U型谷",
      "B.平原",
      "C.三角洲",
      "D.冲积扇"
    ]
  },
  {
    "id": "geo_rq_00110",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "溶蚀作用形成",
    "answer": "A",
    "explain": "喀斯特地貌石灰岩溶洞",
    "options": [
      "A.喀斯特地貌",
      "B.冰川地貌",
      "C.风蚀",
      "D.雅丹"
    ]
  },
  {
    "id": "geo_rq_00111",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "地质构造的基本形式",
    "answer": "A",
    "explain": "褶皱和断层",
    "options": [
      "A.褶皱和断层",
      "B.只褶皱",
      "C.只断层",
      "D.褶断和堆积"
    ]
  },
  {
    "id": "geo_rq_00112",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "背斜",
    "answer": "A",
    "explain": "岩层向上拱起,中间老两翼新",
    "options": [
      "A.向上拱起中间老",
      "B.向下弯曲",
      "C.完全水平",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00113",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "向斜",
    "answer": "B",
    "explain": "岩层向下弯曲,中间新两翼老",
    "options": [
      "A.向上拱起",
      "B.向下凹陷中间新",
      "C.水平",
      "D.颠倒"
    ]
  },
  {
    "id": "geo_rq_00114",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "背斜是储油储气构造",
    "answer": "A",
    "explain": "气轻在顶,油次之",
    "options": [
      "A.背斜储油气",
      "B.向斜储油气",
      "C.断层储油气",
      "D.都不储"
    ]
  },
  {
    "id": "geo_rq_00115",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "向斜是储水构造",
    "answer": "A",
    "explain": "水易汇聚",
    "options": [
      "A.向斜储水",
      "B.背斜储水",
      "C.断层储水",
      "D.没有"
    ]
  },
  {
    "id": "geo_rq_00116",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "板块构造学说,大陆漂移的动力",
    "answer": "A",
    "explain": "地幔物质对流",
    "options": [
      "A.地幔对流",
      "B.外力风水",
      "C.地球自转",
      "D.月球引力"
    ]
  },
  {
    "id": "geo_rq_00117",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于全球主要板块",
    "answer": "D",
    "explain": "六大板块+印度洋板块",
    "options": [
      "A.太平洋板块",
      "B.亚欧板块",
      "C.非洲板块",
      "D.大西洋板块(实际大西洋不是独立板块)"
    ]
  },
  {
    "id": "geo_rq_00118",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "板块碰撞",
    "answer": "A",
    "explain": "形成山脉海沟",
    "options": [
      "A.形成山脉、海沟、岛弧",
      "B.形成海洋",
      "C.形成平原",
      "D.不变"
    ]
  },
  {
    "id": "geo_rq_00119",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "板块张裂",
    "answer": "B",
    "explain": "形成裂谷、海洋",
    "options": [
      "A.形成山脉",
      "B.形成裂谷、海洋",
      "C.形成沙漠",
      "D.没有"
    ]
  },
  {
    "id": "geo_rq_00120",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "喜马拉雅山形成",
    "answer": "A",
    "explain": "印度洋板块与亚欧板块碰撞",
    "options": [
      "A.印度洋板块与亚欧板块碰撞",
      "B.太平洋与非洲板块",
      "C.非洲与南极洲",
      "D.大西洋"
    ]
  },
  {
    "id": "geo_rq_00121",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "日本多地震原因",
    "answer": "A",
    "explain": "太平洋板块与亚欧板块交界(环太平洋地震带)",
    "options": [
      "A.位于板块交界处",
      "B.地形平坦",
      "C.气候",
      "D.距太阳近"
    ]
  },
  {
    "id": "geo_rq_00122",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "hard",
    "q": "黄河下游地上河形成原因",
    "answer": "A",
    "explain": "中游黄土高原水土流失严重,下游泥沙堆积",
    "options": [
      "A.中游水土流失,下游泥沙堆积高于两岸",
      "B.河道低",
      "C.地震",
      "D.以上都不对"
    ]
  },
  {
    "id": "geo_rq_00123",
    "manualId": "geo_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列属于流水地貌",
    "answer": "ABCD",
    "explain": "流水侵蚀堆积形成",
    "options": [
      "A.V形谷",
      "B.冲积扇",
      "C.三角洲",
      "D.河曲"
    ]
  },
  {
    "id": "geo_rq_00124",
    "manualId": "geo_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "水循环的能量主要来自太阳辐射",
    "answer": "对",
    "explain": "蒸发靠太阳"
  },
  {
    "id": "geo_rq_00125",
    "manualId": "geo_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "湖泊对气候和调节径流有作用",
    "answer": "对",
    "explain": "湖泊温和气候削减洪峰"
  },
  {
    "id": "geo_rq_00126",
    "manualId": "geo_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "水循环包括____、____、____三种类型",
    "answer": "海陆间循环、海上内循环、陆地内循环",
    "explain": "水循环分类"
  },
  {
    "id": "geo_rq_00127",
    "manualId": "geo_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "塑造地表形态的力量分为____和____",
    "answer": "内力作用、外力作用",
    "explain": "地貌塑造"
  },
  {
    "id": "geo_rq_00128",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "土壤的组成",
    "answer": "D",
    "explain": "矿物质、有机质、水、空气",
    "options": [
      "A.矿物质",
      "B.有机质",
      "C.水和空气",
      "D.以上都有"
    ]
  },
  {
    "id": "geo_rq_00129",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "土壤肥力主要取决于",
    "answer": "A",
    "explain": "土壤有机质腐殖质含量",
    "options": [
      "A.有机质含量",
      "B.矿物含量",
      "C.水分",
      "D.空气"
    ]
  },
  {
    "id": "geo_rq_00130",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "东北黑土地肥力高原因",
    "answer": "A",
    "explain": "冷湿环境有机质分解慢积累多",
    "options": [
      "A.冷湿环境有机质积累多",
      "B.温度高",
      "C.降水少",
      "D.纬度低"
    ]
  },
  {
    "id": "geo_rq_00131",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "下列关于土壤",
    "answer": "B",
    "explain": "土壤是陆地表层能生长植物的疏松层",
    "options": [
      "A.岩石",
      "B.陆地表层能生长植物的疏松表层",
      "C.水层",
      "D.大气层"
    ]
  },
  {
    "id": "geo_rq_00132",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "森林生态系统在陆地生态系统中",
    "answer": "A",
    "explain": "森林面积最大功能最强",
    "options": [
      "A.面积最大功能最重要",
      "B.没有作用",
      "C.只有装饰",
      "D.面积小"
    ]
  },
  {
    "id": "geo_rq_00133",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "热带雨林分布",
    "answer": "A",
    "explain": "低纬度赤道附近",
    "options": [
      "A.赤道附近",
      "B.极地",
      "C.中纬度",
      "D.高山"
    ]
  },
  {
    "id": "geo_rq_00134",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "亚寒带针叶林分布",
    "answer": "A",
    "explain": "高纬度大陆",
    "options": [
      "A.高纬度大陆",
      "B.赤道",
      "C.海洋",
      "D.沙漠"
    ]
  },
  {
    "id": "geo_rq_00135",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "温带草原",
    "answer": "A",
    "explain": "中纬度大陆内部",
    "options": [
      "A.中纬度内陆",
      "B.赤道",
      "C.极地",
      "D.海洋"
    ]
  },
  {
    "id": "geo_rq_00136",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "热带草原(稀树草原)分布",
    "answer": "B",
    "explain": "热带干湿季分明地区",
    "options": [
      "A.热带雨林",
      "B.热带干湿季气候",
      "C.温带",
      "D.寒带"
    ]
  },
  {
    "id": "geo_rq_00137",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "荒漠植被",
    "answer": "C",
    "explain": "干旱地区",
    "options": [
      "A.湿润",
      "B.半湿润",
      "C.干旱半干旱",
      "D.寒带"
    ]
  },
  {
    "id": "geo_rq_00138",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列生态系统生产力最高的是",
    "answer": "A",
    "explain": "热带雨林",
    "options": [
      "A.热带雨林",
      "B.温带森林",
      "C.草原",
      "D.荒漠"
    ]
  },
  {
    "id": "geo_rq_00139",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "土壤形成的主导因素",
    "answer": "A",
    "explain": "生物影响最活跃",
    "options": [
      "A.生物",
      "B.岩石",
      "C.水",
      "D.气候"
    ]
  },
  {
    "id": "geo_rq_00140",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "热带雨林被称为地球之肺原因",
    "answer": "A",
    "explain": "强大的光合作用产氧",
    "options": [
      "A.强光合作用产大量氧",
      "B.吸尘",
      "C.降雨",
      "D.遮阳"
    ]
  },
  {
    "id": "geo_rq_00141",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "热带雨林面临的威胁",
    "answer": "A",
    "explain": "过度采伐、火灾、开垦农业",
    "options": [
      "A.滥砍滥伐",
      "B.地震",
      "C.冰川",
      "D.海侵"
    ]
  },
  {
    "id": "geo_rq_00142",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列区域生态问题",
    "answer": "D",
    "explain": "黄土高原水土流失、西北荒漠化、南方红壤酸化",
    "options": [
      "A.水土流失",
      "B.荒漠化",
      "C.石漠化",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00143",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "黄土高原水土流失原因",
    "answer": "D",
    "explain": "黄土疏松、降水集中、植被破坏、坡度大",
    "options": [
      "A.土质疏松",
      "B.降水集中",
      "C.过度开垦植被破坏",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00144",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "治理黄土高原水土流失措施",
    "answer": "D",
    "explain": "生物工程农业综合",
    "options": [
      "A.植树种草",
      "B.修梯田",
      "C.淤地坝",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00145",
    "manualId": "geo_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列有利于土壤肥力提升",
    "answer": "ACD",
    "explain": "增加有机质、合理灌溉、保护植被",
    "options": [
      "A.增加有机质",
      "B.过度耕作",
      "C.合理灌溉",
      "D.保护植被"
    ]
  },
  {
    "id": "geo_rq_00146",
    "manualId": "geo_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "森林能涵养水源",
    "answer": "对",
    "explain": "减少地表径流"
  },
  {
    "id": "geo_rq_00147",
    "manualId": "geo_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "东北平原黑土肥沃的主要原因是____",
    "answer": "有机质积累多(冷湿环境有机质分解慢)",
    "explain": "黑土成因"
  },
  {
    "id": "geo_rq_00148",
    "manualId": "geo_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "水土流失的主要治理措施____",
    "answer": "植树种草、修梯田、淤地坝",
    "explain": "水土保持"
  },
  {
    "id": "geo_rq_00149",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "下列人口分布最密集",
    "answer": "B",
    "explain": "东亚、南亚、西欧、北美东部",
    "options": [
      "A.撒哈拉",
      "B.东亚",
      "C.北极",
      "D.南极"
    ]
  },
  {
    "id": "geo_rq_00150",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不利于人口分布",
    "answer": "D",
    "explain": "高山、寒地、干旱、湿热雨林",
    "options": [
      "A.平原",
      "B.温带",
      "C.河谷",
      "D.严寒沙漠"
    ]
  },
  {
    "id": "geo_rq_00151",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "世界人口最多的国家",
    "answer": "A",
    "explain": "中国14亿",
    "options": [
      "A.中国",
      "B.印度",
      "C.美国",
      "D.日本"
    ]
  },
  {
    "id": "geo_rq_00152",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "影响人口分布的自然因素",
    "answer": "D",
    "explain": "气候、地形、水源、土壤",
    "options": [
      "A.气候",
      "B.地形",
      "C.水源",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00153",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "人口增长模式",
    "answer": "A",
    "explain": "高高低→高低高→低低低",
    "options": [
      "A.原始→传统→现代",
      "B.现代→原始",
      "C.随机",
      "D.没有"
    ]
  },
  {
    "id": "geo_rq_00154",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "发达国家人口增长模式",
    "answer": "C",
    "explain": "低出生率低死亡率低自然增长率",
    "options": [
      "A.高高低",
      "B.高低高",
      "C.低低低",
      "D.没有"
    ]
  },
  {
    "id": "geo_rq_00155",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "发展中国家人口增长快",
    "answer": "B",
    "explain": "高出生率低死亡率",
    "options": [
      "A.高高低",
      "B.高低高",
      "C.低低低",
      "D.相同"
    ]
  },
  {
    "id": "geo_rq_00156",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "人口迁移",
    "answer": "A",
    "explain": "跨越行政界线,居住地永久或长期改变",
    "options": [
      "A.跨越行政界线长期改变居住地",
      "B.随便走走",
      "C.短期出行",
      "D.死亡"
    ]
  },
  {
    "id": "geo_rq_00157",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "中国目前人口迁移主流",
    "answer": "A",
    "explain": "农村→城市,内陆→沿海",
    "options": [
      "A.从农村迁往城市从内地迁往沿海",
      "B.相反",
      "C.国际迁移",
      "D.没迁移"
    ]
  },
  {
    "id": "geo_rq_00158",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "人口迁移的推力(不利因素)",
    "answer": "A",
    "explain": "家乡战争、贫困、灾害推动出走",
    "options": [
      "A.家乡贫困战乱环境恶化",
      "B.就业机会多",
      "C.教育好",
      "D.政策优惠"
    ]
  },
  {
    "id": "geo_rq_00159",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "人口迁移的拉力(吸引因素)",
    "answer": "B",
    "explain": "目的地就业教育医疗好",
    "options": [
      "A.战争",
      "B.就业机会、教育医疗完善",
      "C.贫困",
      "D.灾害"
    ]
  },
  {
    "id": "geo_rq_00160",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "环境承载力",
    "answer": "A",
    "explain": "一个地区在生态承受范围内所能容纳的最大人口数",
    "options": [
      "A.资源和环境承受人口的最大值",
      "B.总人口",
      "C.最小人口",
      "D.平均人口"
    ]
  },
  {
    "id": "geo_rq_00161",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "合理人口容量",
    "answer": "A",
    "explain": "在保证生活质量前提下的适度规模",
    "options": [
      "A.资源环境承受范围内的适度规模",
      "B.最大",
      "C.随意",
      "D.同环境承载力"
    ]
  },
  {
    "id": "geo_rq_00162",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "中国人口国情",
    "answer": "A",
    "explain": "人口基数大老龄化加剧",
    "options": [
      "A.人口基数大老龄化加剧",
      "B.出生率高",
      "C.人口太少",
      "D.没老龄化"
    ]
  },
  {
    "id": "geo_rq_00163",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "应对老龄化措施",
    "answer": "D",
    "explain": "延迟退休、鼓励生育、发展养老服务",
    "options": [
      "A.延迟退休",
      "B.鼓励生育",
      "C.发展养老服务",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00164",
    "manualId": "geo_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列自然因素影响人口分布",
    "answer": "ABCD",
    "explain": "这些都是自然因素",
    "options": [
      "A.气候",
      "B.地形",
      "C.水源",
      "D.土壤"
    ]
  },
  {
    "id": "geo_rq_00165",
    "manualId": "geo_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "人口越多越好",
    "answer": "错",
    "explain": "要在环境承载力内"
  },
  {
    "id": "geo_rq_00166",
    "manualId": "geo_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "中国已进入老龄化社会",
    "answer": "对",
    "explain": "65岁以上人口>7%"
  },
  {
    "id": "geo_rq_00167",
    "manualId": "geo_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "一个地区最大可容纳人口是____",
    "answer": "环境承载力(人口容量)",
    "explain": "术语区分"
  },
  {
    "id": "geo_rq_00168",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "城市化含义",
    "answer": "D",
    "explain": "人口非农化、产业非农化、地域城市化、生活城市化",
    "options": [
      "A.人口向城市集中",
      "B.产业城市化",
      "C.地域城市化",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00169",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "衡量城市化水平的最主要指标",
    "answer": "A",
    "explain": "城市人口占总人口比重",
    "options": [
      "A.城市人口占总人口比例",
      "B.城市面积",
      "C.GDP",
      "D.建筑数量"
    ]
  },
  {
    "id": "geo_rq_00170",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "发达国家城市化特点",
    "answer": "A",
    "explain": "起步早水平高,郊区化逆城市化",
    "options": [
      "A.起步早水平高",
      "B.水平低",
      "C.起步晚",
      "D.没城市化"
    ]
  },
  {
    "id": "geo_rq_00171",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "发展中国家城市化",
    "answer": "B",
    "explain": "起步晚发展快,水平不高但发展快",
    "options": [
      "A.起步早",
      "B.起步晚发展快水平较低",
      "C.水平最高",
      "D.停滞"
    ]
  },
  {
    "id": "geo_rq_00172",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不属于城市化过程",
    "answer": "D",
    "explain": "农业劳动力向非农业转移",
    "options": [
      "A.人口向城市集中",
      "B.产业非农化",
      "C.城市规模扩大",
      "D.人口回农村"
    ]
  },
  {
    "id": "geo_rq_00173",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "城市化过程中不利影响",
    "answer": "D",
    "explain": "交通拥堵、环境污染、住房紧张、就业压力",
    "options": [
      "A.交通拥堵",
      "B.环境污染",
      "C.住房紧张",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00174",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不属于城市化问题",
    "answer": "D",
    "explain": "饮用水污染大气污染热岛效应人口拥挤,极光是极地现象",
    "options": [
      "A.水污染",
      "B.大气污染",
      "C.热岛效应",
      "D.极光"
    ]
  },
  {
    "id": "geo_rq_00175",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "城市热岛效应",
    "answer": "A",
    "explain": "城市气温高于郊区形成的现象",
    "options": [
      "A.城市气温高于郊区",
      "B.湖泊温高",
      "C.森林温高",
      "D.所有地方温相同"
    ]
  },
  {
    "id": "geo_rq_00176",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "城市化过程中出现的逆城市化",
    "answer": "A",
    "explain": "部分城市人口迁往郊区乡村",
    "options": [
      "A.人口从城市迁向郊区/乡村",
      "B.人口涌入城市",
      "C.没有变化",
      "D.所有人集中在城市"
    ]
  },
  {
    "id": "geo_rq_00177",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "解决城市化问题的措施",
    "answer": "D",
    "explain": "合理规划、发展公共交通、绿化、控制人口",
    "options": [
      "A.合理规划",
      "B.发展公共交通",
      "C.加强绿化",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00178",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "城市地域功能分区",
    "answer": "D",
    "explain": "住宅、商业、工业、行政",
    "options": [
      "A.住宅区",
      "B.商业区",
      "C.工业区",
      "D.以上都有"
    ]
  },
  {
    "id": "geo_rq_00179",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "商业区一般位于",
    "answer": "A",
    "explain": "市中心和交通节点",
    "options": "市中心/交通汇集地/CBD"
  },
  {
    "id": "geo_rq_00180",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "工业区一般位于",
    "answer": "A",
    "explain": "城市外围沿交通线",
    "options": [
      "A.城市外围沿交通线",
      "B.市中心",
      "C.风景区",
      "D.没有工业"
    ]
  },
  {
    "id": "geo_rq_00181",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "住宅区通常按",
    "answer": "A",
    "explain": "档次分不同区",
    "options": [
      "A.按经济地位分高中低档住宅区",
      "B.随机",
      "C.都一样",
      "D.按颜色分"
    ]
  },
  {
    "id": "geo_rq_00182",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "不同等级城市服务范围",
    "answer": "B",
    "explain": "高等级服务范围大低等级小",
    "options": [
      "A.相同",
      "B.高等级大低等级小",
      "C.高等级小",
      "D.没有服务"
    ]
  },
  {
    "id": "geo_rq_00183",
    "manualId": "geo_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列属于城市化的表现",
    "answer": "ABCD",
    "explain": "四大表现",
    "options": [
      "A.城市人口增加",
      "B.产业非农化",
      "C.城市面积扩大",
      "D.生活方式城市化"
    ]
  },
  {
    "id": "geo_rq_00184",
    "manualId": "geo_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "城市化只有好处",
    "answer": "错",
    "explain": "也有拥堵污染等问题"
  },
  {
    "id": "geo_rq_00185",
    "manualId": "geo_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "衡量城市化水平的指标是____",
    "answer": "城市人口占总人口比重",
    "explain": "主要指标"
  },
  {
    "id": "geo_rq_00186",
    "manualId": "geo_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "城市热岛效应指____",
    "answer": "城市气温高于郊区",
    "explain": "热岛现象"
  },
  {
    "id": "geo_rq_00187",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "下列影响农业区位的自然因素",
    "answer": "D",
    "explain": "气候水源地形土壤",
    "options": [
      "A.气候",
      "B.水源",
      "C.地形土壤",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00188",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "下列影响农业区位的社会经济因素",
    "answer": "D",
    "explain": "市场、交通、劳动力、科技、政策",
    "options": [
      "A.市场",
      "B.交通",
      "C.科技",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00189",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "水稻的主要分布区",
    "answer": "A",
    "explain": "东亚南亚东南亚季风水热丰富",
    "options": [
      "A.东亚南亚东南亚",
      "B.北欧",
      "C.撒哈拉",
      "D.阿拉斯加"
    ]
  },
  {
    "id": "geo_rq_00190",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "小麦",
    "answer": "A",
    "explain": "主要在温带地区",
    "options": [
      "A.温带地区",
      "B.热带雨林",
      "C.北极",
      "D.海洋"
    ]
  },
  {
    "id": "geo_rq_00191",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "热带经济作物",
    "answer": "A",
    "explain": "咖啡、可可、天然橡胶",
    "options": [
      "A.咖啡可可橡胶",
      "B.小麦",
      "C.玉米",
      "D.水稻"
    ]
  },
  {
    "id": "geo_rq_00192",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不属于种植业",
    "answer": "D",
    "explain": "畜牧业不是种植",
    "options": [
      "A.水稻",
      "B.小麦",
      "C.玉米",
      "D.养牛"
    ]
  },
  {
    "id": "geo_rq_00193",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "下列属于畜牧业",
    "answer": "A",
    "explain": "养牛养羊养猪家禽",
    "options": [
      "A.养牛",
      "B.水稻",
      "C.小麦",
      "D.茶叶"
    ]
  },
  {
    "id": "geo_rq_00194",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "季风水田农业特点",
    "answer": "D",
    "explain": "小农经营、单产高、机械化低、水利工程量大",
    "options": [
      "A.小农",
      "B.单产高",
      "C.机械化程度低",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00195",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "商品谷物农业分布",
    "answer": "A",
    "explain": "美国加拿大澳大利亚等",
    "options": [
      "A.美加澳阿根廷",
      "B.日本",
      "C.印度",
      "D.菲律宾"
    ]
  },
  {
    "id": "geo_rq_00196",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "混合农业代表",
    "answer": "A",
    "explain": "澳大利亚墨累-达令盆地",
    "options": [
      "A.澳大利亚墨累-达令盆地",
      "B.中国东北",
      "C.印度尼西亚",
      "D.北欧"
    ]
  },
  {
    "id": "geo_rq_00197",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列因素中主导性最强的",
    "answer": "A",
    "explain": "市场对农业类型的最终决定作用大",
    "options": [
      "A.市场",
      "B.气候",
      "C.地形",
      "D.劳动力"
    ]
  },
  {
    "id": "geo_rq_00198",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "影响农业的最基础的因素是",
    "answer": "B",
    "explain": "气候是最基础因素",
    "options": [
      "A.市场",
      "B.气候",
      "C.交通",
      "D.科技"
    ]
  },
  {
    "id": "geo_rq_00199",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "乳畜业分布",
    "answer": "A",
    "explain": "北美东北部、西欧,面向大都市",
    "options": [
      "A.面向大都市地区",
      "B.内陆",
      "C.草原",
      "D.沙漠"
    ]
  },
  {
    "id": "geo_rq_00200",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "大牧场放牧业分布",
    "answer": "A",
    "explain": "地广人稀的干旱半干旱草原(阿根廷潘帕斯,美国大平原,澳大利亚)",
    "options": [
      "A.地广人稀草原半干旱区",
      "B.雨林",
      "C.苔原",
      "D.高山"
    ]
  },
  {
    "id": "geo_rq_00201",
    "manualId": "geo_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列属于影响农业的社会经济因素",
    "answer": "ABCD",
    "explain": "市场交通科技政策",
    "options": [
      "A.市场",
      "B.交通",
      "C.科技",
      "D.政府政策"
    ]
  },
  {
    "id": "geo_rq_00202",
    "manualId": "geo_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "气候决定农作物种类",
    "answer": "对",
    "explain": "热量水分是基础"
  },
  {
    "id": "geo_rq_00203",
    "manualId": "geo_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "影响农业区位的社会经济因素中,主导作用越来越强的是____",
    "answer": "市场",
    "explain": "市场决定"
  },
  {
    "id": "geo_rq_00204",
    "manualId": "geo_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "农业的基本自然要素包括____",
    "answer": "气候、水源、土壤、地形",
    "explain": "农业自然基础"
  },
  {
    "id": "geo_rq_00205",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "下列影响工业区位的因素",
    "answer": "D",
    "explain": "原料、能源、交通、市场、劳动力、科技、政策",
    "options": [
      "A.原料",
      "B.市场",
      "C.交通",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00206",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "下列工业指向类型",
    "answer": "D",
    "explain": "原料指向、市场指向、动力指向、劳动力指向、技术指向",
    "options": [
      "A.原料指向型",
      "B.市场指向型",
      "C.劳动力指向型",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00207",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "水果罐头厂属于",
    "answer": "A",
    "explain": "原料指向型:原料重量大不便运输",
    "options": [
      "A.原料指向",
      "B.市场指向",
      "C.动力指向",
      "D.技术指向"
    ]
  },
  {
    "id": "geo_rq_00208",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "面粉厂玻璃厂",
    "answer": "A",
    "explain": "消费大众品市场指向",
    "options": [
      "A.市场指向",
      "B.原料指向",
      "C.技术指向",
      "D.劳动力指向"
    ]
  },
  {
    "id": "geo_rq_00209",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "电解铝厂钢铁厂",
    "answer": "C",
    "explain": "动力指向型耗能大",
    "options": [
      "A.市场指向",
      "B.原料指向",
      "C.动力指向",
      "D.技术指向"
    ]
  },
  {
    "id": "geo_rq_00210",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "服装厂电子装配",
    "answer": "A",
    "explain": "劳动密集型指向劳动力",
    "options": [
      "A.劳动力指向",
      "B.原料",
      "C.技术",
      "D.动力"
    ]
  },
  {
    "id": "geo_rq_00211",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "半导体飞机航天",
    "answer": "D",
    "explain": "技术指向",
    "options": [
      "A.原料",
      "B.市场",
      "C.动力",
      "D.技术指向"
    ]
  },
  {
    "id": "geo_rq_00212",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "工业集聚的好处",
    "answer": "D",
    "explain": "共用基础设施、加强协作、降低成本、便利运输",
    "options": [
      "A.共用基础设施",
      "B.加强协作",
      "C.降低成本",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00213",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "工业分散的原因",
    "answer": "A",
    "explain": "土地租金高、污染、协作面临新问题时",
    "options": [
      "A.土地租金上涨环境限制",
      "B.加强联系",
      "C.降低成本",
      "D.只在集中"
    ]
  },
  {
    "id": "geo_rq_00214",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "传统工业区的代表",
    "answer": "A",
    "explain": "德国鲁尔、英国伯明翰、美国五大湖",
    "options": [
      "A.德国鲁尔",
      "B.印度班加罗尔",
      "C.硅谷",
      "D.深圳"
    ]
  },
  {
    "id": "geo_rq_00215",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "新工业区",
    "answer": "D",
    "explain": "高科技型意大利新兴",
    "options": [
      "A.意大利新兴工业区",
      "B.美国硅谷",
      "C.印度班加罗尔",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00216",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "工业化对城市化的影响",
    "answer": "A",
    "explain": "工业化推动城市化",
    "options": [
      "A.工业化推动城市化",
      "B.阻碍城市化",
      "C.无关",
      "D.只对农业"
    ]
  },
  {
    "id": "geo_rq_00217",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "可持续发展工业模式",
    "answer": "A",
    "explain": "循环经济清洁生产",
    "options": [
      "A.清洁生产循环经济",
      "B.粗放",
      "C.高耗能",
      "D.高污染"
    ]
  },
  {
    "id": "geo_rq_00218",
    "manualId": "geo_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列属于市场指向型工业",
    "answer": "AC",
    "explain": "面向消费者",
    "options": [
      "A.啤酒厂",
      "B.电解铝",
      "C.家具厂",
      "D.电子装配"
    ]
  },
  {
    "id": "geo_rq_00219",
    "manualId": "geo_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "工业集聚一定利大于弊",
    "answer": "错",
    "explain": "可能造成环境污染和竞争加剧"
  },
  {
    "id": "geo_rq_00220",
    "manualId": "geo_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "工业指向类型包括____、____、____、____、____",
    "answer": "原料指向型、市场指向型、动力指向型、劳动力指向型、技术指向型",
    "explain": "五种类型"
  },
  {
    "id": "geo_rq_00221",
    "manualId": "geo_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "工业化推动____的进程",
    "answer": "城市化",
    "explain": "二者关系"
  },
  {
    "id": "geo_rq_00222",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "五大交通运输方式",
    "answer": "D",
    "explain": "公路铁路水运航空管道",
    "options": [
      "A.公路",
      "B.铁路",
      "C.水运航空",
      "D.以上都是加管道"
    ]
  },
  {
    "id": "geo_rq_00223",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "下列运输方式运量最大",
    "answer": "B",
    "explain": "水运运量最大",
    "options": [
      "A.公路",
      "B.水运",
      "C.铁路",
      "D.航空"
    ]
  },
  {
    "id": "geo_rq_00224",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "下列运输方式速度最快",
    "answer": "D",
    "explain": "航空最快",
    "options": [
      "A.公路",
      "B.铁路",
      "C.水运",
      "D.航空"
    ]
  },
  {
    "id": "geo_rq_00225",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "下列运输方式最灵活",
    "answer": "A",
    "explain": "公路适合门到门",
    "options": [
      "A.公路",
      "B.铁路",
      "C.水运",
      "D.航空"
    ]
  },
  {
    "id": "geo_rq_00226",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "下列运输方式适合大宗低值货物",
    "answer": "B",
    "explain": "水运运费最低适合煤矿石粮食",
    "options": [
      "A.航空",
      "B.水运",
      "C.公路",
      "D.管道限液气"
    ]
  },
  {
    "id": "geo_rq_00227",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "下列运输方式最适合石油天然气",
    "answer": "A",
    "explain": "管道运输专用",
    "options": [
      "A.管道",
      "B.公路",
      "C.航空",
      "D.铁路"
    ]
  },
  {
    "id": "geo_rq_00228",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "影响交通线区位的自然因素",
    "answer": "D",
    "explain": "地形、气候、水文、地质",
    "options": [
      "A.地形",
      "B.气候",
      "C.水文",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00229",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "影响交通线社会经济因素",
    "answer": "D",
    "explain": "经济、社会、技术等",
    "options": [
      "A.经济",
      "B.政治",
      "C.科技",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00230",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "城市交通问题",
    "answer": "D",
    "explain": "堵塞、事故、污染",
    "options": [
      "A.拥堵",
      "B.事故",
      "C.污染",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00231",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "解决城市交通拥堵",
    "answer": "D",
    "explain": "优化道路网、公共交通、错峰、地铁",
    "options": [
      "A.修更多路",
      "B.发展公共交通",
      "C.错峰出行",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00232",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "高速铁路的优势",
    "answer": "D",
    "explain": "速度快、运量大、安全、节能",
    "options": [
      "A.速度快",
      "B.运量大",
      "C.节能",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00233",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "港口区位选择",
    "answer": "D",
    "explain": "水域宽阔水深、避风、腹地广阔",
    "options": [
      "A.水深",
      "B.避风",
      "C.腹地广",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00234",
    "manualId": "geo_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列影响机场选址",
    "answer": "ABCD",
    "explain": "气象、地形、地质、噪声、经济",
    "options": [
      "A.气象条件",
      "B.地形平坦",
      "C.地质稳定",
      "D.远离城市但方便进出"
    ]
  },
  {
    "id": "geo_rq_00235",
    "manualId": "geo_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "航空运输适合低值大宗货物",
    "answer": "错",
    "explain": "航空适合高值小宗急件"
  },
  {
    "id": "geo_rq_00236",
    "manualId": "geo_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "五大运输方式中,运费最低的是____",
    "answer": "水运",
    "explain": "水运运费最低"
  },
  {
    "id": "geo_rq_00237",
    "manualId": "geo_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "五大运输方式中,速度最快的是____",
    "answer": "航空",
    "explain": "航空速度最快"
  },
  {
    "id": "geo_rq_00238",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "区域的概念",
    "answer": "A",
    "explain": "地表按一定指标划分的不同区域",
    "options": [
      "A.按一定指标划分的地球表面单位",
      "B.任意划分",
      "C.国家",
      "D.省份"
    ]
  },
  {
    "id": "geo_rq_00239",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "区域具有的特征",
    "answer": "D",
    "explain": "整体性、差异性、开放性、层次性",
    "options": [
      "A.整体性",
      "B.差异性",
      "C.开放性",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00240",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "中国三大自然区",
    "answer": "A",
    "explain": "东部季风、西北干旱、青藏高寒",
    "options": [
      "A.东部季风、西北干旱、青藏高寒",
      "B.按温度",
      "C.按GDP",
      "D.按人口"
    ]
  },
  {
    "id": "geo_rq_00241",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "中国东部季风区特点",
    "answer": "A",
    "explain": "降水多农业发达人口密",
    "options": [
      "A.降水多、人口密、农业发达",
      "B.干旱",
      "C.高寒",
      "D.没有农业"
    ]
  },
  {
    "id": "geo_rq_00242",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "中国西北干旱区特点",
    "answer": "A",
    "explain": "降水少畜牧业为主",
    "options": [
      "A.降水少畜牧业为主绿洲农业",
      "B.多雨",
      "C.高寒",
      "D.森林"
    ]
  },
  {
    "id": "geo_rq_00243",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "青藏高寒区特点",
    "answer": "A",
    "explain": "海拔高低温缺氧生态脆弱",
    "options": [
      "A.海拔高气温低生态脆弱",
      "B.低海拔",
      "C.湿热",
      "D.干旱"
    ]
  },
  {
    "id": "geo_rq_00244",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "南方地区特点",
    "answer": "A",
    "explain": "水热丰富水田为主",
    "options": "南方水稻水田"
  },
  {
    "id": "geo_rq_00245",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "北方地区特点",
    "answer": "A",
    "explain": "温带旱作农业为主",
    "options": [
      "A.温带旱作(小麦玉米)",
      "B.水稻",
      "C.畜牧",
      "D.高寒"
    ]
  },
  {
    "id": "geo_rq_00246",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "东北地区",
    "answer": "A",
    "explain": "温带季风湿润半湿润",
    "options": [
      "A.纬度高冬季寒冷,土壤肥沃",
      "B.干旱",
      "C.热带",
      "D.海洋"
    ]
  },
  {
    "id": "geo_rq_00247",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "西南喀斯特地区问题",
    "answer": "A",
    "explain": "石漠化",
    "options": [
      "A.石漠化",
      "B.风蚀",
      "C.沙漠化",
      "D.冰川消失"
    ]
  },
  {
    "id": "geo_rq_00248",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "东北地区商品粮基地优势",
    "answer": "D",
    "explain": "地广人稀,土壤肥沃,机械化程度高",
    "options": [
      "A.地广人稀",
      "B.黑土肥沃",
      "C.机械化高",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00249",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "西部大开发的原因",
    "answer": "D",
    "explain": "缩小东西差距,资源丰富,战略意义",
    "options": [
      "A.资源丰富",
      "B.战略意义",
      "C.缩小东西差距",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00250",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "南水北调",
    "answer": "A",
    "explain": "解决北方水资源不足",
    "options": [
      "A.解决北方缺水",
      "B.南方过水",
      "C.随意",
      "D.没有目标"
    ]
  },
  {
    "id": "geo_rq_00251",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "西气东输",
    "answer": "A",
    "explain": "西部天然气输送东部",
    "options": [
      "A.西部天然气→东部",
      "B.东部气西送",
      "C.随意",
      "D.海上运输"
    ]
  },
  {
    "id": "geo_rq_00252",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "西电东送",
    "answer": "A",
    "explain": "西部水电煤电送东部",
    "options": "西电东送三大通道"
  },
  {
    "id": "geo_rq_00253",
    "manualId": "geo_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列属于中国四大地理分区",
    "answer": "ABCD",
    "explain": "北方南方西北青藏",
    "options": [
      "A.北方地区",
      "B.南方地区",
      "C.西北地区",
      "D.青藏地区"
    ]
  },
  {
    "id": "geo_rq_00254",
    "manualId": "geo_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "区域内部具有相对一致性",
    "answer": "对",
    "explain": "区域内部差异较小"
  },
  {
    "id": "geo_rq_00255",
    "manualId": "geo_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "中国三大自然区包括____、____、____",
    "answer": "东部季风区、西北干旱半干旱区、青藏高寒区",
    "explain": "三大自然区"
  },
  {
    "id": "geo_rq_00256",
    "manualId": "geo_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "南水北调的东、中、西三线,____线已通水",
    "answer": "东和中",
    "explain": "实际通水情况"
  },
  {
    "id": "geo_rq_00257",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "下列属于可再生资源",
    "answer": "A",
    "explain": "水、生物、太阳能、风能",
    "options": [
      "A.太阳能",
      "B.石油",
      "C.煤炭",
      "D.铀"
    ]
  },
  {
    "id": "geo_rq_00258",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "下列属于非可再生资源",
    "answer": "B",
    "explain": "矿产化石燃料属于非可再生",
    "options": [
      "A.水",
      "B.煤炭",
      "C.风",
      "D.森林"
    ]
  },
  {
    "id": "geo_rq_00259",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "世界能源消费构成",
    "answer": "A",
    "explain": "石油煤炭天然气三大化石能源",
    "options": [
      "A.以化石能源为主",
      "B.太阳能为主",
      "C.核能",
      "D.水电"
    ]
  },
  {
    "id": "geo_rq_00260",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "下列属于新能源",
    "answer": "D",
    "explain": "太阳能风能核能地热潮汐",
    "options": [
      "A.太阳能",
      "B.风能",
      "C.核能",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00261",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不属于可再生能源",
    "answer": "A",
    "explain": "煤炭不可再生",
    "options": [
      "A.煤炭",
      "B.风能",
      "C.水能",
      "D.生物质能"
    ]
  },
  {
    "id": "geo_rq_00262",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "水资源紧缺原因",
    "answer": "D",
    "explain": "分布不均、时间不均、需求增大、浪费污染",
    "options": [
      "A.分布不均",
      "B.时间不均",
      "C.需求增大",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00263",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不属于水污染",
    "answer": "D",
    "explain": "地震不是水污染",
    "options": [
      "A.工业废水",
      "B.生活污水",
      "C.农业面源",
      "D.地震"
    ]
  },
  {
    "id": "geo_rq_00264",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "下列不属于全球性环境问题",
    "answer": "D",
    "explain": "地方性天气不是",
    "options": "全球性问题:全球变暖臭氧层破坏酸雨等"
  },
  {
    "id": "geo_rq_00265",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "全球变暖主要原因",
    "answer": "A",
    "explain": "化石燃料燃烧+森林破坏",
    "options": [
      "A.温室气体排放增加",
      "B.太阳增强",
      "C.火山",
      "D.海洋变暖"
    ]
  },
  {
    "id": "geo_rq_00266",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "应对全球变暖措施",
    "answer": "D",
    "explain": "减排、植树造林、节能、发展清洁能源",
    "options": [
      "A.减排",
      "B.植树",
      "C.清洁能源",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00267",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "臭氧层破坏原因",
    "answer": "A",
    "explain": "氟氯烃CFCs",
    "options": [
      "A.氟氯烃(氟利昂)",
      "B.CO₂",
      "C.SO₂",
      "D.NOx"
    ]
  },
  {
    "id": "geo_rq_00268",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "酸雨的元凶",
    "answer": "A",
    "explain": "SO₂和NOx",
    "options": [
      "A.SO₂和NOx",
      "B.CO₂",
      "C.O₃",
      "D.CH₄"
    ]
  },
  {
    "id": "geo_rq_00269",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "可持续发展的三个原则",
    "answer": "D",
    "explain": "公平性持续性共同性",
    "options": [
      "A.公平性",
      "B.持续性",
      "C.共同性",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00270",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列符合可持续发展的行为",
    "answer": "D",
    "explain": "低碳出行、节水、植树",
    "options": [
      "A.低碳出行",
      "B.节水",
      "C.植树",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00271",
    "manualId": "geo_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列属于我国主要环境问题",
    "answer": "ABCD",
    "explain": "水土流失荒漠化石漠化污染",
    "options": [
      "A.水土流失",
      "B.荒漠化",
      "C.石漠化",
      "D.水污染"
    ]
  },
  {
    "id": "geo_rq_00272",
    "manualId": "geo_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "可再生资源用之不竭",
    "answer": "错",
    "explain": "过度使用也会枯竭如森林"
  },
  {
    "id": "geo_rq_00273",
    "manualId": "geo_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "三大化石能源是____、____、____",
    "answer": "煤炭、石油、天然气",
    "explain": "化石能源"
  },
  {
    "id": "geo_rq_00274",
    "manualId": "geo_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "实现可持续发展需要遵循____、____、____三大原则",
    "answer": "公平性、持续性、共同性",
    "explain": "三大原则"
  },
  {
    "id": "geo_rq_00275",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "地图的三要素",
    "answer": "D",
    "explain": "方向、比例尺、图例(和注记)",
    "options": [
      "A.方向",
      "B.比例尺",
      "C.图例注记",
      "D.以上都是"
    ]
  },
  {
    "id": "geo_rq_00276",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "地图上方向的判定",
    "answer": "D",
    "explain": "一般上北下南左西右东,有指向标以指向标为准,有经纬网以经纬网为准",
    "options": [
      "A.上北下南",
      "B.指向标",
      "C.经纬网",
      "D.以上都可"
    ]
  },
  {
    "id": "geo_rq_00277",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "比例尺的形式",
    "answer": "D",
    "explain": "数字式、线段式、文字式",
    "options": [
      "A.数字式",
      "B.文字式",
      "C.线段式",
      "D.以上都有"
    ]
  },
  {
    "id": "geo_rq_00278",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "比例尺越大表示范围",
    "answer": "A",
    "explain": "比例尺大范围小内容详细",
    "options": [
      "A.范围小内容详",
      "B.范围大内容粗",
      "C.随意",
      "D.相同"
    ]
  },
  {
    "id": "geo_rq_00279",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "下列比例尺表示的范围最大",
    "answer": "A",
    "explain": "分母越大比例尺越小范围越大",
    "options": [
      "A.1:5000000",
      "B.1:100000",
      "C.1:10000",
      "D.1:1000"
    ]
  },
  {
    "id": "geo_rq_00280",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "等高线密集",
    "answer": "A",
    "explain": "等高线密坡陡",
    "options": [
      "A.坡陡",
      "B.坡缓",
      "C.平地",
      "D.没关系"
    ]
  },
  {
    "id": "geo_rq_00281",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "等高线闭合中间高",
    "answer": "A",
    "explain": "山地",
    "options": [
      "A.山峰",
      "B.洼地",
      "C.平原",
      "D.鞍部"
    ]
  },
  {
    "id": "geo_rq_00282",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "等高线闭合中间低",
    "answer": "B",
    "explain": "洼地",
    "options": [
      "A.山峰",
      "B.洼地",
      "C.鞍部",
      "D.山脊"
    ]
  },
  {
    "id": "geo_rq_00283",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "等高线弯曲向低处凸出",
    "answer": "A",
    "explain": "山脊",
    "options": [
      "A.山脊",
      "B.山谷",
      "C.鞍部",
      "D.悬崖"
    ]
  },
  {
    "id": "geo_rq_00284",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "等高线弯曲向高处凸出",
    "answer": "B",
    "explain": "山谷",
    "options": [
      "A.山脊",
      "B.山谷",
      "C.鞍部",
      "D.悬崖"
    ]
  },
  {
    "id": "geo_rq_00285",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "等高线重合",
    "answer": "D",
    "explain": "悬崖",
    "options": [
      "A.山脊",
      "B.山谷",
      "C.鞍部",
      "D.悬崖"
    ]
  },
  {
    "id": "geo_rq_00286",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "经度分东西",
    "answer": "A",
    "explain": "0°本初子午线",
    "options": [
      "A.本初子午线0°",
      "B.180°",
      "C.赤道",
      "D.北回归线"
    ]
  },
  {
    "id": "geo_rq_00287",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "纬度分南北",
    "answer": "A",
    "explain": "赤道0°",
    "options": [
      "A.赤道",
      "B.本初子午线",
      "C.180°",
      "D.回归线"
    ]
  },
  {
    "id": "geo_rq_00288",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "东经东度",
    "answer": "A",
    "explain": "东半球20°W-160°E,西半球其余",
    "options": [
      "A.东经越大越东",
      "B.相反",
      "C.随机",
      "D.以180°分"
    ]
  },
  {
    "id": "geo_rq_00289",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "距离越远经度差越大的纬线",
    "answer": "B",
    "explain": "经线间隔在赤道最大在极点最小",
    "options": [
      "A.高纬",
      "B.赤道",
      "C.极点",
      "D.随意"
    ]
  },
  {
    "id": "geo_rq_00290",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "经线全长",
    "answer": "B",
    "explain": "约2万km(半个赤道)",
    "options": [
      "A.4万",
      "B.约2万",
      "C.1万",
      "D.180°"
    ]
  },
  {
    "id": "geo_rq_00291",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "赤道周长",
    "answer": "A",
    "explain": "约4万km",
    "options": [
      "A.约4万",
      "B.2万",
      "C.1万",
      "D.100000"
    ]
  },
  {
    "id": "geo_rq_00292",
    "manualId": "geo_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列不属于地图三要素",
    "answer": "D",
    "explain": "比例尺方向图例是三要素",
    "options": [
      "A.比例尺",
      "B.方向",
      "C.图例",
      "D.颜色深浅"
    ]
  },
  {
    "id": "geo_rq_00293",
    "manualId": "geo_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "比例尺分母越大比例尺越大",
    "answer": "错",
    "explain": "分母大则比例尺小"
  },
  {
    "id": "geo_rq_00294",
    "manualId": "geo_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "地图三要素是____、____、____",
    "answer": "方向、比例尺、图例(与注记)",
    "explain": "地图基本元素"
  },
  {
    "id": "geo_rq_00295",
    "manualId": "geo_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "等高线密集表示____,稀疏表示____",
    "answer": "坡陡,坡缓",
    "explain": "等高线判读"
  },
  {
    "id": "geo_rq_00296",
    "manualId": "geo_m12",
    "type": "calc",
    "difficulty": "hard",
    "q": "比例尺1:100000,图上2cm实际距离",
    "answer": "2km",
    "explain": "2cm×100000=200000cm=2000m=2km"
  },
  {
    "id": "geo_rq_00297",
    "manualId": "geo_m12",
    "type": "calc",
    "difficulty": "hard",
    "q": "图上量得A到B距离3cm,比例尺1:500000,则实际距离",
    "answer": "15km",
    "explain": "3cm×500000=1500000cm=15km"
  },
  {
    "id": "geo_rq_00299",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳辐射密切相关的是",
    "answer": "B",
    "explain": "太阳辐射的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳辐射成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00300",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳辐射时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳辐射分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00301",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳辐射最准确的是",
    "answer": "D",
    "explain": "太阳辐射判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00302",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳辐射的地区差异说法正确",
    "answer": "B",
    "explain": "太阳辐射存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00304",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳活动密切相关的是",
    "answer": "B",
    "explain": "太阳活动的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳活动成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00305",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳活动时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳活动分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00306",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳活动最准确的是",
    "answer": "D",
    "explain": "太阳活动判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00307",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳活动的地区差异说法正确",
    "answer": "B",
    "explain": "太阳活动存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00309",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地球自转密切相关的是",
    "answer": "B",
    "explain": "地球自转的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地球自转成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00310",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地球自转时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地球自转分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00311",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地球自转最准确的是",
    "answer": "D",
    "explain": "地球自转判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00312",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球自转的地区差异说法正确",
    "answer": "B",
    "explain": "地球自转存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00314",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地球公转密切相关的是",
    "answer": "B",
    "explain": "地球公转的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地球公转成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00315",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地球公转时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地球公转分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00316",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地球公转最准确的是",
    "answer": "D",
    "explain": "地球公转判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00317",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球公转的地区差异说法正确",
    "answer": "B",
    "explain": "地球公转存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00319",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与黄赤交角密切相关的是",
    "answer": "B",
    "explain": "黄赤交角的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与黄赤交角成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00320",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析黄赤交角时,首先要考虑的因素是",
    "answer": "A",
    "explain": "黄赤交角分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00321",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断黄赤交角最准确的是",
    "answer": "D",
    "explain": "黄赤交角判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00322",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于黄赤交角的地区差异说法正确",
    "answer": "B",
    "explain": "黄赤交角存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00324",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与四季变化密切相关的是",
    "answer": "B",
    "explain": "四季变化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与四季变化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00325",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析四季变化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "四季变化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00326",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断四季变化最准确的是",
    "answer": "D",
    "explain": "四季变化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00327",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于四季变化的地区差异说法正确",
    "answer": "B",
    "explain": "四季变化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00329",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与昼夜交替密切相关的是",
    "answer": "B",
    "explain": "昼夜交替的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与昼夜交替成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00330",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析昼夜交替时,首先要考虑的因素是",
    "answer": "A",
    "explain": "昼夜交替分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00331",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断昼夜交替最准确的是",
    "answer": "D",
    "explain": "昼夜交替判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00332",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于昼夜交替的地区差异说法正确",
    "answer": "B",
    "explain": "昼夜交替存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00334",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地方时密切相关的是",
    "answer": "B",
    "explain": "地方时的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地方时成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00335",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地方时时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地方时分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00336",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地方时最准确的是",
    "answer": "D",
    "explain": "地方时判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00337",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地方时的地区差异说法正确",
    "answer": "B",
    "explain": "地方时存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00339",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与时区密切相关的是",
    "answer": "B",
    "explain": "时区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与时区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00340",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析时区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "时区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00341",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断时区最准确的是",
    "answer": "D",
    "explain": "时区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00342",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于时区的地区差异说法正确",
    "answer": "B",
    "explain": "时区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00344",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与正午太阳高度密切相关的是",
    "answer": "B",
    "explain": "正午太阳高度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与正午太阳高度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00345",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析正午太阳高度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "正午太阳高度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00346",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断正午太阳高度最准确的是",
    "answer": "D",
    "explain": "正午太阳高度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00347",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于正午太阳高度的地区差异说法正确",
    "answer": "B",
    "explain": "正午太阳高度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00349",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与昼夜长短密切相关的是",
    "answer": "B",
    "explain": "昼夜长短的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与昼夜长短成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00350",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析昼夜长短时,首先要考虑的因素是",
    "answer": "A",
    "explain": "昼夜长短分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00351",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断昼夜长短最准确的是",
    "answer": "D",
    "explain": "昼夜长短判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00352",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于昼夜长短的地区差异说法正确",
    "answer": "B",
    "explain": "昼夜长短存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00354",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与晨昏线密切相关的是",
    "answer": "B",
    "explain": "晨昏线的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与晨昏线成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00355",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析晨昏线时,首先要考虑的因素是",
    "answer": "A",
    "explain": "晨昏线分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00356",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断晨昏线最准确的是",
    "answer": "D",
    "explain": "晨昏线判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00357",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于晨昏线的地区差异说法正确",
    "answer": "B",
    "explain": "晨昏线存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00359",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地转偏向力密切相关的是",
    "answer": "B",
    "explain": "地转偏向力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地转偏向力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00360",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地转偏向力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地转偏向力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00361",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地转偏向力最准确的是",
    "answer": "D",
    "explain": "地转偏向力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00362",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地转偏向力的地区差异说法正确",
    "answer": "B",
    "explain": "地转偏向力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00364",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与五带划分密切相关的是",
    "answer": "B",
    "explain": "五带划分的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与五带划分成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00365",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析五带划分时,首先要考虑的因素是",
    "answer": "A",
    "explain": "五带划分分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00366",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断五带划分最准确的是",
    "answer": "D",
    "explain": "五带划分判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00367",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于五带划分的地区差异说法正确",
    "answer": "B",
    "explain": "五带划分存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00369",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳辐射密切相关的是",
    "answer": "B",
    "explain": "太阳辐射的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳辐射成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00370",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳辐射时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳辐射分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00371",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳辐射最准确的是",
    "answer": "D",
    "explain": "太阳辐射判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00372",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳辐射的地区差异说法正确",
    "answer": "B",
    "explain": "太阳辐射存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00374",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳活动密切相关的是",
    "answer": "B",
    "explain": "太阳活动的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳活动成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00375",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳活动时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳活动分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00376",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳活动最准确的是",
    "answer": "D",
    "explain": "太阳活动判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00377",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳活动的地区差异说法正确",
    "answer": "B",
    "explain": "太阳活动存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00379",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地球自转密切相关的是",
    "answer": "B",
    "explain": "地球自转的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地球自转成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00380",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地球自转时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地球自转分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00381",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地球自转最准确的是",
    "answer": "D",
    "explain": "地球自转判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00382",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球自转的地区差异说法正确",
    "answer": "B",
    "explain": "地球自转存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00384",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地球公转密切相关的是",
    "answer": "B",
    "explain": "地球公转的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地球公转成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00385",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地球公转时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地球公转分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00386",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地球公转最准确的是",
    "answer": "D",
    "explain": "地球公转判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00387",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球公转的地区差异说法正确",
    "answer": "B",
    "explain": "地球公转存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00389",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与黄赤交角密切相关的是",
    "answer": "B",
    "explain": "黄赤交角的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与黄赤交角成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00390",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析黄赤交角时,首先要考虑的因素是",
    "answer": "A",
    "explain": "黄赤交角分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00391",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断黄赤交角最准确的是",
    "answer": "D",
    "explain": "黄赤交角判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00392",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于黄赤交角的地区差异说法正确",
    "answer": "B",
    "explain": "黄赤交角存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00394",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与四季变化密切相关的是",
    "answer": "B",
    "explain": "四季变化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与四季变化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00395",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析四季变化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "四季变化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00396",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断四季变化最准确的是",
    "answer": "D",
    "explain": "四季变化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00397",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于四季变化的地区差异说法正确",
    "answer": "B",
    "explain": "四季变化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00399",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与昼夜交替密切相关的是",
    "answer": "B",
    "explain": "昼夜交替的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与昼夜交替成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00400",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析昼夜交替时,首先要考虑的因素是",
    "answer": "A",
    "explain": "昼夜交替分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00401",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断昼夜交替最准确的是",
    "answer": "D",
    "explain": "昼夜交替判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00402",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于昼夜交替的地区差异说法正确",
    "answer": "B",
    "explain": "昼夜交替存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00404",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地方时密切相关的是",
    "answer": "B",
    "explain": "地方时的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地方时成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00405",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地方时时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地方时分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00406",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地方时最准确的是",
    "answer": "D",
    "explain": "地方时判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00407",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地方时的地区差异说法正确",
    "answer": "B",
    "explain": "地方时存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00409",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与时区密切相关的是",
    "answer": "B",
    "explain": "时区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与时区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00410",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析时区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "时区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00411",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断时区最准确的是",
    "answer": "D",
    "explain": "时区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00412",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于时区的地区差异说法正确",
    "answer": "B",
    "explain": "时区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00414",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与正午太阳高度密切相关的是",
    "answer": "B",
    "explain": "正午太阳高度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与正午太阳高度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00415",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析正午太阳高度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "正午太阳高度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00416",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断正午太阳高度最准确的是",
    "answer": "D",
    "explain": "正午太阳高度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00417",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于正午太阳高度的地区差异说法正确",
    "answer": "B",
    "explain": "正午太阳高度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00419",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与昼夜长短密切相关的是",
    "answer": "B",
    "explain": "昼夜长短的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与昼夜长短成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00420",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析昼夜长短时,首先要考虑的因素是",
    "answer": "A",
    "explain": "昼夜长短分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00421",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断昼夜长短最准确的是",
    "answer": "D",
    "explain": "昼夜长短判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00422",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于昼夜长短的地区差异说法正确",
    "answer": "B",
    "explain": "昼夜长短存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00424",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与晨昏线密切相关的是",
    "answer": "B",
    "explain": "晨昏线的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与晨昏线成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00425",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析晨昏线时,首先要考虑的因素是",
    "answer": "A",
    "explain": "晨昏线分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00426",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断晨昏线最准确的是",
    "answer": "D",
    "explain": "晨昏线判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00427",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于晨昏线的地区差异说法正确",
    "answer": "B",
    "explain": "晨昏线存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00429",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地转偏向力密切相关的是",
    "answer": "B",
    "explain": "地转偏向力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地转偏向力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00430",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地转偏向力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地转偏向力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00431",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地转偏向力最准确的是",
    "answer": "D",
    "explain": "地转偏向力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00432",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地转偏向力的地区差异说法正确",
    "answer": "B",
    "explain": "地转偏向力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00434",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与五带划分密切相关的是",
    "answer": "B",
    "explain": "五带划分的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与五带划分成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00435",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析五带划分时,首先要考虑的因素是",
    "answer": "A",
    "explain": "五带划分分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00436",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断五带划分最准确的是",
    "answer": "D",
    "explain": "五带划分判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00437",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于五带划分的地区差异说法正确",
    "answer": "B",
    "explain": "五带划分存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00439",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳辐射密切相关的是",
    "answer": "B",
    "explain": "太阳辐射的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳辐射成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00440",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳辐射时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳辐射分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00441",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳辐射最准确的是",
    "answer": "D",
    "explain": "太阳辐射判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00442",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳辐射的地区差异说法正确",
    "answer": "B",
    "explain": "太阳辐射存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00444",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳活动密切相关的是",
    "answer": "B",
    "explain": "太阳活动的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳活动成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00445",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳活动时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳活动分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00446",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳活动最准确的是",
    "answer": "D",
    "explain": "太阳活动判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00447",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳活动的地区差异说法正确",
    "answer": "B",
    "explain": "太阳活动存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00449",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地球自转密切相关的是",
    "answer": "B",
    "explain": "地球自转的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地球自转成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00450",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地球自转时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地球自转分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00451",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地球自转最准确的是",
    "answer": "D",
    "explain": "地球自转判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00452",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球自转的地区差异说法正确",
    "answer": "B",
    "explain": "地球自转存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00454",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地球公转密切相关的是",
    "answer": "B",
    "explain": "地球公转的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地球公转成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00455",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地球公转时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地球公转分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00456",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地球公转最准确的是",
    "answer": "D",
    "explain": "地球公转判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00457",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地球公转的地区差异说法正确",
    "answer": "B",
    "explain": "地球公转存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00459",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与黄赤交角密切相关的是",
    "answer": "B",
    "explain": "黄赤交角的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与黄赤交角成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00460",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析黄赤交角时,首先要考虑的因素是",
    "answer": "A",
    "explain": "黄赤交角分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00461",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断黄赤交角最准确的是",
    "answer": "D",
    "explain": "黄赤交角判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00462",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于黄赤交角的地区差异说法正确",
    "answer": "B",
    "explain": "黄赤交角存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00464",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与四季变化密切相关的是",
    "answer": "B",
    "explain": "四季变化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与四季变化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00465",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析四季变化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "四季变化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00466",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断四季变化最准确的是",
    "answer": "D",
    "explain": "四季变化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00467",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于四季变化的地区差异说法正确",
    "answer": "B",
    "explain": "四季变化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00469",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与昼夜交替密切相关的是",
    "answer": "B",
    "explain": "昼夜交替的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与昼夜交替成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00470",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析昼夜交替时,首先要考虑的因素是",
    "answer": "A",
    "explain": "昼夜交替分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00471",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断昼夜交替最准确的是",
    "answer": "D",
    "explain": "昼夜交替判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00472",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于昼夜交替的地区差异说法正确",
    "answer": "B",
    "explain": "昼夜交替存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00474",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地方时密切相关的是",
    "answer": "B",
    "explain": "地方时的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地方时成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00475",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地方时时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地方时分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00476",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地方时最准确的是",
    "answer": "D",
    "explain": "地方时判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00477",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地方时的地区差异说法正确",
    "answer": "B",
    "explain": "地方时存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00479",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与时区密切相关的是",
    "answer": "B",
    "explain": "时区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与时区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00480",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析时区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "时区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00481",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断时区最准确的是",
    "answer": "D",
    "explain": "时区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00482",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于时区的地区差异说法正确",
    "answer": "B",
    "explain": "时区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00484",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与正午太阳高度密切相关的是",
    "answer": "B",
    "explain": "正午太阳高度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与正午太阳高度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00485",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析正午太阳高度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "正午太阳高度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00486",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断正午太阳高度最准确的是",
    "answer": "D",
    "explain": "正午太阳高度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00487",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于正午太阳高度的地区差异说法正确",
    "answer": "B",
    "explain": "正午太阳高度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00489",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与昼夜长短密切相关的是",
    "answer": "B",
    "explain": "昼夜长短的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与昼夜长短成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00490",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析昼夜长短时,首先要考虑的因素是",
    "answer": "A",
    "explain": "昼夜长短分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00491",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断昼夜长短最准确的是",
    "answer": "D",
    "explain": "昼夜长短判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00492",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于昼夜长短的地区差异说法正确",
    "answer": "B",
    "explain": "昼夜长短存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00494",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与晨昏线密切相关的是",
    "answer": "B",
    "explain": "晨昏线的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与晨昏线成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00495",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析晨昏线时,首先要考虑的因素是",
    "answer": "A",
    "explain": "晨昏线分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00496",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断晨昏线最准确的是",
    "answer": "D",
    "explain": "晨昏线判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00497",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于晨昏线的地区差异说法正确",
    "answer": "B",
    "explain": "晨昏线存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00499",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地转偏向力密切相关的是",
    "answer": "B",
    "explain": "地转偏向力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地转偏向力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00500",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地转偏向力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地转偏向力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00501",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地转偏向力最准确的是",
    "answer": "D",
    "explain": "地转偏向力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00502",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地转偏向力的地区差异说法正确",
    "answer": "B",
    "explain": "地转偏向力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00504",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与五带划分密切相关的是",
    "answer": "B",
    "explain": "五带划分的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与五带划分成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00505",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析五带划分时,首先要考虑的因素是",
    "answer": "A",
    "explain": "五带划分分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00506",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断五带划分最准确的是",
    "answer": "D",
    "explain": "五带划分判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00507",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于五带划分的地区差异说法正确",
    "answer": "B",
    "explain": "五带划分存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00509",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳辐射密切相关的是",
    "answer": "B",
    "explain": "太阳辐射的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳辐射成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00510",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳辐射时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳辐射分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00511",
    "manualId": "geo_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳辐射最准确的是",
    "answer": "D",
    "explain": "太阳辐射判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00513",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与对流层密切相关的是",
    "answer": "B",
    "explain": "对流层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与对流层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00514",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析对流层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "对流层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00515",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断对流层最准确的是",
    "answer": "D",
    "explain": "对流层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00516",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于对流层的地区差异说法正确",
    "answer": "B",
    "explain": "对流层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00518",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与平流层密切相关的是",
    "answer": "B",
    "explain": "平流层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与平流层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00519",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析平流层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "平流层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00520",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断平流层最准确的是",
    "answer": "D",
    "explain": "平流层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00521",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于平流层的地区差异说法正确",
    "answer": "B",
    "explain": "平流层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00523",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与大气受热过程密切相关的是",
    "answer": "B",
    "explain": "大气受热过程的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与大气受热过程成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00524",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析大气受热过程时,首先要考虑的因素是",
    "answer": "A",
    "explain": "大气受热过程分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00525",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断大气受热过程最准确的是",
    "answer": "D",
    "explain": "大气受热过程判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00526",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大气受热过程的地区差异说法正确",
    "answer": "B",
    "explain": "大气受热过程存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00528",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热力环流密切相关的是",
    "answer": "B",
    "explain": "热力环流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热力环流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00529",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热力环流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热力环流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00530",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热力环流最准确的是",
    "answer": "D",
    "explain": "热力环流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00531",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热力环流的地区差异说法正确",
    "answer": "B",
    "explain": "热力环流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00533",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气压带风带密切相关的是",
    "answer": "B",
    "explain": "气压带风带的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气压带风带成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00534",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气压带风带时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气压带风带分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00535",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气压带风带最准确的是",
    "answer": "D",
    "explain": "气压带风带判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00536",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气压带风带的地区差异说法正确",
    "answer": "B",
    "explain": "气压带风带存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00538",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三圈环流密切相关的是",
    "answer": "B",
    "explain": "三圈环流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三圈环流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00539",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三圈环流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三圈环流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00540",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三圈环流最准确的是",
    "answer": "D",
    "explain": "三圈环流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00541",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三圈环流的地区差异说法正确",
    "answer": "B",
    "explain": "三圈环流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00543",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与季风密切相关的是",
    "answer": "B",
    "explain": "季风的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与季风成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00544",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析季风时,首先要考虑的因素是",
    "answer": "A",
    "explain": "季风分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00545",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断季风最准确的是",
    "answer": "D",
    "explain": "季风判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00546",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于季风的地区差异说法正确",
    "answer": "B",
    "explain": "季风存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00548",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气团密切相关的是",
    "answer": "B",
    "explain": "气团的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气团成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00549",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气团时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气团分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00550",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气团最准确的是",
    "answer": "D",
    "explain": "气团判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00551",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气团的地区差异说法正确",
    "answer": "B",
    "explain": "气团存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00553",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与锋面密切相关的是",
    "answer": "B",
    "explain": "锋面的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与锋面成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00554",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析锋面时,首先要考虑的因素是",
    "answer": "A",
    "explain": "锋面分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00555",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断锋面最准确的是",
    "answer": "D",
    "explain": "锋面判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00556",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于锋面的地区差异说法正确",
    "answer": "B",
    "explain": "锋面存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00558",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气旋反气旋密切相关的是",
    "answer": "B",
    "explain": "气旋反气旋的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气旋反气旋成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00559",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气旋反气旋时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气旋反气旋分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00560",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气旋反气旋最准确的是",
    "answer": "D",
    "explain": "气旋反气旋判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00561",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气旋反气旋的地区差异说法正确",
    "answer": "B",
    "explain": "气旋反气旋存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00563",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气候类型密切相关的是",
    "answer": "B",
    "explain": "气候类型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气候类型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00564",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气候类型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气候类型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00565",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气候类型最准确的是",
    "answer": "D",
    "explain": "气候类型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00566",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候类型的地区差异说法正确",
    "answer": "B",
    "explain": "气候类型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00568",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地中海气候密切相关的是",
    "answer": "B",
    "explain": "地中海气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地中海气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00569",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地中海气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地中海气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00570",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地中海气候最准确的是",
    "answer": "D",
    "explain": "地中海气候判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00571",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地中海气候的地区差异说法正确",
    "answer": "B",
    "explain": "地中海气候存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00573",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热带雨林气候密切相关的是",
    "answer": "B",
    "explain": "热带雨林气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热带雨林气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00574",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热带雨林气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热带雨林气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00575",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热带雨林气候最准确的是",
    "answer": "D",
    "explain": "热带雨林气候判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00576",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热带雨林气候的地区差异说法正确",
    "answer": "B",
    "explain": "热带雨林气候存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00578",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与温带海洋性气候密切相关的是",
    "answer": "B",
    "explain": "温带海洋性气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与温带海洋性气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00579",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析温带海洋性气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "温带海洋性气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00580",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断温带海洋性气候最准确的是",
    "answer": "D",
    "explain": "温带海洋性气候判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00581",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于温带海洋性气候的地区差异说法正确",
    "answer": "B",
    "explain": "温带海洋性气候存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00583",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与冷锋暖锋密切相关的是",
    "answer": "B",
    "explain": "冷锋暖锋的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与冷锋暖锋成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00584",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析冷锋暖锋时,首先要考虑的因素是",
    "answer": "A",
    "explain": "冷锋暖锋分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00585",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断冷锋暖锋最准确的是",
    "answer": "D",
    "explain": "冷锋暖锋判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00586",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于冷锋暖锋的地区差异说法正确",
    "answer": "B",
    "explain": "冷锋暖锋存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00588",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与对流层密切相关的是",
    "answer": "B",
    "explain": "对流层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与对流层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00589",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析对流层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "对流层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00590",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断对流层最准确的是",
    "answer": "D",
    "explain": "对流层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00591",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于对流层的地区差异说法正确",
    "answer": "B",
    "explain": "对流层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00593",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与平流层密切相关的是",
    "answer": "B",
    "explain": "平流层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与平流层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00594",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析平流层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "平流层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00595",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断平流层最准确的是",
    "answer": "D",
    "explain": "平流层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00596",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于平流层的地区差异说法正确",
    "answer": "B",
    "explain": "平流层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00598",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与大气受热过程密切相关的是",
    "answer": "B",
    "explain": "大气受热过程的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与大气受热过程成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00599",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析大气受热过程时,首先要考虑的因素是",
    "answer": "A",
    "explain": "大气受热过程分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00600",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断大气受热过程最准确的是",
    "answer": "D",
    "explain": "大气受热过程判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00601",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大气受热过程的地区差异说法正确",
    "answer": "B",
    "explain": "大气受热过程存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00603",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热力环流密切相关的是",
    "answer": "B",
    "explain": "热力环流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热力环流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00604",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热力环流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热力环流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00605",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热力环流最准确的是",
    "answer": "D",
    "explain": "热力环流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00606",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热力环流的地区差异说法正确",
    "answer": "B",
    "explain": "热力环流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00608",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气压带风带密切相关的是",
    "answer": "B",
    "explain": "气压带风带的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气压带风带成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00609",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气压带风带时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气压带风带分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00610",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气压带风带最准确的是",
    "answer": "D",
    "explain": "气压带风带判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00611",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气压带风带的地区差异说法正确",
    "answer": "B",
    "explain": "气压带风带存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00613",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三圈环流密切相关的是",
    "answer": "B",
    "explain": "三圈环流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三圈环流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00614",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三圈环流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三圈环流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00615",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三圈环流最准确的是",
    "answer": "D",
    "explain": "三圈环流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00616",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三圈环流的地区差异说法正确",
    "answer": "B",
    "explain": "三圈环流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00618",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与季风密切相关的是",
    "answer": "B",
    "explain": "季风的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与季风成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00619",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析季风时,首先要考虑的因素是",
    "answer": "A",
    "explain": "季风分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00620",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断季风最准确的是",
    "answer": "D",
    "explain": "季风判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00621",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于季风的地区差异说法正确",
    "answer": "B",
    "explain": "季风存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00623",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气团密切相关的是",
    "answer": "B",
    "explain": "气团的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气团成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00624",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气团时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气团分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00625",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气团最准确的是",
    "answer": "D",
    "explain": "气团判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00626",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气团的地区差异说法正确",
    "answer": "B",
    "explain": "气团存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00628",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与锋面密切相关的是",
    "answer": "B",
    "explain": "锋面的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与锋面成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00629",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析锋面时,首先要考虑的因素是",
    "answer": "A",
    "explain": "锋面分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00630",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断锋面最准确的是",
    "answer": "D",
    "explain": "锋面判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00631",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于锋面的地区差异说法正确",
    "answer": "B",
    "explain": "锋面存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00633",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气旋反气旋密切相关的是",
    "answer": "B",
    "explain": "气旋反气旋的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气旋反气旋成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00634",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气旋反气旋时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气旋反气旋分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00635",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气旋反气旋最准确的是",
    "answer": "D",
    "explain": "气旋反气旋判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00636",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气旋反气旋的地区差异说法正确",
    "answer": "B",
    "explain": "气旋反气旋存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00638",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气候类型密切相关的是",
    "answer": "B",
    "explain": "气候类型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气候类型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00639",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气候类型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气候类型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00640",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气候类型最准确的是",
    "answer": "D",
    "explain": "气候类型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00641",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候类型的地区差异说法正确",
    "answer": "B",
    "explain": "气候类型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00643",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地中海气候密切相关的是",
    "answer": "B",
    "explain": "地中海气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地中海气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00644",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地中海气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地中海气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00645",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地中海气候最准确的是",
    "answer": "D",
    "explain": "地中海气候判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00646",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地中海气候的地区差异说法正确",
    "answer": "B",
    "explain": "地中海气候存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00648",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热带雨林气候密切相关的是",
    "answer": "B",
    "explain": "热带雨林气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热带雨林气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00649",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热带雨林气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热带雨林气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00650",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热带雨林气候最准确的是",
    "answer": "D",
    "explain": "热带雨林气候判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00651",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热带雨林气候的地区差异说法正确",
    "answer": "B",
    "explain": "热带雨林气候存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00653",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与温带海洋性气候密切相关的是",
    "answer": "B",
    "explain": "温带海洋性气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与温带海洋性气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00654",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析温带海洋性气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "温带海洋性气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00655",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断温带海洋性气候最准确的是",
    "answer": "D",
    "explain": "温带海洋性气候判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00656",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于温带海洋性气候的地区差异说法正确",
    "answer": "B",
    "explain": "温带海洋性气候存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00658",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与冷锋暖锋密切相关的是",
    "answer": "B",
    "explain": "冷锋暖锋的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与冷锋暖锋成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00659",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析冷锋暖锋时,首先要考虑的因素是",
    "answer": "A",
    "explain": "冷锋暖锋分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00660",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断冷锋暖锋最准确的是",
    "answer": "D",
    "explain": "冷锋暖锋判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00661",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于冷锋暖锋的地区差异说法正确",
    "answer": "B",
    "explain": "冷锋暖锋存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00663",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与对流层密切相关的是",
    "answer": "B",
    "explain": "对流层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与对流层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00664",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析对流层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "对流层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00665",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断对流层最准确的是",
    "answer": "D",
    "explain": "对流层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00666",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于对流层的地区差异说法正确",
    "answer": "B",
    "explain": "对流层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00668",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与平流层密切相关的是",
    "answer": "B",
    "explain": "平流层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与平流层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00669",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析平流层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "平流层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00670",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断平流层最准确的是",
    "answer": "D",
    "explain": "平流层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00671",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于平流层的地区差异说法正确",
    "answer": "B",
    "explain": "平流层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00673",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与大气受热过程密切相关的是",
    "answer": "B",
    "explain": "大气受热过程的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与大气受热过程成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00674",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析大气受热过程时,首先要考虑的因素是",
    "answer": "A",
    "explain": "大气受热过程分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00675",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断大气受热过程最准确的是",
    "answer": "D",
    "explain": "大气受热过程判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00676",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大气受热过程的地区差异说法正确",
    "answer": "B",
    "explain": "大气受热过程存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00678",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热力环流密切相关的是",
    "answer": "B",
    "explain": "热力环流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热力环流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00679",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热力环流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热力环流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00680",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热力环流最准确的是",
    "answer": "D",
    "explain": "热力环流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00681",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热力环流的地区差异说法正确",
    "answer": "B",
    "explain": "热力环流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00683",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气压带风带密切相关的是",
    "answer": "B",
    "explain": "气压带风带的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气压带风带成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00684",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气压带风带时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气压带风带分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00685",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气压带风带最准确的是",
    "answer": "D",
    "explain": "气压带风带判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00686",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气压带风带的地区差异说法正确",
    "answer": "B",
    "explain": "气压带风带存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00688",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三圈环流密切相关的是",
    "answer": "B",
    "explain": "三圈环流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三圈环流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00689",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三圈环流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三圈环流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00690",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三圈环流最准确的是",
    "answer": "D",
    "explain": "三圈环流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00691",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三圈环流的地区差异说法正确",
    "answer": "B",
    "explain": "三圈环流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00693",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与季风密切相关的是",
    "answer": "B",
    "explain": "季风的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与季风成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00694",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析季风时,首先要考虑的因素是",
    "answer": "A",
    "explain": "季风分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00695",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断季风最准确的是",
    "answer": "D",
    "explain": "季风判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00696",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于季风的地区差异说法正确",
    "answer": "B",
    "explain": "季风存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00698",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气团密切相关的是",
    "answer": "B",
    "explain": "气团的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气团成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00699",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气团时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气团分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00700",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气团最准确的是",
    "answer": "D",
    "explain": "气团判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00701",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气团的地区差异说法正确",
    "answer": "B",
    "explain": "气团存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00703",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与锋面密切相关的是",
    "answer": "B",
    "explain": "锋面的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与锋面成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00704",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析锋面时,首先要考虑的因素是",
    "answer": "A",
    "explain": "锋面分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00705",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断锋面最准确的是",
    "answer": "D",
    "explain": "锋面判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00706",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于锋面的地区差异说法正确",
    "answer": "B",
    "explain": "锋面存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00708",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气旋反气旋密切相关的是",
    "answer": "B",
    "explain": "气旋反气旋的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气旋反气旋成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00709",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气旋反气旋时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气旋反气旋分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00710",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气旋反气旋最准确的是",
    "answer": "D",
    "explain": "气旋反气旋判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00711",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气旋反气旋的地区差异说法正确",
    "answer": "B",
    "explain": "气旋反气旋存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00713",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气候类型密切相关的是",
    "answer": "B",
    "explain": "气候类型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气候类型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00714",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气候类型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气候类型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00715",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气候类型最准确的是",
    "answer": "D",
    "explain": "气候类型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00716",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候类型的地区差异说法正确",
    "answer": "B",
    "explain": "气候类型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00718",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地中海气候密切相关的是",
    "answer": "B",
    "explain": "地中海气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地中海气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00719",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地中海气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地中海气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00720",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地中海气候最准确的是",
    "answer": "D",
    "explain": "地中海气候判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00721",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地中海气候的地区差异说法正确",
    "answer": "B",
    "explain": "地中海气候存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00723",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热带雨林气候密切相关的是",
    "answer": "B",
    "explain": "热带雨林气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热带雨林气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00724",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热带雨林气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热带雨林气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00725",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热带雨林气候最准确的是",
    "answer": "D",
    "explain": "热带雨林气候判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00726",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热带雨林气候的地区差异说法正确",
    "answer": "B",
    "explain": "热带雨林气候存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00728",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与温带海洋性气候密切相关的是",
    "answer": "B",
    "explain": "温带海洋性气候的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与温带海洋性气候成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00729",
    "manualId": "geo_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "分析温带海洋性气候时,首先要考虑的因素是",
    "answer": "A",
    "explain": "温带海洋性气候分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00731",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水循环密切相关的是",
    "answer": "B",
    "explain": "水循环的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水循环成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00732",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水循环时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水循环分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00733",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水循环最准确的是",
    "answer": "D",
    "explain": "水循环判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00734",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水循环的地区差异说法正确",
    "answer": "B",
    "explain": "水循环存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00736",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水资源密切相关的是",
    "answer": "B",
    "explain": "水资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00737",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00738",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水资源最准确的是",
    "answer": "D",
    "explain": "水资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00739",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源的地区差异说法正确",
    "answer": "B",
    "explain": "水资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00741",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与洋流密切相关的是",
    "answer": "B",
    "explain": "洋流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与洋流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00742",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析洋流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "洋流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00743",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断洋流最准确的是",
    "answer": "D",
    "explain": "洋流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00744",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流的地区差异说法正确",
    "answer": "B",
    "explain": "洋流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00746",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与河流补给密切相关的是",
    "answer": "B",
    "explain": "河流补给的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与河流补给成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00747",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析河流补给时,首先要考虑的因素是",
    "answer": "A",
    "explain": "河流补给分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00748",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断河流补给最准确的是",
    "answer": "D",
    "explain": "河流补给判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00749",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流补给的地区差异说法正确",
    "answer": "B",
    "explain": "河流补给存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00751",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与内力作用密切相关的是",
    "answer": "B",
    "explain": "内力作用的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与内力作用成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00752",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析内力作用时,首先要考虑的因素是",
    "answer": "A",
    "explain": "内力作用分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00753",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断内力作用最准确的是",
    "answer": "D",
    "explain": "内力作用判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00754",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于内力作用的地区差异说法正确",
    "answer": "B",
    "explain": "内力作用存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00756",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与外力作用密切相关的是",
    "answer": "B",
    "explain": "外力作用的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与外力作用成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00757",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析外力作用时,首先要考虑的因素是",
    "answer": "A",
    "explain": "外力作用分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00758",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断外力作用最准确的是",
    "answer": "D",
    "explain": "外力作用判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00759",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于外力作用的地区差异说法正确",
    "answer": "B",
    "explain": "外力作用存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00761",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与板块构造密切相关的是",
    "answer": "B",
    "explain": "板块构造的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与板块构造成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00762",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析板块构造时,首先要考虑的因素是",
    "answer": "A",
    "explain": "板块构造分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00763",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断板块构造最准确的是",
    "answer": "D",
    "explain": "板块构造判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00764",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于板块构造的地区差异说法正确",
    "answer": "B",
    "explain": "板块构造存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00766",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与褶皱断层密切相关的是",
    "answer": "B",
    "explain": "褶皱断层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与褶皱断层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00767",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析褶皱断层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "褶皱断层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00768",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断褶皱断层最准确的是",
    "answer": "D",
    "explain": "褶皱断层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00769",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于褶皱断层的地区差异说法正确",
    "answer": "B",
    "explain": "褶皱断层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00771",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与流水地貌密切相关的是",
    "answer": "B",
    "explain": "流水地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与流水地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00772",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析流水地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "流水地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00773",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断流水地貌最准确的是",
    "answer": "D",
    "explain": "流水地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00774",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于流水地貌的地区差异说法正确",
    "answer": "B",
    "explain": "流水地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00776",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与风力地貌密切相关的是",
    "answer": "B",
    "explain": "风力地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与风力地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00777",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析风力地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "风力地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00778",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断风力地貌最准确的是",
    "answer": "D",
    "explain": "风力地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00779",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风力地貌的地区差异说法正确",
    "answer": "B",
    "explain": "风力地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00781",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与冰川地貌密切相关的是",
    "answer": "B",
    "explain": "冰川地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与冰川地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00782",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析冰川地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "冰川地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00783",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断冰川地貌最准确的是",
    "answer": "D",
    "explain": "冰川地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00784",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于冰川地貌的地区差异说法正确",
    "answer": "B",
    "explain": "冰川地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00786",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与喀斯特地貌密切相关的是",
    "answer": "B",
    "explain": "喀斯特地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与喀斯特地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00787",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析喀斯特地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "喀斯特地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00788",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断喀斯特地貌最准确的是",
    "answer": "D",
    "explain": "喀斯特地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00789",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于喀斯特地貌的地区差异说法正确",
    "answer": "B",
    "explain": "喀斯特地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00791",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水循环密切相关的是",
    "answer": "B",
    "explain": "水循环的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水循环成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00792",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水循环时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水循环分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00793",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水循环最准确的是",
    "answer": "D",
    "explain": "水循环判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00794",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水循环的地区差异说法正确",
    "answer": "B",
    "explain": "水循环存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00796",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水资源密切相关的是",
    "answer": "B",
    "explain": "水资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00797",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00798",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水资源最准确的是",
    "answer": "D",
    "explain": "水资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00799",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源的地区差异说法正确",
    "answer": "B",
    "explain": "水资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00801",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与洋流密切相关的是",
    "answer": "B",
    "explain": "洋流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与洋流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00802",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析洋流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "洋流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00803",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断洋流最准确的是",
    "answer": "D",
    "explain": "洋流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00804",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流的地区差异说法正确",
    "answer": "B",
    "explain": "洋流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00806",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与河流补给密切相关的是",
    "answer": "B",
    "explain": "河流补给的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与河流补给成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00807",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析河流补给时,首先要考虑的因素是",
    "answer": "A",
    "explain": "河流补给分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00808",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断河流补给最准确的是",
    "answer": "D",
    "explain": "河流补给判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00809",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流补给的地区差异说法正确",
    "answer": "B",
    "explain": "河流补给存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00811",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与内力作用密切相关的是",
    "answer": "B",
    "explain": "内力作用的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与内力作用成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00812",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析内力作用时,首先要考虑的因素是",
    "answer": "A",
    "explain": "内力作用分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00813",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断内力作用最准确的是",
    "answer": "D",
    "explain": "内力作用判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00814",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于内力作用的地区差异说法正确",
    "answer": "B",
    "explain": "内力作用存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00816",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与外力作用密切相关的是",
    "answer": "B",
    "explain": "外力作用的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与外力作用成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00817",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析外力作用时,首先要考虑的因素是",
    "answer": "A",
    "explain": "外力作用分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00818",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断外力作用最准确的是",
    "answer": "D",
    "explain": "外力作用判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00819",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于外力作用的地区差异说法正确",
    "answer": "B",
    "explain": "外力作用存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00821",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与板块构造密切相关的是",
    "answer": "B",
    "explain": "板块构造的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与板块构造成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00822",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析板块构造时,首先要考虑的因素是",
    "answer": "A",
    "explain": "板块构造分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00823",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断板块构造最准确的是",
    "answer": "D",
    "explain": "板块构造判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00824",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于板块构造的地区差异说法正确",
    "answer": "B",
    "explain": "板块构造存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00826",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与褶皱断层密切相关的是",
    "answer": "B",
    "explain": "褶皱断层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与褶皱断层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00827",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析褶皱断层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "褶皱断层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00828",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断褶皱断层最准确的是",
    "answer": "D",
    "explain": "褶皱断层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00829",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于褶皱断层的地区差异说法正确",
    "answer": "B",
    "explain": "褶皱断层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00831",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与流水地貌密切相关的是",
    "answer": "B",
    "explain": "流水地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与流水地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00832",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析流水地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "流水地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00833",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断流水地貌最准确的是",
    "answer": "D",
    "explain": "流水地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00834",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于流水地貌的地区差异说法正确",
    "answer": "B",
    "explain": "流水地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00836",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与风力地貌密切相关的是",
    "answer": "B",
    "explain": "风力地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与风力地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00837",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析风力地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "风力地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00838",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断风力地貌最准确的是",
    "answer": "D",
    "explain": "风力地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00839",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风力地貌的地区差异说法正确",
    "answer": "B",
    "explain": "风力地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00841",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与冰川地貌密切相关的是",
    "answer": "B",
    "explain": "冰川地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与冰川地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00842",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析冰川地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "冰川地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00843",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断冰川地貌最准确的是",
    "answer": "D",
    "explain": "冰川地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00844",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于冰川地貌的地区差异说法正确",
    "answer": "B",
    "explain": "冰川地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00846",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与喀斯特地貌密切相关的是",
    "answer": "B",
    "explain": "喀斯特地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与喀斯特地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00847",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析喀斯特地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "喀斯特地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00848",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断喀斯特地貌最准确的是",
    "answer": "D",
    "explain": "喀斯特地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00849",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于喀斯特地貌的地区差异说法正确",
    "answer": "B",
    "explain": "喀斯特地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00851",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水循环密切相关的是",
    "answer": "B",
    "explain": "水循环的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水循环成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00852",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水循环时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水循环分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00853",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水循环最准确的是",
    "answer": "D",
    "explain": "水循环判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00854",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水循环的地区差异说法正确",
    "answer": "B",
    "explain": "水循环存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00856",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水资源密切相关的是",
    "answer": "B",
    "explain": "水资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00857",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00858",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水资源最准确的是",
    "answer": "D",
    "explain": "水资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00859",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源的地区差异说法正确",
    "answer": "B",
    "explain": "水资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00861",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与洋流密切相关的是",
    "answer": "B",
    "explain": "洋流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与洋流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00862",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析洋流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "洋流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00863",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断洋流最准确的是",
    "answer": "D",
    "explain": "洋流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00864",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流的地区差异说法正确",
    "answer": "B",
    "explain": "洋流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00866",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与河流补给密切相关的是",
    "answer": "B",
    "explain": "河流补给的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与河流补给成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00867",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析河流补给时,首先要考虑的因素是",
    "answer": "A",
    "explain": "河流补给分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00868",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断河流补给最准确的是",
    "answer": "D",
    "explain": "河流补给判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00869",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流补给的地区差异说法正确",
    "answer": "B",
    "explain": "河流补给存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00871",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与内力作用密切相关的是",
    "answer": "B",
    "explain": "内力作用的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与内力作用成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00872",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析内力作用时,首先要考虑的因素是",
    "answer": "A",
    "explain": "内力作用分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00873",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断内力作用最准确的是",
    "answer": "D",
    "explain": "内力作用判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00874",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于内力作用的地区差异说法正确",
    "answer": "B",
    "explain": "内力作用存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00876",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与外力作用密切相关的是",
    "answer": "B",
    "explain": "外力作用的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与外力作用成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00877",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析外力作用时,首先要考虑的因素是",
    "answer": "A",
    "explain": "外力作用分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00878",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断外力作用最准确的是",
    "answer": "D",
    "explain": "外力作用判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00879",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于外力作用的地区差异说法正确",
    "answer": "B",
    "explain": "外力作用存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00881",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与板块构造密切相关的是",
    "answer": "B",
    "explain": "板块构造的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与板块构造成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00882",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析板块构造时,首先要考虑的因素是",
    "answer": "A",
    "explain": "板块构造分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00883",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断板块构造最准确的是",
    "answer": "D",
    "explain": "板块构造判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00884",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于板块构造的地区差异说法正确",
    "answer": "B",
    "explain": "板块构造存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00886",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与褶皱断层密切相关的是",
    "answer": "B",
    "explain": "褶皱断层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与褶皱断层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00887",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析褶皱断层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "褶皱断层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00888",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断褶皱断层最准确的是",
    "answer": "D",
    "explain": "褶皱断层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00889",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于褶皱断层的地区差异说法正确",
    "answer": "B",
    "explain": "褶皱断层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00891",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与流水地貌密切相关的是",
    "answer": "B",
    "explain": "流水地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与流水地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00892",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析流水地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "流水地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00893",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断流水地貌最准确的是",
    "answer": "D",
    "explain": "流水地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00894",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于流水地貌的地区差异说法正确",
    "answer": "B",
    "explain": "流水地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00896",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与风力地貌密切相关的是",
    "answer": "B",
    "explain": "风力地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与风力地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00897",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析风力地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "风力地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00898",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断风力地貌最准确的是",
    "answer": "D",
    "explain": "风力地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00899",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风力地貌的地区差异说法正确",
    "answer": "B",
    "explain": "风力地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00901",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与冰川地貌密切相关的是",
    "answer": "B",
    "explain": "冰川地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与冰川地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00902",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析冰川地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "冰川地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00903",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断冰川地貌最准确的是",
    "answer": "D",
    "explain": "冰川地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00904",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于冰川地貌的地区差异说法正确",
    "answer": "B",
    "explain": "冰川地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00906",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与喀斯特地貌密切相关的是",
    "answer": "B",
    "explain": "喀斯特地貌的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与喀斯特地貌成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00907",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析喀斯特地貌时,首先要考虑的因素是",
    "answer": "A",
    "explain": "喀斯特地貌分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00908",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断喀斯特地貌最准确的是",
    "answer": "D",
    "explain": "喀斯特地貌判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00909",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于喀斯特地貌的地区差异说法正确",
    "answer": "B",
    "explain": "喀斯特地貌存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00911",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水循环密切相关的是",
    "answer": "B",
    "explain": "水循环的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水循环成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00912",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水循环时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水循环分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00913",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水循环最准确的是",
    "answer": "D",
    "explain": "水循环判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00914",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水循环的地区差异说法正确",
    "answer": "B",
    "explain": "水循环存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00916",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水资源密切相关的是",
    "answer": "B",
    "explain": "水资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00917",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00918",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水资源最准确的是",
    "answer": "D",
    "explain": "水资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00919",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源的地区差异说法正确",
    "answer": "B",
    "explain": "水资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00921",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与洋流密切相关的是",
    "answer": "B",
    "explain": "洋流的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与洋流成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00922",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析洋流时,首先要考虑的因素是",
    "answer": "A",
    "explain": "洋流分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00923",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断洋流最准确的是",
    "answer": "D",
    "explain": "洋流判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00924",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流的地区差异说法正确",
    "answer": "B",
    "explain": "洋流存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00926",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与河流补给密切相关的是",
    "answer": "B",
    "explain": "河流补给的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与河流补给成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00927",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析河流补给时,首先要考虑的因素是",
    "answer": "A",
    "explain": "河流补给分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00928",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断河流补给最准确的是",
    "answer": "D",
    "explain": "河流补给判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00929",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流补给的地区差异说法正确",
    "answer": "B",
    "explain": "河流补给存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00931",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与内力作用密切相关的是",
    "answer": "B",
    "explain": "内力作用的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与内力作用成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00932",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析内力作用时,首先要考虑的因素是",
    "answer": "A",
    "explain": "内力作用分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00933",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断内力作用最准确的是",
    "answer": "D",
    "explain": "内力作用判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00934",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于内力作用的地区差异说法正确",
    "answer": "B",
    "explain": "内力作用存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00936",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与外力作用密切相关的是",
    "answer": "B",
    "explain": "外力作用的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与外力作用成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00937",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析外力作用时,首先要考虑的因素是",
    "answer": "A",
    "explain": "外力作用分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00938",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断外力作用最准确的是",
    "answer": "D",
    "explain": "外力作用判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00939",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于外力作用的地区差异说法正确",
    "answer": "B",
    "explain": "外力作用存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00941",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与板块构造密切相关的是",
    "answer": "B",
    "explain": "板块构造的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与板块构造成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00942",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析板块构造时,首先要考虑的因素是",
    "answer": "A",
    "explain": "板块构造分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00943",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断板块构造最准确的是",
    "answer": "D",
    "explain": "板块构造判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00944",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于板块构造的地区差异说法正确",
    "answer": "B",
    "explain": "板块构造存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00946",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与褶皱断层密切相关的是",
    "answer": "B",
    "explain": "褶皱断层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与褶皱断层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00947",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "分析褶皱断层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "褶皱断层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00948",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断褶皱断层最准确的是",
    "answer": "D",
    "explain": "褶皱断层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00949",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于褶皱断层的地区差异说法正确",
    "answer": "B",
    "explain": "褶皱断层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00952",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤组成密切相关的是",
    "answer": "B",
    "explain": "土壤组成的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤组成成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00953",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤组成时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤组成分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00954",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤组成最准确的是",
    "answer": "D",
    "explain": "土壤组成判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00955",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤组成的地区差异说法正确",
    "answer": "B",
    "explain": "土壤组成存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00957",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与有机质密切相关的是",
    "answer": "B",
    "explain": "有机质的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与有机质成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00958",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析有机质时,首先要考虑的因素是",
    "answer": "A",
    "explain": "有机质分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00959",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断有机质最准确的是",
    "answer": "D",
    "explain": "有机质判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00960",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于有机质的地区差异说法正确",
    "answer": "B",
    "explain": "有机质存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00962",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤类型密切相关的是",
    "answer": "B",
    "explain": "土壤类型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤类型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00963",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤类型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤类型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00964",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤类型最准确的是",
    "answer": "D",
    "explain": "土壤类型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00965",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤类型的地区差异说法正确",
    "answer": "B",
    "explain": "土壤类型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00967",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤肥力密切相关的是",
    "answer": "B",
    "explain": "土壤肥力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤肥力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00968",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤肥力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤肥力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00969",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤肥力最准确的是",
    "answer": "D",
    "explain": "土壤肥力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00970",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤肥力的地区差异说法正确",
    "answer": "B",
    "explain": "土壤肥力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00972",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与森林生态密切相关的是",
    "answer": "B",
    "explain": "森林生态的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与森林生态成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00973",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析森林生态时,首先要考虑的因素是",
    "answer": "A",
    "explain": "森林生态分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00974",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断森林生态最准确的是",
    "answer": "D",
    "explain": "森林生态判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00975",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于森林生态的地区差异说法正确",
    "answer": "B",
    "explain": "森林生态存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00977",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热带雨林密切相关的是",
    "answer": "B",
    "explain": "热带雨林的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热带雨林成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00978",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热带雨林时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热带雨林分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00979",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热带雨林最准确的是",
    "answer": "D",
    "explain": "热带雨林判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00980",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热带雨林的地区差异说法正确",
    "answer": "B",
    "explain": "热带雨林存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00982",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与草原密切相关的是",
    "answer": "B",
    "explain": "草原的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与草原成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00983",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析草原时,首先要考虑的因素是",
    "answer": "A",
    "explain": "草原分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00984",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断草原最准确的是",
    "answer": "D",
    "explain": "草原判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00985",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于草原的地区差异说法正确",
    "answer": "B",
    "explain": "草原存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00987",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与荒漠密切相关的是",
    "answer": "B",
    "explain": "荒漠的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与荒漠成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00988",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析荒漠时,首先要考虑的因素是",
    "answer": "A",
    "explain": "荒漠分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00989",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断荒漠最准确的是",
    "answer": "D",
    "explain": "荒漠判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00990",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于荒漠的地区差异说法正确",
    "answer": "B",
    "explain": "荒漠存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00992",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水土流失密切相关的是",
    "answer": "B",
    "explain": "水土流失的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水土流失成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00993",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水土流失时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水土流失分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00994",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水土流失最准确的是",
    "answer": "D",
    "explain": "水土流失判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_00995",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水土流失的地区差异说法正确",
    "answer": "B",
    "explain": "水土流失存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_00997",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与荒漠化密切相关的是",
    "answer": "B",
    "explain": "荒漠化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与荒漠化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_00998",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析荒漠化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "荒漠化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_00999",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断荒漠化最准确的是",
    "answer": "D",
    "explain": "荒漠化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01000",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于荒漠化的地区差异说法正确",
    "answer": "B",
    "explain": "荒漠化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01002",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与石漠化密切相关的是",
    "answer": "B",
    "explain": "石漠化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与石漠化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01003",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析石漠化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "石漠化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01004",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断石漠化最准确的是",
    "answer": "D",
    "explain": "石漠化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01005",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于石漠化的地区差异说法正确",
    "answer": "B",
    "explain": "石漠化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01007",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤组成密切相关的是",
    "answer": "B",
    "explain": "土壤组成的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤组成成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01008",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤组成时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤组成分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01009",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤组成最准确的是",
    "answer": "D",
    "explain": "土壤组成判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01010",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤组成的地区差异说法正确",
    "answer": "B",
    "explain": "土壤组成存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01012",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与有机质密切相关的是",
    "answer": "B",
    "explain": "有机质的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与有机质成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01013",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析有机质时,首先要考虑的因素是",
    "answer": "A",
    "explain": "有机质分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01014",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断有机质最准确的是",
    "answer": "D",
    "explain": "有机质判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01015",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于有机质的地区差异说法正确",
    "answer": "B",
    "explain": "有机质存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01017",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤类型密切相关的是",
    "answer": "B",
    "explain": "土壤类型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤类型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01018",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤类型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤类型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01019",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤类型最准确的是",
    "answer": "D",
    "explain": "土壤类型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01020",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤类型的地区差异说法正确",
    "answer": "B",
    "explain": "土壤类型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01022",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤肥力密切相关的是",
    "answer": "B",
    "explain": "土壤肥力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤肥力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01023",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤肥力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤肥力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01024",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤肥力最准确的是",
    "answer": "D",
    "explain": "土壤肥力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01025",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤肥力的地区差异说法正确",
    "answer": "B",
    "explain": "土壤肥力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01027",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与森林生态密切相关的是",
    "answer": "B",
    "explain": "森林生态的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与森林生态成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01028",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析森林生态时,首先要考虑的因素是",
    "answer": "A",
    "explain": "森林生态分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01029",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断森林生态最准确的是",
    "answer": "D",
    "explain": "森林生态判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01030",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于森林生态的地区差异说法正确",
    "answer": "B",
    "explain": "森林生态存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01032",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热带雨林密切相关的是",
    "answer": "B",
    "explain": "热带雨林的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热带雨林成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01033",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热带雨林时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热带雨林分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01034",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热带雨林最准确的是",
    "answer": "D",
    "explain": "热带雨林判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01035",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热带雨林的地区差异说法正确",
    "answer": "B",
    "explain": "热带雨林存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01037",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与草原密切相关的是",
    "answer": "B",
    "explain": "草原的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与草原成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01038",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析草原时,首先要考虑的因素是",
    "answer": "A",
    "explain": "草原分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01039",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断草原最准确的是",
    "answer": "D",
    "explain": "草原判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01040",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于草原的地区差异说法正确",
    "answer": "B",
    "explain": "草原存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01042",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与荒漠密切相关的是",
    "answer": "B",
    "explain": "荒漠的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与荒漠成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01043",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析荒漠时,首先要考虑的因素是",
    "answer": "A",
    "explain": "荒漠分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01044",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断荒漠最准确的是",
    "answer": "D",
    "explain": "荒漠判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01045",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于荒漠的地区差异说法正确",
    "answer": "B",
    "explain": "荒漠存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01047",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水土流失密切相关的是",
    "answer": "B",
    "explain": "水土流失的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水土流失成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01048",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水土流失时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水土流失分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01049",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水土流失最准确的是",
    "answer": "D",
    "explain": "水土流失判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01050",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水土流失的地区差异说法正确",
    "answer": "B",
    "explain": "水土流失存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01052",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与荒漠化密切相关的是",
    "answer": "B",
    "explain": "荒漠化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与荒漠化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01053",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析荒漠化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "荒漠化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01054",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断荒漠化最准确的是",
    "answer": "D",
    "explain": "荒漠化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01055",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于荒漠化的地区差异说法正确",
    "answer": "B",
    "explain": "荒漠化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01057",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与石漠化密切相关的是",
    "answer": "B",
    "explain": "石漠化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与石漠化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01058",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析石漠化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "石漠化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01059",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断石漠化最准确的是",
    "answer": "D",
    "explain": "石漠化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01060",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于石漠化的地区差异说法正确",
    "answer": "B",
    "explain": "石漠化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01062",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤组成密切相关的是",
    "answer": "B",
    "explain": "土壤组成的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤组成成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01063",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤组成时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤组成分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01064",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤组成最准确的是",
    "answer": "D",
    "explain": "土壤组成判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01065",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤组成的地区差异说法正确",
    "answer": "B",
    "explain": "土壤组成存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01067",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与有机质密切相关的是",
    "answer": "B",
    "explain": "有机质的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与有机质成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01068",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析有机质时,首先要考虑的因素是",
    "answer": "A",
    "explain": "有机质分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01069",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断有机质最准确的是",
    "answer": "D",
    "explain": "有机质判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01070",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于有机质的地区差异说法正确",
    "answer": "B",
    "explain": "有机质存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01072",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤类型密切相关的是",
    "answer": "B",
    "explain": "土壤类型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤类型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01073",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤类型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤类型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01074",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤类型最准确的是",
    "answer": "D",
    "explain": "土壤类型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01075",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤类型的地区差异说法正确",
    "answer": "B",
    "explain": "土壤类型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01077",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤肥力密切相关的是",
    "answer": "B",
    "explain": "土壤肥力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤肥力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01078",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤肥力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤肥力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01079",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤肥力最准确的是",
    "answer": "D",
    "explain": "土壤肥力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01080",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤肥力的地区差异说法正确",
    "answer": "B",
    "explain": "土壤肥力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01082",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与森林生态密切相关的是",
    "answer": "B",
    "explain": "森林生态的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与森林生态成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01083",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析森林生态时,首先要考虑的因素是",
    "answer": "A",
    "explain": "森林生态分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01084",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断森林生态最准确的是",
    "answer": "D",
    "explain": "森林生态判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01085",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于森林生态的地区差异说法正确",
    "answer": "B",
    "explain": "森林生态存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01087",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热带雨林密切相关的是",
    "answer": "B",
    "explain": "热带雨林的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热带雨林成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01088",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热带雨林时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热带雨林分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01089",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热带雨林最准确的是",
    "answer": "D",
    "explain": "热带雨林判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01090",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热带雨林的地区差异说法正确",
    "answer": "B",
    "explain": "热带雨林存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01092",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与草原密切相关的是",
    "answer": "B",
    "explain": "草原的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与草原成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01093",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析草原时,首先要考虑的因素是",
    "answer": "A",
    "explain": "草原分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01094",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断草原最准确的是",
    "answer": "D",
    "explain": "草原判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01095",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于草原的地区差异说法正确",
    "answer": "B",
    "explain": "草原存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01097",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与荒漠密切相关的是",
    "answer": "B",
    "explain": "荒漠的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与荒漠成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01098",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析荒漠时,首先要考虑的因素是",
    "answer": "A",
    "explain": "荒漠分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01099",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断荒漠最准确的是",
    "answer": "D",
    "explain": "荒漠判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01100",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于荒漠的地区差异说法正确",
    "answer": "B",
    "explain": "荒漠存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01102",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水土流失密切相关的是",
    "answer": "B",
    "explain": "水土流失的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水土流失成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01103",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水土流失时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水土流失分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01104",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水土流失最准确的是",
    "answer": "D",
    "explain": "水土流失判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01105",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水土流失的地区差异说法正确",
    "answer": "B",
    "explain": "水土流失存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01107",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与荒漠化密切相关的是",
    "answer": "B",
    "explain": "荒漠化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与荒漠化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01108",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析荒漠化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "荒漠化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01109",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断荒漠化最准确的是",
    "answer": "D",
    "explain": "荒漠化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01110",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于荒漠化的地区差异说法正确",
    "answer": "B",
    "explain": "荒漠化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01112",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与石漠化密切相关的是",
    "answer": "B",
    "explain": "石漠化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与石漠化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01113",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析石漠化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "石漠化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01114",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断石漠化最准确的是",
    "answer": "D",
    "explain": "石漠化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01115",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于石漠化的地区差异说法正确",
    "answer": "B",
    "explain": "石漠化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01117",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤组成密切相关的是",
    "answer": "B",
    "explain": "土壤组成的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤组成成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01118",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤组成时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤组成分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01119",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤组成最准确的是",
    "answer": "D",
    "explain": "土壤组成判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01120",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤组成的地区差异说法正确",
    "answer": "B",
    "explain": "土壤组成存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01122",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与有机质密切相关的是",
    "answer": "B",
    "explain": "有机质的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与有机质成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01123",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析有机质时,首先要考虑的因素是",
    "answer": "A",
    "explain": "有机质分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01124",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断有机质最准确的是",
    "answer": "D",
    "explain": "有机质判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01125",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于有机质的地区差异说法正确",
    "answer": "B",
    "explain": "有机质存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01127",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤类型密切相关的是",
    "answer": "B",
    "explain": "土壤类型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤类型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01128",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤类型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤类型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01129",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤类型最准确的是",
    "answer": "D",
    "explain": "土壤类型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01130",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤类型的地区差异说法正确",
    "answer": "B",
    "explain": "土壤类型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01132",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤肥力密切相关的是",
    "answer": "B",
    "explain": "土壤肥力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤肥力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01133",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤肥力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤肥力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01134",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤肥力最准确的是",
    "answer": "D",
    "explain": "土壤肥力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01135",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤肥力的地区差异说法正确",
    "answer": "B",
    "explain": "土壤肥力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01137",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与森林生态密切相关的是",
    "answer": "B",
    "explain": "森林生态的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与森林生态成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01138",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析森林生态时,首先要考虑的因素是",
    "answer": "A",
    "explain": "森林生态分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01139",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断森林生态最准确的是",
    "answer": "D",
    "explain": "森林生态判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01140",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于森林生态的地区差异说法正确",
    "answer": "B",
    "explain": "森林生态存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01142",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热带雨林密切相关的是",
    "answer": "B",
    "explain": "热带雨林的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热带雨林成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01143",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热带雨林时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热带雨林分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01144",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热带雨林最准确的是",
    "answer": "D",
    "explain": "热带雨林判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01145",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热带雨林的地区差异说法正确",
    "answer": "B",
    "explain": "热带雨林存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01147",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与草原密切相关的是",
    "answer": "B",
    "explain": "草原的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与草原成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01148",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析草原时,首先要考虑的因素是",
    "answer": "A",
    "explain": "草原分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01149",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断草原最准确的是",
    "answer": "D",
    "explain": "草原判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01150",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于草原的地区差异说法正确",
    "answer": "B",
    "explain": "草原存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01152",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与荒漠密切相关的是",
    "answer": "B",
    "explain": "荒漠的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与荒漠成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01153",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析荒漠时,首先要考虑的因素是",
    "answer": "A",
    "explain": "荒漠分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01154",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断荒漠最准确的是",
    "answer": "D",
    "explain": "荒漠判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01155",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于荒漠的地区差异说法正确",
    "answer": "B",
    "explain": "荒漠存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01157",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水土流失密切相关的是",
    "answer": "B",
    "explain": "水土流失的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水土流失成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01158",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水土流失时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水土流失分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01159",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水土流失最准确的是",
    "answer": "D",
    "explain": "水土流失判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01160",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水土流失的地区差异说法正确",
    "answer": "B",
    "explain": "水土流失存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01162",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与荒漠化密切相关的是",
    "answer": "B",
    "explain": "荒漠化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与荒漠化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01163",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析荒漠化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "荒漠化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01164",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断荒漠化最准确的是",
    "answer": "D",
    "explain": "荒漠化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01165",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于荒漠化的地区差异说法正确",
    "answer": "B",
    "explain": "荒漠化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01167",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与石漠化密切相关的是",
    "answer": "B",
    "explain": "石漠化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与石漠化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01168",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析石漠化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "石漠化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01169",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断石漠化最准确的是",
    "answer": "D",
    "explain": "石漠化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01170",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于石漠化的地区差异说法正确",
    "answer": "B",
    "explain": "石漠化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01172",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤组成密切相关的是",
    "answer": "B",
    "explain": "土壤组成的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤组成成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01173",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤组成时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤组成分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01174",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤组成最准确的是",
    "answer": "D",
    "explain": "土壤组成判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01175",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤组成的地区差异说法正确",
    "answer": "B",
    "explain": "土壤组成存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01177",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与有机质密切相关的是",
    "answer": "B",
    "explain": "有机质的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与有机质成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01178",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析有机质时,首先要考虑的因素是",
    "answer": "A",
    "explain": "有机质分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01179",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断有机质最准确的是",
    "answer": "D",
    "explain": "有机质判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01180",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于有机质的地区差异说法正确",
    "answer": "B",
    "explain": "有机质存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01182",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤类型密切相关的是",
    "answer": "B",
    "explain": "土壤类型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤类型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01183",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤类型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤类型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01184",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤类型最准确的是",
    "answer": "D",
    "explain": "土壤类型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01185",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土壤类型的地区差异说法正确",
    "answer": "B",
    "explain": "土壤类型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01187",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土壤肥力密切相关的是",
    "answer": "B",
    "explain": "土壤肥力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土壤肥力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01188",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土壤肥力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土壤肥力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01189",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土壤肥力最准确的是",
    "answer": "D",
    "explain": "土壤肥力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01191",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口分布密切相关的是",
    "answer": "B",
    "explain": "人口分布的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口分布成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01192",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口分布时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口分布分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01193",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口分布最准确的是",
    "answer": "D",
    "explain": "人口分布判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01194",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口分布的地区差异说法正确",
    "answer": "B",
    "explain": "人口分布存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01196",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口迁移密切相关的是",
    "answer": "B",
    "explain": "人口迁移的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口迁移成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01197",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口迁移时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口迁移分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01198",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口迁移最准确的是",
    "answer": "D",
    "explain": "人口迁移判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01199",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口迁移的地区差异说法正确",
    "answer": "B",
    "explain": "人口迁移存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01201",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口增长模式密切相关的是",
    "answer": "B",
    "explain": "人口增长模式的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口增长模式成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01202",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口增长模式时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口增长模式分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01203",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口增长模式最准确的是",
    "answer": "D",
    "explain": "人口增长模式判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01204",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口增长模式的地区差异说法正确",
    "answer": "B",
    "explain": "人口增长模式存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01206",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与环境承载力密切相关的是",
    "answer": "B",
    "explain": "环境承载力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与环境承载力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01207",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析环境承载力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "环境承载力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01208",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断环境承载力最准确的是",
    "answer": "D",
    "explain": "环境承载力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01209",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于环境承载力的地区差异说法正确",
    "answer": "B",
    "explain": "环境承载力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01211",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口容量密切相关的是",
    "answer": "B",
    "explain": "人口容量的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口容量成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01212",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口容量时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口容量分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01213",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口容量最准确的是",
    "answer": "D",
    "explain": "人口容量判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01214",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口容量的地区差异说法正确",
    "answer": "B",
    "explain": "人口容量存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01216",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与老龄化密切相关的是",
    "answer": "B",
    "explain": "老龄化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与老龄化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01217",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析老龄化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "老龄化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01218",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断老龄化最准确的是",
    "answer": "D",
    "explain": "老龄化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01219",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于老龄化的地区差异说法正确",
    "answer": "B",
    "explain": "老龄化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01221",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口政策密切相关的是",
    "answer": "B",
    "explain": "人口政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01222",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01223",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口政策最准确的是",
    "answer": "D",
    "explain": "人口政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01224",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口政策的地区差异说法正确",
    "answer": "B",
    "explain": "人口政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01226",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三孩政策密切相关的是",
    "answer": "B",
    "explain": "三孩政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三孩政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01227",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三孩政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三孩政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01228",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三孩政策最准确的是",
    "answer": "D",
    "explain": "三孩政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01229",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三孩政策的地区差异说法正确",
    "answer": "B",
    "explain": "三孩政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01231",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口分布密切相关的是",
    "answer": "B",
    "explain": "人口分布的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口分布成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01232",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口分布时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口分布分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01233",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口分布最准确的是",
    "answer": "D",
    "explain": "人口分布判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01234",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口分布的地区差异说法正确",
    "answer": "B",
    "explain": "人口分布存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01236",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口迁移密切相关的是",
    "answer": "B",
    "explain": "人口迁移的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口迁移成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01237",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口迁移时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口迁移分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01238",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口迁移最准确的是",
    "answer": "D",
    "explain": "人口迁移判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01239",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口迁移的地区差异说法正确",
    "answer": "B",
    "explain": "人口迁移存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01241",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口增长模式密切相关的是",
    "answer": "B",
    "explain": "人口增长模式的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口增长模式成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01242",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口增长模式时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口增长模式分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01243",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口增长模式最准确的是",
    "answer": "D",
    "explain": "人口增长模式判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01244",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口增长模式的地区差异说法正确",
    "answer": "B",
    "explain": "人口增长模式存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01246",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与环境承载力密切相关的是",
    "answer": "B",
    "explain": "环境承载力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与环境承载力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01247",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析环境承载力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "环境承载力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01248",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断环境承载力最准确的是",
    "answer": "D",
    "explain": "环境承载力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01249",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于环境承载力的地区差异说法正确",
    "answer": "B",
    "explain": "环境承载力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01251",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口容量密切相关的是",
    "answer": "B",
    "explain": "人口容量的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口容量成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01252",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口容量时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口容量分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01253",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口容量最准确的是",
    "answer": "D",
    "explain": "人口容量判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01254",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口容量的地区差异说法正确",
    "answer": "B",
    "explain": "人口容量存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01256",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与老龄化密切相关的是",
    "answer": "B",
    "explain": "老龄化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与老龄化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01257",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析老龄化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "老龄化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01258",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断老龄化最准确的是",
    "answer": "D",
    "explain": "老龄化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01259",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于老龄化的地区差异说法正确",
    "answer": "B",
    "explain": "老龄化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01261",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口政策密切相关的是",
    "answer": "B",
    "explain": "人口政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01262",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01263",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口政策最准确的是",
    "answer": "D",
    "explain": "人口政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01264",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口政策的地区差异说法正确",
    "answer": "B",
    "explain": "人口政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01266",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三孩政策密切相关的是",
    "answer": "B",
    "explain": "三孩政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三孩政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01267",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三孩政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三孩政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01268",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三孩政策最准确的是",
    "answer": "D",
    "explain": "三孩政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01269",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三孩政策的地区差异说法正确",
    "answer": "B",
    "explain": "三孩政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01271",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口分布密切相关的是",
    "answer": "B",
    "explain": "人口分布的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口分布成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01272",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口分布时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口分布分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01273",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口分布最准确的是",
    "answer": "D",
    "explain": "人口分布判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01274",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口分布的地区差异说法正确",
    "answer": "B",
    "explain": "人口分布存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01276",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口迁移密切相关的是",
    "answer": "B",
    "explain": "人口迁移的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口迁移成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01277",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口迁移时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口迁移分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01278",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口迁移最准确的是",
    "answer": "D",
    "explain": "人口迁移判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01279",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口迁移的地区差异说法正确",
    "answer": "B",
    "explain": "人口迁移存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01281",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口增长模式密切相关的是",
    "answer": "B",
    "explain": "人口增长模式的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口增长模式成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01282",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口增长模式时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口增长模式分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01283",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口增长模式最准确的是",
    "answer": "D",
    "explain": "人口增长模式判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01284",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口增长模式的地区差异说法正确",
    "answer": "B",
    "explain": "人口增长模式存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01286",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与环境承载力密切相关的是",
    "answer": "B",
    "explain": "环境承载力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与环境承载力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01287",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析环境承载力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "环境承载力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01288",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断环境承载力最准确的是",
    "answer": "D",
    "explain": "环境承载力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01289",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于环境承载力的地区差异说法正确",
    "answer": "B",
    "explain": "环境承载力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01291",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口容量密切相关的是",
    "answer": "B",
    "explain": "人口容量的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口容量成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01292",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口容量时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口容量分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01293",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口容量最准确的是",
    "answer": "D",
    "explain": "人口容量判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01294",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口容量的地区差异说法正确",
    "answer": "B",
    "explain": "人口容量存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01296",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与老龄化密切相关的是",
    "answer": "B",
    "explain": "老龄化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与老龄化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01297",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析老龄化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "老龄化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01298",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断老龄化最准确的是",
    "answer": "D",
    "explain": "老龄化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01299",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于老龄化的地区差异说法正确",
    "answer": "B",
    "explain": "老龄化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01301",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口政策密切相关的是",
    "answer": "B",
    "explain": "人口政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01302",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01303",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口政策最准确的是",
    "answer": "D",
    "explain": "人口政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01304",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口政策的地区差异说法正确",
    "answer": "B",
    "explain": "人口政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01306",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三孩政策密切相关的是",
    "answer": "B",
    "explain": "三孩政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三孩政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01307",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三孩政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三孩政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01308",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三孩政策最准确的是",
    "answer": "D",
    "explain": "三孩政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01309",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三孩政策的地区差异说法正确",
    "answer": "B",
    "explain": "三孩政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01311",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口分布密切相关的是",
    "answer": "B",
    "explain": "人口分布的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口分布成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01312",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口分布时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口分布分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01313",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口分布最准确的是",
    "answer": "D",
    "explain": "人口分布判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01314",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口分布的地区差异说法正确",
    "answer": "B",
    "explain": "人口分布存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01316",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口迁移密切相关的是",
    "answer": "B",
    "explain": "人口迁移的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口迁移成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01317",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口迁移时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口迁移分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01318",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口迁移最准确的是",
    "answer": "D",
    "explain": "人口迁移判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01319",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口迁移的地区差异说法正确",
    "answer": "B",
    "explain": "人口迁移存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01321",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口增长模式密切相关的是",
    "answer": "B",
    "explain": "人口增长模式的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口增长模式成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01322",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口增长模式时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口增长模式分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01323",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口增长模式最准确的是",
    "answer": "D",
    "explain": "人口增长模式判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01324",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口增长模式的地区差异说法正确",
    "answer": "B",
    "explain": "人口增长模式存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01326",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与环境承载力密切相关的是",
    "answer": "B",
    "explain": "环境承载力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与环境承载力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01327",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析环境承载力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "环境承载力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01328",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断环境承载力最准确的是",
    "answer": "D",
    "explain": "环境承载力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01329",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于环境承载力的地区差异说法正确",
    "answer": "B",
    "explain": "环境承载力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01331",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口容量密切相关的是",
    "answer": "B",
    "explain": "人口容量的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口容量成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01332",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口容量时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口容量分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01333",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口容量最准确的是",
    "answer": "D",
    "explain": "人口容量判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01334",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口容量的地区差异说法正确",
    "answer": "B",
    "explain": "人口容量存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01336",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与老龄化密切相关的是",
    "answer": "B",
    "explain": "老龄化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与老龄化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01337",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析老龄化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "老龄化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01338",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断老龄化最准确的是",
    "answer": "D",
    "explain": "老龄化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01339",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于老龄化的地区差异说法正确",
    "answer": "B",
    "explain": "老龄化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01341",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口政策密切相关的是",
    "answer": "B",
    "explain": "人口政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01342",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01343",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口政策最准确的是",
    "answer": "D",
    "explain": "人口政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01344",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口政策的地区差异说法正确",
    "answer": "B",
    "explain": "人口政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01346",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三孩政策密切相关的是",
    "answer": "B",
    "explain": "三孩政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三孩政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01347",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三孩政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三孩政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01348",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三孩政策最准确的是",
    "answer": "D",
    "explain": "三孩政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01349",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三孩政策的地区差异说法正确",
    "answer": "B",
    "explain": "三孩政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01351",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口分布密切相关的是",
    "answer": "B",
    "explain": "人口分布的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口分布成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01352",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口分布时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口分布分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01353",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口分布最准确的是",
    "answer": "D",
    "explain": "人口分布判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01354",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口分布的地区差异说法正确",
    "answer": "B",
    "explain": "人口分布存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01356",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口迁移密切相关的是",
    "answer": "B",
    "explain": "人口迁移的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口迁移成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01357",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口迁移时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口迁移分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01358",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口迁移最准确的是",
    "answer": "D",
    "explain": "人口迁移判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01359",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口迁移的地区差异说法正确",
    "answer": "B",
    "explain": "人口迁移存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01361",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口增长模式密切相关的是",
    "answer": "B",
    "explain": "人口增长模式的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口增长模式成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01362",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口增长模式时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口增长模式分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01363",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口增长模式最准确的是",
    "answer": "D",
    "explain": "人口增长模式判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01364",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口增长模式的地区差异说法正确",
    "answer": "B",
    "explain": "人口增长模式存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01366",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与环境承载力密切相关的是",
    "answer": "B",
    "explain": "环境承载力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与环境承载力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01367",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析环境承载力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "环境承载力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01368",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断环境承载力最准确的是",
    "answer": "D",
    "explain": "环境承载力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01369",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于环境承载力的地区差异说法正确",
    "answer": "B",
    "explain": "环境承载力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01371",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口容量密切相关的是",
    "answer": "B",
    "explain": "人口容量的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口容量成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01372",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口容量时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口容量分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01373",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口容量最准确的是",
    "answer": "D",
    "explain": "人口容量判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01374",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口容量的地区差异说法正确",
    "answer": "B",
    "explain": "人口容量存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01376",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与老龄化密切相关的是",
    "answer": "B",
    "explain": "老龄化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与老龄化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01377",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析老龄化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "老龄化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01378",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断老龄化最准确的是",
    "answer": "D",
    "explain": "老龄化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01379",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于老龄化的地区差异说法正确",
    "answer": "B",
    "explain": "老龄化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01381",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口政策密切相关的是",
    "answer": "B",
    "explain": "人口政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01382",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01383",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口政策最准确的是",
    "answer": "D",
    "explain": "人口政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01384",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口政策的地区差异说法正确",
    "answer": "B",
    "explain": "人口政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01386",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三孩政策密切相关的是",
    "answer": "B",
    "explain": "三孩政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三孩政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01387",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三孩政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三孩政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01388",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三孩政策最准确的是",
    "answer": "D",
    "explain": "三孩政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01389",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三孩政策的地区差异说法正确",
    "answer": "B",
    "explain": "三孩政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01391",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口分布密切相关的是",
    "answer": "B",
    "explain": "人口分布的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口分布成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01392",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口分布时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口分布分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01393",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口分布最准确的是",
    "answer": "D",
    "explain": "人口分布判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01394",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口分布的地区差异说法正确",
    "answer": "B",
    "explain": "人口分布存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01396",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口迁移密切相关的是",
    "answer": "B",
    "explain": "人口迁移的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口迁移成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01397",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口迁移时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口迁移分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01398",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口迁移最准确的是",
    "answer": "D",
    "explain": "人口迁移判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01399",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口迁移的地区差异说法正确",
    "answer": "B",
    "explain": "人口迁移存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01401",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口增长模式密切相关的是",
    "answer": "B",
    "explain": "人口增长模式的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口增长模式成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01402",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口增长模式时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口增长模式分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01403",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口增长模式最准确的是",
    "answer": "D",
    "explain": "人口增长模式判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01404",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口增长模式的地区差异说法正确",
    "answer": "B",
    "explain": "人口增长模式存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01406",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与环境承载力密切相关的是",
    "answer": "B",
    "explain": "环境承载力的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与环境承载力成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01407",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析环境承载力时,首先要考虑的因素是",
    "answer": "A",
    "explain": "环境承载力分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01408",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断环境承载力最准确的是",
    "answer": "D",
    "explain": "环境承载力判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01409",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于环境承载力的地区差异说法正确",
    "answer": "B",
    "explain": "环境承载力存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01411",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口容量密切相关的是",
    "answer": "B",
    "explain": "人口容量的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口容量成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01412",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口容量时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口容量分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01413",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口容量最准确的是",
    "answer": "D",
    "explain": "人口容量判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01414",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口容量的地区差异说法正确",
    "answer": "B",
    "explain": "人口容量存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01416",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与老龄化密切相关的是",
    "answer": "B",
    "explain": "老龄化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与老龄化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01417",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析老龄化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "老龄化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01418",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断老龄化最准确的是",
    "answer": "D",
    "explain": "老龄化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01419",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于老龄化的地区差异说法正确",
    "answer": "B",
    "explain": "老龄化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01421",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与人口政策密切相关的是",
    "answer": "B",
    "explain": "人口政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与人口政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01422",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析人口政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "人口政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01423",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断人口政策最准确的是",
    "answer": "D",
    "explain": "人口政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01424",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于人口政策的地区差异说法正确",
    "answer": "B",
    "explain": "人口政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01426",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与三孩政策密切相关的是",
    "answer": "B",
    "explain": "三孩政策的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与三孩政策成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01427",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "分析三孩政策时,首先要考虑的因素是",
    "answer": "A",
    "explain": "三孩政策分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01428",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断三孩政策最准确的是",
    "answer": "D",
    "explain": "三孩政策判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01429",
    "manualId": "geo_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三孩政策的地区差异说法正确",
    "answer": "B",
    "explain": "三孩政策存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01432",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化密切相关的是",
    "answer": "B",
    "explain": "城市化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01433",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01434",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化最准确的是",
    "answer": "D",
    "explain": "城市化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01435",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化的地区差异说法正确",
    "answer": "B",
    "explain": "城市化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01437",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市职能密切相关的是",
    "answer": "B",
    "explain": "城市职能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市职能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01438",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市职能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市职能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01439",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市职能最准确的是",
    "answer": "D",
    "explain": "城市职能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01440",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市职能的地区差异说法正确",
    "answer": "B",
    "explain": "城市职能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01442",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市空间结构密切相关的是",
    "answer": "B",
    "explain": "城市空间结构的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市空间结构成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01443",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市空间结构时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市空间结构分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01444",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市空间结构最准确的是",
    "answer": "D",
    "explain": "城市空间结构判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01445",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市空间结构的地区差异说法正确",
    "answer": "B",
    "explain": "城市空间结构存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01447",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化水平密切相关的是",
    "answer": "B",
    "explain": "城市化水平的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化水平成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01448",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化水平时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化水平分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01449",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化水平最准确的是",
    "answer": "D",
    "explain": "城市化水平判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01450",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化水平的地区差异说法正确",
    "answer": "B",
    "explain": "城市化水平存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01452",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化问题密切相关的是",
    "answer": "B",
    "explain": "城市化问题的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化问题成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01453",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化问题时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化问题分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01454",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化问题最准确的是",
    "answer": "D",
    "explain": "城市化问题判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01455",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化问题的地区差异说法正确",
    "answer": "B",
    "explain": "城市化问题存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01457",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热岛效应密切相关的是",
    "answer": "B",
    "explain": "热岛效应的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热岛效应成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01458",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热岛效应时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热岛效应分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01459",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热岛效应最准确的是",
    "answer": "D",
    "explain": "热岛效应判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01460",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热岛效应的地区差异说法正确",
    "answer": "B",
    "explain": "热岛效应存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01462",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市规划密切相关的是",
    "answer": "B",
    "explain": "城市规划的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市规划成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01463",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市规划时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市规划分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01464",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市规划最准确的是",
    "answer": "D",
    "explain": "城市规划判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01465",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市规划的地区差异说法正确",
    "answer": "B",
    "explain": "城市规划存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01467",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市体系密切相关的是",
    "answer": "B",
    "explain": "城市体系的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市体系成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01468",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市体系时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市体系分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01469",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市体系最准确的是",
    "answer": "D",
    "explain": "城市体系判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01470",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市体系的地区差异说法正确",
    "answer": "B",
    "explain": "城市体系存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01472",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化密切相关的是",
    "answer": "B",
    "explain": "城市化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01473",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01474",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化最准确的是",
    "answer": "D",
    "explain": "城市化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01475",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化的地区差异说法正确",
    "answer": "B",
    "explain": "城市化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01477",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市职能密切相关的是",
    "answer": "B",
    "explain": "城市职能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市职能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01478",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市职能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市职能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01479",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市职能最准确的是",
    "answer": "D",
    "explain": "城市职能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01480",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市职能的地区差异说法正确",
    "answer": "B",
    "explain": "城市职能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01482",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市空间结构密切相关的是",
    "answer": "B",
    "explain": "城市空间结构的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市空间结构成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01483",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市空间结构时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市空间结构分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01484",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市空间结构最准确的是",
    "answer": "D",
    "explain": "城市空间结构判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01485",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市空间结构的地区差异说法正确",
    "answer": "B",
    "explain": "城市空间结构存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01487",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化水平密切相关的是",
    "answer": "B",
    "explain": "城市化水平的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化水平成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01488",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化水平时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化水平分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01489",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化水平最准确的是",
    "answer": "D",
    "explain": "城市化水平判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01490",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化水平的地区差异说法正确",
    "answer": "B",
    "explain": "城市化水平存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01492",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化问题密切相关的是",
    "answer": "B",
    "explain": "城市化问题的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化问题成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01493",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化问题时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化问题分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01494",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化问题最准确的是",
    "answer": "D",
    "explain": "城市化问题判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01495",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化问题的地区差异说法正确",
    "answer": "B",
    "explain": "城市化问题存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01497",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热岛效应密切相关的是",
    "answer": "B",
    "explain": "热岛效应的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热岛效应成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01498",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热岛效应时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热岛效应分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01499",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热岛效应最准确的是",
    "answer": "D",
    "explain": "热岛效应判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01500",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热岛效应的地区差异说法正确",
    "answer": "B",
    "explain": "热岛效应存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01502",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市规划密切相关的是",
    "answer": "B",
    "explain": "城市规划的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市规划成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01503",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市规划时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市规划分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01504",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市规划最准确的是",
    "answer": "D",
    "explain": "城市规划判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01505",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市规划的地区差异说法正确",
    "answer": "B",
    "explain": "城市规划存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01507",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市体系密切相关的是",
    "answer": "B",
    "explain": "城市体系的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市体系成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01508",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市体系时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市体系分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01509",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市体系最准确的是",
    "answer": "D",
    "explain": "城市体系判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01510",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市体系的地区差异说法正确",
    "answer": "B",
    "explain": "城市体系存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01512",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化密切相关的是",
    "answer": "B",
    "explain": "城市化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01513",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01514",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化最准确的是",
    "answer": "D",
    "explain": "城市化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01515",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化的地区差异说法正确",
    "answer": "B",
    "explain": "城市化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01517",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市职能密切相关的是",
    "answer": "B",
    "explain": "城市职能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市职能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01518",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市职能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市职能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01519",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市职能最准确的是",
    "answer": "D",
    "explain": "城市职能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01520",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市职能的地区差异说法正确",
    "answer": "B",
    "explain": "城市职能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01522",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市空间结构密切相关的是",
    "answer": "B",
    "explain": "城市空间结构的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市空间结构成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01523",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市空间结构时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市空间结构分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01524",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市空间结构最准确的是",
    "answer": "D",
    "explain": "城市空间结构判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01525",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市空间结构的地区差异说法正确",
    "answer": "B",
    "explain": "城市空间结构存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01527",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化水平密切相关的是",
    "answer": "B",
    "explain": "城市化水平的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化水平成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01528",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化水平时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化水平分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01529",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化水平最准确的是",
    "answer": "D",
    "explain": "城市化水平判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01530",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化水平的地区差异说法正确",
    "answer": "B",
    "explain": "城市化水平存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01532",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化问题密切相关的是",
    "answer": "B",
    "explain": "城市化问题的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化问题成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01533",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化问题时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化问题分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01534",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化问题最准确的是",
    "answer": "D",
    "explain": "城市化问题判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01535",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化问题的地区差异说法正确",
    "answer": "B",
    "explain": "城市化问题存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01537",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热岛效应密切相关的是",
    "answer": "B",
    "explain": "热岛效应的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热岛效应成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01538",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热岛效应时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热岛效应分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01539",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热岛效应最准确的是",
    "answer": "D",
    "explain": "热岛效应判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01540",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热岛效应的地区差异说法正确",
    "answer": "B",
    "explain": "热岛效应存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01542",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市规划密切相关的是",
    "answer": "B",
    "explain": "城市规划的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市规划成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01543",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市规划时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市规划分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01544",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市规划最准确的是",
    "answer": "D",
    "explain": "城市规划判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01545",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市规划的地区差异说法正确",
    "answer": "B",
    "explain": "城市规划存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01547",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市体系密切相关的是",
    "answer": "B",
    "explain": "城市体系的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市体系成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01548",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市体系时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市体系分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01549",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市体系最准确的是",
    "answer": "D",
    "explain": "城市体系判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01550",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市体系的地区差异说法正确",
    "answer": "B",
    "explain": "城市体系存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01552",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化密切相关的是",
    "answer": "B",
    "explain": "城市化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01553",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01554",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化最准确的是",
    "answer": "D",
    "explain": "城市化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01555",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化的地区差异说法正确",
    "answer": "B",
    "explain": "城市化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01557",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市职能密切相关的是",
    "answer": "B",
    "explain": "城市职能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市职能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01558",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市职能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市职能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01559",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市职能最准确的是",
    "answer": "D",
    "explain": "城市职能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01560",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市职能的地区差异说法正确",
    "answer": "B",
    "explain": "城市职能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01562",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市空间结构密切相关的是",
    "answer": "B",
    "explain": "城市空间结构的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市空间结构成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01563",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市空间结构时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市空间结构分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01564",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市空间结构最准确的是",
    "answer": "D",
    "explain": "城市空间结构判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01565",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市空间结构的地区差异说法正确",
    "answer": "B",
    "explain": "城市空间结构存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01567",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化水平密切相关的是",
    "answer": "B",
    "explain": "城市化水平的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化水平成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01568",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化水平时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化水平分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01569",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化水平最准确的是",
    "answer": "D",
    "explain": "城市化水平判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01570",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化水平的地区差异说法正确",
    "answer": "B",
    "explain": "城市化水平存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01572",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化问题密切相关的是",
    "answer": "B",
    "explain": "城市化问题的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化问题成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01573",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化问题时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化问题分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01574",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化问题最准确的是",
    "answer": "D",
    "explain": "城市化问题判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01575",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化问题的地区差异说法正确",
    "answer": "B",
    "explain": "城市化问题存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01577",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热岛效应密切相关的是",
    "answer": "B",
    "explain": "热岛效应的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热岛效应成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01578",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热岛效应时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热岛效应分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01579",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热岛效应最准确的是",
    "answer": "D",
    "explain": "热岛效应判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01580",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热岛效应的地区差异说法正确",
    "answer": "B",
    "explain": "热岛效应存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01582",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市规划密切相关的是",
    "answer": "B",
    "explain": "城市规划的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市规划成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01583",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市规划时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市规划分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01584",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市规划最准确的是",
    "answer": "D",
    "explain": "城市规划判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01585",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市规划的地区差异说法正确",
    "answer": "B",
    "explain": "城市规划存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01587",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市体系密切相关的是",
    "answer": "B",
    "explain": "城市体系的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市体系成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01588",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市体系时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市体系分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01589",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市体系最准确的是",
    "answer": "D",
    "explain": "城市体系判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01590",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市体系的地区差异说法正确",
    "answer": "B",
    "explain": "城市体系存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01592",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化密切相关的是",
    "answer": "B",
    "explain": "城市化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01593",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01594",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化最准确的是",
    "answer": "D",
    "explain": "城市化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01595",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化的地区差异说法正确",
    "answer": "B",
    "explain": "城市化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01597",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市职能密切相关的是",
    "answer": "B",
    "explain": "城市职能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市职能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01598",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市职能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市职能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01599",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市职能最准确的是",
    "answer": "D",
    "explain": "城市职能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01600",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市职能的地区差异说法正确",
    "answer": "B",
    "explain": "城市职能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01602",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市空间结构密切相关的是",
    "answer": "B",
    "explain": "城市空间结构的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市空间结构成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01603",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市空间结构时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市空间结构分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01604",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市空间结构最准确的是",
    "answer": "D",
    "explain": "城市空间结构判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01605",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市空间结构的地区差异说法正确",
    "answer": "B",
    "explain": "城市空间结构存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01607",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化水平密切相关的是",
    "answer": "B",
    "explain": "城市化水平的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化水平成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01608",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化水平时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化水平分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01609",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化水平最准确的是",
    "answer": "D",
    "explain": "城市化水平判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01610",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化水平的地区差异说法正确",
    "answer": "B",
    "explain": "城市化水平存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01612",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化问题密切相关的是",
    "answer": "B",
    "explain": "城市化问题的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化问题成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01613",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化问题时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化问题分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01614",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化问题最准确的是",
    "answer": "D",
    "explain": "城市化问题判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01615",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化问题的地区差异说法正确",
    "answer": "B",
    "explain": "城市化问题存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01617",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热岛效应密切相关的是",
    "answer": "B",
    "explain": "热岛效应的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热岛效应成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01618",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热岛效应时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热岛效应分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01619",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热岛效应最准确的是",
    "answer": "D",
    "explain": "热岛效应判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01620",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热岛效应的地区差异说法正确",
    "answer": "B",
    "explain": "热岛效应存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01622",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市规划密切相关的是",
    "answer": "B",
    "explain": "城市规划的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市规划成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01623",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市规划时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市规划分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01624",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市规划最准确的是",
    "answer": "D",
    "explain": "城市规划判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01625",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市规划的地区差异说法正确",
    "answer": "B",
    "explain": "城市规划存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01627",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市体系密切相关的是",
    "answer": "B",
    "explain": "城市体系的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市体系成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01628",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市体系时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市体系分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01629",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市体系最准确的是",
    "answer": "D",
    "explain": "城市体系判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01630",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市体系的地区差异说法正确",
    "answer": "B",
    "explain": "城市体系存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01632",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化密切相关的是",
    "answer": "B",
    "explain": "城市化的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01633",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01634",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化最准确的是",
    "answer": "D",
    "explain": "城市化判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01635",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化的地区差异说法正确",
    "answer": "B",
    "explain": "城市化存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01637",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市职能密切相关的是",
    "answer": "B",
    "explain": "城市职能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市职能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01638",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市职能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市职能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01639",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市职能最准确的是",
    "answer": "D",
    "explain": "城市职能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01640",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市职能的地区差异说法正确",
    "answer": "B",
    "explain": "城市职能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01642",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市空间结构密切相关的是",
    "answer": "B",
    "explain": "城市空间结构的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市空间结构成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01643",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市空间结构时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市空间结构分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01644",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市空间结构最准确的是",
    "answer": "D",
    "explain": "城市空间结构判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01645",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市空间结构的地区差异说法正确",
    "answer": "B",
    "explain": "城市空间结构存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01647",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化水平密切相关的是",
    "answer": "B",
    "explain": "城市化水平的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化水平成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01648",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化水平时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化水平分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01649",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化水平最准确的是",
    "answer": "D",
    "explain": "城市化水平判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01650",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化水平的地区差异说法正确",
    "answer": "B",
    "explain": "城市化水平存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01652",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市化问题密切相关的是",
    "answer": "B",
    "explain": "城市化问题的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市化问题成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01653",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市化问题时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市化问题分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01654",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市化问题最准确的是",
    "answer": "D",
    "explain": "城市化问题判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01655",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化问题的地区差异说法正确",
    "answer": "B",
    "explain": "城市化问题存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01657",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与热岛效应密切相关的是",
    "answer": "B",
    "explain": "热岛效应的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与热岛效应成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01658",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析热岛效应时,首先要考虑的因素是",
    "answer": "A",
    "explain": "热岛效应分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01659",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断热岛效应最准确的是",
    "answer": "D",
    "explain": "热岛效应判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01660",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于热岛效应的地区差异说法正确",
    "answer": "B",
    "explain": "热岛效应存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01662",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市规划密切相关的是",
    "answer": "B",
    "explain": "城市规划的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市规划成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01663",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市规划时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市规划分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01664",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市规划最准确的是",
    "answer": "D",
    "explain": "城市规划判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01665",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市规划的地区差异说法正确",
    "answer": "B",
    "explain": "城市规划存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01667",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市体系密切相关的是",
    "answer": "B",
    "explain": "城市体系的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市体系成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01668",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市体系时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市体系分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01669",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市体系最准确的是",
    "answer": "D",
    "explain": "城市体系判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01670",
    "manualId": "geo_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市体系的地区差异说法正确",
    "answer": "B",
    "explain": "城市体系存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01673",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与农业区位密切相关的是",
    "answer": "B",
    "explain": "农业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与农业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01674",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析农业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "农业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01675",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断农业区位最准确的是",
    "answer": "D",
    "explain": "农业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01676",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于农业区位的地区差异说法正确",
    "answer": "B",
    "explain": "农业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01678",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气候对农业密切相关的是",
    "answer": "B",
    "explain": "气候对农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气候对农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01679",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气候对农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气候对农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01680",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气候对农业最准确的是",
    "answer": "D",
    "explain": "气候对农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01681",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候对农业的地区差异说法正确",
    "answer": "B",
    "explain": "气候对农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01683",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水源密切相关的是",
    "answer": "B",
    "explain": "水源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01684",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01685",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水源最准确的是",
    "answer": "D",
    "explain": "水源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01686",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水源的地区差异说法正确",
    "answer": "B",
    "explain": "水源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01688",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与种植业密切相关的是",
    "answer": "B",
    "explain": "种植业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与种植业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01689",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析种植业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "种植业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01690",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断种植业最准确的是",
    "answer": "D",
    "explain": "种植业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01691",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于种植业的地区差异说法正确",
    "answer": "B",
    "explain": "种植业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01693",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与畜牧业密切相关的是",
    "answer": "B",
    "explain": "畜牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与畜牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01694",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析畜牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "畜牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01695",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断畜牧业最准确的是",
    "answer": "D",
    "explain": "畜牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01696",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于畜牧业的地区差异说法正确",
    "answer": "B",
    "explain": "畜牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01698",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水稻季风密切相关的是",
    "answer": "B",
    "explain": "水稻季风的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水稻季风成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01699",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水稻季风时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水稻季风分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01700",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水稻季风最准确的是",
    "answer": "D",
    "explain": "水稻季风判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01701",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水稻季风的地区差异说法正确",
    "answer": "B",
    "explain": "水稻季风存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01703",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与小麦密切相关的是",
    "answer": "B",
    "explain": "小麦的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与小麦成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01704",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析小麦时,首先要考虑的因素是",
    "answer": "A",
    "explain": "小麦分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01705",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断小麦最准确的是",
    "answer": "D",
    "explain": "小麦判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01706",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于小麦的地区差异说法正确",
    "answer": "B",
    "explain": "小麦存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01708",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与混合农业密切相关的是",
    "answer": "B",
    "explain": "混合农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与混合农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01709",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析混合农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "混合农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01710",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断混合农业最准确的是",
    "answer": "D",
    "explain": "混合农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01711",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于混合农业的地区差异说法正确",
    "answer": "B",
    "explain": "混合农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01713",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与乳畜业密切相关的是",
    "answer": "B",
    "explain": "乳畜业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与乳畜业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01714",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析乳畜业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "乳畜业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01715",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断乳畜业最准确的是",
    "answer": "D",
    "explain": "乳畜业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01716",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于乳畜业的地区差异说法正确",
    "answer": "B",
    "explain": "乳畜业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01718",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与大牧场放牧业密切相关的是",
    "answer": "B",
    "explain": "大牧场放牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与大牧场放牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01719",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析大牧场放牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "大牧场放牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01720",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断大牧场放牧业最准确的是",
    "answer": "D",
    "explain": "大牧场放牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01721",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大牧场放牧业的地区差异说法正确",
    "answer": "B",
    "explain": "大牧场放牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01723",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与农业区位密切相关的是",
    "answer": "B",
    "explain": "农业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与农业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01724",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析农业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "农业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01725",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断农业区位最准确的是",
    "answer": "D",
    "explain": "农业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01726",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于农业区位的地区差异说法正确",
    "answer": "B",
    "explain": "农业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01728",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气候对农业密切相关的是",
    "answer": "B",
    "explain": "气候对农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气候对农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01729",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气候对农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气候对农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01730",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气候对农业最准确的是",
    "answer": "D",
    "explain": "气候对农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01731",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候对农业的地区差异说法正确",
    "answer": "B",
    "explain": "气候对农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01733",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水源密切相关的是",
    "answer": "B",
    "explain": "水源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01734",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01735",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水源最准确的是",
    "answer": "D",
    "explain": "水源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01736",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水源的地区差异说法正确",
    "answer": "B",
    "explain": "水源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01738",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与种植业密切相关的是",
    "answer": "B",
    "explain": "种植业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与种植业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01739",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析种植业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "种植业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01740",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断种植业最准确的是",
    "answer": "D",
    "explain": "种植业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01741",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于种植业的地区差异说法正确",
    "answer": "B",
    "explain": "种植业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01743",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与畜牧业密切相关的是",
    "answer": "B",
    "explain": "畜牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与畜牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01744",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析畜牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "畜牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01745",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断畜牧业最准确的是",
    "answer": "D",
    "explain": "畜牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01746",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于畜牧业的地区差异说法正确",
    "answer": "B",
    "explain": "畜牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01748",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水稻季风密切相关的是",
    "answer": "B",
    "explain": "水稻季风的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水稻季风成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01749",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水稻季风时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水稻季风分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01750",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水稻季风最准确的是",
    "answer": "D",
    "explain": "水稻季风判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01751",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水稻季风的地区差异说法正确",
    "answer": "B",
    "explain": "水稻季风存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01753",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与小麦密切相关的是",
    "answer": "B",
    "explain": "小麦的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与小麦成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01754",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析小麦时,首先要考虑的因素是",
    "answer": "A",
    "explain": "小麦分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01755",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断小麦最准确的是",
    "answer": "D",
    "explain": "小麦判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01756",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于小麦的地区差异说法正确",
    "answer": "B",
    "explain": "小麦存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01758",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与混合农业密切相关的是",
    "answer": "B",
    "explain": "混合农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与混合农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01759",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析混合农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "混合农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01760",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断混合农业最准确的是",
    "answer": "D",
    "explain": "混合农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01761",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于混合农业的地区差异说法正确",
    "answer": "B",
    "explain": "混合农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01763",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与乳畜业密切相关的是",
    "answer": "B",
    "explain": "乳畜业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与乳畜业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01764",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析乳畜业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "乳畜业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01765",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断乳畜业最准确的是",
    "answer": "D",
    "explain": "乳畜业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01766",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于乳畜业的地区差异说法正确",
    "answer": "B",
    "explain": "乳畜业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01768",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与大牧场放牧业密切相关的是",
    "answer": "B",
    "explain": "大牧场放牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与大牧场放牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01769",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析大牧场放牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "大牧场放牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01770",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断大牧场放牧业最准确的是",
    "answer": "D",
    "explain": "大牧场放牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01771",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大牧场放牧业的地区差异说法正确",
    "answer": "B",
    "explain": "大牧场放牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01773",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与农业区位密切相关的是",
    "answer": "B",
    "explain": "农业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与农业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01774",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析农业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "农业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01775",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断农业区位最准确的是",
    "answer": "D",
    "explain": "农业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01776",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于农业区位的地区差异说法正确",
    "answer": "B",
    "explain": "农业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01778",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气候对农业密切相关的是",
    "answer": "B",
    "explain": "气候对农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气候对农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01779",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气候对农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气候对农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01780",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气候对农业最准确的是",
    "answer": "D",
    "explain": "气候对农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01781",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候对农业的地区差异说法正确",
    "answer": "B",
    "explain": "气候对农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01783",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水源密切相关的是",
    "answer": "B",
    "explain": "水源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01784",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01785",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水源最准确的是",
    "answer": "D",
    "explain": "水源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01786",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水源的地区差异说法正确",
    "answer": "B",
    "explain": "水源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01788",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与种植业密切相关的是",
    "answer": "B",
    "explain": "种植业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与种植业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01789",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析种植业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "种植业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01790",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断种植业最准确的是",
    "answer": "D",
    "explain": "种植业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01791",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于种植业的地区差异说法正确",
    "answer": "B",
    "explain": "种植业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01793",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与畜牧业密切相关的是",
    "answer": "B",
    "explain": "畜牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与畜牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01794",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析畜牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "畜牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01795",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断畜牧业最准确的是",
    "answer": "D",
    "explain": "畜牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01796",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于畜牧业的地区差异说法正确",
    "answer": "B",
    "explain": "畜牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01798",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水稻季风密切相关的是",
    "answer": "B",
    "explain": "水稻季风的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水稻季风成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01799",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水稻季风时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水稻季风分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01800",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水稻季风最准确的是",
    "answer": "D",
    "explain": "水稻季风判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01801",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水稻季风的地区差异说法正确",
    "answer": "B",
    "explain": "水稻季风存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01803",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与小麦密切相关的是",
    "answer": "B",
    "explain": "小麦的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与小麦成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01804",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析小麦时,首先要考虑的因素是",
    "answer": "A",
    "explain": "小麦分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01805",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断小麦最准确的是",
    "answer": "D",
    "explain": "小麦判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01806",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于小麦的地区差异说法正确",
    "answer": "B",
    "explain": "小麦存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01808",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与混合农业密切相关的是",
    "answer": "B",
    "explain": "混合农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与混合农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01809",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析混合农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "混合农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01810",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断混合农业最准确的是",
    "answer": "D",
    "explain": "混合农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01811",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于混合农业的地区差异说法正确",
    "answer": "B",
    "explain": "混合农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01813",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与乳畜业密切相关的是",
    "answer": "B",
    "explain": "乳畜业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与乳畜业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01814",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析乳畜业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "乳畜业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01815",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断乳畜业最准确的是",
    "answer": "D",
    "explain": "乳畜业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01816",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于乳畜业的地区差异说法正确",
    "answer": "B",
    "explain": "乳畜业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01818",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与大牧场放牧业密切相关的是",
    "answer": "B",
    "explain": "大牧场放牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与大牧场放牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01819",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析大牧场放牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "大牧场放牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01820",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断大牧场放牧业最准确的是",
    "answer": "D",
    "explain": "大牧场放牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01821",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大牧场放牧业的地区差异说法正确",
    "answer": "B",
    "explain": "大牧场放牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01823",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与农业区位密切相关的是",
    "answer": "B",
    "explain": "农业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与农业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01824",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析农业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "农业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01825",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断农业区位最准确的是",
    "answer": "D",
    "explain": "农业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01826",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于农业区位的地区差异说法正确",
    "answer": "B",
    "explain": "农业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01828",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气候对农业密切相关的是",
    "answer": "B",
    "explain": "气候对农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气候对农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01829",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气候对农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气候对农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01830",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气候对农业最准确的是",
    "answer": "D",
    "explain": "气候对农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01831",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候对农业的地区差异说法正确",
    "answer": "B",
    "explain": "气候对农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01833",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水源密切相关的是",
    "answer": "B",
    "explain": "水源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01834",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01835",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水源最准确的是",
    "answer": "D",
    "explain": "水源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01836",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水源的地区差异说法正确",
    "answer": "B",
    "explain": "水源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01838",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与种植业密切相关的是",
    "answer": "B",
    "explain": "种植业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与种植业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01839",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析种植业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "种植业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01840",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断种植业最准确的是",
    "answer": "D",
    "explain": "种植业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01841",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于种植业的地区差异说法正确",
    "answer": "B",
    "explain": "种植业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01843",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与畜牧业密切相关的是",
    "answer": "B",
    "explain": "畜牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与畜牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01844",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析畜牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "畜牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01845",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断畜牧业最准确的是",
    "answer": "D",
    "explain": "畜牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01846",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于畜牧业的地区差异说法正确",
    "answer": "B",
    "explain": "畜牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01848",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水稻季风密切相关的是",
    "answer": "B",
    "explain": "水稻季风的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水稻季风成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01849",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水稻季风时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水稻季风分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01850",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水稻季风最准确的是",
    "answer": "D",
    "explain": "水稻季风判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01851",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水稻季风的地区差异说法正确",
    "answer": "B",
    "explain": "水稻季风存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01853",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与小麦密切相关的是",
    "answer": "B",
    "explain": "小麦的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与小麦成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01854",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析小麦时,首先要考虑的因素是",
    "answer": "A",
    "explain": "小麦分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01855",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断小麦最准确的是",
    "answer": "D",
    "explain": "小麦判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01856",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于小麦的地区差异说法正确",
    "answer": "B",
    "explain": "小麦存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01858",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与混合农业密切相关的是",
    "answer": "B",
    "explain": "混合农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与混合农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01859",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析混合农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "混合农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01860",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断混合农业最准确的是",
    "answer": "D",
    "explain": "混合农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01861",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于混合农业的地区差异说法正确",
    "answer": "B",
    "explain": "混合农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01863",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与乳畜业密切相关的是",
    "answer": "B",
    "explain": "乳畜业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与乳畜业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01864",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析乳畜业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "乳畜业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01865",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断乳畜业最准确的是",
    "answer": "D",
    "explain": "乳畜业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01866",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于乳畜业的地区差异说法正确",
    "answer": "B",
    "explain": "乳畜业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01868",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与大牧场放牧业密切相关的是",
    "answer": "B",
    "explain": "大牧场放牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与大牧场放牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01869",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析大牧场放牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "大牧场放牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01870",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断大牧场放牧业最准确的是",
    "answer": "D",
    "explain": "大牧场放牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01871",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于大牧场放牧业的地区差异说法正确",
    "answer": "B",
    "explain": "大牧场放牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01873",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与农业区位密切相关的是",
    "answer": "B",
    "explain": "农业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与农业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01874",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析农业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "农业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01875",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断农业区位最准确的是",
    "answer": "D",
    "explain": "农业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01876",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于农业区位的地区差异说法正确",
    "answer": "B",
    "explain": "农业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01878",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与气候对农业密切相关的是",
    "answer": "B",
    "explain": "气候对农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与气候对农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01879",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析气候对农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "气候对农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01880",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断气候对农业最准确的是",
    "answer": "D",
    "explain": "气候对农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01881",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于气候对农业的地区差异说法正确",
    "answer": "B",
    "explain": "气候对农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01883",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水源密切相关的是",
    "answer": "B",
    "explain": "水源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01884",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01885",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水源最准确的是",
    "answer": "D",
    "explain": "水源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01886",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水源的地区差异说法正确",
    "answer": "B",
    "explain": "水源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01888",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与种植业密切相关的是",
    "answer": "B",
    "explain": "种植业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与种植业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01889",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析种植业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "种植业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01890",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断种植业最准确的是",
    "answer": "D",
    "explain": "种植业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01891",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于种植业的地区差异说法正确",
    "answer": "B",
    "explain": "种植业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01893",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与畜牧业密切相关的是",
    "answer": "B",
    "explain": "畜牧业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与畜牧业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01894",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析畜牧业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "畜牧业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01895",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断畜牧业最准确的是",
    "answer": "D",
    "explain": "畜牧业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01896",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于畜牧业的地区差异说法正确",
    "answer": "B",
    "explain": "畜牧业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01898",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水稻季风密切相关的是",
    "answer": "B",
    "explain": "水稻季风的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水稻季风成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01899",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水稻季风时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水稻季风分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01900",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水稻季风最准确的是",
    "answer": "D",
    "explain": "水稻季风判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01901",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水稻季风的地区差异说法正确",
    "answer": "B",
    "explain": "水稻季风存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01903",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与小麦密切相关的是",
    "answer": "B",
    "explain": "小麦的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与小麦成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01904",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析小麦时,首先要考虑的因素是",
    "answer": "A",
    "explain": "小麦分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01905",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断小麦最准确的是",
    "answer": "D",
    "explain": "小麦判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01906",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于小麦的地区差异说法正确",
    "answer": "B",
    "explain": "小麦存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01908",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与混合农业密切相关的是",
    "answer": "B",
    "explain": "混合农业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与混合农业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01909",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "分析混合农业时,首先要考虑的因素是",
    "answer": "A",
    "explain": "混合农业分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01910",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断混合农业最准确的是",
    "answer": "D",
    "explain": "混合农业判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01911",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于混合农业的地区差异说法正确",
    "answer": "B",
    "explain": "混合农业存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01913",
    "manualId": "geo_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与乳畜业密切相关的是",
    "answer": "B",
    "explain": "乳畜业的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与乳畜业成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01915",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业区位密切相关的是",
    "answer": "B",
    "explain": "工业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01916",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01917",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业区位最准确的是",
    "answer": "D",
    "explain": "工业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01918",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业区位的地区差异说法正确",
    "answer": "B",
    "explain": "工业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01920",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与原料指向型密切相关的是",
    "answer": "B",
    "explain": "原料指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与原料指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01921",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析原料指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "原料指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01922",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断原料指向型最准确的是",
    "answer": "D",
    "explain": "原料指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01923",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于原料指向型的地区差异说法正确",
    "answer": "B",
    "explain": "原料指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01925",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与市场指向型密切相关的是",
    "answer": "B",
    "explain": "市场指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与市场指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01926",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析市场指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "市场指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01927",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断市场指向型最准确的是",
    "answer": "D",
    "explain": "市场指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01928",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于市场指向型的地区差异说法正确",
    "answer": "B",
    "explain": "市场指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01930",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与动力指向型密切相关的是",
    "answer": "B",
    "explain": "动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01931",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01932",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断动力指向型最准确的是",
    "answer": "D",
    "explain": "动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01933",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01935",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与劳动力指向型密切相关的是",
    "answer": "B",
    "explain": "劳动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与劳动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01936",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析劳动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "劳动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01937",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断劳动力指向型最准确的是",
    "answer": "D",
    "explain": "劳动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01938",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于劳动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "劳动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01940",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与技术指向型密切相关的是",
    "answer": "B",
    "explain": "技术指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与技术指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01941",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析技术指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "技术指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01942",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断技术指向型最准确的是",
    "answer": "D",
    "explain": "技术指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01943",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于技术指向型的地区差异说法正确",
    "answer": "B",
    "explain": "技术指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01945",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业集聚密切相关的是",
    "answer": "B",
    "explain": "工业集聚的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业集聚成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01946",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业集聚时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业集聚分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01947",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业集聚最准确的是",
    "answer": "D",
    "explain": "工业集聚判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01948",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业集聚的地区差异说法正确",
    "answer": "B",
    "explain": "工业集聚存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01950",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业分散密切相关的是",
    "answer": "B",
    "explain": "工业分散的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业分散成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01951",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业分散时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业分散分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01952",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业分散最准确的是",
    "answer": "D",
    "explain": "工业分散判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01953",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业分散的地区差异说法正确",
    "answer": "B",
    "explain": "工业分散存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01955",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与传统工业区密切相关的是",
    "answer": "B",
    "explain": "传统工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与传统工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01956",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析传统工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "传统工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01957",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断传统工业区最准确的是",
    "answer": "D",
    "explain": "传统工业区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01958",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于传统工业区的地区差异说法正确",
    "answer": "B",
    "explain": "传统工业区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01960",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与新兴工业区密切相关的是",
    "answer": "B",
    "explain": "新兴工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与新兴工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01961",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析新兴工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "新兴工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01962",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断新兴工业区最准确的是",
    "answer": "D",
    "explain": "新兴工业区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01963",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于新兴工业区的地区差异说法正确",
    "answer": "B",
    "explain": "新兴工业区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01965",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业区位密切相关的是",
    "answer": "B",
    "explain": "工业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01966",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01967",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业区位最准确的是",
    "answer": "D",
    "explain": "工业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01968",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业区位的地区差异说法正确",
    "answer": "B",
    "explain": "工业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01970",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与原料指向型密切相关的是",
    "answer": "B",
    "explain": "原料指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与原料指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01971",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析原料指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "原料指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01972",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断原料指向型最准确的是",
    "answer": "D",
    "explain": "原料指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01973",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于原料指向型的地区差异说法正确",
    "answer": "B",
    "explain": "原料指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01975",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与市场指向型密切相关的是",
    "answer": "B",
    "explain": "市场指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与市场指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01976",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析市场指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "市场指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01977",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断市场指向型最准确的是",
    "answer": "D",
    "explain": "市场指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01978",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于市场指向型的地区差异说法正确",
    "answer": "B",
    "explain": "市场指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01980",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与动力指向型密切相关的是",
    "answer": "B",
    "explain": "动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01981",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01982",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断动力指向型最准确的是",
    "answer": "D",
    "explain": "动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01983",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01985",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与劳动力指向型密切相关的是",
    "answer": "B",
    "explain": "劳动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与劳动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01986",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析劳动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "劳动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01987",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断劳动力指向型最准确的是",
    "answer": "D",
    "explain": "劳动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01988",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于劳动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "劳动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01990",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与技术指向型密切相关的是",
    "answer": "B",
    "explain": "技术指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与技术指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01991",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析技术指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "技术指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01992",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断技术指向型最准确的是",
    "answer": "D",
    "explain": "技术指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01993",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于技术指向型的地区差异说法正确",
    "answer": "B",
    "explain": "技术指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_01995",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业集聚密切相关的是",
    "answer": "B",
    "explain": "工业集聚的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业集聚成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_01996",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业集聚时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业集聚分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_01997",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业集聚最准确的是",
    "answer": "D",
    "explain": "工业集聚判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_01998",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业集聚的地区差异说法正确",
    "answer": "B",
    "explain": "工业集聚存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02000",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业分散密切相关的是",
    "answer": "B",
    "explain": "工业分散的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业分散成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02001",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业分散时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业分散分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02002",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业分散最准确的是",
    "answer": "D",
    "explain": "工业分散判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02003",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业分散的地区差异说法正确",
    "answer": "B",
    "explain": "工业分散存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02005",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与传统工业区密切相关的是",
    "answer": "B",
    "explain": "传统工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与传统工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02006",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析传统工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "传统工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02007",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断传统工业区最准确的是",
    "answer": "D",
    "explain": "传统工业区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02008",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于传统工业区的地区差异说法正确",
    "answer": "B",
    "explain": "传统工业区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02010",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与新兴工业区密切相关的是",
    "answer": "B",
    "explain": "新兴工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与新兴工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02011",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析新兴工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "新兴工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02012",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断新兴工业区最准确的是",
    "answer": "D",
    "explain": "新兴工业区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02013",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于新兴工业区的地区差异说法正确",
    "answer": "B",
    "explain": "新兴工业区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02015",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业区位密切相关的是",
    "answer": "B",
    "explain": "工业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02016",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02017",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业区位最准确的是",
    "answer": "D",
    "explain": "工业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02018",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业区位的地区差异说法正确",
    "answer": "B",
    "explain": "工业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02020",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与原料指向型密切相关的是",
    "answer": "B",
    "explain": "原料指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与原料指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02021",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析原料指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "原料指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02022",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断原料指向型最准确的是",
    "answer": "D",
    "explain": "原料指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02023",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于原料指向型的地区差异说法正确",
    "answer": "B",
    "explain": "原料指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02025",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与市场指向型密切相关的是",
    "answer": "B",
    "explain": "市场指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与市场指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02026",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析市场指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "市场指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02027",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断市场指向型最准确的是",
    "answer": "D",
    "explain": "市场指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02028",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于市场指向型的地区差异说法正确",
    "answer": "B",
    "explain": "市场指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02030",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与动力指向型密切相关的是",
    "answer": "B",
    "explain": "动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02031",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02032",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断动力指向型最准确的是",
    "answer": "D",
    "explain": "动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02033",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02035",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与劳动力指向型密切相关的是",
    "answer": "B",
    "explain": "劳动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与劳动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02036",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析劳动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "劳动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02037",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断劳动力指向型最准确的是",
    "answer": "D",
    "explain": "劳动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02038",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于劳动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "劳动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02040",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与技术指向型密切相关的是",
    "answer": "B",
    "explain": "技术指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与技术指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02041",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析技术指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "技术指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02042",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断技术指向型最准确的是",
    "answer": "D",
    "explain": "技术指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02043",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于技术指向型的地区差异说法正确",
    "answer": "B",
    "explain": "技术指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02045",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业集聚密切相关的是",
    "answer": "B",
    "explain": "工业集聚的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业集聚成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02046",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业集聚时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业集聚分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02047",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业集聚最准确的是",
    "answer": "D",
    "explain": "工业集聚判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02048",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业集聚的地区差异说法正确",
    "answer": "B",
    "explain": "工业集聚存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02050",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业分散密切相关的是",
    "answer": "B",
    "explain": "工业分散的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业分散成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02051",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业分散时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业分散分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02052",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业分散最准确的是",
    "answer": "D",
    "explain": "工业分散判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02053",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业分散的地区差异说法正确",
    "answer": "B",
    "explain": "工业分散存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02055",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与传统工业区密切相关的是",
    "answer": "B",
    "explain": "传统工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与传统工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02056",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析传统工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "传统工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02057",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断传统工业区最准确的是",
    "answer": "D",
    "explain": "传统工业区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02058",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于传统工业区的地区差异说法正确",
    "answer": "B",
    "explain": "传统工业区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02060",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与新兴工业区密切相关的是",
    "answer": "B",
    "explain": "新兴工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与新兴工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02061",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析新兴工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "新兴工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02062",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断新兴工业区最准确的是",
    "answer": "D",
    "explain": "新兴工业区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02063",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于新兴工业区的地区差异说法正确",
    "answer": "B",
    "explain": "新兴工业区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02065",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业区位密切相关的是",
    "answer": "B",
    "explain": "工业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02066",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02067",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业区位最准确的是",
    "answer": "D",
    "explain": "工业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02068",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业区位的地区差异说法正确",
    "answer": "B",
    "explain": "工业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02070",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与原料指向型密切相关的是",
    "answer": "B",
    "explain": "原料指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与原料指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02071",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析原料指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "原料指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02072",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断原料指向型最准确的是",
    "answer": "D",
    "explain": "原料指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02073",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于原料指向型的地区差异说法正确",
    "answer": "B",
    "explain": "原料指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02075",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与市场指向型密切相关的是",
    "answer": "B",
    "explain": "市场指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与市场指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02076",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析市场指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "市场指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02077",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断市场指向型最准确的是",
    "answer": "D",
    "explain": "市场指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02078",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于市场指向型的地区差异说法正确",
    "answer": "B",
    "explain": "市场指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02080",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与动力指向型密切相关的是",
    "answer": "B",
    "explain": "动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02081",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02082",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断动力指向型最准确的是",
    "answer": "D",
    "explain": "动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02083",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02085",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与劳动力指向型密切相关的是",
    "answer": "B",
    "explain": "劳动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与劳动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02086",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析劳动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "劳动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02087",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断劳动力指向型最准确的是",
    "answer": "D",
    "explain": "劳动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02088",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于劳动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "劳动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02090",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与技术指向型密切相关的是",
    "answer": "B",
    "explain": "技术指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与技术指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02091",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析技术指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "技术指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02092",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断技术指向型最准确的是",
    "answer": "D",
    "explain": "技术指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02093",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于技术指向型的地区差异说法正确",
    "answer": "B",
    "explain": "技术指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02095",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业集聚密切相关的是",
    "answer": "B",
    "explain": "工业集聚的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业集聚成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02096",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业集聚时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业集聚分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02097",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业集聚最准确的是",
    "answer": "D",
    "explain": "工业集聚判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02098",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业集聚的地区差异说法正确",
    "answer": "B",
    "explain": "工业集聚存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02100",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业分散密切相关的是",
    "answer": "B",
    "explain": "工业分散的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业分散成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02101",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业分散时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业分散分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02102",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业分散最准确的是",
    "answer": "D",
    "explain": "工业分散判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02103",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业分散的地区差异说法正确",
    "answer": "B",
    "explain": "工业分散存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02105",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与传统工业区密切相关的是",
    "answer": "B",
    "explain": "传统工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与传统工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02106",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析传统工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "传统工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02107",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断传统工业区最准确的是",
    "answer": "D",
    "explain": "传统工业区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02108",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于传统工业区的地区差异说法正确",
    "answer": "B",
    "explain": "传统工业区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02110",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与新兴工业区密切相关的是",
    "answer": "B",
    "explain": "新兴工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与新兴工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02111",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析新兴工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "新兴工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02112",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断新兴工业区最准确的是",
    "answer": "D",
    "explain": "新兴工业区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02113",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于新兴工业区的地区差异说法正确",
    "answer": "B",
    "explain": "新兴工业区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02115",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业区位密切相关的是",
    "answer": "B",
    "explain": "工业区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02116",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02117",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业区位最准确的是",
    "answer": "D",
    "explain": "工业区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02118",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业区位的地区差异说法正确",
    "answer": "B",
    "explain": "工业区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02120",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与原料指向型密切相关的是",
    "answer": "B",
    "explain": "原料指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与原料指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02121",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析原料指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "原料指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02122",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断原料指向型最准确的是",
    "answer": "D",
    "explain": "原料指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02123",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于原料指向型的地区差异说法正确",
    "answer": "B",
    "explain": "原料指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02125",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与市场指向型密切相关的是",
    "answer": "B",
    "explain": "市场指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与市场指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02126",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析市场指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "市场指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02127",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断市场指向型最准确的是",
    "answer": "D",
    "explain": "市场指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02128",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于市场指向型的地区差异说法正确",
    "answer": "B",
    "explain": "市场指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02130",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与动力指向型密切相关的是",
    "answer": "B",
    "explain": "动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02131",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02132",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断动力指向型最准确的是",
    "answer": "D",
    "explain": "动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02133",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02135",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与劳动力指向型密切相关的是",
    "answer": "B",
    "explain": "劳动力指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与劳动力指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02136",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析劳动力指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "劳动力指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02137",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断劳动力指向型最准确的是",
    "answer": "D",
    "explain": "劳动力指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02138",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于劳动力指向型的地区差异说法正确",
    "answer": "B",
    "explain": "劳动力指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02140",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与技术指向型密切相关的是",
    "answer": "B",
    "explain": "技术指向型的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与技术指向型成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02141",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析技术指向型时,首先要考虑的因素是",
    "answer": "A",
    "explain": "技术指向型分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02142",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断技术指向型最准确的是",
    "answer": "D",
    "explain": "技术指向型判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02143",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于技术指向型的地区差异说法正确",
    "answer": "B",
    "explain": "技术指向型存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02145",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业集聚密切相关的是",
    "answer": "B",
    "explain": "工业集聚的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业集聚成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02146",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业集聚时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业集聚分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02147",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业集聚最准确的是",
    "answer": "D",
    "explain": "工业集聚判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02148",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业集聚的地区差异说法正确",
    "answer": "B",
    "explain": "工业集聚存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02150",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与工业分散密切相关的是",
    "answer": "B",
    "explain": "工业分散的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与工业分散成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02151",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析工业分散时,首先要考虑的因素是",
    "answer": "A",
    "explain": "工业分散分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02152",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断工业分散最准确的是",
    "answer": "D",
    "explain": "工业分散判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02153",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于工业分散的地区差异说法正确",
    "answer": "B",
    "explain": "工业分散存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02155",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与传统工业区密切相关的是",
    "answer": "B",
    "explain": "传统工业区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与传统工业区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02156",
    "manualId": "geo_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "分析传统工业区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "传统工业区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02158",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与公路密切相关的是",
    "answer": "B",
    "explain": "公路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与公路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02159",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析公路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "公路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02160",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断公路最准确的是",
    "answer": "D",
    "explain": "公路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02161",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于公路的地区差异说法正确",
    "answer": "B",
    "explain": "公路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02163",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与铁路密切相关的是",
    "answer": "B",
    "explain": "铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02164",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02165",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断铁路最准确的是",
    "answer": "D",
    "explain": "铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02166",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于铁路的地区差异说法正确",
    "answer": "B",
    "explain": "铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02168",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水运密切相关的是",
    "answer": "B",
    "explain": "水运的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水运成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02169",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水运时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水运分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02170",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水运最准确的是",
    "answer": "D",
    "explain": "水运判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02171",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水运的地区差异说法正确",
    "answer": "B",
    "explain": "水运存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02173",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与航空密切相关的是",
    "answer": "B",
    "explain": "航空的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与航空成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02174",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析航空时,首先要考虑的因素是",
    "answer": "A",
    "explain": "航空分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02175",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断航空最准确的是",
    "answer": "D",
    "explain": "航空判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02176",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于航空的地区差异说法正确",
    "answer": "B",
    "explain": "航空存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02178",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与管道密切相关的是",
    "answer": "B",
    "explain": "管道的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与管道成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02179",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析管道时,首先要考虑的因素是",
    "answer": "A",
    "explain": "管道分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02180",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断管道最准确的是",
    "answer": "D",
    "explain": "管道判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02181",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于管道的地区差异说法正确",
    "answer": "B",
    "explain": "管道存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02183",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与交通线区位密切相关的是",
    "answer": "B",
    "explain": "交通线区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与交通线区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02184",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析交通线区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "交通线区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02185",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断交通线区位最准确的是",
    "answer": "D",
    "explain": "交通线区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02186",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于交通线区位的地区差异说法正确",
    "answer": "B",
    "explain": "交通线区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02188",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与港口密切相关的是",
    "answer": "B",
    "explain": "港口的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与港口成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02189",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析港口时,首先要考虑的因素是",
    "answer": "A",
    "explain": "港口分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02190",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断港口最准确的是",
    "answer": "D",
    "explain": "港口判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02191",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于港口的地区差异说法正确",
    "answer": "B",
    "explain": "港口存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02193",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与机场密切相关的是",
    "answer": "B",
    "explain": "机场的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与机场成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02194",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析机场时,首先要考虑的因素是",
    "answer": "A",
    "explain": "机场分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02195",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断机场最准确的是",
    "answer": "D",
    "explain": "机场判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02196",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于机场的地区差异说法正确",
    "answer": "B",
    "explain": "机场存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02198",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市交通密切相关的是",
    "answer": "B",
    "explain": "城市交通的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市交通成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02199",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市交通时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市交通分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02200",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市交通最准确的是",
    "answer": "D",
    "explain": "城市交通判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02201",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市交通的地区差异说法正确",
    "answer": "B",
    "explain": "城市交通存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02203",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与高速铁路密切相关的是",
    "answer": "B",
    "explain": "高速铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与高速铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02204",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析高速铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "高速铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02205",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断高速铁路最准确的是",
    "answer": "D",
    "explain": "高速铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02206",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于高速铁路的地区差异说法正确",
    "answer": "B",
    "explain": "高速铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02208",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与公路密切相关的是",
    "answer": "B",
    "explain": "公路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与公路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02209",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析公路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "公路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02210",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断公路最准确的是",
    "answer": "D",
    "explain": "公路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02211",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于公路的地区差异说法正确",
    "answer": "B",
    "explain": "公路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02213",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与铁路密切相关的是",
    "answer": "B",
    "explain": "铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02214",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02215",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断铁路最准确的是",
    "answer": "D",
    "explain": "铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02216",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于铁路的地区差异说法正确",
    "answer": "B",
    "explain": "铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02218",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水运密切相关的是",
    "answer": "B",
    "explain": "水运的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水运成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02219",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水运时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水运分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02220",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水运最准确的是",
    "answer": "D",
    "explain": "水运判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02221",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水运的地区差异说法正确",
    "answer": "B",
    "explain": "水运存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02223",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与航空密切相关的是",
    "answer": "B",
    "explain": "航空的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与航空成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02224",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析航空时,首先要考虑的因素是",
    "answer": "A",
    "explain": "航空分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02225",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断航空最准确的是",
    "answer": "D",
    "explain": "航空判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02226",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于航空的地区差异说法正确",
    "answer": "B",
    "explain": "航空存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02228",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与管道密切相关的是",
    "answer": "B",
    "explain": "管道的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与管道成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02229",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析管道时,首先要考虑的因素是",
    "answer": "A",
    "explain": "管道分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02230",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断管道最准确的是",
    "answer": "D",
    "explain": "管道判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02231",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于管道的地区差异说法正确",
    "answer": "B",
    "explain": "管道存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02233",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与交通线区位密切相关的是",
    "answer": "B",
    "explain": "交通线区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与交通线区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02234",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析交通线区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "交通线区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02235",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断交通线区位最准确的是",
    "answer": "D",
    "explain": "交通线区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02236",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于交通线区位的地区差异说法正确",
    "answer": "B",
    "explain": "交通线区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02238",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与港口密切相关的是",
    "answer": "B",
    "explain": "港口的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与港口成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02239",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析港口时,首先要考虑的因素是",
    "answer": "A",
    "explain": "港口分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02240",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断港口最准确的是",
    "answer": "D",
    "explain": "港口判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02241",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于港口的地区差异说法正确",
    "answer": "B",
    "explain": "港口存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02243",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与机场密切相关的是",
    "answer": "B",
    "explain": "机场的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与机场成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02244",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析机场时,首先要考虑的因素是",
    "answer": "A",
    "explain": "机场分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02245",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断机场最准确的是",
    "answer": "D",
    "explain": "机场判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02246",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于机场的地区差异说法正确",
    "answer": "B",
    "explain": "机场存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02248",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市交通密切相关的是",
    "answer": "B",
    "explain": "城市交通的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市交通成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02249",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市交通时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市交通分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02250",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市交通最准确的是",
    "answer": "D",
    "explain": "城市交通判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02251",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市交通的地区差异说法正确",
    "answer": "B",
    "explain": "城市交通存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02253",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与高速铁路密切相关的是",
    "answer": "B",
    "explain": "高速铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与高速铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02254",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析高速铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "高速铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02255",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断高速铁路最准确的是",
    "answer": "D",
    "explain": "高速铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02256",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于高速铁路的地区差异说法正确",
    "answer": "B",
    "explain": "高速铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02258",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与公路密切相关的是",
    "answer": "B",
    "explain": "公路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与公路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02259",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析公路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "公路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02260",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断公路最准确的是",
    "answer": "D",
    "explain": "公路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02261",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于公路的地区差异说法正确",
    "answer": "B",
    "explain": "公路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02263",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与铁路密切相关的是",
    "answer": "B",
    "explain": "铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02264",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02265",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断铁路最准确的是",
    "answer": "D",
    "explain": "铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02266",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于铁路的地区差异说法正确",
    "answer": "B",
    "explain": "铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02268",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水运密切相关的是",
    "answer": "B",
    "explain": "水运的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水运成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02269",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水运时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水运分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02270",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水运最准确的是",
    "answer": "D",
    "explain": "水运判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02271",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水运的地区差异说法正确",
    "answer": "B",
    "explain": "水运存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02273",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与航空密切相关的是",
    "answer": "B",
    "explain": "航空的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与航空成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02274",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析航空时,首先要考虑的因素是",
    "answer": "A",
    "explain": "航空分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02275",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断航空最准确的是",
    "answer": "D",
    "explain": "航空判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02276",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于航空的地区差异说法正确",
    "answer": "B",
    "explain": "航空存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02278",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与管道密切相关的是",
    "answer": "B",
    "explain": "管道的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与管道成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02279",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析管道时,首先要考虑的因素是",
    "answer": "A",
    "explain": "管道分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02280",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断管道最准确的是",
    "answer": "D",
    "explain": "管道判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02281",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于管道的地区差异说法正确",
    "answer": "B",
    "explain": "管道存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02283",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与交通线区位密切相关的是",
    "answer": "B",
    "explain": "交通线区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与交通线区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02284",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析交通线区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "交通线区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02285",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断交通线区位最准确的是",
    "answer": "D",
    "explain": "交通线区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02286",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于交通线区位的地区差异说法正确",
    "answer": "B",
    "explain": "交通线区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02288",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与港口密切相关的是",
    "answer": "B",
    "explain": "港口的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与港口成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02289",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析港口时,首先要考虑的因素是",
    "answer": "A",
    "explain": "港口分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02290",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断港口最准确的是",
    "answer": "D",
    "explain": "港口判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02291",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于港口的地区差异说法正确",
    "answer": "B",
    "explain": "港口存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02293",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与机场密切相关的是",
    "answer": "B",
    "explain": "机场的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与机场成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02294",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析机场时,首先要考虑的因素是",
    "answer": "A",
    "explain": "机场分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02295",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断机场最准确的是",
    "answer": "D",
    "explain": "机场判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02296",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于机场的地区差异说法正确",
    "answer": "B",
    "explain": "机场存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02298",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市交通密切相关的是",
    "answer": "B",
    "explain": "城市交通的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市交通成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02299",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市交通时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市交通分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02300",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市交通最准确的是",
    "answer": "D",
    "explain": "城市交通判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02301",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市交通的地区差异说法正确",
    "answer": "B",
    "explain": "城市交通存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02303",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与高速铁路密切相关的是",
    "answer": "B",
    "explain": "高速铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与高速铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02304",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析高速铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "高速铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02305",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断高速铁路最准确的是",
    "answer": "D",
    "explain": "高速铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02306",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于高速铁路的地区差异说法正确",
    "answer": "B",
    "explain": "高速铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02308",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与公路密切相关的是",
    "answer": "B",
    "explain": "公路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与公路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02309",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析公路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "公路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02310",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断公路最准确的是",
    "answer": "D",
    "explain": "公路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02311",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于公路的地区差异说法正确",
    "answer": "B",
    "explain": "公路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02313",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与铁路密切相关的是",
    "answer": "B",
    "explain": "铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02314",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02315",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断铁路最准确的是",
    "answer": "D",
    "explain": "铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02316",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于铁路的地区差异说法正确",
    "answer": "B",
    "explain": "铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02318",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水运密切相关的是",
    "answer": "B",
    "explain": "水运的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水运成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02319",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水运时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水运分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02320",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水运最准确的是",
    "answer": "D",
    "explain": "水运判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02321",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水运的地区差异说法正确",
    "answer": "B",
    "explain": "水运存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02323",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与航空密切相关的是",
    "answer": "B",
    "explain": "航空的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与航空成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02324",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析航空时,首先要考虑的因素是",
    "answer": "A",
    "explain": "航空分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02325",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断航空最准确的是",
    "answer": "D",
    "explain": "航空判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02326",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于航空的地区差异说法正确",
    "answer": "B",
    "explain": "航空存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02328",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与管道密切相关的是",
    "answer": "B",
    "explain": "管道的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与管道成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02329",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析管道时,首先要考虑的因素是",
    "answer": "A",
    "explain": "管道分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02330",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断管道最准确的是",
    "answer": "D",
    "explain": "管道判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02331",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于管道的地区差异说法正确",
    "answer": "B",
    "explain": "管道存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02333",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与交通线区位密切相关的是",
    "answer": "B",
    "explain": "交通线区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与交通线区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02334",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析交通线区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "交通线区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02335",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断交通线区位最准确的是",
    "answer": "D",
    "explain": "交通线区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02336",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于交通线区位的地区差异说法正确",
    "answer": "B",
    "explain": "交通线区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02338",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与港口密切相关的是",
    "answer": "B",
    "explain": "港口的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与港口成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02339",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析港口时,首先要考虑的因素是",
    "answer": "A",
    "explain": "港口分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02340",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断港口最准确的是",
    "answer": "D",
    "explain": "港口判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02341",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于港口的地区差异说法正确",
    "answer": "B",
    "explain": "港口存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02343",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与机场密切相关的是",
    "answer": "B",
    "explain": "机场的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与机场成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02344",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析机场时,首先要考虑的因素是",
    "answer": "A",
    "explain": "机场分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02345",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断机场最准确的是",
    "answer": "D",
    "explain": "机场判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02346",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于机场的地区差异说法正确",
    "answer": "B",
    "explain": "机场存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02348",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市交通密切相关的是",
    "answer": "B",
    "explain": "城市交通的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市交通成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02349",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市交通时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市交通分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02350",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市交通最准确的是",
    "answer": "D",
    "explain": "城市交通判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02351",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市交通的地区差异说法正确",
    "answer": "B",
    "explain": "城市交通存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02353",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与高速铁路密切相关的是",
    "answer": "B",
    "explain": "高速铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与高速铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02354",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析高速铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "高速铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02355",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断高速铁路最准确的是",
    "answer": "D",
    "explain": "高速铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02356",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于高速铁路的地区差异说法正确",
    "answer": "B",
    "explain": "高速铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02358",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与公路密切相关的是",
    "answer": "B",
    "explain": "公路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与公路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02359",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析公路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "公路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02360",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断公路最准确的是",
    "answer": "D",
    "explain": "公路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02361",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于公路的地区差异说法正确",
    "answer": "B",
    "explain": "公路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02363",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与铁路密切相关的是",
    "answer": "B",
    "explain": "铁路的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与铁路成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02364",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析铁路时,首先要考虑的因素是",
    "answer": "A",
    "explain": "铁路分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02365",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断铁路最准确的是",
    "answer": "D",
    "explain": "铁路判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02366",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于铁路的地区差异说法正确",
    "answer": "B",
    "explain": "铁路存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02368",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水运密切相关的是",
    "answer": "B",
    "explain": "水运的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水运成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02369",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水运时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水运分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02370",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水运最准确的是",
    "answer": "D",
    "explain": "水运判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02371",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水运的地区差异说法正确",
    "answer": "B",
    "explain": "水运存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02373",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与航空密切相关的是",
    "answer": "B",
    "explain": "航空的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与航空成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02374",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析航空时,首先要考虑的因素是",
    "answer": "A",
    "explain": "航空分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02375",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断航空最准确的是",
    "answer": "D",
    "explain": "航空判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02376",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于航空的地区差异说法正确",
    "answer": "B",
    "explain": "航空存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02378",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与管道密切相关的是",
    "answer": "B",
    "explain": "管道的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与管道成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02379",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析管道时,首先要考虑的因素是",
    "answer": "A",
    "explain": "管道分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02380",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断管道最准确的是",
    "answer": "D",
    "explain": "管道判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02381",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于管道的地区差异说法正确",
    "answer": "B",
    "explain": "管道存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02383",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与交通线区位密切相关的是",
    "answer": "B",
    "explain": "交通线区位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与交通线区位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02384",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析交通线区位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "交通线区位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02385",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断交通线区位最准确的是",
    "answer": "D",
    "explain": "交通线区位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02386",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于交通线区位的地区差异说法正确",
    "answer": "B",
    "explain": "交通线区位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02388",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与港口密切相关的是",
    "answer": "B",
    "explain": "港口的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与港口成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02389",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析港口时,首先要考虑的因素是",
    "answer": "A",
    "explain": "港口分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02390",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断港口最准确的是",
    "answer": "D",
    "explain": "港口判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02391",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于港口的地区差异说法正确",
    "answer": "B",
    "explain": "港口存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02393",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与机场密切相关的是",
    "answer": "B",
    "explain": "机场的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与机场成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02394",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析机场时,首先要考虑的因素是",
    "answer": "A",
    "explain": "机场分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02395",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断机场最准确的是",
    "answer": "D",
    "explain": "机场判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02396",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于机场的地区差异说法正确",
    "answer": "B",
    "explain": "机场存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02398",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与城市交通密切相关的是",
    "answer": "B",
    "explain": "城市交通的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与城市交通成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02399",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "分析城市交通时,首先要考虑的因素是",
    "answer": "A",
    "explain": "城市交通分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02400",
    "manualId": "geo_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断城市交通最准确的是",
    "answer": "D",
    "explain": "城市交通判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02402",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东部季风区密切相关的是",
    "answer": "B",
    "explain": "东部季风区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东部季风区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02403",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东部季风区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东部季风区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02404",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东部季风区最准确的是",
    "answer": "D",
    "explain": "东部季风区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02405",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东部季风区的地区差异说法正确",
    "answer": "B",
    "explain": "东部季风区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02407",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西北干旱区密切相关的是",
    "answer": "B",
    "explain": "西北干旱区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西北干旱区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02408",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西北干旱区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西北干旱区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02409",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西北干旱区最准确的是",
    "answer": "D",
    "explain": "西北干旱区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02410",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西北干旱区的地区差异说法正确",
    "answer": "B",
    "explain": "西北干旱区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02412",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与青藏高寒区密切相关的是",
    "answer": "B",
    "explain": "青藏高寒区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与青藏高寒区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02413",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析青藏高寒区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "青藏高寒区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02414",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断青藏高寒区最准确的是",
    "answer": "D",
    "explain": "青藏高寒区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02415",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于青藏高寒区的地区差异说法正确",
    "answer": "B",
    "explain": "青藏高寒区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02417",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南方地区密切相关的是",
    "answer": "B",
    "explain": "南方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02418",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02419",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南方地区最准确的是",
    "answer": "D",
    "explain": "南方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02420",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南方地区的地区差异说法正确",
    "answer": "B",
    "explain": "南方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02422",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与北方地区密切相关的是",
    "answer": "B",
    "explain": "北方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与北方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02423",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析北方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "北方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02424",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断北方地区最准确的是",
    "answer": "D",
    "explain": "北方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02425",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于北方地区的地区差异说法正确",
    "answer": "B",
    "explain": "北方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02427",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东北密切相关的是",
    "answer": "B",
    "explain": "东北的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东北成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02428",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东北时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东北分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02429",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东北最准确的是",
    "answer": "D",
    "explain": "东北判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02430",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东北的地区差异说法正确",
    "answer": "B",
    "explain": "东北存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02432",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西南密切相关的是",
    "answer": "B",
    "explain": "西南的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西南成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02433",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西南时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西南分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02434",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西南最准确的是",
    "answer": "D",
    "explain": "西南判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02435",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西南的地区差异说法正确",
    "answer": "B",
    "explain": "西南存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02437",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与黄土高原密切相关的是",
    "answer": "B",
    "explain": "黄土高原的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与黄土高原成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02438",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析黄土高原时,首先要考虑的因素是",
    "answer": "A",
    "explain": "黄土高原分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02439",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断黄土高原最准确的是",
    "answer": "D",
    "explain": "黄土高原判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02440",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于黄土高原的地区差异说法正确",
    "answer": "B",
    "explain": "黄土高原存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02442",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南水北调密切相关的是",
    "answer": "B",
    "explain": "南水北调的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南水北调成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02443",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南水北调时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南水北调分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02444",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南水北调最准确的是",
    "answer": "D",
    "explain": "南水北调判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02445",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南水北调的地区差异说法正确",
    "answer": "B",
    "explain": "南水北调存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02447",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西气东输密切相关的是",
    "answer": "B",
    "explain": "西气东输的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西气东输成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02448",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西气东输时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西气东输分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02449",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西气东输最准确的是",
    "answer": "D",
    "explain": "西气东输判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02450",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西气东输的地区差异说法正确",
    "answer": "B",
    "explain": "西气东输存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02452",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西电东送密切相关的是",
    "answer": "B",
    "explain": "西电东送的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西电东送成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02453",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西电东送时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西电东送分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02454",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西电东送最准确的是",
    "answer": "D",
    "explain": "西电东送判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02455",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西电东送的地区差异说法正确",
    "answer": "B",
    "explain": "西电东送存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02457",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东部季风区密切相关的是",
    "answer": "B",
    "explain": "东部季风区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东部季风区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02458",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东部季风区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东部季风区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02459",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东部季风区最准确的是",
    "answer": "D",
    "explain": "东部季风区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02460",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东部季风区的地区差异说法正确",
    "answer": "B",
    "explain": "东部季风区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02462",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西北干旱区密切相关的是",
    "answer": "B",
    "explain": "西北干旱区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西北干旱区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02463",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西北干旱区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西北干旱区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02464",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西北干旱区最准确的是",
    "answer": "D",
    "explain": "西北干旱区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02465",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西北干旱区的地区差异说法正确",
    "answer": "B",
    "explain": "西北干旱区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02467",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与青藏高寒区密切相关的是",
    "answer": "B",
    "explain": "青藏高寒区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与青藏高寒区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02468",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析青藏高寒区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "青藏高寒区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02469",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断青藏高寒区最准确的是",
    "answer": "D",
    "explain": "青藏高寒区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02470",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于青藏高寒区的地区差异说法正确",
    "answer": "B",
    "explain": "青藏高寒区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02472",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南方地区密切相关的是",
    "answer": "B",
    "explain": "南方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02473",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02474",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南方地区最准确的是",
    "answer": "D",
    "explain": "南方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02475",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南方地区的地区差异说法正确",
    "answer": "B",
    "explain": "南方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02477",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与北方地区密切相关的是",
    "answer": "B",
    "explain": "北方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与北方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02478",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析北方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "北方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02479",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断北方地区最准确的是",
    "answer": "D",
    "explain": "北方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02480",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于北方地区的地区差异说法正确",
    "answer": "B",
    "explain": "北方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02482",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东北密切相关的是",
    "answer": "B",
    "explain": "东北的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东北成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02483",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东北时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东北分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02484",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东北最准确的是",
    "answer": "D",
    "explain": "东北判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02485",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东北的地区差异说法正确",
    "answer": "B",
    "explain": "东北存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02487",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西南密切相关的是",
    "answer": "B",
    "explain": "西南的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西南成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02488",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西南时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西南分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02489",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西南最准确的是",
    "answer": "D",
    "explain": "西南判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02490",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西南的地区差异说法正确",
    "answer": "B",
    "explain": "西南存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02492",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与黄土高原密切相关的是",
    "answer": "B",
    "explain": "黄土高原的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与黄土高原成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02493",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析黄土高原时,首先要考虑的因素是",
    "answer": "A",
    "explain": "黄土高原分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02494",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断黄土高原最准确的是",
    "answer": "D",
    "explain": "黄土高原判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02495",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于黄土高原的地区差异说法正确",
    "answer": "B",
    "explain": "黄土高原存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02497",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南水北调密切相关的是",
    "answer": "B",
    "explain": "南水北调的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南水北调成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02498",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南水北调时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南水北调分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02499",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南水北调最准确的是",
    "answer": "D",
    "explain": "南水北调判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02500",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南水北调的地区差异说法正确",
    "answer": "B",
    "explain": "南水北调存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02502",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西气东输密切相关的是",
    "answer": "B",
    "explain": "西气东输的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西气东输成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02503",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西气东输时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西气东输分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02504",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西气东输最准确的是",
    "answer": "D",
    "explain": "西气东输判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02505",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西气东输的地区差异说法正确",
    "answer": "B",
    "explain": "西气东输存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02507",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西电东送密切相关的是",
    "answer": "B",
    "explain": "西电东送的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西电东送成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02508",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西电东送时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西电东送分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02509",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西电东送最准确的是",
    "answer": "D",
    "explain": "西电东送判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02510",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西电东送的地区差异说法正确",
    "answer": "B",
    "explain": "西电东送存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02512",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东部季风区密切相关的是",
    "answer": "B",
    "explain": "东部季风区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东部季风区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02513",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东部季风区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东部季风区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02514",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东部季风区最准确的是",
    "answer": "D",
    "explain": "东部季风区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02515",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东部季风区的地区差异说法正确",
    "answer": "B",
    "explain": "东部季风区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02517",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西北干旱区密切相关的是",
    "answer": "B",
    "explain": "西北干旱区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西北干旱区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02518",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西北干旱区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西北干旱区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02519",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西北干旱区最准确的是",
    "answer": "D",
    "explain": "西北干旱区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02520",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西北干旱区的地区差异说法正确",
    "answer": "B",
    "explain": "西北干旱区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02522",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与青藏高寒区密切相关的是",
    "answer": "B",
    "explain": "青藏高寒区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与青藏高寒区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02523",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析青藏高寒区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "青藏高寒区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02524",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断青藏高寒区最准确的是",
    "answer": "D",
    "explain": "青藏高寒区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02525",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于青藏高寒区的地区差异说法正确",
    "answer": "B",
    "explain": "青藏高寒区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02527",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南方地区密切相关的是",
    "answer": "B",
    "explain": "南方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02528",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02529",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南方地区最准确的是",
    "answer": "D",
    "explain": "南方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02530",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南方地区的地区差异说法正确",
    "answer": "B",
    "explain": "南方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02532",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与北方地区密切相关的是",
    "answer": "B",
    "explain": "北方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与北方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02533",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析北方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "北方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02534",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断北方地区最准确的是",
    "answer": "D",
    "explain": "北方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02535",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于北方地区的地区差异说法正确",
    "answer": "B",
    "explain": "北方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02537",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东北密切相关的是",
    "answer": "B",
    "explain": "东北的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东北成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02538",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东北时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东北分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02539",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东北最准确的是",
    "answer": "D",
    "explain": "东北判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02540",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东北的地区差异说法正确",
    "answer": "B",
    "explain": "东北存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02542",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西南密切相关的是",
    "answer": "B",
    "explain": "西南的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西南成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02543",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西南时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西南分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02544",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西南最准确的是",
    "answer": "D",
    "explain": "西南判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02545",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西南的地区差异说法正确",
    "answer": "B",
    "explain": "西南存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02547",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与黄土高原密切相关的是",
    "answer": "B",
    "explain": "黄土高原的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与黄土高原成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02548",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析黄土高原时,首先要考虑的因素是",
    "answer": "A",
    "explain": "黄土高原分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02549",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断黄土高原最准确的是",
    "answer": "D",
    "explain": "黄土高原判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02550",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于黄土高原的地区差异说法正确",
    "answer": "B",
    "explain": "黄土高原存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02552",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南水北调密切相关的是",
    "answer": "B",
    "explain": "南水北调的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南水北调成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02553",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南水北调时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南水北调分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02554",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南水北调最准确的是",
    "answer": "D",
    "explain": "南水北调判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02555",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南水北调的地区差异说法正确",
    "answer": "B",
    "explain": "南水北调存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02557",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西气东输密切相关的是",
    "answer": "B",
    "explain": "西气东输的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西气东输成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02558",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西气东输时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西气东输分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02559",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西气东输最准确的是",
    "answer": "D",
    "explain": "西气东输判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02560",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西气东输的地区差异说法正确",
    "answer": "B",
    "explain": "西气东输存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02562",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西电东送密切相关的是",
    "answer": "B",
    "explain": "西电东送的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西电东送成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02563",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西电东送时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西电东送分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02564",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西电东送最准确的是",
    "answer": "D",
    "explain": "西电东送判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02565",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西电东送的地区差异说法正确",
    "answer": "B",
    "explain": "西电东送存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02567",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东部季风区密切相关的是",
    "answer": "B",
    "explain": "东部季风区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东部季风区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02568",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东部季风区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东部季风区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02569",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东部季风区最准确的是",
    "answer": "D",
    "explain": "东部季风区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02570",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东部季风区的地区差异说法正确",
    "answer": "B",
    "explain": "东部季风区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02572",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西北干旱区密切相关的是",
    "answer": "B",
    "explain": "西北干旱区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西北干旱区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02573",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西北干旱区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西北干旱区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02574",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西北干旱区最准确的是",
    "answer": "D",
    "explain": "西北干旱区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02575",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西北干旱区的地区差异说法正确",
    "answer": "B",
    "explain": "西北干旱区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02577",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与青藏高寒区密切相关的是",
    "answer": "B",
    "explain": "青藏高寒区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与青藏高寒区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02578",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析青藏高寒区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "青藏高寒区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02579",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断青藏高寒区最准确的是",
    "answer": "D",
    "explain": "青藏高寒区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02580",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于青藏高寒区的地区差异说法正确",
    "answer": "B",
    "explain": "青藏高寒区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02582",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南方地区密切相关的是",
    "answer": "B",
    "explain": "南方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02583",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02584",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南方地区最准确的是",
    "answer": "D",
    "explain": "南方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02585",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南方地区的地区差异说法正确",
    "answer": "B",
    "explain": "南方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02587",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与北方地区密切相关的是",
    "answer": "B",
    "explain": "北方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与北方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02588",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析北方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "北方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02589",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断北方地区最准确的是",
    "answer": "D",
    "explain": "北方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02590",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于北方地区的地区差异说法正确",
    "answer": "B",
    "explain": "北方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02592",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东北密切相关的是",
    "answer": "B",
    "explain": "东北的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东北成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02593",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东北时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东北分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02594",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东北最准确的是",
    "answer": "D",
    "explain": "东北判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02595",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东北的地区差异说法正确",
    "answer": "B",
    "explain": "东北存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02597",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西南密切相关的是",
    "answer": "B",
    "explain": "西南的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西南成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02598",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西南时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西南分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02599",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西南最准确的是",
    "answer": "D",
    "explain": "西南判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02600",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西南的地区差异说法正确",
    "answer": "B",
    "explain": "西南存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02602",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与黄土高原密切相关的是",
    "answer": "B",
    "explain": "黄土高原的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与黄土高原成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02603",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析黄土高原时,首先要考虑的因素是",
    "answer": "A",
    "explain": "黄土高原分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02604",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断黄土高原最准确的是",
    "answer": "D",
    "explain": "黄土高原判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02605",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于黄土高原的地区差异说法正确",
    "answer": "B",
    "explain": "黄土高原存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02607",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南水北调密切相关的是",
    "answer": "B",
    "explain": "南水北调的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南水北调成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02608",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南水北调时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南水北调分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02609",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南水北调最准确的是",
    "answer": "D",
    "explain": "南水北调判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02610",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南水北调的地区差异说法正确",
    "answer": "B",
    "explain": "南水北调存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02612",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西气东输密切相关的是",
    "answer": "B",
    "explain": "西气东输的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西气东输成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02613",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西气东输时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西气东输分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02614",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西气东输最准确的是",
    "answer": "D",
    "explain": "西气东输判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02615",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西气东输的地区差异说法正确",
    "answer": "B",
    "explain": "西气东输存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02617",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西电东送密切相关的是",
    "answer": "B",
    "explain": "西电东送的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西电东送成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02618",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西电东送时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西电东送分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02619",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西电东送最准确的是",
    "answer": "D",
    "explain": "西电东送判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02620",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西电东送的地区差异说法正确",
    "answer": "B",
    "explain": "西电东送存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02622",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东部季风区密切相关的是",
    "answer": "B",
    "explain": "东部季风区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东部季风区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02623",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东部季风区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东部季风区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02624",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东部季风区最准确的是",
    "answer": "D",
    "explain": "东部季风区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02625",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东部季风区的地区差异说法正确",
    "answer": "B",
    "explain": "东部季风区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02627",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与西北干旱区密切相关的是",
    "answer": "B",
    "explain": "西北干旱区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与西北干旱区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02628",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析西北干旱区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "西北干旱区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02629",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断西北干旱区最准确的是",
    "answer": "D",
    "explain": "西北干旱区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02630",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于西北干旱区的地区差异说法正确",
    "answer": "B",
    "explain": "西北干旱区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02632",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与青藏高寒区密切相关的是",
    "answer": "B",
    "explain": "青藏高寒区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与青藏高寒区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02633",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析青藏高寒区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "青藏高寒区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02634",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断青藏高寒区最准确的是",
    "answer": "D",
    "explain": "青藏高寒区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02635",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于青藏高寒区的地区差异说法正确",
    "answer": "B",
    "explain": "青藏高寒区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02637",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南方地区密切相关的是",
    "answer": "B",
    "explain": "南方地区的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南方地区成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02638",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南方地区时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南方地区分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02639",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南方地区最准确的是",
    "answer": "D",
    "explain": "南方地区判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02640",
    "manualId": "geo_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南方地区的地区差异说法正确",
    "answer": "B",
    "explain": "南方地区存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02643",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可再生资源密切相关的是",
    "answer": "B",
    "explain": "可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02644",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析可再生资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "可再生资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02645",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断可再生资源最准确的是",
    "answer": "D",
    "explain": "可再生资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02646",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于可再生资源的地区差异说法正确",
    "answer": "B",
    "explain": "可再生资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02648",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与非可再生资源密切相关的是",
    "answer": "B",
    "explain": "非可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与非可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02649",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析非可再生资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "非可再生资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02650",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断非可再生资源最准确的是",
    "answer": "D",
    "explain": "非可再生资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02651",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于非可再生资源的地区差异说法正确",
    "answer": "B",
    "explain": "非可再生资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02653",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与化石能源密切相关的是",
    "answer": "B",
    "explain": "化石能源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与化石能源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02654",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析化石能源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "化石能源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02655",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断化石能源最准确的是",
    "answer": "D",
    "explain": "化石能源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02656",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于化石能源的地区差异说法正确",
    "answer": "B",
    "explain": "化石能源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02658",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与新能源密切相关的是",
    "answer": "B",
    "explain": "新能源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与新能源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02659",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析新能源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "新能源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02660",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断新能源最准确的是",
    "answer": "D",
    "explain": "新能源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02661",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于新能源的地区差异说法正确",
    "answer": "B",
    "explain": "新能源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02663",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳能密切相关的是",
    "answer": "B",
    "explain": "太阳能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02664",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02665",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳能最准确的是",
    "answer": "D",
    "explain": "太阳能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02666",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳能的地区差异说法正确",
    "answer": "B",
    "explain": "太阳能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02668",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与风能密切相关的是",
    "answer": "B",
    "explain": "风能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与风能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02669",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析风能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "风能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02670",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断风能最准确的是",
    "answer": "D",
    "explain": "风能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02671",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风能的地区差异说法正确",
    "answer": "B",
    "explain": "风能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02673",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水资源密切相关的是",
    "answer": "B",
    "explain": "水资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02674",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02675",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水资源最准确的是",
    "answer": "D",
    "explain": "水资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02676",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源的地区差异说法正确",
    "answer": "B",
    "explain": "水资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02678",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土地资源密切相关的是",
    "answer": "B",
    "explain": "土地资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土地资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02679",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土地资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土地资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02680",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土地资源最准确的是",
    "answer": "D",
    "explain": "土地资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02681",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土地资源的地区差异说法正确",
    "answer": "B",
    "explain": "土地资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02683",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与全球变暖密切相关的是",
    "answer": "B",
    "explain": "全球变暖的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与全球变暖成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02684",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析全球变暖时,首先要考虑的因素是",
    "answer": "A",
    "explain": "全球变暖分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02685",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断全球变暖最准确的是",
    "answer": "D",
    "explain": "全球变暖判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02686",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于全球变暖的地区差异说法正确",
    "answer": "B",
    "explain": "全球变暖存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02688",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与臭氧层密切相关的是",
    "answer": "B",
    "explain": "臭氧层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与臭氧层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02689",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析臭氧层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "臭氧层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02690",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断臭氧层最准确的是",
    "answer": "D",
    "explain": "臭氧层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02691",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于臭氧层的地区差异说法正确",
    "answer": "B",
    "explain": "臭氧层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02693",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与酸雨密切相关的是",
    "answer": "B",
    "explain": "酸雨的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与酸雨成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02694",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析酸雨时,首先要考虑的因素是",
    "answer": "A",
    "explain": "酸雨分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02695",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断酸雨最准确的是",
    "answer": "D",
    "explain": "酸雨判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02696",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于酸雨的地区差异说法正确",
    "answer": "B",
    "explain": "酸雨存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02698",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可持续发展密切相关的是",
    "answer": "B",
    "explain": "可持续发展的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可持续发展成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02699",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析可持续发展时,首先要考虑的因素是",
    "answer": "A",
    "explain": "可持续发展分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02700",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断可持续发展最准确的是",
    "answer": "D",
    "explain": "可持续发展判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02701",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于可持续发展的地区差异说法正确",
    "answer": "B",
    "explain": "可持续发展存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02703",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可再生资源密切相关的是",
    "answer": "B",
    "explain": "可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02704",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析可再生资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "可再生资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02705",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断可再生资源最准确的是",
    "answer": "D",
    "explain": "可再生资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02706",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于可再生资源的地区差异说法正确",
    "answer": "B",
    "explain": "可再生资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02708",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与非可再生资源密切相关的是",
    "answer": "B",
    "explain": "非可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与非可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02709",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析非可再生资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "非可再生资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02710",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断非可再生资源最准确的是",
    "answer": "D",
    "explain": "非可再生资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02711",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于非可再生资源的地区差异说法正确",
    "answer": "B",
    "explain": "非可再生资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02713",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与化石能源密切相关的是",
    "answer": "B",
    "explain": "化石能源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与化石能源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02714",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析化石能源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "化石能源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02715",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断化石能源最准确的是",
    "answer": "D",
    "explain": "化石能源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02716",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于化石能源的地区差异说法正确",
    "answer": "B",
    "explain": "化石能源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02718",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与新能源密切相关的是",
    "answer": "B",
    "explain": "新能源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与新能源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02719",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析新能源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "新能源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02720",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断新能源最准确的是",
    "answer": "D",
    "explain": "新能源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02721",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于新能源的地区差异说法正确",
    "answer": "B",
    "explain": "新能源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02723",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳能密切相关的是",
    "answer": "B",
    "explain": "太阳能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02724",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02725",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳能最准确的是",
    "answer": "D",
    "explain": "太阳能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02726",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳能的地区差异说法正确",
    "answer": "B",
    "explain": "太阳能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02728",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与风能密切相关的是",
    "answer": "B",
    "explain": "风能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与风能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02729",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析风能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "风能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02730",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断风能最准确的是",
    "answer": "D",
    "explain": "风能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02731",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风能的地区差异说法正确",
    "answer": "B",
    "explain": "风能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02733",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水资源密切相关的是",
    "answer": "B",
    "explain": "水资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02734",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02735",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水资源最准确的是",
    "answer": "D",
    "explain": "水资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02736",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源的地区差异说法正确",
    "answer": "B",
    "explain": "水资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02738",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土地资源密切相关的是",
    "answer": "B",
    "explain": "土地资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土地资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02739",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土地资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土地资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02740",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土地资源最准确的是",
    "answer": "D",
    "explain": "土地资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02741",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土地资源的地区差异说法正确",
    "answer": "B",
    "explain": "土地资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02743",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与全球变暖密切相关的是",
    "answer": "B",
    "explain": "全球变暖的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与全球变暖成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02744",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析全球变暖时,首先要考虑的因素是",
    "answer": "A",
    "explain": "全球变暖分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02745",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断全球变暖最准确的是",
    "answer": "D",
    "explain": "全球变暖判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02746",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于全球变暖的地区差异说法正确",
    "answer": "B",
    "explain": "全球变暖存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02748",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与臭氧层密切相关的是",
    "answer": "B",
    "explain": "臭氧层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与臭氧层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02749",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析臭氧层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "臭氧层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02750",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断臭氧层最准确的是",
    "answer": "D",
    "explain": "臭氧层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02751",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于臭氧层的地区差异说法正确",
    "answer": "B",
    "explain": "臭氧层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02753",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与酸雨密切相关的是",
    "answer": "B",
    "explain": "酸雨的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与酸雨成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02754",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析酸雨时,首先要考虑的因素是",
    "answer": "A",
    "explain": "酸雨分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02755",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断酸雨最准确的是",
    "answer": "D",
    "explain": "酸雨判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02756",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于酸雨的地区差异说法正确",
    "answer": "B",
    "explain": "酸雨存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02758",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可持续发展密切相关的是",
    "answer": "B",
    "explain": "可持续发展的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可持续发展成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02759",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析可持续发展时,首先要考虑的因素是",
    "answer": "A",
    "explain": "可持续发展分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02760",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断可持续发展最准确的是",
    "answer": "D",
    "explain": "可持续发展判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02761",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于可持续发展的地区差异说法正确",
    "answer": "B",
    "explain": "可持续发展存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02763",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可再生资源密切相关的是",
    "answer": "B",
    "explain": "可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02764",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析可再生资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "可再生资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02765",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断可再生资源最准确的是",
    "answer": "D",
    "explain": "可再生资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02766",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于可再生资源的地区差异说法正确",
    "answer": "B",
    "explain": "可再生资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02768",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与非可再生资源密切相关的是",
    "answer": "B",
    "explain": "非可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与非可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02769",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析非可再生资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "非可再生资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02770",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断非可再生资源最准确的是",
    "answer": "D",
    "explain": "非可再生资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02771",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于非可再生资源的地区差异说法正确",
    "answer": "B",
    "explain": "非可再生资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02773",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与化石能源密切相关的是",
    "answer": "B",
    "explain": "化石能源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与化石能源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02774",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析化石能源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "化石能源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02775",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断化石能源最准确的是",
    "answer": "D",
    "explain": "化石能源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02776",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于化石能源的地区差异说法正确",
    "answer": "B",
    "explain": "化石能源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02778",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与新能源密切相关的是",
    "answer": "B",
    "explain": "新能源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与新能源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02779",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析新能源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "新能源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02780",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断新能源最准确的是",
    "answer": "D",
    "explain": "新能源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02781",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于新能源的地区差异说法正确",
    "answer": "B",
    "explain": "新能源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02783",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳能密切相关的是",
    "answer": "B",
    "explain": "太阳能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02784",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02785",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳能最准确的是",
    "answer": "D",
    "explain": "太阳能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02786",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳能的地区差异说法正确",
    "answer": "B",
    "explain": "太阳能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02788",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与风能密切相关的是",
    "answer": "B",
    "explain": "风能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与风能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02789",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析风能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "风能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02790",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断风能最准确的是",
    "answer": "D",
    "explain": "风能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02791",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风能的地区差异说法正确",
    "answer": "B",
    "explain": "风能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02793",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水资源密切相关的是",
    "answer": "B",
    "explain": "水资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02794",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02795",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水资源最准确的是",
    "answer": "D",
    "explain": "水资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02796",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源的地区差异说法正确",
    "answer": "B",
    "explain": "水资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02798",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土地资源密切相关的是",
    "answer": "B",
    "explain": "土地资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土地资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02799",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土地资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土地资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02800",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土地资源最准确的是",
    "answer": "D",
    "explain": "土地资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02801",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土地资源的地区差异说法正确",
    "answer": "B",
    "explain": "土地资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02803",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与全球变暖密切相关的是",
    "answer": "B",
    "explain": "全球变暖的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与全球变暖成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02804",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析全球变暖时,首先要考虑的因素是",
    "answer": "A",
    "explain": "全球变暖分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02805",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断全球变暖最准确的是",
    "answer": "D",
    "explain": "全球变暖判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02806",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于全球变暖的地区差异说法正确",
    "answer": "B",
    "explain": "全球变暖存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02808",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与臭氧层密切相关的是",
    "answer": "B",
    "explain": "臭氧层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与臭氧层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02809",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析臭氧层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "臭氧层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02810",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断臭氧层最准确的是",
    "answer": "D",
    "explain": "臭氧层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02811",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于臭氧层的地区差异说法正确",
    "answer": "B",
    "explain": "臭氧层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02813",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与酸雨密切相关的是",
    "answer": "B",
    "explain": "酸雨的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与酸雨成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02814",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析酸雨时,首先要考虑的因素是",
    "answer": "A",
    "explain": "酸雨分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02815",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断酸雨最准确的是",
    "answer": "D",
    "explain": "酸雨判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02816",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于酸雨的地区差异说法正确",
    "answer": "B",
    "explain": "酸雨存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02818",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可持续发展密切相关的是",
    "answer": "B",
    "explain": "可持续发展的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可持续发展成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02819",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析可持续发展时,首先要考虑的因素是",
    "answer": "A",
    "explain": "可持续发展分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02820",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断可持续发展最准确的是",
    "answer": "D",
    "explain": "可持续发展判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02821",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于可持续发展的地区差异说法正确",
    "answer": "B",
    "explain": "可持续发展存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02823",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可再生资源密切相关的是",
    "answer": "B",
    "explain": "可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02824",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析可再生资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "可再生资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02825",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断可再生资源最准确的是",
    "answer": "D",
    "explain": "可再生资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02826",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于可再生资源的地区差异说法正确",
    "answer": "B",
    "explain": "可再生资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02828",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与非可再生资源密切相关的是",
    "answer": "B",
    "explain": "非可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与非可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02829",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析非可再生资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "非可再生资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02830",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断非可再生资源最准确的是",
    "answer": "D",
    "explain": "非可再生资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02831",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于非可再生资源的地区差异说法正确",
    "answer": "B",
    "explain": "非可再生资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02833",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与化石能源密切相关的是",
    "answer": "B",
    "explain": "化石能源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与化石能源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02834",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析化石能源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "化石能源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02835",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断化石能源最准确的是",
    "answer": "D",
    "explain": "化石能源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02836",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于化石能源的地区差异说法正确",
    "answer": "B",
    "explain": "化石能源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02838",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与新能源密切相关的是",
    "answer": "B",
    "explain": "新能源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与新能源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02839",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析新能源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "新能源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02840",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断新能源最准确的是",
    "answer": "D",
    "explain": "新能源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02841",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于新能源的地区差异说法正确",
    "answer": "B",
    "explain": "新能源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02843",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与太阳能密切相关的是",
    "answer": "B",
    "explain": "太阳能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与太阳能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02844",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析太阳能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "太阳能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02845",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断太阳能最准确的是",
    "answer": "D",
    "explain": "太阳能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02846",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于太阳能的地区差异说法正确",
    "answer": "B",
    "explain": "太阳能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02848",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与风能密切相关的是",
    "answer": "B",
    "explain": "风能的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与风能成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02849",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析风能时,首先要考虑的因素是",
    "answer": "A",
    "explain": "风能分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02850",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断风能最准确的是",
    "answer": "D",
    "explain": "风能判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02851",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风能的地区差异说法正确",
    "answer": "B",
    "explain": "风能存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02853",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与水资源密切相关的是",
    "answer": "B",
    "explain": "水资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与水资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02854",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析水资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "水资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02855",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断水资源最准确的是",
    "answer": "D",
    "explain": "水资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02856",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源的地区差异说法正确",
    "answer": "B",
    "explain": "水资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02858",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与土地资源密切相关的是",
    "answer": "B",
    "explain": "土地资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与土地资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02859",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析土地资源时,首先要考虑的因素是",
    "answer": "A",
    "explain": "土地资源分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02860",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断土地资源最准确的是",
    "answer": "D",
    "explain": "土地资源判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02861",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于土地资源的地区差异说法正确",
    "answer": "B",
    "explain": "土地资源存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02863",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与全球变暖密切相关的是",
    "answer": "B",
    "explain": "全球变暖的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与全球变暖成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02864",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析全球变暖时,首先要考虑的因素是",
    "answer": "A",
    "explain": "全球变暖分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02865",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断全球变暖最准确的是",
    "answer": "D",
    "explain": "全球变暖判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02866",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于全球变暖的地区差异说法正确",
    "answer": "B",
    "explain": "全球变暖存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02868",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与臭氧层密切相关的是",
    "answer": "B",
    "explain": "臭氧层的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与臭氧层成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02869",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析臭氧层时,首先要考虑的因素是",
    "answer": "A",
    "explain": "臭氧层分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02870",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断臭氧层最准确的是",
    "answer": "D",
    "explain": "臭氧层判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02871",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于臭氧层的地区差异说法正确",
    "answer": "B",
    "explain": "臭氧层存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02873",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与酸雨密切相关的是",
    "answer": "B",
    "explain": "酸雨的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与酸雨成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02874",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析酸雨时,首先要考虑的因素是",
    "answer": "A",
    "explain": "酸雨分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02875",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断酸雨最准确的是",
    "answer": "D",
    "explain": "酸雨判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02876",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于酸雨的地区差异说法正确",
    "answer": "B",
    "explain": "酸雨存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02878",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可持续发展密切相关的是",
    "answer": "B",
    "explain": "可持续发展的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可持续发展成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02879",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "分析可持续发展时,首先要考虑的因素是",
    "answer": "A",
    "explain": "可持续发展分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02880",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断可持续发展最准确的是",
    "answer": "D",
    "explain": "可持续发展判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02881",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于可持续发展的地区差异说法正确",
    "answer": "B",
    "explain": "可持续发展存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02883",
    "manualId": "geo_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与可再生资源密切相关的是",
    "answer": "B",
    "explain": "可再生资源的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与可再生资源成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02885",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与比例尺密切相关的是",
    "answer": "B",
    "explain": "比例尺的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与比例尺成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02886",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析比例尺时,首先要考虑的因素是",
    "answer": "A",
    "explain": "比例尺分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02887",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断比例尺最准确的是",
    "answer": "D",
    "explain": "比例尺判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02888",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于比例尺的地区差异说法正确",
    "answer": "B",
    "explain": "比例尺存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02890",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与方向密切相关的是",
    "answer": "B",
    "explain": "方向的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与方向成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02891",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析方向时,首先要考虑的因素是",
    "answer": "A",
    "explain": "方向分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02892",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断方向最准确的是",
    "answer": "D",
    "explain": "方向判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02893",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于方向的地区差异说法正确",
    "answer": "B",
    "explain": "方向存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02895",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与图例密切相关的是",
    "answer": "B",
    "explain": "图例的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与图例成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02896",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析图例时,首先要考虑的因素是",
    "answer": "A",
    "explain": "图例分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02897",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断图例最准确的是",
    "answer": "D",
    "explain": "图例判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02898",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于图例的地区差异说法正确",
    "answer": "B",
    "explain": "图例存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02900",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与经度密切相关的是",
    "answer": "B",
    "explain": "经度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与经度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02901",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析经度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "经度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02902",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断经度最准确的是",
    "answer": "D",
    "explain": "经度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02903",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于经度的地区差异说法正确",
    "answer": "B",
    "explain": "经度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02905",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与纬度密切相关的是",
    "answer": "B",
    "explain": "纬度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与纬度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02906",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析纬度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "纬度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02907",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断纬度最准确的是",
    "answer": "D",
    "explain": "纬度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02908",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于纬度的地区差异说法正确",
    "answer": "B",
    "explain": "纬度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02910",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与经纬网密切相关的是",
    "answer": "B",
    "explain": "经纬网的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与经纬网成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02911",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析经纬网时,首先要考虑的因素是",
    "answer": "A",
    "explain": "经纬网分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02912",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断经纬网最准确的是",
    "answer": "D",
    "explain": "经纬网判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02913",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于经纬网的地区差异说法正确",
    "answer": "B",
    "explain": "经纬网存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02915",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东西半球密切相关的是",
    "answer": "B",
    "explain": "东西半球的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东西半球成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02916",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东西半球时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东西半球分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02917",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东西半球最准确的是",
    "answer": "D",
    "explain": "东西半球判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02918",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东西半球的地区差异说法正确",
    "answer": "B",
    "explain": "东西半球存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02920",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南北半球密切相关的是",
    "answer": "B",
    "explain": "南北半球的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南北半球成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02921",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南北半球时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南北半球分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02922",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南北半球最准确的是",
    "answer": "D",
    "explain": "南北半球判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02923",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南北半球的地区差异说法正确",
    "answer": "B",
    "explain": "南北半球存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02925",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与等高线密切相关的是",
    "answer": "B",
    "explain": "等高线的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与等高线成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02926",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析等高线时,首先要考虑的因素是",
    "answer": "A",
    "explain": "等高线分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02927",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断等高线最准确的是",
    "answer": "D",
    "explain": "等高线判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02928",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于等高线的地区差异说法正确",
    "answer": "B",
    "explain": "等高线存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02930",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地形图判读密切相关的是",
    "answer": "B",
    "explain": "地形图判读的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地形图判读成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02931",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地形图判读时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地形图判读分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02932",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地形图判读最准确的是",
    "answer": "D",
    "explain": "地形图判读判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02933",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地形图判读的地区差异说法正确",
    "answer": "B",
    "explain": "地形图判读存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02935",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与距离测算密切相关的是",
    "answer": "B",
    "explain": "距离测算的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与距离测算成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02936",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析距离测算时,首先要考虑的因素是",
    "answer": "A",
    "explain": "距离测算分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02937",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断距离测算最准确的是",
    "answer": "D",
    "explain": "距离测算判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02938",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于距离测算的地区差异说法正确",
    "answer": "B",
    "explain": "距离测算存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02940",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地图定位密切相关的是",
    "answer": "B",
    "explain": "地图定位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地图定位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02941",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地图定位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地图定位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02942",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地图定位最准确的是",
    "answer": "D",
    "explain": "地图定位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02943",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地图定位的地区差异说法正确",
    "answer": "B",
    "explain": "地图定位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02945",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与比例尺密切相关的是",
    "answer": "B",
    "explain": "比例尺的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与比例尺成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02946",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析比例尺时,首先要考虑的因素是",
    "answer": "A",
    "explain": "比例尺分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02947",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断比例尺最准确的是",
    "answer": "D",
    "explain": "比例尺判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02948",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于比例尺的地区差异说法正确",
    "answer": "B",
    "explain": "比例尺存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02950",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与方向密切相关的是",
    "answer": "B",
    "explain": "方向的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与方向成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02951",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析方向时,首先要考虑的因素是",
    "answer": "A",
    "explain": "方向分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02952",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断方向最准确的是",
    "answer": "D",
    "explain": "方向判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02953",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于方向的地区差异说法正确",
    "answer": "B",
    "explain": "方向存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02955",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与图例密切相关的是",
    "answer": "B",
    "explain": "图例的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与图例成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02956",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析图例时,首先要考虑的因素是",
    "answer": "A",
    "explain": "图例分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02957",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断图例最准确的是",
    "answer": "D",
    "explain": "图例判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02958",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于图例的地区差异说法正确",
    "answer": "B",
    "explain": "图例存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02960",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与经度密切相关的是",
    "answer": "B",
    "explain": "经度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与经度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02961",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析经度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "经度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02962",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断经度最准确的是",
    "answer": "D",
    "explain": "经度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02963",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于经度的地区差异说法正确",
    "answer": "B",
    "explain": "经度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02965",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与纬度密切相关的是",
    "answer": "B",
    "explain": "纬度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与纬度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02966",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析纬度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "纬度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02967",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断纬度最准确的是",
    "answer": "D",
    "explain": "纬度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02968",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于纬度的地区差异说法正确",
    "answer": "B",
    "explain": "纬度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02970",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与经纬网密切相关的是",
    "answer": "B",
    "explain": "经纬网的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与经纬网成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02971",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析经纬网时,首先要考虑的因素是",
    "answer": "A",
    "explain": "经纬网分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02972",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断经纬网最准确的是",
    "answer": "D",
    "explain": "经纬网判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02973",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于经纬网的地区差异说法正确",
    "answer": "B",
    "explain": "经纬网存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02975",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东西半球密切相关的是",
    "answer": "B",
    "explain": "东西半球的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东西半球成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02976",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东西半球时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东西半球分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02977",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东西半球最准确的是",
    "answer": "D",
    "explain": "东西半球判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02978",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东西半球的地区差异说法正确",
    "answer": "B",
    "explain": "东西半球存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02980",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南北半球密切相关的是",
    "answer": "B",
    "explain": "南北半球的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南北半球成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02981",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南北半球时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南北半球分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02982",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南北半球最准确的是",
    "answer": "D",
    "explain": "南北半球判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02983",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南北半球的地区差异说法正确",
    "answer": "B",
    "explain": "南北半球存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02985",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与等高线密切相关的是",
    "answer": "B",
    "explain": "等高线的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与等高线成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02986",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析等高线时,首先要考虑的因素是",
    "answer": "A",
    "explain": "等高线分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02987",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断等高线最准确的是",
    "answer": "D",
    "explain": "等高线判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02988",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于等高线的地区差异说法正确",
    "answer": "B",
    "explain": "等高线存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02990",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地形图判读密切相关的是",
    "answer": "B",
    "explain": "地形图判读的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地形图判读成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02991",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地形图判读时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地形图判读分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02992",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地形图判读最准确的是",
    "answer": "D",
    "explain": "地形图判读判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02993",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地形图判读的地区差异说法正确",
    "answer": "B",
    "explain": "地形图判读存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_02995",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与距离测算密切相关的是",
    "answer": "B",
    "explain": "距离测算的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与距离测算成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_02996",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析距离测算时,首先要考虑的因素是",
    "answer": "A",
    "explain": "距离测算分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_02997",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断距离测算最准确的是",
    "answer": "D",
    "explain": "距离测算判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_02998",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于距离测算的地区差异说法正确",
    "answer": "B",
    "explain": "距离测算存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03000",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地图定位密切相关的是",
    "answer": "B",
    "explain": "地图定位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地图定位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03001",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地图定位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地图定位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03002",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地图定位最准确的是",
    "answer": "D",
    "explain": "地图定位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03003",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地图定位的地区差异说法正确",
    "answer": "B",
    "explain": "地图定位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03005",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与比例尺密切相关的是",
    "answer": "B",
    "explain": "比例尺的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与比例尺成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03006",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析比例尺时,首先要考虑的因素是",
    "answer": "A",
    "explain": "比例尺分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03007",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断比例尺最准确的是",
    "answer": "D",
    "explain": "比例尺判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03008",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于比例尺的地区差异说法正确",
    "answer": "B",
    "explain": "比例尺存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03010",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与方向密切相关的是",
    "answer": "B",
    "explain": "方向的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与方向成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03011",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析方向时,首先要考虑的因素是",
    "answer": "A",
    "explain": "方向分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03012",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断方向最准确的是",
    "answer": "D",
    "explain": "方向判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03013",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于方向的地区差异说法正确",
    "answer": "B",
    "explain": "方向存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03015",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与图例密切相关的是",
    "answer": "B",
    "explain": "图例的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与图例成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03016",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析图例时,首先要考虑的因素是",
    "answer": "A",
    "explain": "图例分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03017",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断图例最准确的是",
    "answer": "D",
    "explain": "图例判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03018",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于图例的地区差异说法正确",
    "answer": "B",
    "explain": "图例存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03020",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与经度密切相关的是",
    "answer": "B",
    "explain": "经度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与经度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03021",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析经度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "经度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03022",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断经度最准确的是",
    "answer": "D",
    "explain": "经度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03023",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于经度的地区差异说法正确",
    "answer": "B",
    "explain": "经度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03025",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与纬度密切相关的是",
    "answer": "B",
    "explain": "纬度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与纬度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03026",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析纬度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "纬度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03027",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断纬度最准确的是",
    "answer": "D",
    "explain": "纬度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03028",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于纬度的地区差异说法正确",
    "answer": "B",
    "explain": "纬度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03030",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与经纬网密切相关的是",
    "answer": "B",
    "explain": "经纬网的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与经纬网成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03031",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析经纬网时,首先要考虑的因素是",
    "answer": "A",
    "explain": "经纬网分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03032",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断经纬网最准确的是",
    "answer": "D",
    "explain": "经纬网判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03033",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于经纬网的地区差异说法正确",
    "answer": "B",
    "explain": "经纬网存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03035",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东西半球密切相关的是",
    "answer": "B",
    "explain": "东西半球的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东西半球成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03036",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东西半球时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东西半球分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03037",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东西半球最准确的是",
    "answer": "D",
    "explain": "东西半球判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03038",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东西半球的地区差异说法正确",
    "answer": "B",
    "explain": "东西半球存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03040",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南北半球密切相关的是",
    "answer": "B",
    "explain": "南北半球的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南北半球成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03041",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南北半球时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南北半球分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03042",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南北半球最准确的是",
    "answer": "D",
    "explain": "南北半球判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03043",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南北半球的地区差异说法正确",
    "answer": "B",
    "explain": "南北半球存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03045",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与等高线密切相关的是",
    "answer": "B",
    "explain": "等高线的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与等高线成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03046",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析等高线时,首先要考虑的因素是",
    "answer": "A",
    "explain": "等高线分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03047",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断等高线最准确的是",
    "answer": "D",
    "explain": "等高线判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03048",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于等高线的地区差异说法正确",
    "answer": "B",
    "explain": "等高线存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03050",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地形图判读密切相关的是",
    "answer": "B",
    "explain": "地形图判读的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地形图判读成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03051",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地形图判读时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地形图判读分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03052",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地形图判读最准确的是",
    "answer": "D",
    "explain": "地形图判读判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03053",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地形图判读的地区差异说法正确",
    "answer": "B",
    "explain": "地形图判读存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03055",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与距离测算密切相关的是",
    "answer": "B",
    "explain": "距离测算的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与距离测算成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03056",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析距离测算时,首先要考虑的因素是",
    "answer": "A",
    "explain": "距离测算分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03057",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断距离测算最准确的是",
    "answer": "D",
    "explain": "距离测算判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03058",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于距离测算的地区差异说法正确",
    "answer": "B",
    "explain": "距离测算存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03060",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地图定位密切相关的是",
    "answer": "B",
    "explain": "地图定位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地图定位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03061",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地图定位时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地图定位分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03062",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地图定位最准确的是",
    "answer": "D",
    "explain": "地图定位判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03063",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地图定位的地区差异说法正确",
    "answer": "B",
    "explain": "地图定位存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03065",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与比例尺密切相关的是",
    "answer": "B",
    "explain": "比例尺的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与比例尺成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03066",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析比例尺时,首先要考虑的因素是",
    "answer": "A",
    "explain": "比例尺分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03067",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断比例尺最准确的是",
    "answer": "D",
    "explain": "比例尺判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03068",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于比例尺的地区差异说法正确",
    "answer": "B",
    "explain": "比例尺存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03070",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与方向密切相关的是",
    "answer": "B",
    "explain": "方向的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与方向成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03071",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析方向时,首先要考虑的因素是",
    "answer": "A",
    "explain": "方向分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03072",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断方向最准确的是",
    "answer": "D",
    "explain": "方向判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03073",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于方向的地区差异说法正确",
    "answer": "B",
    "explain": "方向存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03075",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与图例密切相关的是",
    "answer": "B",
    "explain": "图例的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与图例成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03076",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析图例时,首先要考虑的因素是",
    "answer": "A",
    "explain": "图例分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03077",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断图例最准确的是",
    "answer": "D",
    "explain": "图例判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03078",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于图例的地区差异说法正确",
    "answer": "B",
    "explain": "图例存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03080",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与经度密切相关的是",
    "answer": "B",
    "explain": "经度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与经度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03081",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析经度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "经度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03082",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断经度最准确的是",
    "answer": "D",
    "explain": "经度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03083",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于经度的地区差异说法正确",
    "answer": "B",
    "explain": "经度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03085",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与纬度密切相关的是",
    "answer": "B",
    "explain": "纬度的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与纬度成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03086",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析纬度时,首先要考虑的因素是",
    "answer": "A",
    "explain": "纬度分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03087",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断纬度最准确的是",
    "answer": "D",
    "explain": "纬度判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03088",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于纬度的地区差异说法正确",
    "answer": "B",
    "explain": "纬度存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03090",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与经纬网密切相关的是",
    "answer": "B",
    "explain": "经纬网的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与经纬网成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03091",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析经纬网时,首先要考虑的因素是",
    "answer": "A",
    "explain": "经纬网分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03092",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断经纬网最准确的是",
    "answer": "D",
    "explain": "经纬网判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03093",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于经纬网的地区差异说法正确",
    "answer": "B",
    "explain": "经纬网存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03095",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与东西半球密切相关的是",
    "answer": "B",
    "explain": "东西半球的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与东西半球成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03096",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析东西半球时,首先要考虑的因素是",
    "answer": "A",
    "explain": "东西半球分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03097",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断东西半球最准确的是",
    "answer": "D",
    "explain": "东西半球判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03098",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东西半球的地区差异说法正确",
    "answer": "B",
    "explain": "东西半球存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03100",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与南北半球密切相关的是",
    "answer": "B",
    "explain": "南北半球的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与南北半球成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03101",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析南北半球时,首先要考虑的因素是",
    "answer": "A",
    "explain": "南北半球分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03102",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断南北半球最准确的是",
    "answer": "D",
    "explain": "南北半球判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03103",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南北半球的地区差异说法正确",
    "answer": "B",
    "explain": "南北半球存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03105",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与等高线密切相关的是",
    "answer": "B",
    "explain": "等高线的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与等高线成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03106",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析等高线时,首先要考虑的因素是",
    "answer": "A",
    "explain": "等高线分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03107",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断等高线最准确的是",
    "answer": "D",
    "explain": "等高线判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03108",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于等高线的地区差异说法正确",
    "answer": "B",
    "explain": "等高线存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03110",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地形图判读密切相关的是",
    "answer": "B",
    "explain": "地形图判读的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地形图判读成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03111",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析地形图判读时,首先要考虑的因素是",
    "answer": "A",
    "explain": "地形图判读分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03112",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断地形图判读最准确的是",
    "answer": "D",
    "explain": "地形图判读判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03113",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地形图判读的地区差异说法正确",
    "answer": "B",
    "explain": "地形图判读存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03115",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与距离测算密切相关的是",
    "answer": "B",
    "explain": "距离测算的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与距离测算成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  },
  {
    "id": "geo_rq_03116",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "分析距离测算时,首先要考虑的因素是",
    "answer": "A",
    "explain": "距离测算分析的核心是找出主导因素。",
    "options": [
      "A.主要成因或主导因素",
      "B.细节因素",
      "C.次要因素",
      "D.无关因素"
    ]
  },
  {
    "id": "geo_rq_03117",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列判断距离测算最准确的是",
    "answer": "D",
    "explain": "距离测算判断要抓住本质特征。",
    "options": [
      "A.只看表象",
      "B.凭感觉",
      "C.随机结论",
      "D.抓住本质特征并结合具体地理事象综合分析"
    ]
  },
  {
    "id": "geo_rq_03118",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于距离测算的地区差异说法正确",
    "answer": "B",
    "explain": "距离测算存在明显区域差异。",
    "options": [
      "A.没差异",
      "B.受地理位置气候等因素影响存在明显差异",
      "C.完全相同",
      "D.随机"
    ]
  },
  {
    "id": "geo_rq_03120",
    "manualId": "geo_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象与地图定位密切相关的是",
    "answer": "B",
    "explain": "地图定位的实际应用需结合具体地理事象。",
    "options": [
      "A.完全无关的现象",
      "B.与地图定位成因或影响直接相关的地理事象",
      "C.相反规律",
      "D.随机现象"
    ]
  }
];

  global.GEOGRAPHY_BANK_REAL = GEOGRAPHY_BANK_REAL;
  global.GEOGRAPHY_BANK = GEOGRAPHY_BANK_REAL;

  console.log('[磐山界·地理] 题库 v4.2.1-CLEAN 加载完成，题数：', GEOGRAPHY_BANK_REAL.length);
})(typeof window !== 'undefined' ? window : this);
