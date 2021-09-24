import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookOrCreateNewTripService } from './book-or-create-new-trip.service';
import { CreateBookOrCreateNewTripDto } from './dto/create-book-or-create-new-trip.dto';
import { UpdateBookOrCreateNewTripDto } from './dto/update-book-or-create-new-trip.dto';

@Controller('book-or-create-new-trip')
export class BookOrCreateNewTripController {
  constructor(private readonly bookOrCreateNewTripService: BookOrCreateNewTripService) {}

  @Post()
  create_new_tour_by_client(@Body() create_new_tour_by_clientDto: create_new_tour_by_clientDto) {
    return this.bookOrCreateNewTripService.create_new_tour_by_client(create_new_tour_by_clientDto);
  }



  @Get(':city')
  find_All_Available_Trips_in_City(city:string) {
    return this.bookOrCreateNewTripService.find_All_Available_Trips_in_City(city);
  }

  @Patch(':trip_id')
  Book_trip(@Param('trip_id') trip_id: string, @Body() update_Book_TripDto: update_Book_TripDto) {
    return this.bookOrCreateNewTripService.Book_trip( trip_id, update_Book_TripDto);
  }

  
}

