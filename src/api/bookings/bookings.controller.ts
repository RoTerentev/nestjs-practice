import { Controller, Param, Body, Get, Post, Delete, NotFoundException, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { BookingService } from '../../model/booking/booking.service';
import { BookingEntity } from '../../model/booking/booking.entity';
import { BookingsCreateDto } from './bookings.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserTypeEnum } from 'src/model/user/user.entity';
import { Request } from 'express';

@Controller('bookings')
@UseGuards(AuthGuard('jwt'))
export class BookingsController {
  constructor(
    private readonly bookingService: BookingService
  ){}

  @Post()
  create(@Req() req: Request, @Body() bookingsCreateDto: BookingsCreateDto) {
    if(req.user.type === UserTypeEnum.GUIDE) throw new UnauthorizedException();
    if(req.user.type === UserTypeEnum.HUNTER) return this.bookingService.create(Object.assign({}, bookingsCreateDto, { hunterId: req.user.id } ));
    return this.bookingService.create(bookingsCreateDto);
  }

  @Get(':id')
  read(@Req() req: Request, @Param('id') id: string): Promise<BookingEntity> {
    return this.bookingService.find(+id, req.user.id);
  }

  @Delete(':id')
  delete(@Req() req: Request, @Param('id') id: string) {
    return this.bookingService.delete(+id, req.user.id);
  }

}
