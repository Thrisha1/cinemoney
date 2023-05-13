import React from 'react'
import Carosel from './Carosel.jsx'

const Hero = () => {
  return (
    <>
    <div className="p-5">
        <p className="text-xl">Welcome <span className="text-[#019AC2]">User!</span> </p>
        <p className="text-sm">Expiring today</p>
    </div>
      <div className="flex overflow-x-scroll gap-2 w-max">
        <Carosel text="Will The Matrix 4 be rated higher on Rotten Tomatoes than The Matrix Reloaded ?" src="https://www.photowhoa.com/2015/wp-content/uploads/2021/03/Movie-poster-1-724x1024.jpg" width={300}
            height={200}/>
        <Carosel text="Will The Matrix 4 be rated higher on Rotten Tomatoes than The Matrix Reloaded ?" src="https://www.photowhoa.com/2015/wp-content/uploads/2021/03/Movie-poster-1-724x1024.jpg" width={300}
            height={200}/>
        <Carosel text="Will The Matrix 4 be rated higher on Rotten Tomatoes than The Matrix Reloaded ?" src="https://www.photowhoa.com/2015/wp-content/uploads/2021/03/Movie-poster-1-724x1024.jpg" width={300}
            height={200}/>
      </div>
    </>
  )
}

export default Hero
