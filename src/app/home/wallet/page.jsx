import React from 'react'
import Main from '../../../components/home/wallet/Main.jsx'
import Navbar from '../../../components/Navbar.jsx'
import Footer from '../../../components/Footer.jsx'

const page = () => {
  return (
    <div className="">
        <Navbar  text="My Wallet" />
        <Main/>
        <Footer />
    </div>
  )
}

export default page