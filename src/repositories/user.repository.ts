import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { UserEntity } from "src/shared/entities/user.entity";
import { IUserRepository } from "src/shared/interfaces/user-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DatabaseUserRepository implements IUserRepository {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}
  
  async findOne(where: Prisma.UserWhereUniqueInput): Promise<UserEntity> {
    return this.toEntity(await this.prismaService.user.findUnique({ where }));
  }

  async create(user: User): Promise<void> {
    await this.prismaService.user.create({ data: user })
  }

  toEntity(user: User): UserEntity {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    }
  }
}