import { Controller, Get, Ip } from '@nestjs/common'
import { LocationService } from './location.service'

@Controller('location')
export class LocationController {
  constructor(private readonly LocationService: LocationService) {}

  @Get()
  getLocation(@Ip() ip) {
    return this.LocationService.getLocation(ip)
  }
}
