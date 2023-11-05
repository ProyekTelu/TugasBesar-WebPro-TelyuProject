import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";

function ProjectDetailModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content relative ">
        <ProjectDetail onClose={onClose} />
      </div>
    </div>
  );
}

export default ProjectDetailModal;
