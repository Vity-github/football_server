import { check } from "../libs/check";
import { IRegisterReq } from "../types/request";

export function checkRegisterBody({ account, pwd }: IRegisterReq) {
  check(!!account, "ERR_PARAMS_LOST");
  check(!!pwd, "ERR_PARAMS_LOST");
}

export function checkLoginBody({ account, pwd }: IRegisterReq) {
  check(!!account, "ERR_PARAMS_LOST");
  check(!!pwd, "ERR_PARAMS_LOST");
}
