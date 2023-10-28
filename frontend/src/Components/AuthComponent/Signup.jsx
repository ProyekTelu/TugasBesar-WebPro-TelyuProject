import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, signupUser } from "../../features/authSlice";
import axios from "axios";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TelkomLogo from "../../img/Telkom_University_Logo.png";
import { motion, AnimatePresence } from "framer-motion";
import ImgCarousel1 from "../../img/loginImage1.jpg";
import ImgCarousel2 from "../../img/loginImage2.png";
import ImgCarousel3 from "../../img/loginImage3.png";
import TelyuProjectLogo from "../../img/telyuProject.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const images = [ImgCarousel1, ImgCarousel2, ImgCarousel3];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nomorInduk, setNomorInduk] = useState("");
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
  const [kodeDosen, setKodeDosen] = useState("");
  const [isLecture, setIsLecture] = useState(false);
  const [nomorIndukDosen, setNomorIndukDosen] = useState("");

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
      navigate("/");
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
          nomorInduk.length === 10 &&
          nomorInduk !== "" &&
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
          nomorInduk.length === 10 &&
          nomorInduk !== "" &&
          kodeDosen !== "" &&
          kodeDosen.length === 3 &&
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
    nomorInduk,
    kodeDosen,
    nomorIndukDosen,
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
      .get("http://localhost:5000/fakultas")
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
        .get(`http://localhost:5000/prodi/${selectedFakultas}`)
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
            setNomorInduk("");
            setSelectedGender("");
            setSelectedFakultas("");
            setSelectedMajor("");
            setSelectedYear("");
            setSelectedKelas("");
            setNomorIndukDosen("");
            setKodeDosen("");
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
        nomorInduk,
        email,
        firstName,
        lastName,
        kodeDosen,
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

  const handleNomorIndukChange = (e) => {
    if (e.target.value.length <= 10) {
      setNomorInduk(e.target.value);
    }
  };

  const handleNomorIndukDosenChange = (e) => {
    if (e.target.value.length <= 10) {
      setNomorIndukDosen(e.target.value);
    }
  };

  const handleKodeDosenChange = (e) => {
    if (e.target.value.length <= 3) {
      setKodeDosen(e.target.value.toUpperCase());
    }
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
    <div
      className={`w-screen ${
        currentStep === 0 ? "md:h-screen" : "xl:h-screen"
      } flex justify-center`}
    >
      <ToastContainer />
      <div className="flex justify-center h-full w-full">
        <div
          className="flex w-full h-full justify-center "
          style={{ userSelect: "none" }}
        >
          <div
            className={`w-full h-full relative lg:w-1/2 my-2 sm:my-0 bg-white justify-center flex lg:rounded-r-none`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <div className="p-5 md:p-10 w-full flex flex-col h-full align-middle sm:gap-4">
                <img
                  className="mt-2 ml-5 h-6 w-12 sm:h-12 sm:w-24"
                  src={TelyuProjectLogo}
                  alt=""
                />
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
                          className="p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                        {emailAlreadyExist && (
                          <p className="text-red-500 text-xs md:text-base mt-1">
                            Email is already registered.
                          </p>
                        )}
                      </div>

                      <div className="w-full h-full flex justify-end pt-0 xs:pt-2">
                        <button
                          type="button"
                          onClick={checkEmail}
                          className={`text-white w-full block py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg ${
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
                    className="flex p-10 lg:p-0 flex-col mx-10 w-2/3 self-center justify-center h-full gap-1 relative"
                  >
                    <IoCaretBackCircleOutline
                      onClick={(e) => setCurrentStep(0)}
                      className="text-4xl absolute left-[-6rem] cursor-pointer"
                    />
                    <h1 className="text-center mt-4 text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
                      Welcome to Telyu Project
                    </h1>
                    <label
                      className="text-[9px] text-center text-textGray sm:text-sm  md:text-base mb-4 "
                      htmlFor=""
                    >
                      You're new here! Tell us a little about yourself
                    </label>
                    <form
                      className="flex flex-col gap-3 sm:gap-4"
                      action=""
                      onSubmit={signup}
                    >
                      <div className="flex flex-col xl:flex-row justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            First Name{" "}
                            {firstName.length < 3 && firstName !== "" && (
                              <span className="text-brightPrimary font-normal">
                                At least 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            placeholder=""
                            maxLength={30}
                            className="p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                          />
                        </div>
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Last Name{" "}
                            {lastName.length < 3 && lastName !== "" && (
                              <span className="text-brightPrimary font-normal">
                                At least 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            value={lastName}
                            maxLength={30}
                            placeholder=""
                            className="p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="text"
                            onChange={handleLastNameChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Gender
                          </label>
                          <select
                            className="p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
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
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            NIM{" "}
                            {nomorInduk.length < 10 && nomorInduk !== "" && (
                              <span className="text-brightPrimary font-normal">
                                Must be 10 characters.
                              </span>
                            )}
                          </label>
                          <input
                            placeholder=""
                            className={`p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            type="number"
                            value={nomorInduk}
                            onChange={handleNomorIndukChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col xl:flex-row justify-between gap-4">
                        <div className="flex-col  flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Faculty
                          </label>
                          <select
                            className="p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            name="faculty"
                            id="faculty"
                            value={selectedFakultas}
                            onChange={handleFakultasChange}
                          >
                            <option value="">Select a Faculty</option>
                            {fakultas.map((faculty) => (
                              <option key={faculty.kode} value={faculty.kode}>
                                {faculty.kode} - {faculty.nama}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-col flex w-full ">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Major
                          </label>
                          <select
                            className={`p-2 text-xs h-full ${
                              selectedFakultas === ""
                                ? "cursor-not-allowed"
                                : "cursor-default"
                            }  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
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
                              <option key={major.kode} value={major.kode}>
                                {major.program} - {major.nama}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Year
                          </label>
                          <select
                            className={` ${
                              selectedMajor === ""
                                ? "cursor-not-allowed"
                                : "cursor-default"
                            } p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
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
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Class
                          </label>
                          <select
                            className={`${
                              !canInputClass
                                ? "cursor-not-allowed"
                                : "cursor-default"
                            } p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
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
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Password
                          </label>
                          <input
                            placeholder=""
                            className="p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Confirmation Password
                          </label>
                          <input
                            placeholder=""
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="password"
                          />
                          <p
                            hidden={password === confirmPassword}
                            className="text-brightPrimary text-xs md:text-base mt-1"
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
                    className="flex p-10 lg:p-0 flex-col mx-10 w-2/3 self-center justify-center h-full gap-1 relative"
                  >
                    <IoCaretBackCircleOutline
                      onClick={() => setCurrentStep(0)}
                      className="text-4xl absolute left-[-6rem] cursor-pointer"
                    />
                    <h1 className="text-center mt-4 text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
                      Welcome to Telyu Project
                    </h1>
                    <label
                      className="text-[9px] text-center text-textGray sm:text-sm  md:text-base mb-4 "
                      htmlFor=""
                    >
                      You're new here! Tell us a little about yourself
                    </label>
                    <form
                      className="flex flex-col gap-3 sm:gap-4"
                      action=""
                      onSubmit={signup}
                    >
                      <div className="flex flex-col xl:flex-row justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            First Name{" "}
                            {firstName.length < 3 && firstName !== "" && (
                              <span className="text-brightPrimary font-normal">
                                At least 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            placeholder=""
                            maxLength={30}
                            className="p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                          />
                        </div>
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Last Name{" "}
                            {lastName.length < 3 && lastName !== "" && (
                              <span className="text-brightPrimary font-normal">
                                At least 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            value={lastName}
                            maxLength={30}
                            placeholder=""
                            className="p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="text"
                            onChange={handleLastNameChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row  justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Gender
                          </label>
                          <select
                            className="p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
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
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            NIDN{" "}
                            {nomorIndukDosen.length < 10 &&
                              nomorIndukDosen !== "" && (
                                <span className="text-brightPrimary font-normal">
                                  Must be 10 characters.
                                </span>
                              )}
                          </label>
                          <input
                            placeholder=""
                            className={`p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            type="number"
                            value={nomorIndukDosen}
                            onChange={handleNomorIndukDosenChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col xl:flex-row justify-between gap-4">
                        <div className="flex-col  flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Faculty
                          </label>
                          <select
                            className="p-2 text-xs h-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            name="faculty"
                            id="faculty"
                            value={selectedFakultas}
                            onChange={handleFakultasChange}
                          >
                            <option value="">Select a Faculty</option>
                            {fakultas.map((faculty) => (
                              <option key={faculty.kode} value={faculty.kode}>
                                {faculty.kode} - {faculty.nama}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-col flex w-full ">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Lecture Code {""}
                            {kodeDosen.length < 3 && kodeDosen !== "" && (
                              <span className="text-brightPrimary font-normal">
                                Must be 3 characters.
                              </span>
                            )}
                          </label>
                          <input
                            placeholder=""
                            className={`p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                            type="text"
                            value={kodeDosen}
                            onChange={handleKodeDosenChange}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Password
                          </label>
                          <input
                            placeholder=""
                            className="p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex-col flex w-full">
                          <label
                            className="font-medium text-xs md:text-base text-textGray "
                            htmlFor=""
                          >
                            Confirmation Password
                          </label>
                          <input
                            placeholder=""
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                            type="password"
                          />
                          <p
                            hidden={password === confirmPassword}
                            className="text-brightPrimary text-xs md:text-base mt-1"
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
                <div className="absolute mt-2 lg:mt-0 md:static bottom-0 left-0 right-0 flex justify-center text-[8px] sm:text-xs md:text-xs lg:text-base">
                  <label htmlFor="" className="text-center">
                    {" "}
                    © 2023 Kelompok 7, Inc. All rights reserved. Terms - Privacy
                  </label>
                </div>
              </div>
            </AnimatePresence>
          </div>
          <div className="w-1/2 hidden p-8 xl:h-screen lg:block relative rounded-r-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
