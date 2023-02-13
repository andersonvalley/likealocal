import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { FavoritesEntity } from '../favorites/favorites.entity'
import { IsEmail, Min } from 'class-validator'

export interface IUser {
  id: string
  email: string
  password: string
  firstName?: string
  lastName?: string
  isAdmin?: boolean
  banned?: boolean
}

@Entity('users')
export class AuthEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ default: '' })
  name: string

  @Column({ unique: true })
  @IsEmail()
  email: string

  @Column()
  @Min(6)
  password: string

  @Column({ default: false })
  isAdmin: boolean

  @Column({ default: false })
  banned: boolean

  @OneToMany((type) => FavoritesEntity, (favorite) => favorite.user)
  favorites: FavoritesEntity[]
}
