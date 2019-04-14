import { Test, TestingModule } from '@nestjs/testing';
import { FowlService } from './fowl.service';

describe('FowlService', () => {
  let service: FowlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FowlService],
    }).compile();

    service = module.get<FowlService>(FowlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
