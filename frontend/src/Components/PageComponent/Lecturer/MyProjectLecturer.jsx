import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ProjectDetailModal from "../ProjectDetailModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateProjectModal from "./CreateProjectModal";
import axios from "axios";
import { Tooltip } from "@material-tailwind/react";
import { MdOutlineAddchart } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";

function MyProjectLecturer() {
  const storedUser = localStorage.getItem("user");
  const [isModalOpenDetail, setModalOpenDetail] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const User = JSON.parse(localStorage.getItem("user"));

  Modal.setAppElement(document.getElementById("root"));

  const openModalDetail = () => {
    setModalOpenDetail(true);
  };

  function openModal() {
    setIsOpen(true);
  }

  const [isLoadingMyProject, setIsLoadingMyProject] = useState(false);
  const [showNoProjectMessage, setShowNoProjectMessage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [myProject, setMyProject] = useState([]);

  const [activeStatus, setActiveStatus] = useState("All");
  const listStatus = ["All", "Active", "Finished", "Open Request"];
  useEffect(() => {
    const fetchMyProjects = async () => {
      setIsLoadingMyProject(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/lecturer/projects/${user.userID}`
        );
        if (response.data.length === 0) {
          setShowNoProjectMessage(true);
        }
        const filteredProjects =
          activeStatus === "All"
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
  }, [user.userID, activeStatus, searchTerm, setMyProject]);

  return (
    <div className="flex justify-center flex-col w-full p-4 md:p-12 overflow-y-auto">
      <div className="w-full flex justify-start flex-col">
        <div className="px-4 mb-2">
          <h1 className="text-xl md:text-2xl text-primary font-bold text-start">
            My Project
          </h1>
        </div>
      </div>
      <div className="w-full mt-4 mx-auto flex justify-center ">
        <div className="flex flex-col w-full ">
          <div className="border-grey border rounded-xl py-4 h-[83vh]">
            <div className="flex justify-between px-6 pb-2">
              <h1 className="text-xl font-semibold md:text-2xl">Projects</h1>
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  className="border rounded-md p-2 focus:outline-none"
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
            <div className="flex flex-col max-h-[65vh] overflow-y-auto">
              {myProject.map((project, index) => (
                <div key={index} className="flex-col group relative">
                  <hr className="w-[97%] absolute mx-auto group-hover:hidden" />
                  <div
                    className="flex flex-row py-4 group-hover:bg-whiteAlternative 
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
                              : ""
                          } `}
                        >
                          <FaDotCircle className="text-lg mx-auto shadow-md rounded-full" />
                        </p>
                      </Tooltip>
                      <h1 className="my-auto font-semibold">{project.title}</h1>
                    </div>
                    <div className="px-4">aaaa</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjectLecturer;
