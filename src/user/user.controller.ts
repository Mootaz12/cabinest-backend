import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.userService.getUser(userId);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
