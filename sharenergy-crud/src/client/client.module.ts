import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientService } from './client.service';
import { ClientSchema } from './schema/client-schema';
import { ClientController } from './client.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Client',
        schema: ClientSchema,
        collection: 'Client',
      },
    ]),
  ],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
