import React from 'react'
import {Image} from 'cloudinary-react';
import {images} from '../../data/product.json'
import share from '../../assets/share.svg'
import compare from '../../assets/compare.svg'
import like from '../../assets/like.svg'


const Product = () => {
  return (
    <>
  <div className='text-center mt-12 mb-6'>
      <h2 className='font-poppins font-bold text-[#333333] text-3xl'>Our Products</h2>
  </div>
 <div className=''>
   <div className='ml-16 h-full max-w-[1236px] items-center grid grid-col-1 md:grid-cols-2 lg:grid-cols-4'>
    <div className='relative max-w-60 max-h-[301px] w-full md:mb-16 sm:mx-auto mb-20'>
      <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image1.url} />
        <div className=' text-white h-12 w-12 absolute top-4 right-5 bg-[#E97171] rounded-full font-poppins font-medium text-base text-center py-3'>-30%</div>
          <div className='font-poppins bg-[#F4F5F7] pl-4 py-2'>
            <h1 className='text-tertiary  text-2xl font-semibold'>Syltherine</h1>
            <p className='text-[#898989] text-base font-medium'>Stylish cafe chair</p>
            <p className='text-tertiary  font-semibold text-xl'>Rp 2.500.000
               <span className='text-[#B0B0B0] font-normal text-base px-2 line-through'>Rp 3.500.000</span></p>
            </div>
      </div>
      {/* hover one not working and not transparent*/}
    <div className='relative max-w-60 max-h-[301px] w-full md:mb-16 sm:mx-auto mb-20'>
      <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image2.url} />
<div className='absolute left-0 top-0 w-full h-[54vh] hover:bg-[#3A3A3A] hover:bg-opacity-50 hover:visible' >
          <div className='text-center mt-28'>
          <button className='font-poppins font-semibold text-primary text-base bg-white py-3 px-8'>Add to cart</ button>
          </div>
          <div className='flex flex-row gap-4 py-6 ml-4'>
            <div>
            <button className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {share} alt="icon"/> Share</button>
            </div>
            <div>
            <button className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {compare} alt="icon"/>Compare</button>
            </div>
            <div>
            <button className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {like} alt="icon"/>Like</button>
            </div>
        </div>
    </div> 
          <div className='font-poppins bg-[#F4F5F7] pl-4 py-2 '>
            <h1 className='text-tertiary text-2xl font-semibold'>Leviosa</h1>
            <p className='text-[#898989] text-base font-medium'>Stylish cafe chair</p>
            <p className='text-tertiary  font-semibold text-xl'>Rp 2.500.000</p>
          </div>
 </div>
    <div className='relative max-w-60 max-h-[301px] w-full sm:mx-auto mb-20'>
      <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image3.url} />
        <div className=' text-white h-12 w-12 absolute top-4 right-5 bg-[#E97171] rounded-full font-poppins font-medium text-base text-center py-3'>-50%</div>
          <div className='font-poppins bg-[#F4F5F7] pl-4 py-2'>
            <h1 className='text-tertiary  text-2xl font-semibold'>Lolito</h1>
            <p className='text-[#898989] text-base font-medium'>Luxury big sofa</p>
            <p className='text-tertiary  font-semibold text-xl'>Rp 7.000.000
               <span className='text-[#B0B0B0] font-normal text-base px-2 line-through'>Rp 14.000.000</span></p>
            </div>
      </div>
    <div className='relative max-w-60 max-h-[301px] w-full sm:mx-auto mb-20'>
      <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image4.url} />
        <div className=' text-white h-12 w-12 absolute top-4 right-5 bg-[#2EC1AC] rounded-full font-poppins font-medium text-base text-center py-3'>New</div>
          <div className='font-poppins bg-[#F4F5F7] pl-4 py-2'>
            <h1 className='text-tertiary  text-2xl font-semibold'>Respira</h1>
            <p className='text-[#898989] text-base font-medium'>Outdoor bar table and stool</p>
            <p className='text-tertiary  font-semibold text-xl'>Rp 500.000</p>
            </div>
      </div>
  </div>
  <div className='ml-16 h-full max-w-[1236px] items-center grid grid-col-1 md:grid-cols-2 lg:grid-cols-4'>
    <div className='relative max-w-60 max-h-[301px] w-full  md:mb-16 sm:mx-auto mb-20'>
      <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image5.url} />
          <div className='font-poppins bg-[#F4F5F7] pl-4 py-2'>
            <h1 className='text-tertiary  text-2xl font-semibold'>Grifo</h1>
            <p className='text-[#898989] text-base font-medium'>Night lamp</p>
            <p className='text-tertiary  font-semibold text-xl'>Rp 1.500.000</p>
            </div>
      </div>
    <div className='relative max-w-60 max-h-[301px] w-full  md:mb-16 sm:mx-auto mb-20'>
      <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image6.url} />
        <div className=' text-white h-12 w-12 absolute top-4 right-5 bg-[#2EC1AC] rounded-full font-poppins font-medium text-base text-center py-3'>New</div>
          <div className='font-poppins bg-[#F4F5F7] pl-4 py-2'>
            <h1 className='text-tertiary text-2xl font-semibold'>Muggo</h1>
            <p className='text-[#898989] text-base font-medium'>Small mug</p>
            <p className='text-tertiary  font-semibold text-xl'>Rp 150.000</p>
            </div>
      </div>
    <div className='relative max-w-60 max-h-[301px] w-full sm:mx-auto mb-20'>
      <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image7.url} />
        <div className=' text-white h-12 w-12 absolute top-4 right-5 bg-[#E97171] rounded-full font-poppins font-medium text-base text-center py-3'>-50%</div>
          <div className='font-poppins bg-[#F4F5F7] pl-4 py-2'>
            <h1 className='text-tertiary  text-2xl font-semibold'>Pingky</h1>
            <p className='text-[#898989] text-base font-medium'>Cute bed set</p>
            <p className='text-tertiary ] font-semibold text-xl'>Rp 7.000.000
               <span className='text-[#B0B0B0] font-normal text-base px-2 line-through'>Rp 14.000.000</span></p>
            </div>
      </div>
    <div className='relative  max-w-60 max-h-[301px] w-full  md:mb-16 sm:mx-auto'>
      <Image loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image8.url} />
        <div className=' text-white h-12 w-12 absolute top-4 right-5 bg-[#2EC1AC] rounded-full font-poppins font-medium text-base text-center py-3'>New</div>
          <div className='font-poppins bg-[#F4F5F7] pl-4 py-2'>
            <h1 className='text-tertiary  text-2xl font-semibold'>Potty</h1>
            <p className='text-[#898989] text-base font-medium'>Minimalist flower pot</p>
            <p className='text-tertiary  font-semibold text-xl'>Rp 500.000</p>
            </div>
    </div>
  </div>  
  <div className=' text-center'>
  <button className='h-12 w-60 border-dotted mb-16 border-primary font-semibold text-base text-primary px-2'>
    Show More</button></div>  
</div>
    </>
  )
}

export default Product