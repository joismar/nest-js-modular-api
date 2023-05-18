import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { DatabaseUserRepository } from 'src/repositories/user.repository';
import { USER_REPOSITORY } from 'src/shared/interfaces/user-repository.interface';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: USER_REPOSITORY,
      useClass: DatabaseUserRepository
    }
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}