export class IResponse<T> {
  code: number;
  msg: string;
  data?: T;
  constructor(code: number, msg: string, data?: T) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}

export interface ISetUserInfoReq {
  nickname: string;
  avatar: string;
}

export interface IChangePwdReq {
  pwd: string;
  oldPwd: string;
  confirmPwd: string;
}

export interface ICancelStarReq {
  id: string;
}

export interface IListReq {
  isStar: boolean;
  offset: number;
  limit: number;
}
