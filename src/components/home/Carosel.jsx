"use client";
import React, { useState, useRef } from "react";
import Image from 'next/image'
import Link from 'next/link'


const Carosel = ({src,text}) => {
  return (
  <>
  <div class="bg-none  border-gray-200 rounded-lg relative">
      <Image
          className=" h-60 w-[14rem] m-3 rounded-xl opacity-50 bg-white"
          src={src}
          width={200}
          height={200}
          alt=""
        />
      {/* <div class="flex p-5  absolute bottom-1 right-7">
          <Link href="" class=" m-3 inline-flex items-center px-5 py-2 text-sm font-medium text-center  bg-white rounded-full   focus:ring-blue-300 ">
              Yes
          </Link>
          <Link href="" class=" m-3 inline-flex items-center px-5 py-2 text-sm font-medium text-center  bg-white rounded-full   focus:ring-blue-300 ">
              No
          </Link>
      </div>
      <div className="absolute top-12 right-4 w-3/4 text-[#1C3169] text-sm font-bold">
        <p>{text}</p>
      </div> */}
  </div>
  
  </>


)}

export default Carosel; 