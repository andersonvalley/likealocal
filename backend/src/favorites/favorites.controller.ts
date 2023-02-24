import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { FavoritesService } from './favorites.service'
import { CreateFavoritesDto } from './dto/create-favorites.dto'

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  createFavorites(@Body() favorites: CreateFavoritesDto, userId: string) {
    return this.favoritesService.createFavorite(favorites, userId)
  }

  @Get()
  getFavorites() {
    return this.favoritesService.getFavorites()
  }

  @Get(':id')
  removeFavorite(@Param('id') id) {
    return this.favoritesService.deleteFavorite(id)
  }
}
