import { useState } from 'react'

export async function getLocation() {
  const [location, setLocation] = useState(null)

  try {
    const response = await fetch('http://localhost:3001/location')
    const data = await response.json()
    setLocation(data)
  } catch (e) {
    console.log(e)
  }

  return location
}
