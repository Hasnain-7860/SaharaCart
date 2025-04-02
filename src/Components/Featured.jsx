import React from 'react'
import { FeaturedData } from '..'
import speaker from '../assets/speaker.webp'
import game2 from '../assets/game2.webp'
import phone from '../assets/phone.webp'



const Featured = () => {
  return (
    <div className='container'>
        <div className='text-center items-center '>
            <h1 className='text-[35px] font-semibold '>Featured Products</h1>
            <hr className='w-[10%]   ' />
        </div>
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-14 py-5'>
                {FeaturedData.map((data)=>(
                    <div key={data.id}>
                        <div>
                            <img src={data.bg} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='grid grid-cols-1 lg:flex justify-between bg-gray-300   text-center mt-10 rounded-md'>
            <div>
                <img className='  items-center lg:w-[15vw]' src={speaker} alt="" />
            </div>
            <div className='w-full flex flex-col container lg:flex lg:w-[15vw] lg:flex-col lg:gap-3 lg:text-center items-center justify-center'>
                <h1 className='text-[30px] font-semibold  '>Level Up Your Gaming Experience</h1>
                <p className='text-[12px]'>From immersive sound to precise controls—everything you need to win</p>
                <button className='bg-orange-500 text-white p-2 px-7 '>Buy now</button>

            </div>
            <div>
                <img className='  hidden  lg:flex  w-[19vw] ' src={game2} alt="" />
                <img className='w-full lg:hidden' src={phone} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured