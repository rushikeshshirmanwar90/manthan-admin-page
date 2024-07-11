import React from "react";
import Sidebar from "@/components/Sidebar";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/Table";

const page = () => {
  const orders = [
    {
      id: "#P-124",
      section: "TopRoof",
      tableNum: "3",
      total: "₹1,800",
    },
    {
      id: "#P-125",
      section: "Bar",
      tableNum: "6",
      total: "₹2,800",
    },
    {
      id: "#P-165",
      section: "Outdoor",
      tableNum: "8",
      total: "₹2,580",
    },
    {
      id: "#P-124",
      section: "TopRoof",
      tableNum: "3",
      total: "₹1,800",
    },
    {
      id: "#P-125",
      section: "Bar",
      tableNum: "6",
      total: "₹2,800",
    },
    {
      id: "#P-165",
      section: "Outdoor",
      tableNum: "8",
      total: "₹2,580",
    },
  ];

  return (
    <div className="flex gap-4">
      <div className="w-[17%]">
        <Sidebar active={"Order"} />
      </div>
      <main className="flex-1 p-6 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Billing Id</TableHead>
                  <TableHead>Section</TableHead>
                  <TableHead>Table Number</TableHead>
                  <TableHead>Total Bill</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell className="font-medium">
                      {order.section}
                    </TableCell>
                    <TableCell className="font-medium">
                      {order.tableNum}
                    </TableCell>
                    <TableCell className="font-medium">{order.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;