import React from "react";
import {
  BsFillCalendarCheckFill,
  BsFillPeopleFill,
  BsFillCartCheckFill,
} from "react-icons/bs";

const BoxInfo: React.FC = () => {
  return (
    <ul className="box-info grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

      <li className="flex items-center bg-white p-4 rounded-lg shadow-md">

        <div className="p-4 bg-blue-100 rounded">
          <BsFillCalendarCheckFill size={24} className="text-blue-600" />
        </div>

        <div className="ml-4">
          <h3 className="text-2xl font-semibold">150</h3>
          <p className="text-gray-600">Total Users</p>
        </div>

      </li>
      
      <li className="flex items-center bg-white p-4 rounded-lg shadow-md">

        <div className="bg-yellow-100 rounded p-4">
          <BsFillPeopleFill size={24} className="text-yellow-600" />
        </div>

        <div className="ml-4">
          <h3 className="text-2xl font-semibold">100</h3>
          <p className="text-gray-600">Total Leads</p>
        </div>

      </li>

      <li className="flex items-center bg-white p-4 rounded-lg shadow-md">
        
        <div className="bg-orange-100 p-4 rounded">
          <BsFillCartCheckFill size={24} className="text-orange-600" />
        </div>

        <div className="ml-4">
          <h3 className="text-2xl font-semibold"> 130 </h3>
          <p className="text-gray-600"> Total Flats</p>
        </div>
        
      </li>
    </ul>
  );
};

export default BoxInfo;