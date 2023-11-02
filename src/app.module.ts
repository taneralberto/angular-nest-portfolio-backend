import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertificatesController, CertificatesService } from './certificates';
import { ProjectsController, ProjectsService } from './projects';
import { BlogsController, BlogsService } from './blogs';

@Module({
  imports: [],
  controllers: [AppController, CertificatesController, ProjectsController, BlogsController],
  providers: [AppService, CertificatesService, ProjectsService, BlogsService],
})
export class AppModule {}
