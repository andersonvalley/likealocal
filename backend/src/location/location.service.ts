import { Injectable } from '@nestjs/common'

@Injectable()
export class LocationService {
  async getLocation(ip) {
    const url = `https://www.travelpayouts.com/whereami?locale=ru&ip=${ip}`

    const response = await fetch(url)
    const data = await response.json()
    return data
  }
}
