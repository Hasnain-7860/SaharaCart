import React from 'react'
import { PopularData } from '..'
import { data } from 'react-router-dom'

const Popular = () => {
  return (
    <div className='container'>
        <div className='text-[25px] font-semibold py-7'>
            <h1>Popular products</h1>
        </div>
        <div className=' gap-6 grid grid-cols-2 lg:gap-28 lg:grid-cols-5  '>
            {PopularData.map((data)=>(
                <div key={data.id}>
                    <div className='cursor-pointer'>
                        <div className='bg-gray-300 rounded-md hover:bg-white  '>
                        <img className="" src={data.img} alt="" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <h1 className='font-semibold'>{data.name}</h1>
                            <p className='hidden lg:flex text-[12px] text-gray-500'>{data.text}</p>
                            <div>
                                <p>{data.rate}</p>
                            </div>
                            <div className='flex justify-between py-3'>
                            <h1>{data.price}</h1>
                            <button className=' hidden lg:flex border rounded-2xl p-1 px-4 text-[12px]'>{data.buy}</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='text-center py-3'>
            <button className='border p-2 px-10 rounded-sm font-semibold text-gray-400 text-black hover:bg-gray-300 hover:text-white'>See more</button>
        </div>
    </div>
  )
}

export default Popular