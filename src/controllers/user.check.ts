import { nullCheck } from "../libs/check";
import { IChangePwdReq, ISetUserInfoReq } from "../types/request";

export function checkSetInfoBody({ nickname, avatar }: ISetUserInfoReq) {
  nullCheck(!!nickname, "ERR_PARAMS_LOST");
  nullCheck(!!avatar, "ERR_PARAMS_LOST");
}

export function checkChangePwdBody({ pwd, oldPwd, confirmPwd }: IChangePwdReq) {
  nullCheck(!!pwd, "ERR_PARAMS_LOST");
  nullCheck(!!oldPwd, "ERR_PARAMS_LOST");
  nullCheck(!!confirmPwd, "ERR_PARAMS_LOST");
  nullCheck(pwd === confirmPwd, "ERR_TWO_PWD_NOT_CORRECT");
}
