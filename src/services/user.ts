import { UserWithoutIdAndNameDto } from '../dtos/User';
import UserRepository from '../repositories/UserRepository';

const session = [];

// 创建用户
const createUser = async (createUserDto: UserWithoutIdAndNameDto): Promise<number> => {
  const name = '默认名称';
  const id = await UserRepository.createUser({
    ...createUserDto,
    name,
  });

  return id;
};

const logout = (token: string): void => {
  const index = session.indexOf(token);
  session.splice(index, 1);
};

const checkToken = (token: string): void => {
  const isLogin = session.includes(token);
  if (!isLogin) {
    throw new Error('ERR_USER_NOT_LOGIN');
  }
};

export { createUser, logout, checkToken };
