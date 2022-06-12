import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async cekUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    const passwordVerify = await this.usersService.validatePassword(
      password,
      user.password,
    );
    if (user && passwordVerify) {
      return user;
    } else {
      throw new BadRequestException('Wrong Password or Email');
    }
  }

  generetaToken(user: any) {
    let dataToken = { id: user.id };
    let token = this.jwtService.sign(dataToken);
    return { token: token };
  }
}
