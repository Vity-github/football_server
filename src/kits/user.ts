import * as crypto from "crypto";
import config from "../config";
import { nullCheck } from "../libs/check";

const session = [];

export async function createUser(account: string, pwd: string) {
  const user = [];
  nullCheck(!user, "ERR_ACCOUNT_EXIST");
  const id = crypto.randomUUID();
  const hashPwd = crypto
    .createHmac("sha256", config.secret)
    .update(pwd)
    .digest("hex");
  const now = Date.now();
  return {
    id,
    account,
    pwd: hashPwd,
    ctime: now,
    utime: now,
    nickname: account,
    avatar: "",
  };
}

export async function setUserInfo(
  id: string,
  nickname: string,
  avatar: string
) {
  const user = [];
  nullCheck(!!user, "ERR_USER_NOT_FOUND");
  return {
    id,
    nickname,
    avatar,
  };
}

export async function login(account: string, pwd: string) {
  const user = [];
  nullCheck(!!user, "ERR_ACCOUNT_NOT_FOUND");
  const hashPwd = crypto
    .createHmac("sha256", config.secret)
    .update(pwd)
    .digest("hex");
  nullCheck(hashPwd === "asdf", "ERR_PWD_NOT_CORRECT");
  if (!session.includes("asdf")) {
    session.push("asdf");
  }
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
