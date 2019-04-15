import { IsNumberString, IsNotEmpty, IsBooleanString, IsOptional } from 'class-validator';

export class BookingsCreateDto {
  @IsNotEmpty()
  @IsNumberString()
  readonly huntId: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly hunterId: string;

  @IsOptional()
  @IsBooleanString()
  readonly confirmed?: string;
}