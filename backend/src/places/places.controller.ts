import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common'
import { PlacesService } from './places.service'
import { CreatePlaceDto } from './dto/create-place.dto'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  createPlace(@Body() dto: CreatePlaceDto, @Body('city') city) {
    return this.placesService.createPlace(dto, city)
  }

  @Get()
  getAll() {
    return this.placesService.getAllPlaces()
  }
}
