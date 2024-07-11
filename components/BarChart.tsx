"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Butter Chicken", Menus: 2400, amt: 2400 },
  { name: "Chicken Briyani", Menus: 1398, amt: 2210 },
  { name: "Mutton Briyani", Menus: 9800, amt: 2290 },
  { name: "Mutton Curry", Menus: 3908, amt: 2000 },
  { name: "Chicken Lollipop", Menus: 4800, amt: 2181 },
  { name: "Chicken kebab", Menus: 3800, amt: 2500 },
  { name: "Chicken 65", Menus: 4300, amt: 2100 },
];

const BarChartComponent: React.FC = () => {
  return (
    <div className="w-full h-[20rem]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="Menus" fill="#EE8137" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
