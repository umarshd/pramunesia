import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from './users.dto';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async showAll() {
    return await this.userRepository.find();
  }

  async create(data: UsersDto) {
    const user = this.userRepository.create(data);
    await this.userRepository.save(data);
    return user;
  }

  async findByEmail(email: string): Promise<UsersDto> {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async read(id: string) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async update(id: string, data: Partial<UsersDto>) {
    await this.userRepository.update({ id }, data);
    return await this.userRepository.findOneBy({ id });
  }

  async destroy(id: string) {
    await this.userRepository.delete({ id });
    return { deleted: id };
  }
}
