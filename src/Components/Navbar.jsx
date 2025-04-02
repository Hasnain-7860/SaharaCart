import React from 'react'
import { IoSearch } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className=''>
        <div className='flex justify-between container items-center text-center py-3'>
            <h1 className='text-[30px] font-semibold '>
                <Link to="/"><span className='text-red-500'>S</span>aharaCart</Link>
            </h1>
                <ul className=' hidden lg:flex gap-10 items-center text-center font-semibold text-gray-500'>
                    <Link to="/"><li>Home</li></Link>
                   <Link to="/Shop"> <li>Shop</li></Link>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li className='border shadow-md  rounded-3xl p-1 px-2 text-[13px] '><button>seller Dashboard</button></li>
                </ul>
                <div className='flex text-center items-center pr-4 gap-4 font-semibold text-gray-500'>
                <IoSearch className='hidden' />
                <LuContact />
                <p>Account</p>
                </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar