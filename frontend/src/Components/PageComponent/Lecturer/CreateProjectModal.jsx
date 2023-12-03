import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { AiFillCloseCircle } from "react-icons/ai";

function CreateProjectModal({ isOpen, onClose }) {
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [projectTitle, setProjectTitle] = useState("");
  const [groupChatLink, setGroupChatLink] = useState("");
  const [description, setDescription] = useState("");
  const [maxMembers, setMaxMembers] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [opreqDate, setopreqDate] = useState(new Date());
  const [skill, setskill] = useState("");
  const [role, setrole] = useState("");
  const [isInputComplete, setIsInputComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillTags = Array.from(
      document.getElementById("skill-tag-container").children
    ).map((tag) => tag.textContent);
    const roleTags = Array.from(
      document.getElementById("role-tag-container").children
    ).map((tag) => tag.textContent);

    try {
      const projectData = {
        projectTitle,
        groupChatLink,
        description,
        maxMembers,
        startDate,
        endDate,
        opreqDate,
        skillTags,
        roleTags,
      };

      // Make API request to create the project
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        const createdProject = await response.json();
        console.log("Project created:", createdProject);
      } else {
        console.error("Failed to create project");
      }
    } catch (error) {
      console.error("Error during project creation:", error);
    }
    console.log({
      projectTitle,
      groupChatLink,
      description,
      maxMembers,
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
        startDate !== "" &&
        endDate !== ""
    );
  }, [
    projectTitle,
    groupChatLink,
    description,
    maxMembers,
    startDate,
    endDate,
  ]);

  useEffect(() => {
    const skillTagContainer = document.getElementById("skill-tag-container");
    const skillTagInput = document.getElementById("skill-tag-input");
    const roleTagContainer = document.getElementById("role-tag-container");
    const roleTagInput = document.getElementById("role-tag-input");

    const addTag = (tagText, container, setInput, bgColorClass) => {
      const tagElement = document.createElement("div");
      tagElement.textContent = tagText;
      tagElement.className = `px-2 py-1 text-xs md:text-base text-whiteAlternative font-medium rounded-lg flex items-center justify-between mt-2 mr-2 ${bgColorClass}`;
      tagElement.addEventListener("click", () => {
        tagElement.remove();
        setInput("");
      });

      container.appendChild(tagElement);
    };

    if (skillTagContainer && skillTagInput) {
      skillTagInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === ",") {
          event.preventDefault();

          const tagText = skillTagInput.value.trim();

          if (tagText) {
            addTag(tagText, skillTagContainer, setskill, "bg-primary");
            skillTagInput.value = "";
          }
        }
      });
    }

    if (roleTagContainer && roleTagInput) {
      roleTagInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === ",") {
          event.preventDefault();

          const tagText = roleTagInput.value.trim();

          if (tagText) {
            addTag(tagText, roleTagContainer, setrole, "bg-blue-400");
            roleTagInput.value = "";
          }
        }
      });
    }
  }, []);

  return (
    <div className="w-full ">
      <div className="justify-center modal-container w-4/5 md:w-3/5 mx-auto transition-transform transform ">
        <div className="relative shadow-lg p-4 md:p-12 my-4 rounded-3xl justify-center h-full overflow-y-auto bg-whiteAlternative flex flex-col">
          <button
            onClick={onClose}
            className=" my-auto focus:outline-none cursor-pointer self-end active:scale-95 duration-100 ease-in hover:scale-105"
          >
            <AiFillCloseCircle className="text-4xl" />
          </button>
          <h1 className="text-center text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
            Create Project
          </h1>
          <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 xs:gap-6 md:gap-8 xl:gap-10">
              <div className="w-full ">
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
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-col mt-4">
                  <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Group Chat Link{" "}
                    {!groupChatLink.includes(".com") &&
                      groupChatLink !== "" && (
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
              </div>

              <div className="w-full">
                <div className="flex flex-row justify-between mt-4 gap-2">
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

                <div className="flex flex-col mt-4">
                  <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Open Recruitment Until
                  </label>
                  <div className="">
                    <DatePicker
                      selected={opreqDate}
                      onChange={(date) => setopreqDate(date)}
                      className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                      placeholderText="Set Date"
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

                <div className="flex flex-col mt-4">
                  <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Skills{" "}
                  </label>
                  <div className="">
                    <input
                      type="text"
                      id="skill-tag-input"
                      placeholder="HTML, CSS, SQL"
                      className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    />
                    <div
                      id="skill-tag-container"
                      className="flex flex-wrap max-h-20 overflow-y-auto"
                    ></div>
                  </div>
                </div>

                <div className="flex flex-col mt-4">
                  <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Roles{" "}
                  </label>
                  <div className="">
                    <input
                      type="text"
                      id="role-tag-input"
                      placeholder="Manager, Designer, Developer"
                      className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    />
                    <div
                      id="role-tag-container"
                      className="flex flex-wrap max-h-20 overflow-y-auto"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center mt-2 pt-0 xs:pt-2">
              <button
                type="submit"
                className={`"w-[20px] text-white py-2 sm:py-3 text-xs md:text-lg px-8 md:px-5 rounded-md md:rounded-lg block" ${
                  !isInputComplete
                    ? "bg-black cursor-not-allowed"
                    : " bg-secondary hover:bg-brightPrimary cursor-pointer"
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
  );
}

export default CreateProjectModal;
