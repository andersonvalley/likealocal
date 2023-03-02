import React from 'react'
import { Link } from 'react-router-dom'
import { GrFavorite } from 'react-icons/gr'

interface ICard {
  id: string
  title: string
  image: string
}
function PlaceCard() {
  return (
    <article className='card'>
      <Link className='card__link' to={`places/${'id'}`}>
        <span className='card__label'>Популярно</span>
        <img
          className='card__img'
          src='https://cms.russpass.ru/v1/file/623982cf994c9997315b677e/400'
          alt={'title'}
        />
        <div className='card__favorite'>
          <GrFavorite />
        </div>

        <div className='card__info'>
          <span className='card__type'>Развлечения</span>
          <h3 className='card__title'>Канатная дорога</h3>
          <span className='card__price'>от 1265 ₽</span>
        </div>
      </Link>
    </article>
  )
}

export default PlaceCard
