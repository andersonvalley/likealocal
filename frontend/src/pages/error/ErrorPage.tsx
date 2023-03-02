import React from 'react'
import { Routes } from '../../routes'
import { Link } from 'react-router-dom'

import notFound from '../../assets/images/404.svg'

import './error.scss'

function ErrorPage() {
  return (
    <div className='error'>
      <img src={notFound} alt='404 ошибка' />
      <h4 className='error__title'>Страница не найдена</h4>
      <p className='error__text'>
        Измените поисковый запрос или посмотрите другие интересные места
      </p>

      <Link className='error__btn btn' to={Routes.MAIN}>
        На главную
      </Link>
    </div>
  )
}

export default ErrorPage
