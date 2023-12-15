import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Layout from "./pages/Layout";
import CreateProject from "./Components/Backup/CreateProject";
import JoinProject from "./Components/Backup/JoinProject";
import Home from "./Components/PageComponent/Home";
import Status from "./Components/PageComponent/Student/Status";
import ProfilePage from "./Components/PageComponent/ProfilePage";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import { ToastContainer } from "react-toastify";
import Landingpage from "./Components/Landingpage";
import Requested from "./Components/PageComponent/Lecturer/Requested";
import JoinForm from "./Components/PageComponent/Student/JoinForm";
import ListProject from "./Components/PageComponent/ListProject";
import CreateForm from "./Components/PageComponent/CreateForm";
import MyProject from "./Components/PageComponent/MyProject";
import MyProjectDetail from "./Components/PageComponent/MyProjectDetail";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:400,500,700"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="telyuProject" element={<Layout />}>
          {/* SESSION BASED */}
          <Route path="home" element={<Home />} />
          <Route path="listProject" element={<ListProject />} />
          <Route path="myProject" element={<MyProject />} />
          <Route path="myProject">
            <Route path=":projectId" element={<MyProjectDetail />} />
          </Route>
          {/* GLOBAL */}
          <Route path="joinForm" element={<JoinForm />} />
          <Route path="status" element={<Status />} />
          <Route path="profilePage" element={<ProfilePage />} />
          <Route path="requested" element={<Requested />} />
          <Route path="createForm" element={<CreateForm />} />
        </Route>
        <Route path="createproject" element={<CreateProject />} />
        <Route path="joinproject" element={<JoinProject />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
