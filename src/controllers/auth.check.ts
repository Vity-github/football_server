import { UserWithoutIdAndNameDto } from 'src/dtos/User';
import { nullCheck } from '../libs/check';

export function checkUserWithoutIdAndNameDto({ account, password }: UserWithoutIdAndNameDto) {
  nullCheck(!!account, '账户名称不能为空');
  nullCheck(!!password, '密码不能为空');
}
