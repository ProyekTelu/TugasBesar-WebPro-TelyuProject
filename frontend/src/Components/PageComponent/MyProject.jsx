import React from "react";
import { Link } from "react-router-dom";

function Project({ title, description, link }) {
  return (
    <>
      <div className="w-full h-min relative border-2 lg:flex-col sm:flex-col p-5 my-4 rounded-lg justify-center overflow-y-auto max-h-[75vh]">
        <h1 className="text-left text-secondary text-xl font-bold">{title}</h1>
        <h1 className="border-b-2 border-gray-400 my-2"> </h1>
        <p>{description}</p>
        <div className="text-right mt-4 text-blue-800 font-semibold underline underline-offset-2">
          <Link to={link}>Show More</Link>
        </div>
      </div>
    </>
  );
}

function MyProject() {
  const projects = [
    {
      title: "EcoScape",
      description:
        "EcoScape is an ambitious environmental conservation project aimed at preserving and restoring natural ecosystems in urban areas...",
      link: "/home/projectDetail",
    },
    {
      title: "TechLink",
      description:
        "TechLink is a groundbreaking initiative dedicated to bridging the digital divide. Our goal is to provide underprivileged communities...",
      link: "/home/projectDetail",
    },
    {
      title: "HealthSync",
      description:
        "HealthSync is a revolutionary healthcare platform designed to streamline and improve patient care. By integrating medical records...",
      link: "/home/projectDetail",
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12 lg:mt-10 flex justify-center relative">
        <div className="w-full h-full">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
          <div className="flex justify-end mt-8">
            <button className="w-60 h-10 bg-lime-400 rounded-3xl shadow">
              <div className="text-white text-xl font-bold font-['Inter']">
                {" "}
                <Link to="/home/createForm">Create Project</Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
