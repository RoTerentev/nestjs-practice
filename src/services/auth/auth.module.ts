import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../../model/user/user.module';
import { JwtStrategy, JWT_KEY } from './strategies/jwt.strategy';
import { AuthController } from '../../api/auth/auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: JWT_KEY,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}