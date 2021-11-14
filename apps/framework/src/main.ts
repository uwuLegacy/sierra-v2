import { NestFactory } from '@nestjs/core';
import { OgmaService } from '@ogma/nestjs-module';
import { ClientService } from '@sierra/client';
import { PrismaService } from '@sierra/prisma';
import { FrameworkModule } from './framework.module';
import dn from '@sierra/modules';

async function main() {
    const app = await NestFactory.createApplicationContext(FrameworkModule, {
        logger: false,
    });

    const prisma = app.get(PrismaService);
    prisma.enableShutdownHooks(app);

    const logger = app.get(OgmaService);
    app.useLogger(logger);

    const client = app.get(ClientService);
    client.start();

    dn();
}

main();
