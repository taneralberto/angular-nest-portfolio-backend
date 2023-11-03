import { Controller, Get, Param } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesDto } from './dto';

@Controller('certificates')
export class CertificatesController {

    constructor(private certicatesService: CertificatesService) {}

    @Get()
    getAll(): CertificatesDto[] {
        return this.certicatesService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string): CertificatesDto {
        return this.certicatesService.getById(id);
    }
}
