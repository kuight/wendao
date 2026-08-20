/* ===================================================
 * 译灵堂·英语功法秘籍 v2.0
 * 范围：高考英语全考点 · 语法 12 篇 + 词汇 3 篇 + 阅读 2 篇 + 写作 3 篇 + 听力 1 篇 = 21 篇
 * =================================================== */

window.ENGLISH_MANUALS = [

  // ========== 语法基础 ==========
  {
    id: 'en_m1',
    tier: '通用',
    tag: '时态语态',
    title: '《时光真经》',
    summary: '16 种时态核心用法 + 主动/被动语态的转换规律。',
    content: `
      <p><b>核心 8 时态记忆口诀</b>：</p>
      <ul>
        <li>一般现在：do/does — 经常性动作、客观真理 (The sun rises in the east.)</li>
        <li>一般过去：did — 过去发生的动作 (He <b>went</b> to school yesterday.)</li>
        <li>一般将来：will/be going to — 将要发生</li>
        <li>现在进行：am/is/are doing — 此刻正在 / 近期计划</li>
        <li>过去进行：was/were doing — 过去某时正在</li>
        <li>现在完成：have/has done — 对现在产生影响 (常配 already/yet/just/ever/never/since/for)</li>
        <li>过去完成：had done — “过去的过去”（常配 by the time / before）</li>
        <li>现在完成进行：have/has been doing — 从过去某时一直持续到现在</li>
      </ul>
      <p><b>被动语态</b>：be + 过去分词（done）</p>
      <ul>
        <li>一般现在被动：is/are done — (The book is written by Lu Xun.)</li>
        <li>一般过去被动：was/were done</li>
        <li>情态动词被动：can/should/must + be done</li>
        <li>完成时被动：have/has been done</li>
      </ul>
      <p><b>时态判断关键词</b>：</p>
      <ul>
        <li>now / at this moment → 现在进行</li>
        <li>yesterday / ago / last week → 一般过去</li>
        <li>since / for / already / yet → 现在完成</li>
        <li>by the time / before / when (从句过去时) → 过去完成</li>
      </ul>
    `,
    formula: '时态 = 时间(过去/现在/将来) × 状态(一般/进行/完成/完成进行)',
    tips: '看到 since 1990 / for 5 years，立刻条件反射 → 现在完成时（has/have done）。',
    example: 'By the time I got to the station, the train <b>had already left</b>. （到我到达车站，火车已经走了——“过去的过去”用过去完成时 had left）'
  },

  {
    id: 'en_m2',
    tier: '通用',
    tag: '从句',
    title: '《长句拆解诀》',
    summary: '定语从句、名词性从句、状语从句三大从句的引导词与规则。',
    content: `
      <p><b>定语从句</b>（修饰名词）：</p>
      <ul>
        <li>that / which：先行词是物，which 在介词后必用 which (the city in <b>which</b> I live)</li>
        <li>who / whom：先行词是人</li>
        <li>whose：表所属</li>
        <li>when：时间状语；where：地点状语；why：原因状语（只用于 reason）</li>
        <li>只用 that 不用 which 的情况：先行词被 all/the only/序数词修饰、先行词是 anything/everything 等不定代词</li>
      </ul>
      <p><b>名词性从句</b>（充当主/宾/表/同位语）：</p>
      <ul>
        <li>that：陈述句变从句（无意义，不能省作主语从句）</li>
        <li>whether/if：一般疑问句变从句（=是否；if 不能引导主语从句和介词后宾语从句）</li>
        <li>what/who/which/where/when/why/how：特殊疑问句变从句</li>
        <li>同位语从句：用 that 解释抽象名词 (the fact <b>that</b>...)</li>
      </ul>
      <p><b>状语从句</b>：</p>
      <ul>
        <li>时间：when, while, as, before, after, since, until, as soon as, the moment</li>
        <li>地点：where, wherever</li>
        <li>原因：because, since, as, now that</li>
        <li>目的：so that, in order that</li>
        <li>结果：so/such...that, so that</li>
        <li>条件：if, unless, as long as, on condition that</li>
        <li>让步：though/although, even if/though, no matter wh-, whatever/wherever</li>
        <li>方式：as, as if, as though</li>
        <li>比较：than, as...as</li>
      </ul>
    `,
    formula: '定语从句 = 先行词 + 关系词 + 不完整句子；名词从句 = 引导词 + 完整意义',
    tips: '区分定语从句 vs 同位语从句：定语用 that 时句子在 that 后缺主/宾/状（不完整）；同位语 that 后是完整句子，that 只是连词。',
    example: 'The news <b>that he passed the exam</b> made us happy. （that 后是完整句“他通过考试”，that 是同位语从句标志，解释 news 的内容）'
  },

  {
    id: 'en_m3',
    tier: '通用',
    tag: '非谓语动词',
    title: '《分词玄章》',
    summary: '动名词、不定式、现在分词、过去分词的用法区分。',
    content: `
      <p><b>非谓语三大形式</b>：</p>
      <ul>
        <li><b>doing</b>（动名词/现在分词）：主动 + 进行/经常</li>
        <li><b>to do</b>（不定式）：未完成/将要发生</li>
        <li><b>done</b>（过去分词）：被动 + 完成</li>
      </ul>
      <p><b>常见搭配</b>：</p>
      <ul>
        <li>only + to do：表意外结果 (He came back only <b>to find</b> the door locked.)</li>
        <li>finish/enjoy/avoid/practice/mind/suggest + doing</li>
        <li>want/hope/plan/decide/promise + to do</li>
        <li>stop to do（停下来去做）vs stop doing（停止正在做）</li>
        <li>remember to do（记得要做）vs remember doing（记得做过）</li>
        <li>forget to do（忘了要做）vs forget doing（忘了做过）</li>
      </ul>
      <p><b>分词作状语</b>：</p>
      <ul>
        <li>逻辑主语必须与主句主语一致</li>
        <li>分词与逻辑主语主动关系→现在分词；被动→过去分词</li>
        <li>例：<b>Walking</b> down the street, I met an old friend. （I 在 walk，主动）</li>
        <li>例：<b>Surprised</b> by the news, she cried. （she 被 surprise，被动）</li>
      </ul>
      <p><b>悬垂分词错误</b>：分词的逻辑主语必须存在且与主句主语一致。</p>
    `,
    formula: '主动 + 主动 → doing；被动 + 完成 → done；将要做 → to do',
    tips: '看到选项有“doing/done/to do”，第一步判主被动：主语能不能主动做这个动作？能→doing/to do，不能→done。',
    example: 'The boy <b>injured</b> in the accident was sent to hospital. （boy 被 injure，过去分词作定语）'
  },

  {
    id: 'en_m8',
    tier: '通用',
    tag: '虚拟语气',
    title: '《虚妄真言诀》',
    summary: '与事实相反的假设：if 虚拟条件句、虚拟宾语从句、would rather/wish 句型。',
    content: `
      <p><b>if 虚拟条件句（三大情况）</b>：</p>
      <ul>
        <li>与现在事实相反：<b>if did/were</b>, would/could/might do (If I <b>were</b> you, I <b>would</b> tell him.)</li>
        <li>与过去事实相反：<b>if had done</b>, would/could/might have done (If I <b>had studied</b>, I <b>would have passed</b>.)</li>
        <li>与将来事实相反：<b>if did / were to do / should do</b>, would/could/might do</li>
      </ul>
      <p><b>倒装省 if</b>：把 were/had/should 提到句首，if 去掉。</p>
      <ul>
        <li><b>Were</b> I you = If I were you</li>
        <li><b>Had</b> I known = If I had known</li>
        <li><b>Should</b> it rain tomorrow = If it should rain tomorrow</li>
      </ul>
      <p><b>虚拟语气的宾语从句</b>：</p>
      <ul>
        <li>wish + (that) 从句：wish did/were (对现在) / wish had done (对过去) / wish would do (对将来)</li>
        <li>would rather + 从句：would rather + did (对现在/将来) / had done (对过去)</li>
        <li>as if / as though + did/had done：好像…</li>
        <li>建议/命令/要求 (suggest/insist/order/demand) + that 主语 + (should) do</li>
      </ul>
      <p><b>It is (high/about) time that ...</b>：+ did / should do（该做某事了）</p>
    `,
    formula: '与现在→did/were+would do；与过去→had done+would have done',
    tips: '虚拟语气看关键词：if/wish/would rather/as if 后要虚拟；suggest/order/insist 后 that 从句要 (should) do。',
    example: 'If I <b>had known</b> you were sick, I <b>would have visited</b> you yesterday. （与过去事实相反，两个"had-would have"）'
  },

  {
    id: 'en_m9',
    tier: '通用',
    tag: '倒装 & 强调',
    title: '《倒转乾坤诀》',
    summary: '部分倒装、完全倒装、强调句 (It is ... that ...) 的用法。',
    content: `
      <p><b>部分倒装</b>（助动词/情态动词提前）：</p>
      <ul>
        <li>否定/半否定词开头：never / seldom / hardly / rarely / not only / no sooner / little / by no means</li>
        <li>only + 状语开头：Only in this way <b>can we</b> succeed.</li>
        <li>hardly...when / no sooner...than：Hardly <b>had I</b> arrived when it rained.</li>
        <li>so/neither/nor 开头（表示同意）：So <b>do I</b>. / Neither <b>can he</b>.</li>
        <li>虚拟条件句省 if：Were I you, ... / Had I known, ...</li>
      </ul>
      <p><b>完全倒装</b>（谓语整体提前）：</p>
      <ul>
        <li>地点/方位副词开头：Here <b>comes</b> the bus. / In front of me <b>stood</b> a boy.</li>
        <li>注意主语是代词时不倒装：Here <b>he</b> comes. (不倒装)</li>
      </ul>
      <p><b>强调句</b>：It is/was + 强调部分 + that/who + 其余部分</p>
      <ul>
        <li>可强调：主语、宾语、状语（除谓语外）</li>
        <li>强调人时可用 who，其余用 that</li>
        <li>判定强调句：去掉 It is ... that，句子仍成立</li>
        <li>例：<b>It was</b> in the park <b>that</b> I met her yesterday. (强调地点)</li>
        <li>疑问句强调：<b>When was it that</b> you saw him?</li>
        <li>特别句型：<b>It was not until</b> ... <b>that</b> ... （直到…才…）</li>
      </ul>
    `,
    formula: '部分倒装 = 否定词/only + 助动词 + 主语；强调 = It is/was + X + that + 其余',
    tips: '看到 Not until / Only + 状语 在句首 → 立刻反应主谓要倒装。',
    example: '<b>Not until</b> he apologized <b>did she forgive</b> him. （直到他道歉，她才原谅他——部分倒装）'
  },

  {
    id: 'en_m10',
    tier: '通用',
    tag: '情态动词',
    title: '《万相神通经》',
    summary: 'can/could, may/might, must, should, need, dare, will/would 等情态动词的用法。',
    content: `
      <p><b>推测意义</b>（可能性由高到低）：</p>
      <ul>
        <li>must (肯定)：must be / must have done — 一定，只用于肯定句</li>
        <li>can't (否定)：can't be / can't have done — 一定不</li>
        <li>may / might (较小可能)：may be / may have done — 可能，might 更弱</li>
        <li>could (较小可能)：could be / could have done</li>
      </ul>
      <p><b>should/ought to + have done</b>：本该做而没做（含责备）</p>
      <p><b>needn't have done</b>：本没必要做而做了</p>
      <p><b>could have done</b>：本可以做而没做</p>
      <p><b>其他常考点</b>：</p>
      <ul>
        <li>can/could 表能力、许可、请求 (could 更客气)</li>
        <li>may/might 表许可、请求 (might 更客气)</li>
        <li>shall 用于第一/三人称疑问句 (Shall I open the window?)</li>
        <li>will/would 表意愿、习惯、请求</li>
        <li>dare、need 既可作情态动词也可作实义动词</li>
        <li>had better + 动词原形：最好…</li>
      </ul>
      <p><b>特殊构造</b>：</p>
      <ul>
        <li>can't help doing：忍不住做</li>
        <li>may/might as well do：不妨做</li>
        <li>would rather do than do：宁愿…也不…</li>
      </ul>
    `,
    formula: '推测过去：must/may/might/can\'t + have done；后悔过去：should have done',
    tips: '看到"竟然、居然、居然没" → could/should have done；看到"一定、肯定" → must (be/have done)。',
    example: 'You <b>should have called</b> me — I was worried sick! （责备："你本该给我打电话的"）'
  },

  {
    id: 'en_m11',
    tier: '通用',
    tag: '连词与介词',
    title: '《连珠合璧诀》',
    summary: '并列连词、从属连词、常考介词短语与固定搭配。',
    content: `
      <p><b>并列连词</b>：and, but, or, so, yet, for, nor</p>
      <ul>
        <li>but 转折；yet 更正式的转折</li>
        <li>for 表原因（后置）；because 表原因（前置）</li>
        <li>either...or / neither...nor：就近原则</li>
        <li>not only...but also：就近原则；开头要部分倒装</li>
        <li>both...and：主语一律用复数</li>
      </ul>
      <p><b>让步连词</b>：though / although / while / whereas / even if</p>
      <ul>
        <li>though/although 不能与 but 连用，但可与 yet 连用</li>
        <li>while 表"虽然/然而"</li>
      </ul>
      <p><b>常考介词</b>：</p>
      <ul>
        <li>at 表点 (at 8 o'clock, at the age of 15)</li>
        <li>in 表内 (in 2025, in the morning, in a moment)</li>
        <li>on 表面/日期 (on Monday, on the desk)</li>
        <li>by 表被动/方式 (by bus, by the door)</li>
        <li>with 表伴随/工具 (with a knife, with a smile)</li>
        <li>through 穿过；across 横过；over 越过</li>
        <li>despite / in spite of + n. 尽管（后接名词，不能接从句）</li>
      </ul>
      <p><b>介词短语高频</b>：in charge of, in favor of, in terms of, in view of, on behalf of, at the mercy of, for the sake of, by means of</p>
    `,
    formula: 'despite / in spite of + n.；though / although + 从句',
    tips: '看到 despite / in spite of 之后必须接名词或 doing，不能接完整从句。',
    example: '<b>Despite the heavy rain</b>, they finished the game. （尽管大雨——despite 后接名词短语）'
  },

  {
    id: 'en_m12',
    tier: '通用',
    tag: '主谓一致',
    title: '《同气连枝诀》',
    summary: '主语和谓语在人称、数上保持一致的规则。',
    content: `
      <p><b>基本原则</b>：</p>
      <ul>
        <li>单数主语 + 单数谓语；复数主语 + 复数谓语</li>
        <li>集体名词（family/team/class）视为整体→单数，视为成员→复数</li>
        <li>不可数名词 + 单数谓语</li>
      </ul>
      <p><b>就近原则</b>（离谓语最近的名词决定）：</p>
      <ul>
        <li>either...or / neither...nor / not only...but also / or / not...but</li>
        <li>There be 句型：There <b>is</b> a book and two pens.</li>
      </ul>
      <p><b>就远原则</b>（远离谓语的名词决定）：</p>
      <ul>
        <li>主语 + with/along with/as well as/together with/rather than + 名词</li>
        <li>The teacher, together with his students, <b>is</b> here.</li>
      </ul>
      <p><b>特殊主语</b>：</p>
      <ul>
        <li>each/every/either/neither + 单数名词 + 单数谓语</li>
        <li>the number of + 复数 + 单数 (…的数量)</li>
        <li>a number of + 复数 + 复数 (许多)</li>
        <li>a lot of / lots of + n.：谓语跟名词</li>
        <li>the + 形容词（表一类人）+ 复数：The rich <b>are</b> not always happy.</li>
        <li>动词-ing / to do 作主语 + 单数</li>
      </ul>
    `,
    formula: '就近：either...or / not only...but also；就远：主语 + as well as/with',
    tips: '看到 as well as / together with / along with 时立刻圈掉这一整块，看真正主语。',
    example: 'The teacher, as well as his students, <b>is</b> going. （as well as 短语忽略，真正主语是 The teacher → is）'
  },

  {
    id: 'en_m13',
    tier: '通用',
    tag: '冠词代词',
    title: '《万象归元诀》',
    summary: '定冠词/不定冠词/零冠词、人称/物主/反身/不定代词的用法。',
    content: `
      <p><b>不定冠词 a/an</b>：</p>
      <ul>
        <li>a + 辅音音标 (a university [ju]), an + 元音音标 (an hour [aʊ])</li>
        <li>表泛指、一(表示一次)、每(a week=每周)、类别</li>
      </ul>
      <p><b>定冠词 the</b>：</p>
      <ul>
        <li>特指、上文提到过的、独一无二 (the sun / the earth)</li>
        <li>形容词最高级前、序数词前</li>
        <li>the + 形容词 = 一类人/事物</li>
        <li>the + 姓 (复数) = 某一家人 (the Smiths)</li>
        <li>乐器前 (play the piano)，但球类/棋类不用 (play chess)</li>
      </ul>
      <p><b>零冠词</b>：</p>
      <ul>
        <li>三餐、球类、棋类、语言、学科</li>
        <li>季节/月份/日期 前一般不加</li>
        <li>抽象名词/物质名词 表泛指</li>
        <li>go to bed/school/church + 表目的性（不表建筑物）</li>
      </ul>
      <p><b>不定代词</b>：</p>
      <ul>
        <li>one / another / the other / others / the others</li>
        <li>some / any / no / every 系列</li>
        <li>either / neither / both / all / none</li>
        <li>each other / one another 相互</li>
        <li>反身代词：myself / yourself / himself / herself / itself / ourselves / yourselves / themselves</li>
      </ul>
    `,
    formula: '"the + 独一无二 / 最高级 / 序数词" ; "零冠词 + 三餐/球类/学科"',
    tips: 'a/an 看后接词的第一个"音标"，不是字母。university 首音 [ju] 是辅音→a university。',
    example: 'She is <b>an</b> honest girl who plays <b>the</b> piano well. (honest 首音是元音 [ɒ] → an；乐器 the)'
  },

  {
    id: 'en_m14',
    tier: '通用',
    tag: '形容词副词',
    title: '《描摹妙相经》',
    summary: '形容词/副词的位置、比较级、最高级用法。',
    content: `
      <p><b>形容词位置</b>：</p>
      <ul>
        <li>作定语：一般前置 (a red apple)；后置：不定代词后 (something new)</li>
        <li>作表语：be/look/feel/smell/sound/taste + 形容词</li>
        <li>-ing (令人…的：exciting/interesting) 修饰物 / -ed (感到…的：excited/interested) 修饰人</li>
      </ul>
      <p><b>副词位置</b>：</p>
      <ul>
        <li>修饰动词：一般动词后 (She sings <b>beautifully</b>.)</li>
        <li>修饰形容词/副词：位于其前 (very tall, quite slowly)</li>
        <li>时间/地点副词一般放句末</li>
        <li>频率副词 (always/usually/often/sometimes) 位于 be 后 / 情态动词后 / 实义动词前</li>
      </ul>
      <p><b>比较等级</b>：</p>
      <ul>
        <li>比较级：more/-er + than</li>
        <li>最高级：the most / -est</li>
        <li>不规则：good→better→best, bad→worse→worst, many/much→more→most, little→less→least, far→farther/further→farthest/furthest</li>
        <li>as + 原级 + as：和…一样</li>
        <li>not so/as + 原级 + as：不如…</li>
        <li>the + 比较级...the + 比较级：越…越… (The more, the better.)</li>
        <li>比较级 + and + 比较级：越来越 (more and more beautiful)</li>
      </ul>
      <p><b>修饰比较级的词</b>：much / far / a lot / a great deal / even / still</p>
      <p><b>不用于比较级的形容词</b>：unique/perfect/impossible (绝对形容词)</p>
    `,
    formula: '感到→-ed 修饰人 / 令人→-ing 修饰物；the 比较级…the 比较级：越…越…',
    tips: '"the more, the better" 结构，第一个the 修饰一个"越"，第二个the 修饰另一个"越"，中间是关联。',
    example: 'The <b>harder</b> he works, the <b>happier</b> he becomes. （越努力，越快乐）'
  },

  // ========== 词汇 ==========
  {
    id: 'en_m4',
    tier: '通用',
    tag: '高频词汇',
    title: '《字根字源经》',
    summary: '常见词根词缀 + 高考 3500 词高频派生关系。',
    content: `
      <p><b>常见前缀</b>：</p>
      <ul>
        <li>un-/in-/im-/dis-：否定（happy→unhappy, possible→impossible）</li>
        <li>re-：再/重新（write→rewrite）</li>
        <li>pre-：前（view→preview）</li>
        <li>over-：过度（eat→overeat）</li>
        <li>under-：在下/不足（estimate→underestimate）</li>
      </ul>
      <p><b>常见后缀</b>：</p>
      <ul>
        <li>名词：-tion/-sion (action, decision), -ment (development), -ness (kindness), -er/-or (teacher, actor), -ist (artist)</li>
        <li>形容词：-able/-ible (comfortable), -ful (helpful), -less (useless), -ous (famous), -ive (active)</li>
        <li>动词：-ize/-ise (modernize), -en (strengthen), -ify (simplify)</li>
        <li>副词：-ly (quickly)</li>
      </ul>
      <p><b>易混词</b>：</p>
      <ul>
        <li>affect (动词，影响) vs effect (名词，影响/效果)</li>
        <li>accept (接受) vs except (除……以外)</li>
        <li>advice (n.建议) vs advise (v.建议)</li>
        <li>raise (vt.举起) vs rise (vi.升起)</li>
        <li>lay (vt.放置) vs lie (vi.躺/位于) vs lie (vi.说谎)</li>
      </ul>
    `,
    formula: '词性派生：动→名(+tion/ment) → 形(+al/ive) → 副(+ly)',
    tips: '完形+语法填空：题目给个原词让你填空格里的派生词。第一步看空格前后判词性（the 前是名词、be 后是形容词、动词后是副词等）。',
    example: 'He performed well. (good→well 副词修饰动词)；His performance was great. (动名词作主语)'
  },

  {
    id: 'en_m15',
    tier: '通用',
    tag: '短语动词',
    title: '《千变万化诀》',
    summary: '高频动词 + 介词/副词的短语搭配。',
    content: `
      <p><b>look 系列</b>：</p>
      <ul>
        <li>look after 照顾 = take care of</li>
        <li>look for 寻找</li>
        <li>look up 查阅 / 抬头看</li>
        <li>look forward to + doing 期待</li>
        <li>look through 浏览</li>
        <li>look into 调查</li>
        <li>look down on 瞧不起 / look up to 尊敬</li>
      </ul>
      <p><b>take 系列</b>：</p>
      <ul>
        <li>take off 脱下 / 起飞 / 突然成功</li>
        <li>take on 呈现 / 承担</li>
        <li>take up 从事 / 占据 (时间/空间)</li>
        <li>take over 接管</li>
        <li>take in 吸收 / 欺骗 / 理解</li>
        <li>take after 长得像</li>
        <li>take place 发生</li>
        <li>take advantage of 利用</li>
      </ul>
      <p><b>get 系列</b>：</p>
      <ul>
        <li>get along/on with sb. 与某人相处</li>
        <li>get away 逃脱 / 离开</li>
        <li>get through 通过 / 度过 / 打通电话</li>
        <li>get over 克服</li>
        <li>get across 使被理解</li>
      </ul>
      <p><b>put 系列</b>：put off 推迟 / put up with 忍受 / put out 熄灭 / put forward 提出</p>
      <p><b>其他</b>：come up with 想出 / run out of 用完 / make up 编造/化妆/组成 / break out 爆发 / break down 出故障 / break up 分手</p>
    `,
    formula: '短语动词 = 动词 + 副/介词；意义常不能字面理解',
    tips: '完形填空最爱考短语动词。看到 look/take/get/put/come/make/break/run，第一反应后面接的介词决定意思。',
    example: 'He <b>came up with</b> a brilliant idea. (想出) ／ Please <b>put out</b> your cigarette. (熄灭)'
  },

  {
    id: 'en_m16',
    tier: '通用',
    tag: '词形变化',
    title: '《化气万形诀》',
    summary: '语法填空 (给单词填空) 的词性判定与变形规则。',
    content: `
      <p><b>语法填空 10 空常考点</b>：</p>
      <ol>
        <li>3 空左右——不给词：填冠词/代词/介词/连词</li>
        <li>7 空左右——给词：动词变时态语态/非谓语；名词变复数；形容词/副词变比较级 or 变名词/副词</li>
      </ol>
      <p><b>给词填空判位步骤</b>：</p>
      <ol>
        <li>找主语，看句中有没有谓语——没有→变谓语；有→变非谓语 (doing/done/to do)</li>
        <li>the/a 后 → 名词</li>
        <li>be/系动词后 → 形容词 (或 doing/done 作表语)</li>
        <li>动词后修饰动作 → 副词 (+ ly)</li>
        <li>and/or 连接词并列，前后词性一致</li>
        <li>than/as 后 → 比较级 / 原级</li>
      </ol>
      <p><b>常见变形</b>：</p>
      <ul>
        <li>V → N：-tion (produce→production), -ment (develop→development), -al (arrive→arrival)</li>
        <li>Adj → N：-ness (happy→happiness), -ty (safe→safety), -th (long→length)</li>
        <li>N/V → Adj：-al (culture→cultural), -ful (help→helpful), -y (rain→rainy), -ous (danger→dangerous)</li>
        <li>Adj → Adv：+ly (quick→quickly, happy→happily), 特殊 good→well</li>
        <li>N → V：en- (large→enlarge), -ize (modern→modernize), -en (short→shorten)</li>
      </ul>
    `,
    formula: '语法填空：先判词性（找位置），再变形（加词缀/时态变化）',
    tips: '给词填空最容易失分的是"名词→形容词"和"动词→非谓语"这两大类。做完先自查每空是否满足前后词性搭配。',
    example: '空前是 the，空后是 of → 中间必定是名词。'
  },

  // ========== 阅读理解 ==========
  {
    id: 'en_m5',
    tier: '通用',
    tag: '阅读技巧',
    title: '《阅微心法》',
    summary: '高考阅读理解四大题型解题技巧：细节、推理、主旨、词义猜测。',
    content: `
      <p><b>题型 1：细节题</b>（占比最大，约一半）</p>
      <ul>
        <li>定位关键词（人名、数字、专有名词）→ 回原文找句子 → 选项对比</li>
        <li>错误选项常见类型：偷换数字、张冠李戴、过度引申、绝对化</li>
      </ul>
      <p><b>题型 2：推理判断题</b></p>
      <ul>
        <li>关键词：infer / suggest / imply / probably / most likely</li>
        <li>"基于原文但又超出原文一点点"——不能选完全=原文（那是细节题选项）</li>
        <li>也不能选过度引申/无中生有的</li>
      </ul>
      <p><b>题型 3：主旨大意题</b></p>
      <ul>
        <li>关键词：main idea / best title / mainly about / purpose</li>
        <li>看首段+末段+每段首句</li>
        <li>标题要求：1) 涵盖全文 2) 言简意赅 3) 醒目吸引</li>
      </ul>
      <p><b>题型 4：词义猜测题</b></p>
      <ul>
        <li>看上下文：标点（破折号、冒号常表解释）、同义词复现、反义词对比、举例</li>
        <li>把生词当成 X，根据语境推断 X 是褒/贬/中性</li>
      </ul>
      <p><b>阅读时间管理</b>：每篇 7-8 分钟，先读题再读文（细节定位），最后通读把握主旨。</p>
    `,
    formula: '细节→定位；推理→基于+不过度；主旨→首末段；猜词→标点+同反义',
    tips: '正确选项往往是原文核心句的"同义改写"（synonym paraphrase）——找到那个改写版本就对了。',
    example: '原文 "He was extremely furious." 选项 "He was very angry." 这就是典型同义改写——furious=very angry。'
  },

  {
    id: 'en_m17',
    tier: '通用',
    tag: '七选五 / 完形',
    title: '《洞察玄机诀》',
    summary: '七选五（段落填空）与完形填空的解题策略。',
    content: `
      <p><b>七选五三大类型</b>：</p>
      <ol>
        <li><b>段首句</b>：概括本段大意 → 看下一句 or 全段找线索</li>
        <li><b>段中句</b>：承上启下 → 看前后句的逻辑衔接词</li>
        <li><b>段尾句</b>：总结段落 → 看本段前几句</li>
      </ol>
      <p><b>七选五抓手</b>：</p>
      <ul>
        <li>同义词/反义词复现（如原文出现 challenge，选项出现 difficulty）</li>
        <li>代词指代：this/these/that/those 必有前指</li>
        <li>连接词：However/Also/Besides/For example/In conclusion 提示逻辑</li>
        <li>数字/专有名词精准定位</li>
      </ul>
      <p><b>完形填空 20 题技巧</b>：</p>
      <ol>
        <li><b>首句</b>：完整信息，交代主题——绝不设空</li>
        <li><b>词汇复现</b>：同一话题的关键词会反复出现，前后互为线索</li>
        <li><b>逻辑衔接词</b>：but/however 转折；so/therefore 因果；also/besides 递进</li>
        <li><b>情感/态度一致</b>：故事完形中，作者情感线索贯穿始终</li>
        <li><b>常识判断</b>：符合生活常理、符合语境</li>
      </ol>
      <p><b>完形四大题型</b>：动词题（最多，看主宾搭配）、名词题（看修饰）、形容词/副词题（看褒贬）、连词/介词题（看逻辑）</p>
    `,
    formula: '七选五：定位关键词/代词/连接词；完形：首句 + 复现 + 逻辑',
    tips: '完形不要孤立选题——先通读一遍抓故事主线（谁、什么事、什么结局），再回来填空。',
    example: '完形段落主题若是"父亲的善意"，那么每空的动词/形容词都倾向褒义（helped, kind, warm）。'
  },

  // ========== 写作 ==========
  {
    id: 'en_m6',
    tier: '通用',
    tag: '应用文写作',
    title: '《妙文生章经》',
    summary: '高考应用文（邀请信、建议信、申请信、投诉信、通知）和续写要点。',
    content: `
      <p><b>应用文通用结构</b>（3 段法）：</p>
      <ol>
        <li>开头段：表明写信目的（1-2 句）</li>
        <li>主体段：具体内容（3-5 句，分 2-3 个要点）</li>
        <li>结尾段：礼貌结束 + 期待回复</li>
      </ol>
      <p><b>高频开头句</b>：</p>
      <ul>
        <li>邀请信：I am writing to invite you to...</li>
        <li>建议信：I am writing to offer some suggestions on...</li>
        <li>申请信：I am writing to apply for...</li>
        <li>感谢信：I am writing to express my sincere gratitude for...</li>
        <li>道歉信：I am writing to apologize for...</li>
      </ul>
      <p><b>高频结尾句</b>：</p>
      <ul>
        <li>I am looking forward to your reply.</li>
        <li>I would appreciate it if you could...</li>
        <li>Your prompt reply would be highly appreciated.</li>
      </ul>
      <p><b>读后续写得分点</b>：</p>
      <ol>
        <li>情节合理：续写情节要顺接前文，不要"灵魂出窍"</li>
        <li>呼应前文：用前文出现的人物/物品/情感线索</li>
        <li>语言升级：用高级词汇（替换 good→excellent, said→remarked）、长短句结合、定语从句+分词作状语</li>
        <li>结构清晰：两段，每段紧扣段首句</li>
        <li>情感升华：结尾要有"启示/感悟"</li>
      </ol>
    `,
    formula: '应用文：1 表目的→2 讲细节→3 致结尾；续写：续情节+用线索+升语言+提主题',
    tips: '应用文千万别堆砌长难句——逻辑清晰+用词准确就够拿高分。读后续写则反过来——必须有高级表达。',
    example: '邀请信开头：I am writing to extend my warmest invitation to you to attend our school\'s English speech contest, which will be held next Friday.'
  },

  {
    id: 'en_m18',
    tier: '通用',
    tag: '读后续写',
    title: '《续绘天工诀》',
    summary: '新高考读后续写的情节设计、语言技巧、评分要点。',
    content: `
      <p><b>读后续写题型</b>（新高考）：</p>
      <ul>
        <li>给出 350 词左右的原文 + 每段首句（2 句）</li>
        <li>要求续写两段，共 150 词左右</li>
        <li>与原文情节、词汇、风格保持一致</li>
      </ul>
      <p><b>五步法</b>：</p>
      <ol>
        <li><b>读原文</b>：抓主要人物、情感线、伏笔（未解决的问题）</li>
        <li><b>看首句</b>：段首句已定，思考段中和段尾要怎么写</li>
        <li><b>列大纲</b>：每段 3 个核心情节</li>
        <li><b>写正文</b>：使用五感描写（视觉、听觉、嗅觉、触觉、味觉）</li>
        <li><b>升华</b>：结尾体现主题（成长、亲情、勇气、奉献等）</li>
      </ol>
      <p><b>加分句型</b>：</p>
      <ul>
        <li>定语从句：..., which/who ..., making ...</li>
        <li>分词作状语：Trembling with fear, she ...</li>
        <li>倒装：Only then did I realize ...</li>
        <li>强调句：It was at that moment that ...</li>
        <li>with 复合结构：with his eyes closed / with tears streaming down</li>
      </ul>
      <p><b>高级替换</b>：</p>
      <ul>
        <li>said → remarked / whispered / muttered / shouted / declared</li>
        <li>looked → glanced / stared / gazed / glared</li>
        <li>walked → strolled / marched / paced / stumbled</li>
        <li>happy → delighted / thrilled / overjoyed</li>
        <li>sad → depressed / gloomy / heartbroken</li>
        <li>very → extremely / immensely / remarkably</li>
      </ul>
    `,
    formula: '五步法：读→看首句→列大纲→写→升华；加分：定从+分词+倒装+强调+with 结构',
    tips: '续写前一定要读懂原文的情感基调。悲情文不能突然写快乐结局，励志文不能突然写悲惨结局。',
    example: '"Trembling with fear, Sarah opened the door, only to find her missing dog wagging its tail at her." （分词作状语 + only to do 表意外）'
  },

  // ========== 听力 ==========
  {
    id: 'en_m7',
    tier: '通用',
    tag: '听力',
    title: '《通灵耳诀》',
    summary: '听力理解三大题型策略。',
    content: `
      <p><b>听力题型</b>：</p>
      <ul>
        <li>短对话（10 题）：场景对话，问关系/地点/职业等</li>
        <li>长对话/独白（5+5 题）：每段配 3 题，需做笔记</li>
      </ul>
      <p><b>核心策略</b>：</p>
      <ol>
        <li><b>读题在前</b>：拿到题立刻用 30 秒预读选项，圈关键词</li>
        <li><b>预测内容</b>：根据题干和选项推测对话场景（医院/餐厅/银行/学校）</li>
        <li><b>抓 “信号词”</b>：but, however, actually 后是重点；first/second/finally 是顺序</li>
        <li><b>同义替换</b>：选项几乎不会用原文原话——会换说法</li>
      </ol>
      <p><b>高频场景词汇</b>：</p>
      <ul>
        <li>医院：appointment, prescription, surgery, symptoms</li>
        <li>餐厅：reservation, menu, waiter, bill, tip</li>
        <li>机场：boarding pass, gate, customs, baggage claim</li>
        <li>学校：assignment, deadline, lecture, semester</li>
      </ul>
    `,
    formula: '听力得分公式 = 词汇基础 + 预读速度 + 抓信号词 + 同义辨认',
    tips: '听不懂时不要纠结上一题——立刻放弃，集中精神听下一题。一道丢了别让它拖累三道。',
    example: '听到 "I\'d like to make an appointment for Dr. Smith"，问场景，选 "in a hospital/clinic"（不会出现 "hospital" 原词，要靠同义替换）。'
  },

];
