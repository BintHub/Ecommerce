import React from 'react'
import {Image} from 'cloudinary-react';
import {images} from '../../data/room.json';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import arrow from '../../assets/rightarrow.svg'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectFade,]}
      spaceBetween={20}
      slidesPerView={3.5}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{clickable:false}}
      effect='cube'
      className='w-full px-10 flex flex-col items-center justify-center gap-8'
    

      style={{
  "--swiper-pagination-color": "#FFBA08",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "12px",
  "--swiper-pagination-bullet-horizontal-gap": "10px",
  "--swiper-pagination-border":"#FFBA08",
  "--swiper-pagination-border-radius":"#FFBA08",
   
        }}
 >
  <>
    <div className='bg-secondary'>
      <div className=''>
      <SwiperSlide className='px-5 mt-32'>
      <h1 className='font-poppins text-tertiary text-4xl font-bold md:w-[422px]'>50+ Beautiful rooms <br />inspiration</h1>
       <p className='font-poppins text-[#616161] text-base font-medium mt-4 md:h-36'>Our designer already made a lot of beautiful <br />
        prototipe of rooms that inspire you</p>
       <button className='font-poppins font-medium text-white text-lg bg-primary py-2 px-8 mt-4 shadow lg:-mt-20 '>
      Explore More</button>
      </SwiperSlide>
      </div>
    <div className=''>
      <SwiperSlide className='ml-36 w-full mx-auto items-center flex flex-row flex-wrap justify-evenly md:ml-32 lg:ml-10'> 
       <div className='relative w-full'>
        <Image className='w-[600px] h-[582px]'  loading='lazy'
        cloudName= {images.cloudName}
        publicId= {images.image.url} />
          <div className='absolute h-[130px] font-poppins text-base font-medium left-6 bottom-8 bg-[#FFFFFFB8] md:p-12 '>
          01 --Bed Room <br /> <span className='text-tertiary text-2xl font-semibold'>Inner Peace</span>
          </div>
          <div className='absolute  -right-8  bg-primary lg:right-16 bottom-8 px-1'><Link to="/profile"><img src= {arrow} alt="" /></Link></div>
      </div>
      </SwiperSlide>
      {/* add size of pic */}
       <SwiperSlide className='w-full'>
      <Image className='w-full h-[394px]'loading='lazy'
      cloudName= {images.cloudName}
      publicId= {images.image2.url} />
      </SwiperSlide>
      <SwiperSlide className='w-full '>
      <Image className='w-[301px] h-[394px]' loading='lazy'
      cloudName= {images.cloudName}
      publicId= {images.image3.url} />
       </SwiperSlide>
      <SwiperSlide className='w-full'>
      <Image className='w-[301px] h-[394px]' loading='lazy'
      cloudName= {images.cloudName}
      publicId= {images.image2.url} />
       </SwiperSlide>
      <SwiperSlide className='w-full'>
      <Image className='w-[301px] h-[394px]' loading='lazy'
      cloudName= {images.cloudName}
      publicId= {images.image3.url} />
       </SwiperSlide>
    </div>

   </div>
   </>
   </Swiper>
  );
};

