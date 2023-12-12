import React, { useEffect, useState } from "react";
import user from "../../img/user.png";
import EditProfile from "../../img/editing.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const User = JSON.parse(localStorage.getItem("user"));
  const [firstName, setfirstName] = useState(User.firstName);
  const [lastName, setlastName] = useState(User.lastName);
  const [nomorInduk, setnim] = useState(User.userID);
  const [photoProfile, setphotoProfile] = useState(User.photoProfile);
  const [userImage, setUserImage] = useState(user);
  const [phoneNumber, setphoneNumber] = useState(User.phoneNumber);
  const [gender, setgender] = useState(User.gender);
  const [kelas, setkelas] = useState(User.kelas);
  const [kodeFakultas, setkodeFakultas] = useState(User.facultyName);
  const [kodeProdi, setkodeProdi] = useState(User.majorName);
  const [role, setrole] = useState(User.role);
  const [kodeDosen, setkodeDosen] = useState(User.lectureCode);

  const [isEditButtonVisible, setIsEditButtonVisible] = useState(true);
  const [isEditButtonTextVisible, setIsEditButtonTextVisible] = useState(true);
  //convert blob ke gambar















  
  useEffect(() => {
    if (photoProfile && photoProfile.data) {
      const base64String = btoa(
        new Uint8Array(photoProfile.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      const url = `data:image/png;base64,${base64String}`;
      setUserImage(url);
    }
  }, [photoProfile]);

  const updateUser = async () => {
    try {
      const updatedData = {
        firstName,
        lastName,
        phoneNumber,
      };
      const respond = await axios.patch(
        `http://localhost:5000/user/${User.userID}`,
        updatedData
      );

      User.firstName = respond.data.firstName;
      User.lastName = respond.data.lastName;
      User.phoneNumber = respond.data.phoneNumber;

      localStorage.setItem("user", JSON.stringify(User));

      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

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

  const navigate = useNavigate();

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
    setIsEditButtonVisible(!isEditButtonVisible);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDoneEditing = async () => {
    try {
      await updateUser();
      setIsEditing(false);
      setIsEditButtonVisible(true);
      setIsEditButtonTextVisible(true);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="p-4 md:p-12 overflow-y-auto">
      <div className="relative h-60 rounded-b-3xl flex justify-center sm:h-55">
        <div className="absolute -bottom-2 sm:-bottom-0 md:-bottom-10">
          <img
            src={userImage}
            className={`${
              isEditing
                ? "inset-0 bg-gray-600 opacity-80 rounded-full cursor-pointer transition-transform transform-gpu hover:scale-105 focus:outline-none ring-2 ring-red-300"
                : "hover:opacity-80 transition-opacity pointer-events-none"
            } object-cover border-4 border-white w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 aspect-square rounded-full`}
            alt="cover"
            onClick={() => isEditing && document.getElementById("file").click()}
          />
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
        <div className="flex items-center justify-between">
          <div className="w-auto">Profile</div>
          <div className="flex items-center justify-content-start">
            <img
              src={EditProfile}
              className={`w-6 h-auto mr-2 cursor-pointer ${
                isEditButtonVisible ? "" : "invisible"
              }`}
              alt="edit"
              onClick={() => {
                handleEditProfile();
                setIsEditButtonTextVisible(false);
              }}
            />
            <span
              style={{ fontSize: "25px" }}
              className={`text-black ${
                isEditButtonTextVisible ? "" : "invisible"
              }`}>
              Edit
            </span>
          </div>
        </div>
      </div>
      <div className="border border-gray-500 mt-2"></div>

      {/* Label Biodata */}
      <form
        className="flex flex-col sm:flex-row gap-4 xs:gap-6 md:gap-8 xl:gap-10"
        action="">
        <div className="w-full xs:w-1/2">
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray"
              htmlFor="">
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
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
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
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              Phone Number
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "" : "bg-gray-200"
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="nomorHp"
              onChange={handlephoneNumberChange}
              readOnly={!isEditing}
              value={phoneNumber}
            />
          </div>
          {User.role === "lecturer" && (
            <div className="flex flex-col mt-4">
              <label
                className="font-medium text-xs md:text-base text-textGray "
                htmlFor="">
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
                htmlFor="">
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
        <div className="w-full xs:w-1/2">
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
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
              htmlFor="">
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
                htmlFor="">
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
              htmlFor="">
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
                htmlFor="">
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
              onClick={handleDoneEditing}>
              Save
            </button>
            <button
              className="rounded-md border border-transparent bg-primary px-8 py-2 
                text-base font-medium text-white duration-100 ease-out hover:bg-primaryAlternative
                hover:scale-105 active:scale-95"
              onClick={handleDoneEditing}>
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
            }}>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
