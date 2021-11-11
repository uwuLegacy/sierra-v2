import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { OgmaService } from '@ogma/nestjs-module';
import { ClientService } from './app/client';
import { Logger } from '@nestjs/common';

async function main() {
    const app = await NestFactory.createApplicationContext(AppModule, {
        logger: false,
    });

    // get logger
    const logger = app.get<OgmaService>(OgmaService);
    app.useLogger(console);

    const client = app.get(ClientService);
    client.start();
}

main();
