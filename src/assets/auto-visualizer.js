/* ===============================================================
 * 《问道修仙学院》v4.0 ✨ 题目自动可视化生成器
 *
 * 通过分析题目文本关键词/学科/manualId，自动生成对应的 SVG 可视化图，
 * 覆盖 v3.0 未做可视化的题目，避免"挂羊头卖狗肉"和重复。
 *
 * 用法：
 *   const svg = AutoViz.render(question);
 *   if (svg) container.innerHTML = svg;
 *
 * 已内置图形：
 *   物理：受力分析、匀速圆周、电路、磁场方向、振动、波形、光路
 *   化学：分子结构、反应能量图、电解池、化学键、平衡示意
 *   地理：等高线、水循环、气压带、洋流、经纬网、地貌类型、气候统计
 *   数学：直角坐标、三角函数、几何图形
 *   语文/英语：结构树、时间轴
 *
 * 未命中时返回一张"符文抽象图"作为兜底装饰。
 * =============================================================== */

(function (global) {
  'use strict';

  const AutoViz = {

    // 主入口（也叫 forQuestion 为 subject-page 别名）
    render(q) {
      if (!q) return '';
      const sect = q.sect || _guessSect(q.id || '');
      const text = (q.q || '') + ' ' + (q.explain || '') + ' ' + (q.monster || '');
      const mid = q.manualId || '';
      const key = _findKey(sect, mid, text);
      const generator = GEN[key] || GEN._fallback;
      try {
        const seed = _hash(q.id || q.q || 'x');
        // v4.0: seed 作为第三参数传入 generator，支持深度变体
        const raw = generator(q, text, seed);
        // v4.0: 如果 generator 返回空字符串（如 fallback），直接不渲染参考图
        if (!raw || raw.trim() === '') return '';
        const varied = _applyVariant(raw, seed, key);
        const short = key.replace(/^(phy|chem|geo|math|chi|eng)_/,'');
        const tagId = (seed % 9999).toString().padStart(4,'0');
        const tag = `<div style="font-size:10px;color:var(--xx-text-dim);letter-spacing:2px;text-align:right;margin-top:-4px;margin-bottom:4px;">◈ ${short} · #${tagId} ◈</div>`;
        return `<div class="viz-panel">${tag}${varied}</div>`;
      } catch (e) {
        console.warn('[AutoViz] 生成失败', e);
        return '';
      }
    },
    // 别名（subject-page.js 用）
    forQuestion(q) { return this.render(q); },

  };

  // 稳定 hash（字符串 -> [0, 1) 浮点）
  function _hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h) + str.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  // 变体注入：将 SVG 中的颜色循环偏移、旋转角度循环偏移，使同一 generator 对不同题目生成不重复的图
  // 还会向 SVG 附加一些装饰性星花/粒子，丰富视觉
  const _VARIANT_PALETTES = [
    ['#6ed5e0','#f5c97a','#b288ff','#8ce28c','#ff9ec6'],
    ['#f5c97a','#6ed5e0','#ff9ec6','#b288ff','#8ce28c'],
    ['#b288ff','#f5c97a','#6ed5e0','#ff9ec6','#8ce28c'],
    ['#8ce28c','#f5c97a','#b288ff','#6ed5e0','#ff9ec6'],
    ['#ff9ec6','#6ed5e0','#f5c97a','#b288ff','#8ce28c'],
  ];
  // 颜色轮换：基于 seed 将 SVG 中常见主色循环替换
  const _COLOR_MAP = {
    '#6ed5e0': 0, '#f5c97a': 1, '#b288ff': 2, '#8ce28c': 3, '#ff9ec6': 4,
  };
  const _COLOR_KEYS = Object.keys(_COLOR_MAP);
  function _applyVariant(svg, seed, key) {
    if (!svg || typeof svg !== 'string') return svg;
    if (!svg.includes('<svg')) return svg;
    const palette = _VARIANT_PALETTES[seed % _VARIANT_PALETTES.length];
    const shift = seed % 5;

    // 1) 颜色轮换
    let out = svg;
    _COLOR_KEYS.forEach((c, i) => {
      out = out.replace(new RegExp(c, 'gi'), `__COL${i}__`);
    });
    _COLOR_KEYS.forEach((_, i) => {
      const newCol = _COLOR_KEYS[(i + shift) % _COLOR_KEYS.length];
      out = out.replace(new RegExp(`__COL${i}__`, 'g'), newCol);
    });

    // 2) 数值微调（更强）
    out = out.replace(/(>\s*([λωATν]|振幅|波长|周期|频率|转速|角度|pH)[^<>]*?=\s*)(-?\d+(?:\.\d+)?)(\s*[^<]*?<\/text>)/g,
      (m, pre, sym, num, post) => {
        const base = parseFloat(num);
        if (isNaN(base)) return m;
        const factor = 0.7 + ((seed >> 3) % 60) / 100;
        let vv = base * factor;
        if (Math.abs(base) >= 5) vv = Math.round(vv);
        else vv = Math.round(vv * 10) / 10;
        return pre + vv + post;
      });

    // 3) 更丰富的装饰（星星/圆点/十字/圆环 四种随机）
    const decos = [];
    for (let i = 0; i < 10; i++) {
      const sx = 20 + ((seed >> (i*3)) % 44) * 10;
      const sy = 8  + ((seed >> (i*3+2)) % 21) * 5;
      const size = 1 + ((seed >> (i*2)) % 3);
      const col = palette[i % palette.length];
      const kind = (seed >> i) & 3;
      if (kind === 0) {
        decos.push(`<path d="M${sx},${sy-size*2} L${sx+size*0.6},${sy-size*0.6} L${sx+size*2},${sy} L${sx+size*0.6},${sy+size*0.6} L${sx},${sy+size*2} L${sx-size*0.6},${sy+size*0.6} L${sx-size*2},${sy} L${sx-size*0.6},${sy-size*0.6} Z" fill="${col}" opacity="0.35"/>`);
      } else if (kind === 1) {
        decos.push(`<circle cx="${sx}" cy="${sy}" r="${size}" fill="${col}" opacity="0.3"/>`);
      } else if (kind === 2) {
        decos.push(`<path d="M${sx-size*2},${sy} L${sx+size*2},${sy} M${sx},${sy-size*2} L${sx},${sy+size*2}" stroke="${col}" stroke-width="0.6" opacity="0.4"/>`);
      } else {
        decos.push(`<circle cx="${sx}" cy="${sy}" r="${size*1.2}" fill="none" stroke="${col}" stroke-width="0.5" opacity="0.4"/>`);
      }
    }
    // 4) 六种符文外框 —— 每题独一
    const runeKind = seed % 6;
    const runes = [
      `<circle r="12" fill="none" stroke="${palette[0]}" stroke-width="0.8"/><path d="M-6,-2 L0,4 L6,-2 M0,-6 L0,6" stroke="${palette[1]}" stroke-width="0.8" fill="none"/>`,
      `<polygon points="0,-12 10,-4 6,10 -6,10 -10,-4" fill="none" stroke="${palette[0]}" stroke-width="0.8"/><circle r="3" fill="${palette[1]}"/>`,
      `<rect x="-10" y="-10" width="20" height="20" fill="none" stroke="${palette[2]}" stroke-width="0.8" transform="rotate(45)"/><rect x="-6" y="-6" width="12" height="12" fill="none" stroke="${palette[0]}" stroke-width="0.6"/>`,
      `<path d="M-12,0 A12,12 0 0,1 12,0 A6,6 0 0,1 0,0 A6,6 0 0,1 -12,0Z" fill="none" stroke="${palette[1]}" stroke-width="0.8"/>`,
      `<g stroke="${palette[0]}" stroke-width="0.8" fill="none"><circle r="11"/><path d="M-8,-4 L8,-4 M-8,4 L8,4 M0,-11 L0,11"/></g>`,
      `<g fill="none" stroke="${palette[3]}" stroke-width="0.8"><path d="M-10,0 L-4,-8 L4,-8 L10,0 L4,8 L-4,8 Z"/><circle r="3" fill="${palette[0]}"/></g>`,
    ];
    const rune = `<g transform="translate(440,18)" opacity="0.55">${runes[runeKind]}</g>`;
    const runeTL = `<g transform="translate(24,18) scale(0.6)" opacity="0.4">${runes[(runeKind+3)%6]}</g>`;
    out = out.replace(/(<svg[^>]*>)/, `$1<g class="viz-deco" opacity="0.9">${decos.join('')}${rune}${runeTL}</g>`);
    return out;
  }

  function _guessSect(id) {
    if (id.startsWith('phy')) return 'physics';
    if (id.startsWith('chem')) return 'chemistry';
    if (id.startsWith('geo')) return 'geography';
    if (id.startsWith('chi')) return 'chinese';
    if (id.startsWith('math')) return 'math';
    if (id.startsWith('eng')) return 'english';
    return '';
  }

  // 关键词 → 生成器 key 映射（可扩展）
  function _findKey(sect, mid, text) {
    const t = text.toLowerCase();
    // 物理
    if (sect === 'physics') {
      if (/振动|简谐|弹簧|摆|振幅|周期/.test(text)) return 'phy_vibration';
      if (/波|干涉|衍射|波长|频率/.test(text))   return 'phy_wave';
      if (/折射|反射|光路|全反射|临界角/.test(text)) return 'phy_optic';
      if (/双缝|条纹/.test(text))                return 'phy_dcslit';
      if (/电磁感应|磁通|切割|感应电动势/.test(text)) return 'phy_emf';
      if (/磁场|洛伦兹|安培|带电粒子|圆周/.test(text)) return 'phy_magnetic';
      if (/交流|变压|有效值|正弦/.test(text))    return 'phy_ac';
      if (/分子|布朗|气体分子|阿伏伽德罗/.test(text)) return 'phy_molecule';
      if (/气体|玻意耳|查理|盖-吕|状态方程|pv/.test(t)) return 'phy_gas';
      if (/热力|焓|内能|热机|熵/.test(text))     return 'phy_thermo';
      if (/晶体|非晶体|表面张力|毛细/.test(text)) return 'phy_solid';
      if (/受力|拉力|重力|支持力|摩擦/.test(text)) return 'phy_force';
      return 'phy_wave';
    }
    // 化学
    if (sect === 'chemistry') {
      if (/放热|吸热|焓|反应热|盖斯/.test(text)) return 'chem_energy';
      if (/速率|活化能|催化剂|平衡/.test(text))  return 'chem_rate';
      if (/勒夏|化学平衡|k =|平衡常数|转化率/.test(t)) return 'chem_equilib';
      if (/ph|酸碱|水解|水的电离|kw/.test(t))    return 'chem_ph';
      if (/电解|原电池|阳极|阴极|电极/.test(text)) return 'chem_electro';
      if (/共价键|离子键|电子排布|轨道/.test(text)) return 'chem_bond';
      if (/vsepr|分子构型|正四面体|三角锥|直线型|角型/.test(t)) return 'chem_vsepr';
      if (/晶体|晶胞|分子晶体|离子晶体|原子晶体/.test(text)) return 'chem_crystal';
      if (/官能团|取代|加成|消去|酯化|烃/.test(text)) return 'chem_organic';
      if (/周期表|周期律|同周期|同主族/.test(text)) return 'chem_periodic';
      return 'chem_organic';
    }
    // 地理
    if (sect === 'geography') {
      if (/自转|公转|时差|经度|日界线|时区/.test(text)) return 'geo_earth';
      if (/太阳直射|回归|昼夜|正午/.test(text))    return 'geo_solar';
      if (/气压带|风带|季风|气候|降水|气温/.test(text)) return 'geo_climate';
      if (/洋流|寒流|暖流|渔场/.test(text))       return 'geo_current';
      if (/水循环|河流|地下水|湖泊/.test(text))    return 'geo_water';
      if (/等高线|地形|山谷|山脊|陡崖|坡度/.test(text)) return 'geo_contour';
      if (/地貌|喀斯特|冲积|三角洲|风蚀|冰川/.test(text)) return 'geo_landform';
      if (/板块|地震|火山/.test(text))            return 'geo_plate';
      if (/土壤|黑土|红壤|腐殖/.test(text))       return 'geo_soil';
      if (/城市化|产业|工业|农业/.test(text))     return 'geo_urban';
      if (/资源|粮食|能源|生态|环境/.test(text))  return 'geo_env';
      return 'geo_climate';
    }
    // 数学
    if (sect === 'math') {
      // v4.0: 优先识别向量类问题（避免走 math_geo 或 fallback 出现莫名多边形）
      if (/向量|矢量|𝐚|𝐛|𝐜|·(?:.*?)=|模长|数量积|点积|叉积|dot|正交|垂直.*向量|向量.*垂直/.test(text)) return 'math_vector';
      if (/概率|分布|期望|方差|随机变量|二项分布|正态/.test(text)) return 'math_prob';
      if (/数列|通项|等差|等比|递推|前n项/.test(text)) return 'math_sequence';
      if (/导数|极值|单调|斜率|切线|f'\(/.test(text)) return 'math_derivative';
      if (/立体几何|棱柱|棱锥|球|圆柱|圆锥/.test(text)) return 'math_solid';
      if (/椭圆|双曲线|抛物线|离心率|焦点|准线/.test(text)) return 'math_conic';
      if (/三角形|余弦定理|正弦定理|外接圆|内接/.test(text)) return 'math_triangle';
      if (/圆(?![锥柱])|弦长|圆心|半径.*=/.test(text)) return 'math_circle';
      if (/三角|正弦|余弦|tan|sin|cos/.test(t))     return 'math_trig';
      if (/坐标|直角坐标|xoy|函数|f\(x\)/.test(t)) return 'math_axis';
      if (/直线|方程/.test(text)) return 'math_line';
      return 'math_axis';
    }
    // 语文
    if (sect === 'chinese') {
      if (/时间|时代|朝代|世纪|历史|先后|演进/.test(text)) return 'timeline';
      if (/诗|词|句|韵|对仗|平仄|五言|七言/.test(text)) return 'chi_poem';
      if (/文言|实词|虚词|句式|倒装|宾语前置/.test(text)) return 'chi_grammar';
      if (/人物|形象|情感|心理|作者/.test(text)) return 'chi_character';
      return 'struct_tree';
    }
    // 英语
    if (sect === 'english') {
      if (/tense|时态|现在完成|过去|将来/.test(text)) return 'eng_tense';
      if (/clause|从句|定语|状语|同位语/.test(text)) return 'eng_clause';
      if (/passive|被动|主动/.test(text)) return 'eng_voice';
      if (/word|词汇|同义|反义/.test(text)) return 'struct_tree';
      return 'struct_tree';
    }
    return '_fallback';
  }

  // ================================================================
  // 生成器集合
  // ================================================================
  const GEN = {};
  const W = 480, H = 220;   // 默认画布尺寸

  // ============ 通用工具 ============
  function svgOpen(w = W, h = H, extra = '') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" ${extra}>`;
  }
  function svgClose() { return `</svg>`; }
  function bg(color = 'rgba(255,255,255,0.02)') {
    return `<rect width="100%" height="100%" fill="${color}" rx="6"/>`;
  }
  function label(x, y, text, color = '#f5c97a', size = 12, anchor = 'middle') {
    return `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" text-anchor="${anchor}"
             font-family="STKaiti,KaiTi,serif" font-weight="600">${text}</text>`;
  }

  // ============ 物理 ============
  GEN.phy_vibration = () => {
    return svgOpen() + bg() +
      `<line x1="30" y1="110" x2="450" y2="110" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>`+
      `<path d="M30,110 Q80,30 130,110 T230,110 T330,110 T430,110" fill="none" stroke="#6ed5e0" stroke-width="2.5"/>`+
      `<circle cx="130" cy="30" r="6" fill="#f5c97a"/>`+
      `<circle cx="230" cy="190" r="6" fill="#f5c97a"/>`+
      `<line x1="130" y1="30" x2="130" y2="110" stroke="#f5c97a" stroke-dasharray="2,2"/>`+
      label(130, 22, "最大位移", "#f5c97a", 11)+
      label(240, 110, "平衡位置", "#8ce28c", 11, "start")+
      label(80, 210, "简谐振动 y = A·sin(ωt+φ)", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_wave = () => {
    return svgOpen() + bg() +
      `<line x1="20" y1="110" x2="460" y2="110" stroke="#666" stroke-dasharray="3,3"/>`+
      `<path d="M20,110 Q60,40 100,110 T180,110 T260,110 T340,110 T420,110" fill="none" stroke="#6ed5e0" stroke-width="2.5"/>`+
      `<path d="M20,120 Q60,190 100,120 T180,120 T260,120 T340,120 T420,120" fill="none" stroke="#ff9ec6" stroke-width="2" stroke-dasharray="4,2"/>`+
      `<line x1="60" y1="40" x2="60" y2="110" stroke="#f5c97a" stroke-dasharray="2,2"/>`+
      `<line x1="140" y1="40" x2="140" y2="110" stroke="#f5c97a" stroke-dasharray="2,2"/>`+
      `<path d="M60,30 L140,30" stroke="#f5c97a" stroke-width="2" marker-end="url(#arrowhead)"/>`+
      `<defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="#f5c97a"/></marker></defs>`+
      label(100, 24, "波长 λ", "#f5c97a", 12)+
      label(240, 210, "机械波 v = λf", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_optic = () => {
    return svgOpen() + bg() +
      // 界面
      `<line x1="0" y1="110" x2="480" y2="110" stroke="#f5c97a" stroke-width="2"/>`+
      `<rect x="0" y="110" width="480" height="110" fill="rgba(110,213,224,0.08)"/>`+
      label(430, 100, "光疏 n₁", "#f5c97a", 11, "start")+
      label(430, 130, "光密 n₂", "#6ed5e0", 11, "start")+
      // 法线
      `<line x1="240" y1="10" x2="240" y2="210" stroke="#888" stroke-dasharray="2,2"/>`+
      // 入射光
      `<line x1="120" y1="20" x2="240" y2="110" stroke="#f5c97a" stroke-width="2" marker-end="url(#arr1)"/>`+
      // 折射光
      `<line x1="240" y1="110" x2="310" y2="200" stroke="#6ed5e0" stroke-width="2" marker-end="url(#arr1)"/>`+
      // 反射光
      `<line x1="240" y1="110" x2="360" y2="20" stroke="#ff9ec6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arr1)"/>`+
      `<defs><marker id="arr1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="currentColor"/></marker></defs>`+
      label(180, 60, "θ₁", "#f5c97a", 12)+
      label(280, 170, "θ₂", "#6ed5e0", 12)+
      label(20, 210, "n = sinθ₁/sinθ₂ = c/v", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_dcslit = () => {
    return svgOpen() + bg() +
      // 光源
      `<circle cx="30" cy="110" r="10" fill="#ffd700"/>`+
      // 双缝
      `<line x1="140" y1="80" x2="140" y2="140" stroke="#666" stroke-width="6"/>`+
      `<rect x="138" y="95" width="4" height="4" fill="#0a0715"/>`+
      `<rect x="138" y="121" width="4" height="4" fill="#0a0715"/>`+
      // 屏幕
      `<line x1="380" y1="20" x2="380" y2="200" stroke="#666" stroke-width="4"/>`+
      // 干涉条纹
      [40,70,100,130,160].forEach && '',
      // 用直接字符串
      `<g>` +
      [40, 70, 100, 130, 160, 190].map((offset, i) =>
        `<rect x="380" y="${20 + offset}" width="8" height="10" fill="${i%2 ? '#f5c97a' : '#333'}"/>`
      ).join('') +
      `</g>`+
      // 光路
      `<line x1="30" y1="110" x2="140" y2="97" stroke="#f5c97a" stroke-width="1" opacity="0.6"/>`+
      `<line x1="30" y1="110" x2="140" y2="123" stroke="#f5c97a" stroke-width="1" opacity="0.6"/>`+
      `<line x1="140" y1="97" x2="380" y2="90" stroke="#f5c97a" stroke-width="1" opacity="0.5" stroke-dasharray="2,2"/>`+
      `<line x1="140" y1="123" x2="380" y2="120" stroke="#f5c97a" stroke-width="1" opacity="0.5" stroke-dasharray="2,2"/>`+
      label(140, 75, "双缝(d)", "#6ed5e0", 11)+
      label(380, 15, "屏(L)", "#8ce28c", 11)+
      label(30, 90, "光源", "#f5c97a", 11)+
      label(240, 210, "条纹间距 Δy = λL/d", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_emf = () => {
    return svgOpen() + bg() +
      // 磁场（点表示指出屏幕）
      `<rect x="50" y="30" width="380" height="150" fill="rgba(110,213,224,0.08)" stroke="#6ed5e0" stroke-dasharray="4,3"/>`+
      // 点阵
      [[80,55],[130,55],[180,55],[230,55],[280,55],[330,55],[380,55],
       [80,110],[130,110],[180,110],[230,110],[280,110],[330,110],[380,110],
       [80,165],[130,165],[180,165],[230,165],[280,165],[330,165],[380,165]]
        .map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="2" fill="#6ed5e0"/>`).join('')+
      // 导线（U形回路）
      `<rect x="120" y="70" width="200" height="70" fill="none" stroke="#f5c97a" stroke-width="3"/>`+
      // 电阻
      `<rect x="145" y="65" width="30" height="10" fill="#f5c97a"/>`+
      // 导体棒（切割运动）
      `<line x1="260" y1="60" x2="260" y2="150" stroke="#ff9ec6" stroke-width="4"/>`+
      // v 箭头
      `<line x1="260" y1="105" x2="330" y2="105" stroke="#ff4757" stroke-width="3" marker-end="url(#arrV)"/>`+
      `<defs><marker id="arrV" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="#ff4757"/></marker></defs>`+
      label(295, 100, "v", "#ff4757", 14, "start")+
      label(260, 55, "导体棒 L", "#ff9ec6", 11)+
      label(160, 60, "R", "#f5c97a", 11)+
      label(430, 40, "B ⊙", "#6ed5e0", 13, "start")+
      label(20, 210, "感应电动势 ε = BLv （右手定则）", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_magnetic = () => {
    return svgOpen() + bg() +
      // 磁场区
      `<rect x="60" y="30" width="360" height="160" fill="rgba(178,136,255,0.08)" stroke="#b288ff" stroke-dasharray="4,3"/>`+
      // × 表示磁场进入屏幕
      [[100,60],[160,60],[220,60],[280,60],[340,60],[400,60],
       [100,120],[160,120],[220,120],[280,120],[340,120],[400,120],
       [100,180],[160,180],[220,180],[280,180],[340,180],[400,180]]
        .map(p => `<text x="${p[0]}" y="${p[1]}" fill="#b288ff" font-size="14" text-anchor="middle">×</text>`).join('')+
      // 圆周轨迹
      `<circle cx="240" cy="110" r="60" fill="none" stroke="#f5c97a" stroke-width="2" stroke-dasharray="3,2"/>`+
      // 粒子
      `<circle cx="300" cy="110" r="8" fill="#ff4757">
         <animateMotion dur="4s" repeatCount="indefinite"
                        path="M0,0 A60,60 0 1 0 0.01,0"/>
       </circle>`+
      label(240, 100, "r", "#f5c97a", 12)+
      label(260, 65, "+", "#ff4757", 14, "start")+
      label(430, 40, "B ⊗", "#b288ff", 13, "start")+
      label(20, 210, "洛伦兹力：qvB=mv²/r → r=mv/(qB)", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_ac = () => {
    return svgOpen() + bg() +
      `<line x1="30" y1="110" x2="450" y2="110" stroke="#666"/>`+
      `<path d="M30,110 Q65,20 100,110 T170,110 T240,110 T310,110 T380,110 T450,110" fill="none" stroke="#f5c97a" stroke-width="2.5"/>`+
      `<line x1="30" y1="30" x2="450" y2="30" stroke="#ff4757" stroke-dasharray="4,3" stroke-width="1"/>`+
      `<line x1="30" y1="190" x2="450" y2="190" stroke="#ff4757" stroke-dasharray="4,3" stroke-width="1"/>`+
      label(20, 30, "+U_m", "#ff4757", 11, "start")+
      label(20, 195, "-U_m", "#ff4757", 11, "start")+
      label(20, 210, "u = U_m·sin(ωt+φ)，有效值 U = U_m/√2", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_molecule = () => {
    return svgOpen() + bg() +
      // 众多分子随机位置(伪静态)
      [[80,60],[150,50],[220,70],[290,60],[360,55],[420,80],
       [70,120],[140,140],[210,110],[280,130],[350,120],[410,140],
       [90,180],[160,190],[230,170],[300,180],[370,190],[430,175]]
        .map((p,i) => {
          const c = ['#6ed5e0','#f5c97a','#ff9ec6','#8ce28c','#b288ff'][i%5];
          return `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="${c}">
            <animate attributeName="cx" values="${p[0]};${p[0]+15};${p[0]-10};${p[0]}" dur="${2+i*0.2}s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="${p[1]};${p[1]-10};${p[1]+8};${p[1]}" dur="${2.2+i*0.15}s" repeatCount="indefinite"/>
          </circle>`;
        }).join('')+
      label(20, 210, "分子无规则热运动（布朗运动反映之）", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_gas = () => {
    return svgOpen() + bg() +
      // 容器
      `<rect x="80" y="40" width="320" height="140" fill="rgba(110,213,224,0.06)" stroke="#f5c97a" stroke-width="2" rx="4"/>`+
      // 活塞
      `<rect x="80" y="30" width="320" height="14" fill="#c9a14d"/>`+
      // 分子（漂浮）
      [[120,80],[180,100],[240,70],[300,110],[350,90],[140,150],[200,140],[280,160],[340,150],[170,120]]
        .map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#6ed5e0">
          <animate attributeName="cy" values="${p[1]};${p[1]-15};${p[1]}" dur="2s" repeatCount="indefinite"/>
        </circle>`).join('')+
      // 压力箭头
      `<line x1="240" y1="10" x2="240" y2="30" stroke="#ff4757" stroke-width="3" marker-end="url(#pArr)"/>`+
      `<defs><marker id="pArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="#ff4757"/></marker></defs>`+
      label(250, 22, "p (压强)", "#ff4757", 11, "start")+
      label(60, 105, "V", "#8ce28c", 14, "end")+
      label(240, 195, "T (温度 K)", "#b288ff", 12)+
      label(30, 210, "pV/T = 常量 (T必须用K！)", "#f5c97a", 12, "start")+
      svgClose();
  };
  GEN.phy_thermo = () => {
    return svgOpen(480, 240) + bg() +
      // 内能水位图
      `<rect x="60" y="60" width="120" height="150" fill="rgba(140,226,140,0.15)" stroke="#8ce28c"/>`+
      `<rect x="300" y="40" width="120" height="170" fill="rgba(255,158,198,0.2)" stroke="#ff9ec6"/>`+
      label(120, 50, "初态 U₁", "#8ce28c", 12)+
      label(360, 30, "末态 U₂", "#ff9ec6", 12)+
      // 加号符号
      `<text x="240" y="120" fill="#f5c97a" font-size="30" text-anchor="middle">→</text>`+
      // Q 和 W
      label(240, 90, "+ Q (吸热)", "#ff4757", 12)+
      label(240, 150, "+ W (外做功)", "#6ed5e0", 12)+
      label(60, 230, "ΔU = W + Q  (符号：外做功W正, 气体吸热Q正)", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_solid = () => {
    return svgOpen() + bg() +
      // 单晶（规则六边形阵列）
      `<g transform="translate(60,60)">`+
      [0,1,2].map(r => [0,1,2,3].map(c => {
        const x = c * 32 + (r % 2 ? 16 : 0);
        const y = r * 28;
        return `<polygon points="${x},${y+8} ${x+8},${y} ${x+24},${y} ${x+32},${y+8} ${x+24},${y+16} ${x+8},${y+16}"
                  fill="rgba(110,213,224,0.2)" stroke="#6ed5e0"/>`;
      }).join('')).join('')+
      `</g>`+
      label(120, 155, "单晶体（规则）", "#6ed5e0", 11)+
      // 非晶（乱点）
      `<g>`+
      Array(30).fill(0).map(()=>{
        const x = 260 + Math.random()*180;
        const y = 40 + Math.random()*110;
        return `<circle cx="${x}" cy="${y}" r="4" fill="rgba(255,158,198,0.5)"/>`;
      }).join('')+
      `</g>`+
      label(350, 165, "非晶体（无序）", "#ff9ec6", 11)+
      label(30, 210, "有固定熔点=晶体；缓慢软化=非晶体", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.phy_force = () => {
    return svgOpen() + bg() +
      // 地面
      `<line x1="30" y1="170" x2="450" y2="170" stroke="#c9a14d" stroke-width="2"/>`+
      // 物体
      `<rect x="200" y="130" width="60" height="40" fill="rgba(245,201,122,0.3)" stroke="#f5c97a" stroke-width="2"/>`+
      // 重力
      `<line x1="230" y1="150" x2="230" y2="210" stroke="#ff4757" stroke-width="3" marker-end="url(#fArr)"/>`+
      label(240, 205, "G", "#ff4757", 14, "start")+
      // 支持力
      `<line x1="230" y1="150" x2="230" y2="80" stroke="#8ce28c" stroke-width="3" marker-end="url(#fArr)"/>`+
      label(240, 85, "N", "#8ce28c", 14, "start")+
      // 摩擦力
      `<line x1="200" y1="150" x2="140" y2="150" stroke="#b288ff" stroke-width="3" marker-end="url(#fArr)"/>`+
      label(130, 145, "f", "#b288ff", 14, "end")+
      // 拉力
      `<line x1="260" y1="150" x2="340" y2="150" stroke="#6ed5e0" stroke-width="3" marker-end="url(#fArr)"/>`+
      label(350, 145, "F", "#6ed5e0", 14, "start")+
      `<defs><marker id="fArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="currentColor"/></marker></defs>`+
      label(30, 30, "受力分析：合力 F_合 = ma", "#b288ff", 12, "start")+
      svgClose();
  };

  // ============ 化学 ============
  GEN.chem_energy = () => {
    return svgOpen() + bg() +
      // 坐标
      `<line x1="50" y1="180" x2="440" y2="180" stroke="#666"/>`+
      `<line x1="50" y1="30" x2="50" y2="180" stroke="#666"/>`+
      label(30, 100, "能\n量", "#f5c97a", 11)+
      // 反应物平台
      `<line x1="80" y1="150" x2="150" y2="150" stroke="#6ed5e0" stroke-width="3"/>`+
      label(115, 145, "反应物", "#6ed5e0", 11)+
      // 过渡态（活化能顶点）
      `<path d="M150,150 Q220,50 290,150" fill="none" stroke="#f5c97a" stroke-width="2"/>`+
      label(220, 45, "过渡态（活化能）", "#f5c97a", 11)+
      // 生成物平台（放热：更低）
      `<line x1="290" y1="150" x2="400" y2="120" stroke="#ff9ec6" stroke-width="3" stroke-dasharray="5,3"/>`+
      `<line x1="290" y1="150" x2="400" y2="100" stroke="#ff9ec6" stroke-width="3"/>`+
      label(360, 95, "生成物", "#ff9ec6", 11)+
      // 箭头 ΔH
      `<line x1="330" y1="150" x2="330" y2="105" stroke="#ff4757" stroke-width="2" marker-end="url(#dArr)"/>`+
      label(350, 130, "ΔH<0(放热)", "#ff4757", 11, "start")+
      `<defs><marker id="dArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="#ff4757"/></marker></defs>`+
      label(200, 210, "反应过程", "#b288ff", 12)+
      svgClose();
  };
  GEN.chem_rate = () => {
    return svgOpen() + bg() +
      `<line x1="50" y1="180" x2="440" y2="180" stroke="#666"/>`+
      `<line x1="50" y1="30" x2="50" y2="180" stroke="#666"/>`+
      // 无催化剂
      `<path d="M60,150 Q150,40 240,150" fill="none" stroke="#ff4757" stroke-width="2.5"/>`+
      label(150, 35, "无催化剂 Ea 大", "#ff4757", 11)+
      // 有催化剂
      `<path d="M60,150 Q150,90 240,150" fill="none" stroke="#8ce28c" stroke-width="2.5"/>`+
      label(150, 85, "有催化剂 Ea 小", "#8ce28c", 11)+
      // 生成物线
      `<line x1="240" y1="150" x2="400" y2="130" stroke="#6ed5e0" stroke-width="2"/>`+
      label(30, 100, "能\n量", "#f5c97a", 11)+
      label(150, 210, "催化剂降低活化能 Ea，加快反应速率", "#b288ff", 12)+
      svgClose();
  };
  GEN.chem_equilib = () => {
    return svgOpen() + bg() +
      // 天平示意
      `<line x1="240" y1="40" x2="240" y2="180" stroke="#f5c97a" stroke-width="3"/>`+
      `<line x1="90" y1="90" x2="390" y2="90" stroke="#f5c97a" stroke-width="3"/>`+
      // 反应物盘
      `<rect x="60" y="90" width="120" height="30" fill="rgba(110,213,224,0.2)" stroke="#6ed5e0"/>`+
      label(120, 110, "反应物 →", "#6ed5e0", 12)+
      // 生成物盘
      `<rect x="300" y="90" width="120" height="30" fill="rgba(255,158,198,0.2)" stroke="#ff9ec6"/>`+
      label(360, 110, "← 生成物", "#ff9ec6", 12)+
      // 双向箭头
      label(240, 140, "⇌", "#f5c97a", 24)+
      label(240, 175, "v(正) = v(逆)", "#8ce28c", 12)+
      label(60, 210, "K = ∏[生成物]^c / ∏[反应物]^a  (只随温度变)", "#b288ff", 11, "start")+
      svgClose();
  };
  GEN.chem_ph = () => {
    return svgOpen() + bg() +
      // pH 尺
      `<defs><linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff4757"/><stop offset="35%" stop-color="#ff9ec6"/>
        <stop offset="50%" stop-color="#8ce28c"/><stop offset="65%" stop-color="#6ed5e0"/>
        <stop offset="100%" stop-color="#b288ff"/>
      </linearGradient></defs>`+
      `<rect x="40" y="100" width="400" height="30" fill="url(#phGrad)" stroke="#f5c97a"/>`+
      // 刻度
      [0,2,4,6,7,8,10,12,14].map(v => {
        const x = 40 + (v/14) * 400;
        return `<line x1="${x}" y1="130" x2="${x}" y2="140" stroke="#f5c97a"/>` +
               label(x, 155, v, "#ede5d3", 11);
      }).join('')+
      label(60, 90, "强酸", "#ff4757", 12, "start")+
      label(240, 90, "中性", "#8ce28c", 12)+
      label(420, 90, "强碱", "#b288ff", 12, "end")+
      label(240, 190, "pH=-lg[H⁺]，25℃ K_w=[H⁺][OH⁻]=10⁻¹⁴", "#f5c97a", 12)+
      svgClose();
  };
  GEN.chem_electro = () => {
    return svgOpen() + bg() +
      // 电解池
      `<rect x="80" y="60" width="320" height="120" fill="rgba(110,213,224,0.08)" stroke="#f5c97a" stroke-width="2"/>`+
      // 电极
      `<rect x="130" y="70" width="12" height="110" fill="#ff4757"/>`+
      `<rect x="338" y="70" width="12" height="110" fill="#8ce28c"/>`+
      label(136, 55, "阳极 +", "#ff4757", 12)+
      label(344, 55, "阴极 -", "#8ce28c", 12)+
      // 电源
      `<line x1="136" y1="70" x2="136" y2="30" stroke="#f5c97a" stroke-width="2"/>`+
      `<line x1="344" y1="70" x2="344" y2="30" stroke="#f5c97a" stroke-width="2"/>`+
      `<line x1="136" y1="30" x2="240" y2="30" stroke="#f5c97a" stroke-width="2"/>`+
      `<line x1="344" y1="30" x2="240" y2="30" stroke="#f5c97a" stroke-width="2"/>`+
      `<circle cx="240" cy="30" r="10" fill="none" stroke="#f5c97a" stroke-width="2"/>`+
      label(240, 34, "⊝⊕", "#f5c97a", 10)+
      // 离子箭头
      `<text x="200" y="120" font-size="18" fill="#ff9ec6">+</text>`+
      `<text x="280" y="120" font-size="18" fill="#6ed5e0">−</text>`+
      `<line x1="215" y1="130" x2="330" y2="130" stroke="#6ed5e0" stroke-dasharray="4,2" marker-end="url(#eArr)"/>`+
      `<line x1="265" y1="150" x2="150" y2="150" stroke="#ff9ec6" stroke-dasharray="4,2" marker-end="url(#eArr)"/>`+
      `<defs><marker id="eArr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="currentColor"/></marker></defs>`+
      label(60, 210, "阳极氧化(失e)，阴极还原(得e)", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.chem_bond = () => {
    // 展示 CH4 结构
    return svgOpen() + bg() +
      `<circle cx="240" cy="110" r="24" fill="#333" stroke="#f5c97a" stroke-width="2"/>`+
      label(240, 116, "C", "#f5c97a", 16)+
      [[180,60,'H'],[300,60,'H'],[180,160,'H'],[300,160,'H']].map(a => 
        `<line x1="240" y1="110" x2="${a[0]}" y2="${a[1]}" stroke="#6ed5e0" stroke-width="2"/>
         <circle cx="${a[0]}" cy="${a[1]}" r="16" fill="#111" stroke="#6ed5e0" stroke-width="2"/>` +
        label(a[0], a[1]+5, a[2], "#6ed5e0", 14)
      ).join('')+
      label(30, 200, "共价键 σ 键（头碰头），双键为 1σ+1π", "#b288ff", 12, "start")+
      label(30, 220, "示例：CH₄ 正四面体，键角 109°28'", "#ff9ec6", 11, "start")+
      svgClose();
  };
  GEN.chem_vsepr = () => {
    return svgOpen() + bg() +
      // 分子构型汇总
      // 直线 (CO2)
      `<g transform="translate(60,60)"><circle cx="20" cy="0" r="14" fill="#ff9ec6"/><circle cx="0" cy="0" r="16" fill="#f5c97a"/><circle cx="-20" cy="0" r="14" fill="#ff9ec6"/>` +
      `<line x1="-20" y1="0" x2="20" y2="0" stroke="#6ed5e0" stroke-width="2"/></g>`+
      label(60, 90, "直线型 CO₂", "#6ed5e0", 11)+
      // 三角锥 (NH3)
      `<g transform="translate(180,60)"><circle cx="0" cy="0" r="16" fill="#f5c97a"/>` +
      [[-20,20],[20,20],[0,-20]].map(p=>
        `<line x1="0" y1="0" x2="${p[0]}" y2="${p[1]}" stroke="#6ed5e0" stroke-width="2"/><circle cx="${p[0]}" cy="${p[1]}" r="12" fill="#8ce28c"/>`).join('')+
      `</g>`+
      label(180, 100, "三角锥 NH₃", "#8ce28c", 11)+
      // 角型 (H2O)
      `<g transform="translate(300,60)"><circle cx="0" cy="0" r="16" fill="#f5c97a"/><line x1="0" y1="0" x2="-20" y2="15" stroke="#6ed5e0" stroke-width="2"/><line x1="0" y1="0" x2="20" y2="15" stroke="#6ed5e0" stroke-width="2"/><circle cx="-20" cy="15" r="12" fill="#ff9ec6"/><circle cx="20" cy="15" r="12" fill="#ff9ec6"/></g>`+
      label(300, 100, "角型 H₂O", "#ff9ec6", 11)+
      // 正四面体 (CH4)
      `<g transform="translate(410,60)"><circle cx="0" cy="0" r="16" fill="#f5c97a"/>`+
      [[-20,-15],[20,-15],[-15,20],[15,20]].map(p=>
        `<line x1="0" y1="0" x2="${p[0]}" y2="${p[1]}" stroke="#6ed5e0" stroke-width="2"/><circle cx="${p[0]}" cy="${p[1]}" r="10" fill="#b288ff"/>`).join('')+
      `</g>`+
      label(410, 100, "正四面体 CH₄", "#b288ff", 11)+
      label(30, 200, "价层电子对数决定分子构型（VSEPR）", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.chem_crystal = () => {
    // 三维晶胞示意
    return svgOpen() + bg() +
      `<g transform="translate(200,80)">`+
      // 立方体八顶点
      [[0,0],[100,0],[100,80],[0,80],[30,-30],[130,-30],[130,50],[30,50]]
        .map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="8" fill="#f5c97a"/>`).join('')+
      // 边
      `<path d="M0,0 L100,0 L100,80 L0,80 Z" fill="none" stroke="#6ed5e0" stroke-width="1.5"/>`+
      `<path d="M30,-30 L130,-30 L130,50 L30,50 Z" fill="none" stroke="#6ed5e0" stroke-width="1.5"/>`+
      `<line x1="0" y1="0" x2="30" y2="-30" stroke="#6ed5e0" stroke-width="1.5"/>`+
      `<line x1="100" y1="0" x2="130" y2="-30" stroke="#6ed5e0" stroke-width="1.5"/>`+
      `<line x1="100" y1="80" x2="130" y2="50" stroke="#6ed5e0" stroke-width="1.5"/>`+
      `<line x1="0" y1="80" x2="30" y2="50" stroke="#6ed5e0" stroke-width="1.5"/>`+
      // 中心
      `<circle cx="65" cy="25" r="10" fill="#ff9ec6"/>`+
      `</g>`+
      label(60, 200, "晶胞分摊：顶角 1/8，棱 1/4，面 1/2，体心 1", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.chem_organic = () => {
    return svgOpen() + bg() +
      // 乙醇 → 乙醛 → 乙酸 → 乙酸乙酯 (氧化链)
      `<g transform="translate(50,80)">`+
      `<text x="0" y="0" font-size="14" fill="#6ed5e0">C₂H₅OH</text>`+
      `<text x="0" y="20" font-size="10" fill="#7a6b88">乙醇</text>`+
      `<text x="90" y="-5" font-size="14" fill="#f5c97a">→</text>`+
      `<text x="90" y="15" font-size="9" fill="#7a6b88">[O]</text>`+
      `<text x="130" y="0" font-size="14" fill="#ff9ec6">CH₃CHO</text>`+
      `<text x="130" y="20" font-size="10" fill="#7a6b88">乙醛</text>`+
      `<text x="220" y="-5" font-size="14" fill="#f5c97a">→</text>`+
      `<text x="220" y="15" font-size="9" fill="#7a6b88">[O]</text>`+
      `<text x="260" y="0" font-size="14" fill="#b288ff">CH₃COOH</text>`+
      `<text x="260" y="20" font-size="10" fill="#7a6b88">乙酸</text>`+
      `<text x="360" y="-5" font-size="14" fill="#f5c97a">↓</text>`+
      `<text x="380" y="0" font-size="9" fill="#7a6b88">+醇</text>`+
      `</g>`+
      // 官能团表
      label(30, 180, "官能团：-OH醇 / -CHO醛 / -COOH羧酸 / -COO-酯 / -NH₂ 胺", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.chem_periodic = () => {
    // 元素周期表迷你示意
    return svgOpen() + bg() +
      // 一二三周期方块阵列
      `<g transform="translate(30,20)">`+
      // 第1周期
      `<rect x="0" y="0" width="24" height="24" fill="rgba(245,201,122,0.3)" stroke="#f5c97a"/><text x="12" y="16" font-size="10" text-anchor="middle" fill="#f5c97a">H</text>`+
      `<rect x="336" y="0" width="24" height="24" fill="rgba(178,136,255,0.3)" stroke="#b288ff"/><text x="348" y="16" font-size="10" text-anchor="middle" fill="#b288ff">He</text>`+
      // 第2周期
      Array(8).fill(0).map((_,i) => {
        const els = ['Li','Be','B','C','N','O','F','Ne'];
        const x = i < 2 ? i * 24 : (i + 8) * 24;
        return `<rect x="${x}" y="30" width="24" height="24" fill="rgba(110,213,224,0.2)" stroke="#6ed5e0"/>
                <text x="${x+12}" y="46" font-size="10" text-anchor="middle" fill="#6ed5e0">${els[i]}</text>`;
      }).join('')+
      // 第3周期
      Array(8).fill(0).map((_,i) => {
        const els = ['Na','Mg','Al','Si','P','S','Cl','Ar'];
        const x = i < 2 ? i * 24 : (i + 8) * 24;
        return `<rect x="${x}" y="60" width="24" height="24" fill="rgba(255,158,198,0.2)" stroke="#ff9ec6"/>
                <text x="${x+12}" y="76" font-size="9" text-anchor="middle" fill="#ff9ec6">${els[i]}</text>`;
      }).join('')+
      `</g>`+
      // 箭头
      `<line x1="30" y1="130" x2="420" y2="130" stroke="#f5c97a" stroke-width="1.5" marker-end="url(#periArr)"/>`+
      `<defs><marker id="periArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="#f5c97a"/></marker></defs>`+
      label(30, 145, "同周期从左到右：金属性↓非金属性↑原子半径↓", "#b288ff", 12, "start")+
      label(30, 200, "同主族从上到下：金属性↑非金属性↓原子半径↑", "#b288ff", 12, "start")+
      svgClose();
  };

  // ============ 地理 ============
  GEN.geo_earth = () => {
    return svgOpen() + bg() +
      // 地球
      `<circle cx="240" cy="110" r="80" fill="rgba(110,213,224,0.15)" stroke="#6ed5e0" stroke-width="2"/>`+
      // 经线
      [-60,-30,0,30,60].map(a =>
        `<ellipse cx="240" cy="110" rx="${Math.abs(80*Math.sin(a*Math.PI/180))}" ry="80" stroke="#8ce28c" fill="none" stroke-dasharray="2,2"/>`).join('')+
      // 纬线
      [23.5,-23.5,66.5,-66.5,0].map(lat => {
        const y = 110 - 80 * Math.sin(lat*Math.PI/180);
        const rx = 80 * Math.cos(lat*Math.PI/180);
        return `<line x1="${240-rx}" y1="${y}" x2="${240+rx}" y2="${y}" stroke="#ff9ec6" stroke-dasharray="3,2"/>`;
      }).join('')+
      // 自转箭头
      `<path d="M240,25 A82,82 0 0 1 250,26" stroke="#f5c97a" stroke-width="2" fill="none" marker-end="url(#gArr)"/>`+
      `<defs><marker id="gArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="#f5c97a"/></marker></defs>`+
      label(240, 20, "自转(自西向东)", "#f5c97a", 11)+
      label(120, 110, "赤道", "#ff9ec6", 10, "end")+
      label(120, 78, "北回归线", "#ff9ec6", 10, "end")+
      label(50, 210, "经度差 15° = 时差 1 小时 (东早西晚)", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_solar = () => {
    // 太阳直射点回归运动
    return svgOpen() + bg() +
      `<line x1="40" y1="110" x2="440" y2="110" stroke="#ff9ec6" stroke-dasharray="3,2"/>`+
      label(35, 115, "赤", "#ff9ec6", 10, "end")+
      `<line x1="40" y1="50" x2="440" y2="50" stroke="#f5c97a" stroke-dasharray="3,2"/>`+
      label(35, 55, "北回归线", "#f5c97a", 10, "end")+
      `<line x1="40" y1="170" x2="440" y2="170" stroke="#6ed5e0" stroke-dasharray="3,2"/>`+
      label(35, 175, "南回归线", "#6ed5e0", 10, "end")+
      // 太阳直射点轨迹（正弦）
      `<path d="M40,110 Q140,50 240,110 T440,110" fill="none" stroke="#ff4757" stroke-width="2.5"/>`+
      `<circle cx="140" cy="50" r="5" fill="#ff4757"/>`+
      label(140, 40, "夏至6/22", "#ff4757", 10)+
      `<circle cx="340" cy="170" r="5" fill="#6ed5e0"/>`+
      label(340, 190, "冬至12/22", "#6ed5e0", 10)+
      `<circle cx="40" cy="110" r="4" fill="#8ce28c"/>`+
      label(40, 100, "春分", "#8ce28c", 10)+
      `<circle cx="240" cy="110" r="4" fill="#f5c97a"/>`+
      label(240, 100, "秋分", "#f5c97a", 10)+
      label(60, 210, "太阳直射点在南北回归线间回归运动", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_climate = () => {
    // 气温降水柱状+折线
    return svgOpen() + bg() +
      `<line x1="50" y1="170" x2="440" y2="170" stroke="#666"/>`+
      `<line x1="50" y1="30" x2="50" y2="170" stroke="#666"/>`+
      Array(12).fill(0).map((_,i)=>{
        const x = 60 + i * 30;
        const h = 10 + 90 * Math.sin((i+1)/12 * Math.PI); // 夏高冬低
        return `<rect x="${x}" y="${170-h}" width="20" height="${h}" fill="rgba(110,213,224,0.5)"/>`;
      }).join('')+
      // 折线（气温）
      `<polyline fill="none" stroke="#ff4757" stroke-width="2.5" points="` +
      Array(12).fill(0).map((_,i)=>{
        const x = 70 + i * 30;
        const y = 130 - 60 * Math.sin((i+1)/12 * Math.PI); // 夏高冬低
        return `${x},${y}`;
      }).join(' ') + `"/>`+
      Array(12).fill(0).map((_,i)=>{
        const x = 70 + i * 30;
        return label(x, 185, i+1, "#7a6b88", 9);
      }).join('')+
      label(30, 40, "℃/mm", "#f5c97a", 10, "start")+
      label(50, 210, "气温(红折线) + 降水(蓝柱) — 用于判读气候类型", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_current = () => {
    return svgOpen() + bg() +
      // 大陆边界
      `<path d="M100,30 Q120,90 100,180" stroke="#c9a14d" stroke-width="2" fill="rgba(201,161,77,0.15)"/>`+
      `<path d="M380,30 Q360,90 380,180" stroke="#c9a14d" stroke-width="2" fill="rgba(201,161,77,0.15)"/>`+
      // 环流箭头（北半球中低纬顺时针）
      `<path d="M130,150 Q240,160 350,150" stroke="#ff4757" stroke-width="2.5" fill="none" marker-end="url(#curArr)"/>`+
      `<path d="M350,150 Q360,110 350,70" stroke="#ff4757" stroke-width="2.5" fill="none" marker-end="url(#curArr)"/>`+
      `<path d="M350,70 Q240,50 130,70" stroke="#6ed5e0" stroke-width="2.5" fill="none" marker-end="url(#curArr)"/>`+
      `<path d="M130,70 Q120,110 130,150" stroke="#6ed5e0" stroke-width="2.5" fill="none" marker-end="url(#curArr)"/>`+
      `<defs><marker id="curArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="currentColor"/></marker></defs>`+
      label(60, 110, "大陆", "#c9a14d", 10, "start")+
      label(410, 110, "大陆", "#c9a14d", 10, "start")+
      label(240, 170, "低纬赤道暖流", "#ff4757", 11)+
      label(240, 45, "高纬西风漂流", "#6ed5e0", 11)+
      label(60, 210, "北半球中低纬顺时针，中高纬逆时针；南半球相反", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_water = () => {
    return svgOpen() + bg() +
      // 海洋
      `<rect x="0" y="150" width="480" height="70" fill="rgba(110,213,224,0.2)" stroke="#6ed5e0"/>`+
      label(50, 195, "海洋", "#6ed5e0", 12, "start")+
      // 陆地
      `<path d="M200,150 Q240,80 300,80 Q380,80 420,150 L200,150 Z" fill="rgba(140,226,140,0.25)" stroke="#8ce28c"/>`+
      // 蒸发
      `<path d="M60,150 Q60,80 100,50" stroke="#f5c97a" stroke-width="2" fill="none" stroke-dasharray="3,2" marker-end="url(#wArr)"/>`+
      label(100, 45, "蒸发", "#f5c97a", 11)+
      // 水汽输送
      `<path d="M100,50 Q200,20 300,50" stroke="#ff9ec6" stroke-width="2" fill="none" marker-end="url(#wArr)"/>`+
      label(200, 15, "水汽输送", "#ff9ec6", 11)+
      // 降水
      `<line x1="280" y1="60" x2="280" y2="90" stroke="#6ed5e0" stroke-width="2" marker-end="url(#wArr)"/>`+
      `<line x1="320" y1="55" x2="320" y2="85" stroke="#6ed5e0" stroke-width="2" marker-end="url(#wArr)"/>`+
      label(300, 50, "降水", "#6ed5e0", 11)+
      // 径流回海
      `<path d="M330,110 Q400,140 450,150" stroke="#b288ff" stroke-width="2" fill="none" marker-end="url(#wArr)"/>`+
      label(420, 130, "径流", "#b288ff", 11)+
      `<defs><marker id="wArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="currentColor"/></marker></defs>`+
      label(50, 210, "海陆间水循环 = 淡水更新的核心机制", "#f5c97a", 12, "start")+
      svgClose();
  };
  GEN.geo_contour = () => {
    return svgOpen() + bg() +
      // 等高线
      [30,50,70,90,110].map((r,i) =>
        `<ellipse cx="240" cy="110" rx="${r*2}" ry="${r}" fill="none" stroke="#8ce28c" stroke-width="${i===2?2:1}"/>`
      ).join('')+
      label(240, 110, "山顶 460m", "#f5c97a", 11)+
      label(240, 150, "400m", "#8ce28c", 10)+
      label(240, 180, "300m", "#8ce28c", 10)+
      // 山谷凸向高处
      `<path d="M100,140 Q150,155 200,140" stroke="#6ed5e0" stroke-width="2.5" fill="none"/>`+
      label(150, 175, "山谷（凸向高处）", "#6ed5e0", 10)+
      label(30, 210, "等高线密→坡陡；凸向低→山脊；凸向高→山谷", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_landform = () => {
    return svgOpen() + bg() +
      // 上：河流地貌
      `<path d="M30,110 Q150,100 240,120 Q330,140 450,110" stroke="#6ed5e0" stroke-width="4" fill="none"/>`+
      // 三角洲
      `<path d="M420,110 L470,90 L470,130 Z" fill="rgba(245,201,122,0.3)" stroke="#f5c97a"/>`+
      label(455, 105, "三角洲", "#f5c97a", 10)+
      // 冲积扇
      `<path d="M100,60 L60,90 L100,130 Z" fill="rgba(255,158,198,0.3)" stroke="#ff9ec6"/>`+
      label(45, 100, "冲积扇", "#ff9ec6", 10, "start")+
      // V形谷
      `<path d="M220,110 L200,180 L280,180 L260,110" fill="rgba(140,226,140,0.2)" stroke="#8ce28c"/>`+
      label(240, 175, "V形谷", "#8ce28c", 10)+
      label(30, 210, "流水侵蚀→V谷 / 沉积→冲积扇/三角洲", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_plate = () => {
    return svgOpen() + bg() +
      // 两板块碰撞
      `<path d="M30,110 L200,110 L200,180 L30,180 Z" fill="rgba(140,226,140,0.2)" stroke="#8ce28c" stroke-width="2"/>`+
      `<path d="M280,110 L450,110 L450,180 L280,180 Z" fill="rgba(255,158,198,0.2)" stroke="#ff9ec6" stroke-width="2"/>`+
      // 碰撞山脉
      `<path d="M200,110 L240,50 L280,110 Z" fill="rgba(245,201,122,0.4)" stroke="#f5c97a" stroke-width="2"/>`+
      label(240, 45, "喜马拉雅山", "#f5c97a", 11)+
      // 箭头
      `<line x1="120" y1="145" x2="180" y2="145" stroke="#8ce28c" stroke-width="3" marker-end="url(#plArr)"/>`+
      `<line x1="360" y1="145" x2="300" y2="145" stroke="#ff9ec6" stroke-width="3" marker-end="url(#plArr)"/>`+
      `<defs><marker id="plArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="currentColor"/></marker></defs>`+
      label(100, 200, "亚欧板块", "#8ce28c", 11, "start")+
      label(380, 200, "印度洋板块", "#ff9ec6", 11)+
      label(30, 30, "板块消亡边界：碰撞→造山带", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_soil = () => {
    return svgOpen() + bg() +
      // 土壤剖面
      [
        {y:30, h:20, c:'#3a5a30', name:'O 有机质层'},
        {y:50, h:30, c:'#2a1810', name:'A 腐殖质层（最肥）'},
        {y:80, h:30, c:'#8a6f4a', name:'E 淋溶层'},
        {y:110,h:35, c:'#a88054', name:'B 淀积层'},
        {y:145,h:25, c:'#c9a14d', name:'C 母质层'},
        {y:170,h:20, c:'#666',    name:'R 母岩层'}
      ].map(l => `<rect x="80" y="${l.y}" width="140" height="${l.h}" fill="${l.c}" opacity="0.9" stroke="#f5c97a" stroke-width="0.5"/>`+
                  label(230, l.y+l.h/2+4, l.name, "#f5c97a", 10, "start")).join('')+
      label(30, 210, "土壤剖面 6 层 — 腐殖质层是肥力关键", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_urban = () => {
    return svgOpen() + bg() +
      // 城市化S曲线
      `<line x1="50" y1="180" x2="440" y2="180" stroke="#666"/>`+
      `<line x1="50" y1="30" x2="50" y2="180" stroke="#666"/>`+
      // S型曲线
      `<path d="M50,180 C130,170 180,90 240,90 C310,90 360,50 440,45" stroke="#f5c97a" stroke-width="3" fill="none"/>`+
      // 阶段标记
      `<line x1="50" y1="130" x2="140" y2="130" stroke="#6ed5e0" stroke-dasharray="3,2"/>`+
      label(120, 168, "初期(<30%)", "#6ed5e0", 10)+
      `<line x1="140" y1="30" x2="140" y2="180" stroke="#6ed5e0" stroke-dasharray="3,2"/>`+
      label(220, 90, "加速期(30-70%)", "#f5c97a", 11)+
      `<line x1="340" y1="30" x2="340" y2="180" stroke="#8ce28c" stroke-dasharray="3,2"/>`+
      label(390, 45, "后期(>70%)郊区化", "#8ce28c", 10)+
      label(30, 40, "城市化率%", "#f5c97a", 10, "start")+
      label(400, 195, "时间", "#7a6b88", 10)+
      label(30, 210, "城市化 S 型曲线：初期慢→加速→后期出现逆城市化", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.geo_env = () => {
    return svgOpen() + bg() +
      // 温室效应示意
      `<circle cx="90" cy="60" r="24" fill="#f5c97a"/>`+
      label(90, 65, "☀", "#fff", 26)+
      // 太阳辐射向下
      [[100,80,150,110],[110,85,180,120],[80,90,120,130]].map(l=>
        `<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}" stroke="#ff9ec6" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#sArr)"/>`).join('')+
      // 大气层
      `<path d="M40,150 Q240,120 440,150" stroke="#6ed5e0" stroke-width="2" fill="rgba(110,213,224,0.1)" stroke-dasharray="3,3"/>`+
      label(240, 135, "大气层（CO₂、CH₄等温室气体）", "#6ed5e0", 11)+
      // 地面
      `<rect x="0" y="170" width="480" height="50" fill="rgba(140,226,140,0.2)" stroke="#8ce28c"/>`+
      // 地面辐射向上（但被大气层截留）
      `<line x1="240" y1="180" x2="270" y2="155" stroke="#ff4757" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#sArr)"/>`+
      `<line x1="270" y1="155" x2="290" y2="180" stroke="#ff4757" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#sArr)"/>`+
      `<defs><marker id="sArr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="currentColor"/></marker></defs>`+
      label(30, 210, "温室效应：地面辐射被大气吸收再返回→保温", "#f5c97a", 11, "start")+
      svgClose();
  };

  // ============ 数学 (v4.0 大幅扩充) ============
  // v4.0 新增: math_vector 向量可视化（画出坐标+两条向量+夹角）
  GEN.math_vector = (q, text, seed) => {
    // 从题目里提取向量 - 如 (1,2), (λ,1) 等
    const t = text || '';
    const vecMatch = t.match(/\(([-\d.λ]+)\s*,\s*([-\d.λ]+)(?:\s*,\s*([-\d.λ]+))?\)/g) || [];
    // 默认向量
    let a = { x: 3, y: 2 };
    let b = { x: 1, y: 3 };
    if (vecMatch.length >= 1) {
      const m1 = vecMatch[0].match(/\(([-\d.λ]+)\s*,\s*([-\d.λ]+)/);
      if (m1) { const vx = parseFloat(m1[1]); const vy = parseFloat(m1[2]); if (!isNaN(vx)) a.x = vx || 2; if (!isNaN(vy)) a.y = vy || 2; }
    }
    if (vecMatch.length >= 2) {
      const m2 = vecMatch[1].match(/\(([-\d.λ]+)\s*,\s*([-\d.λ]+)/);
      if (m2) { const vx = parseFloat(m2[1]); const vy = parseFloat(m2[2]); if (!isNaN(vx)) b.x = vx || 1; if (!isNaN(vy)) b.y = vy || 3; }
    }
    // 归一化到 SVG 坐标（480x220，中心 240,110，单位 30px）
    const cx = 240, cy = 130, unit = 30;
    const A = { x: cx + a.x * unit, y: cy - a.y * unit };
    const B = { x: cx + b.x * unit, y: cy - b.y * unit };
    // 向量和
    const C = { x: cx + (a.x + b.x) * unit, y: cy - (a.y + b.y) * unit };
    // 计算数量积和夹角
    const dot = (a.x*b.x + a.y*b.y);
    const magA = Math.sqrt(a.x*a.x + a.y*a.y);
    const magB = Math.sqrt(b.x*b.x + b.y*b.y);
    const cos = (magA*magB > 0.001) ? (dot/(magA*magB)) : 0;
    const ang = Math.acos(Math.max(-1, Math.min(1, cos))) * 180 / Math.PI;
    return svgOpen() + bg() +
      // 网格
      Array.from({length:11},(_,i)=>`<line x1="${cx + (i-5)*unit}" y1="20" x2="${cx + (i-5)*unit}" y2="200" stroke="rgba(178,136,255,0.10)" stroke-width="0.5"/>`).join('') +
      Array.from({length:6},(_,i)=>`<line x1="60" y1="${20 + i*36}" x2="420" y2="${20 + i*36}" stroke="rgba(178,136,255,0.10)" stroke-width="0.5"/>`).join('') +
      // 坐标轴
      `<line x1="60" y1="${cy}" x2="420" y2="${cy}" stroke="#666" stroke-width="1"/>` +
      `<line x1="${cx}" y1="20" x2="${cx}" y2="200" stroke="#666" stroke-width="1"/>` +
      label(420, cy+14, "x", "#888", 11) + label(cx+8, 24, "y", "#888", 11) +
      // 向量箭头定义
      `<defs>` +
        `<marker id="vArrA" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="#f5c97a"/></marker>` +
        `<marker id="vArrB" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="#6ed5e0"/></marker>` +
        `<marker id="vArrC" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="#ff9ec6"/></marker>` +
      `</defs>` +
      // 向量 a
      `<line x1="${cx}" y1="${cy}" x2="${A.x}" y2="${A.y}" stroke="#f5c97a" stroke-width="2.5" marker-end="url(#vArrA)"/>` +
      label(A.x+8, A.y-4, `a=(${a.x},${a.y})`, "#f5c97a", 11) +
      // 向量 b
      `<line x1="${cx}" y1="${cy}" x2="${B.x}" y2="${B.y}" stroke="#6ed5e0" stroke-width="2.5" marker-end="url(#vArrB)"/>` +
      label(B.x+8, B.y-4, `b=(${b.x},${b.y})`, "#6ed5e0", 11) +
      // 向量和 a+b（虚线）
      `<line x1="${cx}" y1="${cy}" x2="${C.x}" y2="${C.y}" stroke="#ff9ec6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#vArrC)"/>` +
      label(C.x+8, C.y+10, `a+b`, "#ff9ec6", 11) +
      // 平行四边形辅助边
      `<line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="#6ed5e0" stroke-width="1" stroke-dasharray="2,3" opacity="0.5"/>` +
      `<line x1="${B.x}" y1="${B.y}" x2="${C.x}" y2="${C.y}" stroke="#f5c97a" stroke-width="1" stroke-dasharray="2,3" opacity="0.5"/>` +
      // 原点
      `<circle cx="${cx}" cy="${cy}" r="3" fill="#f5c97a"/>` +
      label(cx-14, cy+16, "O", "#f5c97a", 12) +
      // 信息面板
      `<rect x="20" y="20" width="110" height="52" fill="rgba(0,0,0,0.5)" stroke="rgba(178,136,255,0.4)" rx="4"/>` +
      label(30, 36, `|a| = ${magA.toFixed(2)}`, "#f5c97a", 10, "start") +
      label(30, 50, `|b| = ${magB.toFixed(2)}`, "#6ed5e0", 10, "start") +
      label(30, 64, `a·b = ${dot.toFixed(2)}`, "#ff9ec6", 10, "start") +
      label(240, 210, `平行四边形法则 · 夹角约 ${ang.toFixed(0)}° · 数量积 a·b=|a||b|cosθ`, "#b288ff", 11) +
      svgClose();
  };

  GEN.math_prob = (q, text, seed) => {
    // 二项分布/正态分布 柱状图
    const s = seed || 100;
    const n = 8;
    const bars = Array.from({length:n},(_,i)=>{
      const p = 0.5;
      const c = 1;
      let coef = 1;
      for (let k=1;k<=i;k++) coef = coef * (n-k) / k;
      const val = coef * Math.pow(p,i) * Math.pow(1-p,n-i);
      return val;
    });
    const max = Math.max(...bars);
    return svgOpen() + bg() +
      `<line x1="60" y1="180" x2="440" y2="180" stroke="#666"/>` +
      `<line x1="60" y1="30" x2="60" y2="180" stroke="#666"/>` +
      bars.map((v,i)=>{
        const h = (v/max)*130;
        const x = 80 + i*40;
        return `<rect x="${x}" y="${180-h}" width="28" height="${h}" fill="#b288ff" opacity="0.7" stroke="#f5c97a"/>` +
               label(x+14, 195, i, "#888", 10);
      }).join('') +
      label(30, 30, "P(X=k)", "#f5c97a", 11, "start") +
      label(440, 195, "k", "#f5c97a", 11) +
      label(30, 210, "离散型分布：P(X=k) 分布图，期望 E(X)=Σk·P(X=k)", "#b288ff", 12, "start") +
      svgClose();
  };

  GEN.math_sequence = (q, text, seed) => {
    const s = seed || 100;
    // 等差 or 等比
    const isGeom = /等比|geometric/i.test(text);
    const items = isGeom ? [1,2,4,8,16,32] : [2,5,8,11,14,17];
    return svgOpen() + bg() +
      `<line x1="60" y1="180" x2="440" y2="180" stroke="#666"/>` +
      `<line x1="60" y1="30" x2="60" y2="180" stroke="#666"/>` +
      items.map((v,i)=>{
        const h = (v / items[items.length-1]) * 130;
        const x = 80 + i*55;
        return `<circle cx="${x}" cy="${180-h}" r="6" fill="#f5c97a"/>` +
               label(x, 175-h, `a${i+1}=${v}`, "#f5c97a", 10) +
               (i > 0 ? `<line x1="${80 + (i-1)*55}" y1="${180-(items[i-1]/items[items.length-1])*130}" x2="${x}" y2="${180-h}" stroke="#6ed5e0" stroke-width="1.5"/>` : '');
      }).join('') +
      label(30, 30, "aₙ", "#f5c97a", 11, "start") +
      label(440, 195, "n", "#f5c97a", 11) +
      label(30, 210, isGeom ? "等比数列：aₙ=a₁·q^(n-1)，公比 q=2" : "等差数列：aₙ=a₁+(n-1)d，公差 d=3", "#b288ff", 12, "start") +
      svgClose();
  };

  GEN.math_derivative = (q, text, seed) => {
    // 函数 + 切线
    return svgOpen() + bg() +
      `<line x1="60" y1="120" x2="440" y2="120" stroke="#666"/>` +
      `<line x1="240" y1="30" x2="240" y2="210" stroke="#666"/>` +
      // 曲线 y=x³/3 - 2x
      (function(){
        let d = 'M ';
        for (let i=-4; i<=4; i+=0.2) {
          const x = 240 + i*40;
          const yv = (i*i*i)/3 - 2*i;
          const y = 120 - yv*25;
          d += (i===-4?'':' L') + x.toFixed(1) + ',' + y.toFixed(1);
        }
        return `<path d="${d}" stroke="#f5c97a" stroke-width="2" fill="none"/>`;
      })() +
      // 切线在 x=1 处（f'(1) = 1 - 2 = -1）
      `<line x1="280" y1="90" x2="360" y2="170" stroke="#ff9ec6" stroke-width="1.8" stroke-dasharray="5,3"/>` +
      `<circle cx="280" cy="120" r="4" fill="#6ed5e0"/>` +
      label(290, 118, "P(1, -5/3)", "#6ed5e0", 11, "start") +
      label(310, 155, "切线 k=f'(1)", "#ff9ec6", 10) +
      // 极值点标注
      `<circle cx="195" cy="84" r="4" fill="#8ce28c"/>` +
      label(160, 78, "极大值", "#8ce28c", 10) +
      `<circle cx="285" cy="156" r="4" fill="#e25b5b"/>` +
      label(310, 172, "极小值", "#e25b5b", 10) +
      label(30, 210, "导数=切线斜率；f'(x)=0 处取极值", "#b288ff", 12, "start") +
      svgClose();
  };

  GEN.math_solid = (q, text, seed) => {
    // 立体几何 - 长方体
    return svgOpen() + bg() +
      // 长方体透视
      `<polygon points="140,180 320,180 380,140 200,140" fill="rgba(110,213,224,0.2)" stroke="#6ed5e0" stroke-width="1.5"/>` +
      `<polygon points="140,80 320,80 380,40 200,40" fill="rgba(178,136,255,0.15)" stroke="#b288ff" stroke-width="1.5"/>` +
      `<polygon points="140,80 140,180 320,180 320,80" fill="rgba(245,201,122,0.15)" stroke="#f5c97a" stroke-width="2"/>` +
      `<line x1="140" y1="80" x2="200" y2="40" stroke="#b288ff" stroke-width="1.5" stroke-dasharray="3,2"/>` +
      `<line x1="320" y1="80" x2="380" y2="40" stroke="#b288ff" stroke-width="1.5"/>` +
      `<line x1="320" y1="180" x2="380" y2="140" stroke="#b288ff" stroke-width="1.5"/>` +
      `<line x1="140" y1="180" x2="200" y2="140" stroke="#b288ff" stroke-width="1.5" stroke-dasharray="3,2"/>` +
      `<line x1="200" y1="40" x2="200" y2="140" stroke="#b288ff" stroke-width="1.5" stroke-dasharray="3,2"/>` +
      `<line x1="380" y1="40" x2="380" y2="140" stroke="#b288ff" stroke-width="1.5"/>` +
      // 空间向量
      `<defs><marker id="sldArr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="#ff9ec6"/></marker></defs>` +
      `<line x1="140" y1="180" x2="340" y2="60" stroke="#ff9ec6" stroke-width="2" marker-end="url(#sldArr)"/>` +
      label(240, 116, "体对角线", "#ff9ec6", 11) +
      label(232, 200, "a", "#6ed5e0", 12) +
      label(133, 130, "b", "#6ed5e0", 12) +
      label(170, 65, "c", "#b288ff", 12) +
      label(30, 210, "长方体：体对角线 d=√(a²+b²+c²)；棱、面、体的空间关系", "#b288ff", 11, "start") +
      svgClose();
  };

  GEN.math_conic = (q, text, seed) => {
    const isEll = /椭圆/.test(text);
    const isHyp = /双曲线/.test(text);
    return svgOpen() + bg() +
      `<line x1="40" y1="110" x2="440" y2="110" stroke="#666"/>` +
      `<line x1="240" y1="20" x2="240" y2="200" stroke="#666"/>` +
      (isEll ? 
        `<ellipse cx="240" cy="110" rx="120" ry="70" fill="none" stroke="#f5c97a" stroke-width="2.5"/>` +
        `<circle cx="144" cy="110" r="4" fill="#ff9ec6"/>` + label(140, 130, "F₁", "#ff9ec6", 12) +
        `<circle cx="336" cy="110" r="4" fill="#ff9ec6"/>` + label(340, 130, "F₂", "#ff9ec6", 12) +
        label(30, 210, "椭圆：|PF₁|+|PF₂|=2a (a>c)，离心率 e=c/a", "#b288ff", 12, "start")
        :
      isHyp ?
        (function(){
          let d1 = 'M ', d2 = 'M ';
          for (let t=-1.2; t<=1.2; t+=0.05) {
            const x = 60 * Math.cosh(t), y = 40 * Math.sinh(t);
            d1 += (t===-1.2?'':'L') + (240-x).toFixed(1)+','+(110-y).toFixed(1) + ' ';
            d2 += (t===-1.2?'':'L') + (240+x).toFixed(1)+','+(110-y).toFixed(1) + ' ';
          }
          return `<path d="${d1}" stroke="#f5c97a" stroke-width="2.5" fill="none"/><path d="${d2}" stroke="#f5c97a" stroke-width="2.5" fill="none"/>`;
        })() +
        `<circle cx="140" cy="110" r="4" fill="#ff9ec6"/>` + label(126, 130, "F₁", "#ff9ec6", 12) +
        `<circle cx="340" cy="110" r="4" fill="#ff9ec6"/>` + label(340, 130, "F₂", "#ff9ec6", 12) +
        label(30, 210, "双曲线：||PF₁|-|PF₂||=2a (a<c)，离心率 e=c/a>1", "#b288ff", 12, "start")
        :
        // 抛物线
        `<path d="M100,180 Q240,20 380,180" stroke="#f5c97a" stroke-width="2.5" fill="none"/>` +
        `<circle cx="240" cy="70" r="4" fill="#ff9ec6"/>` + label(255, 68, "F 焦点", "#ff9ec6", 11, "start") +
        `<line x1="60" y1="150" x2="420" y2="150" stroke="#6ed5e0" stroke-width="1" stroke-dasharray="4,3"/>` +
        label(430, 148, "准线", "#6ed5e0", 11, "end") +
        label(30, 210, "抛物线：|PF|=|PL|（到焦点距离=到准线距离）", "#b288ff", 12, "start")
      ) +
      svgClose();
  };

  GEN.math_triangle = (q, text, seed) => {
    return svgOpen() + bg() +
      `<polygon points="240,40 130,180 350,180" fill="rgba(110,213,224,0.10)" stroke="#6ed5e0" stroke-width="2"/>` +
      label(240, 30, "A", "#f5c97a", 13) +
      label(120, 190, "B", "#f5c97a", 13) +
      label(360, 190, "C", "#f5c97a", 13) +
      label(185, 118, "c", "#ff9ec6", 12) +
      label(300, 118, "b", "#ff9ec6", 12) +
      label(240, 195, "a", "#ff9ec6", 12) +
      // 角
      `<path d="M 240,60 A 20 20 0 0 1 260,72" fill="none" stroke="#8ce28c" stroke-width="1.5"/>` +
      label(258, 68, "A", "#8ce28c", 10) +
      label(30, 210, "正弦定理 a/sinA=b/sinB=c/sinC=2R；余弦定理 a²=b²+c²-2bc·cosA", "#b288ff", 11, "start") +
      svgClose();
  };

  GEN.math_circle = (q, text, seed) => {
    return svgOpen() + bg() +
      `<circle cx="240" cy="110" r="80" fill="rgba(178,136,255,0.10)" stroke="#f5c97a" stroke-width="2"/>` +
      `<circle cx="240" cy="110" r="3" fill="#f5c97a"/>` +
      label(248, 108, "O", "#f5c97a", 12, "start") +
      `<line x1="240" y1="110" x2="320" y2="110" stroke="#6ed5e0" stroke-width="2"/>` +
      label(285, 105, "r", "#6ed5e0", 12) +
      `<line x1="180" y1="70" x2="300" y2="160" stroke="#ff9ec6" stroke-width="1.5" stroke-dasharray="4,2"/>` +
      label(230, 220, "弦", "#ff9ec6", 11) +
      `<circle cx="180" cy="70" r="3" fill="#ff9ec6"/>` +
      `<circle cx="300" cy="160" r="3" fill="#ff9ec6"/>` +
      label(30, 210, "圆的方程：(x-a)²+(y-b)²=r²；弦长=2√(r²-d²)（d为圆心距）", "#b288ff", 11, "start") +
      svgClose();
  };

  GEN.math_line = (q, text, seed) => {
    return svgOpen() + bg() +
      `<line x1="60" y1="110" x2="440" y2="110" stroke="#666"/>` +
      `<line x1="240" y1="30" x2="240" y2="200" stroke="#666"/>` +
      `<line x1="80" y1="200" x2="400" y2="30" stroke="#f5c97a" stroke-width="2.5"/>` +
      label(390, 40, "y=kx+b", "#f5c97a", 12, "end") +
      `<line x1="80" y1="40" x2="400" y2="180" stroke="#6ed5e0" stroke-width="2.5"/>` +
      label(390, 190, "y=-k'x+b'", "#6ed5e0", 12, "end") +
      // 交点
      `<circle cx="240" cy="110" r="5" fill="#ff9ec6"/>` +
      label(250, 105, "交点", "#ff9ec6", 11, "start") +
      label(30, 210, "直线方程：点斜式/斜截式/两点式；斜率 k=(y₂-y₁)/(x₂-x₁)", "#b288ff", 11, "start") +
      svgClose();
  };

  GEN.math_axis = () => {
    return svgOpen() + bg() +
      // 坐标系
      `<line x1="60" y1="110" x2="440" y2="110" stroke="#666" marker-end="url(#mArr)"/>`+
      `<line x1="240" y1="30" x2="240" y2="200" stroke="#666" marker-end="url(#mArr)"/>`+
      `<defs><marker id="mArr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="#666"/></marker></defs>`+
      label(438, 130, "x", "#f5c97a", 12)+
      label(255, 40, "y", "#f5c97a", 12, "start")+
      // 抛物线
      `<path d="M100,180 Q240,20 380,180" stroke="#6ed5e0" stroke-width="2.5" fill="none"/>`+
      label(300, 40, "y=x²", "#6ed5e0", 12, "start")+
      // 直线
      `<line x1="80" y1="200" x2="400" y2="40" stroke="#ff9ec6" stroke-width="2"/>`+
      label(400, 30, "y=kx+b", "#ff9ec6", 12, "end")+
      label(30, 200, "函数图像 → 观察定义域/值域/单调性/极值", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.math_trig = () => {
    return svgOpen() + bg() +
      `<line x1="30" y1="110" x2="450" y2="110" stroke="#666"/>`+
      `<path d="M30,110 Q60,30 90,110 T150,110 T210,110 T270,110 T330,110 T390,110 T450,110" stroke="#f5c97a" stroke-width="2.5" fill="none"/>`+
      `<path d="M30,110 Q30,110 60,60 T120,60 T180,110 T240,160 T300,160 T360,110 T420,60 T450,60" stroke="#6ed5e0" stroke-width="2" fill="none" opacity="0.7"/>`+
      label(60, 25, "sin x", "#f5c97a", 12)+
      label(60, 55, "cos x", "#6ed5e0", 12)+
      label(30, 210, "周期函数：T=2π/ω，振幅 A，相位 φ", "#b288ff", 12, "start")+
      svgClose();
  };
  GEN.math_geo = () => {
    return svgOpen() + bg() +
      `<circle cx="240" cy="110" r="70" fill="none" stroke="#f5c97a" stroke-width="2"/>`+
      `<polygon points="240,40 190,150 290,150" fill="none" stroke="#6ed5e0" stroke-width="2"/>`+
      // 圆心
      `<circle cx="240" cy="110" r="3" fill="#f5c97a"/>`+
      label(250, 108, "O", "#f5c97a", 12, "start")+
      label(240, 30, "圆内接三角形", "#6ed5e0", 12)+
      label(30, 210, "几何：半径/弦长/圆周角/内接多边形", "#b288ff", 12, "start")+
      svgClose();
  };

  // ============ 语文/英语 ============
  GEN.timeline = () => {
    return svgOpen() + bg() +
      `<line x1="30" y1="110" x2="450" y2="110" stroke="#f5c97a" stroke-width="3"/>`+
      [80,180,280,380].map((x,i) => {
        const t = ['先秦','汉唐','宋元','明清'][i];
        return `<circle cx="${x}" cy="110" r="8" fill="#ff9ec6"/>` +
               label(x, 130, t, "#ff9ec6", 12);
      }).join('')+
      label(50, 210, "时间轴：按年代/世纪梳理知识点", "#b288ff", 12, "start")+
      svgClose();
  };
  // 语文：古诗对仗 / 平仄
  GEN.chi_poem = () => {
    return svgOpen() + bg() +
      // 五言句示意图
      [0,1,2,3,4].map((i)=>{
        const y = 60 + i*24;
        const cs = ['仄','平','仄','平','仄'];
        return `<circle cx="140" cy="${y}" r="9" fill="${i%2===0?'#b288ff':'#f5c97a'}" opacity="0.7"/>` +
               label(140, y+3, cs[i], '#fff', 10);
      }).join('')+
      [0,1,2,3,4].map((i)=>{
        const y = 60 + i*24;
        const cs = ['平','仄','平','仄','平'];
        return `<circle cx="340" cy="${y}" r="9" fill="${i%2===0?'#f5c97a':'#b288ff'}" opacity="0.7"/>` +
               label(340, y+3, cs[i], '#fff', 10);
      }).join('')+
      label(140, 50, '上句', '#b288ff', 12)+
      label(340, 50, '下句', '#b288ff', 12)+
      label(240, 200, '─ 平仄相对 · 韵律和谐 ─', '#f5c97a', 12)+
      svgClose();
  };
  // 语文：文言句式分析
  GEN.chi_grammar = () => {
    return svgOpen() + bg() +
      `<rect x="40" y="60" width="90" height="36" rx="6" fill="rgba(178,136,255,0.2)" stroke="#b288ff"/>`+
      label(85, 82, '定语', '#b288ff', 12)+
      `<rect x="150" y="60" width="90" height="36" rx="6" fill="rgba(245,201,122,0.2)" stroke="#f5c97a"/>`+
      label(195, 82, '主语', '#f5c97a', 12)+
      `<rect x="260" y="60" width="90" height="36" rx="6" fill="rgba(226,91,91,0.2)" stroke="#e25b5b"/>`+
      label(305, 82, '谓语', '#e25b5b', 12)+
      `<rect x="370" y="60" width="70" height="36" rx="6" fill="rgba(140,226,140,0.2)" stroke="#8ce28c"/>`+
      label(405, 82, '宾语', '#8ce28c', 12)+
      // 修饰关系箭头
      `<path d="M85,96 Q140,120 195,96" stroke="#b288ff" fill="none" stroke-width="1.5" marker-end="url(#arr2)"/>`+
      `<defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#b288ff"/></marker></defs>`+
      label(140, 130, '修饰', '#b288ff', 10)+
      label(60, 200, '句子成分分析示意图 · 定主谓宾', '#f5c97a', 12, 'start')+
      svgClose();
  };
  // 语文：人物形象 / 情感分析
  GEN.chi_character = () => {
    return svgOpen() + bg() +
      // 中心圆符 “人”
      `<circle cx="240" cy="110" r="40" fill="rgba(245,201,122,0.15)" stroke="#f5c97a" stroke-width="2"/>`+
      label(240, 116, '人物', '#f5c97a', 16)+
      // 四个维度：外貌、言行、心理、环境
      [[100,60,'外貌'],[380,60,'言行'],[100,160,'心理'],[380,160,'环境']].map(([x,y,t])=>{
        return `<line x1="240" y1="110" x2="${x}" y2="${y}" stroke="#6ed5e0" stroke-dasharray="3,3"/>`+
               `<rect x="${x-32}" y="${y-14}" width="64" height="28" rx="4" fill="rgba(110,213,224,0.15)" stroke="#6ed5e0"/>`+
               label(x, y+4, t, '#6ed5e0', 12);
      }).join('')+
      label(30, 210, '人物形象分析：四维度入手', '#b288ff', 12, 'start')+
      svgClose();
  };
  // 英语：时态线
  GEN.eng_tense = () => {
    return svgOpen() + bg() +
      `<line x1="30" y1="120" x2="460" y2="120" stroke="#f5c97a" stroke-width="3"/>`+
      `<polygon points="460,120 452,116 452,124" fill="#f5c97a"/>`+
      // 5个时间点
      [[70,'Past','过去'],[170,'PastNow','完成'],[240,'Now','现在'],[340,'Fut.','将来'],[430,'FutFar','远未来']].map(([x,en,zh])=>{
        return `<circle cx="${x}" cy="120" r="7" fill="#6ed5e0"/>`+
               label(x, 100, en, '#6ed5e0', 10)+
               label(x, 145, zh, '#b288ff', 11);
      }).join('')+
      label(240, 60, 'have done ← 开始于过去，影响现在', '#ff9ec6', 11)+
      `<line x1="170" y1="120" x2="240" y2="120" stroke="#ff9ec6" stroke-width="5" opacity="0.5"/>`+
      label(60, 205, '─ 英语时态时间线示意图 ─', '#f5c97a', 12, 'start')+
      svgClose();
  };
  // 英语：从句结构
  GEN.eng_clause = () => {
    return svgOpen() + bg() +
      `<rect x="40" y="70" width="180" height="40" rx="6" fill="rgba(245,201,122,0.2)" stroke="#f5c97a" stroke-width="2"/>`+
      label(130, 95, 'Main Clause 主句', '#f5c97a', 12)+
      `<rect x="260" y="70" width="180" height="40" rx="6" fill="rgba(178,136,255,0.2)" stroke="#b288ff" stroke-width="2"/>`+
      label(350, 95, 'Sub Clause 从句', '#b288ff', 12)+
      `<line x1="220" y1="90" x2="260" y2="90" stroke="#6ed5e0" stroke-dasharray="4,3" stroke-width="2"/>`+
      label(240, 80, 'that/which/who', '#6ed5e0', 10)+
      label(240, 150, '引导词 (that / which / who / when / where / because…)', '#8ce28c', 11)+
      label(60, 205, '─ 从句结构示意图 ─', '#f5c97a', 12, 'start')+
      svgClose();
  };
  // 英语：主动/被动语态
  GEN.eng_voice = () => {
    return svgOpen() + bg() +
      // 主动语态
      label(140, 40, 'Active 主动', '#f5c97a', 14)+
      `<rect x="50" y="55" width="60" height="28" rx="4" fill="rgba(245,201,122,0.2)" stroke="#f5c97a"/>`+
      label(80, 74, 'Subj', '#f5c97a', 11)+
      `<rect x="120" y="55" width="50" height="28" rx="4" fill="rgba(226,91,91,0.2)" stroke="#e25b5b"/>`+
      label(145, 74, 'V', '#e25b5b', 11)+
      `<rect x="180" y="55" width="60" height="28" rx="4" fill="rgba(140,226,140,0.2)" stroke="#8ce28c"/>`+
      label(210, 74, 'Obj', '#8ce28c', 11)+
      // 被动语态
      label(360, 40, 'Passive 被动', '#b288ff', 14)+
      `<rect x="270" y="55" width="60" height="28" rx="4" fill="rgba(140,226,140,0.2)" stroke="#8ce28c"/>`+
      label(300, 74, 'Obj', '#8ce28c', 11)+
      `<rect x="340" y="55" width="90" height="28" rx="4" fill="rgba(226,91,91,0.2)" stroke="#e25b5b"/>`+
      label(385, 74, 'be+p.p.', '#e25b5b', 11)+
      `<rect x="440" y="55" width="30" height="28" rx="4" fill="rgba(178,136,255,0.2)" stroke="#b288ff"/>`+
      label(455, 74, 'by', '#b288ff', 11)+
      // 变换箭头
      `<path d="M240,90 Q240,140 300,140" fill="none" stroke="#6ed5e0" stroke-dasharray="4,3" marker-end="url(#arr3)"/>`+
      `<defs><marker id="arr3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#6ed5e0"/></marker></defs>`+
      label(240, 165, '宾语提前作主语', '#6ed5e0', 11)+
      label(60, 205, '─ Active ↔ Passive 变换 ─', '#f5c97a', 12, 'start')+
      svgClose();
  };
  GEN.struct_tree = () => {
    return svgOpen() + bg() +
      // 树状结构
      `<rect x="200" y="30" width="80" height="30" rx="4" fill="rgba(245,201,122,0.2)" stroke="#f5c97a"/>`+
      label(240, 50, "核心概念", "#f5c97a", 11)+
      // 三个子节点
      [[80,90],[240,90],[400,90]].map((p,i)=>{
        return `<line x1="240" y1="60" x2="${p[0]}" y2="${p[1]}" stroke="#6ed5e0"/>` +
               `<rect x="${p[0]-40}" y="${p[1]}" width="80" height="30" rx="4" fill="rgba(110,213,224,0.15)" stroke="#6ed5e0"/>` +
               label(p[0], p[1]+20, ['分支'+(i+1)][0], "#6ed5e0", 11);
      }).join('')+
      label(30, 200, "知识结构树 — 从概念到分支到细节", "#b288ff", 12, "start")+
      svgClose();
  };

  // 兜底：符文抽象图（不重复"挂羊头卖狗肉"，明确标注为装饰）
  // v4.0: fallback 不再画莫名多边形 —— 而是显示"暂无对应可视化，请专注题目本身"提示卡
  GEN._fallback = (q) => {
    // 不使用 SVG 而是返回空字符串，让 subject-page 判断为 hasViz=false 从而不渲染折叠框
    return '';
  };

  // ================================================================
  // v4.3.5g 合并 v435f-hotfix Bug 5：每个功法专属装饰环
  //   —— 没匹配到关键词也不会空图，根据 manualId 稳定 hash 生成专属学科色 + 符号 + 固定角度
  // ================================================================
  const _MANUAL_HUES = { phy: 210, chem: 320, geo: 140, chinese: 40, math: 260, english: 180 };
  const _MANUAL_SYMBOLS = {
    phy:  ['⚡','🌀','🔭','⚛','⭐','💫','🎯'],
    chem: ['⚗','🧪','🔬','⚛','🌋','💧','🎭'],
    geo:  ['🌍','🌋','🌊','🏔','📍','🧭','🌧'],
    chinese: ['📜','🖋','🏮','🌸','🪔','🎭','✴'],
    math: ['∫','∑','√','π','θ','∞','∴'],
    english: ['A','🌐','🔤','💬','📖','✍','🌟']
  };
  function _hashCode(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
    return Math.abs(h);
  }
  AutoViz.forManual = function (manualId) {
    if (!manualId) return '';
    const prefix = String(manualId).split('_')[0];
    const hue = _MANUAL_HUES[prefix] || (_hashCode(prefix) % 360);
    const syms = _MANUAL_SYMBOLS[prefix] || ['✴','◆','▲','●'];
    const h = _hashCode(manualId);
    const sym = syms[h % syms.length];
    const angle = (h % 360);
    // 12 个小班点 + 中心主字，固定角度 → 每个 manualId 稳定唯一图
    const dots = [];
    for (let i = 0; i < 12; i++) {
      const a = (i * 30 + angle) * Math.PI / 180;
      const r = 88;
      const cx = 120 + Math.cos(a) * r;
      const cy = 120 + Math.sin(a) * r;
      const size = 3 + (h >> i) % 4;
      const op = 0.35 + ((h >> i) % 65) / 100;
      dots.push('<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + size + '" fill="hsl(' + hue + ',65%,60%)" opacity="' + op.toFixed(2) + '"/>');
    }
    // 内圈 6 个符号
    const inner = [];
    for (let i = 0; i < 6; i++) {
      const a = (i * 60 - angle) * Math.PI / 180;
      const r = 45;
      const cx = 120 + Math.cos(a) * r;
      const cy = 120 + Math.sin(a) * r + 4;
      inner.push('<text x="' + cx.toFixed(1) + '" y="' + cy.toFixed(1) + '" font-size="13" fill="hsl(' + hue + ',70%,70%)" opacity="0.75" text-anchor="middle">' + syms[(h + i) % syms.length] + '</text>');
    }
    return '<div class="autoviz-manual-ring" style="text-align:center;padding:12px 0;">' +
      '<svg viewBox="0 0 240 240" width="180" height="180" style="filter:drop-shadow(0 0 8px hsl(' + hue + ',60%,50%,0.4));">' +
      '<defs><radialGradient id="g_' + h.toString(36) + '" cx="50%" cy="50%">' +
      '<stop offset="0%" stop-color="hsl(' + hue + ',70%,65%)" stop-opacity="0.35"/>' +
      '<stop offset="70%" stop-color="hsl(' + hue + ',65%,50%)" stop-opacity="0.08"/>' +
      '<stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
      '<circle cx="120" cy="120" r="105" fill="none" stroke="hsl(' + hue + ',55%,55%,0.35)" stroke-width="1" stroke-dasharray="3,3"/>' +
      '<circle cx="120" cy="120" r="75" fill="url(#g_' + h.toString(36) + ')" stroke="hsl(' + hue + ',60%,60%,0.55)" stroke-width="1.5"/>' +
      dots.join('') + inner.join('') +
      '<text x="120" y="128" font-size="56" fill="hsl(' + hue + ',75%,72%)" text-anchor="middle" style="font-family:serif;">' + sym + '</text>' +
      '</svg></div>';
  };

  global.AutoViz = AutoViz;

})(typeof window !== 'undefined' ? window : this);
