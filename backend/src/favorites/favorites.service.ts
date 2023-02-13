import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FavoritesEntity } from './favorites.entity'
import { Repository } from 'typeorm'
import { CreateFavoritesDto } from './dto/create-favorites.dto'

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoritesEntity)
    private readonly favoritesRepository: Repository<FavoritesEntity> // private readonly authRepository: Repository<AuthEntity>
  ) {}

  async createFavorite(dto: CreateFavoritesDto, userId: string) {
    // const user = await this.authRepository.findOne({ where: { id: userId } })
    const favorite = await this.favoritesRepository.create({ ...dto })

    await this.favoritesRepository.save(favorite)

    return 'Добавлено в избранное'
  }

  async getFavorites() {
    const favorites = await this.favoritesRepository.find()
    return favorites
  }

  async deleteFavorite(id) {
    const favorite = await this.favoritesRepository.findOne({ where: { id } })

    if (!favorite) {
      throw new HttpException(
        `Ошибка, не удалось удалить`,
        HttpStatus.BAD_REQUEST
      )
    }

    await this.favoritesRepository.delete(favorite)

    return 'Удалено'
  }
}
