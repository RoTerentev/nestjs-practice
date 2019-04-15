import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor( 
    private readonly authService: AuthService
  ){}

  @Post('signIn')
  signIn(@Body('phone') phone: string){
    return this.authService.signIn(phone);
  }
}
