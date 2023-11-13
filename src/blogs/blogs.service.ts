import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Blog } from './blog.entity';
import { CreateBlogDto, UpdateBlogDto } from './dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
  ) {}

  getAll(): Promise<Blog[]> {
    const blogs = this.blogRepository.find();

    if(!blogs) throw new NotFoundException('Blogs Not Found');

    return blogs;
  }

  async getById(id: number): Promise<Blog> {
    return await this.blogRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(blog: CreateBlogDto): Promise<Blog> {
    const newBlog = this.blogRepository.create(blog);

    return await this.blogRepository.save(newBlog);
  }

  async createFromArray(blogs: CreateBlogDto[]): Promise<CreateBlogDto[]> {
    try {
      blogs.map(async (blog) => {
        const newBlog = this.blogRepository.create(blog);
        await this.blogRepository.save(newBlog);
      });
      return blogs;
    } catch (error) {
      throw new Error(
        "Ops! Something's wrong in create Certificate from array",
      );
    }
  }

  async update(id, blog: UpdateBlogDto): Promise<UpdateResult> {
    const blogExist = await this.blogRepository.exist({
      where: {
        id,
      },
    });

    if (!blogExist) throw new NotFoundException('Blog Not Found');

    try {
      const updatedBlog = await this.blogRepository.update(id, blog);
      return updatedBlog;
    } catch (error) {
      throw new Error('Error type: ' + error);
    }
  }

  async remove(id): Promise<Blog> {
    let blog = await this.blogRepository.findOne({
      where: {
        id,
      },
    });

    if (!blog) throw new NotFoundException('Blog Not Found');

    return this.blogRepository.softRemove(blog);
  }
}
