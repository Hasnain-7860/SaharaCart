import React, { useRef } from 'react'
import { GoDotFill } from "react-icons/go";
import './Slider.css'
import { FaArrowRightLong } from "react-icons/fa6";
import headphone from '../assets/headphone.webp'


const Slider = () => {
    const slider =useRef();
    let tx=0;
    const slideBackward =()=>{
        if(tx<0){
            tx +=100}
            slider.current.style.transform =  `translateX(${tx}%)`;
        };
        const slideForward =()=>{
            if(tx>-100){
                tx -=100
            }
            slider.current.style.transform =`translateX(${tx}%)`;
        };
        const slideForwardd =()=>{
            if(tx>-100){
                tx -=100
            }
            slider.current.style.transform =`translateX(${tx}%)`;
        }
  return (
    <div className='container   '>
    <div id='over' ref={slider} className=' flex    rounded-lg mt-2 '>
       <div className='grid grid-cols-1 py-1    bg-gray-200 items-center  py-5 rounded-md  lg:grid-cols-2'>
        <div className='    lg:w-[40%] container'>
            <h1 className='text-red-500'> Limited Time Offer 30% Off</h1>
            <h1 className=' text-[20px] lg:text-[45px] '>Experience Pure Sound - Your Perfect Headphones Awaits!</h1>
            <div className='flex gap-5'>
            <button className='bg-red-500 text-white font-semibold p-3 px-10 rounded-3xl'>Buy now</button>
            <button className='flex items-center text-center gap-3 font-semibold'>Find more <FaArrowRightLong /></button>
            </div>


        </div>
        <div className=''>
            <img className='w-[40%]' src={headphone} alt="" />
        </div>
       </div>
      
     
       

       

       
       
       {/* <h1>dsfkjhdfdsfioefmnc </h1> */}
       
        {/* <img  src={img1} alt="" />
        <img  class src={img2} alt="" /> */}
    </div>
    <div className='flex justify-center items-center gap-1 '>
    <GoDotFill onClick={slideBackward} className='text-center' />
    <GoDotFill onClick={slideForward}  />
    <GoDotFill onClick={slideForwardd}  />
    </div>
</div>
  )
}

export default Slider