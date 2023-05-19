"use client";
import Link from "next/link";
import { useRef } from "react";
import { Drawer } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import "react-input-range/lib/css/index.css";
import ProcessingLoader from "../../../components/home/ProcessingLoader.jsx";

const page = ({ params }) => {
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);

  params = params.id;
  const movies = useAppSelector((state) => state.counter.movies);
  const movie_selected = movies.filter((movie) => movie.id == params);
  console.log(params);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [volume, setVolume] = useState(1);

  const [Choose, setChoose] = useState("");

  const handleClick = (e) => {
    const inputValue = buttonRef.current.textContent;
    console.log(inputValue)
    setChoose(inputValue);
    showDrawer();
  };
  const handleClick2 = (e) => {
    const inputValue = buttonRef2.current.textContent;
    console.log(inputValue)
    setChoose(inputValue);
    showDrawer();
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setOpen(false);
  };

  const closeModals = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex bg-white h-20 w-full ">
        <div
          onClick={() => {
            window.history.back();
          }}
          className="pl-3 pt-5"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28 0C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12C0 5.37258 5.37258 0 12 0H28Z"
              fill="#E8E9FF"
            />
            <path
              d="M24.0277 29.7903L12.3802 20.76C12.242 20.6525 12.1438 20.5361 12.0857 20.4106C12.0277 20.2852 11.9991 20.1508 12 20.0075C12 19.8642 12.0286 19.7298 12.0857 19.6044C12.1429 19.4789 12.241 19.3625 12.3802 19.255L24.0277 10.1978C24.3502 9.94695 24.7535 9.82153 25.2373 9.82153C25.7212 9.82153 26.1359 9.95591 26.4816 10.2247C26.8272 10.4934 27 10.807 27 11.1653C27 11.5237 26.8272 11.8372 26.4816 12.106L16.3203 20.0075L26.4816 27.909C26.8041 28.1598 26.9654 28.4691 26.9654 28.8368C26.9654 29.2044 26.7926 29.5223 26.447 29.7903C26.1014 30.0591 25.6982 30.1935 25.2373 30.1935C24.7765 30.1935 24.3733 30.0591 24.0277 29.7903Z"
              fill="#585EE5"
            />
          </svg>
        </div>
        <h1 className="text-lg w-full text-center self-center pr-10 font-semibold">
          Event Details
        </h1>
      </div>
      {movie_selected.map((movie) => (
        <div className="mb-20">
          <img
            src={movie.src}
            alt=""
            width={400}
            height={20}
            className=" h-56"
          />
          <h1 className="text-2xl font-bold p-3 text-[#741415]">
            {movie.movieName}
          </h1>
          <h1 className="px-3 text-lg">{movie.ques}</h1>
          <div className="flex justify-center my-4">
            <button
              id="b1"
              onClick={handleClick}
              className="bg-white text-black border-2 border-black rounded-xl px-4 py-2 mr-4"
            >
              <span
              ref = {buttonRef}
              >Yes</span>  ₹{movie.rate}
            </button>
            <button
              id="b2"
              onClick={handleClick2}
              className="bg-white text-black border-2 border-black rounded-xl px-4 py-2 mr-4"
            >
              <span
              ref = {buttonRef2}
              >No</span>  ₹{movie.rate}
            </button>
          </div>
          <div className="flex px-3 w-full justify-between">
            <div className="flex">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                version="1.1"
                className="w-5 h-5"
              >
                <title>ic_fluent_poll_24_filled</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="🔍-Product-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="ic_fluent_poll_24_filled"
                    fill="#212121"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M11.7518706,1.99956021 C13.2716867,1.99956021 14.5037411,3.23161462 14.5037411,4.75143076 L14.5037411,19.2499651 C14.5037411,20.7697812 13.2716867,22.0018356 11.7518706,22.0018356 C10.2320544,22.0018356 9,20.7697812 9,19.2499651 L9,4.75143076 C9,3.23161462 10.2320544,1.99956021 11.7518706,1.99956021 Z M18.7518706,6.99956021 C20.2716867,6.99956021 21.5037411,8.23161462 21.5037411,9.75143076 L21.5037411,19.2499651 C21.5037411,20.7697812 20.2716867,22.0018356 18.7518706,22.0018356 C17.2320544,22.0018356 16,20.7697812 16,19.2499651 L16,9.75143076 C16,8.23161462 17.2320544,6.99956021 18.7518706,6.99956021 Z M4.75187055,11.9995602 C6.27168669,11.9995602 7.5037411,13.2316146 7.5037411,14.7514308 L7.5037411,19.2499651 C7.5037411,20.7697812 6.27168669,22.0018356 4.75187055,22.0018356 C3.23205441,22.0018356 2,20.7697812 2,19.2499651 L2,14.7514308 C2,13.2316146 3.23205441,11.9995602 4.75187055,11.9995602 Z"
                      id="🎨-Color"
                    ></path>
                  </g>
                </g>
              </svg>
              <p>{movie.poll}</p>
            </div>
            <p className="text-xs">Last match: few seconds ago</p>
          </div>
          <div className="bg-black h-[1px] mx-3"></div>
          <div className="">
            <h1 className="p-3 text-lg font-semibold">Latest information</h1>
            <div className="px-2">
              <h1 className="flex">
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  className="h-7 w-7"
                >
                  <title>bullet</title>
                  <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                </svg>
                {movie.latest_info[0]}
              </h1>
              <h1 className="flex">
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  className="h-7 w-7"
                >
                  <title>bullet</title>
                  <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                </svg>
                {movie.latest_info[1]}
              </h1>
              <h1 className="flex">
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  className="h-7 w-7"
                >
                  <title>bullet</title>
                  <path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z"></path>
                </svg>
                {movie.latest_info[2]}
              </h1>
            </div>
          </div>
          <div className="bg-black h-[1px] mx-3"></div>
          <div className="p-3">
            <h1 className=" text-lg font-semibold">About the event</h1>
            <p className="text-xs ">{movie.about}</p>
          </div>
          <div className="bg-black h-[1px] mx-3"></div>
          <div className="flex flex-col p-3 h-[6rem] justify-between text-sm">
            <div className="w-full flex justify-between ">
              <p>Resolution source:</p>
              <p>{movie.resolution_source}</p>
            </div>
            <div className="w-full flex justify-between ">
              <p>Expiry time:</p>
              <p>{movie.expiry_time}</p>
            </div>
            <div className="w-full flex justify-between ">
              <p>Expiry date:</p>
              <p>{movie.expiry_date}</p>
            </div>
          </div>
        </div>
      ))}
      {open && (
        <Drawer
          className="flex justify-between bg-[#F2F6FE] p-2 m-0"
          title={`Option chosen: ${Choose}`}
          placement="bottom"
          height="bottom"
          open={open}
          onClose={onClose}
          style={{
            background: "#F2F6FE",
            margin: 0,
            padding: 0,
            color: "#fff",
            "@media (max-width: 768px)": {},
          }}
        >
          <div className="flex flex-col bg-white p-0 m-0">
            <div className="bg-white flex justify-between text-black  rounded-lg w-full p-2">
              <h1 className="text-lg font-semibold">Quantity</h1>
              <h1 className="text-xs border-1 border-black self-center px-5 border-2 rounded-full">
              {volume}
              </h1>
            </div>
            {/* slider */}
            <div>
              <ul className="list strong insetMaterial outlineIos">
                <li className="listItem">
                  <input
                    className="w-full"
                    type="range"
                    id="volumeRange"
                    min="1"
                    max="10"
                    step="1"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </li>
              </ul>
            </div>
            {/* butttons */}
            <div className="flex justify-center my-4 bg-white p-2">
            <button
              className="text-xl font-bold bg-[#F2F6FE] text-black border-2 border-black rounded-xl p-5 mr-3"
            >
              Yes ₹{volume * 50}
              <p className="text-xs font-normal">Your investment</p>
            </button>
            <button
              className="text-xl font-bold bg-[#E2FFD8] text-black border-2 border-black rounded-xl p-5"
            >
              No ₹XX
             <p className="text-xs font-normal">You get</p>
            </button>
          </div>
            <button onClick={openModal} type="submit" className="bg-[#95B6F8] px-5 py-2 m-2 rounded-xl">Tap to confirm</button>
          </div>
        </Drawer>
      )}
      <ProcessingLoader isOpen={modalOpen} onClose={closeModals} />
    </>
  );
};

export default page;
