import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Users } from './entities/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async create(createUsersDto: CreateUsersDto) {
    const salt = await bcrypt.genSalt();
    createUsersDto.password = await bcrypt.hash(createUsersDto.password, salt);

    try {
      return await this.userRepository.save(createUsersDto);
    } catch (error) {
      if (error.errno == 1062) {
        throw new ConflictException(
          `Email ${createUsersDto.email} already used`,
        );
      } else {
        throw new InternalServerErrorException(error);
      }
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    return await this.userRepository.update(id, updateUsersDto);
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }

  async validatePassword(password, hashPassword) {
    const passwordVerify = await bcrypt.compare(password, hashPassword);
    return passwordVerify;
  }
}
