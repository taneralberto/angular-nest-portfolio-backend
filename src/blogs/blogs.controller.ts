import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto, UpdateBlogDto } from './dto';
import { Blog } from './blog.entity';
import { UpdateResult } from 'typeorm';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  getAll(): Promise<Blog[]> {
    return this.blogsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Blog> {
    return this.blogsService.getById(id);
  }

  @Post()
  create(@Body() blog: CreateBlogDto): Promise<Blog> {
    return this.blogsService.create(blog);
  }

  @Post('array')
  createFromArray(@Body() blogs: CreateBlogDto[]): Promise<CreateBlogDto[]> {
    return this.blogsService.createFromArray(blogs);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() blog: UpdateBlogDto,
  ): Promise<UpdateResult> {
    return this.blogsService.update(id, blog);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Blog> {
    return this.blogsService.remove(id);
  }
}
