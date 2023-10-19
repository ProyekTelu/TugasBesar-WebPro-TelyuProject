import React, { useState, useEffect } from "react";
import TelkomLogo from "../../img/Telkom_University_Logo.png";
import ImgCarousel1 from "../../img/loginImage1.jpg";
import ImgCarousel2 from "../../img/loginImage1.jpg";
import TelyuProjectLogo from "../../img/telyuProject.png";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const images = [ImgCarousel1, ImgCarousel2];

const LoginPage = ({ setShowLoginPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsButtonDisabled(newEmail === "" || password === "");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsButtonDisabled(email === "" || newPassword === "");
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="flex w-full h-full justify-center "
      style={{ userSelect: "none" }}
    >
      <div className="w-full h-full relative lg:w-1/2 my-2 sm:my-0 bg-white justify-center flex lg:rounded-r-none">
        <div className="p-5 md:p-10 w-full flex flex-col h-full align-middle sm:gap-4">
          <img
            className="mt-0 ml-0 h-6 w-12 sm:h-12 sm:w-24"
            src={TelyuProjectLogo}
            alt=""
          />
          <div className="flex p-10 lg:p-0 flex-col mx-10 w-full sm:w-2/3 self-center justify-center h-full gap-1">
            <img
              className="w-[30%] xs:w-[10%] sm:w-[15%] self-center"
              src={TelkomLogo}
              alt=""
            />
            <h1 className="text-center mt-4  text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
              Log in
            </h1>
            <form className="flex flex-col gap-3 sm:gap-4" action="">
              <div className="flex flex-col">
                <label
                  className="font-medium text-xs md:text-base text-textGray "
                  htmlFor=""
                >
                  Email SSO
                </label>
                <input
                  placeholder=""
                  className="p-1 sm:p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                  type="email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-xs md:text-base text-textGray "
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  placeholder=""
                  className="p-1 sm:p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                  type="password"
                  onChange={handlePasswordChange}
                />
                <label htmlFor=""></label>
              </div>
              <div className="w-full h-full flex justify-end pt-0 xs:pt-2">
                <button
                  className={`bg-${
                    isButtonDisabled
                      ? "black"
                      : "primary hover:bg-brightPrimary"
                  } text-secondary w-full py-1 block sm:py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg`}
                  disabled={isButtonDisabled}
                >
                  Log in
                </button>
              </div>
              <label
                className="text-xs text-center sm:text-sm xl:text-base"
                htmlFor=""
              >
                Use{" "}
                <span className="text-red-500">
                  @student.telkomuniversity.ac.id
                </span>{" "}
                for Students and{" "}
                <span className="text-red-500">@telkomuniversity.ac.id</span>{" "}
                for Lecturers{" "}
              </label>
              <label
                className="text-sm text-center lg:text-base mb-4 "
                htmlFor=""
              >
                Dont have an account?{" "}
                <span
                  onClick={() => setShowLoginPage(false)}
                  className="text-primary font-bold cursor-pointer hover:underline  sm:underline-offset-4"
                >
                  Create Now
                </span>
              </label>
            </form>
          </div>
          <div className="absolute mt-2 lg:mt-0 md:static bottom-0 left-0 right-0 flex justify-center text-[8px] sm:text-xs md:text-xs lg:text-base">
            <label htmlFor="" className="text-center">
              {" "}
              © 2023 Kelompok 7, Inc. All rights reserved. Terms - Privacy
            </label>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden p-8 h-full lg:block relative rounded-r-2xl">
        <div
          className="absolute text-2xl ml-4 cursor-pointer left-8 top-1/2 p-4 bg-white rounded-full"
          onClick={handlePrevImage}
        >
          <FaLongArrowAltLeft />
        </div>
        <div
          className="absolute text-2xl mr-4 cursor-pointer right-8 top-1/2 p-4 bg-white rounded-full"
          onClick={handleNextImage}
        >
          <FaLongArrowAltRight />
        </div>
        <img
          src={images[currentImageIndex]}
          className="w-full h-full object-cover rounded-xl"
          style={{ userSelect: "none" }}
          alt=""
        />
        <div className="absolute bottom-14 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 mx-2 rounded-full cursor-pointer hover:border-2 border-black  ${
                currentImageIndex === index ? "bg-primary" : "bg-white"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
