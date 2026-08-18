/* ===================================================
 * 福建高考真题·超级扩充包 v4.2.6-v3
 *
 * 独立于 v1、v2，可与它们并存
 * 覆盖：福建新高考 2019-2025 高频真题 + 全国卷模拟 + 高频错题
 *
 * 新增总量：≈ 90 道（物30 + 化30 + 地30）
 * 侧重：高二选择性必修 + 高一必修 综合难题
 *
 * 所有题带 explain 讲解，标注 local_fj:true / gaokao:true
 * =================================================== */
(function (global) {
  'use strict';

  // ================================================================
  // 一、物理·超级扩充（30 题）——选必一/二/三 + 必修综合
  // ================================================================
  const PHYSICS_FUJIAN_V3 = [
    // ---- 动量与能量（选必一）10 ----
    { id:'phyfj3_001', manualId:'phy_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）质量为2kg的物体以3m/s向东运动，与质量4kg的静止物体发生正碰后合为一体，共同速度为',
      options:['A. 1 m/s 向东','B. 1.5 m/s 向东','C. 2 m/s 向东','D. 0.5 m/s 向东'],
      answer:'A',
      explain:'完全非弹性碰撞，动量守恒：2×3 + 4×0 = (2+4)v，解得 v=1m/s，方向向东。'
    },
    { id:'phyfj3_002', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'两小球A(1kg,4m/s)与B(2kg,静止)在光滑水平面上发生弹性正碰后，B的速度为',
      options:['A. 8/3 m/s','B. 4/3 m/s','C. 2 m/s','D. 4 m/s'],
      answer:'A',
      explain:'弹性碰撞公式：v_B = 2m_A·v_A/(m_A+m_B) = 2×1×4/3 = 8/3 m/s。'
    },
    { id:'phyfj3_003', manualId:'phy_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'关于动量的说法正确的是',
      options:['A. 动量方向与速度方向相反','B. 动量变化率等于合外力','C. 动量守恒即合外力做功为零','D. 动量是标量'],
      answer:'B',
      explain:'牛顿第二定律另一形式 F=dp/dt，即动量变化率等于合外力。动量是矢量，方向与速度相同。'
    },
    { id:'phyfj3_004', manualId:'phy_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'火箭喷气推进的原理是',
      options:['A. 火箭对空气的反作用力','B. 动量守恒定律','C. 能量守恒定律','D. 万有引力'],
      answer:'B',
      explain:'火箭在真空中也能加速，与空气无关。喷出气体获得动量，火箭获得反向动量，遵守动量守恒。'
    },
    { id:'phyfj3_005', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'子弹射入木块并停留其中的过程，下列说法正确的是',
      options:['A. 系统动量守恒，机械能守恒','B. 系统动量守恒，机械能不守恒','C. 都不守恒','D. 只有机械能守恒'],
      answer:'B',
      explain:'水平方向合外力为零→动量守恒；子弹和木块间摩擦生热→机械能减少，不守恒。这是完全非弹性碰撞的典型情形。'
    },
    { id:'phyfj3_006', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷改）质量M=3kg的小车静止在光滑水平面上，质量m=1kg的人从车左端走到右端，若人相对地面位移为0.6m，则车相对地面位移为',
      options:['A. 0.2m 向左','B. 0.3m 向左','C. 0.2m 向右','D. 0.4m 向左'],
      answer:'A',
      explain:'系统初动量为零，人+车动量守恒：mv_人 + Mv_车 = 0，位移之比：s_人/s_车 = M/m = 3。人向右0.6m→车向左0.2m。'
    },
    { id:'phyfj3_007', manualId:'phy_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'冲量的单位与下列哪个量的单位相同',
      options:['A. 力','B. 功','C. 动量','D. 能量'],
      answer:'C',
      explain:'冲量 I=Ft，单位 N·s；动量 p=mv，单位 kg·m/s。由 F=ma 知 N=kg·m/s²，所以 N·s=kg·m/s，两者单位相同。这也印证了动量定理 I=Δp。'
    },
    { id:'phyfj3_008', manualId:'phy_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'一物体在光滑水平面上受水平恒力F=5N作用，作用时间2s后速度为10m/s，则物体质量为',
      options:['A. 0.5 kg','B. 1 kg','C. 2 kg','D. 4 kg'],
      answer:'B',
      explain:'动量定理：Ft=mv-0，5×2=m×10，m=1kg。'
    },
    { id:'phyfj3_009', manualId:'phy_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'两滑块质量分别为m和2m，在光滑水平面上以相等速率v相向运动，碰后粘在一起，则损失的动能为',
      options:['A. mv²/6','B. mv²/3','C. 2mv²/3','D. 4mv²/3'],
      answer:'D',
      explain:'初动量 p=2m·v - m·v = mv（取2m方向为正），共速 v\'=mv/(3m)=v/3。初动能=mv²/2+2m·v²/2=3mv²/2，末动能=3m·(v/3)²/2=mv²/6，损失=3mv²/2-mv²/6=8mv²/6=4mv²/3。'
    },
    { id:'phyfj3_010', manualId:'phy_m11', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于碰撞，下列判断正确的是',
      options:['A. 弹性碰撞动量守恒且动能守恒','B. 非弹性碰撞动量不守恒','C. 完全非弹性碰撞动能损失最大','D. 一切碰撞都遵守动量守恒'],
      answer:'ACD',
      explain:'A对：弹性碰撞两大守恒；C对：完全非弹性碰撞末速度共同，动能损失最大；D对：碰撞时间极短、内力远大于外力，动量守恒。B错：非弹性碰撞动量仍守恒，只是动能不守恒。'
    },

    // ---- 电磁学（选必二）10 ----
    { id:'phyfj3_011', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'安培力方向的判断使用',
      options:['A. 左手定则','B. 右手定则','C. 右手螺旋定则','D. 楞次定律'],
      answer:'A',
      explain:'左手定则：四指指向电流方向，磁感线穿过手心，拇指指向安培力方向。右手定则用于洛伦兹力对负电荷或电磁感应中的感应电流方向。'
    },
    { id:'phyfj3_012', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'一长直导线通1A电流，距离0.1m处产生的磁感应强度约为（μ₀=4π×10⁻⁷ T·m/A）',
      options:['A. 2×10⁻⁶ T','B. 2×10⁻⁵ T','C. 4×10⁻⁶ T','D. 4×10⁻⁵ T'],
      answer:'A',
      explain:'B=μ₀I/(2πr)=4π×10⁻⁷×1/(2π×0.1)=2×10⁻⁶ T。'
    },
    { id:'phyfj3_013', manualId:'phy_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'带正电粒子以速度v垂直进入磁感应强度为B的匀强磁场，做半径为r的圆周运动，其比荷q/m为',
      options:['A. v/(Br)','B. Br/v','C. vB/r','D. r/(vB)'],
      answer:'A',
      explain:'洛伦兹力提供向心力：qvB=mv²/r，故 q/m = v/(Br)。'
    },
    { id:'phyfj3_014', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2022·福建卷）关于电磁感应，下列说法错误的是',
      options:['A. 感应电流产生的磁通量总是阻碍原磁通量的变化','B. 楞次定律是能量守恒的体现','C. 磁通量变化必产生感应电动势','D. 只要有磁通量就有感应电流'],
      answer:'D',
      explain:'磁通量恒定不变时，即使数值很大也没有感应电流。产生感应电流的关键是磁通量"变化"。'
    },
    { id:'phyfj3_015', manualId:'phy_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'长L=0.5m的导线在B=0.2T的匀强磁场中以v=2m/s切割磁感线（三者两两垂直），感应电动势为',
      options:['A. 0.1V','B. 0.2V','C. 0.5V','D. 1V'],
      answer:'B',
      explain:'ε=BLv=0.2×0.5×2=0.2V。'
    },
    { id:'phyfj3_016', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'变压器原副线圈匝数比为10:1，原线圈接220V交流电，副线圈电压为',
      options:['A. 2200V','B. 220V','C. 22V','D. 11V'],
      answer:'C',
      explain:'理想变压器 U₁/U₂=N₁/N₂=10/1，U₂=220/10=22V。'
    },
    { id:'phyfj3_017', manualId:'phy_m12', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于交变电流，下列说法正确的是',
      options:['A. 交流电有效值指与直流电产生相同热效应的值','B. 交流电有效值=峰值/√2（正弦交流电）','C. 电表读数为有效值','D. 峰值即为电压表读数'],
      answer:'ABC',
      explain:'D错：电压表指针指示的是有效值(RMS)，不是峰值。正弦交流电：U_rms=U_max/√2。'
    },
    { id:'phyfj3_018', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'远距离输电采用高压的原因是',
      options:['A. 减小输电线上的电流以减小热损耗','B. 增大输电功率','C. 减小输电线电阻','D. 提高发电效率'],
      answer:'A',
      explain:'P_损=I²R，输送功率P=UI不变时，U↑则I↓，热损耗P_损↓。因此升压是"降流减损"的手段。'
    },
    { id:'phyfj3_019', manualId:'phy_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'电磁波在真空中传播速度为',
      options:['A. 3×10⁸ m/s','B. 与频率有关','C. 与介质有关','D. 声速'],
      answer:'A',
      explain:'一切电磁波（可见光、X射线、无线电波...）在真空中传播速度都是 c=3×10⁸ m/s。'
    },
    { id:'phyfj3_020', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'LC振荡电路的振荡周期公式为',
      options:['A. T=2π√(LC)','B. T=2π/√(LC)','C. T=1/(2πLC)','D. T=√(L/C)'],
      answer:'A',
      explain:'汤姆孙公式 T=2π√(LC)。L↑或C↑均使周期变长，谐振频率降低。'
    },

    // ---- 光学与近代物理（选必三 + 必修综合）10 ----
    { id:'phyfj3_021', manualId:'phy_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'光的干涉现象说明光具有',
      options:['A. 粒子性','B. 波动性','C. 直线传播','D. 反射性'],
      answer:'B',
      explain:'干涉、衍射、偏振都是波动性的典型证据。光电效应、康普顿散射则体现粒子性。'
    },
    { id:'phyfj3_022', manualId:'phy_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'光从空气斜射入水中，下列变化正确的是',
      options:['A. 波长变短，频率不变','B. 波长变长，频率变小','C. 波长不变，频率变小','D. 波长和频率都不变'],
      answer:'A',
      explain:'频率由光源决定，在不同介质中不变。速度v变小，由 λ=v/f 知波长变短。'
    },
    { id:'phyfj3_023', manualId:'phy_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）双缝干涉实验中，若将双缝间距变小，则条纹间距',
      options:['A. 变大','B. 变小','C. 不变','D. 无法确定'],
      answer:'A',
      explain:'条纹间距 Δy=λL/d，d减小则Δy增大。这是杨氏双缝实验的核心公式。'
    },
    { id:'phyfj3_024', manualId:'phy_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'光电效应实验中，入射光频率大于金属截止频率时，光电子最大初动能',
      options:['A. 与光强成正比','B. 与光频率成正比','C. 与光强成反比','D. 与入射光时间成正比'],
      answer:'B',
      explain:'爱因斯坦光电方程 E_k=hν-W₀。E_k与ν(频率)线性相关，与光强无关（光强只决定光电子数目多少）。'
    },
    { id:'phyfj3_025', manualId:'phy_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'德布罗意波长公式为',
      options:['A. λ=h/p','B. λ=hp','C. λ=hv','D. λ=E/h'],
      answer:'A',
      explain:'德布罗意物质波：λ=h/p，其中h为普朗克常数，p为动量。粒子动量越大，波长越短，波动性越弱。'
    },
    { id:'phyfj3_026', manualId:'phy_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'氢原子从n=3能级跃迁到n=2能级，辐射光子的能量为（已知E_n=-13.6/n² eV）',
      options:['A. 1.51 eV','B. 1.89 eV','C. 10.2 eV','D. 12.09 eV'],
      answer:'B',
      explain:'E₃=-1.51eV, E₂=-3.4eV, ΔE=E₃-E₂=-1.51-(-3.4)=1.89eV。'
    },
    { id:'phyfj3_027', manualId:'phy_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'核反应²³⁵U + ¹n → ¹⁴¹Ba + ⁹²Kr + 3¹n 属于',
      options:['A. α衰变','B. β衰变','C. 重核裂变','D. 轻核聚变'],
      answer:'C',
      explain:'重核U-235吸收中子后分裂成较轻的Ba和Kr并释放3个中子，是典型的裂变反应，核电站的能量来源。'
    },
    { id:'phyfj3_028', manualId:'phy_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'α粒子的组成是',
      options:['A. 1个电子','B. 2个质子2个中子（氦核）','C. 1个质子','D. 电磁波'],
      answer:'B',
      explain:'α粒子=氦-4核（⁴₂He），2质子+2中子。β粒子是电子，γ射线是电磁波。'
    },
    { id:'phyfj3_029', manualId:'phy_m13', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于原子核，下列说法正确的是',
      options:['A. 半衰期与温度、压强无关','B. 核力是短程强相互作用','C. 质子数决定元素种类','D. 中子数决定元素化学性质'],
      answer:'ABC',
      explain:'D错：元素化学性质由核外电子数决定，即质子数（原子序数）决定。中子数不同则是同位素，化学性质基本相同。'
    },
    { id:'phyfj3_030', manualId:'phy_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'某放射性元素半衰期为10天，100g经过30天后剩余',
      options:['A. 50g','B. 25g','C. 12.5g','D. 6.25g'],
      answer:'C',
      explain:'30天=3个半衰期，剩余 100×(1/2)³=12.5g。半衰期是统计规律，对大量原子核成立。'
    }
  ];

  // ================================================================
  // 二、化学·超级扩充（30 题）
  // ================================================================
  const CHEMISTRY_FUJIAN_V3 = [
    // ---- 化学反应原理（选必一）10 ----
    { id:'chmfj3_001', manualId:'chm_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）下列反应属于放热反应的是',
      options:['A. 灼热的碳与二氧化碳反应','B. Ba(OH)₂·8H₂O与NH₄Cl反应','C. 燃烧反应','D. 电解水'],
      answer:'C',
      explain:'常见放热反应：燃烧、中和、大多数化合反应、金属与酸。吸热反应：C+CO₂、Ba(OH)₂·8H₂O+NH₄Cl、大多数分解、电解。'
    },
    { id:'chmfj3_002', manualId:'chm_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'已知H₂燃烧生成液态水ΔH=-285.8 kJ/mol，则2mol H₂完全燃烧生成气态水（气态水ΔH_气化=44 kJ/mol）',
      options:['A. -571.6 kJ','B. -483.6 kJ','C. -527.6 kJ','D. -615.6 kJ'],
      answer:'B',
      explain:'2mol H₂生成2mol 液态水：ΔH₁=2×(-285.8)=-571.6kJ；液态水汽化2mol：ΔH₂=2×44=+88kJ；总ΔH=-571.6+88=-483.6 kJ。'
    },
    { id:'chmfj3_003', manualId:'chm_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'反应速率的表示方法中，正确的是',
      options:['A. 单位时间内浓度变化','B. 单位时间内物质的量变化','C. 用固体或纯液体表示速率','D. 各物质速率数值总相等'],
      answer:'A',
      explain:'v=Δc/Δt，用浓度变化表示。固体和纯液体浓度视为常数，不用它们表示速率。各物质速率之比等于化学计量数之比，不一定相等。'
    },
    { id:'chmfj3_004', manualId:'chm_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'在密闭容器中N₂+3H₂⇌2NH₃达到平衡后，压缩体积，下列说法正确的是',
      options:['A. 正反应速率不变','B. 平衡逆向移动','C. 平衡正向移动','D. NH₃浓度减小'],
      answer:'C',
      explain:'加压→浓度增大→正逆速率都增大。正反应气体分子数减少（4→2），加压后平衡正向移动，NH₃浓度增大。'
    },
    { id:'chmfj3_005', manualId:'chm_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）关于化学平衡常数K，下列说法错误的是',
      options:['A. K只与温度有关','B. K越大反应进行越彻底','C. 增大反应物浓度K增大','D. K可以用浓度或分压表示'],
      answer:'C',
      explain:'K是温度的函数，与浓度、压强、催化剂无关。增大反应物浓度只会使平衡正向移动，K本身不变。'
    },
    { id:'chmfj3_006', manualId:'chm_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'室温下pH=3的醋酸溶液加水稀释至10倍，pH',
      options:['A. 变为4','B. 小于4大于3','C. 大于4','D. 仍为3'],
      answer:'B',
      explain:'弱酸稀释时电离度增大，H⁺物质的量增大但浓度减小得慢，pH增大幅度<1。故稀释10倍pH介于3-4之间。'
    },
    { id:'chmfj3_007', manualId:'chm_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'0.1 mol/L CH₃COONa溶液中，离子浓度大小关系正确的是',
      options:['A. c(Na⁺)>c(CH₃COO⁻)>c(OH⁻)>c(H⁺)','B. c(Na⁺)>c(OH⁻)>c(CH₃COO⁻)>c(H⁺)','C. c(CH₃COO⁻)>c(Na⁺)>c(OH⁻)>c(H⁺)','D. c(Na⁺)=c(CH₃COO⁻)>c(OH⁻)=c(H⁺)'],
      answer:'A',
      explain:'醋酸钠水解使溶液显碱性：c(OH⁻)>c(H⁺)。水解程度小，c(CH₃COO⁻)略小于c(Na⁺)。故：Na⁺>CH₃COO⁻>OH⁻>H⁺。'
    },
    { id:'chmfj3_008', manualId:'chm_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'原电池中，负极发生',
      options:['A. 氧化反应','B. 还原反应','C. 中和反应','D. 分解反应'],
      answer:'A',
      explain:'原电池：负极失电子发生氧化反应，正极得电子发生还原反应。口诀"正得还，负失氧"。'
    },
    { id:'chmfj3_009', manualId:'chm_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'用铜作阳极、铁作阴极，电解CuSO₄溶液，一段时间后',
      options:['A. 铜片增重，铁片减重','B. 铜片减重，铁片增重','C. 溶液蓝色变浅','D. 溶液蓝色加深'],
      answer:'B',
      explain:'阳极Cu溶解（Cu-2e⁻→Cu²⁺），阴极Cu²⁺得电子沉积在铁上（Cu²⁺+2e⁻→Cu）。这是精炼铜/电镀铜原理，Cu²⁺浓度不变。'
    },
    { id:'chmfj3_010', manualId:'chm_m11', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于电解和原电池，下列说法正确的是',
      options:['A. 原电池是化学能转电能','B. 电解池是电能转化学能','C. 电解池阳极接电源正极','D. 原电池负极接电源正极'],
      answer:'ABC',
      explain:'D错：原电池不接电源，是自身供电。C对：电解池阳极接电源正极→发生氧化。'
    },

    // ---- 元素与物质结构（选必二 + 必修一）10 ----
    { id:'chmfj3_011', manualId:'chm_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'同周期从左到右元素的原子半径变化趋势为',
      options:['A. 增大','B. 减小','C. 先增后减','D. 无规律'],
      answer:'B',
      explain:'同周期核电荷数增大，电子层数不变，核对电子吸引增强，原子半径减小。同主族从上到下则半径增大。'
    },
    { id:'chmfj3_012', manualId:'chm_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'下列元素金属性最强的是',
      options:['A. Na','B. Mg','C. K','D. Ca'],
      answer:'C',
      explain:'金属性：同周期从左到右减弱，同主族从上到下增强。K在第四周期IA族，是给定选项中最左最下的，金属性最强。'
    },
    { id:'chmfj3_013', manualId:'chm_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'H₂O分子的空间构型是',
      options:['A. 直线形','B. V形（角形）','C. 三角锥','D. 平面三角'],
      answer:'B',
      explain:'O原子sp³杂化，2对成键电子对+2对孤对电子，孤对电子的排斥使键角变为约104.5°，呈V形。'
    },
    { id:'chmfj3_014', manualId:'chm_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'NH₃的空间构型和中心原子杂化方式分别是',
      options:['A. 平面三角，sp²','B. 三角锥，sp³','C. 直线形，sp','D. 四面体，sp³'],
      answer:'B',
      explain:'N原子sp³杂化，3个成键对+1个孤对，形成三角锥形（类比甲烷去掉一个键）。'
    },
    { id:'chmfj3_015', manualId:'chm_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'下列物质中含离子键的是',
      options:['A. HCl','B. CO₂','C. NaCl','D. CH₄'],
      answer:'C',
      explain:'活泼金属与活泼非金属之间形成离子键。NaCl是Na⁺和Cl⁻通过离子键结合。HCl/CO₂/CH₄都是共价化合物。'
    },
    { id:'chmfj3_016', manualId:'chm_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）冰的熔点低于食盐是因为',
      options:['A. 冰是分子晶体，食盐是离子晶体','B. 冰是原子晶体','C. 冰含氢键较弱','D. 食盐分子量小'],
      answer:'A',
      explain:'冰=H₂O分子间氢键+范德华力（分子晶体）；NaCl=离子键（离子晶体）。离子键比分子间作用力强得多，熔点高得多。'
    },
    { id:'chmfj3_017', manualId:'chm_m12', type:'multi', difficulty:'normal', local_fj:true, gaokao:true,
      q:'下列物质中既含离子键又含共价键的是',
      options:['A. NaOH','B. Na₂O₂','C. NH₄Cl','D. HCl'],
      answer:'ABC',
      explain:'NaOH：Na⁺与OH⁻(O-H共价)之间离子键；Na₂O₂：Na⁺与O₂²⁻(O-O共价)；NH₄Cl：NH₄⁺(N-H共价)与Cl⁻。HCl只有共价键。'
    },
    { id:'chmfj3_018', manualId:'chm_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'Fe²⁺离子外围电子排布式',
      options:['A. 3d⁶4s²','B. 3d⁶','C. 3d⁵4s¹','D. 3d⁴4s²'],
      answer:'B',
      explain:'Fe原子:[Ar]3d⁶4s²。失电子时先失4s后失3d，Fe²⁺失去2个4s电子，为[Ar]3d⁶。Fe³⁺再失1个3d电子，为[Ar]3d⁵（半满稳定）。'
    },
    { id:'chmfj3_019', manualId:'chm_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'下列分子中含极性共价键的非极性分子是',
      options:['A. HCl','B. H₂O','C. CO₂','D. H₂'],
      answer:'C',
      explain:'CO₂：C=O是极性键（O吸电子），但分子对称直线形，偶极矩相互抵消，整体为非极性分子。H₂O为V形不对称，是极性分子。H₂是非极性键。'
    },
    { id:'chmfj3_020', manualId:'chm_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'配合物[Cu(NH₃)₄]SO₄中，中心离子和配位数分别为',
      options:['A. Cu²⁺，4','B. Cu²⁺，5','C. Cu，4','D. NH₃，4'],
      answer:'A',
      explain:'内界[Cu(NH₃)₄]²⁺，中心离子Cu²⁺，配体NH₃有4个，配位数=4。外界SO₄²⁻平衡电荷。'
    },

    // ---- 有机化学（选必三）10 ----
    { id:'chmfj3_021', manualId:'chm_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'CH₄和CH₃Cl的关系是',
      options:['A. 同分异构体','B. 同系物','C. 同素异形体','D. 无关系'],
      answer:'D',
      explain:'CH₃Cl含卤素，与CH₄结构不同类，既不是同系物也不是同分异构。同系物必须结构相似、通式相同（如CH₄与C₂H₆）。'
    },
    { id:'chmfj3_022', manualId:'chm_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'下列有机物能使溴的四氯化碳溶液褪色的是',
      options:['A. 甲烷','B. 乙烷','C. 乙烯','D. 苯'],
      answer:'C',
      explain:'含C=C双键的有机物能与溴发生加成反应而褪色。乙烯CH₂=CH₂→CH₂Br-CH₂Br。甲烷、乙烷、苯（在此条件下）不与溴的CCl₄溶液反应。'
    },
    { id:'chmfj3_023', manualId:'chm_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'C₄H₁₀的同分异构体有',
      options:['A. 1种','B. 2种','C. 3种','D. 4种'],
      answer:'B',
      explain:'正丁烷CH₃CH₂CH₂CH₃和异丁烷(CH₃)₃CH，共2种。C₅H₁₂有3种，C₆H₁₄有5种，规律要记住。'
    },
    { id:'chmfj3_024', manualId:'chm_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'乙醇的官能团是',
      options:['A. -OH','B. -CHO','C. -COOH','D. -O-'],
      answer:'A',
      explain:'乙醇CH₃CH₂OH，官能团是羟基-OH。-CHO是醛基，-COOH是羧基，-O-是醚键。'
    },
    { id:'chmfj3_025', manualId:'chm_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2022·福建卷）乙酸和乙醇发生酯化反应的实验中，加入浓硫酸的作用是',
      options:['A. 催化剂和吸水剂','B. 只作催化剂','C. 氧化剂','D. 反应物'],
      answer:'A',
      explain:'浓H₂SO₄双重作用：①催化酯化反应；②吸水促使平衡正向移动，提高产率。'
    },
    { id:'chmfj3_026', manualId:'chm_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'苯的结构特点是',
      options:['A. 交替单双键','B. 6个碳原子共平面，键长相等的特殊芳香键','C. 三个双键','D. 环状烷烃'],
      answer:'B',
      explain:'苯环6个C-C键长完全相同（介于单键和双键之间），是离域大π键，凯库勒结构式的"交替单双键"是历史模型，实际不存在真正的单双键交替。'
    },
    { id:'chmfj3_027', manualId:'chm_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'能鉴别乙醇、乙酸、乙酸乙酯三种液体的试剂是',
      options:['A. 石蕊试液','B. Na','C. NaOH','D. 溴水'],
      answer:'A',
      explain:'乙酸使石蕊变红；乙醇不变色但能溶于水（分层测试）；乙酸乙酯难溶于水会分层。用石蕊+分层观察即可鉴别三者。'
    },
    { id:'chmfj3_028', manualId:'chm_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'糖类、油脂、蛋白质的共同点是',
      options:['A. 都含C、H、O','B. 都能水解','C. 都是高分子','D. 都能发生银镜反应'],
      answer:'A',
      explain:'三者都是有机物，都含C、H、O。糖类和油脂不含N，蛋白质含N。葡萄糖不水解、油脂水解生成甘油+脂肪酸、蛋白质水解生成氨基酸。'
    },
    { id:'chmfj3_029', manualId:'chm_m13', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'能发生银镜反应的物质是',
      options:['A. 甲醛','B. 葡萄糖','C. 乙醛','D. 乙酸'],
      answer:'ABC',
      explain:'含醛基-CHO的物质能发生银镜反应。甲醛HCHO、葡萄糖CH₂OH(CHOH)₄CHO（有醛基）、乙醛CH₃CHO都可以。乙酸-COOH不能。'
    },
    { id:'chmfj3_030', manualId:'chm_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'蛋白质的基本结构单位是',
      options:['A. 葡萄糖','B. 甘油','C. α-氨基酸','D. 核苷酸'],
      answer:'C',
      explain:'蛋白质由α-氨基酸通过肽键(-CO-NH-)缩合形成。葡萄糖构成多糖，甘油+脂肪酸构成油脂，核苷酸构成核酸。'
    }
  ];

  // ================================================================
  // 三、地理·超级扩充（30 题）
  // ================================================================
  const GEOGRAPHY_FUJIAN_V3 = [
    // ---- 自然地理（选必一 + 必修一）10 ----
    { id:'geofj3_001', manualId:'geo_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）晨昏线上下列说法正确的是',
      options:['A. 昼夜相接的界线','B. 太阳高度角>0','C. 时间为12点','D. 均为极昼极夜界线'],
      answer:'A',
      explain:'晨昏线是昼半球与夜半球的分界，是地球被太阳光照亮的边界。晨昏线上太阳高度角=0（此刻太阳位于地平线）。'
    },
    { id:'geofj3_002', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'莆田（约北纬25°）夏至日太阳直射北回归线（23.5°N），当地正午太阳高度为',
      options:['A. 88.5°','B. 90°','C. 66.5°','D. 71.5°'],
      answer:'A',
      explain:'公式 H=90°-|φ-δ|，φ=25°N，δ=23.5°N（同半球取减），H=90°-|25-23.5|=88.5°。'
    },
    { id:'geofj3_003', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'福建武夷山常年多雾，主要原因是',
      options:['A. 纬度低','B. 地形闭塞、水汽充足、气温日较差大','C. 河流多','D. 森林覆盖率高'],
      answer:'B',
      explain:'武夷山地形以山地丘陵为主，山谷易积聚湿冷空气；亚热带季风气候水汽充足；山区昼夜温差大→易凝结成雾。这也是武夷岩茶适宜生长的关键条件。'
    },
    { id:'geofj3_004', manualId:'geo_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'东南信风越过赤道后偏转形成',
      options:['A. 西南季风','B. 东北季风','C. 北大西洋暖流','D. 西风带'],
      answer:'A',
      explain:'东南信风向北越过赤道，进入北半球受地转偏向力向右偏，形成西南季风（如南亚夏季风）。这是南亚夏季风的重要成因之一。'
    },
    { id:'geofj3_005', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'福建沿海台风多发的季节是',
      options:['A. 春季','B. 夏秋','C. 冬季','D. 春秋'],
      answer:'B',
      explain:'台风生成于西太平洋热带海域（水温≥26℃），7-9月最频繁。福建正处台风路径带上，是我国台风灾害重灾区之一。'
    },
    { id:'geofj3_006', manualId:'geo_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'河流下游地区多形成的地貌是',
      options:['A. 峡谷','B. 冲积扇','C. 三角洲','D. 石林'],
      answer:'C',
      explain:'河流下游因流速减慢，泥沙沉积在入海口，形成三角洲。冲积扇形成于山口，峡谷形成于上游（V形谷），石林是喀斯特地貌。'
    },
    { id:'geofj3_007', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'下列关于洋流对地理环境影响的说法，正确的是',
      options:['A. 暖流增温增湿','B. 寒流增温减湿','C. 洋流不影响气候','D. 洋流只影响渔业'],
      answer:'A',
      explain:'暖流经过区域增温增湿（如北大西洋暖流使西欧温和多雨）；寒流则降温减湿（如秘鲁寒流沿岸形成沙漠）。'
    },
    { id:'geofj3_008', manualId:'geo_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'福建的主要气候类型是',
      options:['A. 温带季风气候','B. 亚热带季风气候','C. 热带季风气候','D. 地中海气候'],
      answer:'B',
      explain:'福建位于25-28°N，属亚热带季风气候：夏季高温多雨，冬季温和少雨。年降水量1400-2000mm。'
    },
    { id:'geofj3_009', manualId:'geo_m11', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于地球运动，下列说法正确的是',
      options:['A. 自转产生昼夜交替','B. 公转产生四季','C. 自转产生地转偏向力','D. 公转周期为24小时'],
      answer:'ABC',
      explain:'D错：公转周期为1恒星年≈365.25天，自转周期才是24小时（太阳日）。'
    },
    { id:'geofj3_010', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）某地正午太阳高度全年最小值为42°，则该地纬度为',
      options:['A. 24.5°N','B. 24.5°S','C. 71.5°N','D. 25°N'],
      answer:'A',
      explain:'某地正午高度最小值出现在冬至日（北半球）。H=90°-|φ-δ|=90°-(φ+23.5°)=42°，故φ=24.5°N。若在南半球，则夏至日最小。'
    },

    // ---- 人文地理（选必二 + 必修二）10 ----
    { id:'geofj3_011', manualId:'geo_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'人口自然增长率=',
      options:['A. 出生率-死亡率','B. 出生率+死亡率','C. 迁入率-迁出率','D. 出生率×死亡率'],
      answer:'A',
      explain:'自然增长率=出生率-死亡率。机械增长率=迁入率-迁出率。总人口增长=自然+机械。'
    },
    { id:'geofj3_012', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2023·福建卷）城市化进程中，"逆城市化"现象主要表现为',
      options:['A. 城市人口向农村和小城镇迁移','B. 农村人口向大城市迁移','C. 城市面积不断扩大','D. 出生率下降'],
      answer:'A',
      explain:'逆城市化=大城市人口向郊区和小城镇迁移，出现于城市化后期。原因：大城市"城市病"严重、交通信息发达、乡村环境好。'
    },
    { id:'geofj3_013', manualId:'geo_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'福建人口迁出较多的原因',
      options:['A. 气候恶劣','B. 山地多、耕地少、沿海经商传统','C. 战争','D. 政府政策'],
      answer:'B',
      explain:'福建"八山一水一分田"，耕地少人多；沿海地区自古有下南洋经商传统；改革开放后向珠三角、长三角务工。'
    },
    { id:'geofj3_014', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于农业区位因素，正确的是',
      options:['A. 只有自然因素','B. 只有社会经济因素','C. 自然+社会经济+技术共同作用','D. 只与市场有关'],
      answer:'C',
      explain:'农业区位由气候、地形、土壤、水源等自然因素+市场、劳动力、政策、交通等社会经济因素+机械化、灌溉等技术因素共同决定。'
    },
    { id:'geofj3_015', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'福建茶叶生产的主要限制因素是',
      options:['A. 地形起伏大，机械化难','B. 气候不适','C. 土壤贫瘠','D. 缺乏水源'],
      answer:'A',
      explain:'福建气候和土壤适合茶叶（酸性红壤）。但山地地形起伏大，采茶多靠人工，机械化程度低，成本较高。'
    },
    { id:'geofj3_016', manualId:'geo_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'高新技术产业区位选择的主导因素是',
      options:['A. 原料','B. 市场','C. 知识和技术（人才）','D. 劳动力'],
      answer:'C',
      explain:'硅谷、中关村、深圳等高新区都靠近高校和科研院所，人才和信息是核心区位因素。'
    },
    { id:'geofj3_017', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'福建自贸区（厦门、福州、平潭）的功能不包括',
      options:['A. 对台交流合作','B. 对外贸易','C. 完全脱离国家监管','D. 服务海上丝绸之路'],
      answer:'C',
      explain:'自贸区仍在国家监管框架内，只是简化审批、开放市场准入。福建自贸区突出对台特色（平潭对台旅游、厦门对台自由行）。'
    },
    { id:'geofj3_018', manualId:'geo_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'港口的形成条件',
      options:['A. 水域深阔避风','B. 陆域平坦','C. 有经济腹地','D. 以上都是'],
      answer:'D',
      explain:'港口=水域（深阔、避风、航道）+陆域（平坦、储运）+腹地（货源和市场）。厦门港三者兼备，是中国重要港口。'
    },
    { id:'geofj3_019', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）关于工业地域，正确的是',
      options:['A. 传统工业区依赖原料和交通','B. 高新技术产业区依赖原料','C. 工业地域随时间不变','D. 所有工业都靠近港口'],
      answer:'A',
      explain:'传统工业（钢铁、化工）依赖原料、能源、运输，如德国鲁尔区。新兴工业（IT、生物）依赖人才和信息。'
    },
    { id:'geofj3_020', manualId:'geo_m12', type:'multi', difficulty:'normal', local_fj:true, gaokao:true,
      q:'影响商业中心区位的因素',
      options:['A. 人口密度','B. 交通便利','C. 经济发展水平','D. 气候'],
      answer:'ABC',
      explain:'商业中心：市场（人口、消费力）+ 交通（可达性）+ 经济水平。气候对商业中心区位影响较小。'
    },

    // ---- 区域可持续发展（选必二/三）10 ----
    { id:'geofj3_021', manualId:'geo_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'区域发展的必然结果不包括',
      options:['A. 差异','B. 联系','C. 完全独立','D. 一体化'],
      answer:'C',
      explain:'区域间由于自然和人文差异，产生分工与合作，形成联系和一体化（如京津冀、长三角、珠三角）。"完全独立"违背区域间的必然联系。'
    },
    { id:'geofj3_022', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2022·福建卷）南水北调工程的主要影响',
      options:['A. 缓解华北水资源短缺','B. 促进沿线经济','C. 改善生态','D. 以上都是'],
      answer:'D',
      explain:'南水北调综合效益：①缓解北方缺水；②促进沿线交通、旅游、经济；③改善生态环境（补给地下水、河湖）；④也带来局部生态问题（如汉江径流减少）需关注。'
    },
    { id:'geofj3_023', manualId:'geo_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'我国西气东输工程的能源起点是',
      options:['A. 大庆油田','B. 塔里木盆地','C. 四川盆地','D. 松辽平原'],
      answer:'B',
      explain:'西气东输一线起自新疆塔里木盆地轮南，二线起自新疆霍尔果斯（中亚），三线起自新疆霍尔果斯，输向东部经济发达地区。'
    },
    { id:'geofj3_024', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'产业转移的主要动因',
      options:['A. 追求利润最大化（成本、市场）','B. 政治因素','C. 文化因素','D. 气候原因'],
      answer:'A',
      explain:'产业转移根本原因=资本追求更低成本（劳动力、地价）和更大市场。日→亚洲四小龙→中国沿海→东南亚，就是纺织、电子产业的转移路径。'
    },
    { id:'geofj3_025', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'福建作为承接台湾产业转移的优势',
      options:['A. 距离近、语言文化相通、政策支持','B. 劳动力最便宜','C. 原料丰富','D. 气候最优'],
      answer:'A',
      explain:'闽台隔海相望，方言（闽南语）文化相通；平潭、厦门等地专门设立对台合作区；政策支持力度大。'
    },
    { id:'geofj3_026', manualId:'geo_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'荒漠化的主要成因',
      options:['A. 只有自然原因','B. 只有人为原因','C. 自然+人为共同作用','D. 火山活动'],
      answer:'C',
      explain:'自然（气候干旱、大风）+人为（过度放牧、过度樵采、不合理灌溉、乱砍滥伐）共同导致。我国西北荒漠化人为原因占主导。'
    },
    { id:'geofj3_027', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'亚马逊热带雨林被砍伐的主要原因',
      options:['A. 迁移农业、商业性伐木、开辟大牧场','B. 火灾','C. 病虫害','D. 气候变化'],
      answer:'A',
      explain:'雨林砍伐的人为原因：①迁移农业（刀耕火种）②商业性伐木（贵重木材出口）③开辟大牧场（养牛出口）④采矿修路水利建设。'
    },
    { id:'geofj3_028', manualId:'geo_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'可持续发展的核心内涵',
      options:['A. 生态、经济、社会协调发展','B. 只发展经济','C. 只保护环境','D. 停止开发'],
      answer:'A',
      explain:'可持续发展=经济发展+生态保护+社会公平。三者兼顾，既满足当代需求，又不损害后代满足需求的能力。'
    },
    { id:'geofj3_029', manualId:'geo_m13', type:'multi', difficulty:'hard', local_fj:true, gaokao:true,
      q:'关于我国东部沿海地区，正确的是',
      options:['A. 是我国经济最发达地区','B. 人口密集','C. 城市化水平高','D. 生态环境保护完全无压力'],
      answer:'ABC',
      explain:'D错：东部经济发达但工业污染、水资源短缺、生态压力大。福建沿海也面临海洋污染、赤潮、红树林退化等问题。'
    },
    { id:'geofj3_030', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2024·福建卷）平潭综合实验区的发展定位不包括',
      options:['A. 两岸共同家园','B. 国际旅游岛','C. 重工业基地','D. 自由贸易港区'],
      answer:'C',
      explain:'平潭定位：两岸共同家园（对台特色）、国际旅游岛、自由贸易试验区、海峡两岸经贸合作区。生态敏感，不发展重工业。'
    }
  ];

  // ================================================================
  // 挂载到全局题库
  // ================================================================
  function _mount(bank, arr) {
    if (!Array.isArray(bank)) return 0;
    const exist = new Set(bank.map(x => x && x.id).filter(Boolean));
    let n = 0;
    for (const q of arr) {
      if (!exist.has(q.id)) { bank.push(q); n++; }
    }
    return n;
  }

  function tryMount() {
    let n1 = 0, n2 = 0, n3 = 0;
    if (Array.isArray(global.PHYSICS_BANK)) n1 = _mount(global.PHYSICS_BANK, PHYSICS_FUJIAN_V3);
    if (Array.isArray(global.CHEMISTRY_BANK)) n2 = _mount(global.CHEMISTRY_BANK, CHEMISTRY_FUJIAN_V3);
    if (Array.isArray(global.GEOGRAPHY_BANK)) n3 = _mount(global.GEOGRAPHY_BANK, GEOGRAPHY_FUJIAN_V3);
    if (n1 || n2 || n3) {
      console.info(`[福建高考大扩充 v4.2.6-v3] 已注入：物理+${n1}，化学+${n2}，地理+${n3}`);
    }
    return { n1, n2, n3 };
  }

  const r = tryMount();
  if (!r.n1 || !r.n2 || !r.n3) {
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', tryMount);
    }
  }

  global.FUJIAN_SUPPLEMENT_V3 = { PHYSICS_FUJIAN_V3, CHEMISTRY_FUJIAN_V3, GEOGRAPHY_FUJIAN_V3, mount: tryMount };

})(typeof window !== 'undefined' ? window : this);
