import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CitiesController } from './cities.controller'
import { CitiesService } from './cities.service'
import { CitiesEntity } from './cities.entity'
import { PlacesEntity } from '../places/places.entity'

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [TypeOrmModule.forFeature([CitiesEntity, PlacesEntity])],
  exports: [CitiesService]
})
export class CityModule {}
