import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ProjectDetailModal from "./ProjectDetailModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";

function MyProject() {
  const [isModalOpenDetail, setModalOpenDetail] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModalDetail = () => {
    setModalOpenDetail(true);
  };

  const closeModalDetail = () => {
    setModalOpenDetail(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //modal createProject
  const [projectTitle, setProjectTitle] = useState("");
  const [groupChatLink, setGroupChatLink] = useState("");
  const [description, setDescription] = useState("");
  const [maxMembers, setMaxMembers] = useState("");
  const [faculty, setFaculty] = useState("Informatika");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isInputComplete, setIsInputComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting form data
    console.log({
      projectTitle,
      groupChatLink,
      description,
      maxMembers,
      faculty,
      startDate,
      endDate,
    });
  };

  useEffect(() => {
    setIsInputComplete(
      projectTitle !== "" &&
        projectTitle.length > 2 &&
        groupChatLink !== "" &&
        groupChatLink.includes(".com") &&
        description !== "" &&
        description.length > 11 &&
        maxMembers !== "" &&
        maxMembers > 0 &&
        faculty !== "" &&
        startDate !== "" &&
        endDate !== ""
    );
  }, [
    projectTitle,
    groupChatLink,
    description,
    maxMembers,
    faculty,
    startDate,
    endDate,
  ]);

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12 lg:mt-10 flex justify-center relative">
        <div className="w-full h-full">
          <div className="w-full h-min relative border-2 lg:flex-col p-5 my-4 rounded-lg justify-center overflow-y-auto max-h-[70vh]">
            <h1 className="text-left text-secondary text-xl font-bold">
              EcoScape
            </h1>
            <h1 className="border-b-2 border-gray-400 my-2"> </h1>
            <p>
              EcoScape is an ambitious environmental conservation project aimed
              at preserving and restoring natural ecosystems in urban areas. We
              believe that by creating green spaces and planting native trees
              and flowers, we can ....
            </p>
            <div className="text-right mt-3 text-blue-800 font-semibold">
              <Link onClick={openModalDetail}>Show More</Link>
            </div>
          </div>
          <div className="w-full h-min relative border-2 lg:flex-col p-5 my-4 rounded-lg justify-center overflow-y-auto max-h-[75vh]">
            <h1 className="text-left text-secondary text-xl font-bold">
              TechLink
            </h1>
            <h1 className="border-b-2 border-gray-400 my-2"> </h1>
            <p>
              TechLink is a groundbreaking initiative dedicated to bridging the
              digital divide. Our goal is to provide underprivileged communities
              with access to technology and digital education, enabling them to
              participate fully in the modern ....
            </p>
            <div className="text-right mt-3 text-blue-800 font-semibold">
              <Link onClick={openModalDetail}>Show More</Link>
            </div>
          </div>
          <div className="w-full h-min relative border-2 lg:flex-col p-5 my-4 rounded-lg justify-center overflow-y-auto max-h-[75vh]">
            <h1 className="text-left text-secondary text-xl font-bold">
              HealthSync
            </h1>
            <h1 className="border-b-2 border-gray-400 my-2"> </h1>
            <p>
              HealthSync is a revolutionary healthcare platform designed to
              streamline and improve patient care. By integrating medical
              records, telemedicine, and health tracking, we aim to empower
              individuals ....
            </p>
            <div className="text-right mt-3 text-blue-800 font-semibold">
              <Link onClick={openModalDetail}>Show More</Link>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={openModal}
              className="w-60 h-10 bg-lime-400 rounded-3xl shadow hover:bg-white "
            >
              <div className="text-white hover:text-lime-400 text-xl font-bold font-['Inter']">
                {" "}
                Create Project
              </div>
              <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm">
                  <div className="justify-center modal-container transition-transform transform hover:scale-110">
                    <button
                      onClick={closeModal}
                      className=" my-auto focus:outline-none cursor-pointer"
                    >
                      <AiFillCloseCircle className="text-4xl" />
                    </button>
                    <h1 className="text-center text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
                      Create Project
                    </h1>
                    <div className="w-full relative shadow-lg lg:flex-row p-5 my-4 rounded-lg justify-center h-full overflow-y-auto max-h-[75vh]">
                      <form onSubmit={handleSubmit}>
                        <div className="flex gap-5 flex-row w-full m-auto justify-center">
                          <div className="w-full">
                            <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                              Project Title{" "}
                              {projectTitle.length < 3 &&
                                projectTitle != "" && (
                                  <span className="text-brightPrimary font-normal">
                                    At least 3 characters.
                                  </span>
                                )}
                            </label>
                            <div className="">
                              <input
                                type="text"
                                value={projectTitle}
                                onChange={(e) =>
                                  setProjectTitle(e.target.value)
                                }
                                className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                                placeholder="Project Title"
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                              Group Chat Link{" "}
                              {!groupChatLink.includes(".com") &&
                                groupChatLink !== "" && (
                                  <span className="text-brightPrimary font-normal">
                                    Fill the correct link.
                                  </span>
                                )}
                            </label>
                            <div className="">
                              <input
                                type="text"
                                value={groupChatLink}
                                onChange={(e) =>
                                  setGroupChatLink(e.target.value)
                                }
                                className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                                placeholder="http://www.example.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-5 flex-row pt-6 w-full justify-center">
                          <div className="w-full">
                            <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                              Description{" "}
                              {description.length < 12 && description != "" && (
                                <span className="text-brightPrimary font-normal">
                                  At least 12 characters.
                                </span>
                              )}
                            </label>
                            <div className="lb">
                              <textarea
                                rows="7"
                                name="desc"
                                id="desc"
                                placeholder="Write your project description here"
                                className="p-1 sm:p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                              ></textarea>
                            </div>
                          </div>

                          <div className="w-full">
                            <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block ">
                              Maximum Member{" "}
                              {maxMembers < 1 && maxMembers != "" && (
                                <span className="text-brightPrimary font-normal">
                                  At least 1 member.
                                </span>
                              )}
                            </label>
                            <div className="control">
                              <input
                                type="number"
                                className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                                placeholder="0"
                                value={maxMembers}
                                onChange={(e) => setMaxMembers(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-5 flex-row pt-6 w-full justify-center">
                          <div className="w-1/2">
                            <label
                              className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block"
                              htmlFor=""
                            >
                              Faculty
                            </label>
                            <select
                              value={faculty}
                              onChange={(e) => setFaculty(e.target.value)}
                              className="p-1 sm:p-2 text-xs w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                              name=""
                              id=""
                            >
                              <option>Informatika</option>
                              <option>Industri Kreatif</option>
                              <option>Teknik Elektro</option>
                            </select>
                          </div>

                          <div className="flex flex-row justify-between w-1/2">
                            <div className="">
                              <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                Project Start
                              </label>
                              <div className="">
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => {
                                    setStartDate(date);
                                    if (date > endDate) {
                                      setEndDate(date);
                                    }
                                  }}
                                  className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                                  placeholderText="Set Date"
                                />
                              </div>
                            </div>

                            <div className="">
                              <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                Project End
                              </label>
                              <div className="">
                                <DatePicker
                                  selected={endDate}
                                  onChange={(date) => setEndDate(date)}
                                  minDate={startDate}
                                  className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                                  placeholderText="Set Date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex justify-center mt-10 pt-0 xs:pt-2">
                          <button
                            type="submit"
                            className={`"text-secondary text-white w-1/4 py-1 block sm:py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg" ${
                              !isInputComplete
                                ? "bg-black cursor-not-allowed"
                                : " bg-primary hover:bg-brightPrimary cursor-pointer"
                            }`}
                            disabled={!isInputComplete}
                          >
                            Create
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Modal>
            </button>
          </div>
        </div>
      </div>
      {isModalOpenDetail && <ProjectDetailModal onClose={closeModalDetail} />}
    </div>
  );
}

export default MyProject;