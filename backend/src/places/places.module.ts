import { Module } from '@nestjs/common'
import { PlacesService } from './places.service'
import { PlacesController } from './places.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PlacesEntity } from './places.entity'
import { CitiesEntity } from '../cities/cities.entity'
import { ImagesEntity } from '../images/images.entity'

@Module({
  providers: [PlacesService],
  controllers: [PlacesController],
  imports: [
    TypeOrmModule.forFeature([PlacesEntity, CitiesEntity, ImagesEntity])
  ],
  exports: [PlacesService]
})
export class PlacesModule {}
