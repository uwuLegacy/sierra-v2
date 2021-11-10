import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OgmaModule } from '@ogma/nestjs-module';
import config from '@sierra/config';
import { OgmaModuleConfig } from '../common/ogma/ogma-config.service';
import { ClientModule, ClientService } from './client';

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
        ClientModule,
    ],
})
export class AppModule {}
