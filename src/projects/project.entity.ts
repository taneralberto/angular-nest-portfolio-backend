import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column({ type: 'text', array: true, default: [] })
  skills: string[];

  @Column()
  url: string;

  @Column()
  thumbnail?: string;
}
