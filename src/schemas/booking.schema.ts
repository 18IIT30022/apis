import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  id: number;

  @Prop()
  client_name: string;

  @prop()
  city: string;

  @Prop()
  origin: string;

  @Prop()
  destination: string;

  @Prop()
  cost: number;

  @Prop( default:false )
  Booked: Boolean

}

export const BookSchema = SchemaFactory.createForClass(Book);