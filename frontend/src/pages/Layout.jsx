import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PageButton from "../Components/SideBarComponent/PageButton";
import arrowLogo from "../img/arrow.png";
import Logo from "../img/Logo.png";
import { IoMdNotifications } from "react-icons/io";
import { FaDotCircle } from "react-icons/fa";

const Layout = () => {
  const currentNav = useNavigate();
  const [isExpand, setIsExpand] = useState(
    localStorage.getItem("isExpand") === "true" ? true : false
  );
  const [notifActive, setNotifActive] = useState(false);

  // Sidebar Content
  const pageButtonContent = [
    { content: "Home", logo: "", pageSession: "page1" },
    { content: "Project List", logo: "", pageSession: "joinForm" },
    { content: "Requested", logo: "", pageSession: "requested" },
    { content: "My Project", logo: "", pageSession: "createForm" },
    { content: "Project Detail", logo: "", pageSession: "projectDetail" },
    { content: "My Project", logo: "", pageSession: "myProject" },
  ];

  // Apply "true" to the button which is clicked by user and the rest is "false"
  const [pageButtonStates, setPageButtonStates] = useState(() => {
    const initialState = Array(pageButtonContent.length).fill(false);
    localStorage.getItem != -1
      ? (initialState[localStorage.getItem("currentNav")] = true)
      : currentNav("profilePage");
    return initialState;
  });

  // Function to handle the click on a PageButton
  const handlePageButtonClick = (index) => {
    const newPageButtonStates = pageButtonStates;
    newPageButtonStates.fill(false);
    newPageButtonStates[index] = true;
    currentNav(pageButtonContent[index].pageSession);
    localStorage.setItem("currentNav", index);
    setPageButtonStates(newPageButtonStates);
  };

  const toogleNavbarSize = () => {
    setIsExpand(!isExpand);
    localStorage.setItem("isExpand", isExpand);
  };

  const profilePage = () => {
    localStorage.setItem("currentNav", -1);
    setPageButtonStates(Array(pageButtonContent.length).fill(false));
    currentNav("profilePage");
  };

  return (
    <>
      <div className="flex">
        {/* SIDEBAR */}

        <div
          className={`relative px-6 py-12 h-screen text-black bg-white border-r-grey border-r-[1px]`}>
          <div
            className={`h-full w-auto flex flex-col flex-nowrap justify-center ${
              isExpand ? "min-w-[200px]" : "w-auto"
            }`}>
            {/* HEADER */}
            <div
              className={`mb-6 flex items-center gap-2 basis-[10%] ${
                isExpand ? "" : "flex flex-col items-center justify-center  "
              }`}>
              <div className="inline h-8 w-8">
                <img src={Logo} alt="png" />
              </div>
              <p
                className={`text-[24px] font-bold ${isExpand ? "" : "hidden"}`}>
                Tel-U Project
              </p>
            </div>

            {/* BODY */}
            <div
              className={`mb-5 w-auto overflow-y-auto basis-[80%] flex flex-col ${
                isExpand ? "" : "items-center"
              }`}>
              <p className="mb-2 text-gray-300 font-light text-[12px]">HOME</p>
              {pageButtonStates.map((isClicked, index) => (
                <div
                  key={index}
                  className={`me-0 inline-block ${
                    isClicked
                      ? "pointer-event-none cursor-auto"
                      : "pointer-event-auto"
                  }`}
                  onClick={() => handlePageButtonClick(index)}>
                  <PageButton
                    isExpand={isExpand}
                    isClicked={isClicked}
                    logo={pageButtonContent[index].logo}
                    content={pageButtonContent[index].content}
                  />
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div
              className="absolute flex items-center justify-center h-12 w-12 
            bg-white drop-shadow-md hover:shadow-lg right-0 bottom-0 translate-x-6 -translate-y-32 
            rounded-xl cursor-pointer ease-in duration-0"
              onClick={toogleNavbarSize}>
              <img
                src={arrowLogo}
                className={`${
                  isExpand ? "animate-rotateLeft" : "animate-rotateRight"
                }`}
                alt=".png"
              />
            </div>

            {/* PROFILE BUTTON */}
            <div
              className={`basis-[10%] ${
                isExpand ? "" : "flex flex-col items-center justify-center"
              }`}>
              <p className="mb-2 text-gray-300 font-light text-[12px]">
                PROFILE
              </p>
              <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={profilePage}>
                <div className="h-10 w-10 rounded-full bg-black ease-in duration-100 hover:h-11 hover:w-11"></div>
                <div className={`${isExpand ? "block" : "hidden"}`}>
                  <p className="text-primary text-md font-bold">Jhonny Sins</p>
                  <p className="font-thin text-sm">1302213116</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}

        <div className={`h-screen basis-full overflow-y-auto relative`}>
          <div className="p-12">
            <Outlet />

            {/* NOTIF BALOON */}
            <div
              style={{ userSelect: "none" }}
              className={`w-16 h-16 ${
                notifActive ? "bg-primary" : "bg-black hover:bg-gray-600 "
              }  absolute flex justify-center right-10 top-10 rounded-full cursor-pointer`}
              onClick={() => {
                setNotifActive(!notifActive);
              }}>
              <IoMdNotifications
                className={`h-full w-full p-4 my-auto  text-white transition duration-75 focus:scale-90`}
              />
              <div className="absolute right-3 top-2  bg-primary rounded-full h-5 w-5 flex justify-center">
                <div className="my-auto text-xs text-white font-medium">10</div>
              </div>
            </div>
            <div
              hidden={!notifActive}
              className={
                "absolute w-72 rounded-lg py-4 bg-red-400 right-28 top-10"
              }>
              <h1 className="px-5 text-2xl text-white font-bold">Notifikasi</h1>
              <div className="w-full my-auto p-5 flex flex-col gap-2 max-h-44 overflow-y-auto">
                <div className="bg-white w-full p-2 rounded-md flex flex-row gap-2 cursor-pointer">
                  <div className="my-auto">
                    <FaDotCircle className="text-lg text-yellow-400" />
                  </div>
                  <div>
                    <label htmlFor="" className="font-medium cursor-pointer">
                      EcoScape
                    </label>
                  </div>
                </div>
                <div className="bg-white w-full p-2 rounded-md flex flex-row gap-2 cursor-pointer">
                  <div className="my-auto">
                    <FaDotCircle className="text-lg text-primary" />
                  </div>
                  <div>
                    <label htmlFor="" className="font-medium cursor-pointer">
                      EcoScape
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
