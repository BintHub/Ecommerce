import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.svg'
import search from '../../assets/search.svg'
import heart from '../../assets/heart.svg'
import cartLogo from '../../assets/cartLogo.svg'
import logo from '../../assets/Mlogo.svg'
import name from '../../assets/furniro.svg'
import CartSlider from '../cartSlider/CartSlider'
import { useRecoilValue } from 'recoil';
import { cartData } from '../atoms/cart';
 


const Nav = () => {
  let [show,setShow]=useState(false);
  let cart = useRecoilValue(cartData);
  let [isMenuOpen,setIsMenuOpen] = useState(false);
  
  return (
   <>
     <div className='bg-white py-2 px-3 mt-4'> 
     <ol className='flex flex-wrap items-center justify-around sm:  md:'>
        <li className='flex'>
           <img  src= {logo}  alt="logo" />
           <img  src= {name} alt="logo" />
        </li>
        <li className='hidden lg:flex flex-wrap items-center justify-between gap-10  m-4'>
           <Link className='text-black text-base font-medium font-poppines hover:bg-secondary' to="/">Home</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/shop">Shop</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/about"> About</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/blog"> Blog</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/contact">Contact</Link>
        </li>
        <li className=' hidden lg:flex items-center justify-between gap-10'>
        <Link to="/profile"><img src= {profile} alt="" /></Link>
        <Link to="/search"><img src= {search} alt="" /></Link>
        <Link to="/favourite"><img src= {heart} alt="" /></Link>
        <Link onClick={()=>setShow(prev=>!prev)} className='relative h-[21.86px] w-[24.53px] block' to='#'><img src= {cartLogo} alt="" />
        <span className='absolute text-red-600 top-[-17px] right-[-5px] text-base'>{cart.length}</span>
        </Link>
        </li>
        <i className='relative bx bx-menu lg:hidden block text-5xl cursor-pointer' onClick={()=>setIsMenuOpen(!isMenuOpen)}></i>
        <div className={`absolute lg:hidden z-[100000000] top-24 left-0 w-full bg-white flex flex-col items-center justify-center gap-6 text-base font-medium font-poppines transform transition-transform ${isMenuOpen ? 'opacity-100' :'opacity-0'}`}>
        <Link className='w-full text-base font-medium font-poppines text-center p-3 hover:bg-black hover:text-white transition-all cursor-pointer' to="/">Home</Link>
        <Link className='w-full text-base font-medium font-poppines text-center p-3 hover:bg-black hover:text-white transition-all cursor-pointer' to="/shop">Shop</Link>
        <Link className='w-full text-base font-medium font-poppines text-center p-3 hover:bg-black hover:text-white transition-all cursor-pointer' to="/about">About</Link>
        <Link className='w-full text-base font-medium font-poppines text-center p-3 hover:bg-black hover:text-white transition-all cursor-pointer' to="/blog">Blog</Link>
        <Link className='w-full text-base font-medium font-poppines text-center p-3 hover:bg-black hover:text-white transition-all cursor-pointer' to="/contact">Contact</Link>
        </div>
        <div className='lg:hidden  flex flex-row gap-2'>
        <Link to="/profile"><img src= {profile} alt="" /></Link>
        <Link to="/search"><img src= {search} alt="" /></Link>
        <Link to="/favourite"><img src= {heart} alt="" /></Link>
        <Link onClick={()=>setShow(prev=>!prev)} className='relative h-[21.86px] w-[24.53px] block' to='#'><img src= {cartLogo} alt="" />
        <span className='absolute text-red-600 top-[-17px] right-[-5px] text-base'>{cart.length}</span>
        </Link>
        </div>
      </ol>
      <CartSlider show={show} setShow={setShow}/>
    </div>
   </>
  )
}

export default Nav