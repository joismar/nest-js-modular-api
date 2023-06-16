import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseUserRepository } from '../repositories/user.repository';
import { USER_REPOSITORY } from '../shared/interfaces/user-repository.interface';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USER_REPOSITORY,
      useClass: DatabaseUserRepository,
    },
  ],
  imports: [PrismaModule],
})
export class UsersModule {}
