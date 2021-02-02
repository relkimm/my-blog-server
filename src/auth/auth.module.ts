import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LocalStrategy } from './local.strategy';

@Module({ 
  imports: [PassportModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, LocalAuthGuard]
})
export class AuthModule {}
