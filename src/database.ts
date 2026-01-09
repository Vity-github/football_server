import sequelize from './libs/database';
import { logger } from './libs/logger';

export const initDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    logger.info('数据库连接成功！');

    // 如果需要同步表结构（开发环境）
    // await sequelize.sync({ alter: true });
  } catch (error) {
    logger.error('数据库连接失败:', error);
  }
};
