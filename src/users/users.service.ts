import { Injectable } from '@nestjs/common';
import { IUser } from './users.interface';

@Injectable()
export class UserService {
  private readonly users: IUser[] = [];

  getAllUsers(): IUser[] {
    return this.users;
  }

  getUserById(id: string): IUser {
    return this.users.find(user => user.id === id);
  }

  createUser(user: IUser): IUser {
    this.users.push(user);
    return user;
  }

  updateUser(id: string, updatedUser: IUser): IUser {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updatedUser,
      };
      return this.users[userIndex];
    }
    return null;
  }

  deleteUser(id: string): void {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }
}