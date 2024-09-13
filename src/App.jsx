import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom' //import route

import Footer from './Components/Footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Nav from './Components/Nav/Nav'
import Shop from './components/shop/Shop'
import Error from './components/error/Error'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path ='/home' element={<Home />} />
        <Route path ='/shop' element={<Shop />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/contact' element={<Contact />} />
        <Route path ='/*' element={<Error />} />
      </Routes>
      <Footer/>
     
    </>
  )
}

export default App
