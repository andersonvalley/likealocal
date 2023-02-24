import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PlacesEntity } from '../places/places.entity'
import { Repository } from 'typeorm'
import { ImagesEntity } from './images.entity'
import saveImage from './saveImage'

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(PlacesEntity)
    private readonly placesRepository: Repository<PlacesEntity>,
    @InjectRepository(ImagesEntity)
    private readonly imagesRepository: Repository<ImagesEntity>
  ) {}

  async addImageToPlace(photo, placeName) {
    const { fileUrl, fileWebp } = await saveImage(photo)
    const place = await this.placesRepository.findOne({
      where: { title: placeName }
    })

    if (!place) {
      throw new HttpException(
        `Ошибка, такое место еще не добавили`,
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    const image = await this.imagesRepository.create({
      url: fileUrl,
      urlWebp: fileWebp
    })
    image.place = place
    await this.imagesRepository.save(image)

    return `Изображение добавлено в ${placeName}`
  }
}
