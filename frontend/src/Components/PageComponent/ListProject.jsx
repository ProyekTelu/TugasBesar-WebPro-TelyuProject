import React from "react";
import ListProjectStudent from "./Student/ListProjectStudent";
import ListProjectLecturer from "./Lecturer/ListProjectLecturer";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {user.role === "student" ? (
        <ListProjectStudent />
      ) : (
        <ListProjectStudent />
      )}
    </>
  );
}

export default Home;
