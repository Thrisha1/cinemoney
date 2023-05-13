import React from 'react'
import Image from "next/image";
import Link from "next/link";
import LandImage from '../../../public/landingAssests/land.png'
import promo2Img from '../../../public/landingAssests/promo2Img.png'

const page = () => {
  return (
    <div>
         <Image src={promo2Img} width={500} className="h-150 pt-10" />
         <p className=" p-7 text-2xl font-bold tracking-wider text-center my-5" >Let's Start</p>
         <Link href="/signup" className=" w-3/4 text-center ml-20 bg-white px-16 py-5 self-center rounded-xl text-lg text-[#585CE5]">I’m new here</Link>
         <Link href="/signin" className="block p-7 text-xl font-semi-bold tracking-wider text-center my-5" >Sign In</Link>

    </div>
  )
}

export default page