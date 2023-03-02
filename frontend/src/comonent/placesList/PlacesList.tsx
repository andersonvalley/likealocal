import React from 'react'
import PlaceCard from '../placeCard/PlaceCard'

function PlacesList() {
  return (
    <section className='place'>
      <h2 className='place__title'>Места и события</h2>

      <div className='place__slider'>
        <PlaceCard />
      </div>
    </section>
  )
}

export default PlacesList
