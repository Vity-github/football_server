import { CODE, MSG } from '../libs/stat';

class CustomError {
  code: CODE;
  message: string;
  constructor(code: CODE = CODE.ERROR, message: string = MSG.ERROR) {
    this.code = code;
    this.message = message;
  }
}

export default CustomError;
