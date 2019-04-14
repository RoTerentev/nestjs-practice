import { IsNumberString, IsNotEmpty, IsString } from 'class-validator';

export class OffersCreateDto {
  readonly dateStart?: string;

  @IsNotEmpty()
  readonly dateEnd: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly latitude: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly longitude: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly guideId: string;
}

export class OffersUpdateDto {
  readonly dateStart?: string;

  @IsNotEmpty()
  readonly dateEnd?: string;

  @IsNotEmpty()
  @IsString()
  readonly description?: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly latitude?: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly longitude?: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly guideId?: string;
}