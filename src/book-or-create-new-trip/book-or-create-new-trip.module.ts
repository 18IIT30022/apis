import { Module } from '@nestjs/common';
import { BookOrCreateNewTripService } from './book-or-create-new-trip.service';
import { BookOrCreateNewTripController } from './book-or-create-new-trip.controller';
import { Trip, TripSchema } from './schemas/trip_details.schema';
import { Users_Booked_Trips, Users_Booked_TripsSchema } from './schemas/users_booked_trips.schema';

@Module({
  controllers: [BookOrCreateNewTripController],
  providers: [BookOrCreateNewTripService]
})
export class BookOrCreateNewTripModule {}
