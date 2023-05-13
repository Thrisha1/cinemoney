import React from 'react'
import Image from "next/image";
import Link from "next/link";
import LandImage from '../../../public/landingAssests/land.png'
import TextPromo from '../../../public/landingAssests/textpromo.png'

const page = () => {
  return (
    <div>
         <Image src={LandImage} width={500} className="h-150 " />
         <Image src={TextPromo} width={170} className="h-50 my-5 mb-20" />
         <Link href="/promo2" className="w-3/4 text-center ml-16 bg-blue-500 px-16 py-5 self-center rounded-xl text-lg text-white"> Let's Go</Link>
         <p className="text-gray-400 p-7 text-lg tracking-wider text-center my-5" >To take a front-row seat to the world of film.</p>
    </div>
  )
}

export default page