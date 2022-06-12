import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUsersDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  telp: string;

  @IsNotEmpty()
  password: string;
}
