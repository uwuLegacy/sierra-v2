import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { OgmaService } from '@ogma/nestjs-module';
import { ClientService } from '@sierra/client';
import { PrismaService } from '@sierra/prisma';

async function main() {
    const app = await NestFactory.createApplicationContext(AppModule, {
        logger: false,
    });

    // get logger
    const logger = app.get<OgmaService>(OgmaService);
    app.useLogger(logger);

    const prisma = app.get<PrismaService>(PrismaService);
    prisma.enableShutdownHooks(app);

    const client = app.get(ClientService);
    client.start();
}

main();
