import { ApiProperty } from "@nestjs/swagger";

export class LoginResponse {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    token: string;
}