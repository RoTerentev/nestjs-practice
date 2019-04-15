
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from '../../model/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(phoneNum: string): Promise<string|null> {
    const user = await this.usersService.findOneByPhone(phoneNum);
    if(!user) return null;
    const { id, phone, type } = user;
    const payload: JwtPayload = { id, phone, type };
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findOneByPhone(payload.phone);
  }
}