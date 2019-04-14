import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HuntService } from './model/hunt/hunt.service';
import { UserService } from './model/user/user.service';
import { OfferModule } from './model/offer/offer.module';
import { FowlModule } from './model/fowl/fowl.module';
import { BookingModule } from './model/booking/booking.module';

@Module({
  imports: [
    // TODO: move to config file
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    OfferModule,
    FowlModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService, HuntService, UserService],
})
export class AppModule {}
