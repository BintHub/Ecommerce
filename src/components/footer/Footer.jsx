
import React from 'react';
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const notify = () => toast.success('Correct email !! You have successfully subscribe to our Newsletter', {
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

export const Footer = () => (
  <>
  <hr />
  <div className='flex flex-wrap flex-row items-center justify-center gap-28 max-h-full py-10'>
    <div>
    <h1 className='font-poppins font-bold text-2xl -mt-14'>Funiro.</h1>
    <p className='font-poppins font-normal text-base text-[#9F9F9F] mt-10'>400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA</p>
    </div>
    <div className=''> 
      <h1 className='font-poppins font-medium text-base text-[#9F9F9F]'>Links</h1>
      <ol className='mt-8'>
        <li className='flex flex-col gap-4'>
           <Link className='text-black text-base font-medium font-poppines' to="/home">Home</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/shop">Shop</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/about"> About</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/contact">Contact</Link>
        </li>
      </ol>
    </div>
    <div className='-mt-8'>
      <h1 className='font-poppins font-medium text-base text-[#9F9F9F]'>Helps</h1>
      <ol className='mt-10'>
        <li className='flex flex-col gap-4'>
           <Link className='text-black text-base font-medium font-poppines' to="/">Payment Options</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/">Returns</Link>
           <Link className='text-black text-base font-medium font-poppines' to="/"> Privacy Policies</Link>
        </li>
      </ol>
    </div>
   
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);


        axios.get('http://localhost:8000/Users/'+values.email)
        .then(reps=> {
          console.log(reps.data);
          if(reps.data.password === values.password) {
                 setUser({isLoggedIn:true,data: {email: values.email,role: reps.data.role}})
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
        <Form className=' relative flex flex-row gap-2' >
        <div>
        <h1 className=' absolute -top-20 left-1 font-poppins font-medium text-base text-[#9F9F9F]'>Newsletter</h1>
        </div>
         <Field className=' text-[#9F9F9F] border-b-2 border-[#9F9F9F]' name="email" type="email"
         placeholder='Enter Your Email Address'
         />
         {errors.email && touched.email ? <div className='text-red-600 text-[12px] '>{errors.email}</div> : null}
         <button className='font-poppins text-sm font-medium text-black border-b-2 border-black'type="submit"  onClick={notify}>SUBSCRIBE</button>
        </Form>
      )}
    </Formik>
    <ToastContainer />
  </div>
  <hr />
    <div  className=''>
    <p className='font-poppins font-normal text-base py-4 ml-12'>2023 furino. All rights reverved</p>
    </div>
  </>
);


export default Footer