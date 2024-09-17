import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from 'src/dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  getUser(@Param('userId') id: string) {
    return this.userService.getUser(id);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @Patch(':userId')
  @UseInterceptors(FileInterceptor('file'))
  updateUser(
    @Param('userId') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.userService.updateUser(id, updateUserDto, file);
  }
}
