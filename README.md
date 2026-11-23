# Antigravity 汉化与实时指标胶囊精简分支 (`feat/i18n-metrics-only`)

基于 `chuanban-antigravity-theme-patch` `v6.0.0` 裁剪的精简版本，**仅保留以下两项核心功能**，不修改 Antigravity 原生主题、配色、字体、输入框样式或系统设置弹窗，且**无需安装任何第三方字体**：

1. **全界面汉化（1,965 条词典，`i18n`）**
   - 覆盖主界面、划词浮动操作、15+ 设置子页、编排器、快捷键、内置浏览器管理、`Swarm` 面板、子 Agent 全视图/蜂群协作者与动态模型文案。
   - 严格隔离代码块、Monaco 编辑器、终端、行内文件胶囊、用户自定义子 Agent 名称及英文历史对话标题。
   - 基于 `WeakMap` 保留英文原文，支持通过 `user/i18n.override.json` 在 `2.5s` 内热更新或还原。
2. **实时会话遥测胶囊（`metrics`，需 Node.js `>= 22.13.0`）**
   - 基于原生 `node:sqlite` 只读解析本地会话库（同时兼容 Windows WSL2 远程工作区）。
   - 嵌入输入框底栏，默认采用 `compact` 上下文圆环 + 精简 4 行悬停详情卡（支持在 `user/config.json` 中通过 `"metricsMode": "full"` 切回完整文本模式），支持多路平铺分屏、`/btw` 支线提问与子 Agent 侧栏独立计量；悬停展示 `tok/s`、`TTFT`、思考链/正文输出比例、上下文窗口真实上限与缓存命中率；当 `modules.i18n` 为 `false` 时自动切换为英文文案。
   - 胶囊与详情卡样式全面复用 Antigravity 原生 CSS 变量，自动跟随原生浅色 / 深色模式。

## 已移除的模块

- 昼夜双模式主题预设（暖纸浅色、暖纸深夜 `claude-warm`、📖 书卷按钮、暗红蜡封输入框、标题栏/幕布/Swarm 配色覆写）
- 四层自定义字体替换（`Anthropic Serif` / `Anthropic Mono` / 更纱黑体 / `Google Sans Flex` 覆盖）与字体强制校验
- 系统设置弹窗「本地扩展 → Token 统计」多维分析面板（`tokenAnalytics`）
- 体验修复钩子（`deadlockHealer`、`coldBootHealer`、`zoomShortcuts`）

> 保留了底层必需的 CDP 守护进程（`core/daemon.mjs`）、`2.33.0+` 单图标 CDP 接力与保活（`cdpAutoRelaunch`）、`user/` 2.5s 热重载与 `install.mjs` 生命周期 CLI。

## 快速使用

```bash
# 1. 环境检查（无需安装任何字体）
node install.mjs doctor

# 2. 安装/升级（自动保留已有 user/ 配置）
node install.mjs install

# 3. 若客户端尚未挂载调试端口，在空闲时执行（或手动重开一次 Antigravity）
node install.mjs relaunch

# 4. 实机验收
node install.mjs verify

# 5. 无损卸载还原
node install.mjs uninstall
```

## 个人配置 (`user/config.json`)

```json
{
  "enabled": true,
  "channel": "auto",
  "metricsMode": "compact",
  "contextLimit": 256000,
  "modules": {
    "i18n": true,
    "metrics": true,
    "cdpAutoRelaunch": true,
    "customCss": true,
    "customJs": true
  }
}
```
