import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  company_name: string;

  @Prop()
  city: string;

  @Prop()
  contact: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);