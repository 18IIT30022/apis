import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TripDocument = Trip & Document;

@Schema()
export class Trip {
  @Prop()
  trip_id: number;

  @Prop({ type = mongoose.Schema.Types.ObjectId, ref:'user_details'})
  user_id: user_details;

  @prop()
  city: string;

  @Prop()
  origin: string;

  @Prop()
  destination: string;

  @Prop()
  cost: number;

  @Prop({
    Booked: String,
    Default: 'NOT_BOOKED',
    enum: ['NOT_BOOKED', 'BOOKED', 'TRIP_STARTED']
  })

}

export const TripSchema = SchemaFactory.createForClass(Trip);