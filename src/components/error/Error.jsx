import React from 'react'
import {useNavigate } from 'react-router-dom'


const Error = () => {
    let redir = useNavigate();
  return (
    <div className='flex h-[80vh] flex-col gap-4 items-center justify-center ' >
        <h2 className='text-red-500' >Oopps {'(-)'}. Invalid page route </h2>
        <button onClick={()=> redir('/*')} >Please click Home</button>
    </div>
  )
}

export default Error