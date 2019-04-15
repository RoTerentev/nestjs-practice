import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from './booking.entity';
import { BookingsCreateDto } from './../../api/bookings/bookings.dto';
import { plainToClass } from 'class-transformer'; 

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingEntity)
    private readonly bookingRepository: Repository<BookingEntity>,
  ) {}

  create(bookingsCreateDto: BookingsCreateDto){
    let bookingEntity = plainToClass(BookingEntity, bookingsCreateDto);

    // TODO: add the hunt and hunter existance checking
    bookingEntity = this.bookingRepository.create({
      ...bookingEntity,
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
    });

    return this.bookingRepository.save(bookingEntity);
  }

  async find(id: number, hunterId: number) {
    const booking = await this.bookingRepository.findOne({ id, hunterId });
    if(!booking) throw new NotFoundException('Unknown booking!');
    return booking;
  }

  async delete(id: number, hunterId: number) {
    const booking = await this.find(id, hunterId);
    const delRes = await this.bookingRepository.delete(booking.id);
    if (delRes.affected === 1) return booking;
    return null;
  }
}
