import { Controller, Get, Post, Body,Param,Query,Put,Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { CreateUserDto } from './dto/create-user.dot';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
  @Post('add')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
  @Get("getUserById/:id")
  getUserById(@Param("id") id: string) {
    return this.userService.getUserById(id);
  }
  @Get("getList")
  getList(@Query("page") page: number, @Query("size") size: number) {
    return this.userService.getList(page, size);
  }
  @Put("update/:id")
  updateUser(@Param("id") id: string, @Body() user: User) {
    return this.userService.updateUser(id, user);
  }
  @Delete("delete/:id")
  deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }
}
