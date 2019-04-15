import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HuntService } from './model/hunt/hunt.service';
import { OfferModule } from './model/offer/offer.module';
import { BookingModule } from './model/booking/booking.module';
import { AuthModule } from './services/auth/auth.module';
import { UserModule } from './model/user/user.module';
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
    AuthModule,
    OfferModule,
    BookingModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, HuntService],
})
export class AppModule {}
