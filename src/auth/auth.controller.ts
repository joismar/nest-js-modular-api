import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/auth/dtos/login.dto';
import { SignUpDto } from './dtos/signup.dto';
import { LoginResponse } from './responses/login.response';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, type: LoginResponse })
  @Post('login')
  async signIn(@Body() loginDto: LoginDto): Promise<LoginResponse> {
    return await this.authService.signIn(loginDto.email, loginDto.password) as LoginResponse;
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
}