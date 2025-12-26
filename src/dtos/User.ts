/**
 * 基础用户 DTO - 包含所有字段
 * 用于内部传递完整用户数据
 */
export interface UserDto {
  id: number;
  name: string;
  account: string;
  password: string;
}

// 创建用户 DTO - 不包含 id
export type UserWithoutIdDto = Omit<UserDto, "id">;

// 创建用户 DTO - 不包含 id，name
export type UserWithoutIdAndNameDto = Omit<UserWithoutIdDto, "name">;
