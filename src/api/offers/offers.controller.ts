import { Controller, Param, Body, Get, Post, Put, Delete, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { OfferService } from '../../model/offer/offer.service';
import { OfferEntity } from '../../model/offer/offer.entity';
import { OffersCreateDto, OffersUpdateDto } from './offers.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserTypeEnum } from 'src/model/user/user.entity';

@Controller('offers')
@UseGuards(AuthGuard('jwt'))
export class OffersController {
  constructor(
    private readonly offerService: OfferService,
  ) {}

  @Post()
  create(@Req() req: Request, @Body() offersCreateDto: OffersCreateDto) {
    if(req.user.type === UserTypeEnum.HUNTER) throw new UnauthorizedException();
    if(req.user.type === UserTypeEnum.GUIDE) return this.offerService.create(Object.assign({}, offersCreateDto, { guideId: req.user.id } ));
    return this.offerService.create(offersCreateDto);
  }
  
  @Get()
  readAll(): Promise<OfferEntity[]> {
    return this.offerService.list();
  }
  
  @Get(':id')
  read(@Param('id') id: string): Promise<OfferEntity> {
    return this.offerService.find(+id);
  }

  @Put(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() offersUpdateDto: OffersUpdateDto) {
    return this.offerService.update(+id, offersUpdateDto, req.user.id);
  }

  @Delete(':id')
  delete(@Req() req: Request, @Param('id') id: string): Promise<OfferEntity|null> {
    return this.offerService.delete(+id,req.user.id);
  }
}
