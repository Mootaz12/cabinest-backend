import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUser(id: string) {
    const userId = Number(id);
    const res = await this.prisma.user.findUnique({ where: { id: userId } });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = res;
    return user;
  }
  async createUser(createUserDto: CreateUserDto) {
    const existinguser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    if (existinguser) return { message: 'Email already in use' };
    else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
      const user = await this.prisma.user.create({
        data: {
          fullName: createUserDto.fullName,
          email: createUserDto.email,
          password: hashedPassword,
        },
      });
      return user;
    }
  }
}
