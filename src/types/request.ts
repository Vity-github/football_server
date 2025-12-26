export interface IRegisterReq {
  account: string;
  pwd: string;
  confirmPwd: string;
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
