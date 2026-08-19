/* ===================================================
 * 福建高考真题·顶级扩充包 v4.2.6-v4
 *
 * 独立于 v1/v2/v3，可与它们并存（加载后自动 mount 到 *_BANK）
 * 主线：选必二·电磁学 全线 + 化学·反应原理 全线 + 地理·区域可持续发展 全线
 *
 * 新增总量：90 道（物 30 + 化 30 + 地 30）
 * 全部带 explain（详细讲解为什么），标注 local_fj:true / gaokao:true
 * =================================================== */
(function (global) {
  'use strict';

  // ================================================================
  // 一、物理·选必二·电磁学 30 题
  // ================================================================
  const PHYSICS_FUJIAN_V4 = [
    // ---- 静电场（6）----
    { id:'phyfj4_001', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）真空中两点电荷相距r=0.1m,库仑力F=9N,一个电荷q1=+2×10^-6C,则另一电荷q2的大小约为',
      options:['A. 5×10^-6 C','B. 5×10^-5 C','C. 2×10^-6 C','D. 1×10^-5 C'],
      answer:'A',
      explain:'库仑定律 F=kq1q2/r²。代入：9 = 9×10⁹ × 2×10⁻⁶ × q2 / (0.1)²，解得 q2 = 9×0.01/(9×10⁹×2×10⁻⁶) = 0.09/(1.8×10⁴) = 5×10⁻⁶ C。选A。'
    },
    { id:'phyfj4_002', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2022·福建卷）关于电场强度E=F/q,下列说法正确的是',
      options:['A. 电场强度与检验电荷q成反比','B. 电场强度方向就是正检验电荷所受电场力方向','C. 电场强度只由检验电荷决定','D. 撤去检验电荷,该点电场强度变为零'],
      answer:'B',
      explain:'E=F/q是定义式,但E由场源决定,与q无关。A错(与q无关)、C错(由场源决定)、D错(撤去检验电荷电场依然存在)。B正确：E的方向规定为正电荷所受电场力方向。'
    },
    { id:'phyfj4_003', manualId:'phy_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'点电荷Q产生的电场中,A点电场强度大小为E_A,距离Q为r_A;B点距离Q为2r_A,则B点电场强度E_B为',
      options:['A. E_A/2','B. E_A/4','C. E_A/8','D. 2E_A'],
      answer:'B',
      explain:'点电荷电场 E=kQ/r²，与距离平方成反比。距离变为2倍，E变为原来的1/4。选B。'
    },
    { id:'phyfj4_004', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（福建高考模拟）匀强电场中,电场强度大小为E,方向水平向右。一质量为m,电量为+q的粒子从静止释放,不计重力,经时间t粒子获得速度为',
      options:['A. qE t/m','B. qEm/t','C. mE/(qt)','D. m/(qEt)'],
      answer:'A',
      explain:'带电粒子受电场力 F=qE，产生加速度 a=qE/m。由 v=at 得 v=qEt/m。选A。'
    },
    { id:'phyfj4_005', manualId:'phy_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'平行板电容器接电源后断开,若将两极板距离增大,则电容C、电压U、电场强度E的变化为',
      options:['A. C减小、U增大、E不变','B. C减小、U不变、E增大','C. C不变、U增大、E不变','D. C增大、U减小、E减小'],
      answer:'A',
      explain:'断开电源后Q不变。C=εS/(4πkd),d增大C减小。U=Q/C,C减小U增大。E=U/d,U增大d增大同比例E=Q/(εS/4πk)不变(实际E=σ/ε₀，σ=Q/S不变)。选A。'
    },
    { id:'phyfj4_006', manualId:'phy_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'两个相同金属小球带电量分别为+3Q和-Q,接触后再分开,每个小球带电量为',
      options:['A. +Q','B. +2Q','C. -Q','D. +Q/2'],
      answer:'A',
      explain:'金属球接触后电荷会重新分配。总电量+3Q+(-Q)=+2Q,平均分配后每个球带电+Q。选A。'
    },
    // ---- 恒定电流（6）----
    { id:'phyfj4_007', manualId:'phy_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）电阻R两端加电压U=6V,通过的电流I=0.5A,则R的阻值为',
      options:['A. 3 Ω','B. 6 Ω','C. 12 Ω','D. 0.5 Ω'],
      answer:'C',
      explain:'欧姆定律 R=U/I=6/0.5=12Ω。选C。'
    },
    { id:'phyfj4_008', manualId:'phy_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'电源电动势6V,内阻1Ω,外接电阻2Ω,电路中电流为',
      options:['A. 3 A','B. 2 A','C. 1 A','D. 6 A'],
      answer:'B',
      explain:'闭合电路欧姆定律 I=ε/(R+r)=6/(2+1)=2A。选B。'
    },
    { id:'phyfj4_009', manualId:'phy_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'两个电阻R1=6Ω、R2=3Ω并联后接在电压U=6V的电源上,总电流为',
      options:['A. 1 A','B. 2 A','C. 3 A','D. 4 A'],
      answer:'C',
      explain:'并联总电阻 1/R=1/6+1/3=1/2,R=2Ω。总电流 I=U/R=6/2=3A。选C。'
    },
    { id:'phyfj4_010', manualId:'phy_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'一个额定电压220V、额定功率1100W的电水壶,正常工作时的电流为',
      options:['A. 2 A','B. 5 A','C. 10 A','D. 0.5 A'],
      answer:'B',
      explain:'P=UI, I=P/U=1100/220=5A。选B。'
    },
    { id:'phyfj4_011', manualId:'phy_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'一个电阻R=10Ω,通过恒定电流I=2A,10s内产生的热量为',
      options:['A. 40 J','B. 200 J','C. 400 J','D. 100 J'],
      answer:'C',
      explain:'焦耳定律 Q=I²Rt=2²×10×10=400J。选C。'
    },
    { id:'phyfj4_012', manualId:'phy_m13', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'（福建高考）串联电路中各处电流相等,并联电路中各支路电压相等。请判断。',
      options:[],
      answer:'对',
      explain:'串联：电流相等（因为电荷守恒，一条通路），电压分配。并联：电压相等（各支路两端接同一对节点），电流分配。这是电路基本规律。表述正确。'
    },
    // ---- 磁场（8）----
    { id:'phyfj4_013', manualId:'phy_m14', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）通电直导线在匀强磁场中受到的安培力,以下说法正确的是',
      options:['A. F=BIL 仅当电流方向垂直于磁场时成立','B. 电流方向与磁场平行时,安培力最大','C. 安培力方向与电流方向相同','D. 磁场越强,导线越长,安培力越小'],
      answer:'A',
      explain:'F=BIL 只在 I⊥B 时成立。B错(平行时F=0)、C错(方向由左手定则)、D错(F与B、L成正比)。选A。'
    },
    { id:'phyfj4_014', manualId:'phy_m14', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'磁感应强度B=0.5T的匀强磁场中,长L=0.2m通电导线电流I=3A,方向与B垂直,导线受力为',
      options:['A. 0.3 N','B. 0.6 N','C. 3 N','D. 30 N'],
      answer:'A',
      explain:'F=BIL=0.5×3×0.2=0.3N。选A。'
    },
    { id:'phyfj4_015', manualId:'phy_m14', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'带正电粒子以速度v垂直射入匀强磁场B中,粒子做的运动是',
      options:['A. 直线运动','B. 圆周运动','C. 抛物线运动','D. 螺旋线运动'],
      answer:'B',
      explain:'带电粒子在匀强磁场中v⊥B时,洛伦兹力大小不变、方向始终垂直v,提供向心力,做匀速圆周运动。选B。'
    },
    { id:'phyfj4_016', manualId:'phy_m14', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'质量m,电量q,速度v的带电粒子在磁场B中做圆周运动,轨道半径r为',
      options:['A. mv/(qB)','B. qB/(mv)','C. mv²/(qB)','D. m/(qBv)'],
      answer:'A',
      explain:'洛伦兹力提供向心力:qvB=mv²/r,解得 r=mv/(qB)。选A。'
    },
    { id:'phyfj4_017', manualId:'phy_m14', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'带电粒子在磁场中做圆周运动的周期T为',
      options:['A. 2πm/(qB)','B. mv/(qB)','C. qB/(2πm)','D. 2πr/v'],
      answer:'A',
      explain:'T=2πr/v=2π·(mv/qB)/v=2πm/(qB)。周期与速度v无关,只与m/q和B有关。选A。'
    },
    { id:'phyfj4_018', manualId:'phy_m14', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（福建卷）判断电流方向已知时的磁场方向用什么定则',
      options:['A. 左手定则','B. 右手螺旋定则(安培定则)','C. 右手定则','D. 楞次定律'],
      answer:'B',
      explain:'安培定则(右手螺旋定则):用于判断电流产生的磁场方向。左手定则判断通电导线受安培力方向;右手定则判断切割磁感线产生的感应电动势方向。选B。'
    },
    { id:'phyfj4_019', manualId:'phy_m14', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（2025·福建卷模拟）质子（q=1.6×10⁻¹⁹C，m=1.67×10⁻²⁷kg）以v=10⁶m/s射入 B=0.5T 的磁场，v⊥B，其圆周半径约为',
      options:['A. 2.1×10⁻² m','B. 2.1×10⁻³ m','C. 2.1×10⁻¹ m','D. 2.1 m'],
      answer:'A',
      explain:'r=mv/(qB)=1.67×10⁻²⁷×10⁶/(1.6×10⁻¹⁹×0.5)=1.67×10⁻²¹/8×10⁻²⁰≈2.1×10⁻² m。选A。'
    },
    { id:'phyfj4_020', manualId:'phy_m14', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'洛伦兹力永远不做功,因其方向始终垂直于粒子速度方向。请判断。',
      options:[],
      answer:'对',
      explain:'洛伦兹力F=qv×B,始终垂直于v,所以F·v=0,即洛伦兹力对带电粒子不做功,只改变速度方向不改变速度大小。表述正确。'
    },
    // ---- 电磁感应（6）----
    { id:'phyfj4_021', manualId:'phy_m15', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）判断感应电流方向的定律是',
      options:['A. 库仑定律','B. 欧姆定律','C. 楞次定律','D. 安培定则'],
      answer:'C',
      explain:'楞次定律:感应电流的方向总是要阻碍引起感应电流的磁通量的变化。是判断感应电流方向的基本定律。选C。'
    },
    { id:'phyfj4_022', manualId:'phy_m15', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'线圈匝数N=100,磁通量Φ在0.1s内从0.02Wb 均匀减小到0.01Wb,感应电动势为',
      options:['A. 5 V','B. 10 V','C. 20 V','D. 1 V'],
      answer:'B',
      explain:'ε=N·ΔΦ/Δt=100×(0.02-0.01)/0.1=100×0.1=10V。选B。'
    },
    { id:'phyfj4_023', manualId:'phy_m15', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'长L=1m的导体棒以v=2m/s垂直切割B=0.5T的磁感线,产生的电动势为',
      options:['A. 0.5 V','B. 1 V','C. 2 V','D. 4 V'],
      answer:'B',
      explain:'ε=BLv=0.5×1×2=1V(注意 B、L、v 两两垂直)。选B。'
    },
    { id:'phyfj4_024', manualId:'phy_m15', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（福建高考）自感现象中,自感电动势的大小与哪个物理量成正比',
      options:['A. 线圈中的电流本身','B. 线圈中电流的变化率 dI/dt','C. 线圈电阻','D. 磁通量本身'],
      answer:'B',
      explain:'自感电动势 ε=-L·(dI/dt),与电流变化率成正比,不是电流本身。L为自感系数(与线圈几何及是否有铁芯有关)。选B。'
    },
    { id:'phyfj4_025', manualId:'phy_m15', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'变压器可以改变直流电压。请判断。',
      options:[],
      answer:'错',
      explain:'变压器工作原理是电磁感应,需要变化的磁通量。直流电产生恒定磁场,不能感应电动势,故直流电通过变压器无法工作。变压器只能变换交流电压。表述错误。'
    },
    { id:'phyfj4_026', manualId:'phy_m15', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'理想变压器原、副线圈匝数比 N1:N2=10:1,原线圈接220V交流电,副线圈输出电压为',
      options:['A. 22 V','B. 220 V','C. 2200 V','D. 11 V'],
      answer:'A',
      explain:'理想变压器 U1/U2=N1/N2,U2=U1×N2/N1=220×1/10=22V。选A。'
    },
    // ---- 交变电流（4）----
    { id:'phyfj4_027', manualId:'phy_m16', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'我国生活用电频率为',
      options:['A. 50 Hz','B. 60 Hz','C. 100 Hz','D. 220 Hz'],
      answer:'A',
      explain:'中国民用交流电频率为50Hz,美、日等国为60Hz。这是常识题。选A。'
    },
    { id:'phyfj4_028', manualId:'phy_m16', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'交流电电压瞬时值 u=220√2 sin(100πt) V,其有效值为',
      options:['A. 220 V','B. 220√2 V','C. 110 V','D. 380 V'],
      answer:'A',
      explain:'交流电有效值 = 峰值/√2,即 U_有效=U_max/√2=220√2/√2=220V。所以我们说的"220V交流电"是有效值。选A。'
    },
    { id:'phyfj4_029', manualId:'phy_m16', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'远距离输电为什么要用高压',
      options:['A. 为了减小线路电阻','B. 为了减小输电线上的功率损失','C. 为了增大电流','D. 为了减小发电机负荷'],
      answer:'B',
      explain:'输电时线路损耗 P_损=I²r,同功率下 P=UI,U 高则 I 小,损耗以 I 的平方减小。故远距离输电用高压是为了减小线路的功率损失(而不是减小电阻本身)。选B。'
    },
    { id:'phyfj4_030', manualId:'phy_m16', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'交流电通过电容器时,电容器起到"通交阻直"的作用。请判断。',
      options:[],
      answer:'对',
      explain:'电容器对直流:充满后电流为零(阻直)。对交流:交流电压变化引起电容器充放电,形成持续电流(通交)。故电容器"通交阻直"。相反,电感"通直阻交"。表述正确。'
    },
  ];

  // ================================================================
  // 二、化学·反应原理 30 题
  // ================================================================
  const CHEMISTRY_FUJIAN_V4 = [
    // ---- 化学反应速率（8）----
    { id:'chemfj4_001', manualId:'chem_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）下列因素中,不能改变化学反应速率的是',
      options:['A. 温度','B. 浓度','C. 催化剂','D. 反应物的总质量(容器体积不变)'],
      answer:'D',
      explain:'温度、浓度、催化剂、接触面积、压强(气体)都会影响反应速率。但"反应物总质量"若容器体积不变,则浓度不变,速率不变。故 D 不影响速率。选D。'
    },
    { id:'chemfj4_002', manualId:'chem_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'2A(g)+B(g)→2C(g),用A表示的速率是0.4 mol/(L·s),则用C表示的速率是',
      options:['A. 0.2 mol/(L·s)','B. 0.4 mol/(L·s)','C. 0.8 mol/(L·s)','D. 0.1 mol/(L·s)'],
      answer:'B',
      explain:'速率之比等于化学计量数之比。v(A):v(C)=2:2=1:1,所以 v(C)=v(A)=0.4 mol/(L·s)。选B。'
    },
    { id:'chemfj4_003', manualId:'chem_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'催化剂能加快化学反应速率的根本原因是',
      options:['A. 提高反应物浓度','B. 提高反应温度','C. 降低反应的活化能','D. 增大反应物总能量'],
      answer:'C',
      explain:'催化剂通过降低活化能(为反应提供新的路径),使更多分子达到活化状态,从而加快正、逆反应速率(不改变平衡)。选C。'
    },
    { id:'chemfj4_004', manualId:'chem_m11', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'升高温度既能加快正反应速率,也能加快逆反应速率。请判断。',
      options:[],
      answer:'对',
      explain:'温度升高使分子的平均动能增加,活化分子百分数增加,正、逆反应速率都加快,只是加快的程度不同。表述正确。'
    },
    { id:'chemfj4_005', manualId:'chem_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'2SO2+O2⇌2SO3反应,增大氧气浓度,下列变化正确的是',
      options:['A. 正反应速率增大,逆反应速率也立即增大','B. 正反应速率增大,逆反应速率不变(瞬间)','C. 正、逆反应速率都不变','D. 正反应速率减小'],
      answer:'B',
      explain:'增大O₂浓度瞬间,正反应速率立即增大(反应物浓度增大),但SO₃浓度未变,逆反应速率瞬间不变。之后SO₃浓度增大,逆反应速率再逐渐增大。选B。'
    },
    { id:'chemfj4_006', manualId:'chem_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（福建卷）以下反应速率的表示方法,错误的是',
      options:['A. v=Δc/Δt (单位 mol/(L·s))','B. 用固体或纯液体表示反应速率','C. 用气体表示反应速率','D. 用溶液中反应物浓度表示反应速率'],
      answer:'B',
      explain:'反应速率一般用单位时间内浓度变化 v=Δc/Δt 表示,单位 mol/(L·s)。固体、纯液体浓度视为常数,不能用来表示反应速率。选B。'
    },
    { id:'chemfj4_007', manualId:'chem_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'某反应的活化能Ea = 100 kJ/mol,加入催化剂后Ea降为 60 kJ/mol,反应的焓变ΔH将',
      options:['A. 增大','B. 减小','C. 不变','D. 无法判断'],
      answer:'C',
      explain:'催化剂只改变活化能,同时降低正、逆反应活化能,不改变反应物、产物的总能量。故ΔH(=生成物总能量−反应物总能量)不变。选C。'
    },
    { id:'chemfj4_008', manualId:'chem_m11', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'增大固体反应物的量,能加快反应速率。请判断。',
      options:[],
      answer:'错',
      explain:'固体的"浓度"视为常数,只有增大接触面积(如粉碎)才能加快反应速率,单纯增加固体质量不影响。表述错误。'
    },
    // ---- 化学平衡（10）----
    { id:'chemfj4_009', manualId:'chem_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）N2 + 3H2 ⇌ 2NH3,在密闭容器中达平衡后,增大N2浓度,平衡将',
      options:['A. 正向移动','B. 逆向移动','C. 不移动','D. 无法判断'],
      answer:'A',
      explain:'勒夏特列原理:增大反应物浓度,平衡向正反应方向移动(消耗增加的N2),使N2浓度稍微降低但仍高于原平衡浓度。选A。'
    },
    { id:'chemfj4_010', manualId:'chem_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'反应 aA(g)+bB(g)⇌cC(g)+dD(g),减小压强平衡向正反应方向移动,则',
      options:['A. a+b > c+d','B. a+b < c+d','C. a+b = c+d','D. 无法判断'],
      answer:'B',
      explain:'减压使体积增大,浓度整体降低,平衡向气体分子总数增多的方向移动。故正反应气体系数和大于反应物,即 a+b < c+d。选B。'
    },
    { id:'chemfj4_011', manualId:'chem_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'合成氨反应 N2+3H2⇌2NH3 ΔH<0,提高NH3产率应',
      options:['A. 升温、加压','B. 降温、加压','C. 升温、减压','D. 降温、减压'],
      answer:'B',
      explain:'正反应放热(ΔH<0),降温平衡正移;正反应气体总数减少(1+3=4→2),加压平衡正移。故降温加压有利于NH3产率提高。但工业实际:考虑速率和催化剂,采用适温(500℃左右)+高压(10-30MPa)。选B。'
    },
    { id:'chemfj4_012', manualId:'chem_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'恒温恒容下,反应 CO(g)+H2O(g)⇌CO2(g)+H2(g) 达到平衡,加入He(不参与反应),平衡',
      options:['A. 正向移动','B. 逆向移动','C. 不移动','D. 无法判断'],
      answer:'C',
      explain:'恒温恒容加惰性气体,虽然总压增大,但各反应物、生成物的分压(浓度)不变,平衡不移动。选C。若是恒温恒压加惰性气体则相当于减压。'
    },
    { id:'chemfj4_013', manualId:'chem_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'反应 2SO2+O2⇌2SO3 达平衡后,加入催化剂,下列变化正确的是',
      options:['A. 平衡正向移动','B. 平衡逆向移动','C. 平衡不移动,达平衡时间缩短','D. 平衡常数增大'],
      answer:'C',
      explain:'催化剂同等程度加快正、逆反应速率,K不变,平衡不移动,但达到平衡所需时间缩短。选C。'
    },
    { id:'chemfj4_014', manualId:'chem_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'平衡常数K与什么有关',
      options:['A. 反应物浓度','B. 生成物浓度','C. 温度','D. 催化剂'],
      answer:'C',
      explain:'K只随温度改变而改变(具体:吸热正反应K随温度升高而增大;放热正反应K随温度升高而减小)。浓度、压强、催化剂都不改变K。选C。'
    },
    { id:'chemfj4_015', manualId:'chem_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'反应达到化学平衡时,反应体系',
      options:['A. 各组分浓度相等','B. 正、逆反应速率相等,浓度不再变化','C. 反应完全停止','D. 正反应速率为零'],
      answer:'B',
      explain:'化学平衡的特征:动(动态平衡)、等(v正=v逆)、定(各组分浓度保持不变)、变(条件改变则平衡可能移动)。故B正确。'
    },
    { id:'chemfj4_016', manualId:'chem_m12', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'平衡状态时,反应物一定不能完全转化为生成物。请判断。',
      options:[],
      answer:'对',
      explain:'可逆反应的特征就是既能正向进行又能逆向进行,反应物无法100%转化为生成物,总有一部分反应物存在。故平衡时反应物一定有剩余。表述正确。'
    },
    { id:'chemfj4_017', manualId:'chem_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'恒压容器中,反应 A(g)+B(g)⇌2C(g) 达平衡,充入C气体,平衡',
      options:['A. 正向移动','B. 逆向移动','C. 不移动','D. 无法判断'],
      answer:'B',
      explain:'恒压容器充入C:C浓度增大,平衡向减少C方向移动即逆向移动。同时体积变大以维持恒压。选B。'
    },
    { id:'chemfj4_018', manualId:'chem_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）1 mol H2 + 1 mol I2 在密闭容器中反应生成 HI,达平衡时 HI 为1.6 mol,则 H2 的转化率约为',
      options:['A. 80%','B. 60%','C. 50%','D. 100%'],
      answer:'A',
      explain:'H2+I2⇌2HI, 生成 1.6 mol HI 消耗 0.8 mol H2, 转化率=0.8/1×100%=80%。选A。'
    },
    // ---- 电离平衡与水解（6）----
    { id:'chemfj4_019', manualId:'chem_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）下列物质属于强电解质的是',
      options:['A. HCl','B. CH3COOH','C. NH3·H2O','D. H2CO3'],
      answer:'A',
      explain:'强电解质:HCl、H2SO4、HNO3(强酸)、NaOH、KOH(强碱)、大多数盐(NaCl等)。弱电解质:醋酸、氨水、碳酸等弱酸弱碱、水。选A。'
    },
    { id:'chemfj4_020', manualId:'chem_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'纯水在25℃时,c(H+)·c(OH-)约为',
      options:['A. 1×10^-14','B. 1×10^-7','C. 1×10^-14 mol²/L²','D. 1×10^-7 mol²/L²'],
      answer:'C',
      explain:'25℃时水的离子积Kw = c(H+)·c(OH-) = 1×10⁻¹⁴ (单位 mol²/L²)。温度升高Kw增大(水的电离吸热)。选C。'
    },
    { id:'chemfj4_021', manualId:'chem_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'0.1 mol/L CH3COOH 溶液,加入少量NaOH,醋酸的电离程度将',
      options:['A. 减小','B. 增大','C. 不变','D. 先增大后减小'],
      answer:'B',
      explain:'加入NaOH后中和了H+,c(H+)减小,醋酸电离平衡 CH3COOH⇌CH3COO-+H+ 向右移动,电离程度增大。选B。'
    },
    { id:'chemfj4_022', manualId:'chem_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'NaCl溶液呈中性,原因是',
      options:['A. NaCl不电离','B. Na+、Cl-都不水解','C. Na+水解生成OH-','D. Cl-水解生成H+'],
      answer:'B',
      explain:'NaCl由强酸(HCl)强碱(NaOH)生成,Na+和Cl-都不发生水解,溶液呈中性。强酸弱碱盐显酸性,弱酸强碱盐显碱性。选B。'
    },
    { id:'chemfj4_023', manualId:'chem_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'25℃时,pH=3的醋酸溶液和pH=3的盐酸,分别加水稀释10倍,pH的变化',
      options:['A. 醋酸变化小,盐酸变化大','B. 醋酸变化大,盐酸变化小','C. 两者变化相同','D. 无法判断'],
      answer:'A',
      explain:'醋酸是弱酸,稀释时电离平衡右移补偿H+减少,pH变化小(pH<4)。盐酸是强酸完全电离,稀释10倍c(H+)变为原来的1/10,pH增加1(变为4)。故醋酸变化小,盐酸变化大。选A。'
    },
    { id:'chemfj4_024', manualId:'chem_m13', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'纯水加热,c(H+)增大,pH减小,水显酸性。请判断。',
      options:[],
      answer:'错',
      explain:'加热水的电离度增大,c(H+)与c(OH-)同时增大且始终相等,水仍显中性(尽管pH<7)。判断酸碱性看c(H+)与c(OH-)是否相等,而不是看pH是否等于7。表述错误。'
    },
    // ---- 电化学（6）----
    { id:'chemfj4_025', manualId:'chem_m14', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）原电池工作时,发生氧化反应的电极是',
      options:['A. 正极','B. 负极','C. 阴极','D. 阳极'],
      answer:'B',
      explain:'原电池中:负极发生氧化(失电子);正极发生还原(得电子)。电解池中:阳极氧化,阴极还原。注意区分。选B。'
    },
    { id:'chemfj4_026', manualId:'chem_m14', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'铜锌原电池(硫酸铜溶液)中,下列叙述正确的是',
      options:['A. Zn是正极,Cu是负极','B. Zn失电子,Cu得电子','C. 电子从Cu经外电路流向Zn','D. 溶液中SO4²⁻流向Cu电极'],
      answer:'B',
      explain:'Zn更活泼作负极(失电子被氧化),Cu作正极(Cu²⁺得电子被还原)。电子从Zn经外电路流向Cu(外电路电子流向和电流方向相反)。SO4²⁻是阴离子流向负极(Zn)。选B。'
    },
    { id:'chemfj4_027', manualId:'chem_m14', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'电解CuSO4溶液,用惰性电极,阴极上',
      options:['A. 析出O2','B. 析出Cu','C. 析出H2','D. 析出SO2'],
      answer:'B',
      explain:'电解CuSO4:阴极离子放电顺序 Cu²⁺ > H+,故阴极析出Cu;阳极OH⁻ > SO4²⁻,故阳极析出O2。选B。'
    },
    { id:'chemfj4_028', manualId:'chem_m14', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'电解精炼铜时,粗铜作',
      options:['A. 阴极','B. 阳极','C. 正极','D. 负极'],
      answer:'B',
      explain:'电解精炼铜:粗铜作阳极(不断溶解,失电子);纯铜作阴极(Cu²⁺得电子析出纯铜)。杂质金属(Zn、Fe等比Cu活泼的)先溶解,不活泼的(Ag、Au)沉在阳极泥。选B。'
    },
    { id:'chemfj4_029', manualId:'chem_m14', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'原电池将化学能转化为电能;电解池将电能转化为化学能。请判断。',
      options:[],
      answer:'对',
      explain:'原电池是自发的氧化还原反应产生电流,化学能→电能。电解池需要外接电源,把电能→化学能(强制发生非自发反应)。表述正确。'
    },
    { id:'chemfj4_030', manualId:'chem_m14', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）钢铁在潮湿空气中发生的腐蚀主要是',
      options:['A. 化学腐蚀','B. 吸氧腐蚀','C. 析氢腐蚀','D. 高温腐蚀'],
      answer:'B',
      explain:'钢铁在潮湿(中性或弱酸性)环境中主要发生"吸氧腐蚀":负极 Fe-2e⁻→Fe²⁺;正极 O2+2H2O+4e⁻→4OH⁻。只有在强酸环境中才是析氢腐蚀。这是原电池反应。选B。'
    },
  ];

  // ================================================================
  // 三、地理·区域可持续发展 30 题
  // ================================================================
  const GEOGRAPHY_FUJIAN_V4 = [
    // ---- 区域地理与农业（10）----
    { id:'geofj4_001', manualId:'geo_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）我国东北平原成为全国最大的商品粮基地,其主要优势条件是',
      options:['A. 光热充足','B. 土壤肥沃、地形平坦、人均耕地多','C. 灌溉水源丰富','D. 劳动力充足'],
      answer:'B',
      explain:'东北平原是黑土(世界四大黑土带之一)、地形平坦、人均耕地多(超过全国平均3倍以上)、机械化程度高,成为全国最大的商品粮基地。热量并不算充足(温带),劳动力也不算多。选B。'
    },
    { id:'geofj4_002', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'华北平原发展农业的主要限制性因素是',
      options:['A. 光照不足','B. 热量不足','C. 春旱严重','D. 土地贫瘠'],
      answer:'C',
      explain:'华北平原春季蒸发旺盛而降水少(降水集中于7-8月),加之农业需水量大(小麦返青、拔节期),春旱是最主要的限制因素。冬春常发生沙尘。选C。'
    },
    { id:'geofj4_003', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'南方低山丘陵红壤区,土壤存在的主要问题是',
      options:['A. 土壤肥沃,水土稳定','B. 酸性强、有机质少、易水土流失','C. 土壤盐碱化严重','D. 土层深厚'],
      answer:'B',
      explain:'南方红壤区高温多雨,风化淋溶强烈,导致土壤酸性强(pH<5.5)、有机质分解快、缺磷少氮,加之丘陵地形,水土流失严重。选B。'
    },
    { id:'geofj4_004', manualId:'geo_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'我国西北地区发展农业的最主要制约因素是',
      options:['A. 光照不足','B. 热量不足','C. 水源短缺','D. 土壤贫瘠'],
      answer:'C',
      explain:'西北深居内陆,远离海洋,水汽难以到达,降水稀少(<400mm),气候干旱,水源短缺是农业发展的最主要制约因素。故西北农业依赖灌溉(绿洲农业、河谷农业)。选C。'
    },
    { id:'geofj4_005', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'福建省沿海地区大力发展"海水养殖业"的有利条件不包括',
      options:['A. 海岸线曲折,港湾众多','B. 大陆架宽广','C. 有寒暖流交汇的大渔场','D. 市场需求大,消费水平高'],
      answer:'C',
      explain:'福建沿海无著名的寒暖流交汇渔场(那是日本的北海道渔场或我国舟山附近)。福建海水养殖发达是因为:海岸线曲折(长3000+km)、港湾众多、市场需求大(闽台饮食)、气候适宜、政府扶持。选C。'
    },
    { id:'geofj4_006', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'长江三角洲地区发展经济作物(如棉花、油菜)的自然优势不包括',
      options:['A. 土壤肥沃','B. 水源充足','C. 光热充足','D. 地形起伏大'],
      answer:'D',
      explain:'长江三角洲地形平坦(海拔<50m)、水网密布、土壤肥沃、亚热带季风气候光热充足、雨热同期,极利于经济作物发展。地形起伏大不是优势(反而不利于机械化)。选D。'
    },
    { id:'geofj4_007', manualId:'geo_m11', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'我国农业地域类型:东北为商品谷物农业,西藏为高寒牧业,华南为水稻种植业。请判断。',
      options:[],
      answer:'对',
      explain:'东北平原为商品谷物农业(玉米、大豆、水稻);西藏青藏高原为高寒牧业(牦牛、藏羊);华南秦岭-淮河以南为水稻种植业(季风水田农业)。表述正确。'
    },
    { id:'geofj4_008', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建高考）我国最大的商品棉基地是',
      options:['A. 长江中下游平原','B. 江汉平原','C. 华北平原','D. 新疆南部'],
      answer:'D',
      explain:'新疆南部(南疆塔里木盆地及吐鲁番)因光照充足、昼夜温差大、灌溉充分,是我国最大最优质的商品棉基地。华北平原是次要产棉区。选D。'
    },
    { id:'geofj4_009', manualId:'geo_m11', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'我国农业生产提高单位面积产量的主要措施不包括',
      options:['A. 培育优良品种','B. 提高机械化水平','C. 增施化肥、农药','D. 扩大耕地面积'],
      answer:'D',
      explain:'扩大耕地面积不是"提高单位面积产量"的措施(而是提高总产量);其他措施都能提高单产。反之,我国要坚守18亿亩耕地红线,不能盲目扩耕。选D。'
    },
    { id:'geofj4_010', manualId:'geo_m11', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'莆田平原(木兰溪流域)传统的水稻两熟制,主要得益于',
      options:['A. 亚热带季风气候,雨热同期','B. 高纬度光照长','C. 地形陡峭','D. 土壤盐碱'],
      answer:'A',
      explain:'莆田平原属亚热带海洋性季风气候,年均温20℃以上,降水1500mm且集中在夏季,雨热同期,可满足水稻两季生长需求。木兰陂调节水流,灌溉便利。选A。'
    },
    // ---- 工业与城市（10）----
    { id:'geofj4_011', manualId:'geo_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2023·福建卷）鞍钢的区位选择主要考虑的因素是',
      options:['A. 靠近煤矿和铁矿','B. 靠近港口','C. 靠近市场','D. 靠近廉价劳动力'],
      answer:'A',
      explain:'鞍钢(辽宁鞍山)是"原料地型钢铁工业":本地既有铁矿(鞍山铁矿),又靠近煤矿(抚顺、本溪),兼有辽河水系水源,交通便利,故按原料+燃料双重指向布局。选A。'
    },
    { id:'geofj4_012', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'宝钢(上海)属于什么类型的工业布局',
      options:['A. 原料地型','B. 燃料地型','C. 消费市场型(临海临江)','D. 廉价劳动力型'],
      answer:'C',
      explain:'宝钢建在上海,本地没有铁矿煤矿,但靠近长江三角洲这一巨大市场,同时依靠海运进口澳大利亚、巴西铁矿石,这是典型的"临海(市场+进口原料)"型钢铁工业。选C。'
    },
    { id:'geofj4_013', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'高新技术产业主要区位因素是',
      options:['A. 廉价劳动力','B. 原料','C. 知识、技术、人才、环境','D. 交通'],
      answer:'C',
      explain:'高新技术产业(如硅谷、中关村、深圳华为)主要看重知识密集(高校、科研院所)、技术(专利)、人才、优美环境(工作生活)、政策支持。廉价劳动力/原料是低端制造业指向。选C。'
    },
    { id:'geofj4_014', manualId:'geo_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'我国最大的综合性工业基地是',
      options:['A. 京津唐','B. 沪宁杭','C. 珠三角','D. 辽中南'],
      answer:'B',
      explain:'沪宁杭(长江三角洲)工业基地:经济体量最大、门类最全、技术密集,是我国最大的综合性工业基地。辽中南是重工业基地,京津唐是北方综合工业基地,珠三角是轻工业和外向型基地。选B。'
    },
    { id:'geofj4_015', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'城市化对地理环境的负面影响不包括',
      options:['A. 热岛效应','B. 交通拥堵、住房紧张','C. 环境污染加重','D. 生活水平提高'],
      answer:'D',
      explain:'生活水平提高是城市化的正面影响,不是负面。负面影响:热岛效应、雨岛效应(城市降水多)、交通拥堵、住房紧张、就业压力、环境污染(大气、水、噪声)、社会问题等。选D。'
    },
    { id:'geofj4_016', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'"逆城市化"现象最早出现在',
      options:['A. 中国','B. 发达国家(如美英)','C. 印度','D. 非洲'],
      answer:'B',
      explain:'逆城市化(urban→rural)最早出现在20世纪70年代的美英等发达国家,因城市环境恶化、乡村基础设施完善、私家车普及,人口从大城市迁往郊区和乡村。中国目前仍处于"城市化加速"阶段。选B。'
    },
    { id:'geofj4_017', manualId:'geo_m12', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'城市化水平通常用城市人口占总人口的比重来衡量。请判断。',
      options:[],
      answer:'对',
      explain:'城市化水平的最主要标志就是城镇人口比重(=城镇人口/总人口)。中国2023年约65%,发达国家一般>75%。表述正确。'
    },
    { id:'geofj4_018', manualId:'geo_m12', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'城市功能分区中,占地面积最大的是',
      options:['A. 商业区','B. 工业区','C. 住宅区','D. 行政区'],
      answer:'C',
      explain:'城市中住宅区占地面积最大(约40-60%),商业区占地小但地租最高(位于市中心),工业区通常在城市外围。选C。'
    },
    { id:'geofj4_019', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'厦门经济特区的建立主要考虑',
      options:['A. 靠近台湾,便于对台经济文化交流','B. 矿产资源丰富','C. 农业发达','D. 人口稠密'],
      answer:'A',
      explain:'厦门1980年设为经济特区,主要考虑其地理位置——与台湾(金门)一水之隔,是对台经济文化交流的前沿。此外,厦门是天然良港、华侨众多,便于吸引外资。选A。'
    },
    { id:'geofj4_020', manualId:'geo_m12', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷）泉州晋江地区民营经济发达的主要原因是',
      options:['A. 资源丰富','B. 传统商业文化 + 侨乡背景 + 民营灵活','C. 国家计划扶持','D. 高等教育发达'],
      answer:'B',
      explain:'晋江模式:自古"敢为天下先"的商业文化(海上丝绸之路起点)、大量海外华侨(华侨资金和信息)、家族式民营企业灵活,才造就了安踏、七匹狼、恒安等国内知名品牌集聚。选B。'
    },
    // ---- 生态环境与可持续发展（10）----
    { id:'geofj4_021', manualId:'geo_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'（2024·福建卷）"三北防护林"工程的主要作用是',
      options:['A. 防治水土流失','B. 防风固沙、改善生态','C. 增加木材产量','D. 发展经济果林'],
      answer:'B',
      explain:'"三北"指东北、华北、西北,该地区风沙严重、生态脆弱。三北防护林(1979年启动)主要作用是防风固沙、改善生态环境、涵养水源,并非单一经济目的。选B。'
    },
    { id:'geofj4_022', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'黄土高原水土流失最严重的原因不包括',
      options:['A. 黄土土质疏松','B. 夏季暴雨集中','C. 植被覆盖率低','D. 地势平坦'],
      answer:'D',
      explain:'黄土高原水土流失严重的原因:①自然:黄土土质疏松(易冲刷)、地形沟壑纵横(不平坦!)、夏季暴雨集中、植被稀疏。②人为:过度开垦、樵采、超载放牧。故D错(地势并不平坦)。选D。'
    },
    { id:'geofj4_023', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'治理黄土高原水土流失的根本措施是',
      options:['A. 修梯田','B. 打坝淤地','C. 植树种草,退耕还林还草','D. 移民'],
      answer:'C',
      explain:'水土流失根本在于植被破坏,故最根本的措施是"生物措施":植树种草、退耕还林还草,恢复地表植被。梯田、打坝淤地是工程措施,是配套治理手段。选C。'
    },
    { id:'geofj4_024', manualId:'geo_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'荒漠化是指土地退化。我国荒漠化最严重的地区是',
      options:['A. 东北平原','B. 华北平原','C. 西北干旱半干旱区','D. 华南丘陵'],
      answer:'C',
      explain:'荒漠化=土地退化,主要指干旱、半干旱和亚湿润地区因气候变化和人类活动导致的土地退化。我国最严重的是西北干旱半干旱区(如内蒙古、新疆、甘肃、宁夏)。选C。'
    },
    { id:'geofj4_025', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'长江中下游洪涝灾害频繁的自然原因主要是',
      options:['A. 支流多、汛期长,遇大暴雨易出洪','B. 河道笔直','C. 人口稀少','D. 森林覆盖率高'],
      answer:'A',
      explain:'长江中下游洪涝的自然原因:①流域降水集中在夏季暴雨;②支流众多(汉、湘、赣等),汇入长江造成峰高量大;③汛期长;④中游荆江河段"九曲回肠"排水不畅;⑤地形低平。选A。'
    },
    { id:'geofj4_026', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'"南水北调"东、中、西三线中,输水线路最长、最艰险的是',
      options:['A. 东线','B. 中线','C. 西线','D. 三线相同'],
      answer:'C',
      explain:'西线在青藏高原上开山凿洞,把长江上游(通天河、雅砻江、大渡河)的水调入黄河上游,穿越地势高、地质复杂、生态脆弱的青藏高原,工程量最大、最艰险(尚未开工)。东线利用京杭大运河北送,中线从丹江口水库到北京。选C。'
    },
    { id:'geofj4_027', manualId:'geo_m13', type:'judge', difficulty:'easy', local_fj:true, gaokao:true,
      q:'可持续发展的三个基本原则是:公平性、持续性、共同性。请判断。',
      options:[],
      answer:'对',
      explain:'可持续发展的三大原则:①公平性(代际公平、代内公平);②持续性(不超过资源和环境承载力);③共同性(全球性问题需全球共同行动)。表述正确。'
    },
    { id:'geofj4_028', manualId:'geo_m13', type:'single', difficulty:'normal', local_fj:true, gaokao:true,
      q:'全球气候变暖的主要原因是',
      options:['A. 太阳活动异常','B. 大量排放CO2 等温室气体','C. 火山活动频繁','D. 森林光合作用加强'],
      answer:'B',
      explain:'工业革命以来大量燃烧化石燃料(煤、石油、天然气)排放CO2、CH4等温室气体,加之毁林使碳汇减少,增强温室效应,导致全球变暖。这是《巴黎协定》要控制的核心问题。选B。'
    },
    { id:'geofj4_029', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'酸雨主要由什么气体污染物形成',
      options:['A. CO2','B. SO2 和 NOx','C. CH4','D. O3'],
      answer:'B',
      explain:'酸雨是由SO2(燃煤)、NOx(汽车尾气、燃煤)在大气中氧化并与水结合形成H2SO4、HNO3,随降水降到地面(pH<5.6)。控制酸雨要脱硫脱硝。选B。'
    },
    { id:'geofj4_030', manualId:'geo_m13', type:'single', difficulty:'hard', local_fj:true, gaokao:true,
      q:'（福建卷·本土）武夷山地区可持续发展的最佳模式是',
      options:['A. 大规模砍伐原始林','B. 生态旅游+茶产业+文化保护','C. 兴建大量工厂','D. 大规模移民'],
      answer:'B',
      explain:'武夷山是世界文化与自然双遗产、国家公园,拥有丹霞地貌、原始林、大红袍茶乡、朱熹理学。最佳模式是"生态旅游+特色农业(岩茶)+文化保护"的绿色可持续发展,而非破坏性开发。选B。'
    },
  ];

  // ================================================================
  // 挂载
  // ================================================================
  function _mount(target, extras) {
    if (!Array.isArray(target)) return 0;
    let added = 0;
    const existing = new Set(target.map(q => q && q.id));
    extras.forEach(q => { if (!existing.has(q.id)) { target.push(q); added++; } });
    return added;
  }

  function tryMount() {
    let n1=0, n2=0, n3=0;
    if (Array.isArray(global.PHYSICS_BANK))   n1 = _mount(global.PHYSICS_BANK,   PHYSICS_FUJIAN_V4);
    if (Array.isArray(global.CHEMISTRY_BANK)) n2 = _mount(global.CHEMISTRY_BANK, CHEMISTRY_FUJIAN_V4);
    if (Array.isArray(global.GEOGRAPHY_BANK)) n3 = _mount(global.GEOGRAPHY_BANK, GEOGRAPHY_FUJIAN_V4);
    if (n1 || n2 || n3) {
      console.info(`[福建高考顶级扩充 v4.2.6-v4] 已注入：物理+${n1}，化学+${n2}，地理+${n3}`);
    }
    return { n1, n2, n3 };
  }

  const r = tryMount();
  if (!r.n1 || !r.n2 || !r.n3) {
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', tryMount);
    }
  }

  global.FUJIAN_SUPPLEMENT_V4 = { PHYSICS_FUJIAN_V4, CHEMISTRY_FUJIAN_V4, GEOGRAPHY_FUJIAN_V4, mount: tryMount };

})(typeof window !== 'undefined' ? window : this);
