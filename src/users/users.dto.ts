import { UUID } from "crypto";
import { IUser } from "./users.interface";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto implements IUser {
    @ApiProperty()
    id: UUID;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}