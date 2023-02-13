import { Module } from '@nestjs/common'
import { FavoritesController } from './favorites.controller'
import { FavoritesService } from './favorites.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FavoritesEntity } from './favorites.entity'

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [TypeOrmModule.forFeature([FavoritesEntity])]
})
export class FavoritesModule {}
