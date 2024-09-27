import React, { useState,useEffect } from 'react'
import arrow from '../../assets/arrow.svg'
import { useParams } from 'react-router-dom'
import {shopData} from '../pagination/shopData';
import { Image } from "cloudinary-react"
import share from '../../assets/share.svg'
import compare from '../../assets/compare.svg'
import like from '../../assets/like.svg'
import rating from "../../assets/rating.svg"
import purple from "../../assets/purple.svg"
import black from "../../assets/black.svg"
import gold from "../../assets/gold.svg"
import fb from "../../assets/fb.svg"
import linkin from "../../assets/linkin.svg"
import x from "../../assets/twitter.svg"
import {images} from '../../data/product.json';
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  let redir = useNavigate();
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
  let [quantity, setQuantity] =useState(1);
  
  //quantity increment/decrement
  const handleDecrement = () =>{
    if(quantity > 1){
    setQuantity(prevCount => prevCount -1);
  }}
  const handleIncrement = () => {
    if(quantity < 10){
    setQuantity(prevCount => prevCount +1);
  }}
  
     
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
   {/* product to display*/}
   <div>
    <h1 className='hidden'>singleProduct for product id:{id}</h1>
    {
            data && <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
               <div className="flex">
                 <div className="">
                   <div className="m-8 bg-secondary w-[76px] h-[80px] rounded-md py-4">
                   <Image className='w-[74px] h-[44px]' loading='lazy' cloudName= {data.cloudName} publicId= {data.img}/>
                   </div>
                   <div className="m-8 bg-secondary w-[76px] h-[80px] rounded-md py-4">
                   <Image className='w-[74px] h-[44px]' loading='lazy' cloudName= {data.cloudName} publicId= {data.img}/>
                   </div>
                   <div className="m-8 bg-secondary w-[76px] h-[80px] rounded-md py-4">
                    <Image className='w-[74px] h-[44px]' loading='lazy' cloudName= {data.cloudName} publicId= {data.img}/>
                   </div>
                   <div className="m-8 bg-secondary w-[76px] h-[80px] rounded-md py-4">
                   <Image className='w-[74px] h-[44px]' loading='lazy' cloudName= {data.cloudName} publicId= {data.img}/>
                   </div>
                 </div>
                 <div className="mt-8 md:w-[423px] h-[500px]" >
                 <Image className='w-[423px] h-[500px]' loading='lazy' cloudName= {data.cloudName} publicId= {data.img}/>
                 </div>
               </div>
               <div className="mt-6 ml-10">
          <h1 className="font-poppins text-[42px] font-normal">{data.name}</h1>
          <p className="font-poppins text-2xl font-medium text-[#9F9F9F]">{data.price}</p>
          <div className=" flex my-4">
            <img src={rating} alt="rating star" />
            <p className="font-poppins text-sm font-normal text-[#9F9F9F]">5 Customer Review</p>
          </div>
          <p className="font-poppins text-sm font-normal text-[#9F9F9F] mb-4">Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a <br /> sound.</p>
          <div>
            <p className="font-poppins text-sm font-normal text-[#9F9F9F]">size</p>
            <div className="-mt-4 mb-2">
              <button  className='font-poppins font-normal text-black text-sm border border-black py-1 px-2 mt-7 rounded-sm m-2 bg-secondary hover:bg-primary'>L</button>
              <button  className='font-poppins font-normal text-black text-sm border border-black py-1 px-2 mt-7 rounded-sm m-2  bg-secondary hover:bg-primary'>XL</button>
              <button  className='font-poppins font-normal text-black text-sm border border-black py-1 px-2 mt-7 rounded-sm m-2  bg-secondary hover:bg-primary'>XS</button>
            </div>
          </div>
          <div>
            <p className="font-poppins text-sm font-normal text-[#9F9F9F] mb-4">color</p>
            <div className="flex gap-4">
              <img src={purple} alt="purple" />
              <img src={black} alt="dark" />
              <img src={gold} alt="gold" />
            </div>
          </div>
          <div className="flex mb-10">
            <div className=" flex gap-5 font-poppins text-black text-sm border border-black  px-6 mt-7 rounded-md m-2 md:w-20  md:px-2  lg:w-28 lg:px-6 ">
             <button onClick={handleDecrement} className="">-</button>
             <div className="text-center mt-8 md:mt-3">{quantity}</div>
             <button onClick={handleIncrement}className="">+</button>
            </div>
            <button onClick={()=>redir('/cart/')}  className='font-poppins font-normal text-black text-sm border border-black py-3 px-8 mt-7 rounded-md m-2'>Add to cart</button>
            <button onClick={()=>redir('/comparison/')} className='font-poppins font-normal text-black text-sm border border-black py-3 px-8 mt-7 rounded-md m-2'> + Compare</button>
          </div>
          <hr />
          <div className="mt-6">
            <p className="font-poppins text-base font-normal text-[#9F9F9F] mb-4">
              SKU<span className="pl-8">:SS001</span>
            </p>
            <p className="font-poppins text-base font-normal text-[#9F9F9F] mb-4">
              Category<span className="pl-2">:Sofas</span>
            </p>
            <p className="font-poppins text-base font-normal text-[#9F9F9F] mb-4">
              Tags<span className="pl-10">:Sofa,Chair,Home,Shop</span>
            </p>
            <p className="font-poppins text-base font-normal text-[#9F9F9F] mb-4">
              Share<span className="flex flex-row gap-4 ml-10 -mt-6 pl-8">:<img src={fb} alt="" /><img src={linkin} alt="" /><img src={x} alt="" />
              </span>
            </p>
          </div>
        </div>
            </div>
        }
      </div>
   <hr />
   <div>
     <div className='flex flex-wrap flex-row text-center justify-center mt-8 mb-6 gap-8'>
      <button className='font-poppins font-medium text-black text-2xl'>Description</button>
      <button className='font-poppins font-medium text-[#9F9F9F] text-2xl'>Additional Information</button>
      <button className='font-poppins font-medium text-[#9F9F9F] text-2xl'>Reviews [5]</button>
     </div>
     <div className='p-10  lg:mx-56 '>
      <div>
       <p className='font-poppins text-base font-normal text-[#9F9F9F] '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br />sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      </div>
      <div className='mt-6'>
       <p className='font-poppins text-base font-normal text-[#9F9F9F] '>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4'>
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
     <div className="items-center p-6 justify-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
       {  
        shop.filter((each,i)=> (i>0) && (i<= showing)).map((each,i)=>(
        <div key={each.id} className="relative w-full group" > 
         <Image className='relative w-full mx-auto md:w-[285px] h-[301px]' loading='lazy' cloudName="dml48ptj8" publicId={each.img}  />
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
           <div className='font-poppins bg-[#F4F5F7] pl-4 py-2 mb-6 md:w-[285px] lg:ml-3 md:ml-[3rem]'>
             <div className='absolute text-white h-12 w-12 top-4 right-5 bg-[#E97171] rounded-full font-poppins font-medium text-base text-center py-3 md:right-20 lg:right-10'>{each.discount}</div>
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