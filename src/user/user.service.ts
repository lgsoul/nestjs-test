import { Injectable } from '@nestjs/common';
import { User } from './user'
import { CreateUserDto } from './dto/create-user.dot';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'User Service';
  }
  async createUser(user: CreateUserDto) {
    
     const post = await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
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
  updateUser(id: string, user: User) {
    return {
      data: {
        id: id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
    };
  }
  deleteUser(id: string) {
    return {
      data: {
        id: id,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password',
      },
    };
  }
}
