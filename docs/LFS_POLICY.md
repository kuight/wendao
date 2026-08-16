# wendao · LFS 治理策略（LFS Policy）

生成日期：2026-08-16

## 结论

当前仓库 **不启用 Git LFS**。已归位的 35 张主工作树图片均明显低于 25 MiB 阈值，现阶段继续使用普通 Git 更简单、可审计性更高。

## 依据

- GitHub 常规 Web / API 工作流对超大二进制不友好。
- 当前主工作树素材规模可控，读写频率高于体积压力。
- archive/ 中的历史压缩包属于溯源材料，不纳入当前运行时素材集。

## 启用条件

仅当未来新增**单文件**大于 25 MiB 的运行时资产（例如超大原画、音视频、训练数据）时，再启用 Git LFS。

## 启用步骤

```bash
git lfs install
git lfs track "*.psd"
git lfs track "*.mp4"
git add .gitattributes
git commit -m "Enable Git LFS for oversized runtime assets"
```

## 当前策略

- `src/assets/img/{cover,character,scene,emote,ui}`：继续使用普通 Git
- `src/assets/img/readme/`：继续使用普通 Git
- `archive/`：保留历史压缩包，不作为 LFS 迁移对象
