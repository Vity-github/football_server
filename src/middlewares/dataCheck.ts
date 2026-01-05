import { Context, Next } from 'koa';
import { logger } from '../libs/logger';
import { ApiErrorResponse } from '../class/response';

// 检查token
const checkToken = (check: (token: string) => void) => {
  return async function (ctx: Context, next: Next) {
    try {
      logger.info(`path: ${ctx.path}`);
      const token = ctx.cookies.get('token');
      check(token);
      await next();
    } catch (err) {
      ctx.body = new ApiErrorResponse(err.message);
    }
  };
};

// checkBody校验请求体
const checkBody = <T>(check: (body: T) => void) => {
  return async function (ctx: Context, next: Next) {
    try {
      logger.info(`path: ${ctx.path}`);
      check(ctx.request.body as T);
      await next();
    } catch (err) {
      ctx.body = new ApiErrorResponse(err.message);
    }
  };
};

// checkQuery校验查询参数
const checkQuery = <T>(check: (body: T) => void) => {
  return async function (ctx: Context, next: Next) {
    try {
      logger.info(`path: ${ctx.path}`);
      check(ctx.request.query as T);
      await next();
    } catch (err) {
      ctx.body = new ApiErrorResponse(err.message);
    }
  };
};

export { checkBody, checkQuery, checkToken };
