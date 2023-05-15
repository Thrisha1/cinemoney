"use client"

import React, { useEffect,useState } from 'react'
import {  useAppSelector } from "@/redux/hooks";
import Image from 'next/image';

const page = () => {

    const user_details = useAppSelector((state) => state.user.user_details);
    const images = useAppSelector((state) => state.user.profile_images);

    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <Image width={100} height={100} src={user_details.avatar} />
            <span>{user_details.username}</span>
            <div className="grid justify-between grid-cols-3 w-full items-center mt-6">
                {images.map((image) => (
                    <div className="flex justify-center items-center">
                        <Image className='' width={80} height={80} src={image.imageSrc} alt='profile images' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page