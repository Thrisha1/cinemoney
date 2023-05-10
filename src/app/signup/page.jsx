import React from 'react'
import Image from 'next/image'
import {logo} from '../../../public/signup assets/logo.png'

const page = () => {
  return (
    <div>
        <Image src={logo} width={100} height={100} className="w-20 h-20" />
    </div>
  )
}

export default page