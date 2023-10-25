import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import WebFont from "webfontloader";
import Layout from "./pages/Layout";
import Page1 from "./Components/PageComponent/Page1";
import Page4 from "./Components/PageComponent/Page4";
import Page3 from "./Components/PageComponent/Page3";
import Page2 from "./Components/PageComponent/Page2";

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
        <Route path="home" element={<Layout />}>
          <Route path="page1" element={<Page1/>}/>
          <Route path="page2" element={<Page2/>}/>
          <Route path="page3" element={<Page3/>}/>
          <Route path="page4" element={<Page4/>}/>
        </Route>
        <Route path="haiii" element={<Page1 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
