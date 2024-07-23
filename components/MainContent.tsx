"use client";

import React from "react";
import BoxInfo from "./BoxInfo";
import TableData from "./TableData";
import TrafficChart from "./Chart";

const MainContent: React.FC = () => {
  return (
    <main className="p-6 overflow-y-auto">
      <div className="head-title flex items-center justify-between">
        <div className="left">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <ul className="breadcrumb flex items-center text-gray-500">
            <li>
              <i className="bx bx-chevron-right mx-2"></i>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
      <BoxInfo />
      <div className="flex items-start justify-between w-full">
        <div className="w-[100%]">
          <TableData />
        </div>
        {/* <div className="w-[50%]">
          <TrafficChart />{" "}
        </div> */}
      </div>
    </main>
  );
};

export default MainContent;
