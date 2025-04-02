import React from 'react'

const Footer = () => {
  return (

    <div>
         <div className=' gap-[30px] container lg:container grid grid-cols-1 lg:flex justify-between lg:items-center py-8  '>
        <div className=' w-full lg:w-[50%] '>
        <h1 className='text-[30px] font-semibold  '><span className='text-red-500'>S</span>aharaCart</h1>
        <p className='text-[14px] text-gray-500 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <h1 className='font-semibold'>Company</h1>
            <ul className='text-[14px] text-gray-500 '> <li>Home</li>
           <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li
            ></ul>
        </div>
        <div>
            <h1 className='font-semibold'> Get in touch</h1>
            <p className='text-gray-500 text-[14px]'>+1-234-567-890</p>
            <p className='text-gray-500 text-[14px]'>contact@greatstack.dev</p>
        </div>
    </div>
    <hr />
        <h1 className='text-center items-cwnter gont-semibold text-[15px] py-4'>Copyright 2025 © GreatStack.dev All Right Reserved.</h1>
    </div>
  )
}

export default Footer