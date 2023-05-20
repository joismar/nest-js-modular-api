import { ApiProperty } from "@nestjs/swagger"

export class GetProfileResponse {
    @ApiProperty()
    name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    privateField: string
}