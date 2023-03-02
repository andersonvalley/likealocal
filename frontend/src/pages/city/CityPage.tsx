import React from 'react'
import PlacesList from '../../comonent/placesList/PlacesList'

function CityPage() {
  const obj = {
    title: 'Санкт-Петербург'
  }
  return (
    <div className='city'>
      <div className='city__info'>
        <h1 className='city__title'>
          Откройте для себя направление
          <span>{obj.title}</span>
        </h1>
        <p className='city__description'>
          Один из самых европейских городов России со множеством исторических мест, изобретательными
          ресторанами и выходом к морю.
        </p>

        <PlacesList />
      </div>
    </div>
  )
}

export default CityPage
