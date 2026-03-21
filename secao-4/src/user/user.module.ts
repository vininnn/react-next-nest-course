import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommomModule } from '../commom/commom.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CommomModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
