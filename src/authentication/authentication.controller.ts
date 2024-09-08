import { Body, Controller, Post } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { SignInDto } from 'src/dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.SignIn(signInDto);
  }
}
