import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from './schema/user-schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getUserById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async getUserByUsername(username: string) {
    const userName = username.toLocaleLowerCase();
    const user = await this.userModel.findOne({ userName });

    return user;
  }

  async createUser(user: User) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async deleteUser(id: string) {
    return await this.userModel.findByIdAndRemove(id);
  }

  async updateUser(id: string, user: User) {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
  }
}
