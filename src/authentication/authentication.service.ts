import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto } from 'src/dto';

@Injectable()
export class AuthenticationService {
  constructor(private prisma: PrismaService) {}
  async SignIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return { message: 'no user founded' };
    } else {
      if (!bcrypt.compareSync(password, user.password))
        return { message: 'wrong password' };
      else return user.id;
    }
  }
}
