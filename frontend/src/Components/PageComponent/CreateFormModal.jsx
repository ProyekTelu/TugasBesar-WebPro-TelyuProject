import React from 'react';
import CreateForm from './CreateForm';

function CreateFormModal({ onClose }) {
  return (
    <div className="modal w-full">
      <div className="modal-content">
        <CreateForm />
      </div>
    </div>
  );
}

export default CreateFormModal;