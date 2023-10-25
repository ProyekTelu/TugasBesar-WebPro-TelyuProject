import React, { useState } from "react";
import user from "../img/user.png";
import EditProfile from "../img/editing.png";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userImage, setUserImage] = useState(user);
  //const User = localStorage.getItem("User");

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
    <div className="px-20">
      <div className="relative h-60 rounded-b-3xl flex justify-center bg-red-600">
        <div className="absolute -bottom-20">
          <img
            src={userImage}
            className="object-cover border-4 border-white w-40 h-40 rounded-full"
            alt="cover"
          />
        </div>
      </div>
      <div className="text-center pt-20 text-3xl font-bold text-black">
        <div className="flex items-center justify-between">
          Profile
          <label htmlFor="file" className="cursor-pointer">
            <img
              src={EditProfile}
              className="w-5 h-auto cursor-pointer"
              alt="edit"
              onClick={handleEditProfile}
            />
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="border border-gray-500 mt-3 mb-2 border-opacity-1"></div>

      {/* Label Biodata */}
      <form className="flex flex-col sm:flex-row gap-3 sm:gap-4" action="">
        <div className="w-1/2">
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              Nama
            </label>
            <input
              placeholder=""
              className={`p-1 sm:p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="nama"
              readOnly={!isEditing}
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
              className={`p-1 sm:p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="NIM"
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              Jenis Kelamin
            </label>
            <input
              placeholder=""
              className={`p-1 sm:p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Gender"
              readOnly={!isEditing}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              Nomor HP
            </label>
            <input
              placeholder=""
              className={`p-1 sm:p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Nomor HP"
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              Fakultas
            </label>
            <input
              placeholder=""
              className={`p-1 sm:p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Fakultas"
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              Jurusan
            </label>
            <input
              placeholder=""
              className={`p-1 sm:p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Jurusan"
              readOnly={!isEditing}
            />
          </div>
        </div>
      </form>
      <div className="mt-4 flex w-1/2">
        {isEditing && (
          <button
            className="
            mr-3
            items-center 
            justify-center 
            rounded-md 
            border border-transparent 
            bg-green-300
            px-8 py-3 
            text-base 
            font-medium text-white
            hover:bg-green-500 "
            onClick={handleDoneEditing}>
            Done
          </button>
        )}
        <button
          className="
          items-center 
          justify-center 
          rounded-md 
          border border-transparent 
          bg-red-300
          px-8 py-3 
          text-base 
          font-medium text-white
          hover:bg-red-500"
          onClick={handleDoneEditing}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Profile;
