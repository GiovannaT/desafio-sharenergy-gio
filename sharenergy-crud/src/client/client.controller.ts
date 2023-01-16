import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Client } from './schema/client-schema';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  async getAll() {
    return await this.clientService.getAll();
  }

  @Get('/:id')
  async getClientById(@Param('id') id: string) {
    return await this.clientService.getClientById(id);
  }

  @Post()
  async createClient(@Body() client: Client) {
    return await this.clientService.createClient(client);
  }

  @Put('/:id')
  async updateClient(@Param('id') id: string, @Body() client: Client) {
    return await this.clientService.updateClient(id, client);
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: string) {
    await this.clientService.deleteClient(id);
  }
}
