import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { GrFavorite } from 'react-icons/gr'
import { TbGridDots } from 'react-icons/tb'
import { FaUserAlt } from 'react-icons/fa'

import './header.scss'
import { useNavigate } from 'react-router-dom'

interface IHeaderProps {
  openSidebar: boolean
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header ({openSidebar, setOpenSidebar}: IHeaderProps) {
  const [searchInput, setSearchInput] = useState(false)

  const navigate = useNavigate();
  const openSidebarHandler = () => {
    setOpenSidebar(!openSidebar)
    navigate('/auth');
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <div className='header__logo'>
          <span>likelocal</span>
        </div>

        <div className='header__group'>
          {
            searchInput &&
            <div className='header__search-input'>
              <input type='search' placeholder='Поиск...' />
            </div>
          }

          <button onClick={() => setSearchInput(!searchInput)} className='header__btn header__search'>
            <IoMdSearch />
          </button>

          <div className='header__btn header__favorites'>
            <GrFavorite />
          </div>

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