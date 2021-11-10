import { ISierraConfig } from './config.interface';
import { is_devenv, version, intents } from './vars';

// Side-effects import to override ClientOptions with the Sapphire definition which extends SapphireClientOptions.
import '@sapphire/framework';

export const config: ISierraConfig = {
    application: 'Sierra',

    owners: ['392264789360902156'],

    environment: {
        development: is_devenv,
        version,
        logLevel: is_devenv ? 'INFO' : 'DEBUG',
    },

    client: {
        intents,
        shards: 'auto',
        defaultPrefix: is_devenv ? ';' : '.',

        baseUserDirectory: '',
        caseInsensitiveCommands: true,
        caseInsensitivePrefixes: true,

        presence: {
            status: 'online',
            activities: [
                {
                    type: 'LISTENING',
                    name: `Sierra v${version}`,
                },
            ],
        },
    },
};

export default (): ISierraConfig => config;
