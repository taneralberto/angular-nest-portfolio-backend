import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'certificates' })
export class Certificate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  company: string;

  @Column()
  certificate_url: string;

  @Column({ type: 'text', array: true, default: [] })
  skills: string[];
}
