import { SubCommandPluginCommand } from '@sapphire/plugin-subcommands';
import { SierraArgs } from './Argument';
import {
    CommandContext,
    PieceContext,
    UserError,
    PreconditionContainerArray,
} from '@sapphire/framework';
import { PermissionLevels } from '../types';
import * as Lexure from 'lexure';
import { Message } from 'discord.js';

export abstract class SierraCommand extends SubCommandPluginCommand<
    SierraCommand.Args,
    SierraCommand
> {
    public readonly guarded: boolean;
    public readonly hidden: boolean;
    public readonly permissionLevel: PermissionLevels;
    public readonly description: string;

    public constructor(context: PieceContext, options: SierraCommand.Options) {
        super(context, { generateDashLessAliases: true, ...options });

        this.guarded = options.guarded ?? false;
        this.hidden = options.hidden ?? false;
        this.permissionLevel =
            options.permissionLevel ?? PermissionLevels.Everyone;
        this.description = options.description;
    }

    public async preParse(
        message: Message,
        parameters: string,
        context: CommandContext,
    ): Promise<SierraCommand.Args> {
        const parser = new Lexure.Parser(
            this.lexer.setInput(parameters).lex(),
        ).setUnorderedStrategy(this.strategy);
        const args = new Lexure.Args(parser.parse());
        return new SierraArgs(message, this, args, context);
    }

    protected error(identifier: string | UserError, context?: unknown): never {
        throw typeof identifier === 'string'
            ? new UserError({ identifier, context })
            : identifier;
    }

    protected parseConstructorPreConditions(
        options: SierraCommand.Options,
    ): void {
        super.parseConstructorPreConditions(options);
        this.parseConstructorPreConditionsSpam(options);
        this.parseConstructorPreConditionsPermissionLevel(options);
    }

    protected parseConstructorPreConditionsSpam(
        options: SierraCommand.Options,
    ): void {
        if (options.spamProtection) this.preconditions.append('Spam');
    }

    protected parseConstructorPreConditionsPermissionLevel(
        options: SierraCommand.Options,
    ): void {
        if (options.permissionLevel === PermissionLevels.BotOwner) {
            this.preconditions.append('BotOwner');
            return;
        }

        const container = new PreconditionContainerArray(
            ['BotOwner'],
            this.preconditions,
        );
        switch (options.permissionLevel ?? PermissionLevels.Everyone) {
            case PermissionLevels.Everyone:
                container.append('Everyone');
                break;
            case PermissionLevels.Moderator:
                container.append('Moderator');
                break;
            case PermissionLevels.Administrator:
                container.append('Administrator');
                break;
            case PermissionLevels.ServerOwner:
                container.append('ServerOwner');
                break;
            default:
                throw new Error(
                    `SierraCommand[${this.name}]: "permissionLevel" was specified as an invalid permission level (${options.permissionLevel}).`,
                );
        }

        this.preconditions.append(container);
    }
}

export interface SierraCommand {
    detailedDescription: string;
}

export namespace SierraCommand {
    export type Options = SubCommandPluginCommand.Options & {
        description: string;
        detailedDescription?: string;
        guarded?: boolean;
        hidden?: boolean;
        permissionLevel?: number;
        spamProtection?: boolean;
    };

    export type Args = SierraArgs;
    export type Context = CommandContext;
}
