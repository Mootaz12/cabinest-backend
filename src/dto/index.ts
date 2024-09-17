import { IsEmail, IsString, IsOptional } from 'class-validator';

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

export class CreateCabinDto {
  @IsString()
  cabinName: string;
  @IsString()
  maxCapacity: string;
  @IsString()
  price: string;
  @IsOptional()
  @IsString()
  discount: string;
}
export class UpdateCabinDto {
  @IsOptional()
  @IsString()
  cabinName: string;
  @IsOptional()
  @IsString()
  maxCapacity: string;
  @IsOptional()
  @IsString()
  price: string;
  @IsOptional()
  @IsString()
  discount: string;
}
