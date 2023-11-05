import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Requested = () => {
  const [modal, setModal] = useState(false);
  const [succes, setModal2] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    setModal2(!succes);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else if (succes) {
    document.body.classList.remove("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className=" flex justify-center w-full ">
      <div className="w-full mx-auto grid md:grid-cols-1 gap-4 xs:grid-cols-1  xs:gap-4 xss:grid-cols-1 ">
        <div className="flex justify-between gap-5 xss:flex-col xs:flex-row" >
          <label className="xss:text-2xl xs:text-3xl font-bold  ">
            REQUESTED
          </label>

          <input
            className=" transition-transform transform hover:scale-110  flex space-x-4 placeholder:italic align-middle w-auto
                     placeholder:text-slate-400  bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-10 shadow-sm focus:outline-none focus:border-sky-500
                     focus:ring-sky-500 focus:ring-1 sm:text-sm xss:w-36 xs:w-64  "
            placeholder="Search..."
            type="text"
            name="search"
          />
        </div>
        <div className=" flex flex-col ">
          <div className="w-full shadow-xl flex flex-col lg:flex-row p-4 my-4 rounded-lg hover:scale-105 duration-300 py-12 px-6  bg-silver ">
            <img
              className="flex-none rounded-full  w-32 h-32 mx-1 bg-black xss:mb-5 md:w-32 md:h-32 xss:w-20 xss:h-20 xs:w-32 xs:h-32"
              src={""}
              alt="/"
            />

            <div className="flex flex-auto flex-col my-auto w-full gap-1 sm:text-left xs:mb-5 xss:mb-5">
              <label className="mx-8 font-bold xss:text-xs md:text-lg xs:text-lg">Naufal</label>
              <label className=" mx-8">
                <span className="font-semibold xss:text-xs md:text-lg xs:text-lg">Project : </span>
                <span className=" text-blue-800 xss:text-xs md:text-lg xs:text-lg">TPLM</span>
              </label>
              <label className="mx-8">
                <span className="font-semibold xss:text-xs md:text-lg xs:text-lg">Team :</span> Webpro
              </label>
              <label className="mx-8">
                <span className="font-semibold xss:text-xs md:text-lg xs:text-lg">Message</span> : izin kan saya
                masuk
              </label>
            </div>
            <div className=" flex-1 flex-row justify-center gap-2 w-full align-bottom sm:flex-col sm:flex sm:flex-auto ">
              <button className="  hover:bg-green-400  transition-transform transform hover:scale-110 p-4 bg-green-500  w-32 xss:w-20 xs:w-32 xss:text-xs xs:text-sm ml-auto rounded-md text-white">
                Approve
              </button>
              <button className="  hover:bg-red-400 transition-transform transform hover:scale-110  p-4 bg-red-500 w-32 xss:w-20 xs:w-32 xss:text-xs xs:text-sm ml-auto rounded-md text-white">
                Decline
              </button>           
              <div className="">
              <label
                onClick={toggleModal}
                className="transition-transform transform hover:scale-110 xs:mt-4 text-cyan-400 xss:mt-5 "
              >
                View {"Naufal"} Requested
              </label> 
              
              
              </div>
            </div>
            
            <div className=""></div>
          </div>

          {modal && (
            <div
              onClick={toggleModal}
              className=" fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
            >
              <div className="modal-container transition-transform transform hover:scale-110">
                <div className=" bg-gray-50 rounded-lg shadow-xl p-8">
                  <div className=" mb-4 flex justify-between">
                    <h2 className=" text-2xl font-semibold my-auto">
                      Requested From {"Naufal"}
                    </h2>
                    <button
                      onClick={toggleModal}
                      className=" my-auto focus:outline-none transition-transform transform hover:scale-110"
                    >
                      <AiFillCloseCircle className="text-4xl" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <label className="text-gray-600 font-semibold">
                      Descriotion :
                    </label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae delectus sapiente cumque <br />
                      corporis deleniti vero culpa perspiciatis animi
                      reprehenderit repellat voluptas voluptate voluptates,{" "}
                      <br />
                      quis nobis nulla, consectetur repudiandae assumenda
                      laudantium."{" "}
                    </p>
                  </div>
                  <div className="mb-9">
                    <label className="text-gray-600 font-semibold">
                      Dokumen File :
                    </label>
                    <p>https://git-scm.com/download/win</p>
                  </div>

                  <div className=" flex flex-row gap-4 w-full align-bottom  justify-center">
                    <button className="  hover:bg-green-400  transition-transform transform hover:scale-110 p-4  bg-green-500  w-32  rounded-md  text-white">
                      Approve
                    </button>
                    <button className="  hover:bg-red-400 transition-transform transform hover:scale-110  p-4 bg-red-500 w-32  rounded-md text-white">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
              s
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Requested;
