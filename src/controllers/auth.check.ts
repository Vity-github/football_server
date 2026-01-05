import { UserWithoutIdAndNameDto } from 'src/dtos/User';

const checkUserWithoutIdAndNameDto = ({ account, password }: UserWithoutIdAndNameDto): void => {
  if (!account) {
    throw new Error('PARAMS_LOST');
  }
  if (!password) {
    throw new Error('PARAMS_LOST');
  }
};

export { checkUserWithoutIdAndNameDto };
