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
    const found = await this.citiesRepository.findOne({
      where: { title: dto.title }
    })

    if (found) {
      throw new HttpException(`Такой горож уже есть`, HttpStatus.NOT_ACCEPTABLE)
    }

    const city = await this.citiesRepository.create(dto)
    await this.citiesRepository.save(city)

    return city
  }

  async getCities() {
    const cities = await this.citiesRepository.find()
    return { all: cities.length, cities }
  }

  async getOne(id) {
    const city = await this.citiesRepository.findOne({
      where: { id },
      relations: { places: true }
    })

    if (!city) {
      throw new HttpException(
        `Ошибка, такой город еще не добавили...`,
        HttpStatus.NOT_ACCEPTABLE
      )
    }
    return city
  }

  async removeCity(id) {
    const city = await this.citiesRepository.findOne({ where: { id } })

    if (!city) {
      throw new HttpException(`Город не найден`, HttpStatus.NOT_ACCEPTABLE)
    }

    await this.citiesRepository.delete(city)
    return 'Город удален'
  }

  async uploadImage(photo, cityId) {
    // const filename = photo.originalname
    // const filePath = join(__dirname, '..', '..', 'uploads', 'photos', filename)
    //
    // const city = await this.citiesRepository.findOne({ where: { id: cityId } })
    //
    // if (!city) {
    //   throw new HttpException(
    //     `Ошибка, такой город еще не добавили...`,
    //     HttpStatus.NOT_ACCEPTABLE
    //   )
    // }
    //
    // const extFileName = filename.split('.').reverse()[0]
    // const newFileName = `${uuidv4()}.${extFileName}`
    //
    // await writeFile(filePath, photo.buffer)
    // await rename(
    //   filePath,
    //   join(__dirname, '..', '..', 'uploads', 'photos', newFileName),
    //   () => {}
    // )
    //
    // await this.citiesRepository.save({
    //   ...city,
    //   images: `photos/${newFileName}`
    // })
    //
    // console.log(city)
    //
    // return {
    //   url: `photos/${newFileName}`
    // }
  }
}
