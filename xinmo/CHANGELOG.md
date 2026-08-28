# CHANGELOG - 错题心魔 xinmo v1

## D5 - 足迹页 + 全量时间戳 (2026-08-28)

### 新增
- 足迹页：后端 `GET /api/trace`（today_list / 知识树 / subject_summary / 90 天热力图 / streak
  五块聚合），前端 renderTrace 渲染知识树色块(灰=未遇/白=遇过/黄=复习中/亮=已炼化)+热力图+今日清单。
- 时间戳改造：server.py 加 `now_iso()`，problem.created_at 与 attempt.ts 存完整 ISO-8601 到秒
  (2026-08-28T14:32:07)；按天聚合全部改 `substr(ts,1,10)=?`；due_date 保持纯日期；today_list
  按完整时间戳倒序(redo 排最前)。

### 验收（全部通过）
- 干净库下：today_list 顺序 redo,redo,add,add,add；知识树色块 reviewing/active/unseen 对；
  热力图 today count=5 streak=1。D3 未受影响全绿。

## D6 - 收尾：干净目录跑通 / 备份核对 / README / IDEAS (2026-08-28)

### 修复
- server.py 干净目录首次启动崩溃：`app.mount('/images', StaticFiles(...))` 在模块加载期执行，
  而干净目录尚无 data/images（init_db 的 mkdir 在 startup 才跑）-> 抛
  `RuntimeError: Directory ...\data\images does not exist`。已在 static 区 mount 前加
  `IMAGES.mkdir(parents=True, exist_ok=True)`。干净目录从零起服务+录题+入队列验证通过，
  中文入库无乱码、created_at 完整时间戳正确、data/images 自动创建。

### 确认（无需改代码）
- 备份 zip 天然排除 config.local.json：zip 只打 data/xinmo.db + data/images/，
  config.local.json 在 xinmo/ 根目录不在 data/ 下，不会被打包。

### 新增
- README.md：一键启动 / 怎么录一道题 / 每周备份防丢说明。
- IDEAS.md：功能冻结后的想法收集箱，首条「LLM 自动分类(v2)」。

### 约定
- 功能冻结：此后不再加功能，新想法一律写进 IDEAS.md。

## D4 - 调度全规则 + 30天模拟测试 (2026-08-28)

### 新增
- `scripts/test_schedule_sim.py`：纯函数调度测试（无 IO），覆盖
  again/hard/good 转移、ease 夹 [1.3,3.0]、interval 上限 60、hard 永不炼化、
  连续 4 次 good 第 4 次后炼化退出、反噬只罚一次、队列上限 15、
  反噬上限 20 + 溢出散射、30 天多题模拟（每步不变量校验）。全部通过。

### 待用户确认（数值平衡，未擅改）
- 验收要求"连续四次 good 在第 1/3/8/12 天出现"，但当前 schedule.py 实现产出的
  复习日是 **0/1/4/12**（1-indexed 即 1/2/5/13），第 4 次后炼化 —— 与 1/3/8/12 不一致，
  尤其"8"在现公式下不出现。是否要调 interval 公式命中 1/3/8/12？（涉及数值平衡，等指示）

## D3 - 重做流程"先答后判" (2026-08-28)

### 新增
- `judge.py`（纯 ASCII）：判定逻辑。choice 归一化精确比对（大写去空格、多选排序）；
  numeric 数字相对误差<=1%，答案带单位而输入缺单位给 unit_missing 提示；
  expression 调 text 通道 LLM 只认 EQUAL/DIFF，无配置/失败回退 unknown；
  openended 或标准答案为空 -> unknown。
- 后端 `POST /api/judge`：按 problem 的 question_type + 标准答案判定，回
  judged(correct/wrong/unknown)/reason/hint/标准答案/解析图路径。
- 前端今日页改为答案优先卡片状态机：显示题目图+来源（答案隐藏）->输入作答->判定->
  同屏展示判定+标准答案+解析图。correct 选 顺畅(good)/卡了一下(hard)；
  wrong 展示标准答案+解析图+可选"这次错在哪"追加进 note，确认->again；
  unknown 回退用户自选对/错。映射：wrong->again、correct+卡了->hard、correct+顺畅->good。

### 验收（全部通过）
- judge 单测（scripts/_test_judge.py）：choice/numeric/expression/openended 全覆盖。
- API 流程（scripts/_test_d3.py）：choice std=B，输入 C 判错->again->排回当天；
  输入 B 判对；2 次同天提交防循环不再出现今天；numeric 单位提示；expression 无 LLM->unknown。
- 前端（CDP headless）：今日卡片有输入框+判定按钮、判定前不泄露标准答案、
  判定后显示 verdict 并揭示标准答案、0 JS 报错。

## D2 - 图片全链路 (2026-08-28)

### 新增
- 后端 `POST /api/upload`：接收图片，Pillow 处理（EXIF 旋转校正、等比缩放到宽度<=1400px、
  JPEG 质量82、质量阶梯降 + 必要时缩宽保证单张<=300KB），按年月落盘 `data/images/YYYY-MM/`，
  文件名 `{pid|tmp}_{q|a}_{短hash}.jpg`，返回可访问 web 路径 `/images/...`。
- 录入页图片上传：题目图片 + 答案/解析图两个独立粘贴区，均支持
  ①Ctrl+V 粘贴剪贴板截图 ②拖拽文件 ③点击选择（优先级如此）。
  另加全局 paste 兜底：在录入页未聚焦任何输入框时 Ctrl+V 默认进题目图片区。
- 提交校验：`source` 为空时题目图片必填（二者至少其一）。
- 缩略图 + 点击看大图（lightbox）：录入页预览、今日页卡片缩略图点击均可放大。
- `tools/probe_llm.py`：逐通道（text/vision）读 config.local.json 发最小请求验证 LLM 配置可用，
  未配置则明确 SKIP 提示缺失字段。D3 判等价 / D6 也复用。

### 验收（全部通过）
- 后端：2400x1600 PNG 上传 -> 落盘 1190x793、272KB(<=300KB)、命名合规、/images 可取回。
- 重启持久化：重启 uvicorn 后同一图片仍被正常 serve（字节数一致）。
- 前端（headless Edge + CDP，全新 profile）：4 标签 / 录入页 2 个 dropzone /
  lightbox 元素 / 提交按钮 / 今日页缩略图渲染 / 0 条 JS 报错。
- 浏览器->后端整链：页面内 canvas 生成图 -> fetch /api/upload -> 压缩落盘成功。

### 备注
- config.local.json 的 LLM 双通道当前为空（probe SKIP）。D3 的 expression 判等价与 D6 需要 text 通道，
  届时需用户填 base_url/api_key/model。
- 依赖：Pillow（已装 12.2.0）。

---

## D1 - 骨架 + 录入/今日/调度 (交接前，本次接手核验)

- FastAPI 后端(8092) + 单页前端四标签(录入/今日/统计/足迹)。
- 数据模型 problem/attempt；schedule.py 纯函数调度（again/hard/good、炼化、反噬）。
- 接口：/api/problem /api/today /api/attempt /api/stats /api/topics /api/classify(占位) /api/backup(占位)。
- topics.json：物理10章50知识点。
- 接手核验：发现运行中 server 抱着 0 字节空库导致录入 500；重启后 init_db 建表，
  vercheck_d1.py = ALL D1 CHECKS PASSED。（未改代码/schema）
