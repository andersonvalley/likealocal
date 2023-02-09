import { Controller, Get, Post } from '@nestjs/common'

@Controller('cities')
export class CitiesController {
  @Get()
  findAll() {
    return
  }

  @Get()
  findOne() {
    return
  }

  @Post()
  createCity() {
    return
  }
}
