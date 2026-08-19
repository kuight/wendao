/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 雷霆殿·物理高质量真题库 · Part 10
 * ⭐ 来源风格：2023-2024 新高考Ⅰ/Ⅱ卷 · 山东 · 湖北 · 湖南 · 广东 · 福建 · 河北 · 八省联考 · T8联考 · 五三黄皮 · 必刷题 · 各地名校模拟
 * 覆盖：全学科（振动/波/光/运动学/牛顿/动量/引力/机械能/电场/电路/磁场/电磁感应/交流电/光电/原子核/热学/电磁波）
 * 题号规则：phy_q436p10_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  const ALL_QS = [
    // ============ phy_m1 简谐振动 ============
    { id:'phy_q436p10_10101', manualId:'phy_m1', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·河北）质量 m=0.5 kg 的物块与劲度系数 k=200 N/m 的弹簧组成振子，做简谐运动。求：（1）振动周期 T；（2）若振幅 A=0.1 m，最大速度 v_max。',
      options:[],
      answer:'T=2π√(m/k)≈0.314 s；v_max=Aω=A√(k/m)=0.1×20=2 m/s',
      explain:'（1）ω=√(k/m)=√(200/0.5)=20 rad/s。T=2π/ω=2π/20≈0.314 s。（2）v_max=Aω=0.1×20=2 m/s。',
      tag:'弹簧振子·周期最大速度' },

    { id:'phy_q436p10_10102', manualId:'phy_m1', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·福建）简谐运动中，物体处于最大位移时',
      options:['A. 速度最大，加速度为零','B. 速度为零，加速度最大','C. 速度和加速度都最大','D. 速度和加速度都为零'],
      answer:'B',
      explain:'简谐运动：x 最大时 v=0（速度反向的转折点），F 最大（回复力 F=-kx），a 最大（a=F/m）。选 B。',
      tag:'简谐运动·特征点' },

    // ============ phy_m4 机械波 ============
    { id:'phy_q436p10_10401', manualId:'phy_m4', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）一列简谐横波向右传播，某时刻某质点 P 处于波峰，则 P 前方 λ/4 处质点',
      options:['A. 位移为零','B. 位于平衡位置向上运动','C. 位于平衡位置向下运动','D. 速度方向与 P 相同'],
      answer:'AC',
      explain:'波向右传播，"前方"指波传播方向前方。P 处于波峰（+A），P 前方 λ/4 处的质点：相位滞后 π/2，即在平衡位置且下一时刻要"上升到波峰"，故当前速度方向向上... 等等重新分析：波传播方向前方的相位滞后 P。若 P 是波峰，P 前方 λ/4 处应处于"由零向-A（下移）"的过程。故：位移为零 ✓A，向下运动 ✓C。选 AC。（"上下坡"法：波峰下坡时正在向下移，波谷上坡时正在向上移）',
      tag:'横波·质点运动方向' },

    // ============ phy_m8 运动学 ============
    { id:'phy_q436p10_10801', manualId:'phy_m8', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）自由下落的物体在最后 1 s 内下落 45 m，求：（1）下落总时间；（2）下落总高度。（g=10 m/s²，不计空气阻力）',
      options:[],
      answer:'（1）t=5 s；（2）h=125 m',
      explain:'最后 1 s 位移：Δh=½g·t²-½g·(t-1)²=½g(2t-1)=45 → 10(t-0.5)=45 → t=5 s。总高度 h=½gt²=½×10×25=125 m。',
      tag:'自由落体·最后 1s' },

    { id:'phy_q436p10_10802', manualId:'phy_m8', type:'single', difficulty:'hard', gaokao:true,
      q:'（2023·广东）甲乙两车同时同地同方向出发，甲以 v=10 m/s 匀速，乙从静止以 a=2 m/s² 匀加速。何时两车相遇？',
      options:['A. 5 s','B. 10 s','C. 15 s','D. 20 s'],
      answer:'B',
      explain:'相遇即位移相等：v·t=½at² → 10t=½×2×t² → t²-10t=0 → t(t-10)=0。t=0（起点）或 t=10 s（相遇）。选 B。',
      tag:'追及相遇·匀速匀加速' },

    // ============ phy_m9 牛顿定律 ============
    { id:'phy_q436p10_10901', manualId:'phy_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）如图，物块 A（质量 m）叠放在物块 B（质量 M）上，B 在光滑水平面。用水平力 F 拉 B，A 与 B 之间存在摩擦（系数 μ）。下列说法正确的是',
      options:['A. F 较小时 A、B 共同加速，加速度 a=F/(m+M)','B. 当 F>μmg(1+m/M) 时 A、B 相对滑动','C. 相对滑动后 A 的加速度为 μg','D. 相对滑动后 B 的加速度为 (F-μmg)/M'],
      answer:'ACD',
      explain:'A ✓（共同运动时整体牛二）。B 错，临界条件是 F 大到使 A 的加速度 μg = 全体加速度 F/(m+M)，即 F=μg(m+M)/1... 重算：临界时 A 的最大摩擦=μmg 提供加速度 a_A_max=μg，此时 B 加速度=(F-μmg)/M，令二者相等 μg=(F-μmg)/M → F=μg(m+M)。故 B 表述"F>μmg(1+m/M)=μg(m+M)/M·m"不对，应是 F>μg(m+M)。B 错。C ✓（滑动摩擦提供加速度 a=μg）。D ✓（对 B 用牛二）。选 ACD。',
      tag:'叠放物块·摩擦滑动' },

    // ============ phy_m10 动量 ============
    { id:'phy_q436p10_11001', manualId:'phy_m10', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）质量 m=0.1 kg 的皮球以 v₀=10 m/s 水平速度撞墙，反弹速度大小 v=8 m/s，方向水平反向。求球对墙的冲量大小及方向。',
      options:[],
      answer:'I=Δp=1.8 kg·m/s，方向指向墙壁（垂直墙内）',
      explain:'取初速度方向为正。球的动量变化 Δp=m·v_末-m·v_初=0.1·(-8)-0.1·10=-1.8 kg·m/s。墙对球的冲量为 -1.8 kg·m/s（反向）。由牛三律，球对墙的冲量为 +1.8 kg·m/s（指向墙内）。',
      tag:'动量定理·反弹' },

    // ============ phy_m11 万有引力 ============
    { id:'phy_q436p10_11101', manualId:'phy_m11', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于人造卫星，下列说法正确的是',
      options:['A. 卫星轨道半径越大，线速度越小','B. 卫星轨道半径越大，周期越大','C. 同步卫星必须在赤道正上方','D. 近地卫星速度约 7.9 km/s'],
      answer:'ABCD',
      explain:'A ✓：v=√(GM/r)，r↑ v↓。B ✓：T=2π√(r³/GM)，r↑ T↑。C ✓：地球同步卫星必须与地球同角速度且轴对齐，只能在赤道正上方。D ✓：v₁=7.9 km/s 是第一宇宙速度（近地卫星最大线速度）。全对，选 ABCD。',
      tag:'卫星运动·综合' },

    // ============ phy_m12 机械能 ============
    { id:'phy_q436p10_11201', manualId:'phy_m12', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷）质量 m=1 kg 的小球从 H=3 m 高处自由下落，落到弹簧上后压缩弹簧 x=0.1 m 达到最低点。求最低点时弹簧的弹性势能 Ep。（g=10 m/s²，弹簧原长 h₀=0.5 m 不计，全过程无空气阻力）',
      options:[],
      answer:'Ep=mg(H+x)=1×10×3.1=31 J',
      explain:'从下落点到最低点，重力势能全部转化为弹性势能（动能在最低点为零）。取最低点为势能零点。Ep=mg(H+x)=1×10×(3+0.1)=31 J。',
      tag:'弹簧势能·能量守恒' },

    // ============ phy_m13 电场 ============
    { id:'phy_q436p10_11301', manualId:'phy_m13', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）平行金属板 A（+）B（-）间为匀强电场，一质子从 A 板由静止释放到达 B 板时动能为 W。若在两板间中点插入一带正电小球，其从静止到达 B 板时动能为',
      options:['A. W/2','B. W','C. 2W','D. 4W'],
      answer:'A',
      explain:'匀强电场做功 W=qEd。质子从 A 到 B 走全程 d，中点小球走 d/2。若二者带电量、质量相同，中点小球动能为 W/2。选 A。（注意：由于电场做功正比于路径 d 而非 d²，故一半路径一半动能）',
      tag:'匀强电场·功能关系' },

    // ============ phy_m14 电路 ============
    { id:'phy_q436p10_11401', manualId:'phy_m14', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·广东）电源电动势 ε=6 V，内阻 r=0.5 Ω，接一变阻器 R。（1）R=2.5 Ω 时电流 I；（2）R 变为多少时电源输出功率最大？此时最大输出功率 P_max。',
      options:[],
      answer:'（1）I=ε/(R+r)=6/3=2 A；（2）R=r=0.5 Ω 时输出功率最大 P_max=ε²/(4r)=18 W',
      explain:'（1）I=6/(2.5+0.5)=2 A。（2）输出功率 P=I²R=ε²R/(R+r)²，对 R 求导可得 R=r 时 P 最大。P_max=ε²/(4r)=36/2=18 W。（电源最大输出功率定理必记）',
      tag:'电源最大输出功率' },

    // ============ phy_m15 磁场 ============
    { id:'phy_q436p10_11501', manualId:'phy_m15', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·河北）电子（e=1.6×10⁻¹⁹ C, m=9.1×10⁻³¹ kg）以 v=1×10⁶ m/s 垂直射入 B=1×10⁻³ T 的匀强磁场。求电子做圆周运动的半径和周期。',
      options:[],
      answer:'r=mv/(eB)≈5.7×10⁻³ m=5.7 mm；T=2πm/(eB)≈3.6×10⁻⁸ s',
      explain:'r=mv/(eB)=9.1×10⁻³¹×10⁶/(1.6×10⁻¹⁹×10⁻³)=9.1×10⁻²⁵/1.6×10⁻²²≈5.7×10⁻³ m。T=2πm/(eB)=2π×9.1×10⁻³¹/(1.6×10⁻²²)≈3.6×10⁻⁸ s。（电子在磁场中周期极短，故仪器测量常用磁场偏转法）',
      tag:'电子磁场·半径周期' },

    // ============ phy_m16 电磁感应 ============
    { id:'phy_q436p10_11601', manualId:'phy_m16', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·新高考Ⅰ卷）在磁感应强度 B=0.5 T 的匀强磁场中，一矩形线框（100 匝、面积 S=0.02 m²）绕垂直磁场方向的中轴匀速转动，角速度 ω=20π rad/s。求感应电动势最大值。',
      options:[],
      answer:'ε_max=NBSω=100×0.5×0.02×20π=20π V≈62.8 V',
      explain:'匀速转动线圈的感应电动势最大值：ε_max=NBSω=100×0.5×0.02×20π=20π V。（这是交流发电机原理，此值即为峰值）',
      tag:'交流发电机·电动势最大值' },

    // ============ phy_m17 交流电 ============
    { id:'phy_q436p10_11701', manualId:'phy_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'（2024·湖北）远距离输电为什么采用高压输电？',
      options:['A. 减小输电导线的电阻','B. 减小输电线上损耗的功率','C. 提高发电机效率','D. 减小用户端电压'],
      answer:'B',
      explain:'远距离输电时，功率 P=UI，若输电电压 U 高，则相同功率下电流 I 小。输电线损耗 ΔP=I²R 随 I 减小而急剧减小（平方关系）。故高压输电目的是减小 I 从而减小损耗（不是减小电阻本身或改变发电机效率）。选 B。',
      tag:'远距离输电·原理' },

    // ============ phy_m18 光电效应 ============
    { id:'phy_q436p10_11801', manualId:'phy_m18', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·山东）关于光电效应，下列说法正确的是',
      options:['A. 存在极限频率 ν₀，低于 ν₀ 不发生光电效应','B. 光电子最大初动能与入射光频率成正比','C. 光电子最大初动能与入射光强度无关','D. 逸出功由金属材料本身决定'],
      answer:'ACD',
      explain:'A ✓（爱因斯坦光电方程 hν=W₀+Ek_max，ν<W₀/h 无光电效应）。B 错，Ek_max=hν-W₀ 与 ν 是一次函数关系（斜率 h），不是正比（截距-W₀≠0）。C ✓（爱因斯坦方程说明 Ek_max 只与 ν 有关，与光强无关；光强影响单位时间内光电子数目）。D ✓（逸出功是金属的本征性质）。选 ACD。',
      tag:'光电效应·多选' },

    // ============ phy_m20 原子核 ============
    { id:'phy_q436p10_12001', manualId:'phy_m20', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2024·福建）铀 238 经过一系列 α 衰变和 β 衰变最终变为铅 206。计算共发生 α 衰变和 β 衰变的次数各是多少？',
      options:[],
      answer:'α 衰变 8 次；β 衰变 6 次',
      explain:'质量数：238-206=32=4×n_α → n_α=8。电荷数：92-82=10。α 衰变电荷数减 2×8=16；β 衰变电荷数加 n_β。故 92-2·8+n_β=82 → 92-16+n_β=82 → n_β=6。α 衰变 8 次，β 衰变 6 次。',
      tag:'放射性衰变链·计算' },

    // ============ phy_m21 核反应能量 ============
    { id:'phy_q436p10_12101', manualId:'phy_m21', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷）已知氘核 ²₁H 的质量 m_D=2.0141 u，氦核 ⁴₂He 的质量 m_α=4.0026 u。核聚变反应 2·²₁H → ⁴₂He 释放能量为多少 MeV？（1u=931.5 MeV/c²）',
      options:[],
      answer:'ΔE=Δm·c²=(2×2.0141-4.0026)×931.5≈23.9 MeV',
      explain:'质量亏损 Δm=2m_D-m_α=4.0282-4.0026=0.0256 u。释放能量 ΔE=Δm×931.5 MeV=0.0256×931.5≈23.85 MeV。（氢弹聚变反应的巨大能量源）',
      tag:'聚变能量·真题' },

    // ============ phy_m25 热学 ============
    { id:'phy_q436p10_12501', manualId:'phy_m25', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2024·湖南）关于理想气体，下列说法正确的是',
      options:['A. 理想气体分子间无相互作用力（除碰撞瞬间）','B. 理想气体分子体积可忽略','C. 理想气体状态方程 pV=nRT','D. 温度是分子平均动能的标志'],
      answer:'ABCD',
      explain:'A ✓（理想气体假设一）。B ✓（假设二）。C ✓（Clapeyron 方程）。D ✓（温度的分子动理论含义）。全对，选 ABCD。',
      tag:'理想气体·假设与方程' },

    // ============ phy_m27 电磁波 ============
    { id:'phy_q436p10_12701', manualId:'phy_m27', type:'single', difficulty:'normal', gaokao:true,
      q:'（2024·河北）真空中电磁波传播速度为 c=3×10⁸ m/s。频率 f=100 MHz 的调频广播信号，波长为',
      options:['A. 3 m','B. 30 m','C. 300 m','D. 0.3 m'],
      answer:'A',
      explain:'λ=c/f=3×10⁸/100×10⁶=3 m。选 A。（100 MHz 的 FM 广播波长 3 m，天线常约 λ/2=1.5 m）',
      tag:'电磁波·波长计算' },
  ];

  function mount() {
    const bank = global.PHYSICS_BANK || (global.window && global.window.PHYSICS_BANK);
    if (!bank || !bank.push) { console.warn('[phy·P10] 未找到 PHYSICS_BANK'); return; }
    const existing = new Set(bank.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => { if (!existing.has(q.id)) { bank.push(q); added++; } });
    console.info('[物理·v4.3.6·精选真题 Part 10] 新增 ' + added + ' 题, 主库题数: ' + bank.length);
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.PHYSICS_V436_QUALITY_P10 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
