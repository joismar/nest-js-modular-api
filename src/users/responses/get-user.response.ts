import { ApiProperty } from "@nestjs/swagger"

export class GetUserResponse {
    @ApiProperty()
    name: string

    @ApiProperty()
    email: string
}