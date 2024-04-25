import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthenticateDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  user: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'john@doe.com' })
  password: string;
}
