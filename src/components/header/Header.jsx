import React from 'react'
import {Image} from 'cloudinary-react';
import {images} from '../../data/header.json'


const Header = () => {
  return (
    <div className='relative w-full h-[70vh] md:h-screen'>
    <Image loading='lazy'
    cloudName= {images.cloudName}
    publicId= {images.image.url} />
    <div className='absolute top-1/4 right-12 bg-[#FFF3E3] p-8 rounded-lg font-poppins md:p-16'>
       <h2 className='text-sm uppercase tracking-wide text-gray-700 mb-4 font-bold'>New Arrival</h2>
       <h1 className='font-poppins text-5xl font-bold text-primary'>Discover Our <br />New Collection</h1>
       <p className='font-poppins text-lg font-medium text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
       <button className='font-poppins font-medium text-white text-lg bg-primary py-3 px-8 mt-4 shadow'>BUY NOW</button>
    </div>
    </div>
  )
}

export default Header