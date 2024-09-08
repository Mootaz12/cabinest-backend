import { IsEmail, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
export class CreateUserDto {
  @IsString()
  fullName: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
