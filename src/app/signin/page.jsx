"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/signupAssets/logo.png";
import User from "../../../public/signupAssets/user.png";
import email from "../../../public/signupAssets/email.png";
import Password from "../../../public/signupAssets/passwd.png";

// router
import { useRouter } from "next/navigation";

// hook form
import { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {

  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");


  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={logo} width={150} className="w-50 h-15 my-7" />
      <h1 className="text-2xl font-bold">Sign In</h1>
      <form onSubmit={handleSubmit((datas) => {
        setData(JSON.stringify(datas))
        console.log(datas)
        router.push('/home')
      })}>

        <div className="relative">
          <div className="absolute bottom-8 left-3">
            <Image src={email} width={20} className="h-5 " />
          </div>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="px-10 py-2 my-5 rounded-xl w-72 border-2 border-gray-900 focus:border-gray-900 focus:shadow-outline-black"
          />
        </div>
        <div className="relative">
          <div className="absolute bottom-8 left-3">
            <Image src={Password} width={20} className="h-5 " />
          </div>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="px-10 py-2 mb-5 rounded-xl w-72 border-2 border-gray-900 focus:border-gray-900 focus:shadow-outline-black"
          />
        </div>
        <div className="flex w-full justify-between px-2">
          <p className="text-xs text-center self-center">
            Forgot Password
          </p>
          <p className="text-xs flex text-center items-center justify-center self-center">
            <div className="pt-1 px-1">
              <input type="checkbox" name="remember" id="remember" className="" />
            </div>
            <span>Remember me</span>
          </p>
        </div>

        <button
          value="Log In"
          className="w-3/4 text-center ml-7 bg-blue-500 p-3 self-center my-5 rounded-xl"
        >Login</button>
      </form>
      <div className="flex flex-col items-center justify-center">
        <div className="flex  items-center justify-center ">
          <div className="bg-black h-[1px] my-2 mx-3 w-20"></div>
          <h1 className="text-center">or</h1>
          <div className="bg-black h-[1px] my-2 mx-3  w-20"></div>
        </div>
        <button onClick={() => router.push("/home")} class="flex text-sm w-full items-center justify-center px-2 py-2 my-5 bg-white border-2  rounded-xl shadow-sm   focus:outline-black focus:ring-2 focus:ring-offset-2 ">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327"
            height={20}
            width={20}
            className="mx-3"
          />
          Login with google
        </button>
        <p className="text-xs text-center self-center">
          Don't have an account? <Link href="/signup" class="text-blue-500 underline">sign up</Link>
        </p>
      </div>

    </div>
  );
};

export default page;
