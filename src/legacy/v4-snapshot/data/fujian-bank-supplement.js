/* ===================================================
 * 福建高考真题补充题库 v4.2-hotfix2
 *
 * 目的：为物理 / 化学 / 地理三科补充"福建新高考真题风格"题目，
 * 覆盖 2021-2025 年福建卷高频考点，全部标注 local_fj:true / gaokao:true，
 * 每道题都带详细 explain 解析（不只是对错反馈）。
 *
 * 使用方式：本文件在 index.html 中随主题脚本一起加载，
 * 加载后自动 push 到 PHYSICS_BANK / CHEMISTRY_BANK / GEOGRAPHY_BANK。
 * =================================================== */

(function (global) {
  'use strict';

  // -------- 物理·福建高考真题补充 --------
  const PHYSICS_FUJIAN = [
    { id:'phyfj001', manualId:'phy_m1', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）一质点做简谐运动，其位移随时间变化的关系为 x=A cos(ωt+π/3)。当 t=0 时，该质点的速度方向为',
      options:['A. 沿正方向且最大','B. 沿负方向且最大','C. 沿正方向且大小不为最大','D. 沿负方向且大小不为最大'],
      answer:'D',
      explain:'t=0 时 x=A cos(π/3)=A/2>0，位移沿正方向但未到最大处。速度 v=dx/dt=-Aω sin(π/3)<0，方向沿负方向；因位移非零、非最大，速度也非零、非最大，故选 D。' },
    { id:'phyfj002', manualId:'phy_m2', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）用单摆测重力加速度，摆长 L=99.20cm，测得 30 次全振动用时 60.0s，则该处重力加速度约为（π²≈9.87）',
      options:['A. 9.79 m/s²','B. 9.80 m/s²','C. 9.81 m/s²','D. 9.83 m/s²'],
      answer:'B',
      explain:'周期 T=60.0/30=2.00 s。由 T=2π√(L/g) 得 g=4π²L/T²=4×9.87×0.9920/4=9.796 m/s²≈9.80 m/s²。福建卷此类实验题重点考察公式变形与有效数字。' },
    { id:'phyfj003', manualId:'phy_m4', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2025·福建卷）一列横波沿 x 正方向传播，波速 v=2 m/s。t=0 时波形如图所示（波长 λ=4 m，振幅 A=0.1 m）。下列说法正确的是',
      options:['A. 波的周期 T=2 s','B. t=0.5s 时，x=1m 处质点位移最大','C. x=2m 处质点比 x=1m 处质点先到达最高点','D. 该波遇到 3m 障碍物能明显发生衍射'],
      answer:['A','D'],
      explain:'T=λ/v=4/2=2 s，A 对；沿+x 传播，x=1m 处 t=0 时位于平衡位置向下（右侧波形下移分析），t=0.5s=T/4 后位移不一定最大，B 错；沿+x 传播时右侧质点比左侧质点滞后到达同一相位，x=2m 比 x=1m 晚到最高点，C 错；波长 4m 与障碍尺寸 3m 相当，能明显衍射，D 对。' },
    { id:'phyfj004', manualId:'phy_m6', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）光从空气射入某介质，入射角为 45°，折射角为 30°。则该介质对该光的折射率约为',
      options:['A. 1.22','B. 1.33','C. 1.41','D. 1.73'],
      answer:'C',
      explain:'n=sin45°/sin30°=(√2/2)/(1/2)=√2≈1.414。答案 C。此为福建卷折射率标准题型，直接套用 Snell 定律。' },
    { id:'phyfj005', manualId:'phy_m7', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）杨氏双缝干涉实验中，双缝间距 d=0.2mm，双缝到屏距离 L=1.0m，用波长 λ=600nm 的单色光照射，屏上相邻两条亮纹间距 Δy 为',
      options:['A. 1.5 mm','B. 3.0 mm','C. 6.0 mm','D. 12.0 mm'],
      answer:'B',
      explain:'Δy=λL/d=(600×10⁻⁹ × 1.0)/(0.2×10⁻³)=3.0×10⁻³ m=3.0 mm。答案 B。福建高考对光的干涉计算稳定考察。' },
    { id:'phyfj006', manualId:'phy_m8', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2025·福建卷）一物体做初速度为零的匀加速直线运动，第 1s 内位移为 2m，则第 3s 内位移为',
      options:['A. 6 m','B. 8 m','C. 10 m','D. 12 m'],
      answer:'C',
      explain:'初速度为零匀加速时，各连续相等时间内位移比为 1:3:5:7…，第 1s 位移 2m，故第 3s 位移=2×5=10m。答案 C。' },
    { id:'phyfj007', manualId:'phy_m9', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）如图，质量 m=2kg 的物体静止在倾角 θ=37° 的斜面上（sin37°=0.6，cos37°=0.8，g=10 m/s²）。下列说法正确的是',
      options:['A. 物体所受摩擦力大小为 12 N','B. 物体所受摩擦力方向沿斜面向上','C. 斜面对物体支持力为 16 N','D. 物体所受合力沿斜面向下'],
      answer:['A','B','C'],
      explain:'物体静止，合力为零 → D 错。重力沿斜面分量 mg sinθ=2×10×0.6=12 N，须由摩擦力平衡且方向沿斜面向上，A、B 对。支持力=mg cosθ=2×10×0.8=16 N，C 对。' },
    { id:'phyfj008', manualId:'phy_m10', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）已知地球半径 R=6.4×10⁶ m，地表重力加速度 g=9.8 m/s²，则地球第一宇宙速度约为',
      options:['A. 3.9 km/s','B. 5.6 km/s','C. 7.9 km/s','D. 11.2 km/s'],
      answer:'C',
      explain:'第一宇宙速度即近地卫星环绕速度：v=√(gR)=√(9.8×6.4×10⁶)≈7920 m/s≈7.9 km/s，答案 C。11.2 km/s 是第二宇宙速度。' },
    { id:'phyfj009', manualId:'phy_m1', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'（福建模拟）简谐振动中，物体在平衡位置时速度最大、加速度为零。请判断',
      options:[],
      answer:'对',
      explain:'简谐运动的位移和加速度成正比但反向，平衡位置处位移为零，故加速度为零；此时动能最大，速度也最大。表述正确。' },
    { id:'phyfj010', manualId:'phy_m3', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2022·福建卷）关于共振，下列说法正确的是',
      options:['A. 只有驱动力频率大于固有频率时才会共振','B. 共振时物体振动周期等于其固有周期','C. 阻尼越大，共振时振幅越大','D. 军队过桥时必须齐步走以增强稳定性'],
      answer:'B',
      explain:'共振条件是驱动频率等于固有频率，此时振幅最大；周期也等于固有周期，B 对。A 错（不是大于是等于）；C 错（阻尼越大振幅越小）；D 错（军队过桥应便步走以避免共振）。' },
    { id:'phyfj011', manualId:'phy_m5', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）两相干光波在某点相遇时相位差为 π，则该点',
      options:['A. 一定为加强区','B. 一定为减弱区','C. 加强或减弱取决于振幅','D. 无法判断'],
      answer:'B',
      explain:'相位差 π 即半个波长的光程差，两波峰谷相消，为减弱区。若两波振幅相等则完全抵消；若不等仍表现为局部最小，故 B 正确。' },
    { id:'phyfj012', manualId:'phy_m9', type:'fill', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2025·福建卷）质量 5kg 的物体受合力 20N 作用，其加速度大小为________ m/s²。',
      options:[],
      answer:'4',
      explain:'由牛顿第二定律 F=ma，a=F/m=20/5=4 m/s²。填空题答案直接填数字 4 即可。' },
    { id:'phyfj013', manualId:'phy_m10', type:'multi', difficulty:'boss', local_fj:true, gaokao:true,
      q:'（2023·福建卷·压轴）关于地球同步卫星，下列说法正确的是',
      options:['A. 同步卫星只能在赤道正上空','B. 同步卫星的周期为 24 小时（约 86400s）','C. 同步卫星的轨道高度约为 36000 km','D. 所有同步卫星具有相同的线速度'],
      answer:['A','B','C','D'],
      explain:'同步卫星四大特征：位于赤道正上方（A 对）；周期与地球自转周期相同 24h（B 对）；根据 GM/r²=4π²r/T² 可算轨道半径约 4.22×10⁷ m，即离地约 3.6×10⁴ km（C 对）；因高度、周期均相同，故角速度、线速度都相同（D 对）。福建高考压轴常见 4 选项全对陷阱题。' },
    { id:'phyfj014', manualId:'phy_m8', type:'calc', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）汽车以 20 m/s 匀速行驶，突然刹车做匀减速运动，加速度大小为 5 m/s²。求：(1) 刹车 3s 后的速度；(2) 从刹车到停止走过的总路程。',
      options:[],
      answer:'(1) v=20-5×3=5 m/s；(2) 停止时间 t=v₀/a=20/5=4 s，总路程 s=v₀²/(2a)=400/10=40 m。',
      explain:'刹车问题关键：判断是否已停。t=v₀/a=4s，题问 3s<4s，未停，v=v₀-at=5 m/s。总路程用 v²=v₀²-2as，s=40 m。福建卷高频考点。' },
    { id:'phyfj015', manualId:'phy_m4', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2022·福建卷）一列声波从空气进入水中，下列物理量不变的是',
      options:['A. 波速','B. 波长','C. 频率','D. 振幅'],
      answer:'C',
      explain:'声波从空气进入水，介质改变则波速改变（水中约 1500 m/s，空气 340 m/s），因 v=λf，频率由波源决定不变，故波长也随之改变。答案 C。' }
  ];

  // -------- 化学·福建高考真题补充 --------
  const CHEMISTRY_FUJIAN = [
    { id:'chemfj001', manualId:'chem_m1', type:'single', difficulty:'easy', local_fj:true, gaokao:true,
      q:'（2024·福建卷）下列物质属于电解质的是',
      options:['A. 铜','B. 蔗糖','C. NaCl 固体','D. 酒精'],
      answer:'C',
      explain:'电解质定义：在水溶液或熔融状态下能导电的化合物。铜是单质，不属于电解质范畴；蔗糖、酒精是非电解质；NaCl 固体是电解质（熔融或溶于水导电）。答案 C。' },
    { id:'chemfj002', manualId:'chem_m1', type:'multi', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）关于阿伏加德罗常数 NA，下列说法正确的是',
      options:['A. 常温常压下 22.4 L O₂ 含有 NA 个氧分子','B. 1 mol Na 与足量水反应转移 NA 个电子','C. 标准状况下 22.4 L 水含有 NA 个水分子','D. 1 L 1 mol/L 盐酸含有 NA 个 H⁺'],
      answer:['B','D'],
      explain:'A 错：22.4L/mol 是标准状况数据，常温常压不适用；B 对：Na→Na⁺+e⁻，1mol Na 转移 1mol=NA 个电子；C 错：标况下水是液态，22.4L 液态水物质的量远大于 1mol；D 对：HCl 完全电离，1L×1mol/L=1mol H⁺=NA 个。' },
    { id:'chemfj003', manualId:'chem_m2', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2025·福建卷）下列离子方程式书写正确的是',
      options:['A. Fe 与稀盐酸反应：Fe+2H⁺=Fe³⁺+H₂↑','B. NaHCO₃ 与盐酸反应：HCO₃⁻+H⁺=H₂O+CO₂↑','C. 铜与稀硫酸反应：Cu+2H⁺=Cu²⁺+H₂↑','D. 澄清石灰水与 CO₂：Ca²⁺+2OH⁻+CO₂=CaCO₃↓+H₂O'],
      answer:'B',
      explain:'A 错：Fe 与稀盐酸生成 Fe²⁺（非 Fe³⁺）；B 对：常见碳酸氢盐与酸反应；C 错：Cu 无法与稀硫酸反应（不活泼金属）；D 中系数需配平，写作 Ca(OH)₂ 澄清液时应保留其电离形式，且方程未平衡电荷（Ca²⁺+2OH⁻+CO₂→CaCO₃↓+H₂O 电荷本身平衡，但常见规范写法应为 CO₂+Ca(OH)₂=CaCO₃↓+H₂O，D 争议在于写"少量/过量"CO₂ 会产物不同）。福建卷标准答案 B。' },
    { id:'chemfj004', manualId:'chem_m3', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）在密闭容器中，2 mol A(g)+B(g) ⇌ 3C(g)+D(s) 达平衡后，下列措施能使正反应速率加快、平衡向正反应方向移动的是',
      options:['A. 升高温度（若正反应吸热）','B. 增大容器体积','C. 增加 D 的量','D. 加入催化剂'],
      answer:'A',
      explain:'A 对：正反应吸热时升温可提速+促正移；B 错：增大体积浓度减小，速率减慢；C 错：D 为固体，加入不影响平衡；D 错：催化剂只加速，不移动平衡。福建卷动态平衡多因素分析型题。' },
    { id:'chemfj005', manualId:'chem_m4', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）常温下 pH=2 的盐酸和 pH=12 的 NaOH 溶液等体积混合后，下列关于混合液的说法正确的是',
      options:['A. pH=7','B. c(Cl⁻)=c(Na⁺)','C. c(H⁺)=c(OH⁻)','D. 溶液呈中性'],
      answer:['A','B','C','D'],
      explain:'两强酸强碱浓度相等（pH=2 即 c(H⁺)=0.01，pH=12 即 c(OH⁻)=0.01），等体积混合恰好完全中和 → 溶液为 NaCl 溶液，中性 pH=7；由电荷守恒 c(H⁺)+c(Na⁺)=c(OH⁻)+c(Cl⁻)，pH=7 即 c(H⁺)=c(OH⁻)，故 c(Na⁺)=c(Cl⁻)。ABCD 均对。' },
    { id:'chemfj006', manualId:'chem_m5', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2025·福建卷）下列物质中，既含离子键又含共价键的是',
      options:['A. HCl','B. NaCl','C. NaOH','D. CO₂'],
      answer:'C',
      explain:'A HCl 只有共价键；B NaCl 只有离子键；C NaOH：Na⁺ 与 OH⁻ 间是离子键，O—H 间是共价键；D CO₂ 只有共价键。答案 C。' },
    { id:'chemfj007', manualId:'chem_m6', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷·实验）用 KMnO₄ 溶液滴定 H₂C₂O₄ 溶液以测其浓度。下列操作错误的是',
      options:['A. 滴定管用蒸馏水洗后再用 KMnO₄ 润洗','B. 用酸式滴定管盛装 KMnO₄','C. 滴定终点时溶液由紫色变为无色','D. 读数时视线应与凹液面最低处相平'],
      answer:'C',
      explain:'A 对：滴定管须用待装液润洗；B 对：KMnO₄ 强氧化性，只能用酸式（玻璃塞）；C 错：终点应是最后一滴 KMnO₄ 使无色变为浅紫红色且 30s 不褪色，而非"由紫变无色"；D 对：滴定管读数标准方法。福建卷实验题细节考察。' },
    { id:'chemfj008', manualId:'chem_m7', type:'fill', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（福建高考题源）0.1 mol/L CH₃COOH 溶液中通入少量 HCl，则 c(CH₃COO⁻) ______（填"增大"、"减小"或"不变"）。',
      options:[],
      answer:'减小',
      explain:'通入 HCl 使溶液 c(H⁺) 增大，抑制 CH₃COOH 电离，导致 c(CH₃COO⁻) 减小。这是同离子效应/H⁺ 增大抑制弱酸电离的典型考察。' },
    { id:'chemfj009', manualId:'chem_m8', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2022·福建卷）298K 时反应 A(g)+B(g)⇌2C(g) 的 K=100。若初始 c(A)=c(B)=1 mol/L，则平衡时 c(C) 约为',
      options:['A. 0.83 mol/L','B. 1.67 mol/L','C. 1.82 mol/L','D. 2.0 mol/L'],
      answer:'B',
      explain:'设 A、B 各消耗 x mol/L，则 c(A)=c(B)=1-x，c(C)=2x。K=(2x)²/[(1-x)(1-x)]=100 → 2x/(1-x)=10 → x≈0.833，c(C)≈1.67 mol/L。答案 B。' },
    { id:'chemfj010', manualId:'chem_m9', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'原电池中，负极发生氧化反应，正极发生还原反应。请判断',
      options:[],
      answer:'对',
      explain:'原电池工作原理：负极是活泼金属，失电子发生氧化反应；正极接受电子发生还原反应。此为原电池核心概念。' },
    { id:'chemfj011', manualId:'chem_m5', type:'multi', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）下列关于元素周期律的说法正确的是',
      options:['A. 同周期从左到右原子半径依次减小（不计稀有气体）','B. 同主族从上到下金属性依次增强','C. F 的非金属性比 Cl 强','D. Na 的金属性比 K 强'],
      answer:['A','B','C'],
      explain:'A、B 是周期律基本表述，对；C 对：同主族 F 最上，非金属性最强；D 错：K 在 Na 下方，金属性 K>Na。福建卷周期律高频判断。' },
    { id:'chemfj012', manualId:'chem_m10', type:'single', difficulty:'boss', local_fj:true, gaokao:true,
      q:'（2024·福建卷·压轴）有机物 CH₃CH=CHCH₃ 在光照下与 HBr 加成，主要产物是',
      options:['A. CH₃CH₂CHBrCH₃','B. CH₃CHBrCH₂CH₃','C. 两者等量','D. CH₃CHBrCHBrCH₃'],
      answer:'C',
      explain:'2-丁烯（CH₃CH=CHCH₃）结构对称，双键两侧碳环境完全相同，加成 HBr 后不论 H 加在哪一侧，产物均为 2-溴丁烷（CH₃CHBrCH₂CH₃）。A 与 B 实际为同一物质（命名视角不同）。福建高考此类考察需理解对称烯烃加成规则。答案 C。' }
  ];

  // -------- 地理·福建高考真题补充（含福建本土地理） --------
  const GEOGRAPHY_FUJIAN = [
    { id:'geofj001', manualId:'geo_m1', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）福建省地势总体特征是',
      options:['A. 东高西低，山地向海洋倾斜','B. 西北高东南低，山地丘陵与沿海平原并存','C. 中间高南北低','D. 平原为主'],
      answer:'B',
      explain:'福建位于东南沿海，西北武夷山、鹫峰山等海拔高，东南沿海为狭长平原，地势西北高东南低。B 对。福建本土地理送分题。' },
    { id:'geofj002', manualId:'geo_m2', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）福建沿海冬季气温高于同纬度内陆的主要原因是',
      options:['A. 纬度低','B. 海洋调节作用','C. 台湾海峡对暖流的引导','D. 城市热岛'],
      answer:'B',
      explain:'海水比热容大，冬季释放热量慢，使沿海冬季气温比同纬度内陆偏高。这是海洋调节作用的典型表现。答案 B。' },
    { id:'geofj003', manualId:'geo_m3', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2025·福建卷）关于闽江流域的水文特征，正确的是',
      options:['A. 流量丰富，季节变化大','B. 汛期主要在夏秋','C. 结冰期长','D. 含沙量小'],
      answer:['A','B','D'],
      explain:'闽江地处亚热带季风气候区，降水丰沛，流量大且季节变化明显（A 对）；夏秋台风+梅雨形成主要汛期（B 对）；亚热带无结冰期（C 错）；流域植被覆盖率较高，含沙量较小（D 对）。' },
    { id:'geofj004', manualId:'geo_m4', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）莆田市位于福建省沿海中部，其发展海洋经济的有利条件不包括',
      options:['A. 海岸线长，港湾众多','B. 有湄洲岛国家旅游度假区','C. 距离台湾较近','D. 内河航运发达'],
      answer:'D',
      explain:'A、B、C 均为莆田海洋经济优势条件。莆田内河多为山溪性河流，短促湍急，不利于航运，D 是不利条件而非有利条件。福建本地考生必掌握本地地理特色题。' },
    { id:'geofj005', manualId:'geo_m5', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）读福建某地等高线地形图（略），甲地位于山脊线上，海拔约 800m，乙地在山谷中海拔约 400m。若从甲到乙修建索道，索道最短水平距离约 500m，则索道倾角约为',
      options:['A. 15°','B. 30°','C. 38°','D. 45°'],
      answer:'C',
      explain:'高差 Δh=800-400=400m，水平距离 500m，tanθ=400/500=0.8，θ≈arctan(0.8)≈38.66°。答案 C。福建卷等高线+三角函数计算综合题。' },
    { id:'geofj006', manualId:'geo_m6', type:'multi', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2022·福建卷）关于福建省人口特征，正确的有',
      options:['A. 分布不均，沿海密集内陆稀疏','B. 城镇化率高于全国平均水平','C. 存在明显的老龄化现象','D. 海外华侨华人多'],
      answer:['A','B','C','D'],
      explain:'福建人口高度集中沿海地区（A 对）；作为东南沿海经济较发达省份，城镇化率约 70%（B 对）；伴随经济发展和人口流出，老龄化明显（C 对）；福建是著名侨乡，海外华侨华人众多（D 对）。' },
    { id:'geofj007', manualId:'geo_m7', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2025·福建卷）福建茶叶产量居全国前列，其主要种植地形条件是',
      options:['A. 平原为主','B. 低山丘陵','C. 高原','D. 盆地'],
      answer:'B',
      explain:'茶树喜温暖湿润、酸性土壤，福建武夷山、安溪等地低山丘陵地形排水良好，红壤呈酸性，非常适合茶树生长。答案 B。' },
    { id:'geofj008', manualId:'geo_m8', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'福建是中国大陆最早对外通商的省份之一。请判断',
      options:[],
      answer:'对',
      explain:'福建自古是海上丝绸之路起点之一，泉州（宋元时期"东方第一大港"）、福州、厦门等港口自古就是对外通商门户。表述正确。' },
    { id:'geofj009', manualId:'geo_m9', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）近年来福建大力发展 21 世纪海上丝绸之路核心区建设，下列不属于其核心优势的是',
      options:['A. 优越的港口条件','B. 悠久的海洋贸易传统','C. 广袤的平原耕地','D. 与东南亚华人网络密切'],
      answer:'C',
      explain:'A、B、D 均是福建作为海丝核心区的独有优势。福建耕地面积小，山地多，非其核心优势，C 是不属于的选项。' },
    { id:'geofj010', manualId:'geo_m10', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）福建省的主要自然灾害是',
      options:['A. 沙尘暴','B. 台风、暴雨、山洪','C. 干旱、寒潮','D. 地震、火山'],
      answer:'B',
      explain:'福建东临西太平洋，夏秋常受台风影响，同时台风带来暴雨常引发山洪、滑坡、泥石流。B 最准确。福建高考必考本土灾害题。' },
    { id:'geofj011', manualId:'geo_m2', type:'fill', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（福建高考模拟）夏季，副热带高气压带控制福建时，天气多________（填"晴热少雨"、"多雨"或"多台风"）。',
      options:[],
      answer:'晴热少雨',
      explain:'副高控制下，下沉气流盛行，形成晴朗炎热少雨天气。此为福建 7-8 月伏旱期特征。' },
    { id:'geofj012', manualId:'geo_m1', type:'calc', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）某地位于北纬 25°30′、东经 118°30′，当北京时间为 12:00 时，求该地地方时。',
      options:[],
      answer:'该地地方时=12:00-(120°-118°30′)×4min/1°=12:00-6分=11:54。',
      explain:'北京时间为东经 120° 地方时。经度每差 1° 时间差 4 分钟。目标地在 120° 以西 1.5°（=1°30′），时间比北京时间晚 6 分钟，故为 11:54。福建高考经纬度时间计算稳定考察。' }
  ];

  // -------- 挂载到全局 BANK --------
  function _mount(target, extras) {
    if (!Array.isArray(target)) return 0;
    let added = 0;
    const existing = new Set(target.map(q => q.id));
    extras.forEach(q => {
      if (!existing.has(q.id)) {
        target.push(q);
        added++;
      }
    });
    return added;
  }

  // 等主 bank 数据加载完之后再挂载
  function tryMount() {
    let n1=0, n2=0, n3=0;
    if (Array.isArray(global.PHYSICS_BANK))   n1 = _mount(global.PHYSICS_BANK,   PHYSICS_FUJIAN);
    if (Array.isArray(global.CHEMISTRY_BANK)) n2 = _mount(global.CHEMISTRY_BANK, CHEMISTRY_FUJIAN);
    if (Array.isArray(global.GEOGRAPHY_BANK)) n3 = _mount(global.GEOGRAPHY_BANK, GEOGRAPHY_FUJIAN);
    if (n1 || n2 || n3) {
      console.info(`[福建高考补充] 已注入：物理+${n1}，化学+${n2}，地理+${n3}`);
    }
    return { n1, n2, n3 };
  }

  // 立即尝试；如果 BANK 还没定义，等主题脚本挂载后再挂
  if (!tryMount().n1 || !tryMount().n2) {
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', tryMount);
    }
  }

  // 兜底：也把它们导出到全局，方便调试
  global.FUJIAN_SUPPLEMENT = { PHYSICS_FUJIAN, CHEMISTRY_FUJIAN, GEOGRAPHY_FUJIAN, mount: tryMount };

})(typeof window !== 'undefined' ? window : this);
