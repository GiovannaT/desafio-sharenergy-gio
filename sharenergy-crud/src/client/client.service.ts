import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Client, ClientDocument } from './schema/client-schema';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async getAll() {
    return await this.clientModel.find().exec();
  }

  async createClient(client: Client) {
    const newClient = new this.clientModel(client);
    return await newClient.save();
  }

  async getClientById(id: string) {
    return await this.clientModel.findById(id).exec();
  }

  async deleteClient(id: string) {
    return await this.clientModel.findByIdAndRemove(id);
  }

  async updateClient(id: string, client: Client) {
    return await this.clientModel.findByIdAndUpdate(id, client, {
      new: true,
    });
  }
}
