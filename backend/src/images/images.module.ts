import { Module } from '@nestjs/common'
import { ImagesController } from './images.controller'
import { ImagesService } from './images.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PlacesEntity } from '../places/places.entity'
import { ImagesEntity } from './images.entity'

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [TypeOrmModule.forFeature([ImagesEntity, PlacesEntity])]
})
export class ImagesModule {}
