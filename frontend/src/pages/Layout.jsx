import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageButton from "../Components/SideBarComponent/PageButton";
const Layout = () => {

  useEffect(()=>{
    
  },[])

  const pageButtonContent = [
    { content: "Home", pageSession: "page1" },
    { content: "Project List", pageSession: "page2" },
    { content: "Requested", pageSession: "page3" },
    { content: "TEUING", pageSession: "page4" },
  ];

  const [pageButtonStates, setPageButtonStates] = useState(() => {
    const initialState = Array(pageButtonContent.length).fill(false);
    initialState[0] = true;
    return initialState;
  });

  // Function to handle the click on a PageButton
  const handlePageButtonClick = (index) => {
    const newPageButtonStates = [...pageButtonStates];
    newPageButtonStates.fill(false);
    newPageButtonStates[index] = true;
    setPageButtonStates(newPageButtonStates);
  };


  return (
    <>
      <div className="flex">

        {/* SIDEBAR */}

        <div>
          <div className="inline-block px-6 py-12 h-screen w-auto text-black bg-white border-r-grey border-r-[1px]">

            
            <div className="mb-12 flex items-center gap-5">
              <div className="inline h-12 w-12 bg-black">

              </div>
              <p className="text-[32px] mr-4 font-bold">TelU Project</p>
            </div>

            <div className="mb-12 h-[65%] overflow-y-auto">
              <p className="mb-2 text-gray-300 font-light text-sm">HOME</p>
              {pageButtonStates.map((isClicked, index) => (
                <div classList={`pointer-event-none ${isClicked ? "pointer-event-none" : "pointer-event-auto"}`} onClick={() => handlePageButtonClick(index)}>
                  <Link to={pageButtonContent[index].pageSession}>
                    <PageButton
                      key={index}
                      isClicked={isClicked}
                      logo=""
                      content={pageButtonContent[index].content}
                    />
                  </Link>
                </div>
              ))}
            </div>

            <div className="absolute ">

            </div>

            <div className="my-auto">
              <p className=" mb-2 text-gray-300 font-light text-sm">PROFILE</p>
              <div className="flex items-center gap-4 cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-black ease-in duration-100 hover:h-11 hover:w-11">
                </div>
                <div>
                  <p className="text-primary text-md font-bold">Acep Pekalongan</p>
                  <p className="font-thin text-sm">1302210000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}

        <div className="p-10">
          <Outlet />
        </div>
      </div>


      
    </>
  );
};

export default Layout;
