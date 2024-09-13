import React from 'react'
import {Image} from 'cloudinary-react';
import {images} from '../../data/funiture.json'

const Furniture = () => {
  return (
    <>
  <div className='text-center mt-12'>
    <h3 className='font popins text-xl font-semibold text-[#616161]'>Share your setup with</h3>
    <h1 className='font popins text-4xl font-bold text-tertiary'>#FuniroFurniture</h1>
  </div>
  <div className='grid grid-cols-1 max-w-full max-h-full md:grid-cols-2 lg:grid-cols-3'>
    {/* flex or grid them */}

     <div className='grid grid-cols-2 '>
       <div className='w-[274px] h-[382px]'>
           <Image loading='lazy'
           cloudName= {images.cloudName}
           publicId= {images.image1.url} />
       </div>
       <div className='w-[290px] h-[312px] py-48 px-2 ml-14'>
          <Image loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image2.url} />  
       </div>
      <div className='w-[298px] h-[323px] pr-4 mt-4'>
          <Image loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image3.url} /> 
      </div>
      <div className='w-[300px] h-[282px] ml-14 px-4 mt-4'>
          <Image loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image4.url} />  
      </div>
   </div>
   {/* single middles one */}
   <div className='ml-32 mt-20 w-[290px] h-[392px]'> 
    <div>
        <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image5.url} />
    </div>
   </div>
   {/* second 4 */}
    <div className='grid grid-cols-2'>
       <div className='w-[240px] h-[348px] pr-6 py-10 mr-20 md:-mt-20'>
          <Image loading='lazy'
         cloudName= {images.cloudName}
         publicId= {images.image6.url} />
       </div>
       <div className='w-[250px] h-[433px] px-6 mr-10'>
          <Image loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image7.url} />  
       </div>
      <div className='w-[178px] h-[242px] -mt-52 '>
          <Image loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image8.url} /> 
      </div>
      <div className='w-[250px] h-[196px] -mt-60 py-7 px-6'>
          <Image loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image9.url} />  
      </div>
    </div>
  </div>
    </>
  )
}

export default Furniture