import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile.svg'
import search from '../../assets/search.svg'
import heart from '../../assets/heart.svg'
import cartLogo from '../../assets/cartLogo.svg'
import logo from '../../assets/Mlogo.svg'
import name from '../../assets/furniro.svg'
import CartSlider from '../CartSlider/CartSlider'
import { useRecoilValue } from 'recoil'
import { cartData } from '../atoms/Cart'


const Nav = () => {
  let [show,setShow]=useState(false);
  let cart = useRecoilValue(cartData);
  return (
   <>
     <div className='bg-white py-2 px-3 mt-4'> 
     <ol className='flex flex-wrap items-center justify-around sm:  md:'>
        <li className='flex'>
           <img  src= {logo}  alt="logo" />
           <img  src= {name} alt="logo" />
        </li>
        <li className='flex flex-wrap items-center justify-between gap-10  m-4'>
           <Link className='text-black text-base font-medium font-poppines' to="/">Home</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/shop">Shop</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/about"> About</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/contact">Contact</Link>
        </li>
        <li className='flex items-center justify-between gap-10'>
        <Link to="/profile"><img src= {profile} alt="" /></Link>
        <Link to="/search"><img src= {search} alt="" /></Link>
        <Link to="/favourite"><img src= {heart} alt="" /></Link>
        <Link onClick={()=>setShow(prev=>!prev)} className='relative h-[21.86px] w-[24.53px] block' to='#'><img src= {cartLogo} alt="" />
        <span className='absolute text-red-600 top-[-17px] right-[-5px] text-base'>{cart.length}</span>
        </Link>
        </li>
      </ol>
      <CartSlider show={show} setShow={setShow}/>
    </div>
   </>
  )
}

export default Nav