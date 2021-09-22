import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Injectable()
export class RegistrationService {
  constructor(@InjectModel(Reg.name) private RegModel: Model<RegDocument>) {}
  
  async create(createRegistrationDto: CreateRegistrationDto): Promise<Reg> {
    return new this.RegModel(createRegistrationDto).save();
  }

  findAll() {
    return this.RegModel.find();
  }

  findOne(name: string) {
    return this.RegModel.findOne( {name} );
  }

  update(name: string, updateRegistrationDto: UpdateRegistrationDto) {
    return this.RegModel.updateOne({name}, {set: UpdateRegistrationDto});
  }

  remove(name: string) {
    return this.RegModel.deleteOne({name});
  }
}
