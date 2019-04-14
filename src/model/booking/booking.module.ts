import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from './booking.service';
import { BookingEntity } from './booking.entity';
import { BookingsController } from './../../api/bookings/bookings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookingEntity])],
  providers: [BookingService],
  controllers: [BookingsController],
})
export class BookingModule {}
