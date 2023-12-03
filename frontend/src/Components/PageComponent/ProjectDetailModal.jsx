import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Modal from "react-modal";

function ProjectDetailModal({ onClose, selectedProject }) {
  const navigate = useNavigate();
  const project = selectedProject;

  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  console.log(project);
  console.log(project.ProjectMember);

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

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!storedUser) {
      navigate("/");
    }
  }, [navigate, storedUser]);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleDoneEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="modal-content  relative w-screen md:w-[85vw] max-h-screen md:max-h-[85vh] border-2  shadow-lg lg:flex-row p-5 rounded-lg justify-center  overflow-y-auto  bg-whiteAlternative">
      <div className="flex flex-row justify-between">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="flex flex-col xs:flex-row gap-4">
            <h1 className="text-left text-primary text-xl sm:text-2xl md:text-4xl font-bold">
              {project.title}
            </h1>
            {!isEditing && (
              <div className="my-auto focus:outline-none cursor-pointer self-end active:scale-95 duration-100 ease-in hover:scale-105">
                <FaEdit
                  className="text-3xl cursor-pointer "
                  onClick={handleEditProfile}
                />
              </div>
            )}
          </div>

          {isEditing && (
            <div className="flex flex-row gap-2 justify-center mx-auto">
              <button
                className="rounded-md border border-transparent bg-secondary px-8 py-2 
                      text-base font-medium text-white duration-100 ease-out hover:bg-secondaryAlternative
                      hover:scale-105 active:scale-95"
                onClick={handleDoneEditing}
              >
                Save
              </button>
              <button
                className="rounded-md border border-transparent bg-primary px-8 py-2 
                      text-base font-medium text-white duration-100 ease-out hover:bg-primaryAlternative
                      hover:scale-105 active:scale-95"
                onClick={handleDoneEditing}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className="absolute right-5 top-5 focus:outline-none cursor-pointer self-end active:scale-95 duration-100 ease-in hover:scale-105">
          <AiFillCloseCircle
            onClick={onClose}
            className="text-4xl cursor-pointer  "
          />
        </div>
      </div>
      <h1 className="text-left text-xl mt-2 mb-4 font-bold">
        By{" "}
        {project.projectOwner.firstName + " " + project.projectOwner.lastName}
      </h1>

      <hr className="border-b-2 border-b-slate-950 my-5" />
      <h1 className="text-left text-xl mb-2 font-bold">Description</h1>
      {!isEditing && (
        <p className="overflow-y-auto md:h-auto">{project.description}</p>
      )}
      {isEditing && (
        <textarea
          rows="5"
          type="text"
          value={project.description}
          onChange={(e) => setDesc(e.target.value)}
          className="p-1 sm:p-2 text-xs md:text-base w-full border-gray-500 focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
        />
      )}

      <div className="py-3 rounded-2xl flex flex-col gap-1">
        <h1 className="text-left text-xl mb-2 font-bold">Skills</h1>
        <div className="flex flex-wrap gap-2 overflow-y-auto">
          {project.ProjectSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-primary px-4 py-2 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
            >
              <span className="text-[10px] md:text-sm ">
                {skill.Skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl flex flex-col gap-1 ">
        <h1 className="text-left text-xl mb-2 font-bold">Roles</h1>
        <div className="flex flex-wrap gap-2 overflow-y-auto">
          {project.ProjectRoles.map((role, index) => (
            <div
              key={index}
              className="bg-blue-400 px-4 py-2 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
            >
              <span className="text-[10px] md:text-sm">{role.Role.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <h1 className="text-left text-xl mb-4 mt-4 font-bold">Owner</h1>
      <p>
        By{" "}
        {project.projectOwner.firstName + " " + project.projectOwner.lastName}
      </p> */}

      <h1 className="text-left text-xl mb-2 mt-4 font-bold">
        Project Start-End Date
      </h1>
      {project.startProject && project.endProject && (
        <p>
          {formatDate(project.startProject)} -{" "}
          {formatDate(project.endProject)}
        </p>
      )}
      <h1 className="text-left text-xl mb-2 mt-4 font-bold">Group Link</h1>
      {!isEditing && (
        <a
          href={project.groupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {project.groupLink}
        </a>
      )}
      {isEditing && (
        <input
          type="text"
          value={project.groupLink}
          onChange={(e) => setGroupLink(e.target.value)}
          className="p-1 sm:p-2 text-xs md:text-base w-full border-gray-500 focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
        />
      )}

      <h1 className="text-left text-xl mb-2 mt-4 font-bold">
        {"Member" + " " + "(" + project.projectMemberCount}/
        {project.totalMember + ")"}
      </h1>
      <div className="w-full flex flex-col gap-4 overflow-y-auto max-h-80">
        {project.ProjectMember && project.ProjectMember.length > 0 ? (
          project.ProjectMember.map((member, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 w-full justify-between bg-white p-4 rounded-lg"
            >
              <div className="flex flex-row gap-4 items-center">
                <div className="h-10 aspect-square rounded-full bg-black"></div>
                <div className="flex flex-col">
                  <label className="font-semibold text-lg" htmlFor="">
                    {member.User.firstName + " " + member.User.lastName}
                  </label>
                  <label htmlFor="">Frontend</label>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <button
                  className="rounded-md border border-transparent bg-secondary px-8 py-2 
                  text-base font-medium text-white duration-100 ease-out hover:bg-secondaryAlternative
                  hover:scale-105 active:scale-95"
                >
                  Detail
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No members available</p>
        )}
      </div>
    </div>
  );
}

export default ProjectDetailModal;
