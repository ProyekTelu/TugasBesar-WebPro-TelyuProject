import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "../../../Style/homePage.css";

function HomeStudent() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([
    "C++",
    "JavaScript",
    "Teamworks",
    "Machine Learning",
    "Python",
    "Data Analysis",
    "React.js",
    "Artificial Intelligence",
    "Problem Solving",
    "Communication Skills",
    "Node.js",
    "Java",
    "HTML/CSS",
    "Deep Learning",
    "Cloud Computing",
    "Time Management",
    "UX/UI Design",
    "Version Control (Git)",
    "Agile Methodologies",
    "Critical Thinking",
    "Deep Learning",
    "Cloud Computing",
    "Time Management",
    "UX/UI Design",
    "Version Control (Git)",
    "Agile Methodologies",
    "Critical Thinking",
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
          New <span className="text-primary">Hot</span> Project
        </h1>
      </div>
      <div className="max-h-full flex flex-col shadow-md">
        <Swiper
          modules={[Pagination]}
          className="w-full h-full z-0"
          spaceBetween={22}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="w-full z-10 h-full shadow-lg bg-whiteAlternative lg:flex-col p-6 rounded-lg justify-center  cursor-pointer transition ">
            <div className="flex w-full justify-between gap-2 ">
              <div className="">
                <h1 className="text-left text-primary text-3xl font-bold">
                  EcoScape
                </h1>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-2 md:py-3 md:px-4 rounded-md font-semibold text-xs text-white bg-primary rouned-md duration-75 ease-out hover:shadow-md  hover:bg-primaryAlternative hover:scale-105 active:scale-100"
                  type="submit"
                >
                  Delete
                </button>
                <button
                  className="px-2 md:py-3 md:px-4 rounded-md font-semibold text-xs text-white bg-blue-500 rouned-md duration-75 ease-out hover:shadow-md  hover:bg-blue-400 hover:scale-105 active:scale-100"
                  type="submit"
                >
                  Edit
                </button>
              </div>
            </div>

            <h1 className="text-left text-lg mt-2 font-medium text-black">
              Muhammad Zaky Fathurahim
            </h1>
            <hr className="my-2 rounded-full" />
            <p className="line-clamp-3 overflow-y-auto min-h-[4rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              provident totam, perferendis repellendus ullam animi dignissimos
              ipsam excepturi, accusantium alias beatae quam rem iure in,
              cupiditate maxime unde? Accusamus ut ducimus doloremque nemo
              consequuntur veniam minus autem cum nostrum nam rerum ipsa
              molestias illo dolorem, eum quos nisi atque beatae praesentium
              maiores vero natus. Culpa vero, eligendi sapiente eveniet.
            </p>
            <div className="py-3 rounded-2xl mt-2 ">
              <div className="flex flex-wrap gap-2 max-h-20  overflow-y-auto">
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
            <div className="flex justify-end ">
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
              <hr className="my-4 rounded-full" />
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
