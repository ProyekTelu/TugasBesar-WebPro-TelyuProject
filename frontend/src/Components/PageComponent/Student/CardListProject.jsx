import React, { useState, useEffect } from "react";
import JoinForm from "./JoinForm";
import Modal from "react-modal";

function CardListProject({ items, handleRequestForm }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement(document.getElementById("root"));

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          <p>{data.project_owner}</p>
          <p className="mt-6 font-bold">Due Date</p>
          <p>{data.due_project}</p>
          <div className="flex justify-end">
            <button
              className="py-3 px-4 font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:scale-105 active:scale-100"
              type="submit"
              onClick={openModal}
              // onClick={() => {
              //   handleRequestForm(data.title);
              // }}
            >
              Send Join Request
            </button>
            <Modal
              className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            >
              <JoinForm isOpen={modalIsOpen} closeModal={closeModal} title={data.title} />
            </Modal>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardListProject;
