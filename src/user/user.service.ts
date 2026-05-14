import { Injectable } from '@nestjs/common';
import { User } from './user'
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'User Service';
  }
  async createUser(user: CreateUserDto) {
    
     const post = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });
    return {
      data: post,
      message: 'User created successfully',
      status: 'success',
    };
  }
  getUserById(id: string) {
    return {
      data: {
        id: id,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password',
      },
    };
  }
  getList(page: number, size: number) {
    return {
      data: {
        id: page,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password',
      },
    };
  }
  update(id: string, user: User) {
    return {
      data: {
        id: id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
    };
  }
  delete(id: number) {
    return {
      data: {
        id: id,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password',
      },
    };
  }
  async updateUser(id: number, user: UpdateUserDto) {
    const post = await this.prisma.user.update({
      where: { id: id },
      data: {
        name: user.name,
        email: user.email,
      },
    });
    return {
      data: post,
      message: 'User updated successfully',
      status: 'success',
    };
  }
  async deleteUser(id:number){
    const exits = await this.prisma.user.findUnique({
      where:{id:id}
    })
    if(!exits){
      return {
        success:false,
        message:"未找到该用户"
      }
    }
    await this.prisma.user.delete({
      where:{id:id}
    })
    return {
      success:true,
      message:"删除成功"
    }
  }
  async getUserOne(id:number){
    const post = await this.prisma.user.findMany({})
    if(!post){
      return {
        success:false,
        message:"未找到"
      }
    }
    return {
      success:true,
      data:post
    }
  }
}
