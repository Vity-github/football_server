import { nullCheck } from "../libs/check";
import { IRegisterReq } from "./auth.type";

export function checkRegisterBody({ account, pwd }: IRegisterReq) {
  nullCheck(!!account, "账户名称不能为空");
  nullCheck(!!pwd, "密码不能为空");
}

export function checkLoginBody({ account, pwd }: IRegisterReq) {
  nullCheck(!!account, "ERR_PARAMS_LOST");
  nullCheck(!!pwd, "ERR_PARAMS_LOST");
}
