import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-[#E5EEFF]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default layout