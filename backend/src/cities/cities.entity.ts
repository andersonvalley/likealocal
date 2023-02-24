import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PlacesEntity } from '../places/places.entity'

@Entity('cities')
export class CitiesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  title: string

  @Column({ default: '' })
  description: string

  @Column()
  URL: string

  @Column({ default: [] })
  cards: string

  @Column({ default: [] })
  images: string

  @OneToMany((type) => PlacesEntity, (places) => places.city)
  places: PlacesEntity[]
}
