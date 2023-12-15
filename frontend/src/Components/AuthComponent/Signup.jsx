import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { reset, signupUser } from "../../features/authSlice";
import axios from "axios";
import CarouselAuth from "./CarouselAuth";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TelkomLogo from "../../img/Telkom_University_Logo.png";
import { motion, AnimatePresence } from "framer-motion";
import TelyuProjectLogo from "../../img/Logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [fakultas, setFakultas] = useState([]);
  const [selectedFakultas, setSelectedFakultas] = useState("");
  const [majors, setMajors] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [isInputComplete, setIsInputComplete] = useState(false);
  const [canInputClass, setCanInputClass] = useState(false);
  const [emailAlreadyExist, setEmailAlreadyExist] = useState(false);
  const [codeDosen, setcodeDosen] = useState("");
  const [isLecture, setIsLecture] = useState(false);

  const years = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    2024, 2025, 2026, 2027,
  ];

  const [kelas, setKelas] = useState([]);

  const descendingYears = years.sort((a, b) => b - a);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isLoading } = useSelector((state) => state.auth);

  const genders = ["Male", "Female"];

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      // navigate("/home");
    } else if (user) {
      navigate("/login");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  useEffect(() => {
    if (!isLecture) {
      setIsInputComplete(
        email !== "" &&
          firstName !== "" &&
          firstName.length >= 3 &&
          lastName !== "" &&
          lastName.length >= 3 &&
          phoneNumber !== "" &&
          selectedFakultas !== "" &&
          selectedGender !== "" &&
          selectedMajor !== "" &&
          selectedYear !== "" &&
          selectedKelas !== "" &&
          password !== "" &&
          confirmPassword !== "" &&
          password === confirmPassword
      );
    } else {
      setIsInputComplete(
        email !== "" &&
          firstName !== "" &&
          firstName.length >= 3 &&
          lastName !== "" &&
          lastName.length >= 3 &&
          phoneNumber !== "" &&
          codeDosen !== "" &&
          codeDosen.length === 3 &&
          selectedFakultas !== "" &&
          selectedGender !== "" &&
          password !== "" &&
          confirmPassword !== "" &&
          password === confirmPassword
      );
    }
  }, [
    isLecture,
    email,
    firstName,
    lastName,
    phoneNumber,
    codeDosen,
    selectedFakultas,
    selectedGender,
    selectedMajor,
    selectedYear,
    selectedKelas,
    password,
    confirmPassword,
  ]);

  useEffect(() => {
    setCanInputClass(selectedYear !== "" && selectedMajor !== "");
  }, [selectedYear, selectedMajor]);

  useEffect(() => {
    if (selectedMajor !== "" && selectedYear !== "") {
      const selectedYearNumber = parseInt(selectedYear, 10);
      const newYear = selectedYearNumber + 24;
      setKelas([
        selectedMajor + "-" + (newYear % 100) + "-01",
        selectedMajor + "-" + (newYear % 100) + "-02",
        selectedMajor + "-" + (newYear % 100) + "-03",
        selectedMajor + "-" + (newYear % 100) + "-04",
        selectedMajor + "-" + (newYear % 100) + "-05",
        selectedMajor + "-" + (newYear % 100) + "-06",
        selectedMajor + "-" + (newYear % 100) + "-07",
      ]);
    }
  }, [selectedMajor, selectedYear]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/faculty")
      .then((response) => {
        setFakultas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fakultas:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedFakultas) {
      axios
        .get(`http://localhost:5000/major/${selectedFakultas}`)
        .then((response) => {
          setMajors(response.data);
        })
        .catch((error) => {
          console.error("Error fetching majors:", error);
        });
    }
  }, [selectedFakultas]);

  const checkEmailDomain = (email) => {
    const regex =
      /@(student\.telkomuniversity\.ac\.id|telkomuniversity\.ac\.id)$/i;
    return regex.test(email);
  };

  const checkEmail = () => {
    axios
      .post("http://localhost:5000/checkMail", {
        email: email,
      })
      .then((response) => {
        if (response.data === true) {
          setEmailAlreadyExist(true);
        } else {
          setTempEmail(email);
          const domain = email.split("@")[1];
          if (domain === "telkomuniversity.ac.id") {
            setIsLecture(true);
          } else {
            setIsLecture(false);
          }
          if (email !== tempEmail) {
            setFirstName("");
            setLastName("");
            setphoneNumber("");
            setSelectedGender("");
            setSelectedFakultas("");
            setSelectedMajor("");
            setSelectedYear("");
            setSelectedKelas("");
            setcodeDosen("");
          }
          setPassword("");
          setConfirmPassword("");
          localStorage.setItem("cureentStep", 1);
          setCurrentStep(1);
        }
      });
  };

  const signup = (e) => {
    e.preventDefault();
    dispatch(
      signupUser({
        phoneNumber,
        email,
        firstName,
        lastName,
        codeDosen,
        selectedGender,
        selectedFakultas,
        selectedMajor,
        selectedKelas,
        password,
      })
    );
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Sign Up Successful!");
    }
  });

  function capitalizeFirstLetter(input) {
    const words = input.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmailAlreadyExist(false);
    setEmail(newEmail);
    setValidEmail(checkEmailDomain(newEmail));
  };

  const handleFakultasChange = (e) => {
    setSelectedFakultas(e.target.value);
    setSelectedMajor("");
  };

  const handlephoneNumberChange = (e) => {
    if (e.target.value.length <= 12) {
      setphoneNumber(e.target.value);
    }
  };

  const handlecodeDosenChange = (e) => {
    if (e.target.value.length <= 3) {
      setcodeDosen(e.target.value.toUpperCase());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkEmail();
  };

  const handleFirstNameChange = (e) => {
    setFirstName(capitalizeFirstLetter(e.target.value));
  };

  const handleLastNameChange = (e) => {
    setLastName(capitalizeFirstLetter(e.target.value));
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={`w-screen min-h-screen flex justify-center`}>
      <ToastContainer />
      <div className="flex justify-center w-full">
        <div
          className="flex w-full justify-center "
          style={{ userSelect: "none" }}
        >
          <div
            className={`w-full h-full relative lg:w-1/2 my-2 sm:my-0 bg-white justify-center flex lg:rounded-r-none`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <div className="p-5 md:p-10 w-full flex flex-col h-full align-middle sm:gap-4">
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
                {currentStep === 0 && (
                  <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="flex p-10 lg:p-0 flex-col mx-10 w-full sm:w-2/3 self-center justify-center h-full gap-1 relative"
                  >
                    <img
                      className="w-10 sm:w-14 md:w-20 self-center"
                      src={TelkomLogo}
                      alt=""
                    />
                    <h1 className="text-center mt-4 text-xl sm:text-2xl md:text-3xl md:my-4 font-bold">
                      Sign Up
                    </h1>
                    <form
                      className="flex flex-col gap-3 sm:gap-4"
                      onSubmit={handleSubmit}
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
                        {emailAlreadyExist && (
                          <p className="text-red-500 text-xs md:text-sm mt-1">
                            Email is already registered.
                          </p>
                        )}
                      </div>

                      <div className="w-full h-full flex justify-end pt-0 xs:pt-2">
                        <button
                          type="submit"
                          className={`text-white w-full block py-2 md:text-base text-xs px-2 md:px-5 rounded-md md:rounded-lg ${
                            !validEmail
                              ? "bg-black cursor-not-allowed"
                              : " bg-primary hover:bg-red-600 cursor-pointer"
                          }`}
                          disabled={!validEmail}
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
                        className="text-[11px] text-center  sm:text-sm xl:text-base "
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
                  </motion.div>
                )}
                {currentStep === 1 && !isLecture && (
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="flex p-10 lg:p-0 flex-col mx-10 md:w-2/3 self-center justify-center h-full gap-1 relative"
                  >
                    <IoCaretBackCircleOutline
                      onClick={(e) => setCurrentStep(0)}
                      className="text-4xl absolute left-[-2rem] lg:left-[-5rem] cursor-pointer"
                    />
                    <h1 className="text-center text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
                      Welcome to Telyu Project
                    </h1>
                    <label
                      className="text-[9px] text-center sm:text-sm  md:text-sm mb-4 "
                      htmlFor=""
                    >
                      You're new here! Tell us a little about yourself
                    </label>
                    <form
                      className="flex flex-col gap-3 sm:gap-4"
                      action=""
                      onSubmit={signup}
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            First Name{" "}
                            {firstName.length < 3 && firstName !== "" && (
                              <span className="text-red-500 font-normal">
                                At least 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            placeholder=""
                            maxLength={30}
                            className="p-2 text-xs h-full w-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                          />
                        </div>
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Last Name{" "}
                            {lastName.length < 3 && lastName !== "" && (
                              <span className="text-red-500 font-normal">
                                At least 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            value={lastName}
                            maxLength={30}
                            placeholder=""
                            className="p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="text"
                            onChange={handleLastNameChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Gender
                          </label>
                          <select
                            className="p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            name="gender"
                            id="gender"
                            value={selectedGender}
                            onChange={(e) => setSelectedGender(e.target.value)}
                          >
                            <option value="">Select a Gender</option>
                            {genders.map((gender, index) => (
                              <option key={index} value={gender}>
                                {gender}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Phone Number
                          </label>
                          <input
                            placeholder="+62"
                            className={`p-2 text-xs h-full w-full md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            type="number"
                            value={phoneNumber}
                            onChange={handlephoneNumberChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col xl:flex-row justify-between gap-4">
                        <div className="flex-col  flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Faculty
                          </label>
                          <select
                            className="p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            name="faculty"
                            id="faculty"
                            value={selectedFakultas}
                            onChange={handleFakultasChange}
                          >
                            <option value="">Select a Faculty</option>
                            {fakultas.map((faculty) => (
                              <option key={faculty.code} value={faculty.code}>
                                {faculty.code} - {faculty.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-col flex w-full ">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Major
                          </label>
                          <select
                            className={`p-2 text-xs h-full ${
                              selectedFakultas === ""
                                ? "cursor-not-allowed"
                                : "cursor-default"
                            }  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            name="faculty"
                            id="faculty"
                            disabled={selectedFakultas === ""}
                            value={selectedMajor}
                            title={
                              selectedFakultas === ""
                                ? "Fakultas must be selected"
                                : ""
                            }
                            onChange={(e) => setSelectedMajor(e.target.value)}
                          >
                            <option value="">Select a Major</option>
                            {majors.map((major) => (
                              <option key={major.code} value={major.code}>
                                {major.degree} - {major.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Year
                          </label>
                          <select
                            className={` ${
                              selectedMajor === ""
                                ? "cursor-not-allowed"
                                : "cursor-default"
                            } p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            name="Year"
                            id="Year"
                            value={selectedYear}
                            disabled={selectedMajor === ""}
                            onChange={(e) => setSelectedYear(e.target.value)}
                          >
                            <option value="">Select a Year</option>
                            {descendingYears.map((year, index) => (
                              <option key={index} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Class
                          </label>
                          <select
                            className={`${
                              !canInputClass
                                ? "cursor-not-allowed"
                                : "cursor-default"
                            } p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            name="kelas"
                            id="kelas"
                            disabled={!canInputClass}
                            value={selectedKelas}
                            onChange={(e) => setSelectedKelas(e.target.value)}
                          >
                            <option value="">Select a Class</option>
                            {kelas.map((k, index) => (
                              <option key={index} value={k}>
                                {k}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Password
                          </label>
                          <input
                            placeholder=""
                            className="p-2 text-xs h-full w-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Confirmation Password
                          </label>
                          <input
                            placeholder=""
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="p-2 text-xs h-full w-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="password"
                          />
                          <p
                            hidden={password === confirmPassword}
                            className="text-red-500 text-xs md:text-sm mt-1"
                          >
                            Password and confirmation password don't match
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-full flex justify-end pt-0 xs:pt-2">
                        <button
                          type="submit"
                          className={`text-white w-full  block py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg ${
                            !isInputComplete
                              ? "bg-black cursor-not-allowed"
                              : " bg-primary hover:bg-red-600 cursor-pointer"
                          }`}
                          disabled={!isInputComplete}
                        >
                          {isLoading ? "Loading..." : "Sign Up"}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
                {currentStep === 1 && isLecture && (
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="flex p-10 lg:p-0 flex-col mx-10 md:w-2/3 self-center justify-center h-full gap-1 relative"
                  >
                    <IoCaretBackCircleOutline
                      onClick={() => setCurrentStep(0)}
                      className="text-4xl absolute left-[-2rem] lg:left-[-5rem] cursor-pointer"
                    />
                    <h1 className="text-center mt-4 text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
                      Welcome to Telyu Project
                    </h1>
                    <label
                      className="text-[9px] text-center sm:text-sm  md:text-sm mb-4 "
                      htmlFor=""
                    >
                      You're new here! Tell us a little about yourself
                    </label>
                    <form
                      className="flex flex-col gap-3 sm:gap-4"
                      action=""
                      onSubmit={signup}
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            First Name{" "}
                            {firstName.length < 3 && firstName !== "" && (
                              <span className="text-red-500 font-normal">
                                At least 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            placeholder=""
                            maxLength={30}
                            className="p-2 text-xs h-full w-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                          />
                        </div>
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Last Name{" "}
                            {lastName.length < 3 && lastName !== "" && (
                              <span className="text-red-500 font-normal">
                                At least 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            value={lastName}
                            maxLength={30}
                            placeholder=""
                            className="p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="text"
                            onChange={handleLastNameChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row  justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Gender
                          </label>
                          <select
                            className="p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            name="gender"
                            id="gender"
                            value={selectedGender}
                            onChange={(e) => setSelectedGender(e.target.value)}
                          >
                            <option value="">Select a Gender</option>
                            {genders.map((gender, index) => (
                              <option key={index} value={gender}>
                                {gender}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Phone Number
                          </label>
                          <input
                            placeholder="+62"
                            className={`p-2 text-xs h-full w-full md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            type="number"
                            value={phoneNumber}
                            onChange={handlephoneNumberChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col xl:flex-row justify-between gap-4">
                        <div className="flex-col  flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Faculty
                          </label>
                          <select
                            className="p-2 text-xs h-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            name="faculty"
                            id="faculty"
                            value={selectedFakultas}
                            onChange={handleFakultasChange}
                          >
                            <option value="">Select a Faculty</option>
                            {fakultas.map((faculty) => (
                              <option key={faculty.code} value={faculty.code}>
                                {faculty.code} - {faculty.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-col flex w-full ">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Lecture Code {""}
                            {codeDosen.length < 3 && codeDosen !== "" && (
                              <span className="text-red-500 font-normal">
                                Must be 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            placeholder=""
                            className={`p-2 text-xs h-full w-full md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            type="text"
                            value={codeDosen}
                            onChange={handlecodeDosenChange}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Password
                          </label>
                          <input
                            placeholder=""
                            className="p-2 text-xs h-full w-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-sm "
                            htmlFor=""
                          >
                            Confirmation Password
                          </label>
                          <input
                            placeholder=""
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="p-2 text-xs h-full w-full  md:text-sm focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="password"
                          />
                          <p
                            hidden={password === confirmPassword}
                            className="text-red-500 text-xs md:text-sm mt-1"
                          >
                            Password and confirmation password don't match
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-full flex justify-end pt-0 xs:pt-2">
                        <button
                          type="submit"
                          className={`text-white w-full  block py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg ${
                            !isInputComplete
                              ? "bg-black cursor-not-allowed"
                              : " bg-primary hover:bg-red-600 cursor-pointer"
                          }`}
                          disabled={!isInputComplete}
                        >
                          {isLoading ? "Loading..." : "Sign Up"}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
                <div className="absolute mt-2 lg:mt-0 md:static bottom-5 left-0 right-0 flex justify-center text-[8px] sm:text-xs md:text-xs lg:text-base">
                  <label htmlFor="" className="text-center">
                    © 2023 Kelompok 7, Inc. All rights reserved. Terms - Privacy
                  </label>
                </div>
              </div>
            </AnimatePresence>
          </div>
          <CarouselAuth />
        </div>
      </div>
    </div>
  );
};

export default Signup;
