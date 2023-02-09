import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { createUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/register')
  register(@Body() userDto: createUserDto) {
    return this.userService.registration(userDto)
  }

  @Post('/login')
  login(@Body() userDto: createUserDto) {
    return this.userService.login(userDto)
  }
  @Get()
  getAll() {
    return this.userService.getAllUsers()
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.userService.getOne(id)
  }
  @Post('/create')
  create(@Body() userDto: createUserDto) {
    return this.userService.createUser(userDto)
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id)
  }
}
