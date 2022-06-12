import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  async cekUser(@Request() req) {
    return await req.user;
  }

  @Post()
  async login(@Body() authDto: AuthDto) {
    const user = await this.authService.cekUser(
      authDto.email,
      authDto.password,
    );

    return await this.authService.generetaToken({ id: user.id });
  }
}
