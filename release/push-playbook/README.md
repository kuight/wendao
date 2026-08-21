# v5 final rollout playbook

本目录是**预备执行包**，当前只生成并落盘，不会自动 push、开 PR、合并或覆盖 release。

## 使用

1. 准备一个有 Contents / Pull requests / Metadata 权限的 GitHub PAT。
2. 将 PAT 放入临时文件并设为 `chmod 600`，默认路径为 `/tmp/wendao-v5-final-rollout/tok`；也可通过 `TOKEN_FILE=/path/to/tok` 指定。
3. 在网络可访问 GitHub 的环境执行：

```bash
bash scripts/push-v5-final.sh
```

脚本会先核对 `main` 是否仍为 `4e86b2d57cb1356e706b8ce20dc9899505314122`，再创建备份 tag `v4.5.0-fixed-pre-v5-final-rollout`。任一步失败都会退出，不会继续 release 覆盖。

## 安全与回滚

- PAT 只读入内存并通过 `Authorization: Bearer` / `GH_TOKEN` 使用，不写入仓库；结束时删除 token 文件。
- 分支：`steward/v5-final-rollout`；每个小游戏先单独 commit，再提交门户、任务引擎和题库。
- PR 使用 squash + 自动合并；合并后打 `v4.5.0-fixed-post-v5-rollout`，并重建 release zip。
- 失败回滚：停止 release 上传，使用备份 tag 恢复；若 PR 已合并，可执行 `git reset --hard v4.5.0-fixed-pre-v5-final-rollout` 后新建 revert PR，禁止强推 main。

## 已知边界

本次实际清单中没有独立的 `integration-hub` 目录，脚本会明确记录 `MISSING_SOURCE`/NOTE，**不会伪造复制路径**。SP4 音游/桌游当前仅有远程分支产物，未在 AI Drive 清单中，因此没有编造本地复制命令；需要恢复时应先把该分支或文件包落盘。
