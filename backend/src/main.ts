import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as dotenv from 'dotenv'
import * as express from 'express'

async function start() {
  dotenv.config()
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const server = express()
  server.use(express.static('uploads'))
  app.use(server)
  await app.listen(PORT, () =>
    console.log(`Server has been started on port ${PORT}`)
  )
}

start()
