import React from 'react'
import TopBar from './TopBar'
import MiddleBar from './MiddleBar'
import BottomBar from './BottomBar'

function Rightbar() {
  return (
    <div className='w-[80%] h-auto rounded-md'>
        <TopBar />
        <MiddleBar />
        <BottomBar />
    </div>
  )
}

export default Rightbar