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
    console.log(event.currentTarget)
    if (event.currentTarget.closest('.sidebar') && !event.currentTarget.closest('.sidebar__back'))
      return
    setOpenSidebar(false)
    navigate('/')
  }

  return (
    <>
      <aside className={openSidebar ? 'sidebar sidebar__auth open' : 'sidebar sidebar__auth'}>
        <div onClick={closeSideBar} className='sidebar__back'>
          <MdOutlineArrowBack />
        </div>

        <h1 className='sidebar__title'>Войдите или зарегистрируйтесь</h1>

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
      <div onClick={closeSideBar} className={openSidebar ? 'overlay open' : 'overlay'}></div>
    </>
  )
}

export default Sidebar
