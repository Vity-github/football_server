import { CODE } from 'src/class/code';
import { locale, t } from 'src/locale/locale';
// 所有返回体的默认结构
export class ApiResponse<T> {
  code: CODE;
  msg: String;
  data?: T;
  constructor(code: CODE, msg: String, data?: T) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}

// 成功返回体
export class ApiSuccessResponse<T> extends ApiResponse<T> {
  constructor(data?: T) {
    super(CODE.SUCCESS, t(locale.COMMON.OPERATION_SUCCESS), data);
  }
}

// 错误返回体
export class ApiErrorResponse extends ApiResponse<null> {
  constructor(msg: String = t(locale.COMMON.OPERATION_FAILED)) {
    super(CODE.ERROR, msg);
  }
}
