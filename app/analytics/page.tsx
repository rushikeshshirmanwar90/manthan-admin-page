"use client";
import BarChartComponent from "@/components/BarChart";
import CompareBarChart from "@/components/CompareChart";
import FilterSection from "@/components/FilterSection";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-[20%]">
          <Sidebar active={"Analytics"} />
        </div>
        <div className="flex flex-col gap-40">
          <div className="w-[100%]">
            <div className="pl-6 mt-10">
              <h1 className="text-3xl font-semibold ml-5">Menus Analytics</h1>
              <div className="ml-14" id="filter-section">
                <FilterSection />
              </div>
              <div className="mt-11">
                <BarChartComponent />
              </div>
            </div>
          </div>

          <div className="w-[100%] mb-20">
            <div className="container pl-6">
              <h1 className="text-3xl font-semibold ml-5">Menus Analytics</h1>
              <CompareBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;