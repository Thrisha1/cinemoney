import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { PencilIcon } from "@heroicons/react/outline";

const page = () => {

    const data = {
        name: "John Doe",
        username: "User@John",
        avatar: "/profileAssests/avatar.svg",
        change_password: "",
        mobile_no: "942587615",
        birthday: "05/05/1992",
        gender: "Male",
    }

    return (
        <div className='bg-[#E5EEFF] h-full'>
            <div className="flex flex-col px-6 gap-2 py-6">
                <div className="flex justify-between py-2 rounded-lg px-4 border-2 border-black bg-white">
                    <h1>Name</h1>
                    <h1 className='text-gray-500'>{data.name}</h1>
                </div>
                <div className="flex justify-between py-2 rounded-lg px-4 border-2 border-black bg-white">
                    <h1>User Name</h1>
                    <h1 className='text-gray-500'>{data.username}</h1>
                </div>
                <div className="flex justify-between items-center py-2 rounded-lg px-4 border-2 border-black bg-white">
                    <h1>Select Avatar</h1>
                    <div className="flex gap-2 items-center">
                        <Link className='text-blue-600' href={`/home/profile/change_profile`} >Change Avatar</Link>
                        <Image src={data.avatar} className='w-8 h-8' width={200} height={200} />
                    </div>
                </div>
                <div className="flex justify-between py-2 rounded-lg px-4 border-2 border-black bg-white">
                    <h1>Change Password</h1>
                    <div className="">
                        <svg className='w-6 h-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between py-2 rounded-lg px-4 border-2 border-black bg-white">
                    <h1>Mobile no</h1>  
                    <h1 className='text-gray-500'>{data.mobile_no}</h1>
                </div>
                <div className="flex justify-between py-2 rounded-lg px-4 border-2 border-black bg-white">
                    <h1>Birthday</h1>
                    <h1 className='text-gray-500'>{data.birthday}</h1>
                </div>
                <div className="flex justify-between py-2 rounded-lg px-4 border-2 border-black bg-white">
                    <h1>Gender</h1>
                    <h1 className='text-gray-500'>{data.gender}</h1>
                </div>
            </div>
        </div>
    )
}

export default page