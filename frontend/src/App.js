import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import WebFont from "webfontloader";
import Layout from "./pages/Layout";
import CreateProject from "./Components/CreateProject";
import JoinProject from "./Components/JoinProject";

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
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/joinproject" element={<JoinProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
