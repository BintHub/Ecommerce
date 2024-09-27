import { lazy,Suspense,useState } from 'react'
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom' //import route


import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

const About = lazy(()=>import('./components/about/About'));
const Blog = lazy (()=>import('./components/Blog/Blog'));
const Contact= lazy(()=>import('./components/contact/Contact'));
const Home =  lazy(()=> import('./components/home/Home')) ;
const Shop = lazy(()=>import('./components/shop/Shop')) ;
const Error = lazy(()=>import('./components/error/Error')) ;
const Comparison = lazy(()=>import( './components/Comparison/Comparison')) ;
const Cart = lazy(()=>import( './components/cart/Cart')) ;
const CheckOut= lazy(()=>import( './components/CheckOut/CheckOut')) ;
const SingleProduct = lazy(()=>import('./components/singleProduct/SingleProduct')) ;
const ProductDisplay = lazy(()=>import( './components/Productdisplay/ProductDisplay')) ;


function App() {

  return (
    <>
      <Nav/>
       <Suspense fallback={<div className='font-poppins text-center text-4xl font-semibold text-red-600'>Loading...</div>} >
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/shop' element={<Shop />} />
          <Route path ='/about' element={<About />} />
          <Route path ='/blog' element={<Blog />} />
          <Route path ='/contact' element={<Contact />} />
          <Route path ='/product/:id' element={<SingleProduct />} />
          <Route path ='/cart' element={<Cart />} />
          <Route path ='/checkout' element={<CheckOut />} />
          <Route path ='/comparison' element={<Comparison />} />
          <Route path ='/productDisplay' element={<ProductDisplay />} />
          <Route path ='*' element={<Error />} />
        </Routes>
       </Suspense>
      <Footer/>
     
    </>
  )
}

export default App
