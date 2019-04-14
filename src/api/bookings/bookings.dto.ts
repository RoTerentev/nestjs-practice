import { IsNumberString, IsNotEmpty, IsBooleanString } from 'class-validator';

export class BookingsCreateDto {
  @IsNotEmpty()
  @IsNumberString()
  readonly offerId: string;

  @IsNumberString()
  @IsNotEmpty()
  readonly hunterId: string;

  @IsBooleanString()
  readonly confirmed?: string;
}