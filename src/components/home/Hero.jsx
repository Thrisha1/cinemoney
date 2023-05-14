import React from 'react';
import Carosel from './Carosel.jsx';
import Link from 'next/link'

const images = [
  {
    src: "https://edit.org/photos/img/blog/h1d-movie-poster-template-maker-creator-online-editor.jpg-840.jpg",
    alt: "Image 1",
  },
  {
    src: "https://static-cse.canva.com/blob/1053326/1131w-numKCOCv3a0.jpg",
    alt: "Image 2",
  },
  {
    src: "https://www.photowhoa.com/2015/wp-content/uploads/2021/03/Movie-poster-1-724x1024.jpg",
    alt: "Image 3",
  }, 
];

const questions = [
  {
    ques: "Will Dune receive a high rating on Rotten Tomatoes?"
  },
  {
    ques: "Will Leonardo DiCaprio win an award for his performance in Don't Look Up?"
  },
  {
    ques: "Will Leonardo DiCaprio win an award for his performance in Don't Look Up?"
  },
  {
    ques: "Will Leonardo DiCaprio win an award for his performance in Don't Look Up?"
  },
  {
    ques: "Will Leonardo DiCaprio win an award for his performance in Don't Look Up?"
  },
  {
    ques: "Will Leonardo DiCaprio win an award for his performance in Don't Look Up?"
  },
];

const Hero = () => {
  return (
    <>
      <div className="p-5">
        <p className="text-xl">Welcome <span className="text-[#019AC2]">User!</span> </p>
        <p className="text-sm">Expiring today</p>
      </div>
      <div className="flex overflow-x-scroll gap-2">
        {images.map((image) => (
          <Carosel key={image.alt} text="Movie poster" src={image.src} alt={image.alt} width={300} height={200}/>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center h-[17rem] mt-3 overflow-y-scroll">
      {questions.map((question, index) => (
        <div key={index} className="flex flex-col text-center p-5 bg-white my-2 mx-5 h-28 justify-center rounded-xl text-[#1C3169] text-sm font-bold">
          <p>{question.ques}</p>
          <div class="flex w-full justify-around mt-3 ">
            <button  class=" inline-flex items-center px-5 py-2  text-sm font-medium text-center border-2  rounded-full   focus:ring-blue-300 ">
                Yes
            </button>
            <button class="  inline-flex items-center px-5  text-sm font-medium text-center  border-2 rounded-full   focus:ring-blue-300 ">
                No
            </button>
          </div>
        </div>
        
      ))}
      </div>
    </>
  );
};

export default Hero;
