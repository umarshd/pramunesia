import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersDto } from './users.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async showAllUsers() {
    const users = await this.usersService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      users,
    };
  }

  @Post()
  async createUsers(@Body() data: UsersDto) {
    const salt = await bcrypt.genSalt();
    const hashPasswod = await bcrypt.hash(data.password, salt);
    data.password = hashPasswod;

    try {
      const user = await this.usersService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User created sucessfully',
        user,
      };
    } catch (error) {
      if (error.errno == 1062) {
        throw new ConflictException(`Email ${data.email} already used`);
      } else {
        throw new InternalServerErrorException(error);
      }
    }
  }

  @Get('/:id')
  async readUser(@Param('id') id: string) {
    const user = await this.usersService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      user,
    };
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() data: Partial<UsersDto>) {
    const salt = await bcrypt.genSalt();
    const hashPasswod = await bcrypt.hash(data.password, salt);
    data.password = hashPasswod;

    await this.usersService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.usersService.destroy(id);

    return {
      statusCode: HttpStatus.OK,
      message: 'User delete successfully',
    };
  }
}
