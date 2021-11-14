import { join } from 'path';
import { IConfig } from './config.interface';
import { isDevenv, version } from './vars';

export const config: IConfig = {
    application: 'Sierra',

    client: {
        intents: ['DIRECT_MESSAGES', 'GUILD_MESSAGES', 'GUILDS'],
        token: isDevenv
            ? process.env.DISCORD_TOKEN_DEV
            : process.env.DISCORD_TOKEN,
        shards: 'auto',

        baseUserDirectory: join(process.cwd(), 'dist/apps/framework/libs/modules/src'),
        caseInsensitiveCommands: true,
        caseInsensitivePrefixes: true,

        defaultPrefix: isDevenv ? ';' : '.',
    },

    environment: {
        production: isDevenv,
        version: version,
        logLevel: isDevenv ? 'DEBUG' : 'INFO',
    },
};

export default () => config;
