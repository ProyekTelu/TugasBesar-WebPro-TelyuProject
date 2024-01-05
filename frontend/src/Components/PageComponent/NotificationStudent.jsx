import React, { useState, useEffect, useRef } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaDotCircle } from "react-icons/fa";
import TruncatedMessage from "../ElementComponent/TruncatedMessage";
import { toast } from "react-toastify";

import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

// {
//   id: 1,
//   title:
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nesciunt.",
//   status: "Waiting for Approve",
//   dotColor: "text-yellow-600",
// }

const NotificationStudent = () => {
  const [notifActive, setNotifActive] = useState(false);
  const [notifState, setNotifState] = useState("ALL");
  const [notificationElements, setNotificationsElements] = useState([]);
  const notificationRef = useRef(null);
  //const [hasMore, setHasMore] = useState(true);

  const userID = JSON.parse(localStorage.getItem("user")).userID;

  const options = [
    { value: "ALL", data: notificationElements },
    {
      value: "Waiting",
      data: notificationElements.filter((data) => data.status === "waiting"),
    },
    {
      value: "Rejected",
      data: notificationElements.filter((data) => data.status === "rejected"),
    },
    {
      value: "Accepted",
      data: notificationElements.filter((data) => data.status === "accepted"),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        notifActive
      ) {
        setNotifActive(false);
      }
    };

    fetchNotificationElements();

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notifActive]);

  const fetchNotificationElements = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/invitation/${userID}`
      );
      setNotificationsElements(response.data);
      console.log(notificationElements);
    } catch (error) {
      console.log("failed to fetch notifications data", error);
    }
  };

  const sendResponseInvitation = async (invitation, status) => {
    try {
      var formData = new FormData();
      formData.append("invitationID", invitation.invitationID);
      formData.append("roleID", invitation.roleID);
      formData.append("projectID", invitation.projectID);
      formData.append("status", status);
      formData.append("receiverID", invitation.receiverID);

      const updatedArray = notificationElements.map((element) =>
        element.invitationID === invitation.invitationID
          ? { ...element, status: status }
          : element
      );

      // Set the state with the updated array
      setNotificationsElements(updatedArray);

      axios({
        method: "post",
        url: "http://localhost:5000/invitationResponse",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
    } catch (error) {
      toast.error("Send Invitation Response in Error");
    }
  };

  const handleLogoClick = (event) => {
    event.stopPropagation();
    if (notifActive) {
      setNotifActive(false);
    } else {
      setNotifActive(true);
    }
  };

  // const fetchMoreData = () => {
  //   if (notifications.length >= notificationElements.length) {
  //     setHasMore(false);
  //     return;
  //   }

  //   setTimeout(() => {
  //     setNotifications((prevNotifications) =>
  //       prevNotifications.concat(
  //         notificationElements.slice(
  //           prevNotifications.length,
  //           prevNotifications.length + 5
  //         )
  //       )
  //     );
  //   }, 1500);
  //   };

  return (
    <div className="hidden md:block" ref={notificationRef}>
      <div
        style={{ userSelect: "none" }}
        className={`w-16 h-16 ${
          notifActive ? "bg-primary" : "bg-black hover:bg-gray-600 "
        }  fixed flex justify-center md:right-10 right-0 z-20 top-10 rounded-full cursor-pointer`}
        onClick={handleLogoClick}
      >
        <IoMdNotifications
          className={`h-full w-full p-4 my-auto  text-white transition  active:scale-90`}
        />
        <div className="absolute right-3 top-2 bg-primary rounded-full h-5 w-5 flex justify-center">
          <div className="my-auto text-xs text-white font-medium">
            {
              notificationElements.filter((data) => data.status === "waiting")
                .length
            }
          </div>
        </div>
      </div>
      <div
        hidden={!notifActive}
        className={
          "fixed w-auto md:w-[450px] rounded-lg py-4 bg-white md:right-28  left-10 right-10 z-10 md:left-auto top-10  border-2 scroll-smooth "
        }
        style={{ userSelect: "none" }}
      >
        <h1 className="px-5 text-xl sm:text-2xl text-black font-bold ">
          StudentNotificationStudent
        </h1>
        <div className="md:w-full text-xs sm:text-base sm:px-5 pt-2 flex gap-2 overflow-x-auto w-4/5 mx-auto pb-2 sm:pb-0 ">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => setNotifState(option.value)}
              className={`sm:px-3 px-2 py-2 my-auto cursor-pointer ${
                notifState === option.value
                  ? "text-white bg-primaryAlternative hover:bg-red-500"
                  : "text-black hover:bg-grey"
              } font-bold active:scale-95 rounded-full`}
            >
              {option.value}
            </div>
          ))}
        </div>

        <InfiniteScroll
          dataLength={notificationElements.length}
          loader={<h4></h4>}
          className="w-auto my-auto p-5 text-base flex flex-col gap-2 max-h-[80vh] overflow-y-auto "
        >
          {options
            .find((opt) => opt.value === notifState)
            .data.map((notification, index) => (
              <div
                key={index}
                className="bg-white group h-auto border-2 rounded-lg transition w-full md:w-96 p-4 flex flex-col gap-2"
              >
                <div className="flex gap-3 pb-3 border-b-[1px] border-grey">
                  <div
                    className={`my-auto bg-white border-2 rounded-full text-primary`}
                  >
                    <FaDotCircle
                      className={`${
                        notification.status === "waiting"
                          ? "text-yellow-400"
                          : notification.status === "accepted"
                          ? "text-green-500"
                          : "text-primary"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="w-auto">
                      <label
                        htmlFor=""
                        className="font-medium text-black  max-h-20 overflow-y-auto"
                      >
                        from :
                        <span className="">
                          {" "}
                          {notification.sender.firstName +
                            " " +
                            notification.sender.lastName}{" "}
                        </span>
                      </label>
                    </div>
                    <div className="text-xs text-greyAlternative">
                      {notification.Project.title}
                    </div>
                  </div>
                </div>
                <div>
                  <TruncatedMessage
                    message={`${notification.message}`}
                    maxLength={90}
                    textClass=""
                  />
                </div>
                <div className="grid grid-flow-col justify-stretch gap-3 justify-self-end text-center">
                  {notification.status === "waiting" ? (
                    <>
                      <button
                        className="bg-secondary hover:bg-secondaryAlternative active:scale-95 p-2 
                      rounded-lg transition-all duration-75 ease-in text-white"
                        onClick={() => {
                          sendResponseInvitation(notification, "accepted");
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-primary hover:bg-primaryAlternative active:scale-95 w-full p-2 
                      rounded-lg transition-all duration-75 ease-in text-white"
                        onClick={() =>
                          sendResponseInvitation(notification, "rejected")
                        }
                      >
                        Reject
                      </button>
                    </>
                  ) : notification.status === "accepted" ? (
                    <div className="font-bold mt-2">
                      Invitation has been accepted
                    </div>
                  ) : (
                    <div className="font-bold mt-2">
                      Invitation has been rejected
                    </div>
                  )}
                </div>
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default NotificationStudent;
