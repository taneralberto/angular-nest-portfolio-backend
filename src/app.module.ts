import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Blog, BlogsModule } from './blogs';
import { Certificate, CertificatesModule } from './certificates';
import { Project, ProjectsModule } from './projects';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'pass',
      database: 'portfoliodb',
      entities: [Certificate, Project, Blog],
      autoLoadEntities: true,
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CertificatesModule,
    ProjectsModule,
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
