import React from 'react'

const Main = () => {
  return (
    <div className="p-3">
      <div className="flex flex-col items-center justify-around bg-[#cedcfa] h-[10rem] rounded-xl">
        <h1 className="text-2xl ">Available Balance</h1>
        <h1 className="text-4xl font-bold">₹100</h1>
        <div className="flex">
        <button type="submit" className="bg-[#95B6F8] px-5 py-2 m-2 rounded-xl text-sm ">Recharge Now</button>
        <button type="submit" className="bg-[#95B6F8] px-7 py-2 m-2 rounded-xl text-sm ">Withdraw</button>
        </div>
      </div>
        <div className="my-2 p-1">
          <h1>Last Transactions</h1>
          <div className="flex w-full justify-between bg-white p-3 rounded-xl my-2">
            <h1 className="text-xs text-[#948D8D]">Date: 03 march 2023</h1>
            <div className="">
              <h1 className="text-xs text-[#948D8D]">Transaction id: 123456789</h1>
              <h1 className="text-lg font-bold text-end text-[#03B115]">₹100 Credited</h1>
            </div>
          </div>
          <div className="flex w-full justify-between bg-white p-3 rounded-xl my-2">
            <h1 className="text-xs text-[#948D8D]">Date: 03 march 2023</h1>
            <div className="">
              <h1 className="text-xs text-[#948D8D]">Transaction id: 123456789</h1>
              <h1 className="text-lg font-bold text-end text-[#FF5050]">₹100 Debited</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main