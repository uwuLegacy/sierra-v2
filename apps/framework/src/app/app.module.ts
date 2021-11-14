import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OgmaModule } from '@ogma/nestjs-module';
import config from '@sierra/config';
import { OgmaModuleConfig } from '../common/ogma/ogma-config.service';
import { ClientModule } from '@sierra/client';
import { PrismaModule } from '@sierra/prisma';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
        }),
        OgmaModule.forRootAsync({
            useClass: OgmaModuleConfig,
            imports: [ConfigModule],
        }),
        PrismaModule.forRoot({
            prismaServiceOptions: {
                prismaOptions: { log: ['info', 'query'] },
            },
        }),
        ClientModule,
    ],
})
export class AppModule {}
