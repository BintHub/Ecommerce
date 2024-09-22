import React from 'react'
import { Image } from 'cloudinary-react';
import logo from '../../assets/Mlogo.svg'
import arrow from '../../assets/arrow.svg'
import rating from '../../assets/rating.svg'
import Pink from '../pink/Pink';

const Comparison = () => {
  return (
    <>
     <div className='relative h-[316px] flex items-center justify-center flex-col mb-20'>
      <Image className='absolute top-8 left-0 h-[316px]' loading='lazy' cloudName="ddml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1726620703/Rectangle_1_b0r2gh.png"
      />
      {/* overlay */}
       <div className='flex items-center justify-center flex-col gap-2'>
         <div>
       <img className='ml-[8rem]' src= {logo} alt="" />
       <h1 className='font-poppins font-medium text-4xl'>Product Comparison</h1>
     </div>
     <div className='flex pl-4'>
       <button className='font-poppins font-medium text-base'>Home</button>
       <img src= {arrow} alt="" />
       <button className='font-poppins font-light text-base'>blog</button>
     </div>
    </div>
   </div>
   <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ml-20'>
     <div>
     <div className='mb-[7.3rem] m-10'>
        <h1 className='font-poppins font-medium text-2xl '>Go to Product <br /> page for more <br /> Products</h1>
        <button className='font-poppins font-medium text-xl text-[#9F9F9F]  border-b-4'>View more</button>
     </div>
     <hr />
     <div className=' flex flex-col space-y-4 font-poppins font-normal text-xl mt-10 m-10'>
      <h2 className='font-poppins font-medium text-3xl'>General</h2>
      <p>Sales Package</p>
      <p>Model Number</p>
      <p>Secondary Material</p>
      <p>Configuration</p>
      <p>Upholstery Material</p>
      <p>Upholstery Color</p>
     </div>

     <div  className='flex flex-col space-y-4 font-poppins font-normal text-xl m-10'>
      <h2 className='font-poppins font-medium text-3xl'>Product </h2>
      <p >Filling Material</p>
      <p >Finish Type</p>
      <p >Adjustable Headrest</p>
      <p >Maximum Load  <br />Capacity</p>
      <p >Origin of Manufacture</p>
      </div>

     <div  className='flex flex-col space-y-4 font-poppins font-normal text-xl m-10'> 
      <h2 className='font-poppins font-medium text-3xl'>Dimensions</h2>
      <p>Width</p>
      <p>Height</p>
      <p>Depth</p>
      <p>Weight</p>
      <p>Seat Height</p>
      <p>Leg Height</p>
      </div>

      <div  className='flex flex-col space-y-20 font-poppins font-normal text-xl m-10'>
      <h2 className='font-poppins font-medium text-3xl'>Warrnty</h2>
      <p>Warranty Summary</p>
      <p>Warranty Service 
      Type</p>
      <p>Covered in Warranty</p>
      <p>Not Covered in Warranty</p>
      <p>Domestic Warranty</p>
      </div>
     </div>

     <div>
       <div className='bg-secondary w-[271px] h-[160px] py-3 rounded-md'>
        <Image loading='lazy' cloudName="ddml48ptj8" 
         publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1726980988/Asgaard_sofa_3_auwo9h.png">
        </Image>
       </div>
       <div className='font-poppins font-normal text-xl mb-10'>
        <h2>Asgaard Sofa</h2>
        <p>Rs. 250,000.00</p>
        <div className='flex '>
        <p>4.7</p>
        <img src={rating} alt="star" />
        <p>145 Reviews</p>
       </div>
       </div>
        <hr />
       <div  className='flex flex-col space-y-4 font-poppins font-normal text-xl mt-20 m-10'>
        <p>1 Sectional sofa</p>
        <p>TFCBLIGRBL6SRHS</p>
        <p>Solid Wood</p>
        <p>L-shaped</p>
        <p>Fabric + Cotton</p>
        <p>Bright Grey & Lion</p>
       </div>

       <div className='flex flex-col space-y-4 font-poppins font-normal text-xl m-10 mt-24'>
        <p>Foam</p>
        <p>Bright grey & lion</p>
        <p>No</p>
        <p>280kg</p>
        <p>India</p>
       </div>

       <div  className='flex flex-col space-y-4 font-poppins font-normal text-xl m-10 mt-32'>
        <p>265.32 cm</p>
        <p>76 cm</p>
        <p>167.76 cm</p>
        <p>65 KG</p>
        <p>41.52 cm</p>
        <p>5.46 cm</p>
       </div>

       <div  className='flex flex-col space-y-5 font-poppins font-normal text-xl m-10 mt-20'>
        <p>1 Year Manufacturing <br /> Warranty</p>
        <p>For Warranty Claims or  <br />Any Product Related  <br />Issues Please Email at <br />operations@trevifurnitu <br />re.com</p>
        <p>Warranty Against <br /> Manufacturing Defect</p>
        <p>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of  <br />Product Usage.</p>
        <p>1 year</p>
        </div>

        <button className='h-12 w-60 border mb-16 bg-primary font-normal text-xl px-2 text-white'>Add to Cart</button>
     </div>

     <div>
      <div className='bg-secondary w-[271px] h-[160px] rounded-md'>
      <Image loading='lazy' cloudName="ddml48ptj8" 
       publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/c_crop,w_271,h_160,g_auto/v1726985030/Outdoor_sofa_set_1_1_a4qgyr.png">
      </Image>
      </div>
      <div className='font-poppins font-normal text-xl mb-10 '>
        <h2>Outdoor Sofa Set</h2>
        <p>Rs. 224,000.00</p>
        <div className='flex'>
        <p>4.2</p>
        <img src={rating} alt="star" />
        <p>145 Reviews</p>
       </div>
       </div>
       <hr />
       <div  className='flex flex-col space-y-4 font-poppins font-normal text-xl mt-20 m-10'>
        <p>1 Three Seater, 2 Single <br /> Seater</p>
        <p>DTUBLIGRBL568</p>
        <p>Solid Wood</p>
        <p>L-Shaped</p>
        <p>Fabric + Cotton</p>
        <p>Bright Grey & Lion</p>
       </div>
       
       <div  className='flex flex-col space-y-4 font-poppins font-normal text-xl m-10 mt-[4rem]'>
        <p>Matte</p>
        <p>Bright Grey & Lion</p>
        <p>Yes</p>
        <p>300kg</p>
        <p>India</p>
       </div>

       <div  className='flex flex-col space-y-4 font-poppins font-normal text-xl m-10 mt-32'>
        <p>265.32 cm</p>
        <p>76 cm</p>
        <p>167.76 cm</p>
        <p>65 KG</p>
        <p>41.52 cm</p>
        <p>5.46 cm</p>
       </div>

       <div  className='flex flex-col space-y-4 font-poppins font-normal text-xl m-10 mt-20'>
        <p></p>
        <p>1.2 Year Manufacturing <br /> Warranty</p>
        <p>For Warranty Claims or <br />Any Product Related <br /> Issues Please Email at <br /> support@xyz.com</p>
        <p>Warranty of the product <br /> is limited to manufacturing <br />defects only.</p>
        <p>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</p>
        <p>3 Months</p>
       </div>

       <button className='h-12 w-60 border mb-16 bg-primary font-normal text-xl px-2 text-white'>Add to Cart</button>
     </div>
  
     <div>
       <div>
       <h1  className='font-poppins font-semibold text-2xl'>Add a Product</h1>
        <form >
          <fieldset className="flex flex-col gap-2 font-poppins font-semibold text-base">
           <select id ="product" className="px-3 border border-1 py-2 mb-4 w-48 bg-primary text-white">
            <option selected>Choose a product</option>
            <option selected>Asgaard Sofa </option>
            <option selected>Outdoor Sofa Set</option>
            </select> 
        </fieldset>
        </form>
       </div>
     </div>
   </div>
<div className='mt-16'> 
      <Pink/>
    </div>
</>
  )
}

export default Comparison