import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'

import './sidebar.scss'
import { useNavigate } from 'react-router-dom'

interface ISidebar {
  openSidebar: boolean
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

function Sidebar({ openSidebar, setOpenSidebar }: ISidebar) {
  const navigate = useNavigate()

  const closeSideBar = (event: React.MouseEvent) => {
    if (event.currentTarget.closest('.sidebar') && !event.currentTarget.closest('.sidebar__back')) return
    setOpenSidebar(false)
    navigate('/')
  }


  return (
    <div onClick={closeSideBar} className={openSidebar ? 'overlay open' : 'overlay'}>
      <aside className='sidebar sidebar__auth'>
        <div onClick={closeSideBar} className='sidebar__back'>
          <MdOutlineArrowBack />
        </div>

        <h1 className='sidebar__title'>
          Войдите или зарегистрируйтесь
        </h1>

        <form className='sidebar__form' action='' method='POST' autoComplete='true'>
          <input type='email' placeholder='Ваш email' autoComplete='on' />
          <input type='password' placeholder='Ваш пароль' />
          <button type='submit'>Войти</button>
        </form>

        <span className='sidebar__use'>или использовать</span>

        <div className='sidebar__group'>
          <button className='btn'>Яндекс</button>
          <button className='btn'>Google</button>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar