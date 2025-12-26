// 用户注册请求体
export interface IRegisterReq {
  account: string;
  pwd: string;
}

// 用户登录请求体，继承用户注册请求体
export interface ILoginReq extends IRegisterReq {}
