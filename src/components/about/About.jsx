import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
    let redir = useNavigate();
  return (
    <>
    <div className='bg-secondary font-poppins flex h-[80vh] flex-col gap-4 items-center justify-center ' >
        <h2 className='text-red-500' >Oopps {'(-)'}. Invalid page route </h2>
        <button className='border border-b-2 shadow-md' onClick={()=> redir('/blog')} >Go Back to Blog</button>
    </div>
    </>
  )
}

export default About