import React, { useEffect, useState } from "react";
import user from "../../img/user.png";
import EditProfile from "../../img/editing.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userImage, setUserImage] = useState(user);
  const User = JSON.parse(localStorage.getItem("user"));
  const [firstName, setfirstName] = useState(User.firstName);
  const [lastName, setlastName] = useState(User.lastName);
  const [nomorInduk, setnim] = useState(User.nomorInduk);
  const [phoneNumber, setphoneNumber] = useState(User.phoneNumber);
  const [gender, setgender] = useState(User.gender);
  const [kelas, setkelas] = useState(User.kelas);
  const [kodeFakultas, setkodeFakultas] = useState("FIF");
  const [kodeProdi, setkodeProdi] = useState("S1 Rekayasa Perangkat Lunak");
  const [role, setrole] = useState(User.role);
  const [kodeDosen, setkodeDosen] = useState(User.kodeDosen);

  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value);
  };

  const handlelastNameChange = (e) => {
    setlastName(e.target.value);
  };

  const handleroleChange = (e) => {
    setrole(e.target.value);
  };

  const handlekodeDosenChange = (e) => {
    setkodeDosen(e.target.value);
  };

  const handlenomorIndukChange = (e) => {
    setnim(e.target.value);
  };

  const handlegenderChange = (e) => {
    setgender(e.target.value);
  };

  const handlephoneNumberChange = (e) => {
    setphoneNumber(e.target.value);
  };

  const handlekodeFakultas = (e) => {
    setkodeFakultas(e.target.value);
  };

  const handlekodeProdi = (e) => {
    setkodeProdi(e.target.value);
  };

  const handlekelasChange = (e) => {
    setkelas(e.target.value);
  };

  const navigate = useNavigate();

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleDoneEditing = () => {
    setIsEditing(false);
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

  return (
    <>
      <div className="relative h-60 rounded-b-3xl flex justify-center sm:h-55">
        <div className="absolute -bottom-2 sm:-bottom-0 md:-bottom-10 xl:-bottom-14">
          <img
            src={userImage}
            className={`${
              isEditing ? "bg-gray-200 cursor-pointer" : "pointer-events-none"
            } object-cover border-4 border-white w-40 h-40 xs:h-52 -bottom-6 sm:w-100 sm:h-40 md:w-100 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-full`}
            alt="cover"
            onClick={() => document.getElementById("file").click()}
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
          Profile
          <div className="cursor-pointer">
            <img
              src={EditProfile}
              className="w-5 h-auto cursor-pointer"
              alt="edit"
              onClick={handleEditProfile}
            />
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
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              First Name
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
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
              NIM
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="NIM"
              onChange={handlenomorIndukChange}
              readOnly={!isEditing}
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
                className={`p-2 ${
                  isEditing ? "bg-gray-200" : ""
                } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                type="text"
                id="nama"
                onChange={handleroleChange}
                readOnly={!isEditing}
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
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Gender"
              onChange={handlegenderChange}
              readOnly={!isEditing}
              value={gender}
            />
          </div>
          {User.role === "student" && (
            <div className="flex flex-col mt-4">
              <label
                className="font-medium text-xs md:text-base text-textGray "
                htmlFor="">
                Class
              </label>
              <input
                placeholder=""
                className={`p-2 ${
                  isEditing ? "bg-gray-200" : ""
                } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                type="text"
                id="nama"
                onChange={handlekelasChange}
                readOnly={!isEditing}
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
              Last Name
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Nomor HP"
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
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Nomor HP"
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
                  isEditing ? "bg-gray-200" : ""
                } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                type="text"
                id="NIM"
                onChange={handlekodeDosenChange}
                readOnly={!isEditing}
                value={kodeDosen}
              />
            </div>
          )}
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              Faculty
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Fakultas"
              onChange={handlekodeFakultas}
              readOnly={!isEditing}
              value={kodeFakultas}
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
                className={`p-2 ${
                  isEditing ? "bg-gray-200" : ""
                } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
                type="text"
                id="Jurusan"
                onChange={handlekodeProdi}
                readOnly={!isEditing}
                value={kodeProdi}
              />
            </div>
          )}
        </div>
      </form>
      <div className="gap-3 mt-6 xs:mt-8 md:mt-10 xl:mt-12 flex ">
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
    </>
  );
};

export default Profile;
