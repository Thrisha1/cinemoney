"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/signupAssets/logo.png'
import { Drawer } from "antd";
import Profile_icon from "../../public/Drawer_icons/profile.svg"
import Bot_icon from "../../public/Drawer_icons/bot_mode.svg"
import Notify_icon from "../../public/Drawer_icons/notification.svg"
import Support_icon from "../../public/Drawer_icons/support.svg"
import Terms from "../../public/Drawer_icons/terms.svg"
import Logout from "../../public/Drawer_icons/logout.svg"
import Link from 'next/link';

const Navbar = ({src,text}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex bg-[#E5EEFF] h-20">
        <div onClick={showDrawer} className="pt-6 pl-5">
          <svg viewBox="0 0 100 80" width="40" height="40" className="bg-[#E8E9FF] pl-3 p-2 rounded-lg">
            <rect width="75" height="7" fill="#585CE5"></rect>
            <rect y="30" width="75" height="7" fill="#585CE5"></rect>
            <rect y="60" width="75" height="7" fill="#585CE5"></rect>
          </svg>
        </div>
        <div className="w-full flex items-center justify-center relative">
          <Image src={src} width={150} className="w-54 h-15 py-4 mr-9 " />
          <h1 className="text-black text-lg font-medium font-body absolute mr-8  text-center">{text}</h1>
        </div>
      </div>

      {
        open && (
          <Drawer
            className="flex justify-between text-white md:px-5"
            title="Menu"
            placement="left"
            open={open}
            onClose={onClose}
            style={{
              width: 250,
              background: "#fffdfd",
              margin: 0,
              color: "#fff",
              "@media (max-width: 768px)": {
                width: 300,
              },
            }}
          >
            <div className="flex flex-col gap-8">
              <Link href="/home/profile" className="flex items-center  gap-4">
                <Image className='h-10 w-10 bg-[#E8E9FF] rounded-lg p-2' src={Profile_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  My Profile
                </h1>
              </Link>
              <Link href="/home/profile" className="flex items-center  gap-4">
                <Image className='h-10 w-10 bg-[#E8E9FF] rounded-lg p-2' src={Bot_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Bot Mode
                </h1>
              </Link>
              <Link href="/home/profile" className="flex items-center  gap-4">
                <Image className='h-10 w-10 bg-[#E8E9FF] rounded-lg p-2' src={Notify_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Notification
                </h1>
              </Link>
              <Link href="/home/profile" className="flex items-center  gap-4">
                <Image className='h-10 w-10 bg-[#E8E9FF] rounded-lg p-2' src={Support_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Live support
                </h1>
              </Link>
              <Link href="/home/profile" className="flex items-center  gap-4">
                <Image className='h-10 w-10 bg-[#E8E9FF] rounded-lg p-2' src={Terms} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Terms & condition
                </h1>
              </Link>
              <Link href="/signin" className="flex items-center  gap-4">
                <Image className='h-10 w-10 bg-[#E8E9FF] rounded-lg p-2' src={Logout} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Logout
                </h1>
              </Link>
            </div>

          </Drawer>
        )
      }

    </>
  )
}

export default Navbar