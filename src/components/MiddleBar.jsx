import React from 'react'
import { BsArrowUp } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { TfiTimer } from "react-icons/tfi";
import { BsStars } from "react-icons/bs";

function MiddleBar() {
    return (
        <>
            <div className="tab flex gap-1 mt-1">
                <div className='p-1 gap-2  border-2 rounded-md w-[25%]'>
                    <p className='text-gray-400 text-[12px] flex gap-1 cursor-pointer'><SlGraph /> Improvements</p>
                    <h2 className='mt-2 text-[12px]'>Subject Understanding</h2>
                    <div className="tag">
                        <button className='bg-green-300 rounded-xl px-2 py-1 text-[10px] text-white'>Geography</button>
                        <button className='bg-orange-300 rounded-xl px-3 py-1 mt-2 text-[10px] ml-1 text-white'>Politics</button>
                        <button className='bg-green-300 rounded-xl px-3 py-1 mt-2 text-[10px] text-white'>Current Affairs</button>
                        <button className='bg-red-700 rounded-xl px-3 py-1 mt-2 text-[10px] ml-1 text-white'>General Studies</button>
                        <button className='bg-green-300 rounded-xl px-3 py-1 mt-2 text-[10px] ml-1 text-white'>Mathematics</button>
                        <button className='bg-gray-400 rounded-xl px-3 py-1 mt-2 text-[10px] text-white'>Social Science</button>
                        <button className='bg-red-700 rounded-xl px-3 py-1 mt-2 text-[10px] ml-1 text-white'>English Literature</button>
                        <button className='bg-orange-300 rounded-xl px-3 py-1 mt-2 text-[10px] text-white'>Indian History</button>
                        <button className='bg-green-300 rounded-xl px-3 py-1 mt-2 text-[10px] ml-1 text-white'>Economics</button>
                    </div>
                </div>
                <div className='p-1 border-2 rounded-md w-[25%]'>
                    <h2 className='text-gray-400 text-[12px] flex gap-1 cursor-pointer'><TfiTimer />Response Time</h2>
                    <button className='bg-blue-800 text-white p-1 rounded-sm my-4 text-[12px]'>Std Time - 2min</button>
                    <div className='flex items-center p-1 border-2 border-dashed border-gray-400 rounded-md'>
                        <h1 className='text-green-600 font-bold text-[20px]'>60</h1>
                        <h3 className='text-gray-400'>%</h3>
                        <p className='text-gray-400 text-[10px] ml-1'>Ans took</p>
                        <div className='flex justify-end items-end ml-5'>
                            <h1><BsArrowUp className='text-red-600 text-[16px] font-bold' /></h1>
                            <p className='text-[12px] items-end'>2min</p>
                        </div>
                    </div>
                    <hr className='border-b-1 border-gray-400 my-4' />

                    <div className='flex text-[18px] my-3 items-center justify-center'>
                        <h1>You are</h1>
                        <h1 className='text-red-600 ml-1'>slow</h1>
                        <h1 className='ml-1'>!</h1>
                    </div>
                </div>
                <div className='p-1 gap-2  border-2 rounded-md w-[25%]'>
                <h2 className='text-gray-400 text-[12px] flex gap-1 cursor-pointer'><SlGraph />Approach Data</h2>
                    <div className='flex gap-2 items-center my-1 p-1 mt-3 border-[0.8px] rounded-sm blur-2 border-gray-400'>
                        <div className='bg-blue-100 shadow flex blur-2'>
                            <h1 className='text-blue-700 text-[20px]'>25</h1>
                            <p className='text-gray-400 justify-end align-bottom items-end flex'>%</p>
                        </div>
                        <div className='flex gap-2'>
                        <h1 className='text-[14px]'>Based on</h1>
                        <h1 className='text-blue-800 text-[14px]'>Facts</h1>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center my-1 p-1 border-[0.8px] rounded-sm blur-2 border-gray-400'>
                        <div className='bg-blue-100 shadow flex blur-2'>
                            <h1 className='text-blue-700 text-[20px]'>25</h1>
                            <p className='text-gray-400 justify-end align-bottom items-end flex'>%</p>
                        </div>
                        <div className='flex gap-2'>
                        <h1 className='text-[14px]'>Based on</h1>
                        <h1 className='text-blue-800 text-[14px]'>Analysis</h1>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center my-1 p-1 border-[0.8px] rounded-sm blur-2 border-gray-400'>
                        <div className='bg-blue-100 shadow flex blur-2'>
                            <h1 className='text-blue-700 text-[20px]'>25</h1>
                            <p className='text-gray-400 justify-end align-bottom items-end flex'>%</p>
                        </div>
                        <div className='flex gap-2'>
                        <h1 className='text-[14px]'>Based on</h1>
                        <h1 className='text-blue-800 text-[14px]'>Elimination</h1>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center my-1 p-1 border-[0.8px] rounded-sm blur-2 border-gray-400'>
                        <div className='bg-blue-100 shadow flex blur-2'>
                            <h1 className='text-blue-700 text-[20px]'>25</h1>
                            <p className='text-gray-400 justify-end align-bottom items-end flex'>%</p>
                        </div>
                        <div className='flex gap-2'>
                        <h1 className='text-[14px]'>Based on</h1>
                        <h1 className='text-blue-800 text-[14px]'>Guess</h1>
                        </div>
                    </div>
                </div>
                <div className='p-1 gap-2  border-2 rounded-md w-[25%] px-2'>
                    <h2 className='text-gray-400 text-[12px] flex gap-1 cursor-pointer'><BsStars />Suggestions</h2>
                    <div className='flex gap-1 my-10'>
                        <div className='flex flex-col gap-5'>
                            <p className='bg-blue-700 text-white rounded-sm p-1 text-[10px] cursor-pointer'>Q.1-12</p>
                            <div className='border-2 border-gray-400 border-dashed rounded-lg py-2 px-1 flex'>
                                <h1 className='text-[16px] text-bold'>40</h1>
                                <p>sec</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='bg-blue-700 text-white rounded-sm p-1 text-[10px] cursor-pointer'>Q.12-32</p>
                            <div className='border-2 border-gray-400 border-dashed rounded-lg py-2 px-1 flex'>
                                <h1 className='text-[16px] text-bold'>1.5</h1>
                                <p>min</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='bg-blue-700 text-white rounded-sm p-1 text-[10px] cursor-pointer'>Q.32-44</p>
                            <div className='border-2 border-gray-400 border-dashed rounded-lg py-2 px-1 flex'>
                                <h1 className='text-[16px] text-bold'>3</h1>
                                <p>min</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <h1 className='text-green-600'>Easy</h1>
                        <h1 className='text-yellow-500'>Medium</h1>
                        <h1 className='text-red-600'>Hard</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiddleBar