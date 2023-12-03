import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ProjectDetailModal from "../ProjectDetailModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateProjectModal from "./CreateProjectModal";
import axios from "axios";

function MyProjectLecturer() {
  const storedUser = localStorage.getItem("user");
  const [isModalOpenDetail, setModalOpenDetail] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const User = JSON.parse(localStorage.getItem("user"));

  Modal.setAppElement(document.getElementById("root"));

  const openModalDetail = () => {
    setModalOpenDetail(true);
  };

  function openModal() {
    setIsOpen(true);
  }

  const [isLoadingMyProject, setIsLoadingMyProject] = useState(false);
  const [showNoProjectMessage, setShowNoProjectMessage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [myProject, setMyProject] = useState([]);

  const [activeStatus, setActiveStatus] = useState("All");
  const listStatus = ["All", "Active", "Finished", "Open Request"];
  useEffect(() => {
    const fetchMyProjects = async () => {
      setIsLoadingMyProject(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/lecturer/projects/${user.userID}`
        );
        if (response.data.length === 0) {
          setShowNoProjectMessage(true);
        }
        const filteredProjects =
          activeStatus === "All"
            ? response.data
            : response.data.filter(
                (project) => project.projectStatus === activeStatus
              );

        const searchedProjects = filteredProjects.filter((project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setMyProject(searchedProjects);
      } catch (error) {
        console.log("Failed to fetch my projects:", error);
      } finally {
        setIsLoadingMyProject(false);
      }
    };

    fetchMyProjects();
  }, [user.userID, activeStatus, searchTerm, setMyProject]);

  const projects = [
    // Masukkan data proyek Anda di sini
    {
      projectID: 1,
      title: "Nama Proyek 1",
      description: "Deskripsi proyek 1...",
      // Data lain yang diperlukan
    },
    {
      projectID: 2,
      title: "Nama Proyek 2",
      description: "Deskripsi proyek 2...",
      // Data lain yang diperlukan
    },
    {
      projectID: 2,
      title: "Nama Proyek 2",
      description: "Deskripsi proyek 2...",
      // Data lain yang diperlukan
    },
    {
      projectID: 2,
      title: "Nama Proyek 2",
      description: "Deskripsi proyek 2...",
      // Data lain yang diperlukan
    },
    // ...
  ];

  return (
    <div className="flex justify-center w-full p-4 md:p-12 overflow-y-auto">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Daftar Proyek</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.projectID}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Detail Proyek
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProjectLecturer;
