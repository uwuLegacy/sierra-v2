import {
    Args,
    CommandContext,
    Result,
    isOk,
    UserError,
} from '@sapphire/framework';
import { Message } from 'discord.js';
import { SierraCommand } from './Command';
import { Args as LexureArgs } from 'lexure';

export class SierraArgs extends Args {
    public constructor(
        message: Message,
        command: SierraCommand,
        parser: LexureArgs,
        context: CommandContext,
    ) {
        super(message, command, parser, context);
    }

    public nextSplitResult({
        delimiter = ',',
        times = Infinity,
    }: SierraArgs.NextSplitOptions = {}): Result<string[], UserError> {
        if (this.parser.finished) return this.missingArguments();

        const values: string[] = [];
        const parts = this.parser
            .many()
            .reduce((acc, token) => `${acc}${token.value}${token.trailing}`, '')
            .split(delimiter);

        for (const part of parts) {
            const trimmed = part.trim();
            if (trimmed.length === 0) continue;

            values.push(trimmed);
            if (values.length === times) break;
        }

        return values.length > 0 ? Args.ok(values) : this.missingArguments();
    }

    /**
     * Consumes the entire parser and splits it by the delimiter, filtering out empty values.
     * @param delimiter The delimiter to be used, defaults to `,`.
     * @returns An array of values.
     */
    public nextSplit(options?: SierraArgs.NextSplitOptions) {
        const result = this.nextSplitResult(options);
        if (isOk(result)) return result.value;
        throw result.error;
    }
}

export interface SierraArgs {
    command: SierraCommand;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace SierraArgs {
    export interface NextSplitOptions {
        /**
         * The delimiter to be used.
         * @default ','
         */
        delimiter?: string;

        /**
         * The maximum amount of entries to be read.
         * @default Infinity
         */
        times?: number;
    }
}
