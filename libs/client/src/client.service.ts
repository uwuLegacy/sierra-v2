import { Injectable } from '@nestjs/common';
import { SapphireClient } from '@sapphire/framework';

@Injectable()
export class ClientService extends SapphireClient<true> {}
