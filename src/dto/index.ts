import { IsEmail, IsOptional, IsString } from 'class-validator';

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
export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsString()
  fullName: string;
  @IsOptional()
  @IsString()
  password: string;
}
