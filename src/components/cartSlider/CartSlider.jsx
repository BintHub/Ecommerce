
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import lock from '../../assets/cartlock.svg'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import close from '../../assets/close.svg'
import { Image } from 'cloudinary-react';
import { cartData } from '../atoms/cart';



const CartSlider = ({show,setShow}) => {

  let [cart,setCart] = useRecoilState(cartData);
  let [total,setTotal] = useState(0)
  function handleRemove(id) {
      let removed = cart.filter(function( obj ) {
          return obj.id !== id;
        });

        setCart(removed);
  }
  useEffect(()=> {
    if(cart.length > 0) {
       let sum = cart.map((a)=> {
       let y = Number(String(a.price).split(' ')[1].split('.000')[0])
           return y;
        });

       setTotal(sum.reduce((a,b)=> a+=b))

    }else{
        console.log('cart empty')
    }
 },[cart])

  let redir = useNavigate();
  let handleClose=(e)=>{
    e.stopPropagation();
    setShow(prev => !prev)
  }
  return (
   <>
   <div onClick={handleClose} className={classNames('w-full h-full z-[100000000] bg-[#00000033] fixed top-0 left-0',{
      'hidden': !show
   })}>
     <div onClick={(e)=>e.stopPropagation()} className='bg-white text-black w-[300px] lg:w-[417px] h-full fixed top-0 right-0 
     scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300  overflow-y-scroll'>
        <div className='flex flex-wrap justify-around gap-10 py-8'>
          <h1 className='font-poppins font-semibold text-2xl'>Shopping cart</h1>
          <img onClick={(e)=>handleClose(e)} src={lock} alt="cartLock" />
        </div>
        <hr />
        {
            cart.map(each=>(
              <div key={each.id} className='flex flex-wrap flex-row gap-4 py-8 md:ml-6'>
                <Image className='w-[111px] h-[90px]' loading='lazy' cloudName= {each.cloudName} publicId= {each.img}/>
               <div className='font-poppins font-normal text-base py-4'>
                {each.name} <br /><span className='font-poppins font-medium text-xs text-primary'> <span className='text-black pr-2'>1 &nbsp; X</span> {each.price}</span>
                </div> 
                <button className='py-3 ml-10' onClick={()=> handleRemove(each.id)} ><img src={close} alt="" /></button> 
              </div>
            ))
        }
    <div className='mt-10 py-4 ml-6'>
      <h1 className='font-poppins font-medium text-base'>Subtotal: <span className='pl-20 font-poppins font-semibold text-base text-primary'>Rp {String(total).includes('.')?String(total).padEnd(5,'0').concat('.000'):String(total).concat('.').padEnd(5,'0').concat('.000')} </span></h1>
    </div>

      
      <div className=' text-center'>
        <hr />
       <button onClick={(e)=>{handleClose(e); redir('/cart/')}} className='font-poppins font-normal text-black text-sm border border-black py-1 px-8 mt-7 rounded-full m-2'>
        Cart</button>
       <button onClick={(e)=>{handleClose(e);redir('/checkout/')}} className='font-poppins font-normal text-black text-sm border border-black py-1 px-8 mt-7 rounded-full m-2'>
        Checkout</button>
       <button onClick={(e)=>{handleClose(e);redir('/comparison/')}} className='font-poppins font-normal text-black text-sm border border-black py-1 px-8 mt-7 rounded-full m-2'>
        Comparison</button>
      </div>
     </div>
    </div>
   </>
  )
}

export default CartSlider