import { PrismaClient } from '@prisma/client';
import {
    INestApplicationContext,
    Injectable,
    OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplicationContext) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
}
