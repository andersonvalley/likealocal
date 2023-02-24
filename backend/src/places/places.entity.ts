import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { CitiesEntity } from '../cities/cities.entity'
import { ImagesEntity } from '../images/images.entity'

@Entity('places')
export class PlacesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  title: string

  @Column({ default: '' })
  description: string

  @Column({ default: '' })
  URL: string

  @Column()
  category: string

  @ManyToOne((type) => CitiesEntity, (city) => city.places)
  city: CitiesEntity

  @OneToMany((type) => ImagesEntity, (images) => images.place)
  images: ImagesEntity[]
}
