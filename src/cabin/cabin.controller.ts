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
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CabinService } from './cabin.service';
import { CreateCabinDto, UpdateCabinDto } from 'src/dto';
import { CabinFilterType } from 'src/types';

@Controller('cabin')
export class CabinController {
  constructor(private readonly cabinService: CabinService) {}
  @Get()
  getAllCabin(@Query('query') filter: CabinFilterType) {
    return this.cabinService.getCabins(filter);
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
