import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OgmaModule, OgmaService } from '@ogma/nestjs-module';
import { ClientModule, ClientService } from '@sierra/client';
import config, { OgmaModuleConfig } from '@sierra/config';
import { PrismaModule } from '@sierra/prisma';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config],
        }),
        OgmaModule.forRootAsync({
            useClass: OgmaModuleConfig,
            imports: [ConfigModule],
        }),
        PrismaModule,
        ClientModule,
    ],
    providers: [],
})
export class FrameworkModule {}
