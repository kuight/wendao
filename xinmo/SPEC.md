
## D6 收尾前用户拍板修订（2026-08，覆盖此前冲突项）
1. D4 验收口径（作废"第1/3/8/12天出现"）：interval 序列为 1 / 3 / 8.4 / 24.36，复习发生在第 0 / 1 / 4 / 12 天，第四次 good 后进入 refined。公式不动。
2. interval 浮点落日历规则（补 SPEC 洞）：due_date = today + floor(interval) 天；interval 本身以浮点数存库参与后续计算，不许在存库时取整（否则误差累积）。写死进 SPEC。
3. 时间戳（不加新列）：attempt.ts 与 problem.created_at 直接存完整 ISO 8601 到秒（如 2026-08-28T14:32:07）；按天聚合一律 substr(ts,1,10)；due_date 保持纯日期。老数据缺时刻按兜底省略显示。
4. git 提交：由我(master)接手，按 D2、D3、D5 分三个独立 commit 提交（不压成一个），提交前先确认 .gitignore 含 config.local.json、data/*.db、data/images/，且无图片/数据库被误加索引。
5. 非 ASCII 遗留（server.py 中文字典 + app.js 的 · 分隔符）：挪进 i18n.json，放在 D6 一起做，不单独开一轮。
6. LLM 配置：先不填，text/vision 两段留空。expression 判等价降级 unknown 够用；等库里有了真实数据撞上判不了的题再填 vision。
7. GET /api/backup 打出的 zip 必须排除 config.local.json（含 API key，备份传网盘=泄露）。
8. README 启动步骤必须在干净目录从零跑通一次验证，而非在已有 db/依赖环境里"看起来能跑"。
9. D6 收完即功能冻结，新建 IDEAS.md。真正验收标准：第二十天库里有没有一百道题。

## D6 修订补充（2026-08-28，覆盖此前冲突项）
10. 图片为主路径（覆盖 D2 的"source 或图片二选一"）：题目图片必填（前端提交校验 + 服务端 /api/problem 强制 image_path 非空，source 降为可选辅助）。服务端 /api/upload 无条件压缩：宽<=1400px、质量82、<=300KB，不信任客户端（手机直拍 4-5MB 原图必须压小落盘）。
11. 备份评估（D6 结论，方案待实现）：/api/backup 当前把 data/images 全部历史图打包进 zip，图片体量增大后 zip 无限变大、每周全量重压慢。方案建议：db 每周全量 + images 按月/增量（只打自上次备份以来新增图片）。列入 IDEAS.md，本次不实现。
