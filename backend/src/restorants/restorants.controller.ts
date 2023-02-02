import { Controller, Get } from '@nestjs/common'
import { RestorantsService } from './restorants.service'

@Controller('restorants')
export class RestorantsController {
  constructor(private readonly restorantsService: RestorantsService) {}

  @Get()
  getByCity(city: string) {
    return this.restorantsService.getByCity(city)
  }
}
