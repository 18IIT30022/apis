import { Test, TestingModule } from '@nestjs/testing';
import { BookOrCreateNewTripService } from './book-or-create-new-trip.service';

describe('BookOrCreateNewTripService', () => {
  let service: BookOrCreateNewTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookOrCreateNewTripService],
    }).compile();

    service = module.get<BookOrCreateNewTripService>(BookOrCreateNewTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
