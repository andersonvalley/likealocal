import { Body, Controller, Get, Post } from '@nestjs/common'

@Controller('cities')
export class CitiesController {
  @Get()
  getAll(): string {
    return ''
  }

  @Get()
  getOne(): string {
    return 'string'
  }

  @Post()
  createCity(@Body body): string {
    return 'created'
  }
}
