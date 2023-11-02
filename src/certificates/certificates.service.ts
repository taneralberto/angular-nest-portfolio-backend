import { Injectable } from '@nestjs/common';
import { certificates } from './data';
import { CertificatesDto } from './dto';

@Injectable()
export class CertificatesService {

    private certificates: CertificatesDto[] = certificates;

    getAll() {
        return this.certificates;
    }

    getById(id: string) {
        return this.certificates.find(item => id === item.id );
    }
}
