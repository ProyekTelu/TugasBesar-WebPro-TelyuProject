import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { HiUserGroup } from "react-icons/hi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { Tooltip, Button } from "@material-tailwind/react";
import { FaDotCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyProjectTableStudent = ({ myProject }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(myProject.length / itemsPerPage);
  const navigate = useNavigate();

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const formatDate = (inputDate) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };

    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  const displayProjects = () => {
    const startIndex = currentPage * itemsPerPage;
    const slicedProjects = myProject.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <tbody className="h-full">
        {slicedProjects.map((project, index) => (
          <tr
            key={index}
            className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
          >
            <td className="text-center w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
              <Tooltip content={project.projectStatus}>
                <p
                  className={`py-2 rounded-lg bg-transparent w-full font-semibold  ${
                    project.projectStatus === "Open Request"
                      ? "text-yellow-600"
                      : project.projectStatus === "Active"
                      ? "text-green-500"
                      : project.projectStatus === "Finished"
                      ? "text-red-500"
                      : project.projectStatus === "Waiting to Start"
                      ? "text-blue-500"
                      : ""
                  } `}
                >
                  <FaDotCircle className="text-lg mx-auto shadow-md rounded-full" />
                </p>
              </Tooltip>
            </td>
            <td className="text-start w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
              {project.title}
            </td>
            <td className="text-start w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
              {formatDate(project.startProject)}
            </td>
            <td className="text-start w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
              {formatDate(project.endProject)}
            </td>
            <td className="text-start w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
              {project.ProjectMembers[0].Role.name}
            </td>
            <td className="text-start w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
              <div className="flex flex-row gap-2 justify-center">
                <Tooltip content="Group Chat">
                  <a
                    href={project.groupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-2 bg-secondary rounded-lg text-whiteAlternative active:scale-95 transition hover:shadow-md inline-block"
                  >
                    <HiUserGroup />
                  </a>
                </Tooltip>
                <Tooltip content="Detail Project">
                  <Button
                    onClick={() =>
                      navigate(`/telyuProject/myProject/${project.projectID}`)
                    }
                    className="py-2 px-2 bg-secondary rounded-lg text-whiteAlternative active:scale-95 transition hover:shadow-md"
                  >
                    <BsFillBarChartLineFill />
                  </Button>
                </Tooltip>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="w-full h-full">
      <table className="w-full h-[90%] ">
        <thead className="sticky top-0 bg-grey bg-opacity-25 border rounded-lg">
          <tr>
            <th className="text-center p-3  font-bold uppercase hidden lg:table-cell">
              STATUS
            </th>
            <th className=" text-start p-3 font-bold uppercase hidden lg:table-cell">
              PROJECT
            </th>
            <th className=" text-start p-3 font-bold uppercase hidden lg:table-cell">
              START DATE
            </th>
            <th className=" text-start p-3 font-bold uppercase hidden lg:table-cell">
              END DATE
            </th>
            <th className=" text-start p-3 font-bold uppercase hidden lg:table-cell">
              ROLE
            </th>
            <th className=" text-center p-3 font-bold uppercase hidden lg:table-cell">
              ACTION
            </th>
          </tr>
        </thead>
        {displayProjects()}
      </table>
      <div className="flex justify-between w-full px-4 py-4 mt-2">
        <p>{`Page ${currentPage + 1} of ${pageCount}`}</p>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          className="flex gap-4"
          pageCount={pageCount}
          breakLabel={"..."}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLinkClassName="font-bold py-2 px-3 rounded-md me-3"
          renderOnZeroPageCount={null}
          pageLinkClassName="py-2 px-3 duration-100 ease-in rounded-md mx-1 hover:px-4 hover:bg-grey"
          activeLinkClassName="py-2 px-4 bg-primary rounded-md text-white "
          nextLinkClassName="font-bold py-2 px-3 rounded-md ms-3"
        />
      </div>
    </div>
  );
};

export default MyProjectTableStudent;
