import React from "react";

const Requested = () => {
  return (
    <div className=" flex justify-center w-full px-4">
      <div className="w-full mx-auto grid   md:grid-cols-1 gap-4 ">
        <div className="flex justify-between">
          <label className=" text-3xl font-bold sm:w-min">REQUESTED</label>

          <input
            className=" transition-transform transform hover:scale-110  flex space-x-4 placeholder:italic align-middle w-auto placeholder:text-slate-400  bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
        </div>
        <div className=" flex  flex-col ">
          <div className="  w-full shadow-xl flex flex-col lg:flex-row p-4 my-4 rounded-lg hover:scale-105 duration-300 py-12 px-6  bg-silver">
            <img
              className="flex-none rounded-full  w-32 h-32 mx-1  bg-white"
              src={""}
              alt="/"
            />

            <div className="flex flex-auto flex-col my-auto w-full gap-1">
              <label className="mx-8 font-bold ">Naufal</label>
              <label className=" mx-8">
                <span className="font-semibold">Project : </span>
                <span className=" text-blue-800">TPLM</span>
              </label>
              <label className="mx-8">
                <span className="font-semibold">Team :</span> Webpro
              </label>
              <label className="mx-8">
                <span className="font-semibold">Message</span> : izin kan saya
                masuk
              </label>
            </div>
            <div className=" flex flex-auto flex-col gap-2 w-full align-bottom ">
              <button className="  hover:bg-green-400  transition-transform transform hover:scale-110 p-4 bg-green-500  w-32 ml-auto rounded-md  text-white">
                Approve
              </button>
              <button className="  hover:bg-red-400 transition-transform transform hover:scale-110  p-4 bg-red-500 w-32 ml-auto rounded-md text-white">
                Decline
              </button>
              <label className="transition-transform transform hover:scale-110   text-cyan-400">
                View {"Naufal"} Requested
              </label>
            </div>
            <div className=""></div>
          </div>
          <div className="  w-full shadow-xl flex flex-col lg:flex-row p-4 my-4 rounded-lg hover:scale-105 duration-300 py-12 px-6  bg-silver">
            <img
              className="  flex-none rounded-full  w-32 h-32 mx-1  bg-white"
              src={""}
              alt="/"
            />

            <div className="flex flex-auto flex-col my-auto w-full gap-1">
              <label className="mx-8 font-bold ">Naufal</label>
              <label className=" mx-8">
                <span className="font-semibold">Project : </span>
                <span className="text-blue-800">TPLM</span>
              </label>
              <label className="mx-8">
                <span className="font-semibold">Team :</span> Webpro
              </label>
              <label className="mx-8">
                <span className="font-semibold">Message</span> : izin kan saya
                masuk
              </label>
            </div>
            <div className=" flex flex-auto flex-col gap-2 w-full align-bottom">
              <button className="  hover:bg-green-400  transition-transform transform hover:scale-110 p-4 bg-green-500  w-32 ml-auto rounded-md  text-white">
                Approve
              </button>
              <button className="  hover:bg-red-400 transition-transform transform hover:scale-110  p-4 bg-red-500 w-32 ml-auto rounded-md text-white">
                Decline
              </button>
              <label className=" transition-transform transform hover:scale-110  text-cyan-400 ">
                View {"Naufal"} Requested
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requested;
