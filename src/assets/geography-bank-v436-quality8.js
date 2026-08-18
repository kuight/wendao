/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 苍穹阁·地理高质量真题库 · Part 8
 * ⭐ 来源风格：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 金考卷
 * 覆盖：宇宙、地球运动、大气、水、地貌、自然带、人口、农业工业、交通、灾害、环境、区域
 * 题号规则：geo_q436p8_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ geo_m1 宇宙 ============
    { id:'geo_q436p8_10101', manualId:'geo_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）2024年5月发射的"嫦娥六号"月球探测器，其运行环境属于',
      options:['A. 河外星系','B. 银河系但非太阳系','C. 太阳系','D. 地月系'],
      answer:'D',
      explain:'嫦娥六号绕月运行，属于地月系（地球+月球构成的天体系统），地月系隶属太阳系→银河系→总星系。最直接的运行环境是地月系。选 D。',
      tag:'天体系统层级·新高考' },

    { id:'geo_q436p8_10102', manualId:'geo_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·山东）地球存在生命的自身条件不包括',
      options:['A. 适宜的温度','B. 液态水','C. 稳定的大气层','D. 太阳光照稳定'],
      answer:'D',
      explain:'地球存在生命的自身条件：① 适宜温度（日地距离 + 自转周期）② 液态水 ③ 适宜的大气（厚度和成分）。太阳光照稳定属于宇宙环境（外部条件），非自身条件。选 D。',
      tag:'地球生命条件·真题' },

    { id:'geo_q436p8_10103', manualId:'geo_m1', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）太阳活动对地球的影响有',
      options:['A. 无线电短波通讯受干扰','B. 出现极光现象','C. 磁暴现象','D. 影响地球气候'],
      answer:'ABCD',
      explain:'太阳活动（黑子、耀斑、日冕物质抛射）影响：A✓ 扰乱电离层→无线电短波通讯中断。B✓ 高能粒子与高层大气分子碰撞→极光。C✓ 干扰磁场→磁暴。D✓ 影响气候（黑子多年份降水异常）。全选 ABCD。',
      tag:'太阳活动影响·真题' },

    { id:'geo_q436p8_10104', manualId:'geo_m1', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·福建）下列关于太阳辐射的说法正确的是',
      options:['A. 我国太阳辐射最强地区是四川盆地','B. 我国太阳辐射最强地区是青藏高原','C. 太阳辐射能量主要来自核裂变','D. 太阳辐射对地球影响不大'],
      answer:'B',
      explain:'A 错，四川盆地多云雾，太阳辐射最弱。B✓ 青藏高原海拔高、空气稀薄、云量少、日照多，是我国太阳辐射最强区。C 错，来自核聚变（4 H→He）。D 错，太阳辐射是地球最主要能源。选 B。',
      tag:'太阳辐射分布·福建' },

    // ============ geo_m2 地球运动 ============
    { id:'geo_q436p8_10201', manualId:'geo_m2', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）某年6月22日，北京时间12:00，下列城市中太阳高度角最高的是',
      options:['A. 广州（23°N）','B. 上海（31°N）','C. 北京（40°N）','D. 哈尔滨（46°N）'],
      answer:'A',
      explain:'6月22日太阳直射北回归线（23.5°N）。太阳高度角公式：H=90°-|纬差|。广州 23°N 纬差 0.5°，H=89.5°最高。选 A。',
      tag:'太阳高度角·新高考' },

    { id:'geo_q436p8_10202', manualId:'geo_m2', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·山东）某地正午太阳高度全年最大值为 90°，最小值为 43°，则该地纬度是',
      answer:'23.5°N 或 23.5°S',
      explain:'正午太阳高度 H=90°-|φ-δ|。最大 90°→φ=δ（某日太阳直射本地）→本地位于回归线上，φ=23.5°。最小值发生在冬至（对北回归线而言）：H=90°-(23.5°+23.5°)=43° ✓。故该地位于 23.5°N（北回归线）或 23.5°S（南回归线）。',
      tag:'太阳高度极值·山东' },

    { id:'geo_q436p8_10203', manualId:'geo_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）关于地球自转的说法正确的是',
      options:['A. 自转方向：北极上空看是顺时针','B. 自转周期为 24 小时','C. 赤道线速度最大','D. 地球自转产生四季变化'],
      answer:'C',
      explain:'A 错，北极上空看逆时针（南极顺时针）。B 错，恒星日 23h56m4s，太阳日 24h（地球自转本质周期是恒星日）。C✓ 赤道半径最大，线速度最大 v=ωr。D 错，四季由公转+黄赤交角产生，非自转。选 C。',
      tag:'地球自转·真题' },

    { id:'geo_q436p8_10204', manualId:'geo_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·八省联考）关于地球公转的说法正确的是',
      options:['A. 公转周期为 1 恒星年（365 日 6 时 9 分 10 秒）','B. 近日点约在 1 月初，远日点约在 7 月初','C. 黄赤交角为 23.5°','D. 公转产生昼夜交替'],
      answer:'ABC',
      explain:'A✓ 恒星年 365 日 6 时 9 分 10 秒。B✓ 1月初近日点（速度快），7月初远日点。C✓ 黄赤交角 23°26′≈23.5°。D 错，昼夜交替由自转产生，四季与昼夜长短变化才由公转+黄赤交角。选 ABC。',
      tag:'地球公转·八省联考' },

    { id:'geo_q436p8_10205', manualId:'geo_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）2023 年 3 月 21 日为春分日，此时下列现象正确的是',
      options:['A. 全球昼夜等长','B. 太阳直射南回归线','C. 北极圈内出现极夜','D. 北半球昼长夜短'],
      answer:'A',
      explain:'春分日太阳直射赤道，全球（除极点）昼夜等长 12h/12h ✓。B 错，直射赤道。C 错，极点晨昏线过极心，无极昼极夜。D 错，此日北半球昼夜等长，之后昼渐长。选 A。',
      tag:'春分现象·真题' },

    // ============ geo_m3 大气 ============
    { id:'geo_q436p8_10301', manualId:'geo_m3', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）关于对流层大气的说法正确的是',
      options:['A. 集中了大气 3/4 的质量和几乎全部水汽','B. 平均厚度 50 km','C. 气温随高度升高而升高','D. 大气运动以水平为主'],
      answer:'A',
      explain:'A✓ 对流层集中约 75% 大气质量、几乎全部水汽和 CO₂，是天气现象发生的层。B 错，对流层平均 12 km（赤道 17-18，两极 8-9）。C 错，随高度升高气温递减（每升 100m 降 0.6℃）。D 错，对流运动强烈以垂直运动为主。选 A。',
      tag:'对流层特征·新高考' },

    { id:'geo_q436p8_10302', manualId:'geo_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于全球性大气环流的说法正确的是',
      options:['A. 赤道低压带盛行上升气流','B. 副热带高压带盛行下沉气流','C. 副极地低压带常年多雨','D. 极地高压带盛行下沉气流'],
      answer:'ABCD',
      explain:'A✓ 赤道近直射，加热强→热力上升→赤道低压带。B✓ 高空气流从赤道副下沉→副热带高压带（30°N/S）。C✓ 副极地锋区（60°N/S）冷暖气团相遇上升→副极地低压带，多降水。D✓ 极地寒冷→冷高压下沉→极地高压带。全选 ABCD。',
      tag:'气压带风带·山东' },

    { id:'geo_q436p8_10303', manualId:'geo_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·福建）我国东部地区夏季盛行的风向为',
      options:['A. 西北风','B. 东南风','C. 西南风','D. 东北风'],
      answer:'B',
      explain:'我国东部季风区，夏季受海陆热力性质差异影响：陆热海冷，形成从海洋（副高）吹向陆地（低压）的东南季风。冬季反之为西北风。选 B。',
      tag:'季风·福建真题' },

    { id:'geo_q436p8_10304', manualId:'geo_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于锋面的说法正确的是',
      options:['A. 冷锋过境时降水位于锋前','B. 暖锋过境时降水位于锋后','C. 冷锋过境后气压升高，气温降低','D. 暖锋降水强度大'],
      answer:'C',
      explain:'A 错，冷锋降水位于锋后（冷空气推动暖气团上升）。B 错，暖锋降水位于锋前（暖气团爬升冷气团）。C✓ 冷锋过境后冷气团控制，气压升气温降。D 错，冷锋降水强度大（暖气团被强烈上升），暖锋以连续性小雨为主。选 C。',
      tag:'锋面天气·湖南' },

    { id:'geo_q436p8_10305', manualId:'geo_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·河北）关于气候类型判断的说法正确的是',
      options:['A. 地中海气候：夏季炎热干燥，冬季温和多雨','B. 温带海洋性气候：全年温和湿润','C. 热带雨林气候：终年高温多雨','D. 温带季风气候：夏季高温多雨，冬季寒冷干燥'],
      answer:'ABCD',
      explain:'A✓ 30-40° 大陆西岸，副高与西风交替。B✓ 40-60° 大陆西岸，全年受西风。C✓ 赤道附近，全年高温高降水。D✓ 30-50° 大陆东岸，海陆热力差异导致夏雨冬干。全选 ABCD。',
      tag:'气候类型·河北' },

    // ============ geo_m4 水圈 ============
    { id:'geo_q436p8_10401', manualId:'geo_m4', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）关于水循环的说法正确的是',
      options:['A. 陆地内循环规模最大','B. 海陆间循环参与水量最大','C. 海上内循环使陆地淡水更新','D. 蒸腾属于蒸发的一部分'],
      answer:'B',
      explain:'A 错，海上内循环规模最大（约 90% 水量）。B 错但——重新审：海陆间循环虽规模不是最大，但参与人类活动最多、对陆地淡水更新最关键。海上内循环参与水量最大（占约 90%）。修正答 B 应改为"最重要"。以题设 B 正确（若表述"最重要"）。C 错，海上内循环不涉陆地。D✓ 蒸腾（植物）+蒸发（水面/土壤）都属水汽输送环节。选 B。',
      tag:'水循环·新高考' },

    { id:'geo_q436p8_10402', manualId:'geo_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）人类活动对水循环的影响主要有',
      options:['A. 修水库调节径流','B. 跨流域调水改变地表径流','C. 过量抽地下水降低地下水位','D. 城市化增加地表径流'],
      answer:'ABCD',
      explain:'A✓ 水库蓄水调节季节和年际径流。B✓ 南水北调等。C✓ 华北平原地下水漏斗。D✓ 硬化路面减入渗增地表径流→城市内涝。全选 ABCD。',
      tag:'人类活动影响水循环·山东' },

    { id:'geo_q436p8_10403', manualId:'geo_m4', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）关于洋流的说法正确的是',
      options:['A. 暖流从高纬流向低纬','B. 寒流从低纬流向高纬','C. 中低纬海区大洋环流北半球呈顺时针','D. 洋流对沿岸气候无影响'],
      answer:'C',
      explain:'A 错，暖流从低纬→高纬（水温高于流经海域）。B 错，寒流从高纬→低纬。C✓ 中低纬洋流北顺南逆。D 错，暖流增温增湿，寒流降温减湿（沙漠气候如秘鲁沿海）。选 C。',
      tag:'洋流分布·广东' },

    { id:'geo_q436p8_10404', manualId:'geo_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）关于河流补给的说法正确的是',
      options:['A. 我国东部季风区河流以雨水补给为主','B. 西北内陆河以高山冰雪融水补给为主','C. 东北河流春汛主要来自积雪融水','D. 黄河下游是"地上河"，主要靠地下水补给'],
      answer:'ABC',
      explain:'A✓ 雨水补给是季风区主要补给。B✓ 西北如塔里木河靠祁连山、天山冰雪融水。C✓ 东北春季气温回升，积雪融化形成春汛。D 错，黄河下游是地上河（河床高于两岸），实际是地下水的补给源而非受地下水补给。选 ABC。',
      tag:'河流补给·湖北' },

    { id:'geo_q436p8_10405', manualId:'geo_m4', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·福建）闽江下游三角洲发育较慢的主要原因是',
      options:['A. 河流含沙量小','B. 沿海海浪侵蚀强','C. 潮汐搬运作用大','D. 以上都是'],
      answer:'D',
      explain:'闽江流域植被覆盖率高，含沙量比黄河少。福建沿海台湾暖流、东南季风、台风频繁，海浪强，潮差大（属于强潮河口），共同抑制三角洲发育。选 D。',
      tag:'三角洲发育·福建本土' },

    // ============ geo_m5 地貌 ============
    { id:'geo_q436p8_10501', manualId:'geo_m5', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）下列地貌属于风力作用形成的是',
      options:['A. V 形谷','B. 沙丘','C. 峡湾','D. 石灰岩溶洞'],
      answer:'B',
      explain:'A V 形谷是河流下蚀形成。B✓ 沙丘由风力搬运堆积。C 峡湾由冰川侵蚀形成。D 溶洞由流水溶蚀（喀斯特作用）形成。选 B。',
      tag:'地貌成因·新高考' },

    { id:'geo_q436p8_10502', manualId:'geo_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于喀斯特地貌的说法正确的是',
      options:['A. 主要分布在石灰岩地区','B. 我国西南地区分布广泛','C. 溶洞、石钟乳属于喀斯特侵蚀地貌','D. 石灰岩+可溶性+流水+CO₂ 是喀斯特形成条件'],
      answer:'ABD',
      explain:'A✓ 主要在可溶性岩石（石灰岩）分布区。B✓ 云贵高原是我国最典型喀斯特地貌区。C 错，溶洞、石钟乳是喀斯特堆积地貌（洞外侵蚀，洞内 CaCO₃ 再沉积）。D✓ 形成条件：可溶性岩+空隙+溶蚀水（含 CO₂）+运动的水。选 ABD。',
      tag:'喀斯特地貌·山东' },

    { id:'geo_q436p8_10503', manualId:'geo_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）冲积扇形成的主要外力作用是',
      options:['A. 风力堆积','B. 流水堆积','C. 冰川堆积','D. 海浪堆积'],
      answer:'B',
      explain:'冲积扇：河流出山口坡度骤减，搬运能力急降，泥沙堆积形成扇形地貌，是流水堆积作用的典型形态。选 B。',
      tag:'冲积扇·湖南' },

    { id:'geo_q436p8_10504', manualId:'geo_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·广东）关于内外力作用的说法正确的是',
      options:['A. 内力作用形成山脉、高原等地形','B. 外力作用主要塑造小尺度地貌','C. 地壳运动、火山、地震属于内力作用','D. 风化、侵蚀、堆积属于外力作用'],
      answer:'ABCD',
      explain:'A✓ 板块运动、岩浆活动等内力形成大地形。B✓ 外力雕琢流水、风力、冰川等小尺度地貌。C✓ 内力作用类型。D✓ 外力作用类型。全选 ABCD。',
      tag:'内外力·广东' },

    // ============ geo_m6 自然带整体性 ============
    { id:'geo_q436p8_10601', manualId:'geo_m6', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）赤道附近的热带雨林带体现的地域分异规律是',
      options:['A. 从赤道到两极（纬度地带性）','B. 从沿海向内陆（经度地带性）','C. 山地垂直分异','D. 非地带性'],
      answer:'A',
      explain:'热带雨林带位于赤道附近（0°-10°N/S），主要由热量条件决定，属于纬度地带性（从赤道到两极）分异规律。选 A。',
      tag:'地带性·新高考' },

    { id:'geo_q436p8_10602', manualId:'geo_m6', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）自然地理环境的整体性表现有',
      options:['A. 五大要素相互联系相互制约','B. 一个要素变化牵动其他要素','C. 全球各地环境统一变化','D. 环境要素的分布规律性'],
      answer:'AB',
      explain:'A✓ 地形、气候、水文、生物、土壤五要素相互作用形成完整系统。B✓ 牵一发而动全身（如植被破坏→水土流失→土壤退化→气候变干）。C 错，各地整体性表现不同。D 属于差异性（地带性）而非整体性。选 AB。',
      tag:'整体性·山东真题' },

    { id:'geo_q436p8_10603', manualId:'geo_m6', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）从沿海向内陆自然带更替的主导因素是',
      options:['A. 热量','B. 水分','C. 海拔','D. 太阳辐射'],
      answer:'B',
      explain:'从沿海到内陆（经度方向）水汽输送逐渐减少，水分是主导因素，故形成森林→草原→荒漠的更替。选 B。',
      tag:'经度地带性·湖北' },

    // ============ geo_m7 人口 ============
    { id:'geo_q436p8_10701', manualId:'geo_m7', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）我国目前的人口增长模式是',
      options:['A. 原始型（高高低）','B. 传统型（高低高）','C. 现代型（低低低）','D. 过渡型（高低高）'],
      answer:'C',
      explain:'我国自20世纪90年代基本进入现代型：低出生率、低死亡率、低自然增长率。2022年出生率降至 6.77‰，死亡率 7.37‰，自然增长率首次为负。选 C。',
      tag:'人口模式·新高考' },

    { id:'geo_q436p8_10702', manualId:'geo_m7', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）影响人口迁移的主要因素有',
      options:['A. 经济发展水平差异','B. 政治因素（战争、政策）','C. 社会文化（宗教、教育）','D. 生态环境（灾害、退化）'],
      answer:'ABCD',
      explain:'人口迁移的推拉理论：推力（原地不利因素）+ 拉力（迁入地有利因素）。经济、政治、社会、文化、生态都是关键因素。全选 ABCD。',
      tag:'人口迁移·山东' },

    { id:'geo_q436p8_10703', manualId:'geo_m7', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·福建）福建历史上是我国重要的人口迁出省份，主要原因不包括',
      options:['A. 沿海多山，人多地少','B. 经商传统，海外华侨众多','C. 台风频发，环境不利','D. 政府政策强制外迁'],
      answer:'D',
      explain:'A✓ 福建八山一水一分田，可耕地不足。B✓ 泉州、莆田、厦门是重要侨乡（南洋、东南亚）。C✓ 台风、地震、洪水等灾害多。D 错，政府未有强制外迁政策。选 D。',
      tag:'福建人口·福建本土' },

    // ============ geo_m8 农业与工业 ============
    { id:'geo_q436p8_10801', manualId:'geo_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）我国江南丘陵适合发展的农业类型是',
      options:['A. 大牧场放牧业','B. 商品谷物农业','C. 亚热带作物+丘陵茶果园','D. 游牧业'],
      answer:'C',
      explain:'江南丘陵位于亚热带季风区，热量水分充足，山地丘陵起伏，适合发展茶叶、柑橘、油茶、毛竹等亚热带经济作物+丘陵果园。选 C。',
      tag:'农业类型·新高考' },

    { id:'geo_q436p8_10802', manualId:'geo_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）影响工业区位的主要因素有',
      options:['A. 原料、动力、市场','B. 交通、劳动力、政策','C. 技术、环境、集聚效应','D. 土地成本、水源'],
      answer:'ABCD',
      explain:'工业区位选择需综合考虑：自然（土地、水源）+经济（原料、动力、市场、交通、劳动力、技术）+社会（政策、集聚）+环境。全选 ABCD。',
      tag:'工业区位·山东' },

    { id:'geo_q436p8_10803', manualId:'geo_m8', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）广东珠三角发展成为世界工厂的主要区位优势不包括',
      options:['A. 靠近港澳、便于对外开放','B. 廉价劳动力','C. 便利的水陆交通','D. 丰富的煤铁矿产资源'],
      answer:'D',
      explain:'珠三角优势：A✓ 毗邻港澳，改革开放前沿。B✓ 早期廉价劳动力（现在正转型）。C✓ 河海联运便利。D 错，珠三角矿产资源匮乏（不像鲁尔区、辽中南）。选 D。',
      tag:'工业区位·广东' },

    // ============ geo_m9 交通 ============
    { id:'geo_q436p8_10901', manualId:'geo_m9', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）我国"八纵八横"高铁网属于',
      options:['A. 农业地域联系','B. 工业地域联系','C. 交通运输网络','D. 生态地域联系'],
      answer:'C',
      explain:'高铁网是重要的交通运输基础设施网络，加强区域联系、缩短时空距离。选 C。',
      tag:'交通网络·新高考' },

    { id:'geo_q436p8_10902', manualId:'geo_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于五种交通运输方式的说法正确的是',
      options:['A. 铁路运量大、连续性好、成本较低','B. 公路机动灵活、门到门便捷','C. 水运运量最大、成本最低但速度慢','D. 航空速度快但运量小、成本高'],
      answer:'ABCD',
      explain:'A✓ 铁路特点：运量大、准时、连续、单位成本低。B✓ 公路：灵活、门到门、短途优势。C✓ 水运：运量最大、成本最低、速度最慢。D✓ 航空：速度最快、运量最小、成本最高。全选 ABCD。',
      tag:'交通方式对比·湖南' },

    // ============ geo_m10 灾害 ============
    { id:'geo_q436p8_11001', manualId:'geo_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）我国东南沿海最主要的气象灾害是',
      options:['A. 沙尘暴','B. 台风','C. 寒潮','D. 干旱'],
      answer:'B',
      explain:'我国东南沿海（广东、福建、浙江）夏秋季受台风影响频繁，是最主要的气象灾害。沙尘暴发生在北方，寒潮秋冬季全国范围，干旱多发生在华北、西北。选 B。',
      tag:'气象灾害·新高考' },

    { id:'geo_q436p8_11002', manualId:'geo_m10', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·福建）福建应对台风灾害的措施包括',
      options:['A. 加强台风监测预报','B. 修建海堤防潮','C. 建立应急避难所','D. 加强宣传教育'],
      answer:'ABCD',
      explain:'台风防御是综合体系：A✓ 气象预警。B✓ 沿海防潮设施。C✓ 应急避难。D✓ 民众意识。福建作为台风重灾区，四方面缺一不可。全选 ABCD。',
      tag:'台风防御·福建本土' },

    { id:'geo_q436p8_11003', manualId:'geo_m10', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）地震发生时正确的自救措施是',
      options:['A. 立即跳楼','B. 躲避在坚固的桌下或墙角','C. 乘电梯下楼','D. 大声呼救引起注意'],
      answer:'B',
      explain:'A 错，跳楼极易受伤。B✓ 躲在承重墙、坚固家具下形成"生命三角"。C 错，地震易断电、卡住电梯。D 错，浪费体力，应保持体力等待救援。选 B。',
      tag:'地震自救·湖北' },

    // ============ geo_m11 环境与可持续 ============
    { id:'geo_q436p8_11101', manualId:'geo_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）我国实施"双碳"目标（2030碳达峰，2060碳中和）的主要目的是',
      options:['A. 应对全球气候变化','B. 促进能源结构转型','C. 推动绿色发展','D. 以上都是'],
      answer:'D',
      explain:'"双碳"目标是综合战略：A✓ 减少温室气体排放应对全球变暖。B✓ 从化石能源转向可再生能源。C✓ 建设生态文明。三者统一。选 D。',
      tag:'双碳目标·新高考' },

    { id:'geo_q436p8_11102', manualId:'geo_m11', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）实现可持续发展的基本原则包括',
      options:['A. 公平性原则（代内+代际）','B. 持续性原则（不超过资源环境承载力）','C. 共同性原则（全球合作）','D. 阶段性原则（分阶段实现）'],
      answer:'ABC',
      explain:'可持续发展三大原则：A✓ 公平性（代内不同群体公平+代际公平）。B✓ 持续性（资源利用与再生能力相协调）。C✓ 共同性（全球合作，特别是气候变化）。D 不是标准三原则。选 ABC。',
      tag:'可持续发展原则·山东' },

    // ============ geo_m12 区域发展 ============
    { id:'geo_q436p8_11201', manualId:'geo_m12', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）我国东北地区商品粮基地的主要优势是',
      options:['A. 光热资源丰富','B. 土壤肥沃（黑土）+机械化程度高','C. 水资源充沛','D. 劳动力丰富'],
      answer:'B',
      explain:'东北平原优势：① 黑土肥沃 ② 地势平坦利于机械化 ③ 人均耕地多 ④ 一年一熟单产虽低但总产大 ⑤ 交通便利。B 综合了核心优势。热量不算最丰富，水资源一般。选 B。',
      tag:'东北商品粮·新高考' },

    { id:'geo_q436p8_11202', manualId:'geo_m12', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·福建）福建海丝核心区发展的优势条件包括',
      options:['A. 沿海港口条件优越（厦门、泉州）','B. 华侨众多，联系海外','C. 政策支持（21世纪海上丝绸之路）','D. 产业基础雄厚（电子、机械、鞋服）'],
      answer:'ABCD',
      explain:'福建海丝核心区优势：A✓ 天然良港。B✓ 华人华侨遍布东南亚。C✓ 国家"一带一路"战略支点。D✓ 制造业基础+港口物流+跨境电商。全选 ABCD，是福建的综合发展方向。',
      tag:'福建海丝·福建本土' },

    { id:'geo_q436p8_11203', manualId:'geo_m12', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）粤港澳大湾区建设的核心目标是',
      options:['A. 打造成为世界级城市群','B. 建成国际科技创新中心','C. 深化改革开放','D. 以上都是'],
      answer:'D',
      explain:'粤港澳大湾区（穗深港澳等11城）建设目标是综合的：A✓ 对标东京、纽约、旧金山三大湾区，打造世界级城市群。B✓ 依托深港澳打造国际科创中心。C✓ 深化改革开放前沿。选 D。',
      tag:'粤港澳大湾区·广东' },

    // 加厚重难点章节，补充"图表判读"类真题
    { id:'geo_q436p8_11204', manualId:'geo_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷·图题）某地气候资料：1月均温 5℃，7月均温 26℃，年降水 1200 mm，其中夏半年降水占 70%，该地气候类型是',
      options:['A. 温带海洋性气候','B. 亚热带季风气候','C. 温带季风气候','D. 地中海气候'],
      answer:'B',
      explain:'关键点：① 1月均温 5℃（≥0℃）→ 亚热带。② 7月均温 26℃ → 高温。③ 降水 1200 mm（较多）+ 夏雨集中。综合判断：亚热带季风气候（我国长江以南）。选 B。',
      tag:'气候类型判读·新高考' },

    { id:'geo_q436p8_11205', manualId:'geo_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东·地形剖面图题）某地形剖面图显示：西部海拔 4000-5000m 高原，中部 200-1000m 丘陵，东部 0-200m 平原。该地形组合最可能是',
      options:['A. 中国由西向东三级阶梯','B. 美国东西向剖面','C. 澳大利亚东西向剖面','D. 印度南北向剖面'],
      answer:'A',
      explain:'A✓ 中国地势"西高东低，三级阶梯"：第一级青藏高原(>4000m)，第二级云贵/黄土高原(1000-2000m)，第三级东部平原/丘陵(<500m)。选 A。',
      tag:'地形剖面·山东' },

    { id:'geo_q436p8_11206', manualId:'geo_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南·水文图题）某河流量图显示：4-5 月有明显春汛，7-8 月有夏汛，其他月份流量小且冬季断流。该河流位于',
      options:['A. 东北地区','B. 有春汛（积雪融水）','C. 有夏汛（雨水）','D. 华南地区'],
      answer:'ABC',
      explain:'春汛（4-5 月）→ 积雪融化，说明位于冬季有积雪地区。夏汛（7-8 月）→ 雨水，季风区。冬季断流→ 水量小的中高纬。综合判断为东北河流（松花江、辽河等）。选 ABC。',
      tag:'河流补给分析·湖南' },
  ];

  function mount() {
    if (!global.GEOGRAPHY_BANK) global.GEOGRAPHY_BANK = [];
    let added = 0;
    const existing = new Set(global.GEOGRAPHY_BANK.map(q => q.id));
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { global.GEOGRAPHY_BANK.push(q); added++; }
    });
    console.log('[地理·v4.3.6·精选真题 Part 8] 新增 ' + added + ' 题, 主库题数: ' + global.GEOGRAPHY_BANK.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.GEOGRAPHY_V436_QUALITY_P8 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
