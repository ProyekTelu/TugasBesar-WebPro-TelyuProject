import React, { useEffect, useState } from "react";
import EditProfile from "../../img/editing.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUserData, setTempUserData] = useState({});
  const [User, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [firstName, setfirstName] = useState(User.firstName);
  const [lastName, setlastName] = useState(User.lastName);
  const [nomorInduk, setnim] = useState(User.userID);
  const [photoProfile, setphotoProfile] = useState(User.photoProfileUrl);
  const [userImage, setUserImage] = useState({ name: "dummy" });
  const [phoneNumber, setphoneNumber] = useState(User.phoneNumber);
  const [gender, setgender] = useState(User.gender);
  const [kelas, setkelas] = useState(User.kelas);
  const [kodeFakultas, setkodeFakultas] = useState(User.facultyName);
  const [kodeProdi, setkodeProdi] = useState(User.majorName);
  const [role, setrole] = useState(User.role);
  const [kodeDosen, setkodeDosen] = useState(User.lectureCode);
  const [isEditButtonVisible, setIsEditButtonVisible] = useState(true);
  const [triggerEffect, setTriggerEffect] = useState();

  const updateUser = async () => {
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("lectureCode", kodeDosen);
      formData.append("prevPhoto", User.photoProfileImage);
      formData.append("file", userImage);

      setTriggerEffect(
        await axios({
          method: "put",
          url: `http://localhost:5000/user/${User.userID}`,
          data: formData,
        })
      );
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${User.userID}`
        );
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(JSON.parse(localStorage.getItem("user")));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [triggerEffect]);

  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value);
  };

  const handlelastNameChange = (e) => {
    setlastName(e.target.value);
  };

  const handlekodeDosenChange = (e) => {
    setkodeDosen(e.target.value);
  };

  const handlephoneNumberChange = (e) => {
    setphoneNumber(e.target.value);
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
    setIsEditButtonVisible(!isEditButtonVisible);
    setTempUserData({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      lectureCode: kodeDosen,
      photoProfile: photoProfile,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(file);
        setphotoProfile(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDoneEditing = async () => {
    try {
      await updateUser();
      setIsEditing(false);
      setIsEditButtonVisible(true);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleCancelEditing = async () => {
    setfirstName(tempUserData.firstName);
    setlastName(tempUserData.lastName);
    setphoneNumber(tempUserData.phoneNumber);
    setkodeDosen(tempUserData.lectureCode);
    setIsEditing(false);
    setIsEditButtonVisible(true);
    setphotoProfile(tempUserData.photoProfile);
  };

  return (
    <div className="p-4 md:p-12 overflow-y-auto">
      <div className="group relative h-60 rounded-b-3xl flex justify-center sm:h-55">
        <div className="absolute h-auto inset-0 flex items-center justify-center -bottom-2 sm:-bottom-0 md:-bottom-10">
          {/* <div
            className={`text-black absolute z-20 flex flex-col gap-7`}
          >
            <button className="bg-whiteAlternative p-1 rounded-md">Delete</button>
            <button className="bg-whiteAlternative p-1 rounded-md">Select File</button>
          </div> */}
          <img
            src={photoProfile}
            className={`${
              isEditing
                ? "inset-0 bg-greyAlternative rounded-full cursor-pointer transition-transform transform-gpu hover:scale-105 focus:outline-none ring-2 ring-grey"
                : "transition-opacity pointer-events-none"
            } object-cover border-4 border-white w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 aspect-square rounded-full z-10`}
            alt="cover"
            onClick={() => isEditing && document.getElementById("file").click()}
          />
          <div
            className={`text-black absolute z-0 scale-[1050%] sm:scale-[1600%] md:scale-[1900%]`}
          >
            <CgProfile />
          </div>
          <input
            className="hidden"
            type="file"
            id="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="text-center pt-10 xs:pt-12 sm:pt-0 md:pt-16 xl:pt-20 text-3xl xs:text-4xl xl:text-5xl font-bold text-black">
        <div className={`flex items-end justify-between`}>
          <div className="w-auto">Profile</div>
          <div
            className={`flex items-center justify-content-start cursor-pointer scale-75 ${
              isEditButtonVisible
                ? "cursor-pointer"
                : "cursor-none pointer-events-none hidden"
            }`}
            onClick={() => {
              handleEditProfile();
            }}
          >
            <img
              src={EditProfile}
              className={`w-6 h-auto mr-2 cursor-pointer`}
              alt="edit"
            />
            <span style={{ fontSize: "25px" }} className={`text-black`}>
              Edit
            </span>
          </div>
        </div>
      </div>
      <div className="border border-gray-500 mt-2"></div>

      {/* Label Biodata */}
      <form
        className="flex flex-col sm:flex-row gap-4 xs:gap-6 md:gap-8 xl:gap-10"
        action=""
      >
        {/* Column 1 */}
        <div className="w-full xs:w-1/2">
          {/* First Name */}
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray"
              htmlFor=""
            >
              First Name
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "" : "bg-gray-200"
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="nama"
              onChange={handleFirstNameChange}
              readOnly={!isEditing}
              value={firstName}
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor=""
            >
              Last Name
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "" : "bg-gray-200"
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="namaAkhir"
              onChange={handlelastNameChange}
              readOnly={!isEditing}
              value={lastName}
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor=""
            >
              Phone Number
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "" : "bg-gray-200"
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="number"
              id="nomorHp"
              onChange={handlephoneNumberChange}
              readOnly={!isEditing}
              value={phoneNumber}
            />
          </div>

          {/*  */}
          {User.role === "lecturer" && (
            <div className="flex flex-col mt-4">
              <label
                className="font-medium text-xs md:text-base text-textGray "
                htmlFor=""
              >
                Lecturer Code
              </label>
              <input
                placeholder=""
                className={`p-2 ${
                  isEditing ? "" : "bg-gray-200"
                } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                type="text"
                id="kodeDosen"
                onChange={handlekodeDosenChange}
                readOnly={!isEditing}
                value={kodeDosen}
              />
            </div>
          )}
          {User.role === "student" && (
            <div className="flex flex-col mt-4">
              <label
                className="font-medium text-xs md:text-base text-textGray "
                htmlFor=""
              >
                Class
              </label>
              <input
                placeholder=""
                className={`p-2 bg-gray-200 text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                type="text"
                id="kelas"
                value={kelas}
              />
            </div>
          )}
        </div>

        {/* Column 2 */}
        <div className="w-full xs:w-1/2">
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor=""
            >
              Faculty
            </label>
            <input
              placeholder=""
              className={`p-2 bg-gray-200 text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="fakultas"
              value={kodeFakultas}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor=""
            >
              NIM
            </label>
            <input
              placeholder=""
              className={`p-2 bg-gray-200 text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="nim"
              value={nomorInduk}
            />
          </div>
          {User.role === "lecturer" && (
            <div className="flex flex-col mt-4">
              <label
                className="font-medium text-xs md:text-base text-textGray "
                htmlFor=""
              >
                Role
              </label>
              <input
                placeholder=""
                className={`p-2 bg-gray-200 text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                type="text"
                id="role"
                value={role}
              />
            </div>
          )}
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor=""
            >
              Gender
            </label>
            <input
              placeholder=""
              className={`p-2 bg-gray-200 text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="gender"
              value={gender}
            />
          </div>
          {User.role === "student" && (
            <div className="flex flex-col mt-4">
              <label
                className="font-medium text-xs md:text-base text-textGray "
                htmlFor=""
              >
                Major
              </label>
              <input
                placeholder=""
                className={`p-2 bg-gray-200 text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                type="text"
                id="jurusan"
                value={kodeProdi}
              />
            </div>
          )}
        </div>
      </form>

      <div className="gap-3 mt-6 pb-2 xs:mt-8 md:mt-10 xl:mt-12 flex ">
        {isEditing ? (
          <>
            <button
              className="rounded-md border border-transparent bg-secondary px-8 py-2 
                text-base font-medium text-white duration-100 ease-out hover:bg-secondaryAlternative
                hover:scale-105 active:scale-95"
              onClick={handleDoneEditing}
            >
              Save
            </button>
            <button
              className="rounded-md border border-transparent bg-primary px-8 py-2 
                text-base font-medium text-white duration-100 ease-out hover:bg-primaryAlternative
                hover:scale-105 active:scale-95"
              onClick={handleCancelEditing}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="rounded-md border border-transparent bg-primary px-8 py-2 
              text-base font-medium text-white duration-100 ease-out hover:bg-primaryAlternative
              hover:scale-105 active:scale-95"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
