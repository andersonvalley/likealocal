import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreatePlaceDto } from './dto/create-place.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { PlacesEntity } from './places.entity'
import { Repository } from 'typeorm'
import { CitiesEntity } from '../cities/cities.entity'

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(PlacesEntity)
    private readonly placesRepository: Repository<PlacesEntity>,
    @InjectRepository(CitiesEntity)
    private readonly citiesRepository: Repository<CitiesEntity>
  ) {}
  async createPlace(dto: CreatePlaceDto, cityName) {
    const found = await this.placesRepository.findOne({
      where: { title: dto.title }
    })

    if (found) {
      throw new HttpException(`Такоe место уже есть`, HttpStatus.NOT_ACCEPTABLE)
    }

    const city = await this.citiesRepository.findOne({
      where: { title: cityName }
    })

    if (!city) {
      throw new HttpException(`город не найден`, HttpStatus.NOT_ACCEPTABLE)
    }

    const place = await this.placesRepository.create(dto)
    place.city = city
    await this.placesRepository.save(place)

    return place
  }

  async getAllPlaces() {
    const places = await this.placesRepository.find({
      relations: { images: true }
    })
    return { all: places.length, places }
  }
}
