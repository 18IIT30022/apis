import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';

@Module({
  imports: [MongooseModule.forFeature([{ city: Book.city, schema: BookSchema }])],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
