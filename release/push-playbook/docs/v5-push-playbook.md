# v5 final push playbook

## 目标
把已落盘且已核验的 v5 学习小游戏、题库扩展、门户与任务引擎整合到 `kuight/wendao`，每个小游戏形成独立 commit，再由一个 PR 汇总；合并前保留可回滚 tag。脚本本身只在未来被明确执行时产生远端写操作。

## 当前基线
- API 实测 main HEAD：`4e86b2d57cb1356e706b8ce20dc9899505314122`。
- 备份 tag：`v4.5.0-fixed-pre-v5-final-rollout`。
- 工作分支：`steward/v5-final-rollout`。

## 来源清单（均为本次实际列出的 AI Drive 路径）

### 小游戏
| 来源 | 目标 |
|---|---|
| `/mnt/aidrive/wendao-v5-batch2/src/v5/minigame/ai-tutor` | `src/v5/minigame/ai-tutor` |
| `/mnt/aidrive/wendao-v5-batch2/src/v5/minigame/drawing-puzzle` | `src/v5/minigame/drawing-puzzle` |
| `/mnt/aidrive/wendao-v5-batch2/src/v5/minigame/tycoon-tower` | `src/v5/minigame/tycoon-tower` |
| `/mnt/aidrive/wendao-v5-coop-raid` | `src/v5/minigame/coop-raid` |
| `/mnt/aidrive/wendao-v5-debate` | `src/v5/minigame/debate` |
| `/mnt/aidrive/wendao-v5-disciple` | `src/v5/minigame/disciple` |
| `/mnt/aidrive/wendao-v5-hex-puzzle` | `src/v5/minigame/hex-puzzle` |
| `/mnt/aidrive/wendao-v5-pet-arena` | `src/v5/minigame/pet-arena` |
| `/mnt/aidrive/wendao-v5-pet-encyclopedia` | `src/v5/minigame/pet-encyclopedia` |
| `/mnt/aidrive/wendao-v5-romance-vn/src/v5/minigame/romance-vn` | `src/v5/minigame/romance-vn` |
| `/mnt/aidrive/wendao-v5-sp6/alchemy` | `src/v5/minigame/alchemy` |
| `/mnt/aidrive/wendao-v5-tower-defense` | `src/v5/minigame/tower-defense` |
| `/mnt/aidrive/wendao-v5-spirit-farm` | `src/v5/minigame/spirit-farm` |
| `/mnt/aidrive/wendao-v5-tournament` | `src/v5/minigame/tournament` |

### 任务引擎与门户
- `/mnt/aidrive/wendao-v5-quest-engine` → `src/v5/quest-engine`
- `/mnt/aidrive/wendao-v5-portal-hub/portal` → `src/v5/portal`
- 未发现独立 integration-hub 目录；脚本只记录说明，不生成虚构复制命令。

### 题库
脚本复制以下四个**已实际列出的**目录中的 JSON 到 `src/data/v5-expansion/`：
- `/mnt/aidrive/wendao-v5-qubanks-600/src/data/v5-expansion`
- `/mnt/aidrive/wendao-v5-qubanks-batch4/src/data/v5-expansion`
- `/mnt/aidrive/wendao-v5-qubanks-batch5/src/data/v5-expansion`
- `/mnt/aidrive/wendao-v5-qubanks-batch7/src/data/v5-expansion`

## 执行流程
1. 检查 `git/curl/python3/gh/node` 和 0600 PAT 文件；无 PAT 立即非零退出。
2. API 核对 main SHA；fresh clone；核对 clone SHA。
3. 创建并推送备份 tag，再建立 rollout 分支。
4. 逐个小游戏复制、`git add`、独立 commit；随后提交 portal、quest-engine、question banks。
5. 对所有变更 JS 执行 `node --check`，对题库 JSON 执行 `json.load`。
6. 推送分支，创建单个 PR，启用 squash 自动合并并删除分支。
7. 拉取合并后的 main，创建 post tag，归档构建 zip，输出 SHA-256，覆盖 `v4.5.0-fixed` asset，运行 `unzip -t`。
8. 清理 token 文件；不强推 main。

## 回滚
- PR 前：删除 rollout 分支即可，main 不变。
- PR 后 / release 前：以 `v4.5.0-fixed-pre-v5-final-rollout` 为基线，新建 revert PR；不要 `reset --hard` 后强推远端 main。
- release 上传失败：保留旧 asset，不执行 `--clobber` 的重试，先核对 zip SHA 与 post tag。
