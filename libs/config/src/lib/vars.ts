import { Intents } from 'discord.js';
import { readFileSync } from 'fs';
import git from '@nice-labs/git-rev';

export const intents: number[] = [
    Intents.FLAGS.GUILDS,
    //Intents.FLAGS.GUILD_MEMBERS,
    //Intents.FLAGS.GUILD_BANS,
    //Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    //Intents.FLAGS.GUILD_INTEGRATIONS,
    //Intents.FLAGS.GUILD_WEBHOOKS,
    //Intents.FLAGS.GUILD_INVITES,
    //Intents.FLAGS.GUILD_VOICE_STATES,
    //Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
];

export const is_devenv = process.env.NODE_ENV !== 'production';

export const version_pure = JSON.parse(
    readFileSync('package.json').toString()
).version;

export const version = `${version_pure}${
    is_devenv ? `-dev.${git.commitHash(true, 'HEAD')}` : ''
}`;
