import React from 'react'
import Test from './Test.jsx'

const Hero = () => {
  return (
    <>
    <div className="p-5">
        <p className="text-xl">Welcome <span className="text-[#019AC2]">User!</span> </p>
        <p className="text-sm">Expiring today</p>
    </div>
    <Test/>
    </>
  )
}

export default Hero