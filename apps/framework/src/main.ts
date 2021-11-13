import { NestFactory } from '@nestjs/core';
import { FrameworkModule } from './framework.module';

async function bootstrap() {
  const app = await NestFactory.create(FrameworkModule);
  await app.listen(3000);
}
bootstrap();
