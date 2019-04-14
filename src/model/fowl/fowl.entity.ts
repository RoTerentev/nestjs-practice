import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum FowlClassEnum {
  FUR = 'fur',
  UNGULATE = 'ungulate',
  BIRD = 'bird'
}

@Entity()
export class FowlEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column({ type: 'enum', enum: FowlClassEnum })
  class: string;

  // TODO: may be replaced by the URL
  @Column('bytea')
  image: Buffer;

  @Column()
  dateCreated: Date;

  @Column()
  dateUpdated: Date;
}