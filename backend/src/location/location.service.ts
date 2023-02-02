import { Injectable } from '@nestjs/common';
import { text } from 'stream/consumers';

@Injectable()
export class LocationService {
  getLocation() {
    return this.getCity();
  }

  async getCity() {
    const url = `https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location`;

    const response = await fetch(url);
    const data = await response.text();
    const text = data.slice(9, data.length - 2);
    return JSON.parse(text);
  }
}
