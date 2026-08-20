/* ============================================================
 * 《问道修仙学院》v5 · core/knowledge/index.js
 * 知识图谱管理器：知识图谱构建、题库路由、分层出题、
 * 答题即修行（熟练度/顿悟回炉）、章节进度闭环。
 *
 * 接口（挂载到 boot.knowledge）：
 *   getQuestion(difficulty)  -> 获取一题（含 grade/chapter 标签）
 *   recordAnswer(correct)     -> 记录答题，推进熟练度/触发顿悟
 *   addChapterProgress()      -> 推进章节进度
 * ============================================================ */

import { buildCurriculum } from './curriculum.js';
import { buildGraph, loadManualMaps, annotateQuestion, DIFF_WEIGHT, THRESHOLDS } from './graph.js';

export function installKnowledge(boot) {
  'use strict';
  const log = (...a) => (boot.log || console.log)('[v5/knowledge]', ...a);

  // ---- 1. 课程与图谱 ----
  const curriculum = buildCurriculum();
  const graph = buildGraph(curriculum);
  const manualMaps = loadManualMaps();

  // ---- 2. 题库路由：把各学科全局题库合入图谱 ----
  const allQuestions = [];       // 全部题目
  const questionsById = {};      // id -> question
  const poolByDifficulty = { easy: [], normal: [], medium: [], hard: [] };

  function registerBank(code, bank) {
    if (!Array.isArray(bank)) return 0;
    let n = 0;
    for (const raw of bank) {
      const q = annotateQuestion(raw, manualMaps, curriculum);
      // 兜底：无 manualId 或未映射到时，按章节名关键词回填 grade/chapter
      if (!q.grade || !q.chapter) fallbackAnnotate(q, code);
      q.subjectCode = code;
      q.difficulty = normalizeDiff(q.difficulty);
      questionsById[q.id] = q;
      allQuestions.push(q);
      poolByDifficulty[q.difficulty] && poolByDifficulty[q.difficulty].push(q);
      n++;
    }
    return n;
  }

  // 从 curriculum 按学科代码载入题库
  for (const subject of curriculum.list) {
    const bankGlobal = globalBankName(subject.code);
    const bank = (typeof globalThis !== 'undefined' && globalThis[bankGlobal]) || [];
    registerBank(subject.code, bank);
  }

  // 挂载题目到知识图谱节点
  mountQuestionsToKnowledge();

  graph.stats.questionCount = allQuestions.length;
  log('课程加载：', curriculum.list.length, '科，',
      graph.stats.chapterCount, '章，',
      graph.stats.knowledgeCount, '知识点，',
      graph.stats.questionCount, '题');

  // ---- 3. 运行时进度状态 ----
  const state = {
    mastered: {},      // subjectCode.chapterId -> bool 已通关
    proficiency: {},   // knowledgeId -> 熟练度
    streak: 0,         // 连击
    lastCorrect: null, // 上次答对的知识点
    weak: {}           // knowledgeId -> 顿悟回炉次数
  };

  // 从 boot 状态恢复进度（若有存档）
  restoreFromState();

  // ================= 公开接口 =================

  /**
   * 获取一题（分层出题）。
   * @param {string} [difficulty] 'easy'|'normal'|'medium'|'hard'，缺省按熟练度自适应
   * @param {object} [opts] { subject, chapter, grade, excludeIds }
   * @returns 题目对象（含 grade/chapter 标签）
   */
  function getQuestion(difficulty, opts = {}) {
    const diff = difficulty || adaptiveDifficulty();
    let pool = poolByDifficulty[diff] || poolByDifficulty.easy;

    // 按学科/章节/年级过滤，逐步放宽以保证有题可出
    let candidate = pool;
    if (opts.subject) candidate = candidate.filter(q => q.subjectCode === opts.subject);
    if (opts.chapter) candidate = candidate.filter(q => q.chapter === opts.chapter || q.chapterId === opts.chapter);
    if (opts.grade) candidate = candidate.filter(q => q.grade === opts.grade);
    if (opts.excludeIds && opts.excludeIds.length) {
      const set = new Set(opts.excludeIds);
      candidate = candidate.filter(q => !set.has(q.id));
    }
    if (!candidate.length) {
      // 放宽年级 -> 章节 -> 学科 -> 难度
      candidate = pool.filter(q => (!opts.subject || q.subjectCode === opts.subject) && (!opts.chapter || q.chapter === opts.chapter || q.chapterId === opts.chapter));
      if (!candidate.length && opts.chapter) candidate = pool.filter(q => !opts.subject || q.subjectCode === opts.subject);
      if (!candidate.length && opts.subject) candidate = pool;
      if (!candidate.length) candidate = poolByDifficulty[diff] || poolByDifficulty.easy;
    }
    pool = candidate;

    const q = pool[Math.floor(Math.random() * pool.length)];
    return q || null;
  }

  /**
   * 记录答题结果（答题即修行）。
   * @param {boolean} correct 是否答对
   * @param {string} [knowledgeId] 本题对应的知识点 id（可选，缺省自动定位）
   * @returns 结果摘要 { correct, streak, levelUp, insight, chapterProgress, xp }
   */
  function recordAnswer(correct, knowledgeId) {
    const kp = knowledgeId ? graph.knowledge[knowledgeId] : resolveKnowledgeForQuestion();
    const res = { correct, streak: 0, levelUp: false, insight: false, xp: 0 };

    if (correct) {
      state.streak++;
      res.streak = state.streak;
      if (kp) {
        gainProficiency(kp.id, 1);
        res.xp = 1 + Math.min(state.streak, 5);
      }
      // 触发章节进度推进
      const prog = addChapterProgress();
      res.chapterProgress = prog;
      state.lastCorrect = kp ? kp.id : null;
    } else {
      state.streak = 0;
      // 顿悟回炉：标记该知识点回炉，熟练度降一点，提示再学
      if (kp) {
        state.weak[kp.id] = (state.weak[kp.id] || 0) + 1;
        state.proficiency[kp.id] = Math.max(0, (state.proficiency[kp.id] || 0) - 1);
        res.insight = true;
        res.knowledge = kp ? { id: kp.id, name: kp.name, tips: kp.tips } : null;
      }
      state.lastCorrect = null;
    }

    persist();
    boot.bus && boot.bus.emit('battle:answer', { correct, streak: res.streak });
    return res;
  }

  /**
   * 推进章节进度：若当前章节知识点熟练度达标则通关。
   * @param {string} [chapterId] 缺省取当前 lastCorrect 所属章节
   * @returns { string|null } 通关的章节 id（或 null）
   */
  function addChapterProgress(chapterId) {
    const chId = chapterId || resolveChapterForProgress();
    if (!chId) return null;
    const chapter = graph.chapters[chId];
    if (!chapter) return null;

    const key = chapter.subjectCode + '.' + chId;
    if (state.mastered[key]) return null; // 已通关

    // 通关条件：章节内所有知识点熟练度达到 mastery
    const all = chapter.knowledge.every(k => (state.proficiency[k.id] || 0) >= THRESHOLDS.mastery);
    if (!all) return null;

    state.mastered[key] = true;
    persist();
    log('章节通关：', chapter.subjectCode, chapter.name);
    boot.bus && boot.bus.emit('chapter:cleared', { subject: chapter.subjectCode, chapterId: chId });
    return chId;
  }

  // ================= 辅助函数 =================

  function normalizeDiff(d) {
    if (d === 'easy' || d === 'normal') return d;
    if (d === 'medium' || d === 'hard') return d;
    if (d === 1) return 'easy';
    if (d === 2) return 'normal';
    if (d === 3) return 'medium';
    if (d === 4) return 'hard';
    return 'easy';
  }

  function adaptiveDifficulty() {
    // 简单自适应：熟练度越高越偏难，连击高则升难度
    const total = Object.values(state.proficiency);
    const avg = total.length ? total.reduce((a, b) => a + b, 0) / total.length : 0;
    let d = 'easy';
    if (avg >= 4) d = 'normal';
    if (avg >= 8) d = 'medium';
    if (avg >= 12 || state.streak >= 5) d = 'hard';
    return d;
  }

  function gainProficiency(kpId, n) {
    const cur = (state.proficiency[kpId] || 0) + n;
    state.proficiency[kpId] = cur;
    // 达到全满阈值（进阶熟练）时也尝试推章
    if (cur >= THRESHOLDS.full) {
      // 允许满熟练度快进
      const node = graph.knowledge[kpId];
      if (node) addChapterProgress(node.chapterId);
    }
  }

  function resolveKnowledgeForQuestion() {
    // 由当前答过的题目定位知识点（简化：取 lastCorrect 或第一个未掌握知识点）
    if (state.lastCorrect) return graph.knowledge[state.lastCorrect] || null;
    // 否则随机挑一个熟练度最低的知识点
    const entries = Object.entries(state.proficiency).sort((a, b) => a[1] - b[1]);
    return entries.length ? graph.knowledge[entries[0][0]] || null : null;
  }

  function resolveChapterForProgress() {
    if (state.lastCorrect) {
      const node = graph.knowledge[state.lastCorrect];
      if (node) return node.chapterId;
    }
    // 找第一个未通关章节
    for (const subject of curriculum.list) {
      for (const ch of subject.chapters) {
        if (!state.mastered[subject.code + '.' + ch.id]) return ch.id;
      }
    }
    return null;
  }

  function mountQuestionsToKnowledge() {
    // 把题目按 manualId 挂到知识点节点
    for (const q of allQuestions) {
      const mid = q.manualId;
      if (mid) {
        const map = graph.byManualId[mid];
        if (map) {
          for (const kpId of map.knowledge) {
            if (graph.knowledge[kpId]) graph.knowledge[kpId].questionIds.push(q.id);
          }
          continue;
        }
      }
      // 无 manualId 时按关键词匹配（由 fallback 标记的 grade/chapter）
      const node = findNodeByFallback(q);
      if (node) node.questionIds.push(q.id);
    }
  }

  function findNodeByFallback(q) {
    // 依据 chapter 名/grade 粗匹配到一个知识点
    if (!q.chapter || !q.grade) return null;
    const candidates = Object.values(graph.knowledge).filter(n =>
      n.grade === q.grade &&
      (n.chapter.name === q.chapter || n.chapter.summary === q.chapter)
    );
    if (candidates.length) return candidates[0];
    // 退而求其次：同章任一节点
    const byChapter = Object.values(graph.knowledge).filter(n => n.chapter.name === q.chapter);
    return byChapter.length ? byChapter[0] : null;
  }

  // 无 manualId 题目的兜底标注
  function fallbackAnnotate(q, code) {
    if (!q.chapter && q.q) {
      // 尝试从题干关键词找章节（简化的关键词表）
      const kw = keywordIndex[code] || {};
      for (const chName in kw) {
        const keys = kw[chName];
        if (keys.some(k => q.q.indexOf(k) !== -1 || (q.explain || '').indexOf(k) !== -1)) {
          q.chapter = chName;
          break;
        }
      }
    }
    if (!q.grade) {
      const ch = curriculum.subjects[code] && curriculum.subjects[code].chapters.find(c => c.name === q.chapter);
      q.grade = ch ? ch.grade : null;
    }
  }

  function persist() {
    try {
      const s = boot.state && boot.state.get();
      if (s) {
        s.knowledge = {
          mastered: state.mastered,
          proficiency: state.proficiency,
          streak: state.streak,
          weak: state.weak
        };
      }
    } catch (e) { /* 存档失败不影响游戏 */ }
  }

  function restoreFromState() {
    try {
      const s = boot.state && boot.state.get();
      if (s && s.knowledge) {
        Object.assign(state.mastered, s.knowledge.mastered || {});
        Object.assign(state.proficiency, s.knowledge.proficiency || {});
        state.streak = s.knowledge.streak || 0;
        Object.assign(state.weak, s.knowledge.weak || {});
      }
    } catch (e) { /* 忽略恢复错误 */ }
  }

  function globalBankName(code) {
    const map = { phy: 'PHYSICS_BANK', chem: 'CHEMISTRY_BANK', math: 'MATH_BANK', geo: 'GEOGRAPHY_BANK', eng: 'ENGLISH_BANK', chn: 'CHINESE_BANK' };
    return map[code];
  }

  // ---- 注册到 boot ----
  boot.knowledge = { getQuestion, recordAnswer, addChapterProgress };
  boot.register('knowledge', boot.knowledge);

  // 挂载只读信息（便于 UI 展示）
  boot.knowledge.graph = graph;
  boot.knowledge.curriculum = curriculum;
  boot.knowledge.stats = () => ({ ...graph.stats });

  return boot.knowledge;
}

