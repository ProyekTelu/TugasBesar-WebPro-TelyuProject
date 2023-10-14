import React, { useState } from "react";
import TelkomLogo from "../../img/Telkom_University_Logo.png";
import ImgCarousel1 from "../../img/loginImgWallpaper.png";

const LoginPage = ({ setShowLoginPage }) => {
  return (
    <div className="flex">
      <div className="w-full lg:w-1/2 bg-white h-full flex">
        <div className="m-auto p-10 w-2/3 flex flex-col">
          <img className="w-[40%] md:w-[25%] m-auto" src={TelkomLogo} alt="" />
          <h1 className="text-center text-lg md:text-4xl my-2 md:my-8">
            Login
          </h1>
          <form className="flex flex-col gap-4 md:gap-8" action="">
            <div className="flex flex-col">
              <label className="text-xs md:text-xl mb-1 md:mb-2" htmlFor="">
                Email SSO
              </label>
              <input
                placeholder=""
                className="border-none p-1 md:p-2 bg-gray-200 focus:outline-none border-b-black"
                type="email"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-xs md:text-xl mb-1 md:mb-2" htmlFor="">
                Password
              </label>
              <input
                placeholder=""
                className="border-none p-1 md:p-2 bg-gray-200 focus:outline-none border-b-black"
                type="password"
              />
            </div>
            {/* <div className="flex gap-2 mt-4 ml-1">
              <input
                id="remember"
                name="remember"
                className="cursor-pointer"
                type="checkbox"
              />
              <label name="remember" htmlFor="remember">
                Remember me!
              </label>
            </div> */}
            <div className="w-full flex justify-end ">
              <button className="bg-primary hover:bg-brightPrimary text-secondary w-full py-1 md:py-2 text-xs md:text-lg px-2 md:px-5 rounded-full">
                Login
              </button>
            </div>
            <label
              className="m-auto text-[11px] text-center md:text-xl"
              htmlFor=""
            >
              Baru disini?{" "}
              <span
                onClick={() => setShowLoginPage(false)}
                className="text-primary font-bold cursor-pointer"
              >
                Baca Syahadat
              </span>
            </label>
          </form>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block">
        <img src={ImgCarousel1} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
