import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sharenergy:sharenergy@cluster0.lmbrhki.mongodb.net/cluster0?retryWrites=true&w=majority',
    ),
    UserModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
