import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

const layout = ({children}) => {
  return (
    <html lang="en">
      <body className="bg-[#F2F6FE]">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

export default layout