import User from '../entities/User';
import { UserWithoutIdDto } from '../dtos/User';

class UserRepository {
  // 创建用户、返回值为用户id
  async createUser(createUserDto: UserWithoutIdDto): Promise<number> {
    const user = await User.create({
      name: createUserDto.name,
      account: createUserDto.account,
      password_hash: createUserDto.password,
    });

    return user.id;
  }
}

export default new UserRepository();
