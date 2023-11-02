import { IsArray, IsString, IsUUID, IsUrl } from 'class-validator';

export class CertificatesDto {
    @IsUUID()
    id: string;

    @IsString()
    name: string;

    @IsString()
    company: string;

    @IsUrl()
    certificate_url: string;

    @IsArray()
    skills: string[]
}
