import Stat from '../stat';
const __stat = new Map<string, string>();
export interface IStat {
  [key: string]: string;
}
export class Exception {
  stat: string;
  msg: string;
  constructor(stat: string, msg: string) {
    this.stat = stat;
    this.msg = msg;
  }

  static updates(stats: IStat): void {
    for (const key in stats) {
      __stat.set(key, stats[key]);
    }
  }

  static get(stat: string): string | undefined {
    return __stat.get(stat);
  }

  static set(key: string, stat: string): void {
    __stat.set(key, stat);
  }
}
Exception.updates(Stat);
Exception.set('Internel_Server_Error', '服务端异常');
