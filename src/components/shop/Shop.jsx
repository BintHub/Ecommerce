import React from 'react'
import Pagination from '../pagination/Pagination';
import { shopData } from '../pagination/shopData';
import  quality from '../../assets/quality.svg'
import shipping from '../../assets/shipping.svg'
import warranty from '../../assets/warranty.svg'
import care from '../../assets/ccare.svg'


const Shop = () => {
  return (
  <>
    <h1 className='text-black text-base font-poppins font-medium'>Shop</h1>
    <Pagination itemsPerPage={16} items={shopData} />

    <div className='bg-secondary mt-72 grid grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-4'>
     <div>
      <button className='text-[#242424] flex font-poppins text-2xl font-semibold'>
        <img className='pt-1' src= {quality} alt="icon"/>
        <div className='flex flex-col px-4'>
        <h1 className='mr-20'>High Quality</h1>
        <p className='text-[#898989] font-poppins text-xl font-medium'>Crafted from top materials</p>
        </div></button>
      </div>
      <div>
        <button className='text-[#242424] flex font-poppins  text-2xl font-semibold'>
          <img className='pt-1' src= {warranty} alt="icon"/>
          <div className='flex flex-col px-4'>
        <h1 className='mr-40'>WarrantyProtection</h1>
        <p className='text-[#898989] font-poppins text-xl font-medium mr-64'>Over 2 years</p>
        </div></button>
      </div>
      <div>
        <button className='text-[#242424] flex font-poppins  text-2xl font-semibold'>
          <img className='pt-1' src= {shipping} alt="icon"/>
          <div className='flex flex-col px-4'>
        <h1 className='mr-20'>Free Shipping</h1>
        <p className='text-[#898989] font-poppins text-xl font-medium mr-20'>Order over 150 $</p>
        </div></button>
      </div>
      <div>
      <button className='text-[#242424] flex font-poppins  text-2xl font-semibold'>
        <img className='pt-1' src= {care} alt="icon"/>
        <div className='flex flex-col px-4'>
        <h1 className='mr-20'>24 / 7 Support</h1>
        <p className='text-[#898989] font-poppins text-xl font-medium mr-20'>Dedicated support</p>
        </div></button>
      </div>
    </div>
</>
  )
}

export default Shop