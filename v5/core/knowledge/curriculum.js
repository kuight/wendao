/* ============================================================
 * 《问道修仙学院》v5 · core/knowledge/curriculum.js
 * 学科课程结构定义：六科（物理/化学/地理/数学/语文/英语）
 * 每科 6-8 章，对齐教材。元数据从 content/subjects/*.json 载入。
 * ============================================================ */

import physicsMeta from '../../content/subjects/physics.json' with { type: 'json' };
import chemistryMeta from '../../content/subjects/chemistry.json' with { type: 'json' };
import mathMeta from '../../content/subjects/math.json' with { type: 'json' };
import geographyMeta from '../../content/subjects/geography.json' with { type: 'json' };
import englishMeta from '../../content/subjects/english.json' with { type: 'json' };
import chineseMeta from '../../content/subjects/chinese.json' with { type: 'json' };

// 学科代码 -> 全局题库变量名（题库挂载于 window/globalThis）
const BANK_GLOBALS = {
  phy:  'PHYSICS_BANK',
  chem: 'CHEMISTRY_BANK',
  math: 'MATH_BANK',
  geo:  'GEOGRAPHY_BANK',
  eng:  'ENGLISH_BANK',
  chn:  'CHINESE_BANK'
};

// 学科代码 -> 全局功法/秘籍变量名（提供 manualId -> chapter/tier 映射）
const MANUAL_GLOBALS = {
  phy:  'PHYSICS_MANUALS_DEEP',
  chem: 'CHEMISTRY_MANUALS_DEEP',
  math: 'MATH_MANUALS_DEEP',
  geo:  'GEOGRAPHY_MANUALS_DEEP',
  eng:  'ENGLISH_MANUALS',
  chn:  'CHINESE_MANUALS'
};

// tier(必修/选必) -> 年级代号（10 高一 / 11 高二 / 12 高三）
const TIER_TO_GRADE = {
  '必修一': '10', '必修1': '10', '高一': '10',
  '必修二': '11', '必修2': '11',
  '选必一': '11', '选必1': '11', '高二': '11',
  '选必二': '12', '选必2': '12',
  '选必三': '12', '选必3': '12', '高三': '12',
  '高考专题': '12', '高考': '12',
  '通用': null, '必修+选必': null
};

// 年级代号 -> 显示名
export const GRADE_NAMES = { '10': '高一', '11': '高二', '12': '高三' };

export const GRADES = ['10', '11', '12'];

// 学科顺序（课程结构的主顺序）
export const SUBJECT_ORDER = [
  { code: 'phy',  name: '物理' },
  { code: 'chem', name: '化学' },
  { code: 'geo',  name: '地理' },
  { code: 'math', name: '数学' },
  { code: 'eng',  name: '英语' },
  { code: 'chn',  name: '语文' }
];

/**
 * 构建课程结构。读取 content/subjects/*.json，
 * 组装成 { subjects: {code: subject}, list: [subject...], byChapter: {id: chapter} }
 */
export function buildCurriculum() {
  const subjects = {};
  const list = [];
  const byChapter = {};

  const metadataByCode = {
    phy: physicsMeta, chem: chemistryMeta, math: mathMeta,
    geo: geographyMeta, eng: englishMeta, chn: chineseMeta
  };

  for (const s of SUBJECT_ORDER) {
    const data = metadataByCode[s.code];
    if (!data) continue;
    const subject = normalizeSubject(s.code, data);
    subjects[s.code] = subject;
    list.push(subject);
    for (const ch of subject.chapters) byChapter[ch.id] = ch;
  }

  return { subjects, list, byChapter };
}

/**
 * 将学科元数据规范化成统一课程结构。
 * @param {string} code 学科代码
 * @param {object} meta 从 subjects/*.json 读到的原始数据
 */
export function normalizeSubject(code, meta) {
  const chapters = meta.chapters.map((ch, idx) => ({
    id: ch.id,
    name: ch.name,
    grade: ch.grade || TIER_TO_GRADE[ch.tier] || null,
    order: ch.order || idx + 1,
    summary: ch.summary || '',
    manualIds: ch.manualIds || [],
    tags: ch.tags || [],
    knowledge: (ch.knowledge || []).map((k, kIdx) => ({
      id: k.id || `${ch.id}_k${kIdx + 1}`,
      name: k.name,
      order: k.order || kIdx + 1,
      weight: k.weight || 3,
      points: k.points || [],
      examples: k.examples || [],
      commonMistakes: k.commonMistakes || [],
      tips: k.tips || '',
      manualIds: k.manualIds || [],
      tags: k.tags || []
    }))
  }));

  return {
    code,
    name: meta.name,
    order: meta.order || SUBJECT_ORDER.findIndex(s => s.code === code) + 1,
    color: meta.color || '#888',
    grades: meta.grades || [],
    description: meta.description || '',
    chapters
  };
}

export { BANK_GLOBALS, MANUAL_GLOBALS, TIER_TO_GRADE };