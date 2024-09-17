import {
  Body,
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CabinService } from './cabin.service';
import { CreateCabinDto, UpdateCabinDto } from 'src/dto';

@Controller('cabin')
export class CabinController {
  constructor(private readonly cabinService: CabinService) {}
  @Get()
  getAllCabin() {
    return this.cabinService.getCabins();
  }
  @Get(':cabinId')
  getCabin(@Param('cabinId') id: string) {
    return this.cabinService.getCabin(id);
  }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createCabin(
    @Body() createCabinDto: CreateCabinDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.cabinService.createCabin(createCabinDto, file);
  }
  @Patch(':cabinId')
  @UseInterceptors(FileInterceptor('file'))
  updateCabin(
    @Param('cabinId') id: string,
    @Body() updateCabinDto: UpdateCabinDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.cabinService.updateCabin(id, updateCabinDto, file);
  }
  @Delete(':cabinId')
  deletCabin(@Param('cabinId') id: string) {
    return this.cabinService.deleteCabin(id);
  }
}
