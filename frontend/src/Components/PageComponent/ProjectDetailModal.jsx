import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import { IoCaretBackCircleOutline } from "react-icons/io5";

function ProjectDetailModal({ onClose }) {

  const [isModalOpenDetail, setModalOpenDetail] = useState(false);
  const closeModalDetail = () => {
    setModalOpenDetail(false);
  };

  return (
    <div className="modal">
      <div className="modal-content relative ">
        <IoCaretBackCircleOutline
          onClick={onClose}
          className="text-4xl cursor-pointer bottom-0 left-100 top-10 absolute "
        />
        <ProjectDetail onClose={closeModalDetail}/>
    
      </div>
    </div>
  );
}

export default ProjectDetailModal;