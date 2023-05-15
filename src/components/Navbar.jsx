"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/signupAssets/logo.png'
import { Drawer } from "antd";
import Profile_icon from "../../public/Drawer_icons/profile.svg"
import Bot_icon from "../../public/Drawer_icons/bot_mode.svg"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex bg-white overflow-hidden">
        <div onClick={showDrawer} className="pt-6 pl-5">
          <svg viewBox="0 0 100 80" width="40" height="40" className="bg-[#E8E9FF] pl-3 p-2 rounded-lg">
            <rect width="75" height="7" fill="#585CE5"></rect>
            <rect y="30" width="75" height="7" fill="#585CE5"></rect>
            <rect y="60" width="75" height="7" fill="#585CE5"></rect>
          </svg>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image src={logo} width={150} className="w-54 h-15 py-4 mr-9 " />
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

            {/* additional close btn */}
            {/* <svg
              onClick={onClose}
              className="text-black w-6 h-6 mb-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg> */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center  gap-4">
                <Image className='h-6 w-6' src={Profile_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  My Profile
                </h1>
              </div>
              <div className="flex items-center  gap-4">
                <Image className='h-6 w-6' src={Bot_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Bot Mode
                </h1>
              </div>
              <div className="flex items-center  gap-4">
                <Image className='h-6 w-6' src={Profile_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Notification
                </h1>
              </div>
              <div className="flex items-center  gap-4">
                <Image className='h-6 w-6' src={Profile_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Live support
                </h1>
              </div>
              <div className="flex items-center  gap-4">
                <Image className='h-6 w-6' src={Profile_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Terms & condition
                </h1>
              </div>
              <div className="flex items-center  gap-4">
                <Image className='h-6 w-6' src={Profile_icon} alt="profile pic" />
                <h1 className="text-black text-lg font-medium font-body">
                  Logout
                </h1>
              </div>
            </div>

          </Drawer>
        )
      }

    </>
  )
}

export default Navbar