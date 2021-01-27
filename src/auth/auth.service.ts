import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { UserResponseDto } from './dto/userResponseDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRespository: UserRepository,
  ) {}

  async signUp(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<UserResponseDto> {
    return this.userRespository.singUp(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto) {
    const username = await this.userRespository.validateUserPassword(
      authCredentialsDto,
    );
    if (!username) {
      throw new UnauthorizedException('Invalid user');
    }
  }
}
