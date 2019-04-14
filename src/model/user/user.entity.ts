import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserTypeEnum {
  HUNTER = 'hunter',
  GUIDE = 'guide',
  ADMIN = 'admin'
}


@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type:'enum', enum: UserTypeEnum })
  type: string;

  // TODO: add index for DB
  @Column('varchar')
  phone: string;
  
  @Column('varchar')
  email: string;

  @Column()
  dateCreated: Date;

  @Column()
  dateUpdated: Date;
}