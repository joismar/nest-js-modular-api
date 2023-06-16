import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserResponse } from '../users/responses/get-user.response';
import { AuthGuard } from '../auth/auth.guard';
import { GetProfileResponse } from './responses/get-profile.response';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/')
  @ApiResponse({ status: 200, type: GetUserResponse })
  async getUserByEmail(
    @Query('email') email: string,
  ): Promise<GetUserResponse> {
    const user = await this.userService.getUserByEmail(email);
    return { email: user.email, name: user.name };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('profile')
  @ApiResponse({ status: 200, type: GetProfileResponse })
  async getProfile(@Request() req): Promise<GetProfileResponse> {
    const user = await this.userService.getUserByEmail(req.user.email);
    return {
      email: user.email,
      name: user.name,
      privateField: user.privatedField,
    };
  }
}
