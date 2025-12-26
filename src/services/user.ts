import { nullCheck } from '../libs/check';
import { UserWithoutIdAndNameDto } from '../dtos/User';
import UserRepository from '../repositories/UserRepository';

const session = [];

// 创建用户
export async function createUser(createUserDto: UserWithoutIdAndNameDto) {
  const name = '默认名称';
  const id = await UserRepository.createUser({
    ...createUserDto,
    name,
  });
  return id;
}

export function logout(token: string) {
  const index = session.indexOf(token);
  session.splice(index, 1);
}

export function checkToken(token: string) {
  const isLogin = session.includes(token);
  nullCheck(isLogin, 'ERR_USER_NOT_LOGIN');
}
