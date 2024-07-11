import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Butter Chicken", current_month: 4000, last_month: 2400, amt: 2400 },
  { name: "Chicken Briyani", current_month: 3000, last_month: 1398, amt: 2210 },
  { name: "Mutton Briyani", current_month: 2000, last_month: 9800, amt: 2290 },
  { name: "Mutton Curry", current_month: 2780, last_month: 3908, amt: 2000 },
  {
    name: "Chicken Lollipop",
    current_month: 1890,
    last_month: 4800,
    amt: 2181,
  },
  { name: "Chicken kebab", current_month: 2390, last_month: 3800, amt: 2500 },
  { name: "Chicken 65", current_month: 3490, last_month: 4300, amt: 2100 },
];

const CompareBarChat: React.FC = () => {
  return (
    <div className="w-full h-96">
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="last_month" fill="#8884d8" />
          <Bar dataKey="current_month" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompareBarChat;
