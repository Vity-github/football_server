import CustomError from 'src/class/error';
import { UserWithoutIdAndNameDto } from 'src/dtos/User';
import { CODE } from 'src/libs/stat';

const checkUserWithoutIdAndNameDto = ({ account, password }: UserWithoutIdAndNameDto): void => {
  if (!account) {
    throw new CustomError(CODE.PARAMS_LOST, '账号不能为空');
  }
  if (!password) {
    throw new CustomError(CODE.PARAMS_LOST, '密码不能为空');
  }
};

export { checkUserWithoutIdAndNameDto };
