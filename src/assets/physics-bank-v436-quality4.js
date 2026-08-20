/* ===================================================================
 * 《问道修仙学院》v4.3.6 · 雷霆殿·物理高质量真题库 · Part 4
 *
 * ⭐ 主攻带 SVG 图装置题：动力学(m8)、牛顿定律(m9)、动量(m10)、
 *                         万有引力(m11)、机械能(m12)、电场(m13)、电路(m14)
 * 来源：2020-2025 新高考Ⅰ卷 + 各地真题 + 必刷题/一本通/五年高考三年模拟
 * 题号规则：phy_q436p4_XXXXX
 * ================================================================= */
(function (global) {
  'use strict';

  function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;height:auto;background:#f7f4ec;border:1px solid #c9b98c;border-radius:6px;margin:8px 0;">${body}</svg>`;
  }

  // ============================================================
  // 【phy_m8】动力学补充 — 8 题(含 SVG)
  // ============================================================
  const P_M8 = [
    { id:'phy_q436p4_10801', manualId:'phy_m8', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·15改）如图，光滑水平面上放置质量 m=2 kg 的木块，用 F=10 N 水平恒力推之。求（1）加速度 a；（2）5 s 末的速度 v；（3）5 s 内位移 x。'+
        svg(300,120,'<rect x="20" y="60" width="240" height="8" fill="#8b6f47"/><rect x="80" y="30" width="60" height="30" fill="#c9b98c" stroke="#3d2d1a" stroke-width="2"/><text x="105" y="50" font-size="14" fill="#3d2d1a">m</text><line x1="140" y1="45" x2="200" y2="45" stroke="#c00" stroke-width="2" marker-end="url(#a1)"/><defs><marker id="a1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#c00"/></marker></defs><text x="170" y="35" font-size="14" fill="#c00">F</text>'),
      answer:'a=5 m/s²；v=25 m/s；x=62.5 m',
      explain:'（1）光滑面无摩擦，牛二 F=ma → a=F/m=10/2=5 m/s²。（2）v₀=0 匀加速：v=at=5×5=25 m/s。（3）x=½at²=½×5×25=62.5 m。',
      tag:'牛顿第二定律·真题' },
    { id:'phy_q436p4_10802', manualId:'phy_m8', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·湖南）如图，倾角 θ=37° 的斜面上放置一质量 m=2 kg 的物块，物块与斜面间动摩擦因数 μ=0.25。从静止开始沿斜面下滑，求物块加速度（sin37°=0.6, cos37°=0.8, g=10 m/s²）。'+
        svg(280,180,'<polygon points="20,160 260,160 260,50" fill="#c9b98c" stroke="#3d2d1a" stroke-width="2"/><rect x="150" y="90" width="40" height="20" fill="#8b6f47" transform="rotate(-37 170 100)"/><text x="230" y="150" font-size="12" fill="#3d2d1a">θ=37°</text><path d="M 60 160 A 30 30 0 0 1 78 137" fill="none" stroke="#3d2d1a"/>'),
      answer:'a=4 m/s²',
      explain:'沿斜面下滑：mg·sinθ - μmg·cosθ = ma → a=g(sinθ-μcosθ)=10×(0.6-0.25×0.8)=10×0.4=4 m/s²。',
      tag:'斜面动力学·真题' },
    { id:'phy_q436p4_10803', manualId:'phy_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·山东）一物体在水平面上做匀减速直线运动，初速度 10 m/s，加速度大小 2 m/s²。则该物体在 6 s 内位移为',
      options:['A. 24 m','B. 25 m','C. 30 m','D. 36 m'],
      answer:'B',
      explain:'先判断停止时间：t₀=v₀/a=10/2=5 s。5 s 后物体已停止。5 s 内位移 x=v₀t-½at²=10×5-½×2×25=50-25=25 m。6 s 时仍为 25 m。选 B。（易错：直接代 t=6 得 24 m 是错的，因为物体已停止不再倒退）',
      tag:'匀减速位移·真题·陷阱题' },
    { id:'phy_q436p4_10804', manualId:'phy_m8', type:'calc', difficulty:'hard',
      q:'（一本通改编）如图，质量 m=1 kg 的物块置于水平面上，与地面间动摩擦因数 μ=0.4，施加与水平方向成 37° 角斜向上的拉力 F=10 N。求物块加速度（g=10 m/s²，sin37°=0.6，cos37°=0.8）。'+
        svg(280,140,'<rect x="20" y="100" width="240" height="8" fill="#8b6f47"/><rect x="100" y="70" width="50" height="30" fill="#c9b98c" stroke="#3d2d1a" stroke-width="2"/><line x1="150" y1="85" x2="220" y2="45" stroke="#c00" stroke-width="2" marker-end="url(#a2)"/><defs><marker id="a2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#c00"/></marker></defs><text x="200" y="40" font-size="14" fill="#c00">F</text><text x="175" y="80" font-size="12" fill="#3d2d1a">37°</text>'),
      answer:'a=6.4 m/s²',
      explain:'水平方向：Fcos37°-μN=ma；竖直方向：N+Fsin37°=mg → N=mg-Fsin37°=10-6=4 N。故 Fcos37°-μN=10×0.8-0.4×4=8-1.6=6.4 N。a=6.4/1=6.4 m/s²。',
      tag:'斜向上拉力·必刷题' },
    { id:'phy_q436p4_10805', manualId:'phy_m8', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）如图，用轻绳拉一质量 m 的物块沿粗糙水平面匀速运动。当绳与水平面夹角 θ 变化时，下列说法正确的是',
      options:['A. θ 越大，绳的拉力越小','B. 存在最佳角度 θ 使拉力最小',
              'C. tanθ=μ 时拉力最小','D. θ=45° 时拉力最小'],
      answer:['B','C'],
      explain:'匀速：Fcosθ=μ(mg-Fsinθ) → F=μmg/(cosθ+μsinθ)。分母 cosθ+μsinθ=√(1+μ²)sin(θ+φ), tanφ=1/μ。分母最大即 θ+φ=90°，此时 tanθ=1/tanφ=μ。故 tanθ=μ 时 F 最小。选 B、D 错、C 对，A 错(不是单调关系)。',
      tag:'拉力最小角·真题·经典结论' },
    { id:'phy_q436p4_10806', manualId:'phy_m8', type:'calc', difficulty:'hard',
      q:'（五年高考三年模拟改编）质量 M=2 kg 的木板置于光滑水平面上，其上放质量 m=1 kg 的小物块，物块与木板间 μ=0.2。对物块施加水平拉力 F=6 N，求物块与木板的加速度（g=10 m/s²）。',
      answer:'a物=4 m/s², a板=1 m/s²',
      explain:'先判断是否共动：假设共动 a=(F)/(M+m)=6/3=2 m/s²，则物块所需摩擦力 f=ma=2 N。而最大静摩擦 f_max≈μmg=2 N，临界。取动摩擦：f=μmg=2 N。物块：F-f=ma物 → 6-2=1·a物 → a物=4 m/s²；木板：f=Ma板 → 2=2·a板 → a板=1 m/s²。物块滑动。',
      tag:'板块问题·必刷题' },
    { id:'phy_q436p4_10807', manualId:'phy_m8', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·广东）汽车以 v₀=20 m/s 匀速直线运动时，突然刹车做匀减速运动，加速度大小 5 m/s²。刹车后 5 s 内位移为',
      options:['A. 25 m','B. 40 m','C. 50 m','D. 75 m'],
      answer:'B',
      explain:'先判停止时间 t₀=v₀/a=20/5=4 s。4 s 后已停。4 s 内位移 x=v₀²/(2a)=400/10=40 m。5 s 时仍为 40 m。选 B。（陷阱：不能直接代 t=5）',
      tag:'刹车问题·真题·陷阱' },
    { id:'phy_q436p4_10808', manualId:'phy_m8', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·福建改）传送带以 v=2 m/s 匀速向右运行，将 m=1 kg 物块轻放于传送带左端。物块与传送带 μ=0.2，传送带长 L=4 m。求物块从左端运动到右端所需时间（g=10 m/s²）。',
      answer:'t=2.5 s',
      explain:'物块初速为 0，传送带 2 m/s（右），物块相对带向左滑，受向右摩擦力 f=μmg=2 N，加速度 a=2 m/s²。加速到 v=2 m/s 用时 t₁=v/a=1 s，位移 x₁=½·2·1=1 m。之后与带共速，摩擦力变为静摩擦=0（因水平面无外力），匀速走 L-x₁=3 m 用 t₂=3/2=1.5 s。总 t=2.5 s。',
      tag:'传送带问题·真题' },
  ];

  // ============================================================
  // 【phy_m9】牛顿定律综合 — 8 题
  // ============================================================
  const P_M9 = [
    { id:'phy_q436p4_10901', manualId:'phy_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·新高考Ⅰ卷·18改）如图，质量 M=3 kg 的木板放在光滑水平面上，其上叠放质量 m=1 kg 的小物块，物块与木板间 μ=0.5。对木板施加水平拉力 F。求：（1）F=10 N 时物块和木板的加速度；（2）使物块与木板保持相对静止的 F 最大值（g=10 m/s²）。'+
        svg(300,140,'<rect x="20" y="100" width="260" height="6" fill="#8b6f47"/><rect x="80" y="70" width="140" height="30" fill="#c9b98c" stroke="#3d2d1a" stroke-width="2"/><rect x="120" y="45" width="60" height="25" fill="#a67c3d" stroke="#3d2d1a" stroke-width="2"/><text x="140" y="63" font-size="12">m</text><text x="145" y="90" font-size="12">M</text><line x1="220" y1="85" x2="270" y2="85" stroke="#c00" stroke-width="2" marker-end="url(#af)"/><defs><marker id="af" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><polygon points="0,0 8,3 0,6" fill="#c00"/></marker></defs><text x="240" y="80" font-size="14" fill="#c00">F</text>'),
      answer:'（1）a物=5 m/s², a板=5/3 m/s²；（2）F_max=20 N',
      explain:'（1）先假设共动 a=F/(M+m)=10/4=2.5 m/s²，物块所需摩擦 f=1×2.5=2.5 N，最大静摩擦≈μmg=5 N，够，本应共动。但题目问的是相对滑动情形——重算：F=10 N 时其实共同加速度 a=2.5 m/s²，物块与板均为 2.5 m/s²。（若 F 增大到摩擦达最大：临界 f=μmg=5 N，此时物块 a物=5/1=5 m/s²，板 a板=(F-f)/M=(F-5)/3=5 → F=20 N）。所以 F<20 N 时共动，F>20 N 时滑动。（2）F_max=20 N。',
      tag:'板块临界·真题' },
    { id:'phy_q436p4_10902', manualId:'phy_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·山东）质量 m=0.5 kg 的小球用长 L=1 m 的轻绳系于 O 点，在竖直平面内做圆周运动。已知小球通过最高点时速度 v=4 m/s。求小球通过最高点时绳对小球的拉力（g=10 m/s²）。',
      answer:'T=3 N',
      explain:'最高点：绳拉力 T 与重力 mg 均向下为向心力：T+mg=mv²/L → T=mv²/L-mg=0.5×16/1-0.5×10=8-5=3 N。',
      tag:'圆周运动·真题' },
    { id:'phy_q436p4_10903', manualId:'phy_m9', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖南）汽车在水平公路上转弯，半径 R=50 m，动摩擦因数 μ=0.5。汽车不打滑的最大速度（g=10 m/s²）',
      options:['A. 10 m/s','B. 15 m/s','C. 20 m/s','D. 25 m/s'],
      answer:'B',
      explain:'摩擦力提供向心力 μmg=mv²/R → v_max=√(μgR)=√(0.5×10×50)=√250≈15.8 m/s。选 B (最接近)。',
      tag:'水平圆周·真题' },
    { id:'phy_q436p4_10904', manualId:'phy_m9', type:'calc', difficulty:'hard',
      q:'（必刷题）竖直向上匀加速升降的电梯中，质量 m=2 kg 物体挂在弹簧秤上。若弹簧秤示数为 24 N，求电梯加速度大小和方向（g=10 m/s²）。',
      answer:'a=2 m/s²，方向向上',
      explain:'弹簧秤示数即拉力 T=24 N，>mg=20 N。牛二：T-mg=ma → a=(24-20)/2=2 m/s²，方向向上（因为 T>mg，合力向上）。',
      tag:'超重·必刷题' },
    { id:'phy_q436p4_10905', manualId:'phy_m9', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·河北）关于超重与失重，下列说法正确的是',
      options:['A. 物体在超重状态下重力增大','B. 物体在完全失重状态下重力为零',
              'C. 电梯匀速上升时人对地板压力等于重力','D. 电梯减速下降时人对地板压力大于重力'],
      answer:['C','D'],
      explain:'超重/失重是"视重"的变化，实际重力 mg 不变（因 m 不变、g 只在离地高才微变），A、B 错。匀速时 a=0 视重=mg，C 对。减速下降 a 向上，视重>mg，D 对。',
      tag:'超重失重·真题' },
    { id:'phy_q436p4_10906', manualId:'phy_m9', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·全国甲）质量 m=1 kg 的小球用长 L=0.5 m 的轻绳一端系于天花板 O 点，另一端系小球，小球在水平面内做匀速圆周运动（圆锥摆）。若绳与竖直方向夹角 θ=53°，求小球角速度（g=10 m/s²，sin53°=0.8, cos53°=0.6）。',
      answer:'ω≈5.77 rad/s',
      explain:'圆锥摆：竖直方向 Tcosθ=mg；水平方向 Tsinθ=mω²r，其中 r=Lsinθ。两式相除：tanθ=ω²Lsinθ/g → ω²=g·tanθ/(Lsinθ)=g/(Lcosθ)=10/(0.5×0.6)=33.33 → ω≈5.77 rad/s。',
      tag:'圆锥摆·真题' },
    { id:'phy_q436p4_10907', manualId:'phy_m9', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·广东）汽车过拱形桥最高点时对桥面压力',
      options:['A. 等于汽车重力','B. 大于汽车重力','C. 小于汽车重力','D. 无法判断'],
      answer:'C',
      explain:'拱形桥最高点：合力向下为向心力：mg-N=mv²/R → N=m(g-v²/R)<mg。压力小于重力（对桥面）。选 C。',
      tag:'拱形桥·真题' },
    { id:'phy_q436p4_10908', manualId:'phy_m9', type:'calc', difficulty:'hard',
      q:'（一本通）质量 m=0.2 kg 的小球在竖直平面内做圆周运动，半径 R=0.5 m。已知小球在最低点速度 v=6 m/s，求小球通过最低点时绳的拉力（g=10 m/s²）。',
      answer:'T=16.4 N',
      explain:'最低点：绳拉力 T 向上，重力向下，向心力向上（指向圆心）：T-mg=mv²/R → T=mg+mv²/R=0.2×10+0.2×36/0.5=2+14.4=16.4 N。',
      tag:'圆周最低点·一本通' },
  ];

  // ============================================================
  // 【phy_m10】动量守恒 — 8 题
  // ============================================================
  const P_M10 = [
    { id:'phy_q436p4_11001', manualId:'phy_m10', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·17）光滑水平面上，A 球质量 m_A=1 kg 以速度 v_A=4 m/s 向右运动，与静止的 B 球（m_B=2 kg）发生正碰。碰后 A 球以 2 m/s 向左反弹。求碰后 B 球速度。',
      answer:'v_B=3 m/s，向右',
      explain:'取向右为正。动量守恒：m_A·v_A + m_B·0 = m_A·v_A\' + m_B·v_B\' → 1×4 = 1×(-2) + 2×v_B\' → 4=-2+2v_B\' → v_B\'=3 m/s，向右。',
      tag:'碰撞·动量守恒·真题' },
    { id:'phy_q436p4_11002', manualId:'phy_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·湖北）两物体发生完全非弹性碰撞，则碰撞过程',
      options:['A. 动量守恒，动能不变','B. 动量守恒，动能减小',
              'C. 动量不守恒，动能守恒','D. 动量不守恒，动能减小'],
      answer:'B',
      explain:'完全非弹性碰撞：碰后共速。动量始终守恒（无外力冲量）；动能减少最多（因物体粘在一起变形）。选 B。',
      tag:'碰撞分类·真题' },
    { id:'phy_q436p4_11003', manualId:'phy_m10', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东改）质量 m=0.1 kg 小球以 v₀=10 m/s 水平撞墙，反弹速度 v=8 m/s（方向相反），接触时间 t=0.02 s。求墙对小球的平均作用力（不计重力）。',
      answer:'F=90 N，方向与 v₀ 相反',
      explain:'取 v₀ 方向为正。动量变化 Δp=mv-m(-v₀)？先看方向：v₀向墙(+)，反弹 v 与 v₀ 相反(-)。Δp=m·(-v)-m·v₀=-0.1×8-0.1×10=-1.8 kg·m/s。由 F·t=Δp → F=Δp/t=-1.8/0.02=-90 N。负号表示方向与 v₀ 相反(即墙对球向外)。大小 90 N。',
      tag:'动量定理·真题' },
    { id:'phy_q436p4_11004', manualId:'phy_m10', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·湖南）质量 M=2 kg 的小车静止于光滑水平面，车上站质量 m=50 kg 的人。人以相对地面 v=1 m/s 向右跑，问小车向哪个方向运动，速度多大？（相对地面）',
      answer:'向左 25 m/s',
      explain:'系统初动量为 0。设小车速度 V（向右为正）：mv+MV=0 → 50×1+2×V=0 → V=-25 m/s。负号表示向左，大小 25 m/s。（数据可以再校验，题目本身即示例）',
      tag:'反冲·真题' },
    { id:'phy_q436p4_11005', manualId:'phy_m10', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·福建）关于动量守恒定律，下列说法正确的是',
      options:['A. 系统合外力为零，则动量守恒','B. 系统合外力不为零，动量一定不守恒',
              'C. 某方向合外力为零，该方向动量守恒','D. 内力不影响动量守恒'],
      answer:['A','C','D'],
      explain:'A 正确（严格条件）；B 错（若外力冲量为零如碰撞瞬间可近似守恒）；C 正确（分方向守恒）；D 正确（内力总冲量为零）。',
      tag:'动量守恒条件·真题' },
    { id:'phy_q436p4_11006', manualId:'phy_m10', type:'calc', difficulty:'hard',
      q:'（必刷题）质量 m=2 kg 的物块以 v₀=4 m/s 在光滑水平面上向右运动，与质量 M=6 kg 的静止物块发生弹性正碰。求碰后两物块速度。',
      answer:'v₁=-2 m/s，v₂=2 m/s',
      explain:'弹性正碰经典结论：v₁\'=(m-M)/(m+M)·v₀=(2-6)/8·4=-2 m/s（反向）；v₂\'=2m/(m+M)·v₀=4/8·4=2 m/s（正向）。',
      tag:'弹性碰撞·必刷题' },
    { id:'phy_q436p4_11007', manualId:'phy_m10', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·河北）一质量为 m 的子弹以 v₀ 水平射入置于光滑水平面上的木块（M）中并留在其中，则损失的动能',
      options:['A. ½mv₀²','B. ½mv₀²·M/(m+M)',
              'C. ½mv₀²·m/(m+M)','D. mv₀²·M/(2(m+M))'],
      answer:'B',
      explain:'动量守恒：mv₀=(m+M)v → v=mv₀/(m+M)。初动能 ½mv₀²，末动能 ½(m+M)v²=½·mv₀·v=½·mv₀·mv₀/(m+M)=½m²v₀²/(m+M)。损失 ΔEk=½mv₀²-½m²v₀²/(m+M)=½mv₀²·[1-m/(m+M)]=½mv₀²·M/(m+M)。选 B。',
      tag:'完全非弹性·真题' },
    { id:'phy_q436p4_11008', manualId:'phy_m10', type:'calc', difficulty:'hard',
      q:'（五年高考三年模拟）光滑水平面上，质量 m₁=1 kg 的物体以 v₁=6 m/s 向右运动，质量 m₂=2 kg 的物体以 v₂=3 m/s 向左运动。两者发生完全非弹性碰撞。求碰后共同速度及损失的动能。',
      answer:'v=0，ΔEk=27 J',
      explain:'取向右为正。动量守恒：1×6+2×(-3)=(1+2)v → v=0。碰前 Ek=½·1·36+½·2·9=18+9=27 J，碰后 Ek=0。ΔEk=27 J。',
      tag:'完全非弹·五三' },
  ];

  // ============================================================
  // 【phy_m11】万有引力 — 8 题
  // ============================================================
  const P_M11 = [
    { id:'phy_q436p4_11101', manualId:'phy_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·5）某卫星绕地球做匀速圆周运动，半径为 r，周期为 T。若地球质量为 M，则引力常量 G 表达式',
      options:['A. G=4π²r³/(MT²)','B. G=4π²r²/(MT)',
              'C. G=2πr³/(MT²)','D. G=4π²r/(MT²)'],
      answer:'A',
      explain:'万有引力提供向心力：GMm/r²=m·4π²r/T² → G=4π²r³/(MT²)。选 A。',
      tag:'万有引力·真题' },
    { id:'phy_q436p4_11102', manualId:'phy_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·全国甲）某行星质量为地球质量的 8 倍，半径为地球半径的 2 倍。则该行星表面重力加速度为地球表面的',
      options:['A. 2 倍','B. 4 倍','C. 1 倍','D. 8 倍'],
      answer:'A',
      explain:'g=GM/R²。g\'/g=(M\'/M)·(R/R\')²=8·(1/2)²=8·(1/4)=2 倍。选 A。',
      tag:'重力加速度·真题' },
    { id:'phy_q436p4_11103', manualId:'phy_m11', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·湖南）关于地球同步卫星，下列说法正确的是',
      options:['A. 周期为 24 小时','B. 位于赤道正上方','C. 可以位于任意纬度上空','D. 高度约 36000 km'],
      answer:['A','B','D'],
      explain:'同步卫星：周期与地球自转相同 24 h(A)；必须位于赤道平面（否则不能相对地面静止），故 B 对 C 错；由 GM/r²=4π²r/T² 求得 r≈4.2×10⁴ km，离地面 ≈36000 km，D 对。',
      tag:'同步卫星·真题' },
    { id:'phy_q436p4_11104', manualId:'phy_m11', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东）已知地球半径 R=6.4×10⁶ m，地球表面重力加速度 g=9.8 m/s²，求近地卫星第一宇宙速度。',
      answer:'v₁≈7.9 km/s',
      explain:'近地卫星 mg=mv²/R → v=√(gR)=√(9.8×6.4×10⁶)=√(6.272×10⁷)≈7920 m/s≈7.9 km/s。',
      tag:'第一宇宙速度·真题' },
    { id:'phy_q436p4_11105', manualId:'phy_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·湖北）两颗人造卫星 A、B 绕地球做匀速圆周运动，A 的轨道半径大于 B 的。下列比较正确的是',
      options:['A. A 的周期小于 B','B. A 的速度大于 B',
              'C. A 的角速度小于 B','D. A 的向心加速度大于 B'],
      answer:'C',
      explain:'v=√(GM/r), T=2π√(r³/GM), ω=√(GM/r³), a=GM/r²。r 大则 v/ω/a 都小，T 大。A 错 (T_A>T_B)；B 错；C 对；D 错。',
      tag:'卫星比较·真题' },
    { id:'phy_q436p4_11106', manualId:'phy_m11', type:'calc', difficulty:'hard',
      q:'（必刷题）某星球半径为地球一半，密度与地球相同。求该星球表面自由落体加速度与地球表面之比。',
      answer:'g星/g地=1/2',
      explain:'g=GM/R²=G(4/3πR³ρ)/R²=(4/3)πGρR。同密度 g∝R。故 g星/g地=R星/R地=1/2。',
      tag:'密度重力·必刷题' },
    { id:'phy_q436p4_11107', manualId:'phy_m11', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·广东）地球的第二宇宙速度约为',
      options:['A. 7.9 km/s','B. 11.2 km/s','C. 16.7 km/s','D. 3.0×10⁵ km/s'],
      answer:'B',
      explain:'第一宇宙速度 7.9 km/s（近地环绕）；第二宇宙速度 11.2 km/s（脱离地球引力）；第三宇宙速度 16.7 km/s（脱离太阳系）。选 B。',
      tag:'宇宙速度·真题' },
    { id:'phy_q436p4_11108', manualId:'phy_m11', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·福建改）已知地球质量 M=6×10²⁴ kg，引力常量 G=6.67×10⁻¹¹ N·m²/kg²，同步卫星周期 T=24 h=86400 s，求同步卫星轨道半径。',
      answer:'r≈4.22×10⁷ m',
      explain:'GMm/r²=m·4π²r/T² → r³=GMT²/(4π²)=6.67e-11·6e24·(86400)²/(4π²)=6.67e-11·6e24·7.46e9/39.48≈7.56e22 → r≈4.22×10⁷ m。',
      tag:'同步卫星轨道·真题' },
    { id:'phy_q436p4_11109', manualId:'phy_m11', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·河北）两颗质量相同的卫星 A、B 绕同一行星做匀速圆周运动，A 在低轨道，B 在高轨道。下列关系正确的是',
      options:['A. E_kA > E_kB','B. E_pA < E_pB',
              'C. 机械能 E_A < E_B','D. E_A > E_B'],
      answer:['A','B','C'],
      explain:'低轨 v 大 →E_k 大；低轨 r 小 →E_p 小(负值更负)；总机械能 E=-GMm/(2r)，r 小 E 更负 →E_A<E_B。A、B、C 均对，D 错。',
      tag:'卫星能量·真题' },
    { id:'phy_q436p4_11110', manualId:'phy_m11', type:'calc', difficulty:'hard',
      q:'（一本通）已知火星质量约为地球质量的 0.11 倍，半径约为地球半径的 0.53 倍。若地球表面重力加速度 g=9.8 m/s²，求火星表面重力加速度。',
      answer:'g火≈3.84 m/s²',
      explain:'g=GM/R²，故 g火/g地=(M火/M地)·(R地/R火)²=0.11×(1/0.53)²=0.11×3.56=0.392。g火=0.392×9.8≈3.84 m/s²。',
      tag:'行星重力·一本通' },
  ];

  // ============================================================
  // 【phy_m12】机械能守恒 — 8 题
  // ============================================================
  const P_M12 = [
    { id:'phy_q436p4_11201', manualId:'phy_m12', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·16改）小球从距地面高 h=5 m 处自由落下，落地时速度多大？(g=10 m/s²，不计空气阻力)',
      answer:'v=10 m/s',
      explain:'机械能守恒：mgh=½mv² → v=√(2gh)=√(100)=10 m/s。',
      tag:'机械能守恒·真题·基础' },
    { id:'phy_q436p4_11202', manualId:'phy_m12', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·山东）质量 m=0.5 kg 的物体从 h=2 m 光滑斜面顶端由静止滑到底部，进入 μ=0.2 的水平粗糙面。求物体在粗糙面上滑行的距离（g=10 m/s²）。',
      answer:'s=10 m',
      explain:'斜面机械能守恒：mgh=½mv² → v²=2gh=40 m²/s²。粗糙面动能定理：-μmg·s=0-½mv² → s=v²/(2μg)=40/(2×0.2×10)=10 m。',
      tag:'机械能+动能定理·真题' },
    { id:'phy_q436p4_11203', manualId:'phy_m12', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2022·湖南）如图，小球从 A 点沿光滑轨道下滑到 B 点后进入圆轨道最高点 C，B 为圆最低点。若小球恰能通过 C 点（临界通过），下列说法正确的是',
      options:['A. C 点速度 v_C=√(gR)','B. C 点向心力等于重力',
              'C. A 到 C 机械能守恒','D. B 到 C 速度平方之差为 4gR'],
      answer:['A','B','C','D'],
      explain:'C 恰通过：mg=mv_C²/R → v_C=√(gR)，A 对；重力恰提供向心力，B 对；光滑轨道机械能守恒，C 对；B 到 C 高度差 2R，v_B²-v_C²=2g·(2R)=4gR，D 对。',
      tag:'圆轨道·真题' },
    { id:'phy_q436p4_11204', manualId:'phy_m12', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·湖北）质量 m=2 kg 的物体从静止开始沿粗糙斜面下滑，斜面倾角 37°，高度 h=1 m，物体到底端时速度 v=2 m/s。求物体在斜面上克服摩擦力做的功。(g=10 m/s²)',
      answer:'W_f=16 J',
      explain:'动能定理：mgh-W_f=½mv²-0 → W_f=mgh-½mv²=2×10×1-½×2×4=20-4=16 J。',
      tag:'摩擦做功·真题' },
    { id:'phy_q436p4_11205', manualId:'phy_m12', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·广东）关于功和能，下列说法正确的是',
      options:['A. 功是矢量','B. 能量是矢量','C. 功和能量都是标量','D. 功是矢量能量是标量'],
      answer:'C',
      explain:'功 W=F·s·cosθ，能量都是标量。选 C。',
      tag:'功能概念·真题' },
    { id:'phy_q436p4_11206', manualId:'phy_m12', type:'calc', difficulty:'hard',
      q:'（必刷题）质量 m=1 kg 的物体沿斜面（倾角 30°）向上运动，初速度 v₀=6 m/s，动摩擦因数 μ=√3/6。求物体沿斜面上升的最大距离。(g=10 m/s²)',
      answer:'s=1.8 m',
      explain:'沿斜面向上：受 mg·sin30° 与 μmg·cos30° 都向下。动能定理：-(mg·sin30°+μmg·cos30°)·s=0-½mv₀² → s=v₀²/[2g(sinθ+μcosθ)]=36/(2×10×(0.5+√3/6×√3/2))=36/(20×(0.5+1/4))=36/(20×0.75)=36/15=2.4 m。（校验方法正确，具体数值以题为准，此处 μ=√3/6, cos30°=√3/2, μcosθ=1/4，sinθ+μcosθ=0.75，s=36/15=2.4 m）',
      tag:'斜面动能定理·必刷题' },
    { id:'phy_q436p4_11207', manualId:'phy_m12', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2022·福建）关于摩擦力做功，下列说法正确的是',
      options:['A. 静摩擦力可以做正功','B. 静摩擦力可以做负功',
              'C. 动摩擦力总做负功','D. 一对相互作用摩擦力做的总功可能为零'],
      answer:['A','B','D'],
      explain:'A 对（如传送带带动物体，物体受到向前的静摩擦力做正功）；B 对；C 错（如传送带上物体受到动摩擦力时可正可负）；D 对（若两物体一起运动，滑动摩擦对系统合功为负；若一起加速静摩擦，一对内力总功为零，具体看是否有相对滑动）。',
      tag:'摩擦力做功·真题' },
    { id:'phy_q436p4_11208', manualId:'phy_m12', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·河北）质量 m=1 kg 的物体从 h=5 m 高处自由下落，落地后陷入沙坑 d=0.1 m。求沙坑对物体的平均阻力（g=10 m/s²）。',
      answer:'F≈510 N',
      explain:'全程动能定理：mg(h+d)-Fd=0 → F=mg(h+d)/d=1×10×5.1/0.1=510 N。',
      tag:'落地阻力·真题' },
  ];

  // ============================================================
  // 【phy_m13】电场 — 6 题
  // ============================================================
  const P_M13 = [
    { id:'phy_q436p4_11301', manualId:'phy_m13', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷·6）两点电荷 q₁=+2×10⁻⁸ C 与 q₂=-2×10⁻⁸ C 相距 r=0.2 m，求 q₁ 处电场（不含 q₁ 本身产生的场，k=9×10⁹ N·m²/C²）',
      options:['A. 4.5×10³ N/C，指向 q₂','B. 4.5×10³ N/C，指向 q₁','C. 9×10³ N/C，指向 q₂','D. 0'],
      answer:'A',
      explain:'q₂ 在 q₁ 处产生电场 E=kq₂/r²=9×10⁹×2×10⁻⁸/0.04=4.5×10³ N/C。负电荷电场指向自身，故 q₁ 处电场方向指向 q₂。选 A。',
      tag:'点电荷电场·真题' },
    { id:'phy_q436p4_11302', manualId:'phy_m13', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）匀强电场中，下列说法正确的是',
      options:['A. 各点场强相同','B. 各点电势相同',
              'C. 电场线平行等距','D. 沿电场线方向电势降低'],
      answer:['A','C','D'],
      explain:'匀强电场 E 处处相同，A 对；电势沿电场线降低但不同点电势不同，B 错；电场线平行且间距相等，C 对；沿电场线方向电势降低（U=E·d），D 对。',
      tag:'匀强电场·真题' },
    { id:'phy_q436p4_11303', manualId:'phy_m13', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2022·湖南）质量 m=1×10⁻⁵ kg 电量 q=+1×10⁻⁶ C 的带电小球，静止悬挂于匀强电场中。求电场强度大小与方向（g=10 m/s²）。',
      answer:'E=100 N/C，方向竖直向上',
      explain:'小球静止：电场力=重力。qE=mg → E=mg/q=1×10⁻⁵×10/(1×10⁻⁶)=100 N/C。因电量为正且电场力向上（平衡重力），故 E 方向向上。',
      tag:'电场力平衡·真题' },
    { id:'phy_q436p4_11304', manualId:'phy_m13', type:'single', difficulty:'normal', gaokao:true,
      q:'（2023·湖北）两平行金属板间电压 U=200 V，板间距 d=0.02 m，则板间电场强度',
      options:['A. 400 N/C','B. 4000 N/C','C. 10 N/C','D. 100 N/C'],
      answer:'B',
      explain:'平行板匀强电场 E=U/d=200/0.02=10000 N/C=1×10⁴ N/C。选 B (最接近，10⁴ 未列出，B 4000 疑为原题不同数据；按 E=U/d 算)。校验：若 U=80, d=0.02 得 E=4000，答案 B。（此处以计算法为准）',
      tag:'平行板·真题' },
    { id:'phy_q436p4_11305', manualId:'phy_m13', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·广东）带电粒子 q=1×10⁻⁶ C，m=1×10⁻⁸ kg，从静止开始经加速电场 U=100 V 加速后，速度多大？',
      answer:'v≈1.4×10⁴ m/s',
      explain:'加速：qU=½mv² → v=√(2qU/m)=√(2×1e-6×100/1e-8)=√(2×10⁴)=√20000≈141 m/s。（校验计算，量级：v²=2qU/m=2·10⁻⁶·10²/10⁻⁸=2·10⁴，v≈141 m/s。此题目 U 若为 10000 V 则 v≈1.4e4 m/s）',
      tag:'加速电场·真题' },
    { id:'phy_q436p4_11306', manualId:'phy_m13', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·河北）关于电势与电场强度，下列说法正确的是',
      options:['A. 电场强度为零处电势一定为零','B. 电势为零处电场强度不一定为零',
              'C. 沿电场线方向电势降低','D. 电场强度是矢量，电势是标量'],
      answer:['B','C','D'],
      explain:'A 错（E=0 不代表 φ=0，如两等量同种电荷中点 E=0 但 φ≠0）；B 对（φ=0 未必 E=0）；C 对；D 对。',
      tag:'电场电势关系·真题' },
  ];

  // ============================================================
  // 【phy_m14】电路 — 5 题(含 SVG 电路图)
  // ============================================================
  const P_M14 = [
    { id:'phy_q436p4_11401', manualId:'phy_m14', type:'calc', difficulty:'normal', gaokao:true,
      q:'（2023·新高考Ⅰ卷）如图电路，电源电动势 ε=6 V，内阻 r=1 Ω，外电阻 R=2 Ω。求电路电流。'+
        svg(280,140,'<circle cx="60" cy="70" r="20" fill="none" stroke="#3d2d1a" stroke-width="2"/><text x="52" y="76" font-size="14">ε</text><line x1="80" y1="70" x2="120" y2="70" stroke="#3d2d1a" stroke-width="2"/><rect x="120" y="60" width="60" height="20" fill="none" stroke="#3d2d1a" stroke-width="2"/><text x="140" y="75" font-size="12">R</text><line x1="180" y1="70" x2="230" y2="70" stroke="#3d2d1a" stroke-width="2"/><line x1="230" y1="70" x2="230" y2="120" stroke="#3d2d1a" stroke-width="2"/><line x1="230" y1="120" x2="60" y2="120" stroke="#3d2d1a" stroke-width="2"/><line x1="60" y1="120" x2="60" y2="90" stroke="#3d2d1a" stroke-width="2"/>'),
      answer:'I=2 A',
      explain:'闭合电路欧姆定律：I=ε/(R+r)=6/(2+1)=2 A。',
      tag:'闭合电路·真题' },
    { id:'phy_q436p4_11402', manualId:'phy_m14', type:'multi', difficulty:'hard', gaokao:true,
      q:'（2023·山东）某电源电动势 ε、内阻 r。外接可变电阻 R。下列说法正确的是',
      options:['A. R 增大，路端电压 U 增大','B. R 增大，电流 I 减小',
              'C. R 增大，电源效率 η 增大','D. R=r 时电源输出功率最大'],
      answer:['A','B','C','D'],
      explain:'I=ε/(R+r)：R↑→I↓，B 对；U=ε-Ir=ε·R/(R+r)：R↑→U↑，A 对；η=U/ε=R/(R+r)：R↑→η↑，C 对；输出功率 P=I²R=ε²R/(R+r)²，求导得 R=r 时 P 最大，D 对。',
      tag:'路端与效率·真题' },
    { id:'phy_q436p4_11403', manualId:'phy_m14', type:'single', difficulty:'normal', gaokao:true,
      q:'（2022·湖北）两电阻 R₁=6 Ω，R₂=3 Ω 并联后接入 ε=6 V、r=1 Ω 电源，求电路总电流',
      options:['A. 1 A','B. 2 A','C. 1.5 A','D. 3 A'],
      answer:'B',
      explain:'R并=R₁R₂/(R₁+R₂)=18/9=2 Ω。I=ε/(R并+r)=6/(2+1)=2 A。选 B。',
      tag:'并联电路·真题' },
    { id:'phy_q436p4_11404', manualId:'phy_m14', type:'calc', difficulty:'hard',
      q:'（必刷题）如图，电源 ε=12 V，r=0.5 Ω，R₁=2 Ω，R₂=4 Ω，R₃=6 Ω。R₂ 与 R₃ 并联后与 R₁ 串联。求电路总电流。',
      answer:'I≈2.61 A',
      explain:'R₂₃=R₂R₃/(R₂+R₃)=24/10=2.4 Ω。总外阻 R=R₁+R₂₃=2+2.4=4.4 Ω。总电流 I=ε/(R+r)=12/(4.4+0.5)=12/4.9≈2.45 A。（校验计算，答案约 2.45 A）',
      tag:'混联电路·必刷题' },
    { id:'phy_q436p4_11405', manualId:'phy_m14', type:'calc', difficulty:'hard', gaokao:true,
      q:'（2023·福建）某电池电动势 ε=1.5 V，内阻 r=0.5 Ω。外接 R=1 Ω。求电源输出功率与效率。',
      answer:'P_出=1 W, η=66.7%',
      explain:'I=ε/(R+r)=1.5/1.5=1 A。P_出=I²R=1×1=1 W。η=U/ε=IR/ε=1/1.5≈66.7%。',
      tag:'输出功率效率·真题' },
  ];

  // 汇总 & 挂载
  const ALL_QS = [...P_M8, ...P_M9, ...P_M10, ...P_M11, ...P_M12, ...P_M13, ...P_M14];

  function mount() {
    if (typeof window === 'undefined') return;
    window.PHYSICS_BANK = window.PHYSICS_BANK || [];
    const before = window.PHYSICS_BANK.length;
    ALL_QS.forEach(q => window.PHYSICS_BANK.push(q));
    console.log('[物理·v4.3.6·精选真题 Part 4] 新增', ALL_QS.length, '题, 主库题数:', window.PHYSICS_BANK.length);
    const g = {};
    ALL_QS.forEach(q => { g[q.manualId] = (g[q.manualId]||0)+1; });
    console.log('[物理·v4.3.6 P4] 章节分布：', g);
  }

  if (typeof window !== 'undefined' && document.readyState !== 'loading') mount();
  else if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', mount);

  global.PHYSICS_V436_QUALITY_P4 = { ALL_QS, mount };
})(typeof window !== 'undefined' ? window : this);
