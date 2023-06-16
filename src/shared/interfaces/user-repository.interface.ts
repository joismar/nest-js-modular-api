import { UserEntity } from '../entities/user.entity';

export const USER_REPOSITORY = 'USER REPOSITORY';

export interface IUserRepository {
  findOne(where: object): Promise<UserEntity>;
  create(user: Partial<UserEntity>): Promise<void>;
}
