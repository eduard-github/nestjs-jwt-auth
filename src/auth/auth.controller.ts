import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/local/signup')
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    this.authService.signupLocal(dto)
  }

  @Post('/local/signin')
  signinLocal() {
    this.authService.signinLocal()
  }

  @Post('/local/signup')
  logout() {
    this.authService.logout()
  }

  @Post('/local/signup')
  refreshTokens() {
    this.authService.refreshTokens()
  }
}
