import React from "react";

const FacultyPopup = ({ faculty, closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">{faculty.name}</h2>
        <p className="text-gray-800">{faculty.description}</p>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FacultyPopup;