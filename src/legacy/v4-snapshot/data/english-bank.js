/* ===================================================================
 * english-bank.js · v4.3.7 清洗版
 * 原始 83 题，剔除模板水题 0 道，剩 83 道
 * =================================================================== */
(function (global) {
  'use strict';
  const ENGLISH_BANK = [
 {
  "id": "en_q1_1",
  "manualId": "en_m1",
  "type": "single",
  "difficulty": "easy",
  "monster": "时态小妖",
  "q": "— Where is Tom? — He ____ to the library.",
  "options": [
   {
    "k": "A",
    "v": "has gone"
   },
   {
    "k": "B",
    "v": "has been"
   },
   {
    "k": "C",
    "v": "went"
   },
   {
    "k": "D",
    "v": "goes"
   }
  ],
  "answer": "A",
  "explain": "has gone to = 已经去了某地（现在不在)；has been to = 曾经去过(现在已回来)。Tom 不在，所以用 has gone to。"
 },
 {
  "id": "en_q1_2",
  "manualId": "en_m1",
  "type": "single",
  "difficulty": "normal",
  "monster": "过去完成妖",
  "q": "By the time he arrived, the meeting ____.",
  "options": [
   {
    "k": "A",
    "v": "has ended"
   },
   {
    "k": "B",
    "v": "had ended"
   },
   {
    "k": "C",
    "v": "ended"
   },
   {
    "k": "D",
    "v": "was ending"
   }
  ],
  "answer": "B",
  "explain": "by the time + 过去时从句 → 主句用过去完成时（“过去的过去”——他到达之前会议已结束）。"
 },
 {
  "id": "en_q1_3",
  "manualId": "en_m1",
  "type": "single",
  "difficulty": "normal",
  "monster": "被动妖",
  "q": "The novel ____ by Lu Xun in 1918.",
  "options": [
   {
    "k": "A",
    "v": "writes"
   },
   {
    "k": "B",
    "v": "wrote"
   },
   {
    "k": "C",
    "v": "was written"
   },
   {
    "k": "D",
    "v": "is written"
   }
  ],
  "answer": "C",
  "explain": "小说被写，一般过去时被动 was + written。"
 },
 {
  "id": "en_q1_4",
  "manualId": "en_m1",
  "type": "single",
  "difficulty": "easy",
  "monster": "现在完成妖",
  "q": "I ____ him for three years since we graduated.",
  "options": [
   {
    "k": "A",
    "v": "don't see"
   },
   {
    "k": "B",
    "v": "didn't see"
   },
   {
    "k": "C",
    "v": "haven't seen"
   },
   {
    "k": "D",
    "v": "won't see"
   }
  ],
  "answer": "C",
  "explain": "for three years / since ... → 现在完成时的经典搭配。"
 },
 {
  "id": "en_q1_5",
  "manualId": "en_m1",
  "type": "single",
  "difficulty": "hard",
  "monster": "完成进行妖",
  "q": "She ____ English for over ten years, and she still keeps learning.",
  "options": [
   {
    "k": "A",
    "v": "has learned"
   },
   {
    "k": "B",
    "v": "has been learning"
   },
   {
    "k": "C",
    "v": "is learning"
   },
   {
    "k": "D",
    "v": "learned"
   }
  ],
  "answer": "B",
  "explain": "“持续到现在还在继续”——现在完成进行时 has been doing。"
 },
 {
  "id": "en_q1_6",
  "manualId": "en_m1",
  "type": "judge",
  "difficulty": "easy",
  "monster": "语态判断妖",
  "q": "“The book is written by Lu Xun.” 属于一般现在时被动语态。",
  "answer": "对",
  "explain": "is + written（V.过去分词）= 一般现在时被动。"
 },
 {
  "id": "en_q1_7",
  "manualId": "en_m1",
  "type": "fill",
  "difficulty": "normal",
  "monster": "语法填空妖",
  "q": "By this time next year, he ____ (finish) his PhD.",
  "answer": [
   "will have finished"
  ],
  "explain": "by + 将来时间 → 将来完成时 will have done。"
 },
 {
  "id": "en_q2_1",
  "manualId": "en_m2",
  "type": "single",
  "difficulty": "easy",
  "monster": "关系词小妖",
  "q": "This is the book ____ I bought yesterday.",
  "options": [
   {
    "k": "A",
    "v": "who"
   },
   {
    "k": "B",
    "v": "which"
   },
   {
    "k": "C",
    "v": "whose"
   },
   {
    "k": "D",
    "v": "where"
   }
  ],
  "answer": "B",
  "explain": "先行词 book 是物，从句缺宾语，用 which/that。"
 },
 {
  "id": "en_q2_2",
  "manualId": "en_m2",
  "type": "single",
  "difficulty": "normal",
  "monster": "介词加which妖",
  "q": "The house in ____ we lived last year has been sold.",
  "options": [
   {
    "k": "A",
    "v": "that"
   },
   {
    "k": "B",
    "v": "which"
   },
   {
    "k": "C",
    "v": "where"
   },
   {
    "k": "D",
    "v": "it"
   }
  ],
  "answer": "B",
  "explain": "介词后必用 which，不用 that。"
 },
 {
  "id": "en_q2_3",
  "manualId": "en_m2",
  "type": "single",
  "difficulty": "hard",
  "monster": "同位语从句大妖",
  "q": "The news ____ our team had won the match made us excited.",
  "options": [
   {
    "k": "A",
    "v": "which"
   },
   {
    "k": "B",
    "v": "what"
   },
   {
    "k": "C",
    "v": "that"
   },
   {
    "k": "D",
    "v": "when"
   }
  ],
  "answer": "C",
  "explain": "that 后是完整句(our team had won the match)，且解释 news 内容→同位语从句 that。"
 },
 {
  "id": "en_q2_4",
  "manualId": "en_m2",
  "type": "single",
  "difficulty": "normal",
  "monster": "宾语从句妖",
  "q": "I don't know ____ she will come tomorrow.",
  "options": [
   {
    "k": "A",
    "v": "that"
   },
   {
    "k": "B",
    "v": "if"
   },
   {
    "k": "C",
    "v": "what"
   },
   {
    "k": "D",
    "v": "which"
   }
  ],
  "answer": "B",
  "explain": "don't know + 是否… → whether/if 均可，B 正确。"
 },
 {
  "id": "en_q2_5",
  "manualId": "en_m2",
  "type": "single",
  "difficulty": "hard",
  "monster": "主语从句妖",
  "q": "____ he said at the meeting surprised everyone.",
  "options": [
   {
    "k": "A",
    "v": "That"
   },
   {
    "k": "B",
    "v": "What"
   },
   {
    "k": "C",
    "v": "Which"
   },
   {
    "k": "D",
    "v": "Who"
   }
  ],
  "answer": "B",
  "explain": "said 后缺宾语，主语从句用 what（=the thing that）。"
 },
 {
  "id": "en_q2_6",
  "manualId": "en_m2",
  "type": "fill",
  "difficulty": "normal",
  "monster": "状语从句妖",
  "q": "____ (although) it was raining, they still went hiking.",
  "answer": [
   "Although",
   "Though"
  ],
  "explain": "让步状语从句 Although/Though + 主句无 but。"
 },
 {
  "id": "en_q3_1",
  "manualId": "en_m3",
  "type": "single",
  "difficulty": "easy",
  "monster": "非谓语小妖",
  "q": "I remember ____ him at the party last week.",
  "options": [
   {
    "k": "A",
    "v": "to meet"
   },
   {
    "k": "B",
    "v": "meeting"
   },
   {
    "k": "C",
    "v": "to have met"
   },
   {
    "k": "D",
    "v": "met"
   }
  ],
  "answer": "B",
  "explain": "remember doing = 记得做过某事。last week 表示已经发生了。"
 },
 {
  "id": "en_q3_2",
  "manualId": "en_m3",
  "type": "single",
  "difficulty": "normal",
  "monster": "意外结果妖",
  "q": "He rushed to the station only ____ that the train had left.",
  "options": [
   {
    "k": "A",
    "v": "finding"
   },
   {
    "k": "B",
    "v": "to find"
   },
   {
    "k": "C",
    "v": "found"
   },
   {
    "k": "D",
    "v": "find"
   }
  ],
  "answer": "B",
  "explain": "only to do 表意外/失望的结果。"
 },
 {
  "id": "en_q3_3",
  "manualId": "en_m3",
  "type": "single",
  "difficulty": "hard",
  "monster": "过去分词妖",
  "q": "The window ____ by the boy was broken again.",
  "options": [
   {
    "k": "A",
    "v": "repairing"
   },
   {
    "k": "B",
    "v": "repaired"
   },
   {
    "k": "C",
    "v": "to repair"
   },
   {
    "k": "D",
    "v": "to be repaired"
   }
  ],
  "answer": "B",
  "explain": "window 被男孩修（被动 + 已完成）→ 过去分词 repaired 作定语。"
 },
 {
  "id": "en_q3_4",
  "manualId": "en_m3",
  "type": "single",
  "difficulty": "normal",
  "monster": "现在分词状语妖",
  "q": "____ down the street, I met an old friend.",
  "options": [
   {
    "k": "A",
    "v": "Walking"
   },
   {
    "k": "B",
    "v": "Walked"
   },
   {
    "k": "C",
    "v": "To walk"
   },
   {
    "k": "D",
    "v": "Walk"
   }
  ],
  "answer": "A",
  "explain": "I 主动做 walk，用现在分词作状语。"
 },
 {
  "id": "en_q3_5",
  "manualId": "en_m3",
  "type": "multi",
  "difficulty": "hard",
  "monster": "多选辨析妖",
  "q": "下列哪些搭配是正确的？",
  "options": [
   {
    "k": "A",
    "v": "enjoy doing"
   },
   {
    "k": "B",
    "v": "want to do"
   },
   {
    "k": "C",
    "v": "finish to do"
   },
   {
    "k": "D",
    "v": "suggest doing"
   }
  ],
  "answer": [
   "A",
   "B",
   "D"
  ],
  "explain": "finish 后接 doing 不接 to do，故 C 错。"
 },
 {
  "id": "en_q8_1",
  "manualId": "en_m8",
  "type": "single",
  "difficulty": "normal",
  "monster": "现在虚拟妖",
  "q": "If I ____ you, I would call the police right away.",
  "options": [
   {
    "k": "A",
    "v": "am"
   },
   {
    "k": "B",
    "v": "was"
   },
   {
    "k": "C",
    "v": "were"
   },
   {
    "k": "D",
    "v": "be"
   }
  ],
  "answer": "C",
  "explain": "与现在事实相反，be 动词一律用 were。"
 },
 {
  "id": "en_q8_2",
  "manualId": "en_m8",
  "type": "single",
  "difficulty": "hard",
  "monster": "过去虚拟大妖",
  "q": "If she ____ harder, she ____ the exam last month.",
  "options": [
   {
    "k": "A",
    "v": "had studied / would pass"
   },
   {
    "k": "B",
    "v": "studied / would have passed"
   },
   {
    "k": "C",
    "v": "had studied / would have passed"
   },
   {
    "k": "D",
    "v": "studied / would pass"
   }
  ],
  "answer": "C",
  "explain": "与过去事实相反：if had done, would have done。"
 },
 {
  "id": "en_q8_3",
  "manualId": "en_m8",
  "type": "single",
  "difficulty": "hard",
  "monster": "倒装虚拟妖",
  "q": "____ I known your address, I would have visited you.",
  "options": [
   {
    "k": "A",
    "v": "If"
   },
   {
    "k": "B",
    "v": "Had"
   },
   {
    "k": "C",
    "v": "Should"
   },
   {
    "k": "D",
    "v": "Were"
   }
  ],
  "answer": "B",
  "explain": "省 if 倒装：Had I known = If I had known。"
 },
 {
  "id": "en_q8_4",
  "manualId": "en_m8",
  "type": "single",
  "difficulty": "normal",
  "monster": "wish 虚拟妖",
  "q": "I wish I ____ younger — those were the best years of my life.",
  "options": [
   {
    "k": "A",
    "v": "am"
   },
   {
    "k": "B",
    "v": "was"
   },
   {
    "k": "C",
    "v": "were"
   },
   {
    "k": "D",
    "v": "have been"
   }
  ],
  "answer": "C",
  "explain": "wish + 与现在事实相反用 did/were。"
 },
 {
  "id": "en_q8_5",
  "manualId": "en_m8",
  "type": "single",
  "difficulty": "hard",
  "monster": "建议虚拟妖",
  "q": "The professor suggested that we ____ the report by Friday.",
  "options": [
   {
    "k": "A",
    "v": "finish"
   },
   {
    "k": "B",
    "v": "finished"
   },
   {
    "k": "C",
    "v": "would finish"
   },
   {
    "k": "D",
    "v": "will finish"
   }
  ],
  "answer": "A",
  "explain": "suggest 表建议 + that 从句 → (should) do，可省 should。"
 },
 {
  "id": "en_q9_1",
  "manualId": "en_m9",
  "type": "single",
  "difficulty": "normal",
  "monster": "部分倒装妖",
  "q": "Never ____ such a beautiful sunset before.",
  "options": [
   {
    "k": "A",
    "v": "I have seen"
   },
   {
    "k": "B",
    "v": "have I seen"
   },
   {
    "k": "C",
    "v": "I saw"
   },
   {
    "k": "D",
    "v": "did I see"
   }
  ],
  "answer": "B",
  "explain": "Never 开头 → 部分倒装 have I seen（现在完成时中的 have 提前）。"
 },
 {
  "id": "en_q9_2",
  "manualId": "en_m9",
  "type": "single",
  "difficulty": "hard",
  "monster": "only倒装妖",
  "q": "Only after graduating from college ____ his own business.",
  "options": [
   {
    "k": "A",
    "v": "he started"
   },
   {
    "k": "B",
    "v": "did he start"
   },
   {
    "k": "C",
    "v": "started he"
   },
   {
    "k": "D",
    "v": "has he started"
   }
  ],
  "answer": "B",
  "explain": "Only + 状语开头 → 部分倒装 did he start。"
 },
 {
  "id": "en_q9_3",
  "manualId": "en_m9",
  "type": "single",
  "difficulty": "hard",
  "monster": "强调句大妖",
  "q": "____ in 1949 ____ the People's Republic of China was founded.",
  "options": [
   {
    "k": "A",
    "v": "It was / that"
   },
   {
    "k": "B",
    "v": "It is / that"
   },
   {
    "k": "C",
    "v": "That was / which"
   },
   {
    "k": "D",
    "v": "It was / when"
   }
  ],
  "answer": "A",
  "explain": "强调时间状语用 It was ... that ...，去掉 It was ... that 句子完整。"
 },
 {
  "id": "en_q9_4",
  "manualId": "en_m9",
  "type": "single",
  "difficulty": "normal",
  "monster": "not until妖",
  "q": "Not until midnight ____ home.",
  "options": [
   {
    "k": "A",
    "v": "he returned"
   },
   {
    "k": "B",
    "v": "did he return"
   },
   {
    "k": "C",
    "v": "he did return"
   },
   {
    "k": "D",
    "v": "returned he"
   }
  ],
  "answer": "B",
  "explain": "Not until + 时间开头 → 部分倒装 did he return。"
 },
 {
  "id": "en_q9_5",
  "manualId": "en_m9",
  "type": "judge",
  "difficulty": "easy",
  "monster": "倒装判断妖",
  "q": "\"So do I.\" 属于表示同意的部分倒装结构。",
  "answer": "对",
  "explain": "So/Neither/Nor + 助动词 + 主语，用于表达\"我也是/我也不是\"。"
 },
 {
  "id": "en_q10_1",
  "manualId": "en_m10",
  "type": "single",
  "difficulty": "normal",
  "monster": "推测妖",
  "q": "The light is on. Someone ____ in the room.",
  "options": [
   {
    "k": "A",
    "v": "may be"
   },
   {
    "k": "B",
    "v": "must be"
   },
   {
    "k": "C",
    "v": "can be"
   },
   {
    "k": "D",
    "v": "should be"
   }
  ],
  "answer": "B",
  "explain": "肯定推测：一定 → must be。"
 },
 {
  "id": "en_q10_2",
  "manualId": "en_m10",
  "type": "single",
  "difficulty": "hard",
  "monster": "责备情态妖",
  "q": "You ____ me — I was waiting for you for two hours!",
  "options": [
   {
    "k": "A",
    "v": "should have called"
   },
   {
    "k": "B",
    "v": "must have called"
   },
   {
    "k": "C",
    "v": "can have called"
   },
   {
    "k": "D",
    "v": "may have called"
   }
  ],
  "answer": "A",
  "explain": "should have done = 本该做而没做（含责备）。"
 },
 {
  "id": "en_q10_3",
  "manualId": "en_m10",
  "type": "single",
  "difficulty": "normal",
  "monster": "过去推测妖",
  "q": "The road is wet. It ____ last night.",
  "options": [
   {
    "k": "A",
    "v": "may rain"
   },
   {
    "k": "B",
    "v": "must rain"
   },
   {
    "k": "C",
    "v": "must have rained"
   },
   {
    "k": "D",
    "v": "should rain"
   }
  ],
  "answer": "C",
  "explain": "对过去肯定推测 must have done。"
 },
 {
  "id": "en_q10_4",
  "manualId": "en_m10",
  "type": "single",
  "difficulty": "easy",
  "monster": "能力情态妖",
  "q": "When I was young, I ____ speak French fluently.",
  "options": [
   {
    "k": "A",
    "v": "can"
   },
   {
    "k": "B",
    "v": "could"
   },
   {
    "k": "C",
    "v": "may"
   },
   {
    "k": "D",
    "v": "should"
   }
  ],
  "answer": "B",
  "explain": "过去的能力 → could。"
 },
 {
  "id": "en_q10_5",
  "manualId": "en_m10",
  "type": "single",
  "difficulty": "hard",
  "monster": "needn't妖",
  "q": "You ____ come — I already fixed it myself.",
  "options": [
   {
    "k": "A",
    "v": "mustn't have"
   },
   {
    "k": "B",
    "v": "needn't have"
   },
   {
    "k": "C",
    "v": "wouldn't have"
   },
   {
    "k": "D",
    "v": "shouldn't have"
   }
  ],
  "answer": "B",
  "explain": "needn't have done = 本没必要做而做了。"
 },
 {
  "id": "en_q11_1",
  "manualId": "en_m11",
  "type": "single",
  "difficulty": "easy",
  "monster": "让步连词妖",
  "q": "____ it was raining, they still went to the beach.",
  "options": [
   {
    "k": "A",
    "v": "Because"
   },
   {
    "k": "B",
    "v": "Although"
   },
   {
    "k": "C",
    "v": "If"
   },
   {
    "k": "D",
    "v": "When"
   }
  ],
  "answer": "B",
  "explain": "尽管…还是…→ Although / Though。"
 },
 {
  "id": "en_q11_2",
  "manualId": "en_m11",
  "type": "single",
  "difficulty": "normal",
  "monster": "despite妖",
  "q": "____ the heavy rain, the game continued.",
  "options": [
   {
    "k": "A",
    "v": "Although"
   },
   {
    "k": "B",
    "v": "Because"
   },
   {
    "k": "C",
    "v": "Despite"
   },
   {
    "k": "D",
    "v": "Since"
   }
  ],
  "answer": "C",
  "explain": "Despite + 名词短语。Although 后必须接从句。"
 },
 {
  "id": "en_q11_3",
  "manualId": "en_m11",
  "type": "single",
  "difficulty": "normal",
  "monster": "介词妖",
  "q": "The book on the table belongs ____ me.",
  "options": [
   {
    "k": "A",
    "v": "to"
   },
   {
    "k": "B",
    "v": "for"
   },
   {
    "k": "C",
    "v": "with"
   },
   {
    "k": "D",
    "v": "at"
   }
  ],
  "answer": "A",
  "explain": "belong to sb = 属于某人。"
 },
 {
  "id": "en_q11_4",
  "manualId": "en_m11",
  "type": "single",
  "difficulty": "hard",
  "monster": "not only妖",
  "q": "Not only ____ the game, but he also broke the record.",
  "options": [
   {
    "k": "A",
    "v": "he won"
   },
   {
    "k": "B",
    "v": "did he win"
   },
   {
    "k": "C",
    "v": "he did win"
   },
   {
    "k": "D",
    "v": "won he"
   }
  ],
  "answer": "B",
  "explain": "Not only 开头 → 部分倒装 did he win。"
 },
 {
  "id": "en_q12_1",
  "manualId": "en_m12",
  "type": "single",
  "difficulty": "normal",
  "monster": "as well as妖",
  "q": "The teacher, as well as her students, ____ going to attend the meeting.",
  "options": [
   {
    "k": "A",
    "v": "is"
   },
   {
    "k": "B",
    "v": "are"
   },
   {
    "k": "C",
    "v": "were"
   },
   {
    "k": "D",
    "v": "be"
   }
  ],
  "answer": "A",
  "explain": "as well as 短语忽略，看真正主语 The teacher → is。"
 },
 {
  "id": "en_q12_2",
  "manualId": "en_m12",
  "type": "single",
  "difficulty": "normal",
  "monster": "either or妖",
  "q": "Either he or his brothers ____ responsible for it.",
  "options": [
   {
    "k": "A",
    "v": "is"
   },
   {
    "k": "B",
    "v": "are"
   },
   {
    "k": "C",
    "v": "was"
   },
   {
    "k": "D",
    "v": "be"
   }
  ],
  "answer": "B",
  "explain": "Either...or... 就近原则，看 brothers → are。"
 },
 {
  "id": "en_q12_3",
  "manualId": "en_m12",
  "type": "single",
  "difficulty": "hard",
  "monster": "the number大妖",
  "q": "The number of students in our class ____ 50.",
  "options": [
   {
    "k": "A",
    "v": "is"
   },
   {
    "k": "B",
    "v": "are"
   },
   {
    "k": "C",
    "v": "have"
   },
   {
    "k": "D",
    "v": "were"
   }
  ],
  "answer": "A",
  "explain": "the number of + 复数 + 单数谓语（表数量）。"
 },
 {
  "id": "en_q12_4",
  "manualId": "en_m12",
  "type": "single",
  "difficulty": "normal",
  "monster": "a number妖",
  "q": "A number of books ____ on the desk.",
  "options": [
   {
    "k": "A",
    "v": "is"
   },
   {
    "k": "B",
    "v": "are"
   },
   {
    "k": "C",
    "v": "was"
   },
   {
    "k": "D",
    "v": "has been"
   }
  ],
  "answer": "B",
  "explain": "a number of + 复数 + 复数谓语（表许多）。"
 },
 {
  "id": "en_q13_1",
  "manualId": "en_m13",
  "type": "single",
  "difficulty": "easy",
  "monster": "冠词妖",
  "q": "She is ____ honest girl.",
  "options": [
   {
    "k": "A",
    "v": "a"
   },
   {
    "k": "B",
    "v": "an"
   },
   {
    "k": "C",
    "v": "the"
   },
   {
    "k": "D",
    "v": "/"
   }
  ],
  "answer": "B",
  "explain": "honest 首音是元音 [ɒ]，用 an。"
 },
 {
  "id": "en_q13_2",
  "manualId": "en_m13",
  "type": "single",
  "difficulty": "normal",
  "monster": "university妖",
  "q": "He is ____ university student.",
  "options": [
   {
    "k": "A",
    "v": "a"
   },
   {
    "k": "B",
    "v": "an"
   },
   {
    "k": "C",
    "v": "the"
   },
   {
    "k": "D",
    "v": "/"
   }
  ],
  "answer": "A",
  "explain": "university 首音是辅音 [j]，用 a。"
 },
 {
  "id": "en_q13_3",
  "manualId": "en_m13",
  "type": "single",
  "difficulty": "normal",
  "monster": "代词妖",
  "q": "There are five apples. One is red; ____ are green.",
  "options": [
   {
    "k": "A",
    "v": "the other"
   },
   {
    "k": "B",
    "v": "others"
   },
   {
    "k": "C",
    "v": "the others"
   },
   {
    "k": "D",
    "v": "another"
   }
  ],
  "answer": "C",
  "explain": "表 5 个中剩下的 4 个特指→ the others。"
 },
 {
  "id": "en_q13_4",
  "manualId": "en_m13",
  "type": "single",
  "difficulty": "hard",
  "monster": "固定搭配妖",
  "q": "He plays ____ piano well, but doesn't like playing ____ football.",
  "options": [
   {
    "k": "A",
    "v": "the / the"
   },
   {
    "k": "B",
    "v": "/ / /"
   },
   {
    "k": "C",
    "v": "the / /"
   },
   {
    "k": "D",
    "v": "/ / the"
   }
  ],
  "answer": "C",
  "explain": "乐器前 the，球类前零冠词。"
 },
 {
  "id": "en_q14_1",
  "manualId": "en_m14",
  "type": "single",
  "difficulty": "easy",
  "monster": "-ing/-ed 妖",
  "q": "I am ____ in the ____ movie.",
  "options": [
   {
    "k": "A",
    "v": "interesting / interested"
   },
   {
    "k": "B",
    "v": "interested / interesting"
   },
   {
    "k": "C",
    "v": "interested / interested"
   },
   {
    "k": "D",
    "v": "interesting / interesting"
   }
  ],
  "answer": "B",
  "explain": "人感到→-ed；物令人→-ing。"
 },
 {
  "id": "en_q14_2",
  "manualId": "en_m14",
  "type": "single",
  "difficulty": "normal",
  "monster": "比较级妖",
  "q": "This box is ____ than that one.",
  "options": [
   {
    "k": "A",
    "v": "more heavy"
   },
   {
    "k": "B",
    "v": "much more heavy"
   },
   {
    "k": "C",
    "v": "heavier"
   },
   {
    "k": "D",
    "v": "more heavier"
   }
  ],
  "answer": "C",
  "explain": "单音节+y 结尾变 y 为 i +er → heavier。"
 },
 {
  "id": "en_q14_3",
  "manualId": "en_m14",
  "type": "single",
  "difficulty": "hard",
  "monster": "the 比较级妖",
  "q": "The harder you work, ____ progress you'll make.",
  "options": [
   {
    "k": "A",
    "v": "more"
   },
   {
    "k": "B",
    "v": "the more"
   },
   {
    "k": "C",
    "v": "much more"
   },
   {
    "k": "D",
    "v": "much"
   }
  ],
  "answer": "B",
  "explain": "the + 比较级...the + 比较级：越…越…。"
 },
 {
  "id": "en_q14_4",
  "manualId": "en_m14",
  "type": "single",
  "difficulty": "normal",
  "monster": "副词位置妖",
  "q": "She sings ____.",
  "options": [
   {
    "k": "A",
    "v": "good"
   },
   {
    "k": "B",
    "v": "well"
   },
   {
    "k": "C",
    "v": "nice"
   },
   {
    "k": "D",
    "v": "beautiful"
   }
  ],
  "answer": "B",
  "explain": "sing 是动词，需副词修饰 → well。"
 },
 {
  "id": "en_q4_1",
  "manualId": "en_m4",
  "type": "single",
  "difficulty": "normal",
  "monster": "派生词妖",
  "q": "The ____ of the economy has been rapid.",
  "options": [
   {
    "k": "A",
    "v": "develop"
   },
   {
    "k": "B",
    "v": "developing"
   },
   {
    "k": "C",
    "v": "development"
   },
   {
    "k": "D",
    "v": "developed"
   }
  ],
  "answer": "C",
  "explain": "the 后 + of，中间需要名词 → development。"
 },
 {
  "id": "en_q4_2",
  "manualId": "en_m4",
  "type": "single",
  "difficulty": "normal",
  "monster": "易混词妖",
  "q": "Smoking will ____ your health.",
  "options": [
   {
    "k": "A",
    "v": "affect"
   },
   {
    "k": "B",
    "v": "effect"
   },
   {
    "k": "C",
    "v": "affects"
   },
   {
    "k": "D",
    "v": "effective"
   }
  ],
  "answer": "A",
  "explain": "affect 动词=影响；effect 名词。"
 },
 {
  "id": "en_q4_3",
  "manualId": "en_m4",
  "type": "single",
  "difficulty": "easy",
  "monster": "raise/rise妖",
  "q": "The sun ____ in the east.",
  "options": [
   {
    "k": "A",
    "v": "raises"
   },
   {
    "k": "B",
    "v": "rises"
   },
   {
    "k": "C",
    "v": "raised"
   },
   {
    "k": "D",
    "v": "rose"
   }
  ],
  "answer": "B",
  "explain": "rise 自动词(升起)不及物；raise 及物动词(举起)。"
 },
 {
  "id": "en_q4_4",
  "manualId": "en_m4",
  "type": "fill",
  "difficulty": "normal",
  "monster": "词形变化妖",
  "q": "His ____ (perform) at the concert was outstanding.",
  "answer": [
   "performance"
  ],
  "explain": "his 后 + 形容词 outstanding 修饰的名词 → performance。"
 },
 {
  "id": "en_q15_1",
  "manualId": "en_m15",
  "type": "single",
  "difficulty": "easy",
  "monster": "look妖",
  "q": "Please ____ the new word in the dictionary.",
  "options": [
   {
    "k": "A",
    "v": "look after"
   },
   {
    "k": "B",
    "v": "look up"
   },
   {
    "k": "C",
    "v": "look at"
   },
   {
    "k": "D",
    "v": "look for"
   }
  ],
  "answer": "B",
  "explain": "look up = 查阅（词典）。"
 },
 {
  "id": "en_q15_2",
  "manualId": "en_m15",
  "type": "single",
  "difficulty": "normal",
  "monster": "take妖",
  "q": "She ____ knitting during her spare time.",
  "options": [
   {
    "k": "A",
    "v": "took off"
   },
   {
    "k": "B",
    "v": "took over"
   },
   {
    "k": "C",
    "v": "took up"
   },
   {
    "k": "D",
    "v": "took after"
   }
  ],
  "answer": "C",
  "explain": "take up + 爱好 = 开始从事。"
 },
 {
  "id": "en_q15_3",
  "manualId": "en_m15",
  "type": "single",
  "difficulty": "normal",
  "monster": "get妖",
  "q": "I can't ____ this bad news — I need some time.",
  "options": [
   {
    "k": "A",
    "v": "get over"
   },
   {
    "k": "B",
    "v": "get on"
   },
   {
    "k": "C",
    "v": "get up"
   },
   {
    "k": "D",
    "v": "get in"
   }
  ],
  "answer": "A",
  "explain": "get over = 克服（悲痛/困难）。"
 },
 {
  "id": "en_q15_4",
  "manualId": "en_m15",
  "type": "single",
  "difficulty": "hard",
  "monster": "put妖",
  "q": "The meeting was ____ due to the storm.",
  "options": [
   {
    "k": "A",
    "v": "put on"
   },
   {
    "k": "B",
    "v": "put off"
   },
   {
    "k": "C",
    "v": "put out"
   },
   {
    "k": "D",
    "v": "put up"
   }
  ],
  "answer": "B",
  "explain": "put off = 推迟。"
 },
 {
  "id": "en_q15_5",
  "manualId": "en_m15",
  "type": "multi",
  "difficulty": "hard",
  "monster": "come/make/break多选妖",
  "q": "下列哪些搭配意思是\"提出\"？",
  "options": [
   {
    "k": "A",
    "v": "come up with"
   },
   {
    "k": "B",
    "v": "put forward"
   },
   {
    "k": "C",
    "v": "make up"
   },
   {
    "k": "D",
    "v": "bring up"
   }
  ],
  "answer": [
   "A",
   "B",
   "D"
  ],
  "explain": "make up = 编造/化妆/组成，不是\"提出\"。"
 },
 {
  "id": "en_q16_1",
  "manualId": "en_m16",
  "type": "fill",
  "difficulty": "normal",
  "monster": "词形变化妖",
  "q": "This book is very ____ (help) for students.",
  "answer": [
   "helpful"
  ],
  "explain": "be 后接形容词 → helpful。"
 },
 {
  "id": "en_q16_2",
  "manualId": "en_m16",
  "type": "fill",
  "difficulty": "normal",
  "monster": "副词填空妖",
  "q": "He drove ____ (quick) so that he could arrive in time.",
  "answer": [
   "quickly"
  ],
  "explain": "修饰动词 drove，用副词 quickly。"
 },
 {
  "id": "en_q16_3",
  "manualId": "en_m16",
  "type": "fill",
  "difficulty": "hard",
  "monster": "比较级填空妖",
  "q": "This year's harvest is much ____ (good) than last year's.",
  "answer": [
   "better"
  ],
  "explain": "much + 比较级；good 的比较级不规则 → better。"
 },
 {
  "id": "en_q16_4",
  "manualId": "en_m16",
  "type": "fill",
  "difficulty": "hard",
  "monster": "非谓语填空妖",
  "q": "____ (walk) along the river, we saw many beautiful flowers.",
  "answer": [
   "Walking"
  ],
  "explain": "we 主动 walk，用现在分词作状语。"
 },
 {
  "id": "en_q16_5",
  "manualId": "en_m16",
  "type": "fill",
  "difficulty": "normal",
  "monster": "过去分词填空妖",
  "q": "The letter ____ (write) by my grandfather is still preserved.",
  "answer": [
   "written"
  ],
  "explain": "letter 被写→过去分词 written 作定语。"
 },
 {
  "id": "en_q5_1",
  "manualId": "en_m5",
  "type": "single",
  "difficulty": "normal",
  "monster": "细节题妖",
  "q": "阅读题问 \"How much did the writer pay for the ticket?\"，属于什么题型？",
  "options": [
   {
    "k": "A",
    "v": "细节理解题"
   },
   {
    "k": "B",
    "v": "推理判断题"
   },
   {
    "k": "C",
    "v": "主旨大意题"
   },
   {
    "k": "D",
    "v": "词义猜测题"
   }
  ],
  "answer": "A",
  "explain": "带具体数值/信息的问句是典型的细节题。"
 },
 {
  "id": "en_q5_2",
  "manualId": "en_m5",
  "type": "single",
  "difficulty": "normal",
  "monster": "推理妖",
  "q": "关键词 \"infer / suggest / imply\" 出现在题干中，判断题型？",
  "options": [
   {
    "k": "A",
    "v": "细节题"
   },
   {
    "k": "B",
    "v": "推理题"
   },
   {
    "k": "C",
    "v": "主旨题"
   },
   {
    "k": "D",
    "v": "情感题"
   }
  ],
  "answer": "B",
  "explain": "infer/suggest/imply 是推理判断题的经典标志词。"
 },
 {
  "id": "en_q5_3",
  "manualId": "en_m5",
  "type": "single",
  "difficulty": "hard",
  "monster": "词义猜测大妖",
  "q": "原文说 \"His face was flushed with embarrassment.\" \"flushed\" 最可能意思是？",
  "options": [
   {
    "k": "A",
    "v": "苍白"
   },
   {
    "k": "B",
    "v": "涨红"
   },
   {
    "k": "C",
    "v": "冷汗直冒"
   },
   {
    "k": "D",
    "v": "冰冷"
   }
  ],
  "answer": "B",
  "explain": "embarrassment 尴尬时脸会变红，\"flushed\" = 涨红。"
 },
 {
  "id": "en_q5_4",
  "manualId": "en_m5",
  "type": "judge",
  "difficulty": "easy",
  "monster": "技巧判断妖",
  "q": "阅读理解主旨题应重点看首段和末段。",
  "answer": "对",
  "explain": "首段引出主题，末段总结，两处是主旨的核心区。"
 },
 {
  "id": "en_q17_1",
  "manualId": "en_m17",
  "type": "single",
  "difficulty": "normal",
  "monster": "完形逻辑妖",
  "q": "完形填空中，看到 \"However, ...\" 之后应选：",
  "options": [
   {
    "k": "A",
    "v": "与前文一致的表述"
   },
   {
    "k": "B",
    "v": "与前文转折/相反的表述"
   },
   {
    "k": "C",
    "v": "与前文因果的表述"
   },
   {
    "k": "D",
    "v": "与前文并列的表述"
   }
  ],
  "answer": "B",
  "explain": "However 表转折，之后一定与前文相反。"
 },
 {
  "id": "en_q17_2",
  "manualId": "en_m17",
  "type": "single",
  "difficulty": "normal",
  "monster": "七选五代词妖",
  "q": "七选五中，某选项开头是 \"This shows that...\"，判断依据？",
  "options": [
   {
    "k": "A",
    "v": "This 必有前指，前文应有一件事"
   },
   {
    "k": "B",
    "v": "This 表将来"
   },
   {
    "k": "C",
    "v": "This 与后文无关"
   },
   {
    "k": "D",
    "v": "This 只用于主句"
   }
  ],
  "answer": "A",
  "explain": "代词 this/these/that/those 必有前指，需要看前文有什么\"事情\"。"
 },
 {
  "id": "en_q17_3",
  "manualId": "en_m17",
  "type": "judge",
  "difficulty": "easy",
  "monster": "完形首句妖",
  "q": "完形填空的首句提供完整信息，一般不设空。",
  "answer": "对",
  "explain": "首句是主题句，作者用来交代背景，几乎从不空白。"
 },
 {
  "id": "en_q6_1",
  "manualId": "en_m6",
  "type": "single",
  "difficulty": "easy",
  "monster": "开头句妖",
  "q": "邀请信最经典的开头句是？",
  "options": [
   {
    "k": "A",
    "v": "I am writing to invite you to..."
   },
   {
    "k": "B",
    "v": "I am writing to apply for..."
   },
   {
    "k": "C",
    "v": "I am writing to complain about..."
   },
   {
    "k": "D",
    "v": "I am writing to apologize for..."
   }
  ],
  "answer": "A",
  "explain": "invite = 邀请。"
 },
 {
  "id": "en_q6_2",
  "manualId": "en_m6",
  "type": "single",
  "difficulty": "normal",
  "monster": "感谢信开头妖",
  "q": "感谢信最合适的开头是？",
  "options": [
   {
    "k": "A",
    "v": "I am sorry to write to you"
   },
   {
    "k": "B",
    "v": "I am writing to express my sincere gratitude for..."
   },
   {
    "k": "C",
    "v": "I hate to trouble you but..."
   },
   {
    "k": "D",
    "v": "I have to remind you..."
   }
  ],
  "answer": "B",
  "explain": "express one's sincere gratitude = 表示诚挚的感谢。"
 },
 {
  "id": "en_q6_3",
  "manualId": "en_m6",
  "type": "judge",
  "difficulty": "easy",
  "monster": "结尾句妖",
  "q": "应用文结尾常用 \"I am looking forward to your reply.\"",
  "answer": "对",
  "explain": "看到 \"I am looking forward to...\" 就是应用文结尾的固定礼貌套语。"
 },
 {
  "id": "en_q18_1",
  "manualId": "en_m18",
  "type": "single",
  "difficulty": "hard",
  "monster": "续写升级词妖",
  "q": "下列哪个词是 \"said\" 的高级替换？",
  "options": [
   {
    "k": "A",
    "v": "walked"
   },
   {
    "k": "B",
    "v": "ate"
   },
   {
    "k": "C",
    "v": "remarked"
   },
   {
    "k": "D",
    "v": "became"
   }
  ],
  "answer": "C",
  "explain": "said → remarked/whispered/muttered/declared 均可。"
 },
 {
  "id": "en_q18_2",
  "manualId": "en_m18",
  "type": "single",
  "difficulty": "hard",
  "monster": "续写加分句妖",
  "q": "\"____ with fear, Sarah opened the door.\" 哪个填入能体现分词作状语加分句型？",
  "options": [
   {
    "k": "A",
    "v": "Tremble"
   },
   {
    "k": "B",
    "v": "Trembling"
   },
   {
    "k": "C",
    "v": "Trembled"
   },
   {
    "k": "D",
    "v": "To tremble"
   }
  ],
  "answer": "B",
  "explain": "Sarah 主动 tremble，用现在分词作状语。"
 },
 {
  "id": "en_q18_3",
  "manualId": "en_m18",
  "type": "multi",
  "difficulty": "hard",
  "monster": "高级替换多选",
  "q": "下列哪些是 \"happy\" 的高级替换？",
  "options": [
   {
    "k": "A",
    "v": "delighted"
   },
   {
    "k": "B",
    "v": "thrilled"
   },
   {
    "k": "C",
    "v": "gloomy"
   },
   {
    "k": "D",
    "v": "overjoyed"
   }
  ],
  "answer": [
   "A",
   "B",
   "D"
  ],
  "explain": "gloomy = 阴郁的，是 sad 的替换，不是 happy 的。"
 },
 {
  "id": "en_q7_1",
  "manualId": "en_m7",
  "type": "single",
  "difficulty": "easy",
  "monster": "听力策略妖",
  "q": "听力开始前应该做什么？",
  "options": [
   {
    "k": "A",
    "v": "预读题目和选项"
   },
   {
    "k": "B",
    "v": "先做完型填空"
   },
   {
    "k": "C",
    "v": "休息一下"
   },
   {
    "k": "D",
    "v": "背单词"
   }
  ],
  "answer": "A",
  "explain": "预读题目和选项能大幅提高听力理解率。"
 },
 {
  "id": "en_q7_2",
  "manualId": "en_m7",
  "type": "judge",
  "difficulty": "easy",
  "monster": "听力信号词妖",
  "q": "听力中 but/however/actually 后往往是重点。",
  "answer": "对",
  "explain": "转折词后一定是核心信息。"
 },
 {
  "id": "en_q7_3",
  "manualId": "en_m7",
  "type": "single",
  "difficulty": "normal",
  "monster": "场景词汇妖",
  "q": "听到 \"boarding pass, gate, customs\"，最可能的场景是？",
  "options": [
   {
    "k": "A",
    "v": "医院"
   },
   {
    "k": "B",
    "v": "机场"
   },
   {
    "k": "C",
    "v": "超市"
   },
   {
    "k": "D",
    "v": "学校"
   }
  ],
  "answer": "B",
  "explain": "boarding pass=登机牌，gate=登机口，customs=海关。"
 },
 {
  "id": "en_qBoss1",
  "manualId": "en_m1",
  "type": "single",
  "difficulty": "boss",
  "monster": "时态大妖王",
  "q": "By the end of next year, I ____ English for ten years.",
  "options": [
   {
    "k": "A",
    "v": "will learn"
   },
   {
    "k": "B",
    "v": "will have learned"
   },
   {
    "k": "C",
    "v": "have learned"
   },
   {
    "k": "D",
    "v": "am learning"
   }
  ],
  "answer": "B",
  "explain": "by + 将来时间 → 将来完成时 will have done。"
 },
 {
  "id": "en_qBoss2",
  "manualId": "en_m2",
  "type": "single",
  "difficulty": "boss",
  "monster": "从句妖王",
  "q": "Is this the reason ____ he explained at the meeting for his careless mistake?",
  "options": [
   {
    "k": "A",
    "v": "why"
   },
   {
    "k": "B",
    "v": "that"
   },
   {
    "k": "C",
    "v": "when"
   },
   {
    "k": "D",
    "v": "which"
   }
  ],
  "answer": "B",
  "explain": "先行词 reason，但从句中 explained 缺宾语 → 用 that/which，而非 why。"
 },
 {
  "id": "en_qBoss3",
  "manualId": "en_m8",
  "type": "single",
  "difficulty": "boss",
  "monster": "虚拟妖王",
  "q": "The manager insists that the meeting ____ postponed until next Monday.",
  "options": [
   {
    "k": "A",
    "v": "is"
   },
   {
    "k": "B",
    "v": "was"
   },
   {
    "k": "C",
    "v": "be"
   },
   {
    "k": "D",
    "v": "were"
   }
  ],
  "answer": "C",
  "explain": "insist（坚持要）+ that 从句 → should + 动词原形，可省 should → be。"
 },
 {
  "id": "en_qBoss4",
  "manualId": "en_m9",
  "type": "single",
  "difficulty": "boss",
  "monster": "倒装妖王",
  "q": "____ had she got home ____ the phone rang.",
  "options": [
   {
    "k": "A",
    "v": "No sooner / when"
   },
   {
    "k": "B",
    "v": "Hardly / than"
   },
   {
    "k": "C",
    "v": "Scarcely / than"
   },
   {
    "k": "D",
    "v": "Hardly / when"
   }
  ],
  "answer": "D",
  "explain": "Hardly...when / No sooner...than 固定搭配，且开头要倒装。"
 }
];
  global.ENGLISH_BANK = ENGLISH_BANK;
  
  console.log('[清洗版·english] 加载完成，题数：', ENGLISH_BANK.length);
})(typeof window !== 'undefined' ? window : this);
