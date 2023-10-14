import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import WebFont from "webfontloader";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
