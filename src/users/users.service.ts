import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/domain/dtos/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(user: UserDto): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  async updateUser(id: number, updatedUser: UserDto): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: updatedUser,
    });
  }

  async deleteUser(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
