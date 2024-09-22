import React, { useState,useEffect } from 'react'
import arrow from '../../assets/arrow.svg'
import { useParams } from 'react-router-dom'
import {shopData} from '../pagination/shopData';
import { Image } from "cloudinary-react";
import share from '../../assets/share.svg'
import compare from '../../assets/compare.svg'
import like from '../../assets/like.svg'
import ProductDisplay from '../Productdisplay/ProductDisplay';
import {images} from '../../data/product.json'

const SingleProduct = () => {
  let {id} = useParams();
  let [data,setData] =useState(null);
  useEffect(()=> {
      shopData.map(each=> {
        if(each.id == id) {
            setData(each);
       }
      })
    }, [])

  let [shop,setShop]=useState(shopData);
  let [showing,setShowing]=useState(4);
  // const SingleProduct = shopData.find((e)=>e.id ===Number(single));
     
function handleShowing(){
  if(showing <= shopData.length -1){
    setShowing(prev =>prev+4);
  }else{
    setShowing(shopData.length-1)
  }
}
  return (
   <>
    <div className='bg-secondary py-4'>
    <div className='flex'>
        <button className='text-[#9F9F9F] flex font-poppins  text-base font-normal'>
          <h1 className='px-4'>Home</h1>
          <img className='pt-1' src= {arrow} alt="icon"/>
        </button>
        <button className='text-[#9F9F9F] flex font-poppins text-base font-normal'>
          <h1 className='px-4'>Shop</h1>
          <img className='pt-1' src= {arrow} alt="icon"/>
        </button>
      </div>
   </div>
   {/* product to show */}
   <div>singleProduct for product id:{id}
   {/* {
            data && <div>
              <h4> {data.img} </h4>
              <h4> {data.name} </h4>
              <h4> {data.price} </h4>
              <h4> {data.disc} </h4>
            </div>
        } */}

  <ProductDisplay SingleProduct={SingleProduct}/>
     </div> 

   <hr />
   <div>
     <div className='flex flex-wrap flex-row text-center justify-center mt-8 mb-6 gap-8'>
      <button className='font-poppins font-medium text-black text-2xl'>Description</button>
      <button className='font-poppins font-medium text-[#9F9F9F] text-2xl'>Additional Information</button>
      <button className='font-poppins font-medium text-[#9F9F9F] text-2xl'>Reviews [5]</button>
     </div>
     <div className='mx-56 '>
      <div>
       <p className='font-poppins text-base font-normal text-[#9F9F9F] '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br />sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      </div>
      <div className='mt-6'>
       <p className='font-poppins text-base font-normal text-[#9F9F9F] '>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-16'>
        <div className='bg-secondary m-4 rounded-md'>  
         <Image loading='lazy'
         cloudName= {images.cloudName}
         publicId= {images.image14.url} /></div>
     <div className='bg-secondary rounded-md'>
         <Image loading='lazy'
         cloudName= {images.cloudName}
         publicId= {images.image15.url} /></div>
    </div>
   </div> 

   <hr />
   <div>
     <div className='text-center mt-10 mb-6'>
       <h2 className='font-poppins font-medium text-black text-4xl'>Related Products</h2>
     </div>
     <div className=" items-center justify-center grid grid-cols-4 gap-8">
       {  
        shop.filter((each,i)=> (i>0) && (i<= showing)).map((each,i)=>(
        <div key={each.id} className="relative ml-4 group" > 
         <Image className='relative w-[285px] h-[301px]' loading='lazy' cloudName="dml48ptj8" publicId={each.img}  />
         <div className='group-hover:flex flex-col hidden absolute left-0 top-0 w-full h-[62vh] bg-[#3A3A3A] bg-opacity-50' >
         <div className='text-center mt-28'>
          <button className='font-poppins font-semibold text-primary text-base bg-white py-3 px-8'>Add to cart</ button>
          </div>
          <div className='flex flex-row gap-4 py-6 ml-10'>
            <div>
            <button className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {share} alt="icon"/> Share</button>
            </div>
            <div>
            <button onClick={()=>redir('/product/'+each.id)} className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {compare} alt="icon"/>Compare</button>
            </div>
            <div>
            <button className='text-white flex font-poppins font-semibold'><img className='pt-1' src= {like} alt="icon"/>Like</button>
            </div>
         </div>
        </div>
           <div className='font-poppins bg-[#F4F5F7] pl-4 py-2 w-[285px]'>
             <div className='absolute text-white h-12 w-12 top-4 right-5 bg-[#E97171] rounded-full font-poppins font-medium text-base text-center py-3'>{each.discount}</div>
             <h1 className='text-tertiary  text-2xl font-semibold'>{each.name}</h1>
             <p className='text-[#898989] text-base font-medium'>{each.disc}</p>
             <p className='text-tertiary  font-semibold text-xl'>{each.price}
               <span className='text-[#B0B0B0] font-normal text-base px-2 line-through'>{each.oldPrice}</span></p>
            </div>
        </div>
      ))
     }
    </div>
    <div className=' text-center'>
  <button onClick={()=>handleShowing()} className='h-12 w-60 border mb-16 mt-10 border-primary font-semibold text-base text-primary px-2'>
    Show More</button></div> 
  </div> 
   </>
  )
}

export default SingleProduct