import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'blogs'})
export class Blog {

  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  thumbnail?: string;

  @Column({type: 'text', array: true, default: []})
  tags?: string[];

  @Column()
  createdAt?: Date;

  @Column()
  modifiedAt?: Date;

  @Column()
  slug: string;
}