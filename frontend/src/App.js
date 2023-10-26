import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Layout from "./pages/Layout";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import { ToastContainer } from "react-toastify";

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
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
