import { Module } from '@nestjs/common';
import { ClientModule, ClientService } from '@sierra/client';

@Module({
    imports: [ClientModule],
    providers: [ClientService],
})
export class FrameworkModule {}
