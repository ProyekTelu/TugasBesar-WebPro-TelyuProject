import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  select,
} from "@material-tailwind/react";

//modal command
export function Requested() {
  const navigate = useNavigate();
  const [request, setReq] = useState([]);
  const [seeRequest, setRequestProject] = useState([]);
  const [photoProfile, setphotoProfile] = useState([]);
  const [userImage, setUserImage] = useState([]);
  const [projectID, setProjectID] = useState([]);
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [imageSrc, setImageSrc] = useState('');
  const [LoadingMyRequest, setIsLoadingMyRequest] = useState(false);
  const [NoMyRequest, setIsNoRequest] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    if (!storedUser) {
      navigate("/");
    }
  }, [navigate, storedUser]);

  useEffect(() => {
    setReq();
  });




  useEffect(() => {
    const fetchRequestProject = async () => {
      setIsLoadingMyRequest(true);
      try {
        const requestRespone = await axios.get(
          `http://localhost:5000/requestMember/${user.userID}`

        );
        setRequestProject(requestRespone.data);
       
        
        if (requestRespone.data.lenght === 0) {
          setIsNoRequest(true);
        }

      } catch (error) {
        console.error("Failed to Get Requested");
      } finally {
        setIsLoadingMyRequest(false);
      }
    };
    fetchRequestProject();
  }, [user]);

  const DetailModal = async () =>{

  }


  const [modal, setModal] = useState(false);

  const[selectedRequest, setSelectedRequest] = useState([]);

  const toggleModal = async (projectID,requestID) => {
    try{
      setSelectedProject(seeRequest.find(project => project.projectID === projectID));
      
      if (selectedProject) {
        // Temukan permintaan dengan requestID yang sesuai di dalam proyek yang telah ditemukan
        const selectedRequest = selectedProject.Requests.find(request => request.requestID === requestID);
  
        if (selectedRequest) {
          // Lakukan apa pun yang diperlukan dengan data permintaan yang telah ditemukan
          setSelectedRequest(selectedRequest);
          setModal(true);
        } else {
          console.error("Request not found for requestID:", requestID);
        }
      } else {
        console.error("Project not found for projectID:", projectID);
      }
    }catch(error){
      console.error("Failed to fetch project:", error);
    }

 
  };

  //DIalog command
  const [open, setOpen] = useState(false);
  const closeModalDetail = () => {
    setModal(false);
  };

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(toggleModal);


  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // }

  // const handleDecline = () => {
  //   setOpen(false);
  // }

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // }  else {
  //   document.body.classList.remove("active-modal");
  // }
  //======================//

  return (

    <div className="p-4 md:p-12 overflow-y-auto flex justify-center w-full  ">

      <div className="w-full p-4  md:p-12 overflow-y-auto scroll-smooth h-screen md:min-h-screen flex flex-col">
        <div className="flex justify-between gap-5 flex-col md:flex-row mb-8">
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

        {seeRequest.map((request, index) => (
          <div key={index} className=" w-full flex flex-col ">
          

            {request.Requests.map((req, reqIndex) => (
              <div
                key={reqIndex}
                className="w-full shadow-md flex flex-col  rounded-lg  duration-300  bg-whiteAlternative p-4 mb-3"
              >
                <div className="flex flex-col md:flex-row justify-center w-full px-4">
                  <div>
                    <img
                      className="rounded-full h-36 w-36 my-auto bg-black mx-auto mb-4 md:mb-0"
                      src={""}
                      alt="/"
                    />
                  </div>

                  <div className="flex flex-auto flex-col my-auto w-full gap-1 sm:text-left mb-4">
                    <label className=" text-primary font-bold mx-auto md:mx-8 text-lg md:text-2xl mb-2">
                      {req.user.firstName +
                        " " +
                        req.user.lastName}
                    </label>
                    <label className="mx-auto md:mx-8 text-md md:text-lg space-x-3">
                      <span className="font-semibold text-md md:text-lg ">
                        Project <span className="ml-4">:</span>
                      </span>
                      <span className=" text-blue-800 text-md md:text-lg">
                        {request.title}
                      </span>
                    </label>
                    <label className="mx-auto md:mx-8 text-md md:text-lg space-x-3">
                      <span className="font-semibold text-md md:text-lg">
                        Team <span className=" ml-8">:</span>
                      </span>
                      <span className="text-sm">{req.Role.name}</span>
                    </label>
                    <label className="mx-auto md:mx-8 text-md md:text-lg line-clamp-2 space-x-3">
                      <span className="font-semibold text-md md:text-lg">
                        Message<span className="ml-1">:</span>
                      </span>
                      <span className=" text-sm md:text-sm">{req.message}</span>
                    </label>
                  </div>

                  <div className=" flex flex-row md:flex-col justify-center gap-4 my-2">
                    <button
                      onClick={handleOpen}
                      className="  hover:bg-secondaryAlternative  transition-transform transform hover:scale-105 active:scale-95 p-4 bg-secondary  w-24 md:w-32 h-14   rounded-md text-white"
                    >
                      Approve
                    </button>
                    <button
                      onClick={handleOpen}
                      className="  hover:bg-primaryAlternative transition-transform transform hover:scale-105 active:scale-95  p-4 bg-primary w-24  h-14  md:w-32  rounded-md text-white"
                    >
                      Decline
                    </button>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <label
                    onClick={() => toggleModal(request.projectID,req.requestID)}
                    className="transition-transform transform hover:scale-105 mt-4 text-cyan-400 cursor-pointer active:scale-95"
                  >
                    View  {req.user.firstName}  Requested
                  </label>
                </div>
              </div>
            ))}
          </div>

        ))}

      </div>

      <div>
        <Dialog
          open={open}
          handler={handleOpen}
          className="screen xs:max-w-[80vw] md:w-[60vw] xl:w-[35vw] h-screen xs:h-auto xs:max-h-[80vh] overflow-y-auto md:overflow-hidden bg-whiteAlternative rounded-xl px-6 py-6 border-2"
        >
          <DialogHeader></DialogHeader>
          <DialogBody className=" font-bold">
            Apakah anda yakin dengan pilihan ini ?
          </DialogBody>

          <DialogFooter>
            <div className="flex flex-row-reverse justify-center gap-4 my-2">
              <Button
                variant="text"
                color="red"
                onClick={handleClose}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button
                className="hover:bg-secondaryAlternative  transition-transform transform hover:scale-105 active:scale-95 p-4 bg-secondary  w-15 md:w-32 h-11  rounded-md text-white"
                onClick={handleOpen}
              >
                <span>Confirm</span>
              </Button>
            </div>
          </DialogFooter>
        </Dialog>

      </div>
  
      {modal && (
          
        <div
          onClick={closeModalDetail}
          className=" fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
        >
          
          <div className="modal-container transition-transform transform hover:scale-110">
            <div className=" -screen xs:max-w-[80vw] md:w-[60vw] xl:w-[35vw] h-screen xs:h-auto xs:max-h-[80vh] overflow-y-auto md:overflow-hidden bg-whiteAlternative rounded-xl px-6 py-6 border-2">
              <div className="  mb-1 flex justify-between ">
                <h2 className=" text-primary text-3xl font-semibold my-auto">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeModalDetail}
                  className=" my-auto focus:outline-none transition-transform transform hover:scale-110"
                >
                  <AiFillCloseCircle className="text-4xl" />
                </button>
              </div>
              <hr className="my-4 rounded-full bg-tertiaryAlternative" />
              <div className=" mb-1 flex justify-between">
                <h2 className=" text-2xl font-semibold my-auto">
                  Requested By {selectedRequest.user.firstName}
                </h2>
              </div>
              <div className=" mb-4 flex justify-between">
                <h2 className=" text-1xl font-semibold my-auto">
                  From team {"WPL"}
                </h2>
              </div>

              <div className="mb-4">
                <label className="text-gray-600 font-semibold">Message :</label>
                <p>
                  {selectedRequest.message}
                </p>
              </div>
              <div className="mb-9">
                <label className="text-gray-600 font-semibold">
                  Dokumen File :
                </label>
                <p>https://git-scm.com/download/win</p>
              </div>

              <div className=" flex flex-row gap-4 w-full align-bottom  justify-center">
                <button
                  onClick={handleOpen}
                  className="  hover:bg-secondaryAlternative transition-transform transform hover:scale-105 active:scale-95 p-4  bg-secondary  w-32  rounded-md  text-white"
                >
                  Approve
                </button>
                <button
                  onClick={handleOpen}
                  className="hover:bg-primaryAlternative transition-transform transform hover:scale-105 active:scale-95 p-4 bg-primary w-32  rounded-md text-white"
                >
                  Decline
                </button>
              </div>
            </div>
            
          </div>
        </div>
     )};
    </div>
  );
}

export default Requested;
