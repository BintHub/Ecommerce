import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile.svg'
import search from '../../assets/search.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/cart.svg'
import logo from '../../assets/Mlogo.svg'
import name from '../../assets/furniro.svg'

const Nav = () => {
  return (
   <>
     <div className='bg-white py-2 px-3 mt-4'> 
     <ol className='flex flex-wrap items-center justify-around sm:  md:'>
        <li className='flex'>
           <img  src= {logo}  alt="logo" />
           <img  src= {name} alt="logo" />
        </li>
        <li className='flex flex-wrap items-center justify-between gap-10  m-4'>
           <Link className='text-black text-base font-medium font-poppines' to="/home">Home</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/shop">Shop</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/about"> About</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/contact">Contact</Link>
        </li>
        <li className='flex items-center justify-between gap-10'>
        <Link to="/profile"><img src= {profile} alt="" /></Link>
        <Link to="/search"><img src= {search} alt="" /></Link>
        <Link to="/favourite"><img src= {heart} alt="" /></Link>
        <Link to="/cart"><img src= {cart} alt="" /></Link>
        </li>
      </ol>
    </div>
   </>
  )
}

export default Nav