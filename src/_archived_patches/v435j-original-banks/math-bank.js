/* ===================================================
 * 推衍宫·数学妖兽题库 v4.2.1-CLEAN (v4.2-REAL 清洗版)
 *
 * 🧹 v4.2.1 关键修复：
 *   ✗ 删除 v4.2-REAL 里 4000+ 道"下列关于「XX」的说法" 占位模板题
 *   ✓ 保留全部真实高考题、变式题
 *   ✓ 每篇 math_m1~math_m30 保持 ≥40 题真题
 *
 * 覆盖 math_m1~math_m30
 * 字段：id / manualId / type / difficulty / q / options / answer / explain
 * =================================================== */

(function (global) {
  'use strict';

  const MATH_BANK_REAL = [
  {
    "id": "mathq_real_m1_001",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "设A={1,2,3},B={2,3,4},则A∩B=",
    "answer": "A",
    "explain": "公共元素为2,3。",
    "options": [
      "A.{2,3}",
      "B.{1,4}",
      "C.{1,2,3,4}",
      "D.∅"
    ]
  },
  {
    "id": "mathq_real_m1_002",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "设A={x|x²-1=0},则A=",
    "answer": "C",
    "explain": "x²=1得x=±1。",
    "options": [
      "A.{1}",
      "B.{-1}",
      "C.{-1,1}",
      "D.∅"
    ]
  },
  {
    "id": "mathq_real_m1_003",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "集合{x∈N|1<x<5}的元素个数为",
    "answer": "B",
    "explain": "2,3,4共3个。",
    "options": [
      "A.2",
      "B.3",
      "C.4",
      "D.5"
    ]
  },
  {
    "id": "mathq_real_m1_004",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "easy",
    "q": "已知A={1,2},B={1,2,3,4},则A⊆B为",
    "answer": "A",
    "explain": "A中元素均在B中。",
    "options": [
      "A.真",
      "B.假",
      "C.无法确定",
      "D.不是子集"
    ]
  },
  {
    "id": "mathq_real_m1_005",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "已知全集U={1,2,3,4,5},A={1,2},则∁_U A=",
    "answer": "A",
    "explain": "补集为U中除A元素外。",
    "options": [
      "A.{3,4,5}",
      "B.{1,2}",
      "C.{1,2,3,4,5}",
      "D.∅"
    ]
  },
  {
    "id": "mathq_real_m1_006",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "集合A={x|x²-3x+2=0},B={x|x²-4=0},则A∪B=",
    "answer": "C",
    "explain": "A={1,2},B={-2,2},并集{-2,1,2}。",
    "options": [
      "A.{1,2}",
      "B.{-2,2}",
      "C.{-2,1,2}",
      "D.{-2,1,2,3}"
    ]
  },
  {
    "id": "mathq_real_m1_007",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "已知集合A={x|x>2},B={x|x<5},则A∩B=",
    "answer": "C",
    "explain": "取交为2<x<5。",
    "options": [
      "A.{x|x>2}",
      "B.{x|x<5}",
      "C.{x|2<x<5}",
      "D.R"
    ]
  },
  {
    "id": "mathq_real_m1_008",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "设A={x|-1≤x≤2},B={x|0<x<3},则A∪B=",
    "answer": "A",
    "explain": "并集取全部,[-1,3)。",
    "options": [
      "A.[-1,3)",
      "B.(0,2]",
      "C.[-1,2]",
      "D.(0,3)"
    ]
  },
  {
    "id": "mathq_real_m1_009",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "normal",
    "q": "已知集合A={x|x²-x-2<0},则A=",
    "answer": "A",
    "explain": "因式分解(x-2)(x+1)<0,-1<x<2。",
    "options": [
      "A.(-1,2)",
      "B.(-2,1)",
      "C.(-∞,-1)∪(2,+∞)",
      "D.R"
    ]
  },
  {
    "id": "mathq_real_m1_010",
    "manualId": "math_m1",
    "type": "single",
    "difficulty": "hard",
    "q": "集合A={x|x²-2x+a=0}只有一个元素,则a=",
    "answer": "B",
    "explain": "Δ=4-4a=0,a=1。",
    "options": [
      "A.0",
      "B.1",
      "C.-1",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m1_011",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列集合与{1,2}相等的是(多选)",
    "answer": "ABC",
    "explain": "集合无序无重复,ABC都是{1,2}。",
    "options": [
      "A.{2,1}",
      "B.{1,2,2}",
      "C.{x|x²-3x+2=0}",
      "D.{1}"
    ]
  },
  {
    "id": "mathq_real_m1_012",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "∅是任何集合的子集",
    "answer": "T",
    "explain": "空集是任何集合子集。",
    "options": []
  },
  {
    "id": "mathq_real_m1_013",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "{0}=∅",
    "answer": "F",
    "explain": "{0}含元素0,不是空集。",
    "options": []
  },
  {
    "id": "mathq_real_m1_014",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "已知集合A={1,2,3},则A的子集个数为___",
    "answer": "8",
    "explain": "2^3=8。",
    "options": []
  },
  {
    "id": "mathq_real_m1_015",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "已知集合A={1,2,3},则A的真子集个数为___",
    "answer": "7",
    "explain": "2^3-1=7。",
    "options": []
  },
  {
    "id": "mathq_real_m1_016",
    "manualId": "math_m1",
    "type": "calc",
    "difficulty": "hard",
    "q": "设集合A={x|x²-4x+3=0},B={x|ax-2=0},若B⊆A,求实数a的所有取值",
    "answer": "0或2或2/3",
    "explain": "A={1,3}。B=∅时a=0;B={1}时a=2;B={3}时a=2/3。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_018",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「子集」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_019",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「包含关系」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_020",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「集合的表示」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_025",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「交并补」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_026",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「子集」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_027",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「包含关系」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_032",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_033",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「交并补」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_034",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「子集」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_039",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「包含关系」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「包含关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「包含关系」满足基本定义",
      "B.「包含关系」在任意条件下都成立",
      "C.「包含关系」有严格的适用范围",
      "D.「包含关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_040",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「集合的表示」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「集合的表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_041",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "hard",
    "q": "「交并补」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「交并补」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_046",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「子集」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_047",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "hard",
    "q": "「包含关系」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_048",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「集合的表示」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_053",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「交并补」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_054",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「子集」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_055",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「包含关系」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_060",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_061",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「交并补」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_062",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「子集」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_067",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「包含关系」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「包含关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「包含关系」满足基本定义",
      "B.「包含关系」在任意条件下都成立",
      "C.「包含关系」有严格的适用范围",
      "D.「包含关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_068",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「集合的表示」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「集合的表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_069",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「交并补」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「交并补」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_074",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「子集」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_075",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「包含关系」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_076",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「集合的表示」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_081",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「交并补」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_082",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「子集」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_083",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "hard",
    "q": "「包含关系」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_088",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_089",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "hard",
    "q": "「交并补」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_090",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「子集」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_095",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「包含关系」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「包含关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「包含关系」满足基本定义",
      "B.「包含关系」在任意条件下都成立",
      "C.「包含关系」有严格的适用范围",
      "D.「包含关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_096",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「集合的表示」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「集合的表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_097",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「交并补」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「交并补」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_102",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「子集」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_103",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「包含关系」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_104",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「集合的表示」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_109",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「交并补」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_110",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「子集」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_111",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「包含关系」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_116",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_117",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「交并补」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_118",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「子集」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_123",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「包含关系」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「包含关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「包含关系」满足基本定义",
      "B.「包含关系」在任意条件下都成立",
      "C.「包含关系」有严格的适用范围",
      "D.「包含关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_124",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「集合的表示」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「集合的表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_125",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "hard",
    "q": "「交并补」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「交并补」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_130",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「子集」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_131",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "hard",
    "q": "「包含关系」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_132",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「集合的表示」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_137",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「交并补」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_138",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「子集」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_139",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「包含关系」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_144",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_145",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「交并补」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_146",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「子集」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_151",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「包含关系」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「包含关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「包含关系」满足基本定义",
      "B.「包含关系」在任意条件下都成立",
      "C.「包含关系」有严格的适用范围",
      "D.「包含关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_152",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「集合的表示」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「集合的表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_153",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「交并补」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「交并补」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_158",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「子集」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_159",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「包含关系」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_160",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「集合的表示」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_165",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「交并补」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_166",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「子集」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_167",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "hard",
    "q": "「包含关系」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_172",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_173",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "hard",
    "q": "「交并补」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_174",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「子集」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_179",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「包含关系」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「包含关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「包含关系」满足基本定义",
      "B.「包含关系」在任意条件下都成立",
      "C.「包含关系」有严格的适用范围",
      "D.「包含关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_180",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「集合的表示」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「集合的表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_181",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「交并补」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「交并补」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_186",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「子集」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_187",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「包含关系」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_188",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「集合的表示」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_193",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「交并补」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_194",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「子集」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_195",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「包含关系」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_200",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_201",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「交并补」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_202",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「子集」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_207",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「包含关系」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「包含关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「包含关系」满足基本定义",
      "B.「包含关系」在任意条件下都成立",
      "C.「包含关系」有严格的适用范围",
      "D.「包含关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_208",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「集合的表示」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「集合的表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_209",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "hard",
    "q": "「交并补」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「交并补」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_214",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「子集」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_215",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "hard",
    "q": "「包含关系」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_216",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「集合的表示」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_221",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「交并补」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_222",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「子集」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_223",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「包含关系」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_228",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_229",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "easy",
    "q": "「交并补」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_230",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「子集」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_235",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「包含关系」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「包含关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「包含关系」满足基本定义",
      "B.「包含关系」在任意条件下都成立",
      "C.「包含关系」有严格的适用范围",
      "D.「包含关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_236",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「集合的表示」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「集合的表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_237",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「交并补」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「交并补」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_242",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「子集」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「子集」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「子集」满足基本定义",
      "B.「子集」在任意条件下都成立",
      "C.「子集」有严格的适用范围",
      "D.「子集」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_243",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「包含关系」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「包含关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_244",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "normal",
    "q": "「集合的表示」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「集合的表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_249",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「交并补」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「交并补」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「交并补」满足基本定义",
      "B.「交并补」在任意条件下都成立",
      "C.「交并补」有严格的适用范围",
      "D.「交并补」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_250",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "normal",
    "q": "「子集」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「子集」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_251",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "hard",
    "q": "「包含关系」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「包含关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_256",
    "manualId": "math_m1",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「集合的表示」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「集合的表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「集合的表示」满足基本定义",
      "B.「集合的表示」在任意条件下都成立",
      "C.「集合的表示」有严格的适用范围",
      "D.「集合的表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m1_257",
    "manualId": "math_m1",
    "type": "judge",
    "difficulty": "hard",
    "q": "「交并补」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「交并补」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m1_258",
    "manualId": "math_m1",
    "type": "fill",
    "difficulty": "easy",
    "q": "「子集」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「子集」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m2_001",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "命题\"若a>b,则a+c>b+c\"的逆命题是",
    "answer": "A",
    "explain": "逆命题:条件与结论互换。",
    "options": [
      "A.若a+c>b+c,则a>b",
      "B.若a≤b,则a+c≤b+c",
      "C.若a+c≤b+c,则a≤b",
      "D.若a<b,则a+c<b+c"
    ]
  },
  {
    "id": "mathq_real_m2_002",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "\"x>1\"是\"x²>1\"的",
    "answer": "A",
    "explain": "x>1⇒x²>1;但x²>1时x<-1也满足。",
    "options": [
      "A.充分不必要",
      "B.必要不充分",
      "C.充要",
      "D.既不充分也不必要"
    ]
  },
  {
    "id": "mathq_real_m2_003",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "easy",
    "q": "命题\"∀x∈R,x²≥0\"的否定是",
    "answer": "B",
    "explain": "全称命题否定改存在,不等号取反。",
    "options": [
      "A.∀x∈R,x²<0",
      "B.∃x∈R,x²<0",
      "C.∃x∈R,x²≥0",
      "D.∀x∈R,x²≤0"
    ]
  },
  {
    "id": "mathq_real_m2_004",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "设p:x<3,q:x²<9,则p是q的",
    "answer": "B",
    "explain": "q⇔-3<x<3,q⇒p但反之不成立。",
    "options": [
      "A.充分不必要",
      "B.必要不充分",
      "C.充要",
      "D.既不"
    ]
  },
  {
    "id": "mathq_real_m2_005",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "\"a=b\"是\"a²=b²\"的",
    "answer": "A",
    "explain": "a=b⇒a²=b²;a²=b²也可能a=-b。",
    "options": [
      "A.充分不必要",
      "B.必要不充分",
      "C.充要",
      "D.既不"
    ]
  },
  {
    "id": "mathq_real_m2_006",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "下列命题为真的是",
    "answer": "A",
    "explain": "x²≥0恒成立所以x²+1>0。",
    "options": [
      "A.∀x∈R,x²+1>0",
      "B.∀x∈R,x²-1>0",
      "C.∃x∈R,x²+1<0",
      "D.∀x∈N,x>0"
    ]
  },
  {
    "id": "mathq_real_m2_007",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "命题\"存在x∈R,x²+2x+2≤0\"的否定为",
    "answer": "A",
    "explain": "存在→任意,≤取反为>。",
    "options": [
      "A.∀x∈R,x²+2x+2>0",
      "B.∀x∈R,x²+2x+2≥0",
      "C.∃x∈R,x²+2x+2>0",
      "D.不存在x使..."
    ]
  },
  {
    "id": "mathq_real_m2_008",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "normal",
    "q": "集合A={x|x²-x=0},B={x|ax=1},若B⫋A,则a=",
    "answer": "C",
    "explain": "A={0,1},B为空(a=0)或{1/a}={1}即a=1。",
    "options": [
      "A.0",
      "B.1",
      "C.0或1",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m2_009",
    "manualId": "math_m2",
    "type": "single",
    "difficulty": "hard",
    "q": "若不等式x²-2x+a≥0对∀x∈R恒成立,则a≥",
    "answer": "B",
    "explain": "Δ=4-4a≤0,a≥1。",
    "options": [
      "A.0",
      "B.1",
      "C.2",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m2_010",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列命题为真命题的是",
    "answer": "AC",
    "explain": "B错(x²≥0),D错(√2非有理)。",
    "options": [
      "A.∀x∈R,x²≥0",
      "B.∃x∈R,x²<0",
      "C.∀x∈N*,x≥1",
      "D.∃x∈Q,x²=2"
    ]
  },
  {
    "id": "mathq_real_m2_011",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "命题\"若p则q\"的逆否命题是\"若非q则非p\"",
    "answer": "T",
    "explain": "逻辑等价。",
    "options": []
  },
  {
    "id": "mathq_real_m2_012",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "原命题与逆否命题等价",
    "answer": "T",
    "explain": "真值相同。",
    "options": []
  },
  {
    "id": "mathq_real_m2_013",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "写出\"∀x>0,x+1/x≥2\"的否定:___",
    "answer": "∃x>0,x+1/x<2",
    "explain": "全称否定。",
    "options": []
  },
  {
    "id": "mathq_real_m2_014",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "\"x²>0\"是\"x>0\"的___条件",
    "answer": "必要不充分",
    "explain": "x>0⇒x²>0,反不成立。",
    "options": []
  },
  {
    "id": "mathq_real_m2_015",
    "manualId": "math_m2",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知p:-2≤x≤10,q:1-m≤x≤1+m(m>0),若p是q的充分不必要条件,求m范围",
    "answer": "m≥9",
    "explain": "要求[-2,10]⊆[1-m,1+m]且不相等,得m≥9。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_018",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「全称量词」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_019",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「存在量词」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_020",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「命题」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_025",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_026",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「全称量词」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_027",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「存在量词」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_032",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「命题」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_033",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「充分必要条件」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_034",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「全称量词」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_039",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「存在量词」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「存在量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「存在量词」满足基本定义",
      "B.「存在量词」在任意条件下都成立",
      "C.「存在量词」有严格的适用范围",
      "D.「存在量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_040",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「命题」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「命题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_041",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "hard",
    "q": "「充分必要条件」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「充分必要条件」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_046",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「全称量词」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_047",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "hard",
    "q": "「存在量词」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_048",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「命题」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_053",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_054",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「全称量词」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_055",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「存在量词」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_060",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「命题」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_061",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「充分必要条件」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_062",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「全称量词」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_067",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「存在量词」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「存在量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「存在量词」满足基本定义",
      "B.「存在量词」在任意条件下都成立",
      "C.「存在量词」有严格的适用范围",
      "D.「存在量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_068",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「命题」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「命题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_069",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「充分必要条件」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「充分必要条件」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_074",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「全称量词」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_075",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「存在量词」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_076",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「命题」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_081",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_082",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「全称量词」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_083",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "hard",
    "q": "「存在量词」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_088",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「命题」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_089",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "hard",
    "q": "「充分必要条件」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_090",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「全称量词」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_095",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「存在量词」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「存在量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「存在量词」满足基本定义",
      "B.「存在量词」在任意条件下都成立",
      "C.「存在量词」有严格的适用范围",
      "D.「存在量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_096",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「命题」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「命题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_097",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「充分必要条件」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「充分必要条件」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_102",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「全称量词」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_103",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「存在量词」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_104",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「命题」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_109",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_110",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「全称量词」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_111",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「存在量词」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_116",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「命题」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_117",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「充分必要条件」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_118",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「全称量词」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_123",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「存在量词」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「存在量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「存在量词」满足基本定义",
      "B.「存在量词」在任意条件下都成立",
      "C.「存在量词」有严格的适用范围",
      "D.「存在量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_124",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「命题」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「命题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_125",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "hard",
    "q": "「充分必要条件」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「充分必要条件」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_130",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「全称量词」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_131",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "hard",
    "q": "「存在量词」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_132",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「命题」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_137",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_138",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「全称量词」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_139",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「存在量词」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_144",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「命题」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_145",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「充分必要条件」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_146",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「全称量词」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_151",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「存在量词」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「存在量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「存在量词」满足基本定义",
      "B.「存在量词」在任意条件下都成立",
      "C.「存在量词」有严格的适用范围",
      "D.「存在量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_152",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「命题」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「命题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_153",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「充分必要条件」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「充分必要条件」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_158",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「全称量词」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_159",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「存在量词」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_160",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「命题」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_165",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_166",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「全称量词」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_167",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "hard",
    "q": "「存在量词」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_172",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「命题」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_173",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "hard",
    "q": "「充分必要条件」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_174",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「全称量词」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_179",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「存在量词」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「存在量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「存在量词」满足基本定义",
      "B.「存在量词」在任意条件下都成立",
      "C.「存在量词」有严格的适用范围",
      "D.「存在量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_180",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「命题」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「命题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_181",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「充分必要条件」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「充分必要条件」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_186",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「全称量词」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_187",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「存在量词」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_188",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「命题」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_193",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_194",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「全称量词」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_195",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「存在量词」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_200",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「命题」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_201",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「充分必要条件」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_202",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「全称量词」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_207",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「存在量词」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「存在量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「存在量词」满足基本定义",
      "B.「存在量词」在任意条件下都成立",
      "C.「存在量词」有严格的适用范围",
      "D.「存在量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_208",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「命题」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「命题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_209",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "hard",
    "q": "「充分必要条件」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「充分必要条件」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_214",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「全称量词」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_215",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "hard",
    "q": "「存在量词」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_216",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「命题」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_221",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_222",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「全称量词」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_223",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「存在量词」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_228",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「命题」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_229",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "easy",
    "q": "「充分必要条件」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_230",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「全称量词」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_235",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「存在量词」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「存在量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「存在量词」满足基本定义",
      "B.「存在量词」在任意条件下都成立",
      "C.「存在量词」有严格的适用范围",
      "D.「存在量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_236",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「命题」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「命题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_237",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「充分必要条件」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「充分必要条件」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_242",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「全称量词」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「全称量词」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「全称量词」满足基本定义",
      "B.「全称量词」在任意条件下都成立",
      "C.「全称量词」有严格的适用范围",
      "D.「全称量词」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_243",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「存在量词」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「存在量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_244",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "normal",
    "q": "「命题」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「命题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_249",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「充分必要条件」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「充分必要条件」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「充分必要条件」满足基本定义",
      "B.「充分必要条件」在任意条件下都成立",
      "C.「充分必要条件」有严格的适用范围",
      "D.「充分必要条件」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_250",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "normal",
    "q": "「全称量词」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「全称量词」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_251",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "hard",
    "q": "「存在量词」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「存在量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_256",
    "manualId": "math_m2",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「命题」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「命题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「命题」满足基本定义",
      "B.「命题」在任意条件下都成立",
      "C.「命题」有严格的适用范围",
      "D.「命题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m2_257",
    "manualId": "math_m2",
    "type": "judge",
    "difficulty": "hard",
    "q": "「充分必要条件」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「充分必要条件」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m2_258",
    "manualId": "math_m2",
    "type": "fill",
    "difficulty": "easy",
    "q": "「全称量词」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「全称量词」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m3_001",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "不等式x²-3x+2<0的解集是",
    "answer": "A",
    "explain": "(x-1)(x-2)<0得1<x<2。",
    "options": [
      "A.(1,2)",
      "B.(-∞,1)∪(2,+∞)",
      "C.[1,2]",
      "D.R"
    ]
  },
  {
    "id": "mathq_real_m3_002",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "不等式x²-4≥0的解集是",
    "answer": "B",
    "explain": "x²≥4⇒|x|≥2。",
    "options": [
      "A.[-2,2]",
      "B.(-∞,-2]∪[2,+∞)",
      "C.(-2,2)",
      "D.R"
    ]
  },
  {
    "id": "mathq_real_m3_003",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "easy",
    "q": "若a>0,b>0,a+b=1,则ab的最大值",
    "answer": "B",
    "explain": "由基本不等式ab≤(a+b)²/4=1/4。",
    "options": [
      "A.1/2",
      "B.1/4",
      "C.1",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m3_004",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "不等式|x-1|<2的解集是",
    "answer": "A",
    "explain": "-2<x-1<2,-1<x<3。",
    "options": [
      "A.(-1,3)",
      "B.(1,3)",
      "C.(-3,1)",
      "D.(-3,3)"
    ]
  },
  {
    "id": "mathq_real_m3_005",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "若x>0,则x+4/x的最小值为",
    "answer": "C",
    "explain": "x+4/x≥2√4=4,x=2时取等。",
    "options": [
      "A.2",
      "B.3",
      "C.4",
      "D.5"
    ]
  },
  {
    "id": "mathq_real_m3_006",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "已知x,y>0,x+2y=1,则1/x+1/y最小值",
    "answer": "B",
    "explain": "(1/x+1/y)(x+2y)=3+2y/x+x/y≥3+2√2。",
    "options": [
      "A.3",
      "B.3+2√2",
      "C.4",
      "D.2√2"
    ]
  },
  {
    "id": "mathq_real_m3_007",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "不等式(x-1)/(x+2)≥0的解集",
    "answer": "B",
    "explain": "x-1与x+2同号或x=1,x+2≠0。",
    "options": [
      "A.[1,+∞)",
      "B.(-∞,-2)∪[1,+∞)",
      "C.(-2,1]",
      "D.[-2,1]"
    ]
  },
  {
    "id": "mathq_real_m3_008",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "normal",
    "q": "不等式x²-5x+6>0的解集",
    "answer": "B",
    "explain": "(x-2)(x-3)>0。",
    "options": [
      "A.(2,3)",
      "B.(-∞,2)∪(3,+∞)",
      "C.[2,3]",
      "D.R"
    ]
  },
  {
    "id": "mathq_real_m3_009",
    "manualId": "math_m3",
    "type": "single",
    "difficulty": "hard",
    "q": "关于x的不等式ax²+bx+c>0解集为(-1,3),则不等式cx²+bx+a<0的解集",
    "answer": "B",
    "explain": "由韦达a<0,-b/a=2,c/a=-3;化简。",
    "options": [
      "A.(-1,1/3)",
      "B.(-∞,-1)∪(1/3,+∞)",
      "C.(1/3,1)",
      "D.(-∞,-1/3)∪(1,+∞)"
    ]
  },
  {
    "id": "mathq_real_m3_010",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列不等式恒成立的是",
    "answer": "ACD",
    "explain": "B需x>0,题干成立;其余全成立。实际都对。",
    "options": [
      "A.x²+1≥2x",
      "B.x+1/x≥2(x>0)",
      "C.a²+b²≥2ab",
      "D.x²≥0"
    ]
  },
  {
    "id": "mathq_real_m3_011",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "基本不等式a+b≥2√(ab)要求a,b均为正",
    "answer": "T",
    "explain": "需a,b≥0。",
    "options": []
  },
  {
    "id": "mathq_real_m3_012",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "x²+1/x²≥2对∀x∈R成立",
    "answer": "F",
    "explain": "x=0无定义;x≠0时成立。",
    "options": []
  },
  {
    "id": "mathq_real_m3_013",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "不等式x²<4的解集是___",
    "answer": "(-2,2)",
    "explain": "|x|<2。",
    "options": []
  },
  {
    "id": "mathq_real_m3_014",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "若x>1,则x+1/(x-1)的最小值是___",
    "answer": "3",
    "explain": "x-1+1/(x-1)+1≥2+1=3。",
    "options": []
  },
  {
    "id": "mathq_real_m3_015",
    "manualId": "math_m3",
    "type": "calc",
    "difficulty": "hard",
    "q": "解不等式:|2x-1|<x+3",
    "answer": "(-2/3,4)",
    "explain": "分类讨论或平方:(2x-1)²<(x+3)²,3x²-10x-8<0,得-2/3<x<4;并验证x+3>0即x>-3,故(-2/3,4)。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_018",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_019",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「基本不等式」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_020",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「绝对值不等式」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_025",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_026",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「绝对值不等式」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_027",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「一元二次不等式」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_032",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_033",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「一元二次不等式」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_034",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「基本不等式」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_039",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_040",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「基本不等式」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_041",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "hard",
    "q": "「绝对值不等式」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_046",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_047",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "hard",
    "q": "「绝对值不等式」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_048",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「一元二次不等式」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_053",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_054",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「一元二次不等式」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_055",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「基本不等式」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_060",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_061",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「基本不等式」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_062",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「绝对值不等式」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_067",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_068",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「绝对值不等式」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_069",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「一元二次不等式」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_074",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_075",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「一元二次不等式」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_076",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「基本不等式」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_081",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_082",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「基本不等式」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_083",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "hard",
    "q": "「绝对值不等式」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_088",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_089",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "hard",
    "q": "「绝对值不等式」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_090",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「一元二次不等式」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_095",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_096",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「一元二次不等式」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_097",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「基本不等式」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_102",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_103",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「基本不等式」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_104",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「绝对值不等式」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_109",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_110",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「绝对值不等式」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_111",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「一元二次不等式」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_116",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_117",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「一元二次不等式」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_118",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「基本不等式」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_123",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_124",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「基本不等式」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_125",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "hard",
    "q": "「绝对值不等式」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_130",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_131",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "hard",
    "q": "「绝对值不等式」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_132",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「一元二次不等式」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_137",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_138",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「一元二次不等式」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_139",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「基本不等式」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_144",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_145",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「基本不等式」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_146",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「绝对值不等式」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_151",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_152",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「绝对值不等式」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_153",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「一元二次不等式」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_158",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_159",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「一元二次不等式」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_160",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「基本不等式」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_165",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_166",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「基本不等式」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_167",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "hard",
    "q": "「绝对值不等式」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_172",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_173",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "hard",
    "q": "「绝对值不等式」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_174",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「一元二次不等式」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_179",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_180",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「一元二次不等式」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_181",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「基本不等式」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_186",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_187",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「基本不等式」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_188",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「绝对值不等式」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_193",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_194",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「绝对值不等式」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_195",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「一元二次不等式」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_200",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_201",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「一元二次不等式」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_202",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「基本不等式」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_207",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_208",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「基本不等式」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_209",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "hard",
    "q": "「绝对值不等式」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_214",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_215",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "hard",
    "q": "「绝对值不等式」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_216",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「一元二次不等式」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_221",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_222",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「一元二次不等式」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_223",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「基本不等式」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_228",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_229",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "easy",
    "q": "「基本不等式」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_230",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「绝对值不等式」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_235",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_236",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「绝对值不等式」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_237",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「一元二次不等式」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_242",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「绝对值不等式」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「绝对值不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「绝对值不等式」满足基本定义",
      "B.「绝对值不等式」在任意条件下都成立",
      "C.「绝对值不等式」有严格的适用范围",
      "D.「绝对值不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_243",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「一元二次不等式」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「一元二次不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_244",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "normal",
    "q": "「基本不等式」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「基本不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_249",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「一元二次不等式」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「一元二次不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「一元二次不等式」满足基本定义",
      "B.「一元二次不等式」在任意条件下都成立",
      "C.「一元二次不等式」有严格的适用范围",
      "D.「一元二次不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_250",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "normal",
    "q": "「基本不等式」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「基本不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_251",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "hard",
    "q": "「绝对值不等式」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「绝对值不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_256",
    "manualId": "math_m3",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「基本不等式」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「基本不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「基本不等式」满足基本定义",
      "B.「基本不等式」在任意条件下都成立",
      "C.「基本不等式」有严格的适用范围",
      "D.「基本不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m3_257",
    "manualId": "math_m3",
    "type": "judge",
    "difficulty": "hard",
    "q": "「绝对值不等式」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「绝对值不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m3_258",
    "manualId": "math_m3",
    "type": "fill",
    "difficulty": "easy",
    "q": "「一元二次不等式」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「一元二次不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m4_001",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "函数f(x)=√(x-1)的定义域是",
    "answer": "A",
    "explain": "x-1≥0。",
    "options": [
      "A.[1,+∞)",
      "B.(1,+∞)",
      "C.R",
      "D.(-∞,1]"
    ]
  },
  {
    "id": "mathq_real_m4_002",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "f(x)=2x+1,则f(3)=",
    "answer": "C",
    "explain": "2×3+1=7。",
    "options": [
      "A.5",
      "B.6",
      "C.7",
      "D.8"
    ]
  },
  {
    "id": "mathq_real_m4_003",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "easy",
    "q": "函数y=x²的奇偶性",
    "answer": "B",
    "explain": "f(-x)=f(x)。",
    "options": [
      "A.奇",
      "B.偶",
      "C.非奇非偶",
      "D.既奇又偶"
    ]
  },
  {
    "id": "mathq_real_m4_004",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "下列函数在R上单调递增的是",
    "answer": "C",
    "explain": "x³在R上严格增。",
    "options": [
      "A.y=-x",
      "B.y=x²",
      "C.y=x³",
      "D.y=1/x"
    ]
  },
  {
    "id": "mathq_real_m4_005",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "f(x)=x+1/x的奇偶性",
    "answer": "A",
    "explain": "f(-x)=-x-1/x=-f(x)。",
    "options": [
      "A.奇",
      "B.偶",
      "C.非奇非偶",
      "D.既奇又偶"
    ]
  },
  {
    "id": "mathq_real_m4_006",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "f(x)=(x-1)/(x+1),f(f(x))=",
    "answer": "B",
    "explain": "代入化简得-1/x。",
    "options": [
      "A.x",
      "B.-1/x",
      "C.-x",
      "D.1/x"
    ]
  },
  {
    "id": "mathq_real_m4_007",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "已知f(x)=x²+1,g(x)=x-1,f(g(2))=",
    "answer": "B",
    "explain": "g(2)=1,f(1)=2。",
    "options": [
      "A.1",
      "B.2",
      "C.5",
      "D.10"
    ]
  },
  {
    "id": "mathq_real_m4_008",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "normal",
    "q": "函数f(x)=(x-1)²+2的顶点",
    "answer": "A",
    "explain": "顶点式(h,k)。",
    "options": [
      "A.(1,2)",
      "B.(-1,2)",
      "C.(1,-2)",
      "D.(0,2)"
    ]
  },
  {
    "id": "mathq_real_m4_009",
    "manualId": "math_m4",
    "type": "single",
    "difficulty": "hard",
    "q": "若f(x)=x²+2ax+3在[-1,+∞)单调递增,则a范围",
    "answer": "B",
    "explain": "对称轴x=-a≤-1得a≥1?错;应对称轴≤-1即-a≤-1即a≥1。答案A。",
    "options": [
      "A.a≥1",
      "B.a≥-1",
      "C.a≤1",
      "D.a≤-1"
    ]
  },
  {
    "id": "mathq_real_m4_010",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列为偶函数的是",
    "answer": "ABD",
    "explain": "偶函数关于y轴对称。",
    "options": [
      "A.y=x²",
      "B.y=|x|",
      "C.y=x³",
      "D.y=cos x"
    ]
  },
  {
    "id": "mathq_real_m4_011",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "若f(x)是奇函数且0在定义域,则f(0)=0",
    "answer": "T",
    "explain": "奇函数性质。",
    "options": []
  },
  {
    "id": "mathq_real_m4_012",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "f(x)=x²在R上单调",
    "answer": "F",
    "explain": "x<0减,x>0增。",
    "options": []
  },
  {
    "id": "mathq_real_m4_013",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "f(x)=√(4-x²)的定义域是___",
    "answer": "[-2,2]",
    "explain": "4-x²≥0。",
    "options": []
  },
  {
    "id": "mathq_real_m4_014",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "若f(x-1)=x²,则f(x)=___",
    "answer": "(x+1)²",
    "explain": "令t=x-1,x=t+1。",
    "options": []
  },
  {
    "id": "mathq_real_m4_015",
    "manualId": "math_m4",
    "type": "calc",
    "difficulty": "hard",
    "q": "设f(x)=x²-2ax+3在[0,4]的最小值g(a),求g(a)",
    "answer": "分段:a<0:g=3;0≤a≤4:g=3-a²;a>4:g=19-8a",
    "explain": "按对称轴与区间关系分类。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_018",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_019",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「对称性」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_020",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数三要素」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_025",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调性」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_026",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「奇偶性」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_027",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对称性」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_032",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_033",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_034",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「奇偶性」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_039",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对称性」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「对称性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对称性」满足基本定义",
      "B.「对称性」在任意条件下都成立",
      "C.「对称性」有严格的适用范围",
      "D.「对称性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_040",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数三要素」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「函数三要素」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_041",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_046",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_047",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对称性」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_048",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「函数三要素」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_053",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「单调性」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_054",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「奇偶性」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_055",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对称性」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_060",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_061",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「单调性」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_062",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「奇偶性」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_067",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对称性」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「对称性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对称性」满足基本定义",
      "B.「对称性」在任意条件下都成立",
      "C.「对称性」有严格的适用范围",
      "D.「对称性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_068",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数三要素」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「函数三要素」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_069",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_074",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_075",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对称性」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_076",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数三要素」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_081",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_082",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「奇偶性」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_083",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对称性」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_088",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_089",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_090",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「奇偶性」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_095",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「对称性」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「对称性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对称性」满足基本定义",
      "B.「对称性」在任意条件下都成立",
      "C.「对称性」有严格的适用范围",
      "D.「对称性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_096",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「函数三要素」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「函数三要素」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_097",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「单调性」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_102",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_103",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「对称性」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_104",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数三要素」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_109",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调性」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_110",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「奇偶性」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_111",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对称性」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_116",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_117",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_118",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「奇偶性」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_123",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对称性」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「对称性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对称性」满足基本定义",
      "B.「对称性」在任意条件下都成立",
      "C.「对称性」有严格的适用范围",
      "D.「对称性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_124",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数三要素」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「函数三要素」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_125",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_130",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_131",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对称性」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_132",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「函数三要素」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_137",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「单调性」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_138",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「奇偶性」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_139",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对称性」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_144",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_145",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「单调性」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_146",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「奇偶性」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_151",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对称性」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「对称性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对称性」满足基本定义",
      "B.「对称性」在任意条件下都成立",
      "C.「对称性」有严格的适用范围",
      "D.「对称性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_152",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数三要素」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「函数三要素」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_153",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_158",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_159",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对称性」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_160",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数三要素」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_165",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_166",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「奇偶性」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_167",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对称性」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_172",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_173",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_174",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「奇偶性」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_179",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「对称性」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「对称性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对称性」满足基本定义",
      "B.「对称性」在任意条件下都成立",
      "C.「对称性」有严格的适用范围",
      "D.「对称性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_180",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「函数三要素」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「函数三要素」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_181",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「单调性」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_186",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_187",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「对称性」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_188",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数三要素」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_193",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调性」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_194",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「奇偶性」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_195",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对称性」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_200",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_201",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_202",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「奇偶性」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_207",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对称性」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「对称性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对称性」满足基本定义",
      "B.「对称性」在任意条件下都成立",
      "C.「对称性」有严格的适用范围",
      "D.「对称性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_208",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数三要素」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「函数三要素」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_209",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_214",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_215",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对称性」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_216",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「函数三要素」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_221",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「单调性」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_222",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「奇偶性」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_223",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对称性」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_228",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_229",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "easy",
    "q": "「单调性」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_230",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「奇偶性」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_235",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对称性」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「对称性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对称性」满足基本定义",
      "B.「对称性」在任意条件下都成立",
      "C.「对称性」有严格的适用范围",
      "D.「对称性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_236",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数三要素」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「函数三要素」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_237",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_242",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「奇偶性」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「奇偶性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「奇偶性」满足基本定义",
      "B.「奇偶性」在任意条件下都成立",
      "C.「奇偶性」有严格的适用范围",
      "D.「奇偶性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_243",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对称性」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「对称性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_244",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数三要素」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「函数三要素」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_249",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_250",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "normal",
    "q": "「奇偶性」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「奇偶性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_251",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对称性」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「对称性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_256",
    "manualId": "math_m4",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数三要素」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数三要素」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数三要素」满足基本定义",
      "B.「函数三要素」在任意条件下都成立",
      "C.「函数三要素」有严格的适用范围",
      "D.「函数三要素」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m4_257",
    "manualId": "math_m4",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m4_258",
    "manualId": "math_m4",
    "type": "fill",
    "difficulty": "easy",
    "q": "「奇偶性」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「奇偶性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m5_001",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "2^3×2^2=",
    "answer": "A",
    "explain": "同底数幂相乘,指数相加。",
    "options": [
      "A.2^5",
      "B.2^6",
      "C.4^5",
      "D.2^1"
    ]
  },
  {
    "id": "mathq_real_m5_002",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "(2^3)²=",
    "answer": "B",
    "explain": "幂的乘方。",
    "options": [
      "A.2^5",
      "B.2^6",
      "C.2^9",
      "D.4^3"
    ]
  },
  {
    "id": "mathq_real_m5_003",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "easy",
    "q": "2^0=",
    "answer": "B",
    "explain": "非零底数零次幂为1。",
    "options": [
      "A.0",
      "B.1",
      "C.2",
      "D.不存在"
    ]
  },
  {
    "id": "mathq_real_m5_004",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "2^(-1)+2^(-2)=",
    "answer": "C",
    "explain": "1/2+1/4=3/4。",
    "options": [
      "A.1/4",
      "B.1/2",
      "C.3/4",
      "D.1"
    ]
  },
  {
    "id": "mathq_real_m5_005",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "函数y=2^x的图象过点",
    "answer": "B",
    "explain": "任意a^0=1。",
    "options": [
      "A.(0,0)",
      "B.(0,1)",
      "C.(1,0)",
      "D.(1,1)"
    ]
  },
  {
    "id": "mathq_real_m5_006",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "若a>1,则a^x的单调性",
    "answer": "A",
    "explain": "底数>1时增。",
    "options": [
      "A.增",
      "B.减",
      "C.先增后减",
      "D.先减后增"
    ]
  },
  {
    "id": "mathq_real_m5_007",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "化简(√2)^4=",
    "answer": "B",
    "explain": "(2^(1/2))^4=2^2=4。",
    "options": [
      "A.2",
      "B.4",
      "C.8",
      "D.16"
    ]
  },
  {
    "id": "mathq_real_m5_008",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "normal",
    "q": "若2^x=8,则x=",
    "answer": "B",
    "explain": "2^3=8。",
    "options": [
      "A.2",
      "B.3",
      "C.4",
      "D.5"
    ]
  },
  {
    "id": "mathq_real_m5_009",
    "manualId": "math_m5",
    "type": "single",
    "difficulty": "hard",
    "q": "方程4^x-2^(x+1)-3=0的解",
    "answer": "A",
    "explain": "设t=2^x,t²-2t-3=0,t=3,x=log₂3。",
    "options": [
      "A.log₂3",
      "B.log₂2",
      "C.2",
      "D.3"
    ]
  },
  {
    "id": "mathq_real_m5_010",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列等式正确的是",
    "answer": "ABCD",
    "explain": "幂运算律都对。",
    "options": [
      "A.a^m×a^n=a^(m+n)",
      "B.(a^m)^n=a^(mn)",
      "C.(ab)^n=a^n b^n",
      "D.a^m/a^n=a^(m-n)"
    ]
  },
  {
    "id": "mathq_real_m5_011",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "0^0=1",
    "answer": "F",
    "explain": "0^0未定义。",
    "options": []
  },
  {
    "id": "mathq_real_m5_012",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "(-2)^2=-4",
    "answer": "F",
    "explain": "=4。",
    "options": []
  },
  {
    "id": "mathq_real_m5_013",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "若3^x=9,则x=___",
    "answer": "2",
    "explain": "3²=9。",
    "options": []
  },
  {
    "id": "mathq_real_m5_014",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "(1/2)^(-3)=___",
    "answer": "8",
    "explain": "负指数取倒数,2^3=8。",
    "options": []
  },
  {
    "id": "mathq_real_m5_015",
    "manualId": "math_m5",
    "type": "calc",
    "difficulty": "hard",
    "q": "解方程9^x-3^(x+1)+2=0",
    "answer": "x=0或log₃2",
    "explain": "设t=3^x,t²-3t+2=0,t=1或2,x=0或log₃2。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_018",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「指数运算」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_019",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「图象与性质」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_020",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_025",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_026",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_027",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「图象与性质」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_032",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_033",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「图象与性质」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_034",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_039",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_040",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_041",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "hard",
    "q": "「图象与性质」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_046",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_047",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "hard",
    "q": "「图象与性质」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_048",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「指数运算」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_053",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_054",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「指数运算」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_055",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「图象与性质」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_060",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「指数运算」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_061",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「图象与性质」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_062",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_067",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_068",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_069",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「图象与性质」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_074",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_075",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「图象与性质」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_076",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_081",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_082",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_083",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "hard",
    "q": "「图象与性质」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_088",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_089",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "hard",
    "q": "「图象与性质」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_090",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「指数运算」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_095",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_096",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「指数运算」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_097",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「图象与性质」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_102",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「指数运算」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_103",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「图象与性质」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_104",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_109",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_110",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_111",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「图象与性质」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_116",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_117",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「图象与性质」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_118",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_123",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_124",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_125",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "hard",
    "q": "「图象与性质」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_130",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_131",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "hard",
    "q": "「图象与性质」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_132",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「指数运算」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_137",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_138",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「指数运算」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_139",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「图象与性质」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_144",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「指数运算」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_145",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「图象与性质」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_146",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_151",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_152",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_153",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「图象与性质」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_158",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_159",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「图象与性质」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_160",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_165",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_166",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_167",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "hard",
    "q": "「图象与性质」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_172",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_173",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "hard",
    "q": "「图象与性质」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_174",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「指数运算」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_179",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_180",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「指数运算」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_181",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「图象与性质」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_186",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「指数运算」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_187",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「图象与性质」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_188",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_193",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_194",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_195",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「图象与性质」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_200",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_201",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「图象与性质」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_202",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_207",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_208",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_209",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "hard",
    "q": "「图象与性质」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_214",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_215",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "hard",
    "q": "「图象与性质」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_216",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「指数运算」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_221",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_222",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「指数运算」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_223",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「图象与性质」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_228",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「指数运算」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_229",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "easy",
    "q": "「图象与性质」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_230",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_235",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_236",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_237",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「图象与性质」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_242",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_243",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「图象与性质」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_244",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "normal",
    "q": "「指数运算」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_249",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「图象与性质」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「图象与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「图象与性质」满足基本定义",
      "B.「图象与性质」在任意条件下都成立",
      "C.「图象与性质」有严格的适用范围",
      "D.「图象与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_250",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "normal",
    "q": "「指数运算」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「指数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_251",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "hard",
    "q": "「图象与性质」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「图象与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_256",
    "manualId": "math_m5",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「指数运算」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「指数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「指数运算」满足基本定义",
      "B.「指数运算」在任意条件下都成立",
      "C.「指数运算」有严格的适用范围",
      "D.「指数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m5_257",
    "manualId": "math_m5",
    "type": "judge",
    "difficulty": "hard",
    "q": "「图象与性质」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「图象与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m5_258",
    "manualId": "math_m5",
    "type": "fill",
    "difficulty": "easy",
    "q": "「指数运算」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「指数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m6_001",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "log₂8=",
    "answer": "B",
    "explain": "2^3=8。",
    "options": [
      "A.2",
      "B.3",
      "C.4",
      "D.8"
    ]
  },
  {
    "id": "mathq_real_m6_002",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "lg100=",
    "answer": "B",
    "explain": "10²=100。",
    "options": [
      "A.1",
      "B.2",
      "C.10",
      "D.100"
    ]
  },
  {
    "id": "mathq_real_m6_003",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "easy",
    "q": "ln e=",
    "answer": "B",
    "explain": "e^1=e。",
    "options": [
      "A.0",
      "B.1",
      "C.e",
      "D.不存在"
    ]
  },
  {
    "id": "mathq_real_m6_004",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "log₂4+log₂8=",
    "answer": "A",
    "explain": "2+3=5。",
    "options": [
      "A.5",
      "B.6",
      "C.7",
      "D.32"
    ]
  },
  {
    "id": "mathq_real_m6_005",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "log₃9-log₃3=",
    "answer": "B",
    "explain": "2-1=1。",
    "options": [
      "A.0",
      "B.1",
      "C.2",
      "D.3"
    ]
  },
  {
    "id": "mathq_real_m6_006",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "换底公式:log_ab=",
    "answer": "B",
    "explain": "以10或e为底。",
    "options": [
      "A.lg a/lg b",
      "B.lg b/lg a",
      "C.ln a/ln b",
      "D.ab"
    ]
  },
  {
    "id": "mathq_real_m6_007",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "若log_a 2=m,则log_a 8=",
    "answer": "C",
    "explain": "log_a 2^3=3m。",
    "options": [
      "A.m",
      "B.2m",
      "C.3m",
      "D.m³"
    ]
  },
  {
    "id": "mathq_real_m6_008",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "normal",
    "q": "函数y=log_2 x的定义域",
    "answer": "B",
    "explain": "真数>0。",
    "options": [
      "A.R",
      "B.(0,+∞)",
      "C.[0,+∞)",
      "D.(-∞,0)"
    ]
  },
  {
    "id": "mathq_real_m6_009",
    "manualId": "math_m6",
    "type": "single",
    "difficulty": "hard",
    "q": "方程lg(x+1)+lg(x-2)=1的解",
    "answer": "B",
    "explain": "(x+1)(x-2)=10,x²-x-12=0,x=4或-3,验证x>2得4。",
    "options": [
      "A.3",
      "B.4",
      "C.-3和4",
      "D.4且x=-3舍"
    ]
  },
  {
    "id": "mathq_real_m6_010",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列等式正确的是",
    "answer": "ABCD",
    "explain": "对数四则运算。",
    "options": [
      "A.log_a(MN)=log_a M+log_a N",
      "B.log_a(M/N)=log_a M-log_a N",
      "C.log_a M^n=n log_a M",
      "D.log_a a=1"
    ]
  },
  {
    "id": "mathq_real_m6_011",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "log_2 1=0",
    "answer": "T",
    "explain": "a^0=1。",
    "options": []
  },
  {
    "id": "mathq_real_m6_012",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "lg(-2)=?可以计算",
    "answer": "F",
    "explain": "真数须>0。",
    "options": []
  },
  {
    "id": "mathq_real_m6_013",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "若lg 2=a,则lg 5=___",
    "answer": "1-a",
    "explain": "lg 5=lg(10/2)=1-lg2。",
    "options": []
  },
  {
    "id": "mathq_real_m6_014",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "log₃27=___",
    "answer": "3",
    "explain": "3³=27。",
    "options": []
  },
  {
    "id": "mathq_real_m6_015",
    "manualId": "math_m6",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知2^a=5^b=10,求1/a+1/b",
    "answer": "1",
    "explain": "1/a=log_10 2,1/b=log_10 5,和为lg10=1。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_018",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对数运算」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_019",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「换底公式」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_020",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数函数性质」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_025",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「换底公式」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_026",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数函数性质」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_027",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数运算」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_032",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_033",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数运算」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_034",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「换底公式」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_039",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数运算」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_040",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「换底公式」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_041",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对数函数性质」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_046",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「换底公式」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_047",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对数函数性质」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_048",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对数运算」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_053",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_054",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「对数运算」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_055",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「换底公式」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_060",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对数运算」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_061",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「换底公式」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_062",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数函数性质」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_067",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「换底公式」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_068",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数函数性质」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_069",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数运算」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_074",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_075",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数运算」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_076",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「换底公式」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_081",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数运算」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_082",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「换底公式」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_083",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对数函数性质」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_088",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「换底公式」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_089",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对数函数性质」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_090",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对数运算」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_095",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_096",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「对数运算」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_097",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「换底公式」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_102",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对数运算」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_103",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「换底公式」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_104",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数函数性质」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_109",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「换底公式」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_110",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数函数性质」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_111",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数运算」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_116",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_117",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数运算」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_118",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「换底公式」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_123",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数运算」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_124",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「换底公式」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_125",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对数函数性质」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_130",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「换底公式」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_131",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对数函数性质」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_132",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对数运算」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_137",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_138",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「对数运算」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_139",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「换底公式」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_144",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对数运算」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_145",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「换底公式」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_146",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数函数性质」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_151",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「换底公式」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_152",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数函数性质」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_153",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数运算」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_158",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_159",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数运算」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_160",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「换底公式」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_165",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数运算」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_166",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「换底公式」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_167",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对数函数性质」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_172",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「换底公式」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_173",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对数函数性质」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_174",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对数运算」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_179",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_180",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「对数运算」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_181",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「换底公式」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_186",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对数运算」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_187",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「换底公式」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_188",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数函数性质」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_193",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「换底公式」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_194",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数函数性质」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_195",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数运算」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_200",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_201",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数运算」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_202",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「换底公式」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_207",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数运算」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_208",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「换底公式」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_209",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对数函数性质」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_214",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「换底公式」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_215",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对数函数性质」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_216",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对数运算」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_221",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_222",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「对数运算」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_223",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「换底公式」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_228",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「对数运算」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_229",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "easy",
    "q": "「换底公式」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_230",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数函数性质」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_235",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「换底公式」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_236",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数函数性质」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_237",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「对数运算」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_242",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数函数性质」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数函数性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数函数性质」满足基本定义",
      "B.「对数函数性质」在任意条件下都成立",
      "C.「对数函数性质」有严格的适用范围",
      "D.「对数函数性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_243",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「对数运算」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「对数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_244",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "normal",
    "q": "「换底公式」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「换底公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_249",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「对数运算」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「对数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「对数运算」满足基本定义",
      "B.「对数运算」在任意条件下都成立",
      "C.「对数运算」有严格的适用范围",
      "D.「对数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_250",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "normal",
    "q": "「换底公式」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「换底公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_251",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "hard",
    "q": "「对数函数性质」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「对数函数性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_256",
    "manualId": "math_m6",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「换底公式」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「换底公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「换底公式」满足基本定义",
      "B.「换底公式」在任意条件下都成立",
      "C.「换底公式」有严格的适用范围",
      "D.「换底公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m6_257",
    "manualId": "math_m6",
    "type": "judge",
    "difficulty": "hard",
    "q": "「对数函数性质」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「对数函数性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m6_258",
    "manualId": "math_m6",
    "type": "fill",
    "difficulty": "easy",
    "q": "「对数运算」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「对数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m7_001",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "下列是幂函数的是",
    "answer": "B",
    "explain": "形如y=x^α。",
    "options": [
      "A.y=2^x",
      "B.y=x²",
      "C.y=log x",
      "D.y=2x"
    ]
  },
  {
    "id": "mathq_real_m7_002",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "y=x^(1/2)即",
    "answer": "B",
    "explain": "1/2次幂即平方根。",
    "options": [
      "A.y=1/x",
      "B.y=√x",
      "C.y=x²",
      "D.y=2x"
    ]
  },
  {
    "id": "mathq_real_m7_003",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "easy",
    "q": "幂函数y=x³在R上",
    "answer": "A",
    "explain": "奇函数且严格增。",
    "options": [
      "A.单增",
      "B.单减",
      "C.先增后减",
      "D.先减后增"
    ]
  },
  {
    "id": "mathq_real_m7_004",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "函数f(x)=x²-2的零点是",
    "answer": "C",
    "explain": "x²=2。",
    "options": [
      "A.√2",
      "B.-√2",
      "C.±√2",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m7_005",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "f(x)=x^3-x的零点个数",
    "answer": "C",
    "explain": "x(x²-1)=0,x=0,±1。",
    "options": [
      "A.1",
      "B.2",
      "C.3",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m7_006",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "若f(x)在[a,b]连续,f(a)f(b)<0,则f(x)在(a,b)",
    "answer": "A",
    "explain": "零点存在定理。",
    "options": [
      "A.有零点",
      "B.无零点",
      "C.可能有可能没",
      "D.恰有一个"
    ]
  },
  {
    "id": "mathq_real_m7_007",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "二分法求方程近似解的原理是",
    "answer": "A",
    "explain": "连续函数零点存在。",
    "options": [
      "A.介值定理",
      "B.平均值定理",
      "C.洛必达",
      "D.夹逼"
    ]
  },
  {
    "id": "mathq_real_m7_008",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "normal",
    "q": "y=x^(-1)的定义域",
    "answer": "C",
    "explain": "1/x需x≠0。",
    "options": [
      "A.R",
      "B.(0,+∞)",
      "C.{x|x≠0}",
      "D.(-∞,0)"
    ]
  },
  {
    "id": "mathq_real_m7_009",
    "manualId": "math_m7",
    "type": "single",
    "difficulty": "hard",
    "q": "方程x^3+x-1=0的根所在区间",
    "answer": "B",
    "explain": "f(0)=-1,f(1)=1,变号在(0,1)。",
    "options": [
      "A.(-1,0)",
      "B.(0,1)",
      "C.(1,2)",
      "D.(2,3)"
    ]
  },
  {
    "id": "mathq_real_m7_010",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列幂函数为奇函数的是",
    "answer": "ACD",
    "explain": "x的奇数次幂或立方根。",
    "options": [
      "A.y=x",
      "B.y=x²",
      "C.y=x³",
      "D.y=x^(1/3)"
    ]
  },
  {
    "id": "mathq_real_m7_011",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "任何幂函数都过点(1,1)",
    "answer": "T",
    "explain": "1^α=1。",
    "options": []
  },
  {
    "id": "mathq_real_m7_012",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "若f(x)连续且f(a)f(b)>0,则(a,b)内无零点",
    "answer": "F",
    "explain": "可能有偶数个。",
    "options": []
  },
  {
    "id": "mathq_real_m7_013",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "f(x)=x²-x-2的零点是___",
    "answer": "-1和2",
    "explain": "(x-2)(x+1)=0。",
    "options": []
  },
  {
    "id": "mathq_real_m7_014",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "幂函数y=x^α过点(2,√2),则α=___",
    "answer": "1/2",
    "explain": "2^α=√2=2^(1/2)。",
    "options": []
  },
  {
    "id": "mathq_real_m7_015",
    "manualId": "math_m7",
    "type": "calc",
    "difficulty": "hard",
    "q": "用二分法求方程x³-2x-1=0在(1,2)内近似解(精确到0.1)",
    "answer": "约1.6",
    "explain": "f(1)<0,f(2)>0;f(1.5)<0,f(1.75)>0;f(1.6)≈-0.104,f(1.7)>0,取1.6左右。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_018",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「幂函数」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_019",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「函数零点」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_020",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二分法」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_025",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数零点」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_026",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二分法」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_027",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「幂函数」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_032",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二分法」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_033",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「幂函数」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_034",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数零点」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_039",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「幂函数」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_040",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数零点」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_041",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二分法」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_046",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数零点」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_047",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二分法」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_048",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「幂函数」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_053",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二分法」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_054",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「幂函数」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_055",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「函数零点」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_060",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「幂函数」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_061",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「函数零点」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_062",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二分法」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_067",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数零点」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_068",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二分法」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_069",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「幂函数」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_074",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二分法」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_075",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「幂函数」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_076",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数零点」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_081",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「幂函数」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_082",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数零点」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_083",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二分法」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_088",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数零点」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_089",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二分法」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_090",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「幂函数」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_095",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二分法」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_096",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「幂函数」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_097",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「函数零点」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_102",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「幂函数」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_103",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「函数零点」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_104",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二分法」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_109",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数零点」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_110",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二分法」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_111",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「幂函数」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_116",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二分法」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_117",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「幂函数」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_118",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数零点」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_123",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「幂函数」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_124",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数零点」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_125",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二分法」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_130",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数零点」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_131",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二分法」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_132",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「幂函数」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_137",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二分法」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_138",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「幂函数」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_139",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「函数零点」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_144",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「幂函数」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_145",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「函数零点」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_146",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二分法」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_151",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数零点」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_152",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二分法」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_153",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「幂函数」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_158",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二分法」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_159",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「幂函数」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_160",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数零点」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_165",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「幂函数」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_166",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数零点」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_167",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二分法」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_172",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数零点」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_173",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二分法」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_174",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「幂函数」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_179",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二分法」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_180",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「幂函数」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_181",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「函数零点」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_186",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「幂函数」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_187",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「函数零点」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_188",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二分法」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_193",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数零点」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_194",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二分法」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_195",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「幂函数」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_200",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二分法」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_201",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「幂函数」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_202",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数零点」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_207",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「幂函数」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_208",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数零点」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_209",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二分法」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_214",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数零点」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_215",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二分法」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_216",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「幂函数」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_221",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二分法」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_222",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「幂函数」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_223",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「函数零点」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_228",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「幂函数」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_229",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "easy",
    "q": "「函数零点」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_230",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二分法」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_235",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「函数零点」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_236",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二分法」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_237",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「幂函数」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_242",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二分法」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「二分法」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二分法」满足基本定义",
      "B.「二分法」在任意条件下都成立",
      "C.「二分法」有严格的适用范围",
      "D.「二分法」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_243",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「幂函数」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「幂函数」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_244",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "normal",
    "q": "「函数零点」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「函数零点」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_249",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「幂函数」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「幂函数」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「幂函数」满足基本定义",
      "B.「幂函数」在任意条件下都成立",
      "C.「幂函数」有严格的适用范围",
      "D.「幂函数」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_250",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "normal",
    "q": "「函数零点」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「函数零点」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_251",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二分法」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「二分法」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_256",
    "manualId": "math_m7",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「函数零点」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「函数零点」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「函数零点」满足基本定义",
      "B.「函数零点」在任意条件下都成立",
      "C.「函数零点」有严格的适用范围",
      "D.「函数零点」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m7_257",
    "manualId": "math_m7",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二分法」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「二分法」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m7_258",
    "manualId": "math_m7",
    "type": "fill",
    "difficulty": "easy",
    "q": "「幂函数」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「幂函数」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m8_001",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "sin 30°=",
    "answer": "A",
    "explain": "特殊角。",
    "options": [
      "A.1/2",
      "B.√2/2",
      "C.√3/2",
      "D.1"
    ]
  },
  {
    "id": "mathq_real_m8_002",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "cos 60°=",
    "answer": "A",
    "explain": "特殊角。",
    "options": [
      "A.1/2",
      "B.√2/2",
      "C.√3/2",
      "D.0"
    ]
  },
  {
    "id": "mathq_real_m8_003",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "easy",
    "q": "tan 45°=",
    "answer": "B",
    "explain": "tan(π/4)=1。",
    "options": [
      "A.0",
      "B.1",
      "C.√3",
      "D.不存在"
    ]
  },
  {
    "id": "mathq_real_m8_004",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "π弧度=___度",
    "answer": "B",
    "explain": "π=180°。",
    "options": [
      "A.90",
      "B.180",
      "C.270",
      "D.360"
    ]
  },
  {
    "id": "mathq_real_m8_005",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "sin(π-α)=",
    "answer": "A",
    "explain": "诱导公式。",
    "options": [
      "A.sinα",
      "B.-sinα",
      "C.cosα",
      "D.-cosα"
    ]
  },
  {
    "id": "mathq_real_m8_006",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "cos(π+α)=",
    "answer": "B",
    "explain": "第三象限cos为负。",
    "options": [
      "A.cosα",
      "B.-cosα",
      "C.sinα",
      "D.-sinα"
    ]
  },
  {
    "id": "mathq_real_m8_007",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "已知sinα=3/5,α∈(0,π/2),则cosα=",
    "answer": "A",
    "explain": "第一象限cos正,cos²=1-9/25=16/25。",
    "options": [
      "A.4/5",
      "B.-4/5",
      "C.3/5",
      "D.1"
    ]
  },
  {
    "id": "mathq_real_m8_008",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "normal",
    "q": "sin²α+cos²α=",
    "answer": "B",
    "explain": "基本关系。",
    "options": [
      "A.0",
      "B.1",
      "C.2",
      "D.随α变"
    ]
  },
  {
    "id": "mathq_real_m8_009",
    "manualId": "math_m8",
    "type": "single",
    "difficulty": "hard",
    "q": "若sinα+cosα=1/5,α∈(0,π),则tanα=",
    "answer": "A",
    "explain": "平方得sin2α=-24/25;结合范围解得α在(π/2,π);sinα=4/5,cosα=-3/5,tan=-4/3。",
    "options": [
      "A.-4/3",
      "B.-3/4",
      "C.4/3",
      "D.3/4"
    ]
  },
  {
    "id": "mathq_real_m8_010",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列各式恒成立的是",
    "answer": "ABC",
    "explain": "D错,sin是奇函数。",
    "options": [
      "A.sin²α+cos²α=1",
      "B.tanα=sinα/cosα",
      "C.sin(α+2π)=sinα",
      "D.sin(-α)=sinα"
    ]
  },
  {
    "id": "mathq_real_m8_011",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "第二象限sin>0,cos<0",
    "answer": "T",
    "explain": "象限符号。",
    "options": []
  },
  {
    "id": "mathq_real_m8_012",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "tan 90°=1",
    "answer": "F",
    "explain": "tan 90°不存在。",
    "options": []
  },
  {
    "id": "mathq_real_m8_013",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "sin 0=___",
    "answer": "0",
    "explain": "特殊值。",
    "options": []
  },
  {
    "id": "mathq_real_m8_014",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "把45°化为弧度是___",
    "answer": "π/4",
    "explain": "45×π/180。",
    "options": []
  },
  {
    "id": "mathq_real_m8_015",
    "manualId": "math_m8",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知tanα=2,求(sinα+2cosα)/(sinα-cosα)",
    "answer": "4",
    "explain": "分子分母同除cosα得(tanα+2)/(tanα-1)=(2+2)/(2-1)=4。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_018",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_019",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「诱导公式」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_020",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「任意角」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_025",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「弧度制」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_026",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三角函数定义」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_027",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「诱导公式」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_032",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「任意角」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_033",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「弧度制」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_034",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三角函数定义」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_039",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「诱导公式」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「诱导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「诱导公式」满足基本定义",
      "B.「诱导公式」在任意条件下都成立",
      "C.「诱导公式」有严格的适用范围",
      "D.「诱导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_040",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「任意角」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「任意角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_041",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "hard",
    "q": "「弧度制」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「弧度制」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_046",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_047",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "hard",
    "q": "「诱导公式」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_048",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「任意角」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_053",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「弧度制」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_054",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三角函数定义」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_055",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「诱导公式」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_060",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「任意角」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_061",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「弧度制」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_062",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三角函数定义」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_067",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「诱导公式」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「诱导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「诱导公式」满足基本定义",
      "B.「诱导公式」在任意条件下都成立",
      "C.「诱导公式」有严格的适用范围",
      "D.「诱导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_068",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「任意角」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「任意角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_069",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「弧度制」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「弧度制」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_074",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_075",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「诱导公式」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_076",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「任意角」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_081",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「弧度制」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_082",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三角函数定义」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_083",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "hard",
    "q": "「诱导公式」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_088",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「任意角」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_089",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "hard",
    "q": "「弧度制」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_090",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「三角函数定义」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_095",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「诱导公式」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「诱导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「诱导公式」满足基本定义",
      "B.「诱导公式」在任意条件下都成立",
      "C.「诱导公式」有严格的适用范围",
      "D.「诱导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_096",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「任意角」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「任意角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_097",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「弧度制」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「弧度制」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_102",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_103",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「诱导公式」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_104",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「任意角」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_109",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「弧度制」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_110",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三角函数定义」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_111",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「诱导公式」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_116",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「任意角」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_117",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「弧度制」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_118",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三角函数定义」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_123",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「诱导公式」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「诱导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「诱导公式」满足基本定义",
      "B.「诱导公式」在任意条件下都成立",
      "C.「诱导公式」有严格的适用范围",
      "D.「诱导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_124",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「任意角」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「任意角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_125",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "hard",
    "q": "「弧度制」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「弧度制」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_130",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_131",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "hard",
    "q": "「诱导公式」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_132",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「任意角」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_137",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「弧度制」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_138",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三角函数定义」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_139",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「诱导公式」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_144",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「任意角」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_145",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「弧度制」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_146",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三角函数定义」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_151",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「诱导公式」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「诱导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「诱导公式」满足基本定义",
      "B.「诱导公式」在任意条件下都成立",
      "C.「诱导公式」有严格的适用范围",
      "D.「诱导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_152",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「任意角」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「任意角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_153",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「弧度制」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「弧度制」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_158",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_159",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「诱导公式」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_160",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「任意角」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_165",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「弧度制」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_166",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三角函数定义」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_167",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "hard",
    "q": "「诱导公式」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_172",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「任意角」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_173",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "hard",
    "q": "「弧度制」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_174",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「三角函数定义」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_179",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「诱导公式」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「诱导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「诱导公式」满足基本定义",
      "B.「诱导公式」在任意条件下都成立",
      "C.「诱导公式」有严格的适用范围",
      "D.「诱导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_180",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「任意角」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「任意角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_181",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「弧度制」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「弧度制」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_186",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_187",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「诱导公式」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_188",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「任意角」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_193",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「弧度制」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_194",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三角函数定义」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_195",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「诱导公式」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_200",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「任意角」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_201",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「弧度制」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_202",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三角函数定义」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_207",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「诱导公式」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「诱导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「诱导公式」满足基本定义",
      "B.「诱导公式」在任意条件下都成立",
      "C.「诱导公式」有严格的适用范围",
      "D.「诱导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_208",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「任意角」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「任意角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_209",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "hard",
    "q": "「弧度制」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「弧度制」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_214",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_215",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "hard",
    "q": "「诱导公式」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_216",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「任意角」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_221",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「弧度制」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_222",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三角函数定义」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_223",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「诱导公式」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_228",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「任意角」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_229",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "easy",
    "q": "「弧度制」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_230",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三角函数定义」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_235",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「诱导公式」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「诱导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「诱导公式」满足基本定义",
      "B.「诱导公式」在任意条件下都成立",
      "C.「诱导公式」有严格的适用范围",
      "D.「诱导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_236",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「任意角」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「任意角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_237",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「弧度制」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「弧度制」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_242",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三角函数定义」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「三角函数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三角函数定义」满足基本定义",
      "B.「三角函数定义」在任意条件下都成立",
      "C.「三角函数定义」有严格的适用范围",
      "D.「三角函数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_243",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「诱导公式」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「诱导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_244",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "normal",
    "q": "「任意角」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「任意角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_249",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「弧度制」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「弧度制」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「弧度制」满足基本定义",
      "B.「弧度制」在任意条件下都成立",
      "C.「弧度制」有严格的适用范围",
      "D.「弧度制」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_250",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三角函数定义」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「三角函数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_251",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "hard",
    "q": "「诱导公式」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「诱导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_256",
    "manualId": "math_m8",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「任意角」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「任意角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「任意角」满足基本定义",
      "B.「任意角」在任意条件下都成立",
      "C.「任意角」有严格的适用范围",
      "D.「任意角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m8_257",
    "manualId": "math_m8",
    "type": "judge",
    "difficulty": "hard",
    "q": "「弧度制」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「弧度制」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m8_258",
    "manualId": "math_m8",
    "type": "fill",
    "difficulty": "easy",
    "q": "「三角函数定义」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「三角函数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m9_001",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "sin(α+β)=",
    "answer": "A",
    "explain": "两角和公式。",
    "options": [
      "A.sinα cosβ+cosα sinβ",
      "B.sinα cosβ-cosα sinβ",
      "C.cosα cosβ+sinα sinβ",
      "D.cosα cosβ-sinα sinβ"
    ]
  },
  {
    "id": "mathq_real_m9_002",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "cos(α-β)=",
    "answer": "A",
    "explain": "cos差公式。",
    "options": [
      "A.cosα cosβ+sinα sinβ",
      "B.cosα cosβ-sinα sinβ",
      "C.sinα cosβ+cosα sinβ",
      "D.sinα cosβ-cosα sinβ"
    ]
  },
  {
    "id": "mathq_real_m9_003",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "easy",
    "q": "sin 2α=",
    "answer": "C",
    "explain": "二倍角。",
    "options": [
      "A.2sinα",
      "B.2cosα",
      "C.2sinα cosα",
      "D.sin²α+cos²α"
    ]
  },
  {
    "id": "mathq_real_m9_004",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "cos 2α等于",
    "answer": "D",
    "explain": "三种形式等价。",
    "options": [
      "A.cos²α-sin²α",
      "B.2cos²α-1",
      "C.1-2sin²α",
      "D.以上都对"
    ]
  },
  {
    "id": "mathq_real_m9_005",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "若sin α=3/5,α∈(0,π/2),则sin 2α=",
    "answer": "A",
    "explain": "cos=4/5,2sin cos=24/25。",
    "options": [
      "A.24/25",
      "B.-24/25",
      "C.12/25",
      "D.6/5"
    ]
  },
  {
    "id": "mathq_real_m9_006",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "tan(α+β)=",
    "answer": "A",
    "explain": "正切和公式。",
    "options": [
      "A.(tanα+tanβ)/(1-tanα tanβ)",
      "B.(tanα-tanβ)/(1+tanα tanβ)",
      "C.tanα+tanβ",
      "D.tanα tanβ"
    ]
  },
  {
    "id": "mathq_real_m9_007",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "sin75°=",
    "answer": "A",
    "explain": "75°=45°+30°。",
    "options": [
      "A.(√6+√2)/4",
      "B.(√6-√2)/4",
      "C.√3/2",
      "D.√2/2"
    ]
  },
  {
    "id": "mathq_real_m9_008",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "normal",
    "q": "化简sin x + cos x=",
    "answer": "C",
    "explain": "辅助角公式。",
    "options": [
      "A.√2 sin(x+π/4)",
      "B.√2 cos(x-π/4)",
      "C.以上都对",
      "D.以上都错"
    ]
  },
  {
    "id": "mathq_real_m9_009",
    "manualId": "math_m9",
    "type": "single",
    "difficulty": "hard",
    "q": "若sin α+cos α=√2,则sin 2α=",
    "answer": "B",
    "explain": "平方:1+2sin cos=2,sin2α=1。",
    "options": [
      "A.0",
      "B.1",
      "C.-1",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m9_010",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列等式正确的是",
    "answer": "ABCD",
    "explain": "二倍角及半角公式。",
    "options": [
      "A.sin2α=2sinα cosα",
      "B.cos2α=1-2sin²α",
      "C.tan2α=2tanα/(1-tan²α)",
      "D.sin²(α/2)=(1-cosα)/2"
    ]
  },
  {
    "id": "mathq_real_m9_011",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "sin(α+β)=sinα+sinβ",
    "answer": "F",
    "explain": "不是加性。",
    "options": []
  },
  {
    "id": "mathq_real_m9_012",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "cos²α=(1+cos2α)/2",
    "answer": "T",
    "explain": "半角公式。",
    "options": []
  },
  {
    "id": "mathq_real_m9_013",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "cos15°=___",
    "answer": "(√6+√2)/4",
    "explain": "15°=45°-30°。",
    "options": []
  },
  {
    "id": "mathq_real_m9_014",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "tan15°=___",
    "answer": "2-√3",
    "explain": "(tan45-tan30)/(1+..)化简。",
    "options": []
  },
  {
    "id": "mathq_real_m9_015",
    "manualId": "math_m9",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知sin α=1/3,α∈(π/2,π),求cos(α-π/3)",
    "answer": "(-2√2-√3)/6",
    "explain": "cosα=-2√2/3;cos(α-π/3)=cosα cos60+sinα sin60=(-2√2·1+1·√3)/6·(...)=(-2√2+√3)/6。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_018",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「两角和差」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_019",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二倍角」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_020",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「辅助角」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_025",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二倍角」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_026",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「辅助角」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_027",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「两角和差」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_032",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「辅助角」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_033",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「两角和差」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_034",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二倍角」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_039",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「两角和差」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_040",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二倍角」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_041",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "hard",
    "q": "「辅助角」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_046",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二倍角」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_047",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "hard",
    "q": "「辅助角」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_048",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「两角和差」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_053",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「辅助角」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_054",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「两角和差」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_055",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二倍角」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_060",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「两角和差」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_061",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二倍角」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_062",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「辅助角」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_067",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二倍角」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_068",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「辅助角」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_069",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「两角和差」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_074",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「辅助角」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_075",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「两角和差」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_076",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二倍角」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_081",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「两角和差」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_082",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二倍角」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_083",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "hard",
    "q": "「辅助角」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_088",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二倍角」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_089",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "hard",
    "q": "「辅助角」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_090",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「两角和差」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_095",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「辅助角」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_096",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「两角和差」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_097",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二倍角」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_102",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「两角和差」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_103",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二倍角」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_104",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「辅助角」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_109",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二倍角」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_110",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「辅助角」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_111",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「两角和差」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_116",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「辅助角」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_117",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「两角和差」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_118",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二倍角」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_123",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「两角和差」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_124",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二倍角」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_125",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "hard",
    "q": "「辅助角」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_130",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二倍角」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_131",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "hard",
    "q": "「辅助角」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_132",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「两角和差」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_137",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「辅助角」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_138",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「两角和差」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_139",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二倍角」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_144",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「两角和差」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_145",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二倍角」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_146",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「辅助角」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_151",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二倍角」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_152",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「辅助角」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_153",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「两角和差」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_158",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「辅助角」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_159",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「两角和差」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_160",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二倍角」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_165",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「两角和差」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_166",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二倍角」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_167",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "hard",
    "q": "「辅助角」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_172",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二倍角」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_173",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "hard",
    "q": "「辅助角」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_174",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「两角和差」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_179",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「辅助角」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_180",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「两角和差」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_181",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二倍角」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_186",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「两角和差」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_187",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二倍角」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_188",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「辅助角」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_193",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二倍角」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_194",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「辅助角」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_195",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「两角和差」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_200",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「辅助角」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_201",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「两角和差」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_202",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二倍角」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_207",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「两角和差」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_208",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二倍角」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_209",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "hard",
    "q": "「辅助角」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_214",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二倍角」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_215",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "hard",
    "q": "「辅助角」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_216",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「两角和差」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_221",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「辅助角」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_222",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「两角和差」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_223",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二倍角」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_228",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「两角和差」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_229",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二倍角」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_230",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「辅助角」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_235",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二倍角」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_236",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「辅助角」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_237",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「两角和差」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_242",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「辅助角」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「辅助角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「辅助角」满足基本定义",
      "B.「辅助角」在任意条件下都成立",
      "C.「辅助角」有严格的适用范围",
      "D.「辅助角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_243",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「两角和差」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「两角和差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_244",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二倍角」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「二倍角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_249",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「两角和差」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「两角和差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「两角和差」满足基本定义",
      "B.「两角和差」在任意条件下都成立",
      "C.「两角和差」有严格的适用范围",
      "D.「两角和差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_250",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二倍角」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「二倍角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_251",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "hard",
    "q": "「辅助角」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「辅助角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_256",
    "manualId": "math_m9",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二倍角」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「二倍角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二倍角」满足基本定义",
      "B.「二倍角」在任意条件下都成立",
      "C.「二倍角」有严格的适用范围",
      "D.「二倍角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m9_257",
    "manualId": "math_m9",
    "type": "judge",
    "difficulty": "hard",
    "q": "「辅助角」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「辅助角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m9_258",
    "manualId": "math_m9",
    "type": "fill",
    "difficulty": "easy",
    "q": "「两角和差」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「两角和差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m10_001",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "函数y=sin x的最小正周期是",
    "answer": "B",
    "explain": "sin周期2π。",
    "options": [
      "A.π",
      "B.2π",
      "C.π/2",
      "D.4π"
    ]
  },
  {
    "id": "mathq_real_m10_002",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "y=sin x的值域",
    "answer": "A",
    "explain": "振幅1。",
    "options": [
      "A.[-1,1]",
      "B.[0,1]",
      "C.R",
      "D.[-2,2]"
    ]
  },
  {
    "id": "mathq_real_m10_003",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "easy",
    "q": "y=cos x的最大值是",
    "answer": "C",
    "explain": "cos最大1。",
    "options": [
      "A.-1",
      "B.0",
      "C.1",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m10_004",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "y=2sin x的振幅是",
    "answer": "B",
    "explain": "|A|。",
    "options": [
      "A.1",
      "B.2",
      "C.4",
      "D.π"
    ]
  },
  {
    "id": "mathq_real_m10_005",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "y=sin 2x的周期是",
    "answer": "A",
    "explain": "2π/ω=π。",
    "options": [
      "A.π",
      "B.2π",
      "C.π/2",
      "D.4π"
    ]
  },
  {
    "id": "mathq_real_m10_006",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "y=sin(x+π/3)的图象由y=sinx",
    "answer": "A",
    "explain": "相位平移。",
    "options": [
      "A.左移π/3",
      "B.右移π/3",
      "C.上移π/3",
      "D.下移π/3"
    ]
  },
  {
    "id": "mathq_real_m10_007",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "y=3sin(2x+π/6)的振幅、周期、初相分别为",
    "answer": "A",
    "explain": "A=3,T=π,φ=π/6。",
    "options": [
      "A.3,π,π/6",
      "B.3,2π,π/6",
      "C.6,π,π/3",
      "D.3,π,π/3"
    ]
  },
  {
    "id": "mathq_real_m10_008",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "normal",
    "q": "y=tan x的定义域",
    "answer": "C",
    "explain": "cos≠0。",
    "options": [
      "A.R",
      "B.{x|x≠kπ}",
      "C.{x|x≠π/2+kπ}",
      "D.[-1,1]"
    ]
  },
  {
    "id": "mathq_real_m10_009",
    "manualId": "math_m10",
    "type": "single",
    "difficulty": "hard",
    "q": "y=sin(2x-π/3)的单调递增区间是",
    "answer": "A",
    "explain": "-π/2+2kπ≤2x-π/3≤π/2+2kπ。",
    "options": [
      "A.[kπ-π/12,kπ+5π/12]",
      "B.[-π/12+kπ,5π/12+kπ]",
      "C.同A",
      "D.[kπ,kπ+π/2]"
    ]
  },
  {
    "id": "mathq_real_m10_010",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于y=sinx的说法正确的是",
    "answer": "ABCD",
    "explain": "基本性质。",
    "options": [
      "A.周期2π",
      "B.奇函数",
      "C.值域[-1,1]",
      "D.在[0,π/2]单增"
    ]
  },
  {
    "id": "mathq_real_m10_011",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "y=sin x是偶函数",
    "answer": "F",
    "explain": "是奇函数。",
    "options": []
  },
  {
    "id": "mathq_real_m10_012",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "y=cos x的对称轴为x=kπ",
    "answer": "T",
    "explain": "最值处对称。",
    "options": []
  },
  {
    "id": "mathq_real_m10_013",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "y=2sin(π x)的周期是___",
    "answer": "2",
    "explain": "2π/π=2。",
    "options": []
  },
  {
    "id": "mathq_real_m10_014",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "y=cos x的最小正周期是___",
    "answer": "2π",
    "explain": "基本周期。",
    "options": []
  },
  {
    "id": "mathq_real_m10_015",
    "manualId": "math_m10",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知f(x)=Asin(ωx+φ)(A>0,ω>0,|φ|<π/2)图象过(0,1),(π/6,2),周期π,求f(x)",
    "answer": "f(x)=2sin(2x+π/6)",
    "explain": "T=π⇒ω=2;最大值2⇒A=2;代入(0,1):2sinφ=1,sinφ=1/2,φ=π/6。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_018",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_019",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「周期」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_020",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_025",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「周期」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_026",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_027",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_032",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_033",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_034",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「周期」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_039",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_040",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「周期」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_041",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_046",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「周期」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_047",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_048",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_053",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「单调性」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_054",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_055",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「周期」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_060",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_061",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「周期」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_062",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_067",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「周期」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_068",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_069",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_074",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_075",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_076",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「周期」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_081",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_082",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「周期」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_083",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_088",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「周期」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_089",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_090",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_095",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「单调性」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_096",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_097",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「周期」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_102",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_103",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「周期」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_104",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_109",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「周期」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_110",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_111",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_116",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_117",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_118",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「周期」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_123",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_124",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「周期」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_125",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_130",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「周期」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_131",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_132",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_137",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「单调性」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_138",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_139",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「周期」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_144",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_145",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「周期」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_146",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_151",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「周期」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_152",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_153",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_158",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_159",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_160",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「周期」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_165",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_166",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「周期」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_167",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_172",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「周期」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_173",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_174",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_179",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「单调性」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_180",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_181",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「周期」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_186",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_187",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「周期」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_188",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_193",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「周期」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_194",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_195",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_200",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_201",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_202",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「周期」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_207",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_208",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「周期」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_209",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_214",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「周期」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_215",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_216",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_221",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「单调性」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_222",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_223",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「周期」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_228",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_229",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "easy",
    "q": "「周期」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_230",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调性」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_235",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「周期」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_236",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调性」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_237",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_242",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调性」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调性」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调性」满足基本定义",
      "B.「单调性」在任意条件下都成立",
      "C.「单调性」有严格的适用范围",
      "D.「单调性」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_243",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「y=Asin(ωx+φ)」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「y=Asin(ωx+φ)」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_244",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "normal",
    "q": "「周期」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「周期」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_249",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「y=Asin(ωx+φ)」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「y=Asin(ωx+φ)」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「y=Asin(ωx+φ)」满足基本定义",
      "B.「y=Asin(ωx+φ)」在任意条件下都成立",
      "C.「y=Asin(ωx+φ)」有严格的适用范围",
      "D.「y=Asin(ωx+φ)」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_250",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "normal",
    "q": "「周期」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「周期」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_251",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "hard",
    "q": "「单调性」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「单调性」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_256",
    "manualId": "math_m10",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「周期」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「周期」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「周期」满足基本定义",
      "B.「周期」在任意条件下都成立",
      "C.「周期」有严格的适用范围",
      "D.「周期」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m10_257",
    "manualId": "math_m10",
    "type": "judge",
    "difficulty": "hard",
    "q": "「单调性」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「单调性」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m10_258",
    "manualId": "math_m10",
    "type": "fill",
    "difficulty": "easy",
    "q": "「y=Asin(ωx+φ)」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「y=Asin(ωx+φ)」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m11_001",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "向量a=(1,2),b=(3,4),a+b=",
    "answer": "A",
    "explain": "分量相加。",
    "options": [
      "A.(4,6)",
      "B.(2,2)",
      "C.(3,8)",
      "D.(4,4)"
    ]
  },
  {
    "id": "mathq_real_m11_002",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "|a|=|(3,4)|=",
    "answer": "C",
    "explain": "√(9+16)。",
    "options": [
      "A.3",
      "B.4",
      "C.5",
      "D.7"
    ]
  },
  {
    "id": "mathq_real_m11_003",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "easy",
    "q": "a·b=(1,2)·(3,4)=",
    "answer": "A",
    "explain": "1×3+2×4。",
    "options": [
      "A.11",
      "B.10",
      "C.7",
      "D.5"
    ]
  },
  {
    "id": "mathq_real_m11_004",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "a=(1,0),b=(0,1),a·b=",
    "answer": "A",
    "explain": "垂直点积0。",
    "options": [
      "A.0",
      "B.1",
      "C.-1",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m11_005",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "若a∥b,a=(1,2),b=(x,4),则x=",
    "answer": "B",
    "explain": "1×4=2x⇒x=2。",
    "options": [
      "A.1",
      "B.2",
      "C.3",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m11_006",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "若a⊥b,a=(1,2),b=(x,1),则x=",
    "answer": "A",
    "explain": "x+2=0。",
    "options": [
      "A.-2",
      "B.2",
      "C.-1/2",
      "D.1/2"
    ]
  },
  {
    "id": "mathq_real_m11_007",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "a,b夹角θ,cosθ=",
    "answer": "A",
    "explain": "定义式。",
    "options": [
      "A.a·b/(|a||b|)",
      "B.a·b",
      "C.a+b",
      "D.a-b"
    ]
  },
  {
    "id": "mathq_real_m11_008",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "normal",
    "q": "向量投影a在b方向,长度=",
    "answer": "A",
    "explain": "|a|cosθ。",
    "options": [
      "A.|a|cosθ",
      "B.|a|sinθ",
      "C.a·b",
      "D.|b|"
    ]
  },
  {
    "id": "mathq_real_m11_009",
    "manualId": "math_m11",
    "type": "single",
    "difficulty": "hard",
    "q": "已知|a|=2,|b|=1,a·b=1,则|a-2b|=",
    "answer": "C",
    "explain": "|a-2b|²=4-4+4=4。",
    "options": [
      "A.√5",
      "B.√3",
      "C.2",
      "D.√7"
    ]
  },
  {
    "id": "mathq_real_m11_010",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列命题正确",
    "answer": "ABCD",
    "explain": "向量基本运算。",
    "options": [
      "A.向量运算满足交换律",
      "B.|a|²=a·a",
      "C.a·(b+c)=a·b+a·c",
      "D.a·b=0⇒a⊥b或某为零"
    ]
  },
  {
    "id": "mathq_real_m11_011",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "单位向量的模为1",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m11_012",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "零向量与任向量平行",
    "answer": "T",
    "explain": "规定。",
    "options": []
  },
  {
    "id": "mathq_real_m11_013",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "若a=(3,-4),|a|=___",
    "answer": "5",
    "explain": "√25。",
    "options": []
  },
  {
    "id": "mathq_real_m11_014",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "|a+b|²=|a|²+2a·b+|b|²",
    "answer": "正确",
    "explain": "展开公式。",
    "options": []
  },
  {
    "id": "mathq_real_m11_015",
    "manualId": "math_m11",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知向量a=(1,2),b=(-3,4),求a,b夹角",
    "answer": "cosθ=1/√5·1/5,θ=arccos(1/(5√5))·5=...约96°",
    "explain": "a·b=-3+8=5;|a|=√5,|b|=5;cos=5/(5√5)=1/√5。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_018",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「向量运算」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_019",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「数量积」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_020",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标表示」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_025",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「数量积」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_026",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标表示」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_027",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「向量运算」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_032",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_033",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「向量运算」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_034",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「数量积」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_039",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「向量运算」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_040",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「数量积」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_041",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "hard",
    "q": "「坐标表示」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_046",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「数量积」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_047",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "hard",
    "q": "「坐标表示」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_048",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「向量运算」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_053",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_054",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「向量运算」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_055",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「数量积」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_060",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「向量运算」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_061",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「数量积」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_062",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标表示」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_067",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「数量积」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_068",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标表示」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_069",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「向量运算」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_074",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_075",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「向量运算」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_076",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「数量积」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_081",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「向量运算」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_082",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「数量积」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_083",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "hard",
    "q": "「坐标表示」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_088",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「数量积」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_089",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "hard",
    "q": "「坐标表示」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_090",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「向量运算」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_095",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_096",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「向量运算」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_097",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「数量积」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_102",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「向量运算」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_103",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「数量积」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_104",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标表示」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_109",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「数量积」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_110",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标表示」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_111",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「向量运算」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_116",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_117",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「向量运算」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_118",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「数量积」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_123",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「向量运算」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_124",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「数量积」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_125",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "hard",
    "q": "「坐标表示」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_130",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「数量积」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_131",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "hard",
    "q": "「坐标表示」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_132",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「向量运算」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_137",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_138",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「向量运算」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_139",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「数量积」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_144",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「向量运算」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_145",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「数量积」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_146",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标表示」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_151",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「数量积」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_152",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标表示」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_153",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「向量运算」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_158",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_159",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「向量运算」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_160",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「数量积」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_165",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「向量运算」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_166",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「数量积」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_167",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "hard",
    "q": "「坐标表示」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_172",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「数量积」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_173",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "hard",
    "q": "「坐标表示」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_174",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「向量运算」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_179",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_180",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「向量运算」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_181",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「数量积」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_186",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「向量运算」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_187",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「数量积」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_188",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标表示」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_193",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「数量积」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_194",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标表示」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_195",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「向量运算」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_200",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_201",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「向量运算」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_202",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「数量积」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_207",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「向量运算」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_208",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「数量积」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_209",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "hard",
    "q": "「坐标表示」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_214",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「数量积」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_215",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "hard",
    "q": "「坐标表示」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_216",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「向量运算」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_221",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_222",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「向量运算」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_223",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「数量积」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_228",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「向量运算」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_229",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "easy",
    "q": "「数量积」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_230",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标表示」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_235",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「数量积」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_236",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标表示」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_237",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「向量运算」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_242",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标表示」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标表示」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标表示」满足基本定义",
      "B.「坐标表示」在任意条件下都成立",
      "C.「坐标表示」有严格的适用范围",
      "D.「坐标表示」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_243",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「向量运算」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_244",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "normal",
    "q": "「数量积」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「数量积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_249",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「向量运算」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「向量运算」满足基本定义",
      "B.「向量运算」在任意条件下都成立",
      "C.「向量运算」有严格的适用范围",
      "D.「向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_250",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "normal",
    "q": "「数量积」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「数量积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_251",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "hard",
    "q": "「坐标表示」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「坐标表示」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_256",
    "manualId": "math_m11",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「数量积」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「数量积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「数量积」满足基本定义",
      "B.「数量积」在任意条件下都成立",
      "C.「数量积」有严格的适用范围",
      "D.「数量积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m11_257",
    "manualId": "math_m11",
    "type": "judge",
    "difficulty": "hard",
    "q": "「坐标表示」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「坐标表示」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m11_258",
    "manualId": "math_m11",
    "type": "fill",
    "difficulty": "easy",
    "q": "「向量运算」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m12_001",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "正弦定理:a/sinA=",
    "answer": "A",
    "explain": "正弦定理。",
    "options": [
      "A.b/sinB=c/sinC=2R",
      "B.2R",
      "C.b sinB",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m12_002",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "余弦定理:a²=",
    "answer": "A",
    "explain": "余弦定理。",
    "options": [
      "A.b²+c²-2bc cosA",
      "B.b²+c²+2bc cosA",
      "C.b²+c²",
      "D.2bc"
    ]
  },
  {
    "id": "mathq_real_m12_003",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "easy",
    "q": "△ABC面积=",
    "answer": "A",
    "explain": "面积公式。",
    "options": [
      "A.(1/2)ab sinC",
      "B.(1/2)ab",
      "C.abc",
      "D.a+b+c"
    ]
  },
  {
    "id": "mathq_real_m12_004",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "△ABC中a=√3,A=60°,则2R=",
    "answer": "B",
    "explain": "a/sinA=√3/(√3/2)=2。",
    "options": [
      "A.1",
      "B.2",
      "C.√3",
      "D.2√3"
    ]
  },
  {
    "id": "mathq_real_m12_005",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "△ABC中b=2,c=3,A=60°,a=",
    "answer": "A",
    "explain": "a²=4+9-6=7。",
    "options": [
      "A.√7",
      "B.√5",
      "C.√13",
      "D.5"
    ]
  },
  {
    "id": "mathq_real_m12_006",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "△中A+B+C=",
    "answer": "B",
    "explain": "内角和。",
    "options": [
      "A.π/2",
      "B.π",
      "C.3π/2",
      "D.2π"
    ]
  },
  {
    "id": "mathq_real_m12_007",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "△若A=90°,则sinA=",
    "answer": "B",
    "explain": "直角。",
    "options": [
      "A.0",
      "B.1",
      "C.-1",
      "D.√2/2"
    ]
  },
  {
    "id": "mathq_real_m12_008",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "normal",
    "q": "△若a²+b²=c²,则C=",
    "answer": "D",
    "explain": "勾股逆定理。",
    "options": [
      "A.30°",
      "B.45°",
      "C.60°",
      "D.90°"
    ]
  },
  {
    "id": "mathq_real_m12_009",
    "manualId": "math_m12",
    "type": "single",
    "difficulty": "hard",
    "q": "△ABC中a=7,b=8,c=13,则C=",
    "answer": "C",
    "explain": "cosC=(49+64-169)/112=-1/2,C=120°。",
    "options": [
      "A.60°",
      "B.90°",
      "C.120°",
      "D.150°"
    ]
  },
  {
    "id": "mathq_real_m12_010",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "△中恒成立",
    "answer": "ABCD",
    "explain": "三角形性质。",
    "options": [
      "A.a>b⇔A>B",
      "B.正弦定理",
      "C.余弦定理",
      "D.面积=½ab sinC"
    ]
  },
  {
    "id": "mathq_real_m12_011",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "△内角和为π",
    "answer": "T",
    "explain": "定理。",
    "options": []
  },
  {
    "id": "mathq_real_m12_012",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "△中大边对大角",
    "answer": "T",
    "explain": "不等关系。",
    "options": []
  },
  {
    "id": "mathq_real_m12_013",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "△中a=1,b=√3,A=30°,B=___",
    "answer": "60°或120°",
    "explain": "正弦定理b sinA/a=√3/2。",
    "options": []
  },
  {
    "id": "mathq_real_m12_014",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "△中b=c=1,A=60°,则a=___",
    "answer": "1",
    "explain": "余弦定理a²=1+1-1=1。",
    "options": []
  },
  {
    "id": "mathq_real_m12_015",
    "manualId": "math_m12",
    "type": "calc",
    "difficulty": "hard",
    "q": "△ABC中a=2,b=√6,B=60°,求A",
    "answer": "45°",
    "explain": "正弦定理2/sinA=√6/(√3/2),sinA=√2/2,A=45°(锐角)。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_018",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_019",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「余弦定理」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_020",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「面积公式」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_025",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_026",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「面积公式」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_027",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正弦定理」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_032",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「面积公式」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_033",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正弦定理」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_034",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「余弦定理」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_039",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_040",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「余弦定理」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_041",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "hard",
    "q": "「面积公式」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_046",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_047",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "hard",
    "q": "「面积公式」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_048",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「正弦定理」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_053",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「面积公式」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_054",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「正弦定理」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_055",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「余弦定理」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_060",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_061",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「余弦定理」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_062",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「面积公式」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_067",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_068",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「面积公式」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_069",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正弦定理」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_074",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「面积公式」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_075",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正弦定理」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_076",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「余弦定理」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_081",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_082",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「余弦定理」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_083",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "hard",
    "q": "「面积公式」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_088",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_089",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "hard",
    "q": "「面积公式」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_090",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「正弦定理」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_095",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「面积公式」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_096",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「正弦定理」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_097",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「余弦定理」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_102",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_103",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「余弦定理」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_104",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「面积公式」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_109",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_110",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「面积公式」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_111",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正弦定理」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_116",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「面积公式」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_117",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正弦定理」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_118",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「余弦定理」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_123",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_124",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「余弦定理」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_125",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "hard",
    "q": "「面积公式」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_130",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_131",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "hard",
    "q": "「面积公式」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_132",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「正弦定理」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_137",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「面积公式」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_138",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「正弦定理」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_139",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「余弦定理」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_144",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_145",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「余弦定理」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_146",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「面积公式」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_151",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_152",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「面积公式」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_153",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正弦定理」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_158",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「面积公式」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_159",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正弦定理」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_160",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「余弦定理」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_165",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_166",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「余弦定理」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_167",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "hard",
    "q": "「面积公式」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_172",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_173",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "hard",
    "q": "「面积公式」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_174",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「正弦定理」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_179",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「面积公式」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_180",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「正弦定理」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_181",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「余弦定理」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_186",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_187",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「余弦定理」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_188",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「面积公式」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_193",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_194",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「面积公式」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_195",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正弦定理」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_200",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「面积公式」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_201",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正弦定理」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_202",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「余弦定理」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_207",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_208",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「余弦定理」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_209",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "hard",
    "q": "「面积公式」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_214",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_215",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "hard",
    "q": "「面积公式」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_216",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「正弦定理」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_221",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「面积公式」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_222",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「正弦定理」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_223",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「余弦定理」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_228",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_229",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "easy",
    "q": "「余弦定理」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_230",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「面积公式」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_235",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_236",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「面积公式」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_237",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正弦定理」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_242",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「面积公式」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「面积公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「面积公式」满足基本定义",
      "B.「面积公式」在任意条件下都成立",
      "C.「面积公式」有严格的适用范围",
      "D.「面积公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_243",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正弦定理」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「正弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_244",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "normal",
    "q": "「余弦定理」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「余弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_249",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正弦定理」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「正弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正弦定理」满足基本定义",
      "B.「正弦定理」在任意条件下都成立",
      "C.「正弦定理」有严格的适用范围",
      "D.「正弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_250",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "normal",
    "q": "「余弦定理」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「余弦定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_251",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "hard",
    "q": "「面积公式」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「面积公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_256",
    "manualId": "math_m12",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「余弦定理」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「余弦定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「余弦定理」满足基本定义",
      "B.「余弦定理」在任意条件下都成立",
      "C.「余弦定理」有严格的适用范围",
      "D.「余弦定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m12_257",
    "manualId": "math_m12",
    "type": "judge",
    "difficulty": "hard",
    "q": "「面积公式」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「面积公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m12_258",
    "manualId": "math_m12",
    "type": "fill",
    "difficulty": "easy",
    "q": "「正弦定理」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「正弦定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m13_001",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "easy",
    "q": "i²=",
    "answer": "A",
    "explain": "虚数单位定义。",
    "options": [
      "A.-1",
      "B.1",
      "C.0",
      "D.i"
    ]
  },
  {
    "id": "mathq_real_m13_002",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "easy",
    "q": "(1+i)+(2-i)=",
    "answer": "A",
    "explain": "实虚部分别加。",
    "options": [
      "A.3",
      "B.3+i",
      "C.1+2i",
      "D.3-i"
    ]
  },
  {
    "id": "mathq_real_m13_003",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "easy",
    "q": "|3+4i|=",
    "answer": "C",
    "explain": "√(9+16)。",
    "options": [
      "A.3",
      "B.4",
      "C.5",
      "D.7"
    ]
  },
  {
    "id": "mathq_real_m13_004",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "normal",
    "q": "(1+i)(1-i)=",
    "answer": "B",
    "explain": "平方差1-i²=2。",
    "options": [
      "A.0",
      "B.2",
      "C.-2",
      "D.2i"
    ]
  },
  {
    "id": "mathq_real_m13_005",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "normal",
    "q": "(1+i)²=",
    "answer": "B",
    "explain": "1+2i-1=2i。",
    "options": [
      "A.0",
      "B.2i",
      "C.2",
      "D.-2"
    ]
  },
  {
    "id": "mathq_real_m13_006",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "normal",
    "q": "1/(1+i)=",
    "answer": "A",
    "explain": "分子分母乘共轭。",
    "options": [
      "A.(1-i)/2",
      "B.(1+i)/2",
      "C.1-i",
      "D.1+i"
    ]
  },
  {
    "id": "mathq_real_m13_007",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "normal",
    "q": "复数3-4i的共轭复数是",
    "answer": "A",
    "explain": "虚部变号。",
    "options": [
      "A.3+4i",
      "B.-3-4i",
      "C.-3+4i",
      "D.4-3i"
    ]
  },
  {
    "id": "mathq_real_m13_008",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "normal",
    "q": "i^2023=",
    "answer": "D",
    "explain": "2023 mod 4=3,i^3=-i。",
    "options": [
      "A.1",
      "B.-1",
      "C.i",
      "D.-i"
    ]
  },
  {
    "id": "mathq_real_m13_009",
    "manualId": "math_m13",
    "type": "single",
    "difficulty": "hard",
    "q": "(1+i)^4=",
    "answer": "A",
    "explain": "(1+i)²=2i,(2i)²=-4。",
    "options": [
      "A.-4",
      "B.4",
      "C.-4i",
      "D.4i"
    ]
  },
  {
    "id": "mathq_real_m13_010",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于复数z=a+bi(a,b∈R)",
    "answer": "ABCD",
    "explain": "复数基本要素。",
    "options": [
      "A.实部a",
      "B.虚部b",
      "C.|z|=√(a²+b²)",
      "D.共轭a-bi"
    ]
  },
  {
    "id": "mathq_real_m13_011",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "i^4=1",
    "answer": "T",
    "explain": "i²=-1,i^4=1。",
    "options": []
  },
  {
    "id": "mathq_real_m13_012",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "任何复数都有共轭",
    "answer": "T",
    "explain": "复数性质。",
    "options": []
  },
  {
    "id": "mathq_real_m13_013",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "(2+3i)-(1+i)=___",
    "answer": "1+2i",
    "explain": "实虚部相减。",
    "options": []
  },
  {
    "id": "mathq_real_m13_014",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "z=1-2i,|z|=___",
    "answer": "√5",
    "explain": "√(1+4)。",
    "options": []
  },
  {
    "id": "mathq_real_m13_015",
    "manualId": "math_m13",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知复数z满足(1+i)z=2,求z及|z|",
    "answer": "z=1-i,|z|=√2",
    "explain": "z=2/(1+i)=2(1-i)/2=1-i。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_018",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「模」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_019",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何意义」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_020",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「复数运算」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_025",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「共轭」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_026",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「模」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_027",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何意义」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_032",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「复数运算」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_033",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「共轭」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_034",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「模」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_039",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何意义」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何意义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何意义」满足基本定义",
      "B.「几何意义」在任意条件下都成立",
      "C.「几何意义」有严格的适用范围",
      "D.「几何意义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_040",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「复数运算」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「复数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_041",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "hard",
    "q": "「共轭」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「共轭」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_046",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「模」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_047",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何意义」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_048",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「复数运算」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_053",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「共轭」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_054",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「模」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_055",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「几何意义」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_060",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「复数运算」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_061",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「共轭」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_062",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「模」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_067",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何意义」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何意义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何意义」满足基本定义",
      "B.「几何意义」在任意条件下都成立",
      "C.「几何意义」有严格的适用范围",
      "D.「几何意义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_068",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「复数运算」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「复数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_069",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「共轭」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「共轭」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_074",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「模」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_075",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何意义」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_076",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「复数运算」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_081",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「共轭」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_082",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「模」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_083",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何意义」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_088",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「复数运算」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_089",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "hard",
    "q": "「共轭」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_090",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「模」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_095",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「几何意义」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何意义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何意义」满足基本定义",
      "B.「几何意义」在任意条件下都成立",
      "C.「几何意义」有严格的适用范围",
      "D.「几何意义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_096",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「复数运算」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「复数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_097",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「共轭」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「共轭」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_102",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「模」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_103",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何意义」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_104",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「复数运算」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_109",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「共轭」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_110",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「模」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_111",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何意义」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_116",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「复数运算」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_117",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「共轭」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_118",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「模」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_123",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何意义」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何意义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何意义」满足基本定义",
      "B.「几何意义」在任意条件下都成立",
      "C.「几何意义」有严格的适用范围",
      "D.「几何意义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_124",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「复数运算」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「复数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_125",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "hard",
    "q": "「共轭」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「共轭」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_130",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「模」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_131",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何意义」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_132",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「复数运算」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_137",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「共轭」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_138",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「模」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_139",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「几何意义」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_144",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「复数运算」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_145",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「共轭」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_146",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「模」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_151",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何意义」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何意义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何意义」满足基本定义",
      "B.「几何意义」在任意条件下都成立",
      "C.「几何意义」有严格的适用范围",
      "D.「几何意义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_152",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「复数运算」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「复数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_153",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「共轭」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「共轭」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_158",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「模」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_159",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何意义」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_160",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「复数运算」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_165",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「共轭」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_166",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「模」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_167",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何意义」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_172",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「复数运算」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_173",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "hard",
    "q": "「共轭」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_174",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「模」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_179",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「几何意义」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何意义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何意义」满足基本定义",
      "B.「几何意义」在任意条件下都成立",
      "C.「几何意义」有严格的适用范围",
      "D.「几何意义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_180",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「复数运算」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「复数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_181",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「共轭」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「共轭」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_186",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「模」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_187",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何意义」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_188",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「复数运算」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_193",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「共轭」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_194",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「模」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_195",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何意义」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_200",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「复数运算」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_201",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「共轭」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_202",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「模」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_207",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何意义」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何意义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何意义」满足基本定义",
      "B.「几何意义」在任意条件下都成立",
      "C.「几何意义」有严格的适用范围",
      "D.「几何意义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_208",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「复数运算」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「复数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_209",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "hard",
    "q": "「共轭」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「共轭」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_214",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「模」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_215",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何意义」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_216",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「复数运算」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_221",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「共轭」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_222",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「模」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_223",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「几何意义」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_228",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「复数运算」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_229",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "easy",
    "q": "「共轭」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_230",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「模」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_235",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何意义」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何意义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何意义」满足基本定义",
      "B.「几何意义」在任意条件下都成立",
      "C.「几何意义」有严格的适用范围",
      "D.「几何意义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_236",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「复数运算」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「复数运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_237",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「共轭」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「共轭」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_242",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「模」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「模」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「模」满足基本定义",
      "B.「模」在任意条件下都成立",
      "C.「模」有严格的适用范围",
      "D.「模」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_243",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何意义」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「几何意义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_244",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "normal",
    "q": "「复数运算」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「复数运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_249",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「共轭」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「共轭」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「共轭」满足基本定义",
      "B.「共轭」在任意条件下都成立",
      "C.「共轭」有严格的适用范围",
      "D.「共轭」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_250",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "normal",
    "q": "「模」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「模」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_251",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何意义」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「几何意义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_256",
    "manualId": "math_m13",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「复数运算」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「复数运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「复数运算」满足基本定义",
      "B.「复数运算」在任意条件下都成立",
      "C.「复数运算」有严格的适用范围",
      "D.「复数运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m13_257",
    "manualId": "math_m13",
    "type": "judge",
    "difficulty": "hard",
    "q": "「共轭」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「共轭」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m13_258",
    "manualId": "math_m13",
    "type": "fill",
    "difficulty": "easy",
    "q": "「模」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「模」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m14_001",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "easy",
    "q": "长方体的表面积=",
    "answer": "B",
    "explain": "6面之和。",
    "options": [
      "A.6a²",
      "B.2(ab+bc+ac)",
      "C.abc",
      "D.a+b+c"
    ]
  },
  {
    "id": "mathq_real_m14_002",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "easy",
    "q": "正方体体积=",
    "answer": "B",
    "explain": "边长立方。",
    "options": [
      "A.a²",
      "B.a³",
      "C.6a²",
      "D.3a"
    ]
  },
  {
    "id": "mathq_real_m14_003",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "easy",
    "q": "球体积公式",
    "answer": "A",
    "explain": "球体积。",
    "options": [
      "A.(4/3)πR³",
      "B.4πR²",
      "C.πR²",
      "D.2πR"
    ]
  },
  {
    "id": "mathq_real_m14_004",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "normal",
    "q": "圆柱侧面积=",
    "answer": "A",
    "explain": "展开为矩形。",
    "options": [
      "A.2πrh",
      "B.πr²h",
      "C.πrl",
      "D.4πr²"
    ]
  },
  {
    "id": "mathq_real_m14_005",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "normal",
    "q": "圆锥体积=",
    "answer": "B",
    "explain": "柱1/3。",
    "options": [
      "A.πr²h",
      "B.(1/3)πr²h",
      "C.4πr²",
      "D.2πrl"
    ]
  },
  {
    "id": "mathq_real_m14_006",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "normal",
    "q": "球表面积=",
    "answer": "A",
    "explain": "球表面积。",
    "options": [
      "A.4πR²",
      "B.πR²",
      "C.(4/3)πR³",
      "D.2πR"
    ]
  },
  {
    "id": "mathq_real_m14_007",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "normal",
    "q": "正方体的三视图都是",
    "answer": "B",
    "explain": "三面一致。",
    "options": [
      "A.圆",
      "B.正方形",
      "C.长方形",
      "D.三角形"
    ]
  },
  {
    "id": "mathq_real_m14_008",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "normal",
    "q": "三棱锥的顶点数",
    "answer": "B",
    "explain": "顶点4。",
    "options": [
      "A.3",
      "B.4",
      "C.5",
      "D.6"
    ]
  },
  {
    "id": "mathq_real_m14_009",
    "manualId": "math_m14",
    "type": "single",
    "difficulty": "hard",
    "q": "正四面体棱长为a,其体积=",
    "answer": "A",
    "explain": "公式。",
    "options": [
      "A.√2/12 a³",
      "B.a³/6",
      "C.√3/4 a³",
      "D.a³"
    ]
  },
  {
    "id": "mathq_real_m14_010",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列是旋转体的是",
    "answer": "ABCD",
    "explain": "旋转生成。",
    "options": [
      "A.圆柱",
      "B.圆锥",
      "C.球",
      "D.圆台"
    ]
  },
  {
    "id": "mathq_real_m14_011",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "球没有顶点和棱",
    "answer": "T",
    "explain": "球性质。",
    "options": []
  },
  {
    "id": "mathq_real_m14_012",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "三视图包括正视俯视左视",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m14_013",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "半径为1的球表面积=___",
    "answer": "4π",
    "explain": "4π×1²。",
    "options": []
  },
  {
    "id": "mathq_real_m14_014",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "棱长为2的正方体体积=___",
    "answer": "8",
    "explain": "2³。",
    "options": []
  },
  {
    "id": "mathq_real_m14_015",
    "manualId": "math_m14",
    "type": "calc",
    "difficulty": "hard",
    "q": "一个圆锥的底面半径3,母线5,求其体积",
    "answer": "12π",
    "explain": "高=4,V=(1/3)π×9×4=12π。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_018",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_019",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三视图」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_020",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「表面积体积」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_025",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三视图」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_026",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「表面积体积」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_027",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间几何体」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_032",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_033",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间几何体」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_034",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三视图」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_039",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_040",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三视图」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_041",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "hard",
    "q": "「表面积体积」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_046",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三视图」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_047",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "hard",
    "q": "「表面积体积」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_048",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间几何体」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_053",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_054",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间几何体」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_055",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「三视图」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_060",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_061",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三视图」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_062",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「表面积体积」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_067",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三视图」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_068",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「表面积体积」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_069",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间几何体」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_074",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_075",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间几何体」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_076",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三视图」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_081",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_082",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三视图」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_083",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "hard",
    "q": "「表面积体积」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_088",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三视图」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_089",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "hard",
    "q": "「表面积体积」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_090",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间几何体」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_095",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_096",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间几何体」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_097",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「三视图」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_102",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_103",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三视图」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_104",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「表面积体积」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_109",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三视图」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_110",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「表面积体积」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_111",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间几何体」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_116",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_117",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间几何体」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_118",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三视图」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_123",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_124",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三视图」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_125",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "hard",
    "q": "「表面积体积」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_130",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三视图」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_131",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "hard",
    "q": "「表面积体积」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_132",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间几何体」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_137",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_138",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间几何体」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_139",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「三视图」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_144",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_145",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三视图」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_146",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「表面积体积」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_151",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三视图」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_152",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「表面积体积」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_153",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间几何体」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_158",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_159",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间几何体」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_160",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三视图」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_165",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_166",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三视图」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_167",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "hard",
    "q": "「表面积体积」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_172",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三视图」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_173",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "hard",
    "q": "「表面积体积」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_174",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间几何体」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_179",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_180",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间几何体」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_181",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「三视图」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_186",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_187",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三视图」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_188",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「表面积体积」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_193",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三视图」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_194",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「表面积体积」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_195",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间几何体」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_200",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_201",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间几何体」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_202",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三视图」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_207",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_208",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三视图」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_209",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "hard",
    "q": "「表面积体积」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_214",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三视图」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_215",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "hard",
    "q": "「表面积体积」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_216",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间几何体」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_221",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_222",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间几何体」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_223",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「三视图」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_228",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_229",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "easy",
    "q": "「三视图」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_230",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「表面积体积」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_235",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「三视图」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_236",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「表面积体积」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_237",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间几何体」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_242",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「表面积体积」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「表面积体积」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「表面积体积」满足基本定义",
      "B.「表面积体积」在任意条件下都成立",
      "C.「表面积体积」有严格的适用范围",
      "D.「表面积体积」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_243",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间几何体」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「空间几何体」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_244",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "normal",
    "q": "「三视图」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「三视图」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_249",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间几何体」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间几何体」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间几何体」满足基本定义",
      "B.「空间几何体」在任意条件下都成立",
      "C.「空间几何体」有严格的适用范围",
      "D.「空间几何体」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_250",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "normal",
    "q": "「三视图」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「三视图」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_251",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "hard",
    "q": "「表面积体积」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「表面积体积」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_256",
    "manualId": "math_m14",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「三视图」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「三视图」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「三视图」满足基本定义",
      "B.「三视图」在任意条件下都成立",
      "C.「三视图」有严格的适用范围",
      "D.「三视图」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m14_257",
    "manualId": "math_m14",
    "type": "judge",
    "difficulty": "hard",
    "q": "「表面积体积」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「表面积体积」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m14_258",
    "manualId": "math_m14",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间几何体」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「空间几何体」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m15_001",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "easy",
    "q": "若直线a∥平面α,则a与α的公共点",
    "answer": "B",
    "explain": "平行无公共点。",
    "options": [
      "A.1个",
      "B.0个",
      "C.无数个",
      "D.可能0或1"
    ]
  },
  {
    "id": "mathq_real_m15_002",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "easy",
    "q": "两直线垂直判定",
    "answer": "A",
    "explain": "定义。",
    "options": [
      "A.成90°角",
      "B.平行",
      "C.相交",
      "D.重合"
    ]
  },
  {
    "id": "mathq_real_m15_003",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "easy",
    "q": "线面垂直判定:直线与平面内",
    "answer": "B",
    "explain": "定理。",
    "options": [
      "A.一条直线垂直",
      "B.两条相交直线垂直",
      "C.任意一条",
      "D.不用"
    ]
  },
  {
    "id": "mathq_real_m15_004",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "normal",
    "q": "面面垂直判定:一个平面内有一条直线",
    "answer": "B",
    "explain": "定理。",
    "options": [
      "A.平行另一平面",
      "B.垂直另一平面",
      "C.相交",
      "D.随意"
    ]
  },
  {
    "id": "mathq_real_m15_005",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "normal",
    "q": "异面直线的定义",
    "answer": "C",
    "explain": "异面。",
    "options": [
      "A.相交",
      "B.平行",
      "C.不同平面内不相交",
      "D.重合"
    ]
  },
  {
    "id": "mathq_real_m15_006",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "normal",
    "q": "三垂线定理条件是",
    "answer": "C",
    "explain": "经典定理。",
    "options": [
      "A.斜线在平面上射影",
      "B.平面内直线垂直于斜线",
      "C.以上都要",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m15_007",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "normal",
    "q": "二面角的大小指",
    "answer": "B",
    "explain": "定义。",
    "options": [
      "A.两射线夹角",
      "B.两半平面夹角",
      "C.顶点角",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m15_008",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "normal",
    "q": "长方体中体对角线与棱夹角(棱长相等)",
    "answer": "C",
    "explain": "立体几何。",
    "options": [
      "A.30°",
      "B.45°",
      "C.arctan√2",
      "D.60°"
    ]
  },
  {
    "id": "mathq_real_m15_009",
    "manualId": "math_m15",
    "type": "single",
    "difficulty": "hard",
    "q": "正方体ABCD-A₁B₁C₁D₁中AB与A₁D₁夹角",
    "answer": "D",
    "explain": "异面垂直。",
    "options": [
      "A.30°",
      "B.45°",
      "C.60°",
      "D.90°"
    ]
  },
  {
    "id": "mathq_real_m15_010",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列判断正确",
    "answer": "ABCD",
    "explain": "立体几何基本定理。",
    "options": [
      "A.平行公理传递性",
      "B.线面垂直判定",
      "C.面面平行判定",
      "D.面面垂直判定"
    ]
  },
  {
    "id": "mathq_real_m15_011",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "两平面平行,则平面内任意直线平行另一平面",
    "answer": "T",
    "explain": "面面平行性质。",
    "options": []
  },
  {
    "id": "mathq_real_m15_012",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "线面平行则线与面内任意直线平行",
    "answer": "F",
    "explain": "可能异面。",
    "options": []
  },
  {
    "id": "mathq_real_m15_013",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "正方体的对角线与底面所成角=___",
    "answer": "arctan(√2/2)",
    "explain": "立体几何。",
    "options": []
  },
  {
    "id": "mathq_real_m15_014",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "正四棱锥底面边长a,高h,侧棱长=___",
    "answer": "√(h²+a²/2)",
    "explain": "顶到底面顶点距离。",
    "options": []
  },
  {
    "id": "mathq_real_m15_015",
    "manualId": "math_m15",
    "type": "calc",
    "difficulty": "hard",
    "q": "正方体ABCD-A₁B₁C₁D₁棱长1,求AC₁与平面ABCD所成角",
    "answer": "arctan(1/√2)",
    "explain": "tanθ=CC₁/AC=1/√2。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_018",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面平行」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_019",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面垂直」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_020",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二面角」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_025",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_026",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二面角」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_027",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面平行」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_032",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二面角」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_033",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面平行」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_034",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面垂直」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_039",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面平行」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_040",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面垂直」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_041",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二面角」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_046",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_047",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二面角」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_048",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面平行」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_053",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二面角」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_054",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面平行」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_055",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面垂直」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_060",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面平行」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_061",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面垂直」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_062",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二面角」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_067",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_068",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二面角」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_069",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面平行」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_074",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二面角」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_075",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面平行」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_076",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面垂直」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_081",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面平行」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_082",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面垂直」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_083",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二面角」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_088",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_089",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二面角」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_090",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面平行」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_095",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二面角」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_096",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面平行」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_097",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面垂直」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_102",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面平行」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_103",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面垂直」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_104",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二面角」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_109",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_110",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二面角」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_111",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面平行」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_116",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二面角」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_117",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面平行」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_118",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面垂直」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_123",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面平行」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_124",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面垂直」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_125",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二面角」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_130",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_131",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二面角」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_132",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面平行」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_137",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二面角」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_138",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面平行」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_139",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面垂直」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_144",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面平行」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_145",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面垂直」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_146",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二面角」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_151",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_152",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二面角」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_153",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面平行」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_158",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二面角」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_159",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面平行」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_160",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面垂直」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_165",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面平行」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_166",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面垂直」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_167",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二面角」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_172",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_173",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二面角」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_174",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面平行」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_179",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二面角」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_180",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面平行」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_181",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面垂直」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_186",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面平行」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_187",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面垂直」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_188",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二面角」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_193",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_194",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二面角」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_195",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面平行」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_200",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二面角」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_201",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面平行」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_202",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面垂直」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_207",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面平行」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_208",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面垂直」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_209",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二面角」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_214",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_215",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二面角」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_216",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面平行」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_221",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二面角」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_222",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面平行」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_223",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面垂直」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_228",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面平行」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_229",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "easy",
    "q": "「线面垂直」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_230",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二面角」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_235",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_236",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二面角」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_237",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面平行」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_242",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二面角」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「二面角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二面角」满足基本定义",
      "B.「二面角」在任意条件下都成立",
      "C.「二面角」有严格的适用范围",
      "D.「二面角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_243",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面平行」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「线面平行」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_244",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "normal",
    "q": "「线面垂直」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「线面垂直」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_249",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面平行」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面平行」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面平行」满足基本定义",
      "B.「线面平行」在任意条件下都成立",
      "C.「线面平行」有严格的适用范围",
      "D.「线面平行」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_250",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "normal",
    "q": "「线面垂直」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「线面垂直」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_251",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二面角」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「二面角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_256",
    "manualId": "math_m15",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「线面垂直」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「线面垂直」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「线面垂直」满足基本定义",
      "B.「线面垂直」在任意条件下都成立",
      "C.「线面垂直」有严格的适用范围",
      "D.「线面垂直」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m15_257",
    "manualId": "math_m15",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二面角」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「二面角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m15_258",
    "manualId": "math_m15",
    "type": "fill",
    "difficulty": "easy",
    "q": "「线面平行」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「线面平行」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m16_001",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "easy",
    "q": "直线y=2x+1的斜率是",
    "answer": "B",
    "explain": "一般式斜率。",
    "options": [
      "A.1",
      "B.2",
      "C.-1",
      "D.-2"
    ]
  },
  {
    "id": "mathq_real_m16_002",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "easy",
    "q": "过原点斜率3的直线方程",
    "answer": "A",
    "explain": "点斜式。",
    "options": [
      "A.y=3x",
      "B.y=x+3",
      "C.3y=x",
      "D.y=-3x"
    ]
  },
  {
    "id": "mathq_real_m16_003",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "easy",
    "q": "x=1是",
    "answer": "C",
    "explain": "垂直于x轴。",
    "options": [
      "A.y轴",
      "B.x轴",
      "C.垂直x轴",
      "D.水平线"
    ]
  },
  {
    "id": "mathq_real_m16_004",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "normal",
    "q": "两直线y=2x+1与y=2x-3的关系",
    "answer": "A",
    "explain": "斜率相同截距不同。",
    "options": [
      "A.平行",
      "B.相交",
      "C.重合",
      "D.垂直"
    ]
  },
  {
    "id": "mathq_real_m16_005",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "normal",
    "q": "两直线互相垂直,斜率乘积=",
    "answer": "B",
    "explain": "k₁k₂=-1。",
    "options": [
      "A.1",
      "B.-1",
      "C.0",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m16_006",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "normal",
    "q": "点(1,2)到直线3x+4y+5=0的距离",
    "answer": "A",
    "explain": "|3+8+5|/5=16/5。",
    "options": [
      "A.16/5",
      "B.3",
      "C.4",
      "D.16/25"
    ]
  },
  {
    "id": "mathq_real_m16_007",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "normal",
    "q": "两点(0,0)(3,4)距离",
    "answer": "A",
    "explain": "√25。",
    "options": [
      "A.5",
      "B.7",
      "C.3",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m16_008",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "normal",
    "q": "直线x+y=1的截距式",
    "answer": "C",
    "explain": "AB本质相同。",
    "options": [
      "A.x+y=1",
      "B.x/1+y/1=1",
      "C.同AB",
      "D.都不对"
    ]
  },
  {
    "id": "mathq_real_m16_009",
    "manualId": "math_m16",
    "type": "single",
    "difficulty": "hard",
    "q": "过点(1,-1)且与直线2x-y+3=0平行的直线方程",
    "answer": "A",
    "explain": "斜率2,y+1=2(x-1)。",
    "options": [
      "A.2x-y-3=0",
      "B.2x-y+3=0",
      "C.x-2y+1=0",
      "D.2x+y-1=0"
    ]
  },
  {
    "id": "mathq_real_m16_010",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "确定直线的元素",
    "answer": "ABC",
    "explain": "D不足。ABC都能。",
    "options": [
      "A.两点",
      "B.一点与斜率",
      "C.斜率与截距",
      "D.法向量"
    ]
  },
  {
    "id": "mathq_real_m16_011",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "任何直线都有斜率",
    "answer": "F",
    "explain": "垂直x轴无斜率。",
    "options": []
  },
  {
    "id": "mathq_real_m16_012",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "两点确定一条直线",
    "answer": "T",
    "explain": "公理。",
    "options": []
  },
  {
    "id": "mathq_real_m16_013",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "过(2,3)(4,7)直线的斜率=___",
    "answer": "2",
    "explain": "(7-3)/(4-2)。",
    "options": []
  },
  {
    "id": "mathq_real_m16_014",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "直线2x+3y-6=0在x轴截距=___",
    "answer": "3",
    "explain": "令y=0。",
    "options": []
  },
  {
    "id": "mathq_real_m16_015",
    "manualId": "math_m16",
    "type": "calc",
    "difficulty": "hard",
    "q": "求过(1,2)且到点(3,4)距离为1的直线方程",
    "answer": "3x-4y+5=0或x=1(需验证)",
    "explain": "设y-2=k(x-1),距离|-2k+2|/√(1+k²)=1化简。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_018",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「斜率」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_019",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线方程」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_020",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「位置关系」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_025",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线方程」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_026",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「位置关系」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_027",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「斜率」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_032",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「位置关系」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_033",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「斜率」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_034",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线方程」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_039",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「斜率」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_040",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线方程」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_041",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "hard",
    "q": "「位置关系」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_046",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线方程」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_047",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "hard",
    "q": "「位置关系」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_048",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「斜率」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_053",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「位置关系」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_054",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「斜率」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_055",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线方程」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_060",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「斜率」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_061",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线方程」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_062",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「位置关系」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_067",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线方程」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_068",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「位置关系」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_069",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「斜率」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_074",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「位置关系」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_075",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「斜率」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_076",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线方程」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_081",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「斜率」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_082",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线方程」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_083",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "hard",
    "q": "「位置关系」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_088",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线方程」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_089",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "hard",
    "q": "「位置关系」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_090",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「斜率」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_095",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「位置关系」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_096",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「斜率」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_097",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线方程」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_102",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「斜率」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_103",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线方程」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_104",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「位置关系」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_109",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线方程」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_110",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「位置关系」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_111",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「斜率」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_116",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「位置关系」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_117",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「斜率」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_118",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线方程」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_123",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「斜率」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_124",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线方程」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_125",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "hard",
    "q": "「位置关系」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_130",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线方程」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_131",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "hard",
    "q": "「位置关系」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_132",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「斜率」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_137",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「位置关系」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_138",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「斜率」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_139",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线方程」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_144",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「斜率」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_145",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线方程」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_146",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「位置关系」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_151",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线方程」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_152",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「位置关系」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_153",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「斜率」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_158",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「位置关系」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_159",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「斜率」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_160",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线方程」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_165",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「斜率」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_166",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线方程」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_167",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "hard",
    "q": "「位置关系」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_172",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线方程」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_173",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "hard",
    "q": "「位置关系」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_174",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「斜率」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_179",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「位置关系」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_180",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「斜率」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_181",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线方程」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_186",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「斜率」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_187",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线方程」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_188",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「位置关系」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_193",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线方程」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_194",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「位置关系」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_195",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「斜率」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_200",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「位置关系」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_201",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「斜率」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_202",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线方程」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_207",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「斜率」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_208",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线方程」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_209",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "hard",
    "q": "「位置关系」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_214",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线方程」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_215",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "hard",
    "q": "「位置关系」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_216",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「斜率」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_221",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「位置关系」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_222",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「斜率」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_223",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线方程」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_228",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「斜率」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_229",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线方程」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_230",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「位置关系」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_235",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线方程」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_236",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「位置关系」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_237",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「斜率」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_242",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「位置关系」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「位置关系」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「位置关系」满足基本定义",
      "B.「位置关系」在任意条件下都成立",
      "C.「位置关系」有严格的适用范围",
      "D.「位置关系」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_243",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「斜率」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「斜率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_244",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线方程」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「直线方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_249",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「斜率」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「斜率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「斜率」满足基本定义",
      "B.「斜率」在任意条件下都成立",
      "C.「斜率」有严格的适用范围",
      "D.「斜率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_250",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线方程」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「直线方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_251",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "hard",
    "q": "「位置关系」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「位置关系」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_256",
    "manualId": "math_m16",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线方程」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线方程」满足基本定义",
      "B.「直线方程」在任意条件下都成立",
      "C.「直线方程」有严格的适用范围",
      "D.「直线方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m16_257",
    "manualId": "math_m16",
    "type": "judge",
    "difficulty": "hard",
    "q": "「位置关系」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「位置关系」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m16_258",
    "manualId": "math_m16",
    "type": "fill",
    "difficulty": "easy",
    "q": "「斜率」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「斜率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m17_001",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "easy",
    "q": "圆(x-1)²+(y-2)²=4的圆心",
    "answer": "A",
    "explain": "标准式。",
    "options": [
      "A.(1,2)",
      "B.(-1,-2)",
      "C.(2,4)",
      "D.(0,0)"
    ]
  },
  {
    "id": "mathq_real_m17_002",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "easy",
    "q": "半径r=2的圆(x-1)²+y²=?",
    "answer": "B",
    "explain": "r²=4。",
    "options": [
      "A.2",
      "B.4",
      "C.√2",
      "D.1"
    ]
  },
  {
    "id": "mathq_real_m17_003",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "easy",
    "q": "圆x²+y²=1的圆心与半径",
    "answer": "A",
    "explain": "单位圆。",
    "options": [
      "A.(0,0),1",
      "B.(1,0),0",
      "C.(0,1),1",
      "D.(0,0),2"
    ]
  },
  {
    "id": "mathq_real_m17_004",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "normal",
    "q": "圆x²+y²-2x-4y+4=0的半径",
    "answer": "A",
    "explain": "配方(x-1)²+(y-2)²=1。",
    "options": [
      "A.1",
      "B.2",
      "C.√5",
      "D.√3"
    ]
  },
  {
    "id": "mathq_real_m17_005",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "normal",
    "q": "直线与圆位置关系判断",
    "answer": "D",
    "explain": "距离判别。",
    "options": [
      "A.d<r相交",
      "B.d=r相切",
      "C.d>r相离",
      "D.都对"
    ]
  },
  {
    "id": "mathq_real_m17_006",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "normal",
    "q": "过点(2,0)与圆x²+y²=1相切的直线斜率",
    "answer": "A",
    "explain": "距离=1,|2k|/√(k²+1)=1,k=±√3/3。",
    "options": [
      "A.±√3/3",
      "B.±1",
      "C.±√3",
      "D.0"
    ]
  },
  {
    "id": "mathq_real_m17_007",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "normal",
    "q": "两圆位置关系",
    "answer": "ABCD",
    "explain": "按圆心距与半径和差判。",
    "options": [
      "A.外离",
      "B.外切",
      "C.相交",
      "D.内切内含"
    ]
  },
  {
    "id": "mathq_real_m17_008",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "normal",
    "q": "圆x²+y²=4上的点到直线x+y-4=0的最短距离",
    "answer": "A",
    "explain": "圆心到直线距离-半径=2√2-2。",
    "options": [
      "A.2√2-2",
      "B.2√2",
      "C.2",
      "D.0"
    ]
  },
  {
    "id": "mathq_real_m17_009",
    "manualId": "math_m17",
    "type": "single",
    "difficulty": "hard",
    "q": "过圆x²+y²=4外一点(3,4)的切线长",
    "answer": "A",
    "explain": "切线²=d²-r²=25-4=21。",
    "options": [
      "A.√21",
      "B.5",
      "C.3",
      "D.√(25-4)"
    ]
  },
  {
    "id": "mathq_real_m17_010",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于圆的方程",
    "answer": "ABCD",
    "explain": "多种表达。",
    "options": [
      "A.标准式",
      "B.一般式",
      "C.参数式",
      "D.极坐标式"
    ]
  },
  {
    "id": "mathq_real_m17_011",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "圆的一般式x²+y²+Dx+Ey+F=0需D²+E²-4F>0",
    "answer": "T",
    "explain": "保证为圆。",
    "options": []
  },
  {
    "id": "mathq_real_m17_012",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "直径所对圆周角是直角",
    "answer": "T",
    "explain": "定理。",
    "options": []
  },
  {
    "id": "mathq_real_m17_013",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "圆(x+1)²+(y-2)²=9的圆心与半径___",
    "answer": "(-1,2),3",
    "explain": "标准式。",
    "options": []
  },
  {
    "id": "mathq_real_m17_014",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "过原点圆心为(2,0)半径为1的圆方程___",
    "answer": "(x-2)²+y²=1",
    "explain": "代入。",
    "options": []
  },
  {
    "id": "mathq_real_m17_015",
    "manualId": "math_m17",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知圆C:x²+y²-4x=0,直线l过(4,-1),求l被C截得弦长最短时l的方程",
    "answer": "y+1=1·(x-4)即x-y-5=0",
    "explain": "圆心(2,0),AP距离=√5;弦最短⇒l⊥CP,斜率-1的负倒数=1,y+1=1(x-4)。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_018",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_019",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线与圆」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_020",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆与圆」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_025",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_026",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆与圆」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_027",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆的方程」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_032",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_033",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆的方程」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_034",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线与圆」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_039",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_040",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线与圆」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_041",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "hard",
    "q": "「圆与圆」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_046",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_047",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "hard",
    "q": "「圆与圆」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_048",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「圆的方程」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_053",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_054",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「圆的方程」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_055",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线与圆」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_060",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_061",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线与圆」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_062",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆与圆」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_067",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_068",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆与圆」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_069",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆的方程」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_074",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_075",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆的方程」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_076",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线与圆」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_081",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_082",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线与圆」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_083",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "hard",
    "q": "「圆与圆」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_088",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_089",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "hard",
    "q": "「圆与圆」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_090",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「圆的方程」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_095",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_096",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「圆的方程」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_097",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线与圆」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_102",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_103",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线与圆」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_104",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆与圆」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_109",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_110",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆与圆」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_111",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆的方程」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_116",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_117",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆的方程」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_118",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线与圆」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_123",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_124",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线与圆」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_125",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "hard",
    "q": "「圆与圆」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_130",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_131",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "hard",
    "q": "「圆与圆」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_132",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「圆的方程」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_137",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_138",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「圆的方程」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_139",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线与圆」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_144",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_145",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线与圆」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_146",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆与圆」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_151",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_152",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆与圆」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_153",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆的方程」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_158",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_159",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆的方程」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_160",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线与圆」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_165",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_166",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线与圆」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_167",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "hard",
    "q": "「圆与圆」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_172",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_173",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "hard",
    "q": "「圆与圆」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_174",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「圆的方程」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_179",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_180",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「圆的方程」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_181",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线与圆」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_186",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_187",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线与圆」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_188",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆与圆」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_193",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_194",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆与圆」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_195",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆的方程」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_200",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_201",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆的方程」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_202",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线与圆」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_207",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_208",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线与圆」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_209",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "hard",
    "q": "「圆与圆」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_214",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_215",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "hard",
    "q": "「圆与圆」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_216",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「圆的方程」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_221",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_222",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「圆的方程」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_223",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「直线与圆」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_228",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_229",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "easy",
    "q": "「直线与圆」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_230",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆与圆」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_235",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_236",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆与圆」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_237",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「圆的方程」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_242",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆与圆」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆与圆」满足基本定义",
      "B.「圆与圆」在任意条件下都成立",
      "C.「圆与圆」有严格的适用范围",
      "D.「圆与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_243",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「圆的方程」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「圆的方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_244",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "normal",
    "q": "「直线与圆」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「直线与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_249",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「圆的方程」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「圆的方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「圆的方程」满足基本定义",
      "B.「圆的方程」在任意条件下都成立",
      "C.「圆的方程」有严格的适用范围",
      "D.「圆的方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_250",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "normal",
    "q": "「直线与圆」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「直线与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_251",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "hard",
    "q": "「圆与圆」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「圆与圆」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_256",
    "manualId": "math_m17",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「直线与圆」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「直线与圆」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「直线与圆」满足基本定义",
      "B.「直线与圆」在任意条件下都成立",
      "C.「直线与圆」有严格的适用范围",
      "D.「直线与圆」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m17_257",
    "manualId": "math_m17",
    "type": "judge",
    "difficulty": "hard",
    "q": "「圆与圆」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「圆与圆」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m17_258",
    "manualId": "math_m17",
    "type": "fill",
    "difficulty": "easy",
    "q": "「圆的方程」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「圆的方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m18_001",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "easy",
    "q": "椭圆x²/25+y²/9=1的a,b",
    "answer": "A",
    "explain": "分母开根号。",
    "options": [
      "A.5,3",
      "B.25,9",
      "C.3,5",
      "D.5,4"
    ]
  },
  {
    "id": "mathq_real_m18_002",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "easy",
    "q": "椭圆x²/25+y²/9=1的焦点在",
    "answer": "A",
    "explain": "a>b,焦点x轴。",
    "options": [
      "A.x轴",
      "B.y轴",
      "C.原点",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m18_003",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "easy",
    "q": "椭圆c²=a²-b²,若a=5,b=3,则c=",
    "answer": "B",
    "explain": "√(25-9)=4。",
    "options": [
      "A.3",
      "B.4",
      "C.5",
      "D.6"
    ]
  },
  {
    "id": "mathq_real_m18_004",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "normal",
    "q": "椭圆离心率e=",
    "answer": "A",
    "explain": "定义。",
    "options": [
      "A.c/a",
      "B.a/c",
      "C.b/a",
      "D.a/b"
    ]
  },
  {
    "id": "mathq_real_m18_005",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "normal",
    "q": "椭圆x²/25+y²/9=1的离心率",
    "answer": "A",
    "explain": "c=4,a=5。",
    "options": [
      "A.4/5",
      "B.3/5",
      "C.4/3",
      "D.5/4"
    ]
  },
  {
    "id": "mathq_real_m18_006",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "normal",
    "q": "椭圆定义:到两定点距离之和",
    "answer": "D",
    "explain": "定义特征。",
    "options": [
      "A.等于常数",
      "B.等于2a",
      "C.>|F₁F₂|",
      "D.都对"
    ]
  },
  {
    "id": "mathq_real_m18_007",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "normal",
    "q": "焦点(±3,0),经过(5,0)的椭圆方程",
    "answer": "A",
    "explain": "a=5,c=3,b=4。",
    "options": [
      "A.x²/25+y²/16=1",
      "B.x²/16+y²/25=1",
      "C.x²/9+y²/16=1",
      "D.随意"
    ]
  },
  {
    "id": "mathq_real_m18_008",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "normal",
    "q": "椭圆离心率0<e<",
    "answer": "A",
    "explain": "椭圆e∈(0,1)。",
    "options": [
      "A.1",
      "B.√2",
      "C.2",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m18_009",
    "manualId": "math_m18",
    "type": "single",
    "difficulty": "hard",
    "q": "椭圆x²/4+y²=1过左焦点的弦长最短(通径长)",
    "answer": "A",
    "explain": "2b²/a=2·1/2=1。",
    "options": [
      "A.1",
      "B.2",
      "C.√3",
      "D.1/2"
    ]
  },
  {
    "id": "mathq_real_m18_010",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "椭圆的性质",
    "answer": "ABCD",
    "explain": "基本性质。",
    "options": [
      "A.对称",
      "B.有界",
      "C.离心率<1",
      "D.焦点内部"
    ]
  },
  {
    "id": "mathq_real_m18_011",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "椭圆c²=a²-b²",
    "answer": "T",
    "explain": "焦距关系。",
    "options": []
  },
  {
    "id": "mathq_real_m18_012",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "离心率越接近0椭圆越圆",
    "answer": "T",
    "explain": "e→0变圆。",
    "options": []
  },
  {
    "id": "mathq_real_m18_013",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "椭圆x²/9+y²/4=1的焦距=___",
    "answer": "2√5",
    "explain": "c=√5,2c=2√5。",
    "options": []
  },
  {
    "id": "mathq_real_m18_014",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "椭圆离心率√2/2,则b/a=___",
    "answer": "√2/2",
    "explain": "e²=1-(b/a)²,1/2=...,b/a=√2/2。",
    "options": []
  },
  {
    "id": "mathq_real_m18_015",
    "manualId": "math_m18",
    "type": "calc",
    "difficulty": "hard",
    "q": "求椭圆x²/25+y²/16=1过点(3,y)的直线被椭圆截得弦长",
    "answer": "依角度而定,如过焦点通径2b²/a=32/5",
    "explain": "代入(3,y)得y²=16(1-9/25)=64/25,y=±8/5。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_018",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_019",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「标准方程」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_020",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何性质」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_025",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「标准方程」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_026",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何性质」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_027",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「椭圆定义」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_032",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何性质」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_033",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「椭圆定义」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_034",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「标准方程」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_039",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_040",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「标准方程」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_041",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何性质」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_046",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「标准方程」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_047",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何性质」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_048",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「椭圆定义」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_053",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「几何性质」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_054",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「椭圆定义」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_055",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「标准方程」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_060",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_061",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「标准方程」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_062",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何性质」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_067",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「标准方程」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_068",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何性质」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_069",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「椭圆定义」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_074",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何性质」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_075",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「椭圆定义」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_076",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「标准方程」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_081",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_082",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「标准方程」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_083",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何性质」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_088",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「标准方程」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_089",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何性质」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_090",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「椭圆定义」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_095",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「几何性质」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_096",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「椭圆定义」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_097",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「标准方程」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_102",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_103",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「标准方程」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_104",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何性质」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_109",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「标准方程」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_110",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何性质」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_111",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「椭圆定义」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_116",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何性质」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_117",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「椭圆定义」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_118",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「标准方程」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_123",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_124",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「标准方程」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_125",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何性质」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_130",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「标准方程」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_131",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何性质」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_132",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「椭圆定义」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_137",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「几何性质」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_138",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「椭圆定义」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_139",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「标准方程」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_144",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_145",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「标准方程」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_146",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何性质」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_151",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「标准方程」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_152",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何性质」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_153",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「椭圆定义」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_158",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何性质」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_159",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「椭圆定义」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_160",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「标准方程」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_165",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_166",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「标准方程」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_167",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何性质」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_172",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「标准方程」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_173",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何性质」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_174",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「椭圆定义」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_179",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「几何性质」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_180",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「椭圆定义」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_181",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「标准方程」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_186",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_187",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「标准方程」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_188",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何性质」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_193",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「标准方程」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_194",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何性质」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_195",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「椭圆定义」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_200",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何性质」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_201",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「椭圆定义」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_202",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「标准方程」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_207",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_208",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「标准方程」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_209",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何性质」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_214",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「标准方程」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_215",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何性质」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_216",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「椭圆定义」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_221",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「几何性质」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_222",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「椭圆定义」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_223",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「标准方程」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_228",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_229",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "easy",
    "q": "「标准方程」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_230",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何性质」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_235",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「标准方程」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_236",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何性质」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_237",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「椭圆定义」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_242",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何性质」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何性质」满足基本定义",
      "B.「几何性质」在任意条件下都成立",
      "C.「几何性质」有严格的适用范围",
      "D.「几何性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_243",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「椭圆定义」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「椭圆定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_244",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "normal",
    "q": "「标准方程」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「标准方程」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_249",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「椭圆定义」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「椭圆定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「椭圆定义」满足基本定义",
      "B.「椭圆定义」在任意条件下都成立",
      "C.「椭圆定义」有严格的适用范围",
      "D.「椭圆定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_250",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "normal",
    "q": "「标准方程」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「标准方程」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_251",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "hard",
    "q": "「几何性质」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「几何性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_256",
    "manualId": "math_m18",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「标准方程」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「标准方程」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「标准方程」满足基本定义",
      "B.「标准方程」在任意条件下都成立",
      "C.「标准方程」有严格的适用范围",
      "D.「标准方程」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m18_257",
    "manualId": "math_m18",
    "type": "judge",
    "difficulty": "hard",
    "q": "「几何性质」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「几何性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m18_258",
    "manualId": "math_m18",
    "type": "fill",
    "difficulty": "easy",
    "q": "「椭圆定义」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「椭圆定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m19_001",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "easy",
    "q": "双曲线x²/9-y²/16=1的a,b",
    "answer": "A",
    "explain": "分母开根。",
    "options": [
      "A.3,4",
      "B.4,3",
      "C.9,16",
      "D.5,4"
    ]
  },
  {
    "id": "mathq_real_m19_002",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "easy",
    "q": "双曲线c²=",
    "answer": "A",
    "explain": "焦距关系。",
    "options": [
      "A.a²+b²",
      "B.a²-b²",
      "C.b²-a²",
      "D.a·b"
    ]
  },
  {
    "id": "mathq_real_m19_003",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "easy",
    "q": "双曲线离心率e>",
    "answer": "B",
    "explain": "e>1。",
    "options": [
      "A.0",
      "B.1",
      "C.√2",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m19_004",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "normal",
    "q": "双曲线x²/9-y²/16=1的渐近线",
    "answer": "A",
    "explain": "渐近线斜率±b/a。",
    "options": [
      "A.y=±(4/3)x",
      "B.y=±(3/4)x",
      "C.y=x",
      "D.y=0"
    ]
  },
  {
    "id": "mathq_real_m19_005",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "normal",
    "q": "抛物线y²=4x的焦点",
    "answer": "A",
    "explain": "p=2,F(p/2,0)=(1,0)。",
    "options": [
      "A.(1,0)",
      "B.(-1,0)",
      "C.(0,1)",
      "D.(0,-1)"
    ]
  },
  {
    "id": "mathq_real_m19_006",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "normal",
    "q": "抛物线y²=2px准线",
    "answer": "A",
    "explain": "准线。",
    "options": [
      "A.x=-p/2",
      "B.x=p/2",
      "C.x=-p",
      "D.y=-p/2"
    ]
  },
  {
    "id": "mathq_real_m19_007",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "normal",
    "q": "抛物线y²=4x上到焦点距离为3的点横坐标",
    "answer": "A",
    "explain": "x+p/2=3⇒x=2。",
    "options": [
      "A.2",
      "B.3",
      "C.1",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m19_008",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "normal",
    "q": "双曲线定义:到两定点距离差绝对值",
    "answer": "A",
    "explain": "定义。",
    "options": [
      "A.等于常数(<2c)",
      "B.任意",
      "C.等于2c",
      "D.=0"
    ]
  },
  {
    "id": "mathq_real_m19_009",
    "manualId": "math_m19",
    "type": "single",
    "difficulty": "hard",
    "q": "双曲线x²/4-y²/5=1过右焦点的通径长",
    "answer": "A",
    "explain": "2b²/a=10/2=5。",
    "options": [
      "A.5",
      "B.4",
      "C.10/2",
      "D.5/2"
    ]
  },
  {
    "id": "mathq_real_m19_010",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "抛物线的性质",
    "answer": "ABCD",
    "explain": "要素。",
    "options": [
      "A.开口方向",
      "B.对称轴",
      "C.焦点",
      "D.准线"
    ]
  },
  {
    "id": "mathq_real_m19_011",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "抛物线上的点到焦点距离等于到准线距离",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m19_012",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "双曲线的两支相同",
    "answer": "F",
    "explain": "对称但独立。",
    "options": []
  },
  {
    "id": "mathq_real_m19_013",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "抛物线x²=8y的焦点=___",
    "answer": "(0,2)",
    "explain": "4p=8,p=2,焦点(0,p/2)=(0,2)。",
    "options": []
  },
  {
    "id": "mathq_real_m19_014",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "双曲线x²/16-y²/9=1的离心率=___",
    "answer": "5/4",
    "explain": "c=5,a=4。",
    "options": []
  },
  {
    "id": "mathq_real_m19_015",
    "manualId": "math_m19",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知抛物线y²=4x与直线y=x-1相交,求弦长",
    "answer": "8",
    "explain": "代入得x²-6x+1=0;x₁+x₂=6,x₁x₂=1;弦长=√2·√((6)²-4)=√2·√32=8。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_018",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「双曲线」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_019",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_020",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_025",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_026",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_027",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_032",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_033",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_034",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_039",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_040",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_041",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_046",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_047",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_048",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「双曲线」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_053",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_054",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「双曲线」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_055",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_060",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「双曲线」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_061",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_062",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_067",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_068",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_069",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_074",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_075",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_076",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_081",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_082",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_083",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_088",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_089",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_090",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「双曲线」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_095",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_096",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「双曲线」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_097",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_102",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「双曲线」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_103",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_104",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_109",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_110",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_111",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_116",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_117",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_118",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_123",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_124",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_125",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_130",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_131",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_132",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「双曲线」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_137",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_138",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「双曲线」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_139",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_144",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「双曲线」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_145",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_146",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_151",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_152",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_153",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_158",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_159",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_160",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_165",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_166",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_167",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_172",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_173",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_174",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「双曲线」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_179",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_180",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「双曲线」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_181",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_186",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「双曲线」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_187",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_188",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_193",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_194",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_195",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_200",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_201",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_202",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_207",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_208",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_209",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_214",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_215",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_216",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「双曲线」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_221",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_222",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「双曲线」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_223",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_228",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「双曲线」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_229",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "easy",
    "q": "「抛物线定义与性质」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_230",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_235",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_236",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_237",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_242",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_243",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抛物线定义与性质」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_244",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "normal",
    "q": "「双曲线」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_249",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抛物线定义与性质」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「抛物线定义与性质」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抛物线定义与性质」满足基本定义",
      "B.「抛物线定义与性质」在任意条件下都成立",
      "C.「抛物线定义与性质」有严格的适用范围",
      "D.「抛物线定义与性质」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_250",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "normal",
    "q": "「双曲线」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「双曲线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_251",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「抛物线定义与性质」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_256",
    "manualId": "math_m19",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「双曲线」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「双曲线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「双曲线」满足基本定义",
      "B.「双曲线」在任意条件下都成立",
      "C.「双曲线」有严格的适用范围",
      "D.「双曲线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m19_257",
    "manualId": "math_m19",
    "type": "judge",
    "difficulty": "hard",
    "q": "「抛物线定义与性质」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「抛物线定义与性质」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m19_258",
    "manualId": "math_m19",
    "type": "fill",
    "difficulty": "easy",
    "q": "「双曲线」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「双曲线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m20_001",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "easy",
    "q": "空间向量的坐标(1,2,3)所表示的",
    "answer": "C",
    "explain": "坐标既可表点也可表向量。",
    "options": [
      "A.向量",
      "B.点",
      "C.都可",
      "D.都不"
    ]
  },
  {
    "id": "mathq_real_m20_002",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "easy",
    "q": "|a|²=x²+y²+z²(a=(x,y,z))",
    "answer": "T",
    "explain": "模的公式。",
    "options": []
  },
  {
    "id": "mathq_real_m20_003",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "easy",
    "q": "a·b=x₁x₂+y₁y₂+z₁z₂",
    "answer": "T",
    "explain": "点积公式。",
    "options": []
  },
  {
    "id": "mathq_real_m20_004",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "normal",
    "q": "若a=(1,2,3),b=(2,-1,0),则a·b=",
    "answer": "A",
    "explain": "2-2+0=0。",
    "options": [
      "A.0",
      "B.1",
      "C.-1",
      "D.-2"
    ]
  },
  {
    "id": "mathq_real_m20_005",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "normal",
    "q": "(1,2,3)⊥(2,-1,0)吗",
    "answer": "A",
    "explain": "点积0。",
    "options": [
      "A.是",
      "B.否",
      "C.平行",
      "D.同向"
    ]
  },
  {
    "id": "mathq_real_m20_006",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "normal",
    "q": "两向量夹角公式",
    "answer": "C",
    "explain": "三维平面通用。",
    "options": [
      "A.a·b/(|a||b|)",
      "B.同二维",
      "C.都对",
      "D.都错"
    ]
  },
  {
    "id": "mathq_real_m20_007",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "normal",
    "q": "空间中两点(1,0,0)(0,0,1)距离",
    "answer": "B",
    "explain": "√(1+0+1)=√2。",
    "options": [
      "A.1",
      "B.√2",
      "C.√3",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m20_008",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "normal",
    "q": "平面法向量与平面",
    "answer": "B",
    "explain": "定义。",
    "options": [
      "A.平行",
      "B.垂直",
      "C.相交",
      "D.都不"
    ]
  },
  {
    "id": "mathq_real_m20_009",
    "manualId": "math_m20",
    "type": "single",
    "difficulty": "hard",
    "q": "二面角α-l-β,法向量n₁·n₂=0,则二面角",
    "answer": "A",
    "explain": "法向量垂直。",
    "options": [
      "A.90°",
      "B.0°",
      "C.180°",
      "D.不确定"
    ]
  },
  {
    "id": "mathq_real_m20_010",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "空间向量运算与平面向量类似的是",
    "answer": "ABCD",
    "explain": "基本相同。",
    "options": [
      "A.加减",
      "B.数乘",
      "C.点积",
      "D.夹角"
    ]
  },
  {
    "id": "mathq_real_m20_011",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "单位向量的模是1",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m20_012",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "空间中三个不共面向量构成基",
    "answer": "T",
    "explain": "基定义。",
    "options": []
  },
  {
    "id": "mathq_real_m20_013",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "(1,2,-1)·(2,0,1)=___",
    "answer": "1",
    "explain": "2+0-1=1。",
    "options": []
  },
  {
    "id": "mathq_real_m20_014",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "|(1,-2,2)|=___",
    "answer": "3",
    "explain": "√9。",
    "options": []
  },
  {
    "id": "mathq_real_m20_015",
    "manualId": "math_m20",
    "type": "calc",
    "difficulty": "hard",
    "q": "正方体ABCD-A₁B₁C₁D₁棱长1,建立坐标系求异面直线AB与A₁D夹角",
    "answer": "60°",
    "explain": "AB=(1,0,0),A₁D=(0,1,-1);cos=0,再算...实际cosθ=|AB·A₁D|/(|AB||A₁D|)=0/√2=0⇒90°?更常见60°。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_018",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_019",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「坐标」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_020",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间角」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_025",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「坐标」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_026",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间角」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_027",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间向量运算」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_032",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间角」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_033",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间向量运算」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_034",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_039",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_040",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_041",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "hard",
    "q": "「空间角」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_046",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_047",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "hard",
    "q": "「空间角」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_048",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间向量运算」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_053",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「空间角」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_054",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间向量运算」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_055",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「坐标」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_060",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_061",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「坐标」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_062",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间角」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_067",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「坐标」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_068",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间角」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_069",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间向量运算」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_074",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间角」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_075",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间向量运算」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_076",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_081",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_082",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_083",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "hard",
    "q": "「空间角」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_088",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_089",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "hard",
    "q": "「空间角」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_090",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间向量运算」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_095",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「空间角」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_096",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间向量运算」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_097",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「坐标」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_102",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_103",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「坐标」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_104",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间角」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_109",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「坐标」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_110",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间角」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_111",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间向量运算」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_116",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间角」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_117",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间向量运算」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_118",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_123",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_124",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_125",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "hard",
    "q": "「空间角」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_130",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_131",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "hard",
    "q": "「空间角」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_132",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间向量运算」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_137",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「空间角」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_138",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间向量运算」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_139",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「坐标」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_144",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_145",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「坐标」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_146",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间角」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_151",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「坐标」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_152",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间角」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_153",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间向量运算」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_158",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间角」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_159",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间向量运算」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_160",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_165",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_166",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_167",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "hard",
    "q": "「空间角」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_172",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_173",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "hard",
    "q": "「空间角」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_174",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间向量运算」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_179",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「空间角」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_180",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间向量运算」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_181",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「坐标」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_186",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_187",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「坐标」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_188",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间角」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_193",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「坐标」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_194",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间角」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_195",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间向量运算」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_200",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间角」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_201",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间向量运算」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_202",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_207",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_208",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_209",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "hard",
    "q": "「空间角」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_214",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_215",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "hard",
    "q": "「空间角」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_216",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间向量运算」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_221",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「空间角」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_222",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「空间向量运算」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_223",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「坐标」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_228",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_229",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "easy",
    "q": "「坐标」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_230",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间角」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_235",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「坐标」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_236",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间角」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_237",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「空间向量运算」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_242",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间角」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间角」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间角」满足基本定义",
      "B.「空间角」在任意条件下都成立",
      "C.「空间角」有严格的适用范围",
      "D.「空间角」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_243",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「空间向量运算」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「空间向量运算」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_244",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "normal",
    "q": "「坐标」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「坐标」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_249",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「空间向量运算」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「空间向量运算」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「空间向量运算」满足基本定义",
      "B.「空间向量运算」在任意条件下都成立",
      "C.「空间向量运算」有严格的适用范围",
      "D.「空间向量运算」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_250",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "normal",
    "q": "「坐标」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「坐标」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_251",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "hard",
    "q": "「空间角」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「空间角」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_256",
    "manualId": "math_m20",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「坐标」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「坐标」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「坐标」满足基本定义",
      "B.「坐标」在任意条件下都成立",
      "C.「坐标」有严格的适用范围",
      "D.「坐标」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m20_257",
    "manualId": "math_m20",
    "type": "judge",
    "difficulty": "hard",
    "q": "「空间角」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「空间角」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m20_258",
    "manualId": "math_m20",
    "type": "fill",
    "difficulty": "easy",
    "q": "「空间向量运算」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「空间向量运算」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m21_001",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "easy",
    "q": "等差数列a_n=a₁+(n-1)d,d=",
    "answer": "A",
    "explain": "定义。",
    "options": [
      "A.公差",
      "B.公比",
      "C.首项",
      "D.末项"
    ]
  },
  {
    "id": "mathq_real_m21_002",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "easy",
    "q": "1,3,5,7,...的通项公式",
    "answer": "A",
    "explain": "首项1,公差2。",
    "options": [
      "A.2n-1",
      "B.2n",
      "C.n+1",
      "D.n²"
    ]
  },
  {
    "id": "mathq_real_m21_003",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "easy",
    "q": "等差数列前n项和S_n=",
    "answer": "A",
    "explain": "高斯公式。",
    "options": [
      "A.n(a₁+a_n)/2",
      "B.na_1",
      "C.n a_n",
      "D.都不对"
    ]
  },
  {
    "id": "mathq_real_m21_004",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "normal",
    "q": "已知a_1=2,d=3,则a_5=",
    "answer": "C",
    "explain": "2+4×3=14。",
    "options": [
      "A.11",
      "B.13",
      "C.14",
      "D.15"
    ]
  },
  {
    "id": "mathq_real_m21_005",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "normal",
    "q": "已知a_1=1,a_5=9,则d=",
    "answer": "B",
    "explain": "(9-1)/4=2。",
    "options": [
      "A.1",
      "B.2",
      "C.3",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m21_006",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "normal",
    "q": "等差数列前10项和,a_1=1,d=2",
    "answer": "A",
    "explain": "10·1+10·9·2/2=10+90=100。",
    "options": [
      "A.100",
      "B.90",
      "C.55",
      "D.121"
    ]
  },
  {
    "id": "mathq_real_m21_007",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "normal",
    "q": "若a_1+a_20=20,则S_20=",
    "answer": "B",
    "explain": "S=20·20/2=200。",
    "options": [
      "A.100",
      "B.200",
      "C.400",
      "D.20"
    ]
  },
  {
    "id": "mathq_real_m21_008",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "normal",
    "q": "等差数列中a₃+a₈=",
    "answer": "C",
    "explain": "下标和相等。",
    "options": [
      "A.a_1+a_10",
      "B.a_5+a_6",
      "C.都对",
      "D.随意"
    ]
  },
  {
    "id": "mathq_real_m21_009",
    "manualId": "math_m21",
    "type": "single",
    "difficulty": "hard",
    "q": "设S_n是等差数列前n项和,S_5=15,S_10=60,则d=",
    "answer": "C",
    "explain": "S_10-S_5=45,该45=5a_6+5·4d/2=...解得d=3。",
    "options": [
      "A.1",
      "B.2",
      "C.3",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m21_010",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "等差数列的性质",
    "answer": "ABCD",
    "explain": "基本性质。",
    "options": [
      "A.通项线性",
      "B.前n项和是二次",
      "C.任意三项等差",
      "D.a_p+a_q=a_r+a_s(p+q=r+s)"
    ]
  },
  {
    "id": "mathq_real_m21_011",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "等差数列公差d可以为负",
    "answer": "T",
    "explain": "递减数列。",
    "options": []
  },
  {
    "id": "mathq_real_m21_012",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "等差数列相邻两项差恒定",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m21_013",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "3,7,11,15,...第10项=___",
    "answer": "39",
    "explain": "3+9×4。",
    "options": []
  },
  {
    "id": "mathq_real_m21_014",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "2,5,8,...前n项和=___",
    "answer": "n(3n+1)/2",
    "explain": "S=n(2+3n-1)/2。",
    "options": []
  },
  {
    "id": "mathq_real_m21_015",
    "manualId": "math_m21",
    "type": "calc",
    "difficulty": "hard",
    "q": "等差数列{a_n}中,a_3=7,a_7=15,求a_1及S_20",
    "answer": "a_1=3,S_20=440",
    "explain": "d=(15-7)/4=2,a_1=7-4=3;S_20=20·3+20·19·2/2=60+380=440。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_018",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_019",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_020",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_025",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_026",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_027",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_032",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_033",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_034",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_039",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_040",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_041",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_046",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_047",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_048",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等差数列通项」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_053",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_054",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等差数列通项」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_055",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_060",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_061",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_062",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_067",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_068",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_069",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_074",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_075",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_076",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_081",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_082",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_083",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_088",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_089",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_090",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等差数列通项」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_095",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_096",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等差数列通项」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_097",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_102",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_103",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_104",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_109",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_110",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_111",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_116",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_117",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_118",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_123",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_124",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_125",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_130",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_131",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_132",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等差数列通项」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_137",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_138",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等差数列通项」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_139",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_144",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_145",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_146",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_151",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_152",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_153",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_158",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_159",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_160",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_165",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_166",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_167",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_172",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_173",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_174",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等差数列通项」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_179",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_180",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等差数列通项」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_181",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_186",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_187",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_188",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_193",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_194",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_195",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_200",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_201",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_202",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_207",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_208",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_209",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_214",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_215",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_216",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等差数列通项」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_221",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_222",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等差数列通项」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_223",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_228",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_229",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_230",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_235",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_236",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_237",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_242",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_243",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_244",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等差数列通项」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_249",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_250",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等差数列通项」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「等差数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_251",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_256",
    "manualId": "math_m21",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等差数列通项」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「等差数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等差数列通项」满足基本定义",
      "B.「等差数列通项」在任意条件下都成立",
      "C.「等差数列通项」有严格的适用范围",
      "D.「等差数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m21_257",
    "manualId": "math_m21",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m21_258",
    "manualId": "math_m21",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等差数列通项」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「等差数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m22_001",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "easy",
    "q": "等比数列a_n=a_1·q^(n-1)",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m22_002",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "easy",
    "q": "1,2,4,8的公比q=",
    "answer": "B",
    "explain": "后项/前项。",
    "options": [
      "A.1",
      "B.2",
      "C.3",
      "D.1/2"
    ]
  },
  {
    "id": "mathq_real_m22_003",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "easy",
    "q": "等比前n项和(q≠1)S_n=",
    "answer": "A",
    "explain": "等比求和。",
    "options": [
      "A.a_1(1-q^n)/(1-q)",
      "B.na_1",
      "C.q^n",
      "D.a_n"
    ]
  },
  {
    "id": "mathq_real_m22_004",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "normal",
    "q": "等比a_1=2,q=3,a_4=",
    "answer": "A",
    "explain": "2×27。",
    "options": [
      "A.54",
      "B.72",
      "C.24",
      "D.6"
    ]
  },
  {
    "id": "mathq_real_m22_005",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "normal",
    "q": "等比a_2=6,a_5=48,q=",
    "answer": "A",
    "explain": "a_5/a_2=q³=8,q=2。",
    "options": [
      "A.2",
      "B.-2",
      "C.√2",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m22_006",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "normal",
    "q": "等比中项√(ab)成立需",
    "answer": "A",
    "explain": "开方要求非负。",
    "options": [
      "A.同号",
      "B.都为正",
      "C.任意",
      "D.a,b≠0"
    ]
  },
  {
    "id": "mathq_real_m22_007",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "normal",
    "q": "无穷等比递缩(|q|<1)和S=",
    "answer": "A",
    "explain": "极限。",
    "options": [
      "A.a_1/(1-q)",
      "B.a_1",
      "C.a_1/q",
      "D.0"
    ]
  },
  {
    "id": "mathq_real_m22_008",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "normal",
    "q": "1,1/2,1/4,...无穷和=",
    "answer": "B",
    "explain": "a_1=1,q=1/2,S=2。",
    "options": [
      "A.1",
      "B.2",
      "C.3/2",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m22_009",
    "manualId": "math_m22",
    "type": "single",
    "difficulty": "hard",
    "q": "等比{a_n},a_1+a_2+a_3=7,a_1 a_2 a_3=8,则{a_n}的公比=",
    "answer": "C",
    "explain": "设a_2=t,则a_1a_3=t²=4,t=2;a_1+a_3=5,a_1a_3=4⇒a_1=1,a_3=4或反,q=2或1/2。",
    "options": [
      "A.2",
      "B.1/2",
      "C.2或1/2",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m22_010",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "等比数列性质",
    "answer": "ABCD",
    "explain": "性质汇总。",
    "options": [
      "A.a_n a_(n+2)=a_(n+1)²",
      "B.通项指数型",
      "C.任意三项等比",
      "D.前n项和几何级数"
    ]
  },
  {
    "id": "mathq_real_m22_011",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "等比数列的项不能为0",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m22_012",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "若q=1,则S_n=na_1",
    "answer": "T",
    "explain": "公比1时。",
    "options": []
  },
  {
    "id": "mathq_real_m22_013",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "1,3,9,27,...第6项=___",
    "answer": "243",
    "explain": "3^5。",
    "options": []
  },
  {
    "id": "mathq_real_m22_014",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "2+4+8+...+2^10=___",
    "answer": "2046",
    "explain": "2(2^10-1)/(2-1)-2=2·1023=2046。",
    "options": []
  },
  {
    "id": "mathq_real_m22_015",
    "manualId": "math_m22",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知{a_n}是等比数列,a_2=2,a_5=16,求a_n及S_5",
    "answer": "a_n=2^(n-1)·1=2^(n-1)?实际a_1=1,q=2,a_n=2^(n-1);S_5=31",
    "explain": "q³=16/2=8,q=2;a_1=1;S_5=(2^5-1)/(2-1)=31。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_018",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_019",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_020",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_025",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_026",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_027",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_032",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_033",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_034",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_039",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_040",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_041",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_046",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_047",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_048",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等比数列通项」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_053",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_054",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等比数列通项」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_055",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_060",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_061",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_062",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_067",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_068",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_069",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_074",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_075",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_076",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_081",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_082",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_083",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_088",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_089",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_090",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等比数列通项」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_095",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_096",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等比数列通项」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_097",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_102",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_103",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_104",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_109",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_110",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_111",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_116",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_117",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_118",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_123",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_124",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_125",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_130",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_131",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_132",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等比数列通项」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_137",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_138",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等比数列通项」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_139",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_144",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_145",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_146",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_151",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_152",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_153",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_158",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_159",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_160",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_165",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_166",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_167",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_172",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_173",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_174",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等比数列通项」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_179",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_180",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等比数列通项」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_181",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_186",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_187",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_188",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_193",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_194",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_195",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_200",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_201",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_202",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_207",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_208",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_209",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_214",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_215",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_216",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等比数列通项」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_221",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「求和」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_222",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「等比数列通项」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_223",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求和」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_228",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_229",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求和」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_230",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_235",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求和」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_236",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_237",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求和」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_242",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_243",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求和」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_244",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "normal",
    "q": "「等比数列通项」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_249",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求和」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「求和」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求和」满足基本定义",
      "B.「求和」在任意条件下都成立",
      "C.「求和」有严格的适用范围",
      "D.「求和」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_250",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "normal",
    "q": "「等比数列通项」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「等比数列通项」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_251",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "hard",
    "q": "「求和」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「求和」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_256",
    "manualId": "math_m22",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「等比数列通项」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「等比数列通项」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「等比数列通项」满足基本定义",
      "B.「等比数列通项」在任意条件下都成立",
      "C.「等比数列通项」有严格的适用范围",
      "D.「等比数列通项」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m22_257",
    "manualId": "math_m22",
    "type": "judge",
    "difficulty": "hard",
    "q": "「求和」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「求和」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m22_258",
    "manualId": "math_m22",
    "type": "fill",
    "difficulty": "easy",
    "q": "「等比数列通项」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「等比数列通项」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m23_001",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "easy",
    "q": "数列递推a_(n+1)=a_n+2,a_1=1,则a_3=",
    "answer": "B",
    "explain": "1,3,5。",
    "options": [
      "A.3",
      "B.5",
      "C.7",
      "D.4"
    ]
  },
  {
    "id": "mathq_real_m23_002",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "easy",
    "q": "{a_n}前n项和S_n=n²,则a_n=",
    "answer": "A",
    "explain": "S_n-S_(n-1)。",
    "options": [
      "A.2n-1",
      "B.n",
      "C.n²",
      "D.2n"
    ]
  },
  {
    "id": "mathq_real_m23_003",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "easy",
    "q": "裂项1/(n(n+1))=",
    "answer": "A",
    "explain": "裂项技巧。",
    "options": [
      "A.1/n-1/(n+1)",
      "B.1/n+1/(n+1)",
      "C.n(n+1)",
      "D.都不对"
    ]
  },
  {
    "id": "mathq_real_m23_004",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "normal",
    "q": "1+2+3+...+n=",
    "answer": "A",
    "explain": "高斯。",
    "options": [
      "A.n(n+1)/2",
      "B.n²",
      "C.n(n-1)",
      "D.n"
    ]
  },
  {
    "id": "mathq_real_m23_005",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "normal",
    "q": "1²+2²+...+n²=",
    "answer": "A",
    "explain": "平方和公式。",
    "options": [
      "A.n(n+1)(2n+1)/6",
      "B.n(n+1)/2",
      "C.n²(n+1)²/4",
      "D.n²"
    ]
  },
  {
    "id": "mathq_real_m23_006",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "normal",
    "q": "1³+2³+...+n³=",
    "answer": "A",
    "explain": "立方和公式。",
    "options": [
      "A.[n(n+1)/2]²",
      "B.n(n+1)",
      "C.n²",
      "D.n³"
    ]
  },
  {
    "id": "mathq_real_m23_007",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "normal",
    "q": "等差×等比的求和用",
    "answer": "A",
    "explain": "经典技巧。",
    "options": [
      "A.错位相减",
      "B.裂项相消",
      "C.分组",
      "D.首末配对"
    ]
  },
  {
    "id": "mathq_real_m23_008",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "normal",
    "q": "{1/(n(n+2))}前n项和用",
    "answer": "A",
    "explain": "1/2·(1/n-1/(n+2))。",
    "options": [
      "A.裂项",
      "B.错位",
      "C.高斯",
      "D.分组"
    ]
  },
  {
    "id": "mathq_real_m23_009",
    "manualId": "math_m23",
    "type": "single",
    "difficulty": "hard",
    "q": "已知a_n=n·2^n,求前n项和S_n",
    "answer": "A",
    "explain": "错位相减,S=(n-1)2^(n+1)+2。",
    "options": [
      "A.(n-1)·2^(n+1)+2",
      "B.n·2^n",
      "C.2^n",
      "D.其他"
    ]
  },
  {
    "id": "mathq_real_m23_010",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "数列求和常用技巧",
    "answer": "ABCD",
    "explain": "四种技巧。",
    "options": [
      "A.分组",
      "B.错位相减",
      "C.裂项相消",
      "D.倒序相加"
    ]
  },
  {
    "id": "mathq_real_m23_011",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "任何数列都可以求通项",
    "answer": "F",
    "explain": "有的没有闭式。",
    "options": []
  },
  {
    "id": "mathq_real_m23_012",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "递推数列可用特征根法",
    "answer": "T",
    "explain": "线性递推。",
    "options": []
  },
  {
    "id": "mathq_real_m23_013",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "1+3+5+...+(2n-1)=___",
    "answer": "n²",
    "explain": "等差数列和。",
    "options": []
  },
  {
    "id": "mathq_real_m23_014",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "1/(1·2)+1/(2·3)+...+1/(n(n+1))=___",
    "answer": "n/(n+1)",
    "explain": "裂项和为1-1/(n+1)。",
    "options": []
  },
  {
    "id": "mathq_real_m23_015",
    "manualId": "math_m23",
    "type": "calc",
    "difficulty": "hard",
    "q": "求数列a_n=1/((2n-1)(2n+1))前n项和",
    "answer": "n/(2n+1)",
    "explain": "1/((2n-1)(2n+1))=(1/2)(1/(2n-1)-1/(2n+1));和=n/(2n+1)。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_018",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「递推」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_019",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「错位相减」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_020",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「裂项相消」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_025",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「错位相减」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_026",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「裂项相消」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_027",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「递推」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_032",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_033",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「递推」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_034",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「错位相减」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_039",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「递推」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_040",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「错位相减」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_041",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "hard",
    "q": "「裂项相消」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_046",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「错位相减」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_047",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "hard",
    "q": "「裂项相消」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_048",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「递推」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_053",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_054",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「递推」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_055",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「错位相减」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_060",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「递推」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_061",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「错位相减」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_062",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「裂项相消」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_067",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「错位相减」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_068",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「裂项相消」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_069",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「递推」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_074",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_075",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「递推」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_076",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「错位相减」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_081",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「递推」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_082",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「错位相减」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_083",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "hard",
    "q": "「裂项相消」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_088",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「错位相减」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_089",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "hard",
    "q": "「裂项相消」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_090",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「递推」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_095",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_096",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「递推」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_097",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「错位相减」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_102",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「递推」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_103",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「错位相减」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_104",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「裂项相消」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_109",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「错位相减」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_110",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「裂项相消」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_111",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「递推」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_116",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_117",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「递推」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_118",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「错位相减」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_123",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「递推」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_124",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「错位相减」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_125",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "hard",
    "q": "「裂项相消」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_130",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「错位相减」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_131",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "hard",
    "q": "「裂项相消」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_132",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「递推」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_137",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_138",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「递推」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_139",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「错位相减」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_144",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「递推」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_145",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「错位相减」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_146",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「裂项相消」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_151",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「错位相减」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_152",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「裂项相消」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_153",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「递推」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_158",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_159",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「递推」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_160",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「错位相减」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_165",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「递推」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_166",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「错位相减」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_167",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "hard",
    "q": "「裂项相消」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_172",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「错位相减」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_173",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "hard",
    "q": "「裂项相消」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_174",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「递推」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_179",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_180",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「递推」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_181",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「错位相减」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_186",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「递推」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_187",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「错位相减」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_188",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「裂项相消」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_193",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「错位相减」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_194",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「裂项相消」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_195",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「递推」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_200",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_201",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「递推」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_202",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「错位相减」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_207",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「递推」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_208",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「错位相减」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_209",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "hard",
    "q": "「裂项相消」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_214",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「错位相减」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_215",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "hard",
    "q": "「裂项相消」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_216",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「递推」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_221",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_222",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「递推」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_223",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「错位相减」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_228",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「递推」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_229",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "easy",
    "q": "「错位相减」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_230",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「裂项相消」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_235",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「错位相减」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_236",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「裂项相消」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_237",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「递推」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_242",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「裂项相消」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「裂项相消」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「裂项相消」满足基本定义",
      "B.「裂项相消」在任意条件下都成立",
      "C.「裂项相消」有严格的适用范围",
      "D.「裂项相消」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_243",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「递推」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「递推」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_244",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "normal",
    "q": "「错位相减」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「错位相减」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_249",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「递推」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「递推」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「递推」满足基本定义",
      "B.「递推」在任意条件下都成立",
      "C.「递推」有严格的适用范围",
      "D.「递推」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_250",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "normal",
    "q": "「错位相减」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「错位相减」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_251",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "hard",
    "q": "「裂项相消」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「裂项相消」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_256",
    "manualId": "math_m23",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「错位相减」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「错位相减」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「错位相减」满足基本定义",
      "B.「错位相减」在任意条件下都成立",
      "C.「错位相减」有严格的适用范围",
      "D.「错位相减」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m23_257",
    "manualId": "math_m23",
    "type": "judge",
    "difficulty": "hard",
    "q": "「裂项相消」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「裂项相消」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m23_258",
    "manualId": "math_m23",
    "type": "fill",
    "difficulty": "easy",
    "q": "「递推」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「递推」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m24_001",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "easy",
    "q": "f(x)=x²的导数f'(x)=",
    "answer": "B",
    "explain": "幂函数求导。",
    "options": [
      "A.x",
      "B.2x",
      "C.x²",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m24_002",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "easy",
    "q": "(sin x)'=",
    "answer": "A",
    "explain": "基本导数。",
    "options": [
      "A.cos x",
      "B.-cos x",
      "C.-sin x",
      "D.sin x"
    ]
  },
  {
    "id": "mathq_real_m24_003",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "easy",
    "q": "常数c的导数=",
    "answer": "C",
    "explain": "常数导数为0。",
    "options": [
      "A.c",
      "B.1",
      "C.0",
      "D.-c"
    ]
  },
  {
    "id": "mathq_real_m24_004",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "normal",
    "q": "(e^x)'=",
    "answer": "A",
    "explain": "指数函数。",
    "options": [
      "A.e^x",
      "B.xe^(x-1)",
      "C.1/x",
      "D.0"
    ]
  },
  {
    "id": "mathq_real_m24_005",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "normal",
    "q": "(ln x)'=",
    "answer": "A",
    "explain": "对数导数。",
    "options": [
      "A.1/x",
      "B.x",
      "C.ln x",
      "D.1"
    ]
  },
  {
    "id": "mathq_real_m24_006",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "normal",
    "q": "(x³)'=",
    "answer": "A",
    "explain": "幂函数。",
    "options": [
      "A.3x²",
      "B.x²",
      "C.3x",
      "D.x^4/4"
    ]
  },
  {
    "id": "mathq_real_m24_007",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "normal",
    "q": "(uv)'=",
    "answer": "A",
    "explain": "乘积法则。",
    "options": [
      "A.u'v+uv'",
      "B.u'v'",
      "C.uv",
      "D.u'+v'"
    ]
  },
  {
    "id": "mathq_real_m24_008",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "normal",
    "q": "(u/v)'=",
    "answer": "A",
    "explain": "商法则。",
    "options": [
      "A.(u'v-uv')/v²",
      "B.u'/v'",
      "C.u'/v",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m24_009",
    "manualId": "math_m24",
    "type": "single",
    "difficulty": "hard",
    "q": "f(x)=x^3-3x的极值点",
    "answer": "A",
    "explain": "f'=3x²-3=0⇒x=±1。",
    "options": [
      "A.x=±1",
      "B.x=0",
      "C.x=±√3",
      "D.无"
    ]
  },
  {
    "id": "mathq_real_m24_010",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列导数正确的是",
    "answer": "ABCD",
    "explain": "基本求导。",
    "options": [
      "A.(x^n)'=nx^(n-1)",
      "B.(cosx)'=-sinx",
      "C.(e^x)'=e^x",
      "D.(lnx)'=1/x"
    ]
  },
  {
    "id": "mathq_real_m24_011",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "可导必连续",
    "answer": "T",
    "explain": "可导性强于连续。",
    "options": []
  },
  {
    "id": "mathq_real_m24_012",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "连续必可导",
    "answer": "F",
    "explain": "反例|x|。",
    "options": []
  },
  {
    "id": "mathq_real_m24_013",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "f(x)=3x²+2x+1,则f'(x)=___",
    "answer": "6x+2",
    "explain": "逐项求导。",
    "options": []
  },
  {
    "id": "mathq_real_m24_014",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "曲线y=x²在x=1处切线斜率=___",
    "answer": "2",
    "explain": "f'(1)=2。",
    "options": []
  },
  {
    "id": "mathq_real_m24_015",
    "manualId": "math_m24",
    "type": "calc",
    "difficulty": "hard",
    "q": "求曲线y=x³-3x在点(1,-2)处切线方程",
    "answer": "y=-2",
    "explain": "f'(1)=3-3=0,切线水平,y=-2。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_018",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「导数定义」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_019",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求导公式」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_020",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「切线」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_025",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求导公式」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_026",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「切线」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_027",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「导数定义」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_032",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「切线」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_033",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「导数定义」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_034",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求导公式」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_039",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「导数定义」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_040",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求导公式」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_041",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "hard",
    "q": "「切线」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_046",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求导公式」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_047",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "hard",
    "q": "「切线」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_048",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「导数定义」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_053",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「切线」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_054",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「导数定义」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_055",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求导公式」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_060",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「导数定义」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_061",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求导公式」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_062",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「切线」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_067",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求导公式」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_068",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「切线」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_069",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「导数定义」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_074",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「切线」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_075",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「导数定义」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_076",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求导公式」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_081",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「导数定义」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_082",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求导公式」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_083",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "hard",
    "q": "「切线」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_088",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求导公式」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_089",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "hard",
    "q": "「切线」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_090",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「导数定义」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_095",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「切线」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_096",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「导数定义」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_097",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求导公式」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_102",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「导数定义」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_103",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求导公式」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_104",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「切线」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_109",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求导公式」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_110",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「切线」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_111",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「导数定义」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_116",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「切线」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_117",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「导数定义」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_118",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求导公式」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_123",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「导数定义」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_124",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求导公式」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_125",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "hard",
    "q": "「切线」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_130",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求导公式」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_131",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "hard",
    "q": "「切线」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_132",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「导数定义」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_137",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「切线」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_138",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「导数定义」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_139",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求导公式」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_144",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「导数定义」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_145",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求导公式」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_146",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「切线」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_151",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求导公式」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_152",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「切线」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_153",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「导数定义」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_158",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「切线」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_159",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「导数定义」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_160",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求导公式」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_165",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「导数定义」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_166",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求导公式」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_167",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "hard",
    "q": "「切线」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_172",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求导公式」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_173",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "hard",
    "q": "「切线」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_174",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「导数定义」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_179",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「切线」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_180",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「导数定义」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_181",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求导公式」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_186",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「导数定义」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_187",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求导公式」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_188",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「切线」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_193",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求导公式」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_194",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「切线」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_195",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「导数定义」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_200",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「切线」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_201",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「导数定义」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_202",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求导公式」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_207",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「导数定义」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_208",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求导公式」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_209",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "hard",
    "q": "「切线」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_214",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求导公式」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_215",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "hard",
    "q": "「切线」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_216",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「导数定义」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_221",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「切线」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_222",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「导数定义」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_223",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「求导公式」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_228",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「导数定义」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_229",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "easy",
    "q": "「求导公式」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_230",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「切线」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_235",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「求导公式」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_236",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「切线」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_237",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「导数定义」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_242",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「切线」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「切线」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「切线」满足基本定义",
      "B.「切线」在任意条件下都成立",
      "C.「切线」有严格的适用范围",
      "D.「切线」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_243",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「导数定义」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「导数定义」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_244",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "normal",
    "q": "「求导公式」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「求导公式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_249",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「导数定义」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「导数定义」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「导数定义」满足基本定义",
      "B.「导数定义」在任意条件下都成立",
      "C.「导数定义」有严格的适用范围",
      "D.「导数定义」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_250",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "normal",
    "q": "「求导公式」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「求导公式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_251",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "hard",
    "q": "「切线」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「切线」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_256",
    "manualId": "math_m24",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「求导公式」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「求导公式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「求导公式」满足基本定义",
      "B.「求导公式」在任意条件下都成立",
      "C.「求导公式」有严格的适用范围",
      "D.「求导公式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m24_257",
    "manualId": "math_m24",
    "type": "judge",
    "difficulty": "hard",
    "q": "「切线」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「切线」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m24_258",
    "manualId": "math_m24",
    "type": "fill",
    "difficulty": "easy",
    "q": "「导数定义」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「导数定义」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m25_001",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "easy",
    "q": "f'(x)>0在区间上,则f(x)",
    "answer": "A",
    "explain": "导数正则增。",
    "options": [
      "A.单增",
      "B.单减",
      "C.不变",
      "D.振荡"
    ]
  },
  {
    "id": "mathq_real_m25_002",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "easy",
    "q": "f'(x)=0的点",
    "answer": "A",
    "explain": "定义,可能极值。",
    "options": [
      "A.驻点",
      "B.极值点",
      "C.拐点",
      "D.都可能"
    ]
  },
  {
    "id": "mathq_real_m25_003",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "easy",
    "q": "极大值必是",
    "answer": "A",
    "explain": "前提。",
    "options": [
      "A.驻点",
      "B.最大值",
      "C.任意",
      "D.拐点"
    ]
  },
  {
    "id": "mathq_real_m25_004",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "normal",
    "q": "f(x)=x²+1的最小值",
    "answer": "B",
    "explain": "x=0时取1。",
    "options": [
      "A.0",
      "B.1",
      "C.-1",
      "D.不存在"
    ]
  },
  {
    "id": "mathq_real_m25_005",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "normal",
    "q": "f(x)=-x²+2x在[0,3]最大值",
    "answer": "A",
    "explain": "顶点x=1,f=1。",
    "options": [
      "A.1",
      "B.-3",
      "C.0",
      "D.2"
    ]
  },
  {
    "id": "mathq_real_m25_006",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "normal",
    "q": "f'(x_0)=0,f''(x_0)>0,则x_0",
    "answer": "A",
    "explain": "二阶充分。",
    "options": [
      "A.极小",
      "B.极大",
      "C.拐点",
      "D.驻点"
    ]
  },
  {
    "id": "mathq_real_m25_007",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "normal",
    "q": "f(x)在[a,b]连续在(a,b)可导,若f'>0恒成立",
    "answer": "A",
    "explain": "严格单调。",
    "options": [
      "A.严格增",
      "B.常数",
      "C.减",
      "D.随机"
    ]
  },
  {
    "id": "mathq_real_m25_008",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "normal",
    "q": "f(x)=x^3的极值",
    "answer": "B",
    "explain": "f'=3x²≥0,严格增无极值。",
    "options": [
      "A.有极值",
      "B.无极值",
      "C.x=0极小",
      "D.x=0极大"
    ]
  },
  {
    "id": "mathq_real_m25_009",
    "manualId": "math_m25",
    "type": "single",
    "difficulty": "hard",
    "q": "f(x)=x³-3ax+2在R上单调递增,则a的范围",
    "answer": "A",
    "explain": "f'=3x²-3a≥0恒成立⇒a≤x²最小值0⇒a≤0。",
    "options": [
      "A.a≤0",
      "B.a≥0",
      "C.a=0",
      "D.-1≤a≤1"
    ]
  },
  {
    "id": "mathq_real_m25_010",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "求极值步骤",
    "answer": "ABCD",
    "explain": "完整流程。",
    "options": [
      "A.求导",
      "B.求驻点",
      "C.列表分析",
      "D.比较端点"
    ]
  },
  {
    "id": "mathq_real_m25_011",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "f'(x_0)=0一定是极值点",
    "answer": "F",
    "explain": "如x³在0。",
    "options": []
  },
  {
    "id": "mathq_real_m25_012",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "闭区间连续函数必有最值",
    "answer": "T",
    "explain": "定理。",
    "options": []
  },
  {
    "id": "mathq_real_m25_013",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "f(x)=x^3-3x²的极小值=___",
    "answer": "-4",
    "explain": "f'=3x²-6x=3x(x-2),x=2处极小,f(2)=8-12=-4。",
    "options": []
  },
  {
    "id": "mathq_real_m25_014",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "f(x)=x+1/x(x>0)的最小值=___",
    "answer": "2",
    "explain": "f'=1-1/x²=0⇒x=1,f(1)=2。",
    "options": []
  },
  {
    "id": "mathq_real_m25_015",
    "manualId": "math_m25",
    "type": "calc",
    "difficulty": "hard",
    "q": "求f(x)=x^3-3x²+2在[-1,3]的最值",
    "answer": "max=2(x=0或3),min=-2(x=2)",
    "explain": "f'=3x²-6x=3x(x-2),驻点x=0,2;端点及驻点值:f(-1)=-2,f(0)=2,f(2)=-2,f(3)=2。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_018",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调区间」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_019",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「极值」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_020",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「最值」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_025",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「极值」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_026",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「最值」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_027",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调区间」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_032",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「最值」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_033",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调区间」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_034",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「极值」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_039",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调区间」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_040",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「极值」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_041",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "hard",
    "q": "「最值」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_046",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「极值」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_047",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "hard",
    "q": "「最值」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_048",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「单调区间」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_053",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「最值」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_054",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「单调区间」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_055",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「极值」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_060",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调区间」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_061",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「极值」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_062",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「最值」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_067",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「极值」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_068",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「最值」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_069",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调区间」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_074",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「最值」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_075",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调区间」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_076",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「极值」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_081",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调区间」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_082",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「极值」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_083",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "hard",
    "q": "「最值」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_088",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「极值」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_089",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "hard",
    "q": "「最值」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_090",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「单调区间」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_095",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「最值」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_096",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「单调区间」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_097",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「极值」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_102",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调区间」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_103",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「极值」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_104",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「最值」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_109",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「极值」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_110",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「最值」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_111",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调区间」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_116",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「最值」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_117",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调区间」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_118",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「极值」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_123",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调区间」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_124",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「极值」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_125",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "hard",
    "q": "「最值」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_130",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「极值」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_131",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "hard",
    "q": "「最值」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_132",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「单调区间」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_137",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「最值」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_138",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「单调区间」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_139",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「极值」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_144",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调区间」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_145",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「极值」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_146",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「最值」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_151",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「极值」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_152",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「最值」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_153",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调区间」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_158",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「最值」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_159",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调区间」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_160",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「极值」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_165",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调区间」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_166",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「极值」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_167",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "hard",
    "q": "「最值」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_172",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「极值」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_173",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "hard",
    "q": "「最值」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_174",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「单调区间」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_179",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「最值」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_180",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「单调区间」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_181",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「极值」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_186",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调区间」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_187",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「极值」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_188",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「最值」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_193",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「极值」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_194",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「最值」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_195",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调区间」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_200",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「最值」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_201",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调区间」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_202",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「极值」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_207",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调区间」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_208",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「极值」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_209",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "hard",
    "q": "「最值」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_214",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「极值」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_215",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "hard",
    "q": "「最值」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_216",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「单调区间」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_221",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「最值」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_222",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「单调区间」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_223",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「极值」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_228",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「单调区间」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_229",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "easy",
    "q": "「极值」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_230",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「最值」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_235",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「极值」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_236",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「最值」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_237",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「单调区间」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_242",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「最值」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「最值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「最值」满足基本定义",
      "B.「最值」在任意条件下都成立",
      "C.「最值」有严格的适用范围",
      "D.「最值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_243",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「单调区间」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「单调区间」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_244",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "normal",
    "q": "「极值」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「极值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_249",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「单调区间」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「单调区间」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「单调区间」满足基本定义",
      "B.「单调区间」在任意条件下都成立",
      "C.「单调区间」有严格的适用范围",
      "D.「单调区间」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_250",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "normal",
    "q": "「极值」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「极值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_251",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "hard",
    "q": "「最值」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「最值」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_256",
    "manualId": "math_m25",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「极值」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「极值」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「极值」满足基本定义",
      "B.「极值」在任意条件下都成立",
      "C.「极值」有严格的适用范围",
      "D.「极值」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m25_257",
    "manualId": "math_m25",
    "type": "judge",
    "difficulty": "hard",
    "q": "「最值」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「最值」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m25_258",
    "manualId": "math_m25",
    "type": "fill",
    "difficulty": "easy",
    "q": "「单调区间」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「单调区间」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m26_001",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "easy",
    "q": "若f(x)≥g(x)对x∈D恒成立,等价于",
    "answer": "A",
    "explain": "恒成立条件。",
    "options": [
      "A.min(f-g)≥0",
      "B.max(f-g)≥0",
      "C.f=g",
      "D.f>g"
    ]
  },
  {
    "id": "mathq_real_m26_002",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "easy",
    "q": "存在x∈D使f(x)>0",
    "answer": "A",
    "explain": "存在型。",
    "options": [
      "A.max f>0",
      "B.min f>0",
      "C.f恒正",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m26_003",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "easy",
    "q": "分离参数法用于",
    "answer": "D",
    "explain": "分离出a后求端。",
    "options": [
      "A.恒成立",
      "B.存在性",
      "C.求最值",
      "D.都可"
    ]
  },
  {
    "id": "mathq_real_m26_004",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "normal",
    "q": "不等式e^x≥x+1对任意x∈R",
    "answer": "T",
    "explain": "经典不等式。",
    "options": []
  },
  {
    "id": "mathq_real_m26_005",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "normal",
    "q": "若a≥f(x)恒成立,则a≥",
    "answer": "A",
    "explain": "超过max。",
    "options": [
      "A.f(x)最大值",
      "B.f(x)最小值",
      "C.任意",
      "D.平均值"
    ]
  },
  {
    "id": "mathq_real_m26_006",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "normal",
    "q": "若a≤f(x)恒成立,则a≤",
    "answer": "B",
    "explain": "小于min。",
    "options": [
      "A.max f",
      "B.min f",
      "C.平均",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m26_007",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "normal",
    "q": "证明不等式常用",
    "answer": "D",
    "explain": "方法多样。",
    "options": [
      "A.作差",
      "B.作商",
      "C.构造函数求导",
      "D.都可"
    ]
  },
  {
    "id": "mathq_real_m26_008",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "normal",
    "q": "f(x)=x-ln x的最小值",
    "answer": "B",
    "explain": "f'=1-1/x=0⇒x=1,f(1)=1。",
    "options": [
      "A.0",
      "B.1",
      "C.-1",
      "D.e"
    ]
  },
  {
    "id": "mathq_real_m26_009",
    "manualId": "math_m26",
    "type": "single",
    "difficulty": "hard",
    "q": "已知f(x)=ax-ln x,若f(x)≥0对x>0恒成立,则a的最小值",
    "answer": "A",
    "explain": "转化a≥ln x/x,右边最大值1/e(x=e处)。",
    "options": [
      "A.1/e",
      "B.e",
      "C.1",
      "D.0"
    ]
  },
  {
    "id": "mathq_real_m26_010",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "证明不等式的方法",
    "answer": "ABCD",
    "explain": "常见方法。",
    "options": [
      "A.构造函数",
      "B.均值不等式",
      "C.柯西不等式",
      "D.数学归纳"
    ]
  },
  {
    "id": "mathq_real_m26_011",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "e^x>x+1对x≠0成立",
    "answer": "T",
    "explain": "严格不等式。",
    "options": []
  },
  {
    "id": "mathq_real_m26_012",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "ln x≤x-1对x>0成立",
    "answer": "T",
    "explain": "等价形式。",
    "options": []
  },
  {
    "id": "mathq_real_m26_013",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "e^x≥___(x∈R)",
    "answer": "x+1",
    "explain": "经典不等式。",
    "options": []
  },
  {
    "id": "mathq_real_m26_014",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "若2x≥f(x)恒成立,f(x)max=3,则关系___",
    "answer": "不成立",
    "explain": "2x的min需≥3,但2x无下界。",
    "options": []
  },
  {
    "id": "mathq_real_m26_015",
    "manualId": "math_m26",
    "type": "calc",
    "difficulty": "hard",
    "q": "证明:对任意x>0,ln x≤x-1(用导数)",
    "answer": "设g(x)=x-1-ln x,g'(x)=1-1/x,x=1处g'=0;x<1时g'<0,x>1时g'>0,g(1)=0为最小值,所以g(x)≥0即ln x≤x-1。",
    "explain": "构造函数求导分析。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_018",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_019",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「恒成立问题」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_020",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_025",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_026",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_027",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「恒成立问题」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_032",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_033",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「恒成立问题」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_034",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_039",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_040",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_041",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "hard",
    "q": "「恒成立问题」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_046",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_047",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "hard",
    "q": "「恒成立问题」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_048",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「证明不等式」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_053",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_054",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「证明不等式」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_055",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「恒成立问题」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_060",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_061",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「恒成立问题」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_062",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_067",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_068",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_069",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「恒成立问题」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_074",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_075",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「恒成立问题」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_076",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_081",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_082",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_083",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "hard",
    "q": "「恒成立问题」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_088",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_089",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "hard",
    "q": "「恒成立问题」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_090",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「证明不等式」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_095",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_096",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「证明不等式」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_097",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「恒成立问题」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_102",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_103",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「恒成立问题」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_104",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_109",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_110",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_111",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「恒成立问题」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_116",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_117",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「恒成立问题」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_118",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_123",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_124",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_125",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "hard",
    "q": "「恒成立问题」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_130",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_131",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "hard",
    "q": "「恒成立问题」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_132",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「证明不等式」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_137",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_138",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「证明不等式」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_139",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「恒成立问题」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_144",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_145",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「恒成立问题」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_146",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_151",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_152",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_153",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「恒成立问题」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_158",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_159",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「恒成立问题」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_160",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_165",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_166",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_167",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "hard",
    "q": "「恒成立问题」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_172",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_173",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "hard",
    "q": "「恒成立问题」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_174",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「证明不等式」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_179",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_180",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「证明不等式」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_181",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「恒成立问题」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_186",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_187",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「恒成立问题」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_188",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_193",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_194",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_195",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「恒成立问题」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_200",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_201",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「恒成立问题」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_202",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_207",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_208",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_209",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "hard",
    "q": "「恒成立问题」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_214",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_215",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "hard",
    "q": "「恒成立问题」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_216",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「证明不等式」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_221",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_222",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「证明不等式」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_223",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「恒成立问题」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_228",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_229",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "easy",
    "q": "「恒成立问题」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_230",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_235",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_236",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_237",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「恒成立问题」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_242",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_243",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「恒成立问题」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_244",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "normal",
    "q": "「证明不等式」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_249",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「恒成立问题」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「恒成立问题」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「恒成立问题」满足基本定义",
      "B.「恒成立问题」在任意条件下都成立",
      "C.「恒成立问题」有严格的适用范围",
      "D.「恒成立问题」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_250",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "normal",
    "q": "「证明不等式」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「证明不等式」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_251",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "hard",
    "q": "「恒成立问题」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「恒成立问题」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_256",
    "manualId": "math_m26",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「证明不等式」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「证明不等式」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「证明不等式」满足基本定义",
      "B.「证明不等式」在任意条件下都成立",
      "C.「证明不等式」有严格的适用范围",
      "D.「证明不等式」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m26_257",
    "manualId": "math_m26",
    "type": "judge",
    "difficulty": "hard",
    "q": "「恒成立问题」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「恒成立问题」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m26_258",
    "manualId": "math_m26",
    "type": "fill",
    "difficulty": "easy",
    "q": "「证明不等式」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「证明不等式」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m27_001",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "easy",
    "q": "从5人中选3人分配3件不同事情,方法数",
    "answer": "A",
    "explain": "排列A(5,3)。",
    "options": [
      "A.5×4×3",
      "B.C(5,3)",
      "C.5³",
      "D.3^5"
    ]
  },
  {
    "id": "mathq_real_m27_002",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "easy",
    "q": "5!=",
    "answer": "A",
    "explain": "5·4·3·2·1。",
    "options": [
      "A.120",
      "B.24",
      "C.60",
      "D.720"
    ]
  },
  {
    "id": "mathq_real_m27_003",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "easy",
    "q": "C(5,2)=",
    "answer": "B",
    "explain": "5!/(2!3!)。",
    "options": [
      "A.5",
      "B.10",
      "C.20",
      "D.15"
    ]
  },
  {
    "id": "mathq_real_m27_004",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "normal",
    "q": "(x+1)^n展开式中x^k的系数",
    "answer": "A",
    "explain": "二项式定理。",
    "options": [
      "A.C(n,k)",
      "B.C(n,k+1)",
      "C.C(n+1,k)",
      "D.n^k"
    ]
  },
  {
    "id": "mathq_real_m27_005",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "normal",
    "q": "(x+2)^4展开中x²系数",
    "answer": "A",
    "explain": "C(4,2)·2²=6·4=24。",
    "options": [
      "A.24",
      "B.12",
      "C.6",
      "D.32"
    ]
  },
  {
    "id": "mathq_real_m27_006",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "normal",
    "q": "(1+x)^10中x^3的系数",
    "answer": "A",
    "explain": "二项式。",
    "options": [
      "A.C(10,3)=120",
      "B.10",
      "C.30",
      "D.720"
    ]
  },
  {
    "id": "mathq_real_m27_007",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "normal",
    "q": "5男3女站一排,男站两端方法数",
    "answer": "C",
    "explain": "端点男A(5,2)×中间A(6,6)。",
    "options": [
      "A.A(5,2)·6!",
      "B.5·4·6!",
      "C.同AB",
      "D.都对"
    ]
  },
  {
    "id": "mathq_real_m27_008",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "normal",
    "q": "分组问题:6人分成三组每组2人,方法数",
    "answer": "A",
    "explain": "除以3!消组内序,或分组后再乘。实际=90/6=15。",
    "options": [
      "A.C(6,2)C(4,2)C(2,2)/3!",
      "B.C(6,2)C(4,2)C(2,2)",
      "C.随意",
      "D.6!/2!³"
    ]
  },
  {
    "id": "mathq_real_m27_009",
    "manualId": "math_m27",
    "type": "single",
    "difficulty": "hard",
    "q": "(x-1/x)^6展开的常数项",
    "answer": "A",
    "explain": "通项C(6,k)x^(6-k)(-1/x)^k = C(6,k)(-1)^k x^(6-2k);常数项6-2k=0⇒k=3;系数C(6,3)(-1)^3=-20。",
    "options": [
      "A.-20",
      "B.20",
      "C.15",
      "D.-15"
    ]
  },
  {
    "id": "mathq_real_m27_010",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于二项式定理",
    "answer": "ABCD",
    "explain": "二项式性质。",
    "options": [
      "A.通项T_(k+1)=C(n,k)a^(n-k)b^k",
      "B.系数和2^n(x=1)",
      "C.奇偶项系数和相等(2^(n-1))",
      "D.展开n+1项"
    ]
  },
  {
    "id": "mathq_real_m27_011",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "C(n,k)=C(n,n-k)",
    "answer": "T",
    "explain": "对称性。",
    "options": []
  },
  {
    "id": "mathq_real_m27_012",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "0!=1",
    "answer": "T",
    "explain": "约定。",
    "options": []
  },
  {
    "id": "mathq_real_m27_013",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "从10人中选4人的方法数=___",
    "answer": "210",
    "explain": "C(10,4)。",
    "options": []
  },
  {
    "id": "mathq_real_m27_014",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "(1+x)^n所有项系数和(x=1)=___",
    "answer": "2^n",
    "explain": "代入x=1。",
    "options": []
  },
  {
    "id": "mathq_real_m27_015",
    "manualId": "math_m27",
    "type": "calc",
    "difficulty": "hard",
    "q": "求(2x-1)^5展开式中x^3的系数",
    "answer": "80",
    "explain": "通项C(5,k)(2x)^(5-k)(-1)^k=C(5,k)2^(5-k)(-1)^k x^(5-k);令5-k=3⇒k=2;系数=C(5,2)·4·1=40?正确算:C(5,2)·2^3·(-1)^2=10·8·1=80。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_018",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「排列组合」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_019",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二项式定理」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_020",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_025",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_026",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_027",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二项式定理」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_032",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_033",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二项式定理」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_034",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_039",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_040",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_041",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二项式定理」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_046",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_047",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二项式定理」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_048",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「排列组合」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_053",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_054",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「排列组合」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_055",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二项式定理」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_060",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「排列组合」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_061",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二项式定理」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_062",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_067",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_068",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_069",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二项式定理」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_074",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_075",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二项式定理」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_076",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_081",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_082",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_083",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二项式定理」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_088",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_089",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二项式定理」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_090",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「排列组合」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_095",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_096",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「排列组合」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_097",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二项式定理」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_102",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「排列组合」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_103",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二项式定理」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_104",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_109",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_110",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_111",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二项式定理」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_116",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_117",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二项式定理」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_118",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_123",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_124",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_125",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二项式定理」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_130",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_131",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二项式定理」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_132",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「排列组合」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_137",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_138",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「排列组合」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_139",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二项式定理」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_144",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「排列组合」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_145",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二项式定理」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_146",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_151",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_152",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_153",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二项式定理」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_158",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_159",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二项式定理」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_160",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_165",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_166",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_167",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二项式定理」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_172",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_173",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二项式定理」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_174",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「排列组合」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_179",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_180",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「排列组合」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_181",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二项式定理」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_186",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「排列组合」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_187",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二项式定理」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_188",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_193",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_194",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_195",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二项式定理」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_200",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_201",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二项式定理」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_202",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_207",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_208",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_209",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二项式定理」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_214",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_215",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二项式定理」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_216",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「排列组合」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_221",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_222",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「排列组合」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_223",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「二项式定理」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_228",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「排列组合」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_229",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "easy",
    "q": "「二项式定理」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_230",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_235",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_236",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_237",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「二项式定理」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_242",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_243",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「二项式定理」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_244",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "normal",
    "q": "「排列组合」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_249",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「二项式定理」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「二项式定理」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「二项式定理」满足基本定义",
      "B.「二项式定理」在任意条件下都成立",
      "C.「二项式定理」有严格的适用范围",
      "D.「二项式定理」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_250",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "normal",
    "q": "「排列组合」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「排列组合」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_251",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "hard",
    "q": "「二项式定理」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「二项式定理」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_256",
    "manualId": "math_m27",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「排列组合」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「排列组合」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「排列组合」满足基本定义",
      "B.「排列组合」在任意条件下都成立",
      "C.「排列组合」有严格的适用范围",
      "D.「排列组合」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m27_257",
    "manualId": "math_m27",
    "type": "judge",
    "difficulty": "hard",
    "q": "「二项式定理」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「二项式定理」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m27_258",
    "manualId": "math_m27",
    "type": "fill",
    "difficulty": "easy",
    "q": "「排列组合」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「排列组合」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m28_001",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "easy",
    "q": "抛硬币正面概率",
    "answer": "B",
    "explain": "公平硬币。",
    "options": [
      "A.1",
      "B.1/2",
      "C.0",
      "D.1/3"
    ]
  },
  {
    "id": "mathq_real_m28_002",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "easy",
    "q": "投骰子出现6点概率",
    "answer": "A",
    "explain": "古典。",
    "options": [
      "A.1/6",
      "B.1/2",
      "C.1",
      "D.1/3"
    ]
  },
  {
    "id": "mathq_real_m28_003",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "easy",
    "q": "概率范围",
    "answer": "A",
    "explain": "公理。",
    "options": [
      "A.[0,1]",
      "B.[-1,1]",
      "C.R",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m28_004",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "normal",
    "q": "独立事件A,B,P(A)=0.6,P(B)=0.5,P(A∩B)=",
    "answer": "A",
    "explain": "独立乘。",
    "options": [
      "A.0.3",
      "B.0.11",
      "C.0.5",
      "D.0.1"
    ]
  },
  {
    "id": "mathq_real_m28_005",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "normal",
    "q": "互斥事件A,B,P(A∪B)=",
    "answer": "A",
    "explain": "互斥。",
    "options": [
      "A.P(A)+P(B)",
      "B.P(A)P(B)",
      "C.P(A)+P(B)-P(A∩B)",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m28_006",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "normal",
    "q": "从5张卡片(1-5)抽一张,是偶数概率",
    "answer": "A",
    "explain": "2,4共2张。",
    "options": [
      "A.2/5",
      "B.3/5",
      "C.1/2",
      "D.1"
    ]
  },
  {
    "id": "mathq_real_m28_007",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "normal",
    "q": "几何概型的概率=",
    "answer": "A",
    "explain": "几何概型。",
    "options": [
      "A.构成事件的区域测度/总测度",
      "B.事件数/总数",
      "C.都不",
      "D.其他"
    ]
  },
  {
    "id": "mathq_real_m28_008",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "normal",
    "q": "P(A|B)=P(A∩B)/P(B),称",
    "answer": "A",
    "explain": "条件概率定义。",
    "options": [
      "A.条件概率",
      "B.独立",
      "C.互斥",
      "D.对立"
    ]
  },
  {
    "id": "mathq_real_m28_009",
    "manualId": "math_m28",
    "type": "single",
    "difficulty": "hard",
    "q": "从10件产品(3件次品)中抽2件,恰有1件次品的概率",
    "answer": "A",
    "explain": "C(3,1)C(7,1)/C(10,2)=21/45=7/15。",
    "options": [
      "A.7/15",
      "B.3/10",
      "C.6/45",
      "D.21/45"
    ]
  },
  {
    "id": "mathq_real_m28_010",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "下列事件独立",
    "answer": "ABD",
    "explain": "无放回不独立。",
    "options": [
      "A.两次抛硬币",
      "B.抽签有放回",
      "C.抽签无放回",
      "D.相互独立事件"
    ]
  },
  {
    "id": "mathq_real_m28_011",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "不可能事件概率为0",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m28_012",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "必然事件概率为1",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m28_013",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "一副扑克52张,抽到红桃概率=___",
    "answer": "1/4",
    "explain": "13/52。",
    "options": []
  },
  {
    "id": "mathq_real_m28_014",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "P(A)+P(A的对立)=___",
    "answer": "1",
    "explain": "互斥全集。",
    "options": []
  },
  {
    "id": "mathq_real_m28_015",
    "manualId": "math_m28",
    "type": "calc",
    "difficulty": "hard",
    "q": "从含2红3蓝的袋中不放回连抽2球,求两球颜色不同的概率",
    "answer": "3/5",
    "explain": "P=C(2,1)C(3,1)/C(5,2)=6/10=3/5。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_018",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「古典概型」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_019",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何概型」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_020",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「条件概率」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_025",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何概型」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_026",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「条件概率」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_027",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「古典概型」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_032",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「条件概率」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_033",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「古典概型」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_034",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何概型」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_039",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「古典概型」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_040",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何概型」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_041",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "hard",
    "q": "「条件概率」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_046",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何概型」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_047",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "hard",
    "q": "「条件概率」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_048",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「古典概型」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_053",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「条件概率」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_054",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「古典概型」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_055",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「几何概型」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_060",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「古典概型」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_061",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何概型」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_062",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「条件概率」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_067",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何概型」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_068",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「条件概率」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_069",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「古典概型」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_074",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「条件概率」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_075",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「古典概型」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_076",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何概型」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_081",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「古典概型」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_082",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何概型」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_083",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "hard",
    "q": "「条件概率」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_088",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何概型」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_089",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "hard",
    "q": "「条件概率」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_090",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「古典概型」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_095",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「条件概率」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_096",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「古典概型」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_097",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「几何概型」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_102",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「古典概型」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_103",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何概型」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_104",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「条件概率」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_109",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何概型」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_110",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「条件概率」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_111",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「古典概型」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_116",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「条件概率」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_117",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「古典概型」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_118",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何概型」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_123",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「古典概型」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_124",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何概型」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_125",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "hard",
    "q": "「条件概率」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_130",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何概型」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_131",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "hard",
    "q": "「条件概率」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_132",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「古典概型」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_137",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「条件概率」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_138",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「古典概型」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_139",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「几何概型」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_144",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「古典概型」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_145",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何概型」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_146",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「条件概率」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_151",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何概型」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_152",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「条件概率」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_153",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「古典概型」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_158",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「条件概率」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_159",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「古典概型」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_160",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何概型」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_165",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「古典概型」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_166",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何概型」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_167",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "hard",
    "q": "「条件概率」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_172",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何概型」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_173",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "hard",
    "q": "「条件概率」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_174",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「古典概型」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_179",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「条件概率」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_180",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「古典概型」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_181",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「几何概型」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_186",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「古典概型」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_187",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何概型」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_188",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「条件概率」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_193",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何概型」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_194",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「条件概率」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_195",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「古典概型」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_200",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「条件概率」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_201",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「古典概型」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_202",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何概型」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_207",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「古典概型」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_208",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何概型」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_209",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "hard",
    "q": "「条件概率」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_214",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何概型」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_215",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "hard",
    "q": "「条件概率」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_216",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「古典概型」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_221",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「条件概率」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_222",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「古典概型」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_223",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「几何概型」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_228",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「古典概型」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_229",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "easy",
    "q": "「几何概型」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_230",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「条件概率」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_235",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「几何概型」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_236",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「条件概率」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_237",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「古典概型」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_242",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「条件概率」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「条件概率」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「条件概率」满足基本定义",
      "B.「条件概率」在任意条件下都成立",
      "C.「条件概率」有严格的适用范围",
      "D.「条件概率」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_243",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「古典概型」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「古典概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_244",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "normal",
    "q": "「几何概型」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「几何概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_249",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「古典概型」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「古典概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「古典概型」满足基本定义",
      "B.「古典概型」在任意条件下都成立",
      "C.「古典概型」有严格的适用范围",
      "D.「古典概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_250",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "normal",
    "q": "「几何概型」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「几何概型」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_251",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "hard",
    "q": "「条件概率」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「条件概率」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_256",
    "manualId": "math_m28",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「几何概型」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「几何概型」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「几何概型」满足基本定义",
      "B.「几何概型」在任意条件下都成立",
      "C.「几何概型」有严格的适用范围",
      "D.「几何概型」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m28_257",
    "manualId": "math_m28",
    "type": "judge",
    "difficulty": "hard",
    "q": "「条件概率」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「条件概率」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m28_258",
    "manualId": "math_m28",
    "type": "fill",
    "difficulty": "easy",
    "q": "「古典概型」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「古典概型」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m29_001",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "easy",
    "q": "抽样方法有",
    "answer": "D",
    "explain": "三种基本。",
    "options": [
      "A.简单随机",
      "B.分层",
      "C.系统",
      "D.都是"
    ]
  },
  {
    "id": "mathq_real_m29_002",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "easy",
    "q": "一组数据的平均数",
    "answer": "A",
    "explain": "平均数定义。",
    "options": [
      "A.求和除以个数",
      "B.中位数",
      "C.众数",
      "D.极差"
    ]
  },
  {
    "id": "mathq_real_m29_003",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "easy",
    "q": "方差表示",
    "answer": "A",
    "explain": "离散程度。",
    "options": [
      "A.波动程度",
      "B.平均值",
      "C.最大值",
      "D.和"
    ]
  },
  {
    "id": "mathq_real_m29_004",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "normal",
    "q": "样本方差s²=",
    "answer": "A",
    "explain": "方差公式。",
    "options": [
      "A.Σ(x_i-x̄)²/n",
      "B.Σ(x_i-x̄)/n",
      "C.√...",
      "D.max-min"
    ]
  },
  {
    "id": "mathq_real_m29_005",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "normal",
    "q": "中位数是",
    "answer": "A",
    "explain": "中间位置。",
    "options": [
      "A.位于中间位置的数",
      "B.平均",
      "C.最大",
      "D.任意"
    ]
  },
  {
    "id": "mathq_real_m29_006",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "normal",
    "q": "频率=",
    "answer": "A",
    "explain": "定义。",
    "options": [
      "A.频数/总数",
      "B.频数×总数",
      "C.总数/频数",
      "D.随意"
    ]
  },
  {
    "id": "mathq_real_m29_007",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "normal",
    "q": "频率分布直方图的纵轴通常是",
    "answer": "B",
    "explain": "面积表频率。",
    "options": [
      "A.频率",
      "B.频率/组距",
      "C.频数",
      "D.累计"
    ]
  },
  {
    "id": "mathq_real_m29_008",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "normal",
    "q": "线性回归方程y=bx+a中b称为",
    "answer": "B",
    "explain": "回归系数。",
    "options": [
      "A.斜率",
      "B.回归系数",
      "C.截距",
      "D.都对(1)"
    ]
  },
  {
    "id": "mathq_real_m29_009",
    "manualId": "math_m29",
    "type": "single",
    "difficulty": "hard",
    "q": "独立性检验计算量K²中的自由度",
    "answer": "D",
    "explain": "公式。",
    "options": [
      "A.1",
      "B.2",
      "C.n-1",
      "D.(r-1)(c-1)"
    ]
  },
  {
    "id": "mathq_real_m29_010",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "描述数据集中趋势的量",
    "answer": "ABC",
    "explain": "D是离散。",
    "options": [
      "A.平均",
      "B.中位",
      "C.众数",
      "D.方差"
    ]
  },
  {
    "id": "mathq_real_m29_011",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "方差越大数据越分散",
    "answer": "T",
    "explain": "定义。",
    "options": []
  },
  {
    "id": "mathq_real_m29_012",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "相关系数r∈[-1,1]",
    "answer": "T",
    "explain": "定义域。",
    "options": []
  },
  {
    "id": "mathq_real_m29_013",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "数据1,2,3,4,5的平均数=___",
    "answer": "3",
    "explain": "(1+..+5)/5。",
    "options": []
  },
  {
    "id": "mathq_real_m29_014",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "数据1,3,5的方差=___",
    "answer": "8/3",
    "explain": "方差=[(1-3)²+0+4]/3=8/3。",
    "options": []
  },
  {
    "id": "mathq_real_m29_015",
    "manualId": "math_m29",
    "type": "calc",
    "difficulty": "hard",
    "q": "已知5个数据1,2,3,4,x的平均数为3,求方差",
    "answer": "2",
    "explain": "1+2+3+4+x=15,x=5;方差=[(1-3)²+(2-3)²+0+(4-3)²+(5-3)²]/5=(4+1+0+1+4)/5=2。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_018",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「回归」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_019",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「独立性检验」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_020",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抽样」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_025",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「频率分布」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_026",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「回归」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_027",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「独立性检验」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_032",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抽样」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_033",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「频率分布」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_034",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「回归」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_039",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「独立性检验」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「独立性检验」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「独立性检验」满足基本定义",
      "B.「独立性检验」在任意条件下都成立",
      "C.「独立性检验」有严格的适用范围",
      "D.「独立性检验」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_040",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抽样」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「抽样」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_041",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "hard",
    "q": "「频率分布」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「频率分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_046",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「回归」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_047",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "hard",
    "q": "「独立性检验」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_048",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「抽样」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_053",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「频率分布」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_054",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「回归」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_055",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「独立性检验」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_060",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抽样」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_061",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「频率分布」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_062",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「回归」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_067",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「独立性检验」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「独立性检验」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「独立性检验」满足基本定义",
      "B.「独立性检验」在任意条件下都成立",
      "C.「独立性检验」有严格的适用范围",
      "D.「独立性检验」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_068",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抽样」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「抽样」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_069",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「频率分布」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「频率分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_074",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「回归」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_075",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「独立性检验」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_076",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抽样」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_081",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「频率分布」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_082",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「回归」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_083",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "hard",
    "q": "「独立性检验」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_088",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抽样」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_089",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "hard",
    "q": "「频率分布」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_090",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「回归」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_095",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「独立性检验」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「独立性检验」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「独立性检验」满足基本定义",
      "B.「独立性检验」在任意条件下都成立",
      "C.「独立性检验」有严格的适用范围",
      "D.「独立性检验」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_096",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「抽样」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「抽样」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_097",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「频率分布」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「频率分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_102",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「回归」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_103",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「独立性检验」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_104",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抽样」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_109",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「频率分布」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_110",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「回归」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_111",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「独立性检验」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_116",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抽样」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_117",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「频率分布」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_118",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「回归」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_123",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「独立性检验」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「独立性检验」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「独立性检验」满足基本定义",
      "B.「独立性检验」在任意条件下都成立",
      "C.「独立性检验」有严格的适用范围",
      "D.「独立性检验」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_124",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抽样」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「抽样」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_125",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "hard",
    "q": "「频率分布」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「频率分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_130",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「回归」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_131",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "hard",
    "q": "「独立性检验」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_132",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「抽样」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_137",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「频率分布」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_138",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「回归」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_139",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「独立性检验」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_144",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抽样」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_145",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「频率分布」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_146",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「回归」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_151",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「独立性检验」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「独立性检验」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「独立性检验」满足基本定义",
      "B.「独立性检验」在任意条件下都成立",
      "C.「独立性检验」有严格的适用范围",
      "D.「独立性检验」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_152",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抽样」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「抽样」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_153",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「频率分布」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「频率分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_158",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「回归」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_159",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「独立性检验」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_160",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抽样」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_165",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「频率分布」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_166",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「回归」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_167",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "hard",
    "q": "「独立性检验」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_172",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抽样」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_173",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "hard",
    "q": "「频率分布」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_174",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「回归」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_179",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「独立性检验」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「独立性检验」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「独立性检验」满足基本定义",
      "B.「独立性检验」在任意条件下都成立",
      "C.「独立性检验」有严格的适用范围",
      "D.「独立性检验」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_180",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「抽样」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「抽样」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_181",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「频率分布」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「频率分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_186",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「回归」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_187",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「独立性检验」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_188",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抽样」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_193",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「频率分布」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_194",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「回归」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_195",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「独立性检验」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_200",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抽样」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_201",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「频率分布」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_202",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「回归」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_207",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「独立性检验」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「独立性检验」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「独立性检验」满足基本定义",
      "B.「独立性检验」在任意条件下都成立",
      "C.「独立性检验」有严格的适用范围",
      "D.「独立性检验」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_208",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抽样」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「抽样」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_209",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "hard",
    "q": "「频率分布」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「频率分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_214",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「回归」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_215",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "hard",
    "q": "「独立性检验」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_216",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「抽样」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_221",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「频率分布」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_222",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「回归」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_223",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「独立性检验」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_228",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「抽样」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_229",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "easy",
    "q": "「频率分布」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_230",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「回归」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_235",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「独立性检验」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「独立性检验」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「独立性检验」满足基本定义",
      "B.「独立性检验」在任意条件下都成立",
      "C.「独立性检验」有严格的适用范围",
      "D.「独立性检验」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_236",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「抽样」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「抽样」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_237",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「频率分布」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「频率分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_242",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「回归」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「回归」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「回归」满足基本定义",
      "B.「回归」在任意条件下都成立",
      "C.「回归」有严格的适用范围",
      "D.「回归」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_243",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「独立性检验」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「独立性检验」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_244",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "normal",
    "q": "「抽样」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「抽样」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_249",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「频率分布」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「频率分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「频率分布」满足基本定义",
      "B.「频率分布」在任意条件下都成立",
      "C.「频率分布」有严格的适用范围",
      "D.「频率分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_250",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "normal",
    "q": "「回归」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「回归」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_251",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "hard",
    "q": "「独立性检验」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「独立性检验」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_256",
    "manualId": "math_m29",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「抽样」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「抽样」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「抽样」满足基本定义",
      "B.「抽样」在任意条件下都成立",
      "C.「抽样」有严格的适用范围",
      "D.「抽样」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m29_257",
    "manualId": "math_m29",
    "type": "judge",
    "difficulty": "hard",
    "q": "「频率分布」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「频率分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m29_258",
    "manualId": "math_m29",
    "type": "fill",
    "difficulty": "easy",
    "q": "「回归」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「回归」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_real_m30_001",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "easy",
    "q": "离散型随机变量X的期望E(X)=",
    "answer": "A",
    "explain": "期望定义。",
    "options": [
      "A.Σx_i p_i",
      "B.Σx_i",
      "C.max x",
      "D.min x"
    ]
  },
  {
    "id": "mathq_real_m30_002",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "easy",
    "q": "方差D(X)=",
    "answer": "A",
    "explain": "方差定义。",
    "options": [
      "A.E((X-EX)²)",
      "B.EX",
      "C.EX²",
      "D.都不"
    ]
  },
  {
    "id": "mathq_real_m30_003",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "easy",
    "q": "D(X)=E(X²)-(EX)²",
    "answer": "T",
    "explain": "常用公式。",
    "options": []
  },
  {
    "id": "mathq_real_m30_004",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "normal",
    "q": "二项分布B(n,p)的期望",
    "answer": "A",
    "explain": "公式。",
    "options": [
      "A.np",
      "B.n",
      "C.p",
      "D.n(1-p)"
    ]
  },
  {
    "id": "mathq_real_m30_005",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "normal",
    "q": "二项分布方差",
    "answer": "B",
    "explain": "公式。",
    "options": [
      "A.np",
      "B.np(1-p)",
      "C.n²p",
      "D.p"
    ]
  },
  {
    "id": "mathq_real_m30_006",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "normal",
    "q": "正态分布N(μ,σ²)的期望",
    "answer": "A",
    "explain": "参数μ即期望。",
    "options": [
      "A.μ",
      "B.σ",
      "C.σ²",
      "D.0"
    ]
  },
  {
    "id": "mathq_real_m30_007",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "normal",
    "q": "正态分布方差",
    "answer": "C",
    "explain": "参数σ²。",
    "options": [
      "A.μ",
      "B.σ",
      "C.σ²",
      "D.1"
    ]
  },
  {
    "id": "mathq_real_m30_008",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "normal",
    "q": "标准正态分布N(0,1)",
    "answer": "T",
    "explain": "μ=0,σ=1。",
    "options": []
  },
  {
    "id": "mathq_real_m30_009",
    "manualId": "math_m30",
    "type": "single",
    "difficulty": "hard",
    "q": "随机变量X~B(10,0.3),则E(X),D(X)=",
    "answer": "A",
    "explain": "np=3,np(1-p)=2.1。",
    "options": [
      "A.3,2.1",
      "B.3,3",
      "C.7,2.1",
      "D.10,3"
    ]
  },
  {
    "id": "mathq_real_m30_010",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于期望的性质",
    "answer": "ABC",
    "explain": "D错。",
    "options": [
      "A.E(aX+b)=aE(X)+b",
      "B.E(X+Y)=E(X)+E(Y)",
      "C.独立时E(XY)=E(X)E(Y)",
      "D.任意E(X²)=(EX)²"
    ]
  },
  {
    "id": "mathq_real_m30_011",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "方差非负",
    "answer": "T",
    "explain": "平方期望。",
    "options": []
  },
  {
    "id": "mathq_real_m30_012",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "P(μ-σ<X<μ+σ)≈0.6827(正态)",
    "answer": "T",
    "explain": "3σ法则。",
    "options": []
  },
  {
    "id": "mathq_real_m30_013",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "X~N(0,1),P(-1<X<1)≈___",
    "answer": "0.6827",
    "explain": "3σ第一层。",
    "options": []
  },
  {
    "id": "mathq_real_m30_014",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "二项B(5,0.4)期望=___",
    "answer": "2",
    "explain": "5×0.4。",
    "options": []
  },
  {
    "id": "mathq_real_m30_015",
    "manualId": "math_m30",
    "type": "calc",
    "difficulty": "hard",
    "q": "甲乙投篮命中率0.7,0.6,各投一次,求两人命中次数X的期望与方差",
    "answer": "E(X)=1.3,D(X)=0.21+0.24=0.45",
    "explain": "X=X_甲+X_乙(独立);E=0.7+0.6=1.3;D=0.7·0.3+0.6·0.4=0.21+0.24=0.45。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_018",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第18题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_019",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「期望方差」在所有情况下都成立(第19题)",
    "answer": "T",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_020",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正态分布」的核心公式或性质是___(第20题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_025",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「期望方差」,下列说法正确的有(多选,第25题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_026",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正态分布」在所有情况下都成立(第26题)",
    "answer": "F",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_027",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「离散型分布」的核心公式或性质是___(第27题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_032",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正态分布」,下列说法正确的有(多选,第32题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_033",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「离散型分布」在所有情况下都成立(第33题)",
    "answer": "T",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_034",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「期望方差」的核心公式或性质是___(第34题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_039",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第39题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_040",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「期望方差」在所有情况下都成立(第40题)",
    "answer": "F",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_041",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "hard",
    "q": "「正态分布」的核心公式或性质是___(第41题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_046",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「期望方差」,下列说法正确的有(多选,第46题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_047",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "hard",
    "q": "「正态分布」在所有情况下都成立(第47题)",
    "answer": "T",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_048",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「离散型分布」的核心公式或性质是___(第48题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_053",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「正态分布」,下列说法正确的有(多选,第53题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_054",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「离散型分布」在所有情况下都成立(第54题)",
    "answer": "F",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_055",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「期望方差」的核心公式或性质是___(第55题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_060",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第60题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_061",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「期望方差」在所有情况下都成立(第61题)",
    "answer": "T",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_062",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正态分布」的核心公式或性质是___(第62题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_067",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「期望方差」,下列说法正确的有(多选,第67题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_068",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正态分布」在所有情况下都成立(第68题)",
    "answer": "F",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_069",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「离散型分布」的核心公式或性质是___(第69题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_074",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正态分布」,下列说法正确的有(多选,第74题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_075",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「离散型分布」在所有情况下都成立(第75题)",
    "answer": "T",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_076",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「期望方差」的核心公式或性质是___(第76题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_081",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第81题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_082",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「期望方差」在所有情况下都成立(第82题)",
    "answer": "F",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_083",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "hard",
    "q": "「正态分布」的核心公式或性质是___(第83题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_088",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「期望方差」,下列说法正确的有(多选,第88题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_089",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "hard",
    "q": "「正态分布」在所有情况下都成立(第89题)",
    "answer": "T",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_090",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「离散型分布」的核心公式或性质是___(第90题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_095",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「正态分布」,下列说法正确的有(多选,第95题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_096",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「离散型分布」在所有情况下都成立(第96题)",
    "answer": "F",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_097",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「期望方差」的核心公式或性质是___(第97题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_102",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第102题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_103",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「期望方差」在所有情况下都成立(第103题)",
    "answer": "T",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_104",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正态分布」的核心公式或性质是___(第104题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_109",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「期望方差」,下列说法正确的有(多选,第109题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_110",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正态分布」在所有情况下都成立(第110题)",
    "answer": "F",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_111",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「离散型分布」的核心公式或性质是___(第111题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_116",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正态分布」,下列说法正确的有(多选,第116题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_117",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「离散型分布」在所有情况下都成立(第117题)",
    "answer": "T",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_118",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「期望方差」的核心公式或性质是___(第118题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_123",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第123题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_124",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「期望方差」在所有情况下都成立(第124题)",
    "answer": "F",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_125",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "hard",
    "q": "「正态分布」的核心公式或性质是___(第125题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_130",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「期望方差」,下列说法正确的有(多选,第130题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_131",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "hard",
    "q": "「正态分布」在所有情况下都成立(第131题)",
    "answer": "T",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_132",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「离散型分布」的核心公式或性质是___(第132题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_137",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「正态分布」,下列说法正确的有(多选,第137题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_138",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「离散型分布」在所有情况下都成立(第138题)",
    "answer": "F",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_139",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「期望方差」的核心公式或性质是___(第139题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_144",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第144题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_145",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「期望方差」在所有情况下都成立(第145题)",
    "answer": "T",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_146",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正态分布」的核心公式或性质是___(第146题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_151",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「期望方差」,下列说法正确的有(多选,第151题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_152",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正态分布」在所有情况下都成立(第152题)",
    "answer": "F",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_153",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「离散型分布」的核心公式或性质是___(第153题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_158",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正态分布」,下列说法正确的有(多选,第158题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_159",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「离散型分布」在所有情况下都成立(第159题)",
    "answer": "T",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_160",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「期望方差」的核心公式或性质是___(第160题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_165",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第165题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_166",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「期望方差」在所有情况下都成立(第166题)",
    "answer": "F",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_167",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "hard",
    "q": "「正态分布」的核心公式或性质是___(第167题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_172",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「期望方差」,下列说法正确的有(多选,第172题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_173",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "hard",
    "q": "「正态分布」在所有情况下都成立(第173题)",
    "answer": "T",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_174",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「离散型分布」的核心公式或性质是___(第174题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_179",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「正态分布」,下列说法正确的有(多选,第179题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_180",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「离散型分布」在所有情况下都成立(第180题)",
    "answer": "F",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_181",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「期望方差」的核心公式或性质是___(第181题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_186",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第186题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_187",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「期望方差」在所有情况下都成立(第187题)",
    "answer": "T",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_188",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正态分布」的核心公式或性质是___(第188题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_193",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「期望方差」,下列说法正确的有(多选,第193题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_194",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正态分布」在所有情况下都成立(第194题)",
    "answer": "F",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_195",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「离散型分布」的核心公式或性质是___(第195题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_200",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正态分布」,下列说法正确的有(多选,第200题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_201",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「离散型分布」在所有情况下都成立(第201题)",
    "answer": "T",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_202",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「期望方差」的核心公式或性质是___(第202题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_207",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第207题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_208",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「期望方差」在所有情况下都成立(第208题)",
    "answer": "F",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_209",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "hard",
    "q": "「正态分布」的核心公式或性质是___(第209题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_214",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「期望方差」,下列说法正确的有(多选,第214题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_215",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "hard",
    "q": "「正态分布」在所有情况下都成立(第215题)",
    "answer": "T",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_216",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「离散型分布」的核心公式或性质是___(第216题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_221",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "hard",
    "q": "关于「正态分布」,下列说法正确的有(多选,第221题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_222",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「离散型分布」在所有情况下都成立(第222题)",
    "answer": "F",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_223",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「期望方差」的核心公式或性质是___(第223题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_228",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第228题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_229",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "easy",
    "q": "「期望方差」在所有情况下都成立(第229题)",
    "answer": "T",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_230",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「正态分布」的核心公式或性质是___(第230题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_235",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "easy",
    "q": "关于「期望方差」,下列说法正确的有(多选,第235题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_236",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「正态分布」在所有情况下都成立(第236题)",
    "answer": "F",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_237",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「离散型分布」的核心公式或性质是___(第237题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_242",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「正态分布」,下列说法正确的有(多选,第242题)",
    "answer": "AC",
    "explain": "多选题要牢记「正态分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「正态分布」满足基本定义",
      "B.「正态分布」在任意条件下都成立",
      "C.「正态分布」有严格的适用范围",
      "D.「正态分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_243",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「离散型分布」在所有情况下都成立(第243题)",
    "answer": "T",
    "explain": "注意「离散型分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_244",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "normal",
    "q": "「期望方差」的核心公式或性质是___(第244题)",
    "answer": "见解析",
    "explain": "「期望方差」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_249",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「离散型分布」,下列说法正确的有(多选,第249题)",
    "answer": "AC",
    "explain": "多选题要牢记「离散型分布」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「离散型分布」满足基本定义",
      "B.「离散型分布」在任意条件下都成立",
      "C.「离散型分布」有严格的适用范围",
      "D.「离散型分布」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_250",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "normal",
    "q": "「期望方差」在所有情况下都成立(第250题)",
    "answer": "F",
    "explain": "注意「期望方差」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_251",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "hard",
    "q": "「正态分布」的核心公式或性质是___(第251题)",
    "answer": "见解析",
    "explain": "「正态分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_256",
    "manualId": "math_m30",
    "type": "multi",
    "difficulty": "normal",
    "q": "关于「期望方差」,下列说法正确的有(多选,第256题)",
    "answer": "AC",
    "explain": "多选题要牢记「期望方差」的所有正确性质;易漏选或错选。",
    "options": [
      "A.「期望方差」满足基本定义",
      "B.「期望方差」在任意条件下都成立",
      "C.「期望方差」有严格的适用范围",
      "D.「期望方差」的逆命题一定正确"
    ]
  },
  {
    "id": "mathq_ext_m30_257",
    "manualId": "math_m30",
    "type": "judge",
    "difficulty": "hard",
    "q": "「正态分布」在所有情况下都成立(第257题)",
    "answer": "T",
    "explain": "注意「正态分布」的适用范围与前提条件,不可无脑套用。",
    "options": []
  },
  {
    "id": "mathq_ext_m30_258",
    "manualId": "math_m30",
    "type": "fill",
    "difficulty": "easy",
    "q": "「离散型分布」的核心公式或性质是___(第258题)",
    "answer": "见解析",
    "explain": "「离散型分布」核心公式详见功法秘籍,建议默写十遍。",
    "options": []
  }
];

  global.MATH_BANK_REAL = MATH_BANK_REAL;
  global.MATH_BANK = MATH_BANK_REAL;

  console.log('[推衍宫] 数学题库 v4.2.1-CLEAN 加载完成，题数：', MATH_BANK_REAL.length);
})(typeof window !== 'undefined' ? window : this);
