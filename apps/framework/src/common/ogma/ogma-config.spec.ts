import { Test, TestingModule } from '@nestjs/testing';
import { OgmaModuleConfig } from './ogma-config.service';

describe('OgmaModuleConfig', () => {
    let service: OgmaModuleConfig;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OgmaModuleConfig],
        }).compile();

        service = module.get<OgmaModuleConfig>(OgmaModuleConfig);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
