import React from 'react'
import Image from 'next/image'
import logo from '../../public/signupAssets/logo.png'

const Navbar = () => {
  return (
    <>
    <div className="flex bg-white overflow-hidden">
        <div className="pt-6 pl-5">
            <svg viewBox="0 0 100 80" width="40" height="40" className="bg-[#E8E9FF] pl-3 p-2 rounded-lg">
                <rect width="75" height="7" fill="#585CE5"></rect>
                <rect y="30" width="75" height="7" fill="#585CE5"></rect>
                <rect y="60" width="75" height="7" fill="#585CE5"></rect>
            </svg>
        </div>
        <div className="w-full flex items-center justify-center">
            <Image src={logo} width={150} className="w-54 h-15 py-4 mr-9 " />
        </div>
    </div>
    
    </>
  )
}

export default Navbar