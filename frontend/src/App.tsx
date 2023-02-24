import React, { useState } from 'react'
import Header from './comonent/header/Header'
import MainPage from './pages/main/MainPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './comonent/sidebar/Sidebar'
import AuthPage from './pages/auth/AuthPage'

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/auth') {
      setOpenSidebar(true)
    }
  }, [])

  return (
    <>
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
     <main>
       <Routes>
         <Route path="/">
           <Route path='/' element={<MainPage />} />
            <Route path="/auth" element={<AuthPage />} />
         </Route>
       </Routes>
       <MainPage />
     </main>
    </>
  )
}

export default App
