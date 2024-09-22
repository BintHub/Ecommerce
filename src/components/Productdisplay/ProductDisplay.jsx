import React from "react";
import { Image } from "cloudinary-react";
import { shopData } from "../pagination/shopData";
import rating from "../../assets/rating.svg";
import purple from "../../assets/purple.svg";
import black from "../../assets/black.svg";
import gold from "../../assets/gold.svg";
import fb from "../../assets/fb.svg";
import linkin from "../../assets/linkin.svg";
import x from "../../assets/twitter.svg";
import { images } from "../../data/product.json";

const ProductDisplay = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex">
          <div className="">
            <div className="m-8 bg-secondary w-[76px] h-[80px] rounded-md py-2">
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image10.url}
              />
            </div>
            <div className="m-8 bg-secondary w-[76px] h-[80px] rounded-md">
              {" "}
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image11.url}
              />
            </div>
            <div className="m-8 bg-secondary w-[76px] h-[80px] rounded-md">
              {" "}
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image12.url}
              />
            </div>
            <div className="m-8 bg-secondary w-[76px] h-[80px] rounded-md py-4">
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image13.url}
              />
            </div>
          </div>
          <div className="mt-8" >
            <Image
              loading="lazy"
              cloudName={images.cloudName}
              publicId={images.image9.url}
            />
          </div>
        </div>
        <div className="mt-6">
          <h1 className="font-poppins text-[42px] font-normal">Asgaard sofa</h1>
          <p className="font-poppins text-2xl font-medium text-[#9F9F9F]">Rs. 250,000.00</p>
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
          <div className="mb-10">
            <button  className='font-poppins font-normal text-black text-sm border border-black py-3 px-8 mt-7 rounded-md m-2'>-  1  +</button>
            <button  className='font-poppins font-normal text-black text-sm border border-black py-3 px-8 mt-7 rounded-md m-2'>Add to cart</button>
            <button  className='font-poppins font-normal text-black text-sm border border-black py-3 px-8 mt-7 rounded-md m-2'> + compare</button>
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
    </>
  );
};

export default ProductDisplay;
