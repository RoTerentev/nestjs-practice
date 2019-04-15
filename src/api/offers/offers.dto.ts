import { IsNumberString, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class OffersCreateDto {
  @IsOptional()
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
  @IsOptional()
  readonly dateStart?: string;

  @IsOptional()
  readonly dateEnd?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsNumberString()
  readonly latitude?: string;

  @IsOptional()
  @IsNumberString()
  readonly longitude?: string;

  @IsOptional()
  @IsNumberString()
  readonly guideId?: string;
}