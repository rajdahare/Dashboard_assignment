import React from 'react'
import { BsClipboardCheck } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";

function Leftbar() {
    return (
        <div className="temp w-[30%] h-auto border-1 flex flex-col gap-5 py-7 items-center bg-blue-100 rounded-md">
            <div>
                <img className='w-[120px] h-[120px] m-auto' src="images/j14up69f.png" alt="logo" />
                <h1 className='font-bold m-auto text-center text-blue-600 whitespace-nowrap'>Your Result!</h1>
                <p className='text-sm text-gray-500'>All your insights & details in one place</p>
            </div>
            <div className="sec bg-white w-auto p-2 rounded-md">
                <div className="one bg-blue-100 flex justify-between gap-1 p-2 rounded-sm">
                    <BsClipboardCheck className='h-auto w-10 rounded-sm p-1 bg-blue-300' />
                    <div className='mr-10 ml-1'>
                        <p className='bg-blue-500 text-[10px] rounded-lg px-1'>YOU'VE PASSED</p>
                        <h1 className='font-bold'>132/240</h1>
                    </div>
                    <div className='flex flex-col'>
                        <button className='bg-green-500 p-1 rounded-sm text-[12px]'>76%</button>
                        <p className='text-[10px]'>ACCURACY</p>
                    </div>
                </div>

                <div className="third bg-white w-auto pt-2 rounded-md">
                    <div className="one bg-blue-100 flex gap-5 p-2 rounded-sm">
                        <img className='h-auto w-10 rounded-sm p-1 bg-blue-300' src="images/image.png" alt="" />
                        <div className='mr-10 ml-0'>
                            <p className='text-[10px] rounded-lg  text-blue-500'>Top Score</p>
                            <h1 className='font-bold'>230/240</h1>
                        </div>
                    </div>
                    <hr className='border-b-1 border-blue-300 my-1' />
                    <div className='flex justify-between'>
                        <div className='flex '>
                            <p className='text-blue-300 text-[12px]'>By:</p>
                            <p className='text-[12px]'>By Parth Akotkar</p>
                        </div>
                        <button className='bg-green-500 px-1 rounded-lg text-[10px]'>92% ACCURACY</button>
                    </div>
                </div>
                <div className='mt-2'>
                    <h1 className='font-bold'>Improve your Marks</h1>
                    <p className='text-gray-500 text-[12px]'>Improve your score by practicing more</p>
                </div>
                <button className='bg-blue-800 w-full text-center text-white rounded-sm p-1 mt-5'>Practice More</button>
            </div>
            
            <div className="sec bg-white w-auto p-2 rounded-md">
                <div className='mt-2 w-auto'>
                    <h1 className='font-bold'>Revisite Paper</h1>
                    <p className='text-gray-500 text-[12px]'>Challange your friends by simply sharing link</p> 
                    <p className='text-gray-500 text-[12px]'> to this test</p>
                </div>
                <button className='bg-blue-800 w-[70%] m-auto flex items-center justify-center text-center text-white rounded-sm p-1 mt-5'>Visit</button>
                <div className='mt-4 flex gap-2'>
                    <BsExclamationCircle />
                    <div className='flex flex-col'>
                    <p className='text-gray-500 text-[12px]'>Instruction for how to uploade your </p>
                    <p className='text-gray-500 text-[12px]'>handwritten material in given </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar