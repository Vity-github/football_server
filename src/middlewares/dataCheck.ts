import { Context, Next } from "koa";
import { catchError } from "../libs/check";

// 检查token
const checkToken = (check: (token: string) => void) => {
  return async function (ctx: Context, next: Next) {
    try {
      console.log(`path: ${ctx.path}`);
      const token = ctx.cookies.get("token");
      check(token);
      await next();
    } catch (err) {
      catchError(err, ctx);
    }
  };
};

// checkBody校验请求体
const checkBody = <T>(check: (body: T) => void) => {
  return async function (ctx: Context, next: Next) {
    try {
      console.log(`path: ${ctx.path}`);
      check(ctx.request.body as T);
      await next();
    } catch (err) {
      catchError(err, ctx);
    }
  };
};

// checkQuery校验查询参数
const checkQuery = <T>(check: (body: T) => void) => {
  return async function (ctx: Context, next: Next) {
    try {
      console.log(`path: ${ctx.path}`);
      check(ctx.request.query as T);
      await next();
    } catch (err) {
      catchError(err, ctx);
    }
  };
};

export { checkBody, checkQuery, checkToken };
