import React, { useState } from 'react'
import Header from './comonent/header/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './comonent/sidebar/Sidebar'
import { RoutesApp } from './routes'
import Footer from './comonent/footer/Footer'

function App() {
  const routes = RoutesApp()
  const [openSidebar, setOpenSidebar] = useState(false)
  const { pathname } = useLocation()
  // const location = getLocation()

  React.useEffect(() => {
    if (pathname === '/auth') {
      setOpenSidebar(true)
    }
  }, [])

  return (
    <>
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <main className='main'>
        <div className='container'>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
