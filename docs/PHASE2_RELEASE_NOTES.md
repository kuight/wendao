# Phase 2 Release Notes

## 改动清单

- 从 `archive/备份/wendao4.4.0.zip` 解出并归位 35 张唯一图片到 `src/assets/img/`。
- 新增 `src/assets/img/MANIFEST.md` 与 `src/assets/img/index.json`，记录图片 md5、分类、来源与目标路径。
- 新增 `assets/style.css` 最小可用样式。
- 将已被 v4.4.0 覆盖的历史归档迁入 `archive/redundant/`。

## 35 张图片分布

| category | count |
|---|---:|
| cover | 3 |
| scene | 4 |
| character | 3 |
| ui | 0 |
| emote | 0 |

## 已迁冗余归档

- `archive/备份/wendao-v4.3.5f.zip -> archive/redundant/wendao-v4.3.5f/`
- `archive/备份/wendao-v4.3.5g.zip -> archive/redundant/wendao-v4.3.5g/`
- `archive/备份/wendao-v4.3.5h.zip -> archive/redundant/wendao-v4.3.5h/`
- `archive/备份/wendao-v4.3.5i.zip -> archive/redundant/wendao-v4.3.5i/`
- `archive/备份/wendao-v4.3.5j.zip -> archive/redundant/wendao-v4.3.5j/`
- `archive/备份/wendao-v4.3.6.zip -> archive/redundant/wendao-v4.3.6/`
- `archive/备份/wendao-v4.3.6a.zip -> archive/redundant/wendao-v4.3.6a/`
- `archive/备份/wendao-v4.3.6-final.zip -> archive/redundant/wendao-v4.3.6-final/`
- `archive/备份/wendao-v4.3.6b-p7.z01 -> archive/redundant/wendao-v4.3.6b-p7/`
- `archive/备份/wendao-v4.3.6b-p7.zip -> archive/redundant/wendao-v4.3.6b-p7/`

## 未找到 basename

- `学习游戏记忆_root`

## 回滚

使用 `git revert <commit_hash>` 回滚本次提交。
