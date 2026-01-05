import { CODE, MSG } from 'src/libs/stat';

// 所有返回体的默认结构
export class ApiResponse<T> {
  code: CODE;
  msg: MSG;
  data?: T;
  constructor(code: CODE, msg: MSG, data?: T) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}

// 成功返回体
export class ApiSuccessResponse<T> extends ApiResponse<T> {
  constructor(data?: T, msg: MSG = MSG.SUCCESS) {
    super(CODE.SUCCESS, msg, data);
  }
}

// 错误返回体
export class ApiErrorResponse extends ApiResponse<null> {
  constructor(msg: MSG = MSG.ERROR) {
    super(CODE.ERROR, msg);
  }
}
