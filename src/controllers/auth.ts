import Router from '@koa/router';
import { Context } from 'koa';
import { checkBody } from '../middlewares/dataCheck';
import { checkUserWithoutIdAndNameDto } from './auth.check';
import { UserWithoutIdAndNameDto } from '../dtos/User';
import { catchError, generateOk } from '../libs/check';
import * as UserService from '../services/user';

const router = new Router({
  prefix: '/api/auth',
});

// 用户注册
router.post('/register', checkBody(checkUserWithoutIdAndNameDto), async (ctx: Context) => {
  try {
    const req = ctx.request.body as UserWithoutIdAndNameDto;
    const id = await UserService.createUser(req);
    ctx.body = generateOk(id);
  } catch (err) {
    catchError(err, ctx);
  }
});

export default router;
