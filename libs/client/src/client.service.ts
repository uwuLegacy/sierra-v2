import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OgmaLogger, OgmaService } from '@ogma/nestjs-module';
import { SapphireClient, Store } from '@sapphire/framework';
import { ClientOptions } from 'discord.js';
import '@sapphire/pieces';

@Injectable()
export class ClientService extends SapphireClient<true> {
    constructor(
        @OgmaLogger('ClientService')
        private readonly consoleLogger: OgmaService,
        private readonly configService: ConfigService,
    ) {
        super(configService.get<ClientOptions>('client'));

        this.setupStoreEventHandlers();

        this.consoleLogger.info('ClientService instantiated');
    }

    public async start(): Promise<void> {
        const lr = await this.login(
            this.configService.get<string>('client.auth'),
        );

        this.consoleLogger.info('Client logged in');
        return;
        // why would we return our discord token?
    }

    private setupStoreEventHandlers(): void {
        const logMeta = 'LoaderService';

        Store.defaultStrategy.onLoad = (s, p) => {
            this.consoleLogger.info(`Loading ${s.name}:${p.name}`, logMeta);
        };

        Store.defaultStrategy.onError = (e, p) => {
            this.consoleLogger.error(
                `Failed to load ${p}: ${e.message}`,
                logMeta,
            );
        };

        Store.defaultStrategy.onLoadAll = (s) => {
            this.consoleLogger.info(
                `Finished loading store: ${s.name}`,
                logMeta,
            );
        };
    }
}
