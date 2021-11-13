import { ClientOptions } from 'discord.js';
import '@sapphire/framework';

export interface IClientConfig extends ClientOptions {
    token: string;
}

export interface IEnvironmentConfig {
    production: boolean;
    
}

export interface IConfig {
    client: IClientConfig;
    environment: IEnvironmentConfig;
}
