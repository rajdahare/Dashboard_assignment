import React from 'react'
import { BsBell } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

function Navbar() {
  return (
    <div className="hero bg-gray-800 text-white flex justify-evenly ">
        <div className="logo">
            <img className='cursor-pointer' src="images/logo.png" alt="logo" />
        </div>
        <div className="mid list-none flex justify-evenly gap-6 items-center">
            <li className='flex gap-1 items-center cursor-pointer'><AiOutlineHome />Dashboard</li>
            <li className='flex gap-1 items-center cursor-pointer'><BsStars />FirstGuru</li>
            <li className='flex gap-1 items-center cursor-pointer'><MdOutlineMapsHomeWork />TownHall</li>
            <li className='flex gap-1 items-center cursor-pointer'><AiOutlineThunderbolt />AI Evalution</li>
            <li className='flex gap-1 items-center cursor-pointer'><BsGraphUp />Performance</li>
            <li className='flex gap-1 items-center cursor-pointer'><RiPagesLine />Mock Test</li>
        </div>
        <BsBell className='mt-5 cursor-pointer'/>
        <div className="end bg-black flex justify-between gap-2 items-center m-4 p-3 h-6 rounded-sm">
            <button className='bg-orange-200 px-1 w-4 h-5 rounded-sm'>P</button>
            <p className='cursor-pointer'>Profile</p>
            <BsChevronDown className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar