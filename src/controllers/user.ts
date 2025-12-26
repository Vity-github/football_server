import Router from "@koa/router";
import { Context } from "koa";
import { checkToken } from "../middlewares/dataCheck";
import { catchError, generateOk } from "../libs/check";
import * as userKit from "../services/user";

const router = new Router({
  prefix: "/api/user",
});

router.get("/getInfo", checkToken(userKit.checkToken), async (ctx: Context) => {
  try {
    const token = ctx.cookies.get("token");
    const user = await userKit.getUserInfo(token);
    ctx.body = generateOk({ user });
  } catch (err) {
    catchError(err, ctx);
  }
});

export default router;
