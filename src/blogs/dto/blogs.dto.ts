import {
  IsArray,
  IsDateString,
  IsString,
  IsUUID,
  IsUrl,
} from 'class-validator';

export class BlogsDto {
  @IsUUID()
  id: string;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsUrl()
  thumbnail?: string;

  @IsArray()
  tags?: string[];

  @IsDateString()
  createdAt?: Date;

  @IsDateString()
  modifiedAt?: Date;

  @IsString()
  slug: string;
}
