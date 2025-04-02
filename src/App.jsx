import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Featured from './Components/Featured'
import Footer from './Components/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Popular from './Components/Popular'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Popular/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App