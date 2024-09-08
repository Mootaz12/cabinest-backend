import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FileModule } from 'src/file/file.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, FileModule],
})
export class UserModule {}
