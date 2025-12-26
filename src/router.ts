import Router from '@koa/router';
import authRoute from './controllers/auth';

const router = new Router();
router.use(authRoute.routes());

export default router;
