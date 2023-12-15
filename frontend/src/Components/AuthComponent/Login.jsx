import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../../features/authSlice";

import { Link } from "react-router-dom";

import TelkomLogo from "../../img/Telkom_University_Logo.png";
import TelyuProjectLogo from "../../img/Logo.png";
import { toast } from "react-toastify";
import CarouselAuth from "./CarouselAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/telyuProject/home");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    localStorage.setItem("isExpand", true);
    localStorage.setItem("currentNav", 0);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Log in Successful!");
    }
  }, [isSuccess]);

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

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="w-screen min-h-screen justify-center">
      <div className="flex justify-center min-h-screen w-full">
        <div
          className="flex flex-wrap w-full h-auto justify-center "
          style={{ userSelect: "none" }}
        >
          <div className="w-full h-full relative lg:w-1/2 my-2 sm:my-0 bg-white justify-center flex lg:rounded-r-none">
            <div className="md:p-10 w-full flex flex-col h-full align-middle sm:gap-4">
              <Link to={"/"} className="pt-4 pl-4 md:mb-4 flex items-center">
                <img
                  src={TelyuProjectLogo}
                  alt="Tel-u Project"
                  className="w-5 md:w-10"
                />
                <p className="ml-2 text-lg md:text-2xl font-bold text-gray-800">
                  Tel-U Project
                </p>
              </Link>

              <div className="flex p-10 lg:p-0 flex-col mx-10 w-full sm:w-2/3 self-center justify-center h-full gap-1">
                <img
                  className="w-10 sm:w-14 md:w-20 self-center"
                  src={TelkomLogo}
                  alt=""
                />
                <h1 className="text-center mt-4 text-xl sm:text-2xl md:text-3xl md:my-4 font-bold">
                  Log in
                </h1>
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-3 sm:gap-4"
                  action=""
                >
                  <div className="flex flex-col">
                    <label
                      className="font-medium text-xs md:text-sm "
                      htmlFor=""
                    >
                      Email SSO
                    </label>
                    <input
                      placeholder=""
                      className="p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
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
                  <div className="flex flex-col">
                    <label
                      className="text-xs md:text-sm font-medium"
                      htmlFor=""
                    >
                      Password
                    </label>
                    <input
                      placeholder=""
                      className="p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {isError && message === "Wrong password" && (
                      <p className="text-red-500 text-xs md:text-base mt-1">
                        {message}
                      </p>
                    )}
                  </div>
                  <div className="w-full h-full flex justify-end pt-0 xs:pt-2">
                    <button
                      type="submit"
                      className={`text-white w-full block py-2 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg ${
                        isButtonDisabled
                          ? "bg-black cursor-not-allowed"
                          : " bg-primary hover:bg-red-600 cursor-pointer"
                      }`}
                      disabled={isButtonDisabled}
                    >
                      {isLoading ? "Loading..." : "Log in "}
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
                    className="text-[11px] text-center sm:text-sm xl:text-base "
                    htmlFor=""
                  >
                    Dont have an account?{" "}
                    <span
                      onClick={navigateToSignup}
                      className="text-primary font-bold cursor-pointer hover:underline  sm:underline-offset-4"
                    >
                      Create Now
                    </span>
                  </label>
                </form>
              </div>
              <div className="absolute lg:mt-0 md:static bottom-5 left-0 right-0 flex justify-center text-[8px] sm:text-xs md:text-xs lg:text-base">
                <label htmlFor="" className="text-center">
                  {" "}
                  © 2023 Kelompok 7, Inc. All rights reserved. Terms - Privacy
                </label>
              </div>
            </div>
          </div>
          <CarouselAuth />
        </div>
      </div>
    </div>
  );
};

export default Login;
