import React from 'react'

function BottomBar() {
  return (
    <div>
        <div className='flex justify-between mt-1 gap-1'>
            <div className="firxt border-2 border-gray-300 rounded-lg w-[50%]">
                <h2 className='text-gray-400 text-[12px]'>Compare Accuracy</h2>
                <img src="images/graph_1.png" alt="graph1" />
            </div>
            <div className="firxt border-2 border-gray-300 rounded-lg w-[50%]">
                <h2 className='text-gray-400 text-[12px]'>Time Taken</h2>
                <img className='ml-10 h-[80%] w-[80%]' src="images/graph_2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default BottomBar