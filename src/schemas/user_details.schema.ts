import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = User & Document;

@Schema()
export class User {
  @Prop()
  user_id: number;

  @Prop()
  name: string;

  @prop()
  contact: string;

  @Prop()
  origin: string;

  @Prop()
  destination: string;

  @Prop()
  cost: number;

  @Prop({
    user_type: String,
    enum: ['CLIENT', 'DRIVER']
  })

}

export const BookSchema = SchemaFactory.createForClass(Book);