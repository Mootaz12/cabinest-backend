import { Module } from '@nestjs/common';
import { CabinController } from './cabin.controller';
import { CabinService } from './cabin.service';

@Module({
  controllers: [CabinController],
  providers: [CabinService]
})
export class CabinModule {}
