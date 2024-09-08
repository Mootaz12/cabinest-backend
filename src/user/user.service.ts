import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

import { CreateUserDto, UpdateUserDto } from 'src/dto';
import { FileService } from 'src/file/file.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private fileService: FileService,
  ) {}
  async getUser(id: string) {
    const userId = Number(id);
    const res = await this.prisma.user.findUnique({ where: { userId } });
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
  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
    file?: Express.Multer.File,
  ) {
    const userId = Number(id);
    const data: any = {};
    if (updateUserDto.fullName) data.fullName = updateUserDto.fullName;
    if (updateUserDto.email) data.email = updateUserDto.email;
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      data.password = hashedPassword;
    }
    if (file) {
      const { secure_url: imageUrl } = await this.fileService.uploadImage(file);
      data.imageUrl = imageUrl;
    }
    return await this.prisma.user.update({
      where: { userId },
      data,
    });
  }
}
