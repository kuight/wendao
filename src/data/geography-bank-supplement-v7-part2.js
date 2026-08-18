/* ===================================================
 * 磐山界·地理专项深化包 v4.2.6-v7 (Part 2: m3~m4)
 *
 * m3 地表形态塑造 + m4 水圈水循环
 * 全部带 explain,标注 local_fj / gaokao
 * =================================================== */
(function (global) {
  'use strict';

  const GEOGRAPHY_FUJIAN_V7_P2 = [
  {
    "id": "geofj7_g3_001",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于内力作用的是",
    "answer": "D",
    "explain": "内力作用:地壳运动、岩浆活动、变质作用、地震(能量来自地球内部)。风化属外力作用(能量来自太阳辐射)。",
    "options": [
      "A.地壳运动",
      "B.岩浆活动",
      "C.变质作用",
      "D.风化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_002",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列外力作用中,风力作用主要在",
    "answer": "A",
    "explain": "风力作用(风蚀、风搬运、风沉积)在植被稀疏、气候干旱区最活跃,如新疆内蒙沙漠区。",
    "options": [
      "A.干旱半干旱区",
      "B.湿润区",
      "C.高山区",
      "D.海洋"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_003",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "流水侵蚀作用主要在",
    "answer": "A",
    "explain": "湿润半湿润区降水多径流强,流水侵蚀作用最强,形成沟壑、河谷、瀑布等。",
    "options": [
      "A.湿润半湿润区",
      "B.干旱区",
      "C.高寒区",
      "D.冰川区"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_004",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "冰川作用主要在",
    "answer": "A",
    "explain": "冰川作用发生在有冰川分布的高山高纬地区,如青藏高原、极地、阿尔卑斯山、北美加拿大。",
    "options": [
      "A.高山、高纬地区",
      "B.低山",
      "C.平原",
      "D.热带"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_005",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地貌属于流水侵蚀形成的是",
    "answer": "A",
    "explain": "流水侵蚀:峡谷、V形谷(上游)、瀑布、壶穴、丹霞喀斯特(化学侵蚀)。流水沉积:三角洲、冲积扇。",
    "options": [
      "A.峡谷、瀑布、V形谷",
      "B.三角洲",
      "C.沙丘",
      "D.冲积扇"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_006",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列地貌由流水沉积形成的是",
    "answer": "A",
    "explain": "流水沉积:出山口冲积扇、下游冲积平原、入海口三角洲。前三者呈典型堆积序列。",
    "options": [
      "A.冲积扇+三角洲+冲积平原",
      "B.峡谷",
      "C.V形谷",
      "D.丹霞地貌"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_007",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "河流下游三角洲形成条件",
    "answer": "A",
    "explain": "河口三角洲形成需要:①上游泥沙充足;②入海(湖)口水下坡度小;③无强潮流洋流冲刷;④水动力减弱。",
    "options": [
      "A.泥沙供给多+水动力弱",
      "B.水动力强",
      "C.流速快",
      "D.地形起伏大"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_008",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于喀斯特地貌叙述正确的是",
    "answer": "A",
    "explain": "喀斯特(岩溶):可溶性岩(石灰岩)+ 湿热气候(降水/温度高)+ 含CO₂的水(碳酸)化学溶蚀:CaCO₃+H₂O+CO₂→Ca(HCO₃)₂。",
    "options": [
      "A.石灰岩+湿热+CO₂水+化学溶蚀",
      "B.岩浆岩+干燥",
      "C.变质岩+寒冷",
      "D.沙岩+温带"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_009",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于喀斯特地貌的是",
    "answer": "C",
    "explain": "喀斯特典型:峰林/峰丛、溶洞、地下暗河、天坑、石钟乳石笋。丹霞地貌是红色砂砾岩流水侵蚀形成的。",
    "options": [
      "A.石林、峰林、溶洞",
      "B.石钟乳、石笋",
      "C.丹霞地貌",
      "D.地下暗河"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_010",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "我国喀斯特地貌广泛分布的地区",
    "answer": "A",
    "explain": "云贵高原是我国最广泛的喀斯特地貌区(桂林、云南石林、贵州荔波)。石灰岩+湿热季风气候+丰沛降水。",
    "options": [
      "A.云贵高原",
      "B.四川盆地",
      "C.东北平原",
      "D.内蒙古高原"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_011",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风蚀地貌叙述正确的是",
    "answer": "A",
    "explain": "风蚀:风蚀蘑菇(下细上粗)、风蚀城堡、雅丹地貌(垄槽相间)。沙丘是风积;黄土是黄土高原风尘沉积;冲积扇是流水堆积。",
    "options": [
      "A.风蚀蘑菇、雅丹",
      "B.沙丘",
      "C.黄土高原",
      "D.冲积扇"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_012",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于沙丘叙述正确的是",
    "answer": "A",
    "explain": "沙丘:风力搬运沙粒后堆积,新月形沙丘迎风坡缓(坡度约10-20°),背风坡陡(约30-34°安息角),沙丘不断迁移。",
    "options": [
      "A.风积地貌+迎风坡缓背风坡陡",
      "B.风蚀",
      "C.水积",
      "D.冰川"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_013",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "黄土高原形成机制",
    "answer": "A",
    "explain": "黄土高原黄土层(平均50-80m)是第四纪西北干旱区风力搬运堆积形成的,后被流水切割成千沟万壑。",
    "options": [
      "A.风力搬运堆积",
      "B.流水堆积",
      "C.冰川作用",
      "D.板块挤压"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_014",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于冰川侵蚀地貌叙述正确的是",
    "answer": "A",
    "explain": "冰蚀:U形谷(冰川刨蚀)、角峰(山峰周围冰斗后退形成)、刃脊(相邻冰斗之间尖锐山脊)、冰斗(山头冰帽形成的椅形凹地)。",
    "options": [
      "A.U形谷+角峰+刃脊+冰斗",
      "B.V形谷",
      "C.三角洲",
      "D.沙丘"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_015",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于冰川沉积叙述正确的是",
    "answer": "A",
    "explain": "冰川沉积无分选,称冰碛物,堆积成冰碛丘陵、终碛垄。冰川退缩后洼地积水形成冰碛湖(如芬兰湖群)。",
    "options": [
      "A.冰碛丘陵、冰碛湖",
      "B.三角洲",
      "C.冲积扇",
      "D.沙丘"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_016",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于海岸侵蚀地貌的是",
    "answer": "A",
    "explain": "海蚀:海浪对海岸冲击、磨蚀,形成海蚀崖、海蚀平台、海蚀洞、海蚀柱。海积:沙滩、沙嘴、连岛沙洲、贝壳堤。",
    "options": [
      "A.海蚀崖、海蚀柱、海蚀洞",
      "B.沙滩",
      "C.三角洲",
      "D.堆积岛"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_017",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于板块构造理论叙述错误的是",
    "answer": "C",
    "explain": "全球六大板块:亚欧、非洲、美洲、太平洋(唯一大洋)、印度洋、南极洲。板块内部相对稳定,交界不稳定(多地震火山)。",
    "options": [
      "A.六大板块",
      "B.板块内部稳定",
      "C.板块交界稳定",
      "D.板块运动"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_018",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "印度板块和亚欧板块交界处形成",
    "answer": "A",
    "explain": "印度板块北移与亚欧板块碰撞挤压,形成喜马拉雅山脉+青藏高原(6500万年来隆升)。",
    "options": [
      "A.喜马拉雅山脉",
      "B.阿尔卑斯",
      "C.落基",
      "D.安第斯"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_019",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "环太平洋火山地震带主要分布在",
    "answer": "A",
    "explain": "太平洋板块与美洲、亚欧、印度洋板块的交界形成环太平洋火山地震带(80%地震发生在此)。",
    "options": [
      "A.太平洋板块与其他板块交界",
      "B.太平洋板块内部",
      "C.大西洋",
      "D.印度洋"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_020",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于地中海-喜马拉雅火山地震带的地质构造",
    "answer": "D",
    "explain": "地中海-喜马拉雅带:欧亚板块与非洲板块+印度洋板块交界,自西向东阿尔卑斯-高加索-青藏-喜马拉雅。安第斯山属环太平洋带(南美板块与太平洋板块交界)。",
    "options": [
      "A.阿尔卑斯山",
      "B.喜马拉雅",
      "C.阿特拉斯",
      "D.安第斯山"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_021",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于褶皱构造叙述正确的是",
    "answer": "A",
    "explain": "褶皱:岩层受挤压水平缓慢弯曲变形。上凸为背斜(岩层新→老→新),下凹为向斜(岩层老→新→老)。",
    "options": [
      "A.岩层弯曲+背斜/向斜",
      "B.岩层断裂",
      "C.无变形",
      "D.水平"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_022",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "背斜的正地形是",
    "answer": "A",
    "explain": "背斜正地形为山岭,向斜正地形为谷地(即最初的地形)。但受长期侵蚀,背斜顶部易被侵蚀反成谷地(倒地形)。",
    "options": [
      "A.山岭",
      "B.盆地",
      "C.河谷",
      "D.高原"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_023",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "背斜可作为油气储藏构造原因是",
    "answer": "A",
    "explain": "背斜岩层拱形上凸+顶部密封岩层不透水,油气比水轻,气最上、油次之、水最下,天然的储油气构造。",
    "options": [
      "A.拱形+密封+浮力油上气顶",
      "B.岩石特殊",
      "C.地层新",
      "D.地形高"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_024",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "向斜储水原因是",
    "answer": "A",
    "explain": "向斜岩层下凹形成天然承压水盆地,岩层两翼倾向盆地中心,雨水汇入储于地下承压水中(如自流盆地)。",
    "options": [
      "A.下凹+两翼汇水",
      "B.上凸",
      "C.地势高",
      "D.岩性"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_025",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列断层构造中形成陡崖的是",
    "answer": "A",
    "explain": "正断层(拉张环境):上盘下降,常形成断崖、地堑(如东非大裂谷、汾渭地堑)。逆断层(挤压):上盘上升。",
    "options": [
      "A.正断层",
      "B.逆断层",
      "C.走滑断层",
      "D.无关"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_026",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于华山、庐山、泰山地形成因叙述正确的是",
    "answer": "A",
    "explain": "华山、庐山、泰山、贺兰山都是断块山(地垒),沿断层线上升;吐鲁番盆地、东非大裂谷、汾渭平原是地堑(下降)。",
    "options": [
      "A.断层作用",
      "B.褶皱作用",
      "C.火山作用",
      "D.侵蚀作用"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_027",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风化作用叙述正确的是",
    "answer": "A",
    "explain": "风化:岩石在原地被破坏。物理风化(温差、冰劈、盐结晶);化学风化(氧化、水解、溶解);生物风化(根劈、有机酸)。",
    "options": [
      "A.物理+化学+生物风化",
      "B.仅物理",
      "C.仅化学",
      "D.不发生"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_028",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于岩浆岩类型叙述正确的是",
    "answer": "A",
    "explain": "岩浆岩:侵入岩(冷凝地下,结晶粗)代表花岗岩、辉长岩;喷出岩(冷凝地表,结晶细/玻璃质)代表玄武岩、流纹岩、安山岩。",
    "options": [
      "A.侵入岩(花岗岩)+喷出岩(玄武岩)",
      "B.仅侵入",
      "C.仅喷出",
      "D.无分类"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_029",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于沉积岩叙述正确的是",
    "answer": "A",
    "explain": "沉积岩两大特征:①有层理构造;②可含古生物化石(可用于地层对比和地质年代确定)。石灰岩、砂岩、页岩都是沉积岩。",
    "options": [
      "A.层理+化石",
      "B.无层理",
      "C.无化石",
      "D.岩浆冷凝"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_030",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于变质岩叙述正确的是",
    "answer": "A",
    "explain": "变质岩:原有岩石在高温高压下矿物成分和结构发生变化,如石灰岩→大理岩、砂岩→石英岩、花岗岩→片麻岩。",
    "options": [
      "A.原岩+高温高压再结晶",
      "B.岩浆冷凝",
      "C.风化产物",
      "D.无变化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_031",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列岩石相互转化关系错误的是",
    "answer": "D",
    "explain": "岩石循环:岩浆→冷凝→岩浆岩→风化侵蚀+搬运沉积→沉积岩;各类岩石→高温高压→变质岩;各类岩石→熔融→岩浆。三大岩类之间转化需要中间过程。",
    "options": [
      "A.岩浆岩→沉积岩(风化侵蚀+沉积成岩)",
      "B.沉积岩→变质岩",
      "C.变质岩→岩浆",
      "D.岩浆岩直接变为沉积岩(无中间过程)"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_032",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列河流地貌中位于河流中上游的是",
    "answer": "A",
    "explain": "河流:上游侵蚀为主形成V形谷、瀑布;中游侵蚀沉积共存(河曲、牛轭湖);下游沉积为主(冲积平原、三角洲)。",
    "options": [
      "A.V形谷",
      "B.冲积扇",
      "C.三角洲",
      "D.冲积平原"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_033",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流阶地叙述正确的是",
    "answer": "A",
    "explain": "河流阶地:地壳间歇性抬升+流水下切侵蚀,形成沿河阶梯状台地,阶地数记录了地壳抬升次数。",
    "options": [
      "A.河谷两岸阶梯状+多期地壳抬升+流水下切",
      "B.地壳下沉",
      "C.无意义",
      "D.单一形成"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_034",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于长江上中下游各段特征",
    "answer": "D",
    "explain": "长江上游(宜昌以上):高山峡谷、水流湍急、水能丰富(三峡);中游(宜昌-湖口):曲流(荆江九曲十八弯);下游(湖口以下):江阔水缓、三角洲。",
    "options": [
      "A.上游:峡谷急流",
      "B.中游:荆江九曲回肠",
      "C.下游:平原三角洲",
      "D.上游三角洲"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_035",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列外力作用中,主要在西北干旱区起主导的是",
    "answer": "A",
    "explain": "西北干旱地区(新疆、内蒙、甘肃西部)降水稀少植被少,风力作用主导,形成风蚀、风积地貌。",
    "options": [
      "A.风力作用",
      "B.流水",
      "C.冰川",
      "D.海浪"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_036",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列外力作用中,主要在青藏高原起主导的是",
    "answer": "A",
    "explain": "青藏高原海拔高气温低,冰川广布,冰川侵蚀和搬运作用强,冻融风化剧烈。",
    "options": [
      "A.冰川作用+冻融作用",
      "B.风",
      "C.流水",
      "D.海浪"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_037",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列外力作用中,主要在东南丘陵起主导的是",
    "answer": "A",
    "explain": "东南丘陵湿润多雨植被茂密,流水侵蚀和堆积作用主导。局部石灰岩区有喀斯特。",
    "options": [
      "A.流水作用+化学溶蚀",
      "B.风",
      "C.冰川",
      "D.海浪"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_038",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于泥石流叙述错误的是",
    "answer": "D",
    "explain": "泥石流:山区突发性含大量泥沙、石块的洪流,常由强降水/融雪/地震触发。发生条件:陡坡+松散物质+水源。仅在山区。",
    "options": [
      "A.山区强降水或积雪融化触发",
      "B.含大量泥沙石块",
      "C.破坏力强",
      "D.仅平原发生"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_039",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于滑坡叙述正确的是",
    "answer": "A",
    "explain": "滑坡:斜坡上岩体或土体沿一定滑动面整体下滑。诱因:降水、地震、人为开挖坡脚。与泥石流不同,滑坡多含大块整体岩体。",
    "options": [
      "A.岩土沿斜面整体下滑",
      "B.地面凹陷",
      "C.仅气候干旱",
      "D.无诱因"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_040",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于人类活动加剧地质灾害的是",
    "answer": "C",
    "explain": "人类活动加剧:破坏植被、不合理工程(坡脚开挖)、地下过量开采采空塌陷。气象预警是防治手段而非加剧原因。",
    "options": [
      "A.过度开垦+乱砍滥伐",
      "B.不合理工程",
      "C.气象预警",
      "D.地下过量开采"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_041",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国地质灾害多发原因叙述正确的是",
    "answer": "A",
    "explain": "我国地质灾害多发:①位于三大板块交汇构造活跃;②山地丘陵占2/3;③季风气候夏季暴雨集中;④人口密度大人为影响强烈。",
    "options": [
      "A.构造活跃+山地多+季风气候+人为影响",
      "B.地形单一",
      "C.气候单一",
      "D.无原因"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_042",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象由风力作用形成的是",
    "answer": "A",
    "explain": "新月形沙丘是典型风积地貌;冲积扇/三角洲是流水堆积;V形谷是流水侵蚀。",
    "options": [
      "A.新月形沙丘",
      "B.冲积扇",
      "C.三角洲",
      "D.V形谷"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_043",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列现象由流水沉积形成的是",
    "answer": "A",
    "explain": "冲积扇:河流出山口流速减小,携带泥沙扇形堆积。风蚀蘑菇/雅丹是风蚀,U形谷是冰蚀。",
    "options": [
      "A.山口冲积扇",
      "B.风蚀蘑菇",
      "C.U形谷",
      "D.雅丹"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_044",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "河流入海口发育三角洲还需要的重要条件是",
    "answer": "A",
    "explain": "三角洲发育需要:①泥沙量大;②水下坡度平缓(泥沙易堆积);③无强潮流洋流冲刷。若海岸陡+强潮流则形成三角湾(如刚果河口)。",
    "options": [
      "A.水下坡度小+无强潮流",
      "B.水下坡度大",
      "C.强潮流",
      "D.强海流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_045",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "我国长江三角洲发育较慢的原因(近年)",
    "answer": "A",
    "explain": "近年长江上游筑坝(如三峡)拦截70%以上泥沙,长江输沙量骤降,长江口三角洲发育变慢,甚至部分岸线后退。",
    "options": [
      "A.三峡等工程拦截泥沙",
      "B.气候变化",
      "C.海平面上升",
      "D.人类开采"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_046",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于海岸线变迁叙述正确的是",
    "answer": "A",
    "explain": "海岸线变化受三大因素:①河口三角洲淤积使海岸线前进(黄河口一年推进2-3km);②海蚀使海岸线后退;③地壳升降/海平面变化。",
    "options": [
      "A.河流三角洲淤积使海岸线前进",
      "B.海岸线永远稳定",
      "C.海岸线永远退缩",
      "D.与地壳运动无关"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_047",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于河流治理措施的是",
    "answer": "D",
    "explain": "河流治理:上游植树保土;中游控制水土流失、修堤;下游疏浚河道、退耕还湖、生态保护。综合治理不能'无为'。",
    "options": [
      "A.中上游植树造林",
      "B.中游修筑堤防",
      "C.下游疏浚",
      "D.无所作为"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_048",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于岩石圈物质循环叙述正确的是",
    "answer": "A",
    "explain": "岩石圈物质循环:岩浆冷却→岩浆岩→风化搬运沉积成岩→沉积岩→高温高压→变质岩→再熔融→岩浆。三大岩类相互转化。",
    "options": [
      "A.岩浆-岩浆岩-风化-沉积岩-变质岩-熔融-岩浆的循环",
      "B.岩石不变",
      "C.单向变化",
      "D.无循环"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_049",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于岩层新老关系叙述正确的是",
    "answer": "A",
    "explain": "地质学基本原则(叠置定律):在未受强烈构造扰动地层中,越下越老,越上越新,可判断地层顺序和地质年代。",
    "options": [
      "A.沉积岩自下而上由老到新",
      "B.上老下新",
      "C.无规律",
      "D.无年龄"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_050",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "背斜与向斜的地表判断依据(受长期侵蚀后)",
    "answer": "A",
    "explain": "受长期侵蚀后地势可能倒置,故通过岩层的新老关系判断:中间岩层老、两侧新为背斜;中间新、两侧老为向斜。",
    "options": [
      "A.岩层新老关系(中间老为背斜)",
      "B.地势高低",
      "C.单看凸凹",
      "D.土壤"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_051",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于河曲形成原因的是",
    "answer": "D",
    "explain": "河曲形成:水流受地转偏向作用+局部沙洲阻挡+两岸物质差异,使河流不断侧蚀凹岸(冲刷)+沉积凸岸,形成弯曲蜿蜒。",
    "options": [
      "A.水流方向、地转偏向、河床坡度",
      "B.地形单一",
      "C.无水流",
      "D.地形起伏"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_052",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于牛轭湖形成叙述正确的是",
    "answer": "A",
    "explain": "河曲极端弯曲后颈部被冲通,原河道被隔离形成弓状湖泊,称牛轭湖(如长江中游荆江地区)。",
    "options": [
      "A.河曲截弯取直后被隔离的弓形湖",
      "B.冰川湖",
      "C.堰塞湖",
      "D.盐湖"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_053",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河漫滩叙述正确的是",
    "answer": "A",
    "explain": "河漫滩:平水期出露、洪水期被淹的河床两侧堆积平坦地带。多次泛滥形成层次分明沉积。",
    "options": [
      "A.洪水季节淹没的河床两侧平坦地带",
      "B.河床本身",
      "C.三角洲",
      "D.冲积扇"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_054",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于沙丘迁移方向叙述正确的是",
    "answer": "A",
    "explain": "沙丘随盛行风方向前进(迁移方向即下风方向)。判断沙丘走向和迁移方向可推测该区域盛行风向。",
    "options": [
      "A.向盛行风下风方向",
      "B.向上风方向",
      "C.不迁移",
      "D.无规律"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_055",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于雅丹地貌走向叙述正确的是",
    "answer": "A",
    "explain": "雅丹:典型风蚀地貌,岩层被风蚀成垄槽相间形态,走向与主导风向平行(风蚀方向)。",
    "options": [
      "A.与盛行风向平行",
      "B.与风向垂直",
      "C.无规律",
      "D.随水流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_056",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于喀斯特地貌类型叙述错误的是",
    "answer": "D",
    "explain": "喀斯特地貌:地表(石林/峰林/峰丛/漏斗/落水洞/溶蚀洼地);地下(溶洞/地下暗河/石钟乳石笋)。冲积扇不属喀斯特。",
    "options": [
      "A.石林(地表)",
      "B.峰林(地表)",
      "C.溶洞(地下)",
      "D.冲积扇(河积)"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_057",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "我国云贵高原喀斯特地貌广布的原因",
    "answer": "A",
    "explain": "云贵高原:①有大面积石灰岩(可溶性岩);②亚热带季风气候湿热;③降水丰富(1000-1500mm);④植物分解产CO₂多。",
    "options": [
      "A.石灰岩+湿热气候+降水丰富+CO₂",
      "B.地形单一",
      "C.气候干燥",
      "D.无原因"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_058",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国黄土高原水土流失叙述错误的是",
    "answer": "D",
    "explain": "黄土高原水土流失严重原因:①黄土疏松孔隙大直立性强易被冲蚀;②夏季集中暴雨侵蚀力强;③植被稀疏保护弱;④人类活动破坏植被+过垦。",
    "options": [
      "A.黄土疏松直立性",
      "B.夏季暴雨",
      "C.植被稀",
      "D.气候干燥不流失"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_059",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列黄土高原治理措施中最根本的是",
    "answer": "D",
    "explain": "黄土高原综合治理:①生物措施(退耕还林还草);②工程措施(打坝淤地、修梯田);③农业措施(等高耕作、合理轮作)。三者综合最根本。",
    "options": [
      "A.生物措施(种草种树)",
      "B.工程措施(打坝淤地)",
      "C.农业措施(等高种植)",
      "D.综合措施(三者结合)"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_060",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于长江中下游洪涝原因叙述错误的是",
    "answer": "D",
    "explain": "长江中下游洪涝原因:①流域广支流多来水集中;②雨季梅雨+台风降水;③中下游平原地势低泄洪不畅;④围湖造田+植被破坏+湖泊萎缩。",
    "options": [
      "A.流域面积大",
      "B.降水集中夏季",
      "C.中下游平原地势低",
      "D.干流长冷"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_061",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于沿海地区风暴潮成因错误的是",
    "answer": "D",
    "explain": "风暴潮:①强热带气旋(台风)或温带气旋+②近岸海底浅+海岸线呈喇叭口(如钱塘江口);③适逢天文大潮时最严重。与温差无关。",
    "options": [
      "A.强台风或强冷空气",
      "B.近岸地形喇叭口",
      "C.天文大潮",
      "D.昼夜温差"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_062",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于河流综合治理的是",
    "answer": "D",
    "explain": "河流治理:①中上游植树保土控制水土流失;②中游修水库、堤防、蓄洪滞洪区;③下游疏浚河道、退耕还湖。破坏水源林反而加剧洪涝。",
    "options": [
      "A.修水库",
      "B.加固堤坝",
      "C.中上游植树造林",
      "D.破坏水源林"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_063",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地震震级和烈度关系叙述正确的是",
    "answer": "A",
    "explain": "震级:表征地震释放能量大小,一次地震一个震级值。烈度:某地地震破坏程度,受震级/震源深度/震中距/地质地形等影响,同一地震不同地区烈度不同。",
    "options": [
      "A.同一地震一个震级多个烈度",
      "B.震级=烈度",
      "C.震级越大烈度越小",
      "D.无关"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_064",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地震防灾减灾措施叙述错误的是",
    "answer": "D",
    "explain": "地震防灾:①提高建筑抗震标准;②地震监测预警;③应急预案演练;④震后科学重建。地震带地区仍可建设,但需严格抗震设计。",
    "options": [
      "A.建筑抗震设计",
      "B.制定应急预案",
      "C.震后重建",
      "D.禁止一切建设"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_065",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国西南地区地质灾害多发原因叙述正确的是",
    "answer": "A",
    "explain": "西南(云贵川藏):①位于板块交界处地壳活跃;②山地陡坡多;③夏秋暴雨集中;④植被破坏+工程开挖诱发。地震滑坡泥石流频发。",
    "options": [
      "A.山地起伏大+多断裂+暴雨集中+人类活动",
      "B.地形单一",
      "C.气候干燥",
      "D.无原因"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_066",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列外力作用循环中错误的一步是",
    "answer": "B",
    "explain": "外力作用逻辑顺序:风化(原地破碎)→侵蚀(离开原地)→搬运(远距离)→沉积(堆积)→固结成岩。故B错。",
    "options": [
      "A.风化→侵蚀→搬运→沉积→固结成岩",
      "B.风化→固结→搬运",
      "C.无顺序",
      "D.反向"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_067",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于流水搬运方式的是",
    "answer": "B",
    "explain": "流水搬运方式:①推移(底床滚动)、②悬移(悬浮)、③溶运(溶解)。风扬是风的搬运方式。",
    "options": [
      "A.推移+悬移+溶运",
      "B.风扬",
      "C.冰川推运",
      "D.波浪冲运"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_068",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风力搬运能力叙述正确的是",
    "answer": "A",
    "explain": "搬运能力(能搬起最大颗粒)与风速3-6次方成正比,搬运量与风速3次方成正比。风越大,能搬走越大颗粒。",
    "options": [
      "A.风力大搬运颗粒大",
      "B.风力大搬运细颗粒",
      "C.与风力无关",
      "D.仅粗颗粒"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_069",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水动力沉积分选叙述正确的是",
    "answer": "A",
    "explain": "水动力减小时,先沉粗大颗粒,后沉细小颗粒,形成'由粗到细'水平层理和粒序层理。冲积扇顶部粗、边缘细。",
    "options": [
      "A.先沉重物再沉轻物+粒径由大到小",
      "B.无分选",
      "C.无规律",
      "D.反向"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_070",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于风积地貌层理叙述正确的是",
    "answer": "A",
    "explain": "风积:沙粒分选好(粒径均匀),形成大规模交错层理(斜层理),记录了风向变化。可用于古环境重建。",
    "options": [
      "A.粒径分选+交错层理",
      "B.无层理",
      "C.水平层理",
      "D.随机"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_071",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于冰川沉积特征叙述正确的是",
    "answer": "A",
    "explain": "冰碛物特征:无分选(大小混杂)、棱角状(未磨圆)、颗粒粗细+砂+粘土混杂无层理。这些特征可与流水/风积区分。",
    "options": [
      "A.无分选+棱角状+含粘土",
      "B.分选好",
      "C.颗粒均匀",
      "D.流水化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_072",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "我国主要的地震带有(选一)",
    "answer": "A",
    "explain": "我国地震带:①东南沿海台湾带;②青藏高原-喜马拉雅带;③南北地震带(川滇甘宁);④天山南北带;⑤华北地震带。",
    "options": [
      "A.台湾-福建带、青藏高原带、南北地震带、天山带",
      "B.仅西南",
      "C.仅东部",
      "D.仅西北"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_073",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "我国台湾多地震原因",
    "answer": "A",
    "explain": "台湾岛位于亚欧板块与菲律宾海板块(太平洋子板块)俯冲带附近,构造活动强烈,地震频繁,火山活动。",
    "options": [
      "A.位于亚欧板块与太平洋板块交界",
      "B.板块内部稳定",
      "C.远离板块",
      "D.无原因"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_074",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于火山活动利弊叙述正确的是",
    "answer": "A",
    "explain": "火山:短期破坏(熔岩、火山灰、气体窒息);长期福利(火山灰肥沃土壤,如夏威夷、意大利;地热资源;矿产富集)。",
    "options": [
      "A.害:短期破坏;利:肥沃土壤+温泉+矿产",
      "B.仅害",
      "C.仅利",
      "D.无影响"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_075",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地热资源应用叙述错误的是",
    "answer": "D",
    "explain": "地热资源合理利用:①温泉洗浴旅游;②地热发电(冰岛85%);③地热供暖(北方城市);④温室、水产。合理开发不破坏地下水。",
    "options": [
      "A.温泉旅游",
      "B.地热发电",
      "C.地热供暖",
      "D.破坏地下水"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_076",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流阶地上人类聚落分布叙述正确的是",
    "answer": "A",
    "explain": "河流阶地(高于河漫滩):地势平坦、土壤肥沃、临近水源、免于洪水淹没,是理想聚落和农业区(如渭河谷地)。",
    "options": [
      "A.地势平坦+水源近+免洪水",
      "B.随意分布",
      "C.仅沿河",
      "D.仅山顶"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_077",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于三角洲人类聚落叙述叙述正确的是",
    "answer": "A",
    "explain": "三角洲(如尼罗河、恒河、长江、珠江):地势平坦、土壤肥沃、水资源丰富、水陆交通便利,人口稠密城市林立。但需防洪防潮。",
    "options": [
      "A.土壤肥沃+水源丰富+人口稠密",
      "B.荒无人烟",
      "C.仅农业",
      "D.仅捕鱼"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_078",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于山地聚落叙述正确的是",
    "answer": "A",
    "explain": "山地聚落:因地形限制多分布在河谷+盆地+山麓+山间平原,规模较小、分散,主干道多沿山谷方向延伸。",
    "options": [
      "A.规模小分散+沿河谷或缓坡",
      "B.规模大+集中",
      "C.随机",
      "D.仅山顶"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_079",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于交通线路选择叙述错误的是",
    "answer": "D",
    "explain": "山区交通线选择:①沿等高线走(减少工程量、坡度);②迂回避险;③大桥/隧道穿越;④避开断层+滑坡带。不能走等高线陡坡。",
    "options": [
      "A.平原:直线经济",
      "B.山区:沿等高线迂回",
      "C.跨越河流大桥",
      "D.走等高线陡坡"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_080",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地表形态与农业关系叙述错误的是",
    "answer": "D",
    "explain": "地表形态与农业:平原(种植业,水田/旱地);山区(林业/牧业);丘陵(茶果油茶);高原(草原畜牧,青藏可高寒)。高原不是全都适宜种植。",
    "options": [
      "A.平原:种植业",
      "B.山区:立体农业",
      "C.丘陵:茶果",
      "D.高原:全部适宜种植"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_081",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国东部地形对水系影响叙述正确的是",
    "answer": "A",
    "explain": "我国地势西高东低,三级阶梯,河流大多自西向东流入太平洋,如长江、黄河、珠江。西南少数流向印度洋。",
    "options": [
      "A.地势西高东低+大河东流入海",
      "B.西低东高",
      "C.南北向",
      "D.不受影响"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_082",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流航运价值叙述叙述正确的是",
    "answer": "A",
    "explain": "河流航运价值高的条件:①水量丰富;②水位稳定终年不冻;③流量大流速小;④落差小;⑤沿岸经济发达货源足。如长江、莱茵河。",
    "options": [
      "A.水量大+落差小+终年不冻+流域经济",
      "B.水量小",
      "C.落差大",
      "D.冰冻"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_083",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于长江航运价值高的原因叙述错误的是",
    "answer": "D",
    "explain": "长江航运优势:①流量大居世界前列;②中下游地势平缓;③终年不冻(黄河、松花江冬季结冰);④流域经济发达货源足。上游有峡谷但不冰冻。",
    "options": [
      "A.水量大终年不冻",
      "B.流域经济发达",
      "C.地势平缓",
      "D.上游冰冻期长"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_084",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水能资源丰富条件叙述正确的是",
    "answer": "A",
    "explain": "水能资源(理论)=水量×落差。故需大水量+大落差,如长江上游(降水丰+落差大)、雅鲁藏布江大拐弯。",
    "options": [
      "A.水量大+落差大",
      "B.仅水量大",
      "C.仅落差大",
      "D.无关"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_085",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于世界水能资源开发潜力最大的地区叙述正确的是",
    "answer": "A",
    "explain": "南美(亚马逊/巴拉那河)+非洲(刚果河/尼罗河):水量大+地形阶梯+开发程度低,水能潜力最大。欧洲北美开发充分。",
    "options": [
      "A.南美和非洲",
      "B.北美",
      "C.欧洲",
      "D.大洋洲"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_086",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于影响交通运输方式选择的因素",
    "answer": "D",
    "explain": "交通选择依据:①货物特性(易腐/危险);②运输距离(短用陆,长用海/空);③运量;④运费;⑤时效性。文化偏好不是主要因素。",
    "options": [
      "A.货物性质+运输距离+运输量+运费",
      "B.天气",
      "C.地形",
      "D.文化偏好"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_087",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于交通建设对区域发展叙述正确的是",
    "answer": "A",
    "explain": "交通建设促进:①资源开发(尤其偏远地区);②区域间经济文化联系;③沿线城市发展;④社会稳定和民族团结(青藏铁路)。",
    "options": [
      "A.促进资源开发+经济联系+城市发展",
      "B.无影响",
      "C.阻碍发展",
      "D.仅经济"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_088",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于青藏铁路建设意义叙述错误的是",
    "answer": "D",
    "explain": "青藏铁路建设:①加强西藏与内地联系;②促进沿线经济发展;③国家统一民族团结;④采用高架桥+片石通风路基保护冻土,生态友好。",
    "options": [
      "A.加强民族团结",
      "B.促进经济发展",
      "C.保护生态环境",
      "D.破坏冻土地区"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_089",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于岩浆岩、沉积岩、变质岩识别叙述正确的是",
    "answer": "A",
    "explain": "识别:①岩浆岩无化石无层理有矿物晶体;②沉积岩有层理常含化石;③变质岩有片理/片麻构造矿物定向排列。",
    "options": [
      "A.岩浆岩无化石+沉积岩有层理+变质岩有片理",
      "B.三者相同",
      "C.岩浆岩有层理",
      "D.沉积岩有片理"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_090",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于岩石地区找化石叙述正确的是",
    "answer": "A",
    "explain": "化石主要保存于沉积岩中(岩浆岩高温、变质岩高温高压均破坏化石)。化石可用于地层对比+推测古环境+确定地质年代。",
    "options": [
      "A.主要在沉积岩+按顺序对比地层",
      "B.岩浆岩多",
      "C.变质岩多",
      "D.任何岩石"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g3_091",
    "manualId": "geo_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地质年代顺序叙述正确的是",
    "answer": "A",
    "explain": "地质年代由老到新:太古宙(距今40-25亿年)→元古宙(25-5.4亿)→古生代(5.4-2.5亿)→中生代(2.5亿-6600万,恐龙)→新生代(6600万-现今,人类)。",
    "options": [
      "A.太古宙-元古宙-古生代-中生代-新生代",
      "B.反过来",
      "C.无顺序",
      "D.中生代最老"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_001",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于水圈组成的是",
    "answer": "D",
    "explain": "水圈:地球表层各种形式水的总称,包括海洋、河湖、地下水、冰川、大气水、生物水。岩石不属水圈。",
    "options": [
      "A.海洋、河流、湖泊",
      "B.冰川、地下水",
      "C.大气水、生物水",
      "D.岩石"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_002",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "水圈中占比最大的是",
    "answer": "A",
    "explain": "地球水:海洋占96.5%以上(咸水),淡水仅2.5%(其中冰川69%,地下水30%,河湖仅0.3%)。可利用淡水更少。",
    "options": [
      "A.海洋(97.5%)",
      "B.淡水",
      "C.冰川",
      "D.地下水"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_003",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "水资源指的是狭义上",
    "answer": "A",
    "explain": "狭义水资源:陆地上可以利用的淡水资源(河湖水+浅层地下水)。广义:全球所有水(含海水)。",
    "options": [
      "A.可供人类利用的淡水",
      "B.全部水",
      "C.咸水",
      "D.岩石水"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_004",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水循环环节叙述正确的是",
    "answer": "A",
    "explain": "水循环五大环节:蒸发+植物蒸腾→水汽输送→凝结降水→地表径流+地下径流(含下渗)→回归海洋/湖泊。",
    "options": [
      "A.蒸发/水汽输送/凝结降水/径流/下渗",
      "B.仅降水",
      "C.仅蒸发",
      "D.单向"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_005",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水循环意义叙述错误的是",
    "answer": "D",
    "explain": "水循环:维持全球水量动态平衡、更新水资源、联系大气/水/岩石/生物圈、塑造地表形态、传输物质能量。地球总水量不变。",
    "options": [
      "A.维持水量平衡",
      "B.更新陆地淡水",
      "C.联系四大圈层",
      "D.改变地球总水量"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_006",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于海陆间大循环叙述正确的是",
    "answer": "A",
    "explain": "水循环三大类型:①海陆间大循环(最重要,更新陆地水);②海上内循环(水量最大);③陆上内循环(仅内流区)。",
    "options": [
      "A.三大水循环之最",
      "B.仅海上",
      "C.仅陆上",
      "D.不涉及大气"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_007",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于人类影响水循环的活动是",
    "answer": "D",
    "explain": "人类活动影响水循环环节:修水库/调水(改变地表径流分配)、植树造林(增加蒸腾/下渗)、抽地下水、城市硬化。地球自转是自然。",
    "options": [
      "A.修水库",
      "B.跨流域调水",
      "C.植树造林",
      "D.地球自转"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_008",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于影响蒸发因素叙述正确的是",
    "answer": "A",
    "explain": "蒸发受温度(热蒸发快)、湿度(空气干蒸发快)、风速(风大蒸发快)、水面/植被面积、光照等综合影响。",
    "options": [
      "A.温度、湿度、风速、水面",
      "B.仅温度",
      "C.仅湿度",
      "D.仅风速"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_009",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于影响下渗因素叙述叙述正确的是",
    "answer": "A",
    "explain": "下渗:土壤疏松粒粗下渗好;植被覆盖多下渗好;坡度小下渗好;地面覆盖(冰雪/硬化)减少下渗。",
    "options": [
      "A.土壤性质+植被+坡度+地面状况",
      "B.仅土壤",
      "C.仅坡度",
      "D.仅植被"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_010",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市化对水循环影响叙述错误的是",
    "answer": "C",
    "explain": "城市化影响:①硬化地面下渗↓;②地表径流↑洪水风险↑;③下渗↓地下水补给↓;④城市热岛蒸发↑但整体不显著。",
    "options": [
      "A.地面硬化下渗减少",
      "B.地表径流增加",
      "C.蒸发增加",
      "D.地下水补给减少"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_011",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于海绵城市叙述叙述正确的是",
    "answer": "A",
    "explain": "海绵城市:通过下沉式绿地、透水铺装、雨水花园、湿地公园等,像海绵一样吸/蓄/渗/净/释水,减轻洪涝、改善水环境。",
    "options": [
      "A.蓄水+渗水+净水+释水",
      "B.仅蓄水",
      "C.仅排水",
      "D.仅硬化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_012",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流补给类型叙述叙述正确的是",
    "answer": "A",
    "explain": "河流补给5种:①雨水(最广,东部季风区);②冰川融水(西北高山内流区);③季节性积雪融水(东北春汛);④湖泊沼泽;⑤地下水(全年稳定)。",
    "options": [
      "A.雨水+冰川融水+季节性积雪融水+湖泊+地下水",
      "B.仅雨水",
      "C.仅冰川",
      "D.仅地下水"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_013",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于长江流域主要补给方式叙述正确的是",
    "answer": "A",
    "explain": "长江以雨水补给为主(占70%以上),上游有部分冰川融水补给(唐古拉山),中下游几乎全为雨水补给。",
    "options": [
      "A.雨水补给为主",
      "B.冰川补给为主",
      "C.地下水补给为主",
      "D.融雪补给"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_014",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于塔里木河主要补给方式叙述正确的是",
    "answer": "A",
    "explain": "塔里木河深处内陆干旱区,雨水极少,依赖天山、昆仑山冰川融水+高山积雪融水,水量随气温变化,夏季最大。",
    "options": [
      "A.冰川融水为主",
      "B.雨水",
      "C.地下水",
      "D.湖泊"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_015",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于东北松花江春汛叙述正确的是",
    "answer": "A",
    "explain": "东北松花江春季(3-4月)有一次小汛(春汛),来自冬季积雪融化;夏季主汛为雨水补给(6-8月)。",
    "options": [
      "A.季节性积雪融水",
      "B.冰川融水",
      "C.雨水",
      "D.地下水"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_016",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地下水补给叙述叙述正确的是",
    "answer": "A",
    "explain": "地下水补给:①降水下渗(最主要);②河湖水下渗;③冰川融水下渗;④凝结水;⑤人工回灌。",
    "options": [
      "A.雨水+河湖下渗+冰川融水+冷凝水",
      "B.仅雨水",
      "C.仅冰川",
      "D.无补给"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_017",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于潜水叙述正确的是",
    "answer": "A",
    "explain": "潜水:埋藏在第一层不透水层之上,具有自由水面,直接接受降水补给,受气候季节影响明显。",
    "options": [
      "A.自由水面+上下相连+受降水影响",
      "B.被承压",
      "C.有出水管",
      "D.无自由水面"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_018",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于承压水叙述叙述正确的是",
    "answer": "A",
    "explain": "承压水:埋藏于两个不透水层之间的水,水量相对稳定,水质好,承受静水压力,凿井可自流(自流井)。",
    "options": [
      "A.两不透水层之间+承受压力+相对稳定",
      "B.无水面",
      "C.随季节剧变",
      "D.仅浅层"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_019",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于陆地水体相互补给叙述叙述错误的是",
    "answer": "D",
    "explain": "陆地水体相互补给:丰水期河水↑补给地下水/湖泊;枯水期地下水/湖泊补给河流。地下水缓慢流动,不是绝对静止。",
    "options": [
      "A.丰水期河水补给地下水",
      "B.枯水期地下水补给河水",
      "C.湖泊调节河流",
      "D.地下水从不流动"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_020",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于河流水文特征的是",
    "answer": "C",
    "explain": "水文特征(水的特征):流量、水位、汛期(高水位期)、含沙量、结冰期、水能、航运价值。河道属水系特征。",
    "options": [
      "A.流量、水位、汛期、含沙量、结冰期",
      "B.流速",
      "C.河道",
      "D.流域面积"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_021",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于河流水系特征的是",
    "answer": "A",
    "explain": "水系特征(河流形态):源地、流向、干支流、流域面积、水系形状(树枝/羽状/扇形/放射)、河网密度。含沙量属水文。",
    "options": [
      "A.源地、流向、干支流、流域面积、水系形状",
      "B.含沙量",
      "C.水位",
      "D.汛期"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_022",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于外流河和内流河叙述正确的是",
    "answer": "A",
    "explain": "外流河:最终流入海洋,如长江、密西西比河、恒河、亚马逊。内流河:未流入海洋,消失在沙漠或注入内陆湖泊,如塔里木河。",
    "options": [
      "A.外流河最终流入海洋",
      "B.内流河流入沙漠",
      "C.内流河流入海洋",
      "D.外流河消失"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_023",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于外流区和内流区叙述叙述正确的是",
    "answer": "A",
    "explain": "我国外流区约占国土面积2/3,分布在东部季风区,雨水补给为主。内流区约占1/3,分布在西北干旱区,冰雪融水为主。",
    "options": [
      "A.外流区占我国国土2/3+雨水补给",
      "B.内流区占2/3",
      "C.外流区仅东北",
      "D.内流区仅台湾"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_024",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国北方河流水文特征叙述叙述错误的是",
    "answer": "A",
    "explain": "北方河流特征:降水少流量小、雨季集中汛期短、植被少含沙量大(尤其黄河)、冬季有结冰期(松花江结冰4-5月)。",
    "options": [
      "A.流量小+汛期短+含沙量大+有结冰期",
      "B.流量大",
      "C.汛期长",
      "D.无结冰"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_025",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国南方河流水文特征叙述叙述正确的是",
    "answer": "A",
    "explain": "南方河流(长江以南):降水多流量大、汛期长(4-10月)、植被好含沙量小、亚热带以南无结冰。",
    "options": [
      "A.流量大+汛期长+含沙量小+无结冰",
      "B.流量小",
      "C.汛期短",
      "D.有结冰"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_026",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于长江水文特征叙述叙述正确的是",
    "answer": "A",
    "explain": "长江水文特征:①流量大(年径流量近1万亿m³,居中国第一);②汛期长(5-10月);③含沙量较小;④无结冰;⑤水能资源丰富。",
    "options": [
      "A.水量大+汛期长+含沙量小+无结冰+水能丰富",
      "B.水量小",
      "C.有结冰",
      "D.含沙量大"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_027",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于黄河水文特征叙述叙述正确的是",
    "answer": "A",
    "explain": "黄河特征:①中游黄土高原含沙量居世界之首;②上下游高低纬结冰不同步产生凌汛(宁夏内蒙+下游);③20世纪90年代下游多次断流。",
    "options": [
      "A.含沙量大+有凌汛+断流",
      "B.含沙量小",
      "C.无凌汛",
      "D.无断流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_028",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于凌汛形成条件叙述叙述正确的是",
    "answer": "A",
    "explain": "凌汛:河流上游先解冻(纬度低),下游还结冰(纬度高),融冰洪水+冰凌堆积堵塞河道形成洪水。黄河、松花江都有。",
    "options": [
      "A.河流由低纬流向高纬+有结冰期",
      "B.由高纬流向低纬",
      "C.无结冰",
      "D.低纬"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_029",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于影响河流航运价值的因素",
    "answer": "B",
    "explain": "河流航运价值:水量大+水位稳(季节变化小)+落差小(流速缓)+终年不冻+沿岸经济发达货源足。风向不是主要因素。",
    "options": [
      "A.流量+水位+落差+结冰期+沿岸经济",
      "B.风向",
      "C.洋流",
      "D.日照"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_030",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于欧洲河流航运价值高的原因叙述正确的是",
    "answer": "A",
    "explain": "欧洲莱茵河、多瑙河:①温带海洋气候降水均匀;②地形平坦流速缓;③冬温和终年不冻;④流域经济发达货运需求大。",
    "options": [
      "A.西风带+温带海洋气候+平原地形+终年不冻",
      "B.地形起伏",
      "C.冬季结冰",
      "D.气候单一"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_031",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源短缺原因叙述叙述错误的是",
    "answer": "B",
    "explain": "水资源短缺:①水资源总量有限;②时空分布不均;③人口增长+经济发展需水量激增;④水污染;⑤浪费严重。全球水量足够但可用水少。",
    "options": [
      "A.总量有限+分布不均+人口增加+污染+浪费",
      "B.地球水太少",
      "C.没有原因",
      "D.单原因"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_032",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国水资源分布叙述正确的是",
    "answer": "A",
    "explain": "我国水资源:空间分布南多北少东多西少(降水从东南向西北递减);时间分布夏秋多冬春少(季风气候)。",
    "options": [
      "A.南多北少+东多西少+夏多冬少",
      "B.南少北多",
      "C.东西均匀",
      "D.四季均匀"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_033",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于华北平原缺水原因叙述叙述错误的是",
    "answer": "D",
    "explain": "华北平原水资源问题:①温带季风气候降水较少;②春旱严重;③人口密集工农业发达需水量大;④水污染严重浪费多。",
    "options": [
      "A.气候干旱降水少",
      "B.春旱严重",
      "C.人口多需水量大",
      "D.水污染",
      "E.水多用不完"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_034",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于解决华北缺水措施的是",
    "answer": "D",
    "explain": "解决华北缺水:①南水北调(工程输水);②节水技术+全民节水意识;③水价改革;④治理污染;⑤海水淡化;⑥雨水收集。破坏生态适得其反。",
    "options": [
      "A.南水北调",
      "B.节水",
      "C.提高水价",
      "D.破坏生态"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_035",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于南水北调工程叙述叙述正确的是",
    "answer": "A",
    "explain": "南水北调:①东线(扬州-京津,借京杭大运河);②中线(丹江口水库-北京,自流);③西线(长江上游雅砻江大渡河调入黄河)。",
    "options": [
      "A.东、中、西三线+调长江水到北方",
      "B.南方",
      "C.西方",
      "D.东方"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_036",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于跨流域调水利弊叙述叙述正确的是",
    "answer": "A",
    "explain": "跨流域调水:利—解决受水区水危机、促进工农业+城市。弊—调出区可能面临流量减少生态改变、沿线征地移民、水质保障、蒸发/渗漏损失。",
    "options": [
      "A.利:解水危;弊:调出区生态、蒸发损失、水质安全",
      "B.仅利",
      "C.仅弊",
      "D.无影响"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_037",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国水资源开发利用不合理表现叙述错误的是",
    "answer": "D",
    "explain": "水资源开发利用不合理:过度抽取地下水(华北地面沉降海水入侵)、盲目围湖造田(减少调蓄)、大水漫灌浪费。合理灌溉不属不合理。",
    "options": [
      "A.过度开采地下水",
      "B.抽干湖泊",
      "C.围湖造田",
      "D.合理灌溉"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_038",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地下水过度开采后果叙述叙述正确的是",
    "answer": "A",
    "explain": "地下水过度开采:①地下水位下降;②地面沉降(华北、长三角);③沿海海水倒灌;④植被枯萎生态破坏;⑤农业灌溉困难。",
    "options": [
      "A.地面沉降+海水入侵+地表植被死亡",
      "B.无影响",
      "C.仅沉降",
      "D.仅入侵"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_039",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流按性质分类正确的是",
    "answer": "A",
    "explain": "洋流分:①暖流(水温比经过海区高,一般由低纬流向高纬);②寒流(水温比经过海区低,一般由高纬流向低纬)。",
    "options": [
      "A.暖流(高→低纬)+寒流(低→高纬)",
      "B.按颜色",
      "C.按大小",
      "D.按盐度"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_040",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于影响洋流形成因素叙述叙述正确的是",
    "answer": "A",
    "explain": "洋流成因:①盛行风(风海流,主要动力);②海陆分布(海岸阻挡改向);③地转偏向力(北半球右偏);④海水密度差(密度流,如直布罗陀海峡)。",
    "options": [
      "A.盛行风+海陆分布+地转偏向+密度",
      "B.仅风",
      "C.仅密度",
      "D.仅海陆"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_041",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于全球大洋环流模式叙述叙述正确的是",
    "answer": "A",
    "explain": "全球大洋环流:①中低纬(以副高为中心)北半球顺时针,南半球逆时针;②中高纬(以副极地低压为中心)北半球逆时针;南半球西风漂流环绕南极。",
    "options": [
      "A.中低纬顺时针(北半球)+逆时针(南半球)",
      "B.反向",
      "C.无规律",
      "D.南北一致"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_042",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于北太平洋大洋环流的洋流",
    "answer": "D",
    "explain": "北太平洋环流:北赤道暖流→日本暖流(黑潮)→北太平洋暖流→加利福尼亚寒流→回北赤道。秘鲁寒流属南太平洋。",
    "options": [
      "A.北赤道暖流",
      "B.日本暖流(黑潮)",
      "C.北太平洋暖流",
      "D.秘鲁寒流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_043",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于北大西洋暖流叙述叙述正确的是",
    "answer": "A",
    "explain": "北大西洋暖流:北美墨西哥湾流延伸,温暖了整个西北欧,是欧洲西部温带海洋性气候形成的关键因素。挪威港冬季不冻。",
    "options": [
      "A.温暖了西欧+气候海洋性",
      "B.降温西欧",
      "C.远离欧洲",
      "D.无影响"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_044",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于秘鲁寒流对沿岸气候影响叙述叙述正确的是",
    "answer": "A",
    "explain": "秘鲁寒流:①降温减湿→沿岸沙漠(阿塔卡马);②寒流上升流带营养盐→世界四大渔场之一(秘鲁渔场);③厄尔尼诺时中断。",
    "options": [
      "A.降温减湿+沿岸沙漠+渔场",
      "B.增温增湿",
      "C.无影响",
      "D.阻碍渔场"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_045",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流对气候影响一般规律叙述叙述正确的是",
    "answer": "A",
    "explain": "洋流对沿岸气候:①暖流一般增温增湿(北大西洋暖流温暖西欧);②寒流一般降温减湿(秘鲁寒流形成阿塔卡马沙漠)。",
    "options": [
      "A.暖流增温增湿+寒流降温减湿",
      "B.相反",
      "C.无关",
      "D.不定"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_046",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列世界四大渔场中不属于寒暖流交汇形成的是",
    "answer": "A",
    "explain": "四大渔场:①北海道(日本暖流+千岛寒流);②纽芬兰(墨西哥湾流+拉布拉多寒流);③北海(北大西洋暖流+北冰洋寒流);④秘鲁(上升流为主,寒流带来营养盐)。",
    "options": [
      "A.秘鲁渔场",
      "B.北海道渔场",
      "C.纽芬兰渔场",
      "D.北海渔场"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_047",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流对海洋生态影响叙述叙述正确的是",
    "answer": "A",
    "explain": "洋流对海洋生态:①寒暖流交汇搅动海水营养盐上翻+多种鱼汇集→四大渔场;②但海洋污染物(石油)也会随洋流大范围扩散。",
    "options": [
      "A.寒暖流交汇+上升流→渔场;油污随洋流扩散",
      "B.无影响",
      "C.仅生态",
      "D.仅污染"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_048",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洋流对航海影响叙述叙述正确的是",
    "answer": "A",
    "explain": "洋流影响航海:①顺流航行速度快省燃料(哥伦布借北赤道暖流);②寒暖流交汇处有海雾+浮冰威胁(纽芬兰泰坦尼克号)。",
    "options": [
      "A.顺流省时省燃料",
      "B.逆流亦无影响",
      "C.洋流阻航",
      "D.无关"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_049",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于赤道逆流叙述叙述正确的是",
    "answer": "A",
    "explain": "赤道无风带附近(约3-10°N),因南北信风带来的水量堆积在西侧,产生自西向东的赤道逆流(如北太平洋赤道逆流)。",
    "options": [
      "A.位于赤道+由西向东",
      "B.由东向西",
      "C.南北向",
      "D.不存在"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_050",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于厄尔尼诺现象叙述叙述正确的是",
    "answer": "A",
    "explain": "厄尔尼诺(圣婴现象):赤道东太平洋(秘鲁沿岸)海水异常增温,信风减弱,南美东太平洋反常洪涝,澳大利亚+印尼干旱。反常年份影响全球气候。",
    "options": [
      "A.赤道东太平洋异常增温+南美洪涝澳洲干旱",
      "B.反向",
      "C.中断洋流",
      "D.无影响"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_051",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于拉尼娜现象叙述叙述正确的是",
    "answer": "A",
    "explain": "拉尼娜(圣女现象):赤道东太平洋海水异常降温,信风加强,与厄尔尼诺相反。带来相反的极端气候影响。",
    "options": [
      "A.赤道东太平洋异常降温+相反于厄尔尼诺",
      "B.东太平洋异常增温",
      "C.无影响",
      "D.中断"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_052",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于海水盐度分布规律叙述叙述正确的是",
    "answer": "A",
    "explain": "海水盐度:副热带(20-30°)蒸发>降水,盐度最高(约37‰);赤道(降水量大)稍低约35‰;南北极稀释+融冰盐度低约33‰。",
    "options": [
      "A.副热带海区最高+赤道稍低+南北极最低",
      "B.赤道最高",
      "C.极地最高",
      "D.无规律"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_053",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "世界表层海水盐度最高的海区是",
    "answer": "A",
    "explain": "红海:高温+副热带蒸发强+周围无淡水注入+封闭海域,盐度可达40-42‰,是世界表层海水盐度最高的海区。",
    "options": [
      "A.红海(40-42‰)",
      "B.波罗的海",
      "C.北冰洋",
      "D.地中海"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_054",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "世界表层海水盐度最低的海区是",
    "answer": "A",
    "explain": "波罗的海:高纬度蒸发弱+周围陆地淡水汇入(涅瓦河/维斯瓦河)+封闭度高,盐度只有3-10‰,世界最低。",
    "options": [
      "A.波罗的海(3-10‰)",
      "B.红海",
      "C.地中海",
      "D.加勒比海"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_055",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于影响海水温度因素叙述叙述正确的是",
    "answer": "A",
    "explain": "海水温度影响因素:①纬度(低纬高高纬低);②季节(夏高冬低,但海水调节);③深度(表层温高底部低,1000m以下几乎恒温);④洋流(暖流增温)。",
    "options": [
      "A.纬度、季节、深度、洋流",
      "B.仅纬度",
      "C.仅深度",
      "D.仅洋流"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_056",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于海洋自然灾害叙述叙述错误的是",
    "answer": "D",
    "explain": "海洋灾害:①风暴潮(台风/温带气旋+近岸浅+喇叭口);②海啸(海底地震引发);③海冰(高纬冬季);④赤潮/绿潮(污染);⑤海平面上升(变暖)。",
    "options": [
      "A.风暴潮、海啸、海冰",
      "B.气候变化",
      "C.地震引发",
      "D.无灾害"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_057",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于海啸成因叙述叙述正确的是",
    "answer": "A",
    "explain": "海啸:①海底地震+断层错动(80%以上);②海底火山喷发;③海底大规模滑坡;④小行星撞击。表现为周期长+波长长的重力波,近岸激增。",
    "options": [
      "A.海底地震+断层错动+海底火山+海底滑坡",
      "B.风暴",
      "C.洋流",
      "D.潮汐"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_058",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水污染主要污染源叙述叙述正确的是",
    "answer": "A",
    "explain": "水污染源:①工业废水(重金属/有机物);②农业面源(化肥农药);③生活污水(有机物/病原体);④畜禽养殖;⑤石油污染(海洋)。",
    "options": [
      "A.工业废水+农业面源+生活污水",
      "B.仅工业",
      "C.仅生活",
      "D.仅农业"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_059",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水体富营养化成因叙述叙述正确的是",
    "answer": "A",
    "explain": "水体富营养化:氮磷(化肥/生活污水)过量流入水体→藻类过度繁殖(如蓝藻)→水面覆盖遮光+分解耗氧→鱼虾窒息死亡。太湖+滇池+洞庭都受害。",
    "options": [
      "A.N/P过量→藻类爆发→水生动物窒息",
      "B.缺氮磷",
      "C.高盐度",
      "D.低温"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_060",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于海水淡化技术叙述叙述正确的是",
    "answer": "A",
    "explain": "海水淡化:①反渗透(用膜);②多级闪蒸(加热多次减压);③电渗析(电场分离盐);④太阳能蒸馏。为沿海缺水地区提供水源。",
    "options": [
      "A.反渗透+多级闪蒸+电渗析等",
      "B.仅反渗透",
      "C.仅蒸馏",
      "D.不可行"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_061",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于世界主要海洋牧场发展叙述叙述正确的是",
    "answer": "A",
    "explain": "海洋牧场:通过人工鱼礁、增殖放流、海藻场恢复、监控管理等,构建近海生态,发展海水养殖+休闲渔业。世界沿海国普遍推广。",
    "options": [
      "A.近海海域养殖+人工鱼礁+生态修复",
      "B.远洋捕捞",
      "C.仅淡水",
      "D.不可行"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_062",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列不属于海洋能利用的是",
    "answer": "A",
    "explain": "海洋能:潮汐能(潮汐电站)、波浪能(波浪发电装置)、温差能(表深温差)、盐差能(河海交汇)、洋流能。四选一均属。",
    "options": [
      "A.潮汐能、波浪能、温差能、盐差能",
      "B.太阳能",
      "C.风能",
      "D.地热能"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_063",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于中国海洋资源叙述叙述正确的是",
    "answer": "A",
    "explain": "中国海洋:①生物(鱼虾贝类);②矿产(石油天然气/砂矿);③能源(潮汐/波浪/温差);④空间资源(港口/围海造陆/海洋牧场);⑤海洋旅游。",
    "options": [
      "A.生物+矿产+能源+空间资源丰富",
      "B.仅生物",
      "C.仅矿产",
      "D.无资源"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_064",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于长江洪灾原因叙述叙述错误的是",
    "answer": "D",
    "explain": "长江洪灾:①流域范围广+支流多来水集中;②雨季+梅雨+台风降水量大;③中下游平原地势低泄洪不畅;④围湖造田+植被破坏+湖泊萎缩减少调蓄能力。地形非单一。",
    "options": [
      "A.流域降水多+支流汇入",
      "B.中下游平原+湖泊调蓄减少",
      "C.围湖造田+植被破坏",
      "D.地形单一"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_065",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水土流失防治措施叙述叙述错误的是",
    "answer": "C",
    "explain": "水土流失防治:①生物措施(种草种树);②工程措施(打坝淤地/梯田/护坡);③农业措施(等高耕作/合理轮作)。陡坡开垦反而加剧水土流失(退耕还林)。",
    "options": [
      "A.种草种树",
      "B.打坝淤地+梯田",
      "C.陡坡开垦",
      "D.合理耕作"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_066",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源可持续利用叙述叙述正确的是",
    "answer": "A",
    "explain": "水资源可持续:①开源(水库/调水/淡化);②节流(节水器具/污水回用);③水价+法律+意识;④保护水源地+防污染;⑤循环利用(工业中水)。",
    "options": [
      "A.开源节流并重+管理+节水+循环利用",
      "B.仅开源",
      "C.仅节流",
      "D.盲目开采"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_067",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于灌溉方式最节水的是",
    "answer": "A",
    "explain": "灌溉节水:滴灌(节水+精准)>喷灌>沟灌>畦灌>漫灌。以色列滴灌技术举世闻名,适合干旱地区+经济作物。",
    "options": [
      "A.滴灌",
      "B.漫灌",
      "C.畦灌",
      "D.沟灌"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_068",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于城市雨洪管理叙述叙述正确的是",
    "answer": "A",
    "explain": "海绵城市:①透水铺装(可渗透);②雨水花园+下沉式绿地;③屋顶绿化;④生态湿地公园;⑤雨水收集回用。改变过去'快速排干'思路。",
    "options": [
      "A.透水铺装+雨水花园+下凹式绿地",
      "B.硬化+快排",
      "C.仅明沟",
      "D.仅暗管"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_069",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国湖泊萎缩原因叙述叙述错误的是",
    "answer": "C",
    "explain": "湖泊萎缩原因:①上游用水增加入湖减少;②围湖造田直接侵占;③泥沙淤积;④蒸发大于补给。湿地保护是反向措施(反而遏止萎缩)。",
    "options": [
      "A.气候干旱+入湖水减少",
      "B.围湖造田+泥沙淤积",
      "C.湿地保护",
      "D.蒸发大"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_070",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于青海湖面积近年变化叙述叙述正确的是",
    "answer": "A",
    "explain": "青海湖:20世纪长期萎缩(气候+人为);21世纪初起因降水增多+入湖河流水量增大+生态保护,湖面持续回升。2020年代面积创近30年新高。",
    "options": [
      "A.先萎缩后回升",
      "B.持续萎缩",
      "C.持续扩大",
      "D.不变"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_071",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于洞庭湖萎缩主要原因叙述叙述正确的是",
    "answer": "A",
    "explain": "洞庭湖(曾中国第一大淡水湖):①上游长江泥沙淤积(荆江分洪+四水携沙);②清代以来大规模围湖造田。20世纪从6000km²萎缩至2600km²。",
    "options": [
      "A.泥沙淤积+围湖造田",
      "B.无原因",
      "C.气候干旱",
      "D.地下断裂"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_072",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水资源人均占有量少的国家叙述叙述正确的是",
    "answer": "A",
    "explain": "水资源人均少:干旱区(以色列/沙特/埃及/科威特);冰岛/加拿大/巴西人均多。人均资源多寡与国土/水文/人口都相关。",
    "options": [
      "A.以色列、埃及等干旱国家",
      "B.冰岛",
      "C.加拿大",
      "D.巴西"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_073",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于流水地貌塑造中最活跃的作用叙述叙述正确的是",
    "answer": "A",
    "explain": "流水:①上游侵蚀为主(V形谷/瀑布);②中游侵蚀+沉积(河曲/牛轭湖);③下游沉积为主(冲积平原/三角洲)。是最活跃的外力作用之一。",
    "options": [
      "A.流水侵蚀+搬运+沉积综合",
      "B.仅侵蚀",
      "C.仅堆积",
      "D.无变化"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_074",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流地貌与聚落关系叙述叙述正确的是",
    "answer": "A",
    "explain": "河流地貌与聚落:河谷平原、冲积扇、三角洲地势平坦水源充足土壤肥沃交通便利,是聚落和城市密集地区(如长江/黄河/尼罗河/两河流域)。",
    "options": [
      "A.河谷+冲积扇+三角洲聚落密",
      "B.远离河流",
      "C.仅山顶",
      "D.无关"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_075",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流对城市影响叙述叙述正确的是",
    "answer": "A",
    "explain": "河流对城市:①提供水源;②水运通道;③城市空间沿河展开;④景观旅游资源;⑤影响布局(城市在河流交汇+过河口+河谷平原)。",
    "options": [
      "A.供水+运输+城市空间格局+旅游",
      "B.无影响",
      "C.仅供水",
      "D.仅交通"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_076",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于沼泽形成条件叙述叙述正确的是",
    "answer": "A",
    "explain": "沼泽形成:①地势低洼排水不畅积水;②降水+径流+地下水补给充足;③纬度高或海拔高蒸发弱;④植被繁茂积累有机质。三江平原/若尔盖高原是我国主要沼泽。",
    "options": [
      "A.地势低洼+排水不畅+水源充足+植被繁茂",
      "B.地势高",
      "C.干旱",
      "D.无水"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_077",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于湿地生态功能叙述叙述错误的是",
    "answer": "D",
    "explain": "湿地功能:①净化水质(地球之肾);②调节气候+洪水(蓄洪+补给地下水);③维护生物多样性;④提供渔业+植物产品;⑤旅游教育。故'无功能'错。",
    "options": [
      "A.'地球之肾'净化水质",
      "B.调节气候",
      "C.维护生物多样性",
      "D.无功能"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_078",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于河流入海冲淡效应叙述叙述正确的是",
    "answer": "A",
    "explain": "河流入海:①稀释咸水河口盐度较低;②携带大量营养盐(氮磷);③形成盐度过渡带+高生产力海域,适宜咸淡水生物;④如长江口鳗鲡/大黄鱼产卵场。",
    "options": [
      "A.河口盐度低+营养盐多+利于养殖",
      "B.无影响",
      "C.盐度高",
      "D.不利养殖"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_079",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于地下水过度开采导致地面沉降的典型地区叙述叙述正确的是",
    "answer": "A",
    "explain": "地面沉降典型区:华北平原(累计沉降>1m)+长三角(苏锡常沉降漏斗)+日本东京(20世纪初)+泰国曼谷+墨西哥城。原因:过度开采地下水+软土压缩。",
    "options": [
      "A.华北平原+长三角+日本东京+泰国曼谷",
      "B.仅华北",
      "C.仅长三角",
      "D.仅国外"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_080",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于海水入侵叙述叙述正确的是",
    "answer": "A",
    "explain": "海水入侵:沿海地区过度开采地下水,地下水位下降到海平面以下,咸水沿含水层向内陆入侵,水质变咸,农田灌溉+饮用受影响。山东胶东半岛典型。",
    "options": [
      "A.沿海地下水过度开采+海水沿含水层入陆",
      "B.无关",
      "C.不发生",
      "D.仅海面"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_081",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于我国淡水资源短缺状况叙述叙述正确的是",
    "answer": "A",
    "explain": "我国淡水资源:①总量丰富但人均不足世界1/4;②南多北少;③污染严重(七大江河);④浪费严重(工农业+城市)。",
    "options": [
      "A.人均少+分布不均+污染+浪费",
      "B.人均富余",
      "C.分布均匀",
      "D.无污染"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_082",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于水足迹概念叙述叙述正确的是",
    "answer": "A",
    "explain": "水足迹:一个产品在其生命周期或一个人/组织在生产/消费中所耗淡水资源总量(包括蓝水/绿水/灰水)。评估水资源真实消耗+隐藏水贸易。",
    "options": [
      "A.生产商品或服务所耗淡水资源总量",
      "B.仅蒸发水",
      "C.仅雨水",
      "D.不重要"
    ],
    "local_fj": true,
    "gaokao": true
  },
  {
    "id": "geofj7_g4_083",
    "manualId": "geo_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列关于世界水日叙述叙述正确的是",
    "answer": "A",
    "explain": "3月22日世界水日(联合国1993年设立)。4.22地球日;6.5世界环境日;10.16世界粮食日。",
    "options": [
      "A.3月22日",
      "B.4月22日",
      "C.6月5日",
      "D.10月16日"
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
    if (Array.isArray(global.GEOGRAPHY_BANK)) n = _mount(global.GEOGRAPHY_BANK, GEOGRAPHY_FUJIAN_V7_P2);
    if (n) console.info(`[磐山界·地理深化 v7-P2] 已注入 +${n} 题, 总计: ${global.GEOGRAPHY_BANK.length}`);
    return n;
  }
  const r = tryMount();
  if (!r) { if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', tryMount); }
  global.GEOGRAPHY_FUJIAN_V7_P2 = { GEOGRAPHY_FUJIAN_V7_P2, mount: tryMount };

})(typeof window !== 'undefined' ? window : this);
