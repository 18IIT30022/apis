import { Test, TestingModule } from '@nestjs/testing';
import { BookOrCreateNewTripController } from './book-or-create-new-trip.controller';
import { BookOrCreateNewTripService } from './book-or-create-new-trip.service';

describe('BookOrCreateNewTripController', () => {
  let controller: BookOrCreateNewTripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookOrCreateNewTripController],
      providers: [BookOrCreateNewTripService],
    }).compile();

    controller = module.get<BookOrCreateNewTripController>(BookOrCreateNewTripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
