import { Test, TestingModule } from '@nestjs/testing';
import { FrameworkController } from './framework.controller';
import { FrameworkService } from './framework.service';

describe('FrameworkController', () => {
  let frameworkController: FrameworkController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FrameworkController],
      providers: [FrameworkService],
    }).compile();

    frameworkController = app.get<FrameworkController>(FrameworkController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(frameworkController.getHello()).toBe('Hello World!');
    });
  });
});
