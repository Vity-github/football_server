/* eslint-disable no-undef */
/* eslint-disable no-console */
// 简单的日志工具
// 生产环境可以使用 winston、pino 等专业日志库

export const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.info(`[INFO] ${message}`, ...args);
  },
  error: (message: string, ...args: unknown[]) => {
    console.error(`[ERROR] ${message}`, ...args);
  },
  warn: (message: string, ...args: unknown[]) => {
    console.warn(`[WARN] ${message}`, ...args);
  },
};
