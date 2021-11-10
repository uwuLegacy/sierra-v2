import { ClientOptions } from 'discord.js';
import { OgmaLogger } from '@ogma/nestjs-module';

export interface ClientConfig extends ClientOptions {}

export interface EnvironmentConfig {
    development: boolean;
    version: string;
    logLevel: ;
}

export interface ISierraConfig {
    application: string;
    owners: string[];

    environment: EnvironmentConfig;
    client: ClientConfig;
}
