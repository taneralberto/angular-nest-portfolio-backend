import { IsArray, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateCertificateDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsUrl()
  @IsOptional()
  certificate_url?: string;

  @IsArray()
  @IsOptional()
  skills?: string[];
}
