import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCityDto } from './dto/create-city.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CitiesEntity } from './cities.entity'

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CitiesEntity)
    private readonly citiesRepository: Repository<CitiesEntity>
  ) {}

  async createCity(dto: CreateCityDto) {
    const city = await this.citiesRepository.create(dto)
    return this.citiesRepository.save(city)
  }

  async getCities() {
    const cities = await this.citiesRepository.find()
    return { all: cities.length, cities }
  }

  async getOne(id) {
    const city = await this.citiesRepository.findOne({ where: { id } })
    if (!city) {
      throw new HttpException(
        `Ошибка, такой город еще не добавили...`,
        HttpStatus.NOT_ACCEPTABLE
      )
    }
    return city
  }
}
