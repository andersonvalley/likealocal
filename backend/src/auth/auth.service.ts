import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { AuthEntity } from './auth.entity'
import { createUserDto } from './dto/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import * as process from 'process'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly authRepository: Repository<AuthEntity>
  ) {}

  async register(dto: createUserDto) {
    const candidate = await this.authRepository.findOne({
      where: { email: dto.email }
    })

    if (candidate) {
      throw new HttpException(
        `Пользователь с почтовым адресом ${dto.email} уже существует`,
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    const hashPassword = await bcrypt.hash(dto.password, 5)

    const user = await this.authRepository.create({
      ...dto,
      password: hashPassword
    })

    if (!user) {
      throw new HttpException(
        `Ошибка при создании пользователя`,
        HttpStatus.BAD_REQUEST
      )
    }

    await this.authRepository.save(user)

    const accessToken = jwt.sign(
      { email: dto.email, name: dto.name },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    )

    const refreshToken = jwt.sign(
      { email: dto.email, name: dto.name },
      process.env.SECRET_KEY,
      { expiresIn: '30d' }
    )

    return { accessToken, refreshToken }
  }

  async login(dto: createUserDto) {
    const user = await this.authRepository.findOne({
      where: { email: dto.email }
    })

    if (!user) {
      throw new HttpException(
        `Неверный email или пароль`,
        HttpStatus.BAD_REQUEST
      )
    }

    const checkPassword = await bcrypt.compare(dto.password, user.password)

    if (!checkPassword) {
      throw new HttpException(
        `Неверный email или пароль`,
        HttpStatus.BAD_REQUEST
      )
    }

    const accessToken = jwt.sign(
      { email: dto.email, name: dto.name },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    )

    const refreshToken = jwt.sign(
      { email: dto.email, name: dto.name },
      process.env.SECRET_KEY,
      { expiresIn: '30d' }
    )

    return { accessToken, refreshToken }
  }

  async logout() {}

  async refreshTokens() {}

  async getUserData(id) {
    const user = await this.authRepository.findOne({ where: { id } })

    if (!user) {
      throw new HttpException(`Пользователь не найден`, HttpStatus.BAD_REQUEST)
    }

    return this.authRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.favorites', 'favorite')
      .getMany()
  }

  async getUsers() {
    const users = await this.authRepository.find()

    if (!users) {
      throw new HttpException(`Пользователи не найден`, HttpStatus.BAD_REQUEST)
    }

    return users
  }

  async updateUser() {}

  async deleteUser(id: string) {
    const user = await this.authRepository.findOne({ where: { id } })

    if (!user) {
      throw new HttpException(
        `Ошибка при удалении пользователя`,
        HttpStatus.BAD_REQUEST
      )
    }

    await this.authRepository.delete({ id })
    return 'Пользователь удален'
  }
}
