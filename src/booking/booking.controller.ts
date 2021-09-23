import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get(':city')
  findCity(@Param('city') city: string) {
    return this.bookingService.findCity(city);
  }

  @Get('AllBooked')
  showallBookings() {
    return this.bookingService.showallBookings();
  }

  @Patch(':id')
  book(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto)  {
    return this.bookingService.book(updateBookingDto);
  }


}
