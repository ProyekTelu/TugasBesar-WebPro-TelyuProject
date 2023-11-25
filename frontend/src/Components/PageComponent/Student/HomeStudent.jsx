import React, { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Pagination, Scrollbar } from "swiper/modules";
import { Dropdown } from "primereact/dropdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";
import axios from "axios";
import "../../../Style/homePage.css";
import "swiper/css";
import "swiper/css/scrollbar";

function HomeStudent() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  });

  const [slidesPerView, setSlidesPerView] = useState(1);

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
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [newestProject]);

  useEffect(() => {
    const fetchNewestProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/newestProjects"
        );
        setNewestProject(response.data);
      } catch (error) {
        console.error("Failed to fetch newest projects:", error);
      }
    };

    fetchNewestProjects();
  }, []);

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full h-full flex flex-col">
      <div className={` py-4 flex-none w-fit  rounded-2xl `}>
        <h1 className="text-[26px] md:text-5xl font-bold text-start px-4">
          Newest Projects!
        </h1>
      </div>
      <div className="max-h-full flex flex-col">
        <Swiper
          modules={[Pagination]}
          className="w-full h-full z-0 "
          spaceBetween={22}
          pagination
          navigation
          slidesPerView={slidesPerView}
        >
          {newestProject.length > 0 ? (
            newestProject.map((project, index) => (
              <SwiperSlide
                key={index}
                className="w-full z-10 h-full bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-center  cursor-pointer transition "
              >
                <div className="flex flex-col md:flex-row w-full justify-between">
                  <div className="">
                    <h1 className="text-left text-primary text-3xl font-bold line-clamp-1">
                      {project.title}
                    </h1>
                  </div>
                  <div className="flex gap-2 mt-2 md:my-auto">
                    <GoPersonFill className="text-3xl" />
                    <p className="text-2xl font-bold">
                      {project.projectMemberCount}/{project.totalMember}
                    </p>
                  </div>
                </div>

                <h1 className="text-left text-lg mt-2 font-medium text-black">
                  By{" "}
                  {project.projectOwner.firstName +
                    " " +
                    project.projectOwner.lastName}
                </h1>
                <hr className="my-2 rounded-full" />
                <p className="line-clamp-2 overflow-y-auto min-h-[2rem]">
                  {project.description}
                </p>
                <div className="py-3 rounded-2xl flex flex-col gap-1 mt-2">
                  {/* <p className="font-bold">Skill</p> */}
                  <div className="flex flex-wrap gap-2 max-h-10  overflow-y-auto">
                    {project.ProjectSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-primary px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                      >
                        <span>{skill.Skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl flex flex-col gap-1 ">
                  {/* <p className="font-bold">Role</p> */}
                  <div className="flex flex-wrap gap-2 max-h-10  overflow-y-auto">
                    {project.ProjectRoles.map((role, index) => (
                      <div
                        key={index}
                        className="bg-blue-400 px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                      >
                        <span>{role.Role.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col">
                    <p className="font-bold">Open Until</p>
                    <p>{formatDate(project.openUntil)}</p>
                  </div>
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md  hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Detail Project
                  </button>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="w-full z-10 h-full  bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-center  cursor-pointer transition ">
              Data Kosong
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row h-full mt-6 gap-6">
        <div className="rounded-3xl w-full md:w-3/4 flex flex-col gap-4 h-full">
          <div className="flex justify-between gap-2">
            <h1 className="text-[26px] md:text-5xl font-bold text-center my-4 px-4">
              Your Projects
            </h1>
            <select
              value={activeStatus}
              onChange={handleStatusChange}
              className="px-4 font-bold rounded-xl text-lg appearance-none"
            >
              {listStatus.map((status, index) => (
                <option
                  key={index}
                  value={status}
                  className="px-2 py-2 bg-white text-gray-800"
                >
                  {status}
                </option>
              ))}
            </select>
          </div>

          <Swiper
            modules={[Pagination]}
            className="w-full z-0"
            spaceBetween={22}
            slidesPerView={1}
            pagination
          >
            <SwiperSlide className="w-full z-10  bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-between  cursor-pointer transition ">
              <div className="flex flex-col">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col md:flex-row gap-2">
                    <h1 className="text-left text-primary text-3xl font-bold line-clamp-1">
                      Zamrud pohon cemara amigos{" "}
                    </h1>
                    <h1 className="text-left text-blackAlternative text-3xl font-bold line-clamp-1">
                      (Front-End Developer)
                    </h1>
                  </div>

                  <h1 className="px-4 py-2 rounded-md bg-green-500 text-white my-auto">
                    Active
                  </h1>
                </div>
                <h1 className="text-left text-lg mt-2 font-medium text-black">
                  By Muhammad Zaky Fathurahim
                </h1>
                <hr className="my-2 rounded-full" />
                <p className="line-clamp-2 overflow-y-auto min-h-[2rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolore deserunt dignissimos, facilis inventore
                  distinctio quae natus blanditiis iusto repudiandae! Ut facere
                  iure nisi enim mollitia accusantium sapiente, quo, unde
                  reiciendis incidunt, velit aspernatur et adipisci debitis
                  minima quia ipsum porro rerum vel! Ratione, qui dolorum vero
                  omnis ipsa vitae!
                </p>
              </div>
              <div className="flex justify-between flex-col lg:flex-row mt-4">
                <div className="flex flex-col">
                  <p className="font-bold">Deadline</p>
                  <p>02-September-2023</p>
                </div>

                <div className="flex flex-row gap-3 self-end">
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Go to Group Chat
                  </button>
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Open Project
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full z-10  bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-between  cursor-pointer transition ">
              <div className="flex flex-col">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col md:flex-row gap-2">
                    <h1 className="text-left text-primary text-3xl font-bold line-clamp-1">
                      Samsudin Samluy Kantin Telyu{" "}
                    </h1>
                    <h1 className="text-left text-blackAlternative text-3xl font-bold line-clamp-1">
                      (Backend Developer)
                    </h1>
                  </div>

                  <h1 className="px-4 py-2 rounded-md bg-green-500 text-white my-auto">
                    Active
                  </h1>
                </div>
                <h1 className="text-left text-lg mt-2 font-medium text-black">
                  By Deddy Corbuzier
                </h1>
                <hr className="my-2 rounded-full" />
                <p className="line-clamp-2 overflow-y-auto min-h-[2rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolore deserunt dignissimos, facilis inventore
                  distinctio quae natus blanditiis iusto repudiandae! Ut facere
                  iure nisi enim mollitia accusantium sapiente, quo, unde
                  reiciendis incidunt, velit aspernatur et adipisci debitis
                  minima quia ipsum porro rerum vel! Ratione, qui dolorum vero
                  omnis ipsa vitae!
                </p>
              </div>
              <div className="flex justify-between flex-col lg:flex-row mt-4">
                <div className="flex flex-col">
                  <p className="font-bold">Deadline</p>
                  <p>02-September-2023</p>
                </div>

                <div className="flex flex-row gap-3 self-end">
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Go to Group Chat
                  </button>
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Open Project
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="flex md:flex-col hover:shadow-lg py-6 px-4 justify-center items-center w-full h-full rounded-3xl bg-whiteAlternative cursor-pointer transition active:scale-95 "
          style={{ userSelect: "none" }}
          onClick={() => {
            navigate("/telyuProject/listProject");
          }}
        >
          <div className="">
            <BsFillPlayFill className="w-20 h-20 md:w-40 md:h-40" />
          </div>
          <div className="text-xl sm:text-2xl md:text-4xl xl:text-5xl flex font-bold ">
            Find <br /> Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStudent;
