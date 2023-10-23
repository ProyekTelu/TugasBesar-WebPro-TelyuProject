import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../../features/authSlice";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TelkomLogo from "../../img/Telkom_University_Logo.png";
import ImgCarousel1 from "../../img/loginImage1.jpg";
import ImgCarousel2 from "../../img/loginImage2.png";
import ImgCarousel3 from "../../img/loginImage3.png";
import TelyuProjectLogo from "../../img/telyuProject.png";

const images = [ImgCarousel1, ImgCarousel2, ImgCarousel3];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [onSignUp, setOnSignUp] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      // navigate("/home");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const signUpMode = () => {
    setOnSignUp(true);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsButtonDisabled(newEmail === "");
  };

  const navigateToLogin = () => {
    navigate("/");
  };

  return (
    <div className="w-screen md:h-screen flex justify-center">
      <div className="flex justify-center h-full w-full">
        <div
          className="flex w-full h-full justify-center "
          style={{ userSelect: "none" }}
        >
          {!onSignUp && (
            <div className="w-full h-full relative lg:w-1/2 my-2 sm:my-0 bg-white justify-center flex lg:rounded-r-none">
              <div className="md:p-10 w-full flex flex-col h-full align-middle sm:gap-4">
                <img
                  className="mt-2 ml-5 h-6 w-12 sm:h-12 sm:w-24"
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
                    Sign Up
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
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {isError && message === "User not found" && (
                        <p className="text-red-500 text-xs md:text-base mt-1">
                          {message}
                        </p>
                      )}
                    </div>

                    <div className="w-full h-full flex justify-end pt-0 xs:pt-2">
                      <button
                        type="button"
                        onClick={signUpMode}
                        className={`text-secondary w-full py-1 block sm:py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg ${
                          isButtonDisabled
                            ? "bg-black cursor-not-allowed"
                            : " bg-primary hover:bg-brightPrimary cursor-pointer"
                        }`}
                        disabled={isButtonDisabled}
                      >
                        {isLoading ? "Loading..." : "Continue with SSO"}
                      </button>
                    </div>
                    <label
                      className="text-[10px] text-center sm:text-sm xl:text-base"
                      htmlFor=""
                    >
                      Use{" "}
                      <span className="text-red-500">
                        @student.telkomuniversity.ac.id
                      </span>{" "}
                      for Students and{" "}
                      <span className="text-red-500">
                        @telkomuniversity.ac.id
                      </span>{" "}
                      for Lecturers{" "}
                    </label>
                    <label
                      className="text-[11px] text-center lg:text-base mb-4 "
                      htmlFor=""
                    >
                      Already have an account?{" "}
                      <span
                        onClick={navigateToLogin}
                        className="text-primary font-bold cursor-pointer hover:underline sm:underline-offset-4"
                      >
                        Log in
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
          )}
          {onSignUp && (
            <div className="w-full h-full relative lg:w-1/2 my-2 sm:my-0 bg-white justify-center flex lg:rounded-r-none">
              <div className="md:p-10 w-full flex flex-col h-full align-middle sm:gap-4">
                <img
                  className="mt-2 ml-5 h-6 w-12 sm:h-12 sm:w-24"
                  src={TelyuProjectLogo}
                  alt=""
                />
                <div className="flex p-10 lg:p-0 flex-col mx-10 w-2/3 self-center justify-center h-full gap-1">
                  <h1 className="text-center mt-4  text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
                    Welcome to Telyu Project
                  </h1>
                  <label
                    className="text-[11px] text-center text-textGray lg:text-base mb-4 "
                    htmlFor=""
                  >
                    You're new here! Tell us a little about yourself
                  </label>
                  <form className="flex flex-col gap-3 sm:gap-4" action="">
                    <div className="flex justify-between gap-4">
                      <div className="flex-col flex w-full">
                        <label
                          className="font-medium text-xs md:text-base text-textGray "
                          htmlFor=""
                        >
                          First Name
                        </label>
                        <input
                          placeholder=""
                          className="p-1 sm:p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                          type="text"
                        />
                        {isError && message === "User not found" && (
                          <p className="text-red-500 text-xs md:text-base mt-1">
                            {message}
                          </p>
                        )}
                      </div>
                      <div className="flex-col flex w-full">
                        <label
                          className="font-medium text-xs md:text-base text-textGray "
                          htmlFor=""
                        >
                          Last Name
                        </label>
                        <input
                          placeholder=""
                          className="p-1 sm:p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                          type="text"
                        />
                        {isError && message === "User not found" && (
                          <p className="text-red-500 text-xs md:text-base mt-1">
                            {message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between gap-4">
                      <div className="flex-col flex w-full">
                        <label
                          className="font-medium text-xs md:text-base text-textGray "
                          htmlFor=""
                        >
                          Faculty
                        </label>
                        <select
                          className="p-1 sm:p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                          name=""
                          id=""
                        >
                          <option value="">ambasing</option>
                          <option value="">ambasing</option>
                          <option value="">ambasing</option>
                          <option value="">ambasing</option>
                        </select>
                      </div>
                      <div className="flex-col flex w-full">
                        <label
                          className="font-medium text-xs md:text-base text-textGray "
                          htmlFor=""
                        >
                          Major
                        </label>
                        <select
                          className="p-1 sm:p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                          name=""
                          id=""
                        >
                          <option value="">ambasing</option>
                          <option value="">ambasing</option>
                          <option value="">ambasing</option>
                          <option value="">ambasing</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex-col flex w-full">
                      <label
                        className="font-medium text-xs md:text-base text-textGray "
                        htmlFor=""
                      >
                        Password
                      </label>
                      <input
                        placeholder=""
                        className="p-1 sm:p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                        type="password"
                      />
                      {isError && message === "User not found" && (
                        <p className="text-red-500 text-xs md:text-base mt-1">
                          {message}
                        </p>
                      )}
                    </div>
                    <div className="flex-col flex w-full">
                      <label
                        className="font-medium text-xs md:text-base text-textGray "
                        htmlFor=""
                      >
                        Confirmation Password
                      </label>
                      <input
                        placeholder=""
                        className="p-1 sm:p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                        type="password"
                      />
                      {isError && message === "User not found" && (
                        <p className="text-red-500 text-xs md:text-base mt-1">
                          {message}
                        </p>
                      )}
                    </div>
                    <div className="w-full h-full flex justify-end pt-0 xs:pt-2">
                      <button
                        type="button"
                        onClick={signUpMode}
                        className={`text-secondary w-full py-1 block sm:py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg ${
                          isButtonDisabled
                            ? "bg-black cursor-not-allowed"
                            : " bg-primary hover:bg-brightPrimary cursor-pointer"
                        }`}
                        disabled={isButtonDisabled}
                      >
                        {isLoading ? "Loading..." : "Continue with SSO"}
                      </button>
                    </div>
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
          )}
          {
            <div className="w-1/2 hidden p-8 h-full lg:block relative rounded-r-2xl">
              <Swiper
                modules={[Pagination, Autoplay]}
                className="h-full"
                spaceBetween={22}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="bg-cover">
                    <img
                      src={image}
                      className="w-full h-full object-cover rounded-xl"
                      alt={`${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Signup;
