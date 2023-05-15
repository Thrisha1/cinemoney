"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Home from '../../public/footerAssets/Home.png'
import Wallet from '../../public/footerAssets/Wallet.png'
import Trade from '../../public/footerAssets/Trade.png'

const Footer = () => {
  const [isEnlarged1, setIsEnlarged1] = useState(false);
  const [isEnlarged2, setIsEnlarged2] = useState(false);
  const [isEnlarged3, setIsEnlarged3] = useState(false);

  const handleEnlarge1 = () => {
    
    setIsEnlarged1(!isEnlarged1);
    setTimeout(() => setIsEnlarged1(false), 500);
  };
  const handleEnlarge2 = () => {
    setIsEnlarged2(!isEnlarged2);
    setTimeout(() => setIsEnlarged2(false), 500);
  };
  const handleEnlarge3 = () => {
    setIsEnlarged3(!isEnlarged3);
    setTimeout(() => setIsEnlarged3(false), 500);
  };
  return (
    <div className="flex bg-white justify-around fixed bottom-0 w-full py-3">
         <Link href="/home">
          <div
            className={`h-10 w-10 p-2 rounded-full cursor-pointer ${
              isEnlarged1 ? 'bg-[#67ABD2] h-12 w-12 absolute bottom-7' : 'bg-white opacity-50'
            }`}
            onClick={handleEnlarge1}
          >
            <Image src={Home} width={50} height={50} alt="" />
          </div>
        </Link>
         <Link href="/home/wallet">
          <div
            className={`h-10 w-10 p-2 rounded-xl cursor-pointer ${
              isEnlarged2 ? 'bg-blue-400 h-12 w-12 absolute bottom-7' : 'bg-white opacity-50'
            }`}
            onClick={handleEnlarge2}
          >
            <Image src={Wallet} width={50} height={50} alt="" />
          </div>
        </Link>
         <Link href="/trade">
          <div
            className={`h-10 w-10 p-2 rounded-xl cursor-pointer ${
              isEnlarged3 ? 'bg-blue-400 h-12 w-12 absolute bottom-7' : 'bg-white opacity-50'
            }`}
            onClick={handleEnlarge3}
          >
            <Image src={Trade} width={50} height={50} alt="" />
          </div>
        </Link>
        
    </div>
  )
}

export default Footer