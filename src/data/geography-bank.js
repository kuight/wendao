/* ===================================================================
 * geography-bank.js · v4.3.7 (清洗+quality真题合并)
 * 基础题 128 + 高质量真题 295 = 合计 423
 * =================================================================== */
(function (global) {
  'use strict';
  const GEOGRAPHY_BANK = [
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
  "id": "geo_rq_00125",
  "manualId": "geo_m3",
  "type": "judge",
  "difficulty": "normal",
  "q": "湖泊对气候和调节径流有作用",
  "answer": "对",
  "explain": "湖泊温和气候削减洪峰"
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
  "id": "geo_rq_00166",
  "manualId": "geo_m5",
  "type": "judge",
  "difficulty": "normal",
  "q": "中国已进入老龄化社会",
  "answer": "对",
  "explain": "65岁以上人口>7%"
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
  "id": "geo_rq_00219",
  "manualId": "geo_m8",
  "type": "judge",
  "difficulty": "easy",
  "q": "工业集聚一定利大于弊",
  "answer": "错",
  "explain": "可能造成环境污染和竞争加剧"
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
  "id": "geo_q437_10001",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "easy",
  "gaokao": true,
  "q": "（2022·全国乙）2021年10月16日，我国\"神舟十三号\"载人飞船成功发射，进入近地轨道后与\"天和\"核心舱径向交会对接。\"天和\"核心舱运行的天体系统层级不包括",
  "answer": "D",
  "options": [
   "A. 地月系",
   "B. 太阳系",
   "C. 银河系",
   "D. 河外星系"
  ],
  "explain": "\"天和\"绕地球运行→属地月系；地月系→太阳系→银河系→总星系。河外星系是银河系以外的星系，与银河系并列，不包含地月系。选 D。",
  "tag": "天体系统层级"
 },
 {
  "id": "geo_q437_10002",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·山东）与地球相比，火星表面没有形成生命的主要原因是",
  "answer": "B",
  "options": [
   "A. 距日太远，温度过低",
   "B. 质量小，大气稀薄且缺少液态水",
   "C. 自转周期过长",
   "D. 没有卫星"
  ],
  "explain": "地球具备生命条件的关键：适宜温度、液态水、适宜大气。火星质量约为地球1/10，引力小→大气逸散，气压仅为地球0.6%，液态水难以稳定存在。A错：火星年均温 -60℃虽低但根本原因是大气稀薄；C自转周期24.6h与地球接近；D火星有两颗卫星。选 B。",
  "tag": "生命存在条件"
 },
 {
  "id": "geo_q437_10003",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "normal",
  "q": "太阳活动增强时，下列现象可能出现的是",
  "answer": "D",
  "options": [
   "A. 全球气温显著升高",
   "B. 板块运动加剧",
   "C. 潮汐现象消失",
   "D. 短波无线电通信受干扰"
  ],
  "explain": "太阳活动主要表现：黑子（光球层）、耀斑（色球层）、日珥。影响：①电离层扰动→短波通信中断；②磁暴（干扰指南针）；③极光；④影响气候（相关但非\"显著升高\"）。潮汐由日月引力引起，与太阳活动无直接关系。选 D。",
  "tag": "太阳活动影响"
 },
 {
  "id": "geo_q437_10004",
  "manualId": "geo_m1",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖南·多选）太阳辐射是地球最重要的能量来源。下列关于影响某地太阳辐射量的因素，说法正确的是",
  "answer": "ABD",
  "options": [
   "A. 纬度越低，正午太阳高度越大，太阳辐射量越大",
   "B. 海拔越高，大气越稀薄，到达地表的太阳辐射越强",
   "C. 云量越多，太阳辐射越强",
   "D. 白昼时间越长，日照时数越多，太阳辐射越强"
  ],
  "explain": "影响太阳辐射的因素：①纬度（决定太阳高度和昼长）；②海拔（大气厚度和透明度）；③天气（云量）；④昼长；⑤大气污染。C错：云量多则大气反射削弱增强，太阳辐射减弱。所以青藏高原太阳辐射强（海拔高、大气稀薄、云量少）。选 ABD。",
  "tag": "太阳辐射影响因素"
 },
 {
  "id": "geo_q437_10005",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "normal",
  "q": "我国太阳辐射量最丰富的地区是",
  "answer": "A",
  "options": [
   "A. 青藏高原",
   "B. 四川盆地",
   "C. 东北平原",
   "D. 台湾岛"
  ],
  "explain": "青藏高原年太阳总辐射量 6000-8000 MJ/m²，居全国之首。原因：①海拔高（4000m+），大气稀薄，大气对太阳辐射削弱作用小；②晴天多，日照时数长；③纬度较低，太阳高度较大。四川盆地相反——多云雾，是我国太阳辐射最贫乏地区。选 A。",
  "tag": "我国太阳辐射分布"
 },
 {
  "id": "geo_q437_10006",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "normal",
  "q": "关于地球圈层结构，下列说法正确的是",
  "answer": "C",
  "options": [
   "A. 地壳在海洋处比大陆处厚",
   "B. 地幔全部为液态",
   "C. 岩石圈包括地壳和上地幔顶部",
   "D. 外核为固态"
  ],
  "explain": "A错：陆壳平均33 km，洋壳仅6 km；B错：地幔以固态硅酸盐为主，只有软流层（上地幔上部）为部分熔融；C对：岩石圈=地壳+上地幔顶部（软流层以上），厚度约100 km；D错：外核液态（横波不能通过），内核固态。选 C。",
  "tag": "地球内部圈层"
 },
 {
  "id": "geo_q437_10007",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "normal",
  "q": "地震波中，横波（S波）的特点是",
  "answer": "B",
  "options": [
   "A. 传播速度比纵波快",
   "B. 只能在固体中传播",
   "C. 引起上下颠簸",
   "D. 可穿过地核"
  ],
  "explain": "纵波（P）传播快、能在固液气传播、引起上下颠簸；横波（S）慢、只在固体、引起水平摇晃。横波在古登堡界面（2900km，地幔与外核界）消失→证明外核为液态。地震时先感到上下（P先到），后感到摇晃（S后到）。选 B。",
  "tag": "地震波与内部圈层"
 },
 {
  "id": "geo_q437_10008",
  "manualId": "geo_m1",
  "type": "fill",
  "difficulty": "easy",
  "q": "地球上生命存在的三大基本条件：①适宜的_______；②液态_______；③适宜的_______（大气）。",
  "answer": "温度|水|大气成分",
  "explain": "距日适中→适宜温度；地球质量体积适中→大气层保留→液态水存在→大气成分中含氧等。三者缺一不可。",
  "tag": "生命存在条件"
 },
 {
  "id": "geo_q437_10009",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "hard",
  "q": "某日北京时间12时，某观测者在北京（40°N，116°E）看到太阳位于正南方偏东15°的位置，此时的地方时可能是",
  "answer": "B",
  "options": [
   "A. 10时",
   "B. 11时",
   "C. 12时",
   "D. 13时"
  ],
  "explain": "太阳位于正南偏东15°→尚未过中天→地方时早于12时。北京地方时：116°E与120°E相差4°，即16分钟，北京时间12:00时116°E地方时约11:44。太阳在正南偏东意味着\"还未到当地正午\"，选择接近11:44的11时最合理。选 B。（此题考察地方时/太阳方位综合）",
  "tag": "地方时与太阳方位"
 },
 {
  "id": "geo_q437_10010",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2020·全国Ⅰ）我国在南极建立的四个考察站中，位于极圈内、且极夜期最长的是",
  "answer": "C",
  "options": [
   "A. 长城站（62.2°S）",
   "B. 中山站（69.4°S）",
   "C. 昆仑站（80.4°S）",
   "D. 泰山站（73.9°S）"
  ],
  "explain": "极圈内（>66.5°S）：中山、泰山、昆仑站。纬度越高极夜越长。昆仑站80.4°S最接近南极点→极夜从4月中到8月下，约130天。长城站在极圈外，无极夜。选 C。",
  "tag": "极昼极夜"
 },
 {
  "id": "geo_q437_10011",
  "manualId": "geo_m1",
  "type": "judge",
  "difficulty": "easy",
  "q": "恒星日（23时56分4秒）比太阳日（24小时）短。",
  "answer": "对",
  "explain": "恒星日=地球自转的真周期，是地球相对于恒星（可视为不动）转一圈；太阳日=地球相对于太阳转一圈。由于地球在自转同时也在公转，所以太阳日比恒星日多转约1°（约3分56秒）。日常生活用太阳日。",
  "tag": "恒星日与太阳日"
 },
 {
  "id": "geo_q437_10012",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·湖北）已知莆田（约25°N，119°E）夏至日（6月22日）正午太阳高度约为88°26′，则该日太阳直射点纬度为",
  "answer": "C",
  "options": [
   "A. 21°34′N",
   "B. 23°26′S",
   "C. 23°26′N",
   "D. 25°N"
  ],
  "explain": "夏至日太阳直射北回归线23°26′N。验证：H=90°-|φ-δ|=90°-|25°-23°26′|=90°-1°34′=88°26′✓ 完全符合。选 C。（这类\"求直射点纬度\"用 H=90°-纬度差 公式反推）",
  "tag": "正午太阳高度公式"
 },
 {
  "id": "geo_q437_10013",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "normal",
  "q": "下列现象中，能证明地球自转的是",
  "answer": "D",
  "options": [
   "A. 四季更替",
   "B. 五带划分",
   "C. 太阳直射点回归运动",
   "D. 昼夜更替"
  ],
  "explain": "公转导致：四季、五带、直射点回归、昼夜长短变化。自转导致：昼夜交替、地方时差、地转偏向力。选 D。",
  "tag": "自转与公转意义"
 },
 {
  "id": "geo_q437_10014",
  "manualId": "geo_m1",
  "type": "calc",
  "difficulty": "hard",
  "q": "某地位于23°26′N，试计算：（1）夏至日正午太阳高度；（2）冬至日正午太阳高度；（3）春分日正午太阳高度。",
  "answer": "夏至90°；冬至43°08′；春分66°34′",
  "explain": "公式 H=90°-|φ-δ|，φ为当地纬度，δ为直射点纬度（同半球取+，异半球取-）。 (1) 夏至 δ=+23°26′，同半球：H=90°-0°=90°（直射） (2) 冬至 δ=-23°26′，异半球：H=90°-(23°26′+23°26′)=90°-46°52′=43°08′ (3) 春分 δ=0°：H=90°-23°26′=66°34′",
  "tag": "太阳高度综合计算"
 },
 {
  "id": "geo_q437_10015",
  "manualId": "geo_m1",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于地球自转产生的地转偏向力，下列说法正确的是",
  "answer": "ACD",
  "options": [
   "A. 北半球向右偏，南半球向左偏",
   "B. 赤道地区偏转力最大",
   "C. 高纬度地区偏转力最大",
   "D. 影响水流、气流、洋流的运动方向"
  ],
  "explain": "地转偏向力（科里奥利力）：①北半球右偏，南半球左偏，赤道无偏转；②随纬度增加而增大（高纬最大）；③垂直于运动方向，只改变方向不改变速度大小；④影响水、气、大气环流、洋流。B错。选 ACD。",
  "tag": "地转偏向力"
 },
 {
  "id": "geo_q437_10016",
  "manualId": "geo_m1",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·福建）2023年5月30日，\"神舟十六号\"在酒泉（约40°N，100°E）发射升空。发射时北京时间为9:31，此时格林尼治时间（0°经线）为",
  "answer": "B",
  "options": [
   "A. 前一日23:31",
   "B. 当日1:31",
   "C. 当日9:31",
   "D. 当日17:31"
  ],
  "explain": "北京时间用东八区（+8h），格林尼治为零时区。零时区=北京时间-8h=9:31-8h=1:31，仍为同日。选 B。",
  "tag": "区时计算"
 },
 {
  "id": "geo_q437_10101",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·全国甲）当北京（116°E）时间为2021年1月1日8:00时，纽约（74°W）当地区时是",
  "answer": "B",
  "options": [
   "A. 2021年1月1日13:00",
   "B. 2020年12月31日19:00",
   "C. 2021年1月1日3:00",
   "D. 2020年12月31日13:00"
  ],
  "explain": "纽约位于西五区（-5h），北京东八区（+8h），时差13h。北京8:00→西五区=8-13=-5，即前一天19:00（12月31日19:00）。选 B。",
  "tag": "区时计算"
 },
 {
  "id": "geo_q437_10102",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "normal",
  "q": "我国跨越五个时区，全国统一采用北京时间，其含义是",
  "answer": "B",
  "options": [
   "A. 北京市（116°E）的地方时",
   "B. 东八区区时，即120°E的地方时",
   "C. 全国各地地方时的平均值",
   "D. 天安门的地方时"
  ],
  "explain": "我国\"北京时间\"=东八区区时=东经120°E的地方时，并非北京116°E的地方时（116°E地方时比北京时间慢约16分钟）。选 B。",
  "tag": "北京时间概念"
 },
 {
  "id": "geo_q437_10103",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·河北）一架飞机于当地时间11月20日20:00从北京（116°E）起飞，向东飞行12小时到达洛杉矶（118°W），此时洛杉矶当地时间是",
  "answer": "C",
  "options": [
   "A. 11月20日16:00",
   "B. 11月21日8:00",
   "C. 11月20日16:00",
   "D. 11月21日16:00"
  ],
  "explain": "北京20日20:00起飞→飞行12h后北京时间为21日8:00。洛杉矶118°W属西八区（-8h），与北京时差16h。洛杉矶时间=北京21日8:00-16h=20日16:00。选 C。（易错点：向东跨过国际日期变更线要减一天）",
  "tag": "跨时区飞行时间计算"
 },
 {
  "id": "geo_q437_10104",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "normal",
  "q": "夏至日（6月22日）下列现象正确的是",
  "answer": "A",
  "options": [
   "A. 北半球昼最长夜最短",
   "B. 太阳直射南回归线",
   "C. 全球昼夜等长",
   "D. 南极圈内出现极昼"
  ],
  "explain": "夏至（6.22）：直射北回归线，北半球昼最长夜最短，北极圈内极昼、南极圈内极夜。冬至（12.22）反之。春分秋分全球昼夜等长。选 A。",
  "tag": "二分二至"
 },
 {
  "id": "geo_q437_10105",
  "manualId": "geo_m2",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于地球公转轨道近日点、远日点，下列说法正确的是",
  "answer": "BD",
  "options": [
   "A. 近日点在7月初，远日点在1月初",
   "B. 近日点在1月初，远日点在7月初",
   "C. 近日点公转速度慢",
   "D. 近日点公转速度快"
  ],
  "explain": "地球公转轨道为椭圆，太阳位于一个焦点上。近日点1月初（约1月3日）、远日点7月初（约7月4日）。根据开普勒第二定律，近日点公转角速度和线速度都最快，远日点最慢。所以北半球冬半年（9.23-次年3.21）短于夏半年，因为经过近日点附近速度快。选 BD。",
  "tag": "公转速度"
 },
 {
  "id": "geo_q437_10106",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2020·山东）某日太阳直射点位于15°N。下列判断正确的是",
  "answer": "B",
  "options": [
   "A. 该日北极圈内极昼",
   "B. 该日北半球昼长夜短",
   "C. 该日为春分日",
   "D. 该日北回归线正午太阳高度最大"
  ],
  "explain": "直射点15°N（不是23°26′N，故不是夏至）→介于春分与夏至之间（约5月中或7月末）。此时北半球昼长夜短（直射点在北半球）；但北极圈内不完全极昼（要直射>23°26′-90°+66.5°=需要δ达23°26′才极圈线上刚极昼）；北回归线正午太阳高度H=90°-|23°26′-15°|=81°34′，非最大（最大是6.22 90°）。选 B。",
  "tag": "太阳直射点与昼夜"
 },
 {
  "id": "geo_q437_10107",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "normal",
  "q": "国际日期变更线大致沿180°经线，其东西两侧",
  "answer": "B",
  "options": [
   "A. 日期相同，时间不同",
   "B. 由西向东跨越减一天",
   "C. 由东向西跨越减一天",
   "D. 时刻和日期都相同"
  ],
  "explain": "国际日期变更线（IDL）大致沿180°：由东向西跨→加一天；由西向东跨→减一天。因为向西即由西十二区（+12h今日）到东十二区（-12h明日）方向……记忆口诀：向东减一日、向西加一日。选 B。",
  "tag": "日期分界线"
 },
 {
  "id": "geo_q437_10108",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "hard",
  "q": "某地某日昼长为14小时，则该日日出、日落地方时分别是",
  "answer": "A",
  "options": [
   "A. 5:00、19:00",
   "B. 7:00、19:00",
   "C. 5:00、17:00",
   "D. 6:00、18:00"
  ],
  "explain": "昼长=日落时刻-日出时刻，且日出和日落对正午12:00对称。昼长14h→14/2=7h（半个昼长）；日出=12-7=5:00，日落=12+7=19:00。选 A。",
  "tag": "日出日落时刻计算"
 },
 {
  "id": "geo_q437_10109",
  "manualId": "geo_m2",
  "type": "calc",
  "difficulty": "hard",
  "q": "福建莆田（25°N，119°E）2024年6月22日（夏至）的：（1）昼长是多少（估算至分钟）？（2）正午太阳高度是多少？",
  "answer": "(1) 约13h37min；(2) 88°26′",
  "explain": "（1）昼长可用公式 cos(半昼弧)=-tan φ·tan δ 计算： φ=25°N，δ=23°26′（夏至） tan25°≈0.4663，tan23°26′≈0.4335 cos(t/2)=-0.4663×0.4335=-0.2021 t/2=arccos(-0.2021)≈101.66°→折算时间：101.66°/15°/h=6.78h≈6h47min 昼长=2×6h47min≈13h34min（约13.5h） （2）H=90°-|25°-23°26′|=90°-1°34′=88°26′",
  "tag": "昼长与太阳高度"
 },
 {
  "id": "geo_q437_10110",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "normal",
  "q": "在南半球中纬度地区（如悉尼），冬季（7月）时",
  "answer": "C",
  "options": [
   "A. 昼长夜短，日出东北",
   "B. 昼夜等长",
   "C. 昼短夜长，日出东北",
   "D. 昼短夜长，日出东南"
  ],
  "explain": "南半球7月为冬季：昼短夜长；此时直射点在北半球，全球（除极昼极夜区外）日出方向偏北→南半球日出东北、日落西北。选 C。（口诀：太阳直射点在哪个半球，日出就偏向那个半球方向）",
  "tag": "日出方位与季节"
 },
 {
  "id": "geo_q437_10111",
  "manualId": "geo_m2",
  "type": "judge",
  "difficulty": "normal",
  "q": "赤道上全年昼夜等长且日出正东、日落正西。",
  "answer": "对",
  "explain": "赤道地区永远昼夜等长（各12h）；除极昼/极夜外，太阳直射赤道时（春秋分）全球日出正东日落正西；赤道地区日出总是正东（周日视运动圆平面与地平面垂直）。",
  "tag": "赤道地区特殊性"
 },
 {
  "id": "geo_q437_10112",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·广东）当北京时间为9:00时，太阳直射的经线是",
  "answer": "B",
  "options": [
   "A. 60°E",
   "B. 75°E",
   "C. 90°E",
   "D. 120°E"
  ],
  "explain": "太阳直射的经线=当地正午12:00所在经线。北京时间9:00→东八区9:00→比东八区快3h的经线是12:00。快3h→东经3×15°=45°=东八区中央经线120°E-45°=75°E。所以75°E地方时12:00→太阳直射75°E。选 B。",
  "tag": "太阳直射经线"
 },
 {
  "id": "geo_q437_10113",
  "manualId": "geo_m2",
  "type": "multi",
  "difficulty": "hard",
  "q": "当太阳直射南回归线时，下列现象正确的是",
  "answer": "BCD",
  "options": [
   "A. 北极点出现极昼",
   "B. 南极圈内出现极昼",
   "C. 北半球昼最短夜最长",
   "D. 南半球昼最长夜最短"
  ],
  "explain": "太阳直射南回归线=冬至（12.22）。南极圈内极昼，北极圈内极夜；南半球昼最长（夏至），北半球昼最短。A错（北极点极夜）。选 BCD。",
  "tag": "冬至现象综合"
 },
 {
  "id": "geo_q437_10114",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "normal",
  "q": "一飞机于5月1日15:00从上海（东八区）起飞，飞行10小时到达纽约（西五区），到达时纽约当地时间是",
  "answer": "A",
  "options": [
   "A. 5月1日12:00",
   "B. 5月2日4:00",
   "C. 5月2日8:00",
   "D. 5月1日22:00"
  ],
  "explain": "上海起飞时刻转纽约时间：15:00 - 13h（东八区与西五区时差）= 5月1日2:00（纽约时间）飞行10h→到达时纽约时间=2:00+10h=12:00（5月1日）。选 A。",
  "tag": "飞行区时计算"
 },
 {
  "id": "geo_q437_10115",
  "manualId": "geo_m2",
  "type": "fill",
  "difficulty": "normal",
  "q": "地球自转周期：恒星日为_______时_______分_______秒；太阳日为_______小时。",
  "answer": "23|56|4|24",
  "explain": "恒星日23h56min4s：真自转周期。太阳日24h：日常时间单位，比恒星日多3min56s（因为地球公转叠加）。",
  "tag": "恒星日与太阳日"
 },
 {
  "id": "geo_q437_10116",
  "manualId": "geo_m2",
  "type": "single",
  "difficulty": "hard",
  "q": "某日甲、乙两地同时日出，其中甲位于赤道，乙位于60°N，则该日",
  "answer": "A",
  "options": [
   "A. 太阳直射赤道（春分或秋分）",
   "B. 太阳直射北回归线",
   "C. 太阳直射南回归线",
   "D. 无法判断"
  ],
  "explain": "不同纬度地区同时日出→意味着晨昏圈过极点、平分所有纬线→即晨昏圈通过南北两极、与经线圈重合→太阳直射赤道，即春分或秋分。此时全球昼夜等长，所有地方地方时6:00日出、18:00日落。选 A。",
  "tag": "晨昏圈与直射点"
 },
 {
  "id": "geo_q437_10201",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "easy",
  "q": "大气对太阳辐射的削弱作用主要包括",
  "answer": "D",
  "options": [
   "A. 只有反射",
   "B. 只有吸收",
   "C. 只有散射",
   "D. 反射、吸收、散射"
  ],
  "explain": "大气削弱作用三种：①反射（云层为主，无选择性）；②吸收（水汽、CO₂吸收红外，臭氧吸收紫外，有选择性）；③散射（波长越短越易散射，故蔚蓝色天空）。选 D。",
  "tag": "大气削弱作用"
 },
 {
  "id": "geo_q437_10202",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·全国乙）晴朗夜晚，霜冻较易在下列哪种地方形成",
  "answer": "C",
  "options": [
   "A. 森林中",
   "B. 湖畔",
   "C. 山谷洼地",
   "D. 山顶"
  ],
  "explain": "霜冻形成条件：①气温低（0℃以下）；②地面辐射强、大气逆辐射弱（晴夜）；③冷空气容易堆积。山谷洼地：夜晚冷空气重沿山坡下沉汇集于谷底，加之地形封闭辐射冷却更强→易生霜冻（冷湖效应）。森林/湖畔/山顶都比谷底不易形成霜。选 C。",
  "tag": "霜冻/大气受热过程"
 },
 {
  "id": "geo_q437_10203",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "\"高处不胜寒\"从大气受热过程角度解释是",
  "answer": "B",
  "options": [
   "A. 距太阳越远越冷",
   "B. 地面是近地面大气的主要直接热源",
   "C. 高山缺氧无法维持温度",
   "D. 高山反射太阳辐射强"
  ],
  "explain": "近地面大气的直接热源是地面（地面吸收太阳辐射后以长波辐射的形式向大气传递热量）。海拔高→远离地面→接收地面辐射少→温度低。这就是\"高处不胜寒\"的根本原因。选 B。",
  "tag": "大气受热过程"
 },
 {
  "id": "geo_q437_10204",
  "manualId": "geo_m3",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·山东·多选）大棚种植中，能够提高夜间棚内温度的措施有",
  "answer": "ACD",
  "options": [
   "A. 覆盖草帘减少地面辐射",
   "B. 打开通风窗增加空气流通",
   "C. 使用聚乙烯薄膜阻挡热量散失",
   "D. 在棚内放置装水的黑色容器"
  ],
  "explain": "夜间棚温下降主要因地面辐射散热和长波辐射穿透。措施：A覆盖草帘→减少地面辐射失热✓；B通风→热量散失更快，错；C薄膜→阻挡长波辐射，温室效应✓；D黑色容器白天吸热强、夜间放热→蓄热✓。选 ACD。",
  "tag": "温室效应/大气逆辐射"
 },
 {
  "id": "geo_q437_10205",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "热力环流形成的根本原因是",
  "answer": "A",
  "options": [
   "A. 地面冷热不均",
   "B. 空气密度差异",
   "C. 气压差",
   "D. 风向变化"
  ],
  "explain": "热力环流形成过程：①地面冷热不均→②空气热胀冷缩，产生垂直运动→③同一水平面出现气压差→④空气水平运动（风）→形成闭合环流。根本原因是地面冷热不均。选 A。",
  "tag": "热力环流"
 },
 {
  "id": "geo_q437_10206",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "城市热岛效应形成的原因主要有：①城市人口密集、生产生活排放大量热量；②城市建筑物、道路吸热强；③城市植被少；④城市高楼多，风力小",
  "answer": "D",
  "options": [
   "A. 只有①②",
   "B. 只有①③",
   "C. ①②③",
   "D. ①②③④"
  ],
  "explain": "城市热岛四大成因全对。热岛效应导致城市气流由郊区吹向市区（郊区风），并在市区上空形成上升气流→易形成雨岛效应。选 D。",
  "tag": "城市热岛与热力环流"
 },
 {
  "id": "geo_q437_10207",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "q": "下图为北半球某地近地面等压线图，虚线箭头表示水平气压梯度力方向。则甲地实际风向（考虑地转偏向和摩擦力）是",
  "answer": "B",
  "options": [
   "A. 与气压梯度力同向（垂直等压线，从高压到低压）",
   "B. 与气压梯度力斜交，向右偏一角度",
   "C. 与等压线平行",
   "D. 与气压梯度力反向"
  ],
  "explain": "风的形成受三力：①气压梯度力（从高压→低压，垂直等压线）；②地转偏向力（北半球右偏，垂直风向）；③摩擦力（与风向相反）。近地面因有摩擦力，风向与等压线斜交（约30°-45°），偏向低压一侧。北半球右偏。高空无摩擦，风向平行等压线。选 B。",
  "tag": "风的形成与方向"
 },
 {
  "id": "geo_q437_10208",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·湖南）副热带高气压带的形成原因是",
  "answer": "C",
  "options": [
   "A. 热力原因，地面受热强",
   "B. 热力原因，地面冷却",
   "C. 动力原因，气流下沉",
   "D. 动力原因，气流上升"
  ],
  "explain": "气压带按成因分：赤道低压（热力，气流上升）、极地高压（热力，气流下沉）、副热带高压（动力，因赤道上升气流至高空流向副热带上空堆积下沉）、副极地低压（动力，因中纬西风与极地东风相遇抬升）。副高属于动力性下沉气流。选 C。",
  "tag": "气压带成因"
 },
 {
  "id": "geo_q437_10209",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "受气压带风带影响，下列气候类型形成正确的是",
  "answer": "D",
  "options": [
   "A. 热带雨林—副高控制",
   "B. 地中海气候—信风常年控制",
   "C. 温带海洋性气候—副高控制",
   "D. 热带沙漠气候—副高或信风控制"
  ],
  "explain": "气压带风带对气候形成： 热带雨林=赤道低压常年控制； 热带沙漠=副高/信风常年控制； 地中海=副高与西风交替控制； 温带海洋性=西风常年控制； 温带大陆性=距海远、深居内陆； 热带草原=赤道低压与信风交替； 亚热带季风=海陆热力差异。选 D。",
  "tag": "气压带风带与气候"
 },
 {
  "id": "geo_q437_10210",
  "manualId": "geo_m3",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2020·全国Ⅰ·多选）下列关于季风环流的说法，正确的有",
  "answer": "AC",
  "options": [
   "A. 季风是海陆热力差异的重要产物",
   "B. 我国东南沿海冬季受东南季风影响",
   "C. 南亚夏季风还与气压带风带季节移动有关",
   "D. 季风环流范围最广的是东亚季风"
  ],
  "explain": "季风成因：①海陆热力差异（东亚典型）；②气压带风带季节移动（南亚夏季东南信风越赤道右偏为西南季风）。我国冬季吹偏北风（西北季风、东北季风），非东南。B错。范围最广的是南亚+东亚+东南亚组合中的东亚+南亚。D不准确。选 AC。",
  "tag": "季风成因"
 },
 {
  "id": "geo_q437_10211",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "下列气候类型分布在南北纬30°—40°大陆西岸的是",
  "answer": "C",
  "options": [
   "A. 热带雨林气候",
   "B. 温带海洋性气候",
   "C. 地中海气候",
   "D. 亚热带季风气候"
  ],
  "explain": "地中海气候（30°-40°大陆西岸）：夏季副高控制→干热少雨；冬季西风带控制→温湿。分布：地中海沿岸、美国加州、澳西南、非洲南端、智利中部。亚热带季风在大陆东岸；温带海洋性在40-60°大陆西岸；热带雨林在赤道地区。选 C。",
  "tag": "气候类型分布"
 },
 {
  "id": "geo_q437_10212",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "冷锋过境时的天气特点是",
  "answer": "B",
  "options": [
   "A. 气温回升、气压下降、天气转晴",
   "B. 大风、降温、雨雪，气压升高",
   "C. 无风、气温稳定、连续阴雨",
   "D. 台风袭击"
  ],
  "explain": "冷锋（冷气团主动推暖气团）过境时：气温骤降、气压升高、常伴大风、雨雪（雨区在锋后）；过境后：气温低、气压高、天气转晴。暖锋反之，云雨在锋前，气温升。我国北方冬春大风、夏季暴雨、寒潮多与冷锋有关。选 B。",
  "tag": "锋面系统与天气"
 },
 {
  "id": "geo_q437_10213",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·山东）2022年8月，我国长江中下游地区持续高温干旱，其主要原因是",
  "answer": "B",
  "options": [
   "A. 冷锋控制，气流下沉",
   "B. 副热带高压异常强盛并北抬西伸，控制该地",
   "C. 西风带南下",
   "D. 台风过境"
  ],
  "explain": "我国长江中下游夏季伏旱：正常年份副高在7月下旬控制该地形成\"伏旱\"。2022年副高异常强盛且西伸北抬，长时间稳定控制长江流域→高温干旱严重。副高控制区盛行下沉气流，晴朗高温少雨。选 B。",
  "tag": "副高与我国天气"
 },
 {
  "id": "geo_q437_10214",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "台风的天气系统是",
  "answer": "B",
  "options": [
   "A. 高压系统",
   "B. 强低气压系统，气流呈逆时针辐合上升（北半球）",
   "C. 冷锋",
   "D. 反气旋"
  ],
  "explain": "台风=热带气旋中心气压极低（可达900hPa以下）。气流：北半球逆时针辐合上升→带来狂风暴雨。台风眼（中心）气流下沉→反而无风晴朗。台风常引发风暴潮、洪涝、山体滑坡等。选 B。",
  "tag": "台风/气旋反气旋"
 },
 {
  "id": "geo_q437_10215",
  "manualId": "geo_m3",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于全球气候变化，说法正确的是",
  "answer": "ABC",
  "options": [
   "A. 近百年全球气温呈上升趋势",
   "B. 人类活动排放温室气体是主要原因",
   "C. 全球变暖会导致海平面上升、冰川消融",
   "D. 全球变暖对全世界所有地区都有害"
  ],
  "explain": "全球变暖：确为事实（近百年 +0.85℃-1.1℃）；主因人类活动（IPCC 报告 95% 置信度）；影响：冰川融化、海平面上升、极端天气增多、生态破坏。但影响并非全部为害——高纬部分地区农业可能受益、北极航道打开等。D 表述绝对，错。选 ABC。",
  "tag": "全球气候变化"
 },
 {
  "id": "geo_q437_10216",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·湖北）拉尼娜现象发生时，赤道太平洋地区的气候异常表现为",
  "answer": "B",
  "options": [
   "A. 东岸多雨西岸干旱",
   "B. 东岸干旱，西岸多雨",
   "C. 全球气温普遍升高",
   "D. 无明显差异"
  ],
  "explain": "拉尼娜=赤道太平洋东部海温异常偏低（东冷西暖加剧）。此时东部秘鲁沿岸下沉气流增强→更干旱；西部印尼澳北上升气流加强→更多雨。厄尔尼诺则反之（东西温差缩小甚至倒转）。选 B。",
  "tag": "厄尔尼诺/拉尼娜"
 },
 {
  "id": "geo_q437_10217",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "q": "某地气温年较差为40℃，降水集中在夏季（7月降水占年降水50%），冬季干冷。该气候最可能是",
  "answer": "B",
  "options": [
   "A. 热带草原气候",
   "B. 温带季风气候",
   "C. 温带海洋性气候",
   "D. 地中海气候"
  ],
  "explain": "气温年较差40℃→大陆性强；夏季降水集中→季风气候（夏雨型）；冬季干冷→大陆性且冬季气团为冷干气团。温带季风气候（中国华北、东北）符合。温带大陆性年较差也大但降水更少更均。地中海冬雨。选 B。",
  "tag": "气候类型判读"
 },
 {
  "id": "geo_q437_10218",
  "manualId": "geo_m3",
  "type": "calc",
  "difficulty": "hard",
  "q": "某山地南坡（迎风坡）山麓气温 20℃，气流上升。该气流未饱和时按干绝热率 1℃/100m 下降，饱和后按湿绝热率 0.5℃/100m。假设该气流在 500m 处到达凝结高度，山顶海拔 2000m。请计算：（1）山顶气温；（2）背风坡山麓（0m）气温（干绝热下降）。",
  "answer": "(1) 山顶 7.5℃；(2) 背风坡山麓 27.5℃（焚风效应）",
  "explain": "（1）0-500m 未饱和，气温：20-5×1=15℃；500-2000m 饱和，气温：15-15×0.5=15-7.5=7.5℃。 （2）背风坡下降 2000m，无凝结（不再饱和），按干绝热率：7.5+2000/100×1=7.5+20=27.5℃。 背风坡比迎风坡山麓热 7.5℃→焚风效应（阿尔卑斯焚风、天山焚风、太行东坡）。",
  "tag": "焚风效应/绝热计算"
 },
 {
  "id": "geo_q437_10219",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "下列关于逆温层的说法，正确的是",
  "answer": "C",
  "options": [
   "A. 气温随高度增加而降低",
   "B. 大气对流强",
   "C. 上暖下冷，大气稳定，不利于污染扩散",
   "D. 有利于对流雨形成"
  ],
  "explain": "正常大气：气温随海拔升高而降低（0.6℃/100m）。逆温：反常现象，上暖下冷。原因：辐射逆温（晴夜地面冷）、下沉逆温（副高）、平流逆温（暖气流覆盖冷地面）。特点：大气稳定、无对流、污染物聚集→雾霾加重。冬季夜晚常见，是华北雾霾主因之一。选 C。",
  "tag": "逆温现象"
 },
 {
  "id": "geo_q437_10220",
  "manualId": "geo_m3",
  "type": "judge",
  "difficulty": "normal",
  "q": "白天山谷风中，风由山谷吹向山坡（谷风）。",
  "answer": "对",
  "explain": "山谷风：白天山坡受热强于谷底同高度大气→坡上气流上升，形成谷风（谷→坡）；夜晚反之，山坡辐射冷却快→冷空气沿坡下沉到谷底，形成山风（坡→谷）。四川盆地雅安\"雨城\"就与夜间山风有关。",
  "tag": "山谷风/局地环流"
 },
 {
  "id": "geo_q437_10221",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "q": "海陆风中，白天风由何处吹向何处",
  "answer": "A",
  "options": [
   "A. 海→陆",
   "B. 陆→海",
   "C. 静风",
   "D. 与季节有关"
  ],
  "explain": "海陆热力差异：白天陆地比热小升温快→陆上空气受热上升→陆低压海高压→风由海吹向陆（海风）；夜晚陆冷海暖→陆高压海低压→风由陆吹向海（陆风）。故白天海风、夜间陆风，我国东部沿海夏季海风明显。选 A。",
  "tag": "海陆风"
 },
 {
  "id": "geo_q437_10222",
  "manualId": "geo_m3",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于雾的形成条件，正确的是",
  "answer": "ABC",
  "options": [
   "A. 近地面水汽充足",
   "B. 气温降低达到露点",
   "C. 有凝结核",
   "D. 大气对流强"
  ],
  "explain": "雾=近地面水汽凝结形成微小水滴。条件：①充足水汽；②气温降至露点（辐射冷却、平流冷却等）；③凝结核（尘埃、盐粒）；④大气稳定（对流弱）。D 错。晨雾多为辐射雾（清晨辐射冷却）。选 ABC。",
  "tag": "雾的形成"
 },
 {
  "id": "geo_q437_10301",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "easy",
  "q": "水循环最重要的意义是",
  "answer": "C",
  "options": [
   "A. 使全球水量减少",
   "B. 使海水变淡",
   "C. 促进水资源不断更新，维持全球水量平衡",
   "D. 加速冰川融化"
  ],
  "explain": "水循环意义：①促进全球水量动态平衡；②促进海陆间物质迁移和能量交换；③塑造地表形态；④更新水资源。选 C。",
  "tag": "水循环意义"
 },
 {
  "id": "geo_q437_10302",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "下列人类活动中，能影响水循环环节的是",
  "answer": "D",
  "options": [
   "A. 植树造林（增加下渗、蒸腾）",
   "B. 修建水库（改变径流分配）",
   "C. 城市硬化路面（减少下渗、增加地表径流）",
   "D. 以上都是"
  ],
  "explain": "人类活动可影响水循环多个环节：①降水（人工降雨）；②蒸发（引水灌溉）；③下渗（城市化减少、植被增加）；④地表径流（水库调节）；⑤地下径流（过度开采）；⑥植物蒸腾（造林/毁林）。选 D。",
  "tag": "水循环的人类影响"
 },
 {
  "id": "geo_q437_10303",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·湖南）我国南水北调工程主要改变的水循环环节是",
  "answer": "B",
  "options": [
   "A. 蒸发",
   "B. 地表径流",
   "C. 降水",
   "D. 下渗"
  ],
  "explain": "南水北调=跨流域调水，主要改变地表径流的空间分配（把长江水调往华北、京津冀）。选 B。",
  "tag": "水循环人类影响"
 },
 {
  "id": "geo_q437_10304",
  "manualId": "geo_m4",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于河流的补给方式，说法正确的是",
  "answer": "ABD",
  "options": [
   "A. 我国东部季风区河流以雨水补给为主，夏秋汛",
   "B. 我国西北内陆河以高山冰雪融水补给为主，夏汛",
   "C. 东北河流没有春汛",
   "D. 地下水补给稳定，是河流最普遍的补给来源"
  ],
  "explain": "河流补给方式：①雨水（东部季风区，夏秋汛）；②冰雪融水（西北内陆，夏汛，如塔里木河）；③季节性积雪融水（东北，春汛）；④地下水（普遍存在、稳定）；⑤湖沼水。C错：东北有春汛（融雪）+夏汛（雨水）双汛。选 ABD。",
  "tag": "河流补给"
 },
 {
  "id": "geo_q437_10305",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2020·山东）某河流最大径流量出现在7月，最小径流量出现在1月，年内变化大。该河流最可能位于",
  "answer": "B",
  "options": [
   "A. 西欧",
   "B. 我国东部季风区",
   "C. 澳大利亚东部",
   "D. 阿拉伯半岛"
  ],
  "explain": "7月径流最大→夏汛→雨水补给的季风气候。我国东部季风区河流特征：径流量夏秋大、冬春小、年内变化大、有明显汛期。西欧温带海洋性气候年际稳定，无明显汛期。澳大利亚东部亚热带湿润气候夏季降水多但1月是夏季（南半球），矛盾。选 B。",
  "tag": "河流水文特征判读"
 },
 {
  "id": "geo_q437_10306",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "关于世界洋流分布规律，下列说法正确的是",
  "answer": "A",
  "options": [
   "A. 中低纬海区呈反气旋型环流（北顺南逆）",
   "B. 中低纬海区呈气旋型环流（北逆南顺）",
   "C. 北半球中高纬海区呈反气旋型",
   "D. 南半球中高纬无明显环流"
  ],
  "explain": "世界大洋环流：①中低纬（副热带海区）反气旋型：北半球顺时针，南半球逆时针；②北半球中高纬气旋型：逆时针；③南半球中高纬：无陆地阻隔，形成西风漂流环绕南极。选 A。",
  "tag": "洋流分布规律"
 },
 {
  "id": "geo_q437_10307",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·福建）秘鲁沿岸有著名的秘鲁寒流。当发生厄尔尼诺现象时，该地区异常表现为",
  "answer": "B",
  "options": [
   "A. 寒流增强，渔业增产",
   "B. 寒流减弱，暖水入侵，鱼类死亡，暴雨洪涝",
   "C. 寒流消失，鱼类迁回南方",
   "D. 变化不大"
  ],
  "explain": "厄尔尼诺=东太平洋赤道附近海温异常偏高。原因：南半球东南信风减弱→秘鲁沿岸上升补偿流减弱→冷水上升减少→表层水温升高→秘鲁寒流减弱。后果：①饵料减少+海温高→鱼类死亡/迁移，渔业损失巨大；②秘鲁沿岸原本干旱地区反常多雨洪涝；③印尼澳北反常干旱。选 B。",
  "tag": "厄尔尼诺与洋流"
 },
 {
  "id": "geo_q437_10308",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "关于洋流对气候的影响，说法正确的是",
  "answer": "C",
  "options": [
   "A. 暖流降温减湿",
   "B. 寒流增温增湿",
   "C. 暖流增温增湿，寒流降温减湿",
   "D. 洋流对气候没有影响"
  ],
  "explain": "暖流：从低纬流向高纬，水温高→加热空气、蒸发多，增温增湿。典型：北大西洋暖流使西欧气候温和多雨；东澳大利亚暖流形成热带雨林。 寒流：从高纬流向低纬，水温低→降温减湿。典型：秘鲁寒流形成阿塔卡马沙漠（南美西海岸5-30°S）；本格拉寒流形成纳米布沙漠。选 C。",
  "tag": "洋流对气候影响"
 },
 {
  "id": "geo_q437_10309",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "q": "寒暖流交汇处易形成大渔场的原因是",
  "answer": "D",
  "options": [
   "A. 水温较高",
   "B. 水温较低",
   "C. 洋流流速快",
   "D. 两种水体交汇搅动，营养盐上泛，浮游生物繁盛"
  ],
  "explain": "世界四大渔场三个位于寒暖流交汇：①北海道（日本暖流与千岛寒流）；②纽芬兰（墨西哥湾暖流与拉布拉多寒流）；③北海（北大西洋暖流与冷海水）；④秘鲁（上升补偿流带上营养盐，非交汇）。原理：寒暖流交汇→水团扰动→深层营养盐上泛+温差利于鱼类生长+两种鱼群聚集。选 D。",
  "tag": "渔场形成原因"
 },
 {
  "id": "geo_q437_10310",
  "manualId": "geo_m4",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2021·广东·多选）关于海水盐度分布规律，正确的是",
  "answer": "ABD",
  "options": [
   "A. 副热带海区盐度最高（蒸发>降水）",
   "B. 赤道地区盐度较低（降水多）",
   "C. 极地地区盐度最高（结冰析盐）",
   "D. 大洋边缘因有淡水汇入盐度较低"
  ],
  "explain": "海水盐度分布：\"副热带高盐、赤道次之、两极最低\"： ①副热带30°：蒸发强降水少→高盐（红海高达40‰） ②赤道：降水极多虽蒸发也强→稀释→低于副热带 ③极地：冰雪融化多→稀释；虽然结冰析盐但融冰量更大 ④近海：河流入海淡化 C错。选 ABD。",
  "tag": "海水盐度"
 },
 {
  "id": "geo_q437_10311",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "世界洋流中，能穿越三大洋（大西洋、印度洋、太平洋）的是",
  "answer": "C",
  "options": [
   "A. 北大西洋暖流",
   "B. 秘鲁寒流",
   "C. 西风漂流",
   "D. 赤道逆流"
  ],
  "explain": "南半球40-60°S纬度带无陆地阻隔，西风带驱动海水东流形成西风漂流→环绕南极、连通三大洋。这是世界唯一环流三大洋的洋流。选 C。",
  "tag": "洋流分布"
 },
 {
  "id": "geo_q437_10312",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "q": "我国北方某河流出现凌汛（冰凌堵塞）的条件是",
  "answer": "B",
  "options": [
   "A. 河流由低纬流向高纬且不结冰",
   "B. 河流由低纬流向高纬且冬季结冰",
   "C. 河流由高纬流向低纬且冬季结冰",
   "D. 河流水量少"
  ],
  "explain": "凌汛形成两个必要条件：①冬季结冰（有冰凌）；②河流从低纬流向高纬（下游先结冰，上游后结冰，融冰时下游未化、上游融水堆积；结冰时下游先冻堵，上游水位上涨）。我国典型凌汛河段：黄河（宁夏内蒙古段+山东段）、松花江。选 B。",
  "tag": "凌汛"
 },
 {
  "id": "geo_q437_10313",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2020·全国Ⅰ）密度流是由于两个海区海水密度差异形成的洋流。地中海—大西洋之间存在密度流，其表层流方向是",
  "answer": "B",
  "options": [
   "A. 从地中海流向大西洋",
   "B. 从大西洋流向地中海",
   "C. 无明显流向",
   "D. 双向都有"
  ],
  "explain": "地中海：蒸发>降水+径流，盐度高（39‰）；大西洋盐度较低（35‰）。地中海海水密度大、水位低（净蒸发损失）；大西洋密度小、水位高。表层水从大西洋流入地中海（补充蒸发损失）；底层水从地中海流出大西洋（高盐重水外流）。这就是二战意大利潜艇借直布罗陀海峡密度流不用发动机穿越的经典案例。选 B。",
  "tag": "密度流/直布罗陀"
 },
 {
  "id": "geo_q437_10314",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "下列水体中，人类可直接大量利用的淡水资源主要是",
  "answer": "B",
  "options": [
   "A. 冰川",
   "B. 河流水、湖泊水、浅层地下水",
   "C. 海洋水",
   "D. 大气水"
  ],
  "explain": "地球淡水占2.5%，其中冰川占68%（极地/高山，难利用）、深层地下水30%（开采困难）、可直接用的河湖水+浅层地下水仅占0.3%。人类需保护有限的可利用淡水。选 B。",
  "tag": "水资源分布"
 },
 {
  "id": "geo_q437_10315",
  "manualId": "geo_m4",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于我国水资源特点，说法正确的是",
  "answer": "ACD",
  "options": [
   "A. 总量丰富，人均少",
   "B. 南多北少，东多西少",
   "C. 时间分配不均，季节年际变化大",
   "D. 华北平原是缺水最严重区"
  ],
  "explain": "我国水资源：①总量28000亿m³居世界第6，但人均仅2100m³不到世界1/4，属贫水国；②空间：南多北少东多西少（400mm线分界）；③时间：夏秋多冬春少，年际变化大；④华北：需水量大+降水少+过度开发→严重缺水（南水北调受水区）。B表述基本对但不完整（漏\"人均少\"关键），A更准。全对。选 ACD。",
  "tag": "我国水资源"
 },
 {
  "id": "geo_q437_10316",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "\"三江源\"位于青海南部，是长江、黄河、澜沧江的发源地。三江源的水源补给主要来源于",
  "answer": "B",
  "options": [
   "A. 大气降水",
   "B. 冰川融水和季节性积雪融水",
   "C. 地下水",
   "D. 湖泊水"
  ],
  "explain": "三江源海拔4000m以上，位于青藏高原，冷高原气候→降水少（400mm以下）；有大量冰川、常年积雪、冻土。夏季气温升高→冰川、积雪融水汇集→长江、黄河、澜沧江的重要源头补给。故被称为\"中华水塔\"。选 B。",
  "tag": "三江源/冰川补给"
 },
 {
  "id": "geo_q437_10317",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·全国乙）某河流上游修建大型水库后，下游河段的水文变化最可能是",
  "answer": "C",
  "options": [
   "A. 洪峰增大",
   "B. 枯水期径流减小",
   "C. 洪峰削减、枯水期径流增加，年内变化减小",
   "D. 河流断流"
  ],
  "explain": "水库对下游水文影响：①调节径流：洪水期蓄水→削峰；枯水期放水→抬升水位；②年际、年内变化减小；③截留泥沙→下游含沙量减少（尼罗河阿斯旺水库典型）；④影响生态、渔业。选 C。",
  "tag": "水库影响"
 },
 {
  "id": "geo_q437_10318",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "q": "长江从源头到入海，径流量的变化特征是",
  "answer": "B",
  "options": [
   "A. 沿程减小",
   "B. 沿程增大，中下游有多条支流汇入",
   "C. 中游最大，下游减小",
   "D. 沿程稳定"
  ],
  "explain": "长江沿程接纳雅砻江、岷江、嘉陵江（上游）、汉江、乌江（中游）、赣江、湘江（洞庭湖水系）等大支流→径流量沿程增大，入海时年径流量约9600亿m³，居中国第一。选 B。",
  "tag": "长江水文"
 },
 {
  "id": "geo_q437_10319",
  "manualId": "geo_m4",
  "type": "calc",
  "difficulty": "hard",
  "q": "某流域年降水量 800mm，年蒸发量 500mm，流域面积 5000 km²。假设年下渗补给地下水 100mm。计算：该流域年地表径流量（亿 m³）。",
  "answer": "约 10 亿 m³",
  "explain": "水量平衡：降水=蒸发+径流+下渗（地下补给） 地表径流量深度=800-500-100=200mm=0.2m 面积=5000 km²=5×10⁹ m² 径流量=0.2×5×10⁹=1×10⁹ m³=10 亿 m³",
  "tag": "水量平衡"
 },
 {
  "id": "geo_q437_10320",
  "manualId": "geo_m4",
  "type": "judge",
  "difficulty": "normal",
  "q": "河流水与地下水互补：丰水期河水补给地下水，枯水期地下水补给河水。",
  "answer": "对",
  "explain": "河流与地下水存在双向补给关系： 丰水期：河水位高于地下水位→河水下渗补给地下水； 枯水期：地下水位高于河水位→地下水补给河水（河流基流的重要来源）。 但在特殊地区（如青藏黄河源头），地下水常年补给河流。",
  "tag": "水体互补"
 },
 {
  "id": "geo_q437_10401",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "easy",
  "q": "塑造地表形态的力量主要来自",
  "answer": "C",
  "options": [
   "A. 只有内力",
   "B. 只有外力",
   "C. 内力与外力共同作用",
   "D. 人类活动"
  ],
  "explain": "内力（地热能）：地壳运动、岩浆活动、变质作用→使地表变得高低起伏；外力（太阳辐射为主）：风化、侵蚀、搬运、堆积→削高填低，使地表趋于平坦。内外力共同塑造地貌，一般在漫长地质年代内力起主导，短期看外力显著。选 C。",
  "tag": "内外力作用"
 },
 {
  "id": "geo_q437_10402",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "下列地貌的形成主要与流水侵蚀有关的是",
  "answer": "B",
  "options": [
   "A. 沙丘",
   "B. V型河谷、峡谷、瀑布",
   "C. 冰斗、角峰",
   "D. 风蚀城"
  ],
  "explain": "各种外力作用地貌： 流水侵蚀：V谷、瀑布、峡谷（长江三峡）、喀斯特（漓江） 流水沉积：冲积扇、三角洲、河漫滩 风力侵蚀：风蚀城堡、蘑菇、雅丹 风力沉积：沙丘、黄土高原 冰川侵蚀：U谷、冰斗、角峰、峡湾（挪威） 冰川沉积：冰碛丘陵、冰碛湖 海浪侵蚀：海蚀崖、海蚀柱 海浪沉积：沙滩、沙嘴 选 B。",
  "tag": "外力地貌分类"
 },
 {
  "id": "geo_q437_10403",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·湖南）我国黄土高原形成的主要原因是",
  "answer": "B",
  "options": [
   "A. 流水沉积",
   "B. 风力沉积",
   "C. 冰川沉积",
   "D. 海浪沉积"
  ],
  "explain": "黄土高原形成过程：\"风成说\"：西北内陆干旱地区风蚀出大量粉尘细粒，随冬季偏北风搬运至黄河中游，因遇太行、秦岭山脉受阻沉积下来，堆积形成黄土高原（\"风成黄土\"）。厚度可达100-200m。而黄土高原沟壑纵横的现代地貌是流水侵蚀改造的结果（内因风积、外形水蚀）。选 B。",
  "tag": "黄土高原/风力沉积"
 },
 {
  "id": "geo_q437_10404",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "V型河谷主要形成于",
  "answer": "A",
  "options": [
   "A. 河流上游，以下蚀为主",
   "B. 河流中游，以侧蚀为主",
   "C. 河流下游，以沉积为主",
   "D. 河流入海口"
  ],
  "explain": "河谷发育三阶段： 上游：坡降大、水量小、下蚀强烈→V型峡谷（长江虎跳峡） 中游：坡降小、水量大、侧蚀为主→槽形河谷、河曲、河漫滩 下游：地势平坦、沉积为主→宽谷、三角洲 选 A。",
  "tag": "河谷发育"
 },
 {
  "id": "geo_q437_10405",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖北）河流入海口冲积扇/三角洲的形成必要条件包括",
  "answer": "C",
  "options": [
   "A. 河流坡度大",
   "B. 河口无潮汐",
   "C. 河流含沙量大，入海口水流分散、地形平缓",
   "D. 河口水深大"
  ],
  "explain": "三角洲形成条件：①河流含沙量大→有丰富物质来源（黄河为世界最高：37 kg/m³）；②河口地势平坦→水流减速；③水流分散、潮流较弱→泥沙易沉积；④海岸稳定或缓慢下沉。 反例：钱塘江因潮流强，冲走泥沙无三角洲。选 C。",
  "tag": "三角洲形成"
 },
 {
  "id": "geo_q437_10406",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "喀斯特地貌形成的主要地质作用是",
  "answer": "B",
  "options": [
   "A. 冰川侵蚀",
   "B. 流水化学溶蚀",
   "C. 风力侵蚀",
   "D. 海浪侵蚀"
  ],
  "explain": "喀斯特（岩溶）地貌=可溶性岩（石灰岩、白云岩）+ 含 CO₂ 的地下水/雨水 → 化学溶蚀 CaCO₃+CO₂+H₂O→Ca(HCO₃)₂。地表：石林、峰林、峰丛（桂林、云南）；地下：溶洞、钟乳石、石笋、地下河（贵州）。我国云贵高原为世界最大喀斯特地貌区。选 B。",
  "tag": "喀斯特地貌"
 },
 {
  "id": "geo_q437_10407",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "q": "挪威峡湾（长而深的海湾）主要由何种作用形成",
  "answer": "C",
  "options": [
   "A. 河流侵蚀后海水入侵",
   "B. 断层陷落后海水入侵",
   "C. 冰川刻蚀U型谷后海水入侵",
   "D. 火山口塌陷"
  ],
  "explain": "峡湾形成过程：①冰期山地冰川沿谷地下滑，将V型谷刻蚀为深而宽的U型谷；②冰期结束海平面上升，海水入侵U型谷→形成峡湾。分布：挪威、加拿大西部、新西兰南岛、智利南部——皆为高纬度大陆西岸冰川作用地区。选 C。",
  "tag": "峡湾/冰川地貌"
 },
 {
  "id": "geo_q437_10408",
  "manualId": "geo_m5",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2021·山东·多选）板块运动理论认为，地球岩石圈可划分为六大板块。下列有关板块运动的说法，正确的是",
  "answer": "ABD",
  "options": [
   "A. 板块内部相对稳定，交界处地壳运动活跃",
   "B. 板块碰撞形成褶皱山系（喜马拉雅）或海沟",
   "C. 板块张裂只发生在海洋",
   "D. 环太平洋和地中海-喜马拉雅是两大地震带"
  ],
  "explain": "板块构造要点：①岩石圈分为六大板块（欧亚、非洲、印度洋、太平洋、美洲、南极），板内稳定、板缘活跃；②消亡边界（碰撞）：大陆碰撞→褶皱山（喜马拉雅、阿尔卑斯）；大陆-大洋→海沟、岛弧、海岸山（安第斯、日本群岛）；③生长边界（张裂）：大洋中脊、东非大裂谷（大陆张裂）。C 错。④两大地震带：环太平洋（80%）、地中海-喜马拉雅。选 ABD。",
  "tag": "板块运动"
 },
 {
  "id": "geo_q437_10409",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "q": "喜马拉雅山脉的形成主要由于",
  "answer": "B",
  "options": [
   "A. 印度洋板块与太平洋板块碰撞",
   "B. 印度洋板块与欧亚板块碰撞挤压",
   "C. 非洲板块与欧亚板块张裂",
   "D. 太平洋板块与美洲板块碰撞"
  ],
  "explain": "喜马拉雅山脉：印度洋板块向北俯冲，与欧亚板块碰撞挤压→古地中海海底沉积岩隆起→形成世界第一高山。至今仍在缓慢升高（每年约1cm）。选 B。",
  "tag": "板块与山脉"
 },
 {
  "id": "geo_q437_10410",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "东非大裂谷是",
  "answer": "C",
  "options": [
   "A. 板块碰撞形成",
   "B. 冰川侵蚀形成",
   "C. 板块张裂（生长边界）形成",
   "D. 火山堆积形成"
  ],
  "explain": "东非大裂谷位于非洲板块内部，属大陆张裂带（未成型的大洋中脊），非洲板块内部有小板块正在分裂。若继续裂开→将形成新的大洋（红海就是原东非裂谷的一部分，现已成海洋）。选 C。",
  "tag": "东非大裂谷"
 },
 {
  "id": "geo_q437_10411",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "背斜和向斜的判断依据（本质）是",
  "answer": "B",
  "options": [
   "A. 形态上\"背斜为山、向斜为谷\"",
   "B. 岩层年龄\"背斜中心老两翼新，向斜相反\"",
   "C. 地表出露岩石类型",
   "D. 构造位置的高低"
  ],
  "explain": "背斜/向斜本质区别（岩层年龄）：背斜=岩层向上拱起→中心岩层老、两翼新；向斜=岩层向下弯曲→中心岩层新、两翼老。 常见地貌倒置：\"背斜成谷向斜成山\"（背斜顶部张裂易被侵蚀，向斜谷底反受挤压岩性坚硬）。所以形态不能作为绝对判断依据。选 B。",
  "tag": "背斜向斜判断"
 },
 {
  "id": "geo_q437_10412",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·全国甲）下列有关地质构造与实践应用的说法，正确的是",
  "answer": "B",
  "options": [
   "A. 隧道应选择在向斜（岩层往下弯）中修建",
   "B. 隧道应选在背斜中修建，因为岩层向上支撑力大且不易积水",
   "C. 找水应打在背斜顶部",
   "D. 找油气应打在向斜"
  ],
  "explain": "工程应用： 隧道→背斜（岩层向上拱起支撑好，不易积水，向斜底部易积水） 找水→向斜（低洼易汇水，中间岩层新可能含水层） 找油气→背斜（顶部储油气，因油气密度小上浮，被背斜岩层遮挡形成圈闭） 找矿→根据成因，但煤等经常在向斜中保存 选 B。",
  "tag": "构造应用"
 },
 {
  "id": "geo_q437_10413",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "岩石按成因分为三大类：岩浆岩、沉积岩、变质岩。下列说法正确的是",
  "answer": "C",
  "options": [
   "A. 花岗岩是沉积岩",
   "B. 石灰岩是岩浆岩",
   "C. 大理岩由石灰岩经变质作用形成",
   "D. 玄武岩由沉积岩变质形成"
  ],
  "explain": "三大岩类举例： 岩浆岩：花岗岩（侵入）、玄武岩（喷出）、安山岩； 沉积岩：石灰岩、砂岩、页岩、砾岩（含化石）； 变质岩：大理岩（石灰岩变质）、板岩（页岩变质）、石英岩（砂岩变质）、片麻岩（花岗岩变质）。选 C。",
  "tag": "岩石分类"
 },
 {
  "id": "geo_q437_10414",
  "manualId": "geo_m5",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于沉积岩，下列说法正确的是",
  "answer": "ACD",
  "options": [
   "A. 具有明显的层理构造",
   "B. 由岩浆冷却凝固形成",
   "C. 常常含有化石，是研究地质年代的重要依据",
   "D. 常见的有石灰岩、砂岩、页岩"
  ],
  "explain": "沉积岩三大特征：①层理构造（水平/斜层理）；②含化石（生物遗骸沉积后石化）；③常有沉积序列。 B错：沉积岩由外力搬运沉积压实胶结形成，非岩浆冷凝。 化石是判断地层年代、恢复古环境的关键依据（含三叶虫→古生代早期；恐龙→中生代；哺乳类→新生代）。选 ACD。",
  "tag": "沉积岩特征"
 },
 {
  "id": "geo_q437_10415",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2020·全国Ⅲ）我国台湾岛多地震、多火山，原因是",
  "answer": "B",
  "options": [
   "A. 位于板块内部",
   "B. 位于欧亚板块与太平洋板块的消亡边界",
   "C. 位于生长边界",
   "D. 位于欧亚板块与美洲板块之间"
  ],
  "explain": "台湾岛位于欧亚板块东缘，与太平洋板块（含菲律宾海板块）碰撞消亡带→地壳活跃→多地震、多火山、多温泉。日本、菲律宾群岛同属此地震带（环太平洋地震带西段）。选 B。",
  "tag": "台湾/板块"
 },
 {
  "id": "geo_q437_10416",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "长江三角洲平原和珠江三角洲平原都属于",
  "answer": "B",
  "options": [
   "A. 冲积扇",
   "B. 河流冲积平原（三角洲）",
   "C. 冰碛平原",
   "D. 湖积平原"
  ],
  "explain": "冲积平原三种：山前冲积扇（河流出山口）、河漫滩平原（河流中游泛滥）、河口三角洲（河流入海）。长江三角洲、珠江三角洲、恒河三角洲、密西西比三角洲都属河口三角洲。选 B。",
  "tag": "冲积平原"
 },
 {
  "id": "geo_q437_10417",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "q": "下列现象中，属于内力作用的是",
  "answer": "D",
  "options": [
   "A. 长江三峡形成",
   "B. 黄土高原沟壑纵横",
   "C. 沙漠中的雅丹地貌",
   "D. 喜马拉雅山不断升高"
  ],
  "explain": "内力作用：地壳运动（水平/垂直）、岩浆活动、变质作用、地震。表现为山脉隆升、板块运动、地壳升降等。喜马拉雅升高由印度板块北移→内力。 三峡、黄土沟壑、雅丹都是外力（流水/风力）。选 D。",
  "tag": "内外力辨析"
 },
 {
  "id": "geo_q437_10418",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "下列有关沙丘（新月形沙丘）的说法，正确的是",
  "answer": "C",
  "options": [
   "A. 迎风坡陡、背风坡缓",
   "B. 迎风坡与背风坡对称",
   "C. 迎风坡缓、背风坡陡，形状似新月",
   "D. 与风向平行"
  ],
  "explain": "新月形沙丘由风力沉积形成： 迎风坡缓（沙粒沿坡逐步爬升） 背风坡陡（30°休止角，沙粒越过山脊后堆积成陡坡） 两翼向风尖伸出，形如新月，凸面朝风。 通过沙丘形态可判断风向：迎风坡在缓的一侧。选 C。",
  "tag": "沙丘/风向判读"
 },
 {
  "id": "geo_q437_10419",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2021·湖北）雅丹地貌形成的主要外力是",
  "answer": "B",
  "options": [
   "A. 流水侵蚀",
   "B. 风力侵蚀",
   "C. 冰川侵蚀",
   "D. 海浪侵蚀"
  ],
  "explain": "雅丹地貌：干旱、极干旱区（我国西北，如敦煌、罗布泊）由风力吹蚀、磨蚀而形成的沿盛行风方向排列、陡壁+沟槽相间的地貌。是典型风蚀地貌，与丹霞（流水+风化侵蚀红色砂岩）、喀斯特（化学溶蚀）区别。选 B。",
  "tag": "雅丹地貌"
 },
 {
  "id": "geo_q437_10420",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "下列河段以流水沉积作用为主的是",
  "answer": "C",
  "options": [
   "A. 河流源头（高山峡谷）",
   "B. 河流上游（V型谷）",
   "C. 河流下游平原及河口",
   "D. 瀑布下方"
  ],
  "explain": "河流沿程：源头/上游→下蚀为主（V谷、瀑布）；中游→侧蚀为主（河曲、河漫滩）；下游及入海口→沉积为主（三角洲、冲积平原）。选 C。",
  "tag": "河流地貌"
 },
 {
  "id": "geo_q437_10421",
  "manualId": "geo_m5",
  "type": "calc",
  "difficulty": "hard",
  "q": "某河段近1000年来沉积泥沙厚度平均5m，河谷面积2 km²。该河沉积泥沙密度约2.0 t/m³。求：该河段这1000年沉积泥沙总重（亿吨）。",
  "answer": "约0.2亿吨",
  "explain": "体积=面积×厚度=2×10⁶ m²×5 m=1×10⁷ m³ 质量=体积×密度=1×10⁷×2.0=2×10⁷ t=0.2 亿吨 泥沙沉积速率反映流域侵蚀强度和搬运能力。",
  "tag": "沉积计算"
 },
 {
  "id": "geo_q437_10422",
  "manualId": "geo_m5",
  "type": "judge",
  "difficulty": "easy",
  "q": "外力作用总体上使地表趋于平坦（削高填低）。",
  "answer": "对",
  "explain": "外力作用（风化-侵蚀-搬运-沉积）从整体和长期看，将高处物质剥蚀，搬到低处堆积，使地表趋平坦。这与内力作用（使地表变得高低起伏）方向相反，二者共同塑造地貌。若无内力持续隆升，地球表面早已被外力削平如同月球（无大气无水，只有陨石撞击的凹凸）。",
  "tag": "内外力总方向"
 },
 {
  "id": "geo_q437_10501",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "q": "从赤道到极地方向自然带的变化，反映的是",
  "answer": "A",
  "options": [
   "A. 纬度地带性（由热量差异导致）",
   "B. 干湿度地带性（由水分差异导致）",
   "C. 垂直地带性",
   "D. 非地带性"
  ],
  "explain": "自然带三大分异规律：①纬度地带性（沿纬线延伸、沿经线更替）——热量为主；②干湿度地带性（沿经线延伸、沿纬线更替）——水分为主；③垂直地带性（沿山地垂直方向）；此外还有非地带性（海陆分布、地形起伏、洋流等特殊因素）。选 A。",
  "tag": "纬度地带性"
 },
 {
  "id": "geo_q437_10502",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·全国Ⅰ）从我国东部沿海到西北内陆，自然带依次为森林、草原、荒漠。此变化反映",
  "answer": "B",
  "options": [
   "A. 纬度地带性",
   "B. 干湿度（经度）地带性",
   "C. 垂直地带性",
   "D. 非地带性"
  ],
  "explain": "我国东西自然带变化：沿海森林（湿润）→草原（半湿润/半干旱）→荒漠（干旱）——反映水分（降水）由沿海向内陆递减→干湿度地带性（经度地带性）。选 B。",
  "tag": "干湿度地带性"
 },
 {
  "id": "geo_q437_10503",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "q": "山地垂直自然带谱丰富度主要取决于",
  "answer": "D",
  "options": [
   "A. 山地海拔越高越丰富",
   "B. 山地纬度越低越丰富",
   "C. 相对高度越大越丰富",
   "D. 山地纬度越低、相对高度越大越丰富"
  ],
  "explain": "垂直带谱丰富度取决于两个因素：①山地所在纬度：纬度低→基带热带→山顶到冰川跨度大；②山地相对高度：相对高度大→垂直分异明显。例如珠峰（低纬27°N+相对高度8848m）垂直带最完整；阿尔卑斯（45°N）中等；北欧山地（60°N）少。选 D。",
  "tag": "垂直地带性"
 },
 {
  "id": "geo_q437_10504",
  "manualId": "geo_m6",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·河北·多选）关于非地带性现象，下列举例正确的是",
  "answer": "ABCD",
  "options": [
   "A. 南美洲西海岸热带沙漠沿海岸南北延伸（受安第斯山与秘鲁寒流影响）",
   "B. 我国四川盆地\"天府之国\"（盆地地形+湿润气候）",
   "C. 南半球缺失亚寒带针叶林与苔原带（大陆缺失）",
   "D. 马达加斯加东岸热带雨林（信风+暖流+迎风坡）"
  ],
  "explain": "非地带性=偏离一般规律。原因：地形、洋流、海陆分布、水源等特殊因素。ABCD 全对，还有：赤道非洲东部大草原（东非高原地势高→非雨林；沿岸有暖流的马达加斯加东岸→雨林；秘鲁寒流→南美西岸沙漠南北延伸；南半球60-70°S无陆地→无针叶林苔原）。选 ABCD。",
  "tag": "非地带性"
 },
 {
  "id": "geo_q437_10505",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "q": "下列自然要素中，被称为\"自然地理环境的镜子\"是",
  "answer": "C",
  "options": [
   "A. 大气",
   "B. 水",
   "C. 土壤",
   "D. 岩石"
  ],
  "explain": "土壤=大气、水、生物、岩石长期相互作用的产物，直接反映气候和植被特征——温带草原黑土肥沃、雨林砖红壤贫瘠、荒漠土贫瘠盐碱。故被称为\"自然地理环境的镜子\"。选 C。",
  "tag": "土壤/整体性"
 },
 {
  "id": "geo_q437_10506",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "hard",
  "q": "关于地理环境的整体性，下列说法错误的是",
  "answer": "D",
  "options": [
   "A. 各要素相互联系、相互制约",
   "B. 一个要素变化会引起其他要素相应变化",
   "C. 一个地区的变化会影响其他地区",
   "D. 各要素独立发展，互不影响"
  ],
  "explain": "整体性三大表现：①各要素相互联系形成有机整体；②一个要素变化\"牵一发动全身\"（例如毁林→水土流失→河沙增多→下游淤积）；③\"一地变化影响他地\"（黄土高原水土流失→黄河下游\"地上河\"）。D 与整体性相反。选 D。",
  "tag": "地理整体性"
 },
 {
  "id": "geo_q437_10507",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2020·湖南）毁坏森林会导致下列什么变化",
  "answer": "D",
  "options": [
   "A. 水土流失加剧",
   "B. 生物多样性减少",
   "C. 气候变化（降水/温度）",
   "D. 以上都是"
  ],
  "explain": "毁林→整体性影响：①水土流失、土壤侵蚀→②沟壑形成、生态退化；③生物栖息地丧失→物种减少；④调节气候功能下降→局部降水减少、气温年较差增大；⑤大气中CO₂增加→全球变暖加剧；⑥河湖含沙量增加→水体污染、洪涝加剧。选 D。",
  "tag": "毁林生态效应"
 },
 {
  "id": "geo_q437_10508",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "q": "我国长白山北坡从山麓到山顶的自然带依次为",
  "answer": "B",
  "options": [
   "A. 落叶阔叶林—针叶林—苔原—冰雪带",
   "B. 针阔混交林—针叶林—岳桦林—苔原带",
   "C. 荒漠—草原—森林—冰雪",
   "D. 常绿阔叶林—落叶阔叶林—针叶林—冰川"
  ],
  "explain": "长白山（42°N）基带针阔混交林（温带季风气候，海拔约500m以下）；上升→针叶林（1200-1800m）；再上→岳桦林（矮化桦树带，1800-2000m）；再上→高山苔原带（2000m以上）；山顶部分为岩石带、季节性积雪，无常年冰川。选 B。",
  "tag": "长白山垂直带"
 },
 {
  "id": "geo_q437_10509",
  "manualId": "geo_m6",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于气候变化对自然带的影响，下列说法正确的是",
  "answer": "ABD",
  "options": [
   "A. 全球变暖使自然带界线向高纬度和高海拔移动",
   "B. 山地雪线上升",
   "C. 极地生物栖息地扩大",
   "D. 热带雨林可能因干旱减少"
  ],
  "explain": "全球变暖影响自然带：①温度升高→自然带向高纬、高海拔迁移（如温带向北扩大，寒带缩小）；②雪线上升、冰川退缩；③极地生物（如北极熊）栖息地缩小（C 错）；④降水格局改变→部分热带雨林反遭干旱侵袭（亚马逊近年干旱）。选 ABD。",
  "tag": "气候变化影响"
 },
 {
  "id": "geo_q437_10510",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "q": "非洲赤道两侧自然带南北大致对称分布，但雨林-草原-沙漠界线又向南北偏移。此偏移主要由于",
  "answer": "A",
  "options": [
   "A. 太阳直射点南北回归运动带动气压带风带移动",
   "B. 洋流影响",
   "C. 地形起伏",
   "D. 人类活动"
  ],
  "explain": "非洲跨赤道两侧，自然带南北对称。北移南移主要因太阳直射点回归运动→气压带风带南北移动（约±5°-10°）。7月带整体北移，1月带整体南移→热带草原有明显干湿季（受赤道低压和信风交替控制）。选 A。",
  "tag": "气压带移动/非洲自然带"
 },
 {
  "id": "geo_q437_10511",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·山东）某山地南坡自然带比北坡丰富，主要原因是",
  "answer": "D",
  "options": [
   "A. 南坡海拔更高",
   "B. 南坡纬度更低",
   "C. 南坡水汽更充足（迎风坡）",
   "D. 南坡光照/热量更充足或水汽更充足（视具体山地而定）"
  ],
  "explain": "山地南北坡自然带丰富度差异原因：①纬度→热量（我国北半球山地一般南坡比北坡热量多、雪线高）；②风向→水分（迎风坡多雨，自然带下移、种类多）。 阿尔卑斯山南坡地中海气候、北坡温带海洋性→南坡植被更丰富。 喜马拉雅南坡（迎印度洋暖湿气流）自然带完整丰富。 D 综合视具体山地情况，最准确。选 D。",
  "tag": "山地阴阳坡差异"
 },
 {
  "id": "geo_q437_10512",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "q": "土壤肥力最高的自然带是",
  "answer": "B",
  "options": [
   "A. 热带雨林带（砖红壤）",
   "B. 温带草原带（黑钙土）",
   "C. 热带荒漠带",
   "D. 苔原带"
  ],
  "explain": "温带草原：草本植物茂密、根系密集深入土壤、每年枯落物大量归还→有机质积累多；温度适中分解速度慢→腐殖质保存好→形成肥沃黑钙土（东北黑土、乌克兰黑土、北美中央大平原）。 雨林砖红壤看似绿盛其实贫瘠，养分储存在植物中，一旦砍伐即退化。选 B。",
  "tag": "土壤肥力"
 },
 {
  "id": "geo_q437_10513",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "normal",
  "q": "关于影响土壤形成的因素，下列排序正确的是",
  "answer": "C",
  "options": [
   "A. 只有母质决定",
   "B. 只有气候决定",
   "C. 母质、气候、生物、地形、时间、人类活动共同作用",
   "D. 只有人类活动决定"
  ],
  "explain": "土壤形成的六大因素：①母质（成土物质）；②气候（温度、降水影响风化速度）；③生物（关键，提供有机质）；④地形（决定水热再分配）；⑤时间（缓慢过程）；⑥人类活动（施肥、耕作、灌溉等）。选 C。",
  "tag": "土壤形成因素"
 },
 {
  "id": "geo_q437_10514",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "hard",
  "q": "东非高原赤道地区的自然带是热带草原而不是热带雨林，主要原因是",
  "answer": "C",
  "options": [
   "A. 纬度太高",
   "B. 距海太远",
   "C. 海拔高，气温相对较低，对流减弱，降水较少（形成非地带性）",
   "D. 洋流影响"
  ],
  "explain": "典型非地带性案例：东非高原（肯尼亚、坦桑尼亚）虽处赤道，但海拔1000-2000m，气温比刚果盆地低5-10℃，对流上升作用减弱→降水远少于典型雨林→形成\"高原热带草原\"。同类的还有拉美安第斯山高山地区。选 C。",
  "tag": "非地带性经典例"
 },
 {
  "id": "geo_q437_10515",
  "manualId": "geo_m6",
  "type": "judge",
  "difficulty": "normal",
  "q": "撒哈拉沙漠位于北回归线附近，其形成与副热带高气压带和东北信风常年控制有关。",
  "answer": "对",
  "explain": "撒哈拉沙漠（世界最大热带沙漠）：位于20-30°N北回归线两侧，常年受副热带高压和东北信风（从内陆吹来干燥）控制→晴朗少雨→热带沙漠气候。类似的还有阿拉伯半岛、美国西南、澳大利亚中部。",
  "tag": "热带沙漠成因"
 },
 {
  "id": "geo_q437_10516",
  "manualId": "geo_m6",
  "type": "single",
  "difficulty": "hard",
  "q": "（综合）下面关于自然地理环境组成要素与整体性关系的说法，错误的是",
  "answer": "D",
  "options": [
   "A. 大气、水、岩石、生物、土壤五大圈层相互作用",
   "B. 气候变化会影响水、生物、土壤等",
   "C. 生物既是产物又反作用于地理环境",
   "D. 五大圈层是完全独立、互不影响的静态存在"
  ],
  "explain": "D错。整体性要点：①五大圈层不断进行物质迁移和能量交换；②各要素相互作用相互影响；③生物既是环境产物又主动改造环境（如植物光合作用改变大气组成，形成土壤）。选 D。",
  "tag": "整体性辨析"
 },
 {
  "id": "geo_q437_10601",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "easy",
  "q": "一个国家或地区的人口自然增长率取决于",
  "answer": "B",
  "options": [
   "A. 出生率+死亡率",
   "B. 出生率-死亡率",
   "C. 迁入率+迁出率",
   "D. 人口总数"
  ],
  "explain": "自然增长率=出生率-死亡率（人口自然增减）；机械增长率=迁入率-迁出率；人口增长率=自然增长率+机械增长率。选 B。",
  "tag": "人口增长"
 },
 {
  "id": "geo_q437_10602",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·湖南）人口增长模式转变的一般顺序是",
  "answer": "A",
  "options": [
   "A. 高出生率-高死亡率-低自然增长率 → 高出生率-低死亡率-高自然增长率 → 低出生率-低死亡率-低自然增长率",
   "B. 低-低-低 → 高-高-低 → 高-低-高",
   "C. 高-高-低 → 低-低-低 → 高-低-高",
   "D. 无一定规律"
  ],
  "explain": "人口增长模式转变三阶段：①原始/传统（高-高-低）：农业社会，出生率死亡率都高；②转变期（高-低-高）：工业化早期，卫生改善，死亡率骤降；③现代（低-低-低）：发达国家，出生率也降。目前发达国家已完成三阶段，我国也进入低低低甚至负增长。选 A。",
  "tag": "人口增长模式"
 },
 {
  "id": "geo_q437_10603",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "q": "下列关于我国当前人口问题的说法，正确的是",
  "answer": "C",
  "options": [
   "A. 人口过快增长是首要问题",
   "B. 老龄化尚未到来",
   "C. 老龄化加剧、出生率下降、劳动力开始减少",
   "D. 男女比例严重失衡是唯一问题"
  ],
  "explain": "我国当前人口现状（2020年七普后）：①人口进入低速增长期，2022年首次负增长；②老龄化加剧（60岁以上超18.7%，2022数据）；③出生率降至7‰以下；④劳动力人口下降；⑤性别比略有缓解但仍偏高（105以上）。选 C。",
  "tag": "我国人口问题"
 },
 {
  "id": "geo_q437_10604",
  "manualId": "geo_m7",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·山东·多选）人口老龄化对社会经济带来的影响有",
  "answer": "ABC",
  "options": [
   "A. 社会养老负担加重",
   "B. 劳动力短缺、劳动力成本上升",
   "C. 医疗、养老、社保支出增加",
   "D. 消费市场萎缩，经济必然停滞"
  ],
  "explain": "老龄化影响：①养老/医疗/社保负担加重；②劳动力减少、成本上升，产业升级压力大；③\"银发经济\"崛起（消费市场结构变化，不是绝对萎缩）；④社会活力可能下降；⑤鼓励生育、延迟退休、发展养老产业等应对。D 太绝对。选 ABC。",
  "tag": "老龄化影响"
 },
 {
  "id": "geo_q437_10605",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "q": "下列因素中，属于影响人口迁移的经济因素的是",
  "answer": "A",
  "options": [
   "A. 就业机会与工资水平",
   "B. 战争",
   "C. 婚姻",
   "D. 宗教信仰"
  ],
  "explain": "影响人口迁移的因素：①经济（就业、收入、生活水平）——主要因素；②政治（战争、政策）；③社会文化（教育、宗教、婚姻家庭）；④生态环境（灾害、气候）；⑤个人因素。选 A。",
  "tag": "人口迁移因素"
 },
 {
  "id": "geo_q437_10606",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "q": "我国改革开放以来人口迁移的主要方向是",
  "answer": "B",
  "options": [
   "A. 由沿海向内陆",
   "B. 由内陆向东部沿海（农村→城市）",
   "C. 由城市向农村",
   "D. 由南向北"
  ],
  "explain": "我国改革开放以来（80年代至今）主要迁移趋势：①从中西部农村→东部沿海（京津冀、长三角、珠三角）；②从农村→城市（民工潮）；③省内迁移增多。原因：东部经济发达、就业机会多、工资高。选 B。",
  "tag": "我国人口迁移"
 },
 {
  "id": "geo_q437_10607",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2020·全国Ⅰ）人口迁移对迁入地和迁出地的影响，下列说法不正确的是",
  "answer": "B",
  "options": [
   "A. 迁入地劳动力增加，缓解用工紧张",
   "B. 迁入地房价一般下降",
   "C. 迁出地留守儿童、空巢老人增多",
   "D. 迁出地劳动力短缺，土地闲置"
  ],
  "explain": "人口迁移影响：迁入地→劳动力增加、经济发展、房价↑、公共服务压力↑、社会治安挑战；迁出地→劳动力短缺、老龄化加剧、留守儿童空巢老人、汇款收入↑但社会问题多。 B 错——迁入人口多→购房需求↑→房价一般上升。选 B。",
  "tag": "人口迁移影响"
 },
 {
  "id": "geo_q437_10608",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "hard",
  "q": "环境承载力（人口容量）的最主要制约因素通常是",
  "answer": "B",
  "options": [
   "A. 科技水平",
   "B. 资源（尤其是水资源、耕地）",
   "C. 消费水平",
   "D. 政治制度"
  ],
  "explain": "人口容量制约因素（重要性顺序）：①资源（水/耕地/能源为最直接、最主要限制）；②科技水平（能扩大或改善资源利用）；③消费水平（负相关）；④对外开放程度、政策等。选 B。",
  "tag": "人口容量"
 },
 {
  "id": "geo_q437_10609",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "q": "城市化的主要标志是",
  "answer": "D",
  "options": [
   "A. 城市人口数量增加",
   "B. 城市数目增多",
   "C. 城市用地扩展",
   "D. 城市人口占总人口比重上升（最主要）"
  ],
  "explain": "城市化三大标志：①城市人口↑；②城市用地扩展；③城市人口比重上升（衡量城市化水平最重要指标）。发达国家70%以上，我国2022年约65%。选 D。",
  "tag": "城市化标志"
 },
 {
  "id": "geo_q437_10610",
  "manualId": "geo_m7",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·广东·多选）城市化过程中常见的问题包括",
  "answer": "ABCD",
  "options": [
   "A. 交通拥堵",
   "B. 住房紧张、地价高",
   "C. 环境污染（大气、水、噪声）",
   "D. 就业压力大、社会治安问题"
  ],
  "explain": "城市化过快带来的\"城市病\"：①资源紧张（水资源）；②交通拥堵；③住房紧张、地价高；④环境污染（大气、水、固废、噪声）；⑤失业和贫富差距；⑥城市热岛雨岛效应；⑦生态破坏（绿地少）。选 ABCD。",
  "tag": "城市化问题"
 },
 {
  "id": "geo_q437_10611",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "q": "解决大城市病的有效措施是",
  "answer": "D",
  "options": [
   "A. 严格限制城市化",
   "B. 完全停止外来人口迁入",
   "C. 拆掉高楼降低密度",
   "D. 建设卫星城、发展公共交通、合理规划"
  ],
  "explain": "解决城市病的综合措施：①建卫星城、疏散功能（如北京副中心、雄安）；②发展公共交通（地铁、BRT）；③保护并增加城市绿地；④加强污水/垃圾/大气治理；⑤合理规划城市功能区；⑥控制过度扩张。选 D。",
  "tag": "城市病解决"
 },
 {
  "id": "geo_q437_10612",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "q": "城市功能区中，占地面积最大的通常是",
  "answer": "A",
  "options": [
   "A. 住宅区",
   "B. 商业区",
   "C. 工业区",
   "D. 行政区"
  ],
  "explain": "城市三大功能区中：住宅区（占40%-60%，最大）、商业区（面积小、多在市中心/交通干线交叉处）、工业区（面积中等、多在郊区或专门工业带）。选 A。",
  "tag": "城市功能区"
 },
 {
  "id": "geo_q437_10613",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "hard",
  "q": "（结合莆田地区）福建沿海城市（如福州、厦门、莆田）人口迁入的主要动力是",
  "answer": "B",
  "options": [
   "A. 气候宜人吸引",
   "B. 经济发达、就业机会多",
   "C. 政策强制",
   "D. 交通便利"
  ],
  "explain": "福建东南沿海（泉州、厦门、福州、莆田）改革开放以来经济快速发展，制造业、服务业、外贸繁荣→吸引大量省内外劳动力迁入。莆田作为民营经济活跃地（鞋业、木材、医药）也有相当规模的外来人口。选 B。",
  "tag": "福建人口迁移"
 },
 {
  "id": "geo_q437_10614",
  "manualId": "geo_m7",
  "type": "single",
  "difficulty": "normal",
  "q": "下列城市中，属于综合性大城市的是",
  "answer": "D",
  "options": [
   "A. 攀枝花（钢铁城）",
   "B. 大庆（石油城）",
   "C. 深圳（经济特区起家）",
   "D. 上海（综合型全球城市）"
  ],
  "explain": "城市按主导功能分：政治（华盛顿、北京）、经济（纽约、上海）、工业（钢铁攀枝花、石油大庆）、旅游（三亚、桂林）、文化教育（剑桥）、军港（旅顺）等。综合型：产业结构齐全，功能多样。上海是典型综合型全球城市。选 D。",
  "tag": "城市类型"
 },
 {
  "id": "geo_q437_10615",
  "manualId": "geo_m7",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于城市化水平的地区差异，下列说法正确的是",
  "answer": "ABD",
  "options": [
   "A. 发达国家已进入城市化后期，城市化水平高（70%-90%），增速缓慢，出现逆城市化现象",
   "B. 发展中国家城市化速度快，但水平较低（部分国家出现\"虚假城市化\"和\"滞后城市化\"）",
   "C. 全球城市化水平停止上升",
   "D. 中国城市化2000年后进入快速发展期"
  ],
  "explain": "城市化差异：发达→高水平（70-90%）、慢速、出现逆城市化（城市人口向郊区/农村流动）；发展中→水平低但速度快，部分虚假（拉美，超前工业化）或滞后（南亚，慢于工业化）。中国2000年后进入快速期，1949年10.6% → 2022年65.2%。C 错。选 ABD。",
  "tag": "城市化阶段"
 },
 {
  "id": "geo_q437_10616",
  "manualId": "geo_m7",
  "type": "judge",
  "difficulty": "normal",
  "q": "\"逆城市化\"意味着城市化水平下降，是城市衰败的表现。",
  "answer": "错",
  "explain": "逆城市化不是城市化倒退，而是城市化的后期新阶段。表现：中心城人口向郊区/远郊农村迁移，中心城市\"空心化\"。原因：①交通完善，出行便利；②生活质量追求，郊区环境好；③中心城地价高、拥堵。发达国家20世纪70年代起出现，我国大城市郊区化开始显现。总体城市化水平仍高。",
  "tag": "逆城市化辨析"
 },
 {
  "id": "geo_q437_10701",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "easy",
  "q": "影响农业的区位因素中，属于自然因素的是",
  "answer": "C",
  "options": [
   "A. 市场",
   "B. 交通",
   "C. 气候（光、热、水）",
   "D. 政策"
  ],
  "explain": "农业区位因素分自然（气候、地形、土壤、水源）和社会经济（市场、交通、劳动力、科技、政策、资金）两大类。选 C。",
  "tag": "农业区位"
 },
 {
  "id": "geo_q437_10702",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·湖南）我国东北成为商品粮基地，其主要有利条件不包括",
  "answer": "D",
  "options": [
   "A. 平原广阔，土壤肥沃（黑土）",
   "B. 夏季雨热同期",
   "C. 地广人稀，人均耕地多",
   "D. 生长期长，一年三熟"
  ],
  "explain": "东北商品粮基地优势：①平原地形；②黑土肥沃；③夏季雨热同期；④机械化程度高；⑤地广人稀，商品率高。 但东北热量不足，生长期短，一年一熟（少数一年两熟为极限）。D 错。选 D。",
  "tag": "东北农业"
 },
 {
  "id": "geo_q437_10703",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "珠江三角洲的\"基塘农业\"（桑基鱼塘、蔗基鱼塘）体现的是",
  "answer": "C",
  "options": [
   "A. 集约农业",
   "B. 商品谷物农业",
   "C. 生态农业/循环农业（资源综合利用）",
   "D. 大牧场放牧业"
  ],
  "explain": "基塘农业：低洼地→塘养鱼、塘泥肥基、基上植桑/蔗/果→桑叶养蚕、蚕粪喂鱼、蔗叶饲料、废物循环利用。是我国最典型的生态循环农业模式，\"变废为宝\"，可持续。选 C。",
  "tag": "基塘农业"
 },
 {
  "id": "geo_q437_10704",
  "manualId": "geo_m8",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·河北·多选）关于水稻种植业，下列说法正确的有",
  "answer": "ABCD",
  "options": [
   "A. 主要分布在亚洲季风区",
   "B. 单产高，商品率一般较低",
   "C. 需要大量劳动力精耕细作",
   "D. 水利工程量大"
  ],
  "explain": "水稻种植业特点（亚洲季风区典型）：①分布：东亚、南亚、东南亚季风区；②小农经营（家庭为单位）；③单产高、商品率低（自给自足）；④劳动密集（插秧、除草、收割）；⑤机械化水平低；⑥水利工程量大（灌溉网络）；⑦科技含量不断提高（杂交水稻）。选 ABCD。",
  "tag": "水稻种植业"
 },
 {
  "id": "geo_q437_10705",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "hard",
  "q": "新疆吐鲁番地区盛产葡萄的主要原因是",
  "answer": "C",
  "options": [
   "A. 水源充足",
   "B. 冬季温暖",
   "C. 光照强、昼夜温差大、糖分积累多",
   "D. 交通便利"
  ],
  "explain": "吐鲁番地处盆地，气候极干（年降水16mm），但：①日照时数长（3000h/a）→光合作用强；②夏季昼夜温差大→白天光合积累糖分、夜间呼吸消耗少→糖分累积→葡萄含糖量高（世界闻名）；③无病虫害；④灌溉靠坎儿井+雪水。选 C。",
  "tag": "吐鲁番葡萄"
 },
 {
  "id": "geo_q437_10706",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "荷兰\"鲜花王国\"能大量出口鲜花，主要有利条件是",
  "answer": "D",
  "options": [
   "A. 光热充足",
   "B. 土壤肥沃",
   "C. 劳动力多",
   "D. 温带海洋性气候适宜+发达的花卉育种科技+便利的国际航空运输+邻近欧洲广阔市场"
  ],
  "explain": "荷兰花卉业：①温带海洋性气候，冬温夏凉、光照适宜；②发达花卉园艺科技（育种、温室、无土栽培）；③史基浦机场+鹿特丹港，鲜花物流全球第一；④邻近西欧富裕市场；⑤悠久花卉文化和产业链（阿斯米尔花卉拍卖）。综合因素答 D。",
  "tag": "荷兰花卉"
 },
 {
  "id": "geo_q437_10707",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "工业区位选择中，对市场依赖性最强的工业是",
  "answer": "B",
  "options": [
   "A. 有色金属冶炼（能源指向）",
   "B. 啤酒、饮料、家具（市场指向）",
   "C. 甘蔗制糖（原料指向）",
   "D. 服装（劳动力指向）"
  ],
  "explain": "工业区位分类：①原料指向（原料重量运费大：制糖、水产加工）；②市场指向（产品笨重或易变质：家具、啤酒、饮料、印刷）；③动力指向（耗能大：电解铝、有色冶炼）；④劳动力指向（服装、电子装配）；⑤技术指向（芯片、生物制药）。选 B。",
  "tag": "工业指向"
 },
 {
  "id": "geo_q437_10708",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2020·山东）鞍山钢铁工业的最初区位选择依据是",
  "answer": "B",
  "options": [
   "A. 交通便利",
   "B. 靠近铁矿、煤矿（原料+燃料指向）",
   "C. 靠近市场",
   "D. 政策扶持"
  ],
  "explain": "鞍钢建于1948年（前身1918年）：①附近有大型铁矿（本溪、鞍山铁矿）；②辽宁抚顺煤矿供焦煤；③沈阳铁路便利；④\"资源型工业布局\"的经典案例，属原料+燃料指向。 现代钢铁工业更倾向沿海市场型布局（宝钢建在上海即为典型）。选 B。",
  "tag": "鞍钢工业区位"
 },
 {
  "id": "geo_q437_10709",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "我国宝钢建在上海，反映的是",
  "answer": "C",
  "options": [
   "A. 原料指向",
   "B. 燃料指向",
   "C. 市场+交通指向（消费地/沿海进口原料方便）",
   "D. 劳动力指向"
  ],
  "explain": "宝钢1978年选址上海宝山：①上海是全国最大市场；②沿海便于进口澳大利亚铁矿+新西兰煤炭（进口原料成本低于内陆运输）；③航运便利；④科技和资金充足。 反映了从\"资源指向\"到\"市场+交通指向\"的钢铁工业布局转变。选 C。",
  "tag": "宝钢/市场指向"
 },
 {
  "id": "geo_q437_10710",
  "manualId": "geo_m8",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于我国东部产业向中西部转移，下列说法正确的是",
  "answer": "ABCD",
  "options": [
   "A. 中西部劳动力、土地成本低，吸引劳动密集型产业转入",
   "B. 东部产业升级压力大，向高新技术升级",
   "C. 有利于中西部就业与经济发展",
   "D. 转出地土地资源可用于新兴产业"
  ],
  "explain": "我国产业转移：①东部土地/劳动力/环保成本上升→劳动密集型产业向中西部/东南亚转移；②东部转向科创、金融、总部经济；③中西部就业增加、经济发展；④但也需注意生态、政策承接能力。选 ABCD。",
  "tag": "产业转移"
 },
 {
  "id": "geo_q437_10711",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·福建）福建晋江的鞋业属于",
  "answer": "B",
  "options": [
   "A. 原料指向",
   "B. 劳动力/技术指向（专业化集群）",
   "C. 燃料指向",
   "D. 无区位偏向"
  ],
  "explain": "晋江鞋业是典型产业集群：①民营经济起家，家族企业密集，劳动力充足且熟练；②产业链完整（鞋材、生产、物流、品牌）；③品牌集聚（安踏、361°、特步、鸿星尔克、匹克等）；④莆田鞋业则以代工/仿制起家但也逐步品牌化。属劳动力+集群优势指向。选 B。",
  "tag": "晋江鞋业"
 },
 {
  "id": "geo_q437_10712",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "高新技术产业的区位选择首要考虑的是",
  "answer": "C",
  "options": [
   "A. 原料",
   "B. 燃料",
   "C. 科技（高校、科研机构、人才）与环境",
   "D. 市场"
  ],
  "explain": "高新技术产业（芯片、生物医药、AI、航空航天）的区位：①靠近大学、科研机构（硅谷-斯坦福、中关村-北大清华）；②环境优美吸引人才；③交通便利（机场、高铁）；④资金支持。选 C。",
  "tag": "高新技术区位"
 },
 {
  "id": "geo_q437_10713",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "鲁尔区（德国老工业区）衰落的主要原因不包括",
  "answer": "D",
  "options": [
   "A. 煤炭能源地位下降，被石油天然气取代",
   "B. 钢铁工业面临新兴工业国竞争",
   "C. 环境污染严重、产业结构单一",
   "D. 交通不便无法出口产品"
  ],
  "explain": "鲁尔区衰落四大主因：①能源结构变化：煤→油气；②世界钢铁需求下降+新兴钢铁国（日、韩、中）竞争；③重工业污染严重，环境成本上升；④产业结构单一，抗风险差。 鲁尔区交通极其便利（莱茵河+运河+铁路密集）。D 错。选 D。",
  "tag": "鲁尔区衰落"
 },
 {
  "id": "geo_q437_10714",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·全国乙）鲁尔区综合整治的措施主要有",
  "answer": "D",
  "options": [
   "A. 调整产业结构，发展高新技术和第三产业",
   "B. 治理环境污染",
   "C. 建设完善交通网",
   "D. 以上都是"
  ],
  "explain": "鲁尔区综合整治：①调整产业结构：发展电子、化工、精密仪器等新兴产业；②治污（莱茵河治理成绿色典范）；③加强基础设施建设；④发展教育科研；⑤发展旅游业（工业遗产）。综合治理成效显著。选 D。",
  "tag": "鲁尔区改造"
 },
 {
  "id": "geo_q437_10715",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "我国振兴东北老工业基地的重要意义不包括",
  "answer": "D",
  "options": [
   "A. 优化东北产业结构",
   "B. 促进区域协调发展",
   "C. 保障国家能源、粮食安全",
   "D. 提高东北热量条件"
  ],
  "explain": "东北振兴意义：①优化产业结构（老工业升级）；②保障能源、装备制造、粮食安全（东北是\"中国粮仓\"）；③区域协调发展；④增加就业。 热量为自然条件不可人为改变。D 错。选 D。",
  "tag": "东北振兴"
 },
 {
  "id": "geo_q437_10716",
  "manualId": "geo_m8",
  "type": "calc",
  "difficulty": "hard",
  "q": "某乳品加工厂，加工1吨鲜奶需消耗鲜奶1.05吨（含运输损耗），生产成本主要由原料奶（占70%）与运输费（占15%）构成。若企业A（靠近奶源）运奶距离10km，运费0.5元/吨·km；企业B（靠近市场）运奶距离300km。假设其他条件相同，请比较AB两地企业每吨鲜奶原料成本+运费。（假设原料收购价3500元/吨）",
  "answer": "A企业：3500×1.05+0.5×10×1.05≈3680元；B企业：3500×1.05+0.5×300×1.05≈3832元。A企业总成本比B低约152元。",
  "explain": "A：3500元/吨×1.05吨=3675元；运费0.5×10×1.05=5.25元；合计≈3680元 B：3500×1.05=3675元；运费0.5×300×1.05=157.5元；合计≈3833元 结论：乳品加工厂靠近奶源（原料指向）更经济，因鲜奶不易运输、运输损耗大，市场型乳制品需要就近加工。",
  "tag": "工业区位计算"
 },
 {
  "id": "geo_q437_10717",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "hard",
  "q": "我国北方冬小麦区（华北平原）主要限制因素是",
  "answer": "B",
  "options": [
   "A. 热量不足",
   "B. 春旱严重、水资源短缺",
   "C. 土壤贫瘠",
   "D. 光照不足"
  ],
  "explain": "华北平原冬小麦区限制因素：①春旱（3-5月降水少，气温回升快，蒸发大）；②水资源短缺（人均<500m³）；③土壤盐碱化（黄河下游平原）。 热量充足（暖温带，一年两熟）；光照充足；土壤较肥。故 A、C、D 错。选 B。",
  "tag": "华北农业"
 },
 {
  "id": "geo_q437_10718",
  "manualId": "geo_m8",
  "type": "judge",
  "difficulty": "normal",
  "q": "工业集聚可以共享基础设施、减少运输费用、促进技术交流，实现规模效应。",
  "answer": "对",
  "explain": "工业集聚优势：①加强企业间信息、技术交流；②促进专业化分工；③共享公共基础设施（水电路）；④降低运输成本、生产成本；⑤形成产业集群提高竞争力。 典型集聚：硅谷、深圳华强北、义乌小商品、晋江鞋业、莆田医药。 但过度集聚也会导致污染集中、土地紧张、原料市场竞争等问题。",
  "tag": "工业集聚"
 },
 {
  "id": "geo_q437_10801",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "easy",
  "q": "现代五种主要交通运输方式中，运量最大、运价最低的是",
  "answer": "C",
  "options": [
   "A. 铁路",
   "B. 公路",
   "C. 水运",
   "D. 航空"
  ],
  "explain": "五种运输方式对比：航空（最快，运量最小、运价最高）；铁路（运量大、运价较低、适合中长距离）；公路（灵活、门到门、中短距离）；水运（运量最大、运价最低、速度最慢，适合大宗低值货物）；管道（连续、稳定，仅适油气液）。选 C。",
  "tag": "交通运输方式"
 },
 {
  "id": "geo_q437_10802",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "normal",
  "q": "下列货物运输，最适合的方式是",
  "answer": "A",
  "options": [
   "A. 从澳大利亚运铁矿石到上海——海运",
   "B. 快递鲜活商品从北京到深圳——铁路",
   "C. 大量粮食从东北运到广东——公路",
   "D. 电子零件从上海到北京——水运"
  ],
  "explain": "货物选运方式原则：大宗低值远距→海运；急需时效→航空；短距门到门→公路；中长距大宗→铁路；油气液→管道。 A对（铁矿石海运）；B错（快递鲜活应航空/高铁）；C错（大宗粮食适铁路/水运）；D错（电子零件小批量高价值适公路/航空）。选 A。",
  "tag": "运输方式选择"
 },
 {
  "id": "geo_q437_10803",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·山东）我国青藏铁路修建面临的最主要自然障碍是",
  "answer": "C",
  "options": [
   "A. 缺氧",
   "B. 沙漠",
   "C. 高寒缺氧+多年冻土（工程技术难题）",
   "D. 山高谷深"
  ],
  "explain": "青藏铁路\"三大难题\"：①高寒缺氧（施工人员）；②多年冻土（路基不稳定，需通风管、热棒等技术）；③生态脆弱（保护藏羚羊迁徙）。工程技术挑战集中在冻土地基处理。选 C。",
  "tag": "青藏铁路"
 },
 {
  "id": "geo_q437_10804",
  "manualId": "geo_m9",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于我国高铁网建设意义，下列说法正确的是",
  "answer": "ABCD",
  "options": [
   "A. 促进区域经济协调发展",
   "B. 缓解普铁运输压力，客货分流",
   "C. 提高沿线城市可达性、促进城镇化",
   "D. 促进旅游、消费、劳动力流动"
  ],
  "explain": "高铁四大效应：①经济效应（沿线经济带、旅游带、消费）；②社会效应（就业、教育、人才流动）；③空间效应（1小时/半日通勤圈）；④战略效应（能源节约、国土安全）。 我国高铁网世界第一（4.5万公里以上）。选 ABCD。",
  "tag": "高铁意义"
 },
 {
  "id": "geo_q437_10805",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "hard",
  "q": "\"京杭大运河\"沟通了海河、黄河、淮河、长江、钱塘江五大水系，是世界最长的人工河。其主要功能变迁反映的是",
  "answer": "D",
  "options": [
   "A. 始终以航运为主",
   "B. 始终以农业灌溉为主",
   "C. 始终以军事运输为主",
   "D. 由古代漕运→现代综合利用（航运、防洪、灌溉、南水北调）"
  ],
  "explain": "京杭大运河功能变迁： 古代（隋唐-明清）：主要漕运（粮食、贡品从江南运京城）； 近代（清末-民国）：因黄河改道+铁路兴起→衰落； 现代：北段淤塞，山东以南通航；东线：南水北调工程重要通道；同时用于防洪、灌溉、旅游。 反映了一条运河功能随时代变迁而变化。选 D。",
  "tag": "大运河"
 },
 {
  "id": "geo_q437_10806",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "normal",
  "q": "港口区位选择需要考虑的自然条件不包括",
  "answer": "D",
  "options": [
   "A. 港阔水深、避风",
   "B. 陆域平坦利于建仓库",
   "C. 冬季不结冰或结冰期短",
   "D. 政策优惠"
  ],
  "explain": "港口区位自然条件：①水域条件（阔、深、静、暖—不冰）；②陆域条件（平坦筑仓库、腹地经济发达）。 D 政策属社会经济条件而非自然条件。选 D。",
  "tag": "港口区位"
 },
 {
  "id": "geo_q437_10807",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "normal",
  "q": "上海港成为世界大港的主要有利条件是",
  "answer": "D",
  "options": [
   "A. 位于长江口，扇形冲积平原",
   "B. 长江\"黄金水道\"入海，腹地广大（长江中下游经济发达区）",
   "C. 铁路、公路网密集，海陆联运便利",
   "D. 以上都是"
  ],
  "explain": "上海港\"世界第一大集装箱港\"（吞吐量）：①长江入海口，河海联运；②腹地广阔（长江流域）；③陆上交通网密集；④经济发达；⑤外向型经济发达。综合优势明显。选 D。",
  "tag": "上海港区位"
 },
 {
  "id": "geo_q437_10808",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖南）\"一带一路\"倡议中的\"丝绸之路经济带\"主要通道是",
  "answer": "B",
  "options": [
   "A. 海运",
   "B. 铁路（含中欧班列）",
   "C. 航空",
   "D. 公路"
  ],
  "explain": "\"一带一路\"两大主干： ①\"丝绸之路经济带\"（陆上）：以铁路为骨干，\"中欧班列\"经西北出境→中亚→俄罗斯/欧洲，已开通80+条线路； ②\"21世纪海上丝绸之路\"：从沿海经东南亚、南亚到中东、非洲、欧洲，以海运为主。 选 B。",
  "tag": "一带一路"
 },
 {
  "id": "geo_q437_10809",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "normal",
  "q": "下列关于我国航空运输的说法，正确的是",
  "answer": "C",
  "options": [
   "A. 我国航空货运量最大",
   "B. 我国航空运输主要面向大宗散货",
   "C. 我国航空运输主要面向高附加值货物、鲜活商品和商务旅客",
   "D. 航空场地在山区"
  ],
  "explain": "航空特点：①快速（远距离首选）；②运量最小、运价最高；③专属高价值/急需货物+人流；④机场需平坦开阔场地（多在平原/丘陵）。选 C。",
  "tag": "航空运输"
 },
 {
  "id": "geo_q437_10810",
  "manualId": "geo_m9",
  "type": "multi",
  "difficulty": "hard",
  "q": "交通线路对区域发展的影响，下列说法正确的是",
  "answer": "ABCD",
  "options": [
   "A. 促进沿线经济、加速城镇化",
   "B. 改善地区可达性、促进人流物流信息流",
   "C. 促进区域间分工合作",
   "D. 有些线路可能带来生态干扰"
  ],
  "explain": "交通线路影响：①经济：促进沿线经济繁荣（京沪高铁沿线城市房价、GDP显著提升）；②社会：提高可达性、缓解人流不畅；③空间：改变城市/产业空间格局（TOD 模式）；④生态：修建可能破坏生态（青藏铁路专门修建藏羚羊通道）。选 ABCD。",
  "tag": "交通线路影响"
 },
 {
  "id": "geo_q437_10811",
  "manualId": "geo_m9",
  "type": "single",
  "difficulty": "hard",
  "q": "城市商业网点分布，最基本的原则是",
  "answer": "B",
  "options": [
   "A. 靠近大城市中心",
   "B. 交通便利、人流集中（如城市中心、交通交叉口、大型居住区）",
   "C. 远离居住区",
   "D. 靠近工厂"
  ],
  "explain": "商业网点区位原则：①市场最优（人口、消费能力）；②交通最优（便利可达）；③土地成本合适（低比高好）。 大型商业中心多位于CBD、地铁交通枢纽、大型社区中心；便利店社区型；批发市场城郊结合部（便宜+方便运输）。选 B。",
  "tag": "商业网点"
 },
 {
  "id": "geo_q437_10812",
  "manualId": "geo_m9",
  "type": "judge",
  "difficulty": "normal",
  "q": "管道运输主要用于气体、液体（石油、天然气）的连续输送。",
  "answer": "对",
  "explain": "管道运输是特殊运输方式，仅用于液态、气态、少数固态浆液。特点：①连续性强；②安全性高；③成本低（长期）；④受气象影响小；⑤只能定点起讫、不灵活。 我国典型：西气东输（新疆→长三角）、俄油/俄气管道、川气东送。",
  "tag": "管道运输"
 },
 {
  "id": "geo_q437_10901",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "easy",
  "q": "我国最主要的自然灾害类型不包括",
  "answer": "D",
  "options": [
   "A. 洪涝、干旱",
   "B. 台风、寒潮",
   "C. 地震、泥石流",
   "D. 火山喷发"
  ],
  "explain": "我国自然灾害种类多、分布广、频率高。四大灾种：气象（洪涝、干旱、台风、寒潮、冰雹等）；地质（地震、火山、滑坡、泥石流）；生物（虫灾、鼠害）；海洋（风暴潮、海啸）。 但我国境内活火山极少（仅长白山、五大连池等，处于休眠期），火山喷发不构成大灾害。选 D。",
  "tag": "我国主要灾害"
 },
 {
  "id": "geo_q437_10902",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·河北）我国东部沿海地区7-9月自然灾害频发，其主要灾害是",
  "answer": "B",
  "options": [
   "A. 寒潮",
   "B. 台风",
   "C. 沙尘暴",
   "D. 雪灾"
  ],
  "explain": "我国东南沿海7-9月台风季（每年10个左右台风登陆华南到浙江）——狂风、暴雨、风暴潮。莆田正处于台风影响区。 寒潮冬季；沙尘暴春季北方；雪灾冬春。选 B。",
  "tag": "台风灾害"
 },
 {
  "id": "geo_q437_10903",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "normal",
  "q": "我国旱涝灾害频发的根本原因是",
  "answer": "C",
  "options": [
   "A. 地形复杂",
   "B. 河流众多",
   "C. 季风气候降水季节和年际变率大",
   "D. 人类活动"
  ],
  "explain": "我国东部季风区旱涝：①降水季节分配不均（夏秋多冬春少）；②降水年际变化大（夏季风强弱不同→丰水年淹、枯水年旱）；③夏季风推进方向和快慢差异→易致南涝北旱或南旱北涝。故根本原因为季风气候不稳定性。选 C。",
  "tag": "我国旱涝"
 },
 {
  "id": "geo_q437_10904",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "hard",
  "q": "洪涝灾害发生后，下列救援措施最紧迫的是",
  "answer": "B",
  "options": [
   "A. 重建家园",
   "B. 转移被困群众、防疫、保证饮用水",
   "C. 恢复经济生产",
   "D. 追究责任"
  ],
  "explain": "灾害救援按时间序：①紧急救援期（0-72h）：转移被困、伤员救治、饮用水/食品、防疫（水源污染消毒）；②过渡安置期（周-月）：临时住所、心理疏导；③恢复重建期（月-年）：家园重建、生产恢复。选 B。",
  "tag": "灾害救援"
 },
 {
  "id": "geo_q437_10905",
  "manualId": "geo_m10",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2020·全国Ⅰ·多选）我国泥石流多发的主要原因有",
  "answer": "ABC",
  "options": [
   "A. 地形山高谷深、坡陡",
   "B. 岩石破碎（多断裂、风化强）",
   "C. 降水集中或冰川融水急速",
   "D. 植被丰富，蓄水能力强"
  ],
  "explain": "泥石流三要素：①陡峭地形（>15°坡）；②大量松散物质（破碎岩、土层、风化壳）；③突发大量水源（暴雨、冰川融水、水库溃决）。 D 植被丰富反而抑制泥石流。 我国西南（横断山区）、青藏东缘、西北天山→泥石流高发。选 ABC。",
  "tag": "泥石流成因"
 },
 {
  "id": "geo_q437_10906",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "normal",
  "q": "关于滑坡与泥石流的区别，说法正确的是",
  "answer": "C",
  "options": [
   "A. 二者完全相同",
   "B. 泥石流是岩体整体下滑",
   "C. 滑坡=土/岩沿滑动面整体下滑；泥石流=水携带碎屑物质沿沟谷流动",
   "D. 泥石流不需要水"
  ],
  "explain": "滑坡：山体一部分沿弱面（软弱层、剪切面）整体下滑，可干可湿。 泥石流：碎屑+水混合成粘稠流体沿沟谷流动，需大量水启动。 二者常伴生，都是山区地质灾害。选 C。",
  "tag": "滑坡与泥石流区别"
 },
 {
  "id": "geo_q437_10907",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "hard",
  "q": "我国地震最集中的地区不包括",
  "answer": "D",
  "options": [
   "A. 台湾地区（板块交界）",
   "B. 华北平原—河北—山西—陕西一线",
   "C. 川滇藏（青藏高原东缘）",
   "D. 长江中下游平原"
  ],
  "explain": "我国地震带：①台湾及东南沿海（环太平洋带西段）；②华北带（河北山东辽宁）；③汾渭带（陕西山西）；④南北地震带（川滇甘）；⑤天山—帕米尔—青藏（喜马拉雅带）。 长江中下游平原沉降盆地，地震少。选 D。",
  "tag": "我国地震分布"
 },
 {
  "id": "geo_q437_10908",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·湖北）地震发生时正确的应急避险行为是",
  "answer": "B",
  "options": [
   "A. 立即乘电梯逃生",
   "B. 就近躲在坚固物体旁（桌下/承重墙角），远离窗户，震后有序撤离",
   "C. 跳窗",
   "D. 在电线杆下等候"
  ],
  "explain": "地震避险原则：①室内蹲、躲在桌下或承重墙角，护头颈，远离玻璃/悬挂物；②切勿乘电梯（易停）；③切勿跳楼（多数伤亡在跳楼）；④震后有序疏散到空旷处；⑤远离建筑、电线杆、高压线。选 B。",
  "tag": "地震避险"
 },
 {
  "id": "geo_q437_10909",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "normal",
  "q": "关于我国防洪减灾，下列措施属于工程措施的是",
  "answer": "A",
  "options": [
   "A. 修建水库、加固堤防、疏浚河道",
   "B. 制定防洪应急预案",
   "C. 洪水保险",
   "D. 加强宣传教育"
  ],
  "explain": "减灾措施分： 工程措施：水库、堤防、河道整治、防护林、蓄滞洪区等； 非工程措施：预警系统、应急预案、法律法规、保险、教育宣传、避灾迁移等。 选 A。",
  "tag": "防灾措施"
 },
 {
  "id": "geo_q437_10910",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "hard",
  "q": "长江下游洪涝频发的原因中，\"地上河\"最主要出现在",
  "answer": "B",
  "options": [
   "A. 长江",
   "B. 黄河下游（河南到山东段）",
   "C. 珠江",
   "D. 淮河"
  ],
  "explain": "\"地上河\"（悬河）：河床高出地面，只靠堤坝维持。 黄河下游因中游黄土高原水土流失严重，输沙量大→下游河段沉积→河床年抬升约10cm→形成著名的\"地上悬河\"（河南开封河床比开封城高10m以上），是黄河下游洪水威胁的主因。 长江下游河床基本与地面齐平，靠通江湖泊调节。 选 B。",
  "tag": "地上河/黄河"
 },
 {
  "id": "geo_q437_10911",
  "manualId": "geo_m10",
  "type": "multi",
  "difficulty": "hard",
  "q": "2020年长江中下游洪涝的原因有",
  "answer": "ABCD",
  "options": [
   "A. 副高较弱北抬缓慢，雨带在长江流域滞留时间长",
   "B. 山区森林破坏、上游水土流失",
   "C. 湖泊面积萎缩（围湖造田）、调蓄能力下降",
   "D. 沿江城市化，硬化面积大"
  ],
  "explain": "长江洪水多因综合作用：①气象：夏季风异常，雨带滞留（气压带异常）；②流域：中上游植被破坏；③湖泊：围湖造田（洞庭湖、鄱阳湖面积减半）；④社会：城市化、堤防不足；⑤下游：地势低平。 综合治理：退耕还湖、退耕还林、加固堤防、疏通河道、三峡工程削峰。选 ABCD。",
  "tag": "长江洪涝原因"
 },
 {
  "id": "geo_q437_10912",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·福建）福建沿海地区应对台风的主要非工程措施不包括",
  "answer": "D",
  "options": [
   "A. 台风预警系统",
   "B. 应急预案与撤离演练",
   "C. 保险和救援体系",
   "D. 修建海堤（工程措施）"
  ],
  "explain": "工程措施：海堤、防浪林、水利工程； 非工程措施：预警系统、应急预案、避灾迁移、保险、宣传教育。 D 属工程措施。选 D。",
  "tag": "台风防御"
 },
 {
  "id": "geo_q437_10913",
  "manualId": "geo_m10",
  "type": "single",
  "difficulty": "hard",
  "q": "寒潮的天气特征是",
  "answer": "A",
  "options": [
   "A. 剧烈降温、大风、雨雪、冰冻",
   "B. 温暖多雨",
   "C. 高温干旱",
   "D. 沙尘暴"
  ],
  "explain": "寒潮=大范围强冷空气南下过程，导致：①24-48h气温骤降8℃以上；②大风（8级以上）；③雨雪、冰冻；④华北华中农业霜冻。 影响：交通、供暖、农业等。我国秋末冬初及春初多发。选 A。",
  "tag": "寒潮"
 },
 {
  "id": "geo_q437_10914",
  "manualId": "geo_m10",
  "type": "judge",
  "difficulty": "normal",
  "q": "沙尘暴多发于我国北方春季（3-5月）。",
  "answer": "对",
  "explain": "我国沙尘暴源于西北内陆干旱区（内蒙、新疆）。春季：①冷空气频繁南下→大风；②地面解冻但植被未复→干燥松散；③气温上升→蒸发大→更干。三者结合→沙尘暴集中于3-5月，尤以4月最强。近年治沙+退耕还林还草使沙尘暴显著减少。",
  "tag": "沙尘暴"
 },
 {
  "id": "geo_q437_11001",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "easy",
  "q": "可持续发展的基本内涵包括",
  "answer": "D",
  "options": [
   "A. 经济可持续",
   "B. 社会可持续",
   "C. 生态可持续",
   "D. 经济+社会+生态三方面协调"
  ],
  "explain": "可持续发展定义（布伦特兰报告）：既满足当代人需求，又不损害后代人满足其需求能力。三大内涵：经济持续（增长与效率）、社会持续（公平与人的发展）、生态持续（资源与环境）。三者协调统一是核心。选 D。",
  "tag": "可持续发展"
 },
 {
  "id": "geo_q437_11002",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "normal",
  "q": "实现\"双碳\"（碳达峰、碳中和）目标的主要举措不包括",
  "answer": "D",
  "options": [
   "A. 大力发展风电、光电、水电、核电等清洁能源",
   "B. 提高能效，节能减排",
   "C. 植树造林增加碳汇",
   "D. 大量燃烧秸秆增加碳排放"
  ],
  "explain": "我国\"3060目标\"（2030碳达峰、2060碳中和）四大路径：①能源转型（新能源替代化石）；②节能提效（工业、建筑、交通）；③碳汇（森林、湿地、海洋）；④碳市场（碳交易、碳税）。 D 与目标相反。选 D。",
  "tag": "双碳目标"
 },
 {
  "id": "geo_q437_11003",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·山东）我国大力发展新能源汽车的主要目的是",
  "answer": "B",
  "options": [
   "A. 降低汽车价格",
   "B. 减少化石能源依赖，降低碳排放，改善大气环境",
   "C. 提高汽车速度",
   "D. 只是为了产业升级"
  ],
  "explain": "新能源汽车目标：①能源安全（我国石油对外依存度>70%）；②降低碳排放（交通占碳排20%）；③改善大气（PM2.5、NOx）；④产业升级（电动汽车弯道超车）；⑤汽车强国战略。选 B。",
  "tag": "新能源汽车"
 },
 {
  "id": "geo_q437_11004",
  "manualId": "geo_m11",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于生物多样性保护，下列说法正确的是",
  "answer": "ABCD",
  "options": [
   "A. 建立自然保护区（就地保护）",
   "B. 建立动物园、种质库（迁地保护）",
   "C. 制定法律法规打击非法捕猎",
   "D. 恢复退化生态系统、控制外来物种"
  ],
  "explain": "生物多样性保护措施：①就地保护（自然保护区、国家公园——大熊猫、青海三江源）；②迁地保护（动物园、植物园、种质库）；③法律（野生动物保护法）；④生态修复（退耕还林还草、湿地恢复）；⑤宣传教育；⑥防治外来入侵。选 ABCD。",
  "tag": "生物多样性"
 },
 {
  "id": "geo_q437_11005",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖北）我国西北地区推行退耕还林还草的主要目的是",
  "answer": "B",
  "options": [
   "A. 增加木材",
   "B. 治理水土流失、防治荒漠化，改善生态",
   "C. 提高粮食产量",
   "D. 增加就业"
  ],
  "explain": "退耕还林还草工程（1999-）：主要针对生态脆弱区（西北、黄土高原、西南）——将坡耕地（>25°坡）逐步退耕，恢复林草。 目的：①防治水土流失（黄土高原）；②防治荒漠化（西北）；③恢复生态；④调整农村产业结构。 是生态优先、可持续发展的重要举措。选 B。",
  "tag": "退耕还林"
 },
 {
  "id": "geo_q437_11006",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "normal",
  "q": "下列做法中，最符合\"循环经济\"理念的是",
  "answer": "C",
  "options": [
   "A. 一次性消费",
   "B. 焚烧废弃物",
   "C. 减量化—再利用—资源化（3R原则）",
   "D. 大量填埋垃圾"
  ],
  "explain": "循环经济3R原则：Reduce（减量化，源头减少资源消耗）；Reuse（再利用，多次使用）；Recycle（资源化，废弃物再制成资源）。 典型：垃圾分类回收、工业副产品循环、生态工业园。选 C。",
  "tag": "循环经济"
 },
 {
  "id": "geo_q437_11007",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "normal",
  "q": "我国\"节水优先、空间均衡、系统治理、两手发力\"的新时期治水思路，其\"节水优先\"意味着",
  "answer": "B",
  "options": [
   "A. 不再修建水利工程",
   "B. 首要以节约用水为主，提高用水效率",
   "C. 完全禁止用水",
   "D. 无节制开采"
  ],
  "explain": "\"节水优先\"是核心：①农业节水（滴灌、喷灌代大水漫灌）；②工业节水（循环用水，宝钢用水强度低于世界平均）；③生活节水；④阶梯水价。 我国水资源紧张（人均2100m³，世界平均1/4），节水是根本出路。选 B。",
  "tag": "节水优先"
 },
 {
  "id": "geo_q437_11008",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "hard",
  "q": "下列现象中，最能反映\"人地和谐\"理念的是",
  "answer": "D",
  "options": [
   "A. 完全放弃开发自然资源",
   "B. 无节制开发资源",
   "C. 只关注经济增长",
   "D. 因地制宜，合理利用资源，保护生态环境"
  ],
  "explain": "\"人地和谐\"是可持续发展的核心思想——不是不开发，也不是无节制开发，而是尊重规律、因地制宜、合理利用、保护改善。 各种形式：绿色出行、绿色建筑、生态修复、清洁生产、循环经济等。选 D。",
  "tag": "人地和谐"
 },
 {
  "id": "geo_q437_11009",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "normal",
  "q": "关于清洁能源，下列说法正确的是",
  "answer": "C",
  "options": [
   "A. 只有太阳能",
   "B. 完全无污染",
   "C. 相对清洁的能源，包括太阳能、风能、水能、核能、地热等",
   "D. 目前已完全取代化石能源"
  ],
  "explain": "清洁能源=在使用过程中CO₂/污染物排放低于化石能源的能源：太阳能、风能、水能、核能（低碳但有核废料问题）、地热、生物质、氢能等。 完全无污染是理想状态。目前化石能源仍占全球能源70%以上。选 C。",
  "tag": "清洁能源"
 },
 {
  "id": "geo_q437_11010",
  "manualId": "geo_m11",
  "type": "single",
  "difficulty": "hard",
  "q": "我国北方地区推行冬季\"清洁供暖\"（煤改电、煤改气）的主要目的是",
  "answer": "B",
  "options": [
   "A. 降低取暖成本",
   "B. 减少散煤燃烧带来的大气污染（PM2.5）",
   "C. 增加碳排",
   "D. 减少就业"
  ],
  "explain": "我国北方冬季重污染主因：散煤燃烧（家庭取暖）→大量SO₂、烟尘、PM2.5。 \"煤改电\"（电热+空气源热泵）\"煤改气\"（天然气）→显著改善北方冬季空气质量（京津冀PM2.5浓度下降40%以上）。选 B。",
  "tag": "清洁供暖"
 },
 {
  "id": "geo_q437_11011",
  "manualId": "geo_m11",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于我国生态安全屏障建设，下列说法正确的是",
  "answer": "ABCD",
  "options": [
   "A. 三北防护林（阻止风沙南侵）",
   "B. 长江中上游防护林（保护长江生态）",
   "C. 青藏高原生态屏障（水塔保护）",
   "D. 沿海防护林（防海啸风暴潮）"
  ],
  "explain": "我国五大生态安全屏障：①青藏高原；②黄土高原—川滇；③东北森林；④北方沙漠化防治；⑤南方丘陵山地。 三北防护林（1978年启动，中国最大生态工程）+ 长江防护林 + 沿海防护林 + 太行山防护林 + 平原农田防护林——组成中国生态骨架。选 ABCD。",
  "tag": "生态安全屏障"
 },
 {
  "id": "geo_q437_11012",
  "manualId": "geo_m11",
  "type": "judge",
  "difficulty": "normal",
  "q": "联合国17项可持续发展目标（SDGs）涉及消除贫困、优质教育、清洁能源、气候行动等多方面。",
  "answer": "对",
  "explain": "2015年联合国193国签署《2030议程》，提出17项可持续发展目标（SDGs）：无贫困、零饥饿、良好健康、优质教育、性别平等、清洁饮水、清洁能源、体面工作、产业创新、减少不平等、可持续城市、负责任消费、气候行动、水下生物、陆地生物、和平正义、伙伴关系。我国全面对接推进。",
  "tag": "SDGs"
 },
 {
  "id": "geo_q437_11101",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "easy",
  "q": "我国四大地理区域划分是",
  "answer": "A",
  "options": [
   "A. 北方、南方、西北、青藏",
   "B. 东、南、西、北",
   "C. 东部、中部、西部、东北",
   "D. 沿海、内陆、边疆、山区"
  ],
  "explain": "我国四大地理区域（依据自然与人文综合特征）：①北方地区（秦岭-淮河以北的东部）；②南方地区（秦岭-淮河以南的东部）；③西北地区（400mm等降水线以西以北）；④青藏地区（青藏高原）。 三大经济地带：东、中、西部+东北（新划分）。选 A。",
  "tag": "四大地理区"
 },
 {
  "id": "geo_q437_11102",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "秦岭-淮河一线是我国重要地理界线，下列不属于该线两侧差异的是",
  "answer": "D",
  "options": [
   "A. 一月均温0℃（北冷南暖）",
   "B. 800mm年降水量线（北少南多）",
   "C. 亚热带与暖温带",
   "D. 内蒙古高原和黄土高原界线"
  ],
  "explain": "秦岭-淮河线（33°N附近）分界意义：①暖温带/亚热带界；②1月0℃等温线；③800mm等降水线；④湿润区/半湿润区；⑤水田/旱田；⑥河流结冰与否；⑦稻/麦；⑧亚热带常绿林/温带落叶林。 内蒙古高原与黄土高原界为古长城/贺兰山。D 错。选 D。",
  "tag": "秦岭淮河"
 },
 {
  "id": "geo_q437_11103",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2021·山东）我国东部沿海经济带发展迅速的主要区位优势是",
  "answer": "D",
  "options": [
   "A. 自然资源丰富",
   "B. 平原广阔、地形平坦",
   "C. 气候温和湿润",
   "D. 沿海位置+交通便利+经济基础+改革开放政策+对外贸易+人才和资金"
  ],
  "explain": "东部沿海优势综合：①位置（沿海开放）；②交通（港口、高速、高铁）；③经济基础（原有工商业底子）；④政策（经济特区、开放城市）；⑤对外贸易；⑥人才和资金聚集；⑦市场辐射。这些是东部快速发展的关键。选 D。",
  "tag": "东部沿海优势"
 },
 {
  "id": "geo_q437_11104",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "\"西部大开发\"战略（1999年提出）的重点是",
  "answer": "C",
  "options": [
   "A. 大规模移民",
   "B. 完全依靠东部支援",
   "C. 加强基础设施建设、发展特色优势产业、生态保护、公共服务",
   "D. 只发展农业"
  ],
  "explain": "西部大开发战略：①基础设施（西气东输、西电东送、青藏铁路、公路网）；②特色优势产业（能源、矿产、旅游、特色农业）；③生态建设（退耕还林还草）；④社会事业（教育、卫生）；⑤开放合作（一带一路重要通道）。 20多年来西部GDP占全国比重稳步提高。选 C。",
  "tag": "西部大开发"
 },
 {
  "id": "geo_q437_11105",
  "manualId": "geo_m12",
  "type": "multi",
  "difficulty": "hard",
  "q": "关于长江经济带（我国横贯东西的重要经济地带）说法正确的是",
  "answer": "ABCD",
  "options": [
   "A. 涵盖上海、江苏、浙江、安徽、江西、湖北、湖南、重庆、四川、云南、贵州11省市",
   "B. 是\"生态优先、绿色发展\"的示范带",
   "C. 有长江\"黄金水道\"支撑",
   "D. 上海、武汉、重庆是三大龙头城市"
  ],
  "explain": "长江经济带（2014年国家战略）：11省市、约205万km²、人口5.9亿、GDP占全国46%。 定位：\"共抓大保护、不搞大开发\"，\"生态优先、绿色发展\"。 上下游联动：下游上海、南京、苏州；中游武汉、长沙、南昌；上游重庆、成都、贵阳。选 ABCD。",
  "tag": "长江经济带"
 },
 {
  "id": "geo_q437_11106",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2020·全国乙）我国京津冀协同发展的核心是",
  "answer": "B",
  "options": [
   "A. 三地各自为政",
   "B. 疏解北京非首都功能，优化区域功能布局，实现协同发展",
   "C. 完全并成一个省",
   "D. 只发展北京"
  ],
  "explain": "京津冀协同发展（2014）：①有序疏解北京非首都功能（设雄安新区）；②交通一体化（京津冀城际、机场群）；③生态环境协同治理（大气、水源）；④产业协同（北京-研发/首都、天津-制造/港口、河北-配套/资源）。 与长三角、粤港澳大湾区并列为国家三大区域战略。选 B。",
  "tag": "京津冀协同"
 },
 {
  "id": "geo_q437_11107",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "粤港澳大湾区包括",
  "answer": "B",
  "options": [
   "A. 只有广东省",
   "B. 香港+澳门+广东9市（广州/深圳/珠海/佛山/惠州/东莞/中山/江门/肇庆）",
   "C. 只有深圳、香港",
   "D. 广东全省+湖南"
  ],
  "explain": "粤港澳大湾区：\"9+2\"模式——广东9市+香港+澳门。面积5.6万km²、人口约7000万、GDP占全国11%。定位\"建设世界级城市群、国际科技创新中心、一带一路支撑\"。 是我国最重要的对外开放门户与创新引擎之一。选 B。",
  "tag": "粤港澳大湾区"
 },
 {
  "id": "geo_q437_11108",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "hard",
  "q": "我国经济重心大致南移的原因主要有",
  "answer": "D",
  "options": [
   "A. 气候温暖",
   "B. 交通便利",
   "C. 政策扶持",
   "D. 自然条件+改革开放+经济基础+沿海位置+港口贸易综合作用"
  ],
  "explain": "我国经济重心南移（唐宋以来 → 改革开放后加速）原因：①气候适宜、水资源足；②沿海优势、对外开放；③珠三角/长三角地理位置；④政策（经济特区、自贸区）；⑤港口贸易；⑥制造业转移；⑦金融、科技中心南移。 长三角+珠三角+海西+海南=中国经济半壁江山。选 D。",
  "tag": "经济重心南移"
 },
 {
  "id": "geo_q437_11109",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "我国青藏地区突出的自然特征是",
  "answer": "A",
  "options": [
   "A. 高、寒",
   "B. 干、旱",
   "C. 湿、热",
   "D. 平坦"
  ],
  "explain": "青藏地区两大特征：①高（平均海拔4000m以上，世界屋脊）；②寒（气温低、辐射强、冻土发育）。人口稀少（藏族为主）、农业以河谷农业（青稞）为主、畜牧业以牦牛为主。 干旱不是青藏主特征（虽有部分干旱）——更突出的是\"高寒\"。选 A。",
  "tag": "青藏特征"
 },
 {
  "id": "geo_q437_11110",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·福建）福建省经济发展的主要有利条件包括",
  "answer": "D",
  "options": [
   "A. 沿海位置、海洋资源丰富",
   "B. 侨乡（大量港澳同胞海外华侨支持）",
   "C. 交通改善（高铁+港口）",
   "D. 以上都是"
  ],
  "explain": "福建（我们莆田所在省）区位优势：①沿海（对台+海丝重要节点）；②侨乡（约1580万海外华侨，改革开放重要资金来源）；③交通（京福高铁、福厦高铁、平潭海峡通道）；④对台合作平台（平潭综合实验区）；⑤海洋经济发达（渔业、港口）；⑥自然环境好；⑦制造业+服务业+旅游发达。 莆田作为其中一员共享这些优势。选 D。",
  "tag": "福建优势"
 },
 {
  "id": "geo_q437_11111",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "我国东北地区（黑吉辽）传统工业以何为主",
  "answer": "A",
  "options": [
   "A. 重工业（钢铁、机械、石化、汽车）",
   "B. 电子信息",
   "C. 服装轻工业",
   "D. 旅游业"
  ],
  "explain": "东北老工业基地：①煤炭（抚顺、鸡西、鹤岗）；②石油（大庆油田、辽河油田）；③钢铁（鞍山、本溪）；④机械（沈阳、哈尔滨、长春）；⑤化工（吉林）；⑥汽车（长春一汽）。 计划经济时期\"共和国长子\"。目前正在振兴转型。选 A。",
  "tag": "东北工业"
 },
 {
  "id": "geo_q437_11112",
  "manualId": "geo_m12",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2021·湖北·多选）我国东北老工业基地衰落的原因有",
  "answer": "ABCD",
  "options": [
   "A. 计划经济体制惯性",
   "B. 产业结构单一，转型慢",
   "C. 资源枯竭（煤、木材）",
   "D. 人口老龄化+外流"
  ],
  "explain": "东北衰落综合原因：①体制机制不活（计划体制包袱）；②产业结构单一（重工业为主）；③资源枯竭型城市多（阜新、大庆、伊春）；④人口外流+老龄化严重；⑤气候寒冷环境不利吸引外资；⑥近邻俄罗斯、朝鲜相对不发达。 国家推动\"东北振兴\"，成效逐步显现。选 ABCD。",
  "tag": "东北衰落"
 },
 {
  "id": "geo_q437_11113",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "关于我国海南省，下列说法正确的是",
  "answer": "C",
  "options": [
   "A. 温带气候",
   "B. 主要经济为重工业",
   "C. 热带气候，以旅游、热带农业、海洋经济为主，是自由贸易港",
   "D. 无国际航运功能"
  ],
  "explain": "海南省：①我国唯一热带岛屿省份，热带季风气候；②旅游经济（三亚）；③热带农业（橡胶、椰子、菠萝、荔枝）；④海洋经济；⑤2018年起建设中国特色自由贸易港（免税、离岛免税）。选 C。",
  "tag": "海南自贸港"
 },
 {
  "id": "geo_q437_11114",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "hard",
  "q": "我国推行\"乡村振兴\"战略，其主要目标不包括",
  "answer": "D",
  "options": [
   "A. 产业兴旺",
   "B. 生态宜居、乡风文明",
   "C. 治理有效、生活富裕",
   "D. 把所有农村人口迁往城市"
  ],
  "explain": "\"乡村振兴\"总要求（20字方针）：产业兴旺、生态宜居、乡风文明、治理有效、生活富裕。 是解决\"三农问题\"的根本举措，反对\"一刀切\"，主张分类推进（村庄集聚、特色发展、搬迁撤并等）。 城镇化与乡村振兴并行，不是消灭乡村。选 D。",
  "tag": "乡村振兴"
 },
 {
  "id": "geo_q437_11115",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "世界最大发达经济体（按GDP）是",
  "answer": "A",
  "options": [
   "A. 美国",
   "B. 中国（发展中）",
   "C. 日本",
   "D. 德国"
  ],
  "explain": "2023年GDP排名（万亿美元）：美国26.9（发达）、中国17.9（发展中最大经济体）、日本4.4（发达）、德国4.3（发达）、印度3.7。 美国是最大发达经济体，中国是最大发展中经济体。选 A。",
  "tag": "世界经济"
 },
 {
  "id": "geo_q437_11116",
  "manualId": "geo_m12",
  "type": "judge",
  "difficulty": "normal",
  "q": "区域发展存在阶段性：初期以资源开发为主；成长期以工业化和城市化为主；转型期以创新驱动、产业升级为主；衰退期需转型或再生。",
  "answer": "对",
  "explain": "区域发展的四大阶段：①初期开发阶段（资源+区位）；②成长期（工业化、城市化快速）；③转型期（原产业受限、需升级）；④衰退/再生（老工业区改造）。我国东北曾进入衰退，正通过振兴努力再生。发达国家老工业区（鲁尔、五大湖）已完成再生。",
  "tag": "区域发展阶段"
 },
 {
  "id": "geo_q437p2_10301",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·新高考Ⅰ卷）某地夏季常出现\"日高夜低\"的气温特点，其原因主要是",
  "options": [
   "A. 白天太阳辐射强，夜晚地面辐射弱",
   "B. 白天云量少，夜晚云量多",
   "C. 白天云量多削弱太阳辐射，夜晚云量少地面辐射强",
   "D. 白天陆地升温快，夜晚海洋降温快"
  ],
  "answer": "A",
  "explain": "夏季日高夜低是正常昼夜温差。白天太阳辐射强，地面升温快气温高；夜晚太阳辐射为零，只有地面辐射向外散热，气温降低。选 A。C 是\"日低夜高\"（阴天）情况。",
  "tag": "昼夜温差·真题"
 },
 {
  "id": "geo_q437p2_10302",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·山东）晴朗夜晚，地面易出现霜冻，这是因为",
  "options": [
   "A. 大气逆辐射强",
   "B. 太阳辐射强",
   "C. 大气逆辐射弱，地面辐射强",
   "D. 云量多，保温效应强"
  ],
  "answer": "C",
  "explain": "晴朗夜晚→云量少→大气逆辐射弱→地面辐射的热量大量散失到外太空→地面气温骤降→水汽凝结成霜。这是\"晴夜多霜\"原理。故答案 C。反之阴夜保温性强，不易结霜。",
  "tag": "大气逆辐射·真题"
 },
 {
  "id": "geo_q437p2_10303",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "温室大棚保温效应的原理是",
  "options": [
   "A. 大棚玻璃阻挡太阳辐射进入",
   "B. 大棚玻璃能吸收大量热量",
   "C. 玻璃透过短波辐射，阻挡长波辐射",
   "D. 大棚内空气不流通"
  ],
  "answer": "C",
  "explain": "温室原理：\"透短挡长\"。玻璃对可见光（短波，太阳辐射主要波段）透明，能进入大棚；但对红外线（长波，地面辐射主要波段）不透明，将地面辐射的热量困在大棚内。这也是全球变暖的\"温室效应\"原理。选 C。",
  "tag": "温室原理"
 },
 {
  "id": "geo_q437p2_10304",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·湖南）关于热力环流说法正确的是",
  "options": [
   "A. 冷地方近地面形成低压",
   "B. 热地方高空形成高压",
   "C. 热地方近地面气压低，高空气压高",
   "D. 气流总是从低压流向高压"
  ],
  "answer": "C",
  "explain": "热力环流四要素：受热地面→空气膨胀上升→近地面气压降低（低压），空气上升到高空堆积→高空气压升高（高压）；冷却地面反之。故热地方近地面低压、高空高压。选 C。城市\"热岛效应\"就是典型：市区热→市区形成低压吸引郊区风。",
  "tag": "热力环流·真题"
 },
 {
  "id": "geo_q437p2_10305",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "海陆风中，白天风向为",
  "options": [
   "A. 陆→海（陆风）",
   "B. 海→陆（海风）",
   "C. 无风",
   "D. 因季节而异"
  ],
  "answer": "B",
  "explain": "海陆风是热力环流小尺度案例。白天：陆地升温快，气温高→近地面低压→风从海洋（冷/高压）吹向陆地（热/低压）=海风。夜晚：陆地降温快、海洋降温慢→陆地高压海洋低压→陆风。海风白天送凉、陆风夜晚干燥。选 B。",
  "tag": "海陆风"
 },
 {
  "id": "geo_q437p2_10306",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "城市热岛环流中，气流从郊区流向市区，主要是",
  "options": [
   "A. 高层空气",
   "B. 中层空气",
   "C. 近地面空气",
   "D. 各层都从郊区流向市区"
  ],
  "answer": "C",
  "explain": "城市热岛：市区气温高→市区近地面低压→近地面风从郊区（高压）→市区。高空则相反：市区高空高压→高空气流从市区→郊区。故只有近地面从郊区流向市区。选 C。因此工厂宜布局在城市盛行风的下风向，或热岛环流之外（避免污染物进城市）。",
  "tag": "热岛环流"
 },
 {
  "id": "geo_q437p2_10307",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖北）我国东部地区盛行东南季风的季节及其成因是",
  "options": [
   "A. 冬季，海洋高压吹向陆地",
   "B. 夏季，海洋高压吹向陆地",
   "C. 冬季，陆地高压吹向海洋",
   "D. 夏季，陆地高压吹向海洋"
  ],
  "answer": "B",
  "explain": "季风成因：海陆热力性质差异。夏季陆地升温快→陆地形成低压（如印度低压），海洋相对高压（如夏威夷高压）→风从海（东南）吹向陆（陆地），即东南季风。冬季陆地降温快→陆地形成高压（蒙古/西伯利亚高压），风从陆吹向海=西北季风。选 B。",
  "tag": "季风·真题"
 },
 {
  "id": "geo_q437p2_10308",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "副热带高气压带的形成原因是",
  "options": [
   "A. 冷空气下沉",
   "B. 热空气上升",
   "C. 空气动力堆积下沉",
   "D. 地形阻挡"
  ],
  "answer": "C",
  "explain": "副高（30°N/S 附近）不是热力原因（周围气温不低），而是动力原因：赤道低压上升的气流到高空 30° 处堆积下沉，形成近地面高压。这就是\"副热带高压带\"或\"回归高压带\"。故为动力型高压。选 C。",
  "tag": "气压带"
 },
 {
  "id": "geo_q437p2_10309",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·广东）地中海气候的成因是",
  "options": [
   "A. 夏季受副热带高压控制干热，冬季受西风带影响温和多雨",
   "B. 全年副热带高压控制",
   "C. 全年西风带控制",
   "D. 夏季东南季风冬季西北季风"
  ],
  "answer": "A",
  "explain": "地中海气候（南北纬 30-40°大陆西岸）特征：夏干热冬温湿。成因：夏季副热带高压带北移控制此纬度→高压下沉气流→干热；冬季副高南移，西风带北移控制→西风来自海洋→温和多雨。选 A。典型地区：地中海沿岸、加州、智利中部、澳西南、非西南。",
  "tag": "地中海气候·真题"
 },
 {
  "id": "geo_q437p2_10310",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "温带海洋性气候分布在",
  "options": [
   "A. 南北纬 30°~40° 大陆西岸",
   "B. 南北纬 40°~60° 大陆西岸",
   "C. 南北纬 40°~60° 大陆东岸",
   "D. 赤道附近"
  ],
  "answer": "B",
  "explain": "温带海洋性气候（如西欧）：南北纬 40°~60° 大陆西岸。特征：全年温和湿润（受终年盛行西风影响，西风来自海洋）。选 B。典型：英国、法国西部、加拿大西部、智利南部、新西兰。",
  "tag": "温带海洋性"
 },
 {
  "id": "geo_q437p2_10311",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·福建）\"焚风效应\"发生在山脉的",
  "options": [
   "A. 迎风坡",
   "B. 背风坡",
   "C. 山顶",
   "D. 山谷"
  ],
  "answer": "B",
  "explain": "焚风效应：湿气流爬升迎风坡时先按湿绝热率降温（0.6°C/100m），凝结降水；越过山顶后在背风坡按干绝热率增温（1°C/100m）。故背风坡气温反而比同高度迎风坡更高、更干燥。选 B。典型案例：阿尔卑斯山北坡焚风、青藏高原东南边缘焚风、我国太行山东坡焚风。",
  "tag": "焚风效应·真题"
 },
 {
  "id": "geo_q437p2_10312",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "厄尔尼诺现象对我国的影响可能包括",
  "options": [
   "A. 南方洪涝北方干旱",
   "B. 台风数量增多",
   "C. 冬季偏冷",
   "D. 使我国全年降水异常增加"
  ],
  "answer": "A",
  "explain": "厄尔尼诺：赤道太平洋东部海水异常升温。对我国：①冬季偏暖（暖冬）；②南方多雨易涝，北方干旱；③东南沿海台风数量偏少（因西太平洋副高强度减弱不利于台风生成）。选 A。",
  "tag": "厄尔尼诺"
 },
 {
  "id": "geo_q437p2_10313",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "关于气旋（低压）的说法正确的是",
  "options": [
   "A. 中心气流下沉，天气晴朗",
   "B. 中心气流上升，多阴雨天气",
   "C. 北半球气流按顺时针辐合",
   "D. 中心为高压"
  ],
  "answer": "B",
  "explain": "气旋=低压。低压中心气流上升，水汽凝结成云致雨（多阴雨天气）。北半球气旋气流逆时针辐合（受地转偏向力右偏），南半球顺时针。反气旋=高压：中心下沉，晴朗。选 B。台风、温带气旋都属气旋。",
  "tag": "气旋反气旋"
 },
 {
  "id": "geo_q437p2_10314",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·河北）冷锋过境时通常出现",
  "options": [
   "A. 阴雨绵绵、连续性降水",
   "B. 大风、气温骤降、短时降水",
   "C. 晴朗高温",
   "D. 无风无雨"
  ],
  "answer": "B",
  "explain": "冷锋：冷气团主动推动暖气团，暖气团被迫抬升。特点：坡度陡、移动快、锋前锋后天气差异大。锋后（冷气团一侧）：大风、气温骤降、短时强降水（对流性天气），过境后转晴气温降低气压升高。暖锋反之：坡度缓，连续性降水。选 B。",
  "tag": "冷锋天气·真题"
 },
 {
  "id": "geo_q437p2_10315",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "q": "我国夏季长江中下游地区的\"梅雨\"属于",
  "options": [
   "A. 冷锋",
   "B. 暖锋",
   "C. 准静止锋",
   "D. 台风"
  ],
  "answer": "C",
  "explain": "6 月中下旬起，冷暖气团势均力敌在长江中下游对峙形成江淮准静止锋（梅雨锋），持续 20 多天的连续性降水，因适逢梅子成熟叫\"梅雨\"。7 月中旬后暖气团势力增强，锋面北推，长江地区进入伏旱。选 C。",
  "tag": "梅雨"
 },
 {
  "id": "geo_q437p2_10316",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "我国东部季风区雨带推移规律：",
  "options": [
   "A. 5 月华南；6 月长江；7-8 月华北东北；9 月退回南方",
   "B. 全年均匀分布",
   "C. 冬季华北，夏季华南",
   "D. 与季节无关"
  ],
  "answer": "A",
  "explain": "我国夏季雨带随夏季风推移：5 月华南前汛期；6 月长江梅雨；7-8 月华北东北盛夏雨；9 月冷空气南下、雨带退回南方。若夏季风偏强\"南旱北涝\"；夏季风偏弱\"南涝北旱\"。选 A。",
  "tag": "雨带推移"
 },
 {
  "id": "geo_q437p2_10317",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖南）某地全年温和湿润，最冷月均温 4-5°C，最热月均温 15-16°C，年降水量均匀分布，该地气候类型是",
  "options": [
   "A. 温带海洋性气候",
   "B. 地中海气候",
   "C. 亚热带季风气候",
   "D. 温带季风气候"
  ],
  "answer": "A",
  "explain": "温带海洋性：最冷月>0°C 且<10°C（温和不冷），最热月<22°C（温和不热），年降水量 700-1000 mm 均匀分布。地中海：最热月热且干、最冷月温湿。选 A。",
  "tag": "气候判读·真题"
 },
 {
  "id": "geo_q437p2_10318",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "关于全球变暖影响，说法错误的是",
  "options": [
   "A. 海平面上升，低海拔地区被淹",
   "B. 中纬度冰川融化",
   "C. 中低纬地区粮食产量普遍增加",
   "D. 极端天气事件增多"
  ],
  "answer": "C",
  "explain": "全球变暖对农业影响复杂：高纬地区可能受益（生长期延长），中低纬（尤其干旱区）反而减产（蒸发加剧、干旱加重、病虫害增加）。故 C 错。全球粮食安全整体面临下行压力。选 C。",
  "tag": "全球变暖影响"
 },
 {
  "id": "geo_q437p2_10319",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "气温垂直递减率约为",
  "options": [
   "A. 6°C/km",
   "B. 6°C/100m",
   "C. 0.6°C/km",
   "D. 100°C/km"
  ],
  "answer": "A",
  "explain": "对流层气温垂直递减率约 6°C/km（或 0.6°C/100m）。即每升高 1 km，气温平均下降 6°C。这是山地垂直分异的成因（如高山雪线、垂直带谱）。选 A。",
  "tag": "气温递减率"
 },
 {
  "id": "geo_q437p2_10320",
  "manualId": "geo_m3",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·山东）近年来\"极端寒潮\"事件频发，与之相关的说法正确的是",
  "options": [
   "A. 全球变暖使北极涛动异常",
   "B. 北极冷空气\"泄漏\"到中纬度",
   "C. 冬季变暖使寒潮更加不易预报",
   "D. 与气候变化无关"
  ],
  "answer": "ABC",
  "explain": "全球变暖背景下极端天气反而增多。北极升温更快（\"北极放大效应\"）→北极涛动异常→极涡不稳定→冷空气泄漏到中纬度→暴发式寒潮。这是\"暖背景下的极端冷事件\"。故 A、B、C 均对，D 错。选 ABC。",
  "tag": "极端寒潮·真题"
 },
 {
  "id": "geo_q437p2_10321",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "热带雨林气候的特点是",
  "options": [
   "A. 全年高温多雨",
   "B. 全年温和多雨",
   "C. 夏热冬冷夏雨冬干",
   "D. 全年高温分干湿两季"
  ],
  "answer": "A",
  "explain": "热带雨林（赤道两侧 10°N-10°S）：终年高温（月均温>25°C）多雨（年降水>2000 mm，全年均匀）。C 是亚热带季风。D 是热带草原（有明显干湿季）。选 A。",
  "tag": "热带雨林"
 },
 {
  "id": "geo_q437p2_10322",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "q": "热带草原气候形成的原因是",
  "options": [
   "A. 终年赤道低压控制",
   "B. 终年信风带控制",
   "C. 赤道低压与信风带交替控制（夏湿冬干）",
   "D. 副高与西风交替"
  ],
  "answer": "C",
  "explain": "热带草原（10-20°N/S）：夏半年赤道低压北移控制→湿季；冬半年信风带控制→干季。故降水集中在夏半年，形成\"雨季/旱季\"分明的稀树草原景观（如非洲塞伦盖蒂）。选 C。",
  "tag": "热带草原成因"
 },
 {
  "id": "geo_q437p2_10323",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "亚热带季风气候与地中海气候的最主要区别是",
  "options": [
   "A. 夏季降水情况",
   "B. 冬季温度",
   "C. 分布纬度",
   "D. 都在大陆东西岸位置"
  ],
  "answer": "A",
  "explain": "两者同处 30-40° 纬度，冬季温度都温和，但雨季不同：亚热带季风（大陆东岸）夏雨冬干（东南季风影响）；地中海（大陆西岸）冬雨夏干（副高/西风交替）。故 A 是主要区别。选 A。",
  "tag": "气候对比"
 },
 {
  "id": "geo_q437p2_10324",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "normal",
  "q": "福建省属于哪种气候类型",
  "options": [
   "A. 亚热带季风气候",
   "B. 温带季风气候",
   "C. 热带季风气候",
   "D. 温带大陆性气候"
  ],
  "answer": "A",
  "explain": "福建（含莆田）位于 25°N 左右，属亚热带季风气候：夏热冬温、夏雨冬相对少（相较冬干型气候福建冬季仍有雨）、7-9 月受台风影响明显。选 A。",
  "tag": "福建气候·本地"
 },
 {
  "id": "geo_q437p2_10325",
  "manualId": "geo_m3",
  "type": "single",
  "difficulty": "hard",
  "q": "副高对我国夏季雨带位置的影响是",
  "options": [
   "A. 副高位置偏北则雨带偏北（北涝南旱）",
   "B. 副高位置偏南则雨带偏北",
   "C. 副高位置与雨带无关",
   "D. 副高越强雨带越窄"
  ],
  "answer": "A",
  "explain": "我国夏季主雨带出现在副高北侧 5-8 纬度处（副高西侧偏南气流与北方冷空气交汇）。副高偏北→雨带偏北（华北多雨长江旱=北涝南旱），副高偏南→雨带偏南（长江多雨华北旱=南涝北旱）。故 A 对。1998 年长江洪灾就是副高偏南的结果。选 A。",
  "tag": "副高与雨带"
 },
 {
  "id": "geo_q437p2_10401",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "easy",
  "gaokao": true,
  "q": "（2022·湖南）水循环最重要的意义是",
  "options": [
   "A. 使全球淡水资源不断更新",
   "B. 使地表形态不断塑造",
   "C. 使各大洋水量保持平衡",
   "D. 以上都对"
  ],
  "answer": "D",
  "explain": "水循环三大意义：①更新和维持淡水资源，是可再生资源之基础；②不断塑造地表形态（流水侵蚀/搬运/沉积）；③调节全球水量、热量平衡（洋流、降水分配等）。选 D。",
  "tag": "水循环意义·真题"
 },
 {
  "id": "geo_q437p2_10402",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "水循环中，从海洋输送到陆地的主要环节是",
  "options": [
   "A. 蒸发",
   "B. 水汽输送",
   "C. 降水",
   "D. 径流"
  ],
  "answer": "B",
  "explain": "海陆间大循环：海洋蒸发→水汽输送到陆地→陆地降水→地表/地下径流→回到海洋。\"水汽输送\"是把海洋水搬运到陆地的关键环节，靠大气环流（如季风）完成。选 B。",
  "tag": "水循环环节"
 },
 {
  "id": "geo_q437p2_10403",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·湖北）城市化过程中，水循环的哪个环节变化最大",
  "options": [
   "A. 蒸发增强",
   "B. 水汽输送增强",
   "C. 地表径流增强，下渗减少",
   "D. 降水量增加"
  ],
  "answer": "C",
  "explain": "城市化影响水循环：\"三改变\"：地表硬化→下渗大减，地表径流暴涨→暴雨易积水（城市内涝根本原因）；混凝土/沥青→蒸发略减；热岛+污染 → 降水量可能略增。C 是最显著变化。海绵城市建设的原理就是恢复下渗。选 C。",
  "tag": "城市化影响水循环·真题"
 },
 {
  "id": "geo_q437p2_10404",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "外流河与内流河的根本区别是",
  "options": [
   "A. 河流长度",
   "B. 是否最终注入海洋",
   "C. 水质好坏",
   "D. 流量大小"
  ],
  "answer": "B",
  "explain": "外流河：最终注入海洋（长江、黄河、密西西比河等）。内流河：最终注入内陆湖或消失于沙漠（塔里木河、伏尔加河注入里海但里海是咸水湖属内流）。选 B。我国 90% 河川径流来自外流河。",
  "tag": "外流河内流河"
 },
 {
  "id": "geo_q437p2_10405",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·湖北）我国黄河下游断流的最主要人为原因是",
  "options": [
   "A. 蒸发加强",
   "B. 中上游过度用水（引黄灌溉）",
   "C. 全球变暖",
   "D. 森林砍伐"
  ],
  "answer": "B",
  "explain": "黄河下游断流（1972-1999 年常见，1997 年断流 226 天）根本原因：中上游宁夏、内蒙古、河南灌区大量引黄灌溉、工业与城市用水，加之流域降水减少。1999 年\"黄河水量统一调度\"后基本无断流。选 B。",
  "tag": "黄河断流·真题"
 },
 {
  "id": "geo_q437p2_10406",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "洋流按性质分类，属于寒流的是",
  "options": [
   "A. 日本暖流",
   "B. 秘鲁寒流",
   "C. 湾流",
   "D. 北大西洋暖流"
  ],
  "answer": "B",
  "explain": "寒流：由高纬度流向低纬度（水温比流经海区周围低）。秘鲁寒流（西风漂流向北分支沿南美西岸北上）、加利福尼亚寒流、加那利寒流、本格拉寒流、拉布拉多寒流、千岛（亲潮）寒流。选 B。",
  "tag": "洋流分类"
 },
 {
  "id": "geo_q437p2_10407",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·山东）秘鲁寒流对沿岸气候的影响是",
  "options": [
   "A. 降温减湿，形成热带雨林",
   "B. 降温减湿，形成热带沙漠",
   "C. 增温增湿",
   "D. 无影响"
  ],
  "answer": "B",
  "explain": "寒流\"降温减湿\"：秘鲁寒流沿南美洲西海岸北上，使赤道两侧本应形成的热带雨林变成了地球上最干燥的沙漠——阿塔卡马沙漠（这里是\"雨影\"和寒流共同作用）。类似还有：本格拉寒流→纳米布沙漠、加那利寒流→西撒哈拉沙漠、加州寒流→索诺兰沙漠。选 B。",
  "tag": "寒流影响·真题"
 },
 {
  "id": "geo_q437p2_10408",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "世界四大渔场（北海道、纽芬兰、北海、秘鲁）的成因中，前三个的共同点是",
  "options": [
   "A. 都是寒暖流交汇",
   "B. 都在暖流区",
   "C. 都在寒流区",
   "D. 都在信风带"
  ],
  "answer": "A",
  "explain": "北海道渔场：日本暖流与千岛寒流交汇；纽芬兰渔场：墨西哥湾暖流与拉布拉多寒流交汇；北海渔场：北大西洋暖流与东格陵兰寒流交汇。三者都是寒暖流交汇→上升流+营养物质丰富→浮游生物多→鱼类聚集。秘鲁渔场是上升补偿流（离岸风+寒流上升带来营养）。选 A。",
  "tag": "四大渔场"
 },
 {
  "id": "geo_q437p2_10409",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "洋流对地理环境的影响包括",
  "options": [
   "A. 影响气候",
   "B. 影响海洋生物",
   "C. 影响海洋航行",
   "D. 以上都对"
  ],
  "answer": "D",
  "explain": "洋流四大影响：①气候（暖流增温增湿，寒流降温减湿）；②海洋生物（寒暖流交汇/上升流→形成大渔场）；③航海（顺流航行省时省油）；④海洋污染（既扩散又稀释）。选 D。",
  "tag": "洋流影响"
 },
 {
  "id": "geo_q437p2_10410",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·广东）\"三角洲\"是河流入海的主要地貌，其形成需要满足的条件包括",
  "options": [
   "A. 河流含沙量大",
   "B. 入海口地势平缓",
   "C. 潮流作用弱",
   "D. 以上都需要"
  ],
  "answer": "D",
  "explain": "三角洲形成三条件：①河流含沙量大（如黄河 20 kg/m³，形成典型三角洲）；②入海口地势平缓（水流减速沉积）；③外海动力弱（潮汐、海浪弱，不能将沉积物冲走）。三者缺一不可。如长江三角洲、密西西比三角洲。选 D。",
  "tag": "三角洲成因·真题"
 },
 {
  "id": "geo_q437p2_10411",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "咸潮（河口海水倒灌）多发生在",
  "options": [
   "A. 汛期",
   "B. 枯水期",
   "C. 与季节无关",
   "D. 台风期"
  ],
  "answer": "B",
  "explain": "咸潮：枯水期河流入海流量减小，海水沿河道倒灌上溯，使河口区淡水变咸。珠江口、长江口冬春季（枯水期）常发。对沿岸供水影响巨大。选 B。",
  "tag": "咸潮"
 },
 {
  "id": "geo_q437p2_10412",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "q": "南水北调东线工程的主要目的是",
  "options": [
   "A. 缓解华北地区严重缺水",
   "B. 增加长江流量",
   "C. 开发内河运输",
   "D. 治理淮河污染"
  ],
  "answer": "A",
  "explain": "我国水资源\"南多北少、东多西少\"。华北平原（京津冀鲁豫）人均水资源不足全国 1/5，是我国最缺水地区。南水北调东线（沿京杭大运河北上）主要输水到山东、天津、河北。中线（丹江口→北京）2014 年通水。选 A。",
  "tag": "南水北调"
 },
 {
  "id": "geo_q437p2_10413",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "河流上游的水文特征通常是",
  "options": [
   "A. 流速快，含沙量大",
   "B. 流速快，含沙量小",
   "C. 流速慢，含沙量小",
   "D. 流速慢，含沙量大"
  ],
  "answer": "B",
  "explain": "上游：地势高、坡度陡→流速快；山区植被相对较好、多岩石→侵蚀强但泥沙进入水体的浓度不一定高，通常上游含沙量小；中游穿过黄土/平原区易带走大量泥沙（黄河中游含沙最大）；下游流速减慢，泥沙沉积。选 B。",
  "tag": "河流水文特征"
 },
 {
  "id": "geo_q437p2_10414",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·福建）某河流下游河床高于两岸地面，称为",
  "options": [
   "A. 冲积扇",
   "B. 三角洲",
   "C. 地上悬河",
   "D. 峡谷"
  ],
  "answer": "C",
  "explain": "地上河（悬河）：因河流含沙量大、下游流速减慢泥沙不断沉积，河床逐年抬高最终高于两岸地面，堤防越修越高。典型：黄河下游（河床比开封城高 13 m），长期存在决口风险。防治：中游水土保持+调水调沙。选 C。",
  "tag": "地上河·真题"
 },
 {
  "id": "geo_q437p2_10415",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "水库对下游河流的影响不包括",
  "options": [
   "A. 调蓄洪水，削减洪峰",
   "B. 增加下游泥沙",
   "C. 使下游流量变化减小",
   "D. 提供电力"
  ],
  "answer": "B",
  "explain": "水库拦沙→下游泥沙减少（如三峡建成后长江中下游河床反而侵蚀下切）。故 B 错（应\"减少\"泥沙）。水库四大效益：防洪、发电、灌溉、航运，同时调节径流使下游流量更平稳。选 B。",
  "tag": "水库影响"
 },
 {
  "id": "geo_q437p2_10416",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·湖南）某河流出山口处常形成的地貌是",
  "options": [
   "A. 三角洲",
   "B. 冲积扇",
   "C. 峡谷",
   "D. V 型谷"
  ],
  "answer": "B",
  "explain": "冲积扇：河流从山地流入平原时，坡度骤减→流速骤降→泥沙堆积形成扇状地貌。也叫\"山麓冲积扇\"，是山区河流出山口最典型地貌。多个冲积扇连接可成为\"冲积扇平原\"（如华北平原就有山前冲积扇平原）。选 B。",
  "tag": "冲积扇·真题"
 },
 {
  "id": "geo_q437p2_10417",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "我国东部季风区河流的水文特征通常是",
  "options": [
   "A. 流量小、汛期短",
   "B. 流量大、有明显汛期、含沙量因地区差异大",
   "C. 全年结冰",
   "D. 内流河多"
  ],
  "answer": "B",
  "explain": "东部季风区：降水集中夏秋→汛期夏秋；北方冬季结冰南方不结冰；黄河中游穿黄土高原含沙量大，长江清水河含沙量小。整体特征\"流量大、有汛期、含沙量差异明显\"。选 B。",
  "tag": "东部河流水文"
 },
 {
  "id": "geo_q437p2_10418",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "hard",
  "q": "西北内流河的补给来源主要是",
  "options": [
   "A. 大气降水",
   "B. 高山冰雪融水",
   "C. 地下水",
   "D. 湖泊水"
  ],
  "answer": "B",
  "explain": "西北内流区（塔里木河、伊犁河）：气候干旱降水少，主要靠天山、昆仑山、祁连山的高山冰雪融水。夏季气温高融水多→夏汛；冬季结冰断流。选 B。这种河流\"6-9 月汛期\"与外流河季风区季节一致但成因不同。",
  "tag": "西北内流河"
 },
 {
  "id": "geo_q437p2_10419",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "q": "关于地下水说法正确的是",
  "options": [
   "A. 上层滞水量最大",
   "B. 潜水位随季节变化",
   "C. 承压水面出露地表叫泉",
   "D. 地下水补给量主要来自海洋"
  ],
  "answer": "B",
  "explain": "A 错：上层滞水量小、水质差。B 对：潜水受大气降水补给，水位季节波动明显。C 错：泉是地下水（不限承压水）自然出露。D 错：地下水主要来源大气降水。选 B。",
  "tag": "地下水"
 },
 {
  "id": "geo_q437p2_10420",
  "manualId": "geo_m4",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·湖北）海绵城市建设的主要目的是",
  "options": [
   "A. 增加城市绿地",
   "B. 恢复水循环，缓解内涝并回收雨水",
   "C. 减少空气污染",
   "D. 提高地价"
  ],
  "answer": "B",
  "explain": "海绵城市：通过透水铺装、下凹绿地、雨水花园、生态屋顶等设施，使雨水\"渗、滞、蓄、净、用、排\"，恢复被城市硬化破坏的自然水循环，既缓解内涝又蓄水利用。选 B。北京、上海、厦门、福州、莆田都是海绵城市试点或推进城市。",
  "tag": "海绵城市·真题"
 },
 {
  "id": "geo_q437p2_10501",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "easy",
  "gaokao": true,
  "q": "（2022·全国乙）板块构造学说认为，全球共分为几大板块",
  "options": [
   "A. 4",
   "B. 5",
   "C. 6",
   "D. 7"
  ],
  "answer": "C",
  "explain": "全球分为 6 大板块：亚欧板块、非洲板块、印度洋板块、太平洋板块、美洲板块、南极洲板块。除太平洋板块几乎全为海洋外，其他板块都既有陆地又有海洋。板块交界处地壳活动强烈。选 C。",
  "tag": "板块构造·真题"
 },
 {
  "id": "geo_q437p2_10502",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·福建）喜马拉雅山脉的成因是",
  "options": [
   "A. 印度洋板块与亚欧板块碰撞挤压",
   "B. 火山喷发",
   "C. 地震断裂",
   "D. 冰川侵蚀"
  ],
  "answer": "A",
  "explain": "喜马拉雅山：印度洋板块与亚欧板块碰撞挤压隆起。印度板块以约 5 cm/年向北推挤，至今喜马拉雅仍在长高（每年 1-2 cm）。同类：阿尔卑斯（非-欧碰撞）、安第斯（南美-太平洋）。这些消亡边界形成年轻褶皱山脉。选 A。",
  "tag": "造山运动·真题"
 },
 {
  "id": "geo_q437p2_10503",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "东非大裂谷形成的原因是",
  "options": [
   "A. 板块碰撞",
   "B. 板块张裂",
   "C. 河流侵蚀",
   "D. 冰川刨蚀"
  ],
  "answer": "B",
  "explain": "东非大裂谷：非洲板块内部张裂（未来可能分裂出新板块）。板块张裂形成裂谷、海岭、海洋（如红海也是张裂形成，将来可能扩大成新的洋）。选 B。生长边界特征：地震多、火山多、有裂谷/海岭。",
  "tag": "东非裂谷"
 },
 {
  "id": "geo_q437p2_10504",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·广东）U 型谷（槽谷）是哪种外力作用形成的",
  "options": [
   "A. 河流侵蚀",
   "B. 冰川刨蚀",
   "C. 风力侵蚀",
   "D. 海浪侵蚀"
  ],
  "answer": "B",
  "explain": "冰川刨蚀形成 U 型谷（横截面宽底陡壁）；河流下切形成 V 型谷（尖底斜壁）。高山冰川区常见 U 型谷、角峰、刃脊、冰斗、冰碛物等冰川地貌。选 B。",
  "tag": "冰川地貌·真题"
 },
 {
  "id": "geo_q437p2_10505",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "黄土高原地表破碎、沟壑纵横的原因是",
  "options": [
   "A. 风力堆积形成",
   "B. 流水侵蚀严重",
   "C. 冰川侵蚀",
   "D. 板块运动"
  ],
  "answer": "B",
  "explain": "黄土高原：黄土最初由风力堆积形成（西北风将中亚戈壁沙漠的粉尘搬来），但形成之后由于夏季暴雨集中、植被破坏严重→流水侵蚀切割形成千沟万壑（\"塬、梁、峁\"地貌）。故 B 是\"沟壑纵横\"直接原因。选 B。治理关键：保土保水（打坝淤地、退耕还林、修梯田）。",
  "tag": "黄土高原地貌"
 },
 {
  "id": "geo_q437p2_10506",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "喀斯特地貌（岩溶地貌）的形成条件是",
  "options": [
   "A. 富含碳酸钙的可溶性岩石+丰富水源+暖湿气候",
   "B. 沙漠+大风",
   "C. 冰川+严寒",
   "D. 火山灰+高温"
  ],
  "answer": "A",
  "explain": "喀斯特地貌：由 CO₂ 溶于水生成 H₂CO₃ 溶蚀 CaCO₃：CaCO₃+CO₂+H₂O=Ca(HCO₃)₂（沉淀→溶解）。地表：石林、峰林、天坑；地下：溶洞、暗河、石钟乳。我国西南（云贵桂）最典型。选 A。桂林山水、贵州黄果树、云南石林都是。",
  "tag": "喀斯特地貌"
 },
 {
  "id": "geo_q437p2_10507",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖南）雅丹地貌的成因是",
  "options": [
   "A. 流水侵蚀",
   "B. 冰川侵蚀",
   "C. 风力侵蚀",
   "D. 地壳抬升"
  ],
  "answer": "C",
  "explain": "雅丹地貌：干旱区风蚀作用形成的垄脊沟槽相间的地貌，土丘与凹地平行排列。典型：柴达木盆地雅丹、新疆罗布泊雅丹群、敦煌雅丹。特点：无水无生命、极干燥、大风盛行。选 C。",
  "tag": "雅丹地貌·真题"
 },
 {
  "id": "geo_q437p2_10508",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "沙丘的形态可指示当地",
  "options": [
   "A. 主导风向",
   "B. 温度",
   "C. 降水量",
   "D. 海拔"
  ],
  "answer": "A",
  "explain": "新月形沙丘迎风坡缓、背风坡陡且陡坡指向下风方向。故沙丘可指示当地盛行风向。类似：黄土高原塬顶阶梯状分布也与风向有关。选 A。",
  "tag": "沙丘与风向"
 },
 {
  "id": "geo_q437p2_10509",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "海岸地貌中，海蚀崖、海蚀柱由什么作用形成",
  "options": [
   "A. 风力侵蚀",
   "B. 波浪冲蚀",
   "C. 冰川刨蚀",
   "D. 化学溶蚀"
  ],
  "answer": "B",
  "explain": "岩石海岸受海浪长期冲击→海蚀穴→海蚀洞→海蚀拱→海蚀柱（拱顶塌落遗留海中孤立岩柱）；崖壁称海蚀崖。这是海浪侵蚀的经典产物。选 B。福建平潭岛、山东威海都有典型海蚀地貌。",
  "tag": "海蚀地貌"
 },
 {
  "id": "geo_q437p2_10510",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·湖北）背斜谷、向斜山的形成原因是",
  "options": [
   "A. 岩石内力抗侵蚀差异",
   "B. 外力风化侵蚀作用",
   "C. 板块运动直接抬升",
   "D. 冰川刨蚀"
  ],
  "answer": "A",
  "explain": "背斜岩层向上拱起，顶部张裂→易被侵蚀→反而形成谷；向斜岩层下凹紧压→坚硬不易侵蚀→反而成山。这是\"地形倒置\"现象，是内外力共同作用结果。原理：内力形成背斜/向斜，外力（侵蚀）根据岩性差异重塑。选 A。",
  "tag": "地形倒置·真题"
 },
 {
  "id": "geo_q437p2_10511",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "岩层的三种类型（岩浆岩、沉积岩、变质岩）中，含化石的通常是",
  "options": [
   "A. 岩浆岩",
   "B. 沉积岩",
   "C. 变质岩",
   "D. 三种都含"
  ],
  "answer": "B",
  "explain": "沉积岩是层状结构（有层理），沉积过程中生物遗体埋藏其中形成化石，故化石只在沉积岩中。岩浆岩由岩浆冷却结晶而成（无生物）；变质岩即使原为沉积岩，变质高温高压过程中化石也已被破坏。选 B。",
  "tag": "岩石与化石"
 },
 {
  "id": "geo_q437p2_10512",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·山东）判读地质构造：某岩层\"中间新、两翼老\"的是",
  "options": [
   "A. 背斜",
   "B. 向斜",
   "C. 断层",
   "D. 褶皱"
  ],
  "answer": "B",
  "explain": "背斜：\"中间老、两翼新\"（岩层向上拱，中间是最先形成的老岩层）。向斜：\"中间新、两翼老\"（岩层向下凹，中间是最晚沉积的新岩层）。这是判断背斜/向斜最可靠方法（比地表形态更准确，因为有地形倒置）。选 B。",
  "tag": "背斜向斜判读·真题"
 },
 {
  "id": "geo_q437p2_10513",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "找石油、天然气应勘探",
  "options": [
   "A. 背斜",
   "B. 向斜",
   "C. 断层",
   "D. 岩浆岩"
  ],
  "answer": "A",
  "explain": "背斜有\"储油构造\"的作用：石油天然气密度小，向上聚集在背斜顶部，下方是水。故石油勘探首选背斜。向斜是良好储水构造（水下渗到向斜底部）。断层附近岩石破碎易漏，不能储油。选 A。",
  "tag": "构造与资源"
 },
 {
  "id": "geo_q437p2_10514",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "关于地震说法正确的是",
  "options": [
   "A. 地震仅由板块运动引起",
   "B. 震级越大破坏越强",
   "C. 震级与烈度是同一概念",
   "D. 我国地震带主要分布在东部平原"
  ],
  "answer": "B",
  "explain": "A 错：地震有构造地震（板块）、火山地震、陷落地震、人工地震。B 对（一般来说，但同震级下地震深度、震中距、地质条件影响烈度）。C 错：震级 M 是能量大小（一次地震一个震级），烈度 I 是破坏程度（各地不同）。D 错：我国地震带主要在西部（青藏、新疆）与台湾、东南沿海（郯庐带、龙门山带）。选 B。",
  "tag": "地震"
 },
 {
  "id": "geo_q437p2_10515",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "hard",
  "q": "莆田市所在的东南沿海地区，主要地貌类型是",
  "options": [
   "A. 冲积平原",
   "B. 丘陵山地为主兼有沿海平原",
   "C. 高原",
   "D. 沙漠"
  ],
  "answer": "B",
  "explain": "福建省地形以丘陵山地为主，\"八山一水一分田\"。莆田市地处东南沿海，木兰溪冲积平原（兴化平原）位于沿海，是本省主要农业区，山地丘陵则占大部分。选 B。",
  "tag": "福建地貌·本地"
 },
 {
  "id": "geo_q437p2_10516",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·福建）关于泥石流说法正确的是",
  "options": [
   "A. 主要发生在平原地区",
   "B. 山区暴雨或冰雪融水引发",
   "C. 冬季多发",
   "D. 与人类活动无关"
  ],
  "answer": "B",
  "explain": "泥石流三条件：陡坡（山区/丘陵）、松散物质（风化碎屑）、突发强水源（暴雨/融水）。夏秋多发。人类活动（乱砍滥伐、开矿、道路施工）显著诱发泥石流。选 B。",
  "tag": "泥石流·真题"
 },
 {
  "id": "geo_q437p2_10517",
  "manualId": "geo_m5",
  "type": "single",
  "difficulty": "normal",
  "q": "关于滑坡说法正确的是",
  "options": [
   "A. 山体沿破坏面整体下滑",
   "B. 由地震仅引发",
   "C. 只发生在干燥地区",
   "D. 是永久性地貌"
  ],
  "answer": "A",
  "explain": "滑坡：斜坡上大量岩土体在重力作用下沿滑动面整体下滑。诱发因素：暴雨（土体饱和）、地震（震动）、人为切坡（打破稳定）等。选 A。",
  "tag": "滑坡"
 },
 {
  "id": "geo_q437p2_10518",
  "manualId": "geo_m5",
  "type": "multi",
  "difficulty": "hard",
  "q": "我国西南地区（云贵川）地质灾害多发的原因",
  "options": [
   "A. 地处板块交界，地震多发",
   "B. 山高谷深，地形起伏大",
   "C. 降水集中且强度大",
   "D. 人类活动破坏植被"
  ],
  "answer": "ABCD",
  "explain": "西南是我国最严重的地质灾害集中区：\"四位一体\"：①板块碰撞带（印度-亚欧），地震频发；②横断山脉，地形险峻；③亚热带季风气候，暴雨集中；④人类活动强度大，植被破坏。故泥石流、滑坡、崩塌、地震频发。全对。",
  "tag": "西南地质灾害"
 },
 {
  "id": "geo_q437p2_10801",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "easy",
  "gaokao": true,
  "q": "（2023·湖北）影响农业区位的主导因素属于自然因素的是",
  "options": [
   "A. 市场",
   "B. 交通",
   "C. 气候",
   "D. 政策"
  ],
  "answer": "C",
  "explain": "农业区位因素分自然因素（气候、地形、土壤、水源）与社会经济因素（市场、交通、政策、劳动力、科技）。气候（光热水）是最基本自然条件，决定作物种类与耕作制度。选 C。",
  "tag": "农业区位·真题"
 },
 {
  "id": "geo_q437p2_10802",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "东北平原发展商品谷物农业的最大优势是",
  "options": [
   "A. 热量充足",
   "B. 地广人稀+机械化程度高",
   "C. 全年多雨",
   "D. 靠海便利运输"
  ],
  "answer": "B",
  "explain": "东北平原：黑土肥沃、地形平坦、地广人稀（人均耕地全国最多）→大规模机械化→我国最大商品粮基地（占全国 20% 以上）。劣势：热量不足（一年一熟）。选 B。",
  "tag": "东北农业"
 },
 {
  "id": "geo_q437p2_10803",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·山东）荷兰花卉生产享誉世界，其发展的主导因素是",
  "options": [
   "A. 气候适宜",
   "B. 便利的海运和发达的市场",
   "C. 政策支持",
   "D. 廉价劳动力"
  ],
  "answer": "B",
  "explain": "荷兰花卉三优势：①温带海洋性气候温和适宜种植；②发达的欧盟市场、鹿特丹港便利海运（可当天到全球主要城市）；③政府长期支持。B 是主导（市场和交通），使其成为世界花卉出口第一大国。选 B。",
  "tag": "荷兰花卉·真题"
 },
 {
  "id": "geo_q437p2_10804",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "关于水稻种植业说法正确的是",
  "options": [
   "A. 主要分布在温带",
   "B. 需要充足灌溉水源",
   "C. 机械化程度普遍高",
   "D. 单产低商品率高"
  ],
  "answer": "B",
  "explain": "水稻性喜高温高湿，主要分布在亚洲季风区（东亚、东南亚、南亚），特点：\"三高一低一小一大\"：单产高、劳动强度高、水利工程量大；商品率低（自给自足）；机械化水平低；地块小。选 B。",
  "tag": "水稻种植"
 },
 {
  "id": "geo_q437p2_10805",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·广东）以色列发展农业面临的主要问题是",
  "options": [
   "A. 光热不足",
   "B. 水资源匮乏",
   "C. 土地面积过大",
   "D. 劳动力短缺"
  ],
  "answer": "B",
  "explain": "以色列位于地中海东岸，气候炎热干燥（夏干），水资源极度匮乏（人均年水资源仅 250 m³，是我国 1/8）。以色列通过滴灌、海水淡化、废水回收成为节水农业典范，人均出口农产品世界第一。选 B。",
  "tag": "以色列农业·真题"
 },
 {
  "id": "geo_q437p2_10806",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "混合农业（如澳大利亚墨累-达令盆地）的特点是",
  "options": [
   "A. 单一作物",
   "B. 良性生态循环、经济效益高、市场适应性强",
   "C. 商品率低",
   "D. 抵御灾害能力差"
  ],
  "answer": "B",
  "explain": "混合农业：种植业+畜牧业（如澳大利亚\"小麦-牧羊带\"）。优势：①良性生态循环（畜牧粪便还田、作物副产品作饲料）；②经济效益高（多元化）；③市场适应性强（哪种产品价高就侧重哪种）；④抵御灾害能力强。选 B。",
  "tag": "混合农业"
 },
 {
  "id": "geo_q437p2_10807",
  "manualId": "geo_m8",
  "type": "multi",
  "difficulty": "hard",
  "q": "城市郊区适宜发展的农业类型有",
  "options": [
   "A. 乳畜业",
   "B. 花卉",
   "C. 蔬菜",
   "D. 大规模粮食生产"
  ],
  "answer": "ABC",
  "explain": "城市郊区特点：市场大、地价高、交通便利→发展高附加值、易腐烂的鲜活产品：乳肉禽蛋、花卉、蔬菜、水果。粮食单价低占地大不适合近郊。选 ABC。这就是\"农业区位的市场因素\"决定的空间分异（杜能圈）。",
  "tag": "城郊农业"
 },
 {
  "id": "geo_q437p2_10808",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·福建）关于工业区位说法正确的是",
  "options": [
   "A. 原料指向型：接近原料产地（如甘蔗制糖）",
   "B. 市场指向型：接近原料",
   "C. 动力指向型：接近市场",
   "D. 劳动力指向型：接近电源"
  ],
  "answer": "A",
  "explain": "五种工业指向：①原料指向（易变质原料，如水产加工/甘蔗制糖）；②市场指向（成品笨重或易变质，如家具/瓶装啤酒/日用品）；③动力指向（耗电大，如炼铝厂/化工厂靠水电站）；④劳动力指向（劳动密集，如服装/电子装配靠廉价劳动力）；⑤技术指向（高新技术，靠科研机构/大学）。选 A。",
  "tag": "工业区位·真题"
 },
 {
  "id": "geo_q437p2_10809",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "鞍钢（辽宁鞍山）属于哪种工业区位类型",
  "options": [
   "A. 市场指向",
   "B. 原料指向（靠近铁矿和煤炭）",
   "C. 动力指向",
   "D. 技术指向"
  ],
  "answer": "B",
  "explain": "鞍钢：靠近本溪铁矿和抚顺煤炭，原料+燃料指向，是传统\"煤铁复合体\"钢铁工业布局。类似有：德国鲁尔区（煤）、美国匹兹堡（煤铁）。现代钢铁工业则更多趋向沿海（进口原料）如宝钢、日照钢厂。选 B。",
  "tag": "钢铁工业布局"
 },
 {
  "id": "geo_q437p2_10810",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·湖南）美国硅谷、印度班加罗尔属于哪类工业区",
  "options": [
   "A. 传统工业区",
   "B. 新兴技术工业区",
   "C. 资源型工业区",
   "D. 港口工业区"
  ],
  "answer": "B",
  "explain": "高新技术工业区特点：接近高校科研机构、环境优美、交通便利、政策优惠、聚集效应强。典型：美国硅谷（斯坦福）、班加罗尔、剑桥、慕尼黑、中关村、深圳南山。选 B。",
  "tag": "高新技术区·真题"
 },
 {
  "id": "geo_q437p2_10811",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "德国鲁尔区衰落的主要原因",
  "options": [
   "A. 煤炭资源枯竭",
   "B. 生产结构单一+新技术革命冲击+环境污染",
   "C. 全球市场缩小",
   "D. 劳动力短缺"
  ],
  "answer": "B",
  "explain": "鲁尔区（欧洲最大传统工业区）衰落原因：\"四单一+一冲击+一污染\"：①生产结构单一（依赖煤钢）；②煤炭能源地位下降；③钢铁市场竞争激烈；④新技术革命冲击；⑤环境污染严重。治理措施：调整产业结构（发展第三产业和高技术）、治理污染、发展新兴产业。选 B。",
  "tag": "鲁尔区衰落"
 },
 {
  "id": "geo_q437p2_10812",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖南）我国长三角、珠三角地区吸引外资和承接产业转移的优势有",
  "options": [
   "A. 廉价劳动力",
   "B. 优越的地理位置+便利交通+完善基础设施+政策",
   "C. 丰富的资源",
   "D. 优越的气候"
  ],
  "answer": "B",
  "explain": "长三角/珠三角综合区位优势：①地理位置优（沿海开放前沿）；②交通便利（港口、机场、铁路）；③基础设施完善（水电通信）；④政策优惠（经济特区、开放城市）；⑤市场大、人才多、产业配套齐全。综合竞争力是外资首选地。选 B。",
  "tag": "开放地区区位·真题"
 },
 {
  "id": "geo_q437p2_10813",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "我国东部产业向中西部转移的主要原因",
  "options": [
   "A. 东部劳动力短缺",
   "B. 东部工资地价上升+中西部政策+资源",
   "C. 中西部气候优越",
   "D. 出口不再重要"
  ],
  "answer": "B",
  "explain": "东部转移到中西部因素：①东部工资上涨、地价上升、环境标准严格→成本增加；②中西部劳动力廉价、资源丰富（煤铝等）、市场潜力大、政策支持；③\"一带一路\"\"西部大开发\"战略引导。典型：富士康从深圳到郑州、成都；纺织服装从广东到江西、河南。选 B。",
  "tag": "产业转移"
 },
 {
  "id": "geo_q437p2_10814",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "产业转移对转出地区的影响",
  "options": [
   "A. 有利于产业升级和优化生态",
   "B. 完全不利",
   "C. 会导致大规模失业",
   "D. 没有影响"
  ],
  "answer": "A",
  "explain": "产业转移对转出地区：\"两面性\"：不利（部分产业萎缩、短期就业下降）；有利（腾出土地和资源发展高附加值产业、改善生态环境、加速产业升级）。总体上，通过转出低端产业+发展高端产业实现质变。选 A。",
  "tag": "产业转移影响"
 },
 {
  "id": "geo_q437p2_10815",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·福建）福建鞋服业发展的优势有",
  "options": [
   "A. 靠近港口，出口便利+侨乡资金+劳动力+产业集群",
   "B. 资源丰富",
   "C. 内陆位置",
   "D. 气候寒冷"
  ],
  "answer": "A",
  "explain": "福建晋江、莆田、石狮鞋服业闻名全国。优势：①东南沿海、多良港，出口便利；②侨乡资金雄厚（华侨投资）；③本地劳动力多；④配套完善（面料、辅料、物流、批发市场）→产业集群效应显著。莆田鞋业更是全国乃至全球重要生产基地。选 A。",
  "tag": "福建鞋服·本地·真题"
 },
 {
  "id": "geo_q437p2_10816",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "关于劳动密集型产业说法正确的是",
  "options": [
   "A. 通常靠近原料产地",
   "B. 对劳动力数量和成本敏感",
   "C. 集中在山区",
   "D. 技术要求高"
  ],
  "answer": "B",
  "explain": "劳动密集型（服装、玩具、简单电子装配）：技术含量低、劳动力用量大，对工资水平极敏感→易发生跨国跨地区转移。全球看：欧美→日本→四小龙→中国东部→中国中西部/东南亚。这是\"雁行模式\"或\"梯度转移\"。选 B。",
  "tag": "劳动密集"
 },
 {
  "id": "geo_q437p2_10817",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "hard",
  "q": "工业集聚（集群化）的好处不包括",
  "options": [
   "A. 节约运输成本",
   "B. 加强协作",
   "C. 完全消除污染",
   "D. 共享基础设施"
  ],
  "answer": "C",
  "explain": "工业集聚（集群化）三大好处：①节约运输成本（上下游企业间近距离）；②加强协作与创新扩散；③共享基础设施与公共服务（水电通信仓储）。但集聚会导致污染集中、地价上涨、拥挤等问题，不能\"消除\"污染。选 C。",
  "tag": "工业集聚"
 },
 {
  "id": "geo_q437p2_10818",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "城市工业布局的合理原则包括",
  "options": [
   "A. 严重污染的工业布局在市区",
   "B. 污染工业布局在主导风向下风向+河流下游+远离水源地",
   "C. 所有工业都往郊区",
   "D. 不需考虑风向"
  ],
  "answer": "B",
  "explain": "工业污染布局原则：\"三下\"：主导风向下风向或与主导风向垂直的郊外；河流下游（避免污染水源）；远离水源地和居民区。轻污染可近郊，重污染必须远离城市。福建盛行东南季风与西北季风交替，工业往东北或西南方向布局较合适。选 B。",
  "tag": "工业布局原则"
 },
 {
  "id": "geo_q437p2_10819",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·广东）近年来我国\"东数西算\"工程的地理意义是",
  "options": [
   "A. 利用西部丰富的清洁能源+冷凉气候，降低数据中心运行成本",
   "B. 减少东部电力消耗",
   "C. 加速西部工业化",
   "D. 以上都对"
  ],
  "answer": "D",
  "explain": "\"东数西算\"（2022 启动）：将东部算力需求引入西部数据中心，西部利用①丰富清洁能源（水电风光电）；②冷凉干燥气候减少制冷成本；③土地地价便宜。既降低东部能耗压力、又带动西部数字经济发展。三方面全对。选 D。",
  "tag": "东数西算·真题"
 },
 {
  "id": "geo_q437p2_10820",
  "manualId": "geo_m8",
  "type": "single",
  "difficulty": "normal",
  "q": "\"世界工厂\"曾指中国东南沿海，但近年正向东南亚转移的原因",
  "options": [
   "A. 中国劳动力成本上升",
   "B. 中国正进行产业升级",
   "C. 东南亚各国工资更低",
   "D. 以上都对"
  ],
  "answer": "D",
  "explain": "东南亚（越南、缅甸、印尼等）承接部分转移的原因：\"三低一优\"：工资更低（越南平均月薪 1/3-1/2 中国）、地价低、环保门槛低、优惠政策；同时中国从\"世界工厂\"向\"技术+品牌+市场\"升级，主动放出低端产业。选 D。",
  "tag": "产业转移趋势"
 },
 {
  "id": "geo_q437p2_11201",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·湖南）西部大开发战略实施后，中西部地区的显著变化是",
  "options": [
   "A. GDP 与东部持平",
   "B. 交通条件改善明显、产业结构升级、生态改善",
   "C. 人口大量流失",
   "D. 环境更加恶化"
  ],
  "answer": "B",
  "explain": "西部大开发（1999-）成效：\"五个明显\"：①基础设施改善（高铁公路机场）；②产业结构升级（发展绿色产业、清洁能源）；③生态明显改善（退耕还林、三北防护林）；④公共服务改善（教育医疗覆盖）；⑤脱贫攻坚成功。但仍与东部有差距。选 B。",
  "tag": "西部大开发·真题"
 },
 {
  "id": "geo_q437p2_11202",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "\"一带一路\"倡议中，\"丝绸之路经济带\"的方向是",
  "options": [
   "A. 沿海向东",
   "B. 从中国经中亚、西亚、欧洲向西",
   "C. 从中国向南",
   "D. 从中国向北"
  ],
  "answer": "B",
  "explain": "\"一带一路\"：①丝绸之路经济带（陆上）：中国→中亚→西亚→欧洲，横跨欧亚大陆；②21 世纪海上丝绸之路：中国东南沿海→东南亚→南亚→非洲→欧洲。两条主线合起来\"陆海联通\"。选 B。",
  "tag": "一带一路"
 },
 {
  "id": "geo_q437p2_11203",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2022·全国乙）我国东北老工业基地振兴面临的主要挑战是",
  "options": [
   "A. 气候变冷",
   "B. 产业结构单一、体制机制不活、人才外流",
   "C. 资源枯竭",
   "D. 交通不便"
  ],
  "answer": "B",
  "explain": "东北振兴挑战：\"三老\"：①老工业结构（重工业占比高，装备制造业竞争力下降）；②老国企体制（活力不足）；③老工人（人才外流严重，东三省人口负增长）。振兴关键：产业升级+体制改革+吸引人才。选 B。",
  "tag": "东北振兴·真题"
 },
 {
  "id": "geo_q437p2_11204",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "京津冀协同发展战略的核心是",
  "options": [
   "A. 加强首都行政功能",
   "B. 有序疏解北京非首都功能+区域协同",
   "C. 让北京不断扩张",
   "D. 只发展河北"
  ],
  "answer": "B",
  "explain": "京津冀战略（2014-）：以疏解北京非首都功能为\"牛鼻子\"，把批发市场、部分行政机构、教育医疗资源迁到津冀（如雄安新区承接）；带动区域基础设施、生态、产业协同升级。选 B。",
  "tag": "京津冀"
 },
 {
  "id": "geo_q437p2_11205",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "gaokao": true,
  "q": "（2023·福建）粤港澳大湾区建设中，福建可以从中获得的机遇有",
  "options": [
   "A. 承接粤港澳产业外溢",
   "B. 加强与港澳金融/物流合作",
   "C. 提升海峡西岸经济区地位",
   "D. 以上都对"
  ],
  "answer": "D",
  "explain": "粤港澳大湾区（2019-）建设对福建（毗邻广东、面向台湾海峡）：①承接部分产业外溢；②加强与港澳合作（金融、物流、旅游）；③\"海峡西岸经济区\"地位得到进一步提升；④与厦门、平潭综合实验区形成区域联动。全对。选 D。",
  "tag": "粤港澳与福建·本地·真题"
 },
 {
  "id": "geo_q437p2_11206",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "长江经济带的发展战略是",
  "options": [
   "A. 大规模开发能源",
   "B. 生态优先、绿色发展",
   "C. 全面工业化",
   "D. 只发展下游"
  ],
  "answer": "B",
  "explain": "长江经济带战略（2016-）：\"共抓大保护、不搞大开发\"，坚持\"生态优先、绿色发展\"，即在保护长江生态环境（水质、湿地、生物多样性）的前提下，实现流域上中下游协同发展。禁止在长江干流沿岸建设新化工厂等重污染项目。选 B。",
  "tag": "长江经济带"
 },
 {
  "id": "geo_q437p2_11207",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "福建省\"闽东北+闽西南\"协同发展格局的意义",
  "options": [
   "A. 突出福州+厦门两大中心城市带动作用",
   "B. 平衡区域发展",
   "C. 促进产业分工协作",
   "D. 以上都对"
  ],
  "answer": "D",
  "explain": "福建省\"两大协同发展区\"：\"闽东北协同区\"（福州、莆田、宁德、南平、平潭）以福州为中心；\"闽西南协同区\"（厦门、漳州、泉州、龙岩、三明）以厦门为中心。目标：突出两大中心带动、平衡区域、产业分工协作。莆田作为闽东北协同区成员，可承接福州溢出并发挥自身沿海优势。全对。选 D。",
  "tag": "福建协同发展·本地"
 },
 {
  "id": "geo_q437p2_11208",
  "manualId": "geo_m12",
  "type": "multi",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2022·山东）资源型城市转型可采取的措施有",
  "options": [
   "A. 延长产业链，提高附加值",
   "B. 发展多元产业，减少单一依赖",
   "C. 加强生态修复",
   "D. 吸引人才和技术"
  ],
  "answer": "ABCD",
  "explain": "资源型城市（大同煤炭、大庆石油、玉门石油等）转型四条路径：\"四化一优\"：①产业链延伸化（不只挖煤还发电还化工）；②产业多元化（发展装备、旅游、服务业）；③生态修复（塌陷区治理）；④吸引人才技术。玉门、克拉玛依、齐齐哈尔都是转型成功案例。全对。",
  "tag": "资源型城市转型·真题"
 },
 {
  "id": "geo_q437p2_11209",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "区域发展的一般过程是",
  "options": [
   "A. 起步→成长→转型→再生（一直上升）",
   "B. 一次性发展",
   "C. 只在初期发展",
   "D. 与阶段无关"
  ],
  "answer": "A",
  "explain": "区域发展四阶段：\"以传统农业为主体—工业化—高效益综合发展—衰落或转型\"。转型成功可\"再生\"进入新一轮发展。传统工业区如鲁尔区、辽中南都经历了完整周期。选 A。",
  "tag": "区域发展阶段"
 },
 {
  "id": "geo_q437p2_11210",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "\"胡焕庸线\"（黑河—腾冲线）以东以西的经济地理差异，最主要的自然基础是",
  "options": [
   "A. 地形与气候的分异",
   "B. 政治因素",
   "C. 民族分布",
   "D. 文化差异"
  ],
  "answer": "A",
  "explain": "胡焕庸线（1935 年提出）：黑河—腾冲连线，将中国分东部（36% 面积）与西部（64% 面积），东部集中约 94% 人口。核心原因：地形（东部平原丘陵为主，西部高原山地）+ 气候（东部季风区湿润，西部干旱高寒）→ 决定了人口容量与经济活动强度的巨大分异。近百年来这条线基本稳定，说明自然基础作用之大。选 A。",
  "tag": "胡焕庸线"
 },
 {
  "id": "geo_q437p2_11211",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "hard",
  "gaokao": true,
  "q": "（2023·湖北）关于乡村振兴战略说法正确的是",
  "options": [
   "A. 只关注农业产量",
   "B. 产业兴旺+生态宜居+乡风文明+治理有效+生活富裕（五位一体）",
   "C. 让农村向城市看齐",
   "D. 减少农村人口"
  ],
  "answer": "B",
  "explain": "乡村振兴战略（2018-）\"五位一体\"总要求：①产业兴旺；②生态宜居；③乡风文明；④治理有效；⑤生活富裕。核心是\"农业农村现代化\"，实现城乡融合、共同富裕。选 B。",
  "tag": "乡村振兴·真题"
 },
 {
  "id": "geo_q437p2_11212",
  "manualId": "geo_m12",
  "type": "single",
  "difficulty": "normal",
  "q": "莆田市所处的沿海地区，未来经济发展方向应重点",
  "options": [
   "A. 依托港口发展临港工业",
   "B. 发展海洋渔业和滨海旅游",
   "C. 承接产业转移升级鞋服业",
   "D. 以上都对"
  ],
  "answer": "D",
  "explain": "莆田经济发展方向（结合沿海+区位）：①依托湄洲湾深水良港发展临港工业（石化、船舶）；②海洋渔业（南日岛渔业）和滨海旅游（湄洲岛妈祖朝圣地）；③承接产业转移、升级传统鞋服业到品牌化+跨境电商化；④打造闽东北协同区中重要节点。全对。选 D。",
  "tag": "莆田发展·本地"
 }
];
  global.GEOGRAPHY_BANK = GEOGRAPHY_BANK;
  global.GEOGRAPHY_BANK_REAL = GEOGRAPHY_BANK;
  console.log('[geography·v4.3.7] 题库加载完成，题数：', GEOGRAPHY_BANK.length);
})(typeof window !== 'undefined' ? window : this);
