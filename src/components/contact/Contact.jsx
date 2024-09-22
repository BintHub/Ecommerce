import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import clock from '../../assets/clock.svg'
import logo from '../../assets/Mlogo.svg'
import arrow from '../../assets/arrow.svg'
import Pink from '../pink/Pink';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Required"),
  email: Yup.string().email('Invalid email').required('Required'),
});

const notify = () => toast.success('Correct email !! You have successfully submitted', {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
  });
  const notify2 = () => toast.error('Wrong email,Please confirm!!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });


const Contact = () => {
  return (
    <>
    <div>
     <div className='relative max-w-[full] min-h-[316px] '>
      <Image loading='lazy' cloudName="ddml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1726620703/Rectangle_1_b0r2gh.png">
      </Image>
      {/* overlay */}
       <div className='absolute max-w-full min-h-1/4 top-0 left-0 mt-6 ml-60
        sm:ml-60 sm:mt-10 md:ml-80 lg:ml-[36rem] lg:mt-20'>
         <div className=''>
          <img className='pl-8' src= {logo} alt="" />
          <h1 className='font-poppins font-medium text-4xl'>Contact</h1>
         </div>
         <div className='flex pl-4'>
          <button className='font-poppins font-medium text-base'>Home</button>
          <img src= {arrow} alt="" />
          <button className='font-poppins font-light text-base'>blog</button>
         </div>
       </div>
    </div>
      <div>
        <div className='text-center -mt-28 lg:mt-10'>
        <h1 className='font-poppins font-semibold text-4xl'>Get In Touch With Us</h1>
        <p className='font-poppins font-medium text-base text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-2'>
           <div className='max-w-[393px] min-h-[537px] md:ml-40 md:mt-10 lg:ml-80'>
             <div>
              <img className='' src= {location} alt="icon"/>
              <h1 className='font-poppins text-2xl font-medium pl-10 -mt-4'>Address</h1>
              <p  className='font-poppins text-sm font-normal pl-10'>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</p>
             </div>
             <div>
              <img className='' src= {phone} alt="icon"/>
              <h1 className='font-poppins text-2xl font-medium pl-10 -mt-4'>Phone</h1>
              <p  className='font-poppins text-sm font-normal pl-10'>Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789</p>
             </div>
             <div>
              <img className='' src= {clock} alt="icon"/>
              <h1 className='font-poppins text-2xl font-medium pl-10 -mt-4'>Working Time</h1>
              <p  className='font-poppins text-sm font-normal pl-10'>Monday-Friday: 9:00 - <br />22:00
             <br /> Saturday-Sunday: 9:00 - <br /> 21:00</p>
             </div>
           </div>
        <div className='max-w-[635px] min-h-[500px]'>
           <Formik
      initialValues={{
        fullName:'',
        email: '',
        subject:'',
        message:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        axios.get('http://localhost:8000/Users/'+values.email)
        .then(reps=> {
          console.log(reps.data);
          if(reps.data.password === values.password) {
                 setUser({isLoggedIn:true,data: {email: values.email,fullname: values.fullName,role: reps.data.role}})

                notify()
                setTimeout(() => {
                  redir('/contact')
                  
                }, 3000);
          }else{
            notify2()
         }
        })
        .catch(err=> {
         console.log(err)
        })
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex flex-col gap-3 -mt-40 md:ml:40 md:mt-10'>
         <label className='font-poppins font-medium text-base' htmlFor='fullName'>Your name</label>
         <Field className='w-1/2 text-[#9F9F9F] border rounded border-[#9F9F9F] py-3' name="fullName" type="fullName"
         placeholder='Abc'
         />
         {errors.fullName && touched.fullName ? <div className='text-red-600 text-[12px] '>{errors.fullName}</div> : null}
         <label className='font-poppins font-medium text-base' htmlFor='email'>Email address</label>
         <Field className='w-1/2 text-[#9F9F9F] border rounded border-[#9F9F9F] py-3' name="email" type="email"
         placeholder='Abc@def.com'
         />
         {errors.email && touched.email ? <div className='text-red-600 text-[12px] '>{errors.email}</div> : null}
         <label className='font-poppins font-medium text-base' htmlFor='subject'>Subject</label>
         <Field className='w-1/2 text-[#9F9F9F] border rounded border-[#9F9F9F] py-3' name="subject" type="subject"
         placeholder='This is an optional'
         />
         {errors.subject && touched.subject ? <div className='text-red-600 text-[12px] '>{errors.subject}</div> : null}
         <label  className='font-poppins font-medium text-base'htmlFor='message'>Message</label>
         <Field className='w-1/2 h-20 text-[#9F9F9F] border rounded border-[#9F9F9F] py-3' name="message" type="message"
         placeholder='Hi! i’d like to ask about'
         />
         {errors.message && touched.message ? <div className='text-red-600 text-[12px] '>{errors.message}</div> : null}
         <button className='w-1/4 font-poppins text-sm font-medium rounded text-white bg-primary py-3 px-8 mt-4 'type="submit"  onClick={notify}>Submit</button>
        </Form>
      )}
    </Formik></div>
        </div>
      </div>
    </div>
    <div>
      <Pink />
    </div>
    </>
  )
}

export default Contact