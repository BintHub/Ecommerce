import React from 'react'
import {Image} from 'cloudinary-react';
import {images} from '../../data/interior.json';

const Interior = () => {
  return (
    <>
    <div className='text-center mt-44 sm:mt-20 md:-mt-28 lg:mt-36'>
      <h2 className='font-poppins font-bold text-[#333333] text-3xl'>Browse The Range</h2>
      <p className='font-poppins font-normal text-[#666666] text-xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  <div className=' max-w-[1183px] mx-auto items-center flex flex-row flex-wrap justify-evenly md:flex-row'> 
       <div>
        <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image1.url} />
        <span className='ml-40  font-semibold font-poppins text-2xl text-[#333333]'>Dining</span>
      </div>
       <div>
      <Image loading='lazy'
      cloudName= {images.cloudName}
      publicId= {images.image2.url} />
       <span className='ml-40 text-center font-semibold font-poppins text-2xl text-[#333333]'>Living</span>
      </div>
      <div>
      <Image loading='lazy'
      cloudName= {images.cloudName}
      publicId= {images.image3.url} />
       <span className='ml-40 text-center font-semibold font-poppins text-2xl text-[#333333]'>Bedroom</span>
       </div>
   </div>
    </>
  )
}

export default Interior