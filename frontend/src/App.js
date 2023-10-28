import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Layout from "./pages/Layout";
import CreateProject from "./Components/CreateProject";
import JoinProject from "./Components/JoinProject";
import Page1 from "./Components/PageComponent/Page1";
import Page4 from "./Components/PageComponent/Page4";
import Page3 from "./Components/PageComponent/Page3";
import Page2 from "./Components/PageComponent/Page2";
import ProfilePage from "./Components/PageComponent/ProfilePage";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import { ToastContainer } from "react-toastify";
import Landingpage from "./Components/Landingpage";

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
        <Route path="home" element={<Layout />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="profilePage" element={<ProfilePage />} />
        </Route>
        <Route path="createproject" element={<CreateProject />} />
        <Route path="joinproject" element={<JoinProject />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
