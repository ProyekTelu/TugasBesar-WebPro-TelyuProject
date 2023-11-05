import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { AiFillCloseCircle } from "react-icons/ai";

function CreateProjectModal({ isOpen, closeModal }) {
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
    <div className="w-full ">
      <div className="justify-center modal-container w-3/5 mx-auto transition-transform transform hover:scale-105">
        <div className="w-full relative shadow-lg p-12 my-4 rounded-3xl justify-center h-full overflow-y-auto bg-whiteAlternative flex flex-col">
          <button
            onClick={closeModal}
            className=" my-auto focus:outline-none cursor-pointer self-end active:scale-95 duration-100 ease-in hover:scale-105"
          >
            <AiFillCloseCircle className="text-4xl" />
          </button>
          <h1 className="text-center text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
            Create Project
          </h1>
          <form
            className="flex flex-col sm:flex-row gap-4 xs:gap-6 md:gap-8 xl:gap-10"
            onSubmit={handleSubmit}
          >
            <div className="w-full xs:w-1/2">
              <div className="flex flex-col mt-4">
                <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                  Project Title{" "}
                  {projectTitle.length < 3 && projectTitle != "" && (
                    <span className="text-primary font-normal">
                      At least 3 characters.
                    </span>
                  )}
                </label>
                <div className="">
                  <input
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    placeholder="Project Title"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                  Description{" "}
                  {description.length < 12 && description !== "" && (
                    <span className="text-primary font-normal">
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
                    onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label
                  className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block"
                  htmlFor="">
                  Faculty
                </label>
                <select
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  className="p-1 sm:p-2 text-xs w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                  name=""
                  id="">
                  <option>Informatika</option>
                  <option>Industri Kreatif</option>
                  <option>Teknik Elektro</option>
                </select>
              </div>
            </div>

            <div className="w-full xs:w-1/2">
              <div className="flex flex-col mt-4">
                <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                  Group Chat Link{" "}
                  {!groupChatLink.includes(".com") && groupChatLink !== "" && (
                    <span className="text-primary font-normal">
                      Fill the correct link.
                    </span>
                  )}
                </label>
                <div className="">
                  <input
                    type="text"
                    value={groupChatLink}
                    onChange={(e) => setGroupChatLink(e.target.value)}
                    className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    placeholder="http://www.example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block ">
                  Maximum Member{" "}
                  {maxMembers < 1 && maxMembers !== "" && (
                    <span className="text-primary font-normal">
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
              

            <div className="flex flex-row justify-between mt-4">
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
          </form>

          <div className="w-full flex justify-center mt-10 pt-0 xs:pt-2">
            <button
              type="submit"
              className={`" text-white py-2 sm:py-3 text-xs md:text-lg px-8 md:px-5 rounded-md md:rounded-lg block" ${
                !isInputComplete
                  ? "bg-black cursor-not-allowed"
                  : " bg-secondary hover:bg-brightPrimary cursor-pointer"
              }`}
              disabled={!isInputComplete}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectModal;
