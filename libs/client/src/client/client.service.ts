import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SapphireClient } from '@sapphire/framework';

@Injectable()
export class ClientService extends SapphireClient {
    public constructor(private readonly configService: ConfigService) {
        super(configService.get('client.options'));
    }
}
