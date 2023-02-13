import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthEntity } from './auth.entity'
import { AuthController } from './auth.controller'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [TypeOrmModule.forFeature([AuthEntity])]
})
export class AuthModule {}
