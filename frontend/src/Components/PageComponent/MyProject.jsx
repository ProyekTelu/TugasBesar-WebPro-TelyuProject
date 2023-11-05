import React from "react";
import MyProjectStudent from "./Student/MyProjectStudent";
import MyProjectLecturer from "./Lecturer/MyProjectLecturer";

function MyProject() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {user.role === "student" ? <MyProjectLecturer /> : <MyProjectLecturer />}
    </>
  );
}

export default MyProject;
