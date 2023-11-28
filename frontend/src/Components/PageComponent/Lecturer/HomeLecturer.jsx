import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

function HomeLecturer() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-primary bg-opacity-90 h-auto px-5 py-2 md:px-20 md:py-10 rounded-3xl flex flex-col">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={22}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="h-full w-full text-[26px] md:text-[68px] font-extrabold pb-5 xs:pb-10 text-whiteAlternative sm:pb-20"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide className="cursor-pointer    mt-1">
            Progress begins with knowledge, and knowledge begins here.
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer   mt-1">
            Beras habis? Live solusinya swipe up swipe up give coin
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer  mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer  mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col md:flex-row h-full mt-8 gap-6 ">
        <div className="md:px-12 py-6 rounded-3xl w-full md:w-3/4 h-full ">
          <h1 className="text-[26px] md:text-5xl font-bold text-center">
            Active Project
          </h1>
          <Swiper
            modules={[Pagination]}
            className="h-[80%] mt-8 pb-2"
            spaceBetween={22}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="w-full inline-block h-[85%] relative border-2 hover:shadow-lg  hover:bg-whiteAlternative lg:flex-col p-5 rounded-lg justify-center overflow-y-auto cursor-pointer transition active:scale-95">
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
            <SwiperSlide className="w-full inline-block h-[85%] relative border-2 hover:shadow-lg hover:bg-whiteAlternative lg:flex-col p-5 rounded-lg justify-center overflow-y-auto cursor-pointer transition active:scale-95">
              <h1 className="text-left text-primary text-xl font-bold">
                Penanaman pohon pada daerah karanganyar
              </h1>
              <h1 className="border-b-2 border-gray-400 my-2"> </h1>
              <p className="line-clamp-3 ">
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
            <SwiperSlide className="w-full inline-block h-[85%] relative border-2 hover:shadow-lg hover:bg-whiteAlternative lg:flex-col p-5 rounded-lg justify-center overflow-y-auto cursor-pointer transition active:scale-95">
              <h1 className="text-left text-primary text-xl font-bold">
                Beras habis live solusinya
              </h1>
              <h1 className="border-b-2 border-gray-400 my-2"> </h1>
              <p className="line-clamp-3 ">
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
          className="flex md:flex-col py-6 px-4 justify-center items-center w-full rounded-3xl bg-whiteAlternative cursor-pointer transition active:scale-95 "
          style={{ userSelect: "none" }}
          onClick={() => {
            navigate("/telyuProject/listProject");
          }}
        >
          <div className="">
            <BsFillPlayFill className="w-20 h-20 md:w-40 md:h-40" />
          </div>
          <div className="text-xl sm:text-2xl md:text-4xl xl:text-6xl flex font-bold ">
            Create <br /> Your <br /> Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLecturer;
