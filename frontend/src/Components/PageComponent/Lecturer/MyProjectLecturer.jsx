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
      <div className="flex justify-center relative w-full">
        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full h-min relative border-2 lg:flex-col p-5  rounded-lg justify-center overflow-y-auto max-h-[70vh]">
            <h1 className="text-left text-primary text-xl font-bold">
              EcoScape
            </h1>
            <h1 className="border-b-2 border-gray-400 my-2"> </h1>
            <p className="line-clamp-2">
              EcoScape is an ambitious environmental conservation project aimed
              at preserving and restoring natural ecosystems in urban areas. We
              believe that by creating green spaces and planting native trees
              and flowers, we can improve air quality, provide habitat for
              wildlife, and enhance the overall quality of life for local
              communities. Our mission is to transform concrete jungles into
              thriving urban oases, where both people and nature can coexist
              harmoniously. Join us in the journey to create a greener,
              healthier, and more sustainable future.
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
            <p className="line-clamp-2">
              TechLink is a groundbreaking initiative dedicated to bridging the
              digital divide. Our goal is to provide underprivileged communities
              with access to technology and digital education, enabling them to
              participate fully in the modern digital age. Through donations of
              computers, smartphones, and digital literacy training, we aim to
              empower individuals and communities to unlock new opportunities,
              connect with the world, and build a brighter future. Together,
              let's build a more inclusive and digitally equitable society.
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
            <p className="line-clamp-2">
              HealthSync is a revolutionary healthcare platform designed to
              streamline and improve patient care. By integrating medical
              records, telemedicine, and health tracking, we aim to empower
              individuals to take control of their health and well-being. Our
              mission is to create a connected healthcare ecosystem that makes
              medical information readily available, improves communication
              between patients and healthcare providers, and ultimately leads to
              better health outcomes. Join us in revolutionizing the way we
              manage our health.
            </p>
            <div className="text-right mt-3 text-blue-800 font-semibold">
              <Link onClick={openModalDetail}>Show More</Link>
            </div>
          </div>

          {!isModalOpenDetail && (
            <div className="flex justify-end mt-8">
              <button
                onClick={openModal}
                className="w-60 h-10 bg-secondary rounded-md shadow hover:bg-secondaryAlternative hover:scale-105 transition active:scale-95">
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
          onRequestClose={closeModal}>
          <CreateProjectModal isOpen={modalIsOpen} closeModal={closeModal} />
        </Modal>
        <Modal
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
          isOpen={isModalOpenDetail}
          onRequestClose={closeModalDetail}>
            {isModalOpenDetail && <ProjectDetailModal onClose={closeModalDetail} />}
        </Modal>
      </div>
      
    </div>
  );
}

export default MyProjectLecturer;
