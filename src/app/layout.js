import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cinemoney',
  description: 'A movie review app ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#E5EEFF] ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
