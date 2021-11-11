import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OgmaLogger, OgmaService } from '@ogma/nestjs-module';
import { Enumerable } from '@sapphire/decorators';
import { SapphireClient, Store } from '@sapphire/framework';

// Side-effect import for definitions
import '@sapphire/pieces';

@Injectable()
export class ClientService extends SapphireClient {
    public constructor(
        private readonly configService: ConfigService,
        @OgmaLogger(ClientService) public readonly consoleLogger: OgmaService
    ) {
        super(configService.get('client'));

        Store.defaultStrategy.onLoad = (s, p) =>
            this.consoleLogger.log(
                `Loading ${s.name}:${p.name}`,
                'LoaderService'
            );
    }

    @Enumerable(false)
    public is_dev = this.configService.get('environment.dev');

    public async start() {
        const res = await this.login(this.configService.get('client.token'));

        this.consoleLogger.log('Client initialized');
        return res;
    }

    public async destroy() {
        this.consoleLogger.fatal('Destroying client instance');
        return super.destroy();
    }
}
