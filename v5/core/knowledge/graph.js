/* ============================================================
 * 《问道修仙学院》v5 · core/knowledge/graph.js
 * 知识点图谱：学科→章节→知识点（三层），前置/应用关系。
 * 每个知识点挂载题目索引，并支持熟练度聚合（答题即修行）。
 * ============================================================ */

import { TIER_TO_GRADE, MANUAL_GLOBALS } from './curriculum.js';

// 难度权重：用于分层出题
export const DIFF_WEIGHT = { easy: 1, normal: 2, medium: 2, hard: 3 };

// 熟练度阈值：推进章节进度
export const THRESHOLDS = { mastery: 10, full: 20 };

/**
 * 构建知识图谱。
 * @param {object} curriculum 由 buildCurriculum() 生成
 * @returns 图谱对象 { subjects, chapters, knowledge, byId, byManualId, byTag }
 */
export function buildGraph(curriculum) {
  const graph = {
    subjects: {},
    chapters: {},
    knowledge: {},        // id -> node
    byManualId: {},       // manualId -> { subject, chapter, knowledge[] }
    byTag: {},            // tag -> knowledge node ids
    stats: { subjectCount: 0, chapterCount: 0, knowledgeCount: 0, questionCount: 0 }
  };

  const manuals = loadManualMaps();

  for (const subject of curriculum.list) {
    graph.subjects[subject.code] = subject;
    graph.stats.subjectCount++;

    for (const chapter of subject.chapters) {
      chapter.subjectCode = subject.code;
      graph.chapters[chapter.id] = chapter;
      graph.stats.chapterCount++;

      // 为每个知识点建立节点
      for (const kp of chapter.knowledge) {
        const node = {
          id: kp.id,
          name: kp.name,
          chapterId: chapter.id,
          chapter,
          subjectCode: subject.code,
          subject,
          grade: kp.grade || chapter.grade || null,
          weight: kp.weight || 3,
          points: kp.points || [],
          examples: kp.examples || [],
          commonMistakes: kp.commonMistakes || [],
          tips: kp.tips || '',
          manualIds: kp.manualIds || [],
          tags: kp.tags || [],
          questionIds: [],      // 挂载的题目 id
          prerequisites: [],    // 前置知识点 id
          applications: [],     // 应用知识点 id
          proficiency: 0        // 熟练度（运行时累积）
        };
        graph.knowledge[node.id] = node;
        graph.stats.knowledgeCount++;

        // 按 manualId 索引
        for (const mid of node.manualIds) {
          (graph.byManualId[mid] = graph.byManualId[mid] || { subject, chapter, knowledge: [] })
            .knowledge.push(node.id);
        }
        // 按 tag 索引
        for (const tag of node.tags) {
          (graph.byTag[tag] = graph.byTag[tag] || []).push(node.id);
        }
      }
    }
  }

  // 建立前置/应用关系：按章内 order 连边 + 跨章按学科内依赖
  linkGraph(curriculum, graph);

  return graph;
}

/**
 * 从全局（window/globalThis）读取 manual 映射，补充题目的 grade/chapter。
 * @returns {Map<string, {grade, chapterName, tags}>}
 */
export function loadManualMaps() {
  const maps = {};
  for (const code in MANUAL_GLOBALS) {
    const gname = MANUAL_GLOBALS[code];
    const raw = (typeof globalThis !== 'undefined' && globalThis[gname]) || [];
    const map = {};
    for (const m of raw || []) {
      map[m.id] = {
        grade: m.grade || TIER_TO_GRADE[m.tier] || null,
        chapterName: m.chapter || null,
        tier: m.tier || null,
        tags: m.tag ? [m.tag] : (m.tags || [])
      };
    }
    maps[code] = map;
  }
  return maps;
}

/**
 * 为一道题补充 grade 与 chapter 标签（按 manualId 查 manual 表，
 * 并优先映射到课程结构的规范章节名）。
 * 无 manualId 时返回 null，由调用方做关键词兜底。
 */
export function annotateQuestion(question, manualMaps, curriculum) {
  if (!question) return question;
  const q = { ...question };
  const mid = q.manualId;
  if (mid) {
    const code = mid.split('_')[0];
    const info = manualMaps[code] && manualMaps[code][mid];
    if (info) {
      if (!q.grade && info.grade) q.grade = info.grade;
      if (!q.chapter && info.chapterName) q.chapter = info.chapterName;
      if (!q.tags && info.tags) q.tags = info.tags;
    }
    // 映射到课程章节（优先用课程章节规范名，便于按章节过滤/出题）
    const curCh = curriculum && curriculum.byChapter && findChapterByManual(curriculum, mid);
    if (curCh) {
      q.chapter = curCh.name;
      q.chapterId = curCh.id;
      if (!q.grade && curCh.grade) q.grade = curCh.grade;
    }
  }
  return q;
}

function findChapterByManual(curriculum, manualId) {
  for (const subject of curriculum.list) {
    for (const ch of subject.chapters) {
      if ((ch.manualIds || []).includes(manualId) || (ch.tags || []).includes(manualId)) {
        return ch;
      }
    }
  }
  return null;
}

/**
 * 建立知识点之间的前置/应用边。
 * 规则：同章内，order 小的知识点的后继是 order 大的；相邻章按教材顺序串联。
 */
function linkGraph(curriculum, graph) {
  for (const subject of curriculum.list) {
    const orderedChapters = [...subject.chapters].sort((a, b) => a.order - b.order);

    for (let ci = 0; ci < orderedChapters.length; ci++) {
      const chapter = orderedChapters[ci];
      const kps = chapter.knowledge.slice().sort((a, b) => a.order - b.order);

      // 章内前置：前一知识点是后一知识点的前置
      for (let i = 0; i < kps.length - 1; i++) {
        const prev = graph.knowledge[kps[i].id];
        const next = graph.knowledge[kps[i + 1].id];
        if (prev && next) {
          next.prerequisites.push(prev.id);
          prev.applications.push(next.id);
        }
      }

      // 跨章依赖：前一章的最后一个知识点前置到本章第一个
      if (ci > 0 && kps.length) {
        const prevCh = orderedChapters[ci - 1];
        if (prevCh.knowledge.length) {
          const lastPrev = graph.knowledge[prevCh.knowledge[prevCh.knowledge.length - 1].id];
          const firstCur = graph.knowledge[kps[0].id];
          if (lastPrev && firstCur) {
            firstCur.prerequisites.push(lastPrev.id);
            lastPrev.applications.push(firstCur.id);
          }
        }
      }
    }
  }
}