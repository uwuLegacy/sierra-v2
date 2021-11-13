import { Controller, Get } from '@nestjs/common';
import { FrameworkService } from './framework.service';

@Controller()
export class FrameworkController {
  constructor(private readonly frameworkService: FrameworkService) {}

  @Get()
  getHello(): string {
    return this.frameworkService.getHello();
  }
}
