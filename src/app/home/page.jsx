import React from 'react'
import Hero from '../../components/home/Hero.jsx'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import logo from '../../../public/signupAssets/logo.png'

const page = () => {
  return (
    <div className="bg-[#E5EEFF]">
        <Navbar src={logo}/>
        <Hero/>
        <Footer />
    </div>
  )
}

export default page