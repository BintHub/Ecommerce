import React from 'react'
import {Image} from 'cloudinary-react';
import {images} from '../../data/header.json';



const Header = () => {
  return (
    <div className='relative w-full h-full md:h-screen'>
    <Image loading='lazy'
    cloudName= {images.cloudName}
    publicId= {images.image.url} />
    <div className='absolute p-2 top-1/4 right-12 w-[300px] h-[300px] bg-[#FFF3E3] rounded-lg font-poppins md:p-16 md:-mt-20 md:w-[350px] md:h-[350px] lg:w-[643px] lg:h-[420px]  lg:mt-6'>
       <h2 className='text-sm uppercase tracking-wide text-gray-700 mb-4 font-bold md:-mt-8'>New Arrival</h2>
       <h1 className='font-poppins lg:text-5xl font-bold text-primary md:text-xl'>Discover Our <br />New Collection</h1>
       <p className='font-poppins text-lg font-medium text-black mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
       <button className='font-poppins font-medium text-white text-lg bg-primary py-3 px-8 md:mt-4 lg:mt-14'>BUY NOW</button>
    </div>
    </div>
  )
}

export default Header