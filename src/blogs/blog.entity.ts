import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'blogs' })
export class Blog {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  thumbnail?: string;

  @Column({ type: 'text', array: true, default: [] })
  tags?: string[];

  @Column()
  @CreateDateColumn()
  createdAt?: Date;

  @Column()
  @UpdateDateColumn()
  modifiedAt?: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt?: Date;

  @Column()
  slug: string;
}
