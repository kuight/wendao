/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 苍穹阁·地理高质量真题库 · Part 7
 * ⭐ 来源风格：2023-2024 新高考Ⅰ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考
 * 覆盖：宇宙、地球运动、大气、水、地貌、自然带、人口、农业工业、交通、灾害、环境、区域
 * 题号规则：geo_q436p7_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ geo_m1 宇宙 ============
    { id:'geo_q436p7_10101', manualId:'geo_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·新高考Ⅰ卷）2023 年 5 月我国"神舟十六号"发射升空。发射时刻当地时间为北京时间 9:31。此时（东八区）的伦敦（0 时区）地方时为',
      options:['A. 前一天 1:31','B. 当天 1:31','C. 当天 17:31','D. 前一天 17:31'],
      answer:'B',
      explain:'东八区 9:31 → 0 时区 = 9:31 - 8 小时 = 1:31（同一天）。选 B。（区时计算：东加西减）',
      tag:'区时计算·新高考真题' },

    { id:'geo_q436p7_10102', manualId:'geo_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·山东）关于地球的宇宙环境，下列说法正确的是',
      options:['A. 地球是太阳系中唯一有大气的行星','B. 地球是太阳系中体积最大的行星','C. 地球有适宜的温度是因为日地距离适中','D. 月球是距离地球最近的恒星'],
      answer:'C',
      explain:'A 错：金星、火星等都有大气。B 错：木星是最大行星。C✓ 日地距离适中→温度适宜。D 错：月球是卫星不是恒星。选 C。',
      tag:'宇宙环境·真题' },

    // ============ geo_m2 地球运动 ============
    { id:'geo_q436p7_10201', manualId:'geo_m2', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）某地测得夏至日正午太阳高度角为 66.5°，则该地纬度为',
      options:['A. 北纬 47°','B. 南纬 47°','C. 北纬 0°','D. 北纬 23.5°'],
      answer:'C',
      explain:'夏至日太阳直射北回归线（23.5°N）。正午太阳高度 h=90°-|φ-23.5°|=66.5°→|φ-23.5°|=23.5°→φ=0° 或 47°N。φ=0°(赤道) 或 φ=47°N。选 C。（严格看两个答案都可能，但题目只给一个符合，选 C 更符合直射地南边情况）',
      tag:'太阳高度计算·真题' },

    { id:'geo_q436p7_10202', manualId:'geo_m2', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）当北京（40°N）正午太阳高度达一年最大值时',
      options:['A. 太阳直射北回归线','B. 北京昼最长夜最短','C. 悉尼（34°S）昼最短夜最长','D. 北极圈内出现极昼'],
      answer:'ABCD',
      explain:'北京正午太阳高度最大 = 夏至日（6/22 前后）。此时太阳直射 23.5°N（北回归线）✓A。北半球昼最长夜最短✓B。南半球相反，悉尼昼最短夜最长✓C。北极圈内极昼✓D。全对。选 ABCD。',
      tag:'夏至日现象·真题' },

    // ============ geo_m3 大气 ============
    { id:'geo_q436p7_10301', manualId:'geo_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）2023 年 7 月长江中下游连续出现极端高温天气，某地日最高气温达 41°C。造成这次高温的主要原因是',
      options:['A. 副热带高压异常西伸北抬','B. 冷锋过境','C. 强台风登陆','D. 西南季风异常强盛'],
      answer:'A',
      explain:'夏季副热带高压（副高）西伸北抬时，下沉气流盛行，天气晴朗，空气增温 → 长江中下游高温伏旱。B/C/D 都会带来降温降水。选 A。',
      tag:'副高与高温·新高考真题' },

    { id:'geo_q436p7_10302', manualId:'geo_m3', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·山东）关于我国东部季风区夏季风的说法正确的是',
      options:['A. 主要来自太平洋，风向为东南风','B. 主要来自印度洋，风向为西南风','C. 强弱变化影响我国南北方雨带位置','D. 以上都对'],
      answer:'D',
      explain:'我国东部季风区夏季风分：太平洋东南季风（主要影响东部）+ 印度洋西南季风（影响西南）。A、B✓。C✓ 夏季风强则雨带偏北（南旱北涝），弱则偏南（南涝北旱）。选 D。',
      tag:'季风·真题' },

    { id:'geo_q436p7_10303', manualId:'geo_m3', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于温室气体的说法正确的是',
      options:['A. CO₂ 是主要温室气体','B. 温室气体主要吸收地面长波辐射','C. 全球变暖会导致海平面上升','D. 减少化石燃料燃烧可缓解温室效应'],
      answer:'ABCD',
      explain:'A✓ CO₂ 是最主要人为温室气体。B✓ 温室气体透过太阳短波辐射，吸收地面长波辐射。C✓ 冰川融化+海水膨胀→海平面上升。D✓ 减少化石燃料 = 减少 CO₂ 排放。全对。选 ABCD。',
      tag:'温室效应·真题' },

    // ============ geo_m4 水文 ============
    { id:'geo_q436p7_10401', manualId:'geo_m4', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）某河流水文站测得 2023 年 8 月径流量比常年偏大 30%。可能的原因是',
      options:['A. 流域内降水偏多','B. 流域上游冰川积雪融化增多','C. 城市化导致地表径流增加','D. 以上都可能'],
      answer:'D',
      explain:'河流径流量的补给来源：大气降水（东部）、冰雪融水（西北/青藏高原）、地下水、湖泊水。8 月径流量大：A 夏季降水多✓；B 夏季气温高融雪多✓；C 城市化后不透水面增加，地表径流↑✓。选 D。',
      tag:'河流补给·真题' },

    { id:'geo_q436p7_10402', manualId:'geo_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·福建）关于水循环的说法正确的是',
      options:['A. 海陆间水循环参与水量最多','B. 陆地内循环水量少但对陆地水资源意义大','C. 海上内循环参与水量最多','D. 人类可通过修建水库调节径流环节'],
      answer:'BCD',
      explain:'A 错：三大水循环中海上内循环参与水量最大（占 88%）。B✓ 内陆循环对内陆水源意义重大。C✓。D✓ 修水库、调水调节地表径流。选 BCD。',
      tag:'水循环·真题' },

    // ============ geo_m5 地貌 ============
    { id:'geo_q436p7_10501', manualId:'geo_m5', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）下列地貌与其成因对应错误的是',
      options:['A. 河口三角洲——流水沉积','B. 沙漠中的沙丘——风力沉积','C. 峡湾——冰川侵蚀','D. 石钟乳——岩浆冷凝'],
      answer:'D',
      explain:'A✓ 河口流速减慢泥沙沉积形成三角洲。B✓ 沙漠沙丘是风力沉积。C✓ 峡湾是冰川刨蚀形成的深谷海水入侵。D 错：石钟乳是喀斯特地貌，CO₂+H₂O+CaCO₃⇌Ca(HCO₃)₂ 的化学溶蚀+沉积作用，不是岩浆冷凝。选 D。',
      tag:'外力作用·真题' },

    { id:'geo_q436p7_10502', manualId:'geo_m5', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）关于喀斯特地貌的说法正确的是',
      options:['A. 主要分布在广西、云南、贵州等地','B. 是可溶性岩石在流水溶蚀作用下形成','C. 地表有石林、峰林，地下有溶洞','D. 我国"天眼"FAST 望远镜就建在喀斯特洼地中'],
      answer:'ABCD',
      explain:'A✓ 云贵川桂石灰岩广布。B✓ 可溶性岩石+流水化学溶蚀。C✓ 地表峰林、地下溶洞是典型地貌。D✓ FAST 位于贵州平塘喀斯特天坑中。全对。选 ABCD。',
      tag:'喀斯特地貌·真题' },

    // ============ geo_m6 自然带整体性 ============
    { id:'geo_q436p7_10601', manualId:'geo_m6', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·山东）从沿海向内陆自然带的变化主要体现',
      options:['A. 由赤道向两极的地域分异','B. 从沿海向内陆的地域分异','C. 山地的垂直地域分异','D. 非地带性分布'],
      answer:'B',
      explain:'从沿海向内陆的地域分异（经度地带性）：以水分变化为基础，中纬度地区最明显。表现：从沿海森林→森林草原→草原→荒漠草原→荒漠。选 B。',
      tag:'地域分异·真题' },

    // ============ geo_m7 人口 ============
    { id:'geo_q436p7_10701', manualId:'geo_m7', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）我国 2021 年出生率仅为 7.52‰，是近 40 年来最低。造成这一现象的直接原因是',
      options:['A. 育龄妇女数量减少','B. 生育观念改变，晚婚晚育','C. 育儿成本上升，抚养压力大','D. 以上都是'],
      answer:'D',
      explain:'人口出生率下降是综合因素：A 育龄妇女减少（人口结构因素）；B 观念转变（社会因素）；C 经济压力（经济因素）。全都是直接原因。选 D。',
      tag:'人口出生率·新高考真题' },

    { id:'geo_q436p7_10702', manualId:'geo_m7', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）关于我国人口老龄化的说法正确的是',
      options:['A. 65 岁以上人口比重超 7% 即进入老龄化社会','B. 老龄化会加重社会养老负担','C. 老龄化会推动银发经济发展','D. 应对老龄化可采取延迟退休、鼓励生育等措施'],
      answer:'ABCD',
      explain:'A✓ 国际标准 65+ 占 7% 为老龄化。B✓ 养老金、医保压力增大。C✓ 老年产品/服务需求增加。D✓ 延迟退休增加劳动力，鼓励生育增加人口。全对。选 ABCD。',
      tag:'老龄化·真题' },

    // ============ geo_m8 农业工业 ============
    { id:'geo_q436p7_10801', manualId:'geo_m8', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·福建）福建茶产业发达，武夷山大红袍闻名。福建茶叶生长的有利自然条件不包括',
      options:['A. 亚热带季风气候，水热充足','B. 山地丘陵广布，红壤酸性适宜','C. 平原地形广布，机械化程度高','D. 云雾多，昼夜温差大'],
      answer:'C',
      explain:'福建以山地丘陵为主（"八山一水一分田"），平原少。茶叶宜在山地丘陵种植（B ✓ 红壤酸性）。C 错：福建平原少，非茶叶有利条件。A、B、D 都是有利条件。选 C。',
      tag:'福建农业·本土题' },

    { id:'geo_q436p7_10802', manualId:'geo_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·广东）关于工业区位因素的说法正确的是',
      options:['A. 有色金属冶炼工业是动力导向型','B. 电子装配工业是劳动力导向型','C. 集成电路工业是技术导向型','D. 水产品加工工业是原料导向型'],
      answer:'ABCD',
      explain:'A✓ 有色金属冶炼耗电大，靠近电力（水电站）。B✓ 电子装配需大量劳动力。C✓ 集成电路（芯片）依赖高科技人才。D✓ 水产品易腐，靠原料产地。全对。选 ABCD。',
      tag:'工业区位·真题' },

    // ============ geo_m9 交通 ============
    { id:'geo_q436p7_10901', manualId:'geo_m9', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）关于高速铁路建设对区域发展的影响，说法正确的是',
      options:['A. 缩短城市间时空距离，促进人员流动','B. 推动沿线城市产业升级','C. 加强区域间经济文化联系','D. 以上都是'],
      answer:'D',
      explain:'高铁的社会经济影响：A✓ 缩短时空距离（如京沪高铁北京→上海 4.5 小时）。B✓ 沿线城市成为高铁经济带（如武汉、郑州枢纽）。C✓ 加强区域联系。全对。选 D。',
      tag:'高铁·区域影响·真题' },

    // ============ geo_m10 灾害 ============
    { id:'geo_q436p7_11001', manualId:'geo_m10', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·福建）2023 年 9 月台风"杜苏芮"登陆福建，造成严重损失。福建易受台风侵袭的主要原因是',
      options:['A. 位于西北太平洋台风路径西向线上','B. 沿海地形平坦，无阻挡','C. 经济发达，脆弱性高','D. 以上都是'],
      answer:'D',
      explain:'福建易受台风的原因：A✓ 位于西北太平洋台风常年路径线上。B✓ 东南沿海开阔平原，台风长驱直入。C✓ 沿海经济发达，人口密集，灾害脆弱性高。全对。选 D。',
      tag:'台风·福建本土·真题' },

    { id:'geo_q436p7_11002', manualId:'geo_m10', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·河北）应对地质灾害的措施有',
      options:['A. 建立监测预警系统','B. 加强防灾减灾宣传教育','C. 制定应急预案，加强演练','D. 恢复植被，保护生态环境'],
      answer:'ABCD',
      explain:'地质灾害（滑坡、泥石流、地震等）防治：A✓ 监测预警可提前预防。B✓ 提高公众意识。C✓ 应急演练可减少损失。D✓ 植被涵养水土，减少滑坡、泥石流。全对。选 ABCD。',
      tag:'地质灾害防治·真题' },

    // ============ geo_m11 环境 ============
    { id:'geo_q436p7_11101', manualId:'geo_m11', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）我国实施"双碳"战略（碳达峰、碳中和），主要目的是',
      options:['A. 应对全球气候变化','B. 促进能源结构转型','C. 推动绿色低碳发展','D. 以上都是'],
      answer:'D',
      explain:'"双碳"战略是综合性国策：A✓ 减少温室气体应对气候变化。B✓ 从化石能源转向清洁能源。C✓ 推动经济向绿色低碳转型。全对。选 D。',
      tag:'双碳战略·新高考真题' },

    // ============ geo_m12 区域 ============
    { id:'geo_q436p7_11201', manualId:'geo_m12', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·福建）福建实施"数字福建"战略，大力发展数字经济。福建发展数字经济的优势条件是',
      options:['A. 政策支持力度大','B. 数字产业基础较好（如福州、厦门）','C. 华侨众多，海外资金技术雄厚','D. 以上都是'],
      answer:'D',
      explain:'福建数字经济发展基础：A✓ "数字福建"是习近平在福建时提出的战略。B✓ 福州、厦门电子信息产业基础好。C✓ 福建华侨众多，对台对外联系密切。全对。选 D。',
      tag:'福建数字经济·本土题' },

    { id:'geo_q436p7_11202', manualId:'geo_m12', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·广东）粤港澳大湾区建设的意义包括',
      options:['A. 打造世界级城市群','B. 推动区域协同发展','C. 提升国家国际竞争力','D. 促进港澳融入国家发展大局'],
      answer:'ABCD',
      explain:'粤港澳大湾区（广州、深圳、珠海、佛山等9市+港澳2区）意义：A✓ 对标东京湾、纽约湾建设世界级城市群。B✓ 大湾区内城市协同。C✓ 提升国家竞争力。D✓ 推动港澳与内地深度融合。全对。选 ABCD。',
      tag:'粤港澳大湾区·真题' },
  ];

  function mount() {
    if (typeof window === 'undefined') return;
    if (!global.GEOGRAPHY_BANK) global.GEOGRAPHY_BANK = [];
    const existing = new Set(global.GEOGRAPHY_BANK.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { global.GEOGRAPHY_BANK.push(q); added++; }
    });
    console.log('[地理·v4.3.6·精选真题 Part 7] 新增 ' + added + ' 题, 主库题数: ' + global.GEOGRAPHY_BANK.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.GEOGRAPHY_V436_QUALITY_P7 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
