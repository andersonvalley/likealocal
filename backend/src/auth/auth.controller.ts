import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { createUserDto } from './dto/create-user.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private userService: AuthService) {}

  @Post('/signup')
  register(@Body() userDto: createUserDto) {
    return this.userService.register(userDto)
  }

  @Post('/signin')
  login(@Body() userDto: createUserDto) {
    return this.userService.login(userDto)
  }

  @Post('/logout')
  logout(@Body() userDto: createUserDto) {
    return this.userService.logout()
  }

  @Post('/refresh')
  refreshTokens(@Body() userDto: createUserDto) {
    return this.userService.refreshTokens()
  }

  @Post('/update')
  updateUser(@Body() userDto: createUserDto) {
    return this.userService.updateUser()
  }

  @Get('/:id')
  getUserData(@Param('id') id: string) {
    return this.userService.getUserData(id)
  }

  @Get()
  getUsers() {
    return this.userService.getUsers()
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id)
  }
}
