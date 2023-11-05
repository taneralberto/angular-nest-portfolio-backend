import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { Certificate } from './certificate.entity';
import { CreateCertificateDto, UpdateCertificateDto } from './dto';
import { UpdateResult } from 'typeorm';

@Controller('certificates')
export class CertificatesController {
  constructor(private certificatesService: CertificatesService) {}

  @Get()
  getAll(): Promise<Certificate[]> {
    return this.certificatesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Certificate> {
    return this.certificatesService.getById(id);
  }

  @Post()
  create(@Body() certificate: CreateCertificateDto | CreateCertificateDto[]) {
    return this.certificatesService.create(certificate);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() certificate: UpdateCertificateDto): Promise<UpdateResult> {
    return this.certificatesService.update(id, certificate);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Certificate> {
    return this.certificatesService.remove(id);
  }
}
