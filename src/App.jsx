import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom' //import route

import Footer from './Components/Footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Shop from './components/shop/Shop'
import Error from './components/error/Error'
import Comparison from './components/Comparison/Comparison'
import Cart from './components/cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
import SingleProduct from './components/singleProduct/SingleProduct'
import ProductDisplay from './components/Productdisplay/ProductDisplay'

//note
//Add to cart not yet working
//responsive nav bar yet to be done
//some pages are not yet responsive
//route optimization yrt to be done
//produvt diplay via data yet to be done




function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/shop' element={<Shop />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/contact' element={<Contact />} />
        <Route path ='/product/:id' element={<SingleProduct />} />
        <Route path ='/cart' element={<Cart />} />
        <Route path ='/checkout' element={<CheckOut />} />
        <Route path ='/comparison' element={<Comparison />} />
        <Route path ='/productDisplay' element={<ProductDisplay />} />
        <Route path ='*' element={<Error />} />
      </Routes>
      <Footer/>
     
    </>
  )
}

export default App
