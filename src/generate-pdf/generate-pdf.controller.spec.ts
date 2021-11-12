import { Test, TestingModule } from '@nestjs/testing';
import { GeneratePdfController } from './generate-pdf.controller';

describe('GeneratePdfController', () => {
  let controller: GeneratePdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratePdfController],
    }).compile();

    controller = module.get<GeneratePdfController>(GeneratePdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
