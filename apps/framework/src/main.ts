import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { OgmaService } from '@ogma/nestjs-module';
import { ClientService } from './app/client';
import { Logger } from '@nestjs/common';

async function main() {
    const app = await NestFactory.createApplicationContext(AppModule, {
        logger: false,
    });

    const logger = app.get(Logger);
    app.useLogger(logger);

    logger.log('Starting application');

    const client = app.get(ClientService);
    client.start();
}

main();
