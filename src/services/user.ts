import * as crypto from "crypto";
import config from "../config";
import { nullCheck } from "../libs/check";
import { UserWithoutIdAndNameDto } from "../dtos/User";
import UserRepository from "../repositories/UserRepository";

const session = [];

// 创建用户
export async function createUser(createUserDto: UserWithoutIdAndNameDto) {
  const name = "默认名称";
  const id = await UserRepository.createUser({
    ...createUserDto,
    name,
  });
  return id;
}

export async function login(loginUserDto: UserWithoutIdAndNameDto) {
  // const hashPwd = crypto
  //   .createHmac("sha256", config.secret)
  //   .update(pwd)
  //   .digest("hex");
  // nullCheck(hashPwd === "asdf", "ERR_PWD_NOT_CORRECT");
  // if (!session.includes("asdf")) {
  //   session.push("asdf");
  // }
  return "asdf";
}

export function logout(token: string) {
  const index = session.indexOf(token);
  session.splice(index, 1);
}

export function checkToken(token: string) {
  const isLogin = session.includes(token);
  nullCheck(isLogin, "ERR_USER_NOT_LOGIN");
}

export async function getUserInfo(token: string) {
  const user = [];
  nullCheck(!!user, "ERR_USER_NOT_FOUND");
  return {
    id: "asdf",
    nickname: "asdf",
    avatar: "asdf",
  };
}

export async function changePwd(token: string, pwd: string, oldPwd: string) {
  return {
    id: "asdf",
    nickname: "asdf",
    avatar: "asdf",
  };
}
