import React from "react";
import Ray from "../img/Raychan.jpg";

const Profile = () => {
  const User = localStorage.getItem("User");
  return (
    <div className="px-44">
      <div className="relative h-60 rounded-b flex justify-center bg-red-600">
        <div className="absolute -bottom-10">
          <img
            src={Ray}
            className="object-cover border-4 border-white w-40 h-40 rounded-full"
            alt="cover"
          />
        </div>
      </div>
      <div className="text-center mt-16 text-3xl font-bold text-black">
        Profile
      </div>
      <div className="border border-gray-500 mt-5 mb-2 border-opacity-1"></div>

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
              className="p-1 sm:p-2 text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              type="text"
              value={"Fasya Raihan Maulana"}
              id="nama"
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
              className="p-1 sm:p-2 text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              type="text"
              value={"1302210016"}
              id="NIM"
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
              className="p-1 sm:p-2 text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              type="text"
              value={"Laki-Laki"}
              id="Gender"
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
              className="p-1 sm:p-2 text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              type="text"
              value={"081190843272"}
              id="Nomor HP"
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
              className="p-1 sm:p-2 text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              type="text"
              value={"Fakultas Informatika"}
              id="Fakultas"
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
              className="p-1 sm:p-2 text-xs h-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
              type="text"
              value={"S1 Rekayasa Perangkat Lunak"}
              id="Jurusan"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
