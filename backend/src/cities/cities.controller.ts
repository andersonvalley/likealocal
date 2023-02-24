import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { CitiesService } from './cities.service'
import { CreateCityDto } from './dto/create-city.dto'
import { FileInterceptor } from '@nestjs/platform-express'

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

  @Post('/upload')
  @UseInterceptors(FileInterceptor('photo'))
  async uploadFile(@UploadedFile() photo, @Body('id') id) {
    return this.citiesService.uploadImage(photo, id)
  }

  @Post('/delete/:id')
  removeCity(@Param('id') id: string) {
    return this.citiesService.removeCity(id)
  }
}
