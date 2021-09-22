import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationService.create(createRegistrationDto);
  }

  @Get()
  findAll() {
    return this.registrationService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.registrationService.findOne( name );
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationService.update(name, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationService.remove(+id);
  }
}
