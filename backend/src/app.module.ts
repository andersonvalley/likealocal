import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { LocationModule } from './location/location.module';
import { ProductsModule } from './products/products.module';
import { RestorantsController } from './restorants/restorants.controller';
import { RestorantsService } from './restorants/restorants.service';
import { CitiesController } from './cities/cities.controller';
import { CitiesService } from './cities/cities.service';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'qwerty',
      entities: [join(__dirname + '/../**/*.entity{.ts,.js}')],
      migrations: [join(__dirname + '/../**/*.migration{.ts,.js}')],
      synchronize: true,
    }),
    ProductsModule,
    LocationModule,
    CitiesModule,
  ],
  controllers: [AppController, RestorantsController, CitiesController],
  providers: [RestorantsService, CitiesService],
})
export class AppModule {}
