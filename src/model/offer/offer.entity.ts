import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OfferEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: () => 'CURRENT_TIMESTAMP'})
  dateStart: Date;

  @Column()
  dateEnd: Date;

  @Column('text')
  description: string;

  @Column('float8')
  latitude: number;
  
  @Column('float8')
  longitude: number;

  // TODO: lookup many-to-one etc.
  @Column()
  guideId: number;

  @Column()
  dateCreated: Date;

  @Column()
  dateUpdated: Date;
}