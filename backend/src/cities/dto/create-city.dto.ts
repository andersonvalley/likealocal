export interface ICityImages {
  id: number
  title: string
  url: string
  description: string
}

export interface ICityCard {
  id: number
  title: string
  url: string
  description: string
}

export class CreateCityDto {
  readonly title: string
  readonly URL: string
  readonly description: string
  readonly images: string
  readonly card: string
}
