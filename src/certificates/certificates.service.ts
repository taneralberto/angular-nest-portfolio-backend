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

  create(certificate: CreateCertificateDto): Promise<Certificate> {
    //TODO Buscar una manera de que si manda un array en el Body que lo redirija al método createFromArray()
    //if (Array.isArray(certificate)) this.createFromArray(certificate);

    const newCertificate: CreateCertificateDto =
      this.certificateRepository.create({
        name: certificate.name,
        company: certificate.company,
        certificate_url: certificate.certificate_url,
        skills: certificate.skills,
      });

    return this.certificateRepository.save(newCertificate);
  }

  createFromArray(
    certificates: CreateCertificateDto[],
  ): CreateCertificateDto[] {
    try {
      //if (Array.isArray(certificates)) {
      certificates.map((item) => {
        const certificate: CreateCertificateDto =
          this.certificateRepository.create({
            name: item.name,
            company: item.company,
            certificate_url: item.certificate_url,
            skills: item.skills,
          });

        this.certificateRepository.save(certificate);
      });
      //TODO ver cómo mandar una instancia del nuevo Certificate en la base de datos
      return certificates;
      /*} else {
        //TODO Buscar una manera de que si manda un único objeto en el Body redirija al método Create()
        this.create(certificates);
      }*/
    } catch (error) {
      throw new Error(
        "Ops! Something's wrong in create Certificate from array",
      );
    }
  }

  async update(
    id: number,
    certificate: UpdateCertificateDto,
  ): Promise<UpdateResult> {
    const certificateExist: boolean = await this.certificateRepository.exist({
      where: {
        id,
      },
    });

    if (!certificateExist) throw new NotFoundException('Certificate Not Found');

    let updatedCertificate: UpdateResult;

    try {
      updatedCertificate = await this.certificateRepository.update(
        id,
        certificate,
      );
    } catch (error) {
      throw new Error('Error type: ' + error);
    }

    //NOTE estudiar este código y para qué sirve
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
