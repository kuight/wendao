# v5 模块接口契约（所有子 agent 必须遵守）

> 每个 core 模块通过 `installXxx(boot)` 挂载到 boot，模块间通过 boot 上的命名空间通信。

## 共享 boot 对象
- `boot.state.get() / boot.state.set(patch)` — 全局状态读写（唯一数据源）
- `boot.bus.emit(evt, data) / boot.bus.on(evt, fn)` — 模块间事件总线
- `boot.register(name, def)` — 模块注册（boot 已提供）
- `boot.log(...)` — 统一日志

## 各模块命名空间（boot 上挂载的接口）
| 模块 | 挂载到 | 关键接口 |
|---|---|---|
| state | boot.state | get/set |
| save | boot.save | load()/save(data)/migrate(old) |
| world | boot.world | genMap()/moveTo(x,y)/getTile()/enterScene(id)/unlockZone(id) |
| render | boot.render | init(container)/drawScene()/camera.set(x,y)/transition(type) |
| input | boot.input | on(key)/onTap(cb)/onKey(cb) |
| battle | boot.battle | start(encounter)/doAnswer(opt)/attack()/cast(skillId) |
| economy | boot.economy | addGold()/spendGold()/addItem()/useItem() |
| knowledge | boot.knowledge | getQuestion(difficulty)/recordAnswer(correct)/addChapterProgress() |
| audio | boot.audio | play(name)/stop(name)/setVolume(v)/preload(list) |
| effects | boot.effects | burst(x,y,type)/shake()/flash()/combo(n)/floatText(str,color) |
| ui | boot.ui | show(screen)/hide()/toast(msg)/hud.update(stat,val) |

## 状态结构（state.get() 返回）
```
{
  version: 'v5.0',
  player: { realm, level, hp, mp, xp, gold, inventory{}, position:{x,y,zone}, skill{}, stats{} },
  world: { zones: {}, unlocked: [], time: 'day', weather: '' },
  scene: null, settings: {}, flags: {}, saveMeta: null
}
```

## 事件总线事件（boot.bus）
- 'ready' 启动完成
- 'scene:enter' 场景切换 {id}
- 'battle:start' / 'battle:answer' {correct} / 'battle:end' {win}
- 'player:move' {x,y}
- 'state:save' 存档触发

## 完成标准
每个模块实现后必须：
1. 语法正确（node 能解析/运行）
2. 接口名与上表一致
3. 不打乱 v4 现有运行（src/ 下原文件不动）
4. 日志输出带 [v5/模块名] 前缀