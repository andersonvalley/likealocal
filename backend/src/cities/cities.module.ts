import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CitiesController } from './cities.controller'
import { CitiesService } from './cities.service'
import { CitiesEntity } from './cities.entity'

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [TypeOrmModule.forFeature([CitiesEntity])]
})
export class CityModule {}
