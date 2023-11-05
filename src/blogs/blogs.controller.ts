import { Controller, Get, Param } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  getAll() {
    return this.blogsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.blogsService.getById(id);
  }

  /*@Get(':slug')
    getBySlug(@Param('slug') slug: string) {
        return this.blogsService.getBySlug(slug);
    }*/
}
