import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PlacesEntity } from '../places/places.entity'

@Entity('images')
export class ImagesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  url: string

  @Column()
  urlWebp: string

  @ManyToOne((type) => PlacesEntity, (place) => place.images)
  place: PlacesEntity
}
