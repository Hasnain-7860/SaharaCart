import React from 'react'

const Subscribe = () => {
  return (
    <div>
    <div className='flex flex-col items-center text-center gap-14 py-8 container mt-[5%]'>
        <div>
            <h1 className='text-[30px] font-semibold'>Subscribe now & get 20% off</h1>
            <p className='font-semibold text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div>
            <div className='flex  w-[40vw] h-[55px] border rounded-lg '>
            <input className='w-[32vw] h-[50px] outline-none pl-3 font-semibold' type="text" placeholder='Enter your email id' />
            <button className=' w-[22vw] lg:w-[8vw] bg-orange-500 text-white font-semibold'>Subscribe</button>
            </div>
        </div>
    </div>
   

    </div>
  )
}

export default Subscribe