import Router from "@koa/router";
import { Context } from "koa";
import { checkBody, checkToken } from "../middlewares/dataCheck";
import { checkLoginBody, checkRegisterBody } from "./auth.check";
import { ILoginReq, IRegisterReq } from "./auth.type";
import { catchError, generateOk } from "../libs/check";
import * as userKit from "../kits/user";

const router = new Router({
  prefix: "/api/auth",
});

// 用户注册
router.post("/register", checkBody(checkRegisterBody), async (ctx: Context) => {
  try {
    const { account, pwd } = ctx.request.body as IRegisterReq;
    const id = await userKit.createUser(account, pwd);
    ctx.body = generateOk({ id });
  } catch (err) {
    catchError(err, ctx);
  }
});

// 用户登录
router.post("/login", checkBody(checkLoginBody), async (ctx: Context) => {
  try {
    const { account, pwd } = ctx.request.body as ILoginReq;
    const token = await userKit.login(account, pwd);
    ctx.cookies.set("token", token);
    ctx.body = generateOk();
  } catch (err) {
    catchError(err, ctx);
  }
});

// 用户登出
router.post("/logout", checkToken(userKit.checkToken), (ctx: Context) => {
  try {
    const token = ctx.cookies.get("token");
    userKit.logout(token);
    ctx.cookies.set("token", "");
    ctx.body = generateOk();
  } catch (err) {
    catchError(err, ctx);
  }
});

export default router;
