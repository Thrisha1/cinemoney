"use client"
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import CardGallery from './CardGallery.jsx';
import poll from '../../../public/landingAssests/poll.png'


const Hero = () => {

  const questions = useAppSelector((state) => state.counter.movies);
  

  return (
    <div className=''>
      <div className="p-5">
        <p className="text-xl">Welcome <span className="text-[#019AC2]">User!</span> </p>
        <p className="text-sm">Expiring today</p>
      </div>
      <CardGallery questions={questions} />
      <div className="flex flex-col items-center justify-center h-64 mt-10 overflow-y-scroll mb-16">
        {questions.map((question, index) => (
          <Link href={`/home/${question.id}`} key={index} className="relative flex flex-col text-center p-3 shadow-xl bg-white my-3 mx-5 h-46 justify-center rounded-xl text-[#1C3169] text-sm font-bold">
            <p>{question.ques}</p>
            
            <div className="flex  pt-2 w-full justify-around">
              <button className="px-5 py-1 border-2 border-black rounded-full">Yes</button>
              <button className="px-5 py-1 border-2 border-black rounded-full">No</button>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
            <p className="absolute bottom-1 text-black font-light pl-3">{question.poll}</p>
            <Image src={poll} alt="poll" width={10} height={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
