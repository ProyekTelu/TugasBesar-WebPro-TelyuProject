import React from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateProject = () => {
    return (
        <div className="flex justify-center w-screen">
        <div className="columns mt-10 w-2/3 flex justify-center flex-col">
            <h1 className="text-center mt-4 text-xl xs:text-lg sm:text-2xl md:text-4xl md:my-4 font-bold">
            Create Project
            </h1>
            <form action="">
            <div className="flex gap-5 flex-row pt-6 w-full justify-center">
                <div className="w-full">
                <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Project Title
                </label>
                <div className="">
                    <input
                    type="text"
                    className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    placeholder="Project Name"
                    />
                </div>
                </div>

                <div className="w-full">
                <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Group Chat Link
                </label>
                <div className="">
                    <input
                    type="text"
                    className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    placeholder="http://www.example.com"
                    />
                </div>
                </div>
            </div>

            <div className="flex gap-5 flex-row pt-6 w-full justify-center">
                <div className="w-full">
                <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Description
                </label>
                <div className="lb">
                    <textarea
                    rows="4"
                    name="comment"
                    id="comment"
                    placeholder="Write your project description here"
                    class="p-1 sm:p-2 text-xs h-full w-full  md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    ></textarea>
                </div>
                </div>

                <div className="w-full">
                <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block ">
                    Maximum Member
                </label>
                <div className="control">
                    <input
                    type="number"
                    className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    placeholder="0"
                    />
                </div>
                </div>
            </div>

            <div className="flex gap-5 flex-row pt-6 w-full justify-center">
                <div className="w-1/2">
                <label
                    className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block"
                    htmlFor=""
                >
                    Faculty
                </label>
                <select
                    className="p-1 sm:p-2 text-xs w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg"
                    name=""
                    id=""
                >
                    <option>S1 Rekayasa Perangkat Lunak</option>
                    <option>S1 Informatika</option>
                    <option>S1 Data Science</option>
                </select>
                </div>
                    
                <div className="flex flex-row justify-between w-1/2">
                    <div className="">
                        <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                            Project Start
                        </label>
                        <div className="">
                            <DatePicker className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg" placeholderText="Set Date"/>
                        </div>
                    </div>

                    <div className="">
                        <label className="font-medium text-xs text-textGray md:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block">
                            Project End
                        </label>
                        <div className="">
                            <DatePicker className="p-1 sm:p-2 text-xs h-full w-full md:text-base focus:outline-black border-textGray border-[0.5px] md:border-[1px] border-solid rounded-md md:rounded-lg" placeholderText="Set Date"/>
                        </div>
                    </div>
                </div>
                
            </div>
            
                
            <div className="w-full flex justify-center mt-10 pt-0 xs:pt-2">
                    <button
                    type="submit"
                    className="text-secondary bg-primary w-1/4 py-1 cursor-pointer block sm:py-3 md:text-lg text-xs px-2 md:px-5 rounded-md md:rounded-lg"
                    >
                    Create
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default CreateProject;
