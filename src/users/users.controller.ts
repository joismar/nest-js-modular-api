import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserDto } from 'src/users/dtos/get-user.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/')
  @ApiResponse({status: 200, type: GetUserDto})
  async getUserByEmail(@Query('email') email: string): Promise<GetUserDto> {
    return this.userService.getUserByEmail(email);
  }
}