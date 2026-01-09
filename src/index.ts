import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import config from './config';
import router from './router';
import Redis from 'ioredis';
import { logger } from './libs/logger';
import { initDatabase } from './database';
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const time = Date.now() - start;
  ctx.set('X-Response-Time', `${time}ms`);
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

void initDatabase();
export const redis = new Redis();

app.listen(config.port, () => {
  logger.info(`正在监听${config.port}端口...`);
});
