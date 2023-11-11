import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "../../../Style/homePage.css";

function HomeStudent() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col">
      <div
        className={` py-4 flex-none w-fit  bg-whiteAlternative rounded-2xl border-2 border-b-0 `}
      >
        <h1 className="text-[26px] md:text-5xl font-bold text-start px-4">
          New <span className="text-primary">Hot</span> Project
        </h1>
      </div>
      <div className=" h-full rounded-3xl flex flex-col">
        <Swiper
          modules={[Pagination]}
          className="w-full h-full"
          spaceBetween={22}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="w-full  border-2 hover:shadow-lg bg-whiteAlternative lg:flex-col pt-5 px-5 pb-10 rounded-lg justify-center  cursor-pointer transition h-[85%]">
            <h1 className="text-left text-primary text-xl font-bold">
              EcoScape
            </h1>
            <h1 className="border-b-2 border-gray-400 my-2"> </h1>
            <p className="line-clamp-4 overflow-y-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              provident totam, perferendis repellendus ullam animi dignissimos
              ipsam excepturi, accusantium alias beatae quam rem iure in,
              cupiditate maxime unde? Accusamus ut ducimus doloremque nemo
              consequuntur veniam minus autem cum nostrum nam rerum ipsa
              molestias illo dolorem, eum quos nisi atque beatae praesentium
              maiores vero natus. Culpa vero, eligendi sapiente eveniet
              cupiditate tenetur aliquid, accusamus consequuntur omnis, id
              perspiciatis unde. Nulla dolorum dolore in magnam quisquam
              cupiditate, error aspernatur neque explicabo labore at vel
              voluptates totam ducimus itaque eos quidem vitae tempore? Error
              sequi non vero dolorum nesciunt sint libero, harum reprehenderit.
            </p>
          </SwiperSlide>
          <SwiperSlide className="w-full  border-2 hover:shadow-lg bg-whiteAlternative lg:flex-col pt-5 px-5 pb-10 rounded-lg justify-center  cursor-pointer transition h-[85%]">
            <h1 className="text-left text-primary text-xl font-bold">
              EcoScape
            </h1>
            <h1 className="border-b-2 border-gray-400 my-2"> </h1>
            <p className="line-clamp-4 overflow-y-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              provident totam, perferendis repellendus ullam animi dignissimos
              ipsam excepturi, accusantium alias beatae quam rem iure in,
              cupiditate maxime unde? Accusamus ut ducimus doloremque nemo
              consequuntur veniam minus autem cum nostrum nam rerum ipsa
              molestias illo dolorem, eum quos nisi atque beatae praesentium
              maiores vero natus. Culpa vero, eligendi sapiente eveniet
              cupiditate tenetur aliquid, accusamus consequuntur omnis, id
              perspiciatis unde. Nulla dolorum dolore in magnam quisquam
              cupiditate, error aspernatur neque explicabo labore at vel
              voluptates totam ducimus itaque eos quidem vitae tempore? Error
              sequi non vero dolorum nesciunt sint libero, harum reprehenderit.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row h-full mt-8 gap-6 ">
        <div className="rounded-3xl w-full md:w-3/4 flex flex-col gap-4">
          <h1 className="text-[26px] md:text-5xl font-bold text-center">
            Active Project
          </h1>
          <Swiper
            modules={[Pagination]}
            className="w-full h-full"
            spaceBetween={22}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="w-full h-[85%] border-2 hover:shadow-lg bg-whiteAlternative lg:flex-col p-5 rounded-lg justify-center overflow-y-auto cursor-pointer transition active:scale-95">
              <h1 className="text-left text-primary text-xl font-bold">
                EcoScape
              </h1>
              <h1 className="border-b-2 border-gray-400 my-2"> </h1>
              <p className="line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                provident totam, perferendis repellendus ullam animi dignissimos
                ipsam excepturi, accusantium alias beatae quam rem iure in,
                cupiditate maxime unde? Accusamus ut ducimus doloremque nemo
                consequuntur veniam minus autem cum nostrum nam rerum ipsa
                molestias illo dolorem, eum quos nisi atque beatae praesentium
                maiores vero natus. Culpa vero, eligendi sapiente eveniet
                cupiditate tenetur aliquid, accusamus consequuntur omnis, id
                perspiciatis unde. Nulla dolorum dolore in magnam quisquam
                cupiditate, error aspernatur neque explicabo labore at vel
                voluptates totam ducimus itaque eos quidem vitae tempore? Error
                sequi non vero dolorum nesciunt sint libero, harum
                reprehenderit.
              </p>
            </SwiperSlide>
            <SwiperSlide className="w-full h-[85%] border-2 hover:shadow-lg bg-whiteAlternative lg:flex-col p-5 rounded-lg justify-center overflow-y-auto cursor-pointer transition active:scale-95">
              <h1 className="text-left text-primary text-xl font-bold">
                EcoScape
              </h1>
              <h1 className="border-b-2 border-gray-400 my-2"> </h1>
              <p className="line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                provident totam, perferendis repellendus ullam animi dignissimos
                ipsam excepturi, accusantium alias beatae quam rem iure in,
                cupiditate maxime unde? Accusamus ut ducimus doloremque nemo
                consequuntur veniam minus autem cum nostrum nam rerum ipsa
                molestias illo dolorem, eum quos nisi atque beatae praesentium
                maiores vero natus. Culpa vero, eligendi sapiente eveniet
                cupiditate tenetur aliquid, accusamus consequuntur omnis, id
                perspiciatis unde. Nulla dolorum dolore in magnam quisquam
                cupiditate, error aspernatur neque explicabo labore at vel
                voluptates totam ducimus itaque eos quidem vitae tempore? Error
                sequi non vero dolorum nesciunt sint libero, harum
                reprehenderit.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="flex md:flex-col hover:shadow-lg py-6 px-4 justify-center items-center w-full h-full rounded-3xl bg-whiteAlternative cursor-pointer transition active:scale-95 "
          style={{ userSelect: "none" }}
          onClick={() => {
            navigate("/telyuProject/listProject");
          }}
        >
          <div className="">
            <BsFillPlayFill className="w-20 h-20 md:w-40 md:h-40" />
          </div>
          <div className="text-xl sm:text-2xl md:text-4xl xl:text-6xl flex font-bold ">
            Find <br /> Your <br /> Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStudent;
