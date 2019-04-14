import { Injectable } from '@nestjs/common';
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

  find(id: number): Promise<OfferEntity> {
    return this.offerRepository.findOne(id);
  }

  create(offersCreateDto: OffersCreateDto) {

    let offerEntity = plainToClass(OfferEntity, offersCreateDto);
    offerEntity = this.offerRepository.create({
      ...offerEntity,
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
    });

    return this.offerRepository.save(offerEntity);
  }

  update(id: number, offersUpdateDto: OffersUpdateDto) {
    const offerEntity = plainToClass(OfferEntity, offersUpdateDto);
    return this.offerRepository.update(id, {
      ...offerEntity,
      dateUpdated: new Date().toISOString(),
    });
  }

  async delete(id: number) {
    const offerEntity = await this.find(id);
    const delRes = await this.offerRepository.delete(id);
    if (delRes.affected === 1) return offerEntity;
    return null;
  }
}