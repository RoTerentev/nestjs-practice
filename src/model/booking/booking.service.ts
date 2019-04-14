import { Injectable } from '@nestjs/common';
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
    bookingEntity = this.bookingRepository.create({
      ...bookingEntity,
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
    });

    return this.bookingRepository.save(bookingEntity);
  }

  find(id: number) {
    return this.bookingRepository.findOne(id);
  }

  delete(id: number) {
    return this.bookingRepository.delete(id);
  }
}
