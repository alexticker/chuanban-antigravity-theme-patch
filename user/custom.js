/**
 * user/custom.js — 用户/执行端 Agent 专属前端扩展钩子
 * 在 core/runtime.js 执行完毕后于独立 try/catch 沙箱中调用。
 * 可直接使用入参 `ctx`（或别名 `boot`）：
 *   ctx.version                 - 当前补丁版本与哈希
 *   ctx.config                  - 当前合并后的 user/config.json 对象
 *   ctx.modules                 - 模块启用状态 (含 i18n, metrics, cdpAutoRelaunch, customCss, customJs)
 *   ctx.dict                    - 原型安全的当前汉化词典对象
 *   ctx.metrics                 - 最近一次会话实时指标数据 (TPS / TTFT / Ctx / Out)
 *   ctx.ensureMetricsPill(true) - 手动刷新实时指标胶囊布局
 *   ctx.onCleanup(fn)           - 注册热重载/卸载时的清理钩子（避免定时器或 MutationObserver 泄漏）
 *
 * 若此脚本报错，可通过 `node install.mjs verify --safe-mode` 一键绕过排障。
 */
