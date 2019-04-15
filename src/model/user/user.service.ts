import { Injectable, BadRequestException } from '@nestjs/common';
import { UserEntity, UserTypeEnum } from './user.entity';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  // TODO: remove stub
  private readonly users = [
    this.entMngr.create(UserEntity, {
      id: 5,
      type: UserTypeEnum.ADMIN,
      phone: "79993332200"
    }),
    this.entMngr.create(UserEntity, {
      id: 1,
      type: UserTypeEnum.GUIDE,
      phone: "79993332210"
    }),
    this.entMngr.create(UserEntity, {
      id: 2,
      type: UserTypeEnum.GUIDE,
      phone: "79993332211"
    }),
    this.entMngr.create(UserEntity, {
      id: 3,
      type: UserTypeEnum.HUNTER,
      phone: "79993332220"
    }),
    this.entMngr.create(UserEntity, {
      id: 5,
      type: UserTypeEnum.HUNTER,
      phone: "79993332221"
    })
  ]

  constructor(
    @InjectEntityManager()
    private readonly entMngr: EntityManager
  ){}

  findOneByPhone(phone: string): Promise<UserEntity> {
    // TODO: mwke real logic
    const user = this.users.find(u => u.phone === phone);
    if(!user) throw new BadRequestException();
    return Promise.resolve(user);
  }
}
