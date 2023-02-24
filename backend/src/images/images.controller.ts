import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { ImagesService } from './images.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}
  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  saveImage(@UploadedFile() photo, @Body('placeName') placeName) {
    return this.imagesService.addImageToPlace(photo, placeName)
  }
}
