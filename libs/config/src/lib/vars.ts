import { Intents } from 'discord.js';
import { readFileSync } from 'fs';
import git from '@nice-labs/git-rev';

export const intents: number[] = [];

export const is_devenv = process.env.NODE_ENV !== 'production';

export const version_pure = JSON.parse(
    readFileSync('package.json').toString()
).version;

export const version = `${version_pure}${
    is_devenv ? `-dev.${git.commitHash(true, 'HEAD')}` : ''
}`;
