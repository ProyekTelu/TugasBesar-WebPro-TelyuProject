import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

function ProjectDetail({ onClose }) {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const projectTitle = "EcoScape";
  const owner = "Reza Adhie Dharmawan";
  const groupLink = "https//www.grouplink.com";
  const desc =
    "EcoScape is an ambitious environmental conservation project aimed at preserving and restoring natural ecosystems in urban areas. We believe that by creating green spaces and planting native trees and flowers, we can improve air quality, provide habitat for wildlife, and enhance the overall quality of life for local communities. Our mission is to transform concrete jungles into thriving urban oases, where both people and nature can coexist harmoniously. Join us in the journey to create a greener, healthier, and more sustainable future.";
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

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
    <div className="flex justify-center w-full ">
      <div className="w-11/12 flex justify-center relative border-2 rounded-lg">
        <div className="w-full h-full">
          <div className="w-full relative shadow-lg lg:flex-row p-5 rounded-lg justify-center h-full overflow-y-auto max-h-[100vh]">
            <div className="flex flex-row justify-between">
              <div className="flex gap-5">
                <h1 className="text-left text-primary text-xl sm:text-2xl md:text-4xl font-bold">
                  {projectTitle}
                </h1>
                <div className="my-auto">
                  <FaEdit
                    className="text-3xl cursor-pointer"
                    onClick={handleEditProfile}
                  />
                </div>
              </div>
              <div>
                <AiFillCloseCircle
                  onClick={onClose}
                  className="text-4xl cursor-pointer  "
                />
              </div>
            </div>

            <hr className="border-b-2 border-b-slate-950 my-5 mb-8" />
            <h1 className="text-left text-xl mb-4 font-bold">Description</h1>
            {!isEditing && <p>{desc}</p>}
            {isEditing && (
              <textarea
                rows="7"
                type="text"
                value={desc}
                className="p-1 sm:p-2 text-xs md:text-base w-full  focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              />
            )}

            <h1 className="text-left text-xl mb-4 mt-4 font-bold">Owner</h1>
            <p>{owner}</p>

            <h1 className="text-left text-xl mb-4 mt-4 font-bold">
              Group Link
            </h1>
            <p>{groupLink}</p>

            <h1 className="text-left text-xl mb-4 mt-4 font-bold">Member</h1>
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
  );
}

export default ProjectDetail;
