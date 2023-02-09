import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { UserEntity } from './users.entity'
import { createUserDto } from './dto/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import * as process from 'process'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async registration(dto: createUserDto) {
    const candidate = await this.userRepository.findOne({
      where: { email: dto.email }
    })

    console.log(candidate)

    if (candidate) {
      throw new HttpException(
        `Пользователь с почтовым адресом ${dto.email} уже существует`,
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    const hashPassword = await bcrypt.hash(dto.password, 5)

    const user = await this.userRepository.create({
      ...dto,
      password: hashPassword
    })

    if (!user) {
      throw new HttpException(
        `Ошибка при создании пользователя`,
        HttpStatus.BAD_REQUEST
      )
    }

    await this.userRepository.save(user)

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
    const user = await this.userRepository.findOne({
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
  async createUser(dto: createUserDto) {
    const user = this.userRepository.create(dto)
    return this.userRepository.save(user)
  }

  async getAllUsers() {
    const users = await this.userRepository.find()
    return users
  }

  async getOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } })
    return user
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.findOne({ where: { id } })
    if (!user) {
      throw new HttpException(
        `Ошибка при удалении пользователя`,
        HttpStatus.BAD_REQUEST
      )
    }

    await this.userRepository.delete({ id })
    return 'Пользователь удален'
  }
}
