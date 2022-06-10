import { IsEmail, IsNotEmpty } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class UsersDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
