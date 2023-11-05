import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

function ProjectDetailModal({ onClose }) {
  const projectTitle = "EcoScape";
  const owner = "Reza Adhie Dharmawan";
  const [groupLink, setGroupLink] = useState("https//www.grouplink.com");
  const descs =
    "EcoScape is an ambitious environmental conservation project aimed at preserving and restoring natural ecosystems in urban areas. We believe that by creating green spaces and planting native trees and flowers, we can improve air quality, provide habitat for wildlife, and enhance the overall quality of life for local communities. Our mission is to transform concrete jungles into thriving urban oases, where both people and nature can coexist harmoniously. Join us in the journey to create a greener, healthier, and more sustainable future.";
  
  const [desc, setDesc] = useState(descs);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleDoneEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full">
      <div className="modal-content relative flex justify-center w-4/5 mx-auto">
          <div className="w-11/12 flex justify-center relative border-2 rounded-lg">
            <div className="w-full h-full ">
              <div className="w-full relative shadow-lg lg:flex-row p-5 rounded-lg justify-center h-full overflow-y-auto max-h-[100vh] bg-whiteAlternative">
                <div className="flex flex-row justify-between">
                  <div className="flex gap-5">
                    <h1 className="text-left text-primary text-xl sm:text-2xl md:text-4xl font-bold">
                      {projectTitle}
                    </h1>
                    <div className="my-auto focus:outline-none cursor-pointer self-end active:scale-95 duration-100 ease-in hover:scale-105">
                      <FaEdit
                        className="text-3xl cursor-pointer "
                        onClick={handleEditProfile}
                      />
                    </div>
                  </div>
                  <div className="my-auto focus:outline-none cursor-pointer self-end active:scale-95 duration-100 ease-in hover:scale-105">
                    <AiFillCloseCircle
                      onClick={onClose}
                      className="text-4xl cursor-pointer  "
                    />
                  </div>
                </div>

                <hr className="border-b-2 border-b-slate-950 my-5 mb-8" />
                <h1 className="text-left text-xl mb-4 font-bold">
                  Description
                </h1>
                {!isEditing && <p>{desc}</p>}
                {isEditing && (
                  <textarea
                    rows="5"
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="p-1 sm:p-2 text-xs md:text-base w-full  focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
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
                  className="p-1 sm:p-2 text-xs md:text-base w-full focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                />
                )}

                <h1 className="text-left text-xl mb-4 mt-4 font-bold">
                  Member
                </h1>
                <table className=" w-full table-auto">
                  <thead className="text-left border-b-2 border-b-slate-950 my-5">
                    <th>Name</th>
                    <th>NIM</th>
                    <th>Generation</th>
                    <th>Major</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reza Adhie Dharmawan</td>
                      <td>13022213016</td>
                      <td>2021</td>
                      <td>Software Engineering</td>
                    </tr>
                    <tr>
                      <td>Reza Adhie Dharmawan</td>
                      <td>13022213016</td>
                      <td>2021</td>
                      <td>Software Engineering</td>
                    </tr>
                    <tr>
                      <td>Reza Adhie Dharmawan</td>
                      <td>13022213016</td>
                      <td>2021</td>
                      <td>Software Engineering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProjectDetailModal;
