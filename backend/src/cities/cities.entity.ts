import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cities')
export class CitiesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  title: string

  @Column()
  description: string

  @Column()
  URL: string

  @Column({ default: [] })
  cards: boolean

  @Column({ default: [] })
  images: boolean
}
