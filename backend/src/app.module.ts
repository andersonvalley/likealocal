import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { LocationModule } from './location/location.module'
import { AuthModule } from './auth/auth.module'
import { CityModule } from './cities/cities.module'
import { FavoritesModule } from './favorites/favorites.module'

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
    AuthModule,
    CityModule,
    FavoritesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
