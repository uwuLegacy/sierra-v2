import { Injectable } from '@nestjs/common';

@Injectable()
export class FrameworkService {
  getHello(): string {
    return 'Hello World!';
  }
}
