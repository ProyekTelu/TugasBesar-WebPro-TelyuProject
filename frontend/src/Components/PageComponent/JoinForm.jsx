import React, { useState, useEffect } from "react";
import { IoCaretBackCircleOutline } from "react-icons/io5";

function JoinForm() {
  const userName = "Reza Adhie Dharmawan";
  const userEmail = "reza@student.telkomuniversity.ac.id";
  const userPhone = "+1234567890";

  const [reason, setReason] = useState("");
  const [uploadedCV, setUploadedCV] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
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
      reason !== "" && reason.length > 11 && uploadedCV !== null
    );
  }, [reason, uploadedCV]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExt = file.name.split(".").pop().toLowerCase();
      if (["pdf", "doc", "docx"].includes(fileExt)) {
        setUploadedCV(file);
        setFileUploaded(true);
        const uploadText = document.getElementById("uploadText");
        if (uploadText) {
            uploadText.textContent = file.name;
        }
      } else {
        alert(
          "Invalid file format. Only .pdf, .doc, or .docx files are allowed."
        );
        e.target.value = null;
      }
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="columns w-3/4 flex justify-center flex-col relative" >
        <IoCaretBackCircleOutline
          onClick={(e) => window.history.back()}
          className="text-4xl absolute left-[-6rem] cursor-pointer"
        />
        <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold">
          Join Project
        </h1>
        <div className="w-full relative shadow-lg lg:flex-row p-5 my-4 rounded-lg justify-center h-full overflow-y-auto max-h-[75vh]">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5 flex-col pt-6 w-full m-auto">
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
                <label className="font-medium text-xs md:text-base block text-textGray after:content-['*'] after:ml-0.5 after:text-red-500 ">
                  Tell us about yourself and why you want to join to this
                  project{" "}
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

              {/* <div className="w-full">
                <label className="font-medium text-xs md:text-base block text-textGray after:content-['*'] after:ml-0.5 after:text-red-500 block">
                  CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="p-1 sm:p-2 text-xs md:text-base w-full"
                />
              </div> */}

              <div className="w-full">
                <label className={`flex justify-center h-32 px-4 transition bg-white border-2 ${fileUploaded ? 'border-green-400' : 'border-gray-300'} border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none`}>
                  <span className="flex flex-col items-center space-x-2 pt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600 text-center">
                    Drop your CV, Portofolio, Certificate, any other file that support your worthiness or
                    </span>
                    <span className="text-blue-600 underline" id="uploadText"> Click here to upload your file</span>
                  </span>
                  <input 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  name="file_upload" 
                  onChange={handleFileChange}
                  className="hidden" />
                </label>
              </div>

              <div className="w-full flex justify-center xs:pt-2">
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
        
        <div className="text-right h-auto w-full rounded-lg p-1 flex justify-end align-middle">
              <label className="my-auto text-xs sm:text-sm md:text-base">request letter for 
              <span className="text-sm sm:text-lg md:text-xl font-bold"> EcoScape </span>
              </label>
        </div>
      </div>
    </div>
  );
}

export default JoinForm;
