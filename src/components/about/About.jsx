import React from 'react'
import Pink from '../pink/Pink';
import { AboutData } from './AboutData';
import Pagination2 from '../Pagination2/Pagination2';
import bar from '../../assets/bar.svg'
import { Image } from 'cloudinary-react';
import {images} from '../../data/blog.json'
import logo from '../../assets/Mlogo.svg'
import arrow from '../../assets/arrow.svg'

const About = () => {
  return (
    <>
     <div className='relative h-[316px] flex items-center justify-center flex-col'>
      <Image className='absolute top-8 left-0 h-[316px]' loading='lazy' cloudName="ddml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1726620703/Rectangle_1_b0r2gh.png"
      />
      {/* overlay */}
       <div className='flex items-center justify-center flex-col gap-2'>
         <div>
          <img className='pl-2' src= {logo} alt="" />
          <h1 className='font-poppins font-medium text-4xl'>Blog</h1>
         </div>
         <div className='flex'>
          <button className='font-poppins font-medium text-base'>Home</button>
          <img src= {arrow} alt="" />
          <button className='font-poppins font-light text-base'>blog</button>
         </div>
       </div>
    </div>
    <div className='grid grid-cols-1 md:grid-flow-col-dense lg:grid-flow-col-dense -mt-32 md:-mt-10 lg:mt-10'>
        <div className='max-w-[820px] min-h-[100vh] md:w-[500px] lg:w-[820px]'>
        <Pagination2 itemsPerPage={3} items={AboutData} />
        </div>
        <div className='mt-10 px-10 md:ml-20'>
          <div>
          <form action="#">
           <input className=' relative border border-[#9F9F9F] rounded py-1' type="text" />
           {/* <img  className='absolute top-[69%] right-56' src={bar} alt="icon" /> */}
         </form>
            <div>
              <h1 className='font-poppins font-medium text-2xl mt-8 mb-6'>categories</h1>
              <ol className=''>
                <li className='font-poppins font-normal text-base text-[#9F9F9F] py-4'>Crafts  
                   <span className='m-32'>2</span></li>
                <li className='font-poppins font-normal text-base text-[#9F9F9F] py-4'>Design   
                  <span className='m-32 pr-4'>8</span></li>
                <li className='font-poppins font-normal text-base text-[#9F9F9F] py-4'>Handmade
                   <span className='m-24' >7</span></li>
                <li className='font-poppins font-normal text-base text-[#9F9F9F] py-4'>Interior
                   <span className='m-32'>1</span></li>
                <li className='font-poppins font-normal text-base text-[#9F9F9F] py-4'>Wood   
                    <span className='m-36'>6</span></li>
              </ol>
            </div>
          </div>
          <div className='mt-40'>
            <h1 className='font-poppins font-medium text-2xl'>recent post</h1>
            <div className='flex mt-8 gap-4'>
              <div> <Image loading='lazy'
              cloudName= {images.cloudName}
              publicId= {images.image1.url} /></div>
             <div><p className='font-poppins font-normal text-sm'>Going all-in with <br /> millennial design <br />
             <span className='font-poppins font-normal text-xs text-[#9F9F9F]'>03 Aug 2022</span></p></div>
            </div>
            <div className='flex mt-8'>
              <div> <Image loading='lazy'
              cloudName= {images.cloudName}
              publicId= {images.image2.url} /></div>
             <div><p className='font-poppins font-normal text-sm'>Exploring new ways <br />of decorating<br />
             <span className='font-poppins font-normal text-xs text-[#9F9F9F]'>03 Aug 2022</span></p></div>
            </div>
            <div className='flex mt-8 gap-4'>
              <div> <Image loading='lazy'
              cloudName= {images.cloudName}
              publicId= {images.image3.url} /></div>
             <div><p className='font-poppins font-normal text-sm'>Handmade pieces <br />that took time to make <br />
             <span className='font-poppins font-normal text-xs text-[#9F9F9F]'>03 Aug 2022</span></p></div>
            </div>
            <div className='flex mt-8 gap-4'>
              <div> <Image loading='lazy'
              cloudName= {images.cloudName}
              publicId= {images.image4.url} /></div>
             <div><p className='font-poppins font-normal text-sm'>Modern home in <br /> Milan<br />
              <span className='font-poppins font-normal text-xs text-[#9F9F9F]'>03 Aug 2022</span></p></div>
            </div>
            <div className='flex mt-8 gap-4 mb-4'>
              <div> <Image loading='lazy'
              cloudName= {images.cloudName}
              publicId= {images.image5.url} /></div>
             <div><p className='font-poppins font-normal text-sm'>Colorful office <br /> redesign <br />
             <span className='font-poppins font-normal text-xs text-[#9F9F9F]'>03 Aug 2022</span></p></div>
            </div>
          </div>
        </div>
    </div>

    <div>
      <Pink />
    </div>
    </>
  )
}

export default About