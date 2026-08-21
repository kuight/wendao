# v5 存档 Schema 扩展规范 (save-schema-v5.md)

> 适用版本：v5.0 内容批次 batch2
> 基线：main `4e86b2d5…`（2026-08-19 经 GitHub API 验证）
> 原则：**纯增量** —— 不修改 `wendao_save_v2` / `wendao_save_v3` 既有字段，只新增命名空间；旧存档 100% 兼容。

---

## 1. 顶层结构

v5 内容在 v3 存档（键 `wendao_save_v3`）上**追加**两个命名空间：

```json
{
  "schemaVersion": 3,
  "char": { "...": "v4/v5 既有字段，不动" },
  "knowledge": { "...": "既有知识点矩阵" },
  "arcade": { "...": "既有小游戏进度" },
  "v5": {
    "banks": { "physics": 8, "chemistry": 8, "math": 8, "chinese": 8, "english": 8, "geography": 8 },
    "minigame": {
      "drawing": { "matches": 0, "best": null, "bySubject": {} },
      "tycoon": { "floors": 1, "levels": {}, "lingshi": 0, "totalEarned": 0, "prestige": 0, "lastTick": 0, "startedAt": 0 }
    }
  },
  "uiPrefs": { "...": "既有 UI 偏好" },
  "_migration": { "...": "既有迁移记录" }
}
```

## 2. 命名空间 `state.v5`

| 字段 | 类型 | 说明 | 写入方 |
|---|---|---|---|
| `v5.banks` | object | 各学科已挂载题库条数（v5-expansion 存根） | ai-tutor / 内容管线 |
| `v5.minigame.drawing` | object | 灵笔绘卷进度 | drawing-core.js |
| `v5.minigame.tycoon` | object | 宗门堂经营进度 | tycoon-core.js |

### 2.1 `v5.minigame.drawing`

```json
{
  "matches": 12,
  "best": { "subject": "lingfu", "diff": "mid", "accuracy": 87, "ms": 3400, "ts": 1787147000000 },
  "bySubject": {
    "lingfu:easy": { "best": 92, "count": 5 },
    "lingcao:mid": { "best": 87, "count": 3 }
  }
}
```

- `matches`：累计临摹次数（成就/里程碑用）
- `best`：历史最佳一次（题材/难度/准确率/用时/时间戳）
- `bySubject`：按 `题材:难度` 聚合的 best/count

### 2.2 `v5.minigame.tycoon`

```json
{
  "floors": 6,
  "levels": { "disciple": 3, "vein": 5, "pill": 1 },
  "lingshi": 12345.6,
  "totalEarned": 67890.1,
  "prestige": 2,
  "lastTick": 1787147000000,
  "startedAt": 1787146000000
}
```

- `floors`：已解锁最高楼层（1-based，随 realmId 提升）
- `levels`：三类升级等级（弟子/灵脉/丹药）
- `lingshi`：当前囤积灵石
- `totalEarned`：累计产出（斩断红尘的判定基准）
- `prestige`：斩断红尘次数折算的永久加成点（灵宠捕获率 +1%/点、稀有掉落 +0.4%/点）
- `lastTick`：离线结算时间戳（离线上限 1 小时）

## 3. 写入约定

- 所有小游戏只通过 `GameV5.save.writeV3(GameV5.state)` 落盘（`src/v5/core/save.js`）。
- **不删除、不重命名** `wendao_save_v2`；v3 迁移保留备份键 `wendao_save_v3_migration_<ts>`。
- 读取时对缺失命名空间做**惰性初始化**（见各 core 模块 `getState()`），保证空存档 / 旧存档均可直接打开小游戏。

## 4. 兼容矩阵

| 存档来源 | 打开 v5 小游戏 | 数据保留 | 说明 |
|---|---|---|---|
| 无存档（新玩家） | ✅ | — | 惰性建 `state.v5` |
| v2 存档 | ✅ | char/pets/equipment | 经 `migrateV2toV3` 一次性迁移 |
| v3 存档（无 v5） | ✅ | 全部 | 追加 `v5` 命名空间 |
| v3 存档（含 v5） | ✅ | 全部 | 增量合并，`v5` 覆盖写入 |

## 5. 反破坏护栏

- `schemaVersion` 只升不降；本批次不 bump（仍为 3）。
- 任何小游戏写入失败（配额/异常）不得抛未捕获错误，须 `console.warn` 后继续。
- 越界 realmId / 未知灵宠 ID 一律归一化到安全默认值，禁止数组越界崩溃。
