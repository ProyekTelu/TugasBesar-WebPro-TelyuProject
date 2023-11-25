import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

function ProjectDetailModal({ onClose }) {
  const projectTitle = "EcoScape";
  const owner = "Reza Adhie Dharmawan";
  const [groupLink, setGroupLink] = useState("https//www.grouplink.com");
  const descs = "e future.";

  const [desc, setDesc] = useState(descs);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleDoneEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-screen-xl max-h-screen">
      <div className="modal-content relative flex justify-center w-full ">
        <div className="w-full flex justify-center relative border-2 rounded-lg">
          <div className="w-screen h-full relative">
            <div className="relative shadow-lg lg:flex-row p-5 rounded-lg justify-center  overflow-y-auto max-h-screen bg-whiteAlternative">
              <div className="flex flex-row justify-between">
                <div className="flex gap-5 flex-col md:flex-row">
                  <div className="flex flex-row gap-4">
                    <h1 className="text-left text-primary text-xl sm:text-2xl md:text-4xl font-bold">
                      {projectTitle}
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

              <hr className="border-b-2 border-b-slate-950 my-5 mb-8" />
              <h1 className="text-left text-xl mb-4 font-bold">Description</h1>
              {!isEditing && (
                <p className="h-32 overflow-y-auto md:h-auto">{desc}</p>
              )}
              {isEditing && (
                <textarea
                  rows="5"
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="p-1 sm:p-2 text-xs md:text-base w-full border-gray-500 focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                />
              )}

              <h1 className="text-left text-xl mb-4 mt-4 font-bold">Owner</h1>
              <p>{owner}</p>

              <h1 className="text-left text-xl mb-4 mt-4 font-bold">
                Group Link
              </h1>
              {!isEditing && <p>{groupLink}</p>}
              {isEditing && (
                <input
                  type="text"
                  value={groupLink}
                  onChange={(e) => setGroupLink(e.target.value)}
                  className="p-1 sm:p-2 text-xs md:text-base w-full border-gray-500 focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                />
              )}

              <h1 className="text-left text-xl mb-4 mt-4 font-bold">Member</h1>
              <div className="w-full flex flex-col gap-4 overflow-y-auto max-h-80">
                <div className="flex flex-row gap-2 w-full justify-between bg-white p-4 rounded-lg">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="h-10 aspect-square rounded-full bg-black "></div>
                    <div className="flex flex-col">
                      <label className="font-semibold text-lg" htmlFor="">
                        Samsudin
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
                <div className="flex flex-row gap-2 w-full justify-between bg-white p-4 rounded-lg">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="h-10 aspect-square rounded-full bg-black "></div>
                    <div className="flex flex-col">
                      <label className="font-semibold text-lg" htmlFor="">
                        Samsudin
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
                <div className="flex flex-row gap-2 w-full justify-between bg-white p-4 rounded-lg">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="h-10 aspect-square rounded-full bg-black "></div>
                    <div className="flex flex-col">
                      <label className="font-semibold text-lg" htmlFor="">
                        Samsudin
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
                <div className="flex flex-row gap-2 w-full justify-between bg-white p-4 rounded-lg">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="h-10 aspect-square rounded-full bg-black "></div>
                    <div className="flex flex-col">
                      <label className="font-semibold text-lg" htmlFor="">
                        Samsudin
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
