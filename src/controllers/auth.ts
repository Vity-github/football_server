import Router from "@koa/router";
import { Context } from "koa";
import { checkBody, checkToken } from "../middlewares/dataCheck";
import { checkUserWithoutIdAndNameDto } from "./auth.check";
import { UserWithoutIdAndNameDto } from "../dtos/User";
import { catchError, generateOk } from "../libs/check";
import * as UserService from "../services/user";
import { redis } from "../index";

const router = new Router({
  prefix: "/api/auth",
});

// 用户注册
router.post(
  "/register",
  checkBody(checkUserWithoutIdAndNameDto),
  async (ctx: Context) => {
    try {
      const req = ctx.request.body as UserWithoutIdAndNameDto;
      const id = await UserService.createUser(req);
      ctx.body = generateOk(id);
    } catch (err) {
      catchError(err, ctx);
    }
  }
);

// 用户登录
router.post(
  "/login",
  checkBody(checkUserWithoutIdAndNameDto),
  async (ctx: Context) => {
    try {
      const req = ctx.request.body as UserWithoutIdAndNameDto;
      const token = await UserService.login(req);
      await redis.set(`session:${token}`, "1");
      ctx.cookies.set("token", token);
      ctx.body = generateOk();
    } catch (err) {
      catchError(err, ctx);
    }
  }
);

// 用户登出
router.post("/logout", checkToken(UserService.checkToken), (ctx: Context) => {
  try {
    const token = ctx.cookies.get("token");
    UserService.logout(token);
    ctx.cookies.set("token", "");
    ctx.body = generateOk();
  } catch (err) {
    catchError(err, ctx);
  }
});

export default router;
