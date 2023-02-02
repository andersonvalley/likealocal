import { Injectable } from '@nestjs/common';

@Injectable()
export class RestorantsService {
  private restorants = [];

  getByCity(city) {
    this.restorants.filter((item) => item.city === city);
  }
}
