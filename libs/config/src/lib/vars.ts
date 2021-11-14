import git from '@nice-labs/git-rev';

export const isDevenv = process.env.NODE_ENV !== 'production';

export const version = `0.1.0${
    isDevenv ? `${git.commitHash(true, 'HEAD')}` : ''
}`;
