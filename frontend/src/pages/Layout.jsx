import React, { useState } from "react";
import { Outlet, useNavigate} from "react-router-dom";
import PageButton from "../Components/SideBarComponent/PageButton";
import arrowLogo from "../img/arrow.png"
import Logo from "../img/Logo.png"

const Layout = () => {

  const currentNav = useNavigate();
  const [isExpand, setIsExpand] = useState(true);

  // Sidebar Content
  const pageButtonContent = [
    { content: "Home", logo:"", pageSession: "page1" },
    { content: "Project List", logo:"", pageSession: "page2" },
    { content: "Requested", logo:"", pageSession: "page3" },
    { content: "TEUING", logo:"", pageSession: "page4" }
  ];

  // Apply "true" to the button which is clicked by user and the rest is "false"
  const [pageButtonStates, setPageButtonStates] = useState(() => {
    const initialState = Array(pageButtonContent.length).fill(false);
    initialState[localStorage.getItem("currentNav")] = true;
    return initialState;
  });

  // Function to handle the click on a PageButton
  const handlePageButtonClick = (index) => {
    const newPageButtonStates = pageButtonStates;
    newPageButtonStates.fill(false);
    newPageButtonStates[index] = true;
    currentNav(pageButtonContent[index].pageSession);
    localStorage.setItem("currentNav", index)
    setPageButtonStates(newPageButtonStates);
  };

  return (
    <>
      <div className="flex flex-nowrap">

        {/* SIDEBAR */}
        
        <div className={`inline-block relative px-6 py-12 h-screen w-auto text-black bg-white border-r-grey border-r-[1px] 
          ${isExpand ? "basis-[20%]" : ""} `}>
          <div className={`h-full w-full flex flex-col justify-center`}>
              
              {/* HEADER */}
              <div className={`mb-6 flex items-center gap-2 basis-[10%] ${isExpand ? "" : "flex flex-col items-center justify-center  "}`}>
                <div className="inline h-8 w-8">
                  <img src={Logo} alt="png" />
                </div>
                <p className={`text-[24px] font-bold ${isExpand ? "" : "absolute -z-10"}`}>Tel-U Project</p>
              </div>

              {/* BODY */}
              <div className={`mb-5 w-auto overflow-y-auto basis-[80%] flex flex-col ${isExpand ? "" : "items-center"}`}>
                <p className="mb-2 text-gray-300 font-light text-[12px]">HOME</p>
                {pageButtonStates.map((isClicked, index) => (
                  <div key={index} className={`me-0 inline-block ${isClicked ? "pointer-event-none cursor-auto" : "pointer-event-auto"}`} 
                  onClick={() => handlePageButtonClick(index)}>
                      <PageButton
                        isExpand = {isExpand}
                        isClicked={isClicked}
                        logo={pageButtonContent[index].logo}
                        content={pageButtonContent[index].content}
                      />
                  </div>
                ))}
              </div>

            {/* BUTTON */}
            <div className="absolute flex items-center justify-center h-12 w-12 
            bg-white drop-shadow-md hover:shadow-lg right-0 bottom-0 translate-x-6 -translate-y-32 
            rounded-xl cursor-pointer ease-in duration-0" onClick={() => setIsExpand(!isExpand)}>
                <img src={arrowLogo} alt=".png" />
            </div>


            {/* PROFILE */}
            <div className={`basis-[10%] ${isExpand ? "" : "flex flex-col items-center justify-center"}`}>
              <p className="mb-2 text-gray-300 font-light text-[12px]">PROFILE</p>
              <div className="flex items-center gap-4 cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-black ease-in duration-100 hover:h-11 hover:w-11">
                </div>
                <div className={`${isExpand ? "block" : "hidden"}`}>
                  <p className="text-primary text-md font-bold">Jhonny Sins</p>
                  <p className="font-thin text-sm">1302213116</p>
                </div>
              </div>
            </div>


          </div>

        </div>

        {/* CONTENT */}

        <div className={`flex h-screen overflow-y-auto basis-full`}>
          <div className="p-12 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
