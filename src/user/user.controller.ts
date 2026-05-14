import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
  update(@Param("id", ParseIntPipe) id: number, @Body() user: User) {
    return this.userService.updateUser(id, user);
  }
  @Delete("delete/:id")
  delete(@Param("id") id: number) {
    return this.userService.deleteUser(id);
  }
  @Put("updateUser/:id")
  updateUser(
    @Param("id", ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, user);
  }
  @Delete("deleteUser/:id")
  deleteUser(@Param("id",ParseIntPipe) id: number){
    return this.userService.deleteUser(id)
  }
  @Get("getUserOne/:id")
  getUserOne(@Param("id",ParseIntPipe) id:number){
      return this.userService.getUserOne(id)
  }
}
