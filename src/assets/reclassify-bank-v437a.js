/* ===================================================================
 * 《问道修仙学院》v4.3.7a · 题库智能重分类补丁
 * -------------------------------------------------------------------
 * 修复 Bug①的深层原因：v4.3.5 之前的 physics-bank / chemistry-bank
 *   里大量题目的 manualId 是错的（比如 phy_m4 是"机械波"章，里面塞满
 *   了简谐振动题，而 phy_m1"简谐振动"章反而没题）。
 *
 * 本补丁按题干关键词把题目重新归到正确的 manualId 上。
 * 只处理 v4.2/v4.3.5 时代的旧题（id 前缀 phyq / chemq / geoq / mathq）
 * 手工整理的 quality 题（id 前缀 phy_q437/phy_q436）保持原状。
 *
 * 加载顺序：所有题库补丁之后，v437a-quality-fix.js 之前
 * =================================================================== */
(function (global) {
  'use strict';
  const TAG = '[v437a-reclass]';

  // ============================================================
  // 物理关键词 → manualId 映射（按新高考章节严格对齐）
  // ============================================================
  const PHY_KW = [
    // phy_m1 简谐振动
    { mid: 'phy_m1', kws: ['简谐运动','简谐振动','弹簧振子','回复力','振幅','相位','振动方程','x=Asin','x=Acos','振动图像','x-t图'] },
    // phy_m2 单摆
    { mid: 'phy_m2', kws: ['单摆','摆长','T=2π√(L/g)','摆球','等时性','小角度近似'] },
    // phy_m3 共振/阻尼
    { mid: 'phy_m3', kws: ['共振','受迫振动','驱动力','固有频率','阻尼振动','阻尼','振幅减小'] },
    // phy_m4 机械波
    { mid: 'phy_m4', kws: ['机械波','横波','纵波','波长','波速','波的传播','波峰','波谷','v=λf','λ='] },
    // phy_m5 波的叠加/干涉/衍射/多普勒
    { mid: 'phy_m5', kws: ['波的干涉','波的衍射','波的叠加','多普勒效应','驻波','声波干涉'] },
    // phy_m6 光的折射
    { mid: 'phy_m6', kws: ['折射率','光的折射','全反射','临界角','sin i/sin r','光疏','光密','棱镜'] },
    // phy_m7 光的干涉/衍射/偏振
    { mid: 'phy_m7', kws: ['双缝干涉','杨氏干涉','薄膜干涉','光的衍射','单缝衍射','偏振','偏振光','光栅'] },
    // phy_m8 运动学
    { mid: 'phy_m8', kws: ['匀速直线','匀加速','初速度为零','v-t图','位移-时间','平均速度','瞬时速度','自由落体','抛体运动'] },
    // phy_m9 牛顿定律/力
    { mid: 'phy_m9', kws: ['牛顿第二定律','牛顿第三定律','F=ma','摩擦力','弹力','静摩擦','动摩擦','斜面','木块','受力分析'] },
    // phy_m10 动量
    { mid: 'phy_m10', kws: ['动量','冲量','动量守恒','碰撞','弹性碰撞','非弹性碰撞','p=mv','I=Ft'] },
    // phy_m11 万有引力
    { mid: 'phy_m11', kws: ['万有引力','开普勒','卫星','人造卫星','行星','轨道','宇宙速度','GMm/r²','第一宇宙速度'] },
    // phy_m12 机械能/功
    { mid: 'phy_m12', kws: ['动能定理','机械能守恒','重力势能','弹性势能','功率','功','P=Fv','Ek=½mv²'] },
    // phy_m13 电场
    { mid: 'phy_m13', kws: ['电场','电场强度','电势','电势差','电容','电容器','库仑定律','点电荷','匀强电场','E='] },
    // phy_m14 电路
    { mid: 'phy_m14', kws: ['欧姆定律','电阻','串联','并联','电动势','内阻','电功率','U=IR','P=UI','伏安特性'] },
    // phy_m15 磁场
    { mid: 'phy_m15', kws: ['磁场','磁感应强度','安培力','洛伦兹力','磁通量','B=','F=BIL','F=qvB','带电粒子在磁场'] },
    // phy_m16 电磁感应
    { mid: 'phy_m16', kws: ['电磁感应','法拉第','楞次定律','感应电动势','ε=BLv','磁通变化','导轨','切割磁感线'] },
    // phy_m17 交变电流
    { mid: 'phy_m17', kws: ['交变电流','交流电','有效值','变压器','互感','正弦交流','n₁/n₂','原线圈'] },
    // phy_m18~19 (预留：多为电磁综合)
    // phy_m20 光电效应
    { mid: 'phy_m20', kws: ['光电效应','光电子','逸出功','截止频率','hν','光子','爱因斯坦光电方程','W₀'] },
    // phy_m21 原子结构
    { mid: 'phy_m21', kws: ['玻尔','原子光谱','能级','跃迁','氢原子','α粒子散射','卢瑟福'] },
    // phy_m22 原子核
    { mid: 'phy_m22', kws: ['原子核','衰变','α衰变','β衰变','γ射线','半衰期','核反应','裂变','聚变','结合能'] },
    // phy_m23~24 热学·分子动理论/气体
    { mid: 'phy_m23', kws: ['分子动理论','布朗运动','阿伏伽德罗常数','扩散','分子力','分子势能'] },
    { mid: 'phy_m24', kws: ['气体','理想气体','pV=nRT','等温','等压','等容','玻意耳','查理','盖-吕萨克'] },
    // phy_m25 热力学
    { mid: 'phy_m25', kws: ['热力学第一定律','热力学第二定律','ΔU=Q+W','熵','永动机','热机效率'] },
    // phy_m26 静电（补充）
    { mid: 'phy_m26', kws: ['静电','静电感应','电荷守恒','静电屏蔽'] },
    // phy_m27 电磁波
    { mid: 'phy_m27', kws: ['电磁波','麦克斯韦','LC振荡','电磁波谱','无线电波','微波','红外线','紫外线','X射线'] },
    // phy_m28 相对论
    { mid: 'phy_m28', kws: ['相对论','洛伦兹变换','时间膨胀','长度收缩','质能方程','E=mc²','光速不变'] },
  ];

  // ============================================================
  // 化学关键词 → manualId 映射
  // ============================================================
  const CHEM_KW = [
    { mid: 'chem_m1', kws: ['ΔH','反应热','焓变','盖斯定律','燃烧热','中和热','放热反应','吸热反应','热化学方程式'] },
    { mid: 'chem_m2', kws: ['反应速率','化学平衡','平衡常数','K=','勒夏特列','速率常数','活化能','浓度对平衡'] },
    { mid: 'chem_m3', kws: ['水解','电离','弱电解质','pH','Ka','Kw','缓冲','盐类水解','离子浓度大小','沉淀溶解平衡','Ksp'] },
    { mid: 'chem_m4', kws: ['离子反应','氧化还原','氧化剂','还原剂','化合价','电子转移','守恒法','离子方程式'] },
    { mid: 'chem_m5', kws: ['原电池','电解池','阴极','阳极','电极反应','燃料电池','铅蓄电池','锂电池','电镀','铜锌'] },
    { mid: 'chem_m6', kws: ['周期表','周期律','原子半径','电离能','电负性','元素周期','短周期','主族','ⅠA','ⅦA'] },
    { mid: 'chem_m7', kws: ['铁','Fe','Fe²⁺','Fe³⁺','铜','Cu','冶炼','金属活动性','置换反应'] },
    { mid: 'chem_m8', kws: ['钠','Na','铝','Al','NaOH','Al(OH)₃','两性','钠单质','焰色反应'] },
    { mid: 'chem_m9', kws: ['氯','Cl','硫','S','氮','N','硅','Si','非金属','SO₂','SO₃','NO','NO₂','HCl','HNO₃'] },
    { mid: 'chem_m10', kws: ['碳','C','硅酸盐','水泥','玻璃','陶瓷','石墨烯','金刚石','碳纳米管'] },
    { mid: 'chem_m11', kws: ['烷烃','烯烃','炔烃','苯','取代反应','加成反应','消去反应','官能团','羟基','醛基','羧基','酯化'] },
    { mid: 'chem_m12', kws: ['有机合成','高分子','聚合','单体','醇','醛','酸','酯','蛋白质','氨基酸','油脂','糖类'] },
    { mid: 'chem_m13', kws: ['同分异构','同分异构体','同系物','异构','命名','结构简式'] },
    { mid: 'chem_m14', kws: ['工业流程','工业制','侯氏制碱','接触法','海水提','氯碱','合成氨','高炉炼铁'] },
    { mid: 'chem_m15', kws: ['实验装置','气体制备','分液','蒸馏','萃取','过滤','洗气','干燥','标准溶液','滴定'] },
    { mid: 'chem_m16', kws: ['元素综合','元素推断','X、Y、Z','推断题','元素性质综合'] },
    { mid: 'chem_m17', kws: ['晶体','晶胞','原子晶体','分子晶体','离子晶体','金属晶体','杂化','sp²','sp³','配位数'] },
    { mid: 'chem_m18', kws: ['阿伏伽德罗','NA','摩尔','n=m/M','标准状况','气体摩尔体积','22.4','物质的量'] },
  ];

  // ============================================================
  // 重分类主函数
  // ============================================================
  function reclassifyBank(bankGlobalName, kwList, sectName) {
    const bank = global[bankGlobalName];
    if (!Array.isArray(bank)) {
      console.warn(TAG, `${bankGlobalName} 未就绪，跳过`);
      return;
    }

    let changed = 0, kept = 0, quality = 0;
    const validManualIds = new Set(kwList.map(k => k.mid));

    // 预编译关键词表，按分数排序
    function classify(text) {
      const scores = {};
      kwList.forEach(({ mid, kws }) => {
        let s = 0;
        kws.forEach(kw => {
          if (text.indexOf(kw) !== -1) s += kw.length; // 长关键词权重高
        });
        if (s > 0) scores[mid] = s;
      });
      const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
      return entries.length ? entries[0][0] : null;
    }

    bank.forEach(q => {
      if (!q || !q.id) return;
      // 手工整理的高质量题 → 保持原状
      if (/^(phy|chem|geo|math)_q(437|436|438)/.test(q.id)) {
        quality++;
        return;
      }
      // 老题：按关键词重新分类
      const text = (q.q || '') + ' ' + (q.explain || '') + ' ' + (q.tag || '');
      const bestMid = classify(text);
      if (bestMid && bestMid !== q.manualId) {
        q.manualId = bestMid;
        changed++;
      } else {
        kept++;
      }
    });

    console.info(TAG, `${sectName}: 重分类 ${changed} 题，保持原状 ${kept} 题，quality 保留 ${quality} 题（总 ${bank.length}）`);
  }

  // ============================================================
  // 主入口
  // ============================================================
  function boot() {
    const activeSubj = (typeof document !== 'undefined' && document.body && (document.body.dataset.subject || document.body.dataset.sect)) || null;
    if (!activeSubj || activeSubj === 'physics') reclassifyBank('PHYSICS_BANK', PHY_KW, 'physics');
    if (!activeSubj || activeSubj === 'chemistry') reclassifyBank('CHEMISTRY_BANK', CHEM_KW, 'chemistry');
    // 地理/数学的关键词映射后续补丁再加，先修最严重的物化
    console.debug(TAG, 'v4.4.0 重分类补丁已装载');

    // 触发 SQ 索引重建（如果 v437a-quality-fix 已装载）
    if (global.v437aFix && typeof global.v437aFix.patchSQ === 'function') {
      ['physics', 'chemistry'].forEach(s => {
        if (global.SQ && global.SQ.rebuildIdx) global.SQ.rebuildIdx(s);
      });
    }
  }

  // 立即执行（不需要等 DOM，因为只操作 bank 数据）
  if (typeof document !== 'undefined' && document.readyState !== 'loading') {
    setTimeout(boot, 50);
  } else if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(boot, 50));
  } else {
    boot();
  }

  global.v437aReclass = { boot, reclassifyBank, PHY_KW, CHEM_KW };
})(typeof window !== 'undefined' ? window : this);
