import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OfferEntity } from './offer.entity';
import { OffersCreateDto, OffersUpdateDto } from './../../api/offers/offers.dto';
import { plainToClass } from 'class-transformer'; 

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(OfferEntity)
    private readonly offerRepository: Repository<OfferEntity>,
  ) {}

  list(): Promise<OfferEntity[]> {
    return this.offerRepository.find();
  }

  async find(id: number, guideId?: number): Promise<OfferEntity> {
    let offer;
    if(guideId) offer = await this.offerRepository.findOne({ id, guideId });
    else offer = await this.offerRepository.findOne(id);
    if (!offer) throw new NotFoundException('Unknown offer!');
    return offer;
  }

  create(offersCreateDto: OffersCreateDto) {
    const offerEntityData = plainToClass(OfferEntity, offersCreateDto);
  // TODO: add the guide checking
    const offer = this.offerRepository.create({
      ...offerEntityData,
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
    });

    return this.offerRepository.save(offer);
  }

  async update(id: number, offersUpdateDto: OffersUpdateDto, guideId: number ) {
    const offer = await this.find(id, guideId);
    const offerEntityData = plainToClass(OfferEntity, offersUpdateDto);

    return this.offerRepository.update(offer.id, {
      ...offerEntityData,
      dateUpdated: new Date().toISOString(),
    });
  }

  async delete(id: number, guideId: number) {
    const offer = await this.find(id, guideId);
    const delRes = await this.offerRepository.delete(id);
    if (delRes.affected === 1) return offer;
    return null;
  }
}
