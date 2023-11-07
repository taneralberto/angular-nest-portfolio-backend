import { IsArray, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  skills?: string[];

  @IsUrl()
  @IsOptional()
  url?: string;

  @IsUrl()
  @IsOptional()
  thumbnail?: string;
}