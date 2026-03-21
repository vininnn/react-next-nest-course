import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { HashingService } from '../commom/hashing/hashing.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly hashingService: HashingService,
  ) {}

  async create(dto: CreateUserDto) {
    // Email Unique?
    const exists = await this.userRepository.exists({
      where: {
        email: dto.email,
      },
    });
    if (exists) {
      throw new ConflictException('Email already exists');
    }
    // Hash Password
    const hashedPassword = await this.hashingService.hash(dto.password)
    const newUser: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    };
    // Save on DB
    return await this.userRepository.save(newUser);
  }
}
