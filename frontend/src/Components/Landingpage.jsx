import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/telyuProject.png";
import Gambar from "../img/projectx.png";

const Landingpage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-center border-b-4 border-gray-400 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-3/4 py-4 md:py-10" id="navbar">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="" className="w-40" />
          </div>
          <div className="flex gap-4">
            <div className="m-auto">
              <Link to="/Login">
                <button className="px-10 lg:px-14 py-4 bg-red-600 rounded-full text-lg md:text-xl text-white">
                  Login
                </button>
              </Link>
            </div>
            <div className="m-auto">
              <Link to="/Signup">
                <button className="px-10 lg:px-12 py-4 bg-red-600 rounded-full text-lg md:text-xl text-white">
                  SignUp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex w-full h-full justify-center mt-6 md:mt-20">
        <div className="flex flex-col md:flex-row justify-between w-full lg:w-3/4">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              Selamat datang di dalam petualangan proyek ini! Kami dengan senang hati menyambut Anda dalam tim proyek kami.
              Bersiaplah untuk berkolaborasi, bekerja keras, dan bersama-sama mencapai hasil yang luar biasa. Dalam proyek ini,
              Anda adalah bagian penting dari puzzle keberhasilan kami, dan kami yakin bahwa kolaborasi kita akan menciptakan
              prestasi yang gemilang. Bersama, kita akan menjadikan visi kami menjadi kenyataan dan menciptakan dampak yang luar biasa. Terima kasih atas keikutsertaan Anda, dan mari bersama-sama membangun masa depan yang cerah melalui proyek ini.
            </p>
            <Link to="/Login">
              <button className="bg-primary py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 text-white font-semibold mt-4 md:mt-8 md:mt-14 whitespace-nowrap rounded-full text-lg md:text-xl lg:text-2xl">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img src={Gambar} alt="Gambar" className="w-full w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
