import { v4 as uuidv4 } from 'uuid'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import * as sharp from 'sharp'

export default async function saveImage(photo) {
  const ext = photo.originalname.split('.').reverse()[0]
  const uuid = uuidv4()
  const filePath = join(__dirname, '..', '..', 'uploads', 'photos')

  const inputBuffer = await sharp(photo.buffer).webp().toBuffer()

  await writeFile(filePath + uuid + '.' + ext, photo.buffer)
  await writeFile(filePath + uuid + '.webp', inputBuffer)

  return {
    fileUrl: `photos/${uuid}.${ext}`,
    fileWebp: `photos/${uuid}.webp`
  }
}
