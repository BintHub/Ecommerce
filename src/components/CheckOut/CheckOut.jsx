import React from 'react'
import { Image } from 'cloudinary-react';
import { useState } from 'react';
import logo from '../../assets/Mlogo.svg'
import arrow from '../../assets/arrow.svg'
import bullet from '../../assets/bullet.svg'
import Pink from '../pink/Pink';

const CheckOut = () => {
   
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [company,  setCompany] = useState("");
    let [country, setCountry] = useState("");
    let [street, setStreet] = useState("");
    let [city,setCity] = useState("");
    let [province, setProvince] = useState("");
    let [zipcode, setZipcode] = useState("");
    let [Phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    function handleSubmit(e) {
      e.preventDefault();
      let obj = {firstName,lastName,company,country,street,city,province,zipcode,Phone,email};
      let formData = new FormData();
          formData.append('company',company);
          formData.append('country',country);
          formData.append('street',street);
          formData.append('city',city);
          formData.append('province',province);
          formData.append('zipcode',zipcode);
          formData.append('phone',Phone);
          formData.append('password',password);
          formData.append('email',email);
      console.log('form submited', JSON.stringify(formData))
    }
  return (
    <>
       <div className='relative h-[316px] flex items-center justify-center flex-col mb-10'>
      <Image className='absolute top-8 left-0 h-[316px]' loading='lazy' cloudName="ddml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1726620703/Rectangle_1_b0r2gh.png"
      />
      {/* overlay */}
       <div className='flex items-center justify-center flex-col gap-2'>
         <div>
         <img className='ml-14' src= {logo} alt="" />
         <h1 className='font-poppins font-medium text-4xl ml-6'>Checkout</h1>
       </div>
       <div className='flex pl-4'>
         <button className='font-poppins font-medium text-base'>Home</button>
         <img src= {arrow} alt="" />
         <button className='font-poppins font-light text-base'>blog</button>
       </div>
     </div>
  </div>
  {/* form */}
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
     <div className='w-[608px]'>
      <h1 className='font-poppins font-semibold text-4xl ml-36 py-6'>Billing details</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-6 items-center justify-center">
        <div className='flex flex-row gap-6 items-center justify-center '>
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="px-3 border border-1 w-36 py-2"
            type="firstName"
            name="firstName"
            id="fisrtName"
          />
        </fieldset>
        <fieldset className="flex  flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="lastName">Last Name</label>
          <input
           value={lastName}
           onChange={(e) => setLastName(e.target.value)}
            className="px-3 border border-1 w-36 py-2 "
            type="lastName"
            name="lastName"
            id="lastName"
          />
        </fieldset>
        </div>
        <div className='w-2/4'>
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="companyName">Company Name (Optional)</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="px-3 border border-1 py-2 mb-4 "
            type="company"
            name="company"
            id="company"
          />
        </fieldset>
        {/* dropdown of countries */}
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="country">Country / Region</label>
          <select id ="country"  className="px-3 border border-1 py-2 mb-4">
            <option selected>Sri lanka </option>
            <option selected>Nigeria </option>
            <option selected>Canada</option>
            <option selected>Australia</option>
            </select> 
            <input value={country}onChange={(e) => setCountry(e.target.value)} />
        </fieldset>
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="street">Street address</label>
          <input
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="px-3 border border-1 py-2 mb-4"
            type="street"
            name="street"
            id="street"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="city">Town / City</label>
          <input
           value={city}
           onChange={(e) => setCity(e.target.value)}
            className="px-3 border border-1 py-2 mb-4"
            type="city"
            name="city"
            id="city"
          />
        </fieldset>
        <fieldset className="flex  flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="province">Province </label>
          <select id ="province" className="px-3 border border-1 py-2 mb- ">
            <option selected>Western Province </option>
            <option selected>Eastern Province</option>
            <option selected>Southern Province </option>
            <option selected>Northern Province</option>
            </select> 
            <input value={province} onChange={(e) => setProvince(e.target.value)}/>
        </fieldset>
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="zipcode">ZIP code</label>
          <input
           value={zipcode}
           onChange={(e) => setZipcode(e.target.value)}
            className="px-3 border border-1 py-2 mb-4"
            type="zipcode"
            name="zipcode"
            id="zipcode"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="Phone">Phone</label>
          <input
           value={Phone}
           onChange={(e) => setPhone(e.target.value)}
            className="px-3 border border-1 py-2 mb-4"
            type="Phone"
            name="Phone"
            id="Phone"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <label htmlFor="email">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 border border-1 py-2 mb-10"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 font-poppins font-medium text-base">
          <input
            className="px-3 border border-1 py-2 "
            type="info"
            name="info"
            id="info"
            placeholder="Additional information"
          />
        </fieldset>
        </div>
        </form>
      </div>
    <div className='w-[533px] h-[789px] m-10 sm:mt-4  md:-ml-10 md:w-[550px] lg:w-[533px] my-10'>
        <h1 className='font-poppins text-2xl font-medium mt-10 md:ml-9'>Product 
          <span className='font-poppins text-base font-medium  ml-44 '>Subtotal</span></h1>

        <p  className='font-poppins text-base font-normal ml-4 text-[#9F9F9F]'>Asgaard sofa x 1
          <span className='font-poppins text-base font-light  text-black ml-40'>Rs. 250,000.00</span></p>

        <p  className='font-poppins text-base font-normal ml-4'>Subtotal
          <span className='font-poppins text-base font-light  text-black ml-52'>Rs. 250,000.00</span></p>

        <p  className='font-poppins text-base font-normal ml-4'>Total
          <span className='text-primary font-poppins text-xl font-bolds ml-52'>Rs. 250,000.00</span></p>
         
          <hr />
          <h2  className=' flex gap-3 my-4 font-poppins text-base font-normal'><img src={bullet} alt="" />Direct Bank Transfer</h2>
          <p className='font-poppins text-base font-light text-[#9F9F9F]'>Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account.</p>

        <div className='my-4'>
          <div className='flex items-center mb-2 gap-3'>
          <input type="radio" name="transfer" id="tranfer" />
          <label htmlFor="" className='text-[#9F9F9F]'>Direct Bank Transfer</label>
          </div>
          <div className='flex items-center gap-3'>
          <input type="radio" name="cash" id="cash" />
          <label htmlFor="" className='text-[#9F9F9F]'>Cash On Delivery</label>
          </div>
        </div>

          <p className='font-poppins text-base font-light'>Your personal data will be used to support your experience <br /> throughout this website, to manage access to your account, and <br />for other purposes described in our <strong>privacy policy.</strong></p>
         <div className='text-center'>

          <button className='font-poppins font-normal text-black text-xl border border-black py-3 px-16 mt-7 rounded-xl m-2 type="submit"'>
         Place order &nbsp;a</button>
         </div>
    </div>
  </div>
  <div className='mt-16'> 
      <Pink/>
    </div>
  </>
  )
}

export default CheckOut