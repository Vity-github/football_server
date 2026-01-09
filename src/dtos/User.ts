// 完整基础用户DTO
export interface UserDto {
  id: number;
  name: string;
  account: string;
  password: string;
}

// 用户DTO - 不包含 id
export type UserWithoutIdDto = Omit<UserDto, 'id'>;

// 用户DTO - 只包含 name 和 account
export type UserNameAndPasswordDto = Pick<UserDto, 'account' | 'password'>;
