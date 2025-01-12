import React from 'react'
import { BsChevronDown } from "react-icons/bs";

function TopBar() {
  return (
    <div className='h-[34%] w-auto p-auto rounded-md flex gap-2'>
        <div className="one flex p-1 gap-2 w-[33%] border-2 rounded-md">
            <BsChevronDown className='w-4 h-4 mt-1 bg-transparent border-1 border-2 ' />
            <p>Compare Accuracy</p>
        </div>
        <div className="one flex p-1 gap-2 w-[33%] border-2 rounded-md">
            <BsChevronDown className='w-4 h-4 mt-1 bg-transparent border-1 border-2 ' />
            <p>Compare Accuracy</p>
        </div>
        <div className="one flex p-1 gap-2 w-[33%] border-2 rounded-md">
            <BsChevronDown className='w-4 h-4 mt-1 bg-transparent border-1 border-2 ' />
            <p>Compare Accuracy</p>
        </div>
    </div>
  )
}

export default TopBar