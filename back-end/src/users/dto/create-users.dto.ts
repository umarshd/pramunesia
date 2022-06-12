import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUsersDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsNotEmpty()
  @ApiProperty()
  telp: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
