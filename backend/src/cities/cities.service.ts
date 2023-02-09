import { Injectable } from '@nestjs/common'
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
  async createCity(dto: CreateCityDto) {}

  async getCities() {
    const cities = await this.citiesRepository.find()
    return cities
  }

  async getOne() {
    return 'cities'
  }
}
