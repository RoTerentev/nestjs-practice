import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HuntEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: lookup one-to-many etc.
  @Column()
  offerId: number;
  
  @Column()
  fowlId: number;

  @Column('money')
  dayPrice: string;

  @Column('money')
  licensePrice: string;
}