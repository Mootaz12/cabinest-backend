import { Module } from '@nestjs/common';
import { CabinController } from './cabin.controller';
import { CabinService } from './cabin.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FileModule } from 'src/file/file.module';

@Module({
  controllers: [CabinController],
  providers: [CabinService],
  imports: [PrismaModule, FileModule],
})
export class CabinModule {}
