import Router from '@koa/router';
import { Context } from 'koa';
import { checkBody } from '../middlewares/dataCheck';
import { checkUserWithoutIdAndNameDto } from './auth.check';
import { UserWithoutIdAndNameDto } from '../dtos/User';
import { ApiErrorResponse, ApiSuccessResponse } from '../class/response';
import * as UserService from '../services/user';

const router = new Router({
  prefix: '/api/auth',
});

// 用户注册
router.post('/register', checkBody(checkUserWithoutIdAndNameDto), async (ctx: Context) => {
  try {
    const req = ctx.request.body as UserWithoutIdAndNameDto;
    const id = await UserService.createUser(req);
    ctx.body = new ApiSuccessResponse<number>(id);
  } catch (err) {
    ctx.body = new ApiErrorResponse(err.code, err.message);
  }
});

export default router;
