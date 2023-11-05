import React from "react";
import HomeStudent from "./Student/HomeStudent";
import HomeLecturer from "./Lecturer/HomeLecturer";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return <>{user.role === "student" ? <HomeStudent /> : <HomeLecturer />}</>;
}

export default Home;
