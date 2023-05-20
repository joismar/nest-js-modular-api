import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/shared/entities/user.entity';
import { IUserRepository, USER_REPOSITORY } from 'src/shared/interfaces/user-repository.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: IUserRepository
  ) {}

  async getUserByEmail(email: string): Promise<UserEntity> {
    return await this.usersRepository.findOne({ email })
  }
}
