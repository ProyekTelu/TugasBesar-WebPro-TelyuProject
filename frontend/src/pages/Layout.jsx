import React from "react";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  return (
    <div className="flex w-screen">
      <Sidebar className=""/>
      <div className="">
        <div>main</div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default Layout;
