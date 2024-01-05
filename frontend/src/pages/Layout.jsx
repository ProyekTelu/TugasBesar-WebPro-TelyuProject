import React, { useRef, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PageButton from "../Components/SideBarComponent/PageButton";
import arrowLogo from "../img/arrow.png";
import Logo from "../img/Logo.png";
import NotificationStudent from "../Components/PageComponent/NotificationStudent";
import NotificationLecturer from "../Components/PageComponent/Lecturer/NotificationLecturer";

const Layout = () => {
  const currentNav = useNavigate();
  const [isExpand, setIsExpand] = useState(localStorage.getItem("isExpand"));
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [isPageButtonShow, setIsPageButtonShow] = useState(false);
  const pageButtonRef = useRef(null);
  const [userImage, setUserImage] = useState(user.photoProfileUrl);

  //convert blob ke gambar
  // useEffect(() => {
  //   if (user.photoProfile && user.photoProfile.data) {
  //     const base64String = btoa(
  //       new Uint8Array(user.photoProfile.data).reduce(
  //         (data, byte) => data + String.fromCharCode(byte),
  //         ""
  //       )
  //     );
  //     const url = `data:image/png;base64,${base64String}`;
  //     setUserImage(url);
  //   }
  // }, [user.photoProfile]);

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    if (!localStorage.getItem("user")) {
      currentNav("/");
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  });

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);

  const pageButtonContent =
    user.role === "student"
      ? [
          // STUDENT SESSION
          {
            content: "Home",
            logo: "BsFillHouseDoorFill",
            endPoint: "home",
          },
          {
            content: "Project List",
            logo: "BsListNested",
            endPoint: "listProject",
          },
          {
            content: "My Project",
            logo: "BsFillBarChartLineFill",
            endPoint: "myProject",
          },
        ]
      : [
          // LECTURER SESSION
          {
            content: "Home",
            logo: "BsFillHouseDoorFill",
            endPoint: "home",
          },
          {
            content: "Project List",
            logo: "BsListNested",
            endPoint: "listProject",
          },
          {
            content: "Requested",
            logo: "BsFileEarmarkPersonFill",
            endPoint: "requested",
          },
          {
            content: "My Project",
            logo: "BsFillBarChartLineFill",
            endPoint: "myProject",
          },
        ];

  const handleDocumentClick = (e) => {
    // Check if the click target is the pageButton or one of its children
    if (pageButtonRef.current.contains(e.target)) {
      // Clicked inside the pageButton; do nothing.
      return;
    }

    // Clicked outside the pageButton; hide it.
    setIsPageButtonShow(false);
  };

  // Apply "true" to the button which is clicked by user and the rest is "false"
  const [pageButtonStates, setPageButtonStates] = useState(() => {
    const initialState = Array(pageButtonContent.length).fill(false);
    localStorage.getItem !== -1
      ? (initialState[localStorage.getItem("currentNav")] = true)
      : currentNav("profilePage");
    return initialState;
  });

  // Function to handle the click on a PageButton
  const handlePageButtonClick = (index) => {
    const newPageButtonStates = pageButtonStates;
    newPageButtonStates.fill(false);
    newPageButtonStates[index] = true;
    currentNav(pageButtonContent[index].endPoint);
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
      <div className="flex flex-col-reverse md:flex-row-reverse w-screen text-black">
        {/* CONTENT */}
        <div
          className={`h-screen basis-full overflow-y-auto scroll-smooth relative bg-white pointer-events-auto`}
        >
          <div className="h-full">
            <Outlet />

            {/* NOTIF BALOON */}
            {user.role === "student" ? 
            <NotificationStudent />
            :
            (<NotificationLecturer />)
            }
          </div>
        </div>

        {/* SIDEBAR MD> */}
        <div
          className={`hidden relative px-6 py-12 min-h-screen text-black bg-white border-r-grey border-r-[1px] md:block`}
        >
          <div
            className={`h-full w-auto flex flex-col flex-nowrap justify-center ${
              isExpand ? "min-w-[200px]" : "w-auto"
            }`}
          >
            {/* HEADER */}
            <div
              className={`mb-6 flex items-center gap-2 basis-[10%] cursor-pointer ${
                isExpand ? "" : "flex flex-col items-center justify-center  "
              }`}
              onClick={() => {
                currentNav("/");
              }}
            >
              <div className="inline h-8 w-8">
                <img src={Logo} alt="png" />
              </div>
              <p
                className={`text-[24px] font-bold ${isExpand ? "" : "hidden"}`}
              >
                Tel-U Project
              </p>
            </div>

            {/* BODY */}
            <div
              className={`mb-5 w-auto overflow-y-auto basis-[80%] flex flex-col ${
                isExpand ? "" : "items-center"
              }`}
            >
              <p className="mb-2 text-gray-300 font-light text-[12px]">HOME</p>
              {pageButtonStates.map((isClicked, index) => (
                <div
                  key={index}
                  className={`me-0 inline-block ${
                    isClicked
                      ? "pointer-event-none cursor-auto"
                      : "pointer-event-auto"
                  }`}
                  onClick={() => handlePageButtonClick(index)}
                >
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
              onClick={toogleNavbarSize}
            >
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
              }`}
            >
              <p className="mb-2 text-gray-300 font-light text-[12px]">
                PROFILE
              </p>
              <div
                className="flex items-center gap-4 cursor-pointer ease-in-out duration-75 hover:scale-105"
                onClick={profilePage}
              >
                <img
                  src={userImage}
                  alt="photoProfile"
                  className="h-10 aspect-square rounded-full bg-whiteAlternative"
                />
                <div className={`${isExpand ? "block" : "hidden"}`}>
                  <p className="text-primary text-md font-bold">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="font-thin text-sm">{user.userID}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR <MD */}
        <div className="block md:hidden">
          {/* HEADER */}
          <div className="flex sticky top-0 w-full px-8 justify-between items-center h-16 bg-white border-b-[1px] border-greyAlternative ">
            <div
              className="flex items-center p-1 rounded-full gap-1 w-auto aspect-square ease-in duration-75 hover:bg-grey active:bg-grey cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsPageButtonShow(!isPageButtonShow);
              }}
            >
              <div className="h-1 w-1 rounded-full bg-greyAlternative"></div>
              <div className="h-1 w-1 rounded-full bg-greyAlternative"></div>
              <div className="h-1 w-1 rounded-full bg-greyAlternative"></div>
            </div>
            <div className="inline h-7 w-7 cursor-pointer">
              <img
                src={Logo}
                alt="png"
                onClick={() => {
                  currentNav("/");
                }}
              />
            </div>
            <div
              className="h-7 aspect-square rounded-full bg-black cursor-pointer"
              onClick={profilePage}
            ></div>
          </div>

          {/* PAGE BUTTON */}
          <div
            className={`z-10 top-0 h-full bg-white absolute w-1/3 min-w-[250px] px-6 py-10 
            ${
              isPageButtonShow ? "translate-x-0" : "-translate-x-full hidden"
            } shadow-md
            `}
            ref={pageButtonRef}
          >
            <div
              className={`mb-5 w-auto overflow-y-auto basis-[80%] flex flex-col tr`}
            >
              <p className="mb-2 text-gray-300 font-light text-[12px]">HOME</p>
              {pageButtonStates.map((isClicked, index) => (
                <div
                  key={index}
                  className={`me-0 inline-block ${
                    isClicked
                      ? "pointer-event-none cursor-auto"
                      : "pointer-event-auto"
                  }`}
                  onClick={() => handlePageButtonClick(index)}
                >
                  <PageButton
                    isExpand={isExpand}
                    isClicked={isClicked}
                    logo={pageButtonContent[index].logo}
                    content={pageButtonContent[index].content}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
