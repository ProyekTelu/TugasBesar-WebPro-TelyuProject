import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ProjectDetailModal from "../ProjectDetailModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import CreateProjectModal from "./CreateProjectModal";

function MyProjectLecturer() {
  const [isModalOpenDetail, setModalOpenDetail] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement(document.getElementById("root"));

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

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12 flex justify-center relative">
        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full h-min relative border-2 lg:flex-col p-5  rounded-lg justify-center overflow-y-auto max-h-[70vh]">
            <h1 className="text-left text-primary text-xl font-bold">
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
          <div className="w-full h-min relative border-2 lg:flex-col p-5  rounded-lg justify-center overflow-y-auto max-h-[75vh]">
            <h1 className="text-left text-primary text-xl font-bold">
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
          <div className="w-full h-min relative border-2 lg:flex-col p-5  rounded-lg justify-center overflow-y-auto max-h-[75vh]">
            <h1 className="text-left text-primary text-xl font-bold">
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

          {!isModalOpenDetail && (
            <div className="flex justify-end mt-8">
              <button
                onClick={openModal}
                className="w-60 h-10 bg-secondary rounded-3xl shadow hover:bg-secondaryAlternative hover:scale-105 transition active:scale-95"
              >
                <div className="text-white text-xl font-bold font-['Inter']">
                  Create Project
                </div>
              </button>
            </div>
          )}
        </div>
        <Modal
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <CreateProjectModal isOpen={modalIsOpen} closeModal={closeModal} />
        </Modal>
      </div>
      {isModalOpenDetail && <ProjectDetailModal onClose={closeModalDetail} />}
    </div>
  );
}

export default MyProjectLecturer;
