import { LogLevel } from '@ogma/common';
import { ClientOptions } from 'discord.js';
import '@sapphire/framework';

export interface IClientConfig extends ClientOptions {
    token: string;
}

export interface IEnvironmentConfig {
    production: boolean;
    version: string;
    logLevel: keyof typeof LogLevel;
}

export interface IConfig {
    application: string;

    client: IClientConfig;
    environment: IEnvironmentConfig;
}
