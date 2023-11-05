import { Injectable } from '@nestjs/common';
import { BlogsDto } from './dto';
import { blogs } from './data';

@Injectable()
export class BlogsService {
  private readonly blogs: BlogsDto[] = blogs;

  getAll() {
    return this.blogs;
  }

  getById(id) {
    return this.blogs.find((blog) => id === blog.id);
  }

  getBySlug(slug) {
    return this.blogs.find((blog) => slug === blog.slug);
  }
}
