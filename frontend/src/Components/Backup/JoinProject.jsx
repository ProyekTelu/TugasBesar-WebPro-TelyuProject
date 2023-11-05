import React, { useState, useEffect } from "react";
import Imgbg from "../../img/consul2.png";
import { IoCaretBackCircleOutline } from "react-icons/io5";

const JoinProject = () => {
  const userName = "Reza Adhie Dharmawan";
  const userEmail = "reza@student.telkomuniversity.ac.id";
  const userPhone = "+1234567890";

  const [reason, setReason] = useState("");
  const [uploadedCV, setUploadedCV] = useState(null);
  const [isInputComplete, setIsInputComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting form data
    console.log({
      userName,
      userEmail,
      userPhone,
      reason,
      uploadedCV,
    });
  };

  

  useEffect(() => {
    setIsInputComplete(
      reason !== "" 
      && reason.length > 11 
      && uploadedCV !== null
    );
  }, [reason, uploadedCV]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExt = file.name.split(".").pop().toLowerCase();
      if (["pdf", "doc", "docx"].includes(fileExt)) {
        setUploadedCV(file);
      } else {
        alert(
          "Invalid file format. Only .pdf, .doc, or .docx files are allowed."
        );
        e.target.value = null;
      }
    }
  };

  return (
    <div
      className="flex justify-center w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Imgbg})` }}
    >
      <div className="columns w-2/3 flex justify-center flex-col relative">
        <IoCaretBackCircleOutline
          onClick={(e) => window.history.back()} 
          className="text-4xl absolute left-[-6rem] cursor-pointer"
        />
        <h1 className="text-center mt-4 text-xl sm:text-2xl md:text-4xl md:my-4 font-bold">
          Join Project
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 flex-col pt-6 w-full">
            <div className="w-full">
              <label className="font-medium text-xs md:text-base block text-textGray">
                Student Name
              </label>
              <input
                type="text"
                value={userName}
                disabled
                className="p-1 sm:p-2 text-xs md:text-base w-full focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              />
            </div>

            <div className="w-full">
              <label className="font-medium text-xs md:text-base block text-textGray">
                Email Address
              </label>
              <input
                type="text"
                value={userEmail}
                disabled
                className="p-1 sm:p-2 text-xs md:text-base w-full focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              />
            </div>

            <div className="w-full">
              <label className="font-medium text-xs md:text-base block text-textGray">
                Phone Number
              </label>
              <input
                type="text"
                value={userPhone}
                disabled
                className="p-1 sm:p-2 text-xs md:text-base w-full  focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              />
            </div>

            <div className="w-full">
              <label className="font-medium text-xs md:text-base block text-textGray after:content-['*'] after:ml-0.5 after:text-red-500 block">
                Why do you think this project fits you?{" "}
                {reason.length < 12 && reason != "" && (
                  <span className="text-brightPrimary font-normal">
                    At least 12 characters.
                  </span>
                )}
              </label>
              <textarea
                rows="4"
                placeholder="Write your reason here"
                className="p-1 sm:p-2 text-xs md:text-base w-full  focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            </div>

            <div className="w-full">
              <label className="font-medium text-xs md:text-base block text-textGray after:content-['*'] after:ml-0.5 after:text-red-500 block">
                CV
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="p-1 sm:p-2 text-xs md:text-base w-full"
              />
            </div>

            <div className="w-full flex justify-center mt-10 pt-0 xs:pt-2">
              <button
                type="submit"
                className={`"text-secondary text-white w-1/4 py-1 block sm:py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg" ${
                  !isInputComplete
                    ? "bg-black cursor-not-allowed"
                    : " bg-primary hover:bg-brightPrimary cursor-pointer"
                }`}
                disabled={!isInputComplete}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinProject;
