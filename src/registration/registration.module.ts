import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Reg.name, schema: RegSchema }])],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
