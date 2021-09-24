import { IsNotEmpty } from 'class-validator';

export class create_new_tour_by_clientDto {
  @IsNotEmpty()
  readonly city: string;

  @IsNotEmpty()
  readonly origin: string;

  @IsNotEmpty()
  readonly destination: string;

  @IsNotEmpty()
  readonly cost: number;
}

