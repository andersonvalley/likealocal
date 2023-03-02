import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { IoMdSearch } from 'react-icons/io'
import { GrFavorite } from 'react-icons/gr'
import { TbGridDots } from 'react-icons/tb'
import { FaUserAlt } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'

import './header.scss'
import { Routes } from '../../routes'

interface IHeaderProps {
  openSidebar: boolean
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ openSidebar, setOpenSidebar }: IHeaderProps) {
  const [searchInput, setSearchInput] = useState(false)

  const navigate = useNavigate()
  const openSidebarHandler = () => {
    setOpenSidebar(!openSidebar)
    navigate('/auth')
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <Link to={Routes.MAIN} className='header__logo logo'>
          <img className='logo__img' src={logo} alt='logo' />
          <div>
            <span className='logo__title'>like a local</span>
            <p className='logo__text'>Находите интересные места в своем городе</p>
          </div>
        </Link>

        <div className='header__group'>
          <div className={searchInput ? 'header__search-wrapper open' : 'header__search-wrapper'}>
            <input type='search' placeholder='Поиск...' />
          </div>

          <button
            onClick={() => setSearchInput(!searchInput)}
            className='header__btn header__search'
          >
            <IoMdSearch />
          </button>

          <Link to='/favorites' className='header__btn header__favorites'>
            <GrFavorite />
          </Link>

          <button onClick={openSidebarHandler} className='header__btn header__user'>
            <FaUserAlt />
          </button>

          <button className='header__menu header__btn'>
            <TbGridDots />
            <span>Меню</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
