interface ICityImages {
  id: number
  title: string
  url: string
  description: string
}
export class CreateCityDto {
  readonly title: string
  readonly URL: string
  readonly description: string
  readonly images: ICityImages[]
  readonly card: string[]
}
