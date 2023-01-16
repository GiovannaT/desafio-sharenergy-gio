import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { User } from './schema/user-schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: User) {
    return await this.userService.createUser(user);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
  }
}
