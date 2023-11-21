import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CardListProject from "./CardListProject";
import { AiOutlineSearch } from "react-icons/ai";
import JoinForm from "./JoinForm";

function ListProjectStudent() {
  const [isShowRequestForm, setIsShowRequestForm] = useState(false);
  const [requestFormSession, setRequestFormSession] = useState("");

  const dataProject = [
    {
      title: "EcoSpace",
      description:
        "EcoScape is an ambitious environmental conservation project aimed at preserving and restoring natural ecosystems in urban areas. We believe that by creating green spaces and planting native trees and flowers, we can improve air quality, provide habitat for wildlife, and enhance the overall quality of life for local communities. Our mission is to transform concrete jungles into thriving urban oases, where both people and nature can coexist harmoniously. Join us in the journey to create a greener, healthier, and more sustainable future.",
      project_owner: "Mr. Zaky Fathurahhim",
      due_project: "23 March 2024",
    },
    {
      title: "TechLink",
      description:
        "TechLink is a groundbreaking initiative dedicated to bridging the digital divide. Our goal is to provide underprivileged communities with access to technology and digital education, enabling them to participate fully in the modern digital age. Through donations of computers, smartphones, and digital literacy training, we aim to empower individuals and communities to unlock new opportunities, connect with the world, and build a brighter future. Together, let's build a more inclusive and digitally equitable society.",
      project_owner: "Mr. Zaky Fathurahhim",
      due_project: "01 Juny 2024",
    },
    {
      title: "HealthSync",
      description:
        "HealthSync is a revolutionary healthcare platform designed to streamline and improve patient care. By integrating medical records, telemedicine, and health tracking, we aim to empower individuals to take control of their health and well-being. Our mission is to create a connected healthcare ecosystem that makes medical information readily available, improves communication between patients and healthcare providers, and ultimately leads to better health outcomes. Join us in revolutionizing the way we manage our health.",
      project_owner: "Mr. Zaky Fathurahhim",
      due_project: "22 January 2024",
    },
    {
      title: "EduQuest",
      description:
        "EcoScape is an ambitious environmental conservation project aimed at preserving and restoring natural ecosystems in urban areas. We believe that by creating green spaces and planting native trees and flowers, we can improve air quality, provide habitat for wildlife, and enhance the overall quality of life for local communities. Our mission is to transform concrete jungles into thriving urban oases, where both people and nature can coexist harmoniously. Join us in the journey to create a greener, healthier, and more sustainable future.",
      project_owner: "Mr. Zaky Fathurahhim",
      due_project: "19 February 2021",
    },
    {
      title: "EcoScape",
      description:
        "EcoScape is an ambitious environmental conservation project aimed at preserving and restoring natural ecosystems in urban areas. We believe that by creating green spaces and planting native trees and flowers, we can improve air quality, provide habitat for wildlife, and enhance the overall quality of life for local communities. Our mission is to transform concrete jungles into thriving urban oases, where both people and nature can coexist harmoniously. Join us in the journey to create a greener, healthier, and more sustainable future.",
      project_owner: "Mr. Zaky Fathurahhim",
      due_project: "22 January 2024",
    },
    {
      title: "EduQuest",
      description:
        "EduQuest is an educational project dedicated to enhancing the quality of education for underprivileged children in our community. We believe that access to quality education is the key to a brighter future. Our mission is to provide educational resources, mentorship, and support to children who need it most. Join us in our quest to empower young minds and create a better tomorrow.",
      project_owner: "Ms. Sarah Johnson",
      due_project: "15 March 2024",
    },
    {
      title: "CleanWater Initiative",
      description:
        "The CleanWater Initiative is a community-driven project that aims to provide access to clean and safe drinking water for everyone. We believe that clean water is a fundamental human right, and no one should have to go without it. Our mission is to install water purification systems in underserved areas and ensure a sustainable supply of clean water. Join us in the fight for a healthier and more hydrated world.",
      project_owner: "Dr. John Smith",
      due_project: "10 June 2024",
    },
    {
      title: "Food for All",
      description:
        "Food for All is a hunger relief project that works tirelessly to provide nutritious meals to those in need. We believe that no one should go to bed hungry. Our mission is to reduce food insecurity and eliminate hunger in our community. Join us in the effort to ensure that every person has enough to eat and can enjoy a better quality of life.",
      project_owner: "Ms. Emily Davis",
      due_project: "5 August 2024",
    },
    {
      title: "Tech Innovators",
      description:
        "Tech Innovators is a technology-focused project that empowers young innovators to create cutting-edge solutions for real-world problems. We believe in nurturing creativity and fostering the next generation of tech leaders. Our mission is to provide mentorship, resources, and opportunities for young tech enthusiasts. Join us in shaping the future through technology.",
      project_owner: "Mr. James Anderson",
      due_project: "18 September 2024",
    },
    {
      title: "Artistic Expressions",
      description:
        "Artistic Expressions is an art and culture project that celebrates creativity in all its forms. We believe that art can inspire, heal, and bring communities together. Our mission is to support artists, showcase their work, and create vibrant cultural experiences. Join us in promoting the arts and fostering artistic expressions.",
      project_owner: "Ms. Sophia Martinez",
      due_project: "3 November 2024",
    },
  ];

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 3;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dataProject.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataProject.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataProject.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {isShowRequestForm ? (
        <JoinForm title={requestFormSession} />
      ) : (
        <>
          <div className="flex gap-5 flex-col-reverse md:flex-row justify-between">
            <ReactPaginate
              breakLabel="..."
              nextLabel="NEXT"
              nextLinkClassName="font-bold py-2 px-3 rounded-md ms-3"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="PREV"
              previousLinkClassName="font-bold py-2 px-3 rounded-md me-3"
              renderOnZeroPageCount={null}
              className="flex items-center"
              pageLinkClassName="py-2 px-3 duration-100 ease-in rounded-md mx-1 hover:px-4 hover:bg-grey"
              activeLinkClassName="py-2 px-4 bg-primary rounded-md text-white "
            />
            <input
              type="text"
              className="text-black py-2 px-3 bg-white border-2 rounded-lg focus:outline-greyAlternative focus:bg-whiteAlternative"
              placeholder="Search"
            />
          </div>
          <div className="">
            <CardListProject
              items={currentItems}
              handleRequestForm={(title) => {
                setRequestFormSession(title);
                setIsShowRequestForm(true);
              }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default ListProjectStudent;
