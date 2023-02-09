import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ default: '' })
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ default: false })
  isAdmin: boolean

  @Column({ default: false })
  banned: boolean
}
