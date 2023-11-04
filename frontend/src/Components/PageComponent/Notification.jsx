import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaDotCircle } from "react-icons/fa";

const options = [
  { value: "ALL", label: "ALL" },
  { value: "Waiting", label: "Waiting" },
  { value: "Declined", label: "Declined" },
  { value: "Accepted", label: "Accepted" },
];

const Notification = () => {
  const [notifActive, setNotifActive] = useState(false);
  const [notifState, setNotifState] = useState("ALL");

  return (
    <div>
      <div
        style={{ userSelect: "none" }}
        className={`w-16 h-16 ${
          notifActive ? "bg-primary" : "bg-black hover:bg-gray-600 "
        }  absolute flex justify-center md:right-10 right-0 z-20 top-10 rounded-full cursor-pointer`}
        onClick={() => {
          setNotifActive(!notifActive);
        }}
      >
        <IoMdNotifications
          className={`h-full w-full p-4 my-auto  text-white transition  active:scale-90`}
        />
        <div className="absolute right-3 top-2  bg-primary rounded-full h-5 w-5 flex justify-center">
          <div className="my-auto text-xs text-white font-medium">10</div>
        </div>
      </div>
      <div
        hidden={!notifActive}
        className={
          "absolute w-auto rounded-lg py-4 bg-white md:right-28  left-10 right-10 z-10 md:left-auto top-10  border-2 scroll-smooth "
        }
        style={{ userSelect: "none" }}
      >
        <h1 className="px-5 text-xl sm:text-2xl text-black font-bold ">
          Notification
        </h1>
        <div className="md:w-full text-xs sm:text-base sm:px-5 pt-2 flex gap-2 overflow-x-auto w-4/5 mx-auto pb-2 sm:pb-0 ">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => setNotifState(option.value)}
              className={`sm:px-3 px-2 py-2 my-auto cursor-pointer ${
                notifState === option.value
                  ? "text-white bg-secondary hover:bg-red-500"
                  : "text-black hover:bg-grey"
              } font-bold active:scale-95 rounded-full`}
            >
              {option.label}
            </div>
          ))}
        </div>

        <div className="w-auto my-auto p-5 text-base flex flex-col gap-2 max-h-80 overflow-y-auto ">
          <div className="bg-white group h-auto hover:bg-secondary border-2 rounded-lg active:scale-105 transition w-full md:w-96 p-2 flex flex-row  gap-2 cursor-pointer ">
            <div className="my-auto bg-white border-2 rounded-full">
              <FaDotCircle className="text-lg text-yellow-400" />
            </div>
            <div className="w-auto">
              <label
                htmlFor=""
                className="font-medium cursor-pointer text-black group-hover:text-white  max-h-20 overflow-y-auto"
              >
                <span className="font-bold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio, nesciunt.{" "}
                </span>
                - Waiting for Approve
              </label>
            </div>
          </div>
          <div className="bg-white group h-auto hover:bg-secondary border-2 rounded-lg active:scale-105 transition w-full md:w-96 p-2 flex flex-row  gap-2 cursor-pointer ">
            <div className="my-auto bg-white border-2 rounded-full">
              <FaDotCircle className="text-lg text-yellow-400" />
            </div>
            <div className="w-auto">
              <label
                htmlFor=""
                className="font-medium cursor-pointer text-black group-hover:text-white  max-h-20 overflow-y-auto"
              >
                <span className="font-bold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio, nesciunt.{" "}
                </span>
                - Waiting for Approve
              </label>
            </div>
          </div>
          <div className="bg-white group h-auto hover:bg-secondary border-2 rounded-lg active:scale-105 transition w-full md:w-96 p-2 flex flex-row  gap-2 cursor-pointer ">
            <div className="my-auto bg-white border-2 rounded-full">
              <FaDotCircle className="text-lg text-yellow-400" />
            </div>
            <div className="w-auto">
              <label
                htmlFor=""
                className="font-medium cursor-pointer text-black group-hover:text-white  max-h-20 overflow-y-auto"
              >
                <span className="font-bold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio, nesciunt.{" "}
                </span>
                - Waiting for Approve
              </label>
            </div>
          </div>
          <div className="bg-white group h-auto hover:bg-secondary border-2 rounded-lg active:scale-105 transition w-full md:w-96 p-2 flex flex-row  gap-2 cursor-pointer ">
            <div className="my-auto bg-white border-2 rounded-full">
              <FaDotCircle className="text-lg text-yellow-400" />
            </div>
            <div className="w-auto">
              <label
                htmlFor=""
                className="font-medium cursor-pointer text-black group-hover:text-white  max-h-20 overflow-y-auto"
              >
                <span className="font-bold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio, nesciunt.{" "}
                </span>
                - Waiting for Approve
              </label>
            </div>
          </div>
          <div className="bg-white group h-auto hover:bg-secondary border-2 rounded-lg active:scale-105 transition w-full md:w-96 p-2 flex flex-row  gap-2 cursor-pointer ">
            <div className="my-auto bg-white border-2 rounded-full">
              <FaDotCircle className="text-lg text-green-500" />
            </div>
            <div className="w-auto">
              <label
                htmlFor=""
                className="font-medium cursor-pointer text-black group-hover:text-white  max-h-20 overflow-y-auto"
              >
                <span className="font-bold">Echo Warrior </span>- Accepted
              </label>
            </div>
          </div>
          <div className="bg-white group h-auto hover:bg-secondary border-2 rounded-lg active:scale-105 transition w-full md:w-96 p-2 flex flex-row  gap-2 cursor-pointer ">
            <div className="my-auto bg-white border-2 rounded-full">
              <FaDotCircle className="text-lg text-primary" />
            </div>
            <div className="w-auto">
              <label
                htmlFor=""
                className="font-medium cursor-pointer text-black group-hover:text-white  max-h-20 overflow-y-auto"
              >
                <span className="font-bold">Echoschopus Endropus </span>-
                Declined
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
