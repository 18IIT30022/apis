
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegDocument = Reg & Document;

@Schema()
export class Reg {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  contact: number;
}

export const RegSchema = SchemaFactory.createForClass(Reg);
