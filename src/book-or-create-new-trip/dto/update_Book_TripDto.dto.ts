import { PartialType } from '@nestjs/mapped-types';
import { create_new_tour_by_clientDto } from './create_new_tour_by_clientDto.dto';


export class Update_Book_TripDto extends PartialType(create_new_tour_by_clientDto) {
  readonly city: string;
  readonly origin: string;
  readonly destination: string;
  readonly image: number;
}
