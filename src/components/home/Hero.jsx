import React from 'react';
import Carosel from './Carosel.jsx';

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
    ques: "Will The Matrix 4 be rated higher on Rotten Tomatoes than The Matrix Reloaded?"
  }
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
      <div className="flex flex-col items-center justify-center h-64 mt-10 overflow-y-scroll">
      {questions.map((question, index) => (
        <div key={index} className="flex text-center p-5 bg-white my-3 mx-5 h-32 justify-center rounded-xl text-[#1C3169] text-sm font-bold">
          <p>{question.ques}</p>
        </div>
      ))}
      </div>
    </>
  );
};

export default Hero;
