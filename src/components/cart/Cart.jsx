import React from 'react'
import { Image } from 'cloudinary-react';
import logo from '../../assets/Mlogo.svg'
import arrow from '../../assets/arrow.svg'
import { useNavigate } from 'react-router';
import del from '../../assets/delete.svg'
import Pink from '../pink/Pink';


const Cart = () => {
  let redir = useNavigate();
  return (
    <>
     <div className='relative h-[316px] flex items-center justify-center flex-col'>
      <Image className='absolute top-8 left-0 h-[316px]' loading='lazy' cloudName="ddml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1726620703/Rectangle_1_b0r2gh.png"
      />
      {/* overlay */}
       <div className='flex items-center justify-center flex-col gap-2'>
         <div>
          <img className='pl-8' src= {logo} alt="" />
          <h1 className='font-poppins font-medium text-4xl ml-6'>Cart</h1>
         </div>
         <div className='flex pl-4'>
          <button className='font-poppins font-medium text-base'>Home</button>
          <img src= {arrow} alt="" />
          <button className='font-poppins font-light text-base'>blog</button>
         </div>
       </div>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 md:mt-24 md:ml-10  lg:ml-32'>
       <div className='w-full p-6   sm:mr-14 md:w-[50%] lg:w-[100%] '>
       <table className='w-full  min-h-[20vh] md:-ml-8 '>
        <thead className='bg-secondary font-poppins font-medium text-sm'>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>quantity</th>
            <th>sutotal</th>
            <th></th>
          </tr>
       </thead>
       <tbody>
         <tr className='text-[#9F9F9F] font-poppins font-normal text-base'>
           <td className='flex gap-4 md:flex-col lg:flex-row'> <Image className='' loading='lazy' cloudName="ddml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1726808194/Asgaard_sofa_5_mt607l.png">
      </Image> <p className='mt-6 pr-8  md:-mt-6 lg:mt-6'>Asgaard sofa</p></td>
           <td><p className='px-2'>Rs. 250,000.00</p></td>
           <td><p className='border border-black rounded-sm w-6 text-center'>1</p></td>
           <td><p>Rs. 250,000.00</p></td>
           <td><img  className='' src={del} alt="icon" /> </td>
         </tr>
         </tbody>
         </table>
       </div>
       <div className='bg-secondary w-[393px] h-[390px] text-center m-10 sm:mt-4  md:-ml-10 md:w-[350px] lg:w-[393px]'>
        <h1 className='font-poppins text-4xl font-semibold mt-10'>Cart Totals </h1>
        <p  className='font-poppins text-base font-medium mt-10 ml-20 md:ml-9'>Subtotal 
          <span className='text-[#9F9F9F] m-20 '>Rs. 250,000.00</span></p>
        <p  className='font-poppins text-base font-medium ml-4'>Total 
          <span className='text-primary font-poppins text-xl font-medium pl-20'>Rs. 250,000.00</span></p>
        <button onClick={()=>redir('/checkout/')}className='font-poppins font-normal text-black text-sm border border-black py-2 px-8 mt-7 rounded-sm m-2'>
        Checkout</button>
       </div>
    </div>
    <div className='mt-16'> 
      <Pink/>
    </div>
    
    </> 
  )
}

export default Cart 