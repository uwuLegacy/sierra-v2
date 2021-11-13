import { Module } from '@nestjs/common';
import { StructuresService } from './structures.service';

@Module({
  providers: [StructuresService],
  exports: [StructuresService],
})
export class StructuresModule {}
