import { Body, Controller, Post } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly LocationService: LocationService) {}

  @Post()
  getLocation() {
    return this.LocationService.getLocation();
  }
}
