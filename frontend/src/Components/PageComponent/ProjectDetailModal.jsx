import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function ProjectDetailModal({ onClose, selectedProject }) {
  const navigate = useNavigate();
  const project = selectedProject;
  const projectID = project.projectID;
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRequested, setIsRequested] = useState(false);

  const User = JSON.parse(localStorage.getItem("user"));
  const currentUserId = User.userID;
  const [userRole, setUserRole] = useState(User.role);
  const [firstName, setfirstName] = useState(User.firstName);
  const [lastName, setlastName] = useState(User.lastName);
  const [reason, setReason] = useState("");
  const [uploadedCV, setUploadedCV] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isInputComplete, setIsInputComplete] = useState(false);

  const [joinSelectedRole, setJoinSelectedRole] = useState("Select Role");
  const [joinSelectedRoleID, setJoinSelectedRoleID] = useState(null);
  const [initialJoinSelectedRoleID, setInitialJoinSelectedRoleID] = useState(
    project.ProjectRoles[0].roleID
  );

  useEffect(() => {
    const checkRequest = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/existingRequest/${currentUserId}/${projectID}`
        );
        setIsRequested(response.data.isRequested);
      } catch (error) {
        console.error("Error checking request:", error);
      }
    };

    checkRequest();
  }, [currentUserId, projectID]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedCV(file);
    setFileUploaded(true);
    if (file) {
      const fileExt = file.name.split(".").pop().toLowerCase();
      if (["pdf", "doc", "docx"].includes(fileExt)) {
        setUploadedCV(file);
        setFileUploaded(true);

        const uploadText = document.getElementById("uploadText");
        if (uploadText) {
          uploadText.textContent = file.name;
        }
      } else {
        toast.error(
          "Invalid file format. Only .pdf, .doc, or .docx files are allowed."
        );
        e.target.value = null;
      }
    }
  };

  const isCurrentUserMember = selectedProject.ProjectMembers.some(
    (member) => member.userID === currentUserId
  );

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
    if (!storedUser) {
      navigate("/");
    }
  }, [navigate, storedUser]);

  const handleCurrentStep = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else {
      setCurrentStep(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("userID", currentUserId);
      formData.append("projectID", project.projectID);
      formData.append("roleID", joinSelectedRoleID);
      formData.append("message", reason);
      formData.append("cv", uploadedCV);

      console.log(uploadedCV);

      const response = await axios.post(
        "http://localhost:5000/createRequest",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Request submitted successfully:", response.data);
      toast.success("Join request submitted successfully!");

      onClose();
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Error submitting join request. Please try again.");
    }
  };

  useEffect(() => {
    setJoinSelectedRoleID(initialJoinSelectedRoleID);
  }, [initialJoinSelectedRoleID]);

  useEffect(() => {
    setIsInputComplete(
      reason !== "" && reason.length > 11 && uploadedCV !== null
    );
  }, [reason, uploadedCV]);

  const handleRoleSelect = (e) => {
    const selectedRoleId = e.target.value;
    const selectedRole = project.ProjectRoles.find(
      (role) => role.roleID === selectedRoleId
    );

    setJoinSelectedRoleID(selectedRoleId);
    setJoinSelectedRole(selectedRole?.Role.name || "");
  };

  return (
    <div className="modal-content relative w-screen md:w-[70vw] max-h-screen md:h-[85vh] border-2 shadow-lg lg:flex-row p-10 rounded-lg justify-center  bg-whiteAlternative">
      <ToastContainer />
      <div className="flex flex-col justify-between h-full">
        <AnimatePresence mode="wait" initial={false}>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between">
              {currentStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <div className="flex gap-5 flex-col md:flex-row">
                    <div className="flex flex-col xs:flex-row gap-4">
                      <h1 className="text-left text-primary text-lg sm:text-2xl md:text-3xl font-bold">
                        {project.title}
                      </h1>
                    </div>
                  </div>
                </motion.div>
              )}
              <div className="absolute right-5 top-5 focus:outline-none cursor-pointer self-end active:scale-95 duration-100 ease-in hover:scale-105">
                <AiFillCloseCircle
                  onClick={onClose}
                  className="text-4xl cursor-pointer  "
                />
              </div>
            </div>
            {currentStep === 0 && (
              <motion.div
                key="step0"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <h1 className="text-left text-sm sm:text-base md:text-lg mt-2 mb-4 ">
                  By{" "}
                  {project.projectOwner.firstName +
                    " " +
                    project.projectOwner.lastName}
                </h1>
                <hr className="border-b-2 border-b-slate-950 my-5" />
                <div className="overflow-y-auto max-h-[50vh] lg:max-h-none">
                  <h1 className="text-left text-sm sm:text-base md:text-lg mb-2 font-bold">
                    Description
                  </h1>

                  <p className="overflow-y-auto text-xs sm:text-sm md:text-base md:h-auto">
                    {project.description}
                  </p>

                  <div className="py-3 rounded-2xl flex flex-col gap-1">
                    <h1 className="text-left text-sm sm:text-base md:text-lg mb-2 font-bold">
                      Skills
                    </h1>
                    <div className="flex flex-wrap gap-2 overflow-y-auto">
                      {project.ProjectSkills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-primary px-3 py-1 text-whiteAlternative font-medium rounded-full flex items-center justify-between mr-2"
                        >
                          <span className="text-[10px] md:text-sm ">
                            {skill.Skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl flex flex-col gap-1 ">
                    <h1 className="text-left text-sm sm:text-base md:text-lg mb-2 font-bold">
                      Roles
                    </h1>
                    <div className="flex flex-wrap gap-2 overflow-y-auto">
                      {project.ProjectRoles.map((role, index2) => (
                        <div
                          key={index2}
                          className="bg-blue-400 px-3 py-1 text-whiteAlternative font-medium rounded-full flex items-center justify-between mr-2"
                        >
                          <span className="text-[10px] md:text-sm">
                            {role.Role.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h1 className="text-left text-sm sm:text-base md:text-lg mb-2 mt-4 font-bold">
                    Project Start - End Date
                  </h1>
                  {project.startProject && project.endProject && (
                    <p>
                      {formatDate(project.startProject)} -{" "}
                      {formatDate(project.endProject)}
                    </p>
                  )}
                  {isCurrentUserMember && (
                    <h1 className="text-left text-sm sm:text-base md:text-lg mb-2 mt-4 font-bold">
                      Group Link
                    </h1>
                  )}
                  {isCurrentUserMember && (
                    <a
                      href={project.groupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {project.groupLink}
                    </a>
                  )}
                </div>
              </motion.div>
            )}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="flex gap-5 flex-col md:flex-row">
                  <div className="flex flex-col xs:flex-row gap-4">
                    <h1 className="text-left text-primary text-lg sm:text-2xl md:text-3xl font-bold">
                      Join Project
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <Tooltip content={"Back to Project Detail"}>
                    <div>
                      <IoCaretBackCircleOutline
                        className="text-4xl text-blackAlternative cursor-pointer mr-2 my-auto"
                        onClick={handleCurrentStep}
                      />
                    </div>
                  </Tooltip>
                  <h1 className="text-left text-sm sm:text-base md:text-lg mt-2 mb-4 ">
                    Send Join Request For {" " + project.title}
                  </h1>
                </div>

                <hr className="border-b-2 border-b-slate-950 my-5" />
                <div className=" max-h-[50vh] lg:max-h-none">
                  <div className="w-full relative shadow-lg pb-5 px-5 lg:flex-row my-4 rounded-lg justify-center h-full overflow-y-auto max-h-[50vh] xl:max-h-[61vh]">
                    <form onSubmit={handleSubmit}>
                      <label className="font-medium text-xs md:text-base block text-textGray">
                        Student Name
                      </label>
                      <div className="flex gap-5 flex-col w-full m-auto">
                        <div className="relative w-full border rounded-2xl px-2 py-1">
                          <input
                            type="text"
                            value={firstName + " " + lastName}
                            disabled
                            className="p-1 sm:p-2 text-xs md:text-base w-full focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                          />
                        </div>
                        <label className="font-medium text-xs md:text-base block text-textGray">
                          Select Your Role
                        </label>
                        <div className="relative w-full border rounded-2xl px-2">
                          <select
                            id="projectRoles"
                            className="font-medium text-xs md:text-base cursor-pointer hover:bg-grey rounded-lg transition duration-300 block w-full p-2.5 "
                            value={joinSelectedRoleID}
                            onChange={handleRoleSelect}
                          >
                            <option key={-1} value="" disabled>
                              Choose a role
                            </option>
                            {project.ProjectRoles.map((role, index) => (
                              <option key={index} value={role.roleID}>
                                {role.Role.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="w-full">
                          <label className="font-medium text-xs md:text-base block text-textGray after:content-['*'] after:ml-0.5 after:text-red-500 ">
                            Tell us about yourself and why you want to join to
                            this project{" "}
                            {reason.length < 12 && reason != "" && (
                              <span className="text-primary font-normal">
                                At least 12 characters.
                              </span>
                            )}
                          </label>
                          <textarea
                            rows="4"
                            placeholder="Write your reason here"
                            className="p-1 sm:p-2 text-xs md:text-base w-full  focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                          ></textarea>
                        </div>

                        <div className="w-full">
                          <label
                            className={`flex justify-center h-32 px-4 transition bg-white border-2 ${
                              fileUploaded
                                ? "border-green-400"
                                : "border-gray-300"
                            } border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none`}
                          >
                            <span className="flex flex-col items-center space-x-2 pt-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <span className="font-medium text-xs md:text-base text-gray-600 text-center">
                                Drop your CV, Portofolio, Certificate, any other
                                file that support your worthiness
                              </span>
                              <span
                                className="text-blue-600 underline  text-xs md:text-base"
                                id="uploadText"
                              >
                                {" "}
                                Click here to upload your file
                              </span>
                            </span>
                            <input
                              type="file"
                              encType="multipart/form-data"
                              accept=".pdf,.doc,.docx"
                              name="cv"
                              className="hidden"
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="w-full flex justify-center md:pt-4 xs:pt-6">
                        <button
                          type="submit"
                          className={`"text-secondary text-white w-1/4 py-1 block sm:py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg" ${
                            !isInputComplete
                              ? "bg-black cursor-not-allowed"
                              : " bg-primary hover:bg-brightPrimary cursor-pointer"
                          }`}
                          disabled={!isInputComplete}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {currentStep === 0 &&
            userRole === "student" &&
            !isCurrentUserMember && (
              <motion.div
                key="step1"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="w-full h-full flex justify-end">
                  <div className="flex flex-col justify-end">
                    <button
                      onClick={handleCurrentStep}
                      className={`px-2 py-2 md:py-3 md:px-4 text-[8px] rounded-md font-semibold text-xs md:text-sm xl:text-base text-white ${
                        isRequested ? "bg-gray-500" : "bg-secondary"
                      } mt-2 duration-75 ease-out hover:shadow-md active:scale-95`}
                      type="submit"
                      disabled={isRequested}
                    >
                      {isRequested ? "Request Sent" : "Send Join Request"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
