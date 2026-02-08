import { Test, TestingModule } from '@nestjs/testing';
import { TestUserService } from './test-user.service';

describe('TestUserService', () => {
  let service: TestUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestUserService],
    }).compile();

    service = module.get<TestUserService>(TestUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
