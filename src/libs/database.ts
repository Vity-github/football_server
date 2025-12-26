import { Dialect, Sequelize } from 'sequelize';
import config from '../config';
import { logger } from './logger';

const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    port: config.database.port,
    dialect: config.database.dialect as Dialect,
    pool: config.database.pool,
    logging: logger.info, // 开发环境可以开启日志，生产环境设为 false
  }
);

export default sequelize;
