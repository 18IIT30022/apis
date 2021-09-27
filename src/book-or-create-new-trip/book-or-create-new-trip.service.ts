import { Injectable } from '@nestjs/common';
import { create_new_tour_by_clientDto } from './dto/create_new_tour_by_clientDto.dto';
import { update_Book_TripDto } from './dto/update_Book_TripDto.dto';
import { Trip, TripSchema } from './schemas/trip_details.schema';
import { Users_Booked_Trips, Users_Booked_TripsSchema } from './schemas/users_booked_trips.schema';
import { send_message_background } from './background_task/background.ts';

@Injectable()
export class BookOrCreateNewTripService {
  constructor( @InjectModel(Trip.trip_id) private TripModel: Model<TripDocument>, 
    @InjectModel(Users_Booked_Trips.users_booked_trips_id) private Users_Booked_TripsModel: Model<Users_Booked_TripsDocument>
   ) {}


  async create_new_tour_by_client(create_new_tour_by_clientDto: create_new_tour_by_clientDto) {
    if( UserModel.user_type === 'DRIVER'){
        console.log('Invalid User Type');
        return;
    }
    
    const {city, origin, desitination, cost} = create_new_tour_by_clientDto;

    let new_tour = new Trip()
    new_tour.city = city;
    new_tour.origin = origin;
    new_tour.desitination = desitination;
    new_tour.cost = cost;
 
    const savedTrip = await this.TripModel.save(new_tour);
    return this.build(savedTrip);

  }

  async find_All_Available_Trips_in_City( city:string) {
    return await this.TripModel.find( {city} );
  }


  async Book_trip(trip_id: number, update_Book_TripDto: update_Book_TripDto) {
    
    if( UserModel.user_type === 'CLIENT'){
        console.log('Invalid User Type');
      return;
    }
    let trip_to_be_booked_by_driver = await this.TripModel.findOne(trip_id);
    trip_to_be_booked_by_driver.Booked = 'Booked';
    let updated = Object.assign(trip_to_be_booked_by_driver, update_Book_TripDto);

    // Inserting the trips booked by user in user_booked_details schema -- start
      let new_user_booked_tour = new Users_Booked_Trips()
      const insert_trip = {
        new_user_booked_tour.trip_id = trip_id,
        new_user_booked_tour.city = trip_to_be_booked_by_driver.city,
        new_user_booked_tour.origin = trip_to_be_booked_by_driver.origin;
        new_user_booked_tour.desitination = trip_to_be_booked_by_driver.desitination;
        new_user_booked_tour.cost = trip_to_be_booked_by_driver.cost;
      }

      await this.Users_Booked_TripsModel.save( insert_trip );
    // --end


    // Background_task
    const job = {
      message: 'Confirmation Message: You have Succesfully Booked'
    }
    send_message_background.addmessageToQueue(job);
    //
    
    return await this.TripModel.save( updated );
  }

   private build(newTrip: Trip) {
    const buildnew = {
      trip_id: newTrip.trip_id,
      user_id: new_Trip.user_id,
      city: newTrip.city,
      origin: newTrip.origin,
      destination: newTrip.desitination,
      cost: newTrip.cost
    };

    return {newTrip: buildnew};
  }

  

}
