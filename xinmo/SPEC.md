## D1 开工前六点确认（2026-08，覆盖 v1.1）
1. 判 wrong 直接 again，不给自评按钮。判 wrong 后显示标准答案+解析图，并给可选单行输入「这次错在哪」，内容追加进 problem.note，不强制填——这是全系统最有价值的一条数据。
2. 同天重排是第二次独立重做流程（重新答、重新判、重新记一条 attempt）。"是否已重排过"= 查当天该题 attempt 条数，达 2 条就不再排入当天。
3. 知识树状态色优先级采纳：亮(已炼化)>黄(复习中,有active且streak>0)>白(有active,streak=0)>灰(无题)。节点旁小字标活跃题数，如「电势与场强 3」。
4. topics.json 加 chapter 字段（标准高中物理顺序：运动学/牛顿定律/曲线运动/万有引力/功和能/动量/静电场/恒定电流/磁场/电磁感应），再加 prereq 字段=依赖的其他 topic id 数组（可空）。v1 只存不用，知识树不展示，但建 topics.json 时就填好，v2 用做薄弱链路诊断。
5. D1 录入页字段：学科、知识点点选、note、source、answer_text、question_type（后两者纯输入框+下拉，低成本顺手做，D3 才用）。图片 D2 做。
6. config.local.json 双通道结构：{"text":{"base_url":"","api_key":"","model":""},"vision":{"base_url":"","api_key":"","model":""}}。两段可指向不同厂商，任一段空则对应功能降级。D1 附带 tools/probe_llm.py 逐段发最小请求并打印结果。