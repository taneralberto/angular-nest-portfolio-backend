import { IsArray, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateCertificateDto {

  @IsString()
  name: string;

  @IsString()
  company: string;

  @IsUrl()
  certificate_url: string;

  @IsArray()
  @IsOptional()
  skills?: string[];
}
