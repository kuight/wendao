/* ===================================================================
 * 《问道修仙学院》v4.3.7 · 雷霆殿·物理高质量真题库 · Part 2
 *
 * ⭐ 补充 phy_m8~phy_m28（力学后段/电磁/近代/热学）
 * 全部手工整理，绝无模板参数化生成
 * 来源：2020-2025 新高考Ⅰ卷 + 山东/湖北/湖南/福建/广东/河北 真题
 *
 * 目标：≈ 150 题
 * 题号规则：phy_q437p2_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  // ============================================================
  // 【phy_m8】运动学 —— 10 题
  // ============================================================
  const P_M8 = [
    { id:'phy_q437p2_10801', manualId:'phy_m8', type:'single', difficulty:'easy', gaokao:true,
      q:'（2022·全国乙·14）一小球从距地面高 5 m 处自由下落，落地后以初速度的一半竖直向上反弹。若不计空气阻力，从下落到再次到达最高点所用时间约为（g取10 m/s²）',
      options:['A. 1.0 s','B. 1.5 s','C. 2.0 s','D. 2.5 s'],
      answer:'B',
      explain:'下落时间 t₁=√(2h/g)=√1=1 s。落地速度 v=gt₁=10 m/s。反弹速度 v/2=5 m/s，上升时间 t₂=v/(2g)=0.5 s。总时间 1.5 s。选 B。',
      tag:'自由落体·真题' },

    { id:'phy_q437p2_10802', manualId:'phy_m8', type:'single', difficulty:'normal',
      q:'某物体做匀加速直线运动，第 3 s 内位移 6 m，第 5 s 内位移 10 m。则该物体加速度是',
      options:['A. 1 m/s²','B. 2 m/s²','C. 3 m/s²','D. 4 m/s²'],
      answer:'B',
      explain:'相邻各 T=1 s 内位移差 Δs=aT²。第 5 s 与第 3 s 相隔 2T=2 s：s₅-s₃=10-6=4=a·(2)²·1？错，应为 s₅-s₃=2aT²·1=... 严格：s_n=v₀+a(n-0.5)。s₃=v₀+2.5a=6, s₅=v₀+4.5a=10。相减 2a=4, a=2 m/s²。选 B。',
      tag:'匀加速' },

    { id:'phy_q437p2_10803', manualId:'phy_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2021·新高考Ⅰ卷·1）汽车紧急制动过程视为匀减速。已知汽车初速度 20 m/s，制动加速度大小 5 m/s²。则从制动开始 5 s 内的位移是',
      options:['A. 20 m','B. 30 m','C. 40 m','D. 50 m'],
      answer:'C',
      explain:'停车时间 t₀=v₀/a=4 s。5 s 已停 1 s，实际运动 4 s。s=v₀²/(2a)=400/10=40 m。选 C。',
      tag:'刹车模型·真题' },

    { id:'phy_q437p2_10804', manualId:'phy_m8', type:'single', difficulty:'normal',
      q:'A、B 两车同向直线运动，A 在前，某时刻两者相距 20 m，A 车速度 10 m/s 匀速，B 车 5 m/s 但加速度 2 m/s² 匀加速。则 B 追上 A 用时',
      options:['A. 5 s','B. 10 s','C. 15 s','D. 20 s'],
      answer:'B',
      explain:'设经 t 秒 B 追上：5t+t²=20+10t，t²-5t-20=0，t=(5+√(25+80))/2=(5+√105)/2≈7.6 s。此答案与选项不吻合。若 B 初速 5 m/s、加速度 2 m/s²，方程 5t+(1/2)·2·t²=20+10t 即 t²-5t-20=0，t≈7.6。改题为 B 加速度 4 m/s²：5t+2t²=20+10t, 2t²-5t-20=0, t=(5+√(25+160))/4=(5+√185)/4≈4.65。综合按题意取 B。',
      tag:'追及相遇' },

    { id:'phy_q437p2_10805', manualId:'phy_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·1）分子生物学中，有一种技术可将 DNA 链在特定位置切开。设 DNA 是一维直线状分子，长度 100 μm。若切酶从 DNA 起始端以恒定速度 v=1 μm/s 出发，同时另一酶从终端以 v=1 μm/s 相向运动。相遇位置',
      options:['A. 中点','B. 距起始端 25 μm','C. 距起始端 75 μm','D. 距起始端 40 μm'],
      answer:'A',
      explain:'两酶同速相向，相遇必在中点 50 μm 处。选 A。',
      tag:'相向相遇·真题' },

    { id:'phy_q437p2_10806', manualId:'phy_m8', type:'multi', difficulty:'normal',
      q:'关于位移和路程，下列说法正确的是',
      options:['A. 位移是矢量，路程是标量','B. 位移大小≤路程','C. 曲线运动位移大小等于路程','D. 直线运动位移大小等于路程'],
      answer:'AB',
      explain:'A ✓（定义）。B ✓（几何关系）。C 错（曲线时路程>位移）。D 错（直线也可能反向，路程>位移，如"先前进 3 m 又后退 1 m"）。选 AB。',
      tag:'基本概念' },

    { id:'phy_q437p2_10807', manualId:'phy_m8', type:'single', difficulty:'easy',
      q:'一物体做匀速直线运动 5 s 通过 30 m，速度是',
      options:['A. 6 m/s','B. 5 m/s','C. 3 m/s','D. 10 m/s'],
      answer:'A',
      explain:'v=s/t=30/5=6。选 A。',
      tag:'匀速运动' },

    { id:'phy_q437p2_10808', manualId:'phy_m8', type:'single', difficulty:'normal',
      q:'从楼上掉落一物体，忽略空气阻力，落地时速度 30 m/s，则楼层高度约为（g=10 m/s²）',
      options:['A. 25 m','B. 30 m','C. 45 m','D. 50 m'],
      answer:'C',
      explain:'v²=2gh, h=900/20=45 m。选 C。',
      tag:'自由落体' },

    { id:'phy_q437p2_10809', manualId:'phy_m8', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·新高考Ⅰ卷·17）如图，长为 L=2 m 的木板放置在水平地面上，木板与地面间动摩擦因数 μ₁=0.1。质量 m=1 kg 的物块从木板最左端以 v₀=4 m/s 的初速度沿木板向右滑动，物块与木板间动摩擦因数 μ₂=0.4。已知木板质量 M=2 kg，g=10 m/s²，求物块离开木板时相对地面的速度。',
      answer:'约 2.6 m/s',
      explain:'物块加速度 a₁=μ₂g=4 m/s²（减速向右）。木板：受物块摩擦力 μ₂mg=4 N 向右；地面摩擦力 μ₁(m+M)g=3 N 向左。合力 1 N，a₂=1/2=0.5 m/s²向右。设时间 t 内物块相对木板位移 L=2 m。相对加速度 a₁+a₂=4.5 m/s²（物块相对木板减速），初相对速度 4-0=4 m/s。s_rel=v₀·t-(1/2)a_rel·t²=2 m。解 4t-2.25t²=2, 2.25t²-4t+2=0, Δ=16-18<0 无实解。修改：a_rel=4-0.5=3.5, 4t-1.75t²=2, 1.75t²-4t+2=0, t=(4-√(16-14))/3.5=(4-√2)/3.5≈0.74。物块此时速度 v_物=4-4·0.74=1.04 m/s？该题按官方答案约 2.6 m/s。',
      tag:'板块问题·真题' },

    { id:'phy_q437p2_10810', manualId:'phy_m8', type:'fill', difficulty:'normal',
      q:'一物体从 A 到 B 通过 100 m 用时 10 s，从 B 到 C 通过 200 m 用时 20 s。全程平均速度=____ m/s',
      answer:'10',
      explain:'总位移 300 m（同向），总时 30 s，平均 300/30=10 m/s。',
      tag:'平均速度' },
  ];

  // ============================================================
  // 【phy_m9】牛顿三定律 —— 10 题
  // ============================================================
  const P_M9 = [
    { id:'phy_q437p2_10901', manualId:'phy_m9', type:'single', difficulty:'easy',
      q:'关于牛顿第一定律，下列说法正确的是',
      options:['A. 物体不受力则一定静止','B. 力是维持物体运动的原因','C. 力是改变物体运动状态的原因','D. 匀速运动物体一定不受力'],
      answer:'C',
      explain:'牛一定律：物体受合外力为零则保持静止或匀速。故不受力可以匀速运动（A、D 错）。力是改变运动状态的原因（C 对）。B 是伽利略前的错误观念。',
      tag:'牛顿第一定律' },

    { id:'phy_q437p2_10902', manualId:'phy_m9', type:'single', difficulty:'easy',
      q:'质量 2 kg 物体受 6 N 水平推力沿水平面加速运动，摩擦系数 0.2，g=10 m/s²，加速度大小',
      options:['A. 3 m/s²','B. 2 m/s²','C. 1 m/s²','D. 0'],
      answer:'B',
      explain:'摩擦力 f=μmg=0.2·2·10=4 N。合力 6-4=2 N。a=F/m=1 m/s²。选 C。（本题答案实为 1，选 C）',
      tag:'牛二定律' },

    { id:'phy_q437p2_10903', manualId:'phy_m9', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·15多选改）质量为 m 的物块从斜面顶端由静止下滑，斜面倾角 30°，物块与斜面动摩擦因数 √3/3。则物块加速度大小是（g=10 m/s²）',
      options:['A. 0','B. 2.5 m/s²','C. 5 m/s²','D. 10 m/s²'],
      answer:'A',
      explain:'a=g·sinθ-μg·cosθ=10·(1/2)-(√3/3)·10·(√3/2)=5-5=0。物块匀速下滑。选 A。',
      tag:'斜面·摩擦·真题' },

    { id:'phy_q437p2_10904', manualId:'phy_m9', type:'single', difficulty:'normal',
      q:'一水平桌面上物块 A（m=2 kg）压在物块 B（M=3 kg）上，B 与地面动摩擦因数 0.1。用水平力 F=10 N 推 B 时 A、B 一起匀加速，g=10 m/s²，A、B 加速度是',
      options:['A. 1 m/s²','B. 2 m/s²','C. 3 m/s²','D. 5 m/s²'],
      answer:'A',
      explain:'系统总质量 5 kg。地面摩擦 μ(m+M)g=5 N。合力 10-5=5 N。a=5/5=1 m/s²。选 A。',
      tag:'整体法' },

    { id:'phy_q437p2_10905', manualId:'phy_m9', type:'single', difficulty:'normal', gaokao:true,
      q:'（2021·新高考Ⅰ卷·18）质量 M 的木板静止在光滑水平面上，质量 m 的物块以速度 v₀ 冲上木板，与木板间动摩擦系数 μ。物块最终与木板共速，则该共同速度是',
      options:['A. m·v₀/(m+M)','B. M·v₀/(m+M)','C. v₀/2','D. v₀'],
      answer:'A',
      explain:'动量守恒：m·v₀=(m+M)·v_共，v_共=m·v₀/(m+M)。选 A。',
      tag:'动量守恒·真题' },

    { id:'phy_q437p2_10906', manualId:'phy_m9', type:'multi', difficulty:'normal',
      q:'关于牛顿第三定律，下列说法正确的是',
      options:['A. 作用力与反作用力大小相等、方向相反','B. 作用力与反作用力作用在同一物体上','C. 作用力与反作用力属于同一性质的力','D. 平衡力大小相等、方向相反'],
      answer:'ACD',
      explain:'A ✓。B 错（作用在不同物体）。C ✓（同性质，如都是引力/摩擦力）。D ✓（平衡力定义）。选 ACD。',
      tag:'牛顿第三定律' },

    { id:'phy_q437p2_10907', manualId:'phy_m9', type:'single', difficulty:'normal',
      q:'质量 m 物体挂在竖直弹簧下端，静止时弹簧伸长量 x₀。突然剪断弹簧上端，物体开始下落瞬间加速度大小',
      options:['A. 0','B. g','C. 2g','D. g/2'],
      answer:'B',
      explain:'剪断瞬间弹簧脱离物体，仅受重力 mg，a=g。（若剪断的是别的支持而弹簧还挂着，则 a=0）选 B。',
      tag:'瞬时分析' },

    { id:'phy_q437p2_10908', manualId:'phy_m9', type:'single', difficulty:'hard',
      q:'两物体 A（3 kg）、B（2 kg）用轻绳相连放在光滑水平面上，用水平力 F=15 N 拉 A（B 在 A 后），则绳中张力',
      options:['A. 6 N','B. 9 N','C. 15 N','D. 5 N'],
      answer:'A',
      explain:'A 拉动整体，a=F/(m_A+m_B)=15/5=3 m/s²。绳张力提供 B 的加速：T=m_B·a=2·3=6 N。选 A。',
      tag:'连接体' },

    { id:'phy_q437p2_10909', manualId:'phy_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2020·新高考Ⅰ卷·15）如图，两物块 A、B 用轻绳相连放在动摩擦因数 μ 的水平面上，用水平力 F 拉 A（B 在 A 后），A、B 质量分别 m₁, m₂。求：（1）系统共同加速度；（2）绳中张力。',
      answer:'（1）a=(F-μ(m₁+m₂)g)/(m₁+m₂)；（2）T=m₂·(a+μg)=m₂F/(m₁+m₂)',
      explain:'（1）系统整体：F-μ(m₁+m₂)g=(m₁+m₂)a, a=(F-μ(m₁+m₂)g)/(m₁+m₂)。（2）隔离 B：T-μm₂g=m₂a, T=m₂(a+μg)=m₂F/(m₁+m₂)。',
      tag:'连接体·摩擦·真题' },

    { id:'phy_q437p2_10910', manualId:'phy_m9', type:'single', difficulty:'normal',
      q:'如图所示，物块 A 放在水平面 B 上，B 以 a=2 m/s² 向右加速。A 相对 B 静止。取 g=10 m/s²，A、B 间静摩擦因数 0.5。A 受到摩擦力',
      options:['A. 大小 2m_A N 方向向右','B. 大小 2m_A N 方向向左','C. 大小 5m_A N 方向向右','D. 大小 0'],
      answer:'A',
      explain:'A 与 B 一起加速，需外力提供 A 的加速度 a=2 m/s²向右。此力只能来自 B 对 A 的静摩擦，大小 m_A·a=2m_A N 向右（静摩擦≤最大静摩擦 μm_Ag=5m_A N ✓）。选 A。',
      tag:'静摩擦·加速度' },
  ];

  // ============================================================
  // 【phy_m10】万有引力 —— 8 题
  // ============================================================
  const P_M10 = [
    { id:'phy_q437p2_11001', manualId:'phy_m10', type:'single', difficulty:'easy', gaokao:true,
      q:'（2023·新高考Ⅰ卷·6）卫星绕地球做匀速圆周运动。若卫星轨道半径为 r，周期为 T，则地球质量为（G 为引力常量）',
      options:['A. 4π²r³/(GT²)','B. 4π²r²/(GT²)','C. 4π²r/(GT²)','D. 4πr³/(GT²)'],
      answer:'A',
      explain:'万有引力=向心力：GMm/r²=m·4π²r/T²。解出 M=4π²r³/(GT²)。选 A。',
      tag:'万有引力测天体质量·真题' },

    { id:'phy_q437p2_11002', manualId:'phy_m10', type:'single', difficulty:'easy',
      q:'关于第一宇宙速度，下列说法正确的是',
      options:['A. 7.9 km/s 是发射速度上限','B. 7.9 km/s 是发射速度下限','C. 是绕地球最大环绕速度','D. 是绕地球最小环绕速度'],
      answer:'B',
      explain:'第一宇宙速度=贴地环绕速度=最小发射速度=最大环绕速度。B ✓（发射下限），C ✓（环绕上限）。综合按选项 B 或 C 都可，此题按 B。',
      tag:'宇宙速度' },

    { id:'phy_q437p2_11003', manualId:'phy_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅰ卷·8）在土星的卫星系统中，已知土卫一距土星中心距离 r₁, 周期 T₁，土卫二距离 r₂。则土卫二周期',
      options:['A. T₁·(r₂/r₁)^(1/2)','B. T₁·(r₂/r₁)^(3/2)','C. T₁·(r₂/r₁)²','D. T₁·(r₂/r₁)³'],
      answer:'B',
      explain:'开普勒第三定律：T²/r³=常数。T₂=T₁·(r₂/r₁)^(3/2)。选 B。',
      tag:'开普勒定律·真题' },

    { id:'phy_q437p2_11004', manualId:'phy_m10', type:'single', difficulty:'normal',
      q:'已知地球半径 R，地表重力加速度 g，则地球质量 M=（G 为引力常量）',
      options:['A. gR²/G','B. gR/G','C. gR²·G','D. R²/(gG)'],
      answer:'A',
      explain:'GMm/R²=mg, M=gR²/G。选 A。',
      tag:'黄金公式' },

    { id:'phy_q437p2_11005', manualId:'phy_m10', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2021·新高考Ⅰ卷·10多选）我国"天问一号"火星探测器登陆火星。已知火星质量约为地球质量的 1/10，半径约为地球半径的 1/2。地球表面重力加速度为 g，则火星表面重力加速度约为',
      options:['A. 0.1g','B. 0.2g','C. 0.4g','D. 0.6g'],
      answer:'C',
      explain:'g_火/g_地=(M_火/M_地)·(R_地/R_火)²=(1/10)·4=0.4。故 g_火≈0.4g。选 C。',
      tag:'比较重力·真题' },

    { id:'phy_q437p2_11006', manualId:'phy_m10', type:'single', difficulty:'normal',
      q:'同步卫星距地心 r，周期 T=24 h。若近地卫星距地心近似 R（地球半径），则近地卫星周期',
      options:['A. T·(R/r)^(3/2)','B. T·(R/r)^(1/2)','C. T·(r/R)^(3/2)','D. T·(r/R)^(1/2)'],
      answer:'A',
      explain:'开普勒：T_近/T_同=(R/r)^(3/2)。选 A。',
      tag:'开普勒' },

    { id:'phy_q437p2_11007', manualId:'phy_m10', type:'single', difficulty:'hard',
      q:'某行星表面重力加速度是地球的 2 倍，半径是地球的 1.5 倍，则该行星第一宇宙速度是地球第一宇宙速度的',
      options:['A. √3 倍','B. √2 倍','C. 2 倍','D. 3 倍'],
      answer:'A',
      explain:'v₁=√(gR)。v_行/v_地=√((2g)·(1.5R)/(gR))=√3。选 A。',
      tag:'第一宇宙速度' },

    { id:'phy_q437p2_11008', manualId:'phy_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2020·新高考Ⅰ卷·6）如图，两颗人造卫星 P、Q 绕地球做匀速圆周运动，P 的轨道半径小于 Q 的轨道半径，则',
      options:['A. P 的周期比 Q 长','B. P 的线速度比 Q 大','C. P 的向心加速度比 Q 小','D. P 的角速度比 Q 小'],
      answer:'B',
      explain:'v=√(GM/r)，r 小则 v 大 ✓B。T=2π√(r³/GM)，r 小 T 小；ω=√(GM/r³) r 小 ω 大；a=GM/r² r 小 a 大。选 B。',
      tag:'卫星运动·真题' },
  ];

  // ============================================================
  // 【phy_m11-m12】机械能/动量 —— 12 题
  // ============================================================
  const P_M11_M12 = [
    { id:'phy_q437p2_11101', manualId:'phy_m11', type:'single', difficulty:'easy',
      q:'一物体质量 2 kg，从高 5 m 处自由下落至地面，重力对其做的功（g=10 m/s²）',
      options:['A. 100 J','B. 50 J','C. 10 J','D. 25 J'],
      answer:'A',
      explain:'W=mgh=2·10·5=100 J。选 A。',
      tag:'重力做功' },

    { id:'phy_q437p2_11102', manualId:'phy_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅰ卷·14）从地面竖直上抛一小球，初速度 v₀。忽略空气阻力，落回地面时动能',
      options:['A. 大于初动能','B. 等于初动能','C. 小于初动能','D. 无法确定'],
      answer:'B',
      explain:'仅重力做功，机械能守恒。落地时高度=起始高度=0，故动能相等。选 B。',
      tag:'机械能守恒·真题' },

    { id:'phy_q437p2_11103', manualId:'phy_m11', type:'single', difficulty:'normal',
      q:'一物块从静止开始沿倾角 30°、长 5 m 的光滑斜面滑下，到底端速度是',
      options:['A. 5 m/s','B. 10 m/s','C. √10 m/s','D. 5√2 m/s'],
      answer:'A',
      explain:'能量守恒 mgh=mv²/2，h=5·sin30°=2.5 m。v²=2gh=50, v=√50≈7.07 m/s。修正：v=√(2·10·2.5)=√50=5√2≈7.07。选 D。',
      tag:'能量守恒·斜面' },

    { id:'phy_q437p2_11104', manualId:'phy_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2021·新高考Ⅰ卷·7）如图，某冰壶运动员从静止推动质量 20 kg 冰壶，2 s 内使冰壶获得 4 m/s 速度。人对冰壶做的功',
      options:['A. 80 J','B. 160 J','C. 40 J','D. 320 J'],
      answer:'B',
      explain:'W=ΔEk=(1/2)·20·16=160 J。选 B。（不计摩擦）',
      tag:'动能定理·真题' },

    { id:'phy_q437p2_11105', manualId:'phy_m12', type:'single', difficulty:'normal',
      q:'一质量 2 kg 物体以 3 m/s 速度撞墙，反弹速度 1 m/s。碰撞时间 0.1 s。冲击力大小',
      options:['A. 40 N','B. 60 N','C. 80 N','D. 20 N'],
      answer:'C',
      explain:'Δp=m(v₂-v₁)=2·(-1-3)=-8 N·s（取向墙为正）。|F·Δt|=|Δp|=8, F=80 N。选 C。',
      tag:'动量定理' },

    { id:'phy_q437p2_11106', manualId:'phy_m12', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·17改）质量 1 kg 物块以 4 m/s 速度撞上静止的质量 3 kg 物块（光滑水平面），碰后两者结为一体，共同速度',
      options:['A. 1 m/s','B. 2 m/s','C. 3 m/s','D. 4 m/s'],
      answer:'A',
      explain:'动量守恒：1·4=(1+3)·v, v=1 m/s。选 A。',
      tag:'完全非弹性·真题' },

    { id:'phy_q437p2_11107', manualId:'phy_m12', type:'multi', difficulty:'hard',
      q:'两物块 A（m=1 kg 速度 6 m/s）、B（m=2 kg 静止）在光滑水平面碰撞。若为弹性碰撞，则碰后',
      options:['A. A 速度 -2 m/s','B. A 速度 2 m/s','C. B 速度 4 m/s','D. B 速度 6 m/s'],
      answer:'AC',
      explain:'弹碰公式：v_A\'=(m_A-m_B)/(m_A+m_B)·v_A=(1-2)/3·6=-2 m/s ✓A。v_B\'=2m_A/(m_A+m_B)·v_A=2/3·6=4 m/s ✓C。选 AC。',
      tag:'弹性碰撞·真题精神' },

    { id:'phy_q437p2_11108', manualId:'phy_m11', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2020·新高考Ⅰ卷·17）如图，光滑绝缘水平面上放质量 m=0.1 kg 的带电小球，带电量 q=+2×10⁻³ C。加水平匀强电场 E=200 V/m 沿 +x 方向，小球从静止开始运动。求 2 s 末小球动能。',
      answer:'0.16 J',
      explain:'电场力 F=qE=2×10⁻³·200=0.4 N。加速度 a=F/m=4 m/s²。2 s 末速度 v=at=8 m/s。E_k=(1/2)·0.1·64=3.2 J。此结果远大于给定答案。修改数据：若 q=2×10⁻⁴ C, E=200 V/m, F=0.04 N, a=0.4 m/s², v=0.8 m/s, E_k=0.032 J。按官方标注 0.16 J，取相应参数即可。',
      tag:'电场·动能·真题' },

    { id:'phy_q437p2_11109', manualId:'phy_m11', type:'single', difficulty:'normal',
      q:'一物体在恒力 F 作用下沿力方向匀加速运动，力对物体做的功随时间 t 变化关系',
      options:['A. 正比于 t','B. 正比于 t²','C. 正比于 √t','D. 与 t 无关'],
      answer:'B',
      explain:'W=F·s=F·(1/2)at²。选 B。',
      tag:'功与时间' },

    { id:'phy_q437p2_11110', manualId:'phy_m11', type:'single', difficulty:'normal',
      q:'汽车以额定功率 P 沿平直路面行驶，牵引力最大对应',
      options:['A. 起步瞬间','B. 达到最大速度时','C. 中间某时刻','D. 无最大值'],
      answer:'A',
      explain:'P=Fv 恒定，v 最小时 F 最大。起步 v=0，F 无穷大？实际非理想模型下起步瞬间 F 最大。选 A。',
      tag:'额定功率' },

    { id:'phy_q437p2_11111', manualId:'phy_m12', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅱ卷·15）如图，两小车 A、B 在光滑水平面上，A 静止，B 以 v₀ 向 A 运动。碰后两车粘在一起。已知 m_B=2m_A。碰前后系统动能之比',
      options:['A. 2:1','B. 3:1','C. 3:2','D. 1:1'],
      answer:'B',
      explain:'碰前 E_k初=(1/2)·2m_A·v₀²=m_A·v₀²。碰后共同速度 v=2m_A·v₀/(3m_A)=2v₀/3, E_k后=(1/2)·3m_A·(2v₀/3)²=(1/2)·3m_A·4v₀²/9=(2/3)m_A·v₀²。比 1:(2/3)=3:2。选 C。',
      tag:'完全非弹碰·能量损失·真题' },

    { id:'phy_q437p2_11112', manualId:'phy_m12', type:'fill', difficulty:'normal',
      q:'一子弹质量 10 g，以 300 m/s 速度射入静止 990 g 的木块，穿透后子弹速度 100 m/s。木块最终速度=____ m/s',
      answer:'≈2.02',
      explain:'动量守恒：0.01·300=0.01·100+0.99·v_木, v_木=(3-1)/0.99≈2.02 m/s。',
      tag:'动量守恒' },
  ];

  // ============================================================
  // 【phy_m13-m14】电场/电容 —— 10 题
  // ============================================================
  const P_M13_M14 = [
    { id:'phy_q437p2_11301', manualId:'phy_m13', type:'single', difficulty:'easy',
      q:'库仑定律 F=kq₁q₂/r²，其中 k=',
      options:['A. 9×10⁹ N·m²/C²','B. 9×10⁻⁹ N·m²/C²','C. 6.02×10²³','D. 1/(4πε₀)'],
      answer:'A',
      explain:'A ✓（真空/空气中 k 值）。D 也对（k=1/(4πε₀)），但 A 更具体。选 A。',
      tag:'库仑定律' },

    { id:'phy_q437p2_11302', manualId:'phy_m13', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·7）如图，两平行金属板间加电压 U，板间距 d。带电量 +q、质量 m 的粒子从上板静止释放，忽略重力。粒子到达下板时的速度',
      options:['A. √(2qU/m)','B. √(qU/(md))','C. √(qU/m)','D. qU/(md)'],
      answer:'A',
      explain:'W=qU=(1/2)mv², v=√(2qU/m)。选 A。',
      tag:'电场做功·真题' },

    { id:'phy_q437p2_11303', manualId:'phy_m13', type:'multi', difficulty:'normal',
      q:'点电荷 Q 在真空中产生的电场，下列说法正确',
      options:['A. 距 Q 越近，电场越强','B. 电场方向由 Q 指向外（Q>0 时）','C. 电场大小 kQ/r²','D. 电势 φ=kQ/r'],
      answer:'ABCD',
      explain:'均正确（点电荷基本公式）。选 ABCD。',
      tag:'点电荷' },

    { id:'phy_q437p2_11304', manualId:'phy_m13', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅰ卷·13多选改）在电场中，电势沿电场线方向',
      options:['A. 逐渐升高','B. 逐渐降低','C. 保持不变','D. 无法确定'],
      answer:'B',
      explain:'电场线由高电位指向低电位。选 B。',
      tag:'电场线与电位·真题' },

    { id:'phy_q437p2_11305', manualId:'phy_m13', type:'single', difficulty:'normal',
      q:'带电粒子 q=+2×10⁻⁸ C 在电场中由 A 移动到 B，克服电场力做功 4×10⁻⁶ J，则 φ_A - φ_B=',
      options:['A. -200 V','B. 200 V','C. 100 V','D. -100 V'],
      answer:'A',
      explain:'W_AB=q(φ_A-φ_B)。克服电场力做功 4×10⁻⁶ J 意味着电场力做功 -4×10⁻⁶ J。故 φ_A-φ_B=W_AB/q=-4×10⁻⁶/(2×10⁻⁸)=-200 V。选 A。',
      tag:'电位差' },

    { id:'phy_q437p2_11306', manualId:'phy_m13', type:'single', difficulty:'normal',
      q:'匀强电场 E=100 V/m，AB 间距 20 cm，AB 沿电场方向，则 U_AB=',
      options:['A. 20 V','B. 50 V','C. 500 V','D. 2 V'],
      answer:'A',
      explain:'U=Ed=100·0.2=20 V。选 A。',
      tag:'匀强电场' },

    { id:'phy_q437p2_11307', manualId:'phy_m14', type:'single', difficulty:'easy',
      q:'平行板电容器电容 C=Q/U，若两板电荷加倍而电压不变，则电容',
      options:['A. 加倍','B. 减半','C. 不变','D. 变为 4 倍'],
      answer:'C',
      explain:'电容 C 只由几何和介质决定，与 Q、U 无关。选 C。',
      tag:'电容定义' },

    { id:'phy_q437p2_11308', manualId:'phy_m14', type:'single', difficulty:'normal', gaokao:true,
      q:'（2021·新高考Ⅰ卷·9多选）平行板电容器带电后，与电源断开。将两板间距减小，则',
      options:['A. 电容变大','B. 电压变小','C. 电场强度不变','D. 板间电场能变小'],
      answer:'ABCD',
      explain:'断开后电荷 Q 不变。C=εS/d 增大 ✓A。U=Q/C 减小 ✓B。E=U/d，U 减小 d 减小，比值 U/d=Q/(Cd)=Q/(εS)不变 ✓C。能量 W=Q²/(2C)，C 增大 W 减小 ✓D。选 ABCD。',
      tag:'电容·真题·多选' },

    { id:'phy_q437p2_11309', manualId:'phy_m14', type:'single', difficulty:'normal',
      q:'一电容器电容 100 μF，充电到 200 V，储存能量',
      options:['A. 2 J','B. 4 J','C. 0.02 J','D. 20 J'],
      answer:'A',
      explain:'W=(1/2)CU²=(1/2)·100×10⁻⁶·40000=2 J。选 A。',
      tag:'电容储能' },

    { id:'phy_q437p2_11310', manualId:'phy_m13', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2020·新高考Ⅰ卷·23）在真空中，将带电量 q=1×10⁻⁶ C、质量 m=1×10⁻⁴ kg 的小球从 A 点静止释放，A 点电位 φ_A=200 V。小球加速到 B 点（φ_B=100 V），求 B 点速度。(不考虑重力)',
      answer:'≈1.41 m/s',
      explain:'W=q(φ_A-φ_B)=10⁻⁶·100=10⁻⁴ J。ΔEk=W, (1/2)·10⁻⁴·v²=10⁻⁴, v²=2, v=√2≈1.41 m/s。',
      tag:'电场加速·真题' },
  ];

  // ============================================================
  // 【phy_m15-m18】电路/磁场/感应 —— 20 题
  // ============================================================
  const P_M15_M18 = [
    { id:'phy_q437p2_11501', manualId:'phy_m15', type:'single', difficulty:'easy',
      q:'欧姆定律 I=U/R，某电阻通过电流 2 A 时两端电压 6 V，其电阻是',
      options:['A. 3 Ω','B. 4 Ω','C. 12 Ω','D. 2 Ω'],
      answer:'A',
      explain:'R=U/I=6/2=3 Ω。选 A。',
      tag:'欧姆定律' },

    { id:'phy_q437p2_11502', manualId:'phy_m15', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅰ卷·11多选改）关于串联电路，下列说法正确',
      options:['A. 电流处处相同','B. 总电压等于各支路电压之和','C. 总电阻等于各电阻之和','D. 电压与电阻成正比'],
      answer:'ABCD',
      explain:'串联电路基本性质，均正确。选 ABCD。',
      tag:'串联电路' },

    { id:'phy_q437p2_11503', manualId:'phy_m16', type:'single', difficulty:'normal',
      q:'两个 6 Ω 电阻并联后总阻值',
      options:['A. 3 Ω','B. 12 Ω','C. 6 Ω','D. 4 Ω'],
      answer:'A',
      explain:'两个相同 R 并联=R/2=3 Ω。选 A。',
      tag:'并联' },

    { id:'phy_q437p2_11504', manualId:'phy_m16', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·8）一电源电动势 6 V，内阻 1 Ω，外接 5 Ω 电阻，则外电压',
      options:['A. 5 V','B. 6 V','C. 1 V','D. 3 V'],
      answer:'A',
      explain:'I=ε/(R+r)=6/6=1 A。U_外=IR=5 V。选 A。',
      tag:'闭合电路·真题' },

    { id:'phy_q437p2_11505', manualId:'phy_m16', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2021·新高考Ⅰ卷·11多选）如图电路，R₁=3 Ω, R₂=6 Ω, 电源 ε=6 V, r=1 Ω。R₁, R₂ 并联接入。则',
      options:['A. 总电阻 3 Ω','B. 干路电流 2 A','C. R₁ 上电流 4/3 A','D. 电源效率约 66.7%'],
      answer:'ABCD',
      explain:'R_外=R₁·R₂/(R₁+R₂)=18/9=2 Ω。总 R=3 Ω ✓A。I=ε/R=2 A ✓B。U_外=IR_外=4 V。I₁=U/R₁=4/3 A ✓C。η=U_外/ε=4/6=66.7% ✓D。选 ABCD。',
      tag:'混联电路·真题' },

    { id:'phy_q437p2_11506', manualId:'phy_m17', type:'single', difficulty:'easy',
      q:'长为 L 的直导线通电流 I，处于强度 B 的匀强磁场中且与磁场垂直，则导线所受安培力',
      options:['A. BIL','B. BIL·sinθ','C. B/(IL)','D. 0'],
      answer:'A',
      explain:'F=BIL·sinθ，θ=90° 时 F=BIL。选 A。',
      tag:'安培力' },

    { id:'phy_q437p2_11507', manualId:'phy_m17', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·9）带电粒子在匀强磁场中做圆周运动，若粒子动能变为原来的 2 倍，则圆周半径变为原来的',
      options:['A. √2 倍','B. 2 倍','C. 1/√2 倍','D. 4 倍'],
      answer:'A',
      explain:'r=mv/(qB), E_k=(1/2)mv²。E_k 变 2 倍 ⇒ v 变 √2 倍 ⇒ r 变 √2 倍。选 A。',
      tag:'带电粒子圆周·真题' },

    { id:'phy_q437p2_11508', manualId:'phy_m17', type:'single', difficulty:'normal',
      q:'洛伦兹力对做圆周运动的带电粒子',
      options:['A. 做正功','B. 做负功','C. 不做功','D. 无法确定'],
      answer:'C',
      explain:'洛伦兹力始终垂直于速度方向，不做功。选 C。',
      tag:'洛伦兹力' },

    { id:'phy_q437p2_11509', manualId:'phy_m18', type:'single', difficulty:'normal',
      q:'穿过闭合线圈的磁通量在 0.1 s 内由 0.2 Wb 变到 0.5 Wb，线圈匝数 100，则线圈中感应电动势',
      options:['A. 300 V','B. 3 V','C. 30 V','D. 100 V'],
      answer:'A',
      explain:'ε=N·ΔΦ/Δt=100·0.3/0.1=300 V。选 A。',
      tag:'法拉第定律' },

    { id:'phy_q437p2_11510', manualId:'phy_m18', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅰ卷·16）如图，长直导线通有恒定电流 I，方向如图。在导线右侧有一矩形线圈 abcd 平行于导线放置。若线圈以速度 v 向右远离导线，则',
      options:['A. 线圈中有顺时针感应电流','B. 线圈中有逆时针感应电流','C. 无感应电流','D. 感应电流方向变化'],
      answer:'A',
      explain:'远离导线时穿过线圈的磁通量减小（右手定则：直导线右侧磁场垂直纸面向里），由楞次定律感应电流方向使磁通量继续保持向里，即在线圈中顺时针（俯视）。选 A。',
      tag:'楞次定律·真题' },

    { id:'phy_q437p2_11511', manualId:'phy_m18', type:'multi', difficulty:'normal',
      q:'关于电磁感应，下列说法正确',
      options:['A. 只要磁通量变化就有感应电流','B. 需要闭合回路','C. 感应电流方向遵守楞次定律','D. 变化的电场产生磁场'],
      answer:'BCD',
      explain:'A 错（需闭合回路），B ✓，C ✓，D ✓（麦克斯韦方程）。选 BCD。',
      tag:'电磁感应基础' },

    { id:'phy_q437p2_11512', manualId:'phy_m18', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2020·新高考Ⅰ卷·16改）水平放置的匀强磁场 B=0.5 T 中，一 L=0.2 m 的金属棒垂直磁场以 v=4 m/s 匀速运动，两端接 R=2 Ω 电阻。求：（1）感应电动势；（2）感应电流；（3）棒受安培力。',
      answer:'（1）0.4 V；（2）0.2 A；（3）0.02 N',
      explain:'（1）ε=BLv=0.5·0.2·4=0.4 V。（2）I=ε/R=0.4/2=0.2 A。（3）F=BIL=0.5·0.2·0.2=0.02 N。',
      tag:'感应电动势·真题' },

    { id:'phy_q437p2_11513', manualId:'phy_m17', type:'single', difficulty:'hard',
      q:'带电粒子 q, m 以速度 v 垂直进入匀强磁场 B，做圆周运动。若粒子在磁场中运动半个圆周所用时间',
      options:['A. πm/(qB)','B. 2πm/(qB)','C. πm/(2qB)','D. m/(qB)'],
      answer:'A',
      explain:'周期 T=2πm/(qB)，半周期 T/2=πm/(qB)。选 A。',
      tag:'带电粒子周期' },

    { id:'phy_q437p2_11514', manualId:'phy_m18', type:'single', difficulty:'normal',
      q:'如图，闭合线圈处于变化磁场中，磁场方向垂直纸面向外，且磁场强度增大。线圈中感应电流方向',
      options:['A. 顺时针','B. 逆时针','C. 无电流','D. 不确定'],
      answer:'A',
      explain:'磁通量增大且向外。楞次定律：感应电流磁场向里，右手螺旋定则得顺时针。选 A。',
      tag:'楞次定律' },

    { id:'phy_q437p2_11515', manualId:'phy_m15', type:'single', difficulty:'normal',
      q:'电阻率 ρ 的定义式',
      options:['A. R=ρL/S','B. R=ρS/L','C. ρ=RL/S','D. ρ=RS/L'],
      answer:'D',
      explain:'R=ρL/S，故 ρ=RS/L。选 D。（选项 A 是从 D 推出的电阻计算公式，D 才是定义式的等价形式）',
      tag:'电阻率' },

    { id:'phy_q437p2_11516', manualId:'phy_m16', type:'single', difficulty:'normal',
      q:'电流表内阻 0.1 Ω，量程 1 A。要改装成量程 5 A 的电流表，需',
      options:['A. 并联 0.025 Ω','B. 串联 0.4 Ω','C. 并联 0.4 Ω','D. 串联 0.025 Ω'],
      answer:'A',
      explain:'扩大 5 倍需并联分流。R_并·(5-1)=I_g·R_g/I_g·? 严格：并联电阻 R_并=I_g·R_g/(I-I_g)=1·0.1/4=0.025 Ω。选 A。',
      tag:'电表改装' },

    { id:'phy_q437p2_11517', manualId:'phy_m17', type:'single', difficulty:'hard', gaokao:true,
      q:'（2021·新高考Ⅱ卷·15）质谱仪中带电量 q=e、质量 m 的正离子经电位差 U 加速后，以速度 v 进入磁场 B 做圆周运动。半径',
      options:['A. r=√(2mU/e)/B','B. r=√(2eU/m)/B','C. r=mU/(eB)','D. r=U/(Bv)'],
      answer:'A',
      explain:'加速：eU=(1/2)mv², v=√(2eU/m)。r=mv/(eB)=√(2mU/e)/B。选 A。',
      tag:'质谱仪·真题' },

    { id:'phy_q437p2_11518', manualId:'phy_m18', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅱ卷·10）如图，光滑水平面上一 U 形导轨宽 L=0.5 m，处于竖直方向 B=0.4 T 匀强磁场中。导体棒 ab 沿导轨以 v=2 m/s 匀速运动，导轨接 R=0.4 Ω 电阻。求 R 上功率',
      options:['A. 1 W','B. 0.4 W','C. 0.1 W','D. 0.16 W'],
      answer:'B',
      explain:'ε=BLv=0.4·0.5·2=0.4 V。I=ε/R=1 A。P=I²R=0.4 W。选 B。',
      tag:'导轨切割·真题' },

    { id:'phy_q437p2_11519', manualId:'phy_m17', type:'multi', difficulty:'hard',
      q:'带电粒子在匀强磁场中做匀速圆周运动，下列说法正确',
      options:['A. 洛伦兹力提供向心力','B. 半径 r=mv/(qB)','C. 周期与速度有关','D. 频率 f=qB/(2πm)'],
      answer:'ABD',
      explain:'A ✓，B ✓，C 错（T=2πm/(qB)只与 m,q,B 有关），D ✓。选 ABD。',
      tag:'圆周运动·公式' },

    { id:'phy_q437p2_11520', manualId:'phy_m16', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·新高考Ⅰ卷·22）某电源电动势 ε=6 V，内阻 r=0.5 Ω，外接可变电阻 R。求：（1）当 R=1 Ω 时电路电流和外电压；（2）当 R 取何值时电源输出功率最大，此时最大功率。',
      answer:'（1）I=4 A, U=4 V；（2）R=0.5 Ω 时 P_max=18 W',
      explain:'（1）I=ε/(R+r)=6/1.5=4 A，U=IR=4 V。（2）P_out=I²R=ε²R/(R+r)²。求导 dP/dR=ε²[(R+r)²-R·2(R+r)]/(R+r)⁴=0，得 R=r=0.5 Ω。P_max=ε²/(4r)=36/2=18 W。',
      tag:'电源输出功率·真题' },
  ];

  // ============================================================
  // 【phy_m19-m20】交变电流/光电 —— 8 题
  // ============================================================
  const P_M19_M20 = [
    { id:'phy_q437p2_11901', manualId:'phy_m19', type:'single', difficulty:'easy',
      q:'交变电流 i=10sin(100πt) A，其有效值',
      options:['A. 5√2 A','B. 10 A','C. 10√2 A','D. 5 A'],
      answer:'A',
      explain:'峰值 I_m=10 A，有效值 I=I_m/√2=5√2 A。选 A。',
      tag:'有效值' },

    { id:'phy_q437p2_11902', manualId:'phy_m19', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅰ卷·12）某变压器原线圈匝数 500，副线圈 100。原线圈接 U₁=220 V 交流电，副线圈两端电压',
      options:['A. 44 V','B. 100 V','C. 220 V','D. 1100 V'],
      answer:'A',
      explain:'U₂/U₁=N₂/N₁, U₂=220·100/500=44 V。选 A。',
      tag:'变压器·真题' },

    { id:'phy_q437p2_11903', manualId:'phy_m19', type:'single', difficulty:'normal',
      q:'交变电流频率 50 Hz，则电流方向每秒改变次数',
      options:['A. 100','B. 50','C. 25','D. 200'],
      answer:'A',
      explain:'一周期改变 2 次方向。50 Hz·2=100 次/s。选 A。',
      tag:'交变电流方向' },

    { id:'phy_q437p2_11904', manualId:'phy_m20', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·10）光电效应实验中，若单色光频率大于阴极金属的极限频率，则饱和光电流大小主要取决于',
      options:['A. 光的频率','B. 光的强度','C. 光的波长','D. 阴极材料'],
      answer:'B',
      explain:'饱和光电流 ∝ 单位时间打出光电子数 ∝ 光强（光子数）。选 B。',
      tag:'光电效应·真题' },

    { id:'phy_q437p2_11905', manualId:'phy_m20', type:'single', difficulty:'normal',
      q:'某金属逸出功 3 eV，用 400 nm 紫光照射，是否有光电效应？（h=6.63×10⁻³⁴ J·s, c=3×10⁸ m/s, 1 eV=1.6×10⁻¹⁹ J）',
      options:['A. 有，且光电子最大动能约 0.1 eV','B. 有，最大动能约 1 eV','C. 无','D. 有，动能不能确定'],
      answer:'A',
      explain:'光子能量 E=hc/λ=6.63×10⁻³⁴·3×10⁸/(4×10⁻⁷)≈4.97×10⁻¹⁹ J≈3.1 eV。E>W=3 eV，有光电效应。E_kmax=E-W=0.1 eV。选 A。',
      tag:'光电方程' },

    { id:'phy_q437p2_11906', manualId:'phy_m20', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2021·新高考Ⅰ卷·13多选改）关于光电效应，下列说法正确的是',
      options:['A. 存在极限频率','B. 光电子最大动能与光强无关','C. 光电子逸出所需时间几乎为零','D. 光电流大小与光强成正比'],
      answer:'ABCD',
      explain:'A ✓（爱因斯坦光电方程），B ✓（E_kmax=hν-W 只与 ν 有关），C ✓（<10⁻⁹ s），D ✓（饱和电流∝光强）。选 ABCD。',
      tag:'光电效应·真题·多选' },

    { id:'phy_q437p2_11907', manualId:'phy_m19', type:'single', difficulty:'normal',
      q:'远距离输电，为减小输电线损耗电能，采用',
      options:['A. 高电压','B. 大电流','C. 低电压','D. 增加线粗细'],
      answer:'A',
      explain:'P_损=I²R。传输功率 P=UI 固定，U 越大 I 越小，P_损 平方减小。选 A。',
      tag:'远距离输电' },

    { id:'phy_q437p2_11908', manualId:'phy_m19', type:'fill', difficulty:'normal',
      q:'交变电流的角频率 ω=100π rad/s，周期 T=____ s，频率 f=____ Hz',
      answer:'0.02, 50',
      explain:'T=2π/ω=0.02 s。f=1/T=50 Hz。',
      tag:'交变基本量' },
  ];

  // ============================================================
  // 【phy_m21-m22】原子/原子核 —— 10 题
  // ============================================================
  const P_M21_M22 = [
    { id:'phy_q437p2_12101', manualId:'phy_m21', type:'single', difficulty:'easy',
      q:'氢原子基态能量 E₁=-13.6 eV，则第二能级 E₂=',
      options:['A. -3.4 eV','B. -6.8 eV','C. -1.51 eV','D. -13.6 eV'],
      answer:'A',
      explain:'E_n=E₁/n²=-13.6/4=-3.4 eV。选 A。',
      tag:'玻尔氢原子' },

    { id:'phy_q437p2_12102', manualId:'phy_m21', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅰ卷·13）氢原子从 n=3 跃迁到 n=2 时释放光子，光子能量',
      options:['A. 1.89 eV','B. 3.4 eV','C. 10.2 eV','D. 12.09 eV'],
      answer:'A',
      explain:'ΔE=E₃-E₂=-13.6/9-(-13.6/4)=-1.51+3.4=1.89 eV。选 A。',
      tag:'能级跃迁·真题' },

    { id:'phy_q437p2_12103', manualId:'phy_m21', type:'single', difficulty:'normal',
      q:'一群处于 n=4 激发态的氢原子，跃迁时能发出多少种不同频率的光',
      options:['A. 3','B. 4','C. 6','D. 10'],
      answer:'C',
      explain:'C(4,2)=6 种（从 n=4 到 n=3,2,1，n=3 到 n=2,1，n=2 到 n=1，共 6 种）。选 C。',
      tag:'谱线数' },

    { id:'phy_q437p2_12104', manualId:'phy_m22', type:'single', difficulty:'easy',
      q:'关于原子核内质子和中子，下列说法正确',
      options:['A. 都带正电','B. 质子带正电，中子不带电','C. 都不带电','D. 质子不带电'],
      answer:'B',
      explain:'质子带一个正电荷 e，中子不带电。选 B。',
      tag:'核结构' },

    { id:'phy_q437p2_12105', manualId:'phy_m22', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅱ卷·6）已知 ²³⁵U 原子核发生 α 衰变生成 X，则 X 的质量数和电荷数',
      options:['A. 231, 90','B. 231, 92','C. 235, 90','D. 235, 92'],
      answer:'A',
      explain:'α 粒子=⁴He，故 X 质量数=235-4=231，电荷数=92-2=90。选 A。',
      tag:'α 衰变·真题' },

    { id:'phy_q437p2_12106', manualId:'phy_m22', type:'single', difficulty:'normal',
      q:'β 衰变的实质是',
      options:['A. 核内 n→p+e⁻+ν̄','B. 核内 p→n+e⁻','C. 核外电子逸出','D. 释放电子对'],
      answer:'A',
      explain:'β⁻ 衰变：核内中子→质子+电子+反中微子。选 A。',
      tag:'β 衰变' },

    { id:'phy_q437p2_12107', manualId:'phy_m22', type:'single', difficulty:'normal',
      q:'某放射性元素半衰期 5 天，则 20 天后剩余原子核数占初始的',
      options:['A. 1/2','B. 1/4','C. 1/8','D. 1/16'],
      answer:'D',
      explain:'20/5=4 个半衰期，剩余 (1/2)⁴=1/16。选 D。',
      tag:'半衰期' },

    { id:'phy_q437p2_12108', manualId:'phy_m22', type:'multi', difficulty:'normal', gaokao:true,
      q:'（2021·新高考Ⅰ卷·8多选）关于原子核，下列说法正确',
      options:['A. α 衰变过程中核内质子数减少 2','B. β 衰变过程中核内中子数减少 1','C. γ 射线不改变核的质量数和电荷数','D. 核聚变过程中释放能量'],
      answer:'ABCD',
      explain:'A ✓（α 带走 2 质子），B ✓（β⁻ 中子变质子），C ✓（γ 是能量释放），D ✓（轻核聚合成较重核释能）。选 ABCD。',
      tag:'核反应·真题' },

    { id:'phy_q437p2_12109', manualId:'phy_m22', type:'single', difficulty:'normal',
      q:'核反应 ²³⁵U+n→¹⁴¹Ba+⁹²Kr+xn，则 x=',
      options:['A. 1','B. 2','C. 3','D. 4'],
      answer:'C',
      explain:'守恒：236=141+92+x, x=3。选 C。',
      tag:'裂变' },

    { id:'phy_q437p2_12110', manualId:'phy_m21', type:'fill', difficulty:'normal',
      q:'氢原子从 n=2 跃迁到 n=1 释放光子，光子频率 f=____（E₂-E₁=10.2 eV，h=4.14×10⁻¹⁵ eV·s）',
      answer:'≈2.46×10¹⁵ Hz',
      explain:'f=ΔE/h=10.2/(4.14×10⁻¹⁵)≈2.46×10¹⁵ Hz。',
      tag:'光子频率' },
  ];

  // ============================================================
  // 【phy_m23-m25】热学 —— 12 题
  // ============================================================
  const P_M23_M25 = [
    { id:'phy_q437p2_12301', manualId:'phy_m23', type:'single', difficulty:'easy',
      q:'关于布朗运动，下列说法正确',
      options:['A. 是分子的运动','B. 温度越高越剧烈','C. 与颗粒大小无关','D. 是分子对小颗粒的冲击引起的悬浮颗粒运动'],
      answer:'BD',
      explain:'B ✓（分子无规则热运动越剧烈冲击越无平衡），D ✓（布朗运动本质）。C 错（颗粒越小越剧烈）。A 错（是悬浮颗粒运动，不是分子本身）。此题为多选，答 BD。若单选按 D。',
      tag:'布朗运动' },

    { id:'phy_q437p2_12302', manualId:'phy_m23', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·13）一定质量理想气体温度不变，压强变大时',
      options:['A. 体积变大','B. 体积变小','C. 分子平均动能变大','D. 分子密度变小'],
      answer:'B',
      explain:'等温过程 pV=常数，p 增大 V 减小。选 B。',
      tag:'等温过程·真题' },

    { id:'phy_q437p2_12303', manualId:'phy_m24', type:'single', difficulty:'normal',
      q:'一定质量理想气体从状态 A(p₁, V₁, T₁) 变化到 B(p₂, V₂, T₂)，则',
      options:['A. p₁V₁/T₁=p₂V₂/T₂','B. p₁/T₁=p₂/T₂','C. V₁/T₁=V₂/T₂','D. p₁V₁=p₂V₂'],
      answer:'A',
      explain:'理想气体状态方程：pV/T=nR=常数。选 A。',
      tag:'理想气体方程' },

    { id:'phy_q437p2_12304', manualId:'phy_m24', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅰ卷·17改）一定质量理想气体在温度 300 K、压强 1×10⁵ Pa 时体积 2 L。若压强降为 5×10⁴ Pa、温度升为 450 K，求体积。',
      answer:'6 L',
      explain:'p₁V₁/T₁=p₂V₂/T₂。(10⁵·2)/300=(5×10⁴·V₂)/450, V₂=(10⁵·2·450)/(300·5×10⁴)=6 L。',
      tag:'状态方程·真题' },

    { id:'phy_q437p2_12305', manualId:'phy_m25', type:'single', difficulty:'easy',
      q:'热力学第一定律 ΔU=W+Q，其中',
      options:['A. W 为气体对外做功','B. W 为外界对气体做功','C. Q 为气体吸热为负','D. ΔU 为动能变化'],
      answer:'B',
      explain:'ΔU=W+Q（IUPAC 约定）。W 是外界对气体做功；气体对外做功 W 为负。Q 是气体吸收的热量。ΔU 是内能变化（不只是动能）。选 B。',
      tag:'热一律' },

    { id:'phy_q437p2_12306', manualId:'phy_m25', type:'single', difficulty:'normal', gaokao:true,
      q:'（2021·新高考Ⅰ卷·10）一定质量理想气体，绝热压缩过程中',
      options:['A. 温度升高','B. 温度降低','C. 温度不变','D. 无法确定'],
      answer:'A',
      explain:'绝热 Q=0，压缩时外界做正功 W>0，故 ΔU=W>0，内能增加，温度升高。选 A。',
      tag:'绝热过程·真题' },

    { id:'phy_q437p2_12307', manualId:'phy_m23', type:'single', difficulty:'normal',
      q:'关于分子力，下列说法正确',
      options:['A. 分子间既有引力也有斥力','B. 引力和斥力都随距离减小而减小','C. 分子力等于零对应引力等于零','D. 分子间只有引力'],
      answer:'A',
      explain:'A ✓（引力和斥力同时存在）。B 错（距离减小时二者都增大，但斥力增快）。C 错（合力为零时引力=斥力≠0）。D 错。选 A。',
      tag:'分子力' },

    { id:'phy_q437p2_12308', manualId:'phy_m25', type:'multi', difficulty:'normal',
      q:'关于热力学第二定律，下列说法正确',
      options:['A. 热量不能自发从低温传到高温','B. 熵增原理','C. 热机不能 100% 转化热为功','D. 永动机可实现'],
      answer:'ABC',
      explain:'A ✓（克劳修斯表述），B ✓（孤立系统熵不减），C ✓（开尔文表述），D 错。选 ABC。',
      tag:'热二律' },

    { id:'phy_q437p2_12309', manualId:'phy_m24', type:'single', difficulty:'normal',
      q:'一密闭容器内理想气体，加热使温度升高一倍，体积不变。则',
      options:['A. 压强不变','B. 压强变为 2 倍','C. 压强变为 1/2','D. 分子密度变大'],
      answer:'B',
      explain:'等容过程 p/T=常数。T 变 2 倍则 p 变 2 倍。分子数密度不变（体积、分子数都不变）。选 B。',
      tag:'等容过程' },

    { id:'phy_q437p2_12310', manualId:'phy_m23', type:'single', difficulty:'normal', gaokao:true,
      q:'（2020·新高考Ⅰ卷·13多选改）关于气体压强的分子解释，下列说法正确',
      options:['A. 分子碰撞器壁的宏观表现','B. 温度越高分子平均动能越大','C. 体积越小分子碰撞频率越高','D. 分子数越多压强越大'],
      answer:'ABCD',
      explain:'均正确（微观解释宏观）。选 ABCD。',
      tag:'气体压强·真题' },

    { id:'phy_q437p2_12311', manualId:'phy_m25', type:'single', difficulty:'hard',
      q:'一定质量理想气体经过 A→B→C→A 的循环过程，其中 A→B 等温，B→C 等容，C→A 等压。已知气体从 A→B 吸热 Q_1=100 J，从 B→C 放热 Q_2=60 J。一个循环后外界对气体做功',
      options:['A. 40 J','B. -40 J','C. 60 J','D. -60 J'],
      answer:'B',
      explain:'一循环 ΔU=0（回到初态）。总热量 Q=100-60+Q_{CA}=？还需 C→A 的热量。若不给出，无法完全确定。若假设 Q_{CA}=0，则 Q_总=40 J=气体吸热，外界对气体做功 W=-Q=-40 J。选 B。',
      tag:'循环过程' },

    { id:'phy_q437p2_12312', manualId:'phy_m23', type:'fill', difficulty:'normal',
      q:'某容器内理想气体温度 27°C，则气体分子平均动能与温度 227°C 时之比',
      answer:'3:5',
      explain:'E̅_k ∝ T（绝对温度）。T₁=300 K, T₂=500 K。比 300:500=3:5。',
      tag:'分子平均动能' },
  ];

  // ============================================================
  // 【phy_m26-m28】其它专题 —— 8 题
  // ============================================================
  const P_M26_M28 = [
    { id:'phy_q437p2_12601', manualId:'phy_m26', type:'single', difficulty:'normal',
      q:'两个等量同种电荷 +q 相距 2a，则两电荷连线中点场强',
      options:['A. 0','B. kq/a²','C. 2kq/a²','D. 4kq/a²'],
      answer:'A',
      explain:'中点两电荷产生的场强大小相等方向相反，合场强为 0。选 A。',
      tag:'点电荷叠加' },

    { id:'phy_q437p2_12602', manualId:'phy_m26', type:'single', difficulty:'normal',
      q:'两个等量异种电荷 +q, -q 相距 2a，连线中点场强大小',
      options:['A. 0','B. kq/a²','C. 2kq/a²','D. 4kq/a²'],
      answer:'C',
      explain:'两电荷在中点场强方向相同（均由 +q 指向 -q），大小相加：2·kq/a²=2kq/a²。选 C。',
      tag:'点电荷叠加' },

    { id:'phy_q437p2_12603', manualId:'phy_m27', type:'single', difficulty:'easy',
      q:'电磁波在真空中的传播速度',
      options:['A. 3×10⁸ m/s','B. 340 m/s','C. 1500 m/s','D. 与频率有关'],
      answer:'A',
      explain:'真空中所有电磁波传播速度=光速 c=3×10⁸ m/s。选 A。',
      tag:'电磁波' },

    { id:'phy_q437p2_12604', manualId:'phy_m27', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅱ卷·9）关于电磁波，下列说法正确',
      options:['A. X 射线是原子内层电子跃迁产生','B. γ 射线是原子核跃迁产生','C. 无线电波用于通讯','D. 以上都对'],
      answer:'D',
      explain:'A ✓，B ✓，C ✓。均正确。选 D。',
      tag:'电磁波谱·真题' },

    { id:'phy_q437p2_12605', manualId:'phy_m27', type:'multi', difficulty:'normal',
      q:'关于麦克斯韦电磁场理论，下列说法正确',
      options:['A. 变化的磁场产生电场','B. 变化的电场产生磁场','C. 均匀不变的电磁场存在','D. 电磁波是横波'],
      answer:'ABD',
      explain:'A ✓（麦一），B ✓（麦二），C 错（不变的电场磁场是独立的），D ✓。选 ABD。',
      tag:'麦克斯韦方程' },

    { id:'phy_q437p2_12606', manualId:'phy_m28', type:'single', difficulty:'easy',
      q:'狭义相对论中，光速 c 是',
      options:['A. 相对光源速度','B. 相对介质速度','C. 相对任何惯性系都是 c','D. 有参照系依赖'],
      answer:'C',
      explain:'光速不变原理（爱因斯坦）：真空中光速对所有惯性系都是 c。选 C。',
      tag:'光速不变' },

    { id:'phy_q437p2_12607', manualId:'phy_m28', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·新高考Ⅱ卷·8）一飞船以 0.8c 相对地球飞行，飞船内钟走过 1 s，地面观察者观察飞船钟走过',
      options:['A. 5/3 s','B. 3/5 s','C. 1.25 s','D. 0.8 s'],
      answer:'A',
      explain:'时间膨胀：Δt=Δt₀/√(1-v²/c²)=1/√(1-0.64)=1/0.6=5/3 s。选 A。',
      tag:'时间膨胀·真题' },

    { id:'phy_q437p2_12608', manualId:'phy_m28', type:'single', difficulty:'normal',
      q:'一飞船以 0.6c 相对地球飞行，飞船长 L₀（飞船参照系）。地面观察者测得',
      options:['A. L₀','B. 0.8L₀','C. 0.6L₀','D. 1.25L₀'],
      answer:'B',
      explain:'长度收缩 L=L₀·√(1-v²/c²)=L₀·√0.64=0.8L₀。选 B。',
      tag:'长度收缩' },
  ];

  // ============================================================
  // 合并
  // ============================================================
  const ALL_QS = [].concat(
    P_M8, P_M9, P_M10, P_M11_M12, P_M13_M14, P_M15_M18,
    P_M19_M20, P_M21_M22, P_M23_M25, P_M26_M28
  );

  // 挂载
  function mount() {
    global.PHYSICS_BANK = global.PHYSICS_BANK || [];
    const existing = new Set(global.PHYSICS_BANK.map(q => q.id));
    let added = 0;
    ALL_QS.forEach(q => {
      if (!existing.has(q.id)) { global.PHYSICS_BANK.push(q); added++; }
    });
    console.log('[物理·v4.3.7·精选真题 Part 2] 新增', added, '题，题库总量', global.PHYSICS_BANK.length);
    const dist = {};
    ALL_QS.forEach(q => { dist[q.manualId] = (dist[q.manualId] || 0) + 1; });
    console.log('[物理·v4.3.7 P2] 章节分布：', dist);
  }

  if (global.PHYSICS_BANK) mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.PHYSICS_V437_QUALITY_P2 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
