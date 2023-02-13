import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CitiesService } from './cities.service'
import { CreateCityDto } from './dto/create-city.dto'

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  findAll() {
    return this.citiesService.getCities()
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.citiesService.getOne(id)
  }

  @Post()
  createCity(@Body() cityDto: CreateCityDto) {
    return this.citiesService.createCity(cityDto)
  }
}
