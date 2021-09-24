import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Users_Booked_TripsDocument = Users_Booked_Trips & Document;

@Schema()
export class Users_Booked_Trips {
  @Prop()
  users_booked_trips_id: number;

  @Prop()
  user_id: number;

  @Prop()
  trip_id: number;

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
    enum: ['NOT_BOOKED', 'BOOKED', 'TRIP_STARTED']
  })

}

export const Users_Booked_TripsSchema = SchemaFactory.createForClass(Users_Booked_Trips);