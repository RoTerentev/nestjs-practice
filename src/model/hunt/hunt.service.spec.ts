import { Test, TestingModule } from '@nestjs/testing';
import { HuntService } from './hunt.service';

describe('HuntService', () => {
  let service: HuntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HuntService],
    }).compile();

    service = module.get<HuntService>(HuntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
