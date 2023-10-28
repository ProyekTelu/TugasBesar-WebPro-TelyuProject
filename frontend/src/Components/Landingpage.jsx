import React from "react";
import logo from "../img/telyuProject.png";
import Gambar from "../img/Telkom_University_Logo.png"

const Landingpage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-center border-b-4 border-gray-400 w-full">
        <div className="flex justify-between w-3/4 py-10" id="navbar">
          <div className=" ">
            <img src={logo} alt="" className="w-40" />
          </div>
          <div className="flex gap-4 ">
            <div className="m-auto">
              <button className="px-10 lg:px-14 py-4 bg-red-600 rounded-full text-xl text-white">
                Login
              </button>
            </div>
            <div className="m-auto">
              <button className="px-10 lg:px-12 py-4 bg-red-600 rounded-full text-xl text-white">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex w-full h-full justify-center mt-72">
        <div className="flex justify-between w-3/4 ">
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-2xl">
            In der Germanistik/Linguistik wird der Begriff „Dialekt“ für
            traditionelle lokale Varianten verwendet. Für diejenigen, die nur
            Hochdeutsch gewohnt sind,önnen einige der Dialekte als eigenständige
            Sprachen betrachtet werden, da sie sie nicht mehr verstehen können.
            Lokale Variationen in der Sprache oder im Vokabular des Deutschen
            (Standard) werden als „Varianten“ oder „Variationen“ bezeichnet.
            Einige der oberdeutschen Dialekte selbst sind inzwischen
            ausgestorben.
            </p>
            <button className="bg-primary py-4 w-52 px-4 text-white font-semibold mt-14 whitespace-nowrap rounded-2xl text-2xl">Get Started</button>
          </div>
          <div className="w-1/5">
          <img src ={Gambar}></img>
        </div>
        </div>
      </div>
    </div>

    // <div className='w-screen h-screen'>
    //     <div className="w-40 h-40" id="navbar">
    //       <img src={logo} alt="" className="w-full h-full object-contain" />
    //     </div>
    //     <div className="flex justify-between items-center px-5 lg:px-[150px] h-[100px] w-full fixed top-0 border-b-4 border-gray-300 drop-shadow-lg mt-5">
    //     <div className="absolute top-5 right-48 mt-5 mr-20 flex space-x-4">
    //       <button className="px-10 lg:px-14 py-4 bg-red-600 rounded-full text-xl text-white">
    //         Login
    //       </button>
    //     </div>
    //     <div className="absolute top-5 right-16 mt-5 mr-100 flex space-x-4">
    //       <button className="px-10 lg:px-12 py-4 bg-red-600 rounded-full text-xl text-white">
    //         SignUp
    //       </button>
    //     </div>
    //   </div>

    //   <div className='flex'>
    //     <div className='flex-1 w-1/2'>
    //       test
    //     </div>
    //     <div className='flex-2 w-1/2'>
    //       test
    //     </div>
    //   </div>
    // </div>
  );
};

export default Landingpage;
