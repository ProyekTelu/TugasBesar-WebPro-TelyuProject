import React from "react";

import { GoProjectRoadmap, GoArrowDown } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="w-1/4">
      <ul className="flex flex-col gap-5 m-10">
        <li>
          <GoProjectRoadmap />
        </li>
        <li>
          <GoArrowDown className="text-[200px] rotate-180 md:rotate-0 md:text-xl" />
        </li>
        <li>isi</li>
        <li>isi</li>
        <li>isi</li>
      </ul>
    </div>
  );
};

export default Sidebar;
