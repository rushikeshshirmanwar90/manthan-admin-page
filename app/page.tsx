import React from "react";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar active="Dashboard" />
      <div className="flex-1 ml-72">
        <MainContent />
      </div>
    </div>
  );
};

export default Home;