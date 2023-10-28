import React, { useState } from "react";
import user from "../../img/user.png";
import EditProfile from "../../img/editing.png";

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
    <>
      <div className="relative h-60 rounded-b-3xl flex justify-center bg-red-600">
        <div className="absolute -bottom-20">
          <img
            src={userImage}
            className={`${
              isEditing ? "bg-gray-200 cursor-pointer" : "pointer-events-none"
            } object-cover border-4 border-white w-40 h-40 md:w-52 md:h-52 xl:w-72 xl:h-72 rounded-full`}
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
      <div className="text-center pt-10 xs:pt-12 md:pt-16 xl:pt-20 text-3xl xs:text-4xl xl:text-5xl font-bold text-black">
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
              Nama
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
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
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
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
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Gender"
              readOnly={!isEditing}
            />
          </div>
        </div>
        <div className="w-full xs:w-1/2">
          <div className="flex flex-col mt-4">
            <label
              className="font-medium text-xs md:text-base text-textGray "
              htmlFor="">
              Nomor HP
            </label>
            <input
              placeholder=""
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
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
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
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
              className={`p-2 ${
                isEditing ? "bg-gray-200" : ""
              } text-xs md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg`}
              type="text"
              id="Jurusan"
              readOnly={!isEditing}
            />
          </div>
        </div>
      </form>
      <div className="mt-6 xs:mt-8 md:mt-10 xl:mt-12 flex w-full xs:w-1/2">
        {isEditing && (
          <button
            className="
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
          className="items-center justify-center rounded-md border border-transparent bg-red-300 px-8 py-2 mb-9 text-base font-medium text-white hover:bg-red-500"
          onClick={handleDoneEditing}>
          Back
        </button>
      </div>
    </>
  );
};

export default Profile;
