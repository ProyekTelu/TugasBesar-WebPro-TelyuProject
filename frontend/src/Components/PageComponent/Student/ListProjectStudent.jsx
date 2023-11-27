import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CardListProject from "./CardListProject";
import { AiOutlineSearch } from "react-icons/ai";
import JoinForm from "./JoinForm";
import axios from "axios";

function ListProjectStudent() {
  const [isShowRequestForm, setIsShowRequestForm] = useState(false);
  const [requestFormSession, setRequestFormSession] = useState("");
  const [dataProject, setDataProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/openRequestProjects"
        );
        setDataProject(response.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

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
        <div className="p-4 md:p-12 overflow-y-auto">
          <div className="flex  gap-5 flex-col-reverse md:flex-row justify-between">
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
        </div>
      )}
    </>
  );
}

export default ListProjectStudent;
