import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: lookup one-to-many etc.
  @Column()
  huntId: number;
  
  @Column()
  hunterId: number;

  @Column({ type: 'bool', default: false })
  confirmed: boolean;

  @Column()
  dateCreated: Date;

  @Column()
  dateUpdated: Date;
}