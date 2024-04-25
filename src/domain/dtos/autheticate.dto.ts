import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthenticateDto {
  @IsNotEmpty()
  @IsEmail()
  user: string;

  @IsNotEmpty()
  password: string;
}
