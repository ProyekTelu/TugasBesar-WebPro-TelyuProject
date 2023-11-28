import React, { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import "../../../Style/homePage.css";
import "swiper/css";
import "swiper/css/scrollbar";
import Modal from "react-modal";
import ProjectDetailModal from "../ProjectDetailModal";

function HomeStudent() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const [isLoadingNewestProject, setIsLoadingNewestProject] = useState(false);
  const [isLoadingMyProject, setIsLoadingMyProject] = useState(false);
  const [showNoProjectMessage, setShowNoProjectMessage] = useState(false);
  const [showNoNewestProjectMessage, setShowNoNewestProjectMessage] =
    useState(false);

  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  useEffect(() => {
    if (!storedUser) {
      navigate("/");
    }
  }, [navigate, storedUser]);

  const [slidesPerView, setSlidesPerView] = useState(1);
  const [myProject, setMyProject] = useState([]);

  const [activeStatus, setActiveStatus] = useState("Active");
  const listStatus = ["Active", "Finished"];
  const handleStatusChange = (e) => {
    setActiveStatus(e.target.value);
  };

  const [newestProject, setNewestProject] = useState([]);

  const formatDate = (inputDate) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };

    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1060) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }

      if (newestProject.length === 0) {
        setSlidesPerView(1);
      }

      if (isLoadingNewestProject === true) {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [newestProject]);

  useEffect(() => {
    const fetchNewestProjects = async () => {
      setIsLoadingNewestProject(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/newestProjects"
        );
        setNewestProject(response.data);
        if (response.data.length === 0) {
          setShowNoNewestProjectMessage(true);
        }
      } catch (error) {
        console.error("Failed to fetch newest projects:", error);
      } finally {
        setIsLoadingNewestProject(false);
      }
    };

    fetchNewestProjects();
  }, []);

  useEffect(() => {
    const fetchMyProjects = async () => {
      setIsLoadingMyProject(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/projects/${user.userID}`
        );
        setMyProject(response.data);
        if (response.data.length === 0) {
          setShowNoProjectMessage(true);
        }
      } catch (error) {
        console.log("Failed to fetch my projects:", error);
      } finally {
        setIsLoadingMyProject(false);
      }
    };

    fetchMyProjects();
  }, [user.userID]);

  const [isModalOpenDetail, setModalOpenDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModalDetail = async (projectId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/project/${projectId}`
      );
      setSelectedProject(response.data);
      setModalOpenDetail(true);
    } catch (error) {
      console.error("Failed to fetch project:", error);
    }
  };

  const closeModalDetail = () => {
    setModalOpenDetail(false);
  };

  return (
    <div className="w-full p-4 md:p-12 overflow-y-auto scroll-smooth min-h-screen md:h-screen flex flex-col">
      <div className="mb-6">
        <h1 className="text-[26px] md:text-4xl font-bold text-start px-4">
          Newest Projects!
        </h1>
      </div>
      <div className="max-h-full flex flex-col transition">
        <Swiper
          modules={[Pagination, Autoplay]}
          className="w-full z-0 transition h-full "
          spaceBetween={22}
          pagination
          navigation
          slidesPerView={slidesPerView}
        >
          {isLoadingNewestProject ? (
            <SwiperSlide className="w-full z-10 border px-6 pt-6 pb-10 rounded-lg flex items-center justify-center cursor-pointer transition">
              <MoonLoader
                size={50}
                color="rgba(214, 54, 54, 1)"
                loading={isLoadingNewestProject}
              />
            </SwiperSlide>
          ) : showNoNewestProjectMessage ? (
            <SwiperSlide className="w-full z-10 h-full bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-center  cursor-pointer transition ">
              There is no newest Project
            </SwiperSlide>
          ) : (
            newestProject.map((project, index) => (
              <SwiperSlide
                key={index}
                className="w-full z-10 h-full lg:flex-col border px-6 pt-6 pb-10 rounded-lg justify-center  cursor-pointer transition "
              >
                <div className="flex flex-col sm:flex-row w-full justify-between">
                  <div className="">
                    <h1 className="text-left text-primary text-base md:text-xl lg:text-2xl font-bold line-clamp-1">
                      {project.title}
                    </h1>
                  </div>
                  <div className="flex gap-2 mt-2 md:my-auto text-base md:text-xl lg:text-2xl">
                    <GoPersonFill className=" my-auto" />
                    <p className="font-bold">
                      {project.projectMemberCount}/{project.totalMember}
                    </p>
                  </div>
                </div>

                <h1 className="text-left text-xs md:text-sm xl:text-lg mt-2 font-medium text-black">
                  By{" "}
                  {project.projectOwner.firstName +
                    " " +
                    project.projectOwner.lastName}
                </h1>
                <hr className="my-2 rounded-full" />
                <p className="line-clamp-2 text-xs md:text-sm xl:text-lg overflow-y-auto min-h-[2rem]">
                  {project.description}
                </p>
                <div className="py-3 rounded-2xl flex flex-col gap-1 mt-2">
                  {/* <p className="font-bold">Skill</p> */}
                  <div className="flex flex-wrap gap-2 max-h-7 overflow-y-auto">
                    {project.ProjectSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-primary px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                      >
                        <span className="text-[10px] md:text-xs xl:text-sm">
                          {skill.Skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl flex flex-col gap-1 ">
                  {/* <p className="font-bold">Role</p> */}
                  <div className="flex flex-wrap gap-2 max-h-7 overflow-y-auto">
                    {project.ProjectRoles.map((role, index) => (
                      <div
                        key={index}
                        className="bg-blue-400 px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                      >
                        <span className="text-[10px] md:text-xs xl:text-sm">
                          {role.Role.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col my-auto text-xs md:text-sm xl:text-lg ">
                    <p className="font-bold">Open Until</p>
                    <p>{formatDate(project.openUntil)}</p>
                  </div>
                  <button
                    className="px-2 py-2 md:py-3 md:px-4 text-[8px] rounded-md font-semibold text-xs md:text-sm xl:text-lg  text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md  hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                    onClick={() => openModalDetail(project.projectID)}
                  >
                    Detail Project
                  </button>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>

      <div className="flex flex-col lg:flex-row h-full mt-8 gap-6">
        <div className="rounded-2xl w-full lg:w-3/4 flex flex-col h-full">
          <div className="flex justify-between gap-2 mb-6">
            <h1 className="text-[26px] md:text-4xl font-bold text-center px-4">
              Your Projects
            </h1>
            <select
              value={activeStatus}
              onChange={handleStatusChange}
              className="px-4 font-bold border rounded-full cursor-pointer bg-white text-lg appearance-none"
            >
              {listStatus.map((status, index) => (
                <option
                  key={index}
                  value={status}
                  className="px-2 py-2 text-gray-800"
                >
                  {status}
                </option>
              ))}
            </select>
          </div>

          <Swiper
            modules={[Pagination]}
            className="w-full h-full z-0"
            spaceBetween={22}
            slidesPerView={1}
            pagination
          >
            {isLoadingMyProject ? (
              <SwiperSlide className="w-full z-10 border px-6 pt-6 pb-10 rounded-lg flex items-center justify-center cursor-pointer transition">
                <MoonLoader
                  size={50}
                  color="rgba(214, 54, 54, 1)"
                  loading={isLoadingMyProject}
                />
              </SwiperSlide>
            ) : showNoProjectMessage ? (
              <SwiperSlide className="w-full z-10 border px-6 pt-6 pb-10 rounded-lg flex items-center justify-center cursor-pointer transition text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                You dont have any project
              </SwiperSlide>
            ) : (
              myProject.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full z-10 border flex-col px-6 pt-6 pb-10 rounded-lg flex justify-between cursor-pointer transition "
                >
                  <div className="flex flex-col">
                    <div className="flex w-full justify-between gap-2">
                      <div className="flex flex-col md:flex-row md:gap-2  ">
                        <h1 className="text-left my-auto text-primary text-base md:text-xl lg:text-2xl font-bold line-clamp-1 ">
                          {project.title}
                        </h1>
                        <h1 className="text-left my-auto text-blackAlternative text-sm md:text-xl lg:text-2xl font-bold line-clamp-1 ">
                          {"as " + project.ProjectMembers[0].Role.name}
                        </h1>
                      </div>
                      <div className=" bg-green-500 px-2 py-2 md:py-3 md:px-4 whitespace-nowrap my-auto rounded-full border-2 border-whiteAlternative">
                        <h1 className="rounded-md font-bold text-[7px] md:text-xs xl:text-sm  text-white my-auto ">
                          {project.projectStatus}
                        </h1>
                      </div>
                    </div>
                    <h1 className="text-left text-xs md:text-sm xl:text-lg mt-1 font-medium text-black">
                      By{" "}
                      {project.projectOwner.firstName +
                        " " +
                        project.projectOwner.lastName}
                    </h1>
                    <hr className="my-2 rounded-full" />
                    <p className="line-clamp-2 md:line-clamp-3 overflow-y-auto min-h-[2rem] text-xs md:text-sm xl:text-lg">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-between flex-col lg:flex-row mt-4">
                    <div className="flex flex-col my-auto">
                      <p className="font-bold text-xs md:text-sm xl:text-lg">
                        Deadline
                      </p>
                      <p className="text-xs md:text-sm xl:text-lg">
                        {formatDate(project.endProject)}
                      </p>
                    </div>

                    <div className="flex flex-row gap-3 self-end mt-2 md:mt-0">
                      <button
                        className="px-2 py-2 md:py-3 md:px-4 rounded-md font-semibold text-[8px] md:text-sm xl:text-lg text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                        type="submit"
                      >
                        Group Chat
                      </button>
                      <button
                        className="px-2 py-2 md:py-3 md:px-4 rounded-md font-semibold text-[8px] md:text-sm xl:text-lg text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                        type="submit"
                      >
                        Open Project
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
        <div
          className="flex flex-row lg:flex-col border hover:shadow-lg md:gap-2 
          py-6 px-4 justify-center items-center w-full rounded-2xl bg-whiteAlternative cursor-pointer transition active:scale-95 "
          style={{ userSelect: "none" }}
          onClick={() => {
            navigate("/telyuProject/listProject");
          }}
        >
          <BsFillPlayFill className="w-20 h-20 md:w-30 md:h-30 lg:h-36 lg:w-36" />
          <div className="text-xl lg:text-5xl flex font-bold">
            Find <br /> Projects
          </div>
        </div>
      </div>
      <Modal
        className="w-sreen h-screen flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
        isOpen={isModalOpenDetail}
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
    </div>
  );
}

export default HomeStudent;
