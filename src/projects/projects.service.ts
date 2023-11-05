import { Injectable } from '@nestjs/common';
import { ProjectsDto } from './dto';
import { projects } from './data';

@Injectable()
export class ProjectsService {
  private readonly projects: ProjectsDto[] = projects;

  getAll() {
    return this.projects;
  }

  getById(id: string) {
    return this.projects.find((item) => id === item.id);
  }
}
