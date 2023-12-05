import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { MoonLoader } from "react-spinners";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { MdOutlineAddchart } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Select, Option } from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

function MyProjectDetail({ setMyProjectPage, selectedProject }) {
  const storedUser = localStorage.getItem("user");
  const [isModalInviteMemberOpen, setIsModalInviteMemberOpen] = useState(false);
  const [selectRoleActive, setSelectRoleActive] = useState(false);
  const [inviteSelectedRole, setInviteSelectedRole] = useState("Select Role");
  const dropdownRef = useRef(null);
  const inviteRoleLabelRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target !== inviteRoleLabelRef.current
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectRoleClick = (event) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInviteRoleClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="w-full flex justify-start flex-col">
        <div className="px-4 mb-2 flex">
          <div className="flex">
            <Tooltip content={"Back to My Project List"}>
              <div>
                <IoCaretBackCircleOutline
                  className="text-4xl text-blackAlternative cursor-pointer mr-2 my-auto"
                  onClick={() => setMyProjectPage(1)}
                />
              </div>
            </Tooltip>
            <h1 className="text-xl md:text-2xl text-primary font-bold text-start my-auto mr-1">
              {selectedProject.title}
            </h1>
            <Tooltip content={"Project Action"}>
              <Menu>
                <MenuHandler>
                  <Button
                    variant="text"
                    className="my-auto cursor-pointer hover:bg-grey rounded-lg duration-200 transform p-1 flex justify-center active:bg-gray-200 mr-1"
                  >
                    <IoIosArrowDown className="text-2xl text-blackAlternative " />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>
                    <div className="">Edit Project Details</div>
                  </MenuItem>
                  <MenuItem>
                    <div className="text-primary">
                      <label htmlFor="">Delete Project </label>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Tooltip>
          </div>

          <Tooltip content="Project Status">
            <div className="flex gap-2 ml-2 rounded-full border-2 px-3 mt-3 xs:mt-0">
              <p
                className={`py-2 rounded-lg bg-transparent w-full my-auto font-semibold  ${
                  selectedProject.projectStatus === "Open Request"
                    ? "text-yellow-600"
                    : selectedProject.projectStatus === "Active"
                    ? "text-green-500"
                    : selectedProject.projectStatus === "Finished"
                    ? "text-red-500"
                    : ""
                } `}
              >
                <FaDotCircle className="text-lg mx-auto shadow-md rounded-full" />
              </p>
              <label
                htmlFor=""
                className="whitespace-nowrap text-sm font-medium my-auto xs:block hidden"
              >
                {selectedProject.projectStatus}
              </label>
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="w-full mt-4 mx-auto flex justify-center ">
        <div className="flex flex-col w-full ">
          <div className="border-grey border rounded-xl py-4 flex justify-center w-full min-h-screen lg:min-h-0 md:h-[83vh] relative">
            <div className="w-full px-4 md:px-0 md:w-[50vw] py-2 md:py-10 gap-16 flex flex-col">
              <div>
                <h1 className="text-lg md:text-xl font-bold">
                  Project Description
                </h1>
                <p className="mt-4 w-full text-sm md:text-base h-auto">
                  {selectedProject.description}
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-4 justify-between">
                  <div className="flex flex-row gap-4">
                    <h1 className="text-lg md:text-xl font-bold my-auto">
                      Project Member
                    </h1>
                    <h1 className="text-lg md:text-xl font-semibold my-auto">
                      {"(" + selectedProject.projectMemberCount}/
                      {selectedProject.totalMember + ")"}
                    </h1>
                  </div>
                  {selectedProject.ProjectMembers.length !== 0 && (
                    <Tooltip content="Add member">
                      <div
                        onClick={() => setIsModalInviteMemberOpen(true)}
                        className="cursor-pointer py-3 duration-300 hover:bg-grey active:bg-greyAlternative px-3 hover:rounded-xl flex flex-row gap-3"
                      >
                        <IoMdPersonAdd className="my-auto text-xl cursor-pointer" />
                        <label
                          className="hidden xs:block cursor-pointer font-bold"
                          htmlFor=""
                        >
                          Invite a Student
                        </label>
                      </div>
                    </Tooltip>
                  )}
                </div>

                <div className="w-full mt-4 flex flex-col cursor-pointer group">
                  {selectedProject.ProjectMembers &&
                  selectedProject.ProjectMembers.length > 0 ? (
                    selectedProject.ProjectMembers.map((member, index) => (
                      <div
                        key={index}
                        className="flex flex-row gap-2 w-full justify-between bg-white py-4  cursor-pointer duration-300  active:bg-greyAlternative hover:bg-grey px-3
                        hover:rounded-xl"
                      >
                        <div className="flex flex-row gap-4 items-center">
                          <img
                            alt="profile"
                            src={URL.createObjectURL(
                              new Blob([
                                new Uint8Array(member.user.photoProfile.data),
                              ])
                            )}
                            className="h-10 aspect-square rounded-full bg-black"
                          ></img>
                          <div className="flex flex-col">
                            <label
                              className="font-semibold text-lg cursor-pointer"
                              htmlFor=""
                            >
                              {member.user.firstName +
                                " " +
                                member.user.lastName}
                            </label>
                            <label className="cursor-pointer" htmlFor="">
                              {member.Role.name}
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                          <Menu>
                            <MenuHandler>
                              <Button variant="text">
                                <BsThreeDots />
                              </Button>
                            </MenuHandler>
                            <MenuList>
                              <MenuItem>Member Details</MenuItem>
                              <MenuItem>
                                <div className="text-primary">
                                  <label htmlFor="">Kick Member</label>
                                </div>
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-row gap-5  justify-center py-4 cursor-pointer duration-300 hover:bg-grey active:bg-greyAlternative px-3 w-full hover:rounded-xl">
                      <div className="text-4xl">
                        <IoMdPersonAdd />
                      </div>
                      <div className="my-auto ">
                        <label className="cursor-pointer" htmlFor="">
                          You dont have project member
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="w-sreen h-screen flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
        isOpen={isModalInviteMemberOpen}
        onRequestClose={() => setIsModalInviteMemberOpen(false)}
      >
        <div className="w-screen xs:max-w-[80vw] md:w-[60vw] xl:w-[35vw] h-screen xs:h-auto xs:max-h-[80vh] overflow-y-auto md:overflow-hidden bg-whiteAlternative rounded-xl px-6 py-6 border-2">
          <div className="flex justify-between  gap-4">
            <h1 className="my-auto text-lg md:text-xl font-medium">
              Add Student to {selectedProject.title}
            </h1>
            <Button
              variant="text"
              onClick={() => setIsModalInviteMemberOpen(false)}
            >
              <IoMdClose className="text-lg" />
            </Button>
          </div>
          <hr className="mt-2" />
          <div className="md:max-h-[50vh] overflow-y-scroll overflow-x-hidden px-4 mt-2">
            <div className="py-6 font-medium flex flex-col gap-4 w-full ">
              <label htmlFor="">Invite Student</label>
              <div className="relative w-full border rounded-2xl p-2 border-blackAlternative ">
                <input
                  type="text"
                  className="p-1 w-full md:w-3/5  border-none outline-none overflow-x-scroll"
                  placeholder="Add students by name or email..."
                />
                <div className="md:absolute mt-6 md:mt-0 right-5 top-1/2 -translate-y-1/2 ">
                  <div
                    className="hover:bg-grey px-2 py-1 rounded-lg transition duration-300 group flex gap-2 active:bg-greyAlternative"
                    onClick={handleSelectRoleClick}
                  >
                    <label
                      htmlFor=""
                      className=" text-black group-hover:text-blackAlternative cursor-pointer"
                      ref={inviteRoleLabelRef} // Ref for inviteSelectedRole label
                      onClick={handleInviteRoleClick} // Close dropdown on invite label click
                    >
                      {inviteSelectedRole}
                    </label>
                    <IoIosArrowDown className="my-auto cursor-pointer" />
                  </div>
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute right-[-10px] top-14"
                    ref={dropdownRef}
                  >
                    <div className="h-auto bg-white px-4 py-2 rounded-xl border-2">
                      {selectedProject.ProjectRoles.map((role, index) => (
                        <div
                          className="py-2 cursor-pointer hover:bg-grey rounded-lg transition duration-300 px-2 active:bg-greyAlternative"
                          key={index}
                          onClick={() => {
                            handleInviteRoleClick(false);
                            setInviteSelectedRole(role.Role.name);
                          }}
                        >
                          {role.Role.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <label htmlFor="" className="mt-3 text-sm text-black font-medium">
                Message
              </label>

              <textarea
                name=""
                className="p-2 rounded-2xl border border-blackAlternative"
                id=""
                rows="5"
                placeholder="Add a message"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-2">
            <Button onClick={() => setIsModalInviteMemberOpen(false)}>
              Cancel
            </Button>
            <Button disabled="true">Send</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MyProjectDetail;
