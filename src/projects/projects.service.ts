import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto, UpdateProjectDto } from './dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async getAll(): Promise<Project[]> {
    const projects: Project[] = await this.projectRepository.find();

    if (!projects) throw new NotFoundException('Project Not Found');

    return projects;
  }

  async getById(id: number): Promise<Project> {
    const project: Project = await this.projectRepository.findOne({
      where: {
        id,
      },
    });

    if (!project) throw new NotFoundException('Project Not Found');

    return project;
  }

  create(project: CreateProjectDto): Promise<Project> {
    const newProject: CreateProjectDto =
      this.projectRepository.create(project);

    return this.projectRepository.save(newProject);
  }

  createFromArray(projects: CreateProjectDto[]): CreateProjectDto[] {
    try {
      projects.map((project) => {
        const newProject = this.projectRepository.create(project);
        this.projectRepository.save(newProject);
      });
      return projects;
    } catch (error) {
      throw new Error(
        "Ops! Something's wrong in create Certificate from array",
      );
    }
  }

  async update(id: number, project: UpdateProjectDto): Promise<UpdateResult> {
    const projectExist: boolean = await this.projectRepository.exist({
      where: {
        id
      }
    });

    if(!projectExist) throw new NotFoundException('Project Not Found');

    let updatedProject: UpdateResult;

    try {
      updatedProject = await this.projectRepository.update(id, project);
    } catch (error) {
      throw new Error('Error type: ' + error);
    }

    return updatedProject;
  }

  async remove(id: number): Promise<Project> {
    const project: Project = await this.projectRepository.findOne({
      where: {
        id
      }
    });

    if(!project) throw new NotFoundException('Project Not Found');

    return this.projectRepository.remove(project);
  }
}
