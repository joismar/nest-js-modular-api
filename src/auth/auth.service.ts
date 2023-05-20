import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hashSync, compareSync, genSaltSync } from 'bcrypt';
import { SignUpDto } from './dtos/signup.dto';
import { UserDto } from 'src/users/dtos/user.dto';
import { IUserRepository, USER_REPOSITORY } from 'src/shared/interfaces/user-repository.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: IUserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<void> {
    const encryptedPassword = this.encryptPassword(signUpDto.password);
    const newUser: UserDto = {
      ...signUpDto,
      password: encryptedPassword,
    };

    await this.usersRepository.create(newUser);
  }

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersRepository.findOne({ email })
    if (!user || !this.comparePasswords(pass, user.password)) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;

    const token = this.generateToken(user);

    return { ...result, token };
  }

  private encryptPassword(password: string): string {
    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    return hashSync(password, salt);
  }

  private comparePasswords(plainPassword: string, encryptedPassword: string): boolean {
    return compareSync(plainPassword, encryptedPassword);
  }

  private generateToken(user: any): string {
    const payload = { email: user.email, id: user.id };
    return this.jwtService.sign(
      payload,
      {
        expiresIn: '1d'
      }
    );
  }
}