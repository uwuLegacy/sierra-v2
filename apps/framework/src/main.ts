import { NestFactory } from '@nestjs/core';
import { FrameworkModule } from './framework.module';

async function main() {
    const app = await NestFactory.createApplicationContext(FrameworkModule);
}

main();
