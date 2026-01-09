import { UserNameAndPasswordDto } from 'src/dtos/User';
import { locale, t } from 'src/locale/locale';

// 用户注册接口参数校验
const checkUserWithoutIdAndNameDto = ({ account, password }: UserNameAndPasswordDto): void => {
  if (!account) {
    throw new Error(t(locale.AUTH.ACCOUNT_REQUIRED));
  }
  if (!password) {
    throw new Error(t(locale.AUTH.PASSWORD_REQUIRED));
  }
};

export { checkUserWithoutIdAndNameDto };
