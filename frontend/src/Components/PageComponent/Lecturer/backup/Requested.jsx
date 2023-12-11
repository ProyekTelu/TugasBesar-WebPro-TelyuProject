import React, { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,


} from "@material-tailwind/react";

//modal command
export function Requested() {
  const [modal, setModal] = useState(false);
  const [succes, setModal2] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    setModal2(!succes);
  };

  //DIalog command
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(toggleModal);
  const handClick = (buttonID) =>{
  
  }
 
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // }

  // const handleDecline = () => {
  //   setOpen(false);
  // }




  if (modal) {
    document.body.classList.add("active-modal");
  } else if (succes) {
    document.body.classList.remove("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //======================//






  return (

    <div className="p-4 md:p-12 overflow-y-auto flex justify-center w-full ">
      <div className="w-full mx-auto grid md:grid-cols-1 gap-4 xs:grid-cols-1  xs:gap-4 xss:grid-cols-1 ">
        <div className="flex justify-between gap-5 flex-col md:flex-row">
          <label className="px-4  text-xl md:text-2xl text-primary font-bold text-start">
            Requested
          </label>

          <input
            className=" transition-transform transform hover:scale-105  flex space-x-4 placeholder:italic align-middle w-auto
                     placeholder:text-slate-400  bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-10 shadow-sm focus:outline-none focus:border-sky-500
                     focus:ring-sky-500 focus:ring-1 sm:text-sm  "
            placeholder="Search..."
            type="text"
            name="search"
          />
        </div>
        <div className=" w-full flex flex-col ">
          <div className="w-full shadow-xl flex flex-col  rounded-lg  duration-300 bg-silver p-4">
            <div className="flex flex-col md:flex-row justify-center w-full px-4">
              <div>
                <img
                  className="rounded-full h-36 w-36 my-auto bg-black mx-auto mb-4 md:mb-0"
                  src={""}
                  alt="/"
                />
              </div>

              <div className="flex flex-auto flex-col my-auto w-full gap-1 sm:text-left mb-4">
                <label className="font-bold mx-auto md:mx-8 text-lg md:text-2xl mb-2">
                  Naufal Zaki Kemana
                </label>
                <label className="mx-auto md:mx-8 text-md md:text-lg">
                  <span className="font-semibold text-md md:text-lg ">
                    Project :{" "}
                  </span>
                  <span className=" text-blue-800 text-md md:text-lg">
                    TPLM
                  </span>
                </label>
                <label className="mx-auto md:mx-8 text-md md:text-lg">
                  <span className="font-semibold text-md md:text-lg">
                    Team :
                  </span>{" "}
                  Webpro
                </label>
                <label className="mx-auto md:mx-8 text-md md:text-lg line-clamp-2">
                  <span className="font-semibold text-md md:text-lg">
                    Message
                  </span>{" "}
                  : Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus nisi eum voluptas ea error velit quia aperiam
                  asperiores reiciendis ut quaerat sunt harum, delectus,
                  accusantium molestias eligendi eos obcaecati. Repellendus!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus architecto consequuntur, sunt aspernatur vel
                  maxime accusamus eos magni recusandae adipisci, sed, quidem
                  voluptatum aliquam officiis veniam esse placeat reiciendis
                  quos.
                </label>
              </div>
              <div className=" flex flex-row md:flex-col justify-center gap-4 my-2">
                <button onClick={handleOpen} className="  hover:bg-secondaryAlternative  transition-transform transform hover:scale-105 active:scale-95 p-4 bg-secondary  w-24 md:w-32 h-14   rounded-md text-white">
                  Approve
                </button>
                <button  onClick={handleOpen} className="  hover:bg-primaryAlternative transition-transform transform hover:scale-105 active:scale-95  p-4 bg-primary w-24  h-14  md:w-32  rounded-md text-white">
                  Decline
                </button>
              </div>
            </div>  
            <div className="flex justify-center ">
              <label
                onClick={toggleModal}
                className="transition-transform transform hover:scale-105 mt-4 text-cyan-400 cursor-pointer active:scale-95"
              >
                View {"Naufal"} Requested
              </label>
            </div>
          </div>

          {/* {modal && (
            <div
              onClick={toggleModal}
              className=" fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
            >
              <div className="modal-container transition-transform transform hover:scale-110">
                <div className=" bg-white rounded-lg shadow-xl p-8">
                  <div className=" mb-4 flex justify-between">
                    <h2 className=" text-2xl font-semibold my-auto">
                      Requested From {"Naufal Zaki Kemana"}
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
                    <button className="  hover:bg-secondaryAlternative transition-transform transform hover:scale-105 active:scale-95 p-4  bg-secondary  w-32  rounded-md  text-white">
                      Approve
                    </button>
                    <button className="  hover:bg-primaryAlternative transition-transform transform hover:scale-105 active:scale-95 p-4 bg-primary w-32  rounded-md text-white">
                      Decline
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )} */}

          <div>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader></DialogHeader>
              <DialogBody>
                Apakah anda yakin dengan pilihan ini ?
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleClose}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button className="hover:bg-secondaryAlternative  transition-transform transform hover:scale-105 active:scale-95 p-4 bg-secondary  w-15 md:w-32 h-11  rounded-md text-white"  onClick={handleOpen}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>

        </div>
        <div className=" w-full flex flex-col ">
          <div className="w-full shadow-xl flex flex-col  rounded-lg  duration-300 bg-silver p-4">
            <div className="flex flex-col md:flex-row justify-center w-full px-4">
              <div>
                <img
                  className="rounded-full h-36 w-36 my-auto bg-black mx-auto mb-4 md:mb-0"
                  src={""}
                  alt="/"
                />
              </div>

              <div className="flex flex-auto flex-col my-auto w-full gap-1 sm:text-left mb-4">
                <label className="font-bold mx-auto md:mx-8 text-lg md:text-2xl mb-2">
                  Naufal Zaki Kemana
                </label>
                <label className="mx-auto md:mx-8 text-md md:text-lg">
                  <span className="font-semibold text-md md:text-lg ">
                    Project :{" "}
                  </span>
                  <span className=" text-blue-800 text-md md:text-lg">
                    TPLM
                  </span>
                </label>
                <label className="mx-auto md:mx-8 text-md md:text-lg">
                  <span className="font-semibold text-md md:text-lg">
                    Team :
                  </span>{" "}
                  Webpro
                </label>
                <label className="mx-auto md:mx-8 text-md md:text-lg line-clamp-2">
                  <span className="font-semibold text-md md:text-lg">
                    Message
                  </span>
                  : Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus nisi eum voluptas ea error velit quia aperiam
                  asperiores reiciendis ut quaerat sunt harum, delectus,
                  accusantium molestias eligendi eos obcaecati. Repellendus!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus architecto consequuntur, sunt aspernatur vel
                  maxime accusamus eos magni recusandae adipisci, sed, quidem
                  voluptatum aliquam officiis veniam esse placeat reiciendis
                  quos.
                </label>
              </div>
              <div className=" flex flex-row md:flex-col justify-center gap-4 my-2">
                <button onClick={""} className="  hover:bg-secondaryAlternative  transition-transform transform hover:scale-105 active:scale-95 p-4 bg-secondary  w-24 md:w-32 h-14   rounded-md text-white">
                  Approve
                </button>
                <button className="  hover:bg-primaryAlternative transition-transform transform hover:scale-105 active:scale-95  p-4 bg-primary w-24  h-14  md:w-32  rounded-md text-white">
                  Decline
                </button>
              </div>
            </div>
            <div className="flex justify-center ">
              <label
                onClick={toggleModal}
                className="transition-transform transform hover:scale-105 mt-4 text-cyan-400 cursor-pointer active:scale-95"
              >
                View {"Naufal"} Requested
              </label>
            </div>
          </div>

          {modal && (
            <div
              onClick={toggleModal}
              className=" fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
            >
              <div className="modal-container transition-transform transform hover:scale-110">
                <div className=" bg-white rounded-lg shadow-xl p-8">
                  <div className=" mb-4 flex justify-between">
                    <h2 className=" text-2xl font-semibold my-auto">
                      Requested From {"Naufal Zaki Kemana"}
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
                    <button onClick={handleOpen}className="  hover:bg-secondaryAlternative transition-transform transform hover:scale-105 active:scale-95 p-4  bg-secondary  w-32  rounded-md  text-white">
                      Approve
                    </button>
                    <button onClick={handleOpen} className="hover:bg-primaryAlternative transition-transform transform hover:scale-105 active:scale-95 p-4 bg-primary w-32  rounded-md text-white">
                      Decline
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Requested;
