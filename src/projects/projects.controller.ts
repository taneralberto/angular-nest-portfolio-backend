import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getAll() {
    return this.projectsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.projectsService.getById(id);
  }

  @Post()
  create(@Body() project: CreateProjectDto) {
    return this.projectsService.create(project);
  }

  @Post('array')
  createFromArray(@Body() projects: CreateProjectDto[]) {
    return this.projectsService.createFromArray(projects);
  }

  @Patch(':id')
  update(@Param('id') id: number, project: UpdateProjectDto) {
    return this.projectsService.update(id, project);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectsService.remove(id);
  }
}
