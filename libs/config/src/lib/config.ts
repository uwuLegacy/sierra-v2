import { ISierraConfig } from './config.interface';
import { is_devenv } from './vars';

export const config: ISierraConfig = {
    application: 'Sierra',

    owners: ['392264789360902156'],

    environment: {
        development: is_devenv,
    },

    client: undefined,
};

export default (): ISierraConfig => config;
