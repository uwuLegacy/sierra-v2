import { NestFactory } from '@nestjs/core';
import { ClientService } from '@sierra/client';
import { PrismaService } from '@sierra/prisma';
import { FrameworkModule } from './framework.module';

async function main() {
    const app = await NestFactory.createApplicationContext(FrameworkModule);

    const prisma = app.get(PrismaService);
    prisma.enableShutdownHooks(app);

    const client = app.get(ClientService);
    client.start();
}

main();
