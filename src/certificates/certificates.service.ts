import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCertificateDto, UpdateCertificateDto } from './dto';
import { Certificate } from './certificate.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}

  async getAll(): Promise<Certificate[]> {
    const certificates: Certificate[] = await this.certificateRepository.find();

    if (!certificates) throw new NotFoundException('Certificates Not Found');

    return certificates;
  }

  async getById(id: number): Promise<Certificate> {
    const certificate: Certificate = await this.certificateRepository.findOne({
      where: {
        id,
      },
    });

    if (!certificate) throw new NotFoundException('Certificate Not Found');

    return certificate;
  }

  async create( certificate: CreateCertificateDto | CreateCertificateDto[] ): Promise<void> {
    let newCertificate: CreateCertificateDto = {
      name: '',
      company: '',
      certificate_url: '',
      skills: [],
    };

    if (Array.isArray(certificate)) {
      certificate.map((item) => {
        newCertificate = this.certificateRepository.create({
          name: item.name,
          company: item.company,
          certificate_url: item.certificate_url,
          skills: item.skills,
        });

        this.certificateRepository.save(newCertificate);
      });

    } else {
      newCertificate = this.certificateRepository.create({
        name: certificate.name,
        company: certificate.company,
        certificate_url: certificate.certificate_url,
        skills: certificate.skills,
      });

      this.certificateRepository.save(newCertificate);
    }

  }

  async update(
    id: number,
    certificate: UpdateCertificateDto,
  ): Promise<UpdateResult> {
    const existCertificate: boolean = await this.certificateRepository.exist({
      where: {
        id,
      },
    });

    if (!existCertificate) throw new NotFoundException('Certificate Not Found');

    let updatedCertificate: UpdateResult;

    try {
      updatedCertificate = await this.certificateRepository.update(
        id,
        certificate,
      );
    } catch (error) {
      throw new NotFoundException('Error type: ' + error);
    }

    //const updatedCertificate: UpdateResult = await this.certificateRepository.createQueryBuilder().update(Certificate, certificate).whereEntity(targetCertificate).returning(['id', 'name', 'company', 'certificate_url', 'skills']).updateEntity(true).execute();

    return updatedCertificate;
  }

  async remove(id: number): Promise<Certificate> {
    let certificate: Certificate = await this.certificateRepository.findOne({
      where: {
        id,
      },
    });

    if (!certificate) throw new NotFoundException('Certificate Not Found');

    certificate = await this.certificateRepository.remove(certificate);

    return certificate;
  }
}
