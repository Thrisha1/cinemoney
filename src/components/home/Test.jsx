"use client";
import React, { useState, useRef } from "react";
import Image from 'next/image'

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
  {
    src: "https://templates.designwizard.com/c2c7e700-f416-11ea-99dd-b9647870a6ce.jpg",
    alt: "Image 4",
  },
  {
    src: "https://www.photowhoa.com/2015/wp-content/uploads/2021/03/Movie-poster-1-724x1024.jpg",
    alt: "Image 5",
  },
];

const Test = () => {
  return (
    <div className="flex flex-row overflow-x-auto w-full ">
  {images.map((image) => (
      <Image
        className=" z-10 h-52 w-[32rem] m-3 rounded-xl opacity-70 bg-white"
        src={image.src}
        width={900}
        height={200}
        alt={image.alt}
      />
      
  ))}
</div>

  )
}

export default Test