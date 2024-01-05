import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { MoonLoader } from "react-spinners";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { Select, Option } from "@material-tailwind/react";
import {
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { FaDotCircle } from "react-icons/fa";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function MyProjectDetail() {
  let { projectId } = useParams();
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

  const [isModalInviteMemberOpen, setIsModalInviteMemberOpen] = useState(false);
  const [selectRoleActive, setSelectRoleActive] = useState(false);
  const [inviteSelectedRole, setInviteSelectedRole] = useState("Select Role");
  const dropdownRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const inviteRoleLabelRef = useRef(null);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalEditProjectOpen, setIsModalEditProjectOpen] = useState(false);
  const [isProjectFull, setisProjectFull] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [triggerEffect, setTriggerEffect] = useState();

  //edit project var

  const listStatus = ["Active", "Waiting to Start", "Finished", "Open Request"];

  console.log(selectedProject);

  const [editTitle, setEditTitle] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [editStartDate, setEditStartDate] = useState(new Date());
  const [editEndDate, setEditEndDate] = useState(new Date());
  const [editDesc, setEditDesc] = useState("");
  const [editLink, setEditLink] = useState("");
  const [editOpenUntilDate, setOpenUntilDate] = useState(new Date());

  const [isModalDateOpen, setIsModalDateOpen] = useState(false);

  const [isDateCalenderOpen, setIsDateCalenderOpen] = useState(false);

  const handleEditProject = () => {
    setEditTitle(selectedProject.title);
    setEditStartDate(selectedProject.startProject);
    setEditEndDate(selectedProject.endProject);
    setEditDesc(selectedProject.description);
    setEditStatus(selectedProject.projectStatus);
    setEditLink(selectedProject.groupLink);
    setOpenUntilDate(selectedProject.openUntil);
  };

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

  const [selectedUser, setSelectedUser] = useState(null);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSelectedUser(null);
    setSearchQuery(value);
  };

  const sendInvitation = async () => {
    try {
      var formData = new FormData();
      formData.append("senderID", selectedProject.projectOwnerID);
      formData.append(
        "roleID",
        selectedProject.ProjectRoles.find(
          (role) => role.Role.name === inviteSelectedRole
        ).roleID
      );
      formData.append("receiverID", selectedUser);
      formData.append("projectID", selectedProject.projectID);
      formData.append("message", message);
      setSearchQuery("");
      setMessage("");
      setInviteSelectedRole("Select Role");

      axios({
        method: "post",
        url: "http://localhost:5000/invitation",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          toast.success("Invitation is Send");
          console.log(response);
        })
        .catch(function (response) {
          toast.error("Post Error");
          console.log(response);
        });
    } catch (error) {
      console.log(error);
      toast.error("Send Invitation Error");
    }
    setIsModalInviteMemberOpen(false);
  };

  const deleteProjectMemberByID = async (projectMemberID) => {
    try {
      setTriggerEffect(
        await axios.delete(
          `http://localhost:5000/projectMember/${projectMemberID}`
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const searchStudents = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/students/search/${searchQuery}/${projectId}`
      );
      setSearchResults(
        response.data.filter((user) =>
          selectedProject.ProjectMembers.every(
            (member) => member.userID !== user.userID
          )
        )
      );
    } catch (error) {
      console.error("Error searching students:", error);
    } finally {
      setIsSearchLoading(false);
    }
  }, [searchQuery, projectId]);

  const [errorTitleMessageDisplayed, setErrorTitleMessageDisplayed] =
    useState(null);

  const handleEditTitle = async (e) => {
    const newTitle = e.target.value;

    if (newTitle.length >= 3) {
      try {
        const response = await axios.put(
          `http://localhost:5000/projects/${selectedProject.projectID}/title`,
          {
            newTitle: newTitle,
          }
        );

        if (response.status === 200) {
          setEditTitle(newTitle);
          if (errorTitleMessageDisplayed) {
            toast.dismiss(errorTitleMessageDisplayed);
            setErrorTitleMessageDisplayed(null);
          }
        }
      } catch (error) {
        console.error("API error:", error);
      }
    } else if (newTitle.length < 3 && !errorTitleMessageDisplayed) {
      const toastId = toast.error(
        "Title should be at least 3 characters long.",
        {
          position: "top-right",
          hideProgressBar: true,
          autoClose: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setErrorTitleMessageDisplayed(toastId);
    }

    setEditTitle(newTitle);
  };

  const [errorDescMessageDisplayed, setErrorDescMessageDisplayed] =
    useState(null);

  const handleEditDesc = async (e) => {
    const newDescription = e.target.value;

    if (newDescription.length >= 12) {
      try {
        const response = await axios.put(
          `http://localhost:5000/projects/${selectedProject.projectID}/description`,
          {
            newDescription: newDescription,
          }
        );

        if (response.status === 200) {
          setEditDesc(newDescription);
          if (errorDescMessageDisplayed) {
            toast.dismiss(errorDescMessageDisplayed);
            setErrorDescMessageDisplayed(null);
          }
        }
      } catch (error) {
        console.error("API error:", error);
      }
    } else if (newDescription.length < 12 && !errorDescMessageDisplayed) {
      const toastId = toast.error(
        "Description should be at least 12 characters long.",
        {
          position: "top-right",
          hideProgressBar: true,
          autoClose: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setErrorDescMessageDisplayed(toastId);
    }

    setEditDesc(newDescription);
  };

  const isValidURL = (url) => {
    const urlPattern = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/i);

    return urlPattern.test(url);
  };

  const handleEditLink = async (e) => {
    const newLink = e.target.value;

    // if (isValidURL(newLink)) {
    try {
      const response = await axios.put(
        `http://localhost:5000/projects/${selectedProject.projectID}/link`,
        {
          newLink: newLink,
        }
      );

      if (response.status === 200) {
        setEditLink(newLink);
        if (errorDescMessageDisplayed) {
          toast.dismiss(errorDescMessageDisplayed);
          setErrorDescMessageDisplayed(null);
        }
      }
    } catch (error) {
      console.error("API error:", error);
    }
    // } else if (!isValidURL(newLink) && !errorDescMessageDisplayed) {
    //   const toastId = toast.error("Link should be format like link.", {
    //     position: "top-right",
    //     hideProgressBar: true,
    //     autoClose: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   setErrorDescMessageDisplayed(toastId);
    // }

    setEditLink(newLink);
  };

  const handleEditStartProject = async (e) => {
    const newStartProject = e;

    try {
      await axios.put(
        `http://localhost:5000/projects/${selectedProject.projectID}/startProject`,
        {
          newStartProject: newStartProject,
        }
      );
      setEditStartDate(newStartProject);
      selectedProject.startProject = newStartProject;
    } catch (error) {
      console.error("API error:", error);
    }
  };

  const handleEditEndProject = async (e) => {
    const newEndProject = e;

    try {
      await axios.put(
        `http://localhost:5000/projects/${selectedProject.projectID}/endProject`,
        {
          newEndProject: newEndProject,
        }
      );
      setEditEndDate(newEndProject);
      selectedProject.endProject = newEndProject;
    } catch (error) {
      console.error("API error:", error);
    }
  };

  const handleEditOpenUntil = async (e) => {
    const newOpenUntil = e;

    try {
      await axios.put(
        `http://localhost:5000/projects/${selectedProject.projectID}/openUntil`,
        {
          newOpenUntil: newOpenUntil,
        }
      );
      setOpenUntilDate(newOpenUntil);
      selectedProject.openUntil = newOpenUntil;
    } catch (error) {
      console.error("API error:", error);
    }
  };

  const handleEditStatus = async (e) => {
    const newStatus = e;

    try {
      await axios.put(
        `http://localhost:5000/projects/${selectedProject.projectID}/status`,
        {
          newStatus: newStatus,
        }
      );
      setEditStatus(newStatus);
      selectedProject.projectStatus = newStatus;
    } catch (error) {
      console.error("API error:", error);
    }
  };

  useEffect(() => {
    setIsSearchLoading(true);
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const searchTimer = setTimeout(() => {
      searchStudents();
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [searchQuery, searchStudents]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:5000/project/${projectId}`
        );
        setSelectedProject(response.data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId, triggerEffect]);

  useEffect(() => {
    selectedProject &&
      setisProjectFull(
        selectedProject.projectMemberCount === selectedProject.totalMember
      );
  });

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  };

  const formatDateShort = (inputDate) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };

    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  return (
    <div className="w-full p-4 md:p-12 overflow-y-auto scroll-smooth h-screen md:min-h-screen flex flex-col">
      {isLoading ? (
        <div className="loading-overlay">
          <MoonLoader color="red" loading={isLoading} size={50} />
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-start flex-col">
            <div className="px-4 mb-2 flex">
              <div className="flex">
                <Tooltip content={`Back to previous page`}>
                  <div>
                    <IoCaretBackCircleOutline
                      className="text-4xl text-blackAlternative cursor-pointer mr-2 my-auto"
                      onClick={() => navigate(-1)}
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
                        <div
                          onClick={() => {
                            setIsModalEditProjectOpen(true);
                            handleEditProject();
                          }}
                          className=""
                        >
                          {user.role === "student" ? "" : "Edit"} Project
                          Details
                        </div>
                      </MenuItem>
                      {(user.role === "lecturer" || user.role === "admin") && (
                        <MenuItem>
                          <div
                            className="text-primary cursor-pointer"
                            onClick={() => {
                              confirmAlert({
                                title: "Confirm Deletion",
                                message:
                                  "Are you sure you want to delete this project?",
                                buttons: [
                                  {
                                    label: "Yes",
                                    onClick: async () => {
                                      try {
                                        await axios.delete(
                                          `http://localhost:5000/projects/${selectedProject.projectID}`
                                        );
                                        toast.success(
                                          "Project deleted successfully"
                                        );
                                        navigate(-1);
                                      } catch (error) {
                                        console.error(
                                          "Error deleting project:",
                                          error
                                        );
                                        toast.error("Deletion error");
                                      }
                                    },
                                  },
                                  {
                                    label: "No",
                                    onClick: () => {},
                                  },
                                ],
                              });
                            }}
                          >
                            <label className="cursor-pointer" htmlFor="">
                              Delete Project
                            </label>
                          </div>
                        </MenuItem>
                      )}
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
                        : selectedProject.projectStatus === "Waiting to Start"
                        ? "text-blue-500"
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
              <div className="border-grey border rounded-xl h-[83vh] py-4 flex justify-center w-full min-h-screen lg:min-h-0 md:h-auto relativee">
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
                          Project Duration
                        </h1>
                      </div>
                    </div>

                    <div className="w-full mt-4 flex gap-4">
                      <Tooltip
                        content={formatDate(selectedProject.startProject)}
                      >
                        {formatDateShort(selectedProject.startProject)}
                      </Tooltip>
                      <label htmlFor="">-</label>
                      <Tooltip content={formatDate(selectedProject.endProject)}>
                        {formatDateShort(selectedProject.endProject)}
                      </Tooltip>
                    </div>
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
                      {selectedProject.ProjectMembers.length !== 0 &&
                        (user.role === "lecturer" || user.role === "admin") && (
                          <Tooltip
                            content={`${
                              !isProjectFull ? "Add Member" : "Full Member"
                            }`}
                          >
                            <div
                              onClick={() => setIsModalInviteMemberOpen(true)}
                              className={`${
                                !isProjectFull
                                  ? "cursor-pointer hover:bg-grey duration-300 hover:rounded-xl active:bg-greyAlternative"
                                  : "text-greyAlternative pointer-events-none cursor-none"
                              } py-3 px-3 flex flex-row gap-3`}
                            >
                              <IoMdPersonAdd
                                className={`my-auto text-xl ${
                                  !isProjectFull
                                    ? "cursor-pointer"
                                    : "pointer-events-none"
                                }`}
                              />
                              {user.role === "admin" ||
                                (user.role === "lecturer" && (
                                  <label
                                    className={`hidden xs:block font-bold ${
                                      !isProjectFull
                                        ? "cursor-pointer"
                                        : "pointer-events-none"
                                    }`}
                                    htmlFor=""
                                  >
                                    Invite a Student
                                  </label>
                                ))}
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
                                src={member.user.photoProfileUrl}
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
                                  {(user.role === "lecturer" ||
                                    user.role === "admin") && (
                                    <MenuItem
                                      onClick={() =>
                                        deleteProjectMemberByID(
                                          member.projectMemberID
                                        )
                                      }
                                    >
                                      <div className="text-primary poin">
                                        <label
                                          className="cursor-pointer"
                                          htmlFor=""
                                        >
                                          Kick Member
                                        </label>
                                      </div>
                                    </MenuItem>
                                  )}
                                </MenuList>
                              </Menu>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div
                          className="flex flex-row gap-5  justify-center py-4  duration-300 px-3 w-full "
                          onClick={() => setIsModalInviteMemberOpen(true)}
                        >
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
            className="w-screen h-screen flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
            isOpen={isModalInviteMemberOpen}
            onRequestClose={() => setIsModalInviteMemberOpen(false)}
          >
            <div className="w-screen xs:max-w-[80vw] md:w-[50vw] xl:w-[35vw] h-screen xs:h-auto xs:max-h-[80vh] overflow-y-auto md:overflow-hidden bg-whiteAlternative rounded-xl px-6 py-6 border-2">
              <div className="flex justify-between  gap-4">
                <h1 className="my-auto text-lg md:text-xl font-medium">
                  Add Student to {selectedProject.title}
                </h1>
                <Button
                  variant="text"
                  onClick={() => {
                    setIsModalInviteMemberOpen(false);
                    setSelectedUser(null);
                    setSearchQuery("");
                    setMessage("");
                  }}
                >
                  <IoMdClose className="text-lg" />
                </Button>
              </div>
              <hr className="mt-2" />
              <div className="md:max-h-[50vh] overflow-y-scroll overflow-x-hidden px-4 mt-2">
                <div className="py-4 font-medium flex flex-col gap-4 w-full ">
                  <label htmlFor="">Invite Student</label>
                  <div className="relative w-full border rounded-2xl px-2 py-1 border-blackAlternative ">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleInputChange}
                      className="p-1 w-full md:w-3/6 xl:w-3/4 border-none outline-none overflow-x-scroll"
                      placeholder="Add students by name or email..."
                    />
                    {searchQuery && !selectedUser && (
                      <div className="absolute top-24 md:top-11 p-2 bg-black text-white rounded-xl w-3/4">
                        {isSearchLoading ? (
                          <div className="flex justify-center">
                            <MoonLoader
                              color="white"
                              loading={isSearchLoading}
                              size={25}
                            />
                          </div>
                        ) : searchResults.length > 0 ? (
                          searchResults.map((user, index) => (
                            <div
                              className="p-2 cursor-pointer"
                              onClick={() => {
                                setSearchQuery(user.email);
                                setSelectedUser(user.userID);
                              }}
                              key={index}
                            >
                              <p>{user.email}</p>
                            </div>
                          ))
                        ) : (
                          <p>No user found</p>
                        )}
                      </div>
                    )}

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
                        className="absolute right-[-10px] top-11"
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
                  <label
                    htmlFor=""
                    className="mt-3 text-sm text-black font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    name=""
                    className="p-2 rounded-2xl border border-blackAlternative"
                    id=""
                    rows="5"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder="Add a message"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-2">
                <Button
                  onClick={() => {
                    setIsModalInviteMemberOpen(false);
                    setSelectedUser(null);
                    setSearchQuery("");
                    setMessage("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  disabled={selectedUser === null || message === ""}
                  onClick={sendInvitation}
                >
                  Send
                </Button>
              </div>
            </div>
          </Modal>

          <Modal
            className="w-screen h-screen flex items-center justify-center z-50 bg-opacity-5 backdrop-blur-sm"
            isOpen={isModalEditProjectOpen}
            onRequestClose={() => setIsModalEditProjectOpen(false)}
          >
            <div className="w-screen xs:max-w-[80vw] relative md:w-[45vw] h-screen xs:h-auto xs:max-h-[80vh] overflow-y-auto md:overflow-hidden bg-whiteAlternative rounded-xl px-6 py-6 border-2">
              <div className="flex justify-between  gap-4">
                <h1 className="my-auto text-lg md:text-xl font-medium">
                  Project Details
                </h1>
                <Button
                  variant="text"
                  onClick={() => {
                    setIsModalEditProjectOpen(false);
                    if (errorTitleMessageDisplayed) {
                      setEditTitle(selectedProject.title);
                      setErrorTitleMessageDisplayed(null);
                      toast.dismiss();
                    } else {
                      selectedProject.title = editTitle;
                    }

                    if (errorDescMessageDisplayed) {
                      setEditDesc(selectedProject.description);
                      setErrorDescMessageDisplayed(null);
                      toast.dismiss();
                    } else {
                      selectedProject.description = editDesc;
                    }
                  }}
                >
                  <IoMdClose className="text-lg" />
                </Button>
              </div>
              <hr className="mt-2" />
              <div className="md:max-h-[50vh] overflow-y-scroll overflow-x-hidden px-2 mt-2">
                <div className="py-4 font-medium flex flex-col gap-4 w-full ">
                  <label htmlFor="">Name</label>
                  <div
                    className={`relative w-full  rounded-2xl px-2 py-1 transition bg-white ${
                      user.role !== "student" ? "hover:outline" : ""
                    } outline-1 focus:outline focus:outline-2  outline-blackAlternative `}
                  >
                    <input
                      type="text"
                      value={editTitle}
                      onChange={handleEditTitle}
                      className="p-1 w-full border-none outline-none overflow-x-scroll bg-white"
                      disabled={user.role === "student"}
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                      <div className="flex flex-col basis-1/2 ">
                        <label htmlFor="">Owner</label>
                        <Tooltip
                          content={
                            selectedProject.projectOwner.firstName +
                            " " +
                            selectedProject.projectOwner.lastName
                          }
                        >
                          <div className="flex gap-2 py-1 px-2 mt-1 rounded-md">
                            <img
                              className="h-10 aspect-square rounded-full"
                              src={selectedProject.projectOwner.photoProfileUrl}
                              alt=""
                            />

                            <div className="line-clamp-1 my-auto ">
                              {selectedProject.projectOwner.firstName +
                                " " +
                                selectedProject.projectOwner.lastName}
                            </div>
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full ">
                      <div className="flex flex-col basis-1/2">
                        <label htmlFor="">Project Status</label>
                        <div
                          className={`my-auto ${
                            user.role === "student" ? "" : "cursor-pointer"
                          } w-full relative flex flex-col py-1`}
                        >
                          <Select
                            variant="outlined"
                            value={editStatus}
                            color="blue-gray"
                            disabled={user.role === "student"}
                            onChange={handleEditStatus}
                            className="font-medium "
                          >
                            {listStatus.map((status, index) => (
                              <Option
                                key={index}
                                value={status}
                                className="text-gray-800"
                              >
                                {status}
                              </Option>
                            ))}
                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-col w-full basis-1/2">
                        <label className="pl-0 md:pl-2" htmlFor="">
                          Open Request Until
                        </label>
                        <div
                          className={`my-auto ${
                            user.role === "student"
                              ? ""
                              : "cursor-pointer hover:bg-gray-100"
                          } w-full relative flex flex-col py-1 bg-white rounded-md `}
                        >
                          <div
                            className="flex rounded-md"
                            onClick={() => {
                              setIsModalDateOpen(!isModalDateOpen);
                            }}
                          >
                            <div className="my-auto flex w-full">
                              <Tooltip content={formatDate(editEndDate)}>
                                <div>
                                  <DatePicker
                                    showTimeSelect
                                    selected={new Date(editOpenUntilDate)}
                                    onChange={handleEditOpenUntil}
                                    disabled={
                                      user.role === "student" ||
                                      editStatus !== "Open Request"
                                    }
                                    onKeyDown={(e) => {
                                      e.preventDefault();
                                    }}
                                    maxDate={new Date(editStartDate)}
                                    className={`${
                                      user.role === "student"
                                        ? ""
                                        : "cursor-pointer "
                                    } ${
                                      editStatus !== "Open Request" &&
                                      user.role !== "student"
                                        ? "cursor-not-allowed"
                                        : ""
                                    } p-2  bg-transparent outline-none`}
                                  />
                                </div>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full ">
                      <div className="flex flex-col basis-1/2 w-full">
                        <label htmlFor="">Start Date</label>
                        <div
                          className={`my-auto ${
                            user.role === "student"
                              ? ""
                              : "cursor-pointer hover:bg-gray-100"
                          } w-full relative flex flex-col py-1 bg-white rounded-md `}
                        >
                          <div
                            className="flex  rounded-md"
                            onClick={() => {
                              setIsModalDateOpen(!isModalDateOpen);
                            }}
                          >
                            <div className="my-auto flex w-full">
                              <Tooltip content={formatDate(editStartDate)}>
                                <div>
                                  <DatePicker
                                    wrapperClassName="date_Picker"
                                    showTimeSelect
                                    minDate={new Date(editOpenUntilDate)}
                                    maxDate={new Date(editEndDate)}
                                    selected={new Date(editStartDate)}
                                    startDate={new Date(editStartDate)}
                                    endDate={new Date(editEndDate)}
                                    disabled={user.role === "student"}
                                    onChange={handleEditStartProject}
                                    onKeyDown={(e) => {
                                      e.preventDefault();
                                    }}
                                    className={`${
                                      user.role === "student"
                                        ? ""
                                        : "cursor-pointer "
                                    } p-2  rounded-md bg-transparent outline-none`}
                                  />
                                </div>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full basis-1/2 ">
                        <label className="pl-0 md:pl-2" htmlFor="">
                          End Date
                        </label>
                        <div
                          className={`my-auto ${
                            user.role === "student"
                              ? ""
                              : "cursor-pointer hover:bg-gray-100"
                          } w-full relative flex flex-col py-1 bg-white rounded-md `}
                        >
                          <div
                            className="flex rounded-md"
                            onClick={() => {
                              setIsModalDateOpen(!isModalDateOpen);
                            }}
                          >
                            <div className="my-auto flex w-full">
                              <Tooltip content={formatDate(editEndDate)}>
                                <div>
                                  <DatePicker
                                    showTimeSelect
                                    wrapperClassName="date_Picker"
                                    selected={new Date(editEndDate)}
                                    startDate={new Date(editStartDate)}
                                    endDate={new Date(editEndDate)}
                                    onChange={handleEditEndProject}
                                    disabled={user.role === "student"}
                                    minDate={new Date(editStartDate)}
                                    onKeyDown={(e) => {
                                      e.preventDefault();
                                    }}
                                    className={`${
                                      user.role === "student"
                                        ? ""
                                        : "cursor-pointer "
                                    } p-2  rounded-md bg-transparent outline-none`}
                                  />
                                </div>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <label
                    htmlFor=""
                    className="mt-1 text-base text-black font-bold"
                  >
                    Project Description
                  </label>
                  <textarea
                    name=""
                    className={`p-2 rounded-2xl  outline-1 ${
                      user.role !== "student" ? "hover:outline" : ""
                    } focus:outline-2 outline-blackAlternative  transition bg-white`}
                    id=""
                    rows="5"
                    value={editDesc}
                    onChange={handleEditDesc}
                    placeholder="Add a message"
                    disabled={user.role === "student"}
                  ></textarea>

                  <label
                    htmlFor=""
                    className="mt-1 text-base text-black font-bold"
                  >
                    Project Link
                  </label>
                  <input
                    type="text"
                    value={editLink}
                    onChange={handleEditLink}
                    className={`p-2 rounded-2xl  outline-1 ${
                      user.role !== "student" ? "hover:outline" : ""
                    } focus:outline-2 outline-blackAlternative  transition bg-white`}
                    disabled={user.role === "student"}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default MyProjectDetail;
