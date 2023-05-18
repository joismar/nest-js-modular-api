import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from 'src/shared/interfaces/user-repository.interface';
import { GetUserDto } from 'src/users/dtos/get-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: IUserRepository
  ) {}

  async getUserByEmail(email: string): Promise<GetUserDto> {
    var user = await this.usersRepository.findOne({ email })
    return {name: user.name, email: user.email}
  }
}
