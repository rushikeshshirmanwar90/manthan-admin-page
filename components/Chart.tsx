// components/TrafficChart.tsx
"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

interface TrafficData {
  name: string;
  value: number;
  color: string;
}

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#8E5EA2", "#a25e78"];

const TrafficChart: React.FC = () => {
  const data: TrafficData[] = [
    { name: "The Metropolitan Manor", value: 5, color: "#FF6384" },
    { name: "The Loft Life", value: 10, color: "#36A2EB" },
    { name: "The Urban Haven", value: 8, color: "#FFCE56" },
    { name: "The Industrial Residence", value: 4, color: "#8E5EA2" },
    { name: "Other", value: 7, color: "#a25e78" },
  ];

  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Tooltip />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Flats</TableHead>
                <TableHead>Total Leads</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index} className="mt-10">
                  <TableCell className="flex items-center justify-start gap-3">
                    <div
                      style={{
                        backgroundColor: item.color,
                      }}
                      className="w-10 h-10 rounded-full"
                    ></div>
                    <div>{item.name}</div>
                  </TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TrafficChart;
