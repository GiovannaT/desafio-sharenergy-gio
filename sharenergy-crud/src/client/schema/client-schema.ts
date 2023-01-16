import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { User } from 'src/user/schema/user-schema';

export type ClientDocument = Client & Document;

@Schema({ collection: 'Client' })
export class Client {
  @Prop()
  name: string;

  @Prop({ unique: true })
  cpf: string;

  @Prop()
  email: string;

  @Prop()
  adress: string;

  @Prop()
  cellphone: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
