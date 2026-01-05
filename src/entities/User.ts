import { DataTypes, Model } from 'sequelize';
import sequelize from '../libs/database';
import { UserDto } from '../dtos/User';

type UserEntity = Omit<UserDto, 'password'> & { password_hash: string };

class User extends Model<UserEntity> implements UserEntity {
  public id!: number;
  public name!: string;
  public account!: string;
  public password_hash!: string;
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 't_user',
    timestamps: false, // 因为你自己管理 ctime 和 utime
  },
);

export default User;
