import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { AppController } from './app.controller'
import { LocationModule } from './location/location.module'
import { AppService } from './app.service'
import { UsersModule } from './auth/users.module'
import { CityModule } from './cities/cities.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: 'postgres',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [join(__dirname, '**', '/../**/*.entity{.ts,.js}')],
      migrations: [join(__dirname, '**', '/../**/*.migration{.ts,.js}')],
      synchronize: true
    }),
    LocationModule,
    UsersModule,
    CityModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
