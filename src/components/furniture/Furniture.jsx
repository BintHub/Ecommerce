import React from 'react'
import {Image} from 'cloudinary-react';
import {images} from '../../data/funiture.json';

const Furniture = () => {
  return (
    <>
  <div className='text-center mt-12'>
    <h3 className='font popins text-xl font-semibold text-[#616161]'>Share your setup with</h3>
    <h1 className='font popins text-4xl font-bold text-tertiary'>#FuniroFurniture</h1>
  </div>
  <div className='grid grid-cols-1 max-w-full max-h-full md:grid-cols-2 lg:grid-cols-3 mt-8'>
    {/* flex or grid them */}

     <div className='grid grid-cols-2 '>
       <div>
           <Image className='w-[274px] h-[382px]' loading='lazy'
           cloudName= {images.cloudName}
           publicId= {images.image1.url} />
       </div>
       <div className='ml-4'>
          <Image  className='w-[451px] h-[312px] 'loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image2.url} />  
       </div>
      <div className=' mt-4'>
          <Image className='w-[381px] h-[323px]' loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image3.url} /> 
      </div>
      <div className='ml-4 mt-4'>
          <Image className='w-[344px] h-[282px]' loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image4.url} />  
      </div>
   </div>
   {/* single middles one */}
   <div className='ml-[5rem] my-10 '> 
    <div>
        <Image className='w-[290px] h-[392px]' loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image5.url} />
    </div>
   </div>
   {/* second 4 */}
    <div className='grid grid-cols-2'>
       <div className=' mt-20'>
          <Image className='w-[240px] h-[348px]' loading='lazy'
         cloudName= {images.cloudName}
         publicId= {images.image6.url} />
       </div>
       <div className='px-2  mb-10'>
          <Image className='w-[250px] h-[433px]' loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image7.url} />  
       </div>
      <div className=''>
          <Image className='w-[178px] h-[242px]'loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image8.url} /> 
      </div>
      <div className=''>
          <Image  className='w-[250px] h-[196px]'loading='lazy'
          cloudName= {images.cloudName}
          publicId= {images.image9.url} />  
      </div>
    </div>
  </div>
    </>
  )
}

export default Furniture