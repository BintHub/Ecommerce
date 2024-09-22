import React from 'react'
import classNames from 'classnames'
import lock from '../../assets/cartlock.svg'
import { useNavigate } from 'react-router-dom'


const CartSlider = ({show,setShow}) => {
  let redir = useNavigate();
  let handleClose=(e)=>{
    e.stopPropagation();
    setShow(prev => !prev)
  }
  return (
   <>
   <div onClick={handleClose} className={classNames('w-full h-[3107px] bg-[#00000033] fixed top-0 left-0',{
      'hidden': !show
   })}>
     <div onClick={(e)=>e.stopPropagation()} className='bg-white text-black w-[417px] min-h-[746px] fixed top-0 right-0'>
        <div className='flex flex-wrap justify-around gap-10 py-8'>
          <h1 className='font-poppins font-semibold text-2xl'>Shopping cart</h1>
          <img onClick={(e)=>handleClose(e)} src={lock} alt="cartLock" />
        </div>
        <hr />
      <div className='mt-20 text-center'>
        <hr />
       <button onClick={()=> redir('/cart/')} className='font-poppins font-normal text-black text-sm border border-black py-1 px-8 mt-7 rounded-full m-2'>
        Cart</button>
       <button onClick={()=>redir('/checkout/')}className='font-poppins font-normal text-black text-sm border border-black py-1 px-8 mt-7 rounded-full m-2'>
        Checkout</button>
       <button onClick={()=>redir('/comparison/')} className='font-poppins font-normal text-black text-sm border border-black py-1 px-8 mt-7 rounded-full m-2'>
        Comparison</button>
      </div>
     </div>
    </div>
   </>
  )
}

export default CartSlider