import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Scrollbar } from "swiper/modules";
import { Dropdown } from "primereact/dropdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";
import "../../../Style/homePage.css";
import "swiper/css";
import "swiper/css/scrollbar";

function HomeStudent() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Active");
  const listStatus = ["Active", "Finished"];
  const [tags, setTags] = useState([
    "C++",
    "JavaScript",
    "Teamworks",
    "Machine Learning",
    "Python",
  ]);

  const [prodi, setProdi] = useState([
    "S1 - Teknik Mesin",
    "S1 - Teknik Elektro",
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className={` py-4 flex-none w-fit  rounded-2xl `}>
        <h1 className="text-[26px] md:text-5xl font-bold text-start px-4">
          Newest Projects!
        </h1>
      </div>
      <div className="max-h-full flex flex-col">
        <Swiper
          modules={[]}
          className="w-full h-full z-0 "
          spaceBetween={22}
          navigation
          slidesPerView={2}
        >
          <SwiperSlide className="w-full z-10 h-full  bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-center  cursor-pointer transition ">
            <div className="flex flex-col md:flex-row w-full justify-between">
              <div className="">
                <h1 className="text-left text-primary text-3xl font-bold">
                  EcoScape
                </h1>
              </div>
              <div className="flex my-auto gap-2">
                <GoPersonFill className="text-3xl" />
                <p className="text-2xl font-bold">1/4</p>
              </div>
            </div>

            <h1 className="text-left text-lg mt-2 font-medium text-black">
              By Muhammad Zaky Fathurahim
            </h1>
            <hr className="my-2 rounded-full" />
            <p className="line-clamp-3 overflow-y-auto min-h-[4rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              provident totam, perferendis repellendus ullam animi dignissimos
              ipsam excepturi, accusantium alias beatae quam rem iure in,
              cupiditate maxime unde? Accusamus ut ducimus doloremque nemo
              consequuntur veniam minus autem cum nostrum nam rerum ipsa
              molestias illo dolorem, eum quos nisi atque beatae praesentium
              maiores vero natus. Culpa vero, eligendi sapiente eveniet. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Neque provident
              totam, perferendis repellendus ullam animi dignissimos ipsam
              excepturi, accusantium alias beatae quam rem iure in, cupiditate
              maxime unde? Accusamus ut ducimus doloremque nemo consequuntur
              veniam minus autem cum nostrum nam rerum ipsa molestias illo
              dolorem, eum quos nisi atque beatae praesentium maiores vero
              natus. Culpa vero, eligendi sapiente eveniet.
            </p>
            <div className="py-3 rounded-2xl flex flex-row gap-4 mt-2">
              <div className="flex flex-wrap gap-2 max-h-10  overflow-y-auto">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-primary px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                  >
                    <span>{tag}</span>
                    {/* <button
                      onClick={() => removeTag(index)}
                      className="ml-2 focus:outline-none"
                    >
                      &#10005;
                    </button> */}
                  </div>
                ))}
                {/* <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  className="p-2 border-none outline-none"
                /> */}
              </div>
            </div>
            <div className="rounded-2xl flex flex-row gap-4 ">
              <div className="flex flex-wrap gap-2 max-h-10  overflow-y-auto">
                {prodi.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-blue-400 px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                  >
                    <span>{tag}</span>
                    {/* <button
                      onClick={() => removeTag(index)}
                      className="ml-2 focus:outline-none"
                    >
                      &#10005;
                    </button> */}
                  </div>
                ))}
                {/* <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  className="p-2 border-none outline-none"
                /> */}
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                type="submit"
              >
                Send Join Request
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full z-10 h-full  bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-center  cursor-pointer transition ">
            <div className="flex flex-col md:flex-row w-full justify-between">
              <div className="">
                <h1 className="text-left text-primary text-3xl font-bold">
                  EcoScape
                </h1>
              </div>
              <div className="flex my-auto gap-2">
                <GoPersonFill className="text-3xl" />
                <p className="text-2xl font-bold">1/4</p>
              </div>
            </div>

            <h1 className="text-left text-lg mt-2 font-medium text-black">
              By Muhammad Zaky Fathurahim
            </h1>
            <hr className="my-2 rounded-full" />
            <p className="line-clamp-3 overflow-y-auto min-h-[4rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              provident totam, perferendis repellendus ullam animi dignissimos
              ipsam excepturi, accusantium alias beatae quam rem iure in,
              cupiditate maxime unde? Accusamus ut ducimus doloremque nemo
              consequuntur veniam minus autem cum nostrum nam rerum ipsa
              molestias illo dolorem, eum quos nisi atque beatae praesentium
              maiores vero natus. Culpa vero, eligendi sapiente eveniet. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Neque provident
              totam, perferendis repellendus ullam animi dignissimos ipsam
              excepturi, accusantium alias beatae quam rem iure in, cupiditate
              maxime unde? Accusamus ut ducimus doloremque nemo consequuntur
              veniam minus autem cum nostrum nam rerum ipsa molestias illo
              dolorem, eum quos nisi atque beatae praesentium maiores vero
              natus. Culpa vero, eligendi sapiente eveniet.
            </p>
            <div className="py-3 rounded-2xl flex flex-row gap-4 mt-2">
              <div className="flex flex-wrap gap-2 max-h-10  overflow-y-auto">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-primary px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                  >
                    <span>{tag}</span>
                    {/* <button
                      onClick={() => removeTag(index)}
                      className="ml-2 focus:outline-none"
                    >
                      &#10005;
                    </button> */}
                  </div>
                ))}
                {/* <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  className="p-2 border-none outline-none"
                /> */}
              </div>
            </div>
            <div className="rounded-2xl flex flex-row gap-4 ">
              <div className="flex flex-wrap gap-2 max-h-10  overflow-y-auto">
                {prodi.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-blue-400 px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                  >
                    <span>{tag}</span>
                    {/* <button
                      onClick={() => removeTag(index)}
                      className="ml-2 focus:outline-none"
                    >
                      &#10005;
                    </button> */}
                  </div>
                ))}
                {/* <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  className="p-2 border-none outline-none"
                /> */}
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                type="submit"
              >
                Send Join Request
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full z-10 h-full  bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-center  cursor-pointer transition ">
            <div className="flex flex-col md:flex-row w-full justify-between">
              <div className="">
                <h1 className="text-left text-primary text-3xl font-bold">
                  EcoScape
                </h1>
              </div>
              <div className="flex my-auto gap-2">
                <GoPersonFill className="text-3xl" />
                <p className="text-2xl font-bold">1/4</p>
              </div>
            </div>

            <h1 className="text-left text-lg mt-2 font-medium text-black">
              By Muhammad Zaky Fathurahim
            </h1>
            <hr className="my-2 rounded-full" />
            <p className="line-clamp-3 overflow-y-auto min-h-[4rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              provident totam, perferendis repellendus ullam animi dignissimos
              ipsam excepturi, accusantium alias beatae quam rem iure in,
              cupiditate maxime unde? Accusamus ut ducimus doloremque nemo
              consequuntur veniam minus autem cum nostrum nam rerum ipsa
              molestias illo dolorem, eum quos nisi atque beatae praesentium
              maiores vero natus. Culpa vero, eligendi sapiente eveniet. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Neque provident
              totam, perferendis repellendus ullam animi dignissimos ipsam
              excepturi, accusantium alias beatae quam rem iure in, cupiditate
              maxime unde? Accusamus ut ducimus doloremque nemo consequuntur
              veniam minus autem cum nostrum nam rerum ipsa molestias illo
              dolorem, eum quos nisi atque beatae praesentium maiores vero
              natus. Culpa vero, eligendi sapiente eveniet.
            </p>
            <div className="py-3 rounded-2xl flex flex-row gap-4 mt-2">
              <div className="flex flex-wrap gap-2 max-h-10  overflow-y-auto">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-primary px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                  >
                    <span>{tag}</span>
                    {/* <button
                      onClick={() => removeTag(index)}
                      className="ml-2 focus:outline-none"
                    >
                      &#10005;
                    </button> */}
                  </div>
                ))}
                {/* <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  className="p-2 border-none outline-none"
                /> */}
              </div>
            </div>
            <div className="rounded-2xl flex flex-row gap-4 ">
              <div className="flex flex-wrap gap-2 max-h-10  overflow-y-auto">
                {prodi.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-blue-400 px-2 py-1 text-whiteAlternative font-medium rounded-lg flex items-center justify-between mr-2"
                  >
                    <span>{tag}</span>
                    {/* <button
                      onClick={() => removeTag(index)}
                      className="ml-2 focus:outline-none"
                    >
                      &#10005;
                    </button> */}
                  </div>
                ))}
                {/* <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  className="p-2 border-none outline-none"
                /> */}
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                type="submit"
              >
                Send Join Request
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row h-full mt-6 gap-6">
        <div className="rounded-3xl w-full md:w-3/4 flex flex-col gap-4 h-full">
          <div className="flex justify-between">
            <h1 className="text-[26px] md:text-5xl font-bold text-center my-4 px-4">
              Your Projects
            </h1>
          </div>

          <Swiper
            modules={[]}
            className="w-full z-0"
            spaceBetween={22}
            slidesPerView={1}
          >
            <SwiperSlide className="w-full z-10  bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-between  cursor-pointer transition ">
              <div className="flex flex-col">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col md:flex-row gap-2">
                    <h1 className="text-left text-primary text-3xl font-bold line-clamp-1">
                      Zamrud pohon cemara amigos{" "}
                    </h1>
                    <h1 className="text-left text-blackAlternative text-3xl font-bold line-clamp-1">
                      (Front-End Developer)
                    </h1>
                  </div>

                  <h1 className="px-4 py-2 rounded-md bg-green-500 text-white my-auto">
                    Active
                  </h1>
                </div>
                <h1 className="text-left text-lg mt-2 font-medium text-black">
                  By Muhammad Zaky Fathurahim
                </h1>
                <hr className="my-2 rounded-full" />
                <p className="line-clamp-2 overflow-y-auto min-h-[2rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolore deserunt dignissimos, facilis inventore
                  distinctio quae natus blanditiis iusto repudiandae! Ut facere
                  iure nisi enim mollitia accusantium sapiente, quo, unde
                  reiciendis incidunt, velit aspernatur et adipisci debitis
                  minima quia ipsum porro rerum vel! Ratione, qui dolorum vero
                  omnis ipsa vitae!
                </p>
              </div>
              <div className="flex justify-between flex-col lg:flex-row mt-4">
                <div className="flex flex-col">
                  <p className="font-bold">Deadline</p>
                  <p>02-September-2023</p>
                </div>

                <div className="flex flex-row gap-3 self-end">
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Go to Group Chat
                  </button>
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Open Project
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full z-10  bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-between  cursor-pointer transition ">
              <div className="flex flex-col">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col md:flex-row gap-2">
                    <h1 className="text-left text-primary text-3xl font-bold line-clamp-1">
                      Samsudin Samluy Kantin Telyu{" "}
                    </h1>
                    <h1 className="text-left text-blackAlternative text-3xl font-bold line-clamp-1">
                      (Backend Developer)
                    </h1>
                  </div>

                  <h1 className="px-4 py-2 rounded-md bg-green-500 text-white my-auto">
                    Active
                  </h1>
                </div>
                <h1 className="text-left text-lg mt-2 font-medium text-black">
                  By Deddy Corbuzier
                </h1>
                <hr className="my-2 rounded-full" />
                <p className="line-clamp-2 overflow-y-auto min-h-[2rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolore deserunt dignissimos, facilis inventore
                  distinctio quae natus blanditiis iusto repudiandae! Ut facere
                  iure nisi enim mollitia accusantium sapiente, quo, unde
                  reiciendis incidunt, velit aspernatur et adipisci debitis
                  minima quia ipsum porro rerum vel! Ratione, qui dolorum vero
                  omnis ipsa vitae!
                </p>
              </div>
              <div className="flex justify-between flex-col lg:flex-row mt-4">
                <div className="flex flex-col">
                  <p className="font-bold">Deadline</p>
                  <p>02-September-2023</p>
                </div>

                <div className="flex flex-row gap-3 self-end">
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Go to Group Chat
                  </button>
                  <button
                    className="py-3 px-4 rounded-md font-semibold text-xs text-white bg-secondary rouned-md mt-2 duration-75 ease-out hover:shadow-md hover:shadow-secondaryAlternative hover:bg-secondaryAlternative hover:scale-105 active:scale-100"
                    type="submit"
                  >
                    Open Project
                  </button>
                </div>
              </div>
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
          <div className="text-xl sm:text-2xl md:text-4xl xl:text-5xl flex font-bold ">
            Find <br /> Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStudent;
