import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { AuthEntity } from '../auth/auth.entity'

@Entity('favorites')
export class FavoritesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column({ default: '' })
  type: string

  @Column({ default: '' })
  images: string

  @Column()
  url: string

  @Column({ default: '' })
  city: string

  @ManyToOne((type) => AuthEntity, (user) => user.favorites)
  user: AuthEntity
}
