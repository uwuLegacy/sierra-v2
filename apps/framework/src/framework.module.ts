import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientModule, ClientService } from '@sierra/client';
import config from '@sierra/config';
import { PrismaModule } from '@sierra/prisma';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config],
        }),
        PrismaModule,
        ClientModule,
    ],
    providers: [ClientService],
})
export class FrameworkModule {}
