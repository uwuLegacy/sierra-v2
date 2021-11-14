import { ApplyOptions } from '@sapphire/decorators';
import {
    Events,
    Listener,
    ListenerOptions,
    PieceContext,
} from '@sapphire/framework';

@ApplyOptions<ListenerOptions>({ once: true })
export class UserListener extends Listener<typeof Events.ClientReady> {
    constructor(context: PieceContext) {
        super(context);
    }

    run() {
        const { clientService } = this.container;
        clientService.consoleLogger.info('Client ready', 'EventListener');
    }
}
