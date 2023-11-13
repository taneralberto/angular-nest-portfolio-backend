import { IsArray, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  skills: string[];

  @IsUrl()
  url: string;

  @IsUrl()
  @IsOptional()
  thumbnail?: string;
}
