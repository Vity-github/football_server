import Router from "@koa/router";
import authRoute from "./controllers/auth";
import userRoute from "./controllers/user";

const router = new Router();
router.use(authRoute.routes());
router.use(userRoute.routes());

export default router;
