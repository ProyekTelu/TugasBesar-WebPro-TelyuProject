import React from 'react';
import ProjectDetail from './ProjectDetail';
import { IoCaretBackCircleOutline } from "react-icons/io5";

function ProjectDetailModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* <IoCaretBackCircleOutline
          onClick={onClose}
          className="text-4xl cursor-pointer"
        /> */}
        <ProjectDetail />
      </div>
    </div>
  );
}

export default ProjectDetailModal;