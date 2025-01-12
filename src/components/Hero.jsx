import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'

function Hero() {
  return (
    <>
    <div className="hero mt-5 max-w-[1100px] mx-auto bg-white flex gap-5">
        <Leftbar />
        <Rightbar />
    </div>
    </>
  )
}

export default Hero