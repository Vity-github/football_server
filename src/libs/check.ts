import { Context } from 'koa';
import { logger } from './logger';

export class Error {
  stat: string;
  msg: string;
  constructor(stat: string, msg: string) {
    this.stat = stat;
    this.msg = msg;
  }
}

// 空校验
export function nullCheck(bool: boolean, msg: string): void {
  if (!bool) {
    throw new Error('PARAMS_LOST', msg);
  }
}

export function catchError(err: Error, ctx: Context): void {
  logger.error('error: ', err);
  ctx.body = { stat: err.stat, msg: err.msg };
}

export function generateOk<T>(data?: T): { stat: string; msg: string; data?: T } {
  return {
    stat: 'SUCCESS',
    msg: 'ok',
    data,
  };
}
