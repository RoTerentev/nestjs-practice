import { Controller, Param, Body, Get, Post, Put, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { OfferService } from '../../model/offer/offer.service';
import { OfferEntity } from '../../model/offer/offer.entity';
import { OffersCreateDto, OffersUpdateDto } from './offers.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('offers')
@UseGuards(AuthGuard('jwt'))
export class OffersController {
  constructor(
    private readonly offerService: OfferService,
  ) {}

  @Post()
  create(@Body() offersCreateDto: OffersCreateDto) {
    return this.offerService.create(offersCreateDto);
  }
  
  @Get()
  readAll(): Promise<OfferEntity[]> {
    return this.offerService.list();
  }
  
  @Get(':id')
  async read(@Param('id') id: string): Promise<OfferEntity> {
    const offer = await this.offerService.find(+id);
    if (!offer) throw new NotFoundException('Unknown offer!');
    return offer;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() offersUpdateDto: OffersUpdateDto) {
    return this.offerService.update(+id, offersUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<OfferEntity|null> {
    return this.offerService.delete(+id);
  }
}
