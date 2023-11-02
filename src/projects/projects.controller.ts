import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {

    constructor(private projectsService: ProjectsService) {}

    @Get()
    getAll() {
        return this.projectsService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.projectsService.getById(id);
    }
}
