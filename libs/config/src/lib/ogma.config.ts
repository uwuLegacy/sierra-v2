import { Injectable } from '@nestjs/common';
import { OgmaModuleOptions } from '@ogma/nestjs-module';
import { ModuleConfigFactory } from '@golevelup/nestjs-modules';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OgmaModuleConfig
    implements ModuleConfigFactory<OgmaModuleOptions>
{
    constructor(private readonly configService: ConfigService) {}

    createModuleConfig(): OgmaModuleOptions {
        return {
            service: {
                logLevel: this.configService.get('environment.logLevel'),
                color: true,
                application: this.configService.get('application'),
            },
        };
    }
}
