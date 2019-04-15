import { IsNumberString, IsNotEmpty, IsBooleanString, IsOptional } from 'class-validator';

export class BookingsCreateDto {
  @IsNotEmpty()
  @IsNumberString()
  readonly offerId: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly hunterId: string;

  @IsOptional()
  @IsBooleanString()
  readonly confirmed?: string;
}