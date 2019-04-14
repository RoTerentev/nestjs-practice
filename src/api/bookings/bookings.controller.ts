import { Controller, Param, Body, Get, Post, Delete, NotFoundException } from '@nestjs/common';
import { BookingService } from '../../model/booking/booking.service';
import { BookingEntity } from '../../model/booking/booking.entity';
import { BookingsCreateDto } from './bookings.dto';

@Controller('bookings')
export class BookingsController {
  constructor(
    private readonly bookingService: BookingService
  ){}

  @Post()
  create(@Body() bookingsCreateDto: BookingsCreateDto) {
    return this.bookingService.create(bookingsCreateDto);
  }

  @Get(':id')
  async read(@Param('id') id: string): Promise<BookingEntity> {
    const booking = await this.bookingService.find(+id);
    if (!booking) throw new NotFoundException('Unknown booking!');
    return booking;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bookingService.delete(+id);
  }

}
