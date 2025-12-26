import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import config from './config';
import router from './router';
import sequelize from './libs/database';
import Redis from 'ioredis';
import { logger } from './libs/logger';
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const time = Date.now() - start;
  ctx.set('X-Response-Time', time + 'ms');
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

initDatabase();
export const redis = new Redis();

app.listen(config.port, () => {
  logger.info(`正在监听${config.port}端口...`);
});

async function initDatabase() {
  try {
    await sequelize.authenticate();
    logger.info('数据库连接成功！');

    // 如果需要同步表结构（开发环境）
    // await sequelize.sync({ alter: true });
  } catch (error) {
    logger.error('数据库连接失败:', error);
  }
}
