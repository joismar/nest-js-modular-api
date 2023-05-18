import { PrismaModule } from "src/prisma/prisma.module";
import { DatabaseUserRepository } from "./user.repository";
import { Module } from "@nestjs/common";

@Module({
    imports: [PrismaModule],
    providers: [DatabaseUserRepository],
    exports: [DatabaseUserRepository],
})
export class RepositoriesModule {}