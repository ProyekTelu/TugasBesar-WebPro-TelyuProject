import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import WebFont from "webfontloader";
import Layout from "./pages/Layout";
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
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