// 关键词兜底表（题目无 manualId 时按关键词定位章节）
const keywordIndex = {
  phy: {
    '运动': ['位移', '路程', '匀变速', '加速度', '平均速度'],
    '牛顿定律': ['牛顿', '惯性', '超重', '失重', '摩擦力'],
    '机械能': ['动能', '势能', '机械能', '功率', '做功'],
    '万有引力': ['万有引力', '宇宙速度', '卫星', '开普勒', '周期平方'],
    '动量': ['动量', '冲量', '碰撞', '反冲'],
    '机械振动': ['简谐', '弹簧振子', '单摆', '共振'],
    '机械波': ['波长', '波速', '横波', '纵波', '干涉'],
    '光': ['折射率', '全反射', '临界角', '衍射', '干涉条纹'],
    '电场': ['库仑', '电场强度', '电势', '电场线'],
    '电路': ['欧姆定律', '电阻', '串联', '并联'],
    '磁场': ['安培力', '洛伦兹力', '磁感应强度', '左手定则'],
    '电磁感应': ['磁通量', '感应电动势', '楞次定律', '切割磁感线'],
    '交变电流': ['交流电', '有效值', '变压器'],
    '热学': ['分子', '布朗运动', '阿伏伽德罗'],
    '气体': ['理想气体', '玻意耳', '盖-吕萨克'],
    '热力学': ['热力学', '内能', '熵', '热机'],
    '原子': ['玻尔', '能级', '光电效应', '光子'],
    '原子核': ['衰变', '半衰期', '质能方程', '核反应'],
    '相对论': ['相对论', '光速不变', '时间膨胀', '长度收缩']
  },
  chem: {
    '元素周期': ['周期表', '元素周期律', '电子排布', '最外层电子'],
    '物质的量': ['物质的量', '摩尔质量', '阿伏伽德罗', '摩尔体积'],
    '氧化还原': ['氧化', '还原', '化合价', '氧化剂'],
    '金属': ['钠', '铝', '铁', '两性'],
    '非金属': ['氯气', '二氧化硫', '硝酸', '硅'],
    '反应热': ['焓变', '反应热', '放热', '吸热'],
    '化学平衡': ['平衡常数', '勒沙特列', '化学平衡'],
    '水溶液': ['电离', '水解', 'pH', '离子积'],
    '电化学': ['原电池', '电解池', '电极反应'],
    '有机': ['烷烃', '烯烃', '苯', '官能团'],
    '烃的衍生物': ['醇', '酚', '醛', '羧酸', '酯'],
    '生物大分子': ['糖类', '蛋白质', '油脂', '核酸'],
    '化学键': ['离子键', '共价键', '金属键', '晶体'],
    '实验': ['制气', '除杂', '干燥', '滴定', '工艺']
  },
  math: {
    '集合': ['集合', '子集', '交并补', '元素'],
    '逻辑': ['充分', '必要', '充要', '命题'],
    '不等式': ['不等式', '基本不等式', '均值'],
    '函数': ['函数', '定义域', '单调性', '奇偶性'],
    '指数对数': ['指数函数', '对数函数', '幂'],
    '零点': ['零点', '二分法', '方程的解'],
    '三角函数': ['正弦', '余弦', '正切', '弧度'],
    '解三角形': ['正弦定理', '余弦定理', '三角形'],
    '向量': ['向量', '数量积', '平行', '垂直'],
    '复数': ['复数', '虚数', '模'],
    '立体几何': ['棱柱', '三视图', '线面', '球体'],
    '空间向量': ['法向量', '空间直角坐标', '二面角'],
    '解析几何': ['椭圆', '双曲线', '抛物线', '离心率'],
    '直线与圆': ['直线', '圆', '切线', '斜率'],
    '数列': ['等差', '等比', '数列', '通项'],
    '导数': ['导数', '求导', '极值', '切线'],
    '计数原理': ['排列', '组合', '二项式'],
    '概率': ['概率', '古典概型', '条件概率'],
    '统计': ['抽样', '方差', '回归', '频率直方图']
  },
  geo: {
    '行星地球': ['地球自转', '地球公转', '昼夜', '四季'],
    '时区': ['地方时', '区时', '时差'],
    '大气': ['大气受热', '气压带', '风带', '气候'],
    '天气系统': ['锋面', '气旋', '反气旋', '台风'],
    '水循环': ['水循环', '蒸发', '降水', '径流'],
    '洋流': ['洋流', '暖流', '寒流', '洋流分布'],
    '地貌': ['地貌', '风化', '侵蚀', '喀斯特'],
    '地质构造': ['褶皱', '断层', '板块'],
    '人口': ['人口增长', '人口迁移', '人口问题'],
    '农业': ['农业区位', '农业地域', '种植业'],
    '工业': ['工业区位', '工业布局', '工业集聚'],
    '交通': ['交通运输', '交通布局', '运输方式'],
    '环境': ['环境问题', '可持续发展', '环境污染'],
    '区域': ['区域发展', '因地制宜', '区域差异']
  },
  eng: {
    '时态': ['时态', '过去时', '现在时', '完成时', '被动'],
    '从句': ['定语从句', '名词性从句', '状语从句', '关系词'],
    '非谓语': ['分词', '动名词', '不定式'],
    '虚拟语气': ['虚拟语气', 'if条件句', 'wish'],
    '词汇': ['词汇', '词义', '辨析'],
    '短语动词': ['短语动词', '动词词组'],
    '阅读': ['阅读', '主旨', '细节', '推断'],
    '完形': ['完形填空', '语境', '逻辑'],
    '写作': ['作文', '书面表达', '应用文']
  },
  chn: {
    '文言实词': ['实词', '一词多义', '古今异义', '词类活用'],
    '文言虚词': ['虚词', '之乎者也', '而乃其'],
    '文言句式': ['判断句', '被动句', '倒装句', '省略句'],
    '古诗': ['诗歌', '意象', '意境', '抒情'],
    '现代文': ['小说', '散文', '记叙文', '论述类'],
    '语言文字': ['成语', '病句', '词语', '连贯'],
    '名句': ['默写', '名句', '名篇'],
    '红楼梦': ['红楼梦', '贾宝玉', '林黛玉'],
    '写作': ['作文', '议论文', '材料作文', '审题']
  }
};