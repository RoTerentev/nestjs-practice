import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferService } from './offer.service';
import { OfferEntity } from './offer.entity';
import { OffersController } from './../../api/offers/offers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OfferEntity])],
  providers: [OfferService],
  controllers: [OffersController],
})
export class OfferModule {}