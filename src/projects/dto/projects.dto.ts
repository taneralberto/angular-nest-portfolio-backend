import { IsArray, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator';

export class ProjectsDto {
  @IsUUID()
  id: string;

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
