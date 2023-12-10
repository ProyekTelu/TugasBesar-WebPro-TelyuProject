import React, { useState, useEffect } from "react";
import JoinForm from "./JoinForm";
import Modal from "react-modal";
import axios from "axios";
import ProjectDetailModal from "../ProjectDetailModal";

function CardListProject({ items, handleRequestForm }) {
  const [isModalOpenDetail, setModalOpenDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoadingModalDetail, setIsLoadingModalDetail] = useState(false);

  Modal.setAppElement(document.getElementById("root"));

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

  const openModalDetail = async (projectId) => {
    try {
      setIsLoadingModalDetail(true);
      const response = await axios.get(
        `http://localhost:5000/project/${projectId}`
      );
      setSelectedProject(response.data);
      setModalOpenDetail(true);
    } catch (error) {
      console.error("Failed to fetch project:", error);
    } finally {
      setIsLoadingModalDetail(false);
    }
  };

  const closeModalDetail = () => {
    setModalOpenDetail(false);
  };

  return (
    <>
      {items.map((data, index) => (
        <div
          key={index}
          className="my-8 bg-whiteAlternative rounded-xl shadow-md font-light transition-all duration-500 ease-out p-6 h-[196px] hover:h-[400px] group overflow-hidden"
        >
          <h1 name={data.title} className="text-3xl font-bold text-primary">
            {data.title}
          </h1>
          <hr className="my-4 rounded-full" />
          <p className="line-clamp-2 md:line-clamp-none">{data.description}</p>
          <p className="mt-6 font-bold">Project Owner</p>
          <p>
            {data.projectOwner.firstName + " " + data.projectOwner.lastName}
          </p>
          <p className="mt-6 font-bold">Due Date</p>
          <p>{formatDate(data.openUntil)}</p>
          <div className="flex justify-end">
            <button
              className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
              type="submit"
              onClick={() => openModalDetail(data.projectID)}
            >
              Project Detail
            </button>
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
        </div>
      ))}
    </>
  );
}

export default CardListProject;
