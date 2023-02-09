import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as dotenv from 'dotenv'

async function start() {
  dotenv.config()
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, () =>
    console.log(`Server has been started on port ${PORT}`)
  )
}
start()
