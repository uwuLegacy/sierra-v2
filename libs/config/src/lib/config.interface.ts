import { LogLevel } from '@ogma/common';
import { ClientOptions } from 'discord.js';

export interface ClientConfig extends ClientOptions {}

export interface EnvironmentConfig {
    dev: boolean;
    version: string;
    logLevel: keyof typeof LogLevel;
}

export interface ISierraConfig {
    application: string;
    owners: string[];

    environment: EnvironmentConfig;
    client: ClientConfig;
}
