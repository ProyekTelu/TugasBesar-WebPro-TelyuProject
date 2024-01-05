import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { MoonLoader } from "react-spinners";
import {
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { MdOutlineAddchart } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import ProjectDetailModal from "../ProjectDetailModal";
import CreateProjectModal from "./CreateProjectModal";

function MyProjectLecturer() {
  const storedUser = localStorage.getItem("user");
  const navigate = useNavigate();
  const [isModalOpenDetail, setModalOpenDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoadingDetailProject, setIsLoadingDetailProject] = useState(false);

  Modal.setAppElement(document.getElementById("root"));

  const [isLoadingMyProject, setIsLoadingMyProject] = useState(false);
  const [showNoProjectMessage, setShowNoProjectMessage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [myProject, setMyProject] = useState([]);

  const [activeStatus, setActiveStatus] = useState("ALL");
  const listStatus = [
    "ALL",
    "Active",
    "Finished",
    "Open Request",
    "Waiting to Start",
  ];

  const closeModalDetail = () => {
    setModalOpenDetail(false);
  };

  useEffect(() => {
    const fetchMyProjects = async () => {
      setIsLoadingMyProject(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/lecturer/projects/${user.userID}`
        );

        const filteredProjects =
          activeStatus === "ALL"
            ? response.data
            : response.data.filter(
                (project) => project.projectStatus === activeStatus
              );

        const searchedProjects = filteredProjects.filter((project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setMyProject(searchedProjects);
      } catch (error) {
        console.log("Failed to fetch my projects:", error);
      } finally {
        setIsLoadingMyProject(false);
      }
    };

    fetchMyProjects();
  }, [searchTerm, setMyProject]);

  let messageToShow = "";
  if (showNoProjectMessage) {
    messageToShow = "You don't have any Project";
  } else if (myProject.length === 0 && activeStatus !== "ALL") {
    messageToShow = `You don't have ${activeStatus} Project ${
      searchTerm !== "" ? "with " + searchTerm + " title " : ""
    }`;
  } else if (searchTerm !== "" && myProject.length === 0) {
    messageToShow = `No Project with ${searchTerm} title`;
  }

  const [isModalOpenCreate, setModalOpenCreate] = useState(false);

  function openModalCreate() {
    setModalOpenCreate(true);
  }

  function closeModalCreate() {
    setModalOpenCreate(false);
  }

  console.log(myProject)

  return (
    <div className="flex flex-col w-full p-4 md:p-12 h-screen md:min-h-screen overflow-y-auto relative">
      <>
        <div className="w-full flex justify-start flex-col">
          <div className="px-4 mb-2">
            <h1 className="text-xl md:text-2xl text-primary font-bold text-start">
              My Project
            </h1>
          </div>
        </div>
        <div className="w-full mt-4 mx-auto flex justify-center ">
          <div className="flex flex-col w-full ">
            <div className="border-grey border rounded-xl py-4 w-full h-full md:h-[83vh] relative">
              <div className="flex flex-col md:flex-row justify-between px-6 pb-2">
                <h1 className="text-xl font-semibold md:text-2xl mb-2 md:mb-0">
                  Projects
                </h1>
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    className="border rounded-md p-2 focus:outline-none mb-2 md:mb-0"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div>
                    <Select
                      label="Filter"
                      variant="outlined"
                      value={activeStatus}
                      color="blue-gray"
                      onChange={(value) => setActiveStatus(value)}
                      className="font-medium"
                    >
                      {listStatus.map((status, index) => (
                        <Option
                          key={index}
                          value={status}
                          className="text-gray-800"
                        >
                          {status}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex-col group mt-1 ">
                <div
                  className="flex flex-row py-4 group-hover:bg-whiteAlternative 
                cursor-pointer justify-between"
                  onClick={() => {
                    openModalCreate(storedUser);
                  }}
                >
                  <div className="flex flex-row gap-4 px-4 w-full ">
                    <div className="rounded-lg bg-transparent pl-2 font-semibold">
                      <MdOutlineAddchart className="text-4xl" />
                    </div>
                    <h1 className="pl-1 my-auto font-semibold">
                      Create new project
                    </h1>
                  </div>
                </div>
              </div>
              {messageToShow && (
                <div className=" md:hidden flex-col group mt-1 ">
                  <div
                    className="flex flex-row py-4 border 
                cursor-pointer justify-center"
                  >
                    <h1 className="pl-1 my-auto font-semibold">
                      {messageToShow}
                    </h1>
                  </div>
                </div>
              )}
              {messageToShow && (
                <div className=" hidden md:block absolute top-1/2 right-1/2 translate-x-1/2 rounded-lg items-center justify-center cursor-pointer transition text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {messageToShow}
                </div>
              )}
              <div className="flex flex-col max-h-[65vh] overflow-y-auto">
                {myProject.map((project, index) => (
                  <div
                    key={index}
                    className="flex-col group relative"
                    onClick={() =>
                      navigate(`/telyuProject/myProject/${project.projectID}`)
                    }
                  >
                    <hr className="w-[97%] absolute right-1/2 translate-x-1/2 group-hover:hidden" />
                    <div
                      className="flex flex-row w-full py-4 group-hover:bg-whiteAlternative 
                cursor-pointer justify-between"
                    >
                      <div className="flex flex-row gap-4 px-4 w-full ">
                        <Tooltip content={project.projectStatus}>
                          <p
                            className={`py-2 rounded-lg bg-transparent px-4 font-semibold  ${
                              project.projectStatus === "Open Request"
                                ? "text-yellow-600"
                                : project.projectStatus === "Active"
                                ? "text-green-500"
                                : project.projectStatus === "Finished"
                                ? "text-red-500"
                                : project.projectStatus === "Waiting to Start"
                                ? "text-blue-500"
                                : ""
                            } `}
                          >
                            <FaDotCircle className="text-lg mx-auto shadow-md rounded-full" />
                          </p>
                        </Tooltip>
                        <h1 className="my-auto font-semibold">
                          {project.title}
                        </h1>
                      </div>
                      <div className="px-4 my-auto transition duration-300 rounded-xl z-50">
                        <Menu>
                          <MenuHandler>
                            <Button variant="text">
                              <BsThreeDots />
                            </Button>
                          </MenuHandler>
                          <MenuList>
                            <MenuItem
                              onClick={() =>
                                navigate(
                                  `/telyuProject/myProject/${project.projectID}`
                                )
                              }
                            >
                              Project Detail
                            </MenuItem>
                            <MenuItem>
                              <a
                                href={project.groupLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Open Project Group
                              </a>
                            </MenuItem>
                            <MenuItem>Edit Project</MenuItem>
                          </MenuList>
                        </Menu>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Modal
            className="w-sreen h-screen flex items-center justify-center z-20 bg-opacity-5 backdrop-blur"
            isOpen={isModalOpenDetail}
            closeTimeoutMS={200}
            onRequestClose={closeModalDetail}
          >
            {isModalOpenDetail && (
              <ProjectDetailModal
                className="absolute right-0 left-0 top-0 bottom-0"
                selectedProject={selectedProject}
                onClose={closeModalDetail}
              />
            )}
          </Modal>
          <Modal
            className="w-sreen h-screen flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
            isOpen={isModalOpenCreate}
            onRequestClose={closeModalCreate}
          >
            {isModalOpenCreate && (
              <CreateProjectModal onClose={closeModalCreate} />
            )}
          </Modal>
        </div>
      </>

      {isLoadingDetailProject && (
        <div className="loading-overlay">
          <MoonLoader color="red" loading={isLoadingDetailProject} size={50} />
        </div>
      )}
    </div>
  );
}

export default MyProjectLecturer;
